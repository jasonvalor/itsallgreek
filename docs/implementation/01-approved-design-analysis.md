# Approved Design Analysis

Date: 2026-07-29
Branch: feat/complete-approved-design

## Design Files Inspected

| File | Status | Coverage |
| --- | --- | --- |
| `design/01-home/dark-mobile-all-pages-approved.png` | Approved visual source of truth | Homepage, menu, about, contact, order, mobile navigation, 404, color palette, typography, buttons, card style, icon style, mobile density |

## Missing Design Paths

- `design/02-pages/` is not present in this branch.
- `design/05-brand/` is not present in this branch.
- No separate desktop mockups are present.
- No older light design files are present in this branch.

Because the only available approved design is the dark mobile all-pages board, implementation should follow that file first and use the documentation only for verified copy and business-data constraints.

## Page Coverage

- Homepage: phone frame 01 shows compact header, logo, hamburger, large display heading, blue emphasis, short body copy, primary CTA, large dish image, and specialities card.
- Menu: phone frame 02 shows page heading, blue divider, category navigation, image-led menu rows, prices in blue, and bottom order CTA.
- About: phone frame 03 shows heading, blue divider, large image, story copy, icon/value row, and bottom CTA.
- Contact: phone frame 04 shows heading, contact detail list with blue icons, opening hours, dark map card, and bottom CTA.
- Order: phone frame 05 shows heading, icon callout, short ordering explanation, check-list benefits, and bottom CTA.
- Mobile navigation: lower-left phone frame shows logo, close button, vertical navigation links with blue icons and active state.
- 404: lower-right wide frame shows dark scenic image, large 404 heading, short explanation, blue divider, and home CTA.

## Repeated Visual Patterns

- Dark background with slightly elevated surfaces.
- Thin grey borders on cards and phone-like panels.
- Strong brand blue used for emphasis, icons, links, dividers, and primary buttons.
- Rounded cards are moderate and consistent rather than pill-heavy.
- Display headings use a condensed uppercase style similar to Bebas Neue.
- Body text is compact, readable, and white/soft grey.
- Sections are concise and image-led.
- Buttons are rectangular with small radius, strong contrast, and arrow affordance.
- Blue divider lines appear under page headings.
- Icons are thin stroke-style and blue.

## Typography

- Major headings: Bebas Neue, uppercase display rhythm, no negative letter spacing.
- Body, labels, buttons, links, metadata: Inter.
- Body text should remain at least 16px.
- Display headings must scale down for 320px mobile without clipping.

## Color System

Approved and documented direction:

- Main background: `#0F0F10`
- Elevated surface: `#171819`
- Secondary surface: `#202124`
- Subtle border: `#2A2A2D`
- Primary text: `#FFFFFF`
- Secondary text: `#B5B5B8`
- Muted text: `#858589`
- Brand blue: `#0D73C8`

Additional tokens should derive from these values for hover, active, focus, overlay, header, card, mobile menu, divider, shadows, and semantic states.

## Spacing And Density

- The approved design is compact and mobile-first.
- Header height is steady and does not consume excessive vertical space.
- Page headings sit near the top with a short blue divider.
- Cards use controlled internal padding and tight vertical rhythm.
- CTA buttons sit near the bottom of page frames on simple pages.
- Desktop should expand the mobile layouts without becoming a loose landing-page template.

## Card And Button Styles

- Cards: dark surface, thin border, subtle shadow or none, small-to-medium radius.
- Menu cards: image left/top depending on viewport, name and price prominent, description secondary.
- Feature/value items: simple icon above compact label.
- Primary button: blue fill, white text, arrow at right.
- Secondary button: dark/transparent fill, blue or light border, arrow at right.

## Navigation

- Mobile header: logo left, hamburger right, dark/sticky surface.
- Mobile menu: full-screen dark overlay, logo, close control, vertical links, active route in blue, large tap targets.
- Desktop navigation is not shown, so it should adapt the same hierarchy: logo left, links centered/right, order CTA prominent.

## Image Treatment

- Images are large, cropped with `object-fit: cover`, and clipped by rounded dark cards.
- Homepage uses food imagery prominently.
- About/contact/404 use restaurant or Greek atmosphere imagery.
- Approved production assets live in `public/images/`.
- `restaurant-night.png` is deprecated and not available in this branch.

## Mobile Behaviour

- The approved board is mobile-first and uses narrow phone frames.
- The implementation must be comfortable at 320px through 430px.
- No horizontal overflow, clipped headings, or unreachable fixed UI.
- Buttons and navigation targets must be at least 44px tall.

## Desktop Adaptation

- No desktop mockup exists.
- Desktop should preserve the dark style, compact hierarchy, and card treatment while using wider grids for readability.
- The site should not become a marketing landing page with oversized decorative sections.

## Inconsistencies Or Ambiguities

- The mockup contains placeholder contact/address/menu facts that conflict with verified project data. Verified project data must win for content accuracy.
- The mockup menu categories and prices appear illustrative; the repository documentation says full official menu data is not imported.
- The mockup includes map visuals, but no verified map URL exists.
- The mockup includes no desktop layouts.
- The official logo asset has a white background, while the mockup shows a transparent/dark-logo treatment. The implementation must use the approved logo asset and document the visual difference.
