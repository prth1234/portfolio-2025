# Squiggle UI (`squiggle-ui`)

> A production-grade, framework-agnostic design system reverse-engineered with 100% exact fidelity from an editorial portfolio (`portfolio-2025`).

---

## Why "Squiggle UI"?

The portfolio's most recognizable, iconic motif is the **hand-drawn yellow wavy underline** (`#ffe32e`) that animates under expanded headers, highlights keywords, and traces the boundary between sections. **Squiggle UI** captures this dynamic hand-drawn editorial spirit, paired with high-contrast typography, pixel-art retro accents, and warm cream canvas tones.

---

## Design System Architecture

```text
design-system/
├── tokens/              # Single source of truth: CSS properties & JSON spec
│   ├── tokens.css       # Complete CSS variables (--sq-* and legacy --ci-* aliases)
│   └── tokens.json      # Machine-readable Design Tokens format (W3C standard)
├── styles/              # Base stylesheets & layout primitives
│   ├── reset.css        # Box-sizing, font smoothing, canvas reset
│   ├── typography.css   # Fluid clamped editorial type scales (u-h1, u-h2, u-h3, u-p1, etc.)
│   ├── theme.css        # Light theme (Cream/Black) & Dark theme (Black/Yellow)
│   ├── grid.css         # Responsive 8-col & 12-col grid primitives
│   └── icons.css        # SVG icon utility classes
├── components/          # Modular component catalogue
│   ├── wavy-underline/  # First-class SVG wave underline component
│   ├── wavy-divider/    # Full-width fluid SVG transition divider
│   ├── button/          # Primary action pill & form buttons with forced states
│   ├── explore-button/  # Chartreuse compass action button with hover rotation
│   ├── nav/             # Sticky header with grouped pill navigation
│   ├── career-timeline/ # Vertical role progression track with nodes & stems
│   ├── contact-form/    # Form with monospace inputs & 4-box spinning windmill loader
│   ├── submit-loader/   # Synchronized 4-box CSS animation loader
│   ├── accordion/       # Native disclosure with wavy underline & plus/cross toggle
│   ├── data-table/      # Responsive educational, skills, and achievement tables
│   ├── project-card/    # Retro price/project card with geometric corner trims
│   ├── landscape-card/  # XR65D pixel art display card with signal bars
│   ├── dotted-leader/   # Editorial table of contents with dot leaders
│   ├── badge-tag/       # Status badges, CGPA score badges, skill tags
│   ├── preloader/       # Fullscreen and inline 3-box pulse loader
│   └── footer/          # Social links, copyright, and CE certification icon
├── foundations/         # Storybook visual design tokens documentation
│   ├── Colors.stories.js
│   ├── Typography.stories.js
│   ├── Spacing.stories.js
│   ├── Motion.stories.js
│   └── Icons.stories.js
├── stories/             # High-level stories & full-page composite templates
│   ├── Introduction.mdx
│   └── PageTemplates.stories.js
└── dist/                # Production distribution bundles
    ├── design-system.css # Complete unified CSS bundle (50 KB)
    └── test-standalone.html
```

---

## Installation & Usage

### 1. Direct CSS Inclusion (Framework Agnostic)

Link `dist/design-system.css` directly in any HTML page:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <link rel="stylesheet" href="path/to/dist/design-system.css">
</head>
<body class="u-theme-light">
  <!-- Wavy Underline Heading -->
  <h1 class="u-h1">CREATIVE <span class="sq-wavy-underline">ENGINEER</span></h1>

  <!-- Primary Action Pill -->
  <button class="sq-button sq-button--primary">
    <span>ENTER</span>
    <svg class="sq-icon--arrow" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
    </svg>
  </button>
</body>
</html>
```

### 2. NPM Package

```bash
npm install @prth/squiggle-ui
```

```javascript
// Import full CSS bundle
import 'squiggle-ui/dist/design-system.css';

// Or import design tokens only
import 'squiggle-ui/tokens';
```

---

## Theming Guide: Swapping Tokens

Squiggle UI is built entirely on CSS Custom Properties (`--sq-*`). To customize the theme, override token variables at `:root` or on a container class:

```css
/* Custom Sunset Theme Example */
:root {
  --sq-color-cream: #faf7f2;
  --sq-color-yellow: #ff9900;       /* Replaces accent yellow with orange */
  --sq-color-black: #12100e;        /* Softer deep charcoal */
  --sq-font-family-narrow: 'Oswald', sans-serif;
}
```

---

## Development Scripts

```bash
# Start interactive Storybook environment on port 6006
npm run storybook

# Build static production Storybook documentation
npm run build-storybook

# Re-bundle dist/design-system.css from component sources
npm run build
```

