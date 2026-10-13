# Dark-only background and review polish — 2026-10-14

Scope: latest explicit user request, not a new redesign.

## Implemented

- Removed the theme switch and OS-theme listener; forced dark at HTML, CSS and pre-paint script levels. Stored legacy light preference is removed. Lime/coral/lilac brand accents remain.
- Added desktop result-margin orbital compositions with localized decorative words, university marks and exam notation. Narrow screens keep quiet edge arcs rather than squeezing decorative text beside content.
- Existing particles now use four transform-only trajectories: float, sway, orbit and rise (18–30s). Margin rings use 28s rotation/scale; words 21s, marks 24s, formulas 18s. Existing shared pause, hidden-tab and reduced-motion handling is retained.
- Removed CSS white plates behind transparent university assets. Dark-surface marks use a CSS monochrome white treatment; original image files remain unchanged.
- Replaced Aidana's excerpt/summary with the exact full English text supplied by the user. Localized labels distinguish this full review from the other excerpts. Kept the verified existing source name and portrait. Full review has a readable body-font treatment.
- Root deployment mirrors synchronized with site/.

## Verification performed

- All five npm test suites pass, including exact full-review text, unchanged registration URL, three locales, five route mappings and dark-only behavior with denied storage.
- Chrome via local request interception, no listening server: RU/KZ/EN × 360, 390 and 1440px. Home, full review and completed quiz result: 27 overflow/registration checks, no page errors.
- Browser checks confirm no theme button despite legacy stored light preference; quiz completion; review carousel End/Home; result motion changes over time; pause and live reduced-motion stop result animations.
- Visually inspected desktop result and mobile review captures. Reduced the full-review weight after inspection.
- git diff --check passes. Screenshots/scripts in ignored output/playwright/.

Not tested: physical devices, Safari, Instagram browser, frame-rate profiling or new user research. No commit, push, deployment, asset-license claim, or localhost launch.
