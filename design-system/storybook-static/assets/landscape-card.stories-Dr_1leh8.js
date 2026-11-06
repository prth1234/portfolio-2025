const n={title:"Components/Landscape Card",tags:["autodocs"],argTypes:{model:{control:"text",defaultValue:"XR65D"}}},a=({model:e="XR65D"})=>`
  <div style="padding: 2rem;">
    <div class="sq-landscape-card">
      <div class="sq-landscape-card__header">
        <span class="sq-landscape-card__model">${e}</span>
        <div class="sq-landscape-card__bars">
          <div class="sq-landscape-card__bar"></div>
          <div class="sq-landscape-card__bar"></div>
          <div class="sq-landscape-card__bar"></div>
        </div>
      </div>

      <div class="sq-landscape-card__media">
        <img src="./img1.png" alt="Pixel Art Landscape" class="sq-landscape-card__img" onerror="this.src='https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=500&auto=format&fit=crop'" />
      </div>

      <div class="sq-landscape-card__footer">
        <span>(CL) 99</span>
      </div>
    </div>
  </div>
`;var s,d,c;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`({
  model = 'XR65D'
}) => \`
  <div style="padding: 2rem;">
    <div class="sq-landscape-card">
      <div class="sq-landscape-card__header">
        <span class="sq-landscape-card__model">\${model}</span>
        <div class="sq-landscape-card__bars">
          <div class="sq-landscape-card__bar"></div>
          <div class="sq-landscape-card__bar"></div>
          <div class="sq-landscape-card__bar"></div>
        </div>
      </div>

      <div class="sq-landscape-card__media">
        <img src="./img1.png" alt="Pixel Art Landscape" class="sq-landscape-card__img" onerror="this.src='https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=500&auto=format&fit=crop'" />
      </div>

      <div class="sq-landscape-card__footer">
        <span>(CL) 99</span>
      </div>
    </div>
  </div>
\``,...(c=(d=a.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const r=["Default"];export{a as Default,r as __namedExportsOrder,n as default};
