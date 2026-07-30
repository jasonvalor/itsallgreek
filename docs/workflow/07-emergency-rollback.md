# Emergency Rollback

Date: 2026-07-30

Do not reset, force-push, or rewrite `main`. Use one of these recovery paths.

## Path A - Vercel Rollback

Use this when the bad code is already deployed and a previous Production Deployment should be restored quickly.

1. Open the Vercel dashboard.
2. Select the `itsallgreek` project.
3. Open **Deployments**.
4. Filter or identify the previous known-good Production Deployment.
5. Open that deployment.
6. Use Vercel's rollback or promote/restore control to make that deployment current.
7. Confirm `https://itsallgreek.vercel.app` loads the restored version.
8. Follow up with a Git revert Pull Request so `main` matches the restored production state.

## Path B - Git Revert

Use this when the bad change should be removed from `main` through the normal reviewed workflow.

```bash
git checkout main
git pull --ff-only origin main
git checkout -b revert/<description>
git revert <bad-merge-commit>
git push -u origin revert/<description>
```

Then:

1. Create a Pull Request targeting `main`.
2. Let `quality`, `browser-smoke`, and Vercel checks run.
3. Enable Auto-merge after required checks are satisfied.
4. Confirm Vercel deploys the reverted `main` commit to Production.

## Notes

- Prefer Vercel rollback for immediate customer-facing recovery.
- Prefer Git revert for source-of-truth recovery.
- Never force-push `main`.
- Never delete backup branches.
