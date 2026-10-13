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
    backgroundColor: "{colors.selection-bg}"
    textColor: "{colors.selection-ink}"
    rounded: "{rounded.compact}"
    padding: "8px 12px"
---

# Design System: Ventorme

## Overview

**Creative North Star: "Unexplored universe"**

The approved world is BOLD EDITORIAL × COLORFUL FUTURE × KINETIC TYPOGRAPHY × PLAYFUL MOTION. Strong display lettering, a midnight ground, bright directional accents and tactile abstract geometry make uncertainty feel open and approachable. Movement supports attention and feedback while every choice remains usable with motion disabled.

This documents the implemented hero/header system and the selected-concern feedback chip entering the existing quiz. Golos Text is global; selection, scrollbar and caret accents also cross the hero boundary. Supporting sections, quiz fields, route views and registration buttons retain their existing layouts and legacy palette in `site/styles.css`. Their migration is a separate stage. Header geometry is shared; its dark colors apply only on the home view. Exact hero composition and visitor sequence belong in [the surface brief](docs/HERO_DIRECTION.md).

**Key Characteristics:**

- Oversized local display type with language-specific fitting.
- Midnight atmosphere with lime action and distinct concern colors.
- Asymmetric corners and authored SVG geometry.
- Visible defaults, controllable ambient motion and immediate feedback.

## Colors

Primary lime marks the principal action, headline emphasis and hero focus. Secondary ultramarine and electric violet establish the ambient field; coral and lilac distinguish choices. Neutral midnight carries the hero, cream supplies contrast, and hero-muted supports explanations. The exams surface is deliberately darker than the other choices. Selected-concern colors bridge into the light quiz.

Source primitives use `--color-*`, semantic aliases `--hero-bg`, `--hero-fg`, `--hero-action`, and component aliases `--cta-bg`/`--cta-fg`. Mesh/ribbon gradient stops stay local artwork in `site/hero.css` and `site/hero.js`. Sidecar tonal ramps are preview metadata, not additional shipped colors.

**The Scoped Palette Rule.** Apply this palette to the hero and its documented shared components; do not silently replace the legacy supporting-section palette.

## Typography

Unbounded is self-hosted at weight 800; Golos Text is self-hosted as a 400–900 variable family. Both include Latin, Cyrillic and extended Cyrillic subsets with `font-display: swap`. Display type supplies the editorial voice; Golos carries copy, choices and controls. Frontmatter sizes describe the mobile baseline.

The hero has explicit language fits; KZ controls set HTML language `kk`:

| Viewport | RU size / line height | KZ size / line height | EN size / line height |
| --- | --- | --- | --- |
| Below 600px | `clamp(37px, 11.3vw, 49px)` / 1.18 | `clamp(25px, 7.8vw, 35px)` / 1.3 | `clamp(26px, 8.2vw, 36px)` / 1.3 |
| 600–999px | 76px / 1.18 | 53px / 1.3 | 56px / 1.3 |
| From 1000px | `clamp(66px, 7.1vw, 102px)` / 1.12 | `clamp(43px, 4.95vw, 71px)` / 1.23 | `clamp(43px, 4.95vw, 71px)` / 1.23 |

Below 360px, RU display becomes 35px; more specific KZ/EN rules remain active. Concern labels use 13px below 360px, 14px on other phones, 19px from 600px and 18px from 1000px. Primary action text uses 15px on narrow phones, 16px on other phones and 20px from 600px. Preserve translated text and the full accessible H1 name; decorative line wrappers are hidden from assistive technology.

## Layout

The hero container caps at 1280px on desktop and 704px on tablets. Horizontal insets are 18px on phones, 16px below 360px, 32px from 600px and 48px from 1000px; phone insets respect safe areas. The shared sticky header is at least 68px high, increasing to 80px from 1000px.

For this hero, mobile reading order is title, story with CTA and catalog bypass, choices, then motion controls. From 1000px it becomes two columns (`1.02fr 1fr`): title/story beside choices, controls across both. Choices stay in two columns with smaller angles and spacing on phones. These are surface-specific arrangements, not mandatory layouts for future pages.

## Elevation & Depth

Depth comes from layered radial gradients, crossing SVG ribbons and modest shadows. The action uses `0 7px 18px -8px #b9ed4670`; light concern cards use `0 12px 22px -16px #09071fc9`. The dark exams card has a fine border and no shadow. Ambient layers stay inside the hero; geometry ignores pointer events. Authored SVG artwork is carried by outer HTML animation layers.

## Shapes

Controls use compact corners. Concern cards share a 12px base with deliberate asymmetry: career upper-right 34px, universities upper-left 28px, grants lower-right 32px. Desktop universities use `38px 13px 13px 13px`. Arrow discs and orbital geometry are circular. The headline strip keeps a small corner and static tilt; placement remains a hero decision.

## Components

The sidecar provides nine self-contained visual previews. It does not run application navigation or recreate legacy quiz fields.

- **Primary action:** lime with midnight text and inverse arrow disc; minimum height 58px on phones and 64px from 600px. Width caps at 450px on tablets and 410px on desktop. Hover lifts 3px; press moves down 3px and scales to .985.
- **Catalog bypass:** underlined cream text, minimum 44px target, below the promise; hover changes to lime. It enters the existing catalog without a concern or quiz.
- **Four concern cards:** cream/career, coral/universities, lilac/grants, dark violet/exams. The question precedes the cards on every viewport. Selection stays in the hero, exposes `aria-pressed`, a lime outline/check and localized live status, and rotates the ring. The main CTA opens the existing quiz with that choice; a nearby continuation appears below the cards on mobile/tablet. Choice restores on return. Fine-pointer hover lifts 6px and straightens, with a cream outline distinct from selected lime; press scales to .95. Minimum height is 145px on phones and 185px on tablets. Desktop card heights/offsets vary in the source.
- **Language navigation:** three controls with at least 44px targets. Home selection uses midnight on cream; other home labels use cream. Outside home, legacy navigation colors remain.
- **Motion control:** minimum 44px button with localized pause/resume states; reduced motion disables it and displays the motion-off label.
- **Selected concern:** noninteractive wrapping text chip with check mark above the existing quiz, preserving context without adding a question.

Hero focus is a 3px lime outline offset by 6px; header focus uses lime with the inherited 3px offset. Content is visible without entrance classes.

**The User-Controlled Motion Rule.** Ambient loops stop when the user pauses, the document is hidden, the hero is offscreen, or reduced motion is requested.

Entrances run once per page session: headline 640ms with 65ms stagger and a slight settling overshoot; each card starts on entering the viewport, 600ms with 80ms stagger. Mesh loops run at 16s/13s; rings, satellite and star at 9s/7s/6s. Selection has a 460ms interruptible WAAPI spring-like keyframe response and a 680ms ring turn on a separate HTML wrapper. Feedback otherwise uses 160–320ms easing and 90ms press response. No animation is awaited before navigation. View transitions use 200ms exit and 300ms entrance; unsupported browsers get a 260ms entrance when motion is allowed. Reduced motion removes entrances, ambient loops, view animations and interaction transforms; selection remains visible through outline, check and text. Pausing settles entrances rather than replaying them on resume. The legacy global reduced-motion `transition: none !important` makes outline state changes immediate.

## Do's and Don'ts

### Do

- Do preserve local fonts and all three language-specific headline fits.
- Do keep the primary action and catalog bypass before the scene on phones.
- Do retain distinct concern colors, meaningful text and selected-state checks.
- Do keep content visible and motion pausable, with live reduced-motion support.
- Do preserve the legacy supporting sections until their redesign is explicitly scoped.

### Don't

- Don't reintroduce the rejected cream/pastel hero as the new visual world.
- Don't make decorative SVG geometry interactive or necessary to understand a choice.
- Don't turn the hero's exact composition into a universal page template.
- Don't invent product capabilities, research findings or conversion metrics.
