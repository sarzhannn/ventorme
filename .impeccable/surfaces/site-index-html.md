---
version: 1
slug: "site-index-html"
primary_target: "site/index.html"
related_targets: ["site/hero.css", "site/hero.js", "site/app.js", "site/translations.js", "site/experience.css", "site/scenes.js", "site/interactions.js", "site/content.js"]
---

# Ventorme landing and route finder — unexplored universe

Mode: Persuade. Scope: the approved Hero, shared header, ten supporting scenes and the connected quiz/catalog/result flow. The user's 2026-10-13 request authorized the completed full-site extension of BOLD EDITORIAL × COLORFUL FUTURE × KINETIC TYPOGRAPHY × PLAYFUL MOTION. The Hero remains pinned.

The current direction contract is [docs/REDESIGN_DIRECTION.md](../../docs/REDESIGN_DIRECTION.md). The Hero baseline is [docs/HERO_MULTISELECT_QA.md](../../docs/HERO_MULTISELECT_QA.md); older Hero documents contain superseded layouts and timings. The extracted system lives in [DESIGN.md](../../DESIGN.md).

The future feels unexplored: oversized local Unbounded type anchors a midnight field with violet/coral mesh, a tilted lime headline strip and dominant lime CTA. Four differently colored, asymmetrical concern cards sit around crossing authored SVG ribbons. Mobile DOM/layout order is heading, story, question/cards, main CTA and bypass, three-university teaser, then motion control. Desktop places title/story/action on the left and choices on the right. Vertical mobile scrolling is expected; the page must not overflow horizontally.

All four concern cards independently toggle, allowing 0–4 selections. They display checks and a localized live count/status, and turn the ring without navigating. Only the Hero's main CTA starts its quiz entry; it works with zero, one or several concerns. Three overlapping CTA labels crossfade without changing dimensions. The catalog bypass remains available. Concerns persist across languages and in-app back navigation, but not reloads. Explicit question-three priority wins; without a priority, results retain every selected direction. All-skipped results are labelled examples, and catalog views are distinguished from questionnaire recommendations.

Hero hover is 550ms and return 700ms. Headline entrances use 900ms/65ms stagger; cards enter on visibility at 850ms/80ms stagger. Selection uses 600ms feedback and a 750ms ring response. Headline sway runs at 9s/7s/10s with ±0.55/0.8/0.55 degrees. CTA labels use 300ms crossfades, or 150ms with reduced motion. Ordinary in-app return preserves entrance bookkeeping; changing language resets it. The localized motion control, live reduced-motion preference and hidden/offscreen suspension govern Hero loops. Static content is always visible and functional state changes never wait for motion.

The implemented supporting sequence is: university poster gallery, uncertainty notes, four-step journey, five-route notebook, honest mini-demo, source-attributed reviews, trust/source verification, account/free-paid transparency, six-topic FAQ and final registration. The seven university names are typographic treatments, not partner logos. Two short published English review excerpts retain original-language labels and source links. Both galleries support touch scrolling, pointer drag, controls and keyboard navigation. Route tabs change content without moving page position; trust and FAQ panels expose disclosure state.

Supporting scenes alternate cream, midnight, lilac, ultramarine, coral and lime. Their layouts extend the Hero's typography, asymmetric corners and orbital forms. Question-note text is midnight on the light colored notes. Optional reveals use 900ms, notes 850ms with 65ms stagger, final type 1000ms, tab/demo content 600ms and disclosure entrances 450ms. User pause and reduced motion suppress these enhancements, and missing animation APIs leave the flow available.

Quiz, catalog and result views use the same dark header, local fonts, lilac background, cream fields/panels and lime actions. All required sections and RU/KZ/EN remain. Each custom-answer field permits 200 characters; grade and barrier answers remain separate. Demo text is held only in session memory and is not analysed. Registration links use the team-113 `REGISTRATION_URL` exactly; no local registration/backend is added. Source and limitation copy stays near the relevant claims.

Implementation uses authored CSS/SVG and self-hosted fonts. No generated raster assets were added. The stylesheet order is base, Hero, then experience. The root deployment copy and `site/` copy remain synchronized. This brief records the implemented extension, not authorization for another redesign or publication. Existing evidence is recorded in `docs/REDESIGN_QA.md`; it does not replace future checks after a new change.
