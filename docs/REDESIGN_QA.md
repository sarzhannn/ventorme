# Full redesign — implementation and QA

Date: 2026-10-13. Team 113. Canonical artifact: `site/`. Local preview: http://127.0.0.1:4173/.

## State at interruption and continuation

Before continuation, all ten supporting scenes and the focused quiz/catalog/result views were implemented. The approved Hero, its multi-select and its motion were preserved. The following corrections had already landed: separate custom grade/barrier answers; real 200-character mini-demo input; mobile route containment; carousel previous control at its desktop end; catalog-versus-personal-result explanations.

The completed initial browser matrix was not rerun wholesale. Continuation verified those changes in source and targeted browser regression, corrected one remaining CSS contrast defect, synchronized the existing root deployment mirror, and refreshed documentation. No reset, commit, push, publication, dependency installation or stack migration was performed.

## Delivered scope

- Approved purple/lime Hero: 0–4 concern toggles; no automatic navigation; main CTA and selection count agree; a quiz without selection is allowed.
- University scene: seven source-backed names, authored typographic posters, native snap, mouse drag, touch swipe, arrow controls and keyboard Home/End/arrows. No fabricated logos or partnership assertions.
- Editorial question scene; interactive four-step process with active-step explanation.
- Five localized route tabs with substantive actions and limitations, plus the separate five-direction catalog without a quiz.
- Three-question quiz, progress, back/next/skip/edit/restart, empty-answer validation, separate custom answers, preserved state across languages. Explicit final-question priority wins; otherwise all selected concerns remain available.
- Mini-demo with five options and a genuine custom text field, explicit demonstration/no-analysis copy and a next step.
- Two verified, attributed review excerpts; controlled slider and progress indicator, no autoplay or fabricated identities/ratings.
- Trust/verification disclosures; source-backed free/paid descriptions; six FAQ topics; final registration scene.
- All UI copy RU/KZ/EN. University proper names and genuine short English review quotations remain untranslated and are marked with localized source-language attribution. No machine translation is presented as an original testimonial.
- All registration links use the existing `REGISTRATION_URL` exactly; no local registration or transmission of answers was added.

## Primary source and product truth

Verified on the [official Ventorme website](https://ventorme.ai/) during this task on 2026-10-13:

- University ribbon and directory: UCL, King's College London, Bocconi, Nazarbayev, Taylor's, Arizona State and Curtin. The gallery says these appear on the site, not that they are partners or guaranteed destinations.
- Published review authors Aibek and Dana; only short exact excerpts used, 14 English words total. Attribution is to the official site's published reviews, not independent validation of their authors/results.
- Free mini career test, IELTS/SAT level checks and education-profile setup; Plus lists further preparation/admission tools. No copied price or permanent guarantee of availability. Conditions link to the current source.

The original plan's four-step account journey is retained; the three-question finder is explained inside step two. Original quiz options, five routes and six FAQ topics are preserved. Internal T1–T11 rationale and real-student research checklist remain in `docs/UX_DECISIONS.md` and `docs/USER_TEST_CHECKLIST.md`; internal case data are not embedded in the public site.

Protected `reference/case.html` SHA-256 remains:
`1FD960B7B4F669D574981AFB32FC00D9C5E52B8E28274D0E6E1A9865576E1EA2`.

## Actual motion

Existing Hero retained: kinetic line entrance (900ms), card entrance (850ms with stagger), selection spring (600ms), ring reaction (750ms), hover/return (550/700ms), independent slow headline sway and transformed gradient layers. Hero exit/entry remains progressive-enhancement motion.

New scenes: observed heading reveals (900ms); question-note entrances (850ms, 65ms stagger); final-title entrance (1000ms); active university-poster depth/orbit transitions; native smooth carousel snap; review progress (650ms); route/demo/quiz content entrance (600ms); selected journey-description transition (550ms); FAQ opening (450ms), plus-icon rotation and hover/tap feedback. Final orbit has a scroll-linked transform where CSS view timelines are supported; it stays static otherwise.

Only transform/opacity carry movement; no WebGL, GSAP, Motion runtime or new remote animation dependency. Content is visible by default. OS reduced motion, live preference changes and manual pause are respected for the moving scenes. Native scrolling and immediate state updates do not await decorative animation. FAQ closing immediately hides the answer; only its icon animates on close.

## Checks actually completed

### Before continuation

Chromium, RU/KZ/EN at each size: 375×667, 390×844, 430×932, 768×1024, 1440×900, 1440×750, 320×740 — 21 combinations.

- Ten scenes render; no document horizontal overflow; five route tabs; all six FAQ open/close; registration hrefs exact.
- In all three languages: two selected concerns do not navigate; CTA enters quiz; missing choice/custom text errors; separate free answers survive back/next and language changes; multi-result retains both concerns; all five catalog details work; restart/edit; all mini-demo options and escaped free text; rail buttons and Home/End boundaries.
- Normal-motion runtime: changing background transform, 600ms selected-card animation, scroll heading reveal and route fade observed. Desktop gallery drag and previous-from-end work; tab arrow keys and FAQ Enter work; manual pause and live reduced-motion changes work.
- With optional IntersectionObserver, Element.animate and View Transitions unavailable, content, tabs and quiz remain functional.
- Chromium touch emulation at 390×844: two-card selection, primary CTA, actual native swipes in both rails and no document overflow.
- No page JavaScript errors in these passing flow/motion/touch scripts.

### Targeted continuation checks

- Five route tabs × RU/KZ/EN × widths 320/375/390/768: headings, descriptions, lists and CTA bounds stay inside the notebook, not just inside the document. Passed after the grid fix.
- Catalog route copy explicitly says this is not personal analysis; an all-skipped quiz calls its route an example. Exact registration UTM checked again.
- Four question-note colors verified from computed styles at 1440 and 390: text `rgb(24,20,61)`; contrast ratios 12.35, 8.58, 16.12 and 14.69. Both updated captures inspected. A cached stylesheet initially showed the old rule; final verification disabled browser cache and confirmed the actual fixed file.
- `npm test` passed in both root and `site/`: registration constant, content model, 15 concern combinations/five priorities, new scenes/locales/source content.
- `node --check` passed for changed JavaScript modules; `git diff --check` passed (only Git line-ending warnings).
- Hash comparison confirmed all runtime deployment mirrors match. Local HTTP returned 200. Official case checksum unchanged.
- Impeccable detector ran once on the changed scene/application files: no findings. This is a static detector result, not an accessibility certification.

### Evidence

Local ignored scripts: `output/playwright/redesign-functional.js`, `redesign-motion.js`, `redesign-touch.js`, `redesign-regression.js`, `redesign-contrast.js`, and screenshot helpers. Run with an installed Playwright CLI: `playwright-cli --session <name> run-code --filename <script>` against port 4173.

Final captures: `.impeccable/review/redesign-desktop.png`, `redesign-mobile.png`, localized viewport frames, and desktop/mobile section closeups. Section-only captures hide sticky chrome solely to avoid screenshot overlap; full-page captures preserve the UI. Do not interpret a static screenshot as motion evidence.

## Skills actually applied

Complete relevant SKILL.md instructions were read for `frontend-design`, `ui-ux-pro-max`, `impeccable`, `web-design-guidelines`, workspace `motion`, and `playwright`.

- Frontend Design / UI/UX Pro Max: inherited the pinned identity, distinct scene compositions, mobile containment, deliberate type hierarchy, usable targets. Generic search palette/font suggestions were rejected where they conflicted with the approved Hero.
- Impeccable: documented direction, code-led extension, batched visual inspection, one detector pass, independent material-readiness review and documentation handoff. Review identified the notes contrast and stale design documentation.
- Web Design Guidelines: keyboard alternatives, focus handling, semantic controls, disclosure/tab ARIA, input labels, state preservation and reduced motion.
- Motion: finite optional reveals, transform/opacity motion, observer/listener cleanup, live reduced-motion cancellation and static fallbacks; retained static stack.
- Playwright: real Chromium flows, selected viewport captures, native touch emulation and computed-style checks, not screenshot-only claims.

Requested aggregate aliases `web-animation-skills`, `motion-design-skills`, `kinetic-typography-skills` were not installed. Applicable installed motion guidance was used; nothing was downloaded.

## Remaining limits / deployment

The static site can be uploaded from `site/`; root mirror is synchronized for the existing workflow. It has not been deployed or committed by this task. Never upload `reference/`, internal research, attachments or the entire workspace to a public site.

Still needed outside this implementation: real Safari/iOS/Android/Instagram testing, external registration end-to-end verification on the deployed URL, independent native-speaker copy review, real network/device performance measurements, and required research with at least five real students. Chromium emulation does not certify those. No conversion improvement or research result is claimed.

## Review and documentation closure

Independent Impeccable finish review returned `fix` for two material issues only: note contrast and stale design documentation. The verdict pass scored both resolved and returned `ship`. That verdict covers those two fixes, not a new whole-site audit or a device certification.

The documentation handoff merged the implemented system into token-bearing `DESIGN.md`, `.impeccable/design.json` and `.impeccable/surfaces/site-index-html.md`. The sidecar parses successfully; valid palette/font definitions, tonal ramps and component previews were preserved. No new visual direction was introduced. README and AGENTS now point to the full-site baseline instead of obsolete Hero-only instructions.
