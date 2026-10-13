# Editorial / motion refinement — Team 113

Date: 2026-10-13. Brief: attachment `ba04e085-6502-4721-900c-029326f5cf8d`.
Follow-up to the implemented final creative polish, not a new redesign. The working tree was clean at the start. **No localhost/server started**, no installation, commit, push or deployment.

## Delivered

- Approved Hero, typography, palette, scene order, navigation, themes and quiz/selection logic preserved. No changes to Hero files, app state/resolver, registration constant or official reference materials.
- Stronger university wordmarks, country/name/action hierarchy, comparison cues, controlled orbital artwork and clearer CTA. Hover lift/tilt, light sweep and arrow feedback; existing dialog behavior retained. Dark-theme source contrast corrected.
- Six scenes receive localized, decorative background words/light/orbits: universities, how it works, demo, reviews, account and finale. Decorations are `aria-hidden`, non-interactive and clipped within their sections.
- Reduced section spacing and rebalanced route/demo/quiz illustrations. Reviews have compact editorial framing and natural active-slide height, including after fonts/viewport changes. Height changes are immediate, not expensive height animations; keyboard navigation remains native. Published excerpts, authors and attribution are unchanged.
- New `route-guides.js`: all five directions in RU/KZ/EN contain a rationale, two practical-action paragraphs, two verification paragraphs, an honest Ventorme handoff, an outcome summary and three preview actions. Advice is guidance, not a diagnosis, grant probability or admissions promise.
- Results use three visually connected checkpoints, separate grade pacing and a stronger official-Ventorme destination. Catalog pages do not claim personalization or display session answers. Registration URLs and the no-automatic-answer-transfer notice remain unchanged.
- Refined university/how/routes/reviews/trust/final support copy and contextual quiz/demo hints in all three languages. No new research, product claims, statistics or testimonials.

## Actual motion

- Decorative keyword drift: 18s alternating transform loop.
- Soft light drift: 14s alternating transform/opacity loop.
- Thin orbit drift: 20s alternating transform loop, hidden on small screens.
- Result emblem: 9s alternating transform loop.
- University hover lift/tilt: 650ms; orbit response: 700ms; arrow: 550ms; highlight sweep: 900ms with 450ms opacity; press: 100ms.
- Existing scroll reveals, content transitions and Hero timing retained, not relabeled as new work.
- New scene ambient layers run only near the viewport; no observer means a static fallback. Global user pause, live reduced motion and hidden-tab CSS pause are supported. Result-emblem motion respects global pause/reduced motion/hidden tabs; unlike scene backgrounds, it is not intersection-gated.
- No WebGL, new library, timer-driven background or generated raster assets. This is not a measured 60fps certification.

## Verification performed this turn

Browser: installed Chrome driven by Playwright, using request interception to fulfill `https://ventorme.test/` from local `site/` files. This synthetic address is **not a deployed URL** and no listening HTTP server was created. No registration navigation/submission was performed.

Initial pass (`output/playwright/refinement-offline-results.json`, 129 recorded scenario checks):

- RU/KZ/EN × light/dark × widths 320, 360, 390, 768, 1440: home document has no horizontal overflow; generated registration CTAs match the exact team URL.
- A real three-question click-through with an explicit career goal in each language/theme; three checkpoint results and registration CTA.
- All five catalog routes × three languages × both themes × widths 320, 390, 1440: no horizontal document overflow, no clipped checkpoint/destination containers; catalog does not display personalized answer summaries.
- University dialog opens and closes with Escape. Ambient layer computed playback starts/stops with viewport visibility. Live reduced motion disables new ambient loops. No page JavaScript errors.

Focused correction pass (`output/playwright/refinement-focused-results.json`, 28 recorded scenario checks):

- Global motion-pause button reaches new background layers.
- Both review slides via keyboard End/Home, active height and return to start: RU/KZ/EN × 320, 390, 1440. No horizontal page overflow or clipped wordmark/CTA containers.
- Final university/review captures at 390 and 1440. Personally inspected desktop university and route layouts, mobile result and review layouts, then final dark-theme university/review captures after corrections. Source caption contrast and review empty-space issues corrected.

Automated: all five `npm test` suites pass; added localized route-depth, guide shape, rendered paragraphs, neutral-catalog and English-script assertions. Syntax checks and `git diff --check` pass. Seven changed shipped mirrors match between root and `site/` (normalizing line endings).

Official case SHA256 remains `1FD960B7B4F669D574981AFB32FC00D9C5E52B8E28274D0E6E1A9865576E1EA2`.

## Changed files

Runtime, in both `site/` and the root deployment copy: `content.js`, `scenes.js`, `personal-map.js`, `interactions.js`, `polish.css`, new `route-guides.js`. Tests: both copies of `tests/polish.test.mjs`. Documentation: this report and `FINAL_POLISH_PROGRESS.md`. Local ignored QA script/captures/results are under `output/playwright/refinement-*`.

## Skills and limitations

Applied Frontend Design and Impeccable polish/craft-floor to hierarchy and bounded visual correction; UI/UX Pro Max to density and motion restraint; motion-background and accessible-animation to composited, pausable decorative layers; Playwright to real-browser verification without starting localhost. No missing skills installed.

Not verified this turn: physical devices, Instagram embedded browser, Safari, sustained performance profiling, external registration flow or native-speaker KZ review. Real student research remains a human task. Historical checks in `FINAL_POLISH_QA.md` describe the earlier implementation; the checks above are the evidence for these edits.
