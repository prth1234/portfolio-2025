const t={title:"Foundations/Motion",tags:["autodocs"]},i=()=>`
  <div style="padding: 2rem; max-width: 800px; font-family: var(--sq-font-family-mono);">
    <h2 class="u-h2" style="margin-bottom: 1.5rem;">Motion & Easings</h2>

    <style>
      .motion-box {
        width: 48px;
        height: 48px;
        background: var(--sq-color-yellow);
        border: 1px solid rgba(0,0,0,0.15);
        border-radius: 4px;
        position: relative;
        left: 0;
        animation: demo-slide 2s infinite alternate;
      }
      .motion-box.bouncy { animation-timing-function: var(--sq-bouncy-ease); }
      .motion-box.smooth { animation-timing-function: var(--sq-smooth-ease); }
      .motion-box.color { animation-timing-function: var(--sq-color-ease); }

      @keyframes demo-slide {
        from { left: 0; }
        to { left: calc(100% - 48px); }
      }
    </style>

    <div style="display: flex; flex-direction: column; gap: 2rem;">
      <div style="background: #fff; padding: 1.25rem; border: 1px solid rgba(0,0,0,0.08); border-radius: 6px;">
        <div style="font-size: 0.85rem; font-weight: 600; margin-bottom: 0.5rem;">
          --sq-bouncy-ease: cubic-bezier(.34, 1.64, .64, 1)
        </div>
        <div style="width: 100%; height: 50px; position: relative;">
          <div class="motion-box bouncy"></div>
        </div>
      </div>

      <div style="background: #fff; padding: 1.25rem; border: 1px solid rgba(0,0,0,0.08); border-radius: 6px;">
        <div style="font-size: 0.85rem; font-weight: 600; margin-bottom: 0.5rem;">
          --sq-smooth-ease: cubic-bezier(.32, .72, 0, 1)
        </div>
        <div style="width: 100%; height: 50px; position: relative;">
          <div class="motion-box smooth"></div>
        </div>
      </div>
    </div>
  </div>
`;var o,n,e;i.parameters={...i.parameters,docs:{...(o=i.parameters)==null?void 0:o.docs,source:{originalSource:`() => \`
  <div style="padding: 2rem; max-width: 800px; font-family: var(--sq-font-family-mono);">
    <h2 class="u-h2" style="margin-bottom: 1.5rem;">Motion & Easings</h2>

    <style>
      .motion-box {
        width: 48px;
        height: 48px;
        background: var(--sq-color-yellow);
        border: 1px solid rgba(0,0,0,0.15);
        border-radius: 4px;
        position: relative;
        left: 0;
        animation: demo-slide 2s infinite alternate;
      }
      .motion-box.bouncy { animation-timing-function: var(--sq-bouncy-ease); }
      .motion-box.smooth { animation-timing-function: var(--sq-smooth-ease); }
      .motion-box.color { animation-timing-function: var(--sq-color-ease); }

      @keyframes demo-slide {
        from { left: 0; }
        to { left: calc(100% - 48px); }
      }
    </style>

    <div style="display: flex; flex-direction: column; gap: 2rem;">
      <div style="background: #fff; padding: 1.25rem; border: 1px solid rgba(0,0,0,0.08); border-radius: 6px;">
        <div style="font-size: 0.85rem; font-weight: 600; margin-bottom: 0.5rem;">
          --sq-bouncy-ease: cubic-bezier(.34, 1.64, .64, 1)
        </div>
        <div style="width: 100%; height: 50px; position: relative;">
          <div class="motion-box bouncy"></div>
        </div>
      </div>

      <div style="background: #fff; padding: 1.25rem; border: 1px solid rgba(0,0,0,0.08); border-radius: 6px;">
        <div style="font-size: 0.85rem; font-weight: 600; margin-bottom: 0.5rem;">
          --sq-smooth-ease: cubic-bezier(.32, .72, 0, 1)
        </div>
        <div style="width: 100%; height: 50px; position: relative;">
          <div class="motion-box smooth"></div>
        </div>
      </div>
    </div>
  </div>
\``,...(e=(n=i.parameters)==null?void 0:n.docs)==null?void 0:e.source}}};const s=["LiveEasingDemos"];export{i as LiveEasingDemos,s as __namedExportsOrder,t as default};
