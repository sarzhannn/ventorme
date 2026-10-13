---
name: Ventorme — unexplored universe
description: Bold editorial typography, a colorful future and purposeful playful motion.
colors:
  midnight: "#18143d"
  ultramarine: "#3431ae"
  electric: "#8754ef"
  lime: "#d6fa64"
  coral: "#ff9c85"
  cream: "#f8f6f1"
  lilac: "#dfd3ff"
  hero-muted: "#d0cbe5"
  exam-surface: "#31307d"
  selection-bg: "#e8dcff"
  selection-ink: "#342264"
  text-soft: "#57516c"
  stroke: "#aaa2ba"
  focus: "#6435cc"
  lime-hover: "#c8ee52"
typography:
  display:
    fontFamily: 'Unbounded, "Golos Text", sans-serif'
    fontSize: "clamp(37px, 11.3vw, 49px)"
    fontWeight: 800
    lineHeight: 1.18
    letterSpacing: "-.04em"
  body:
    fontFamily: '"Golos Text", ui-sans-serif, system-ui, sans-serif'
    lineHeight: 1.55
  slogan:
    fontFamily: '"Golos Text", ui-sans-serif, system-ui, sans-serif'
    fontSize: "17px"
    fontWeight: 500
    lineHeight: 1.45
    letterSpacing: "-.018em"
  title:
    fontFamily: '"Golos Text", ui-sans-serif, system-ui, sans-serif'
    fontSize: "20px"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-.03em"
  label:
    fontFamily: '"Golos Text", ui-sans-serif, system-ui, sans-serif'
    fontSize: "14px"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "-.02em"
  action:
    fontFamily: '"Golos Text", ui-sans-serif, system-ui, sans-serif'
    fontSize: "16px"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "-.025em"
  headline:
    fontFamily: 'Unbounded, "Golos Text", sans-serif'
    fontSize: "clamp(28px, 4vw, 56px)"
    fontWeight: 800
    lineHeight: 1.16
    letterSpacing: "-.04em"
  view-title:
    fontFamily: 'Unbounded, "Golos Text", sans-serif'
    fontSize: "clamp(27px, 3.8vw, 48px)"
    fontWeight: 800
    lineHeight: 1.16
    letterSpacing: "-.04em"
rounded:
  strip: "3px"
  compact: "8px"
  control: "12px"
spacing:
  small: "8px"
  control-gap: "12px"
  card-inset: "14px"
  page-inset: "18px"
  section-gap: "22px"
  tablet-gap: "28px"
  tablet-inset: "32px"
  desktop-inset: "48px"
  scene-space: "clamp(64px, 8vw, 120px)"
components:
  button-primary:
    backgroundColor: "{colors.lime}"
    textColor: "{colors.midnight}"
    typography: "{typography.action}"
    rounded: "{rounded.control}"
    padding: "10px 12px 10px 18px"
    width: "100%"
  button-catalog:
    backgroundColor: "transparent"
    textColor: "{colors.cream}"
    padding: "8px 0"
    width: "100%"
  concern-career:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.midnight}"
    typography: "{typography.label}"
    rounded: "12px 34px 12px 12px"
    padding: "14px"
  concern-universities:
    backgroundColor: "{colors.coral}"
    textColor: "{colors.midnight}"
    typography: "{typography.label}"
    rounded: "28px 12px 12px 12px"
    padding: "14px"
  concern-grants:
    backgroundColor: "{colors.lilac}"
    textColor: "{colors.midnight}"
    typography: "{typography.label}"
    rounded: "12px 12px 32px 12px"
    padding: "14px"
  concern-exams:
    backgroundColor: "{colors.exam-surface}"
    textColor: "{colors.cream}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "14px"
  language-selected:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.midnight}"
    rounded: "{rounded.compact}"
    padding: "6px 8px"
  motion-toggle:
    backgroundColor: "transparent"
    textColor: "{colors.hero-muted}"
    padding: "5px 0"
  selected-concern:
    backgroundColor: "{colors.midnight}"
    textColor: "{colors.cream}"
    rounded: "{rounded.compact}"
    padding: "8px 12px"
  scene-primary:
    backgroundColor: "{colors.lime}"
    textColor: "{colors.midnight}"
    rounded: "{rounded.control}"
    padding: "15px 22px"
  scene-primary-hover:
    backgroundColor: "{colors.lime-hover}"
  scene-secondary:
    backgroundColor: "{colors.midnight}"
    textColor: "{colors.cream}"
    rounded: "{rounded.control}"
    padding: "15px 22px"
  quiz-field:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.midnight}"
    rounded: "{rounded.control}"
    padding: "12px"
    width: "100%"
  university-poster:
    backgroundColor: "{colors.midnight}"
    textColor: "{colors.cream}"
    rounded: "12px 72px 12px 12px"
    padding: "32px"
  route-tab-selected:
    backgroundColor: "{colors.midnight}"
    textColor: "{colors.lime}"
    rounded: "{rounded.compact}"
    padding: "12px 16px"
---

# Design System: Ventorme

## Overview

**Creative North Star: "Unexplored universe"**

The approved world is BOLD EDITORIAL × COLORFUL FUTURE × KINETIC TYPOGRAPHY × PLAYFUL MOTION. Strong display lettering, a midnight ground, bright directional accents and tactile abstract geometry make uncertainty feel open and approachable. Movement supports attention and feedback while every choice remains usable with motion disabled.

The approved Hero is the visual source for the implemented full-site system: ten supporting scenes, the shared header, questionnaire, catalog and result views. Unbounded headings, Golos Text, the purple/lime palette and asymmetric geometry continue across these surfaces with layouts suited to each task. The current cascade is `site/styles.css`, then `site/hero.css`, then `site/experience.css`; the latter supplies the completed supporting-scene and app-view theme. Page sequence and pinned Hero behavior belong in [the surface brief](.impeccable/surfaces/site-index-html.md).

**Key Characteristics:**

- Oversized local display type with language-specific fitting.
- Midnight atmosphere with lime action and distinct concern colors.
- Asymmetric corners and authored SVG geometry.
- Visible defaults, controllable ambient motion and immediate feedback.
- Varied editorial scenes and compact task views within the same visual world.

## Colors

Primary lime marks actions, headline emphasis and selection. Secondary ultramarine and electric violet establish the Hero atmosphere and review stage. Coral and lilac distinguish choices, notes, route pages and account content. Midnight and cream alternate as large surfaces; supporting copy uses quiet lilac on dark surfaces and text-soft on light surfaces. The exams concern is deliberately darker than the other choices. Quiz concerns render as midnight chips with cream text on the lilac task background; selection-bg and selection-ink remain base declarations in `site/hero.css`, overridden by the quiz theme.

Source primitives use `--color-*`; semantic aliases include `--hero-bg`, `--hero-fg`, `--hero-action`, `--surface`, `--surface-dark`, `--text` and `--text-soft`. Component aliases include `--cta-bg`/`--cta-fg`. Mesh/ribbon gradient stops stay local artwork in `site/hero.css` and `site/hero.js`. Sidecar tonal ramps are preview metadata, not additional shipped colors.

**The Shared World Rule.** Carry the approved purple, lime, coral, lilac and cream palette through supporting scenes and task views while preserving the Hero's established colors and hierarchy.

## Typography

Unbounded is self-hosted at weight 800; Golos Text is self-hosted as a 400–900 variable family. Both include Latin, Cyrillic and extended Cyrillic subsets with `font-display: swap`. Display type supplies Hero, scene and task-view headings; Golos carries copy, choices and controls. The display, slogan, title, label and action frontmatter roles describe the Hero's mobile baseline. Headline and view-title describe supporting scenes and focused app views.

The hero has explicit language fits; KZ controls set HTML language `kk`:

| Viewport | RU size / line height | KZ size / line height | EN size / line height |
| --- | --- | --- | --- |
| Below 600px | `clamp(37px, 11.3vw, 49px)` / 1.18 | `clamp(25px, 7.8vw, 35px)` / 1.3 | `clamp(26px, 8.2vw, 36px)` / 1.3 |
| 600–999px | 76px / 1.18 | 53px / 1.3 | 56px / 1.3 |
| From 1000px | `clamp(66px, 7.1vw, 102px)` / 1.12 | `clamp(43px, 4.95vw, 71px)` / 1.23 | `clamp(43px, 4.95vw, 71px)` / 1.23 |

Below 360px, RU display becomes 35px; more specific KZ/EN rules remain active. Concern labels use 13px below 360px, 14px on other phones, 19px from 600px and 18px from 1000px. Primary action text uses 15px on narrow phones, 16px on other phones and 20px from 600px. Preserve translated text and the full accessible H1 name; decorative line wrappers are hidden from assistive technology.

Supporting headings use the headline role, capped at 17ch; below 600px they use `clamp(26px, 7.8vw, 34px)`. Scene paragraphs cap at 60ch. Task-view titles cap at 24ch and become 27px below 600px. The final action and review excerpts use larger Unbounded treatments. University names remain typographic names, with no invented logo assets.

## Layout

The hero container caps at 1280px on desktop and 704px on tablets. Horizontal insets are 18px on phones, 16px below 360px, 32px from 600px and 48px from 1000px; phone insets respect safe areas. The shared sticky header is at least 68px high, increasing to 80px from 1000px.

For the Hero, mobile DOM and layout order is title, story, question and concern cards, main CTA and catalog bypass, small university teaser, then motion controls. From 1000px it becomes two columns (`1.02fr 1fr`): title/story/actions beside choices, teaser and controls spanning both. Choices stay in two columns with smaller angles and spacing on phones. The action remains below the choices on mobile; vertical scrolling is expected.

Supporting scenes use a 1280px maximum inner width with 48px side insets on desktop, 24px below 1000px and 18px below 600px. Scene vertical space follows the frontmatter clamp. University posters show three columns on desktop, two below 1000px and an 86%-width slide on phones; only the rail scrolls horizontally. Split editorial layouts and the route notebook stack below 600px. The four-step path becomes two columns. Task views cap at 1080px, with the questionnaire capped at 880px; quiz choices and catalog routes become one column on phones. Long translations wrap within their panels.

## Elevation & Depth

Depth comes from layered radial gradients, crossing SVG ribbons and modest Hero shadows. The Hero action uses `0 7px 18px -8px #b9ed4670`; light concern cards use `0 12px 22px -16px #09071fc9`. Its hover/selected layers use `0 14px 28px -10px #b9ed4670` and `0 20px 32px -14px #09071fcc` respectively. The dark exams card has a fine border and no shadow. Supporting scenes use contrasting color fields, tilted notes, large corners and outlined orbits; task panels explicitly remove the base shadow. Geometry remains decorative. Authored SVG artwork is carried by outer HTML animation layers.

## Shapes

Controls use compact corners. Concern cards share a 12px base with deliberate asymmetry: career upper-right 34px, universities upper-left 28px, grants lower-right 32px. Desktop universities use `38px 13px 13px 13px`. Arrow discs and orbital geometry are circular. The headline strip keeps a small corner and static tilt; placement remains a hero decision.

University posters extend the asymmetric corner to 60–72px. The desktop route notebook uses `16px 70px 16px 16px`, becoming `12px 40px 12px 12px` on phones. Task panels and account passes use a 60px upper-right corner; catalog cards use 40px. Question notes retain dark midnight text on every light colored surface.

## Components

The sidecar provides self-contained previews of the implemented controls, concern group, field, context chips and poster. These are visual examples; application navigation and state are owned by the shipped modules.

- **Hero primary action:** lime with midnight text and inverse arrow disc; minimum height 58px on phones and 64px from 600px. Width caps at 450px on tablets and 410px on desktop. Three overlapping labels crossfade for zero, one or several selected concerns without resizing the control. This is the Hero's only quiz-start action and works with no selection. Hover lifts 3px and scales to 1.015; press moves down 3px and scales to .985.
- **Catalog bypass:** underlined, left-aligned cream text, minimum 44px target, below the main CTA; hover changes to lime. It opens the catalog without requiring a concern or quiz.
- **Four concern cards:** cream/career, coral/universities, lilac/grants, dark violet/exams. All four independently toggle, allowing 0–4 concerns. Selection stays in the Hero and exposes `aria-pressed`, a lime outline/check, localized count/status and ring response. Cards never navigate. Concerns survive language changes and in-app back navigation, but not reloads. Fine-pointer hover lifts 6px and straightens, with a cream outline distinct from selected lime; press scales to .95. Minimum height is 145px on phones and 185px on tablets. Desktop card heights/offsets vary in the source.
- **Language navigation:** three controls with at least 44px targets. All views share the dark header with cream labels and an inverse cream selected control.
- **Motion control:** minimum 44px button with localized pause/resume states; reduced motion disables it and displays the motion-off label.
- **Selected concerns:** noninteractive wrapping midnight chips with cream text and check marks above the quiz, preserving every chosen concern.
- **Scene and task actions:** lime primary and midnight secondary controls with 12px corners, 52px minimum height and 15px/22px padding. The final lime scene reverses its action to midnight with lime text; the demo response also uses a dark registration action.
- **Carousel posters:** university names use large typography and outlined orbits, without invented logo artwork. University and review rails support native touch scrolling, pointer drag, arrow controls and keyboard navigation. They expose a localized position count and disable unavailable directions; there is no auto-advance.
- **Route notebook:** five wrapping tabs use selected midnight/lime state, roving keyboard focus and a two-page panel with route copy/action beside numbered example steps. Panels wrap long translations and stack on phones.
- **Quiz and demo fields:** cream textareas with visible labels, 16px type, 12px inset and a 200-character limit. Quiz errors move focus to the invalid field; demo submission confirms session-only text without claiming analysis. Quiz options use cream at rest and lime with a midnight border when selected.
- **Trust and FAQ disclosures:** full-width labelled buttons expose `aria-expanded`; plus/minus marks reflect state and hidden answer panels become available immediately. The FAQ retains six topics.

Hero focus is a 3px lime outline offset by 6px; header focus uses lime with the inherited 3px offset. Scene and task-view focus is violet with a 5px offset, with coral on the dark uncertainty/demo/review stages and midnight inside the lime demo response. Content is visible without entrance classes.

**The User-Controlled Motion Rule.** Hero ambient loops stop when the user pauses, the document is hidden, the Hero is offscreen, or reduced motion is requested. User pause and reduced motion also suppress optional scene reveals and content transitions.

Hero hover enters over 550ms and returns over 700ms; press response is 90ms. Headline entrance is 900ms with a 65ms stagger; cards enter on visibility over 850ms with an 80ms stagger. Ordinary in-app return preserves the entrance bookkeeping; a language change resets it for translated content. Headline sway runs at 9s/7s/10s with ±0.55/0.8/0.55 degrees around the line's resting angle. Mesh loops run at 16s/13s; rings, satellite and star at 9s/7s/6s. Selecting a card adds an interruptible 600ms response, and the separate ring wrapper responds over 750ms. CTA labels crossfade over 300ms, or 150ms with reduced motion.

Supporting scene reveals use 900ms; question notes use 850ms with a 65ms stagger; the final title uses 1000ms. Route/demo content changes use 600ms, journey descriptions 550ms and disclosure entrances 450ms. Carousel poster scale/progress uses 650ms. View transitions use 350ms exit and 800ms entrance; unsupported browsers can use an 800ms entrance. Functional state updates do not wait for animation, and unavailable animation APIs leave content usable. Reduced motion removes entrances, ambient loops, view animations and interaction transforms; selection remains visible through outline, check and text. Pausing settles Hero entrances rather than replaying them on resume. CSS provides an optional scroll-linked final arc only where supported and motion is allowed.

## Do's and Don'ts

### Do

- Do preserve local fonts and all three language-specific headline fits.
- Do keep the Hero's mobile sequence: heading, story, question/cards, primary action and bypass, teaser, motion control.
- Do retain distinct concern colors, meaningful text and selected-state checks.
- Do keep content visible and motion pausable, with live reduced-motion support.
- Do apply the implemented scene and task-view theme after the base stylesheet.
- Do preserve midnight text on light question notes and source attribution near public evidence.

### Don't

- Don't reintroduce the rejected cream/pastel hero as the new visual world.
- Don't make decorative SVG geometry interactive or necessary to understand a choice.
- Don't turn the hero's exact composition into a universal page template.
- Don't make concern selection navigate, add a second Hero start action, or discard other selected concerns.
- Don't invent product capabilities, research findings or conversion metrics.
