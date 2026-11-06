import './click-animation.css';
import { ClickAnimation } from './click-animation.js';

export default {
  title: 'Components/Click Animation',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
};

export const InteractiveSandbox = () => {
  // Ensure instance is initialized
  if (typeof window !== 'undefined' && !window.__sqClickAnimationInstance) {
    window.__sqClickAnimationInstance = new ClickAnimation();
  }

  return `
    <div style="padding: 3rem 2rem; border: 2px dashed rgba(0,0,0,0.15); border-radius: 8px; text-align: center; background: #f9f4eb;">
      <span class="sq-eyebrow" style="margin-bottom: 0.5rem; display: block;">PORTFOLIO SIGNATURE EFFECT</span>
      <h2 class="u-h2" style="margin-bottom: 1rem;">Click Anywhere In This Area ✦</h2>
      <p class="u-p1" style="max-width: 600px; margin: 0 auto 2rem; color: rgba(0,0,0,0.7);">
        Notice the 4 radiating spark particles bursting out from your cursor at -45°, -90°, -135°, and -180° with difference mix-blend-mode and elastic easing.
      </p>

      <div style="display: inline-flex; gap: 1rem; align-items: center; justify-content: center; flex-wrap: wrap;">
        <button type="button" class="sq-button sq-button--primary">
          Click Here
        </button>
        <button type="button" class="sq-button sq-button--dark">
          Or Click Here
        </button>
        <div style="background: #000; color: #fff; padding: 12px 24px; border-radius: 4px; font-family: var(--sq-font-family-mono); font-size: 0.8rem;">
          Click On Dark Surface
        </div>
      </div>
    </div>
  `;
};

