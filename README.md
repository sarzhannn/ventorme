# Ventorme — «А что после школы?»

Static, three-language Hacknext 2026 Team 113 landing page. No build, backend or npm installation required.

## Run locally

From this directory: `python -m http.server 4173 --bind 127.0.0.1`, then open http://127.0.0.1:4173/. Use HTTP because the JavaScript uses ES modules. If port 4173 is already serving the site, reuse it.

## Implementation

The approved purple/lime Hero keeps its 0–4 problem multi-select. Only its primary CTA starts the existing three-question quiz. The complete landing adds a seven-university logo gallery, interactive four-step explanation, five detailed route guides, honest mini-demo, three attributed English review excerpts with separate summaries, trust/limitations, free/paid account value, six FAQ answers and final registration.

`app.js` manages navigation and session answers; `translations.js` contains the original content; `content.js` contains verified public data and new RU/KZ/EN copy; `scenes.js` renders supporting sections; `interactions.js` provides optional motion and native-scroll controls. `experience.css` extends `hero.css` and the legacy base `styles.css`. Fonts are self-hosted with licenses under `assets/fonts/`.

## Verify

Final polish adds `theme.js` (dark-only pre-paint palette), `chrome.js` (navigation), `polish.css` (semantic surfaces), `polish-copy.js` (three-language copy), `graphics.js` (original SVG diagrams), and `personal-map.js` (actual-input maps). University/demo context is preserved through the same quiz. Only language persists; answers are not transferred to Ventorme automatically. Older light-theme preferences are cleared. See `docs/DARK_AMBIENT_QA.md` in the repository for the latest background/review changes.

Run `npm test`: five suites for registration URL, content, selection, scenes/locales, maps and safe text output. New browser scripts are in workspace `output/playwright/polish-*.js`; evidence and limitations are in `docs/FINAL_POLISH_QA.md` in the workspace. No real-student research or physical-device certification is claimed.

Latest layers: `route-guides.js` contains practical guidance in RU/KZ/EN; `ambient.js` / `ambient.css` provide pausable particles, including IELTS/SAT motifs; `media-copy.js` contains localized review labels and admissions background words. Results stop their emblem animation when the emblem leaves the viewport. Quiz hints avoid repeating the same introductory sentence. Browser QA can use intercepted local-file requests without starting localhost; the latest user preference is not to launch a server automatically. Current evidence: workspace `docs/POLISH_RESUME_QA.md` and `docs/AMBIENT_MEDIA_QA.md`.

## Registration and content

Every registration CTA uses `REGISTRATION_URL` from `config.js`, exactly:
`https://ventorme.ai/register?utm_source=hacknext&utm_campaign=team-113`

University names, short review excerpts and free/Plus descriptions were checked on https://ventorme.ai/ on 2026-10-13; university images and the Aidana portrait were sourced there on 2026-10-14. Reviews now retain English in all three interface languages, per the user's explicit request. Excerpts and editorial summaries are separately labelled; full third-party reviews are not reproduced. Aibek and Dana use initials, not invented faces. Source provenance and public-reuse limitations are recorded in workspace `docs/AMBIENT_MEDIA_QA.md`. No partnership, rating, verified outcome or pricing claim is added.

## Deploy

Upload the contents of `site/` to a static hosting service. The project root has a synchronized deployment mirror for the existing workflow, but do not publish the entire workspace: `reference/`, internal `docs/`, attachments and source competition files must stay private. This task does not deploy, push or commit automatically.

Before public sharing, verify the external registration flow and UTM parameters on the published URL, test an actual phone/Instagram browser and Safari, and complete the required research with at least five real students. Free/paid terms can change and link to the official source.
