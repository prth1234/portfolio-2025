import './wavy-underline.css';

export default {
  title: 'Components/Wavy Underline',
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' },
    tag: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'span', 'p'],
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'thick', 'animated'],
    },
    color: { control: 'color' },
  },
};

const Template = ({ text = 'Experience & Education', tag = 'h2', variant = 'default', color }) => {
  const customColorStyle = color
    ? `style="--sq-wavy-image: url('data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' viewBox=\\'0 0 20 6\\'%3E%3Cpath d=\\'M0 3 Q 5 0, 10 3 T 20 3\\' fill=\\'none\\' stroke=\\'${encodeURIComponent(
        color
      )}\\' stroke-width=\\'2.4\\' stroke-linecap=\\'round\\'/%3E%3C/svg%3E')"`
    : '';

  const variantClass =
    variant === 'thick'
      ? 'sq-wavy-underline sq-wavy-underline--thick'
      : variant === 'animated'
      ? 'sq-wavy-underline sq-wavy-underline--animated'
      : 'sq-wavy-underline';

  return `
    <div style="padding: 2rem;">
      <${tag} class="${variantClass}" ${customColorStyle}>${text}</${tag}>
    </div>
  `;
};

export const Default = Template.bind({});
Default.args = {
  text: 'Experience & Milestones',
  tag: 'h2',
  variant: 'default',
};

export const InHeading1 = Template.bind({});
InHeading1.args = {
  text: 'Parth Singh',
  tag: 'h1',
  variant: 'default',
};

export const InHeading3 = Template.bind({});
InHeading3.args = {
  text: 'Software Engineer',
  tag: 'h3',
  variant: 'default',
};

export const InlineWord = () => `
  <div style="padding: 2rem; font-family: var(--sq-font-family-normal); font-size: 1.25rem;">
    Specializing in scalable cloud platforms, distributed systems, and
    <span class="sq-wavy-underline" style="font-weight: 600;">Agentic AI Solutions</span>
    with autonomous orchestration.
  </div>
`;

export const ThickVariant = Template.bind({});
ThickVariant.args = {
  text: 'Heavy Underline Motif',
  tag: 'h2',
  variant: 'thick',
};

export const AnimatedScroll = Template.bind({});
AnimatedScroll.args = {
  text: 'Animated Flowing Squiggle',
  tag: 'h2',
  variant: 'animated',
};

export const CustomColor = Template.bind({});
CustomColor.args = {
  text: 'Pastel Peach Variant',
  tag: 'h2',
  variant: 'default',
  color: '#fcdca6',
};

