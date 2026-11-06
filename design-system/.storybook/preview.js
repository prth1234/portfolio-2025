import '../dist/design-system.css';
import '../components/click-animation/click-animation.css';
import '../components/click-animation/click-animation.js';

/** @type { import('@storybook/html').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      expanded: true,
    },
    backgrounds: {
      default: 'Cream Canvas',
      values: [
        { name: 'Cream Canvas', value: '#f9f4eb' },
        { name: 'Pitch Dark', value: '#000000' },
        { name: 'Beige Surface', value: '#f0ece5' },
        { name: 'Pure White', value: '#ffffff' },
      ],
    },
    viewport: {
      viewports: {
        mobile: {
          name: 'Mobile (375px)',
          styles: { width: '375px', height: '667px' },
        },
        tablet: {
          name: 'Tablet (768px)',
          styles: { width: '768px', height: '1024px' },
        },
        desktop: {
          name: 'Desktop (1280px)',
          styles: { width: '1280px', height: '800px' },
        },
        ultrawide: {
          name: 'Ultrawide (1600px)',
          styles: { width: '1600px', height: '1000px' },
        },
      },
    },
    a11y: {
      element: '#storybook-root',
      config: {},
      options: {},
      manual: false,
    },
  },
};

export default preview;

