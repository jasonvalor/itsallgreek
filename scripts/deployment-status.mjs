#!/usr/bin/env node
import { spawnSync } from "node:child_process";

const owner = "jasonvalor";
const repo = "itsallgreek";
const productionUrl = "https://itsallgreek.vercel.app";

function capture(command, args = [], options = {}) {
  const result = spawnSync(command, args, {
    encoding: "utf8",
    shell: false,
    stdio: ["ignore", "pipe", "pipe"],
    ...options,
  });

  if (result.error || result.status !== 0) {
    return null;
  }

  return result.stdout.trim();
}

function commandExists(command) {
  const lookup = process.platform === "win32" ? "where.exe" : "which";
  return spawnSync(lookup, [command], { stdio: "ignore", shell: false }).status === 0;
}

async function github(path) {
  const response = await fetch(`https://api.github.com/repos/${owner}/${repo}${path}`, {
    headers: {
      "Accept": "application/vnd.github+json",
      "User-Agent": "itsallgreek-deployment-status",
    },
  });

  if (!response.ok) {
    return null;
  }

  return response.json();
}

async function main() {
  const branch = capture("git", ["branch", "--show-current"]) ?? "unknown";
  const commit = capture("git", ["rev-parse", "HEAD"]) ?? "unknown";
  const mainCommit = capture("git", ["rev-parse", "origin/main"]) ?? "unknown";

  console.log(`Current branch: ${branch}`);
  console.log(`Current commit: ${commit}`);
  console.log(`origin/main commit: ${mainCommit}`);

  if (commandExists("gh")) {
    const pr = capture("gh", ["pr", "view", "--json", "number,url,state,mergedAt,autoMergeRequest,mergeStateStatus"], {
      env: process.env,
    });

    if (pr) {
      const parsed = JSON.parse(pr);
      console.log(`Pull Request: #${parsed.number} ${parsed.url}`);
      console.log(`PR state: ${parsed.state}`);
      console.log(`Auto-merge: ${parsed.autoMergeRequest ? "enabled" : "not enabled"}`);
      console.log(`Merge state: ${parsed.mergeStateStatus ?? "unknown"}`);
      console.log(`Merged at: ${parsed.mergedAt ?? "not merged"}`);
    } else {
      console.log("Pull Request: not found for current branch through GitHub CLI");
    }
  } else {
    console.log("GitHub CLI: not installed, PR-specific status unavailable");
  }

  const statuses = await github(`/statuses/${commit}`);
  if (statuses) {
    console.log("Current commit statuses:");
    for (const status of statuses.slice(0, 10)) {
      console.log(`- ${status.context}: ${status.state} (${status.description ?? "no description"})`);
    }
  }

  const deployments = await github(`/deployments?per_page=20`);
  const latestProduction = deployments?.find((deployment) => deployment.environment === "Production") ?? null;

  if (latestProduction) {
    const deploymentStatuses = await github(`/deployments/${latestProduction.id}/statuses`);
    const latestStatus = deploymentStatuses?.[0] ?? null;
    console.log(`Latest production deployment commit: ${latestProduction.sha}`);
    console.log(`Latest production deployment state: ${latestStatus?.state ?? "unknown"}`);
    console.log(`Latest production deployment URL: ${latestStatus?.environment_url ?? latestStatus?.target_url ?? "unknown"}`);
  } else {
    console.log("Latest production deployment: not found through public GitHub deployment metadata");
  }

  try {
    const response = await fetch(productionUrl, { redirect: "follow" });
    console.log(`Production URL: ${response.status} ${response.url}`);
  } catch (error) {
    console.log(`Production URL check failed: ${error.message}`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
