import './accordion.css';

const plusIconSvg = `
  <svg class="sq-accordion__icon" viewBox="0 0 20 20" fill="currentColor">
    <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
  </svg>
`;

export default {
  title: 'Components/Accordion',
  tags: ['autodocs'],
  argTypes: {
    isOpen: { control: 'boolean', defaultValue: false },
    title: { control: 'text', defaultValue: 'Technical Skills & Domains' },
  },
};

export const Default = ({ isOpen = false, title = 'Technical Skills & Domains' }) => `
  <div style="padding: 2rem; max-width: 800px;">
    <div class="sq-accordion">
      <details class="sq-accordion__details" ${isOpen ? 'open' : ''}>
        <summary class="sq-accordion__summary">
          <span class="sq-accordion__title">${title}</span>
          ${plusIconSvg}
        </summary>
        <div class="sq-accordion__content">
          <p class="u-p1" style="color: #333;">
            Full-stack distributed cloud architecture, Agentic AI orchestration, microservices with Go and Python, React/TypeScript frontends, and automated CI/CD pipelines.
          </p>
        </div>
      </details>
    </div>
  </div>
`;

export const OpenStateWithWavyUnderline = Default.bind({});
OpenStateWithWavyUnderline.args = {
  isOpen: true,
  title: 'Education & Academic Background',
};

export const AccordionGroup = () => `
  <div style="padding: 2rem; max-width: 800px;">
    <div class="sq-accordion">
      <details class="sq-accordion__details" open>
        <summary class="sq-accordion__summary">
          <span class="sq-accordion__title">01. Artificial Intelligence & Agents</span>
          ${plusIconSvg}
        </summary>
        <div class="sq-accordion__content">
          <p class="u-p1">Autonomous multi-agent architectures, RAG, prompt tuning, and model evaluation systems.</p>
        </div>
      </details>
    </div>

    <div class="sq-accordion">
      <details class="sq-accordion__details">
        <summary class="sq-accordion__summary">
          <span class="sq-accordion__title">02. Cloud & FinOps Automation</span>
          ${plusIconSvg}
        </summary>
        <div class="sq-accordion__content">
          <p class="u-p1">Multi-cloud cost platform, Kubernetes rightsizing, and automated SLA alerting.</p>
        </div>
      </details>
    </div>
  </div>
`;

