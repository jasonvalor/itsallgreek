# Implementation Gap Analysis

Date: 2026-07-29
Branch: feat/complete-approved-design

## Summary

The current implementation already has the required route skeleton, dark tokens, official logo usage, shared header/footer, and a centralized `lib/site.ts`. The main gap is production fidelity: multiple pages expose implementation caveats in customer-facing copy, the homepage does not follow the approved hero copy, the menu page reads like an internal data note, metadata is thin, and shared UI needs stronger token coverage and accessibility polish.

## Header

- Matches: sticky dark header, official logo, hamburger on mobile, desktop links, order CTA.
- Partial: scroll state exists, but the logo's white background differs from the transparent mark in the mockup.
- Missing: skip link integration, stronger full-screen menu focus containment, cleaner icon button semantics.
- Action: keep component, improve accessibility, refine visual density.

## Mobile Navigation

- Matches: full-screen dark menu, logo, close button, large vertical links, active route styling, body scroll lock, Escape close, close after navigation.
- Partial: focus moves to close button, but tab can leave the dialog.
- Missing: focus wrap within menu and clearer bottom order prominence.
- Action: rewrite only the interaction details needed.

## Desktop Navigation

- Matches: official logo left, horizontal nav, active state, order CTA.
- Partial: visual rhythm is generic compared with the approved board.
- Missing: no design-specific desktop source; must adapt carefully.
- Action: retain compact dark navigation, align with shared container widths.

## Logo

- Matches: `public/images/logo.png` is used with `next/image`.
- Partial: source asset has a white background, unlike the mockup rendering.
- Action: preserve official asset and document difference. Do not recreate with text.

## Homepage

- Matches: required sections exist: hero, feature cards, popular dishes, atmosphere, CTA.
- Conflicts: heading and copy differ from approved copy; section descriptions include implementation notes.
- Missing: tighter mockup-like hero composition, approved USP text, clearer blue emphasis, cleaner customer-facing menu fallback.
- Action: rebuild content hierarchy and visual treatment while preserving verified assets and data.

## Menu

- Matches: route exists, page heading exists, menu items use typed data and images, order CTA exists.
- Conflicts: visible "recovered source data" language is not production-facing.
- Missing: mockup-like category tabs/anchors, concise descriptions or unavailable state, stronger mobile row style.
- Action: use grouped verified data, neutral copy, anchor navigation.

## About

- Matches: route exists, restaurant image used, values shown, CTA present.
- Conflicts: mentions recovered source and limitations in customer-facing prose.
- Missing: approved copy, value icon row closer to mockup.
- Action: replace internal wording with approved Dutch copy and verified themes.

## Contact

- Matches: contact data, opening hours, contact actions.
- Conflicts: visible source disclaimer.
- Missing: map placeholder/card styled like mockup, reusable contact item pattern, page intro from approved copy.
- Action: add a dark map placeholder using verified address only, no fake map URL.

## Order

- Matches: no fake checkout, phone CTA, menu CTA.
- Conflicts: internal implementation disclaimer is too prominent.
- Missing: approved ordering tone, benefit list, icon callout, clear unavailable external ordering state.
- Action: keep no-fake-checkout behavior but make it customer-facing.

## Footer

- Matches: logo, nav, contact, opening hours, description.
- Partial: lacks copyright and order CTA.
- Action: add dynamic copyright and tighten layout.

## 404

- Matches: route exists, large 404, image, blue accent, home CTA.
- Partial: composition is carded rather than matching full-width approved image band.
- Action: refine sizing and copy.

## Design Tokens

- Matches: core dark colors, font variables, radii, spacing, shadows.
- Missing: error, overlay, header, card, menu, divider, image overlay, z-index tokens.
- Action: expand CSS custom properties and Tailwind theme aliases.

## Fonts

- Matches: Bebas Neue and Inter via `next/font`.
- Gaps: none significant.
- Action: keep.

## Components

- Reuse: `Container`, `Button`, `SectionHeading`, `SiteLogo`, `SiteHeader`, `MobileMenu`, `SiteFooter`.
- Improve: `Button` arrow should avoid mojibake and support external anchors cleanly.
- Create only if useful: small `Icon`, `PageIntro`, `MenuItemCard`, `ContactItem`, `OpeningHours`, `OrderCallout`.

## Assets

- Matches: approved image assets exist and are used.
- Missing: no map image, no favicon, no transparent logo.
- Avoid: deprecated `restaurant-night.png`, starter SVGs, remote stock imagery.

## Metadata

- Matches: root metadata and several route metadata exports exist.
- Missing: Open Graph foundation, fuller page descriptions, metadata for 404 is not applicable through not-found export.
- Action: improve root and route metadata with verified content.

## Accessibility

- Matches: semantic layout, focus styles, accessible menu basics.
- Missing: skip link, focus containment in menu, stronger visible labels/icons, consistent aria-current.
- Action: implement baseline improvements.

## Responsive Behaviour

- Matches: mobile-first grids and container classes.
- Risks: 320px heading/button overflow, menu rows, contact actions.
- Action: verify 320/390 mobile and 1440 desktop with local server screenshots/checks.

## Obsolete Or Removable

- No certain removable source files found during this pass.
- `.next/` and `node_modules/` are generated but already gitignored; they should not be committed.
- Do not remove approved design references, migration docs, backup branches, or verified data.
