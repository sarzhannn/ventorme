# Ventorme — «А что после школы?»

## Open locally

Run `python -m http.server 4173 --bind 127.0.0.1` from this folder, then open
http://127.0.0.1:4173. Use a static server because the JavaScript uses ES modules.
No npm installation and no backend are required.

## Checks

Run `npm test`. It verifies the registration constant and required content model.

The hero's browser checks are in the workspace's `output/playwright/` directory:
`hero-review.js` (languages, viewport sizes, static/reduced-motion fallback),
`hero-flows.js` (existing quiz/routes and embedded-browser fallback),
`hero-runtime.js` (motion frames, pause/resume, CDP performance trace, all five
catalog routes, demo, FAQ and exact registration URLs), and `hero-contrast.js`
(background-only captures for text-contrast sampling). Run these with Playwright CLI
`run-code --filename <path>` against the local server.

The final hero polish adds `hero-polish-qa.js` (question order, selection/CTA
agreement, responsive ring, visible spring, navigation timing, keyboard and
reduced motion) and `hero-polish-touch.js` (390px Chromium touch emulation).
Cards select a concern; the primary CTA starts the existing quiz with it.
On mobile/tablet a second continuation appears beside the selection status.

The first screen is styled in `hero.css`, with authored SVG and progressive motion
in `hero.js`. Fonts and their licenses are self-hosted in `assets/fonts/`.
The rest of the landing page retains its existing section layout.
Detailed results and limitations: `../docs/HERO_QA.md`. The design contract and
skills inventory live in `../docs/HERO_DIRECTION.md` and `../docs/HERO_SKILLS.md`.

## Team registration link

The only source is `config.js`:

`REGISTRATION_URL = https://ventorme.ai/register?utm_source=hacknext&utm_campaign=team-113`

Do not change the UTM parameters. All site-generated registration CTAs derive from this constant.

## Deploy

Upload only the `site/` folder to Netlify Drop, GitHub Pages, or Vercel. Do not upload `reference/`, `docs/`, `.docx`, or `.pages` source materials. Before sharing, open the public link in an incognito window and on a phone, then click every registration CTA and confirm `team-113` remains in the address bar.

## Still needs a team check

Test with at least five real students, confirm the current Ventorme tariff wording and external registration experience, then publish the final public URL. This repository intentionally does not claim those checks have happened.
