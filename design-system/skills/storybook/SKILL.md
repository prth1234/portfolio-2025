---
name: storybook
description: >-
  Use this skill when developing, testing, maintaining, or expanding the Squiggle UI Design System
  and its Storybook workspace in this repository. Guides running the Storybook server, authoring
  new components and variants, bundling distribution CSS, maintaining 1:1 fidelity with the portfolio,
  and enforcing guidelines such as generic persona branding and iframe safety.
---

# Squiggle UI Storybook & Design System Skill

This skill provides the standard runbook, architectural guidelines, and procedures for working with the **Squiggle UI** design system and its Storybook 8 HTML+Vite workspace located in `design-system/`.

---

## Quick Reference Commands

All Storybook and design system commands must be executed within the `design-system/` directory:

```bash
# 1. Start the Storybook local development server (runs on http://localhost:6006)
cd design-system && npm run storybook

# 2. Re-bundle the unified CSS distribution file (dist/design-system.css)
cd design-system && node build.js

# 3. Build the static production Storybook (outputs to design-system/storybook-static/)
cd design-system && npm run build-storybook

# 4. Run full production build (bundles CSS tokens and builds static Storybook)
cd design-system && npm run build
```

---

## System Architecture

```text
design-system/
├── tokens/
│   ├── tokens.css           # Single source of truth for CSS variables (--sq-*)
│   └── tokens.json          # Exportable design token JSON specifications
├── styles/
│   ├── reset.css            # Standard box-sizing and reset rules
│   └── typography.css       # Heading, body, and monospace font scales
├── foundations/             # Visual token documentation stories
│   ├── Colors.stories.js    # Interactive color palette swatches
│   ├── Typography.stories.js# Font specimens and type hierarchy
│   ├── Spacing.stories.js   # Spacing scale and grid margins
│   ├── Motion.stories.js    # Easing curves (elastic, bouncy) & duration demos
│   └── Icons.stories.js     # Authentic pixel-art SVGs & glyphs
├── components/              # Modular component directory (CSS + Stories)
│   ├── wavy-underline/      # Signature SVG yellow curvy wave underline
│   ├── wavy-divider/        # Full-width wave section boundary divider
│   ├── click-animation/     # Signature radial spark click burst
│   ├── button/              # Pill, yellow, outline, and icon buttons
│   ├── explore-button/      # Compass icon pill explore button
│   ├── contact-form/        # Authentic white pills + yellow enter button
│   ├── footer/              # Editorial footer with yellow hover + star animation
│   ├── nav/                 # Pill capsule navigation header & brand badge
│   ├── comparison-list/     # Side-by-side comparison matrix with corner brackets
│   ├── career-timeline/     # Vertical role progression with gold star nodes
│   ├── project-card/        # Pixel bracket corner cards
│   ├── landscape-card/      # Floating pixel-art landscape image card
│   ├── accordion/           # Expandable accordion rows
│   ├── dotted-leader/       # Dotted leader list rows ("01 .......... TITLE")
│   ├── data-table/          # Monospace tables with badges
│   ├── badge-tag/           # Tags, chips, status pills
│   └── preloader/           # Spinning preloader overlay
├── stories/
│   └── PageTemplates.stories.js # Full composite page pattern templates
├── dist/
│   └── design-system.css    # Unified standalone CSS bundle (45 KB)
├── build.js                 # Concatenation and token bundle script
└── package.json             # NPM package and Storybook dependencies
```

---

## Core Guidelines & Invariants

1. **Strict 1:1 CSS Fidelity**:
   - Never approximate, round, or normalize colors, timings, easings, or SVG paths.
   - All values must match `portfolio-2025` CSS tokens (e.g., `#ffe32e` for yellow, `#f9f4eb` for cream, `#000000` for black, `cubic-bezier(0.34, 1.64, 0.64, 1)` for bouncy ease).

2. **Zero Personal Names (Generic Persona)**:
   - Storybook is a universal, exportable design system for reuse across other projects.
   - **Never** hardcode personal names or personal handles.
   - Use generic editorial placeholders: e.g. `STUDIO ✦ ARCHIVE`, `CREATIVE DEVELOPER`, `hello@example.com`.

3. **Iframe Safety**:
   - Inside Storybook's `iframe.html`, normal anchor tags `<a href="#">` or `<a href="index2.html">` will cause the iframe to break or lose sidebar controls.
   - Always use `href="javascript:void(0)"` with `onclick="event.preventDefault();"` or custom view switchers for all links in stories.

4. **Self-Contained Standalone Bundle**:
   - `dist/design-system.css` alone should style a blank HTML document with full fidelity when imported without external frameworks.

---

## How to Add a New Component

1. Create a dedicated folder in `design-system/components/<component-name>/`.
2. Author `<component-name>.css` using the `.sq-` namespace prefix (and map original Webflow class names as aliases if needed).
3. Author `<component-name>.stories.js`:
   - Include `tags: ['autodocs']`.
   - Provide a Controls-enabled playground story.
   - Provide variants for every size, theme (light/dark), and state.
   - Provide explicit forced-state stories (`ForcedHover`, `ForcedFocus`, `ForcedActive`, `Disabled`).
4. Register the new component CSS in `design-system/build.js` so it is compiled into `dist/design-system.css`.
5. Run `node build.js` and `npm run build-storybook` to verify compilation.

