#!/usr/bin/env node
import { spawnSync } from "node:child_process";
import process from "node:process";

const args = new Set(process.argv.slice(2));
const isDryRun = args.has("--dry-run");
const skipValidation = args.has("--skip-validation");
const allowUnprotectedAutoMerge = args.has("--allow-unprotected-auto-merge");
const npmCommand = process.platform === "win32" ? "npm.cmd" : "npm";

function run(command, commandArgs = [], options = {}) {
  const printable = [command, ...commandArgs].join(" ");
  if (isDryRun && options.mutates) {
    console.log(`[dry-run] ${printable}`);
    return { stdout: "", status: 0 };
  }

  const result = spawnSync(command, commandArgs, {
    encoding: "utf8",
    shell: false,
    stdio: options.capture ? ["ignore", "pipe", "pipe"] : "inherit",
    ...options,
  });

  if (result.error) {
    throw result.error;
  }

  if (result.status !== 0 && !options.allowFailure) {
    const stderr = result.stderr ? `\n${result.stderr.trim()}` : "";
    throw new Error(`Command failed: ${printable}${stderr}`);
  }

  return result;
}

function capture(command, commandArgs = [], options = {}) {
  return run(command, commandArgs, { ...options, capture: true }).stdout.trim();
}

function commandExists(command) {
  const lookup = process.platform === "win32" ? "where.exe" : "which";
  const result = spawnSync(lookup, [command], { encoding: "utf8", shell: false, stdio: "ignore" });
  return result.status === 0;
}

function getOriginWebUrl() {
  const remoteUrl = capture("git", ["remote", "get-url", "origin"]);
  const match = remoteUrl.match(/github\.com[:/](.+?)\/(.+?)(?:\.git)?$/);

  if (!match) {
    return null;
  }

  return `https://github.com/${match[1]}/${match[2]}`;
}

function getProtectionState() {
  if (!commandExists("gh")) {
    return { known: false, protected: false, reason: "GitHub CLI is not installed." };
  }

  const result = run(
    "gh",
    ["api", "repos/jasonvalor/itsallgreek/branches/main", "--jq", ".protected"],
    { capture: true, allowFailure: true },
  );

  if (result.status !== 0) {
    return { known: false, protected: false, reason: "Could not read branch protection through GitHub CLI." };
  }

  return { known: true, protected: result.stdout.trim() === "true" };
}

const branch = capture("git", ["branch", "--show-current"]);
if (!branch) {
  throw new Error("No current branch found.");
}

if (branch === "main") {
  throw new Error("Refusing to finish-task on main. Create a feature or fix branch first.");
}

const status = capture("git", ["status", "--porcelain"]);
if (status) {
  throw new Error("Working tree has uncommitted changes. Commit intentionally before running finish-task.");
}

if (!skipValidation) {
  run(npmCommand, ["ci"]);
  run(npmCommand, ["run", "lint"]);
  run(npmCommand, ["run", "typecheck"]);
  run(npmCommand, ["run", "build"]);
  run(npmCommand, ["run", "test:e2e"]);
}

run("git", ["push", "-u", "origin", branch], { mutates: true });

const originWebUrl = getOriginWebUrl();
const compareUrl = originWebUrl ? `${originWebUrl}/compare/main...${branch}?expand=1` : null;

if (!commandExists("gh")) {
  console.log("GitHub CLI is not installed. Branch pushed, but PR creation and auto-merge are blocked.");
  if (compareUrl) {
    console.log(`Create the PR here: ${compareUrl}`);
  }
  process.exit(0);
}

const authStatus = run("gh", ["auth", "status", "--hostname", "github.com"], {
  allowFailure: true,
  capture: true,
});
if (authStatus.status !== 0) {
  console.log("GitHub CLI is not authenticated. Branch pushed, but PR creation and auto-merge are blocked.");
  console.log("Run: gh auth login --hostname github.com --git-protocol https --scopes repo");
  if (compareUrl) {
    console.log(`Create the PR here: ${compareUrl}`);
  }
  process.exit(0);
}

let prJson = run("gh", ["pr", "view", "--json", "number,url,state,autoMergeRequest,mergeStateStatus"], {
  allowFailure: true,
  capture: true,
});

if (prJson.status !== 0) {
  const title = branch.replace(/[-_/]+/g, " ").replace(/\b\w/g, (letter) => letter.toUpperCase());
  run(
    "gh",
    [
      "pr",
      "create",
      "--base",
      "main",
      "--head",
      branch,
      "--title",
      title,
      "--body",
      "Automated delivery PR created by the repository finish-task script.",
    ],
    { mutates: true },
  );
  prJson = run("gh", ["pr", "view", "--json", "number,url,state,autoMergeRequest,mergeStateStatus"], {
    capture: true,
  });
}

const pr = JSON.parse(prJson.stdout);
console.log(`Pull Request: ${pr.url}`);

const protection = getProtectionState();
if (!protection.protected && !allowUnprotectedAutoMerge) {
  console.log("Auto-merge was not enabled because main protection is not verified.");
  console.log("Configure branch protection first, then rerun finish-task or use --allow-unprotected-auto-merge intentionally.");
  process.exit(0);
}

if (pr.autoMergeRequest) {
  console.log("Auto-merge is already enabled for this Pull Request.");
} else {
  const mergeResult = run("gh", ["pr", "merge", "--auto", "--squash"], {
    allowFailure: true,
    capture: true,
    mutates: true,
  });

  if (mergeResult.status === 0) {
    console.log("Auto-merge enabled with squash merge.");
  } else {
    console.log("Auto-merge could not be enabled.");
    console.log(mergeResult.stderr.trim());
  }
}
