/* empty css               */const y={title:"Components/Contact Form",tags:["autodocs"],argTypes:{state:{control:{type:"select"},options:["idle","loading","success","error"],defaultValue:"idle"},theme:{control:{type:"select"},options:["light","dark"],defaultValue:"dark"}}},s=({state:n="idle",theme:f="dark"})=>`
    <div class="${f==="dark"?"u-theme-dark":"u-theme-light"}" style="padding: 3rem 1.5rem; text-align: center;">
      <h3 class="u-h3" style="margin-bottom: 2rem;">Know more about my projects</h3>

      <form class="sq-contact-form ${n==="loading"?"is-loading":""}" onsubmit="event.preventDefault(); this.classList.toggle('is-loading');">
        <div class="sq-contact-form__item">
          <label class="sr-only" for="email-demo" style="display:none;">E-Mail</label>
          <input id="email-demo" type="email" required placeholder="E-MAIL" class="sq-contact-form__input" />
        </div>

        <div class="sq-contact-form__item sq-contact-form__item--message">
          <label class="sr-only" for="msg-demo" style="display:none;">Message</label>
          <input id="msg-demo" type="text" required placeholder="MESSAGE" class="sq-contact-form__input" />
        </div>

        <div class="sq-contact-form__submit-wrap">
          <button type="submit" class="sq-button sq-button--primary">
            <span>ENTER</span>
            <svg class="sq-icon--arrow" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </button>

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

      ${n==="success"?'<div class="sq-contact-form__message sq-contact-form__message--success">Thank you! I will get in touch with you shortly.</div>':""}
      ${n==="error"?'<div class="sq-contact-form__message sq-contact-form__message--error">Oops! Something went wrong. Please try again.</div>':""}
    </div>
  `,e=s.bind({});e.args={state:"loading",theme:"dark"};const t=s.bind({});t.args={state:"success",theme:"dark"};const a=s.bind({});a.args={state:"error",theme:"dark"};var o,r,i;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`({
  state = 'idle',
  theme = 'dark'
}) => {
  const themeClass = theme === 'dark' ? 'u-theme-dark' : 'u-theme-light';
  const loadingClass = state === 'loading' ? 'is-loading' : '';
  return \`
    <div class="\${themeClass}" style="padding: 3rem 1.5rem; text-align: center;">
      <h3 class="u-h3" style="margin-bottom: 2rem;">Know more about my projects</h3>

      <form class="sq-contact-form \${loadingClass}" onsubmit="event.preventDefault(); this.classList.toggle('is-loading');">
        <div class="sq-contact-form__item">
          <label class="sr-only" for="email-demo" style="display:none;">E-Mail</label>
          <input id="email-demo" type="email" required placeholder="E-MAIL" class="sq-contact-form__input" />
        </div>

        <div class="sq-contact-form__item sq-contact-form__item--message">
          <label class="sr-only" for="msg-demo" style="display:none;">Message</label>
          <input id="msg-demo" type="text" required placeholder="MESSAGE" class="sq-contact-form__input" />
        </div>

        <div class="sq-contact-form__submit-wrap">
          <button type="submit" class="sq-button sq-button--primary">
            <span>ENTER</span>
            <svg class="sq-icon--arrow" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </button>

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

      \${state === 'success' ? \`<div class="sq-contact-form__message sq-contact-form__message--success">Thank you! I will get in touch with you shortly.</div>\` : ''}
      \${state === 'error' ? \`<div class="sq-contact-form__message sq-contact-form__message--error">Oops! Something went wrong. Please try again.</div>\` : ''}
    </div>
  \`;
}`,...(i=(r=s.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};var l,c,d;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`({
  state = 'idle',
  theme = 'dark'
}) => {
  const themeClass = theme === 'dark' ? 'u-theme-dark' : 'u-theme-light';
  const loadingClass = state === 'loading' ? 'is-loading' : '';
  return \`
    <div class="\${themeClass}" style="padding: 3rem 1.5rem; text-align: center;">
      <h3 class="u-h3" style="margin-bottom: 2rem;">Know more about my projects</h3>

      <form class="sq-contact-form \${loadingClass}" onsubmit="event.preventDefault(); this.classList.toggle('is-loading');">
        <div class="sq-contact-form__item">
          <label class="sr-only" for="email-demo" style="display:none;">E-Mail</label>
          <input id="email-demo" type="email" required placeholder="E-MAIL" class="sq-contact-form__input" />
        </div>

        <div class="sq-contact-form__item sq-contact-form__item--message">
          <label class="sr-only" for="msg-demo" style="display:none;">Message</label>
          <input id="msg-demo" type="text" required placeholder="MESSAGE" class="sq-contact-form__input" />
        </div>

        <div class="sq-contact-form__submit-wrap">
          <button type="submit" class="sq-button sq-button--primary">
            <span>ENTER</span>
            <svg class="sq-icon--arrow" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </button>

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

      \${state === 'success' ? \`<div class="sq-contact-form__message sq-contact-form__message--success">Thank you! I will get in touch with you shortly.</div>\` : ''}
      \${state === 'error' ? \`<div class="sq-contact-form__message sq-contact-form__message--error">Oops! Something went wrong. Please try again.</div>\` : ''}
    </div>
  \`;
}`,...(d=(c=e.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var m,_,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`({
  state = 'idle',
  theme = 'dark'
}) => {
  const themeClass = theme === 'dark' ? 'u-theme-dark' : 'u-theme-light';
  const loadingClass = state === 'loading' ? 'is-loading' : '';
  return \`
    <div class="\${themeClass}" style="padding: 3rem 1.5rem; text-align: center;">
      <h3 class="u-h3" style="margin-bottom: 2rem;">Know more about my projects</h3>

      <form class="sq-contact-form \${loadingClass}" onsubmit="event.preventDefault(); this.classList.toggle('is-loading');">
        <div class="sq-contact-form__item">
          <label class="sr-only" for="email-demo" style="display:none;">E-Mail</label>
          <input id="email-demo" type="email" required placeholder="E-MAIL" class="sq-contact-form__input" />
        </div>

        <div class="sq-contact-form__item sq-contact-form__item--message">
          <label class="sr-only" for="msg-demo" style="display:none;">Message</label>
          <input id="msg-demo" type="text" required placeholder="MESSAGE" class="sq-contact-form__input" />
        </div>

        <div class="sq-contact-form__submit-wrap">
          <button type="submit" class="sq-button sq-button--primary">
            <span>ENTER</span>
            <svg class="sq-icon--arrow" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </button>

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

      \${state === 'success' ? \`<div class="sq-contact-form__message sq-contact-form__message--success">Thank you! I will get in touch with you shortly.</div>\` : ''}
      \${state === 'error' ? \`<div class="sq-contact-form__message sq-contact-form__message--error">Oops! Something went wrong. Please try again.</div>\` : ''}
    </div>
  \`;
}`,...(p=(_=t.parameters)==null?void 0:_.docs)==null?void 0:p.source}}};var u,v,g;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`({
  state = 'idle',
  theme = 'dark'
}) => {
  const themeClass = theme === 'dark' ? 'u-theme-dark' : 'u-theme-light';
  const loadingClass = state === 'loading' ? 'is-loading' : '';
  return \`
    <div class="\${themeClass}" style="padding: 3rem 1.5rem; text-align: center;">
      <h3 class="u-h3" style="margin-bottom: 2rem;">Know more about my projects</h3>

      <form class="sq-contact-form \${loadingClass}" onsubmit="event.preventDefault(); this.classList.toggle('is-loading');">
        <div class="sq-contact-form__item">
          <label class="sr-only" for="email-demo" style="display:none;">E-Mail</label>
          <input id="email-demo" type="email" required placeholder="E-MAIL" class="sq-contact-form__input" />
        </div>

        <div class="sq-contact-form__item sq-contact-form__item--message">
          <label class="sr-only" for="msg-demo" style="display:none;">Message</label>
          <input id="msg-demo" type="text" required placeholder="MESSAGE" class="sq-contact-form__input" />
        </div>

        <div class="sq-contact-form__submit-wrap">
          <button type="submit" class="sq-button sq-button--primary">
            <span>ENTER</span>
            <svg class="sq-icon--arrow" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </button>

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

      \${state === 'success' ? \`<div class="sq-contact-form__message sq-contact-form__message--success">Thank you! I will get in touch with you shortly.</div>\` : ''}
      \${state === 'error' ? \`<div class="sq-contact-form__message sq-contact-form__message--error">Oops! Something went wrong. Please try again.</div>\` : ''}
    </div>
  \`;
}`,...(g=(v=a.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};const x=["Interactive","LoadingState","SuccessState","ErrorState"];export{a as ErrorState,s as Interactive,e as LoadingState,t as SuccessState,x as __namedExportsOrder,y as default};
