# Ventorme — «А что после школы?»

Static, three-language Hacknext 2026 Team 113 landing page. No build, backend or npm installation required.

## Run locally

From this directory: `python -m http.server 4173 --bind 127.0.0.1`, then open http://127.0.0.1:4173/. Use HTTP because the JavaScript uses ES modules. If port 4173 is already serving the site, reuse it.

## Implementation

The approved purple/lime Hero keeps its 0–4 problem multi-select. Only its primary CTA starts the existing three-question quiz. The complete landing adds a seven-university drag/swipe gallery, interactive four-step explanation, five route tabs, honest mini-demo, two verified review excerpts, trust/limitations, free/paid account value, six FAQ answers and final registration.

`app.js` manages navigation and session answers; `translations.js` contains the original content; `content.js` contains verified public data and new RU/KZ/EN copy; `scenes.js` renders supporting sections; `interactions.js` provides optional motion and native-scroll controls. `experience.css` extends `hero.css` and the legacy base `styles.css`. Fonts are self-hosted with licenses under `assets/fonts/`.

## Verify

Run `npm test`: registration URL, required content, all 15 multi-select combinations/five priorities, ten new scenes and three locales. Browser scripts remain in workspace `output/playwright/redesign-*.js`; detailed evidence and limitations are in [docs/REDESIGN_QA.md](../docs/REDESIGN_QA.md). No real-student research or physical-device certification is claimed.

## Registration and content

Every registration CTA uses `REGISTRATION_URL` from `config.js`, exactly:
`https://ventorme.ai/register?utm_source=hacknext&utm_campaign=team-113`

University names, short review excerpts and free/Plus descriptions were checked on https://ventorme.ai/ on 2026-10-13. Review quotations remain in the source's English with localized attribution. They are not independent research or a guarantee. No university logos, ratings, fabricated profiles or pricing are used.

## Deploy

Upload the contents of `site/` to a static hosting service. The project root has a synchronized deployment mirror for the existing workflow, but do not publish the entire workspace: `reference/`, internal `docs/`, attachments and source competition files must stay private. This task does not deploy, push or commit automatically.

Before public sharing, verify the external registration flow and UTM parameters on the published URL, test an actual phone/Instagram browser and Safari, and complete the required research with at least five real students. Free/paid terms can change and link to the official source.
