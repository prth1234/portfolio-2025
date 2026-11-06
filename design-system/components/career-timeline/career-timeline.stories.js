import './career-timeline.css';

export default {
  title: 'Components/Career Progression Timeline',
  tags: ['autodocs'],
  argTypes: {
    company: { control: 'text', defaultValue: 'Flexera GCC' },
    theme: {
      control: { type: 'select' },
      options: ['light', 'dark'],
      defaultValue: 'light',
    },
  },
};

export const Default = ({ company = 'Flexera GCC', theme = 'light' }) => {
  const themeClass = theme === 'dark' ? 'u-theme-dark' : 'u-theme-light';
  return `
    <div class="${themeClass}" style="padding: 2rem; max-width: 650px;">
      <div class="sq-career-timeline">
        <div class="sq-career-timeline__header">
          <span class="sq-career-timeline__company">${company}</span>
          <span class="sq-career-timeline__badge">Career Progression</span>
        </div>

        <div class="sq-career-timeline__list">
          <!-- Step 1: Current Promoted Role -->
          <div class="sq-career-timeline__step is-current">
            <div class="sq-career-timeline__track">
              <span class="sq-career-timeline__node">✦</span>
              <span class="sq-career-timeline__stem"></span>
            </div>
            <div class="sq-career-timeline__body">
              <div class="sq-career-timeline__heading">
                <span class="sq-career-timeline__title">Software Engineer</span>
                <span class="sq-career-timeline__tag sq-career-timeline__tag--promoted">Promoted ✦</span>
              </div>
              <div class="sq-career-timeline__date">Apr 2026 – Present</div>
            </div>
          </div>

          <!-- Step 2: Initial Role -->
          <div class="sq-career-timeline__step">
            <div class="sq-career-timeline__track">
              <span class="sq-career-timeline__node--past">●</span>
            </div>
            <div class="sq-career-timeline__body">
              <div class="sq-career-timeline__heading">
                <span class="sq-career-timeline__title">Associate Software Engineer</span>
                <span class="sq-career-timeline__tag">Initial Role</span>
              </div>
              <div class="sq-career-timeline__date">Aug 2024 – Apr 2026</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
};

export const DarkTheme = Default.bind({});
DarkTheme.args = {
  company: 'Flexera GCC',
  theme: 'dark',
};

export const MultiStepProgression = () => `
  <div style="padding: 2rem; max-width: 650px;">
    <div class="sq-career-timeline">
      <div class="sq-career-timeline__header">
        <span class="sq-career-timeline__company">Tech Corp Enterprise</span>
        <span class="sq-career-timeline__badge">3 Promotions</span>
      </div>

      <div class="sq-career-timeline__list">
        <div class="sq-career-timeline__step is-current">
          <div class="sq-career-timeline__track">
            <span class="sq-career-timeline__node">✦</span>
            <span class="sq-career-timeline__stem"></span>
          </div>
          <div class="sq-career-timeline__body">
            <div class="sq-career-timeline__heading">
              <span class="sq-career-timeline__title">Staff AI Engineer</span>
              <span class="sq-career-timeline__tag sq-career-timeline__tag--promoted">Promoted ✦</span>
            </div>
            <div class="sq-career-timeline__date">2026 – Present</div>
          </div>
        </div>

        <div class="sq-career-timeline__step">
          <div class="sq-career-timeline__track">
            <span class="sq-career-timeline__node--past">●</span>
            <span class="sq-career-timeline__stem"></span>
          </div>
          <div class="sq-career-timeline__body">
            <div class="sq-career-timeline__heading">
              <span class="sq-career-timeline__title">Senior Software Engineer</span>
              <span class="sq-career-timeline__tag">Promotion</span>
            </div>
            <div class="sq-career-timeline__date">2024 – 2026</div>
          </div>
        </div>

        <div class="sq-career-timeline__step">
          <div class="sq-career-timeline__track">
            <span class="sq-career-timeline__node--past">●</span>
          </div>
          <div class="sq-career-timeline__body">
            <div class="sq-career-timeline__heading">
              <span class="sq-career-timeline__title">Software Engineer</span>
              <span class="sq-career-timeline__tag">Initial Role</span>
            </div>
            <div class="sq-career-timeline__date">2022 – 2024</div>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

