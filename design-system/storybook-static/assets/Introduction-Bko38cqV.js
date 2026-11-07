import{j as e,M as t}from"./index-DGzzx3Oo.js";import{useMDXComponents as i}from"./index-6YnEgEIa.js";import"./iframe-CSfaR8Sr.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Ca4lBP7z.js";import"./index-Bhqu_tAV.js";function n(s){const r={p:"p",span:"span",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Introduction"}),`
`,e.jsx("style",{children:`
  /* ============================================================
     SQUIGGLE UI - STORYBOOK INTRODUCTION SHOWCASE
     ============================================================ */

  .sbdocs-content {
    max-width: 1200px !important;
    padding-top: 1rem !important;
  }

  .sbdocs-content a {
    text-decoration: none !important;
  }

  /* Scoped Hero Container */
  .sq-intro-hero {
    background: #f9f4eb !important;
    border: 1px solid rgba(0, 0, 0, 0.12) !important;
    border-radius: 12px !important;
    padding: clamp(2rem, 4vw, 3.5rem) clamp(1.5rem, 3.5vw, 3rem) !important;
    color: #111111 !important;
    margin-bottom: 2rem !important;
    position: relative !important;
    overflow: hidden !important;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04) !important;
  }

  /* Top Technical Meta Bar */
  .sq-intro-hero__meta {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1.25rem;
  }

  .sq-intro-pill {
    font-family: var(--sq-font-family-mono, "font-mono-medium", monospace) !important;
    font-size: 0.68rem !important;
    letter-spacing: 0.08em !important;
    text-transform: uppercase !important;
    font-weight: 600 !important;
    padding: 4px 10px !important;
    border-radius: 9999px !important;
    background: rgba(0, 0, 0, 0.06) !important;
    color: #111111 !important;
    display: inline-flex !important;
    align-items: center !important;
    gap: 5px !important;
    line-height: 1.2 !important;
    border: 1px solid rgba(0, 0, 0, 0.08) !important;
  }

  .sq-intro-pill--accent {
    background: #ffe32e !important;
    color: #000000 !important;
    border-color: rgba(0, 0, 0, 0.15) !important;
  }

  .sq-intro-pill--live {
    background: #111111 !important;
    color: #a1ff14 !important;
    border-color: #111111 !important;
  }

  .sq-intro-pill--live::before {
    content: "";
    display: inline-block;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #a1ff14;
    box-shadow: 0 0 6px #a1ff14;
    animation: sq-pulse-dot 2s infinite ease-in-out;
  }

  @keyframes sq-pulse-dot {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.4; transform: scale(0.85); }
  }

  /* Force Hero Title to be large and prominent across all Storybook Docs selectors */
  .sbdocs-content .sq-intro-hero h1,
  .sbdocs-content .sq-intro-hero h1 *,
  .sbdocs-content .sq-intro-hero h1 p,
  .sbdocs-content .sq-intro-hero h1 span,
  .sbdocs-content h1.sq-intro-title,
  .sbdocs-content h1.sq-intro-title * {
    font-family: var(--sq-font-family-narrow, "font-narrow-semibold", "Arial Narrow", -apple-system, sans-serif) !important;
    font-size: 54px !important;
    font-weight: 700 !important;
    line-height: 1.05 !important;
    letter-spacing: -0.02em !important;
    color: #000000 !important;
    margin: 0 !important;
    padding: 0 !important;
    display: inline !important;
  }

  .sbdocs-content .sq-intro-hero h1 span.sq-wavy-underline {
    font-size: 54px !important;
    display: inline-block !important;
    padding-bottom: 4px !important;
  }

  @media (max-width: 768px) {
    .sbdocs-content .sq-intro-hero h1,
    .sbdocs-content .sq-intro-hero h1 *,
    .sbdocs-content .sq-intro-hero h1 p,
    .sbdocs-content .sq-intro-hero h1 span,
    .sbdocs-content h1.sq-intro-title,
    .sbdocs-content h1.sq-intro-title * {
      font-size: 38px !important;
    }
    .sbdocs-content .sq-intro-hero h1 span.sq-wavy-underline {
      font-size: 38px !important;
    }
  }

  /* Section Headings (H2) */
  .sbdocs-content h2.sq-intro-heading-2,
  .sbdocs-content .sq-intro-heading-2 {
    font-family: var(--sq-font-family-narrow, "font-narrow-semibold", "Arial Narrow", -apple-system, sans-serif) !important;
    font-size: 30px !important;
    font-weight: 700 !important;
    text-transform: uppercase !important;
    letter-spacing: -0.01em !important;
    color: #000000 !important;
    margin: 0 !important;
    padding: 0 !important;
    border: none !important;
  }

  /* Card Headings (H3) */
  .sbdocs-content .sq-intro-card h3,
  .sbdocs-content .sq-intro-card h3 * {
    font-family: var(--sq-font-family-narrow, "font-narrow-semibold", sans-serif) !important;
    font-size: 22px !important;
    font-weight: 600 !important;
    color: #ffffff !important;
    margin: 0 0 8px 0 !important;
    line-height: 1.25 !important;
  }

  /* Directory Card Headings */
  .sbdocs-content .sq-intro-dir-card h3,
  .sbdocs-content .sq-intro-dir-card h3 * {
    font-family: var(--sq-font-family-narrow, "font-narrow-semibold", sans-serif) !important;
    font-size: 20px !important;
    font-weight: 700 !important;
    text-transform: uppercase !important;
    color: #000000 !important;
    margin: 0 0 14px 0 !important;
    line-height: 1.2 !important;
  }

  /* Explore Button (Compass next-page trigger) */
  .sq-intro-explore-btn {
    height: 42px;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background-color: rgb(161, 255, 20);
    border-radius: 30px;
    color: rgb(19, 19, 19) !important;
    font-family: var(--sq-font-family-normal, -apple-system, sans-serif);
    font-weight: 600;
    font-size: 15px;
    padding: 0 18px 0 10px;
    text-decoration: none !important;
    cursor: pointer;
    transition: background-color 0.4s ease, transform 0.2s ease;
    border: none;
  }

  .sq-intro-explore-btn:hover {
    background-color: rgb(192, 255, 20);
  }

  .sq-intro-explore-btn:active {
    transform: scale(0.97);
  }

  .sq-intro-explore-btn svg {
    width: 25px;
    height: 25px;
    display: block;
    fill: rgb(19, 19, 19) !important;
    transition: transform 1.5s cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  .sq-intro-explore-btn:hover svg {
    transform: rotate(250deg);
  }

  /* Primary Yellow Pill Button */
  .sq-intro-btn-primary {
    height: 42px;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: #ffe32e;
    color: #000000 !important;
    font-family: var(--sq-font-family-mono, "font-mono-medium", monospace);
    font-size: 0.8rem;
    font-weight: 700;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    padding: 0 20px;
    border-radius: 9999px;
    border: 1px solid rgba(0, 0, 0, 0.15);
    transition: transform 0.2s ease, background 0.2s ease, box-shadow 0.2s ease;
  }

  .sq-intro-btn-primary:hover {
    background: #fff066;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(255, 227, 46, 0.35);
  }

  .sq-intro-btn-primary:active {
    transform: translateY(0);
  }

  /* Outline Pill Button */
  .sq-intro-btn-outline {
    height: 42px;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: #ffffff;
    color: #000000 !important;
    font-family: var(--sq-font-family-mono, "font-mono-medium", monospace);
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    padding: 0 18px;
    border-radius: 9999px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    transition: background 0.2s ease, border-color 0.2s ease;
  }

  .sq-intro-btn-outline:hover {
    background: rgba(0, 0, 0, 0.04);
    border-color: #000000;
  }

  /* Standalone Distribution Bundle Tag */
  .sq-intro-dist-badge {
    height: 42px;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-family: var(--sq-font-family-mono, monospace);
    font-size: 0.78rem;
    color: rgba(0, 0, 0, 0.6);
    padding: 0 14px;
    background: rgba(0, 0, 0, 0.03);
    border-radius: 9999px;
    border: 1px dashed rgba(0, 0, 0, 0.15);
  }

  /* Metrics Strip */
  .sq-intro-metrics {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 1rem;
    margin: 2rem 0 3rem 0;
    padding: 1.5rem;
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.08);
    border-radius: 10px;
  }

  .sq-intro-metric-item {
    display: flex;
    flex-direction: column;
    padding: 0.5rem 0.75rem;
    border-left: 2px solid #ffe32e;
  }

  .sq-intro-metric-value {
    font-family: var(--sq-font-family-narrow, "font-narrow-semibold", sans-serif);
    font-size: 2.25rem;
    font-weight: 700;
    line-height: 1;
    color: #000000;
    margin-bottom: 0.25rem;
  }

  .sq-intro-metric-label {
    font-family: var(--sq-font-family-mono, monospace);
    font-size: 0.72rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: rgba(0, 0, 0, 0.55);
    font-weight: 600;
  }

  /* Showcase Grid */
  .sq-intro-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
    margin-bottom: 3rem;
  }

  .sq-intro-card {
    background: #000000;
    color: #ffffff;
    border-radius: 8px;
    padding: 1.75rem;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 320px;
    transition: transform 0.25s ease, box-shadow 0.25s ease;
    border: 1px solid rgba(255, 255, 255, 0.08);
  }

  .sq-intro-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.25);
  }

  .sq-intro-card__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.25rem;
  }

  .sq-intro-card__tag {
    font-family: var(--sq-font-family-mono, monospace);
    font-size: 0.7rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    padding: 3px 8px;
    border-radius: 4px;
    background: rgba(255, 255, 255, 0.12);
    color: #ffe32e;
    font-weight: 600;
  }

  .sq-intro-card__num {
    font-family: var(--sq-font-family-mono, monospace);
    font-size: 0.75rem;
    color: #ffe32e;
  }

  .sq-intro-card__desc {
    font-size: 0.88rem;
    line-height: 1.6;
    color: #d1cbc1;
    margin: 0 0 1.25rem 0;
  }

  .sq-intro-card__preview {
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 6px;
    padding: 1rem;
    margin-bottom: 1.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 70px;
  }

  .sq-intro-card__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 1rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  .sq-intro-card__link {
    font-family: var(--sq-font-family-mono, monospace);
    font-size: 0.78rem;
    color: #ffe32e !important;
    display: inline-flex;
    align-items: center;
    gap: 4px;
    font-weight: 600;
    transition: gap 0.2s ease;
  }

  .sq-intro-card:hover .sq-intro-card__link {
    gap: 8px;
  }

  /* Pixel Corner Bracket SVGs */
  .sq-bracket-tl, .sq-bracket-tr, .sq-bracket-bl, .sq-bracket-br {
    position: absolute;
    width: 14px;
    height: 14px;
    color: rgba(255, 255, 255, 0.35);
    pointer-events: none;
  }
  .sq-bracket-tl { top: 6px; left: 6px; }
  .sq-bracket-tr { top: 6px; right: 6px; }
  .sq-bracket-bl { bottom: 6px; left: 6px; }
  .sq-bracket-br { bottom: 6px; right: 6px; }

  /* Directory Grid */
  .sq-intro-dir-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 1.5rem;
    margin-bottom: 3rem;
  }

  .sq-intro-dir-card {
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 1.5rem;
  }

  .sq-intro-dir-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .sq-intro-dir-link {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 6px 10px;
    border-radius: 6px;
    color: #111111 !important;
    font-family: var(--sq-font-family-normal, sans-serif);
    font-size: 0.9rem;
    transition: background 0.15s ease, transform 0.15s ease;
  }

  .sq-intro-dir-link:hover {
    background: #f9f4eb;
    transform: translateX(3px);
  }

  .sq-intro-dir-tag {
    font-family: var(--sq-font-family-mono, monospace);
    font-size: 0.68rem;
    padding: 2px 6px;
    border-radius: 3px;
    background: rgba(0, 0, 0, 0.06);
    color: rgba(0, 0, 0, 0.6);
  }

  /* Terminal Block */
  .sq-intro-terminal {
    background: #111111 !important;
    border-radius: 10px !important;
    overflow: hidden !important;
    margin: 2rem 0 !important;
    border: 1px solid rgba(255, 255, 255, 0.12) !important;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.18) !important;
  }

  .sbdocs-content .sq-intro-terminal,
  .sbdocs-content .sq-intro-terminal * {
    color: #f1f1f1;
  }

  .sq-intro-terminal__bar {
    background: #1d1d1d !important;
    padding: 10px 14px !important;
    display: flex !important;
    align-items: center !important;
    gap: 6px !important;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08) !important;
  }

  .sq-intro-terminal__dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    display: inline-block;
  }
  .sq-intro-terminal__dot--red { background: #ff5f56; }
  .sq-intro-terminal__dot--yellow { background: #ffbd2e; }
  .sq-intro-terminal__dot--green { background: #27c93f; }

  .sq-intro-terminal__title {
    font-family: var(--sq-font-family-mono, monospace) !important;
    font-size: 0.72rem !important;
    color: rgba(255, 255, 255, 0.6) !important;
    margin-left: 8px !important;
    letter-spacing: 0.05em !important;
  }

  .sq-intro-terminal__body {
    padding: 1.25rem 1.5rem !important;
    font-family: var(--sq-font-family-mono, monospace) !important;
    font-size: 0.85rem !important;
    color: #f1f1f1 !important;
    line-height: 1.6 !important;
    overflow-x: auto !important;
    background: #111111 !important;
  }

  .sq-intro-swatch-row {
    display: flex;
    gap: 8px;
    align-items: center;
    width: 100%;
  }

  .sq-intro-swatch {
    flex: 1;
    height: 38px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--sq-font-family-mono, monospace);
    font-size: 0.65rem;
    font-weight: 700;
    border: 1px solid rgba(255, 255, 255, 0.2);
  }
`}),`
`,`
`,e.jsxs("div",{className:"sq-intro-hero",children:[e.jsxs("div",{className:"sq-intro-hero__meta",children:[e.jsx("span",{className:"sq-intro-pill sq-intro-pill--accent",children:"✦ SPEC 01"}),e.jsx("span",{className:"sq-intro-pill",children:"V1.0.0 PRODUCTION"}),e.jsx("span",{className:"sq-intro-pill",children:"EDITORIAL BRUTALISM & RETRO SYSTEM"}),e.jsx("span",{className:"sq-intro-pill sq-intro-pill--live",children:"LIVE WORKSPACE"})]}),e.jsxs("div",{style:{margin:"0.85rem 0 1.25rem 0"},children:[e.jsx("span",{style:{fontFamily:'var(--sq-font-family-mono, "font-mono-medium", monospace)',fontSize:"0.82rem",letterSpacing:"0.18em",textTransform:"uppercase",color:"rgba(0, 0, 0, 0.55)",display:"block",fontWeight:600,marginBottom:"0.5rem"},children:e.jsx(r.p,{children:"Design System & Component Library"})}),e.jsx("h1",{className:"sq-intro-title",style:{fontFamily:'var(--sq-font-family-narrow, "font-narrow-semibold", "Arial Narrow", -apple-system, sans-serif)',fontSize:"54px",fontWeight:700,lineHeight:"1.05",letterSpacing:"-0.02em",color:"#000000",margin:"0 0 0.5rem 0",padding:0,display:"block"},children:[e.jsx(r.span,{className:"sq-wavy-underline",style:{color:"#000000",paddingBottom:"4px"},children:"Squiggle"},"wave")," UI Design System"]})]}),e.jsx("p",{style:{fontFamily:'var(--sq-font-family-normal, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif)',fontSize:"17px",lineHeight:"1.6",color:"rgba(0, 0, 0, 0.78)",maxWidth:"780px",margin:"1.25rem 0 2rem 0"},children:e.jsx(r.p,{children:"The high-contrast, framework-agnostic design system reverse-engineered with 100% exact fidelity from the brutalist editorial portfolio. Built with W3C design tokens, fluid clamp typography, hand-drawn vector squiggles, and retro pixel-art motifs."})}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",gap:"0.85rem"},children:[e.jsxs("a",{href:"./?path=/docs/components-explore-button--docs",className:"sq-intro-explore-btn",title:"Explore Button component documentation",children:[e.jsx("svg",{viewBox:"0 0 512 512",children:e.jsx("path",{d:"M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48zM345 199.7L280.9 285.2C277.6 289.6 273.2 293.1 268.1 295.3L183.4 331.7C174.9 335.4 165.3 333.7 158.6 327.4C151.9 321.1 150.2 311.5 153.9 303L190.3 218.3C192.5 213.2 196 208.8 200.4 205.5L285.9 141.4C293.4 135.8 303.7 136.2 310.8 142.4C317.9 148.6 319.4 159 314.9 166.9L345 199.7z"})}),e.jsx("span",{children:"Explore System"})]}),e.jsxs("a",{href:"./?path=/story/page-patterns-templates--experience-page-template",className:"sq-intro-btn-primary",children:[e.jsx("span",{children:"View Templates"}),e.jsx("span",{children:"→"})]}),e.jsx("a",{href:"./?path=/docs/foundations-colors--docs",className:"sq-intro-btn-outline",children:e.jsx("span",{children:"Tokens & Colors ✦"})}),e.jsxs("span",{className:"sq-intro-dist-badge",children:[e.jsx("span",{children:"dist/design-system.css"}),e.jsx("span",{style:{color:"#ffe32e"},children:"✦"}),e.jsx("span",{children:"51 KB"})]})]})]}),`
`,`
`,e.jsxs("div",{className:"sq-intro-metrics",children:[e.jsxs("div",{className:"sq-intro-metric-item",children:[e.jsx("span",{className:"sq-intro-metric-value",children:"18+"}),e.jsx("span",{className:"sq-intro-metric-label",children:"UI Components & Stories"})]}),e.jsxs("div",{className:"sq-intro-metric-item",children:[e.jsx("span",{className:"sq-intro-metric-value",children:"100%"}),e.jsx("span",{className:"sq-intro-metric-label",children:"Pixel & Timing Fidelity"})]}),e.jsxs("div",{className:"sq-intro-metric-item",children:[e.jsx("span",{className:"sq-intro-metric-value",children:"0"}),e.jsx("span",{className:"sq-intro-metric-label",children:"Runtime Dependencies"})]}),e.jsxs("div",{className:"sq-intro-metric-item",children:[e.jsx("span",{className:"sq-intro-metric-value",children:"W3C"}),e.jsx("span",{className:"sq-intro-metric-label",children:"JSON + CSS Custom Props"})]}),e.jsxs("div",{className:"sq-intro-metric-item",children:[e.jsx("span",{className:"sq-intro-metric-value",children:"51 KB"}),e.jsx("span",{className:"sq-intro-metric-label",children:"Standalone Single Bundle"})]})]}),`
`,`
`,e.jsxs("div",{style:{display:"flex",alignItems:"baseline",justifyContent:"space-between",margin:"3rem 0 1.5rem 0",paddingBottom:"0.75rem",borderBottom:"1px solid rgba(0, 0, 0, 0.1)"},children:[e.jsx("h2",{className:"sq-intro-heading-2",style:{fontFamily:'var(--sq-font-family-narrow, "font-narrow-semibold", sans-serif)',fontSize:"30px",fontWeight:700,textTransform:"uppercase",letterSpacing:"-0.01em",color:"#000000",margin:0},children:e.jsx(r.p,{children:"Visual Identity & Core Motifs"})}),e.jsx("span",{style:{fontFamily:"var(--sq-font-family-mono, monospace)",fontSize:"0.75rem",color:"rgba(0, 0, 0, 0.5)",letterSpacing:"0.08em",textTransform:"uppercase"},children:e.jsx(r.p,{children:"Interactive Design System Primitives"})})]}),`
`,e.jsxs("div",{className:"sq-intro-grid",children:[e.jsxs("div",{className:"sq-intro-card",children:[e.jsx("svg",{className:"sq-bracket-tl",viewBox:"0 0 93 93",fill:"none",children:e.jsx("path",{fill:"currentColor",d:"M31 0h62v31H62v31H31v31H0V31h31V0Z"})}),e.jsx("svg",{className:"sq-bracket-tr",viewBox:"0 0 93 93",fill:"none",children:e.jsx("path",{fill:"currentColor",d:"M31 0h62v31H62v31H31v31H0V31h31V0Z"})}),e.jsx("svg",{className:"sq-bracket-bl",viewBox:"0 0 93 93",fill:"none",children:e.jsx("path",{fill:"currentColor",d:"M31 0h62v31H62v31H31v31H0V31h31V0Z"})}),e.jsx("svg",{className:"sq-bracket-br",viewBox:"0 0 93 93",fill:"none",children:e.jsx("path",{fill:"currentColor",d:"M31 0h62v31H62v31H31v31H0V31h31V0Z"})}),e.jsxs("div",{children:[e.jsxs("div",{className:"sq-intro-card__top",children:[e.jsx("span",{className:"sq-intro-card__tag",children:"Kinetic Action"}),e.jsx("span",{className:"sq-intro-card__num",children:"01 ✦"})]}),e.jsx("h3",{style:{fontFamily:'var(--sq-font-family-narrow, "font-narrow-semibold", sans-serif)',fontSize:"22px",fontWeight:600,color:"#ffffff",margin:"0 0 8px 0",lineHeight:"1.25"},children:"Compass Explore Button"}),e.jsx("p",{className:"sq-intro-card__desc",children:e.jsxs(r.p,{children:["Signature next-page trigger featuring a neon green surface (",e.jsx("code",{style:{color:"#a1ff14",background:"rgba(255,255,255,0.1)",padding:"2px 4px",borderRadius:"3px"},children:"rgb(161,255,20)"}),") and an authentic compass icon that rotates 250° on hover with smooth mechanical easing."]})}),e.jsx("div",{className:"sq-intro-card__preview",children:e.jsxs("a",{href:"./?path=/docs/components-explore-button--docs",className:"button1234",style:{textDecoration:"none"},title:"Hover to spin compass",children:[e.jsx("svg",{className:"svgIcon",viewBox:"0 0 512 512",children:e.jsx("path",{d:"M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48zM345 199.7L280.9 285.2C277.6 289.6 273.2 293.1 268.1 295.3L183.4 331.7C174.9 335.4 165.3 333.7 158.6 327.4C151.9 321.1 150.2 311.5 153.9 303L190.3 218.3C192.5 213.2 196 208.8 200.4 205.5L285.9 141.4C293.4 135.8 303.7 136.2 310.8 142.4C317.9 148.6 319.4 159 314.9 166.9L345 199.7z"})}),e.jsx("span",{style:{color:"#131313",fontWeight:600},children:"Explore"})]})})]}),e.jsxs("div",{className:"sq-intro-card__footer",children:[e.jsx("span",{style:{fontFamily:"var(--sq-font-family-mono, monospace)",fontSize:"0.72rem",color:"#888"},children:"30px Pill Radius"}),e.jsx("a",{href:"./?path=/docs/components-explore-button--docs",className:"sq-intro-card__link",children:e.jsx(r.p,{children:"Inspect Button →"})})]})]}),e.jsxs("div",{className:"sq-intro-card",children:[e.jsx("svg",{className:"sq-bracket-tl",viewBox:"0 0 93 93",fill:"none",children:e.jsx("path",{fill:"currentColor",d:"M31 0h62v31H62v31H31v31H0V31h31V0Z"})}),e.jsx("svg",{className:"sq-bracket-tr",viewBox:"0 0 93 93",fill:"none",children:e.jsx("path",{fill:"currentColor",d:"M31 0h62v31H62v31H31v31H0V31h31V0Z"})}),e.jsx("svg",{className:"sq-bracket-bl",viewBox:"0 0 93 93",fill:"none",children:e.jsx("path",{fill:"currentColor",d:"M31 0h62v31H62v31H31v31H0V31h31V0Z"})}),e.jsx("svg",{className:"sq-bracket-br",viewBox:"0 0 93 93",fill:"none",children:e.jsx("path",{fill:"currentColor",d:"M31 0h62v31H62v31H31v31H0V31h31V0Z"})}),e.jsxs("div",{children:[e.jsxs("div",{className:"sq-intro-card__top",children:[e.jsx("span",{className:"sq-intro-card__tag",children:"Vector Motif"}),e.jsx("span",{className:"sq-intro-card__num",children:"02 ✦"})]}),e.jsx("h3",{style:{fontFamily:'var(--sq-font-family-narrow, "font-narrow-semibold", sans-serif)',fontSize:"22px",fontWeight:600,color:"#ffffff",margin:"0 0 8px 0",lineHeight:"1.25"},children:"Hand-Drawn Vector Wave"}),e.jsx("p",{className:"sq-intro-card__desc",children:e.jsxs(r.p,{children:["Signature electric yellow (",e.jsx("code",{style:{color:"#ffe32e",background:"rgba(255,255,255,0.1)",padding:"2px 4px",borderRadius:"3px"},children:"#ffe32e"}),") SVG curve applied beneath active accordions, emphasized text, and full-bleed editorial section boundaries."]})}),e.jsx("div",{className:"sq-intro-card__preview",children:e.jsx("span",{className:"sq-wavy-underline",style:{fontFamily:"var(--sq-font-family-narrow, sans-serif)",fontSize:"24px",color:"#ffffff",fontWeight:600,letterSpacing:"0.02em",paddingBottom:"3px"},children:e.jsx(r.p,{children:"Interactive Underline"})})})]}),e.jsxs("div",{className:"sq-intro-card__footer",children:[e.jsx("span",{style:{fontFamily:"var(--sq-font-family-mono, monospace)",fontSize:"0.72rem",color:"#888"},children:"SVG Stroke · 2.4px"}),e.jsx("a",{href:"./?path=/docs/components-wavy-underline--docs",className:"sq-intro-card__link",children:e.jsx(r.p,{children:"Inspect Wave →"})})]})]}),e.jsxs("div",{className:"sq-intro-card",children:[e.jsx("svg",{className:"sq-bracket-tl",viewBox:"0 0 93 93",fill:"none",children:e.jsx("path",{fill:"currentColor",d:"M31 0h62v31H62v31H31v31H0V31h31V0Z"})}),e.jsx("svg",{className:"sq-bracket-tr",viewBox:"0 0 93 93",fill:"none",children:e.jsx("path",{fill:"currentColor",d:"M31 0h62v31H62v31H31v31H0V31h31V0Z"})}),e.jsx("svg",{className:"sq-bracket-bl",viewBox:"0 0 93 93",fill:"none",children:e.jsx("path",{fill:"currentColor",d:"M31 0h62v31H62v31H31v31H0V31h31V0Z"})}),e.jsx("svg",{className:"sq-bracket-br",viewBox:"0 0 93 93",fill:"none",children:e.jsx("path",{fill:"currentColor",d:"M31 0h62v31H62v31H31v31H0V31h31V0Z"})}),e.jsxs("div",{children:[e.jsxs("div",{className:"sq-intro-card__top",children:[e.jsx("span",{className:"sq-intro-card__tag",children:"Retro Craft"}),e.jsx("span",{className:"sq-intro-card__num",children:"03 ✦"})]}),e.jsx("h3",{style:{fontFamily:'var(--sq-font-family-narrow, "font-narrow-semibold", sans-serif)',fontSize:"22px",fontWeight:600,color:"#ffffff",margin:"0 0 8px 0",lineHeight:"1.25"},children:"Corner Brackets & Badges"}),e.jsx("p",{className:"sq-intro-card__desc",children:e.jsxs(r.p,{children:["Geometric 93×93 pixel-corner brackets, subtle 2px micro-radii, signal indicator tags (",e.jsx("code",{style:{color:"#ffe32e",background:"rgba(255,255,255,0.1)",padding:"2px 4px",borderRadius:"3px"},children:"[III]"}),"), and tactile click spark burst feedback."]})}),e.jsxs("div",{className:"sq-intro-card__preview",style:{gap:"6px",flexWrap:"wrap"},children:[e.jsx("span",{className:"sq-tag",style:{background:"rgba(255,255,255,0.12)",color:"#ffffff",border:"1px solid rgba(255,255,255,0.25)"},children:"Tokens"}),e.jsx("span",{className:"sq-tag",style:{background:"rgba(255,255,255,0.12)",color:"#ffe32e",border:"1px solid rgba(255,227,46,0.35)"},children:"#ffe32e"}),e.jsx("span",{className:"sq-tag",style:{background:"rgba(255,255,255,0.12)",color:"#a1ff14",border:"1px solid rgba(161,255,20,0.35)"},children:"Pill 999px"})]})]}),e.jsxs("div",{className:"sq-intro-card__footer",children:[e.jsx("span",{style:{fontFamily:"var(--sq-font-family-mono, monospace)",fontSize:"0.72rem",color:"#888"},children:"93×93 Path Matrix"}),e.jsx("a",{href:"./?path=/docs/components-project-card--docs",className:"sq-intro-card__link",children:e.jsx(r.p,{children:"Inspect Card →"})})]})]}),e.jsxs("div",{className:"sq-intro-card",children:[e.jsx("svg",{className:"sq-bracket-tl",viewBox:"0 0 93 93",fill:"none",children:e.jsx("path",{fill:"currentColor",d:"M31 0h62v31H62v31H31v31H0V31h31V0Z"})}),e.jsx("svg",{className:"sq-bracket-tr",viewBox:"0 0 93 93",fill:"none",children:e.jsx("path",{fill:"currentColor",d:"M31 0h62v31H62v31H31v31H0V31h31V0Z"})}),e.jsx("svg",{className:"sq-bracket-bl",viewBox:"0 0 93 93",fill:"none",children:e.jsx("path",{fill:"currentColor",d:"M31 0h62v31H62v31H31v31H0V31h31V0Z"})}),e.jsx("svg",{className:"sq-bracket-br",viewBox:"0 0 93 93",fill:"none",children:e.jsx("path",{fill:"currentColor",d:"M31 0h62v31H62v31H31v31H0V31h31V0Z"})}),e.jsxs("div",{children:[e.jsxs("div",{className:"sq-intro-card__top",children:[e.jsx("span",{className:"sq-intro-card__tag",children:"Color System"}),e.jsx("span",{className:"sq-intro-card__num",children:"04 ✦"})]}),e.jsx("h3",{style:{fontFamily:'var(--sq-font-family-narrow, "font-narrow-semibold", sans-serif)',fontSize:"22px",fontWeight:600,color:"#ffffff",margin:"0 0 8px 0",lineHeight:"1.25"},children:"High-Contrast Dual Theme"}),e.jsx("p",{className:"sq-intro-card__desc",children:e.jsxs(r.p,{children:["Warm organic cream background (",e.jsx("code",{style:{color:"#ffe32e",background:"rgba(255,255,255,0.1)",padding:"2px 4px",borderRadius:"3px"},children:"#f9f4eb"}),") counterbalanced against deep brutalist black (",e.jsx("code",{style:{color:"#ffe32e",background:"rgba(255,255,255,0.1)",padding:"2px 4px",borderRadius:"3px"},children:"#000000"}),") and electric accents."]})}),e.jsx("div",{className:"sq-intro-card__preview",children:e.jsxs("div",{className:"sq-intro-swatch-row",children:[e.jsx("div",{className:"sq-intro-swatch",style:{background:"#f9f4eb",color:"#000000"},children:"CREAM"}),e.jsx("div",{className:"sq-intro-swatch",style:{background:"#ffe32e",color:"#000000"},children:"GOLD"}),e.jsx("div",{className:"sq-intro-swatch",style:{background:"rgb(161,255,20)",color:"#000000"},children:"NEON"}),e.jsx("div",{className:"sq-intro-swatch",style:{background:"#000000",color:"#ffffff",borderColor:"rgba(255,255,255,0.4)"},children:"BLACK"})]})})]}),e.jsxs("div",{className:"sq-intro-card__footer",children:[e.jsx("span",{style:{fontFamily:"var(--sq-font-family-mono, monospace)",fontSize:"0.72rem",color:"#888"},children:"W3C Token Spec"}),e.jsx("a",{href:"./?path=/docs/foundations-colors--docs",className:"sq-intro-card__link",children:e.jsx(r.p,{children:"Inspect Tokens →"})})]})]})]}),`
`,`
`,e.jsxs("div",{style:{display:"flex",alignItems:"baseline",justifyContent:"space-between",margin:"3rem 0 1.5rem 0",paddingBottom:"0.75rem",borderBottom:"1px solid rgba(0, 0, 0, 0.1)"},children:[e.jsx("h2",{className:"sq-intro-heading-2",style:{fontFamily:'var(--sq-font-family-narrow, "font-narrow-semibold", sans-serif)',fontSize:"30px",fontWeight:700,textTransform:"uppercase",letterSpacing:"-0.01em",color:"#000000",margin:0},children:e.jsx(r.p,{children:"Component & Foundation Directory"})}),e.jsx("span",{style:{fontFamily:"var(--sq-font-family-mono, monospace)",fontSize:"0.75rem",color:"rgba(0, 0, 0, 0.5)",letterSpacing:"0.08em",textTransform:"uppercase"},children:e.jsx(r.p,{children:"Direct Storybook Links"})})]}),`
`,e.jsxs("div",{className:"sq-intro-dir-grid",children:[e.jsxs("div",{className:"sq-intro-dir-card",children:[e.jsx("h3",{style:{display:"flex",alignItems:"center",gap:"8px",fontFamily:"var(--sq-font-family-narrow, sans-serif)",fontSize:"20px",fontWeight:700,textTransform:"uppercase",color:"#000000",margin:"0 0 14px 0",paddingBottom:"0.75rem",borderBottom:"1px solid rgba(0, 0, 0, 0.08)"},children:e.jsxs(r.p,{children:[e.jsx("span",{style:{color:"#ffe32e"},children:"✦"})," Foundations"]})}),e.jsxs("ul",{className:"sq-intro-dir-list",children:[e.jsx("li",{children:e.jsxs("a",{href:"./?path=/docs/foundations-colors--docs",className:"sq-intro-dir-link",children:[e.jsx("span",{children:"Colors & Themes"}),e.jsx("span",{className:"sq-intro-dir-tag",children:"#f9f4eb · #ffe32e"})]})}),e.jsx("li",{children:e.jsxs("a",{href:"./?path=/docs/foundations-typography--docs",className:"sq-intro-dir-link",children:[e.jsx("span",{children:"Typography & Fluid Scale"}),e.jsx("span",{className:"sq-intro-dir-tag",children:"Narrow · Mono · Normal"})]})}),e.jsx("li",{children:e.jsxs("a",{href:"./?path=/docs/foundations-spacing--docs",className:"sq-intro-dir-link",children:[e.jsx("span",{children:"Spacing & Grid"}),e.jsx("span",{className:"sq-intro-dir-tag",children:"clamp(2px .. 144px)"})]})}),e.jsx("li",{children:e.jsxs("a",{href:"./?path=/docs/foundations-motion--docs",className:"sq-intro-dir-link",children:[e.jsx("span",{children:"Motion & Easings"}),e.jsx("span",{className:"sq-intro-dir-tag",children:"Cubic Bouncy Curves"})]})}),e.jsx("li",{children:e.jsxs("a",{href:"./?path=/docs/foundations-iconography--docs",className:"sq-intro-dir-link",children:[e.jsx("span",{children:"Iconography & SVGs"}),e.jsx("span",{className:"sq-intro-dir-tag",children:"Pixel Glyphs"})]})})]})]}),e.jsxs("div",{className:"sq-intro-dir-card",children:[e.jsx("h3",{style:{display:"flex",alignItems:"center",gap:"8px",fontFamily:"var(--sq-font-family-narrow, sans-serif)",fontSize:"20px",fontWeight:700,textTransform:"uppercase",color:"#000000",margin:"0 0 14px 0",paddingBottom:"0.75rem",borderBottom:"1px solid rgba(0, 0, 0, 0.08)"},children:e.jsxs(r.p,{children:[e.jsx("span",{style:{color:"#ffe32e"},children:"✦"})," Core UI Primitives"]})}),e.jsxs("ul",{className:"sq-intro-dir-list",children:[e.jsx("li",{children:e.jsxs("a",{href:"./?path=/docs/components-explore-button--docs",className:"sq-intro-dir-link",children:[e.jsx("span",{children:"Explore Button (Compass)"}),e.jsx("span",{className:"sq-intro-dir-tag",children:"Rotating 250°"})]})}),e.jsx("li",{children:e.jsxs("a",{href:"./?path=/docs/components-wavy-underline--docs",className:"sq-intro-dir-link",children:[e.jsx("span",{children:"Wavy Underline"}),e.jsx("span",{className:"sq-intro-dir-tag",children:"Animated SVG"})]})}),e.jsx("li",{children:e.jsxs("a",{href:"./?path=/docs/components-wavy-divider--docs",className:"sq-intro-dir-link",children:[e.jsx("span",{children:"Wavy Divider"}),e.jsx("span",{className:"sq-intro-dir-tag",children:"Full-Bleed"})]})}),e.jsx("li",{children:e.jsxs("a",{href:"./?path=/docs/components-button--docs",className:"sq-intro-dir-link",children:[e.jsx("span",{children:"Pill & CTA Buttons"}),e.jsx("span",{className:"sq-intro-dir-tag",children:"Primary · Dark · Outline"})]})}),e.jsx("li",{children:e.jsxs("a",{href:"./?path=/docs/components-career-progression-timeline--docs",className:"sq-intro-dir-link",children:[e.jsx("span",{children:"Career Progression Timeline"}),e.jsx("span",{className:"sq-intro-dir-tag",children:"Gold Star Nodes"})]})}),e.jsx("li",{children:e.jsxs("a",{href:"./?path=/docs/components-project-card--docs",className:"sq-intro-dir-link",children:[e.jsx("span",{children:"Project Card (Corner Brackets)"}),e.jsx("span",{className:"sq-intro-dir-tag",children:"93×93 Path"})]})}),e.jsx("li",{children:e.jsxs("a",{href:"./?path=/docs/components-accordion--docs",className:"sq-intro-dir-link",children:[e.jsx("span",{children:"Accordion"}),e.jsx("span",{className:"sq-intro-dir-tag",children:"Hanging Indent"})]})}),e.jsx("li",{children:e.jsxs("a",{href:"./?path=/docs/components-contact-form--docs",className:"sq-intro-dir-link",children:[e.jsx("span",{children:"Contact Form"}),e.jsx("span",{className:"sq-intro-dir-tag",children:"White Pills + Yellow CTA"})]})})]})]}),e.jsxs("div",{className:"sq-intro-dir-card",children:[e.jsx("h3",{style:{display:"flex",alignItems:"center",gap:"8px",fontFamily:"var(--sq-font-family-narrow, sans-serif)",fontSize:"20px",fontWeight:700,textTransform:"uppercase",color:"#000000",margin:"0 0 14px 0",paddingBottom:"0.75rem",borderBottom:"1px solid rgba(0, 0, 0, 0.08)"},children:e.jsxs(r.p,{children:[e.jsx("span",{style:{color:"#ffe32e"},children:"✦"})," Page Patterns & Templates"]})}),e.jsxs("ul",{className:"sq-intro-dir-list",children:[e.jsx("li",{children:e.jsxs("a",{href:"./?path=/story/page-patterns-templates--experience-page-template",className:"sq-intro-dir-link",children:[e.jsx("span",{children:"Experience Page Template"}),e.jsx("span",{className:"sq-intro-dir-tag",children:"Interactive Switcher"})]})}),e.jsx("li",{children:e.jsxs("a",{href:"./?path=/story/page-patterns-templates--about-page-template",className:"sq-intro-dir-link",children:[e.jsx("span",{children:"About Page Template"}),e.jsx("span",{className:"sq-intro-dir-tag",children:"Hero + Dotted Leader"})]})}),e.jsx("li",{children:e.jsxs("a",{href:"./?path=/story/page-patterns-templates--projects-page-template",className:"sq-intro-dir-link",children:[e.jsx("span",{children:"Projects Page Template"}),e.jsx("span",{className:"sq-intro-dir-tag",children:"Dark Matrix Grid"})]})}),e.jsx("li",{children:e.jsxs("a",{href:"./?path=/story/page-patterns-templates--interactive-site-preview",className:"sq-intro-dir-link",children:[e.jsx("span",{children:"Interactive Site Preview"}),e.jsx("span",{className:"sq-intro-dir-tag",children:"Full Navigation"})]})}),e.jsx("li",{children:e.jsxs("a",{href:"./?path=/docs/components-comparison-list--docs",className:"sq-intro-dir-link",children:[e.jsx("span",{children:"Side-by-Side Comparison"}),e.jsx("span",{className:"sq-intro-dir-tag",children:"Two-Column Matrix"})]})}),e.jsx("li",{children:e.jsxs("a",{href:"./?path=/docs/components-nav--docs",className:"sq-intro-dir-link",children:[e.jsx("span",{children:"Navigation Capsule"}),e.jsx("span",{className:"sq-intro-dir-tag",children:"Active State Pill"})]})}),e.jsx("li",{children:e.jsxs("a",{href:"./?path=/docs/components-footer--docs",className:"sq-intro-dir-link",children:[e.jsx("span",{children:"Editorial Footer"}),e.jsx("span",{className:"sq-intro-dir-tag",children:"Yellow Hover + Stars"})]})})]})]})]}),`
`,`
`,e.jsxs("div",{style:{display:"flex",alignItems:"baseline",justifyContent:"space-between",margin:"3rem 0 1.5rem 0",paddingBottom:"0.75rem",borderBottom:"1px solid rgba(0, 0, 0, 0.1)"},children:[e.jsx("h2",{className:"sq-intro-heading-2",style:{fontFamily:'var(--sq-font-family-narrow, "font-narrow-semibold", sans-serif)',fontSize:"30px",fontWeight:700,textTransform:"uppercase",letterSpacing:"-0.01em",color:"#000000",margin:0},children:e.jsx(r.p,{children:"Standalone Quick Start"})}),e.jsx("span",{style:{fontFamily:"var(--sq-font-family-mono, monospace)",fontSize:"0.75rem",color:"rgba(0, 0, 0, 0.5)",letterSpacing:"0.08em",textTransform:"uppercase"},children:e.jsx(r.p,{children:"Zero Configuration Bundle"})})]}),`
`,e.jsxs("div",{className:"sq-intro-terminal",children:[e.jsxs("div",{className:"sq-intro-terminal__bar",children:[e.jsx("span",{className:"sq-intro-terminal__dot sq-intro-terminal__dot--red"}),e.jsx("span",{className:"sq-intro-terminal__dot sq-intro-terminal__dot--yellow"}),e.jsx("span",{className:"sq-intro-terminal__dot sq-intro-terminal__dot--green"}),e.jsx("span",{className:"sq-intro-terminal__title",children:"bash — squiggle-ui-quickstart"})]}),e.jsxs("div",{className:"sq-intro-terminal__body",style:{color:"#f1f1f1",backgroundColor:"#111111"},children:[e.jsx("div",{style:{color:"#888888",marginBottom:"6px"},children:"# 1. Include standalone CSS bundle in your <head> (zero dependencies, 51KB)"}),e.jsx("div",{style:{color:"#f1f1f1",marginBottom:"16px"},children:e.jsxs(r.p,{children:[e.jsx("span",{style:{color:"#888888"},children:"<"}),`
`,e.jsx("span",{style:{color:"#ffe32e"},children:"link"})," ",`
`,e.jsx("span",{style:{color:"#a1ff14"},children:"rel"}),"=",e.jsx("span",{style:{color:"#ffd2f3"},children:'"stylesheet"'})," ",`
`,e.jsx("span",{style:{color:"#a1ff14"},children:"href"}),"=",e.jsx("span",{style:{color:"#ffd2f3"},children:'"https://prth1234.github.io/portfolio-2025/design-system/dist/design-system.css"'})," ",`
`,e.jsx("span",{style:{color:"#888888"},children:"/>"})]})}),e.jsx("div",{style:{color:"#888888",marginBottom:"6px"},children:"# 2. Re-bundle distribution CSS after token or component changes"}),e.jsxs("div",{style:{color:"#f1f1f1",marginBottom:"16px"},children:[e.jsx("span",{style:{color:"#ffe32e"},children:"cd"})," ",e.jsx("span",{style:{color:"#f1f1f1"},children:"design-system"})," ",e.jsx("span",{style:{color:"#ffe32e"},children:"&&"})," ",e.jsx("span",{style:{color:"#a1ff14"},children:"node"})," ",e.jsx("span",{style:{color:"#f1f1f1"},children:"build.js"})]}),e.jsx("div",{style:{color:"#888888",marginBottom:"6px"},children:"# 3. Launch local Storybook development server"}),e.jsxs("div",{style:{color:"#f1f1f1"},children:[e.jsx("span",{style:{color:"#ffe32e"},children:"cd"})," ",e.jsx("span",{style:{color:"#f1f1f1"},children:"design-system"})," ",e.jsx("span",{style:{color:"#ffe32e"},children:"&&"})," ",e.jsx("span",{style:{color:"#a1ff14"},children:"npm run"})," ",e.jsx("span",{style:{color:"#f1f1f1"},children:"storybook"})]})]})]}),`
`,`
`,e.jsxs("div",{style:{display:"flex",alignItems:"baseline",justifyContent:"space-between",margin:"3rem 0 1.5rem 0",paddingBottom:"0.75rem",borderBottom:"1px solid rgba(0, 0, 0, 0.1)"},children:[e.jsx("h2",{className:"sq-intro-heading-2",style:{fontFamily:'var(--sq-font-family-narrow, "font-narrow-semibold", sans-serif)',fontSize:"30px",fontWeight:700,textTransform:"uppercase",letterSpacing:"-0.01em",color:"#000000",margin:0},children:e.jsx(r.p,{children:"System Invariants & Principles"})}),e.jsx("span",{style:{fontFamily:"var(--sq-font-family-mono, monospace)",fontSize:"0.75rem",color:"rgba(0, 0, 0, 0.5)",letterSpacing:"0.08em",textTransform:"uppercase"},children:e.jsx(r.p,{children:"Guiding Constraints"})})]}),`
`,e.jsx("div",{style:{background:"#ffffff",border:"1px solid rgba(0, 0, 0, 0.08)",borderRadius:"10px",padding:"1.75rem",marginBottom:"3rem"},children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(240px, 1fr))",gap:"1.5rem"},children:[e.jsxs("div",{children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"0.5rem"},children:[e.jsx("span",{style:{color:"#ffe32e",fontSize:"1.1rem"},children:"✦"}),e.jsx("strong",{style:{fontFamily:"var(--sq-font-family-mono, monospace)",fontSize:"0.85rem",letterSpacing:"0.05em"},children:"01. 100% FIDELITY"})]}),e.jsx("p",{style:{fontSize:"0.88rem",lineHeight:"1.6",color:"rgba(0,0,0,0.7)",margin:0},children:e.jsx(r.p,{children:"Zero approximation. Colors, cubic-bezier easing curves, line-heights, and SVG paths mirror the original portfolio down to the exact pixel."})})]}),e.jsxs("div",{children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"0.5rem"},children:[e.jsx("span",{style:{color:"#ffe32e",fontSize:"1.1rem"},children:"✦"}),e.jsx("strong",{style:{fontFamily:"var(--sq-font-family-mono, monospace)",fontSize:"0.85rem",letterSpacing:"0.05em"},children:"02. EDITORIAL BRUTALISM"})]}),e.jsx("p",{style:{fontSize:"0.88rem",lineHeight:"1.6",color:"rgba(0,0,0,0.7)",margin:0},children:e.jsxs(r.p,{children:["High-contrast typography pairing condensed display letterforms (",e.jsx("code",{style:{fontSize:"0.75rem",background:"rgba(0,0,0,0.06)",padding:"2px 4px",borderRadius:"3px"},children:"font-narrow-semibold"}),") with technical monospace tracking."]})})]}),e.jsxs("div",{children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"0.5rem"},children:[e.jsx("span",{style:{color:"#ffe32e",fontSize:"1.1rem"},children:"✦"}),e.jsx("strong",{style:{fontFamily:"var(--sq-font-family-mono, monospace)",fontSize:"0.85rem",letterSpacing:"0.05em"},children:"03. KINETIC MICRO-CRAFT"})]}),e.jsx("p",{style:{fontSize:"0.88rem",lineHeight:"1.6",color:"rgba(0,0,0,0.7)",margin:0},children:e.jsx(r.p,{children:"Every element provides tactile response: 250° compass rotations, radial click spark bursts, and smooth bouncy layout transitions."})})]}),e.jsxs("div",{children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"0.5rem"},children:[e.jsx("span",{style:{color:"#ffe32e",fontSize:"1.1rem"},children:"✦"}),e.jsx("strong",{style:{fontFamily:"var(--sq-font-family-mono, monospace)",fontSize:"0.85rem",letterSpacing:"0.05em"},children:"04. ZERO RUNTIME OVERHEAD"})]}),e.jsx("p",{style:{fontSize:"0.88rem",lineHeight:"1.6",color:"rgba(0,0,0,0.7)",margin:0},children:e.jsx(r.p,{children:"Pure semantic HTML5 and performant CSS variables. No bulky component frameworks or runtime script dependencies required."})})]})]})})]})}function m(s={}){const{wrapper:r}={...i(),...s.components};return r?e.jsx(r,{...s,children:e.jsx(n,{...s})}):n(s)}export{m as default};
