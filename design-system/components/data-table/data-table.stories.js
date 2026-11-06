import './data-table.css';

export default {
  title: 'Components/Data Tables',
  tags: ['autodocs'],
};

export const EducationTable = () => `
  <div style="padding: 2rem; max-width: 850px; background: #fff;">
    <div class="sq-table-wrap">
      <table class="sq-table education-table">
        <thead>
          <tr>
            <th>Institution</th>
            <th>Degree</th>
            <th>Year</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="edu-inst">
              <strong>Vellore Institute of Technology</strong>
              <span class="edu-location">Vellore, Tamil Nadu</span>
            </td>
            <td>B.Tech in Computer Science & Engineering</td>
            <td class="edu-year">2020 – 2024</td>
            <td class="edu-score"><span class="edu-score-badge">9.21 CGPA</span></td>
          </tr>
          <tr>
            <td class="edu-inst">
              <strong>Delhi Public School</strong>
              <span class="edu-location">Noida, Uttar Pradesh</span>
            </td>
            <td>All India Senior School Certificate (CBSE XII)</td>
            <td class="edu-year">2020</td>
            <td class="edu-score"><span class="edu-score-badge">94.6%</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
`;

export const SkillsTable = () => `
  <div style="padding: 2rem; max-width: 850px; background: #fff;">
    <div class="sq-table-wrap">
      <table class="sq-table skills-table">
        <thead>
          <tr>
            <th>Category</th>
            <th>Technologies & Primitives</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="skill-cat">Languages</td>
            <td>
              <div class="skill-items">
                <span class="sq-skill-tag">Python</span>
                <span class="sq-skill-tag">TypeScript</span>
                <span class="sq-skill-tag">Go</span>
                <span class="sq-skill-tag">Java</span>
                <span class="sq-skill-tag">SQL</span>
              </div>
            </td>
          </tr>
          <tr>
            <td class="skill-cat">Agentic AI & LLMs</td>
            <td>
              <div class="skill-items">
                <span class="sq-skill-tag">Multi-Agent Swarms</span>
                <span class="sq-skill-tag">LangGraph</span>
                <span class="sq-skill-tag">MCP Primitives</span>
                <span class="sq-skill-tag">Vector DBs</span>
                <span class="sq-skill-tag">Prompt Engineering</span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
`;

