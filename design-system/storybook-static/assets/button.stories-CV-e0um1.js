const G=`
  <svg class="sq-icon--arrow" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
  </svg>
`,Q={title:"Components/Button",tags:["autodocs"],argTypes:{label:{control:"text",defaultValue:"ENTER"},variant:{control:{type:"select"},options:["primary","dark","outline"]},size:{control:{type:"select"},options:["small","medium","large"]},disabled:{control:"boolean"},showArrow:{control:"boolean"}}},s=({label:M="ENTER",variant:U="primary",size:u="medium",disabled:_=!1,showArrow:W=!0,stateClass:X=""})=>{const j=u==="small"?"sq-button--small":u==="large"?"sq-button--large":"";return`
    <button class="sq-button ${`sq-button--${U}`} ${j} ${X}" ${_?"disabled":""}>
      <span>${M}</span>
      ${W?G:""}
    </button>
  `},a=s.bind({});a.args={label:"ENTER",variant:"primary",size:"medium",disabled:!1,showArrow:!0};const t=s.bind({});t.args={label:"ENTER",variant:"primary"};const n=s.bind({});n.args={label:"CONTACT ME",variant:"dark"};const e=s.bind({});e.args={label:"VIEW ALL",variant:"outline"};const r=s.bind({});r.args={label:"SUBMIT",size:"small"};const l=s.bind({});l.args={label:"LAUNCH EXPERIENCE",size:"large"};const o=s.bind({});o.args={label:"HOVER STATE",stateClass:"sq-button--hover"};const i=s.bind({});i.args={label:"ACTIVE STATE",stateClass:"sq-button--active"};const d=s.bind({});d.args={label:"FOCUS STATE",stateClass:"sq-button--focus"};const b=s.bind({});b.args={label:"DISABLED",disabled:!0};var c,m,p;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`({
  label = 'ENTER',
  variant = 'primary',
  size = 'medium',
  disabled = false,
  showArrow = true,
  stateClass = ''
}) => {
  const sizeClass = size === 'small' ? 'sq-button--small' : size === 'large' ? 'sq-button--large' : '';
  const variantClass = \`sq-button--\${variant}\`;
  const disabledAttr = disabled ? 'disabled' : '';
  return \`
    <button class="sq-button \${variantClass} \${sizeClass} \${stateClass}" \${disabledAttr}>
      <span>\${label}</span>
      \${showArrow ? arrowSvg : ''}
    </button>
  \`;
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var $,C,v;t.parameters={...t.parameters,docs:{...($=t.parameters)==null?void 0:$.docs,source:{originalSource:`({
  label = 'ENTER',
  variant = 'primary',
  size = 'medium',
  disabled = false,
  showArrow = true,
  stateClass = ''
}) => {
  const sizeClass = size === 'small' ? 'sq-button--small' : size === 'large' ? 'sq-button--large' : '';
  const variantClass = \`sq-button--\${variant}\`;
  const disabledAttr = disabled ? 'disabled' : '';
  return \`
    <button class="sq-button \${variantClass} \${sizeClass} \${stateClass}" \${disabledAttr}>
      <span>\${label}</span>
      \${showArrow ? arrowSvg : ''}
    </button>
  \`;
}`,...(v=(C=t.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};var g,w,z;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`({
  label = 'ENTER',
  variant = 'primary',
  size = 'medium',
  disabled = false,
  showArrow = true,
  stateClass = ''
}) => {
  const sizeClass = size === 'small' ? 'sq-button--small' : size === 'large' ? 'sq-button--large' : '';
  const variantClass = \`sq-button--\${variant}\`;
  const disabledAttr = disabled ? 'disabled' : '';
  return \`
    <button class="sq-button \${variantClass} \${sizeClass} \${stateClass}" \${disabledAttr}>
      <span>\${label}</span>
      \${showArrow ? arrowSvg : ''}
    </button>
  \`;
}`,...(z=(w=n.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};var A,q,E;e.parameters={...e.parameters,docs:{...(A=e.parameters)==null?void 0:A.docs,source:{originalSource:`({
  label = 'ENTER',
  variant = 'primary',
  size = 'medium',
  disabled = false,
  showArrow = true,
  stateClass = ''
}) => {
  const sizeClass = size === 'small' ? 'sq-button--small' : size === 'large' ? 'sq-button--large' : '';
  const variantClass = \`sq-button--\${variant}\`;
  const disabledAttr = disabled ? 'disabled' : '';
  return \`
    <button class="sq-button \${variantClass} \${sizeClass} \${stateClass}" \${disabledAttr}>
      <span>\${label}</span>
      \${showArrow ? arrowSvg : ''}
    </button>
  \`;
}`,...(E=(q=e.parameters)==null?void 0:q.docs)==null?void 0:E.source}}};var S,h,T;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`({
  label = 'ENTER',
  variant = 'primary',
  size = 'medium',
  disabled = false,
  showArrow = true,
  stateClass = ''
}) => {
  const sizeClass = size === 'small' ? 'sq-button--small' : size === 'large' ? 'sq-button--large' : '';
  const variantClass = \`sq-button--\${variant}\`;
  const disabledAttr = disabled ? 'disabled' : '';
  return \`
    <button class="sq-button \${variantClass} \${sizeClass} \${stateClass}" \${disabledAttr}>
      <span>\${label}</span>
      \${showArrow ? arrowSvg : ''}
    </button>
  \`;
}`,...(T=(h=r.parameters)==null?void 0:h.docs)==null?void 0:T.source}}};var y,f,N;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`({
  label = 'ENTER',
  variant = 'primary',
  size = 'medium',
  disabled = false,
  showArrow = true,
  stateClass = ''
}) => {
  const sizeClass = size === 'small' ? 'sq-button--small' : size === 'large' ? 'sq-button--large' : '';
  const variantClass = \`sq-button--\${variant}\`;
  const disabledAttr = disabled ? 'disabled' : '';
  return \`
    <button class="sq-button \${variantClass} \${sizeClass} \${stateClass}" \${disabledAttr}>
      <span>\${label}</span>
      \${showArrow ? arrowSvg : ''}
    </button>
  \`;
}`,...(N=(f=l.parameters)==null?void 0:f.docs)==null?void 0:N.source}}};var R,F,L;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`({
  label = 'ENTER',
  variant = 'primary',
  size = 'medium',
  disabled = false,
  showArrow = true,
  stateClass = ''
}) => {
  const sizeClass = size === 'small' ? 'sq-button--small' : size === 'large' ? 'sq-button--large' : '';
  const variantClass = \`sq-button--\${variant}\`;
  const disabledAttr = disabled ? 'disabled' : '';
  return \`
    <button class="sq-button \${variantClass} \${sizeClass} \${stateClass}" \${disabledAttr}>
      <span>\${label}</span>
      \${showArrow ? arrowSvg : ''}
    </button>
  \`;
}`,...(L=(F=o.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};var D,O,x;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`({
  label = 'ENTER',
  variant = 'primary',
  size = 'medium',
  disabled = false,
  showArrow = true,
  stateClass = ''
}) => {
  const sizeClass = size === 'small' ? 'sq-button--small' : size === 'large' ? 'sq-button--large' : '';
  const variantClass = \`sq-button--\${variant}\`;
  const disabledAttr = disabled ? 'disabled' : '';
  return \`
    <button class="sq-button \${variantClass} \${sizeClass} \${stateClass}" \${disabledAttr}>
      <span>\${label}</span>
      \${showArrow ? arrowSvg : ''}
    </button>
  \`;
}`,...(x=(O=i.parameters)==null?void 0:O.docs)==null?void 0:x.source}}};var H,I,P;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`({
  label = 'ENTER',
  variant = 'primary',
  size = 'medium',
  disabled = false,
  showArrow = true,
  stateClass = ''
}) => {
  const sizeClass = size === 'small' ? 'sq-button--small' : size === 'large' ? 'sq-button--large' : '';
  const variantClass = \`sq-button--\${variant}\`;
  const disabledAttr = disabled ? 'disabled' : '';
  return \`
    <button class="sq-button \${variantClass} \${sizeClass} \${stateClass}" \${disabledAttr}>
      <span>\${label}</span>
      \${showArrow ? arrowSvg : ''}
    </button>
  \`;
}`,...(P=(I=d.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};var k,B,V;b.parameters={...b.parameters,docs:{...(k=b.parameters)==null?void 0:k.docs,source:{originalSource:`({
  label = 'ENTER',
  variant = 'primary',
  size = 'medium',
  disabled = false,
  showArrow = true,
  stateClass = ''
}) => {
  const sizeClass = size === 'small' ? 'sq-button--small' : size === 'large' ? 'sq-button--large' : '';
  const variantClass = \`sq-button--\${variant}\`;
  const disabledAttr = disabled ? 'disabled' : '';
  return \`
    <button class="sq-button \${variantClass} \${sizeClass} \${stateClass}" \${disabledAttr}>
      <span>\${label}</span>
      \${showArrow ? arrowSvg : ''}
    </button>
  \`;
}`,...(V=(B=b.parameters)==null?void 0:B.docs)==null?void 0:V.source}}};const Y=["Playground","Primary","Dark","Outline","Small","Large","ForcedHover","ForcedActive","ForcedFocus","Disabled"];export{n as Dark,b as Disabled,i as ForcedActive,d as ForcedFocus,o as ForcedHover,l as Large,e as Outline,a as Playground,t as Primary,r as Small,Y as __namedExportsOrder,Q as default};
