const t={title:"Foundations/Spacing",tags:["autodocs"]},o=[{token:"--sq-size-2",label:"Size 2 (2px - 4px)"},{token:"--sq-size-4",label:"Size 4 (4px - 8px)"},{token:"--sq-size-8",label:"Size 8 (8px - 12px)"},{token:"--sq-size-12",label:"Size 12 (12px - 16px)"},{token:"--sq-size-16",label:"Size 16 (16px - 24px)"},{token:"--sq-size-24",label:"Size 24 (24px - 32px)"},{token:"--sq-size-32",label:"Size 32 (32px - 48px)"},{token:"--sq-size-48",label:"Size 48 (48px - 64px)"},{token:"--sq-size-64",label:"Size 64 (64px - 88px)"},{token:"--sq-size-80",label:"Size 80 (80px - 112px)"},{token:"--sq-size-96",label:"Size 96 (96px - 136px)"}],e=()=>`
  <div style="padding: 2rem; max-width: 800px; font-family: var(--sq-font-family-mono);">
    <h2 class="u-h2" style="margin-bottom: 1.5rem;">Spacing Scale</h2>
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      ${o.map(i=>`
        <div style="display: flex; align-items: center; gap: 1rem;">
          <div style="width: 220px; font-size: 0.8rem; color: rgba(0,0,0,0.7);">${i.label}</div>
          <div style="height: 24px; width: var(${i.token}); background: var(--sq-color-yellow); border: 1px solid rgba(0,0,0,0.15); border-radius: 2px;"></div>
        </div>
      `).join("")}
    </div>
  </div>
`;var s,l,a;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`() => \`
  <div style="padding: 2rem; max-width: 800px; font-family: var(--sq-font-family-mono);">
    <h2 class="u-h2" style="margin-bottom: 1.5rem;">Spacing Scale</h2>
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      \${sizes.map(s => \`
        <div style="display: flex; align-items: center; gap: 1rem;">
          <div style="width: 220px; font-size: 0.8rem; color: rgba(0,0,0,0.7);">\${s.label}</div>
          <div style="height: 24px; width: var(\${s.token}); background: var(--sq-color-yellow); border: 1px solid rgba(0,0,0,0.15); border-radius: 2px;"></div>
        </div>
      \`).join('')}
    </div>
  </div>
\``,...(a=(l=e.parameters)==null?void 0:l.docs)==null?void 0:a.source}}};const n=["Scale"];export{e as Scale,n as __namedExportsOrder,t as default};
