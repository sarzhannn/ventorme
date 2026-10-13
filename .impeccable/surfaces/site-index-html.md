---
version: 1
slug: "site-index-html"
primary_target: "site/index.html"
related_targets: ["site/hero.css", "site/hero.js", "site/app.js", "site/translations.js"]
---

# HERO — unexplored universe

Mode: Persuade. Scope: hero, header, reusable tokens and selected-concern transition feedback. The user replaced the former cream/pastel direction with BOLD EDITORIAL × COLORFUL FUTURE × KINETIC TYPOGRAPHY × PLAYFUL MOTION.

The current direction contract and surface-specific composition live in [docs/HERO_DIRECTION.md](../../docs/HERO_DIRECTION.md). The extracted system lives in [DESIGN.md](../../DESIGN.md).

The future feels unexplored: oversized local Unbounded type anchors a midnight field with violet/coral mesh, a lime second headline line and dominant lime CTA. Four differently colored, asymmetrical concern cards sit around crossing authored SVG ribbons. Mobile places title, explanation, CTA, promise and catalog bypass before the scene. Desktop places the editorial story beside the choice constellation.

Selecting a concern stays in the hero, displays a check and live status, and turns the ring. The main CTA enters the existing quiz with that concern; a nearby mobile/tablet continuation avoids scrolling back. The choice persists on return. The question precedes the cards. The main CTA also works without a selection; the catalog bypass works without the quiz. No new route or product capability is implied.

Headline entrances run once at 640ms with 65ms stagger; each card enters on actual visibility at 600ms with 80ms stagger. Selection has 460ms spring-like feedback and a 680ms ring turn. Continuous mesh and orbital motion has a localized pause/resume control, live reduced-motion handling, and hidden/offscreen suspension. Static content is always visible. Navigation never waits for feedback; the enhanced transition has an immediate functional fallback.

Supporting sections, quiz questions, five routes, mini-demo, FAQ and REGISTRATION_URL retain existing behavior and layouts. Shared typography/header styling and the chosen-concern chip are the documented cross-surface changes. Use CSS and authored SVG; no generated raster assets, WebGL, external downloads or skill scripts.
