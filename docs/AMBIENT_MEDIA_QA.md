# Ambient particles and source media — 2026-10-14

## Implemented

- CSS-only floating dots, stars, rings and directional/mathematical symbols across Hero, all ten scenes, footer, quiz, catalog and results. Twelve small elements per host; six on mobile. Only visible hosts animate; hidden-tab, user-pause and live reduced-motion states stop the motion. Missing IntersectionObserver leaves a static fallback.
- IELTS/SAT, symbolic digits and maths in the exam notebook/result; these are decorative, aria-hidden, not scores, requirements or predictions. No pointer interception, WebGL, frame loop or new dependency. Seamless 18–30s transform-only loops.
- A pause control is available on quiz/catalog/result views. Its state returns correctly to the Hero control. Core quiz and route decisions are unchanged.
- Seven local university images in the gallery; the three existing Hero teaser universities also receive images. Images are contained on neutral white surfaces without recolouring/distorting the marks. University names, source attribution and no-partnership disclaimer retained.
- Large university background words now concern admissions/campus/opportunities, localized in RU/KZ/EN, rather than institution names.
- Three review cards: original English excerpts in every locale, explicitly separate English editorial summaries, original-source links. Aidana has her source-linked portrait; Aibek and Dana retain initials because the source supplies no photographs for them. No invented faces, surnames, ratings or outcomes. Localized interface labels remain intact.

## Review limitation

The request for full verbatim externally sourced reviews was not implemented. The user was informed: short exact excerpts plus attributed summaries are provided instead, with links to the original. The three verbatim excerpts total 20 words. Full text can be formatted if supplied by the user. Summaries are visibly marked as summaries, not quotations or original testimonials.

## Source provenance

Checked https://ventorme.ai/ on 2026-10-14. All binary assets were downloaded unchanged from its public page. Being published there is not proof of an independent licence or a university endorsement of this project; confirm reuse permissions before public distribution.

Local files under `site/assets/official/` and mirrored `assets/official/`:

| File | Source URL |
| --- | --- |
| ucl.webp | https://ventorme.ai/figma/studentlanding/v4f/uni-ucl.webp |
| kings.webp | https://ventorme.ai/figma/studentlanding/v4f/uni-kings.webp |
| bocconi.webp | https://ventorme.ai/figma/studentlanding/v4f/uni-bocconi.webp |
| nazarbayev.webp | https://ventorme.ai/figma/studentlanding/v4f/uni-nazarbayev.webp |
| taylors.webp | https://ventorme.ai/figma/studentlanding/v4f/uni-taylors.webp |
| arizona.webp | https://ventorme.ai/figma/studentlanding/v4f/step-uni-arizona.webp |
| curtin.webp | https://ventorme.ai/figma/studentlanding/v4f/step-uni-curtin.webp |
| aidana.png | https://ventorme.ai/figma/studentlanding/testi-parent.png |

## Checks performed

- All five `npm test` suites pass in the shipped root and site. Added checks for local asset existence, English quotations in all locales, localized admission words, review summaries and deterministic aria-hidden particle markup. Registration constant remains exact.
- Serverless Chrome/Playwright: local files fulfilled via intercepted browser requests; **no localhost/listening server started**. No registration/external CTA submitted. Installed Chrome/package reused, nothing installed.
- RU/KZ/EN at 320, 360, 390, 768 and 1440px: no horizontal document overflow; seven gallery images decode successfully. Three-slide review keyboard End/Home navigation and natural active-slide height checked across that matrix.
- Actual Hero transform changes sampled over time; pause in quiz → back to Hero → resume checked. Live reduced motion disables CSS particle animations and disables the pause button appropriately.
- Quiz grade selection → next → skipped barrier → explicit exam priority reaches exam result, including exam particles. Existing registration URLs checked on tested views.
- Screenshots reviewed: desktop universities, exam notebook, portrait review, normal quiz; mobile university/quiz and dark-theme portrait review/quiz. Normal and reduced-motion captures saved. No page JavaScript errors.
- Browser script/results/captures: ignored `output/playwright/particles-*`. Physical mobile devices, Instagram and Safari were not tested; no sustained frame-rate certification.

## Changed files / Skills

Root and `site/`: new `ambient.js`, `ambient.css`, `media-copy.js`; changed `app.js`, `hero.js` (pause-state synchronization only), `index.html`, `content.js`, `scenes.js`, `tests/scenes.test.mjs`; eight local image assets. Documentation: this report and AGENTS.md.

Frontend Design preserved the established identity and kept decoration away from primary content. Motion Background selected slow, low-cost composited motion; Accessible Animation supplied reduced-motion/pause behavior; Playwright verified rendering and interactions without localhost. Their SKILL.md files were read this turn. No commit, push, publication or official-case modification.
