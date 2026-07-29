# Codebase Audit

Audit date: 2026-07-29

## Scope

Audited sources:

- Preserved local source branch: backup/home-local-source
- Current GitHub foundation: origin/main
- Approved design reference: design/01-home/dark-mobile-all-pages-approved.png

## Summary

The GitHub foundation contained the approved dark visual direction, typography tokens, layout primitives, and accessible mobile menu foundation, but only a placeholder homepage and no content routes. The preserved local source contained useful It's All Greek business data, local documentation, logo, restaurant imagery, and menu image assets, but it was homepage-only and still carried starter metadata and provisional menu/order links.

The redesign branch keeps the GitHub dark design foundation, restores verified source content and assets, removes obsolete starter assets, and implements the required App Router pages.

## Useful Source Files

- lib/site.ts from backup/home-local-source: source of business data, opening hours, feature copy, and menu items.
- docs/00-PROJECT-CHARTER.md through docs/10-ASSETS.md: preserved project requirements, content rules, page rules, and asset rules.
- public/images/logo.png: official logo asset.
- public/images/restaurant-day.png: approved homepage/restaurant image.
- public/images/food-collage.png and menu images: retained as temporary menu photography documented in recovered assets docs.

## Useful GitHub Foundation Files

- design/01-home/dark-mobile-all-pages-approved.png: primary visual source of truth, retained unchanged.
- app/globals.css: token approach retained and expanded.
- app/layout.tsx: next/font approach retained and updated for Dutch metadata/global footer.
- components/layout/site-header.tsx: reused and refactored for official logo and Dutch labels.
- components/layout/mobile-menu.tsx: reused and refactored while preserving Escape support, focus movement, body scroll lock, close-after-navigation, and active-route behavior.
- components/layout/container.tsx, components/ui/button.tsx, components/ui/section-heading.tsx: reused and refined.

## Useful Content And Business Data

Preserved from the local source:

- Restaurant name: It's All Greek
- Location: Nieuwerkerk aan den IJssel
- Address: Winkelcentrum De Reigerhof, Nieuwerkerk a/d IJssel
- Phone: 0180 - 315 127
- Email: info@itsallgreek.nl
- Opening hours from recovered data
- Feature themes: authentic kitchen, family atmosphere, fresh preparation, central location
- Menu item names and prices present in recovered data

Uncertain or unavailable:

- Full official menu and categories are not present.
- Real online ordering URL is not present; placeholder links were not used.
- Map URL is not present; no map link was invented.
- Reviews, awards, detailed history, promotions, and discounts are not present; none were added.

## Duplicate Files And Conflicts

Same-path conflicts between GitHub main and the local source were resolved during the backup phase and documented in docs/migration/01-home-source-conflicts.txt on backup/home-local-source.

For the redesign branch:

- GitHub main source files were used as the structural base.
- Local source data/docs/assets were selectively restored.
- Older local design mockups were not copied into the redesign branch to avoid competing with the GitHub-approved dark design. They remain preserved on backup/home-local-source.

## Dead Code And Obsolete Starter Files

The default Next starter SVGs were unreferenced and removed from the redesign branch.

The GitHub main homepage was a placeholder foundation preview and was replaced with the actual restaurant homepage.

The text-based temporary logo placeholder was replaced with the official logo image asset.

## Missing Pages And Broken Routes

Before redesign:

- Only / existed on GitHub main.
- /menu, /about, /contact, /order, and app/not-found.tsx were missing.

After redesign:

- / implemented
- /menu implemented
- /about implemented
- /contact implemented
- /order implemented
- app/not-found.tsx implemented

## Dependencies

- package.json dependency declarations were not changed.
- package-lock.json was updated by npm install because npm ci on GitHub main failed due an out-of-sync lockfile.
- No major upgrades were performed.
- No new dependencies were added.
- No dependencies were removed from package.json.

## Accessibility Issues Found

Found:

- Placeholder pages lacked real page hierarchy and routes.
- Header logo was text-based temporary branding instead of the official image.
- Missing routes had no page-level metadata or semantic content.
- Order flow could have implied fake ordering if not handled carefully.

Addressed:

- Dutch html lang attribute.
- Page-specific metadata.
- Semantic main, section, article, dl/dt/dd structures.
- Meaningful image alt text.
- 44px minimum interactive targets.
- Focus-visible styles.
- Mobile menu Escape support, focus movement, body scroll lock, and close-after-navigation.
- No fake checkout or fake payment flow.

## Metadata And SEO

- Starter metadata was replaced with Dutch restaurant metadata.
- Route-level metadata was added for menu, about, contact, and order pages.
- No unsupported business claims or reviews were added.

## Removal Decisions

| File path | Why obsolete | Referenced | Replacement | Final decision |
| --- | --- | --- | --- | --- |
| public/file.svg | Default Next starter asset | No | Real restaurant/logo imagery | removed |
| public/globe.svg | Default Next starter asset | No | Real restaurant/logo imagery | removed |
| public/next.svg | Default Next starter asset | No | Real restaurant/logo imagery | removed |
| public/vercel.svg | Default Next starter asset | No | Real restaurant/logo imagery | removed |
| public/window.svg | Default Next starter asset | No | Real restaurant/logo imagery | removed |
| app/favicon.ico | Build failed because the image could not be decoded by Next.js | Auto-detected by App Router | No replacement favicon yet; official logo remains in UI | removed |
| GitHub placeholder homepage content in app/page.tsx | Foundation preview, not production restaurant content | Yes | Complete homepage using recovered content and approved assets | replaced |
| Temporary text logo in components/brand/site-logo.tsx | Docs require official logo asset, not font recreation | Yes | public/images/logo.png rendered with next/image | replaced |
| restaurant-night.png from local source | Recovered docs mark it deprecated and not for UI use | No in redesign branch | restaurant-day.png | not retained in final branch, preserved on backup branch |
| Older local mockups design/01-home/01-home-approved.png.png and design/02-pages/02-pagina's-approved.png.png | Superseded by GitHub approved dark design | No in redesign branch | design/01-home/dark-mobile-all-pages-approved.png | not retained in final branch, preserved on backup branch |

## Refactoring Decisions

| File path | Purpose | Decision |
| --- | --- | --- |
| app/globals.css | Global tokens/styles | refactored to keep approved dark tokens and remove decorative background gradients |
| app/layout.tsx | Root layout and metadata | refactored for Dutch metadata, official fonts, shared footer |
| components/layout/site-header.tsx | Responsive navigation | refactored, retained as client component |
| components/layout/mobile-menu.tsx | Mobile menu interaction | refactored, retained as client component |
| components/ui/button.tsx | Link/native button primitive | refactored with arrow affordance and variants |
| components/ui/section-heading.tsx | Reusable heading block | refactored for approved page hierarchy |
| lib/site.ts | Business and menu data | added as single typed data source |
| types/site.ts | Shared content types | added |

## Uncertain Files

- Recovered menu image assets are documented as temporary photography in the local docs; retained but treated as provisional.
- WhatsApp number exists in recovered source data but is not surfaced in the current UI because verification is uncertain.
- Full official menu categories are not available.
- Online ordering URL is not available.