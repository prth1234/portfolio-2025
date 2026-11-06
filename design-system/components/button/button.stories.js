import './button.css';

const arrowSvg = `
  <svg class="sq-icon--arrow" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
  </svg>
`;

export default {
  title: 'Components/Button',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text', defaultValue: 'ENTER' },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'dark', 'outline'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    disabled: { control: 'boolean' },
    showArrow: { control: 'boolean' },
  },
};

const Template = ({
  label = 'ENTER',
  variant = 'primary',
  size = 'medium',
  disabled = false,
  showArrow = true,
  stateClass = '',
}) => {
  const sizeClass = size === 'small' ? 'sq-button--small' : size === 'large' ? 'sq-button--large' : '';
  const variantClass = `sq-button--${variant}`;
  const disabledAttr = disabled ? 'disabled' : '';

  return `
    <button class="sq-button ${variantClass} ${sizeClass} ${stateClass}" ${disabledAttr}>
      <span>${label}</span>
      ${showArrow ? arrowSvg : ''}
    </button>
  `;
};

export const Playground = Template.bind({});
Playground.args = {
  label: 'ENTER',
  variant: 'primary',
  size: 'medium',
  disabled: false,
  showArrow: true,
};

export const Primary = Template.bind({});
Primary.args = {
  label: 'ENTER',
  variant: 'primary',
};

export const Dark = Template.bind({});
Dark.args = {
  label: 'CONTACT ME',
  variant: 'dark',
};

export const Outline = Template.bind({});
Outline.args = {
  label: 'VIEW ALL',
  variant: 'outline',
};

export const Small = Template.bind({});
Small.args = {
  label: 'SUBMIT',
  size: 'small',
};

export const Large = Template.bind({});
Large.args = {
  label: 'LAUNCH EXPERIENCE',
  size: 'large',
};

/* Forced State Stories */
export const ForcedHover = Template.bind({});
ForcedHover.args = {
  label: 'HOVER STATE',
  stateClass: 'sq-button--hover',
};

export const ForcedActive = Template.bind({});
ForcedActive.args = {
  label: 'ACTIVE STATE',
  stateClass: 'sq-button--active',
};

export const ForcedFocus = Template.bind({});
ForcedFocus.args = {
  label: 'FOCUS STATE',
  stateClass: 'sq-button--focus',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'DISABLED',
  disabled: true,
};

