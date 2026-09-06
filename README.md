# Alhussein Anwar — Portfolio

Recruiter-focused portfolio for Alhussein Anwar, a product engineer specializing in native iOS, Flutter, and Kotlin / Compose Multiplatform.

## Local development

Requires Node.js 22.13 or newer. Install the existing locked dependencies with `npm ci`, then run `npm run dev`.

## GitHub Pages

Run `npm run export:github-pages` to build and export the site into `docs/`. The repository's GitHub Pages setup serves this directory. Commit the generated output together with source changes before publishing.

The export has no client-side JavaScript dependency. Navigation, CV downloads, product images, and expandable project details use native HTML and remain functional on GitHub Pages.

## Validation

- `npm run lint`
- `npm test` — builds, exports, and checks navigation destinations, local assets, the PDF, native disclosure markup, and important contribution context.

## Content maintenance

Edit `app/page.tsx` for content and `app/globals.css` for styling. Replace `public/Alhussein-Anwar-CV.pdf` when updating the CV. Keep dates, role titles, and project metrics aligned with the CV. Product download and client counts describe product reach, not sole ownership or personally generated growth.

Image sources are recorded in `ASSETS.md`. The existing Sites configuration is preserved for private previews; GitHub Pages remains the public delivery target.
