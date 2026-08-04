# Approved PDF Page Analysis

Date: 2026-08-04
Branch: `feat/integrate-approved-page-pdfs`

The approved PDFs are preserved in `design/approved-pages/` and contain high-resolution embedded page images. They are visual references only; the live site remains semantic React, TypeScript, Next.js, CSS and real text.

## Shared Mobile Measurements

- Mobile route artboards: about `916-952px` wide by `2708px` high, implemented as a dark framed panel around `390px` review width.
- Shared mobile frame: near-black `#090A0B` to `#0F0F10`, subtle `2px` dark border, about `22px` CSS radius at review size.
- Mobile gutters: about `37px` at `390px`, responsive down to `320px`.
- Header: about `118px` high at `390px`, transparent logo about `118px` rendered width, hamburger visible icon about `32px` with a `44px` hit area.
- Titles: Bebas Neue uppercase, about `53-58px` at `390px`, line-height around `0.9`.
- Accent rule: blue `#0D73C8`, about `50px` wide by `3-4px` high.
- Buttons: Inter uppercase, blue filled or transparent with blue border, about `56-61px` high with arrow icon.

## 01 Homepage

- Target route: `/`
- Source image: `940x2708`, PDF media box `235x677`.
- Section order: compact header, three-line heading, blue middle line, two-line supporting copy, blue CTA, right detail image, large dish image, specialties panel with three icon columns.
- Component hierarchy: `SiteHeader`, page `main`, `mobile-approved-page`, hero text, detail image, main food image, `MobileValueIcons`, `SiteFooter`.
- Approx measurements at `390px`: heading starts around `160px`; CTA about `206x55`; dish image starts around `540px`; specialties panel starts around `880px`.
- Colours: deep black background, white text, brand blue emphasis and icons, subtle grey borders.
- Image treatment: local `menu-salad.png` for the large dish; local `mobile-drink-detail.png` for the narrow right detail.
- Current differences resolved: removed desktop photo hero, full-width mobile layout, smaller header/logo, smaller typography and too-high food image.
- Asset limitations: exact PDF drink and salad art are not present as standalone approved assets.

## 02 Menu

- Target route: `/menu`
- Source image: `916x2708`, PDF media box `229x677`.
- Section order: header, `ONS MENU`, accent rule, compact category nav, stacked menu rows, bottom outlined CTA.
- Component hierarchy: `SiteHeader`, page `main`, `mobile-approved-page`, menu nav, row articles with `next/image`, `Button`, `SiteFooter`.
- Approx measurements at `390px`: title around `150px`; category nav around `275px`; thumbnails `128-134px`; CTA near the bottom of the first artboard.
- Typography: Bebas Neue item names, Inter prices.
- Current differences resolved: removed card-style desktop menu page, larger image-left rows, outlined bottom CTA.
- Content limitations: only verified dishes/prices from `lib/site.ts` are used; PDF categories/descriptions are illustrative and were not copied.

## 03 About

- Target route: `/about`
- Source image: `940x2708`, PDF media box `235x677`.
- Section order: header, `OVER ONS`, accent rule, contained landscape image, bold intro, short paragraph, three value icons, bottom CTA.
- Component hierarchy: `SiteHeader`, page `main`, `mobile-approved-page`, image, text block, `MobileValueIcons`, `Button`, `SiteFooter`.
- Approx measurements at `390px`: image begins around `280px`; body copy around `586px`; icon row above the bottom CTA.
- Image treatment: `restaurant-day.png`, cropped toward the white/blue Greek terrace.
- Current differences resolved: removed separate desktop marketing layout and kept concise verified Dutch copy.
- Asset limitations: PDF terrace crop differs from the available approved image crop.

## 04 Contact

- Target route: `/contact`
- Source image: `952x2708`, PDF media box `238x677`.
- Section order: header, `CONTACT`, accent rule, address row, phone row, email row, opening-hours row, dark map panel, bottom CTA.
- Component hierarchy: `SiteHeader`, page `main`, `mobile-approved-page`, semantic `dl`, map link panel, `Button`, `SiteFooter`.
- Approx measurements at `390px`: contact rows start around `295px`; map starts around `675px`; CTA starts around `1025px`.
- Interactive elements: `tel:`, `mailto:`, safe Google Maps search link.
- Current differences resolved: compressed verified address/hours so map and CTA match the approved rhythm more closely.
- Content limitations: real address/opening hours are longer than the PDF placeholders; no verified map embed or coordinates exist.

## 05 Order

- Target route: `/order`
- Source image: `936x2708`, PDF media box `234x677`.
- Section order: header, `BESTELLEN`, accent rule, centered circular bag icon, centered copy, three check rows, bottom outlined CTA.
- Component hierarchy: `SiteHeader`, page `main`, `mobile-approved-page`, icon callout, benefits list, `Button`, `SiteFooter`.
- Approx measurements at `390px`: icon circle about `128px`; text block centered below; CTA near `1025px`.
- Current differences resolved: removed desktop order card and extra explanatory layout.
- Content limitations: no verified online order URL exists, so the CTA uses the verified phone link.

## 06 404

- Target route: `app/not-found.tsx`
- Source image: `2136x936`, PDF media box `534x234`.
- Section order: wide scenic background, `404 ERROR` label, large `404`, Dutch error label, blue rule, short message, blue CTA.
- Component hierarchy: standalone `main`, image background, overlay, centered text stack, `Button`.
- Approx measurements at `1440px`: panel spans full viewport width, aspect about `2.282:1`, large `404` above the centered message stack.
- Current differences resolved: removed normal header from unknown routes and replaced generic 404 card with wide scenic composition.
- Asset limitations: exact darker 404 image is not available; `restaurant-day.png` is darkened with overlays.

## 07 Mobile Navigation

- Target: full-screen mobile navigation overlay.
- Source image: `668x1008`, PDF media box `167x252`.
- Section order: large logo top-left, plain blue X top-right, vertical nav list in the upper-middle region.
- Component hierarchy: `SiteHeader` trigger, `MobileMenu` dialog, `SiteLogo`, nav links with icons.
- Approx measurements at `390px`: logo top around `45px`, close icon about `32px`, icons about `40px`, labels about `32-40px`, first row near `215px`.
- Interactions: hamburger opens; Escape and close button close; route selection closes; scroll lock; focus trap; focus returns to trigger; `aria-expanded`, `aria-controls`, `aria-current`.
- Current differences resolved: removed tiny nav typography/icons and shifted the list down to the approved upper region.
