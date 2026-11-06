export default {
  title: 'Foundations/Iconography',
  tags: ['autodocs'],
};

export const IconSet = () => `
  <div style="padding: 2rem; max-width: 800px; font-family: var(--sq-font-family-mono);">
    <h2 class="u-h2" style="margin-bottom: 1.5rem;">Iconography</h2>

    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 1.5rem;">
      <div style="border: 1px solid rgba(0,0,0,0.1); padding: 1.5rem; text-align: center; border-radius: 6px; background: #fff;">
        <svg class="sq-icon sq-icon--arrow" viewBox="0 0 20 20" fill="currentColor" style="margin: 0 auto 0.75rem;">
          <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
        <div style="font-size: 0.75rem; font-weight: 600;">Arrow</div>
      </div>

      <div style="border: 1px solid rgba(0,0,0,0.1); padding: 1.5rem; text-align: center; border-radius: 6px; background: #fff;">
        <svg class="sq-icon" viewBox="0 0 20 20" fill="currentColor" style="margin: 0 auto 0.75rem;">
          <path d="M10 2l2.4 5.3 5.6.8-4.2 3.8 1.1 5.6-4.9-2.7-4.9 2.7 1.1-5.6-4.2-3.8 5.6-.8z" />
        </svg>
        <div style="font-size: 0.75rem; font-weight: 600;">Star / Sparkle</div>
      </div>

      <div style="border: 1px solid rgba(0,0,0,0.1); padding: 1.5rem; text-align: center; border-radius: 6px; background: #fff;">
        <svg class="sq-icon sq-icon--accordion" viewBox="0 0 20 20" fill="currentColor" style="margin: 0 auto 0.75rem;">
          <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
        </svg>
        <div style="font-size: 0.75rem; font-weight: 600;">Accordion Plus/Cross</div>
      </div>

      <div style="border: 1px solid rgba(0,0,0,0.1); padding: 1.5rem; text-align: center; border-radius: 6px; background: #fff;">
        <svg class="sq-icon sq-icon--ce" viewBox="0 0 21 16" fill="currentColor" style="margin: 0 auto 0.75rem;">
          <path d="M8 2a6 6 0 100 12A6 6 0 008 2zM1 8a7 7 0 1113.3 3.5l-1.9-1a5 5 0 100-5l1.9-1A7 7 0 011 8zm15-4v2h3v2h-3v2h4v2h-6V2h6v2h-4z" />
        </svg>
        <div style="font-size: 0.75rem; font-weight: 600;">CE Mark</div>
      </div>
    </div>
  </div>
`;

