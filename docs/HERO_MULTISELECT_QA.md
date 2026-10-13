# Final Hero polish — Team 113

Date: 2026-10-13. Scope: Hero and directly related selection / quiz-entry / ambiguous-result state only. Existing stack, five routes, support sections and official case preserved. No deployment or new libraries.

Local preview: http://127.0.0.1:4173/

## Changes

- Four native toggle buttons allow 0–4 concerns. A card never navigates. Check marks, lift and outline communicate selection without relying on color alone.
- Only the primary Hero CTA opens the quiz; zero selection is valid. Its three localized labels crossfade in a shared grid slot, reserving the longest label's dimensions. One atomic live status announces the count.
- Selected concerns survive language changes and in-app back navigation. They are intentionally not stored across reloads. DOM/tab order is question → cards → CTA; desktop CSS retains the left CTA/right card composition.
- Existing third quiz question clarifies priority. An explicit answer wins. Without one, multiple concerns produce the matching existing route choices, not an arbitrary first route. All three original questions and five routes remain.
- Shorter RU/KZ/EN copy. No guaranteed admission, grants or invented research claims.
- A small static university teaser sits at the Hero boundary. Taylor's University, Arizona State University and Curtin University were verified in the official site's university section: [Ventorme](https://ventorme.ai/). These are not labelled partners. No additional marquee was added to the existing ambient motion.
- Root deployment files mirror `site/` byte-for-byte for all changed runtime/test files.

## Motion actually implemented

| Interaction | Timing / behavior |
|---|---|
| Headline entrance | 900 ms; 65 ms line stagger, inner spans |
| Headline sway | Separate outer spans: 9 / 7 / 10 s, different starting phases; ±0.55° / ±0.8° / ±0.55° around each line's resting angle |
| Card entrance | 850 ms; 0 / 80 / 160 / 240 ms stagger, triggered when cards enter view |
| Hover / return | Existing 550 / 700 ms retained |
| Selection spring | 600 ms native Web Animations; persistent small lift/scale and check mark |
| Ring response | 750 ms; responds to selection count, not a randomly chosen concern |
| CTA text | 300 ms opacity crossfade; 150 ms in reduced motion |
| Ambient mesh / orbit | Existing 16/13 s mesh, 9 s ring, 7 s satellite and 6 s star loops retained |

Entrance and continuous headline motion use different transform layers. State updates do not wait for animation completion. Existing pause/resume, offscreen suspension and language entrance remain. Reduced motion removes spatial loops and springs while retaining short opacity feedback. Content is visible without the motion enhancement.

## Skills read and applied

Exact local instruction files, read completely during this task:

| SKILL.md | Applied principle |
|---|---|
| `C:/Users/Admin/.agents/skills/frontend-design/SKILL.md` | Preserve the established editorial identity instead of introducing a generic template |
| `C:/Users/Admin/Desktop/Hackathon/.agents/skills/ui-ux-pro-max/SKILL.md` | Explicit multi-selection, native keyboard controls, stable CTA geometry and contextual atomic count; local UX search used |
| `C:/Users/Admin/.agents/skills/impeccable/SKILL.md` | Scoped polish, hierarchy and copy reduction; `reference/polish.md` and `reference/craft-floor.md` also read; two batched visual review rounds |
| `C:/Users/Admin/.agents/skills/web-design-guidelines/SKILL.md` | Focus-visible, semantics, responsive wrapping; current [Web Interface Guidelines](https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md) read |
| `C:/Users/Admin/Desktop/Hackathon/.agents/skills/motion/SKILL.md` | Transform/opacity enhancement, no extra animation library; `best-practices/index.md` and `motion.md` read |
| `C:/Users/Admin/.agents/skills/kinetic-typography/SKILL.md` | Independent line phases, small amplitude, accessible unsplit heading label and separate entrance/loop layers |
| `C:/Users/Admin/.agents/skills/accessible-animation/SKILL.md` | Remove spatial movement under reduced motion, retain brief opacity feedback and visible pause control |
| `C:/Users/Admin/.agents/skills/playwright/SKILL.md` | Real Chromium interaction checks, screenshots and motion inspection via installed CLI |

Exact requested aliases `web-animation-skills`, `motion-design-skills`, and `kinetic-typography-skills` were not found as installed skill packages. Actual `motion` and `kinetic-typography` skills were used instead. Nothing installed.

## Checks actually completed

- `npm test` passed in both root and `site/`: centralized registration URL, content model, all 15 nonempty concern combinations (including reversed selection order), five explicit priorities, legacy singular input and general-quiz fallbacks.
- `node --check app.js` and `node --check hero.js` passed.
- Chromium: RU/KZ/EN × 1440×900, 1440×750, 390×844, 375×667, plus 320×740: 15 combinations. No document horizontal overflow with zero or 1–4 selected cards. Cards toggle off. CTA width/height remain unchanged. Bypass text fits its element.
- All three languages: selection survives language changes and quiz/back navigation; skipping all three questions with two concerns offers exactly those two directions. Existing catalog exposes all five routes; each explicit quiz goal opens a route detail.
- Registration links rendered in tested result views use exactly `https://ventorme.ai/register?utm_source=hacknext&utm_campaign=team-113`; static test covers generated registration CTAs and the shared constant.
- Keyboard Space and Enter toggle cards without navigation; focus outline is visible; Enter on CTA opens the quiz with all concerns.
- Chromium touch emulation at 390×844: select/deselect, language switch, CTA and quiz completion with animations enabled, unavailable localStorage and no View Transitions API. No page errors.
- Live reduced-motion switch removes all eight ambient loops; selected state stays usable with `transform: none`. Pause/resume changes all eight loops' play state.
- Headline transforms sampled 700 ms apart differ for all three lines; ring transform changes after selection.
- Two-second Chromium DevTools trace after entrance: 0 Layout and 0 Paint events. This is an idle ambient-motion sample, not an FPS/device-performance guarantee.
- Screenshots inspected for desktop, mobile, selected/unselected and reduced-motion states. Normal vertical scrolling is intentional on phones; CTA follows the four cards.
- Changed runtime/test root mirrors hash-match `site/`. `reference/case.html` unchanged, SHA-256 `1FD960B7B4F669D574981AFB32FC00D9C5E52B8E28274D0E6E1A9865576E1EA2`.

Local browser scripts/screenshots are under ignored `output/playwright/`: `hero-multiselect.js`, `hero-multiselect-motion.js`, `hero-multiselect-visual.js`, `multi-final-*.png`, `multi-normal.png`, `multi-reduced.png`. An initial catalog assertion was corrected to wait for the existing asynchronous view update; the complete functional run then passed.

## Not checked / next stage

No physical phone, Instagram embedded browser, Safari/WebKit, screen-reader session, formal accessibility certification, or native-language editorial review. No production deployment tested. Broader section redesign and a full university gallery remain separate work; neither was started here.

## Changed files

`app.js`, `hero.css`, `hero.js`, `translations.js`, new `selection.js`, `package.json`, `tests/content-model.test.mjs`, new `tests/selection.test.mjs` — each in both `site/` and the root deployment mirror. Documentation: this file and the latest-report pointer in `HERO_QA.md`.
