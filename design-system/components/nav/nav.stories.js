import './nav.css';

export default {
  title: 'Components/Navigation',
  tags: ['autodocs'],
  argTypes: {
    brandText: { control: 'text', defaultValue: 'PORTFOLIO' },
    brandSubtext: { control: 'text', defaultValue: 'ARCHIVE' },
    activeTab: {
      control: { type: 'select' },
      options: ['About', 'Experience', 'Projects', 'More'],
      defaultValue: 'Experience',
    },
    variant: {
      control: { type: 'select' },
      options: ['editorial', 'capsule'],
      defaultValue: 'editorial',
    },
    theme: {
      control: { type: 'select' },
      options: ['light', 'dark'],
      defaultValue: 'light',
    },
  },
};

const setupTabSwitcher = `
  <script>
    (function() {
      window.handleSqTabClick = function(el, evt) {
        if (evt) evt.preventDefault();
        var navList = el.closest('.sq-nav__list');
        if (!navList) return;
        var allButtons = navList.querySelectorAll('.sq-nav__button');
        allButtons.forEach(function(b) { b.classList.remove('is-active', 'w--current'); });
        el.classList.add('is-active', 'w--current');
      };
    })();
  </script>
`;

export const AuthenticEditorialNav = ({
  brandText = 'PORTFOLIO',
  brandSubtext = 'ARCHIVE',
  activeTab = 'Experience',
  variant = 'editorial',
  theme = 'light',
}) => {
  const tabs = ['About', 'Experience', 'Projects', 'More'];
  const themeClass = theme === 'dark' ? 'u-theme-dark' : 'u-theme-light';
  const navVariantClass = variant === 'capsule' ? 'sq-nav--capsule' : '';

  return `
    ${setupTabSwitcher}
    <div class="${themeClass}" style="width: 100%; min-height: 120px;">
      <header class="sq-header">
        <div class="sq-header__inner">
          <!-- Brand Badge on Left (Exact match to real app in Screenshot 5) -->
          <a href="javascript:void(0)" onclick="event.preventDefault();" class="sq-brand-badge">
            <span>${brandText}</span>
            <span class="sq-brand-badge__star">✦</span>
            <span>${brandSubtext}</span>
          </a>

          <!-- Pill Navigation in Center -->
          <nav class="sq-nav ${navVariantClass}">
            <ul class="sq-nav__list">
              ${tabs
                .map(
                  (tab) => `
                <li class="sq-nav__item">
                  <a href="javascript:void(0)"
                     onclick="window.handleSqTabClick(this, event)"
                     class="sq-nav__button ${tab === activeTab ? 'is-active w--current' : ''}">
                    ${tab}
                  </a>
                </li>
              `
                )
                .join('')}
            </ul>
          </nav>

          <!-- Feed Button on Right -->
          <a href="javascript:void(0)" onclick="event.preventDefault();" class="sq-feed-button">
            FEED
          </a>
        </div>
      </header>
    </div>
  `;
};

export const CapsuleTrackNav = AuthenticEditorialNav.bind({});
CapsuleTrackNav.args = {
  brandText: 'STUDIO',
  brandSubtext: 'SYSTEM',
  activeTab: 'About',
  variant: 'capsule',
  theme: 'light',
};

export const DarkThemeNav = AuthenticEditorialNav.bind({});
DarkThemeNav.args = {
  brandText: 'PROJECTS',
  brandSubtext: 'DARK',
  activeTab: 'Projects',
  variant: 'editorial',
  theme: 'dark',
};

export const PillNavOnly = ({ activeTab = 'Experience' }) => {
  const tabs = ['About', 'Experience', 'Projects', 'More'];
  return `
    ${setupTabSwitcher}
    <div style="padding: 2rem; display: flex; justify-content: center; background: #f9f4eb;">
      <nav class="sq-nav">
        <ul class="sq-nav__list">
          ${tabs
            .map(
              (tab) => `
            <li class="sq-nav__item">
              <a href="javascript:void(0)"
                 onclick="window.handleSqTabClick(this, event)"
                 class="sq-nav__button ${tab === activeTab ? 'is-active w--current' : ''}">
                ${tab}
              </a>
            </li>
          `
            )
            .join('')}
        </ul>
      </nav>
    </div>
  `;
};
