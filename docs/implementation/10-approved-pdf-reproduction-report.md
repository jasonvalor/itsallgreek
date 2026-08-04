# Approved PDF Reproduction Report

Date: 2026-08-04
Branch: `feat/integrate-approved-page-pdfs`

## References Integrated

- `design/approved-pages/01-homepage-approved-HQ.pdf` -> `/`
- `design/approved-pages/02-menu-approved-HQ.pdf` -> `/menu`
- `design/approved-pages/03-over-ons-approved-HQ.pdf` -> `/about`
- `design/approved-pages/04-contact-approved-HQ.pdf` -> `/contact`
- `design/approved-pages/05-bestellen-approved-HQ.pdf` -> `/order`
- `design/approved-pages/06-404-approved-HQ.pdf` -> `app/not-found.tsx`
- `design/approved-pages/07-mobiele-navigatie-approved-HQ.pdf` -> mobile navigation overlay

`design/approved-pages/README.md` documents the route mapping and the rule that PDFs are internal references only.

## Structure Reproduced

- `/`: approved mobile hero composition with compact header, display heading, blue CTA, right detail image, large dish image and specialties panel.
- `/menu`: approved page title, underline, category nav, image-left rows and bottom outlined CTA.
- `/about`: approved image-led story layout, short Dutch copy, value icons and bottom CTA.
- `/contact`: approved icon-row contact layout, dark map panel and bottom CTA.
- `/order`: approved centered bag icon, concise ordering copy, three check rows and bottom CTA.
- 404: wide scenic error scene with large `404`, Dutch error label, blue rule, message and CTA.
- Mobile nav: full-screen dark overlay with large logo, plain blue X, vertical icon navigation and active route state.

## Components Changed

- `components/layout/site-header.tsx`: mobile framed header, larger transparent logo, unboxed hamburger, hides on unknown routes for the approved 404.
- `components/layout/mobile-menu.tsx`: full-screen approved overlay, larger display labels/icons, focus trap retained.
- `components/brand/site-logo.tsx`: updated image sizing hint for larger mobile logo usage.
- `components/ui/button.tsx`: approved uppercase button scale and larger arrow icon.
- `components/ui/mobile-value-icons.tsx`: larger blue icons, display-font labels and separators.
- `app/globals.css`: approved colour tokens, mobile frame, title, accent line and responsive artboard sizing.

## Assets Used

- `public/images/logo-dark-transparent.png`
- `public/images/menu-salad.png`
- `public/images/mobile-drink-detail.png`
- `public/images/menu-gyros.png`
- `public/images/menu-souvlaki.png`
- `public/images/menu-mixed-grill.png`
- `public/images/restaurant-day.png`

## Verified Data Preserved

- Restaurant name, location, address, phone, email, opening hours, menu names, menu prices and order/contact links remain sourced from `lib/site.ts`.
- No PDF placeholder address, phone, prices, descriptions, menu categories, map coordinates, reviews, awards or order URL were copied into the live site.

## Visual QA

Reference renders were extracted from the embedded PDF images into ignored artifacts:

- `artifacts/approved-pdf-comparison/reference-renders/`

Comparison screenshots were captured in:

- `artifacts/approved-pdf-comparison/before/`
- `artifacts/approved-pdf-comparison/after/pass1/`
- `artifacts/approved-pdf-comparison/after/pass2/`

Reviewed mobile widths:

- `320px`, `360px`, `375px`, `390px`, and `430px` for every route and the mobile navigation overlay.

Reviewed desktop widths:

- `768px`, `1024px`, `1280px`, and `1440px` for the homepage and wide 404 composition.

## Remaining Visible Differences

- Homepage: exact PDF drink and food photography are unavailable; closest local approved/temporary assets are cropped to the approved positions.
- Menu: the PDF shows illustrative categories and descriptions; the live page only shows verified dishes/prices, so rows are simpler.
- About: the available terrace image is brighter and differently cropped than the PDF.
- Contact: verified address/opening-hours content is longer than the PDF placeholder, though spacing is compressed to preserve the rhythm.
- Order: CTA uses the verified phone action because no online ordering URL is confirmed.
- 404: exact darker scenic image is unavailable; `restaurant-day.png` is darkened with overlays.
- Mobile nav: local icon set differs slightly from the PDF art icons, but scale, colour and placement match the approved direction.

## Accessibility And Performance

- One visible `h1` per route.
- Semantic links for phone, email and route.
- Meaningful alt text for rendered images.
- Mobile menu keeps body scroll lock, Escape close, focus trap, focus return, `aria-expanded`, `aria-controls`, `aria-modal` and `aria-current`.
- No runtime PDF rendering, screenshots, iframe page rendering, large UI libraries or remote stock images were added.
