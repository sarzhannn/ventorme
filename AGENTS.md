# Ventorme / Hacknext Team 113 — working context

User preference: for every website creation/change task, select applicable installed Skills, read their complete SKILL.md and required references before implementation, and apply them within the requested scope. Briefly announce actual usage. Do not install missing skills or claim use from names alone. Do not run every skill for unrelated conversation/status questions.

## Start here

- Read the latest user request and check the working tree. Preserve unrelated edits.
- Project requirements: `CODEX_MASTER_PROMPT_HACKNEXT.md`, `reference/PLAN_FOR_CODEX.txt`, `reference/case.html` (all T1–T11), `reference/Положение_Hacknext_2026.docx`.
- `.pages` is the original plan; the master prompt explicitly prefers its readable `PLAN_FOR_CODEX.txt` version.
- Product context: `PRODUCT.md`, `PROJECT_HANDOFF.md`. Handoff contains transferred discussion, not access to another account's conversations or proof of completed work.
- Current full-site behavior/report: `docs/REDESIGN_QA.md`, `docs/REDESIGN_DIRECTION.md` and actual code. `docs/HERO_MULTISELECT_QA.md` records the preserved Hero baseline. Older Hero reports contain historical single-selection/extra-CTA/layout/timing descriptions; do not restore those over the current implementation.
- Official requirements outrank design ideas. Later explicit user changes supersede earlier creative preferences, not official competition constraints. A future-redesign idea in handoff is not authorization to implement it now.

## Non-negotiable constraints

- Team 113. Every registration CTA uses `REGISTRATION_URL` from `config.js`, exactly `https://ventorme.ai/register?utm_source=hacknext&utm_campaign=team-113`.
- Do not alter UTMs, add a local registration/OAuth/backend, invent research/results/testimonials/partnerships/admission guarantees, or claim correlation proves causation.
- Never overwrite or publicly publish official case materials in `reference/`. Internal research documents are not landing-page assets.
- Preserve mandatory plan sections 1–14: Hero, three-step questionnaire, five routes, honest mini-demo, trust/source verification, account/free-paid transparency, four-step explanation, six FAQ topics, final registration, complete RU/KZ/EN, quiz bypass, error/navigation states, internal T1–T11 rationale and real-user test checklist.
- Free-text responses: max 200 characters, no invented NLP analysis, no server persistence. Research with at least five real students remains a human task; no fabricated findings.
- The 2026-10-13 full-redesign request explicitly authorized the completed full-site extension. Future work still needs applicable user authorization; no automatic publication, push, new commit or installations.

## Actual implementation baseline (2026-10-13)

- Static HTML/CSS/ES-module JavaScript, no build dependencies. `site/` is the site; root contains an equivalent deployment copy. Inspect both before editing and keep applicable shipped mirrors synchronized without overwriting diverging user edits. Use relative asset/module URLs.
- Files: `app.js` renders home/quiz/result/catalog and stores session state; `translations.js` contains existing locales plus final Hero overrides; `selection.js` normalizes concerns and resolves routes; `hero.js` supplies SVG and optional motion; `hero.css` supplies approved Hero styling. `content.js` has verified university/review content and new RU/KZ/EN copy; `scenes.js` renders ten supporting scenes; `interactions.js` owns scroll reveals, carousels and disclosures; `experience.css` extends the Hero design system after legacy `styles.css`.
- Preserve huge Unbounded headline, tilted lime strip/CTA, purple gradient background, asymmetric colored cards and orbital SVG. Golos Text is the local body font. No generic SaaS replacement.
- Hero cards toggle 0–4 concerns and NEVER auto-navigate. Only the main CTA starts the quiz, including with no selection. Three CTA labels crossfade with stable dimensions; count and checks expose selection.
- Preserve concerns across languages and in-app back navigation. No persistence across page reloads except language. Explicit third-question priority wins; without a priority show all selected directions, never an arbitrary first concern.
- Mobile DOM/layout: heading, story, question/cards, primary CTA and bypass, small university teaser, motion control. Desktop retains title/action left and cards right. Vertical mobile scrolling is acceptable; horizontal overflow is not.
- Current timing: hover 550ms, return 700ms, headline entrance 900ms with 65ms stagger, cards 850ms with 80ms stagger, selection 600ms, ring 750ms, CTA text 300ms (150ms reduced). Headline sway 9/7/10s, ±0.55/0.8/0.55 degrees. Preserve pause/live reduced-motion and immediate functional updates.
- Teaser retains three verified universities. A full seven-name typographic gallery and two source-attributed English review excerpts are implemented. No partnership or independently verified outcome claims; source is https://ventorme.ai/ (checked 2026-10-13).
- Grade/barrier custom answers are separate, 200 characters each. Demo custom text is session-only, not analysed. Catalog directions are explicitly distinguished from quiz recommendations; all-skipped results are labelled examples.

## Skills routing

Installed roots: `C:/Users/Admin/.agents/skills` and `.agents/skills` in this workspace. Use current session catalog and actual files, not historical aliases.

- Visual UI: `frontend-design`, `ui-ux-pro-max`, `impeccable` as applicable.
- UI review: `web-design-guidelines`.
- Motion: workspace `motion`; relevant global `kinetic-typography`, `micro-interaction`, `animation-principles`, `accessible-animation`, `60fps-animation`, `svg-animation` or `motion-background` according to the specific task.
- Browser verification: `playwright` / `webapp-testing` as applicable.
- Do not rewrite the static stack to match an example skill's React framework. Exact aggregate aliases `web-animation-skills`, `motion-design-skills`, `kinetic-typography-skills` were not found in the previous inventory; verify again only if relevant.

## Verification and handoff

- Run via static server from `site/`: `python -m http.server 4173 --bind 127.0.0.1`. Check whether an existing server is live before starting another. localhost is not a public deployment or a link for other devices.
- `npm test`: registration constant, content model, selection mapping, and new scenes/locales/source-backed data. Browser scripts are in ignored `output/playwright/` with `redesign-` prefix; final captures are under ignored `.impeccable/review/`.
- For UI changes test relevant languages, keyboard/touch, no horizontal scroll and reduced motion proportionately to scope. Historical passing reports do not certify new edits. Respect explicit task-specific limits on testing.
- Full-redesign browser matrix: RU/KZ/EN × 375×667, 390×844, 430×932, 768×1024, 1440×900, 1440×750, 320×740. Follow-up checks cover changed mobile route containment, desktop carousel return, catalog/result wording, keyboard, emulated touch swipes, pause/reduced motion and missing-animation-API fallback. Physical devices, actual Instagram, Safari and real user research remain unverified.
- Report actual files, skill influence, checks performed and limitations. Keep this context current when authorized requirements change.

## Memory boundary

This file is durable project context, not guaranteed account-wide memory. Another account's complete chat history is unavailable unless supplied in the active conversation or exported files. Do not imply otherwise.
