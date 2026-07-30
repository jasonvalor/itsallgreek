# GitHub Auto-merge

Date: 2026-07-30

## Desired State

Repository Auto-merge should be enabled so future Codex-created Pull Requests can merge automatically after required checks pass.

## Local Tooling Result

GitHub CLI is not installed or not on PATH:

```text
gh : The term 'gh' is not recognized as the name of a cmdlet, function, script file, or operable program.
```

Because `gh` is unavailable:

- GitHub authentication could not be checked.
- Repository administration access could not be checked.
- Repository Auto-merge could not be inspected or enabled.
- Auto-merge could not be enabled for this infrastructure branch.

## Required One-time Owner Action

Install GitHub CLI:

```powershell
winget install --id GitHub.cli
```

Authenticate:

```bash
gh auth login --hostname github.com --git-protocol https --scopes repo
```

Verify:

```bash
gh auth status --hostname github.com
gh repo view jasonvalor/itsallgreek
```

Enable repository Auto-merge in GitHub:

1. Open `https://github.com/jasonvalor/itsallgreek/settings`.
2. Go to **General**.
3. Under **Pull Requests**, enable **Allow auto-merge**.
4. Save the setting.

If using GitHub CLI after authentication, inspect repository settings first and use the supported GitHub API only if the account has admin rights. Do not store tokens in repository files.

## Future PR Auto-merge Command

After branch protection is configured and a PR exists:

```bash
gh pr merge --auto --squash
```

The repository helper `npm run finish-task` runs this command only after the branch is pushed and a PR exists, and it refuses to enable auto-merge when `main` protection is not verified.
