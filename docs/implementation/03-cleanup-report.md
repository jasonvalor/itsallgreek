# Cleanup Report

Date: 2026-07-29
Branch: feat/complete-approved-design

## Removed Files

No tracked source files were removed in this pass.

## Replaced In Place

| File path | Why it changed | Referenced | Replacement |
| --- | --- | --- | --- |
| `app/page.tsx` | Removed prototype/internal copy and rebuilt the homepage around approved copy, imagery, and route CTAs. | Yes | Production-facing homepage sections. |
| `app/menu/page.tsx` | Removed internal data caveats and rebuilt menu presentation around typed data. | Yes | Page intro, category anchor, reusable menu cards, order CTA. |
| `app/about/page.tsx` | Removed implementation caveats from body copy. | Yes | Approved Dutch introduction, verified value themes, image layout. |
| `app/contact/page.tsx` | Removed source-note copy and improved semantic contact/hours/map area. | Yes | Reusable contact cards, opening hours, safe route search. |
| `app/order/page.tsx` | Replaced technical no-checkout language with customer-facing ordering guidance. | Yes | Phone-first order page with no fake checkout. |
| `app/not-found.tsx` | Refined the error layout to follow the approved dark scenic direction. | Yes | Large 404 state, image, blue divider, home CTA. |
| `components/ui/button.tsx` | Removed mojibake arrow and improved internal/external link handling. | Yes | Shared icon-based button primitive. |
| `lib/site.ts` | Removed duplicated/internal-facing data strings and fixed price encoding. | Yes | Single typed source of truth for business data, copy, menu, CTAs. |

## Dead Code

- No unused source components were found that could be safely deleted.
- `.next/`, `node_modules/`, Chrome profiles, and screenshot outputs are generated artifacts and are not part of the commit.
- The temporary `.codex/qa-check.mjs` script was used only for local QA experimentation and should remain untracked or be removed before commit.

## Assets

- No approved assets were removed.
- No deprecated `restaurant-night.png` usage exists in the live UI.
- No Next starter SVGs are referenced by the implementation.

## Dependencies

- No new dependencies were added.
- No dependencies were removed from `package.json`.
- `package-lock.json` was synchronized by `npm install` because `npm ci` reported the lockfile was out of sync.
