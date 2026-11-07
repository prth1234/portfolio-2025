/* empty css                     */const g={title:"Components/Wavy Divider",tags:["autodocs"],argTypes:{topColor:{control:"color",defaultValue:"#000000"},bottomColor:{control:"color",defaultValue:"#f9f4eb"},strokeColor:{control:"color",defaultValue:"#ffe32e"},strokeWidth:{control:{type:"number",min:1,max:10,step:.5},defaultValue:4.5}}},e=({topColor:n="#000000",bottomColor:t="#f9f4eb",strokeColor:p="#ffe32e",strokeWidth:m=4.5})=>`
  <div style="width: 100%; overflow: hidden;">
    <div style="background-color: ${n}; color: #fff; padding: 3rem 2rem; text-align: center; font-family: var(--sq-font-family-narrow); font-size: 2rem;">
      Upper Section (Dark Pitch)
    </div>

    <div class="sq-wavy-divider" aria-hidden="true" style="background-color: ${t} !important;">
      <svg viewBox="0 0 1440 90" fill="none" preserveAspectRatio="none" class="sq-wavy-divider__svg" xmlns="http://www.w3.org/2000/svg">
        <!-- Top fill meeting upper block with side honey drip -->
        <path d="M0,36 C 50,46 100,46 150,36 C 200,26 250,26 300,36 C 350,46 400,46 450,36 C 500,26 550,26 600,36 C 650,46 700,46 750,36 C 800,26 845,26 890,34 C 925,40 945,84 1025,84 C 1105,84 1125,40 1160,34 C 1205,26 1250,26 1295,36 C 1340,46 1385,46 1440,36 L 1440,0 L 0,0 Z" fill="${n}"></path>
        <!-- Bottom fill meeting lower block -->
        <path d="M0,36 C 50,46 100,46 150,36 C 200,26 250,26 300,36 C 350,46 400,46 450,36 C 500,26 550,26 600,36 C 650,46 700,46 750,36 C 800,26 845,26 890,34 C 925,40 945,84 1025,84 C 1105,84 1125,40 1160,34 C 1205,26 1250,26 1295,36 C 1340,46 1385,46 1440,36 L 1440,95 L 0,95 Z" fill="${t}"></path>
        <!-- Yellow boundary wave line -->
        <path d="M0,36 C 50,46 100,46 150,36 C 200,26 250,26 300,36 C 350,46 400,46 450,36 C 500,26 550,26 600,36 C 650,46 700,46 750,36 C 800,26 845,26 890,34 C 925,40 945,84 1025,84 C 1105,84 1125,40 1160,34 C 1205,26 1250,26 1295,36 C 1340,46 1385,46 1440,36" fill="none" stroke="${p}" stroke-width="${m}" stroke-linecap="round"></path>
      </svg>
    </div>

    <div style="background-color: ${t}; color: #000; padding: 3rem 2rem; text-align: center; font-family: var(--sq-font-family-narrow); font-size: 2rem;">
      Lower Section (Cream Canvas)
    </div>
  </div>
`,r=()=>`
  <div style="width: 100%; overflow: hidden;">
    <div style="background-color: #000000; color: #fff; padding: 3rem 2rem; text-align: center; font-family: var(--sq-font-family-narrow); font-size: 2rem;">
      Original Symmetrical Sine Wave
    </div>

    <div class="sq-wavy-divider" aria-hidden="true" style="background-color: #f9f4eb !important;">
      <svg viewBox="0 0 1440 90" fill="none" preserveAspectRatio="none" class="sq-wavy-divider__svg" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,0 L0,45 Q 60,80 120,45 T 240,45 T 360,45 T 480,45 T 600,45 T 720,45 T 840,45 T 960,45 T 1080,45 T 1200,45 T 1320,45 T 1440,45 L 1440,0 Z" fill="#000000"></path>
        <path d="M0,95 L0,45 Q 60,80 120,45 T 240,45 T 360,45 T 480,45 T 600,45 T 720,45 T 840,45 T 960,45 T 1080,45 T 1200,45 T 1320,45 T 1440,45 L 1440,95 Z" fill="#f9f4eb"></path>
        <path d="M0,45 Q 60,80 120,45 T 240,45 T 360,45 T 480,45 T 600,45 T 720,45 T 840,45 T 960,45 T 1080,45 T 1200,45 T 1320,45 T 1440,45" fill="none" stroke="#ffe32e" stroke-width="4.5" stroke-linecap="round"></path>
      </svg>
    </div>

    <div style="background-color: #f9f4eb; color: #000; padding: 3rem 2rem; text-align: center; font-family: var(--sq-font-family-narrow); font-size: 2rem;">
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
`;var i,a,l;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`({
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
        <!-- Top fill meeting upper block with side honey drip -->
        <path d="M0,36 C 50,46 100,46 150,36 C 200,26 250,26 300,36 C 350,46 400,46 450,36 C 500,26 550,26 600,36 C 650,46 700,46 750,36 C 800,26 845,26 890,34 C 925,40 945,84 1025,84 C 1105,84 1125,40 1160,34 C 1205,26 1250,26 1295,36 C 1340,46 1385,46 1440,36 L 1440,0 L 0,0 Z" fill="\${topColor}"></path>
        <!-- Bottom fill meeting lower block -->
        <path d="M0,36 C 50,46 100,46 150,36 C 200,26 250,26 300,36 C 350,46 400,46 450,36 C 500,26 550,26 600,36 C 650,46 700,46 750,36 C 800,26 845,26 890,34 C 925,40 945,84 1025,84 C 1105,84 1125,40 1160,34 C 1205,26 1250,26 1295,36 C 1340,46 1385,46 1440,36 L 1440,95 L 0,95 Z" fill="\${bottomColor}"></path>
        <!-- Yellow boundary wave line -->
        <path d="M0,36 C 50,46 100,46 150,36 C 200,26 250,26 300,36 C 350,46 400,46 450,36 C 500,26 550,26 600,36 C 650,46 700,46 750,36 C 800,26 845,26 890,34 C 925,40 945,84 1025,84 C 1105,84 1125,40 1160,34 C 1205,26 1250,26 1295,36 C 1340,46 1385,46 1440,36" fill="none" stroke="\${strokeColor}" stroke-width="\${strokeWidth}" stroke-linecap="round"></path>
      </svg>
    </div>

    <div style="background-color: \${bottomColor}; color: #000; padding: 3rem 2rem; text-align: center; font-family: var(--sq-font-family-narrow); font-size: 2rem;">
      Lower Section (Cream Canvas)
    </div>
  </div>
\``,...(l=(a=e.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};var d,s,f;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`() => \`
  <div style="width: 100%; overflow: hidden;">
    <div style="background-color: #000000; color: #fff; padding: 3rem 2rem; text-align: center; font-family: var(--sq-font-family-narrow); font-size: 2rem;">
      Original Symmetrical Sine Wave
    </div>

    <div class="sq-wavy-divider" aria-hidden="true" style="background-color: #f9f4eb !important;">
      <svg viewBox="0 0 1440 90" fill="none" preserveAspectRatio="none" class="sq-wavy-divider__svg" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,0 L0,45 Q 60,80 120,45 T 240,45 T 360,45 T 480,45 T 600,45 T 720,45 T 840,45 T 960,45 T 1080,45 T 1200,45 T 1320,45 T 1440,45 L 1440,0 Z" fill="#000000"></path>
        <path d="M0,95 L0,45 Q 60,80 120,45 T 240,45 T 360,45 T 480,45 T 600,45 T 720,45 T 840,45 T 960,45 T 1080,45 T 1200,45 T 1320,45 T 1440,45 L 1440,95 Z" fill="#f9f4eb"></path>
        <path d="M0,45 Q 60,80 120,45 T 240,45 T 360,45 T 480,45 T 600,45 T 720,45 T 840,45 T 960,45 T 1080,45 T 1200,45 T 1320,45 T 1440,45" fill="none" stroke="#ffe32e" stroke-width="4.5" stroke-linecap="round"></path>
      </svg>
    </div>

    <div style="background-color: #f9f4eb; color: #000; padding: 3rem 2rem; text-align: center; font-family: var(--sq-font-family-narrow); font-size: 2rem;">
      Lower Section (Cream Canvas)
    </div>
  </div>
\``,...(f=(s=r.parameters)==null?void 0:s.docs)==null?void 0:f.source}}};var v,c,T;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`() => \`
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
\``,...(T=(c=o.parameters)==null?void 0:c.docs)==null?void 0:T.source}}};const C=["Default","SymmetricalOriginal","Inverted"];export{e as Default,o as Inverted,r as SymmetricalOriginal,C as __namedExportsOrder,g as default};
