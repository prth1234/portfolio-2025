/* empty css                      *//* empty css                        */const C={title:"Page Patterns/Templates",parameters:{layout:"fullscreen"},argTypes:{heroTitle:{control:"text",defaultValue:"CREATIVE DEVELOPER"},roleTitle:{control:"text",defaultValue:"Software Engineer"},company:{control:"text",defaultValue:"Flexera GCC"}}},r=`
  <script>
    (function() {
      window.switchStoryView = function(viewName, clickedBtn, evt) {
        if (evt) evt.preventDefault();
        var container = clickedBtn.closest('.sq-template-container');
        if (!container) return;
        
        // Update nav buttons
        var buttons = container.querySelectorAll('.sq-nav__button');
        buttons.forEach(function(btn) {
          btn.classList.remove('is-active', 'w--current');
        });
        clickedBtn.classList.add('is-active', 'w--current');

        // Switch visible view panel
        var views = container.querySelectorAll('.sq-template-view');
        views.forEach(function(v) {
          v.style.display = 'none';
        });
        var activePanel = container.querySelector('.sq-view-' + viewName);
        if (activePanel) {
          activePanel.style.display = 'block';
        }
      };
    })();
  <\/script>
`,l=(e="experience",t="editorial")=>`
  <header class="sq-header">
    <div class="sq-header__inner">
      <!-- Brand Badge on Left (Screenshot 5 exact match, generic persona) -->
      <a href="javascript:void(0)" onclick="event.preventDefault();" class="sq-brand-badge">
        <span>STUDIO</span>
        <span class="sq-brand-badge__star">✦</span>
        <span>ARCHIVE</span>
      </a>

      <!-- Pill Nav in Center -->
      <nav class="sq-nav ${t==="capsule"?"sq-nav--capsule":""}">
        <ul class="sq-nav__list">
          <li class="sq-nav__item">
            <a href="javascript:void(0)"
               onclick="window.switchStoryView('about', this, event)"
               class="sq-nav__button ${e==="about"?"is-active w--current":""}">
              About
            </a>
          </li>
          <li class="sq-nav__item">
            <a href="javascript:void(0)"
               onclick="window.switchStoryView('experience', this, event)"
               class="sq-nav__button ${e==="experience"?"is-active w--current":""}">
              Experience
            </a>
          </li>
          <li class="sq-nav__item">
            <a href="javascript:void(0)"
               onclick="window.switchStoryView('projects', this, event)"
               class="sq-nav__button ${e==="projects"?"is-active w--current":""}">
              Projects
            </a>
          </li>
          <li class="sq-nav__item">
            <a href="javascript:void(0)"
               onclick="window.switchStoryView('more', this, event)"
               class="sq-nav__button ${e==="more"?"is-active w--current":""}">
              More
            </a>
          </li>
        </ul>
      </nav>

      <!-- Feed Button on Right -->
      <a href="javascript:void(0)" onclick="event.preventDefault();" class="sq-feed-button">
        FEED
      </a>
    </div>
  </header>
`,s=({roleTitle:e="Software Engineer",company:t="Flexera GCC"})=>`
  ${r}
  <div class="sq-template-container" style="background-color: var(--sq-color-cream); min-height: 100vh; color: #000;">
    ${l("experience")}

    <main class="sq-template-view sq-view-experience" style="display: block; padding-bottom: 5rem;">
      <!-- Decorative Metadata Sub-bar (Screenshot 5) -->
      <div style="display: flex; justify-content: space-between; align-items: center; padding: 1.25rem var(--sq-grid-margin) 0.5rem; max-width: 1440px; margin: 0 auto; font-family: var(--sq-font-family-mono); font-size: 0.65rem; color: rgba(0,0,0,0.6); letter-spacing: 0.08em; text-transform: uppercase;">
        <div style="display: flex; gap: 6px; align-items: center;">
          <span>✦</span><span>✦</span><span>✦</span>
        </div>
        <div style="display: flex; gap: 1.5rem; align-items: center;">
          <span>${t.toUpperCase()}</span>
          <span>✦</span>
          <span>✦</span>
          <span>LA-H-AX87M-GJR</span>
        </div>
        <div style="display: flex; gap: 6px; align-items: center;">
          <span>✦</span><span>✦</span><span>✦</span>
        </div>
      </div>

      <!-- Hero Header Section with WORK [Image] EXPERIENCE -->
      <div style="padding: 1.5rem var(--sq-grid-margin) 2.5rem; max-width: 1440px; margin: 0 auto;">
        <div style="display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 2rem;">
          <div>
            <div class="u-h1" style="font-size: clamp(3.5rem, 1.5rem + 7.5vi, 8.5rem); line-height: 0.88; letter-spacing: -0.03em;">
              WORK
            </div>
            <div style="display: flex; align-items: center; gap: 1rem; flex-wrap: wrap;">
              <div style="width: clamp(90px, 11vw, 150px); height: clamp(55px, 7vw, 95px); border-radius: 4px; overflow: hidden; background: #2b4461; box-shadow: 0 4px 12px rgba(0,0,0,0.12); flex-shrink: 0;">
                <img src="https://cdn.prod.website-files.com/64591e5db836f60c02bb97e9/67bca3b24a78c617c8145f5e_process-static.webp"
                     alt="Pixel Island Banner"
                     style="width: 100%; height: 100%; object-fit: cover; image-rendering: pixelated;" />
              </div>
              <div class="u-h1" style="font-size: clamp(3.5rem, 1.5rem + 7.5vi, 8.5rem); line-height: 0.88; letter-spacing: -0.03em;">
                EXPERIENCE
              </div>
            </div>
          </div>

          <!-- Numbered Steps on Right (Screenshot 5) -->
          <div style="display: flex; flex-direction: column; gap: 0.35rem; font-family: var(--sq-font-family-mono); font-size: 0.75rem; letter-spacing: 0.08em; text-transform: uppercase;">
            <div style="display: flex; gap: 0.85rem;"><span style="color: rgba(0,0,0,0.45);">01</span><strong>DEFINE</strong></div>
            <div style="display: flex; gap: 0.85rem;"><span style="color: rgba(0,0,0,0.45);">02</span><strong>DESIGN</strong></div>
            <div style="display: flex; gap: 0.85rem;"><span style="color: rgba(0,0,0,0.45);">03</span><strong>BUILD</strong></div>
            <div style="display: flex; gap: 0.85rem;"><span style="color: rgba(0,0,0,0.45);">04</span><strong>RUN</strong></div>
          </div>
        </div>

        <!-- Role Badge and High-Impact Statement (Screenshot 5) -->
        <div style="margin-top: 2.5rem; max-width: 900px;">
          <div style="display: inline-block; background: #000; color: #fff; padding: 3px 8px; border-radius: 2px; font-family: var(--sq-font-family-mono); font-size: 0.7rem; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 1rem;">
            SOFTWARE ENGINEER
          </div>
          <p class="u-h3" style="font-size: clamp(1.2rem, 1rem + 0.6vi, 1.65rem); font-weight: 500; line-height: 1.35; color: #111;">
            Innovative Software Engineer with 2.5+ years of experience architecting future-ready cloud platforms, high-scale distributed systems, and agentic AI solutions—redefining cost efficiency, reliability, and scale for modern enterprises.
          </p>
          <div style="display: flex; justify-content: flex-end; margin-top: 1rem; font-family: var(--sq-font-family-mono); font-size: 0.7rem; color: rgba(0,0,0,0.45); letter-spacing: 0.1em;">
            XXXXXXXXX
          </div>
        </div>
      </div>

      <!-- Main Experience Detail Block: Left Visual & Right Career Progression -->
      <div style="padding: 2.5rem var(--sq-grid-margin) 0; max-width: 1440px; margin: 0 auto; display: flex; gap: 3.5rem; flex-wrap: wrap; border-top: 1px solid rgba(0,0,0,0.1);">
        <!-- Left Landscape Card (XR5GD) -->
        <div class="sq-landscape-card" style="flex-shrink: 0; max-width: 300px;">
          <div class="sq-landscape-card__header">
            <span class="sq-landscape-card__model">XR5GD</span>
            <div class="sq-landscape-card__bars">
              <div class="sq-landscape-card__bar"></div>
              <div class="sq-landscape-card__bar"></div>
              <div class="sq-landscape-card__bar"></div>
            </div>
          </div>
          <div class="sq-landscape-card__media" style="aspect-ratio: 4 / 3; background: #26445a;">
            <img src="https://cdn.prod.website-files.com/64591e5db836f60c02bb97e9/67c1d74b56c59e9d251b3fb4_01_define.webp"
                 alt="Pixel Art Scenery"
                 class="sq-landscape-card__img" />
          </div>
          <div class="sq-landscape-card__footer">
            <span>DL 90</span>
            <span>✦</span>
            <span>SPEC-01</span>
          </div>
        </div>

        <!-- Right: Career Progression Timeline & Impact -->
        <div style="flex: 1; min-width: 320px;">
          <div class="sq-career-timeline">
            <div class="sq-career-timeline__header">
              <span class="sq-career-timeline__company">${t}</span>
              <span class="sq-career-timeline__badge">Career Progression</span>
            </div>

            <div class="sq-career-timeline__list">
              <!-- Promoted Role -->
              <div class="sq-career-timeline__step is-current">
                <div class="sq-career-timeline__track">
                  <span class="sq-career-timeline__node">✦</span>
                  <span class="sq-career-timeline__stem"></span>
                </div>
                <div class="sq-career-timeline__body">
                  <div class="sq-career-timeline__heading">
                    <span class="sq-career-timeline__title">Software Engineer</span>
                    <span class="sq-career-timeline__tag sq-career-timeline__tag--promoted">Promoted ✦</span>
                  </div>
                  <div class="sq-career-timeline__date">Apr 2026 – Present</div>
                </div>
              </div>

              <!-- Initial Role -->
              <div class="sq-career-timeline__step">
                <div class="sq-career-timeline__track">
                  <span class="sq-career-timeline__node--past">●</span>
                </div>
                <div class="sq-career-timeline__body">
                  <div class="sq-career-timeline__heading">
                    <span class="sq-career-timeline__title">Associate Software Engineer</span>
                    <span class="sq-career-timeline__tag">Initial Role</span>
                  </div>
                  <div class="sq-career-timeline__date">Aug 2024 – Apr 2026</div>
                </div>
              </div>
            </div>
          </div>

          <div style="margin-top: 1.5rem;">
            <p class="u-p1" style="color: #1a1a1a; line-height: 1.65; margin-bottom: 1rem;">
              Spearheaded the 0-to-1 build of an AI developer platform and marketplace, enabling 10+ teams to build and embed 50+ AI agents and MCPs into their products. Unified IAM, guardrails, observability, monitoring, alerting, testing, and evaluation into one standardized framework.
            </p>
            <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
              <span class="sq-tag">Agentic AI</span>
              <span class="sq-tag">Distributed Systems</span>
              <span class="sq-tag">FinOps Platform</span>
              <span class="sq-tag">Delta Lake</span>
              <span class="sq-tag">Kubernetes</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
`,a=({heroTitle:e="CREATIVE DEVELOPER"})=>`
  ${r}
  <div class="sq-template-container" style="background-color: var(--sq-color-cream); min-height: 100vh; color: #000;">
    ${l("about")}

    <main class="sq-template-view sq-view-about" style="display: block;">
      <!-- Hero -->
      <section style="padding: 4rem var(--sq-grid-margin) 5rem; max-width: 1440px; margin: 0 auto;">
        <span class="sq-eyebrow">SOFTWARE ARCHITECTURE // 2026</span>
        <h1 class="u-h1" style="margin-top: 1.25rem; margin-bottom: 1.5rem; font-size: clamp(3.5rem, 1.5rem + 7.5vi, 8.5rem);">
          ${e.split(" ")[0]||"CREATIVE"} <span class="sq-wavy-underline">${e.split(" ").slice(1).join(" ")||"DEVELOPER"}</span>
        </h1>
        <p class="u-p1" style="max-width: 680px; font-size: 1.15rem; line-height: 1.6; margin-bottom: 2rem;">
          Specializing in scalable cloud platforms, distributed systems, FinOps rightsizing, and Agentic AI solutions with autonomous multi-agent orchestration.
        </p>

        <button class="sq-explore-button" type="button" onclick="window.switchStoryView('experience', this, event)">
          <svg class="sq-explore-button__icon" viewBox="0 0 512 512" height="25" width="25">
            <path fill="rgb(19, 19, 19)" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"></path>
          </svg>
          Explore
        </button>
      </section>

      <!-- Curvy Wavy Divider -->
      <div class="sq-wavy-divider" aria-hidden="true">
        <svg viewBox="0 0 1440 90" fill="none" preserveAspectRatio="none" class="sq-wavy-divider__svg">
          <path d="M0,0 L0,45 Q 60,80 120,45 T 240,45 T 360,45 T 480,45 T 600,45 T 720,45 T 840,45 T 960,45 T 1080,45 T 1200,45 T 1320,45 T 1440,45 L 1440,0 Z" fill="#f9f4eb"></path>
          <path d="M0,95 L0,45 Q 60,80 120,45 T 240,45 T 360,45 T 480,45 T 600,45 T 720,45 T 840,45 T 960,45 T 1080,45 T 1200,45 T 1320,45 T 1440,95 Z" fill="#000000"></path>
          <path d="M0,45 Q 60,80 120,45 T 240,45 T 360,45 T 480,45 T 600,45 T 720,45 T 840,45 T 960,45 T 1080,45 T 1200,45 T 1320,45 T 1440,45" fill="none" stroke="#ffe32e" stroke-width="4.5" stroke-linecap="round"></path>
        </svg>
      </div>

      <!-- Contact Form Section -->
      <section style="background: #000; color: #fff; padding: 3rem var(--sq-grid-margin) 3rem; text-align: center;">
        <h3 class="u-h3" style="margin-bottom: 1.5rem;">Know more about my projects</h3>
        <form class="sq-contact-form" onsubmit="event.preventDefault(); this.classList.toggle('is-loading');">
          <div class="sq-contact-form__item">
            <input type="email" placeholder="E-MAIL" class="sq-contact-form__input" required />
          </div>
          <div class="sq-contact-form__item sq-contact-form__item--message">
            <input type="text" placeholder="MESSAGE" class="sq-contact-form__input" required />
          </div>
          <div class="sq-contact-form__submit-wrap">
            <button type="submit" class="sq-button sq-button--primary">
              <span>ENTER</span>
              <svg class="sq-icon--arrow" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </button>
            <div class="sq-contact-form__loader" role="status">
              <div class="sq-contact-form__spinner">
                <div class="sq-contact-form__spinner-box"></div>
                <div class="sq-contact-form__spinner-box"></div>
                <div class="sq-contact-form__spinner-box"></div>
                <div class="sq-contact-form__spinner-box"></div>
              </div>
              <span class="sq-contact-form__loader-text">SENDING...</span>
            </div>
          </div>
        </form>
      </section>
    </main>
  </div>
`,n=()=>`
  ${r}
  <div class="sq-template-container u-theme-dark" style="background-color: #000; min-height: 100vh; color: #f9f4eb;">
    ${l("projects")}

    <main class="sq-template-view sq-view-projects" style="display: block; padding: 3rem var(--sq-grid-margin) 6rem; max-width: 1440px; margin: 0 auto;">
      <h1 class="u-h1" style="font-size: clamp(3rem, 1.5rem + 5vi, 6.5rem); margin-bottom: 3rem;">
        FEATURED <span class="sq-wavy-underline">PROJECTS</span>
      </h1>

      <div style="display: flex; gap: 2.5rem; flex-wrap: wrap;">
        <!-- Card 1 -->
        <div class="sq-project-card">
          <div class="sq-project-card__corner sq-project-card__corner--tl"><svg viewBox="0 0 93 93" fill="none"><path fill="currentColor" d="M31 0h62v31H62v31H31v31H0V31h31V0Z"></path></svg></div>
          <div class="sq-project-card__corner sq-project-card__corner--tr"><svg viewBox="0 0 93 93" fill="none"><path fill="currentColor" d="M31 0h62v31H62v31H31v31H0V31h31V0Z"></path></svg></div>
          <div class="sq-project-card__corner sq-project-card__corner--bl"><svg viewBox="0 0 93 93" fill="none"><path fill="currentColor" d="M31 0h62v31H62v31H31v31H0V31h31V0Z"></path></svg></div>
          <div class="sq-project-card__corner sq-project-card__corner--br"><svg viewBox="0 0 93 93" fill="none"><path fill="currentColor" d="M31 0h62v31H62v31H31v31H0V31h31V0Z"></path></svg></div>

          <div class="sq-project-card__header">
            <span class="sq-project-card__tag">Autonomous Swarm</span>
            <span style="color: var(--sq-color-yellow); font-family: var(--sq-font-family-mono); font-size: 0.75rem;">01 ✦</span>
          </div>
          <h3 class="sq-project-card__title">Marketing Strategy Research Agent</h3>
          <p class="sq-project-card__desc">Swarm of AI agents conducting real-time market intelligence and competitive strategy generation.</p>
          <div class="sq-project-card__tags">
            <span class="sq-tag">LangGraph</span>
            <span class="sq-tag">Python</span>
            <span class="sq-tag">Qdrant</span>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="sq-project-card">
          <div class="sq-project-card__corner sq-project-card__corner--tl"><svg viewBox="0 0 93 93" fill="none"><path fill="currentColor" d="M31 0h62v31H62v31H31v31H0V31h31V0Z"></path></svg></div>
          <div class="sq-project-card__corner sq-project-card__corner--tr"><svg viewBox="0 0 93 93" fill="none"><path fill="currentColor" d="M31 0h62v31H62v31H31v31H0V31h31V0Z"></path></svg></div>
          <div class="sq-project-card__corner sq-project-card__corner--bl"><svg viewBox="0 0 93 93" fill="none"><path fill="currentColor" d="M31 0h62v31H62v31H31v31H0V31h31V0Z"></path></svg></div>
          <div class="sq-project-card__corner sq-project-card__corner--br"><svg viewBox="0 0 93 93" fill="none"><path fill="currentColor" d="M31 0h62v31H62v31H31v31H0V31h31V0Z"></path></svg></div>

          <div class="sq-project-card__header">
            <span class="sq-project-card__tag">Cloud FinOps</span>
            <span style="color: var(--sq-color-yellow); font-family: var(--sq-font-family-mono); font-size: 0.75rem;">02 ✦</span>
          </div>
          <h3 class="sq-project-card__title">Agentic FinOps & Cost Optimizer</h3>
          <p class="sq-project-card__desc">Continuous Kubernetes workload rightsizing and automated billing anomaly resolution.</p>
          <div class="sq-project-card__tags">
            <span class="sq-tag">Go</span>
            <span class="sq-tag">Kubernetes</span>
            <span class="sq-tag">AWS</span>
          </div>
        </div>
      </div>

      <!-- Side-by-Side Comparison List (Screenshot 5 Replica) -->
      <div style="margin-top: 4.5rem; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 3.5rem;">
        <span class="sq-eyebrow" style="margin-bottom: 2rem; display: block; color: var(--sq-color-yellow);">PROJECT ARCHITECTURE // COMPARISON MATRIX</span>
        
        <ul class="sq-comparison-list">
          <li class="sq-comparison-item">
            <div class="sq-comparison-item__inner">
              <div class="sq-comparison-header">
                <h3 class="sq-comparison-title">Marketing Strategy Research Agent</h3>
              </div>
              <div class="sq-comparison-visual">
                <div class="sq-comparison-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path fill-rule="evenodd" d="M12 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM4 14a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm16 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM11 7.8V12h2V7.8a4.98 4.98 0 0 1-2 0ZM7.2 14.5l3.8-2.5 1 1.7-3.8 2.5-1-1.7Zm9.6 0-3.8-2.5-1 1.7 3.8 2.5 1-1.7Z" clip-rule="evenodd" />
                  </svg>
                </div>
              </div>
              <div class="sq-comparison-content">
                <p class="sq-comparison-paragraph">Swarm of AI Agents that conducts real-time market research & competitive analysis to generate full-funnel marketing strategies; leverages web search, retrieval-augmented reasoning, & planner-driven task orchestration.</p>
              </div>
            </div>
          </li>

          <li class="sq-comparison-item is-active is-inview">
            <div class="sq-comparison-item__inner">
              <div class="sq-comparison-header">
                <h3 class="sq-comparison-title">Autonomous Semantic Layer Engine</h3>
              </div>
              <div class="sq-comparison-visual">
                <div class="sq-comparison-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path fill-rule="evenodd" d="M4 3h16v4H4V3Zm0 7h16v4H4v-4Zm0 7h16v4H4v-4Zm2-12h2v2H6V5Zm0 7h2v2H6v-2Zm0 7h2v2H6v-2Z" clip-rule="evenodd" />
                  </svg>
                </div>
              </div>
              <div class="sq-comparison-content">
                <p class="sq-comparison-paragraph">Agentic architecture that transforms database schemas into metric definitions, relationship graphs & lineage-aware semantic abstractions for analytics-grade LLM querying across OLAP systems & intelligent dashboards. Reduced metric hallucination & logical query errors by ~48% compared to prompt-only queries.</p>
              </div>
            </div>
          </li>

          <li class="sq-comparison-item">
            <div class="sq-comparison-item__inner">
              <div class="sq-comparison-header">
                <h3 class="sq-comparison-title">AI-Fill (Agentic Automation)</h3>
              </div>
              <div class="sq-comparison-visual">
                <div class="sq-comparison-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path fill-rule="evenodd" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm1 5h-2v4H7v2h4v4h2v-4h4v-2h-4V7Z" clip-rule="evenodd" />
                  </svg>
                </div>
              </div>
              <div class="sq-comparison-content">
                <p class="sq-comparison-paragraph">Autonomous agentic tool using LLMs & browser automation for end-to-end form completion.</p>
              </div>
            </div>
          </li>

          <li class="sq-comparison-item">
            <div class="sq-comparison-item__inner">
              <div class="sq-comparison-header">
                <h3 class="sq-comparison-title">Text2SQL</h3>
              </div>
              <div class="sq-comparison-visual">
                <div class="sq-comparison-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M10 2h4v4h-4V2ZM3 8h18v2h-6v12h-2v-6h-2v6H9V10H3V8Z" />
                  </svg>
                </div>
              </div>
              <div class="sq-comparison-content">
                <p class="sq-comparison-paragraph">AI platform converting natural language queries into schema-aware, optimized SQL.</p>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <!-- Dotted Leader List below -->
      <div style="margin-top: 4rem;">
        <span class="sq-eyebrow" style="margin-bottom: 1rem; display: block;">FULL REPOSITORY DIRECTORY</span>
        <ul class="sq-dotted-leader-list">
          <li>
            <a href="javascript:void(0)" onclick="event.preventDefault();" class="sq-dotted-leader-row">
              <span class="sq-dotted-leader-index">01</span>
              <span class="sq-dotted-leader-dots"></span>
              <span class="sq-dotted-leader-title">MARKETING STRATEGY RESEARCH AGENT</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0)" onclick="event.preventDefault();" class="sq-dotted-leader-row">
              <span class="sq-dotted-leader-index">02</span>
              <span class="sq-dotted-leader-dots"></span>
              <span class="sq-dotted-leader-title">AGENTIC FINOPS & COST OPTIMIZER</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0)" onclick="event.preventDefault();" class="sq-dotted-leader-row">
              <span class="sq-dotted-leader-index">03</span>
              <span class="sq-dotted-leader-dots"></span>
              <span class="sq-dotted-leader-title">MULTI-CLOUD BILLING LAKEHOUSE</span>
            </a>
          </li>
        </ul>
      </div>
    </main>
  </div>
`,i=()=>`
  ${r}
  <div class="sq-template-container" style="background-color: var(--sq-color-cream); min-height: 100vh; color: #000;">
    ${l("experience")}

    <!-- Panel 1: Experience (Default Active) -->
    <div class="sq-template-view sq-view-experience" style="display: block;">
      <div style="display: flex; justify-content: space-between; align-items: center; padding: 1.25rem var(--sq-grid-margin) 0.5rem; max-width: 1440px; margin: 0 auto; font-family: var(--sq-font-family-mono); font-size: 0.65rem; color: rgba(0,0,0,0.6); letter-spacing: 0.08em; text-transform: uppercase;">
        <div style="display: flex; gap: 6px; align-items: center;"><span>✦</span><span>✦</span><span>✦</span></div>
        <div style="display: flex; gap: 1.5rem; align-items: center;"><span>FLEXERA GCC</span><span>✦</span><span>✦</span><span>LA-H-AX87M-GJR</span></div>
        <div style="display: flex; gap: 6px; align-items: center;"><span>✦</span><span>✦</span><span>✦</span></div>
      </div>

      <div style="padding: 1.5rem var(--sq-grid-margin) 2.5rem; max-width: 1440px; margin: 0 auto;">
        <div style="display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 2rem;">
          <div>
            <div class="u-h1" style="font-size: clamp(3.5rem, 1.5rem + 7.5vi, 8.5rem); line-height: 0.88; letter-spacing: -0.03em;">WORK</div>
            <div style="display: flex; align-items: center; gap: 1rem; flex-wrap: wrap;">
              <div style="width: clamp(90px, 11vw, 150px); height: clamp(55px, 7vw, 95px); border-radius: 4px; overflow: hidden; background: #2b4461; flex-shrink: 0;">
                <img src="https://cdn.prod.website-files.com/64591e5db836f60c02bb97e9/67bca3b24a78c617c8145f5e_process-static.webp"
                     alt="Island" style="width: 100%; height: 100%; object-fit: cover; image-rendering: pixelated;" />
              </div>
              <div class="u-h1" style="font-size: clamp(3.5rem, 1.5rem + 7.5vi, 8.5rem); line-height: 0.88; letter-spacing: -0.03em;">EXPERIENCE</div>
            </div>
          </div>
          <div style="display: flex; flex-direction: column; gap: 0.35rem; font-family: var(--sq-font-family-mono); font-size: 0.75rem; letter-spacing: 0.08em; text-transform: uppercase;">
            <div style="display: flex; gap: 0.85rem;"><span style="color: rgba(0,0,0,0.45);">01</span><strong>DEFINE</strong></div>
            <div style="display: flex; gap: 0.85rem;"><span style="color: rgba(0,0,0,0.45);">02</span><strong>DESIGN</strong></div>
            <div style="display: flex; gap: 0.85rem;"><span style="color: rgba(0,0,0,0.45);">03</span><strong>BUILD</strong></div>
            <div style="display: flex; gap: 0.85rem;"><span style="color: rgba(0,0,0,0.45);">04</span><strong>RUN</strong></div>
          </div>
        </div>

        <div style="margin-top: 2rem; max-width: 900px;">
          <div style="display: inline-block; background: #000; color: #fff; padding: 3px 8px; border-radius: 2px; font-family: var(--sq-font-family-mono); font-size: 0.7rem; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 1rem;">
            SOFTWARE ENGINEER
          </div>
          <p class="u-h3" style="font-size: clamp(1.2rem, 1rem + 0.6vi, 1.65rem); font-weight: 500; line-height: 1.35; color: #111;">
            Innovative Software Engineer with 2.5+ years of experience architecting future-ready cloud platforms, high-scale distributed systems, and agentic AI solutions—redefining cost efficiency, reliability, and scale for modern enterprises.
          </p>
        </div>
      </div>
    </div>

    <!-- Panel 2: About (Hidden initially, shown on click) -->
    <div class="sq-template-view sq-view-about" style="display: none; padding: 4rem var(--sq-grid-margin) 6rem; max-width: 1440px; margin: 0 auto;">
      <span class="sq-eyebrow">ABOUT OVERVIEW</span>
      <h1 class="u-h1" style="margin: 1.5rem 0; font-size: clamp(3.5rem, 1.5rem + 7.5vi, 8.5rem);">
        CREATIVE <span class="sq-wavy-underline">DEVELOPER</span>
      </h1>
      <p class="u-p1" style="max-width: 700px; font-size: 1.2rem; line-height: 1.6;">
        Crafting production-grade agent swarms, developer platforms, and cloud infrastructure with high design fidelity.
      </p>
    </div>

    <!-- Panel 3: Projects (Hidden initially) -->
    <div class="sq-template-view sq-view-projects" style="display: none; padding: 4rem var(--sq-grid-margin) 6rem; background: #000; color: #fff;">
      <h1 class="u-h1" style="margin-bottom: 2rem;">FEATURED <span class="sq-wavy-underline">PROJECTS</span></h1>
      <p class="u-p1">Multi-agent systems, FinOps rightsizing agents, and distributed query platforms.</p>
    </div>

    <!-- Panel 4: More (Hidden initially) -->
    <div class="sq-template-view sq-view-more" style="display: none; padding: 4rem var(--sq-grid-margin) 6rem; max-width: 900px; margin: 0 auto;">
      <h1 class="u-h1" style="margin-bottom: 2rem;">RESUME & <span class="sq-wavy-underline">DETAILS</span></h1>
      <p class="u-p1">Interactive skill matrices, education records, and verified achievements.</p>
    </div>
  </div>
`;var o,c,d,p,v;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`({
  roleTitle = 'Software Engineer',
  company = 'Flexera GCC'
}) => \`
  \${interactivePageScript}
  <div class="sq-template-container" style="background-color: var(--sq-color-cream); min-height: 100vh; color: #000;">
    \${renderHeader('experience')}

    <main class="sq-template-view sq-view-experience" style="display: block; padding-bottom: 5rem;">
      <!-- Decorative Metadata Sub-bar (Screenshot 5) -->
      <div style="display: flex; justify-content: space-between; align-items: center; padding: 1.25rem var(--sq-grid-margin) 0.5rem; max-width: 1440px; margin: 0 auto; font-family: var(--sq-font-family-mono); font-size: 0.65rem; color: rgba(0,0,0,0.6); letter-spacing: 0.08em; text-transform: uppercase;">
        <div style="display: flex; gap: 6px; align-items: center;">
          <span>✦</span><span>✦</span><span>✦</span>
        </div>
        <div style="display: flex; gap: 1.5rem; align-items: center;">
          <span>\${company.toUpperCase()}</span>
          <span>✦</span>
          <span>✦</span>
          <span>LA-H-AX87M-GJR</span>
        </div>
        <div style="display: flex; gap: 6px; align-items: center;">
          <span>✦</span><span>✦</span><span>✦</span>
        </div>
      </div>

      <!-- Hero Header Section with WORK [Image] EXPERIENCE -->
      <div style="padding: 1.5rem var(--sq-grid-margin) 2.5rem; max-width: 1440px; margin: 0 auto;">
        <div style="display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 2rem;">
          <div>
            <div class="u-h1" style="font-size: clamp(3.5rem, 1.5rem + 7.5vi, 8.5rem); line-height: 0.88; letter-spacing: -0.03em;">
              WORK
            </div>
            <div style="display: flex; align-items: center; gap: 1rem; flex-wrap: wrap;">
              <div style="width: clamp(90px, 11vw, 150px); height: clamp(55px, 7vw, 95px); border-radius: 4px; overflow: hidden; background: #2b4461; box-shadow: 0 4px 12px rgba(0,0,0,0.12); flex-shrink: 0;">
                <img src="https://cdn.prod.website-files.com/64591e5db836f60c02bb97e9/67bca3b24a78c617c8145f5e_process-static.webp"
                     alt="Pixel Island Banner"
                     style="width: 100%; height: 100%; object-fit: cover; image-rendering: pixelated;" />
              </div>
              <div class="u-h1" style="font-size: clamp(3.5rem, 1.5rem + 7.5vi, 8.5rem); line-height: 0.88; letter-spacing: -0.03em;">
                EXPERIENCE
              </div>
            </div>
          </div>

          <!-- Numbered Steps on Right (Screenshot 5) -->
          <div style="display: flex; flex-direction: column; gap: 0.35rem; font-family: var(--sq-font-family-mono); font-size: 0.75rem; letter-spacing: 0.08em; text-transform: uppercase;">
            <div style="display: flex; gap: 0.85rem;"><span style="color: rgba(0,0,0,0.45);">01</span><strong>DEFINE</strong></div>
            <div style="display: flex; gap: 0.85rem;"><span style="color: rgba(0,0,0,0.45);">02</span><strong>DESIGN</strong></div>
            <div style="display: flex; gap: 0.85rem;"><span style="color: rgba(0,0,0,0.45);">03</span><strong>BUILD</strong></div>
            <div style="display: flex; gap: 0.85rem;"><span style="color: rgba(0,0,0,0.45);">04</span><strong>RUN</strong></div>
          </div>
        </div>

        <!-- Role Badge and High-Impact Statement (Screenshot 5) -->
        <div style="margin-top: 2.5rem; max-width: 900px;">
          <div style="display: inline-block; background: #000; color: #fff; padding: 3px 8px; border-radius: 2px; font-family: var(--sq-font-family-mono); font-size: 0.7rem; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 1rem;">
            SOFTWARE ENGINEER
          </div>
          <p class="u-h3" style="font-size: clamp(1.2rem, 1rem + 0.6vi, 1.65rem); font-weight: 500; line-height: 1.35; color: #111;">
            Innovative Software Engineer with 2.5+ years of experience architecting future-ready cloud platforms, high-scale distributed systems, and agentic AI solutions—redefining cost efficiency, reliability, and scale for modern enterprises.
          </p>
          <div style="display: flex; justify-content: flex-end; margin-top: 1rem; font-family: var(--sq-font-family-mono); font-size: 0.7rem; color: rgba(0,0,0,0.45); letter-spacing: 0.1em;">
            XXXXXXXXX
          </div>
        </div>
      </div>

      <!-- Main Experience Detail Block: Left Visual & Right Career Progression -->
      <div style="padding: 2.5rem var(--sq-grid-margin) 0; max-width: 1440px; margin: 0 auto; display: flex; gap: 3.5rem; flex-wrap: wrap; border-top: 1px solid rgba(0,0,0,0.1);">
        <!-- Left Landscape Card (XR5GD) -->
        <div class="sq-landscape-card" style="flex-shrink: 0; max-width: 300px;">
          <div class="sq-landscape-card__header">
            <span class="sq-landscape-card__model">XR5GD</span>
            <div class="sq-landscape-card__bars">
              <div class="sq-landscape-card__bar"></div>
              <div class="sq-landscape-card__bar"></div>
              <div class="sq-landscape-card__bar"></div>
            </div>
          </div>
          <div class="sq-landscape-card__media" style="aspect-ratio: 4 / 3; background: #26445a;">
            <img src="https://cdn.prod.website-files.com/64591e5db836f60c02bb97e9/67c1d74b56c59e9d251b3fb4_01_define.webp"
                 alt="Pixel Art Scenery"
                 class="sq-landscape-card__img" />
          </div>
          <div class="sq-landscape-card__footer">
            <span>DL 90</span>
            <span>✦</span>
            <span>SPEC-01</span>
          </div>
        </div>

        <!-- Right: Career Progression Timeline & Impact -->
        <div style="flex: 1; min-width: 320px;">
          <div class="sq-career-timeline">
            <div class="sq-career-timeline__header">
              <span class="sq-career-timeline__company">\${company}</span>
              <span class="sq-career-timeline__badge">Career Progression</span>
            </div>

            <div class="sq-career-timeline__list">
              <!-- Promoted Role -->
              <div class="sq-career-timeline__step is-current">
                <div class="sq-career-timeline__track">
                  <span class="sq-career-timeline__node">✦</span>
                  <span class="sq-career-timeline__stem"></span>
                </div>
                <div class="sq-career-timeline__body">
                  <div class="sq-career-timeline__heading">
                    <span class="sq-career-timeline__title">Software Engineer</span>
                    <span class="sq-career-timeline__tag sq-career-timeline__tag--promoted">Promoted ✦</span>
                  </div>
                  <div class="sq-career-timeline__date">Apr 2026 – Present</div>
                </div>
              </div>

              <!-- Initial Role -->
              <div class="sq-career-timeline__step">
                <div class="sq-career-timeline__track">
                  <span class="sq-career-timeline__node--past">●</span>
                </div>
                <div class="sq-career-timeline__body">
                  <div class="sq-career-timeline__heading">
                    <span class="sq-career-timeline__title">Associate Software Engineer</span>
                    <span class="sq-career-timeline__tag">Initial Role</span>
                  </div>
                  <div class="sq-career-timeline__date">Aug 2024 – Apr 2026</div>
                </div>
              </div>
            </div>
          </div>

          <div style="margin-top: 1.5rem;">
            <p class="u-p1" style="color: #1a1a1a; line-height: 1.65; margin-bottom: 1rem;">
              Spearheaded the 0-to-1 build of an AI developer platform and marketplace, enabling 10+ teams to build and embed 50+ AI agents and MCPs into their products. Unified IAM, guardrails, observability, monitoring, alerting, testing, and evaluation into one standardized framework.
            </p>
            <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
              <span class="sq-tag">Agentic AI</span>
              <span class="sq-tag">Distributed Systems</span>
              <span class="sq-tag">FinOps Platform</span>
              <span class="sq-tag">Delta Lake</span>
              <span class="sq-tag">Kubernetes</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
\``,...(d=(c=s.parameters)==null?void 0:c.docs)==null?void 0:d.source},description:{story:"1. EXPERIENCE TEMPLATE (Screenshot 5 Exact Replica)",...(v=(p=s.parameters)==null?void 0:p.docs)==null?void 0:v.description}}};var m,g,h,f,u;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`({
  heroTitle = 'CREATIVE DEVELOPER'
}) => \`
  \${interactivePageScript}
  <div class="sq-template-container" style="background-color: var(--sq-color-cream); min-height: 100vh; color: #000;">
    \${renderHeader('about')}

    <main class="sq-template-view sq-view-about" style="display: block;">
      <!-- Hero -->
      <section style="padding: 4rem var(--sq-grid-margin) 5rem; max-width: 1440px; margin: 0 auto;">
        <span class="sq-eyebrow">SOFTWARE ARCHITECTURE // 2026</span>
        <h1 class="u-h1" style="margin-top: 1.25rem; margin-bottom: 1.5rem; font-size: clamp(3.5rem, 1.5rem + 7.5vi, 8.5rem);">
          \${heroTitle.split(' ')[0] || 'CREATIVE'} <span class="sq-wavy-underline">\${heroTitle.split(' ').slice(1).join(' ') || 'DEVELOPER'}</span>
        </h1>
        <p class="u-p1" style="max-width: 680px; font-size: 1.15rem; line-height: 1.6; margin-bottom: 2rem;">
          Specializing in scalable cloud platforms, distributed systems, FinOps rightsizing, and Agentic AI solutions with autonomous multi-agent orchestration.
        </p>

        <button class="sq-explore-button" type="button" onclick="window.switchStoryView('experience', this, event)">
          <svg class="sq-explore-button__icon" viewBox="0 0 512 512" height="25" width="25">
            <path fill="rgb(19, 19, 19)" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"></path>
          </svg>
          Explore
        </button>
      </section>

      <!-- Curvy Wavy Divider -->
      <div class="sq-wavy-divider" aria-hidden="true">
        <svg viewBox="0 0 1440 90" fill="none" preserveAspectRatio="none" class="sq-wavy-divider__svg">
          <path d="M0,0 L0,45 Q 60,80 120,45 T 240,45 T 360,45 T 480,45 T 600,45 T 720,45 T 840,45 T 960,45 T 1080,45 T 1200,45 T 1320,45 T 1440,45 L 1440,0 Z" fill="#f9f4eb"></path>
          <path d="M0,95 L0,45 Q 60,80 120,45 T 240,45 T 360,45 T 480,45 T 600,45 T 720,45 T 840,45 T 960,45 T 1080,45 T 1200,45 T 1320,45 T 1440,95 Z" fill="#000000"></path>
          <path d="M0,45 Q 60,80 120,45 T 240,45 T 360,45 T 480,45 T 600,45 T 720,45 T 840,45 T 960,45 T 1080,45 T 1200,45 T 1320,45 T 1440,45" fill="none" stroke="#ffe32e" stroke-width="4.5" stroke-linecap="round"></path>
        </svg>
      </div>

      <!-- Contact Form Section -->
      <section style="background: #000; color: #fff; padding: 3rem var(--sq-grid-margin) 3rem; text-align: center;">
        <h3 class="u-h3" style="margin-bottom: 1.5rem;">Know more about my projects</h3>
        <form class="sq-contact-form" onsubmit="event.preventDefault(); this.classList.toggle('is-loading');">
          <div class="sq-contact-form__item">
            <input type="email" placeholder="E-MAIL" class="sq-contact-form__input" required />
          </div>
          <div class="sq-contact-form__item sq-contact-form__item--message">
            <input type="text" placeholder="MESSAGE" class="sq-contact-form__input" required />
          </div>
          <div class="sq-contact-form__submit-wrap">
            <button type="submit" class="sq-button sq-button--primary">
              <span>ENTER</span>
              <svg class="sq-icon--arrow" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </button>
            <div class="sq-contact-form__loader" role="status">
              <div class="sq-contact-form__spinner">
                <div class="sq-contact-form__spinner-box"></div>
                <div class="sq-contact-form__spinner-box"></div>
                <div class="sq-contact-form__spinner-box"></div>
                <div class="sq-contact-form__spinner-box"></div>
              </div>
              <span class="sq-contact-form__loader-text">SENDING...</span>
            </div>
          </div>
        </form>
      </section>
    </main>
  </div>
\``,...(h=(g=a.parameters)==null?void 0:g.docs)==null?void 0:h.source},description:{story:"2. ABOUT PAGE TEMPLATE",...(u=(f=a.parameters)==null?void 0:f.docs)==null?void 0:u.description}}};var y,q,_,b,x;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`() => \`
  \${interactivePageScript}
  <div class="sq-template-container u-theme-dark" style="background-color: #000; min-height: 100vh; color: #f9f4eb;">
    \${renderHeader('projects')}

    <main class="sq-template-view sq-view-projects" style="display: block; padding: 3rem var(--sq-grid-margin) 6rem; max-width: 1440px; margin: 0 auto;">
      <h1 class="u-h1" style="font-size: clamp(3rem, 1.5rem + 5vi, 6.5rem); margin-bottom: 3rem;">
        FEATURED <span class="sq-wavy-underline">PROJECTS</span>
      </h1>

      <div style="display: flex; gap: 2.5rem; flex-wrap: wrap;">
        <!-- Card 1 -->
        <div class="sq-project-card">
          <div class="sq-project-card__corner sq-project-card__corner--tl"><svg viewBox="0 0 93 93" fill="none"><path fill="currentColor" d="M31 0h62v31H62v31H31v31H0V31h31V0Z"></path></svg></div>
          <div class="sq-project-card__corner sq-project-card__corner--tr"><svg viewBox="0 0 93 93" fill="none"><path fill="currentColor" d="M31 0h62v31H62v31H31v31H0V31h31V0Z"></path></svg></div>
          <div class="sq-project-card__corner sq-project-card__corner--bl"><svg viewBox="0 0 93 93" fill="none"><path fill="currentColor" d="M31 0h62v31H62v31H31v31H0V31h31V0Z"></path></svg></div>
          <div class="sq-project-card__corner sq-project-card__corner--br"><svg viewBox="0 0 93 93" fill="none"><path fill="currentColor" d="M31 0h62v31H62v31H31v31H0V31h31V0Z"></path></svg></div>

          <div class="sq-project-card__header">
            <span class="sq-project-card__tag">Autonomous Swarm</span>
            <span style="color: var(--sq-color-yellow); font-family: var(--sq-font-family-mono); font-size: 0.75rem;">01 ✦</span>
          </div>
          <h3 class="sq-project-card__title">Marketing Strategy Research Agent</h3>
          <p class="sq-project-card__desc">Swarm of AI agents conducting real-time market intelligence and competitive strategy generation.</p>
          <div class="sq-project-card__tags">
            <span class="sq-tag">LangGraph</span>
            <span class="sq-tag">Python</span>
            <span class="sq-tag">Qdrant</span>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="sq-project-card">
          <div class="sq-project-card__corner sq-project-card__corner--tl"><svg viewBox="0 0 93 93" fill="none"><path fill="currentColor" d="M31 0h62v31H62v31H31v31H0V31h31V0Z"></path></svg></div>
          <div class="sq-project-card__corner sq-project-card__corner--tr"><svg viewBox="0 0 93 93" fill="none"><path fill="currentColor" d="M31 0h62v31H62v31H31v31H0V31h31V0Z"></path></svg></div>
          <div class="sq-project-card__corner sq-project-card__corner--bl"><svg viewBox="0 0 93 93" fill="none"><path fill="currentColor" d="M31 0h62v31H62v31H31v31H0V31h31V0Z"></path></svg></div>
          <div class="sq-project-card__corner sq-project-card__corner--br"><svg viewBox="0 0 93 93" fill="none"><path fill="currentColor" d="M31 0h62v31H62v31H31v31H0V31h31V0Z"></path></svg></div>

          <div class="sq-project-card__header">
            <span class="sq-project-card__tag">Cloud FinOps</span>
            <span style="color: var(--sq-color-yellow); font-family: var(--sq-font-family-mono); font-size: 0.75rem;">02 ✦</span>
          </div>
          <h3 class="sq-project-card__title">Agentic FinOps & Cost Optimizer</h3>
          <p class="sq-project-card__desc">Continuous Kubernetes workload rightsizing and automated billing anomaly resolution.</p>
          <div class="sq-project-card__tags">
            <span class="sq-tag">Go</span>
            <span class="sq-tag">Kubernetes</span>
            <span class="sq-tag">AWS</span>
          </div>
        </div>
      </div>

      <!-- Side-by-Side Comparison List (Screenshot 5 Replica) -->
      <div style="margin-top: 4.5rem; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 3.5rem;">
        <span class="sq-eyebrow" style="margin-bottom: 2rem; display: block; color: var(--sq-color-yellow);">PROJECT ARCHITECTURE // COMPARISON MATRIX</span>
        
        <ul class="sq-comparison-list">
          <li class="sq-comparison-item">
            <div class="sq-comparison-item__inner">
              <div class="sq-comparison-header">
                <h3 class="sq-comparison-title">Marketing Strategy Research Agent</h3>
              </div>
              <div class="sq-comparison-visual">
                <div class="sq-comparison-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path fill-rule="evenodd" d="M12 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM4 14a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm16 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM11 7.8V12h2V7.8a4.98 4.98 0 0 1-2 0ZM7.2 14.5l3.8-2.5 1 1.7-3.8 2.5-1-1.7Zm9.6 0-3.8-2.5-1 1.7 3.8 2.5 1-1.7Z" clip-rule="evenodd" />
                  </svg>
                </div>
              </div>
              <div class="sq-comparison-content">
                <p class="sq-comparison-paragraph">Swarm of AI Agents that conducts real-time market research & competitive analysis to generate full-funnel marketing strategies; leverages web search, retrieval-augmented reasoning, & planner-driven task orchestration.</p>
              </div>
            </div>
          </li>

          <li class="sq-comparison-item is-active is-inview">
            <div class="sq-comparison-item__inner">
              <div class="sq-comparison-header">
                <h3 class="sq-comparison-title">Autonomous Semantic Layer Engine</h3>
              </div>
              <div class="sq-comparison-visual">
                <div class="sq-comparison-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path fill-rule="evenodd" d="M4 3h16v4H4V3Zm0 7h16v4H4v-4Zm0 7h16v4H4v-4Zm2-12h2v2H6V5Zm0 7h2v2H6v-2Zm0 7h2v2H6v-2Z" clip-rule="evenodd" />
                  </svg>
                </div>
              </div>
              <div class="sq-comparison-content">
                <p class="sq-comparison-paragraph">Agentic architecture that transforms database schemas into metric definitions, relationship graphs & lineage-aware semantic abstractions for analytics-grade LLM querying across OLAP systems & intelligent dashboards. Reduced metric hallucination & logical query errors by ~48% compared to prompt-only queries.</p>
              </div>
            </div>
          </li>

          <li class="sq-comparison-item">
            <div class="sq-comparison-item__inner">
              <div class="sq-comparison-header">
                <h3 class="sq-comparison-title">AI-Fill (Agentic Automation)</h3>
              </div>
              <div class="sq-comparison-visual">
                <div class="sq-comparison-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path fill-rule="evenodd" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm1 5h-2v4H7v2h4v4h2v-4h4v-2h-4V7Z" clip-rule="evenodd" />
                  </svg>
                </div>
              </div>
              <div class="sq-comparison-content">
                <p class="sq-comparison-paragraph">Autonomous agentic tool using LLMs & browser automation for end-to-end form completion.</p>
              </div>
            </div>
          </li>

          <li class="sq-comparison-item">
            <div class="sq-comparison-item__inner">
              <div class="sq-comparison-header">
                <h3 class="sq-comparison-title">Text2SQL</h3>
              </div>
              <div class="sq-comparison-visual">
                <div class="sq-comparison-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M10 2h4v4h-4V2ZM3 8h18v2h-6v12h-2v-6h-2v6H9V10H3V8Z" />
                  </svg>
                </div>
              </div>
              <div class="sq-comparison-content">
                <p class="sq-comparison-paragraph">AI platform converting natural language queries into schema-aware, optimized SQL.</p>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <!-- Dotted Leader List below -->
      <div style="margin-top: 4rem;">
        <span class="sq-eyebrow" style="margin-bottom: 1rem; display: block;">FULL REPOSITORY DIRECTORY</span>
        <ul class="sq-dotted-leader-list">
          <li>
            <a href="javascript:void(0)" onclick="event.preventDefault();" class="sq-dotted-leader-row">
              <span class="sq-dotted-leader-index">01</span>
              <span class="sq-dotted-leader-dots"></span>
              <span class="sq-dotted-leader-title">MARKETING STRATEGY RESEARCH AGENT</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0)" onclick="event.preventDefault();" class="sq-dotted-leader-row">
              <span class="sq-dotted-leader-index">02</span>
              <span class="sq-dotted-leader-dots"></span>
              <span class="sq-dotted-leader-title">AGENTIC FINOPS & COST OPTIMIZER</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0)" onclick="event.preventDefault();" class="sq-dotted-leader-row">
              <span class="sq-dotted-leader-index">03</span>
              <span class="sq-dotted-leader-dots"></span>
              <span class="sq-dotted-leader-title">MULTI-CLOUD BILLING LAKEHOUSE</span>
            </a>
          </li>
        </ul>
      </div>
    </main>
  </div>
\``,...(_=(q=n.parameters)==null?void 0:q.docs)==null?void 0:_.source},description:{story:"3. PROJECTS PAGE TEMPLATE (Dark Theme)",...(x=(b=n.parameters)==null?void 0:b.docs)==null?void 0:x.description}}};var w,E,T,A,R;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`() => \`
  \${interactivePageScript}
  <div class="sq-template-container" style="background-color: var(--sq-color-cream); min-height: 100vh; color: #000;">
    \${renderHeader('experience')}

    <!-- Panel 1: Experience (Default Active) -->
    <div class="sq-template-view sq-view-experience" style="display: block;">
      <div style="display: flex; justify-content: space-between; align-items: center; padding: 1.25rem var(--sq-grid-margin) 0.5rem; max-width: 1440px; margin: 0 auto; font-family: var(--sq-font-family-mono); font-size: 0.65rem; color: rgba(0,0,0,0.6); letter-spacing: 0.08em; text-transform: uppercase;">
        <div style="display: flex; gap: 6px; align-items: center;"><span>✦</span><span>✦</span><span>✦</span></div>
        <div style="display: flex; gap: 1.5rem; align-items: center;"><span>FLEXERA GCC</span><span>✦</span><span>✦</span><span>LA-H-AX87M-GJR</span></div>
        <div style="display: flex; gap: 6px; align-items: center;"><span>✦</span><span>✦</span><span>✦</span></div>
      </div>

      <div style="padding: 1.5rem var(--sq-grid-margin) 2.5rem; max-width: 1440px; margin: 0 auto;">
        <div style="display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 2rem;">
          <div>
            <div class="u-h1" style="font-size: clamp(3.5rem, 1.5rem + 7.5vi, 8.5rem); line-height: 0.88; letter-spacing: -0.03em;">WORK</div>
            <div style="display: flex; align-items: center; gap: 1rem; flex-wrap: wrap;">
              <div style="width: clamp(90px, 11vw, 150px); height: clamp(55px, 7vw, 95px); border-radius: 4px; overflow: hidden; background: #2b4461; flex-shrink: 0;">
                <img src="https://cdn.prod.website-files.com/64591e5db836f60c02bb97e9/67bca3b24a78c617c8145f5e_process-static.webp"
                     alt="Island" style="width: 100%; height: 100%; object-fit: cover; image-rendering: pixelated;" />
              </div>
              <div class="u-h1" style="font-size: clamp(3.5rem, 1.5rem + 7.5vi, 8.5rem); line-height: 0.88; letter-spacing: -0.03em;">EXPERIENCE</div>
            </div>
          </div>
          <div style="display: flex; flex-direction: column; gap: 0.35rem; font-family: var(--sq-font-family-mono); font-size: 0.75rem; letter-spacing: 0.08em; text-transform: uppercase;">
            <div style="display: flex; gap: 0.85rem;"><span style="color: rgba(0,0,0,0.45);">01</span><strong>DEFINE</strong></div>
            <div style="display: flex; gap: 0.85rem;"><span style="color: rgba(0,0,0,0.45);">02</span><strong>DESIGN</strong></div>
            <div style="display: flex; gap: 0.85rem;"><span style="color: rgba(0,0,0,0.45);">03</span><strong>BUILD</strong></div>
            <div style="display: flex; gap: 0.85rem;"><span style="color: rgba(0,0,0,0.45);">04</span><strong>RUN</strong></div>
          </div>
        </div>

        <div style="margin-top: 2rem; max-width: 900px;">
          <div style="display: inline-block; background: #000; color: #fff; padding: 3px 8px; border-radius: 2px; font-family: var(--sq-font-family-mono); font-size: 0.7rem; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 1rem;">
            SOFTWARE ENGINEER
          </div>
          <p class="u-h3" style="font-size: clamp(1.2rem, 1rem + 0.6vi, 1.65rem); font-weight: 500; line-height: 1.35; color: #111;">
            Innovative Software Engineer with 2.5+ years of experience architecting future-ready cloud platforms, high-scale distributed systems, and agentic AI solutions—redefining cost efficiency, reliability, and scale for modern enterprises.
          </p>
        </div>
      </div>
    </div>

    <!-- Panel 2: About (Hidden initially, shown on click) -->
    <div class="sq-template-view sq-view-about" style="display: none; padding: 4rem var(--sq-grid-margin) 6rem; max-width: 1440px; margin: 0 auto;">
      <span class="sq-eyebrow">ABOUT OVERVIEW</span>
      <h1 class="u-h1" style="margin: 1.5rem 0; font-size: clamp(3.5rem, 1.5rem + 7.5vi, 8.5rem);">
        CREATIVE <span class="sq-wavy-underline">DEVELOPER</span>
      </h1>
      <p class="u-p1" style="max-width: 700px; font-size: 1.2rem; line-height: 1.6;">
        Crafting production-grade agent swarms, developer platforms, and cloud infrastructure with high design fidelity.
      </p>
    </div>

    <!-- Panel 3: Projects (Hidden initially) -->
    <div class="sq-template-view sq-view-projects" style="display: none; padding: 4rem var(--sq-grid-margin) 6rem; background: #000; color: #fff;">
      <h1 class="u-h1" style="margin-bottom: 2rem;">FEATURED <span class="sq-wavy-underline">PROJECTS</span></h1>
      <p class="u-p1">Multi-agent systems, FinOps rightsizing agents, and distributed query platforms.</p>
    </div>

    <!-- Panel 4: More (Hidden initially) -->
    <div class="sq-template-view sq-view-more" style="display: none; padding: 4rem var(--sq-grid-margin) 6rem; max-width: 900px; margin: 0 auto;">
      <h1 class="u-h1" style="margin-bottom: 2rem;">RESUME & <span class="sq-wavy-underline">DETAILS</span></h1>
      <p class="u-p1">Interactive skill matrices, education records, and verified achievements.</p>
    </div>
  </div>
\``,...(T=(E=i.parameters)==null?void 0:E.docs)==null?void 0:T.source},description:{story:`4. ALL-IN-ONE INTERACTIVE EXPLORER
Smoothly switches between About, Experience, Projects, More on click without any reloads`,...(R=(A=i.parameters)==null?void 0:A.docs)==null?void 0:R.description}}};const k=["ExperiencePageTemplate","AboutPageTemplate","ProjectsPageTemplate","InteractiveSitePreview"];export{a as AboutPageTemplate,s as ExperiencePageTemplate,i as InteractiveSitePreview,n as ProjectsPageTemplate,k as __namedExportsOrder,C as default};
