const I={title:"Components/Footer",tags:["autodocs"],parameters:{layout:"fullscreen"},argTypes:{activeItem:{control:{type:"select"},options:["none","education","skills","email","achievements"],defaultValue:"none",description:"Force a link to display in the active/hovered state with yellow text and animated star"}}},h=`
  <script>
    (function() {
      function updateClock() {
        var clockEl = document.getElementById('sqFooterClock');
        if (!clockEl) return;
        var now = new Date();
        var h = String(now.getHours()).padStart(2, '0');
        var m = String(now.getMinutes()).padStart(2, '0');
        clockEl.textContent = h + ':' + m;
      }
      updateClock();
      setInterval(updateClock, 1000);
    })();
  <\/script>
`,n=({activeItem:t="none"})=>`
    ${h}
    <footer class="sq-footer--editorial">
      <div class="sq-footer__container">
        <!-- Top Row: My Work Badge + Navigation Columns -->
        <div class="sq-footer__main-row">
          <div>
            <a href="javascript:void(0)" onclick="event.preventDefault();" class="sq-footer__work-badge">
              <span>MY WORK</span>
              <span class="sq-footer__work-pill">VISIT</span>
            </a>
          </div>

          <div class="sq-footer__columns">
            <!-- Left Column: Site Sections -->
            <div class="sq-footer__col">
              <ul class="sq-footer__col-list">
                <li>
                  <a href="javascript:void(0)"
                     onclick="event.preventDefault();"
                     class="sq-footer__link ${t==="education"?"is-forced-hover":""}">
                    <span class="sq-footer__link-text">EDUCATION</span>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)"
                     onclick="event.preventDefault();"
                     class="sq-footer__link ${t==="skills"?"is-forced-hover":""}">
                    <span class="sq-footer__link-text">SKILLS</span>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)"
                     onclick="event.preventDefault();"
                     class="sq-footer__link ${t==="email"?"is-forced-hover":""}">
                    <span class="sq-footer__link-text">EMAIL</span>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)"
                     onclick="event.preventDefault();"
                     class="sq-footer__link ${t==="achievements"?"is-forced-hover":""}">
                    <span class="sq-footer__link-text">ACHIEVEMENTS</span>
                  </a>
                </li>
              </ul>
            </div>

            <!-- Right Column: External Socials -->
            <div class="sq-footer__col">
              <ul class="sq-footer__col-list">
                <li>
                  <a href="javascript:void(0)"
                     onclick="event.preventDefault();"
                     class="sq-footer__link sq-footer__link--external">
                    <span class="sq-footer__link-text">RESUME</span>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)"
                     onclick="event.preventDefault();"
                     class="sq-footer__link sq-footer__link--external">
                    <span class="sq-footer__link-text">LINKEDIN</span>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)"
                     onclick="event.preventDefault();"
                     class="sq-footer__link sq-footer__link--external">
                    <span class="sq-footer__link-text">GITHUB</span>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)"
                     onclick="event.preventDefault();"
                     class="sq-footer__link sq-footer__link--external">
                    <span class="sq-footer__link-text">INSTAGRAM</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Bottom Row: Digital Clock, Star Glyphs, Meta, and To-Top Button -->
        <div class="sq-footer__bottom-row">
          <div class="sq-footer__time-wrap">
            <div id="sqFooterClock" class="sq-footer__digital-clock">03:48</div>
            <div class="sq-footer__stars">
              <span>✦</span>
              <span>✦</span>
              <span>✦</span>
            </div>
          </div>

          <div class="sq-footer__totop-wrap">
            <span class="sq-footer__meta-tag">3D2Y</span>
            <button type="button"
                    onclick="window.scrollTo({ top: 0, behavior: 'smooth' });"
                    class="sq-footer__totop-btn">
              <span>GO TO TOP</span>
              <span>⤴ ⤴ ⤴</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  `,e=n.bind({});e.args={activeItem:"education"};const o=()=>`
  <footer class="sq-footer">
    <div class="sq-footer__inner">
      <ul style="display: flex; gap: 1.5rem; list-style: none; margin: 0; padding: 0;">
        <li><a href="javascript:void(0)" onclick="event.preventDefault();" style="color: inherit; text-decoration: none;">GitHub ↗</a></li>
        <li><a href="javascript:void(0)" onclick="event.preventDefault();" style="color: inherit; text-decoration: none;">LinkedIn ↗</a></li>
        <li><a href="javascript:void(0)" onclick="event.preventDefault();" style="color: inherit; text-decoration: none;">Resume ↗</a></li>
      </ul>
      <div style="opacity: 0.6; font-size: 0.75rem;">
        © 2026 STUDIO ARCHIVE
      </div>
    </div>
  </footer>
`;var s,a,i,l,r;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`({
  activeItem = 'none'
}) => {
  return \`
    \${clockScript}
    <footer class="sq-footer--editorial">
      <div class="sq-footer__container">
        <!-- Top Row: My Work Badge + Navigation Columns -->
        <div class="sq-footer__main-row">
          <div>
            <a href="javascript:void(0)" onclick="event.preventDefault();" class="sq-footer__work-badge">
              <span>MY WORK</span>
              <span class="sq-footer__work-pill">VISIT</span>
            </a>
          </div>

          <div class="sq-footer__columns">
            <!-- Left Column: Site Sections -->
            <div class="sq-footer__col">
              <ul class="sq-footer__col-list">
                <li>
                  <a href="javascript:void(0)"
                     onclick="event.preventDefault();"
                     class="sq-footer__link \${activeItem === 'education' ? 'is-forced-hover' : ''}">
                    <span class="sq-footer__link-text">EDUCATION</span>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)"
                     onclick="event.preventDefault();"
                     class="sq-footer__link \${activeItem === 'skills' ? 'is-forced-hover' : ''}">
                    <span class="sq-footer__link-text">SKILLS</span>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)"
                     onclick="event.preventDefault();"
                     class="sq-footer__link \${activeItem === 'email' ? 'is-forced-hover' : ''}">
                    <span class="sq-footer__link-text">EMAIL</span>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)"
                     onclick="event.preventDefault();"
                     class="sq-footer__link \${activeItem === 'achievements' ? 'is-forced-hover' : ''}">
                    <span class="sq-footer__link-text">ACHIEVEMENTS</span>
                  </a>
                </li>
              </ul>
            </div>

            <!-- Right Column: External Socials -->
            <div class="sq-footer__col">
              <ul class="sq-footer__col-list">
                <li>
                  <a href="javascript:void(0)"
                     onclick="event.preventDefault();"
                     class="sq-footer__link sq-footer__link--external">
                    <span class="sq-footer__link-text">RESUME</span>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)"
                     onclick="event.preventDefault();"
                     class="sq-footer__link sq-footer__link--external">
                    <span class="sq-footer__link-text">LINKEDIN</span>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)"
                     onclick="event.preventDefault();"
                     class="sq-footer__link sq-footer__link--external">
                    <span class="sq-footer__link-text">GITHUB</span>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)"
                     onclick="event.preventDefault();"
                     class="sq-footer__link sq-footer__link--external">
                    <span class="sq-footer__link-text">INSTAGRAM</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Bottom Row: Digital Clock, Star Glyphs, Meta, and To-Top Button -->
        <div class="sq-footer__bottom-row">
          <div class="sq-footer__time-wrap">
            <div id="sqFooterClock" class="sq-footer__digital-clock">03:48</div>
            <div class="sq-footer__stars">
              <span>✦</span>
              <span>✦</span>
              <span>✦</span>
            </div>
          </div>

          <div class="sq-footer__totop-wrap">
            <span class="sq-footer__meta-tag">3D2Y</span>
            <button type="button"
                    onclick="window.scrollTo({ top: 0, behavior: 'smooth' });"
                    class="sq-footer__totop-btn">
              <span>GO TO TOP</span>
              <span>⤴ ⤴ ⤴</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  \`;
}`,...(i=(a=n.parameters)==null?void 0:a.docs)==null?void 0:i.source},description:{story:`1. AUTHENTIC EDITORIAL FOOTER (Replica from Live Site Screenshots)
Hovering over any link animates a yellow star ✦ to the left with elastic easing
and turns the label text to vibrant yellow (#ffe32e).`,...(r=(l=n.parameters)==null?void 0:l.docs)==null?void 0:r.description}}};var c,v,p,f,_;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`({
  activeItem = 'none'
}) => {
  return \`
    \${clockScript}
    <footer class="sq-footer--editorial">
      <div class="sq-footer__container">
        <!-- Top Row: My Work Badge + Navigation Columns -->
        <div class="sq-footer__main-row">
          <div>
            <a href="javascript:void(0)" onclick="event.preventDefault();" class="sq-footer__work-badge">
              <span>MY WORK</span>
              <span class="sq-footer__work-pill">VISIT</span>
            </a>
          </div>

          <div class="sq-footer__columns">
            <!-- Left Column: Site Sections -->
            <div class="sq-footer__col">
              <ul class="sq-footer__col-list">
                <li>
                  <a href="javascript:void(0)"
                     onclick="event.preventDefault();"
                     class="sq-footer__link \${activeItem === 'education' ? 'is-forced-hover' : ''}">
                    <span class="sq-footer__link-text">EDUCATION</span>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)"
                     onclick="event.preventDefault();"
                     class="sq-footer__link \${activeItem === 'skills' ? 'is-forced-hover' : ''}">
                    <span class="sq-footer__link-text">SKILLS</span>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)"
                     onclick="event.preventDefault();"
                     class="sq-footer__link \${activeItem === 'email' ? 'is-forced-hover' : ''}">
                    <span class="sq-footer__link-text">EMAIL</span>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)"
                     onclick="event.preventDefault();"
                     class="sq-footer__link \${activeItem === 'achievements' ? 'is-forced-hover' : ''}">
                    <span class="sq-footer__link-text">ACHIEVEMENTS</span>
                  </a>
                </li>
              </ul>
            </div>

            <!-- Right Column: External Socials -->
            <div class="sq-footer__col">
              <ul class="sq-footer__col-list">
                <li>
                  <a href="javascript:void(0)"
                     onclick="event.preventDefault();"
                     class="sq-footer__link sq-footer__link--external">
                    <span class="sq-footer__link-text">RESUME</span>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)"
                     onclick="event.preventDefault();"
                     class="sq-footer__link sq-footer__link--external">
                    <span class="sq-footer__link-text">LINKEDIN</span>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)"
                     onclick="event.preventDefault();"
                     class="sq-footer__link sq-footer__link--external">
                    <span class="sq-footer__link-text">GITHUB</span>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)"
                     onclick="event.preventDefault();"
                     class="sq-footer__link sq-footer__link--external">
                    <span class="sq-footer__link-text">INSTAGRAM</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Bottom Row: Digital Clock, Star Glyphs, Meta, and To-Top Button -->
        <div class="sq-footer__bottom-row">
          <div class="sq-footer__time-wrap">
            <div id="sqFooterClock" class="sq-footer__digital-clock">03:48</div>
            <div class="sq-footer__stars">
              <span>✦</span>
              <span>✦</span>
              <span>✦</span>
            </div>
          </div>

          <div class="sq-footer__totop-wrap">
            <span class="sq-footer__meta-tag">3D2Y</span>
            <button type="button"
                    onclick="window.scrollTo({ top: 0, behavior: 'smooth' });"
                    class="sq-footer__totop-btn">
              <span>GO TO TOP</span>
              <span>⤴ ⤴ ⤴</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  \`;
}`,...(p=(v=e.parameters)==null?void 0:v.docs)==null?void 0:p.source},description:{story:"2. FORCED HOVER STATE (Shows EDUCATION in active hover state)",...(_=(f=e.parameters)==null?void 0:f.docs)==null?void 0:_.description}}};var d,k,u,q,m;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`() => \`
  <footer class="sq-footer">
    <div class="sq-footer__inner">
      <ul style="display: flex; gap: 1.5rem; list-style: none; margin: 0; padding: 0;">
        <li><a href="javascript:void(0)" onclick="event.preventDefault();" style="color: inherit; text-decoration: none;">GitHub ↗</a></li>
        <li><a href="javascript:void(0)" onclick="event.preventDefault();" style="color: inherit; text-decoration: none;">LinkedIn ↗</a></li>
        <li><a href="javascript:void(0)" onclick="event.preventDefault();" style="color: inherit; text-decoration: none;">Resume ↗</a></li>
      </ul>
      <div style="opacity: 0.6; font-size: 0.75rem;">
        © 2026 STUDIO ARCHIVE
      </div>
    </div>
  </footer>
\``,...(u=(k=o.parameters)==null?void 0:k.docs)==null?void 0:u.source},description:{story:"3. MINIMAL COMPACT FOOTER",...(m=(q=o.parameters)==null?void 0:q.docs)==null?void 0:m.description}}};const x=["EditorialInteractiveFooter","ForcedHoverState","MinimalDefault"];export{n as EditorialInteractiveFooter,e as ForcedHoverState,o as MinimalDefault,x as __namedExportsOrder,I as default};
