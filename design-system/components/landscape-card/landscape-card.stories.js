import './landscape-card.css';

export default {
  title: 'Components/Landscape Card',
  tags: ['autodocs'],
  argTypes: {
    model: { control: 'text', defaultValue: 'XR65D' },
  },
};

export const Default = ({ model = 'XR65D' }) => `
  <div style="padding: 2rem;">
    <div class="sq-landscape-card">
      <div class="sq-landscape-card__header">
        <span class="sq-landscape-card__model">${model}</span>
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
`;

