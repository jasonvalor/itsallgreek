# Redesign Summary

Summary date: 2026-07-29

## Branches

- Backup branch: backup/home-local-source
- Redesign branch: feat/full-dark-redesign
- Base branch: origin/main

## Content Preserved

- Restaurant name: It's All Greek
- Location: Nieuwerkerk aan den IJssel
- Address: Winkelcentrum De Reigerhof, Nieuwerkerk a/d IJssel
- Phone: 0180 - 315 127
- Email: info@itsallgreek.nl
- Opening hours from the recovered source
- Dutch page copy themes from recovered docs
- Recovered menu item names and prices present in lib/site.ts
- Recovered documentation in docs/00-PROJECT-CHARTER.md through docs/10-ASSETS.md

## Functionality Preserved

- GitHub foundation responsive header structure
- Accessible mobile menu foundation with Escape handling, focus movement, body scroll lock, close after navigation, and active route state
- App Router architecture
- next/font typography setup
- Centralized site data pattern from the local source

## Components Reused

- components/layout/container.tsx
- components/layout/site-header.tsx
- components/layout/mobile-menu.tsx
- components/ui/button.tsx
- components/ui/section-heading.tsx

## Components Replaced Or Rewritten

- components/brand/site-logo.tsx: replaced temporary text logo with the official image asset.
- app/page.tsx: replaced placeholder foundation preview with complete homepage.
- app/layout.tsx: updated global metadata, Dutch language, fonts, shared header/footer.
- app/globals.css: refactored into final dark token system and viewport-safe containers.
- components/layout/site-footer.tsx: added shared footer.
- app/menu/page.tsx: added menu route.
- app/about/page.tsx: added about route.
- app/contact/page.tsx: added contact route.
- app/order/page.tsx: added order route with neutral no-fake-checkout state.
- app/not-found.tsx: added styled 404 page.

## Files Removed

- app/favicon.ico: removed because the image could not be decoded by the Next.js build.
- public/file.svg: unused Next starter asset.
- public/globe.svg: unused Next starter asset.
- public/next.svg: unused Next starter asset.
- public/vercel.svg: unused Next starter asset.
- public/window.svg: unused Next starter asset.

## Files Replaced

- app/page.tsx
- app/layout.tsx
- app/globals.css
- components/brand/site-logo.tsx
- components/layout/site-header.tsx
- components/layout/mobile-menu.tsx
- components/ui/button.tsx
- components/ui/section-heading.tsx
- package-lock.json was synchronized after GitHub main's lockfile failed npm ci.

## Assets Retained

- design/01-home/dark-mobile-all-pages-approved.png
- public/images/logo.png
- public/images/restaurant-day.png
- public/images/food-collage.png
- public/images/menu-gyros.png
- public/images/menu-mixed-grill.png
- public/images/menu-salad.png
- public/images/menu-souvlaki.png

## Assets Removed Or Not Retained In Final Branch

- Default starter SVG assets were removed.
- app/favicon.ico was removed because it failed image decoding during build.
- restaurant-night.png was not copied into the final redesign branch because recovered docs mark it deprecated and not for UI use. It remains preserved on backup/home-local-source.
- Older local mockups were not copied into the final redesign branch because the GitHub dark mockup is the approved source of truth. They remain preserved on backup/home-local-source.

## Dependencies Changed

- package.json dependencies were not changed.
- package-lock.json was updated by npm install to fix the lockfile sync issue that caused npm ci to fail on GitHub main.
- No new dependencies were added.
- No dependencies were removed from package.json.
- npm reports 12 high severity audit findings; no audit fix was run.

## Routes Completed

- /
- /menu
- /about
- /contact
- /order
- app/not-found.tsx

## Accessibility Improvements

- html lang set to nl.
- Semantic page structure with main, section, article, dl, dt, and dd.
- Page-level metadata added.
- Official logo has meaningful alt text.
- Food and restaurant images use meaningful alt text.
- Interactive targets are at least 44px high.
- Focus-visible styling retained.
- Mobile menu retains Escape support, focus movement, focus return path, body scroll lock, close-after-navigation, and active route state.
- Order page avoids fake checkout, fake payments, and fake data collection.

## Validation Results

Source and backup validation:

- Original source npm run lint: passed.
- Original source npm run build: not run in-place because it writes .next/ and the source folder must not be modified.
- Backup branch copy npm ci: passed.
- Backup branch copy npm run lint: passed.
- Backup branch copy npm run build: passed.

Redesign validation:

- GitHub main npm ci before changes: failed because package-lock.json was out of sync.
- Redesign branch npm install: passed and synchronized package-lock.json.
- Redesign branch npm ci: passed.
- Redesign branch npm run lint: passed.
- Redesign branch npm run build: passed.
- Route checks on temporary dev server: /, /menu, /about, /contact, and /order returned 200; a missing page returned 404.
- Chrome DevTools mobile viewport check: innerWidth 390, scrollWidth 390, no horizontal overflow, mobile menu button visible, no console/runtime errors collected.
- Chrome DevTools screenshots reviewed for mobile and desktop homepage.

## Known Limitations

- Full official menu categories and descriptions are not available in the recovered source.
- The menu page clearly labels the current menu as a selection from recovered source data.
- No online ordering URL is verified; the order page uses a neutral state and phone CTA.
- No map URL is verified; no map link was invented.
- Reviews, awards, history, promotions, and discounts were not added because they are not verified.
- A replacement favicon should be created from an approved asset before production if desired.

## Missing Business Data

- Verified full official menu.
- Verified online ordering URL.
- Verified map URL.
- Verified social URLs.
- Verification for the recovered WhatsApp number before surfacing it in the UI.

## Notes

No merge to main was performed. No force push was performed. No deployment was performed manually.