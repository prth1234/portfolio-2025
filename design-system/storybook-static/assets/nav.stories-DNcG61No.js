const C={title:"Components/Navigation",tags:["autodocs"],argTypes:{brandText:{control:"text",defaultValue:"PORTFOLIO"},brandSubtext:{control:"text",defaultValue:"ARCHIVE"},activeTab:{control:{type:"select"},options:["About","Experience","Projects","More"],defaultValue:"Experience"},variant:{control:{type:"select"},options:["editorial","capsule"],defaultValue:"editorial"},theme:{control:{type:"select"},options:["light","dark"],defaultValue:"light"}}},g=`
  <script>
    (function() {
      window.handleSqTabClick = function(el, evt) {
        if (evt) evt.preventDefault();
        var navList = el.closest('.sq-nav__list');
        if (!navList) return;
        var allButtons = navList.querySelectorAll('.sq-nav__button');
        allButtons.forEach(function(b) { b.classList.remove('is-active', 'w--current'); });
        el.classList.add('is-active', 'w--current');
      };
    })();
  <\/script>
`,a=({brandText:i="PORTFOLIO",brandSubtext:r="ARCHIVE",activeTab:t="Experience",variant:x="editorial",theme:T="light"})=>`
    ${g}
    <div class="${T==="dark"?"u-theme-dark":"u-theme-light"}" style="width: 100%; min-height: 120px;">
      <header class="sq-header">
        <div class="sq-header__inner">
          <!-- Brand Badge on Left (Exact match to real app in Screenshot 5) -->
          <a href="javascript:void(0)" onclick="event.preventDefault();" class="sq-brand-badge">
            <span>${i}</span>
            <span class="sq-brand-badge__star">✦</span>
            <span>${r}</span>
          </a>

          <!-- Pill Navigation in Center -->
          <nav class="sq-nav ${x==="capsule"?"sq-nav--capsule":""}">
            <ul class="sq-nav__list">
              ${["About","Experience","Projects","More"].map(c=>`
                <li class="sq-nav__item">
                  <a href="javascript:void(0)"
                     onclick="window.handleSqTabClick(this, event)"
                     class="sq-nav__button ${c===t?"is-active w--current":""}">
                    ${c}
                  </a>
                </li>
              `).join("")}
            </ul>
          </nav>

          <!-- Feed Button on Right -->
          <a href="javascript:void(0)" onclick="event.preventDefault();" class="sq-feed-button">
            FEED
          </a>
        </div>
      </header>
    </div>
  `,n=a.bind({});n.args={brandText:"STUDIO",brandSubtext:"SYSTEM",activeTab:"About",variant:"capsule",theme:"light"};const e=a.bind({});e.args={brandText:"PROJECTS",brandSubtext:"DARK",activeTab:"Projects",variant:"editorial",theme:"dark"};const s=({activeTab:i="Experience"})=>`
    ${g}
    <div style="padding: 2rem; display: flex; justify-content: center; background: #f9f4eb;">
      <nav class="sq-nav">
        <ul class="sq-nav__list">
          ${["About","Experience","Projects","More"].map(t=>`
            <li class="sq-nav__item">
              <a href="javascript:void(0)"
                 onclick="window.handleSqTabClick(this, event)"
                 class="sq-nav__button ${t===i?"is-active w--current":""}">
                ${t}
              </a>
            </li>
          `).join("")}
        </ul>
      </nav>
    </div>
  `;var l,o,v;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`({
  brandText = 'PORTFOLIO',
  brandSubtext = 'ARCHIVE',
  activeTab = 'Experience',
  variant = 'editorial',
  theme = 'light'
}) => {
  const tabs = ['About', 'Experience', 'Projects', 'More'];
  const themeClass = theme === 'dark' ? 'u-theme-dark' : 'u-theme-light';
  const navVariantClass = variant === 'capsule' ? 'sq-nav--capsule' : '';
  return \`
    \${setupTabSwitcher}
    <div class="\${themeClass}" style="width: 100%; min-height: 120px;">
      <header class="sq-header">
        <div class="sq-header__inner">
          <!-- Brand Badge on Left (Exact match to real app in Screenshot 5) -->
          <a href="javascript:void(0)" onclick="event.preventDefault();" class="sq-brand-badge">
            <span>\${brandText}</span>
            <span class="sq-brand-badge__star">✦</span>
            <span>\${brandSubtext}</span>
          </a>

          <!-- Pill Navigation in Center -->
          <nav class="sq-nav \${navVariantClass}">
            <ul class="sq-nav__list">
              \${tabs.map(tab => \`
                <li class="sq-nav__item">
                  <a href="javascript:void(0)"
                     onclick="window.handleSqTabClick(this, event)"
                     class="sq-nav__button \${tab === activeTab ? 'is-active w--current' : ''}">
                    \${tab}
                  </a>
                </li>
              \`).join('')}
            </ul>
          </nav>

          <!-- Feed Button on Right -->
          <a href="javascript:void(0)" onclick="event.preventDefault();" class="sq-feed-button">
            FEED
          </a>
        </div>
      </header>
    </div>
  \`;
}`,...(v=(o=a.parameters)==null?void 0:o.docs)==null?void 0:v.source}}};var d,u,p;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`({
  brandText = 'PORTFOLIO',
  brandSubtext = 'ARCHIVE',
  activeTab = 'Experience',
  variant = 'editorial',
  theme = 'light'
}) => {
  const tabs = ['About', 'Experience', 'Projects', 'More'];
  const themeClass = theme === 'dark' ? 'u-theme-dark' : 'u-theme-light';
  const navVariantClass = variant === 'capsule' ? 'sq-nav--capsule' : '';
  return \`
    \${setupTabSwitcher}
    <div class="\${themeClass}" style="width: 100%; min-height: 120px;">
      <header class="sq-header">
        <div class="sq-header__inner">
          <!-- Brand Badge on Left (Exact match to real app in Screenshot 5) -->
          <a href="javascript:void(0)" onclick="event.preventDefault();" class="sq-brand-badge">
            <span>\${brandText}</span>
            <span class="sq-brand-badge__star">✦</span>
            <span>\${brandSubtext}</span>
          </a>

          <!-- Pill Navigation in Center -->
          <nav class="sq-nav \${navVariantClass}">
            <ul class="sq-nav__list">
              \${tabs.map(tab => \`
                <li class="sq-nav__item">
                  <a href="javascript:void(0)"
                     onclick="window.handleSqTabClick(this, event)"
                     class="sq-nav__button \${tab === activeTab ? 'is-active w--current' : ''}">
                    \${tab}
                  </a>
                </li>
              \`).join('')}
            </ul>
          </nav>

          <!-- Feed Button on Right -->
          <a href="javascript:void(0)" onclick="event.preventDefault();" class="sq-feed-button">
            FEED
          </a>
        </div>
      </header>
    </div>
  \`;
}`,...(p=(u=n.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var b,h,m;e.parameters={...e.parameters,docs:{...(b=e.parameters)==null?void 0:b.docs,source:{originalSource:`({
  brandText = 'PORTFOLIO',
  brandSubtext = 'ARCHIVE',
  activeTab = 'Experience',
  variant = 'editorial',
  theme = 'light'
}) => {
  const tabs = ['About', 'Experience', 'Projects', 'More'];
  const themeClass = theme === 'dark' ? 'u-theme-dark' : 'u-theme-light';
  const navVariantClass = variant === 'capsule' ? 'sq-nav--capsule' : '';
  return \`
    \${setupTabSwitcher}
    <div class="\${themeClass}" style="width: 100%; min-height: 120px;">
      <header class="sq-header">
        <div class="sq-header__inner">
          <!-- Brand Badge on Left (Exact match to real app in Screenshot 5) -->
          <a href="javascript:void(0)" onclick="event.preventDefault();" class="sq-brand-badge">
            <span>\${brandText}</span>
            <span class="sq-brand-badge__star">✦</span>
            <span>\${brandSubtext}</span>
          </a>

          <!-- Pill Navigation in Center -->
          <nav class="sq-nav \${navVariantClass}">
            <ul class="sq-nav__list">
              \${tabs.map(tab => \`
                <li class="sq-nav__item">
                  <a href="javascript:void(0)"
                     onclick="window.handleSqTabClick(this, event)"
                     class="sq-nav__button \${tab === activeTab ? 'is-active w--current' : ''}">
                    \${tab}
                  </a>
                </li>
              \`).join('')}
            </ul>
          </nav>

          <!-- Feed Button on Right -->
          <a href="javascript:void(0)" onclick="event.preventDefault();" class="sq-feed-button">
            FEED
          </a>
        </div>
      </header>
    </div>
  \`;
}`,...(m=(h=e.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};var _,q,f;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`({
  activeTab = 'Experience'
}) => {
  const tabs = ['About', 'Experience', 'Projects', 'More'];
  return \`
    \${setupTabSwitcher}
    <div style="padding: 2rem; display: flex; justify-content: center; background: #f9f4eb;">
      <nav class="sq-nav">
        <ul class="sq-nav__list">
          \${tabs.map(tab => \`
            <li class="sq-nav__item">
              <a href="javascript:void(0)"
                 onclick="window.handleSqTabClick(this, event)"
                 class="sq-nav__button \${tab === activeTab ? 'is-active w--current' : ''}">
                \${tab}
              </a>
            </li>
          \`).join('')}
        </ul>
      </nav>
    </div>
  \`;
}`,...(f=(q=s.parameters)==null?void 0:q.docs)==null?void 0:f.source}}};const S=["AuthenticEditorialNav","CapsuleTrackNav","DarkThemeNav","PillNavOnly"];export{a as AuthenticEditorialNav,n as CapsuleTrackNav,e as DarkThemeNav,s as PillNavOnly,S as __namedExportsOrder,C as default};
