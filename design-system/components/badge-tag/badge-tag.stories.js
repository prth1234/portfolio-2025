import './badge-tag.css';

export default {
  title: 'Components/Badges & Tags',
  tags: ['autodocs'],
};

export const Badges = () => `
  <div style="padding: 2rem; display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
    <span class="sq-badge sq-badge--promoted">Promoted ✦</span>
    <span class="sq-badge sq-badge--faint">Initial Role</span>
    <span class="sq-badge sq-badge--faint">Career Progression</span>
    <span class="sq-score-badge">9.21 CGPA</span>
  </div>
`;

export const SkillTags = () => `
  <div style="padding: 2rem; display: flex; gap: 0.5rem; flex-wrap: wrap;">
    <span class="sq-tag">TypeScript</span>
    <span class="sq-tag">Python</span>
    <span class="sq-tag">Go</span>
    <span class="sq-tag">Docker</span>
    <span class="sq-tag">Kubernetes</span>
    <span class="sq-tag">Agentic AI</span>
    <span class="sq-tag">LLMs</span>
  </div>
`;

export const DarkVariants = () => `
  <div style="padding: 2rem; background: #000; display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;" class="u-theme-dark">
    <span class="sq-badge sq-badge--promoted">Promoted ✦</span>
    <span class="sq-badge sq-badge--dark">Multi-Agent</span>
    <span class="sq-tag">LangGraph</span>
    <span class="sq-tag">Qdrant</span>
  </div>
`;

