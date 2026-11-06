import './dotted-leader.css';

export default {
  title: 'Components/Dotted Leader List',
  tags: ['autodocs'],
};

export const Default = () => `
  <div style="padding: 2rem; background: #000; color: #f9f4eb;">
    <ul class="sq-dotted-leader-list">
      <li>
        <a href="#proj-1" class="sq-dotted-leader-row">
          <span class="sq-dotted-leader-index">01</span>
          <span class="sq-dotted-leader-dots"></span>
          <span class="sq-dotted-leader-title">MARKETING STRATEGY RESEARCH AGENT</span>
        </a>
      </li>
      <li>
        <a href="#proj-2" class="sq-dotted-leader-row">
          <span class="sq-dotted-leader-index">02</span>
          <span class="sq-dotted-leader-dots"></span>
          <span class="sq-dotted-leader-title">AGENTIC FINOPS & COST OPTIMIZER</span>
        </a>
      </li>
      <li>
        <a href="#proj-3" class="sq-dotted-leader-row">
          <span class="sq-dotted-leader-index">03</span>
          <span class="sq-dotted-leader-dots"></span>
          <span class="sq-dotted-leader-title">MULTI-CLOUD BILLING LAKEHOUSE</span>
        </a>
      </li>
      <li>
        <a href="#proj-4" class="sq-dotted-leader-row">
          <span class="sq-dotted-leader-index">04</span>
          <span class="sq-dotted-leader-dots"></span>
          <span class="sq-dotted-leader-title">TEXT2SQL DISTRIBUTED ENGINE</span>
        </a>
      </li>
    </ul>
  </div>
`;

