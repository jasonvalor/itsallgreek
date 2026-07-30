# Codex Delivery Workflow

This repository uses a Pull Request based delivery flow. Normal website-development prompts must not push directly to `main`.

## Default Workflow

For every future website-development prompt:

1. Check the working tree with `git status --short --branch`.
2. Confirm no unrelated local changes would be lost.
3. Fetch the remote with `git fetch origin`.
4. Switch to `main`.
5. Update `main` with `git pull --ff-only origin main`.
6. Create a descriptive feature or fix branch.
7. Implement the user's prompt completely on that branch.
8. Run `npm ci`.
9. Run `npm run lint`.
10. Run `npm run typecheck`.
11. Run `npm run build`.
12. Run `npm run test:e2e`.
13. Resolve any failures caused by the change.
14. Review the full diff.
15. Check for secrets before committing.
16. Commit logically.
17. Push the branch.
18. Create a Pull Request targeting `main`.
19. Enable Auto-merge for that Pull Request after required checks are configured.
20. Use squash merge unless repository policy changes.
21. Wait for or inspect required checks when practical.
22. Report the Pull Request URL.
23. Report the Vercel Preview URL when available.
24. Report whether Auto-merge is enabled.
25. Report whether the Pull Request has merged.
26. Report whether a Production Deployment has started.
27. Report whether `https://itsallgreek.vercel.app` has updated.

## Hard Rules

- Never make normal feature changes directly on `main`.
- Never force-push.
- Never rewrite Git history.
- Never bypass branch protection.
- Never force-merge when checks fail.
- Never deploy broken code directly to Production.
- Never run `vercel --prod` as a shortcut for normal website delivery.
- Never store GitHub or Vercel tokens in repository files.
- Never silently omit the push, Pull Request, or Auto-merge steps.
- Clearly state any step that could not be completed.

## Helper Scripts

After committing a finished branch, Codex may run:

```bash
npm run finish-task
```

The script verifies the branch is not `main`, requires a clean working tree, runs validation, pushes the branch, creates or discovers the Pull Request, and enables Auto-merge only when GitHub CLI access and branch protection permit it.

To inspect delivery state:

```bash
npm run deployment-status
```

## GitHub CLI Fallback

If GitHub CLI is unavailable or unauthenticated:

1. Push the branch with `git push -u origin <branch>`.
2. Provide the direct compare URL:

```text
https://github.com/jasonvalor/itsallgreek/compare/main...<branch>?expand=1
```

3. State that PR creation and Auto-merge are blocked until GitHub CLI is installed and authenticated.
4. Ask the owner to run:

```bash
gh auth login --hostname github.com --git-protocol https --scopes repo
```

Automated delivery is not fully self-service until GitHub CLI authentication and repository protection settings are complete.
