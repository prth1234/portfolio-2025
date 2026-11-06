/* empty css                     */const k={title:"Components/Contact Form",tags:["autodocs"],parameters:{layout:"fullscreen"},argTypes:{title:{control:"text",defaultValue:"Connect with me"},state:{control:{type:"select"},options:["idle","loading","success","error"],defaultValue:"idle"}}},V=`
  <svg class="sq-contact-form__icon-arrow" viewBox="0 0 20 20" fill="currentColor">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M5 9L5 4H3V9V10V11L13 11V13H11V15H13V13H15V11L17 11V9H15V7H13V5H11V7L13 7V9H5Z" />
  </svg>
`,n=({title:S="Connect with me",state:i="idle"})=>`
    <div style="background-color: #000000; color: #ffffff; padding: 3.5rem 1.5rem 0; min-height: 380px; position: relative;">
      <!-- Centered diamond accent from the live app -->
      <div style="text-align: center; margin-bottom: 1.5rem; color: #ffffff; opacity: 0.85;">
        <svg width="14" height="14" viewBox="0 0 20 20" fill="none" style="display: inline-block;">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M9 5H11V7H13V9H15V11H13V13H11V15H9V13H7V11H5V9H7V7H9V5Z" fill="currentColor"></path>
        </svg>
      </div>

      <div style="max-width: 800px; margin: 0 auto; text-align: center;">
        <h3 class="u-h2" style="font-size: clamp(1.75rem, 1.2rem + 1.8vi, 2.75rem); font-weight: 500; margin-bottom: 1.75rem; letter-spacing: -0.02em;">
          ${S}
        </h3>

        <form id="liveContactForm"
              class="sq-contact-form sq-contact-form--authentic ${i==="loading"?"is-loading":""}"
              onsubmit="
                event.preventDefault();
                var f = this;
                var msg = document.getElementById('liveFormSuccessMsg');
                f.classList.add('is-loading');
                if (msg) msg.style.display = 'none';
                setTimeout(function() {
                  f.classList.remove('is-loading');
                  if (msg) msg.style.display = 'block';
                }, 1200);
              ">
          <div class="sq-contact-form__item">
            <input type="email"
                   name="email"
                   required
                   placeholder="E-MAIL"
                   class="sq-contact-form__input"
                   autocomplete="email" />
          </div>

          <div class="sq-contact-form__item sq-contact-form__item--message">
            <input type="text"
                   name="message"
                   required
                   placeholder="MESSAGE"
                   class="sq-contact-form__input"
                   autocomplete="off" />
          </div>

          <div class="sq-contact-form__submit-wrap">
            <button type="submit" class="sq-contact-form__button">
              ${V}
              <span>ENTER</span>
            </button>

            <!-- Loading Spinner matching site -->
            <div class="sq-contact-form__loader" role="status" aria-live="polite">
              <div class="sq-contact-form__spinner" aria-hidden="true">
                <div class="sq-contact-form__spinner-box"></div>
                <div class="sq-contact-form__spinner-box"></div>
                <div class="sq-contact-form__spinner-box"></div>
                <div class="sq-contact-form__spinner-box"></div>
              </div>
              <span class="sq-contact-form__loader-text">SENDING...</span>
            </div>
          </div>
        </form>

        <!-- Success Message -->
        <div id="liveFormSuccessMsg"
             class="sq-contact-form__message sq-contact-form__message--success"
             style="display: ${i==="success"?"block":"none"}; margin-top: 1.5rem;">
          Thank you! I will get in touch with you shortly.
        </div>
      </div>

      <!-- Yellow Curvy Wavy Divider joining Black section to Cream Section -->
      <div class="sq-wavy-divider" aria-hidden="true" style="margin-top: 2rem;">
        <svg viewBox="0 0 1440 90" fill="none" preserveAspectRatio="none" class="sq-wavy-divider__svg">
          <path d="M0,0 L0,45 Q 60,80 120,45 T 240,45 T 360,45 T 480,45 T 600,45 T 720,45 T 840,45 T 960,45 T 1080,45 T 1200,45 T 1320,45 T 1440,45 L 1440,0 Z" fill="#000000"></path>
          <path d="M0,95 L0,45 Q 60,80 120,45 T 240,45 T 360,45 T 480,45 T 600,45 T 720,45 T 840,45 T 960,45 T 1080,45 T 1200,45 T 1320,45 T 1440,95 Z" fill="#f9f4eb"></path>
          <path d="M0,45 Q 60,80 120,45 T 240,45 T 360,45 T 480,45 T 600,45 T 720,45 T 840,45 T 960,45 T 1080,45 T 1200,45 T 1320,45 T 1440,45" fill="none" stroke="#ffe32e" stroke-width="4.5" stroke-linecap="round"></path>
        </svg>
      </div>
    </div>
  `,t=n.bind({});t.args={title:"Know more about my projects",state:"idle"};const e=n.bind({});e.args={title:"Connect with me",state:"loading"};const s=n.bind({});s.args={title:"Connect with me",state:"success"};var o,a,c,r,l;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`({
  title = 'Connect with me',
  state = 'idle'
}) => {
  const isInitiallyLoading = state === 'loading';
  const isInitiallySuccess = state === 'success';
  return \`
    <div style="background-color: #000000; color: #ffffff; padding: 3.5rem 1.5rem 0; min-height: 380px; position: relative;">
      <!-- Centered diamond accent from the live app -->
      <div style="text-align: center; margin-bottom: 1.5rem; color: #ffffff; opacity: 0.85;">
        <svg width="14" height="14" viewBox="0 0 20 20" fill="none" style="display: inline-block;">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M9 5H11V7H13V9H15V11H13V13H11V15H9V13H7V11H5V9H7V7H9V5Z" fill="currentColor"></path>
        </svg>
      </div>

      <div style="max-width: 800px; margin: 0 auto; text-align: center;">
        <h3 class="u-h2" style="font-size: clamp(1.75rem, 1.2rem + 1.8vi, 2.75rem); font-weight: 500; margin-bottom: 1.75rem; letter-spacing: -0.02em;">
          \${title}
        </h3>

        <form id="liveContactForm"
              class="sq-contact-form sq-contact-form--authentic \${isInitiallyLoading ? 'is-loading' : ''}"
              onsubmit="
                event.preventDefault();
                var f = this;
                var msg = document.getElementById('liveFormSuccessMsg');
                f.classList.add('is-loading');
                if (msg) msg.style.display = 'none';
                setTimeout(function() {
                  f.classList.remove('is-loading');
                  if (msg) msg.style.display = 'block';
                }, 1200);
              ">
          <div class="sq-contact-form__item">
            <input type="email"
                   name="email"
                   required
                   placeholder="E-MAIL"
                   class="sq-contact-form__input"
                   autocomplete="email" />
          </div>

          <div class="sq-contact-form__item sq-contact-form__item--message">
            <input type="text"
                   name="message"
                   required
                   placeholder="MESSAGE"
                   class="sq-contact-form__input"
                   autocomplete="off" />
          </div>

          <div class="sq-contact-form__submit-wrap">
            <button type="submit" class="sq-contact-form__button">
              \${returnArrowSvg}
              <span>ENTER</span>
            </button>

            <!-- Loading Spinner matching site -->
            <div class="sq-contact-form__loader" role="status" aria-live="polite">
              <div class="sq-contact-form__spinner" aria-hidden="true">
                <div class="sq-contact-form__spinner-box"></div>
                <div class="sq-contact-form__spinner-box"></div>
                <div class="sq-contact-form__spinner-box"></div>
                <div class="sq-contact-form__spinner-box"></div>
              </div>
              <span class="sq-contact-form__loader-text">SENDING...</span>
            </div>
          </div>
        </form>

        <!-- Success Message -->
        <div id="liveFormSuccessMsg"
             class="sq-contact-form__message sq-contact-form__message--success"
             style="display: \${isInitiallySuccess ? 'block' : 'none'}; margin-top: 1.5rem;">
          Thank you! I will get in touch with you shortly.
        </div>
      </div>

      <!-- Yellow Curvy Wavy Divider joining Black section to Cream Section -->
      <div class="sq-wavy-divider" aria-hidden="true" style="margin-top: 2rem;">
        <svg viewBox="0 0 1440 90" fill="none" preserveAspectRatio="none" class="sq-wavy-divider__svg">
          <path d="M0,0 L0,45 Q 60,80 120,45 T 240,45 T 360,45 T 480,45 T 600,45 T 720,45 T 840,45 T 960,45 T 1080,45 T 1200,45 T 1320,45 T 1440,45 L 1440,0 Z" fill="#000000"></path>
          <path d="M0,95 L0,45 Q 60,80 120,45 T 240,45 T 360,45 T 480,45 T 600,45 T 720,45 T 840,45 T 960,45 T 1080,45 T 1200,45 T 1320,45 T 1440,95 Z" fill="#f9f4eb"></path>
          <path d="M0,45 Q 60,80 120,45 T 240,45 T 360,45 T 480,45 T 600,45 T 720,45 T 840,45 T 960,45 T 1080,45 T 1200,45 T 1320,45 T 1440,45" fill="none" stroke="#ffe32e" stroke-width="4.5" stroke-linecap="round"></path>
        </svg>
      </div>
    </div>
  \`;
}`,...(c=(a=n.parameters)==null?void 0:a.docs)==null?void 0:c.source},description:{story:`1. AUTHENTIC LIVE APP CONTACT FORM
Exact 1:1 replica from the live portfolio:
- Pure black canvas background
- White input capsules with monospace placeholder and blinking indicator
- Yellow rounded pill submit button with return arrow
- Yellow curvy wavy divider at the bottom
- Live interactive submission with spinner and success message`,...(l=(r=n.parameters)==null?void 0:r.docs)==null?void 0:l.description}}};var d,m,p,v,f;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`({
  title = 'Connect with me',
  state = 'idle'
}) => {
  const isInitiallyLoading = state === 'loading';
  const isInitiallySuccess = state === 'success';
  return \`
    <div style="background-color: #000000; color: #ffffff; padding: 3.5rem 1.5rem 0; min-height: 380px; position: relative;">
      <!-- Centered diamond accent from the live app -->
      <div style="text-align: center; margin-bottom: 1.5rem; color: #ffffff; opacity: 0.85;">
        <svg width="14" height="14" viewBox="0 0 20 20" fill="none" style="display: inline-block;">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M9 5H11V7H13V9H15V11H13V13H11V15H9V13H7V11H5V9H7V7H9V5Z" fill="currentColor"></path>
        </svg>
      </div>

      <div style="max-width: 800px; margin: 0 auto; text-align: center;">
        <h3 class="u-h2" style="font-size: clamp(1.75rem, 1.2rem + 1.8vi, 2.75rem); font-weight: 500; margin-bottom: 1.75rem; letter-spacing: -0.02em;">
          \${title}
        </h3>

        <form id="liveContactForm"
              class="sq-contact-form sq-contact-form--authentic \${isInitiallyLoading ? 'is-loading' : ''}"
              onsubmit="
                event.preventDefault();
                var f = this;
                var msg = document.getElementById('liveFormSuccessMsg');
                f.classList.add('is-loading');
                if (msg) msg.style.display = 'none';
                setTimeout(function() {
                  f.classList.remove('is-loading');
                  if (msg) msg.style.display = 'block';
                }, 1200);
              ">
          <div class="sq-contact-form__item">
            <input type="email"
                   name="email"
                   required
                   placeholder="E-MAIL"
                   class="sq-contact-form__input"
                   autocomplete="email" />
          </div>

          <div class="sq-contact-form__item sq-contact-form__item--message">
            <input type="text"
                   name="message"
                   required
                   placeholder="MESSAGE"
                   class="sq-contact-form__input"
                   autocomplete="off" />
          </div>

          <div class="sq-contact-form__submit-wrap">
            <button type="submit" class="sq-contact-form__button">
              \${returnArrowSvg}
              <span>ENTER</span>
            </button>

            <!-- Loading Spinner matching site -->
            <div class="sq-contact-form__loader" role="status" aria-live="polite">
              <div class="sq-contact-form__spinner" aria-hidden="true">
                <div class="sq-contact-form__spinner-box"></div>
                <div class="sq-contact-form__spinner-box"></div>
                <div class="sq-contact-form__spinner-box"></div>
                <div class="sq-contact-form__spinner-box"></div>
              </div>
              <span class="sq-contact-form__loader-text">SENDING...</span>
            </div>
          </div>
        </form>

        <!-- Success Message -->
        <div id="liveFormSuccessMsg"
             class="sq-contact-form__message sq-contact-form__message--success"
             style="display: \${isInitiallySuccess ? 'block' : 'none'}; margin-top: 1.5rem;">
          Thank you! I will get in touch with you shortly.
        </div>
      </div>

      <!-- Yellow Curvy Wavy Divider joining Black section to Cream Section -->
      <div class="sq-wavy-divider" aria-hidden="true" style="margin-top: 2rem;">
        <svg viewBox="0 0 1440 90" fill="none" preserveAspectRatio="none" class="sq-wavy-divider__svg">
          <path d="M0,0 L0,45 Q 60,80 120,45 T 240,45 T 360,45 T 480,45 T 600,45 T 720,45 T 840,45 T 960,45 T 1080,45 T 1200,45 T 1320,45 T 1440,45 L 1440,0 Z" fill="#000000"></path>
          <path d="M0,95 L0,45 Q 60,80 120,45 T 240,45 T 360,45 T 480,45 T 600,45 T 720,45 T 840,45 T 960,45 T 1080,45 T 1200,45 T 1320,45 T 1440,95 Z" fill="#f9f4eb"></path>
          <path d="M0,45 Q 60,80 120,45 T 240,45 T 360,45 T 480,45 T 600,45 T 720,45 T 840,45 T 960,45 T 1080,45 T 1200,45 T 1320,45 T 1440,45" fill="none" stroke="#ffe32e" stroke-width="4.5" stroke-linecap="round"></path>
        </svg>
      </div>
    </div>
  \`;
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source},description:{story:'2. Variant: "Know more about my projects"',...(f=(v=t.parameters)==null?void 0:v.docs)==null?void 0:f.description}}};var u,g,T,_,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`({
  title = 'Connect with me',
  state = 'idle'
}) => {
  const isInitiallyLoading = state === 'loading';
  const isInitiallySuccess = state === 'success';
  return \`
    <div style="background-color: #000000; color: #ffffff; padding: 3.5rem 1.5rem 0; min-height: 380px; position: relative;">
      <!-- Centered diamond accent from the live app -->
      <div style="text-align: center; margin-bottom: 1.5rem; color: #ffffff; opacity: 0.85;">
        <svg width="14" height="14" viewBox="0 0 20 20" fill="none" style="display: inline-block;">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M9 5H11V7H13V9H15V11H13V13H11V15H9V13H7V11H5V9H7V7H9V5Z" fill="currentColor"></path>
        </svg>
      </div>

      <div style="max-width: 800px; margin: 0 auto; text-align: center;">
        <h3 class="u-h2" style="font-size: clamp(1.75rem, 1.2rem + 1.8vi, 2.75rem); font-weight: 500; margin-bottom: 1.75rem; letter-spacing: -0.02em;">
          \${title}
        </h3>

        <form id="liveContactForm"
              class="sq-contact-form sq-contact-form--authentic \${isInitiallyLoading ? 'is-loading' : ''}"
              onsubmit="
                event.preventDefault();
                var f = this;
                var msg = document.getElementById('liveFormSuccessMsg');
                f.classList.add('is-loading');
                if (msg) msg.style.display = 'none';
                setTimeout(function() {
                  f.classList.remove('is-loading');
                  if (msg) msg.style.display = 'block';
                }, 1200);
              ">
          <div class="sq-contact-form__item">
            <input type="email"
                   name="email"
                   required
                   placeholder="E-MAIL"
                   class="sq-contact-form__input"
                   autocomplete="email" />
          </div>

          <div class="sq-contact-form__item sq-contact-form__item--message">
            <input type="text"
                   name="message"
                   required
                   placeholder="MESSAGE"
                   class="sq-contact-form__input"
                   autocomplete="off" />
          </div>

          <div class="sq-contact-form__submit-wrap">
            <button type="submit" class="sq-contact-form__button">
              \${returnArrowSvg}
              <span>ENTER</span>
            </button>

            <!-- Loading Spinner matching site -->
            <div class="sq-contact-form__loader" role="status" aria-live="polite">
              <div class="sq-contact-form__spinner" aria-hidden="true">
                <div class="sq-contact-form__spinner-box"></div>
                <div class="sq-contact-form__spinner-box"></div>
                <div class="sq-contact-form__spinner-box"></div>
                <div class="sq-contact-form__spinner-box"></div>
              </div>
              <span class="sq-contact-form__loader-text">SENDING...</span>
            </div>
          </div>
        </form>

        <!-- Success Message -->
        <div id="liveFormSuccessMsg"
             class="sq-contact-form__message sq-contact-form__message--success"
             style="display: \${isInitiallySuccess ? 'block' : 'none'}; margin-top: 1.5rem;">
          Thank you! I will get in touch with you shortly.
        </div>
      </div>

      <!-- Yellow Curvy Wavy Divider joining Black section to Cream Section -->
      <div class="sq-wavy-divider" aria-hidden="true" style="margin-top: 2rem;">
        <svg viewBox="0 0 1440 90" fill="none" preserveAspectRatio="none" class="sq-wavy-divider__svg">
          <path d="M0,0 L0,45 Q 60,80 120,45 T 240,45 T 360,45 T 480,45 T 600,45 T 720,45 T 840,45 T 960,45 T 1080,45 T 1200,45 T 1320,45 T 1440,45 L 1440,0 Z" fill="#000000"></path>
          <path d="M0,95 L0,45 Q 60,80 120,45 T 240,45 T 360,45 T 480,45 T 600,45 T 720,45 T 840,45 T 960,45 T 1080,45 T 1200,45 T 1320,45 T 1440,95 Z" fill="#f9f4eb"></path>
          <path d="M0,45 Q 60,80 120,45 T 240,45 T 360,45 T 480,45 T 600,45 T 720,45 T 840,45 T 960,45 T 1080,45 T 1200,45 T 1320,45 T 1440,45" fill="none" stroke="#ffe32e" stroke-width="4.5" stroke-linecap="round"></path>
        </svg>
      </div>
    </div>
  \`;
}`,...(T=(g=e.parameters)==null?void 0:g.docs)==null?void 0:T.source},description:{story:"3. Variant: Loading State",...(h=(_=e.parameters)==null?void 0:_.docs)==null?void 0:h.description}}};var y,q,b,w,x;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`({
  title = 'Connect with me',
  state = 'idle'
}) => {
  const isInitiallyLoading = state === 'loading';
  const isInitiallySuccess = state === 'success';
  return \`
    <div style="background-color: #000000; color: #ffffff; padding: 3.5rem 1.5rem 0; min-height: 380px; position: relative;">
      <!-- Centered diamond accent from the live app -->
      <div style="text-align: center; margin-bottom: 1.5rem; color: #ffffff; opacity: 0.85;">
        <svg width="14" height="14" viewBox="0 0 20 20" fill="none" style="display: inline-block;">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M9 5H11V7H13V9H15V11H13V13H11V15H9V13H7V11H5V9H7V7H9V5Z" fill="currentColor"></path>
        </svg>
      </div>

      <div style="max-width: 800px; margin: 0 auto; text-align: center;">
        <h3 class="u-h2" style="font-size: clamp(1.75rem, 1.2rem + 1.8vi, 2.75rem); font-weight: 500; margin-bottom: 1.75rem; letter-spacing: -0.02em;">
          \${title}
        </h3>

        <form id="liveContactForm"
              class="sq-contact-form sq-contact-form--authentic \${isInitiallyLoading ? 'is-loading' : ''}"
              onsubmit="
                event.preventDefault();
                var f = this;
                var msg = document.getElementById('liveFormSuccessMsg');
                f.classList.add('is-loading');
                if (msg) msg.style.display = 'none';
                setTimeout(function() {
                  f.classList.remove('is-loading');
                  if (msg) msg.style.display = 'block';
                }, 1200);
              ">
          <div class="sq-contact-form__item">
            <input type="email"
                   name="email"
                   required
                   placeholder="E-MAIL"
                   class="sq-contact-form__input"
                   autocomplete="email" />
          </div>

          <div class="sq-contact-form__item sq-contact-form__item--message">
            <input type="text"
                   name="message"
                   required
                   placeholder="MESSAGE"
                   class="sq-contact-form__input"
                   autocomplete="off" />
          </div>

          <div class="sq-contact-form__submit-wrap">
            <button type="submit" class="sq-contact-form__button">
              \${returnArrowSvg}
              <span>ENTER</span>
            </button>

            <!-- Loading Spinner matching site -->
            <div class="sq-contact-form__loader" role="status" aria-live="polite">
              <div class="sq-contact-form__spinner" aria-hidden="true">
                <div class="sq-contact-form__spinner-box"></div>
                <div class="sq-contact-form__spinner-box"></div>
                <div class="sq-contact-form__spinner-box"></div>
                <div class="sq-contact-form__spinner-box"></div>
              </div>
              <span class="sq-contact-form__loader-text">SENDING...</span>
            </div>
          </div>
        </form>

        <!-- Success Message -->
        <div id="liveFormSuccessMsg"
             class="sq-contact-form__message sq-contact-form__message--success"
             style="display: \${isInitiallySuccess ? 'block' : 'none'}; margin-top: 1.5rem;">
          Thank you! I will get in touch with you shortly.
        </div>
      </div>

      <!-- Yellow Curvy Wavy Divider joining Black section to Cream Section -->
      <div class="sq-wavy-divider" aria-hidden="true" style="margin-top: 2rem;">
        <svg viewBox="0 0 1440 90" fill="none" preserveAspectRatio="none" class="sq-wavy-divider__svg">
          <path d="M0,0 L0,45 Q 60,80 120,45 T 240,45 T 360,45 T 480,45 T 600,45 T 720,45 T 840,45 T 960,45 T 1080,45 T 1200,45 T 1320,45 T 1440,45 L 1440,0 Z" fill="#000000"></path>
          <path d="M0,95 L0,45 Q 60,80 120,45 T 240,45 T 360,45 T 480,45 T 600,45 T 720,45 T 840,45 T 960,45 T 1080,45 T 1200,45 T 1320,45 T 1440,95 Z" fill="#f9f4eb"></path>
          <path d="M0,45 Q 60,80 120,45 T 240,45 T 360,45 T 480,45 T 600,45 T 720,45 T 840,45 T 960,45 T 1080,45 T 1200,45 T 1320,45 T 1440,45" fill="none" stroke="#ffe32e" stroke-width="4.5" stroke-linecap="round"></path>
        </svg>
      </div>
    </div>
  \`;
}`,...(b=(q=s.parameters)==null?void 0:q.docs)==null?void 0:b.source},description:{story:"4. Variant: Success State",...(x=(w=s.parameters)==null?void 0:w.docs)==null?void 0:x.description}}};const I=["LiveAppContactForm","KnowMoreAboutProjects","LoadingState","SuccessState"];export{t as KnowMoreAboutProjects,n as LiveAppContactForm,e as LoadingState,s as SuccessState,I as __namedExportsOrder,k as default};
