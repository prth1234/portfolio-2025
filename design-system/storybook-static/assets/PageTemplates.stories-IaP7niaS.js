const _={title:"Page Patterns/Templates",parameters:{layout:"fullscreen"}},a=()=>`
  <div style="background-color: var(--sq-color-cream); min-height: 100vh; color: #000;">
    <!-- Nav -->
    <header class="sq-header">
      <div class="sq-header__inner">
        <a href="#" class="sq-header__logo">
          <span style="font-family: var(--sq-font-family-mono); font-weight: 600;">Parth</span>
        </a>
        <nav class="sq-nav">
          <ul class="sq-nav__list">
            <li><a href="#" class="sq-nav__button is-active">About</a></li>
            <li><a href="#" class="sq-nav__button">Experience</a></li>
            <li><a href="#" class="sq-nav__button">Projects</a></li>
            <li><a href="#" class="sq-nav__button">More</a></li>
          </ul>
        </nav>
        <a href="#" class="sq-nav__button sq-nav__feed">FEED</a>
      </div>
    </header>

    <!-- Hero -->
    <main style="padding: 4rem var(--sq-grid-margin) 6rem; max-width: 1200px; margin: 0 auto;">
      <span class="sq-eyebrow">SOFTWARE ENGINEER // 2026</span>
      <h1 class="u-h1" style="margin-top: 1rem; margin-bottom: 2rem;">
        PARTH <span class="sq-wavy-underline">SINGH</span>
      </h1>
      <p class="u-p1" style="max-width: 650px; margin-bottom: 2rem;">
        Software Engineer building scalable cloud platforms, distributed systems, FinOps, and Agentic AI solutions.
      </p>

      <button class="sq-explore-button" type="button">
        <svg class="sq-explore-button__icon" viewBox="0 0 512 512" height="25" width="25">
          <path fill="rgb(19, 19, 19)" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"></path>
        </svg>
        Explore
      </button>
    </main>

    <!-- Wavy Divider -->
    <div class="sq-wavy-divider" aria-hidden="true">
      <svg viewBox="0 0 1440 90" fill="none" preserveAspectRatio="none" class="sq-wavy-divider__svg">
        <path d="M0,0 L0,45 Q 60,80 120,45 T 240,45 T 360,45 T 480,45 T 600,45 T 720,45 T 840,45 T 960,45 T 1080,45 T 1200,45 T 1320,45 T 1440,45 L 1440,0 Z" fill="#f9f4eb"></path>
        <path d="M0,95 L0,45 Q 60,80 120,45 T 240,45 T 360,45 T 480,45 T 600,45 T 720,45 T 840,45 T 960,45 T 1080,45 T 1200,45 T 1320,45 T 1440,95 Z" fill="#000000"></path>
        <path d="M0,45 Q 60,80 120,45 T 240,45 T 360,45 T 480,45 T 600,45 T 720,45 T 840,45 T 960,45 T 1080,45 T 1200,45 T 1320,45 T 1440,45" fill="none" stroke="#ffe32e" stroke-width="4.5" stroke-linecap="round"></path>
      </svg>
    </div>

    <!-- Contact Form Section -->
    <section style="background: #000; color: #fff; padding: 4rem 1.5rem 6rem; text-align: center;">
      <h3 class="u-h3" style="margin-bottom: 2rem;">Know more about my projects</h3>
      <form class="sq-contact-form">
        <div class="sq-contact-form__item">
          <input type="email" placeholder="E-MAIL" class="sq-contact-form__input" />
        </div>
        <div class="sq-contact-form__item sq-contact-form__item--message">
          <input type="text" placeholder="MESSAGE" class="sq-contact-form__input" />
        </div>
        <button type="submit" class="sq-button sq-button--primary">
          <span>ENTER</span>
          <svg class="sq-icon--arrow" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </button>
      </form>
    </section>
  </div>
`,s=()=>`
  <div style="background-color: var(--sq-color-cream); min-height: 100vh; color: #000; padding-bottom: 4rem;">
    <!-- Nav -->
    <header class="sq-header">
      <div class="sq-header__inner">
        <a href="#" class="sq-header__logo"><span style="font-family: var(--sq-font-family-mono); font-weight: 600;">Parth</span></a>
        <nav class="sq-nav">
          <ul class="sq-nav__list">
            <li><a href="#" class="sq-nav__button">About</a></li>
            <li><a href="#" class="sq-nav__button is-active">Experience</a></li>
            <li><a href="#" class="sq-nav__button">Projects</a></li>
            <li><a href="#" class="sq-nav__button">More</a></li>
          </ul>
        </nav>
        <a href="#" class="sq-nav__button sq-nav__feed">FEED</a>
      </div>
    </header>

    <div style="padding: 2rem var(--sq-grid-margin); max-width: 1200px; margin: 0 auto; display: flex; gap: 3rem; flex-wrap: wrap;">
      <!-- Left Landscape Card -->
      <div class="sq-landscape-card">
        <div class="sq-landscape-card__header">
          <span class="sq-landscape-card__model">XR65D</span>
          <div class="sq-landscape-card__bars">
            <div class="sq-landscape-card__bar"></div>
            <div class="sq-landscape-card__bar"></div>
            <div class="sq-landscape-card__bar"></div>
          </div>
        </div>
        <div class="sq-landscape-card__media">
          <img src="./img1.png" alt="Scenery" class="sq-landscape-card__img" onerror="this.src='https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=500&auto=format&fit=crop'" />
        </div>
        <div class="sq-landscape-card__footer"><span>(CL) 99</span></div>
      </div>

      <!-- Right Career Progression -->
      <div style="flex: 1; min-width: 300px;">
        <div class="sq-career-timeline">
          <div class="sq-career-timeline__header">
            <span class="sq-career-timeline__company">Flexera GCC</span>
            <span class="sq-career-timeline__badge">Career Progression</span>
          </div>

          <div class="sq-career-timeline__list">
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

        <p class="u-p1" style="margin-top: 1.5rem; line-height: 1.6;">
          Spearheaded the 0-to-1 build of an AI developer platform and marketplace, enabling 10+ teams to build and embed 50+ AI agents and MCPs into their products.
        </p>
      </div>
    </div>
  </div>
`,e=()=>`
  <div class="u-theme-dark" style="background-color: #000; min-height: 100vh; color: #f9f4eb; padding-bottom: 4rem;">
    <!-- Nav -->
    <header class="sq-header">
      <div class="sq-header__inner">
        <a href="#" class="sq-header__logo"><span style="font-family: var(--sq-font-family-mono); font-weight: 600;">Parth</span></a>
        <nav class="sq-nav">
          <ul class="sq-nav__list">
            <li><a href="#" class="sq-nav__button">About</a></li>
            <li><a href="#" class="sq-nav__button">Experience</a></li>
            <li><a href="#" class="sq-nav__button is-active">Projects</a></li>
            <li><a href="#" class="sq-nav__button">More</a></li>
          </ul>
        </nav>
        <a href="#" class="sq-nav__button sq-nav__feed">FEED</a>
      </div>
    </header>

    <div style="padding: 3rem var(--sq-grid-margin); max-width: 1200px; margin: 0 auto;">
      <h1 class="u-h1" style="margin-bottom: 3rem;">FEATURED <span class="sq-wavy-underline">PROJECTS</span></h1>

      <div style="display: flex; gap: 2rem; flex-wrap: wrap;">
        <!-- Card 1 -->
        <div class="sq-project-card">
          <div class="sq-project-card__header">
            <span class="sq-project-card__tag">Autonomous AI</span>
            <span style="color: #ffe32e;">01 ✦</span>
          </div>
          <h3 class="sq-project-card__title">Marketing Strategy Research Agent</h3>
          <p class="sq-project-card__desc">Swarm of AI agents conducting real-time market research and competitive analysis.</p>
          <div class="sq-project-card__tags">
            <span class="sq-tag">LangGraph</span>
            <span class="sq-tag">Python</span>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="sq-project-card">
          <div class="sq-project-card__header">
            <span class="sq-project-card__tag">FinOps</span>
            <span style="color: #ffe32e;">02 ✦</span>
          </div>
          <h3 class="sq-project-card__title">Agentic FinOps & Rightsizing</h3>
          <p class="sq-project-card__desc">Continuous cloud resource rightsizing and cost anomaly resolution agent.</p>
          <div class="sq-project-card__tags">
            <span class="sq-tag">Kubernetes</span>
            <span class="sq-tag">Go</span>
          </div>
        </div>
      </div>
    </div>
  </div>
`;var n,r,t;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`() => \`
  <div style="background-color: var(--sq-color-cream); min-height: 100vh; color: #000;">
    <!-- Nav -->
    <header class="sq-header">
      <div class="sq-header__inner">
        <a href="#" class="sq-header__logo">
          <span style="font-family: var(--sq-font-family-mono); font-weight: 600;">Parth</span>
        </a>
        <nav class="sq-nav">
          <ul class="sq-nav__list">
            <li><a href="#" class="sq-nav__button is-active">About</a></li>
            <li><a href="#" class="sq-nav__button">Experience</a></li>
            <li><a href="#" class="sq-nav__button">Projects</a></li>
            <li><a href="#" class="sq-nav__button">More</a></li>
          </ul>
        </nav>
        <a href="#" class="sq-nav__button sq-nav__feed">FEED</a>
      </div>
    </header>

    <!-- Hero -->
    <main style="padding: 4rem var(--sq-grid-margin) 6rem; max-width: 1200px; margin: 0 auto;">
      <span class="sq-eyebrow">SOFTWARE ENGINEER // 2026</span>
      <h1 class="u-h1" style="margin-top: 1rem; margin-bottom: 2rem;">
        PARTH <span class="sq-wavy-underline">SINGH</span>
      </h1>
      <p class="u-p1" style="max-width: 650px; margin-bottom: 2rem;">
        Software Engineer building scalable cloud platforms, distributed systems, FinOps, and Agentic AI solutions.
      </p>

      <button class="sq-explore-button" type="button">
        <svg class="sq-explore-button__icon" viewBox="0 0 512 512" height="25" width="25">
          <path fill="rgb(19, 19, 19)" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"></path>
        </svg>
        Explore
      </button>
    </main>

    <!-- Wavy Divider -->
    <div class="sq-wavy-divider" aria-hidden="true">
      <svg viewBox="0 0 1440 90" fill="none" preserveAspectRatio="none" class="sq-wavy-divider__svg">
        <path d="M0,0 L0,45 Q 60,80 120,45 T 240,45 T 360,45 T 480,45 T 600,45 T 720,45 T 840,45 T 960,45 T 1080,45 T 1200,45 T 1320,45 T 1440,45 L 1440,0 Z" fill="#f9f4eb"></path>
        <path d="M0,95 L0,45 Q 60,80 120,45 T 240,45 T 360,45 T 480,45 T 600,45 T 720,45 T 840,45 T 960,45 T 1080,45 T 1200,45 T 1320,45 T 1440,95 Z" fill="#000000"></path>
        <path d="M0,45 Q 60,80 120,45 T 240,45 T 360,45 T 480,45 T 600,45 T 720,45 T 840,45 T 960,45 T 1080,45 T 1200,45 T 1320,45 T 1440,45" fill="none" stroke="#ffe32e" stroke-width="4.5" stroke-linecap="round"></path>
      </svg>
    </div>

    <!-- Contact Form Section -->
    <section style="background: #000; color: #fff; padding: 4rem 1.5rem 6rem; text-align: center;">
      <h3 class="u-h3" style="margin-bottom: 2rem;">Know more about my projects</h3>
      <form class="sq-contact-form">
        <div class="sq-contact-form__item">
          <input type="email" placeholder="E-MAIL" class="sq-contact-form__input" />
        </div>
        <div class="sq-contact-form__item sq-contact-form__item--message">
          <input type="text" placeholder="MESSAGE" class="sq-contact-form__input" />
        </div>
        <button type="submit" class="sq-button sq-button--primary">
          <span>ENTER</span>
          <svg class="sq-icon--arrow" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </button>
      </form>
    </section>
  </div>
\``,...(t=(r=a.parameters)==null?void 0:r.docs)==null?void 0:t.source}}};var i,l,c;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`() => \`
  <div style="background-color: var(--sq-color-cream); min-height: 100vh; color: #000; padding-bottom: 4rem;">
    <!-- Nav -->
    <header class="sq-header">
      <div class="sq-header__inner">
        <a href="#" class="sq-header__logo"><span style="font-family: var(--sq-font-family-mono); font-weight: 600;">Parth</span></a>
        <nav class="sq-nav">
          <ul class="sq-nav__list">
            <li><a href="#" class="sq-nav__button">About</a></li>
            <li><a href="#" class="sq-nav__button is-active">Experience</a></li>
            <li><a href="#" class="sq-nav__button">Projects</a></li>
            <li><a href="#" class="sq-nav__button">More</a></li>
          </ul>
        </nav>
        <a href="#" class="sq-nav__button sq-nav__feed">FEED</a>
      </div>
    </header>

    <div style="padding: 2rem var(--sq-grid-margin); max-width: 1200px; margin: 0 auto; display: flex; gap: 3rem; flex-wrap: wrap;">
      <!-- Left Landscape Card -->
      <div class="sq-landscape-card">
        <div class="sq-landscape-card__header">
          <span class="sq-landscape-card__model">XR65D</span>
          <div class="sq-landscape-card__bars">
            <div class="sq-landscape-card__bar"></div>
            <div class="sq-landscape-card__bar"></div>
            <div class="sq-landscape-card__bar"></div>
          </div>
        </div>
        <div class="sq-landscape-card__media">
          <img src="./img1.png" alt="Scenery" class="sq-landscape-card__img" onerror="this.src='https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=500&auto=format&fit=crop'" />
        </div>
        <div class="sq-landscape-card__footer"><span>(CL) 99</span></div>
      </div>

      <!-- Right Career Progression -->
      <div style="flex: 1; min-width: 300px;">
        <div class="sq-career-timeline">
          <div class="sq-career-timeline__header">
            <span class="sq-career-timeline__company">Flexera GCC</span>
            <span class="sq-career-timeline__badge">Career Progression</span>
          </div>

          <div class="sq-career-timeline__list">
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

        <p class="u-p1" style="margin-top: 1.5rem; line-height: 1.6;">
          Spearheaded the 0-to-1 build of an AI developer platform and marketplace, enabling 10+ teams to build and embed 50+ AI agents and MCPs into their products.
        </p>
      </div>
    </div>
  </div>
\``,...(c=(l=s.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var o,d,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`() => \`
  <div class="u-theme-dark" style="background-color: #000; min-height: 100vh; color: #f9f4eb; padding-bottom: 4rem;">
    <!-- Nav -->
    <header class="sq-header">
      <div class="sq-header__inner">
        <a href="#" class="sq-header__logo"><span style="font-family: var(--sq-font-family-mono); font-weight: 600;">Parth</span></a>
        <nav class="sq-nav">
          <ul class="sq-nav__list">
            <li><a href="#" class="sq-nav__button">About</a></li>
            <li><a href="#" class="sq-nav__button">Experience</a></li>
            <li><a href="#" class="sq-nav__button is-active">Projects</a></li>
            <li><a href="#" class="sq-nav__button">More</a></li>
          </ul>
        </nav>
        <a href="#" class="sq-nav__button sq-nav__feed">FEED</a>
      </div>
    </header>

    <div style="padding: 3rem var(--sq-grid-margin); max-width: 1200px; margin: 0 auto;">
      <h1 class="u-h1" style="margin-bottom: 3rem;">FEATURED <span class="sq-wavy-underline">PROJECTS</span></h1>

      <div style="display: flex; gap: 2rem; flex-wrap: wrap;">
        <!-- Card 1 -->
        <div class="sq-project-card">
          <div class="sq-project-card__header">
            <span class="sq-project-card__tag">Autonomous AI</span>
            <span style="color: #ffe32e;">01 ✦</span>
          </div>
          <h3 class="sq-project-card__title">Marketing Strategy Research Agent</h3>
          <p class="sq-project-card__desc">Swarm of AI agents conducting real-time market research and competitive analysis.</p>
          <div class="sq-project-card__tags">
            <span class="sq-tag">LangGraph</span>
            <span class="sq-tag">Python</span>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="sq-project-card">
          <div class="sq-project-card__header">
            <span class="sq-project-card__tag">FinOps</span>
            <span style="color: #ffe32e;">02 ✦</span>
          </div>
          <h3 class="sq-project-card__title">Agentic FinOps & Rightsizing</h3>
          <p class="sq-project-card__desc">Continuous cloud resource rightsizing and cost anomaly resolution agent.</p>
          <div class="sq-project-card__tags">
            <span class="sq-tag">Kubernetes</span>
            <span class="sq-tag">Go</span>
          </div>
        </div>
      </div>
    </div>
  </div>
\``,...(p=(d=e.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const v=["AboutPageTemplate","ExperiencePageTemplate","ProjectsPageTemplate"];export{a as AboutPageTemplate,s as ExperiencePageTemplate,e as ProjectsPageTemplate,v as __namedExportsOrder,_ as default};
