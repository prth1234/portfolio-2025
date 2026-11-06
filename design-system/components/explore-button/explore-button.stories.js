import './explore-button.css';

const compassSvg = `
  <svg class="sq-explore-button__icon" viewBox="0 0 512 512" height="25" width="25" xmlns="http://www.w3.org/2000/svg">
    <path fill="rgb(19, 19, 19)" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"></path>
  </svg>
`;

export default {
  title: 'Components/Explore Button',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text', defaultValue: 'Explore' },
  },
};

export const Default = ({ label = 'Explore' }) => `
  <div style="padding: 2rem;">
    <button class="sq-explore-button" type="button">
      ${compassSvg}
      ${label}
    </button>
  </div>
`;

export const ForcedHover = () => `
  <div style="padding: 2rem;">
    <button class="sq-explore-button sq-explore-button--hover" type="button">
      ${compassSvg}
      Explore
    </button>
  </div>
`;

export const ForcedActive = () => `
  <div style="padding: 2rem;">
    <button class="sq-explore-button sq-explore-button--active" type="button">
      ${compassSvg}
      Explore
    </button>
  </div>
`;

export const ForcedFocus = () => `
  <div style="padding: 2rem;">
    <button class="sq-explore-button sq-explore-button--focus" type="button">
      ${compassSvg}
      Explore
    </button>
  </div>
`;

