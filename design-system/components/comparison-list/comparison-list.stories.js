import './comparison-list.css';

export default {
  title: 'Components/Side-by-Side Comparison List',
  tags: ['autodocs'],
  argTypes: {
    theme: {
      control: { type: 'select' },
      options: ['dark', 'light'],
      defaultValue: 'dark',
    },
    activeRowIndex: {
      control: { type: 'select' },
      options: [0, 1, 2, 3, 4, 5],
      defaultValue: 1, // Row 1: Autonomous Semantic Layer Engine (matches user screenshot)
    },
  },
};

/* SVG Icons extracted with exact fidelity from main/index3.html */
const icons = {
  swarm: `
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path fill-rule="evenodd" d="M12 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM4 14a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm16 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM11 7.8V12h2V7.8a4.98 4.98 0 0 1-2 0ZM7.2 14.5l3.8-2.5 1 1.7-3.8 2.5-1-1.7Zm9.6 0-3.8-2.5-1 1.7 3.8 2.5 1-1.7Z" clip-rule="evenodd" />
    </svg>
  `,
  schema: `
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path fill-rule="evenodd" d="M4 3h16v4H4V3Zm0 7h16v4H4v-4Zm0 7h16v4H4v-4Zm2-12h2v2H6V5Zm0 7h2v2H6v-2Zm0 7h2v2H6v-2Z" clip-rule="evenodd" />
    </svg>
  `,
  automation: `
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path fill-rule="evenodd" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm1 5h-2v4H7v2h4v4h2v-4h4v-2h-4V7Z" clip-rule="evenodd" />
    </svg>
  `,
  sql: `
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M10 2h4v4h-4V2ZM3 8h18v2h-6v12h-2v-6h-2v6H9V10H3V8Z" />
    </svg>
  `,
  vision: `
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path fill-rule="evenodd" d="M18 2H6v2H4v2H2v12h2v2h2v2h12v-2h2v-2h2V6h-2V4h-2V2Zm-8 4h6v2h-6V6Zm0 10H8v-3H6v-2h2V8h2v3h4v2h-4v3Zm0 0h6v2h-6v-2Z" clip-rule="evenodd" />
    </svg>
  `,
  recsys: `
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 1h2v8h8v4h-2v2h-2v2h-2v2h-2v2h-2v2h-2v-8H2v-4h2V9h2V7h2V5h2V3h2V1Z" />
    </svg>
  `,
};

const itemsData = [
  {
    title: 'Marketing Strategy Research Agent',
    icon: icons.swarm,
    desc: 'Swarm of AI Agents that conducts real-time market research & competitive analysis to generate full-funnel marketing strategies; leverages web search, retrieval-augmented reasoning, & planner-driven task orchestration, with continuous performance tuning via outcome-driven iteration & cross-agent evaluation.',
  },
  {
    title: 'Autonomous Semantic Layer Engine',
    icon: icons.schema,
    desc: 'Agentic architecture that transforms database schemas into metric definitions, relationship graphs & lineage-aware semantic abstractions for analytics-grade LLM querying across OLAP systems & intelligent dashboards. Reduced metric hallucination & logical query errors by ~48% compared to prompt-only queries.',
  },
  {
    title: 'AI-Fill (Agentic Automation)',
    icon: icons.automation,
    desc: 'Autonomous agentic tool using LLMs & browser automation for end-to-end form completion.',
  },
  {
    title: 'Text2SQL',
    icon: icons.sql,
    desc: 'AI platform converting natural language queries into schema-aware, optimized SQL.',
  },
  {
    title: 'Deepfake Detection',
    icon: icons.vision,
    desc: 'Developed a deepfake detection model using CV techniques to detect manipulated images/videos by analyzing emotional cues and spotting data anomalies.',
  },
  {
    title: 'Recommendation System',
    icon: icons.recsys,
    desc: 'Built personalized recommendation engine enhancing user engagement and content discovery.',
  },
];

const interactiveClickScript = `
  <script>
    (function() {
      window.handleComparisonClick = function(itemEl) {
        var list = itemEl.closest('.sq-comparison-list');
        if (!list) return;
        var allItems = list.querySelectorAll('.sq-comparison-item');
        allItems.forEach(function(i) { i.classList.remove('is-active', 'is-inview'); });
        itemEl.classList.add('is-active', 'is-inview');
      };
    })();
  </script>
`;

/**
 * Replica of Screenshot 5 (media_1793933141619_f84afdd7.png)
 */
export const ScreenshotExactReplica = ({
  theme = 'dark',
  activeRowIndex = 1,
}) => {
  const themeClass = theme === 'dark' ? 'u-theme-dark' : 'u-theme-light';
  const bgColor = theme === 'dark' ? '#000000' : '#f9f4eb';

  return `
    ${interactiveClickScript}
    <div class="${themeClass}" style="background-color: ${bgColor}; padding: 3.5rem var(--sq-grid-margin, 2rem); min-height: 100vh;">
      <ul class="sq-comparison-list">
        ${itemsData
          .map(
            (item, idx) => `
          <li class="sq-comparison-item ${idx === activeRowIndex ? 'is-active is-inview' : ''}"
              onclick="window.handleComparisonClick(this)">
            <div class="sq-comparison-item__inner">
              <div class="sq-comparison-header">
                <h3 class="sq-comparison-title">${item.title}</h3>
              </div>
              <div class="sq-comparison-visual">
                <div class="sq-comparison-icon">
                  ${item.icon}
                </div>
              </div>
              <div class="sq-comparison-content">
                <p class="sq-comparison-paragraph">${item.desc}</p>
              </div>
            </div>
          </li>
        `
          )
          .join('')}
      </ul>
    </div>
  `;
};

export const LightThemeVariant = ScreenshotExactReplica.bind({});
LightThemeVariant.args = {
  theme: 'light',
  activeRowIndex: 0,
};

export const SingleRowPreview = () => `
  <div style="background: #000; padding: 2rem;">
    <ul class="sq-comparison-list">
      <li class="sq-comparison-item is-active is-inview">
        <div class="sq-comparison-item__inner">
          <div class="sq-comparison-header">
            <h3 class="sq-comparison-title">Autonomous Semantic Layer Engine</h3>
          </div>
          <div class="sq-comparison-visual">
            <div class="sq-comparison-icon">
              ${icons.schema}
            </div>
          </div>
          <div class="sq-comparison-content">
            <p class="sq-comparison-paragraph">
              Agentic architecture that transforms database schemas into metric definitions, relationship graphs & lineage-aware semantic abstractions for analytics-grade LLM querying across OLAP systems.
            </p>
          </div>
        </div>
      </li>
    </ul>
  </div>
`;
