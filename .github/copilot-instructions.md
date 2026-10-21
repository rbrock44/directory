# Directory

Angular 22 single-page site listing Ryan's personal and professional projects. Built with `outputMode: "static"`,
so the one page is prerendered to `index.html` and served from GitHub Pages at `directory.ryan-brock.com`. No backend.

## Commands

- Install: `npm ci` (Node version in `.nvmrc`)
- Dev server: `npm start` (port 4200)
- Test all: `npm test` (Karma + Jasmine), or `npx ng test --watch=false --browsers=ChromeHeadless` as CI runs it
- Build: `npm run deploy` — `ng build --base-href=/`, prerenders the page. Output in `dist/directory/browser/`
- Deploy: CI only, `.github/workflows/deploy.yml` on push to `master` (tests, build, `peaceiris/actions-gh-pages`).
  `public/CNAME` is copied into the build output, so there is no separate CNAME step

## Data

- All project data is in `src/app/constants/constants-projects.ts`: `PERSONAL_PROJECTS` (`Project[]`) and
  `PROFESSIONAL_PROJECTS` (`Company[] -> projects[]`). Shapes are in `src/app/models/`
- Personal entries build their URLs with `createLink(slug)` (`https://<slug>.ryan-brock.com/`) and
  `createGithub(repo)` (`https://github.com/rbrock44/<repo>`). The slug and repo name can differ
- Descriptions use `\n\n` for paragraph breaks; `.description` renders them with `white-space: pre-line`
- Social URLs (GitHub, LinkedIn, Buy Me a Coffee) are in `src/app/constants/constants.ts`

## Architecture

- Everything is in `AppComponent`; `app.routes.ts` is empty. `app.routes.server.ts` prerenders `**`
- Mode (Personal/Professional) is a reactive form checkbox, mirrored to `?mode=Professional` with `Location`, not
  the router. `Location.subscribe` handles back/forward. A Professional deep link gets a Personal history entry
  slotted underneath it so back lands on Personal
- Only one description is open at a time (`selectedApp`, plus `selectedCompany` in Professional mode). Rows expand
  from a real `<button class="toggle">`; clicking elsewhere on the row also toggles, but clicks inside an `<a>` do not
- Icons are inline Font Awesome Free 5.15.4 SVGs (CC BY 4.0, credited in the template). There is no icon font or CDN

## Conventions

- Code that runs during prerendering must not touch `window`, `document` or the global `location` — use the
  injected `Location`
- Constants are `UPPER_SNAKE` exports under `src/app/constants/`, models are interfaces under `src/app/models/`
- Templates reference members through `this.` (`this.selectedApp`)
- Component styles have a 6 kB warning budget and `app.component.scss` sits close to it — trim before raising it.
  A global `p` rule sets the secondary text color, so `<p>` elements that need primary color set it themselves
- Specs sit next to their source as `*.spec.ts`
