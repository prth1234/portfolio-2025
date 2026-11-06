const i={title:"Foundations/Colors",tags:["autodocs"]},a=[{name:"Cream Canvas",token:"--sq-color-cream",hex:"#f9f4eb",role:"Primary background in light mode"},{name:"Vibrant Accent Yellow",token:"--sq-color-yellow",hex:"#ffe32e",role:"Signature accent, wavy lines, promoted tags, buttons"},{name:"Pitch Dark Ground",token:"--sq-color-black",hex:"#000000",role:"Canvas ground in dark mode, headings in light mode"},{name:"Muted Beige Panel",token:"--sq-color-beige",hex:"#f0ece5",role:"Secondary surface background"},{name:"Pure White Highlight",token:"--sq-color-white",hex:"#ffffff",role:"Card & input background"},{name:"Pastel Lemon",token:"--sq-color-lemon",hex:"#fef280",role:"Secondary pastel highlight"},{name:"Pastel Peach",token:"--sq-color-peach",hex:"#fcdca6",role:"Secondary pastel accent"},{name:"Pastel Pink",token:"--sq-color-pink",hex:"#ffd2f3",role:"Secondary pastel accent"},{name:"Pastel Violet",token:"--sq-color-violet",hex:"#e5daf6",role:"Secondary pastel accent"},{name:"Neon Chartreuse",token:"--sq-color-neon-border",hex:"rgb(161, 255, 20)",role:"Explore button hover glow & border"}],o=()=>`
  <div style="padding: 2rem; max-width: 900px; font-family: var(--sq-font-family-normal);">
    <h2 class="u-h2" style="margin-bottom: 1.5rem;">Color Tokens</h2>
    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 1.5rem;">
      ${a.map(e=>`
        <div style="border: 1px solid rgba(0,0,0,0.1); border-radius: 6px; overflow: hidden; background: #fff;">
          <div style="height: 100px; background-color: var(${e.token}); border-bottom: 1px solid rgba(0,0,0,0.06);"></div>
          <div style="padding: 0.85rem;">
            <div style="font-weight: 600; font-size: 0.95rem;">${e.name}</div>
            <div style="font-family: var(--sq-font-family-mono); font-size: 0.75rem; color: rgba(0,0,0,0.6); margin-top: 2px;">
              <code>${e.token}</code>
            </div>
            <div style="font-family: var(--sq-font-family-mono); font-size: 0.75rem; color: rgba(0,0,0,0.85); font-weight: 600; margin-top: 4px;">
              ${e.hex}
            </div>
            <div style="font-size: 0.75rem; color: rgba(0,0,0,0.5); margin-top: 6px; line-height: 1.3;">
              ${e.role}
            </div>
          </div>
        </div>
      `).join("")}
    </div>
  </div>
`;var r,n,t;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`() => \`
  <div style="padding: 2rem; max-width: 900px; font-family: var(--sq-font-family-normal);">
    <h2 class="u-h2" style="margin-bottom: 1.5rem;">Color Tokens</h2>
    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 1.5rem;">
      \${swatches.map(s => \`
        <div style="border: 1px solid rgba(0,0,0,0.1); border-radius: 6px; overflow: hidden; background: #fff;">
          <div style="height: 100px; background-color: var(\${s.token}); border-bottom: 1px solid rgba(0,0,0,0.06);"></div>
          <div style="padding: 0.85rem;">
            <div style="font-weight: 600; font-size: 0.95rem;">\${s.name}</div>
            <div style="font-family: var(--sq-font-family-mono); font-size: 0.75rem; color: rgba(0,0,0,0.6); margin-top: 2px;">
              <code>\${s.token}</code>
            </div>
            <div style="font-family: var(--sq-font-family-mono); font-size: 0.75rem; color: rgba(0,0,0,0.85); font-weight: 600; margin-top: 4px;">
              \${s.hex}
            </div>
            <div style="font-size: 0.75rem; color: rgba(0,0,0,0.5); margin-top: 6px; line-height: 1.3;">
              \${s.role}
            </div>
          </div>
        </div>
      \`).join('')}
    </div>
  </div>
\``,...(t=(n=o.parameters)==null?void 0:n.docs)==null?void 0:t.source}}};const l=["Palette"];export{o as Palette,l as __namedExportsOrder,i as default};
