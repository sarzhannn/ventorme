# HERO reinvention — verification record

Latest Hero behavior and timings: [Final multi-select polish, 2026-10-13](HERO_MULTISELECT_QA.md). The historical implementation notes below are retained; their single-selection behavior and older durations are superseded.

Date: 2026-10-12. Scope: first screen, header, design tokens and selected-concern transition feedback. No deployment.
Local URL: http://127.0.0.1:4173/
Backup: output/hero-checkpoint-20261012-230649 — 45 site files copied and hash-compared before editing, zero mismatches.

## Implementation
- Midnight editorial poster, lime headline strip and primary action, controlled violet/coral mesh, asymmetric colored concern buttons and authored SVG orbital geometry.
- Existing self-hosted Unbounded 800 and Golos Text; no downloaded fonts/assets/packages in this phase.
- Three-line kinetic entrance: 640ms with 65ms stagger. Four choices: 480ms with 50ms stagger.
- Ambient layers: mesh 16s/13s, rings 9s, satellite 7s, star 6s. CSS transform/opacity on outer HTML layers, not animated SVG geometry.
- Localized pause/resume, live OS reduced-motion response, offscreen/hidden suspension.
- Spring-like CSS easing on hover/press, persistent checked concern on return and visible concern chip in the existing quiz.
- View Transitions enhancement and immediate update + native Web Animations fallback; no forced waiting/loading screen.

## Browser tests actually run
Existing installed Playwright CLI + Chromium; no skill scripts or installation.

| Check | Result |
|---|---|
| RU/KZ/EN × 320, 360, 390, 430, 768, 1000, 1440px | All 21 combinations passed: document/body width equals viewport, title within viewport, all 4 choices present |
| Additional RU widths 375 and 1024px | Passed |
| Landscape 844 × 390 | No horizontal overflow |
| 720 × 450 CSS viewport | Passed reflow; 200%-zoom-equivalent layout, not a native browser zoom certification |
| Header/hero touch-target heights | At least 44px |
| RU 360px primary action | Top 379px, bottom 437px |
| KZ 360px primary action | Top 369px, bottom 427px |
| EN 360px primary action | Top 350px, bottom 408px |
| 4 problems × 3 languages | Opens 3-step quiz; skipping leads to expected existing route; registration links exact |
| Direct primary CTA | Works without selecting a problem |
| 5 catalog routes × 3 languages | Bypasses quiz, opens correct existing descriptions |
| Localized validation/free answer | Passed in RU/KZ/EN |
| Demo + all FAQ disclosures | Passed in RU/KZ/EN |
| Registration checks in extended runtime test | 79 rendered href checks equal the team113 URL; additional checks in 12 quiz flows |
| Selection | Concern visible above quiz; aria-pressed/check restored after Back |
| Keyboard | Visible focus and Enter activate the primary action |
| Blocked localStorage + absent View Transitions | Language switch and quiz still work |
| Normal motion | Five ambient layers run after entrance |
| Pause / resume | 0 running layers while paused, 5 after resume |
| Offscreen | 0 running layers |
| Live reduced motion | 0 running animations; visible final content; localized disabled motion control |
| Entrance class removed | Title and CTA remain visible |
| Console/page errors in runtime test | 0 |
| Node tests | Registration constant and complete RU/KZ/EN content model passed |
| Syntax checks | app.js, hero.js, translations.js passed |

The initial live reduced-motion test sampled before the matchMedia change event; the harness was corrected to await the actual control state. No production workaround was needed.

## Performance evidence
An initial 2-second desktop trace found 122 Layout and 244 Paint events from SVG-group animation. This was fixed by keeping the vectors static and animating three outer HTML layers.
Final 2-second desktop trace: **0 Layout / 0 Paint**, 121 rAF intervals, maximum interval 17ms, none above34ms.
Separate 2-second 360px trace: **0 Layout / 0 Paint**.
These are local Chromium observations after entrance, not a guarantee of 60fps on real phones and not measured Core Web Vitals.

## Contrast evidence
Background-only screenshots at 360px and 1440px, at 1s/8s/16s, were sampled under body copy, concern labels, CTA, promise, bypass and motion controls using native System.Drawing.
The lowest sampled result remained at least5:1. This is sampled evidence over a moving gradient, not an exhaustive pixel audit or WCAG certification. Solid concern and CTA surfaces remain fixed.

## Visual evidence
All nine final settled captures were opened and inspected:
- output/playwright/hero-ru-320.png
- output/playwright/hero-ru-360.png
- output/playwright/hero-ru-768.png
- output/playwright/hero-ru-1440.png
- output/playwright/hero-kz-360.png
- output/playwright/hero-kz-1440.png
- output/playwright/hero-en-360.png
- output/playwright/hero-en-1440.png
- output/playwright/hero-reduced-360.png

Motion: reinvention-motion-0.png, reinvention-motion-200.png, reinvention-motion-800.png.
Selection: reinvention-selected.png.
Independent Impeccable source/screenshot reviewer: **ship**. Following the performance wrapper patch, all nine captures were refreshed; the reviewer confirmed no visual regression and retained ship. That review did not independently measure performance.

## Protected source and scope
reference/case.html SHA-256 before and after:
1FD960B7B4F669D574981AFB32FC00D9C5E52B8E28274D0E6E1A9865576E1EA2

REGISTRATION_URL remains defined only in site/config.js:
https://ventorme.ai/register?utm_source=hacknext&utm_campaign=team-113

site/styles.css, config.js, existing font assets, quiz questions, five route contents and support-section markup were not rewritten.
Changed site files: app.js, hero.css, hero.js, index.html, translations.js, README.md, tests/content-model.test.mjs.
Documentation: DESIGN.md, .impeccable/design.json, .impeccable/surfaces/site-index-html.md, docs/HERO_DIRECTION.md, docs/HERO_SKILLS.md, this record.
Own browser test scripts and screenshots are under output/playwright/ and are not deployed.

## Remaining, honestly unverified
- Physical iPhone/Android and actual Instagram in-app browser; compatibility fallbacks were simulated in Chromium only.
- Real user research with at least five students, registration/onboarding completion and conversion impact.
- Publication and external Ventorme behavior.
- Full visual redesign of lower sections/quiz/routes is a separate stage, deliberately not started.
- The existing app requires JavaScript to render; tested fallback is animation failure/absence, not an entirely JavaScript-disabled application.

## Reproduce
Start from site/: python -m http.server 4173 --bind 127.0.0.1
Run npm test from site/.
With the already installed Playwright CLI, open a dedicated session at the local URL, then use run-code --filename:
- output/playwright/hero-review.js
- output/playwright/hero-runtime.js
- output/playwright/hero-mobile-performance.js
- output/playwright/hero-contrast.js
- output/playwright/hero-flows.js in its own session (it intentionally overrides storage and View Transitions).

Do not install a browser/package or execute third-party Skill scripts as part of reproducing this phase.

## Final art-direction polish — 2026-10-12

> Superseded in part by the 2026-10-13 refinement: cards now save the concern and immediately open the existing quiz; the extra mobile continuation was removed. CTA hover/shadow, translated microcopy and subtle headline wobble were updated in both root and site/ copies. Reduced-motion and pause rules include the wobble. Relative asset/module URLs were retained for /ventorme/. Tests and browser verification were deliberately NOT run for this change, at the user's request; earlier passing results below do not certify this revision. Earlier browser scripts expecting selection-only cards or exactly five ambient loops need updating before reuse.

This pass supersedes the earlier card-click navigation and entrance timings above; the approved visual direction is unchanged. Backup before this pass: `output/hero-polish-20261012-234526/`.

### Implemented, not proposed

- The prompt and instruction precede the cards on desktop and mobile.
- Card click selects rather than navigating. Exactly one concern remains pressed, with a check, lime outline and localized live status. The main CTA opens the existing quiz with that concern; it still works without a selection. A nearby continuation appears on mobile/tablet. Hover uses a softer cream outline, distinct from selected lime.
- The headline has a 640ms translate/rotate/scale reveal with a small settling overshoot and 65ms line stagger.
- Each card enters only when it reaches the viewport: 600ms, with 0/80/160/240ms stagger. The lower phone row no longer spends its entrance offscreen.
- Selection has a 460ms interruptible, spring-like WAAPI keyframe response. The ring independently turns/scales over 680ms to one of four concern-specific orientations. Its HTML response wrapper does not conflict with the ambient ring animation.
- Existing two-layer gradient drift, ring/satellite/star float and tactile hover/press remain active. No heavy library or rendering engine added.
- Pause settles entrances without replay on resume. Ambient layers pause offscreen/when hidden. Live reduced motion removes the spring, ring turn, entrances and loops, but preserves selection feedback. Navigation never waits for an animation to finish.

### Browser checks on the final implementation

| Check | Observed result |
| --- | --- |
| RU/KZ/EN × 320/360/390/430/768/1000/1440px | 21 combinations passed: no horizontal overflow, intact heading, four cards, visible targets ≥44px |
| RU/KZ/EN × 360/390/1440px selection tests | Prompt above cards, bypass wrapping/in bounds, single selection, active spring, ring reaction and restored selection all passed |
| CTA during active selection motion | Quiz DOM updated in 22–32ms in the nine measured cases; no artificial wait for the 460/680ms effects |
| Phone lower-row reveal | Offscreen entrance absent; starts on scrolling into view; computed stagger 0/.08/.16/.24s |
| Live reduced motion + selection | 0 running animations, ring transform none, selected state retained |
| Keyboard | Space selects; Enter on continuation opens quiz; visible focus retained |
| 390px touch context | Coarse pointer/no hover, tap selection and continuation passed; no horizontal overflow |
| Existing flow regression | All 12 language/concern paths, direct CTA, bypass, validation and free text passed |
| Existing support functionality | 15 language/catalog-route combinations, demo and FAQ passed |
| Registration | 79 runtime href checks and npm test passed; exact team-113 URL unchanged |
| Embedded-browser fallback | Blocked storage and absent View Transitions simulated successfully in Chromium |
| Ambient performance | Desktop: 2s, 0 Layout / 0 Paint, 121 frame intervals, max18.2ms, none >34ms. Separate 360px trace: 0 Layout / 0 Paint |
| Pause/offscreen | 0 running ambient layers while paused/offscreen; 5 resume, no entrance replay |
| Errors / syntax | No browser errors in QA; npm test and node syntax checks passed |

Screenshots inspected: `polish-ru-1440.png`, `polish-ru-360.png`, `polish-selected-1440.png`, `polish-selected-390.png`, and final `polish-touch-390.png`, under `output/playwright/`. Additional localized settled captures use the `polish-` prefix. These are actual browser captures, not mockups. The touch capture verifies the phone interaction without desktop hover. The older contrast measurements above are from the earlier pass; they were not repeated in this polish.

Read and applied installed skills: frontend-design, Impeccable (polish/craft-floor), motion (self-contained vanilla best practices), micro-interaction, accessible-animation, Playwright. They informed the bounded refinement, composited HTML motion wrappers, interruptible feedback, reduced-motion behavior and browser verification. No third-party Skill scripts, packages or downloads used in this pass.

Changed shipped files: `site/app.js`, `site/hero.css`, `site/hero.js`, `site/translations.js`. Also updated `site/tests/content-model.test.mjs`, `site/README.md`, design/surface documentation and the browser harnesses. Comparing all site-file hashes with this pass's backup found only those six site files changed. Existing quiz questions, routes, support markup, `site/index.html`, `site/styles.css`, font assets and `site/config.js` are unchanged. Official case SHA-256 still matches the value above.

Reproduce the new checks with Playwright CLI `run-code --filename output/playwright/hero-polish-qa.js` and `hero-polish-touch.js`, plus the regression scripts listed above. Keep `hero-flows.js` in its own session because it deliberately changes browser APIs.

Limitations remain: Chromium viewport/touch emulation is not a physical iPhone/Android or actual Instagram browser test; local trace timings do not guarantee device performance. No new research, conversion results or external registration completion is claimed. Other sections have not been redesigned.
