const r=`
  <svg class="sq-explore-button__icon" viewBox="0 0 512 512" height="25" width="25" xmlns="http://www.w3.org/2000/svg">
    <path fill="rgb(19, 19, 19)" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"></path>
  </svg>
`,y={title:"Components/Explore Button",tags:["autodocs"],argTypes:{label:{control:"text",defaultValue:"Explore"}}},t=({label:g="Explore"})=>`
  <div style="padding: 2rem;">
    <button class="sq-explore-button" type="button">
      ${r}
      ${g}
    </button>
  </div>
`,e=()=>`
  <div style="padding: 2rem;">
    <button class="sq-explore-button sq-explore-button--hover" type="button">
      ${r}
      Explore
    </button>
  </div>
`,o=()=>`
  <div style="padding: 2rem;">
    <button class="sq-explore-button sq-explore-button--active" type="button">
      ${r}
      Explore
    </button>
  </div>
`,s=()=>`
  <div style="padding: 2rem;">
    <button class="sq-explore-button sq-explore-button--focus" type="button">
      ${r}
      Explore
    </button>
  </div>
`;var n,a,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`({
  label = 'Explore'
}) => \`
  <div style="padding: 2rem;">
    <button class="sq-explore-button" type="button">
      \${compassSvg}
      \${label}
    </button>
  </div>
\``,...(p=(a=t.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};var c,l,u;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`() => \`
  <div style="padding: 2rem;">
    <button class="sq-explore-button sq-explore-button--hover" type="button">
      \${compassSvg}
      Explore
    </button>
  </div>
\``,...(u=(l=e.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,b,i;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`() => \`
  <div style="padding: 2rem;">
    <button class="sq-explore-button sq-explore-button--active" type="button">
      \${compassSvg}
      Explore
    </button>
  </div>
\``,...(i=(b=o.parameters)==null?void 0:b.docs)==null?void 0:i.source}}};var m,v,x;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`() => \`
  <div style="padding: 2rem;">
    <button class="sq-explore-button sq-explore-button--focus" type="button">
      \${compassSvg}
      Explore
    </button>
  </div>
\``,...(x=(v=s.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};const q=["Default","ForcedHover","ForcedActive","ForcedFocus"];export{t as Default,o as ForcedActive,s as ForcedFocus,e as ForcedHover,q as __namedExportsOrder,y as default};
