/* empty css                     */const c={title:"Components/Wavy Divider",tags:["autodocs"],argTypes:{topColor:{control:"color",defaultValue:"#000000"},bottomColor:{control:"color",defaultValue:"#f9f4eb"},strokeColor:{control:"color",defaultValue:"#ffe32e"},strokeWidth:{control:{type:"number",min:1,max:10,step:.5},defaultValue:4.5}}},e=({topColor:t="#000000",bottomColor:r="#f9f4eb",strokeColor:T="#ffe32e",strokeWidth:v=4.5})=>`
  <div style="width: 100%; overflow: hidden;">
    <div style="background-color: ${t}; color: #fff; padding: 3rem 2rem; text-align: center; font-family: var(--sq-font-family-narrow); font-size: 2rem;">
      Upper Section (Dark Pitch)
    </div>

    <div class="sq-wavy-divider" aria-hidden="true" style="background-color: ${r} !important;">
      <svg viewBox="0 0 1440 90" fill="none" preserveAspectRatio="none" class="sq-wavy-divider__svg" xmlns="http://www.w3.org/2000/svg">
        <!-- Top fill meeting upper block -->
        <path d="M0,0 L0,45 Q 60,80 120,45 T 240,45 T 360,45 T 480,45 T 600,45 T 720,45 T 840,45 T 960,45 T 1080,45 T 1200,45 T 1320,45 T 1440,45 L 1440,0 Z" fill="${t}"></path>
        <!-- Bottom fill meeting lower block -->
        <path d="M0,95 L0,45 Q 60,80 120,45 T 240,45 T 360,45 T 480,45 T 600,45 T 720,45 T 840,45 T 960,45 T 1080,45 T 1200,45 T 1320,45 T 1440,45 L 1440,95 Z" fill="${r}"></path>
        <!-- Yellow boundary wave line -->
        <path d="M0,45 Q 60,80 120,45 T 240,45 T 360,45 T 480,45 T 600,45 T 720,45 T 840,45 T 960,45 T 1080,45 T 1200,45 T 1320,45 T 1440,45" fill="none" stroke="${T}" stroke-width="${v}" stroke-linecap="round"></path>
      </svg>
    </div>

    <div style="background-color: ${r}; color: #000; padding: 3rem 2rem; text-align: center; font-family: var(--sq-font-family-narrow); font-size: 2rem;">
      Lower Section (Cream Canvas)
    </div>
  </div>
`,o=()=>`
  <div style="width: 100%; overflow: hidden;">
    <div style="background-color: var(--sq-color-cream); color: #000; padding: 3rem 2rem; text-align: center; font-family: var(--sq-font-family-narrow); font-size: 2rem;">
      Upper Section (Cream Canvas)
    </div>

    <div class="sq-wavy-divider sq-wavy-divider--inverted" aria-hidden="true" style="background-color: #000 !important;">
      <svg viewBox="0 0 1440 90" fill="none" preserveAspectRatio="none" class="sq-wavy-divider__svg" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,0 L0,45 Q 60,80 120,45 T 240,45 T 360,45 T 480,45 T 600,45 T 720,45 T 840,45 T 960,45 T 1080,45 T 1200,45 T 1320,45 T 1440,45 L 1440,0 Z" fill="#f9f4eb"></path>
        <path d="M0,95 L0,45 Q 60,80 120,45 T 240,45 T 360,45 T 480,45 T 600,45 T 720,45 T 840,45 T 960,45 T 1080,45 T 1200,45 T 1320,45 T 1440,45 L 1440,95 Z" fill="#000000"></path>
        <path d="M0,45 Q 60,80 120,45 T 240,45 T 360,45 T 480,45 T 600,45 T 720,45 T 840,45 T 960,45 T 1080,45 T 1200,45 T 1320,45 T 1440,45" fill="none" stroke="#ffe32e" stroke-width="4.5" stroke-linecap="round"></path>
      </svg>
    </div>

    <div style="background-color: #000000; color: #fff; padding: 3rem 2rem; text-align: center; font-family: var(--sq-font-family-narrow); font-size: 2rem;">
      Lower Section (Dark Pitch)
    </div>
  </div>
`;var n,a,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`({
  topColor = '#000000',
  bottomColor = '#f9f4eb',
  strokeColor = '#ffe32e',
  strokeWidth = 4.5
}) => \`
  <div style="width: 100%; overflow: hidden;">
    <div style="background-color: \${topColor}; color: #fff; padding: 3rem 2rem; text-align: center; font-family: var(--sq-font-family-narrow); font-size: 2rem;">
      Upper Section (Dark Pitch)
    </div>

    <div class="sq-wavy-divider" aria-hidden="true" style="background-color: \${bottomColor} !important;">
      <svg viewBox="0 0 1440 90" fill="none" preserveAspectRatio="none" class="sq-wavy-divider__svg" xmlns="http://www.w3.org/2000/svg">
        <!-- Top fill meeting upper block -->
        <path d="M0,0 L0,45 Q 60,80 120,45 T 240,45 T 360,45 T 480,45 T 600,45 T 720,45 T 840,45 T 960,45 T 1080,45 T 1200,45 T 1320,45 T 1440,45 L 1440,0 Z" fill="\${topColor}"></path>
        <!-- Bottom fill meeting lower block -->
        <path d="M0,95 L0,45 Q 60,80 120,45 T 240,45 T 360,45 T 480,45 T 600,45 T 720,45 T 840,45 T 960,45 T 1080,45 T 1200,45 T 1320,45 T 1440,45 L 1440,95 Z" fill="\${bottomColor}"></path>
        <!-- Yellow boundary wave line -->
        <path d="M0,45 Q 60,80 120,45 T 240,45 T 360,45 T 480,45 T 600,45 T 720,45 T 840,45 T 960,45 T 1080,45 T 1200,45 T 1320,45 T 1440,45" fill="none" stroke="\${strokeColor}" stroke-width="\${strokeWidth}" stroke-linecap="round"></path>
      </svg>
    </div>

    <div style="background-color: \${bottomColor}; color: #000; padding: 3rem 2rem; text-align: center; font-family: var(--sq-font-family-narrow); font-size: 2rem;">
      Lower Section (Cream Canvas)
    </div>
  </div>
\``,...(i=(a=e.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};var l,d,s;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`() => \`
  <div style="width: 100%; overflow: hidden;">
    <div style="background-color: var(--sq-color-cream); color: #000; padding: 3rem 2rem; text-align: center; font-family: var(--sq-font-family-narrow); font-size: 2rem;">
      Upper Section (Cream Canvas)
    </div>

    <div class="sq-wavy-divider sq-wavy-divider--inverted" aria-hidden="true" style="background-color: #000 !important;">
      <svg viewBox="0 0 1440 90" fill="none" preserveAspectRatio="none" class="sq-wavy-divider__svg" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,0 L0,45 Q 60,80 120,45 T 240,45 T 360,45 T 480,45 T 600,45 T 720,45 T 840,45 T 960,45 T 1080,45 T 1200,45 T 1320,45 T 1440,45 L 1440,0 Z" fill="#f9f4eb"></path>
        <path d="M0,95 L0,45 Q 60,80 120,45 T 240,45 T 360,45 T 480,45 T 600,45 T 720,45 T 840,45 T 960,45 T 1080,45 T 1200,45 T 1320,45 T 1440,45 L 1440,95 Z" fill="#000000"></path>
        <path d="M0,45 Q 60,80 120,45 T 240,45 T 360,45 T 480,45 T 600,45 T 720,45 T 840,45 T 960,45 T 1080,45 T 1200,45 T 1320,45 T 1440,45" fill="none" stroke="#ffe32e" stroke-width="4.5" stroke-linecap="round"></path>
      </svg>
    </div>

    <div style="background-color: #000000; color: #fff; padding: 3rem 2rem; text-align: center; font-family: var(--sq-font-family-narrow); font-size: 2rem;">
      Lower Section (Dark Pitch)
    </div>
  </div>
\``,...(s=(d=o.parameters)==null?void 0:d.docs)==null?void 0:s.source}}};const p=["Default","Inverted"];export{e as Default,o as Inverted,p as __namedExportsOrder,c as default};
