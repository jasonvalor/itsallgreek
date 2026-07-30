# Vercel Production Flow

Date: 2026-07-30

## Confirmed Integration

The repository is connected to Vercel through the native GitHub integration.

Evidence from public GitHub metadata:

- Vercel creates commit statuses with context `Vercel`.
- Vercel creates GitHub deployments for `Preview` and `Production`.
- PR #2 head commit `a45b44ce1167502f69ea81492613a16898342fad` had a successful Preview deployment.
- Main merge commit `00ea2ba3a4f21a7b68c5dfacf2d303baadf7f158` had a successful Production deployment.
- Repository homepage is `https://itsallgreek.vercel.app`.
- `https://itsallgreek.vercel.app` responded with HTTP 200 during audit.

## Preview Behaviour

Expected flow:

1. Push a feature branch.
2. Open a Pull Request targeting `main`.
3. Vercel creates a Preview Deployment.
4. GitHub receives the `Vercel` commit status.
5. Vercel may also create `Vercel Preview Comments`; that check is feedback-related and should not be required as deployment readiness.

## Production Behaviour

Expected flow:

1. Pull Request passes required checks.
2. GitHub Auto-merge merges the PR into `main`.
3. Vercel sees the new `main` commit.
4. Vercel creates a Production deployment.
5. The fixed domain updates:

```text
https://itsallgreek.vercel.app
```

The production URL does not update before the merge because Vercel serves branch changes from Preview deployments until the commit reaches `main`.

## Expected Delay

The production URL can take several minutes to reflect a change because:

- GitHub Actions must finish;
- Auto-merge must occur;
- Vercel must build;
- Vercel must assign the Production domain;
- browser or CDN caching can briefly show an older version.

## Confirm A Production Deployment

Use the helper:

```bash
npm run deployment-status
```

Or check manually:

1. Open the merged commit on GitHub.
2. Open the Vercel deployment status for that commit.
3. Confirm the environment is `Production`.
4. Confirm the deployment state is successful or ready.
5. Open `https://itsallgreek.vercel.app`.

## Identify The Deployed Commit

GitHub deployments expose the commit SHA. The deployed commit should match the current `main` commit after merge.

Manual check:

```bash
git checkout main
git pull --ff-only origin main
git rev-parse HEAD
npm run deployment-status
```

## Rollback

Use one of the documented recovery paths in:

```text
docs/workflow/07-emergency-rollback.md
```

Do not use `vercel --prod` as a normal delivery workaround. Do not add Vercel tokens to this repository while the native integration is working.
