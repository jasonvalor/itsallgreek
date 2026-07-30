# Mobile Fidelity Report

Date: 2026-07-30
Branch: feat/mobile-approved-design-fidelity

## Screenshot Review

- Baseline screenshots captured in ignored local artifacts: `artifacts/mobile-fidelity/before/`
- After pass 1 captured at 390 x 844: `artifacts/mobile-fidelity/after/pass1/`
- After pass 2 captured at 390 x 844: `artifacts/mobile-fidelity/after/pass2/`
- Final after screenshots captured at 320, 360, 375, 390, and 430 widths: `artifacts/mobile-fidelity/after/final/`
- Routes captured: `/`, `/menu`, `/about`, `/contact`, `/order`, missing route, open mobile navigation.

## Shared Changes

- Added mobile tokens for page gutters, compact header height, title scale, accent line, and dark surfaces.
- Added `logo-dark-transparent.png` derived from the official logo for the dark header.
- Rebuilt the mobile header to remove the white logo tile and the visible hamburger box.
- Rebuilt the mobile nav overlay as a full-screen dark menu with icons, active state, Escape close, body scroll lock, focus trap, and focus return.
- Added a compact mobile footer that stays below the first mobile page composition.
- Added stable Playwright assertions for mobile visual structure and interaction.

## Route Results

### `/`

- Implemented composition: compact header, Dutch three-line heading, blue middle line, short two-line copy, one blue CTA, right-side cropped detail image, large salad image, specialities panel.
- Assets used: `food-collage.png`, `menu-salad.png`.
- Remaining differences: exact approved drink image is not available; heading is Dutch per project language rules.
- Final viewport result: usable at 320 through 430 px; no clipped title or CTA.

### `/menu`

- Implemented composition: title, blue underline, compact verified category tab, four image-left menu rows, blue prices, bottom outlined CTA.
- Assets used: all four menu images.
- Remaining differences: only one verified category is shown and descriptions use a neutral availability line where descriptions are missing.
- Final viewport result: 320 px rows remain readable with no horizontal overflow.

### `/about`

- Implemented composition: title, underline, contained restaurant image, bold intro, shorter supporting copy, three icon values, bottom CTA.
- Assets used: `restaurant-day.png`.
- Remaining differences: no unverified history or team details were added.
- Final viewport result: image, icon row, and CTA remain stable at 320 and 430 px.

### `/contact`

- Implemented composition: title, underline, compact contact rows, opening-hours row, dark map-style panel, bottom CTA.
- Assets used: inline icons and safe map treatment.
- Remaining differences: no verified real map embed exists.
- Final viewport result: long address wraps cleanly at 320 px.

### `/order`

- Implemented composition: title, underline, centered circular bag icon, short centered text, three check rows, bottom phone CTA.
- Assets used: inline bag/check icons.
- Remaining differences: no external order link is present because no verified URL exists.
- Final viewport result: calm vertical spacing with CTA near the bottom of the first viewport.

### 404

- Implemented composition: dark scenic mobile card, large 404, short Dutch error text, blue accent, compact home CTA.
- Assets used: `restaurant-day.png`.
- Remaining differences: no approved 404-specific image exists.
- Final viewport result: no generic Next.js 404; no footer intrusion in first viewport.

## Desktop Regression Notes

- Existing desktop page sections remain available at `md` and above.
- Shared header/footer still render desktop navigation and footer columns.
- Desktop widths planned for validation: 768, 1024, 1280, 1440.

## Accessibility Notes

- One visible `h1` per viewport per route.
- Header button retains `aria-expanded` and `aria-controls`.
- Mobile dialog uses `role="dialog"` and `aria-modal`.
- Escape closes the menu, link clicks close it, focus returns to the trigger, and tab focus is contained.
- Interactive targets remain at least 44 px.
- Images use meaningful alt text.

## Asset Limitations

- The official source logo has a white background and black lettering. The dark mobile derivative keeps the geometry and brand-blue mark, removes the flat background, and adapts monochrome lettering for dark-header contrast.
- No separate drink/detail image exists, so `food-collage.png` is cropped for the homepage detail.
- No verified full menu, map embed, online order URL, or 404-specific image exists.
