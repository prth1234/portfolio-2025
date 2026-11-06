import './project-card.css';
import '../data-table/data-table.css';

const cornerSvg = `
  <svg class="sq-project-card__corner" viewBox="0 0 93 93" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill="currentColor" d="M31 0h62v31H62v31H31v31H0V31h31V0Z"></path>
  </svg>
`;

export default {
  title: 'Components/Project Card',
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text', defaultValue: 'AI Agent Swarm' },
    category: { control: 'text', defaultValue: 'Autonomous AI' },
  },
};

export const Default = ({
  title = 'Marketing Strategy Research Agent',
  category = 'Multi-Agent',
}) => `
  <div style="padding: 2rem; background: #000; display: flex; justify-content: center;">
    <div class="sq-project-card">
      <div class="sq-project-card__corner sq-project-card__corner--tl">${cornerSvg}</div>
      <div class="sq-project-card__corner sq-project-card__corner--tr">${cornerSvg}</div>
      <div class="sq-project-card__corner sq-project-card__corner--bl">${cornerSvg}</div>
      <div class="sq-project-card__corner sq-project-card__corner--br">${cornerSvg}</div>

      <div class="sq-project-card__header">
        <span class="sq-project-card__tag">${category}</span>
        <span style="font-family: var(--sq-font-family-mono); font-size: 0.75rem; color: #ffe32e;">01 ✦</span>
      </div>

      <div>
        <h3 class="sq-project-card__title">${title}</h3>
        <p class="sq-project-card__desc">
          Swarm of autonomous AI agents conducting real-time market research & competitive analysis to synthesize end-to-end go-to-market strategies.
        </p>
      </div>

      <div class="sq-project-card__tags">
        <span class="sq-skill-tag" style="color: #fff; border-color: rgba(255,255,255,0.2);">LangGraph</span>
        <span class="sq-skill-tag" style="color: #fff; border-color: rgba(255,255,255,0.2);">Python</span>
        <span class="sq-skill-tag" style="color: #fff; border-color: rgba(255,255,255,0.2);">Qdrant</span>
      </div>
    </div>
  </div>
`;

