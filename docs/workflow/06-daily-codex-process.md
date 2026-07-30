# Daily Codex Process

Date: 2026-07-30

## Normal Development Experience

1. Open `C:\Users\Gebruiker\Documents\Projects\itsallgreek-integration` in VS Code.
2. Ensure no unrelated local changes exist:

```bash
git status --short --branch
```

3. Give Codex a website-development prompt.
4. Codex creates a feature branch from an up-to-date `main`.
5. Codex implements the requested changes.
6. Codex runs validation:

```bash
npm ci
npm run lint
npm run typecheck
npm run build
npm run test:e2e
```

7. Codex commits and pushes the branch.
8. Codex opens a Pull Request targeting `main`.
9. GitHub Actions runs `quality` and `browser-smoke`.
10. Vercel creates a Preview Deployment.
11. GitHub Auto-merge merges after required checks pass.
12. Vercel deploys the new `main` commit to Production.
13. Open `https://itsallgreek.vercel.app` on desktop or mobile.
14. Confirm the new version.

## Update Local Main After A Merge

Before the next task:

```bash
git checkout main
git pull --ff-only origin main
```

Then start the next branch from the updated `main`.

## Why Production May Not Update Immediately

The fixed production URL may take several minutes to update because:

- GitHub Actions must finish;
- Auto-merge must occur;
- Vercel must build;
- Vercel must assign the Production domain;
- browser caching may briefly show an older version.

## Hard Refresh

Desktop browsers:

- `Ctrl+F5`
- `Ctrl+Shift+R`

Mobile browsers:

- close and reopen the tab;
- use a private tab when necessary;
- clear site data only as a last resort.

## Current One-time Prerequisite

The local machine does not currently have GitHub CLI installed. Until `gh` is installed and authenticated, Codex can push branches but cannot fully automate PR creation or Auto-merge from this machine.

Install and authenticate:

```powershell
winget install --id GitHub.cli
```

```bash
gh auth login --hostname github.com --git-protocol https --scopes repo
```
