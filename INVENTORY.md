# DESIGN SYSTEM AUDIT & INVENTORY

**Portfolio 2025 Reverse-Engineered Design System**  
**Audit Timestamp:** 2026-11-05  
**Audited Sources:**
- `styles/main.css` & `main/styles/main.css` (140,141 bytes)
- `styles/shared.min.css` & `main/styles/shared.min.css` (102,711 bytes)
- `main/index.html` (Landing / About page)
- `main/index2.html` (Experience & Career Timeline page)
- `main/index3.html` (Projects & Dark Theme page)
- `main/index4.html` (More / Resume, Accordions & Tables page)
- `main/scripts/app.js` (Lenis, Swup, Interactions, Dynamic DOM)
- `main/experience-data.js` (Experience structured dataset)

---

## 1. DESIGN TOKENS

### 1.1 Color Tokens

The visual identity is based on high-contrast editorial typography, warm retro cream/paper backgrounds, pitch black dark-theme surfaces, and a signature electric yellow accent (`#ffe32e`).

#### Core Palette Tokens
| Token Name | Hex / Raw Value | Semantic Role | Source / Usage |
| :--- | :--- | :--- | :--- |
| `--ci-cream` | `#f9f4eb` | Canvas background (light theme), contrast text (dark theme) | `html`, `body`, `.u-theme-light`, `.curvy-transition-svg` |
| `--ci-yellow` | `#ffe32e` | Primary interactive accent, active badges, wavy underlines, focus rings | `.button.is-form`, `.role_timeline-node`, `.role_timeline-tag.is-promoted`, curvy divider |
| `--ci-black` | `black` (`#000000`) | Deep ground (dark theme), primary text (light theme) | `.u-theme-dark`, `body[data-page="index3"]`, `.preloader`, buttons |
| `--ci-white` | `white` (`#ffffff`) | Absolute white highlights, card backing | `--back-color-background` |
| `--ci-beige` | `#f0ece5` | Secondary surface, subtle contrast panel | `--color-background-beige` |
| `--ci-lemon` | `#fef280` | Alternate pastel yellow accent | `--color-accent-lemon` |
| `--ci-peach` | `#fcdca6` | Alternate warm pastel accent | `--color-accent-peach` |
| `--ci-pink` | `#ffd2f3` | Alternate pastel pink accent | `--color-accent-pink` |
| `--ci-violet` | `#e5daf6` | Alternate pastel violet accent | `--color-accent-violet` |
| `--ci-black-60`| `#0009` (`rgba(0,0,0,0.6)`) | 60% alpha black overlay | Scrims, backdrops |

#### Extended & Neutral Alpha Tokens
| Raw Value | Semantic Name | Usage |
| :--- | :--- | :--- |
| `#1a1a1a` | Dark Neutral Text | Table cells, experience bullet points |
| `#111111` | Near Black | Skill tag text (`.skill-tag`) |
| `rgba(0, 0, 0, 0.02)` | Table Row Hover | `.education-table tbody tr:hover td` |
| `rgba(0, 0, 0, 0.05)` | Subtle Pill Background | `.role_company-badge` |
| `rgba(0, 0, 0, 0.06)` | Badge Inactive Background | `.role_timeline-tag` |
| `rgba(0, 0, 0, 0.08)` | Delicate Border | Table rows, badge borders |
| `rgba(0, 0, 0, 0.10)` | Track / Border Stroke | `.role_company-badge` border |
| `rgba(0, 0, 0, 0.12)` | Subtle Shadow Border | Promoted badge outline |
| `rgba(0, 0, 0, 0.14)` | Tag Chip Border | `.skill-tag`, `.edu-score-badge` |
| `rgba(0, 0, 0, 0.15)` | Table Header Border | `.education-table th`, `.skills-table th` |
| `rgba(0, 0, 0, 0.20)` | Timeline Stem End | `.role_timeline-stem` bottom gradient stop |
| `rgba(0, 0, 0, 0.22)` | Inactive Timeline Node | `.role_timeline-node.is-past` |
| `rgba(0, 0, 0, 0.40)` | Muted Text Secondary | Hero metadata, secondary labels |
| `rgba(0, 0, 0, 0.45)` | Table Header Text | Uppercase table headers |
| `rgba(0, 0, 0, 0.50)` | Location / Subtitle | `.edu-location`, `.achievement-sub` |
| `rgba(0, 0, 0, 0.55)` | Monospace Date Text | `.role_timeline-date` |
| `rgba(0, 0, 0, 0.65)` | Tertiary Label Text | Badge text, `.edu-year` |
| `rgba(0, 0, 0, 0.75)` | Secondary Title Text | Inactive role title `.role_timeline-step:not(.is-current)` |
| `rgba(0, 0, 0, 0.85)` | High Contrast Text | Card headers |
| `rgb(19, 19, 19)` | Explore Button Dark Base | `.btn-shine` background |
| `rgb(192, 255, 20)` | Explore Button Neon Glow | `.btn-shine:hover` star glow |
| `rgb(161, 255, 20)` | Explore Button Neon Border | `.btn-shine` border glow |

---

### 1.2 Typography Tokens

#### Font Declarations (@font-face)
1. **Narrow Display (`font-narrow-semibold`)**:
   - `font-family: font-narrow-semibold`
   - `font-weight: 600`, `font-style: normal`
   - Source: `url(https://cdn.prod.website-files.com/64591e5db836f60c02bb97e9/6703bf4d529217f5dae95e4c_narrow-semibold.woff2) format("woff2")`
   - Fallback: `arial narrow fallback, -apple-system, blinkmacsystemfont, avenir next, avenir, segoe ui, helvetica neue, helvetica, cantarell, ubuntu, roboto, noto, arial, sans-serif`
   - Metric override: `size-adjust: 93%; ascent-override: 103%; descent-override: 31%; line-gap-override: 14%;`

2. **Monospace Metadata (`font-mono-medium`)**:
   - `font-family: font-mono-medium`
   - `font-weight: 500`, `font-style: normal`
   - Source: `url(https://cdn.prod.website-files.com/64591e5db836f60c02bb97e9/6703bef6dac4a3785ced77d8_mono-medium.woff2) format("woff2")`
   - Fallback: `menlo, consolas, monaco, liberation mono, lucida console, monospace`

3. **Body Sans (`font-normal-medium`)**:
   - `font-family: font-normal-medium`
   - `font-weight: 500`, `font-style: normal`
   - Source: `url(https://cdn.prod.website-files.com/64591e5db836f60c02bb97e9/6703bf364a644880b5196752_normal-medium.woff2) format("woff2")`
   - Fallback: `-apple-system, blinkmacsystemfont, avenir next, avenir, segoe ui, helvetica neue, helvetica, cantarell, ubuntu, roboto, noto, arial, sans-serif`

4. **Webflow Icon Font (`webflow-icons`)**:
   - Embedded Base64 TTF data URL inside `styles/shared.min.css`

#### Font Scale & Fluid Clamps
| Token | Mobile (< 700px) | Tablet & Desktop | Ultrawide (>= 1600px) | Letter Spacing | Line Height |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `--font-size-h1` | `clamp(4rem, 1.8227rem + 7.2727vi, 5rem)` | `clamp(5rem, -.0556rem + 11.5556vi, 11.5rem)` | `clamp(11.5rem, -1.5rem + 13vi, 18rem)` | `-0.03em` | `0.9` |
| `--font-size-h2` | `clamp(2rem, 1.0278rem + 2.2222vi, 3.25rem)` | `clamp(2rem, 1.0278rem + 2.2222vi, 3.25rem)` | `clamp(2rem, 1.0278rem + 2.2222vi, 3.25rem)` | `-0.02em` | `1.0` |
| `--font-size-h3` | `clamp(1.375rem, 1.0833rem + .6667vi, 1.75rem)` | `clamp(1.375rem, 1.0833rem + .6667vi, 1.75rem)` | `clamp(1.75rem, -.75rem + 2.5vi, 3rem)` | `-0.01em` | `1.15` |
| `--font-size-p1` | `clamp(1rem, .9028rem + .2222vi, 1.125rem)` | `clamp(1rem, .9028rem + .2222vi, 1.125rem)` | `clamp(1.125rem, .375rem + .75vi, 1.5rem)` | `0` | `1.5` |
| `--font-size-p2` | `clamp(.75rem, .1667rem + 1.3333vi, 1.5rem)` | `clamp(.75rem, .1667rem + 1.3333vi, 1.5rem)` | `clamp(.75rem, .1667rem + 1.3333vi, 1.5rem)` | `0` | `1.4` |
| `--font-size-c1` | `0.875rem` | `0.875rem` | `clamp(.875rem, .375rem + .5vi, 1.125rem)` | `0.02em` | `1.3` |
| `--font-size-f1` | `0.65rem` | `0.65rem` | `clamp(.5rem, 0rem + .5vi, .75rem)` | `0.08em` | `1.2` |
| `--font-size-f2` | `0.75rem` | `0.75rem` | `clamp(.75rem, .25rem + .5vi, 1rem)` | `0.05em` | `1.2` |

---

### 1.3 Spacing Scale & Dimension Tokens
| Token | Standard Value | Screen >= 1600px Clamp |
| :--- | :--- | :--- |
| `--size-2` | `clamp(.125rem, -.125rem + .25vi, .25rem)` | `clamp(.125rem, -.125rem + .25vi, .25rem)` |
| `--size-4` | `clamp(.25rem, -.25rem + .5vi, .5rem)` | `clamp(.25rem, -.25rem + .5vi, .5rem)` |
| `--size-8` | `clamp(.5rem, 0rem + .5vi, .75rem)` | `clamp(.5rem, 0rem + .5vi, .75rem)` |
| `--size-12` | `clamp(.75rem, .25rem + .5vi, 1rem)` | `clamp(.75rem, .25rem + .5vi, 1rem)` |
| `--size-16` | `clamp(1rem, 0rem + 1vi, 1.5rem)` | `clamp(1rem, 0rem + 1vi, 1.5rem)` |
| `--size-24` | `clamp(1.5rem, .5rem + 1vi, 2rem)` | `clamp(1.5rem, .5rem + 1vi, 2rem)` |
| `--size-32` | `clamp(2rem, 0rem + 2vi, 3rem)` | `clamp(2rem, 0rem + 2vi, 3rem)` |
| `--size-48` | `clamp(2rem, 1.2222rem + 1.7778vi, 3rem)` | `clamp(3rem, 1rem + 2vi, 4rem)` |
| `--size-64` | `clamp(2.5rem, 1.3333rem + 2.6667vi, 4rem)` | `clamp(4rem, 1rem + 3vi, 5.5rem)` |
| `--size-80` | `clamp(3rem, 1.4444rem + 3.5556vi, 5rem)` | `clamp(5rem, 1rem + 4vi, 7rem)` |
| `--size-96` | `clamp(4rem, 2.4444rem + 3.5556vi, 6rem)` | `clamp(6rem, 1rem + 5vi, 8.5rem)` |
| `--size-120` | `clamp(5rem, 3.0556rem + 4.4444vi, 7.5rem)` | `clamp(7.5rem, 1.5rem + 6vi, 10.5rem)` |
| `--size-144` | `clamp(6rem, 3.6667rem + 5.3333vi, 9rem)` | `clamp(9rem, 2rem + 7vi, 12.5rem)` |

---

### 1.4 Elevation, Borders & Radii Tokens
- **Border Radii**:
  - Micro / Pixel: `2px` (chips, tables, score badges, preloader boxes)
  - Small: `3px` – `4px` (`.role_timeline-node`)
  - Medium: `.1875rem` (`--border-radius-3` = 3px)
  - Large: `1.5em` (`--border-radius`)
  - Pill / Rounded: `999px` / `9999px` (`.header_nav-button`, `.button`, `.role_timeline-tag`)
- **Borders & Strokes**:
  - `--border-stroke`: `.0625rem` (1px)
  - Subtle Border: `1px solid rgba(0, 0, 0, 0.08)`
  - Card Border: `1px solid rgba(0, 0, 0, 0.14)`
  - Thick Wave Stroke: `4.5px` (`.curvy-transition-svg`)
  - Wavy Underline Stroke: `2.4px` (SVG data URI)
- **Z-Index Scale**:
  - `--z-index-below`: `-1`
  - `--z-index-default`: `0`
  - `--z-index-above`: `1`
  - `--z-index-higher`: `2`
  - `--z-index-overlay`: `700`
  - `--z-index-header`: `800`
  - `--z-index-cursor`: `850`
  - `--z-index-menu`: `900`
  - `--z-index-chat-modal`: `950`
  - `--z-index-skip-link`: `1000`
  - `--z-index-click`: `1050`
  - `--z-index-preloader`: `1100`

---

### 1.5 Motion, Easings & Durations
- **Durations**:
  - `--speed-faster`: `.15s`
  - `--speed-fast`: `.3s`
  - `--speed`: `.45s`
  - `--speed-slow`: `.65s`
  - `--speed-slower`: `.8s`
  - `--stagger`: `.04s`
  - `--content-stagger`: `.03s`
- **Cubic Béziers & Linear Springs**:
  - `--bouncy-ease`: `cubic-bezier(.34, 1.64, .64, 1)`
  - `--bounce-cubic-ease`: `cubic-bezier(.34, 2.27, .64, 1)`
  - `--smooth-ease`: `cubic-bezier(.32, .72, 0, 1)`
  - `--opacity-ease`: `cubic-bezier(.4, 0, .2, 1)`
  - `--color-ease`: `cubic-bezier(.215, .61, .355, 1)`
  - `--transform-ease`: `cubic-bezier(.34, 1.64, .64, 1)`
  - `--clip-path-ease`: `cubic-bezier(.215, .61, .355, 1)`
  - `--elastic-ease`: `linear(0, .2178 2.1%, 1.1144 8.49%, 1.2959 10.7%, 1.3463 11.81%, 1.3705 12.94%, 1.3726, 1.3643 14.48%, 1.3151 16.2%, 1.0317 21.81%, .941 24.01%, .8912 25.91%, .8694 27.84%, .8698 29.21%, .8824 30.71%, 1.0122 38.33%, 1.0357, 1.046 42.71%, 1.0416 45.7%, .9961 53.26%, .9839 57.54%, .9853 60.71%, 1.0012 68.14%, 1.0056 72.24%, .9981 86.66%, 1 100%)`
  - `--elastic-ease-out`: `linear(0, .5737 7.6%, .8382 11.87%, .9463 14.19%, 1.0292 16.54%, 1.0886 18.97%, 1.1258 21.53%, 1.137 22.97%, 1.1424 24.48%, 1.1423 26.1%, 1.1366 27.86%, 1.1165 31.01%, 1.0507 38.62%, 1.0219 42.57%, .9995 46.99%, .9872 51.63%, .9842 58.77%, 1.0011 81.26%, 1)`
- **Keyframe Registry**:
  - `loading`: 180deg flip on Y/Z
  - `round`: 360deg infinite rotation
  - `spin`: 360deg `steps(8)` rotation (windmill loader)
  - `shine`: Linear gradient translation across button
  - `accordion-fade-in`: Translate Y from `-0.5rem` to `0` with opacity `0` to `1`
  - `hint-jump` & `words-jumping`: Playful vertical hops

---

## 2. COMPONENT CATALOGUE

### 2.1 Buttons & Interactive Controls
1. **Pill Action / Submit Button (`.button`, `.button.is-form`)**:
   - Files: `main/index.html`, `main/index3.html`, `styles/main.css`
   - Variants: Default pill button, `.is-form` (Yellow `#ffe32e` background with black text and rounded pill), hover scale/shine, disabled state.
   - States: default, `:hover`, `:focus-visible`, `:active`, `[disabled]`.

2. **Explore Star-Shine Button (`.btn-shine`)**:
   - Files: `main/index.html`, `styles/main.css`
   - Dark button (`rgb(19, 19, 19)`) with glowing green box-shadow, floating pixel star SVGs (`.star-1` through `.star-6`), and animated text shine.

3. **Pill Navigation Items (`.header_nav-button`)**:
   - Files: `main/index.html`, `main/index2.html`, `main/index3.html`, `main/index4.html`
   - States: default, hover (`.header_nav-button-bg` scale), `w--current` (active black pill with cream text), focus-visible ring.

4. **Feed Button (`.header_action-button`)**:
   - Files: All pages
   - Monospace uppercase "FEED" pill button with subtle border and fill transition.

5. **Learn More Button (`.learn-more`)**:
   - Files: `main/index2.html`
   - Yellow accent badge with diagonal arrow `↗` and hover translate.

6. **Minimap Navigator (`.process_minimap-item`)**:
   - Files: `main/index2.html`
   - Vertical pagination bar with numeric indicators (`01`, `02`) and line markers.

---

### 2.2 Curvy/Wavy Underlines & Dividers
1. **Wavy Yellow Underline (`.accordion_title::after`)**:
   - Files: `main/index4.html`, `styles/main.css`
   - Target: Opened accordion headers `.accordion_details[open] > .accordion_summary .accordion_title::after`
   - Implementation: `background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 6'%3E%3Cpath d='M0 3 Q 5 0, 10 3 T 20 3' fill='none' stroke='%23ffe32e' stroke-width='2.4' stroke-linecap='round'/%3E%3C/svg%3E")`
   - Size: `16px 6px`, repeat-x, positioned `bottom: -6px`.

2. **Curvy Wavy Transition Section (`.curvy-transition-section`, `.curvy-transition-svg`)**:
   - Files: `main/index.html`, `styles/main.css`
   - Full-width SVG wave (`viewBox="0 0 1440 90"`) separating dark plan section from cream service section.
   - Exact paths:
     - Upper black fill: `M0,0 L0,45 Q 60,80 120,45 T 240,45 ... L 1440,0 Z`
     - Lower cream fill: `M0,95 L0,45 Q 60,80 120,45 T 240,45 ... L 1440,95 Z`
     - Boundary yellow stroke: `stroke="#ffe32e" stroke-width="4.5"`

---

### 2.3 Navigation & Header
- **Site Header (`.header`, `.header_inner`)**: Fixed / sticky top navigation.
- **Avatar Brand (`.header_logo-link`)**: Circular pixel avatar image (`avatar.png`) with hover scale.
- **Nav Pill Group (`.header_nav`, `.header_nav-list`)**: Grouped pill container housing navigation tabs.

---

### 2.4 Typography & Text Patterns
- **Hero Title (`.u-h1`, `.intro_title`)**: Massive editorial display title.
- **Eyebrow / Category Tag (`.u-f1`, `.u-f2`)**: Monospace tracking label (`XR65D`, `III`).
- **Section Headings (`.u-h2`, `.u-h3`)**.
- **Dotted-Leader Rows (`.dotted-leader-row` / `.project-list-row`)**:
  - Format: `01 . . . . . TEXT2SQL`
  - Uses CSS flex with repeated dot leaders connecting index and title.

---

### 2.5 Cards, Containers & Badges
1. **Hero Price / Project Card (`.hero-price_card`)**:
   - Corner pixel SVGs: `hero-price_card-back-corner` in top-left, top-right, bottom-left, bottom-right.
   - Dark mode background with tech stack tags and links.

2. **Pixel Landscape Card (`XR65D`)**:
   - Header with pixel bars `III`, pixel art scenery image, and metadata badge.

3. **Skill Tags (`.skill-tag`)**:
   - Border radius 2px, transparent background, 1px subtle border, monospace typography.

4. **Education Score Badge (`.edu-score-badge`)**:
   - Border radius 2px, bold score label.

---

### 2.6 Forms & Loaders
1. **Contact Form Container (`.plan_form`)**:
   - Centered flex row / wrap with 10px gap.
2. **Form Inputs (`.form_item`, `.form_input`)**:
   - Monospace placeholders (`E-MAIL`, `MESSAGE`), bordered pill / rectangular styling.
3. **Submit Windmill Spinner (`.submit-spinner`)**:
   - 8-blade pixel windmill SVG icon.
   - Rotates via `animation: spin 1s steps(8) infinite`.
   - Hidden by default, toggled on form submission.
4. **Form Alerts**:
   - `.plan_form-message.is-success`: "Thank you! I will get in touch with you shortly."
   - `.plan_form-message.is-error`: "Something went wrong. Please try again."

---

### 2.7 Accordions & Data Tables
1. **Accordion (`.accordion_item`, `.accordion_details`, `.accordion_summary`)**:
   - Native `<details>` / `<summary>` disclosure with animated open/close.
   - Wavy yellow underline on summary title when open.
   - Custom SVG arrow / plus toggle (`.icon.is-accordion`).
2. **Data Tables (`.education-table`, `.skills-table`, `.achievements-table`)**:
   - Styled with uppercase header labels, subtle cell borders, responsive horizontal scrolling wrapper (`-webkit-overflow-scrolling: touch`).

---

### 2.8 Career Progression Timeline
- **Container (`.role_timeline-wrap`)**:
  - Header: `.role_company` + `.role_company-badge` (`CAREER PROGRESSION`).
  - Track: Dual node system (`✦` for current/promoted in yellow box, `●` for past in dark circle).
  - Stem: Connecting vertical gradient line (`.role_timeline-stem`).
  - Step Body: Role title, `.role_timeline-tag.is-promoted` (`PROMOTED ✦`), and uppercase monospace date range.

---

### 2.9 Loaders & System Overlays
1. **Preloader (`.preloader`)**:
   - Fullscreen overlay (`#000000`, `z-index: 1100`).
   - 3 vertical bar boxes (`.preloader_box`) animated via `@keyframes loading`.
2. **Footer (`.footer`)**:
   - Social link items (`.footer_link.is-social`).
   - Time indicator and CE mark icon (`.icon.is-ce`).

---

## 3. DUPLICATES AND DRIFT ANALYSIS

1. **Theme Inversion (`index3.html` vs others)**:
   - `index.html`, `index2.html`, and `index4.html` have `body` background `#f9f4eb` (`--ci-cream`).
   - `index3.html` enforces `body[data-page="index3"] { background-color: #000 !important; }` and uses dark surfaces.
   - *Design System Decision*: Model as a first-class theme modifier: `.theme-light` vs `.theme-dark` (or `[data-theme="light|dark"]`).

2. **Inline Styles vs External CSS**:
   - Table styles (`.education-table`, `.skills-table`) were defined inline in `index4.html` and mirrored into `main.css`.
   - The wavy underline was written both inline in `index4.html` and in `main.css`.
   - Preloader styles were duplicated in all 4 HTML files with minor overrides (`index3.html` forcing `background-color: #000 !important;`).
   - *Design System Decision*: Unify all rules into the modular CSS library with exact identical properties and zero duplication.

3. **Contact Form Differences**:
   - `index.html` and `index3.html` contain interactive contact forms with the submit windmill spinner.
   - `index2.html` and `index4.html` contain deep-link contact anchors pointing to the primary form.
   - *Design System Decision*: Expose the Form as a standalone component with interactive states (idle, loading, success, error).

---

## 4. ASSETS AND ICONS INVENTORY

### 4.1 Fonts
- `font-narrow-semibold.woff2` (CDN hosted)
- `font-mono-medium.woff2` (CDN hosted)
- `font-normal-medium.woff2` (CDN hosted)
- `webflow-icons` (embedded TTF)
- `Arial Narrow` (system local fallback)

### 4.2 Images
- `/main/images/avatar.png` (Character profile image)
- `/main/img1.png` (Pixel landscape visual)

### 4.3 SVGs and Icons
- Arrow icon (`viewBox="0 0 20 20"`, `.icon.is-arrow.is-small`)
- Star / Sparkle icon (`viewBox="0 0 20 20"`, `.icon.is-small`)
- CE Mark icon (`viewBox="0 0 21 16"`, `.icon.is-ce`)
- Accordion chevron / plus (`viewBox="0 0 20 20"`, `.icon.is-accordion`)
- Retro Price Card corner SVG (`viewBox="0 0 93 93"`, 4 corner orientations)
- Pixel Windmill Submit Spinner (8-blade pixel art icon)
- Curvy Wavy Transition Section SVG (`viewBox="0 0 1440 90"`)
- Inline Wavy Underline Data URI (`viewBox="0 0 20 6"`)

