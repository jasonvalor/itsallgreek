# Remaining 30 Percent

Date: 2026-07-29
Branch: feat/complete-approved-design

## Content

- Confirm all customer-facing Dutch copy with the restaurant owner.
- Verify whether "Thuisbezorgd" should be named on the live order page without a direct URL.
- Add any approved restaurant story, owner quote, or team content if supplied.

## Menu Completeness

- Import the full official menu.
- Verify category order, dish names, descriptions, allergens, and prices.
- Replace neutral "Beschrijving volgt binnenkort" states with approved dish descriptions.
- Confirm which dishes are popular or featured.

## Ordering Integration

- Add the verified external order URL when available.
- Confirm whether phone ordering, partner ordering, or both should be primary.
- Do not add cart, checkout, payment, account, or personal-data collection unless the scope changes.

## Maps

- Confirm a full postal address and map URL.
- Replace the styled map placeholder with an approved embed or external map link if appropriate.

## Social Links

- Add social URLs only after verification.
- Keep footer/social UI hidden until real URLs exist.

## Analytics

- Choose analytics provider and consent approach.
- Add analytics only after privacy/legal requirements are known.

## SEO

- Confirm canonical domain.
- Add Open Graph image once an approved share image exists.
- Add structured restaurant schema only after full address, geo, opening hours, and URL are verified.
- Add favicon/app icons from an approved asset.

## Legal Pages

- Add privacy policy, cookie policy, and terms only when supplied or legally reviewed.

## Forms

- No contact or order form exists.
- If added later, define storage, spam protection, privacy text, and validation first.

## Testing

- Add component or interaction tests for mobile menu focus behavior.
- Add route smoke tests if a test runner is introduced.
- Add visual regression tests when approved desktop/mobile references exist.

## Performance

- Review image dimensions and compression before launch.
- Consider generating responsive image variants for large PNG assets.
- Re-run build analysis after final imagery is added.

## Final Visual Polish

- Replace the white-background logo asset with a transparent approved logo if supplied.
- Refine desktop layouts against approved desktop mockups if they become available.
- Add final dish/restaurant photography.

## Browser And Device Testing

- Test physical iOS Safari and Android Chrome.
- Test true 320px, 360px, 375px, 390px, 430px, 768px, 1024px, 1280px, and 1440px viewports with Playwright, BrowserStack, or device lab tooling.
- Chrome headless `--screenshot` on this Windows setup bottoms out at a 500px CSS viewport, so it cannot fully replace true mobile emulation.

## Deployment Configuration

- Confirm production domain.
- Confirm Vercel project/environment settings.
- Add any environment variables only when real integrations exist.
- Review preview deployment before merging into `main`.
