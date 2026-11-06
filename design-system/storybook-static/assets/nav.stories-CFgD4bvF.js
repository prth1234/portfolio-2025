const b={title:"Components/Navigation",tags:["autodocs"],argTypes:{activeTab:{control:{type:"select"},options:["About","Experience","Projects","More"],defaultValue:"About"},theme:{control:{type:"select"},options:["light","dark"],defaultValue:"light"}}},a=({activeTab:n="About",theme:l="light"})=>`
    <div class="${l==="dark"?"u-theme-dark":"u-theme-light"}" style="width: 100%; min-height: 120px;">
      <header class="sq-header">
        <div class="sq-header__inner">
          <a href="#" class="sq-header__logo">
            <img src="./avatar.png" alt="Parth" class="sq-header__avatar" onerror="this.style.background='#ffe32e'" />
            <span class="sq-header__logo-text">Parth</span>
          </a>

          <nav class="sq-nav">
            <ul class="sq-nav__list">
              ${["About","Experience","Projects","More"].map(r=>`
                <li class="sq-nav__item">
                  <a href="#${r.toLowerCase()}" class="sq-nav__button ${r===n?"is-active":""}">
                    ${r}
                  </a>
                </li>
              `).join("")}
            </ul>
          </nav>

          <a href="#feed" class="sq-nav__button sq-nav__feed">FEED</a>
        </div>
      </header>
    </div>
  `,e=a.bind({});e.args={activeTab:"Projects",theme:"dark"};const s=({activeTab:n="Experience"})=>`
    <div style="padding: 2rem; display: flex; justify-content: center;">
      <nav class="sq-nav">
        <ul class="sq-nav__list">
          ${["About","Experience","Projects","More"].map(t=>`
            <li class="sq-nav__item">
              <a href="#" class="sq-nav__button ${t===n?"is-active":""}">
                ${t}
              </a>
            </li>
          `).join("")}
        </ul>
      </nav>
    </div>
  `;var c,o,i;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`({
  activeTab = 'About',
  theme = 'light'
}) => {
  const tabs = ['About', 'Experience', 'Projects', 'More'];
  const themeClass = theme === 'dark' ? 'u-theme-dark' : 'u-theme-light';
  return \`
    <div class="\${themeClass}" style="width: 100%; min-height: 120px;">
      <header class="sq-header">
        <div class="sq-header__inner">
          <a href="#" class="sq-header__logo">
            <img src="./avatar.png" alt="Parth" class="sq-header__avatar" onerror="this.style.background='#ffe32e'" />
            <span class="sq-header__logo-text">Parth</span>
          </a>

          <nav class="sq-nav">
            <ul class="sq-nav__list">
              \${tabs.map(tab => \`
                <li class="sq-nav__item">
                  <a href="#\${tab.toLowerCase()}" class="sq-nav__button \${tab === activeTab ? 'is-active' : ''}">
                    \${tab}
                  </a>
                </li>
              \`).join('')}
            </ul>
          </nav>

          <a href="#feed" class="sq-nav__button sq-nav__feed">FEED</a>
        </div>
      </header>
    </div>
  \`;
}`,...(i=(o=a.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var d,h,v;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`({
  activeTab = 'About',
  theme = 'light'
}) => {
  const tabs = ['About', 'Experience', 'Projects', 'More'];
  const themeClass = theme === 'dark' ? 'u-theme-dark' : 'u-theme-light';
  return \`
    <div class="\${themeClass}" style="width: 100%; min-height: 120px;">
      <header class="sq-header">
        <div class="sq-header__inner">
          <a href="#" class="sq-header__logo">
            <img src="./avatar.png" alt="Parth" class="sq-header__avatar" onerror="this.style.background='#ffe32e'" />
            <span class="sq-header__logo-text">Parth</span>
          </a>

          <nav class="sq-nav">
            <ul class="sq-nav__list">
              \${tabs.map(tab => \`
                <li class="sq-nav__item">
                  <a href="#\${tab.toLowerCase()}" class="sq-nav__button \${tab === activeTab ? 'is-active' : ''}">
                    \${tab}
                  </a>
                </li>
              \`).join('')}
            </ul>
          </nav>

          <a href="#feed" class="sq-nav__button sq-nav__feed">FEED</a>
        </div>
      </header>
    </div>
  \`;
}`,...(v=(h=e.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var _,u,m;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`({
  activeTab = 'Experience'
}) => {
  const tabs = ['About', 'Experience', 'Projects', 'More'];
  return \`
    <div style="padding: 2rem; display: flex; justify-content: center;">
      <nav class="sq-nav">
        <ul class="sq-nav__list">
          \${tabs.map(tab => \`
            <li class="sq-nav__item">
              <a href="#" class="sq-nav__button \${tab === activeTab ? 'is-active' : ''}">
                \${tab}
              </a>
            </li>
          \`).join('')}
        </ul>
      </nav>
    </div>
  \`;
}`,...(m=(u=s.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};const q=["HeaderBar","DarkThemeNav","PillNavOnly"];export{e as DarkThemeNav,a as HeaderBar,s as PillNavOnly,q as __namedExportsOrder,b as default};
