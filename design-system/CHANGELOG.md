# Changelog

All notable changes to the `squiggle-ui` design system will be documented in this file.

## [1.0.0] - 2026-11-05

### Added
- Reverse-engineered token architecture in `tokens/tokens.json` and `tokens/tokens.css` with 1:1 fidelity to `portfolio-2025`.
- 16 modular UI components with matching HTML, exact CSS, and Storybook stories:
  - `wavy-underline`: First-class component preserving the SVG wave pattern and background sizing.
  - `wavy-divider`: Full-width fluid boundary SVG wave between contrasting sections.
  - `button`: Primary, dark, outline, and small/large pill action buttons.
  - `explore-button`: Chartreuse neon next-page action button with spinning compass SVG.
  - `nav`: Floating pill navigation header with active tab state inversion and `FEED` indicator.
  - `career-timeline`: Vertical milestone progression tracker with active/past nodes, stem gradients, and promoted tags.
  - `contact-form`: Monospace inputs, submit button, and 4-box spinning windmill status loader.
  - `submit-loader`: Isolated 4-box synchronized CSS animation spinner.
  - `accordion`: Native disclosure item with open/close transition, plus/cross toggle, and wavy header underline.
  - `data-table`: Responsive horizontal-scroll data tables for education, skills, and achievements.
  - `project-card`: Retro cybernetic tile with 93x93 pixel corner SVGs and monospace tech chips.
  - `landscape-card`: XR65D pixel art display card with signal bars and metadata.
  - `dotted-leader`: Editorial table of contents with flexible dot leaders.
  - `badge-tag`: Status badges, promoted chips, and skill labels.
  - `preloader`: 3-box pulse loader for full-page and inline loading.
  - `footer`: Social links, copyright metadata, and CE certification icon.
- Foundations documentation in Storybook for Colors, Typography, Spacing, Motion, and Iconography.
- Full-page pattern reassemblies for About, Experience, and Projects pages.
- Standalone bundled CSS distribution in `dist/design-system.css`.

