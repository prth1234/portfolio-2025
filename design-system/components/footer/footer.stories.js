import './footer.css';

const ceSvg = `
  <svg class="sq-icon--ce" viewBox="0 0 21 16" fill="currentColor">
    <path d="M8 2a6 6 0 100 12A6 6 0 008 2zM1 8a7 7 0 1113.3 3.5l-1.9-1a5 5 0 100-5l1.9-1A7 7 0 011 8zm15-4v2h3v2h-3v2h4v2h-6V2h6v2h-4z" />
  </svg>
`;

export default {
  title: 'Components/Footer',
  tags: ['autodocs'],
  argTypes: {
    theme: {
      control: { type: 'select' },
      options: ['light', 'dark'],
      defaultValue: 'light',
    },
  },
};

export const Default = ({ theme = 'light' }) => {
  const themeClass = theme === 'dark' ? 'u-theme-dark' : 'u-theme-light';
  return `
    <div class="${themeClass}">
      <footer class="sq-footer">
        <div class="sq-footer__inner">
          <ul class="sq-footer__links">
            <li><a href="https://github.com" target="_blank" class="sq-footer__link">GitHub ↗</a></li>
            <li><a href="https://linkedin.com" target="_blank" class="sq-footer__link">LinkedIn ↗</a></li>
            <li><a href="mailto:hello@example.com" class="sq-footer__link">Email ↗</a></li>
          </ul>

          <div class="sq-footer__meta">
            <span>© 2026 STUDIO ARCHIVE</span>
            ${ceSvg}
          </div>
        </div>
      </footer>
    </div>
  `;
};

export const DarkTheme = Default.bind({});
DarkTheme.args = {
  theme: 'dark',
};

