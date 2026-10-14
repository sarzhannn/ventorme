# Ventorme — «А что после школы?»

Static, three-language Hacknext 2026 Team 113 landing page. No build, backend or npm installation required.

## Run locally

From this directory: `python -m http.server 4173 --bind 127.0.0.1`, then open http://127.0.0.1:4173/. Use HTTP because the JavaScript uses ES modules. If port 4173 is already serving the site, reuse it.

## Implementation

The approved purple/lime Hero keeps its 0–4 problem multi-select. Only its primary CTA starts the existing three-question quiz. The complete landing adds a seven-university logo gallery, interactive four-step explanation, five detailed route guides, honest mini-demo, two attributed English review excerpts with separate summaries and Aidana’s full user-supplied review, trust/limitations, free/paid account value, six FAQ answers and final registration.

`app.js` manages navigation and session answers; `translations.js` contains the original content; `content.js` contains verified public data and new RU/KZ/EN copy; `scenes.js` renders supporting sections; `interactions.js` provides optional motion and native-scroll controls. `experience.css` extends `hero.css` and the legacy base `styles.css`. Fonts are self-hosted with licenses under `assets/fonts/`.

## Verify

Final polish adds `theme.js` (dark-only pre-paint palette), `chrome.js` (navigation), `polish.css` (semantic surfaces), `polish-copy.js` (three-language copy), `graphics.js` (original SVG diagrams), and `personal-map.js` (actual-input maps). University/demo context is preserved through the same quiz. Only language persists; answers are not transferred to Ventorme automatically. Older light-theme preferences are cleared. See `docs/DARK_AMBIENT_QA.md` in the repository for the latest background/review changes.

Run `npm test`: six suites for registration URL, content, selection, scenes/locales, maps and safe text output. New browser scripts are in workspace `output/playwright/polish-*.js`; evidence and limitations are in `docs/FINAL_POLISH_QA.md` in the workspace. No real-student research or physical-device certification is claimed.

Latest layers: `route-guides.js` contains practical guidance in RU/KZ/EN; `ambient.js` / `ambient.css` provide pausable particles, including IELTS/SAT motifs; `media-copy.js` contains localized review labels and admissions background words. Results stop their emblem animation when the emblem leaves the viewport. Quiz hints avoid repeating the same introductory sentence. Browser QA can use intercepted local-file requests without starting localhost; the latest user preference is not to launch a server automatically. Current evidence: workspace `docs/POLISH_RESUME_QA.md` and `docs/AMBIENT_MEDIA_QA.md`.

## Registration and content

Every registration CTA uses `REGISTRATION_URL` from `config.js`, exactly:
`https://ventorme.ai/register?utm_source=hacknext&utm_campaign=team-113`

University names, short review excerpts and free/Plus descriptions were checked on https://ventorme.ai/ on 2026-10-13; university images and the Aidana portrait were sourced there on 2026-10-14. Reviews now retain English in all three interface languages, per the user's explicit request. Excerpts and editorial summaries are separately labelled. Aidana’s full English review was supplied by the user and is reproduced verbatim. Aibek and Dana use initials, not invented faces. Source provenance and public-reuse limitations are recorded in workspace `docs/AMBIENT_MEDIA_QA.md`. No partnership, rating, verified outcome or pricing claim is added.

## Official contacts and conversion polish (2026-10-14)

The footer distinguishes the MINDSET / HackNext Team 113 landing from the official platform. Exact destinations were verified in the HTML footer at https://ventorme.ai/: Telegram https://t.me/VentormeAI, Instagram https://instagram.com/ventorme.ai, WhatsApp https://wa.me/77019202323. They are centralized in `OFFICIAL_CONTACTS` in `config.js`. Source links remain informational; registration still exclusively uses `REGISTRATION_URL`.

The Hero explains how concerns feed the route; quiz and demo labels are distinct in all locales. Quiz progress has accessible values. Results now follow **direction → one first move → continue on Ventorme → details**. The short first move comes from the existing route preview, not new recommendation logic. The full original roadmap, context, answer recap and other concerns remain in a native keyboard-accessible disclosure below registration; edit/catalog/restart stay outside. Disclosure state survives language switching for the same route. The registration note states that quiz answers remain on this page without asking the visitor to re-enter them.

Latest result refinement: six npm suites and 132 serverless Chrome viewport/CTA checks across RU/KZ/EN at 320/360/375/390/430/1440px, including closed/open details, all five catalog routes, multiselect, explicit priority, all-skipped fallback, keyboard Enter/Space, state preservation and pause/reduced motion. No JavaScript errors or external requests in the passing run. An initial motion check timed out waiting for a continuously animated SVG to become stationary; targeting its static container fixed the test. Evidence remains in ignored `output/playwright/first-move*`. Hero and contact code are unchanged; root README is intentionally maintained separately and is not overwritten by the technical site README.

### Local analytics hooks — not remote tracking

`analytics.js` has no provider, requests, storage, identifiers, queue or replay. It emits local `ventorme:funnel` events and exposes `setAnalyticsAdapter(fn|null)` for a future explicitly configured provider; nothing is collected remotely now. Do not connect a provider without reviewing consent/privacy requirements.

Events: `hero_problem_selected` (selection/deselection), `quiz_started` (entry/re-entry), `quiz_step_completed` (successful next or skip), `quiz_completed` (leaving question three), `result_viewed` (navigation to results/catalog detail, not language re-render), `registration_cta_clicked` (exact team URL only). Properties are strictly allowlisted: locale, count 0–4, selected boolean, step 1–3, answered/skipped status, quiz/explore mode, and bounded CTA placement. No grade, chosen direction, free text, URLs, account data or identifiers are passed. Provider failures cannot block navigation. Backtracking can produce another step-completion event; this is not a unique-user or conversion counter.

Verification: six npm suites, all site JS syntax checks, and serverless Chrome checks for RU/KZ/EN at 320/360/375/390/430/768/1440px. Primary browser run passed 81 viewport/CTA checks plus quiz validation, explicit priority, multiselect fallback, five catalog routes, modal Escape, demo, keyboard focus, reduced motion and exact event counts. A focused follow-up passed 42 more footer/quiz viewport checks, skipped-step backtracking, privacy-safe free text, sticky/header/account/final click events and image decoding. No JS errors or external requests. Scripts/captures remain in ignored `output/playwright/conversion-*`. No build step exists. Physical devices/Safari/Instagram, social-app handoff, successful external registration and real conversion impact are not verified.

## Deploy

Upload the contents of `site/` to a static hosting service. The project root has a synchronized deployment mirror for the existing workflow, but do not publish the entire workspace: `reference/`, internal `docs/`, attachments and source competition files must stay private. This task does not deploy, push or commit automatically.

Before public sharing, verify the external registration flow and UTM parameters on the published URL, test an actual phone/Instagram browser and Safari, and complete the required research with at least five real students. Free/paid terms can change and link to the official source.
