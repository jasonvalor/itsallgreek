# Main Protection

Date: 2026-07-30

## Existing State Before Changes

Public branch metadata for `main` reported:

- `protected: false`
- required status check contexts: none
- required status check checks: none
- no GitHub Actions workflows existed yet

The authenticated branch-protection detail endpoint could not be read because GitHub CLI is unavailable and unauthenticated public API access returned 401 for protection detail.

## Desired Protection

Protect `main` with a branch protection rule or repository ruleset that:

- requires Pull Requests before merging;
- requires status checks to pass;
- blocks force pushes;
- blocks branch deletion;
- allows Auto-merge;
- does not require approving reviews for the single-owner automated workflow;
- does not allow administrators to accidentally bypass required checks during normal Codex delivery.

## Required Status Checks

After this infrastructure branch is merged, require these exact checks:

- `quality`
- `browser-smoke`
- `Vercel`

Do not require:

- `Vercel Preview Comments`

Reason: `Vercel Preview Comments` only reports preview feedback/comment state. The real deployment readiness signal observed on PR commits is the commit status context `Vercel` with description `Deployment has completed`.

## Configuration Result

Automatic configuration was not performed because:

- `gh` is not installed locally;
- authentication and admin access could not be verified;
- changing protection without verified admin access could not be done safely.

## Required One-time Manual Setup

In GitHub:

1. Open `https://github.com/jasonvalor/itsallgreek/settings/branches`.
2. Add a branch protection rule for `main`, or create an equivalent repository ruleset.
3. Enable **Require a pull request before merging**.
4. Do not enable required approving reviews unless another reviewer is available.
5. Enable **Require status checks to pass before merging**.
6. Enable **Require branches to be up to date before merging** if desired.
7. Add required checks:
   - `quality`
   - `browser-smoke`
   - `Vercel`
8. Do not add `Vercel Preview Comments`.
9. Disable force pushes.
10. Disable branch deletion.
11. Avoid allowing administrators to bypass the rule for normal delivery.
12. Save the rule.

After saving, verify from a new Pull Request that GitHub lists these required checks before Auto-merge is enabled.

## CLI Verification Commands After Setup

```bash
gh api repos/jasonvalor/itsallgreek/branches/main --jq '.protected'
gh api repos/jasonvalor/itsallgreek/branches/main/protection
```

Do not enable Auto-merge for this infrastructure Pull Request until the rule exists and the required checks are visible.
