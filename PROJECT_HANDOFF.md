# PROJECT HANDOFF — VENTORME / HACKNEXT 2026 / TEAM 113

> Prepared from the user's project discussion. This is a context transfer, **not** a verified audit of the local source tree. The receiving Codex must inspect the actual repository before making changes.

## Project and environment
- Product: Ventorme conversion landing page for school students, Hacknext 2026, Team 113.
- Windows workspace: `C:\Users\Admin\Desktop\Hackathon\site`.
- Local preview previously used: `npx serve .` from the site folder.
- User uses VS Code with OpenAI Codex, transitioning from one Plus account to another because of usage limits.
- Deadline discussed: 14 October 2026, 23:59 Astana time; confirm against official rules.
- **Registration URL (preserve verbatim in all registration CTAs):** `https://ventorme.ai/register?utm_source=hacknext&utm_campaign=team-113`. Centralize as `REGISTRATION_URL`; do not create a separate registration form.

## Required source-of-truth documents
Inspect, if present, `PLAN_FOR_CODEX.txt`, README, project instructions, official Hacknext case materials, and the actual source files. If a document is missing, do not invent its content. Do not publish confidential case tables.

## Current visual direction (approved)
- Distinctive oversized editorial Russian headline `А ЧТО / ПОСЛЕ / ШКОЛЫ?`, with `ПОСЛЕ` on a tilted acid-lime rectangle.
- Dark midnight-purple background, electric-violet/pink gradients, warm coral, lavender, cream and acid-lime accents.
- Right-hand asymmetric arrangement of four tilted colorful problem cards with a purple orbit/ring behind them.
- Bright lime CTA `Найти свой первый шаг`; RU/KZ/EN language switcher; skip-quiz option.
- Avoid generic SaaS aesthetics, identical cards, bland microcopy, artificial marketing triplets, and unrelated color systems.
- The latest user screenshot showed strong visual foundation; remaining concerns: bottom skip link may be clipped on shorter viewports; improve composition and meaningful microcopy; ensure CTA and problem selection are clearly linked.

## Existing motion work (reported by prior Codex, not independently verified)
Files `hero.css` and `hero.js` reportedly changed:
- Card and CTA hover: 550ms; hover return: 700ms.
- Heading entrance: 900ms; cards entrance: 850ms.
- Selection spring: 600ms; ring reaction: 750ms.
- Transition exit: 350ms; entrance: 800ms.
- JS syntax checked; extended browser QA not performed.
- Desired subtle independent oscillation of headline rows, 6–10s cycle, ~0.4–1 degree; reduced-motion support.

## Hero UX must be verified / implemented
Four problems:
1. `Не могу выбрать профессию`
2. `Не знаю, куда поступать`
3. `Боюсь не получить грант`
4. `Не знаю, как подготовиться к экзаменам`

- MULTI-SELECT 1–4 problems with toggle/deselect and visible accessible selected states.
- Clicking a card must **not** automatically start quiz. Only primary CTA starts quiz.
- CTA should reflect selection; no-selection must still allow a general quiz.
- Preserve all selected problems into quiz/results; never arbitrarily discard a selection.
- Responsive mouse/touch/keyboard; focus-visible; reduced motion.
- Copy should feel human and specific, e.g. `Тебе не нужен готовый ответ на всю жизнь. Нужен следующий шаг.` / `Что не даёт определиться?` / `Выбирай всё, что откликается.` These are creative suggestions, not required verbatim.

## Mandatory product functionality
- Three-step quiz: grade (7–8, 9, 10, 11, other), main obstacle (including custom text up to 200 characters), desired first result. Preserve exact options from the official plan where available.
- Five personalized routes: career choice, university selection, grants/financing, IELTS/SAT or exams, admission roadmap.
- Mini-demo with question like `Какое занятие тебе интереснее?`, presented honestly as an illustration, not a diagnosis.
- Skip-quiz catalog, usable without registration or questionnaire.
- How-it-works in four clear steps; trust/accuracy and official source information; honest account value and free/paid transparency; six official FAQ topics; strong final CTA.
- Full RU/KZ/EN localization including quiz, routes, FAQ, errors, CTA, state changes; preserve current language and answers while navigating.
- No fake university admissions, testimonials, partner relationships, grants, pricing, interviews, or statistics.

## Full redesign direction
Preserve Hero design and extend a coherent system across the entire landing page. Distinctive alternating scenes and visual storytelling, not a monotonous card grid. Include:
- **Interactive university gallery**: names verified on official `https://ventorme.ai/` or trusted project sources; next/previous buttons, swipe/drag, snap, depth, motion, mobile behavior. Potential names to verify: UCL, King's College London, Bocconi, Nazarbayev University, HKU, CUHK, NYU Shanghai, Shanghai Jiao Tong University. Do not imply partnerships or guaranteed admission.
- **Real testimonials**: retrieve exact verified quotes/authors from official Ventorme or existing verified project materials, with attribution and source. If unavailable, do not fabricate. Use animated accessible carousel.
- **Original Ventorme inspiration**: study original website's motion, university presentation, before/after story, educational offerings; reinterpret within the new editorial purple/lime visual system, do not pixel-copy.
- **Motion**: kinetic typography, scroll reveals, parallax/orbits, gentle gradients, purposeful microinteractions and section transitions; reduced-motion and mobile performance.
- **Content**: compelling, emotionally grounded copy for students, no generic AI clichés or manipulative guarantees.
- **Final QA**: 375×667, 390×844, 430×932, 768×1024, 1440×750, 1440×900; no horizontal overflow; functioning CTAs, multi-select, quiz, routes, languages, carousel controls, FAQ, keyboard support.

## Analytics from official case (as discussed; verify original tables)
- T1: 1,277 new visitors; 244 registrations within 3 days (~19.1%); 352 (~27.6%) left under 10 seconds; 511 (~40%) never scrolled; 184 (~14.4%) started mini-quiz.
- T2: mobile 1,028 (~80.5%), 160 regs (~15.6%); desktop 244, 80 regs (~32.8%).
- T3: Instagram 670 visitors, 74 regs (~11%); Google 158, 71 regs (~44.9%).
- T8: 184 quiz starts, 175 finishes (~95.1% of starters), 156 final CTA clicks, 124 registrations among quiz starters; mobile starters 165, 110 regs; mobile nonstarters 863, 50 regs. These are **correlations, not causal evidence**.
- T10: Russian 996 visitors, English 267, Kazakh 13; Kazakh sample is too small for reliable conclusions.
- T11: Google registration 135, email+password 109.
Prioritize mobile-first first-screen clarity and visible quiz entry. Do not expose case data publicly.

## Codex Skills — verify before claiming use
Possible installed Skills: `frontend-design`, `ui-ux-pro-max`, `impeccable`, `web-design-guidelines`, `web-animation-skills`, `motion-design-skills`, `kinetic-typography-skills`. Find actual `SKILL.md` files and read the relevant ones. Do not claim use merely from names or install missing Skills without need.

## Work process / safeguards
1. Inspect git status, current branch, source files, dependencies, and project docs.
2. Read this handoff and official plan, then inspect actual code; code and official requirements override any mistaken claims here.
3. Preserve approved Hero, functioning features, and the registration UTM link.
4. Implement full-site redesign in coherent stages: audit → tokens → core UX/quiz → sections → motion → mobile QA.
5. Never publish/deploy automatically without user approval and review.
6. Report changed files, real Skill usage, verified source content, checks actually performed, and remaining issues.
7. Keep work resumable with small Git commits/checkpoints.

## Suggested first message to new Codex
`Продолжаем существующий Ventorme / Hacknext Team 113. Прочитай PROJECT_HANDOFF.md, PLAN_FOR_CODEX.txt (если есть), README, актуальный код и доступные SKILL.md. Сначала кратко проверь реальное состояние проекта и Git, не переписывай Hero и не меняй файлы до моего следующего промпта. Затем я дам задание на полный редизайн.`
