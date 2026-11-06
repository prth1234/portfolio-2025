const i=`
  <svg class="sq-accordion__icon" viewBox="0 0 20 20" fill="currentColor">
    <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
  </svg>
`,v={title:"Components/Accordion",tags:["autodocs"],argTypes:{isOpen:{control:"boolean",defaultValue:!1},title:{control:"text",defaultValue:"Technical Skills & Domains"}}},s=({isOpen:m=!1,title:_="Technical Skills & Domains"})=>`
  <div style="padding: 2rem; max-width: 800px;">
    <div class="sq-accordion">
      <details class="sq-accordion__details" ${m?"open":""}>
        <summary class="sq-accordion__summary">
          <span class="sq-accordion__title">${_}</span>
          ${i}
        </summary>
        <div class="sq-accordion__content">
          <p class="u-p1" style="color: #333;">
            Full-stack distributed cloud architecture, Agentic AI orchestration, microservices with Go and Python, React/TypeScript frontends, and automated CI/CD pipelines.
          </p>
        </div>
      </details>
    </div>
  </div>
`,a=s.bind({});a.args={isOpen:!0,title:"Education & Academic Background"};const n=()=>`
  <div style="padding: 2rem; max-width: 800px;">
    <div class="sq-accordion">
      <details class="sq-accordion__details" open>
        <summary class="sq-accordion__summary">
          <span class="sq-accordion__title">01. Artificial Intelligence & Agents</span>
          ${i}
        </summary>
        <div class="sq-accordion__content">
          <p class="u-p1">Autonomous multi-agent architectures, RAG, prompt tuning, and model evaluation systems.</p>
        </div>
      </details>
    </div>

    <div class="sq-accordion">
      <details class="sq-accordion__details">
        <summary class="sq-accordion__summary">
          <span class="sq-accordion__title">02. Cloud & FinOps Automation</span>
          ${i}
        </summary>
        <div class="sq-accordion__content">
          <p class="u-p1">Multi-cloud cost platform, Kubernetes rightsizing, and automated SLA alerting.</p>
        </div>
      </details>
    </div>
  </div>
`;var c,e,t;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`({
  isOpen = false,
  title = 'Technical Skills & Domains'
}) => \`
  <div style="padding: 2rem; max-width: 800px;">
    <div class="sq-accordion">
      <details class="sq-accordion__details" \${isOpen ? 'open' : ''}>
        <summary class="sq-accordion__summary">
          <span class="sq-accordion__title">\${title}</span>
          \${plusIconSvg}
        </summary>
        <div class="sq-accordion__content">
          <p class="u-p1" style="color: #333;">
            Full-stack distributed cloud architecture, Agentic AI orchestration, microservices with Go and Python, React/TypeScript frontends, and automated CI/CD pipelines.
          </p>
        </div>
      </details>
    </div>
  </div>
\``,...(t=(e=s.parameters)==null?void 0:e.docs)==null?void 0:t.source}}};var o,d,r;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`({
  isOpen = false,
  title = 'Technical Skills & Domains'
}) => \`
  <div style="padding: 2rem; max-width: 800px;">
    <div class="sq-accordion">
      <details class="sq-accordion__details" \${isOpen ? 'open' : ''}>
        <summary class="sq-accordion__summary">
          <span class="sq-accordion__title">\${title}</span>
          \${plusIconSvg}
        </summary>
        <div class="sq-accordion__content">
          <p class="u-p1" style="color: #333;">
            Full-stack distributed cloud architecture, Agentic AI orchestration, microservices with Go and Python, React/TypeScript frontends, and automated CI/CD pipelines.
          </p>
        </div>
      </details>
    </div>
  </div>
\``,...(r=(d=a.parameters)==null?void 0:d.docs)==null?void 0:r.source}}};var l,p,u;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`() => \`
  <div style="padding: 2rem; max-width: 800px;">
    <div class="sq-accordion">
      <details class="sq-accordion__details" open>
        <summary class="sq-accordion__summary">
          <span class="sq-accordion__title">01. Artificial Intelligence & Agents</span>
          \${plusIconSvg}
        </summary>
        <div class="sq-accordion__content">
          <p class="u-p1">Autonomous multi-agent architectures, RAG, prompt tuning, and model evaluation systems.</p>
        </div>
      </details>
    </div>

    <div class="sq-accordion">
      <details class="sq-accordion__details">
        <summary class="sq-accordion__summary">
          <span class="sq-accordion__title">02. Cloud & FinOps Automation</span>
          \${plusIconSvg}
        </summary>
        <div class="sq-accordion__content">
          <p class="u-p1">Multi-cloud cost platform, Kubernetes rightsizing, and automated SLA alerting.</p>
        </div>
      </details>
    </div>
  </div>
\``,...(u=(p=n.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const y=["Default","OpenStateWithWavyUnderline","AccordionGroup"];export{n as AccordionGroup,s as Default,a as OpenStateWithWavyUnderline,y as __namedExportsOrder,v as default};
