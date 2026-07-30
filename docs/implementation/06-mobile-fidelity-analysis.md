# Mobile Fidelity Analysis

Date: 2026-07-30
Branch: feat/mobile-approved-design-fidelity

## Approved Source

- File inspected: `design/01-home/dark-mobile-all-pages-approved.png`
- Source dimensions: 1536 x 1024
- Primary implementation target: 390 x 844 mobile viewport
- Additional checked widths: 320, 360, 375, 430

## Shared Measurements

- Mobile page gutters: about 18 to 22 px.
- Header visual height: about 72 px.
- Logo target: about 85 to 95 px wide on mobile.
- Hamburger visible icon: about 26 to 28 px inside a 44 px hit target.
- Inner page title: about 38 to 44 px, Bebas Neue, tight line height.
- Homepage title: about 44 to 54 px, three lines, middle line blue.
- Accent line: about 32 px wide by 2 px high.
- Major radii: about 8 to 10 px.
- Menu thumbnails: about 92 to 102 px square.
- Buttons: 44 px minimum height, restrained radius, text plus arrow.
- Icon rows: blue line icons around 24 to 28 px.

## Global Current Differences

- The current mobile logo rendered inside a white rectangle.
- The mobile header and hamburger treatment were visually too heavy.
- The homepage used a full-screen restaurant photo hero.
- Inner pages were conventional responsive desktop pages, not page-specific mobile compositions.
- Footer content could visually dominate short mobile pages.

## Global Corrections Intended

- Use a near-black mobile background and compact shared header.
- Use a transparent dark-header logo derivative from the official logo asset.
- Remove the visible hamburger border/square while retaining a 44 px target.
- Build page-specific mobile sections below the desktop breakpoint.
- Keep existing desktop layouts functional above `md`.
- Keep the footer compact on mobile and below the first page composition.

## Route Analysis

### `/`

- Approved structure: compact header, three-line display heading, short copy, one blue CTA, narrow right-side food/detail image, large contained dish image, bottom specialities panel.
- Current structure: large full-photo restaurant hero, Dutch two-line headline, long paragraph, two full-width buttons, separate cards below.
- Intended correction: replace mobile hero with contained dark food composition and three compact specialities.
- Assets: `food-collage.png`, `menu-salad.png`, dark transparent logo.
- Limitation: no separate approved drink image exists, so `food-collage.png` is cropped for the narrow detail image.

### `/menu`

- Approved structure: title, short underline, compact category row, stacked menu rows with left thumbnails, blue prices, bottom outlined CTA.
- Current structure: page intro, large category blocks, responsive cards, per-category CTAs.
- Intended correction: show one compact verified category and image-left rows using typed menu data.
- Assets: `menu-gyros.png`, `menu-souvlaki.png`, `menu-mixed-grill.png`, `menu-salad.png`.
- Limitation: only a verified selection exists; full category tabs and dish descriptions are not available.

### `/about`

- Approved structure: title, underline, contained landscape image, strong intro, short support copy, three value icons, bottom outlined CTA.
- Current structure: desktop grid with long intro and large feature-card section.
- Intended correction: mobile-only image-led story block with compact value icons.
- Assets: `restaurant-day.png`.
- Limitation: no verified founder/team/history content was added.

### `/contact`

- Approved structure: title, underline, address/phone/email/hours rows with blue icons, dark contained map, bottom outlined CTA.
- Current structure: large detail cards, separate opening-hours card, larger map placeholder and actions.
- Intended correction: collapse into compact rows with real typed data and a dark map-style route panel.
- Assets: inline line icons; no raster map image.
- Limitation: no verified map embed or exact coordinate data exists, so the map remains a safe styled route link.

### `/order`

- Approved structure: title, underline, centered circular bag icon, short centered copy, three benefit rows, bottom outlined CTA.
- Current structure: desktop two-column intro and callout card.
- Intended correction: phone-first centered ordering explanation with no fake checkout/cart.
- Assets: inline `bag` and `check` icons.
- Limitation: no verified external order URL exists; CTA remains phone-first.

### 404

- Approved structure: dark scenic treatment, large 404, short Dutch message, blue accent, compact CTA.
- Current structure: large responsive card with image background.
- Intended correction: mobile scenic card with centered error hierarchy and compact CTA.
- Assets: `restaurant-day.png`.
- Limitation: no 404-specific chapel/landscape image exists.

### Mobile Navigation

- Approved structure: full-screen near-black overlay, logo top-left, blue close top-right, vertical icon nav, active route blue.
- Current structure: full-screen overlay but with large card-like nav rows and bordered close button.
- Intended correction: simple full-screen list with line icons, active state, scroll lock, Escape close, link close, focus return, and focus trap.
- Assets: dark transparent logo and existing line icons.
- Limitation: none beyond the logo derivation noted above.
