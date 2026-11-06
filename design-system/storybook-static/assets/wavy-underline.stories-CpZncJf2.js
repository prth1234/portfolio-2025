const R={title:"Components/Wavy Underline",tags:["autodocs"],argTypes:{text:{control:"text"},tag:{control:{type:"select"},options:["h1","h2","h3","span","p"]},variant:{control:{type:"select"},options:["default","thick","animated"]},color:{control:"color"}}},e=({text:A="Experience & Education",tag:l="h2",variant:d="default",color:c})=>{const B=c?`style="--sq-wavy-image: url('data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' viewBox=\\'0 0 20 6\\'%3E%3Cpath d=\\'M0 3 Q 5 0, 10 3 T 20 3\\' fill=\\'none\\' stroke=\\'${encodeURIComponent(c)}\\' stroke-width=\\'2.4\\' stroke-linecap=\\'round\\'/%3E%3C/svg%3E')"`:"";return`
    <div style="padding: 2rem;">
      <${l} class="${d==="thick"?"sq-wavy-underline sq-wavy-underline--thick":d==="animated"?"sq-wavy-underline sq-wavy-underline--animated":"sq-wavy-underline"}" ${B}>${A}</${l}>
    </div>
  `},n=e.bind({});n.args={text:"Experience & Milestones",tag:"h2",variant:"default"};const a=e.bind({});a.args={text:"Creative Developer",tag:"h1",variant:"default"};const t=e.bind({});t.args={text:"Software Engineer",tag:"h3",variant:"default"};const i=()=>`
  <div style="padding: 2rem; font-family: var(--sq-font-family-normal); font-size: 1.25rem;">
    Specializing in scalable cloud platforms, distributed systems, and
    <span class="sq-wavy-underline" style="font-weight: 600;">Agentic AI Solutions</span>
    with autonomous orchestration.
  </div>
`,s=e.bind({});s.args={text:"Heavy Underline Motif",tag:"h2",variant:"thick"};const r=e.bind({});r.args={text:"Animated Flowing Squiggle",tag:"h2",variant:"animated"};const o=e.bind({});o.args={text:"Pastel Peach Variant",tag:"h2",variant:"default",color:"#fcdca6"};var v,u,m;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`({
  text = 'Experience & Education',
  tag = 'h2',
  variant = 'default',
  color
}) => {
  const customColorStyle = color ? \`style="--sq-wavy-image: url('data:image/svg+xml,%3Csvg xmlns=\\\\'http://www.w3.org/2000/svg\\\\' viewBox=\\\\'0 0 20 6\\\\'%3E%3Cpath d=\\\\'M0 3 Q 5 0, 10 3 T 20 3\\\\' fill=\\\\'none\\\\' stroke=\\\\'\${encodeURIComponent(color)}\\\\' stroke-width=\\\\'2.4\\\\' stroke-linecap=\\\\'round\\\\'/%3E%3C/svg%3E')"\` : '';
  const variantClass = variant === 'thick' ? 'sq-wavy-underline sq-wavy-underline--thick' : variant === 'animated' ? 'sq-wavy-underline sq-wavy-underline--animated' : 'sq-wavy-underline';
  return \`
    <div style="padding: 2rem;">
      <\${tag} class="\${variantClass}" \${customColorStyle}>\${text}</\${tag}>
    </div>
  \`;
}`,...(m=(u=n.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var g,p,w;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`({
  text = 'Experience & Education',
  tag = 'h2',
  variant = 'default',
  color
}) => {
  const customColorStyle = color ? \`style="--sq-wavy-image: url('data:image/svg+xml,%3Csvg xmlns=\\\\'http://www.w3.org/2000/svg\\\\' viewBox=\\\\'0 0 20 6\\\\'%3E%3Cpath d=\\\\'M0 3 Q 5 0, 10 3 T 20 3\\\\' fill=\\\\'none\\\\' stroke=\\\\'\${encodeURIComponent(color)}\\\\' stroke-width=\\\\'2.4\\\\' stroke-linecap=\\\\'round\\\\'/%3E%3C/svg%3E')"\` : '';
  const variantClass = variant === 'thick' ? 'sq-wavy-underline sq-wavy-underline--thick' : variant === 'animated' ? 'sq-wavy-underline sq-wavy-underline--animated' : 'sq-wavy-underline';
  return \`
    <div style="padding: 2rem;">
      <\${tag} class="\${variantClass}" \${customColorStyle}>\${text}</\${tag}>
    </div>
  \`;
}`,...(w=(p=a.parameters)==null?void 0:p.docs)==null?void 0:w.source}}};var y,h,C;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`({
  text = 'Experience & Education',
  tag = 'h2',
  variant = 'default',
  color
}) => {
  const customColorStyle = color ? \`style="--sq-wavy-image: url('data:image/svg+xml,%3Csvg xmlns=\\\\'http://www.w3.org/2000/svg\\\\' viewBox=\\\\'0 0 20 6\\\\'%3E%3Cpath d=\\\\'M0 3 Q 5 0, 10 3 T 20 3\\\\' fill=\\\\'none\\\\' stroke=\\\\'\${encodeURIComponent(color)}\\\\' stroke-width=\\\\'2.4\\\\' stroke-linecap=\\\\'round\\\\'/%3E%3C/svg%3E')"\` : '';
  const variantClass = variant === 'thick' ? 'sq-wavy-underline sq-wavy-underline--thick' : variant === 'animated' ? 'sq-wavy-underline sq-wavy-underline--animated' : 'sq-wavy-underline';
  return \`
    <div style="padding: 2rem;">
      <\${tag} class="\${variantClass}" \${customColorStyle}>\${text}</\${tag}>
    </div>
  \`;
}`,...(C=(h=t.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};var x,q,$;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`() => \`
  <div style="padding: 2rem; font-family: var(--sq-font-family-normal); font-size: 1.25rem;">
    Specializing in scalable cloud platforms, distributed systems, and
    <span class="sq-wavy-underline" style="font-weight: 600;">Agentic AI Solutions</span>
    with autonomous orchestration.
  </div>
\``,...($=(q=i.parameters)==null?void 0:q.docs)==null?void 0:$.source}}};var f,k,E;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`({
  text = 'Experience & Education',
  tag = 'h2',
  variant = 'default',
  color
}) => {
  const customColorStyle = color ? \`style="--sq-wavy-image: url('data:image/svg+xml,%3Csvg xmlns=\\\\'http://www.w3.org/2000/svg\\\\' viewBox=\\\\'0 0 20 6\\\\'%3E%3Cpath d=\\\\'M0 3 Q 5 0, 10 3 T 20 3\\\\' fill=\\\\'none\\\\' stroke=\\\\'\${encodeURIComponent(color)}\\\\' stroke-width=\\\\'2.4\\\\' stroke-linecap=\\\\'round\\\\'/%3E%3C/svg%3E')"\` : '';
  const variantClass = variant === 'thick' ? 'sq-wavy-underline sq-wavy-underline--thick' : variant === 'animated' ? 'sq-wavy-underline sq-wavy-underline--animated' : 'sq-wavy-underline';
  return \`
    <div style="padding: 2rem;">
      <\${tag} class="\${variantClass}" \${customColorStyle}>\${text}</\${tag}>
    </div>
  \`;
}`,...(E=(k=s.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var S,I,T;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`({
  text = 'Experience & Education',
  tag = 'h2',
  variant = 'default',
  color
}) => {
  const customColorStyle = color ? \`style="--sq-wavy-image: url('data:image/svg+xml,%3Csvg xmlns=\\\\'http://www.w3.org/2000/svg\\\\' viewBox=\\\\'0 0 20 6\\\\'%3E%3Cpath d=\\\\'M0 3 Q 5 0, 10 3 T 20 3\\\\' fill=\\\\'none\\\\' stroke=\\\\'\${encodeURIComponent(color)}\\\\' stroke-width=\\\\'2.4\\\\' stroke-linecap=\\\\'round\\\\'/%3E%3C/svg%3E')"\` : '';
  const variantClass = variant === 'thick' ? 'sq-wavy-underline sq-wavy-underline--thick' : variant === 'animated' ? 'sq-wavy-underline sq-wavy-underline--animated' : 'sq-wavy-underline';
  return \`
    <div style="padding: 2rem;">
      <\${tag} class="\${variantClass}" \${customColorStyle}>\${text}</\${tag}>
    </div>
  \`;
}`,...(T=(I=r.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var b,U,M;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`({
  text = 'Experience & Education',
  tag = 'h2',
  variant = 'default',
  color
}) => {
  const customColorStyle = color ? \`style="--sq-wavy-image: url('data:image/svg+xml,%3Csvg xmlns=\\\\'http://www.w3.org/2000/svg\\\\' viewBox=\\\\'0 0 20 6\\\\'%3E%3Cpath d=\\\\'M0 3 Q 5 0, 10 3 T 20 3\\\\' fill=\\\\'none\\\\' stroke=\\\\'\${encodeURIComponent(color)}\\\\' stroke-width=\\\\'2.4\\\\' stroke-linecap=\\\\'round\\\\'/%3E%3C/svg%3E')"\` : '';
  const variantClass = variant === 'thick' ? 'sq-wavy-underline sq-wavy-underline--thick' : variant === 'animated' ? 'sq-wavy-underline sq-wavy-underline--animated' : 'sq-wavy-underline';
  return \`
    <div style="padding: 2rem;">
      <\${tag} class="\${variantClass}" \${customColorStyle}>\${text}</\${tag}>
    </div>
  \`;
}`,...(M=(U=o.parameters)==null?void 0:U.docs)==null?void 0:M.source}}};const H=["Default","InHeading1","InHeading3","InlineWord","ThickVariant","AnimatedScroll","CustomColor"];export{r as AnimatedScroll,o as CustomColor,n as Default,a as InHeading1,t as InHeading3,i as InlineWord,s as ThickVariant,H as __namedExportsOrder,R as default};
