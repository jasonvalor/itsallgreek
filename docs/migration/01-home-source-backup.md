# Home Local Source Backup

Recovery date: 2026-07-29

## Source

- Original source path: C:\Users\Gebruiker\Documents\Projects\its-all-greek
- Source branch: master
- Source HEAD: c8f194606d8e2d45b90073a515d22c9fd97e75aa | 2026-07-04 19:31:35 +0200 | Initial Next.js setup
- Source remote: none configured
- Source framework: Next.js App Router with React, TypeScript, and Tailwind CSS
- Package name: its-all-greek
- Next.js version: 16.2.10
- React version: 19.2.4

## Source Git Status

~~~text
## master
 M app/page.tsx
?? components/
?? design/
?? docs/
?? lib/
?? public/images/
?? types/
~~~

## Modified Files In Source

~~~text
app/page.tsx
~~~

## Untracked Files In Source

~~~text
components/home/Atmosphere.tsx
components/home/CTASection.tsx
components/home/ContactStrip.tsx
components/home/Features.tsx
components/home/Hero.tsx
components/home/PopularMenu.tsx
components/layout/BottomNav.tsx
components/layout/Footer.tsx
components/layout/Header.tsx
components/ui/Button.tsx
components/ui/Container.tsx
components/ui/FeatureCard.tsx
components/ui/Icons.tsx
components/ui/Logo.tsx
components/ui/Section.tsx
design/01-home/01-home-approved.png.png
design/02-pages/02-pagina's-approved.png.png
design/05-brand/01-logo.md
design/05-brand/logo.png
design/README.md
docs/00-PROJECT-CHARTER.md
docs/01-DESIGN-BIBLE.md
docs/02-BRAND-GUIDE.md
docs/03-COMPONENT-LIBRARY.md
docs/04-PAGES.md
docs/05-DEVELOPMENT-RULES.md
docs/06-COPY.md
docs/07-AI-EXECUTION-PROTOCOL.md
docs/08-TASKS.md
docs/09-MENU-DATA.md
docs/10-ASSETS.md
docs/README.md
lib/site.ts
public/images/food-collage.png
public/images/hero-greek-terrace.png
public/images/logo.png
public/images/menu-gyros.png
public/images/menu-mixed-grill.png
public/images/menu-salad.png
public/images/menu-souvlaki.png
public/images/restaurant-day.png
public/images/restaurant-night.png
types/site.ts
~~~

## Files Included

The backup branch copied 63 source files from the confirmed local project into the integration repository root. The included-file manifest is stored at:

- docs/migration/01-home-source-files-included.txt

Included groups:

- app/
- components/
- public/
- docs/
- design/
- lib/
- types/
- package.json
- package-lock.json
- tsconfig.json
- next.config.ts
- eslint.config.mjs
- postcss.config.mjs
- .gitignore
- README.md
- AGENTS.md
- CLAUDE.md

## Files Excluded

The exclusion summary is stored at:

- docs/migration/01-home-source-files-excluded.txt

Excluded groups:

- .git/
- node_modules/
- .next/
- dist/, build/, coverage/
- cache and temporary folders
- logs
- .env and .env.*
- credential, certificate, and key-like files

No potential secret filenames were found in the included source scan.

## Same-Path Conflicts Preserved

GitHub main files that differed at the same path were copied before replacement to:

- docs/migration/github-main-conflicts/

Conflict paths:

~~~text
.gitignore
app\globals.css
app\layout.tsx
app\page.tsx
components\ui\Button.tsx
eslint.config.mjs
next.config.ts
package.json
package-lock.json
postcss.config.mjs
README.md
tsconfig.json
~~~

Conflict artifacts were renamed with .github-main.txt suffixes so TypeScript and Next.js do not compile them.

## GitHub-Only Files Removed From Backup Branch Root

These files existed on GitHub main but not in the confirmed local source, so they were removed from the backup branch root to keep the root snapshot faithful to the local source. They remain preserved in GitHub history on main.

~~~text
components\brand\site-logo.tsx
components\layout\container.tsx
components\layout\mobile-menu.tsx
components\layout\site-header.tsx
components\ui\section-heading.tsx
design\01-home\dark-mobile-all-pages-approved.png
~~~

## Routes Present In Source

- /
- Generated Next.js /_not-found

## Missing Required Routes

- /menu
- /about
- /contact
- /order
- explicit app/not-found.tsx

## Validation Results

Source folder validation:

- npm run lint in original source folder: passed
- npm run build in original source folder: not run, because building writes .next/ and the source folder must not be modified

Backup branch copy validation:

- npm ci: passed
- npm run lint: passed
- npm run build: passed

Notes:

- npm ci reported 4 high severity audit findings. No audit fix was run.
- The first backup build failed because preserved conflict copies used compilable .tsx extensions under docs/. The copies were retained and renamed to inert .github-main.txt artifacts, after which the build passed.

## Known Limitations

- The local source is an incomplete homepage-only project.
- Metadata still contains starter text from create next app.
- The local source uses placeholder menu links and placeholder social/order links.
- Some menu data appears provisional and must be verified before production use.
- restaurant-night.png exists in the local source but local docs mark it as not approved unless explicitly instructed.

## Uncertainty

This backup treats the confirmed local source as the only available local source, per user approval. It is not independently proven to be the older complete live website.
