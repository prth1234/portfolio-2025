import './minimap.css';

export default {
  title: 'Components/Minimap Rail',
  tags: ['autodocs'],
  argTypes: {
    sections: { control: { type: 'number', min: 2, max: 8 } },
    ticksPerSection: { control: { type: 'number', min: 1, max: 10 } },
    activeIndex: { control: { type: 'number', min: 0, max: 60 } },
    orientation: { control: { type: 'select' }, options: ['vertical', 'horizontal'] },
    theme: { control: { type: 'select' }, options: ['dark', 'light'] },
  },
  args: { sections: 4, ticksPerSection: 6, activeIndex: 3, orientation: 'vertical', theme: 'dark' },
};

const build = ({ sections, ticksPerSection, activeIndex, orientation, theme }) => {
  let items = '';
  let i = 0;
  for (let s = 1; s <= sections; s++) {
    items += `<span class="sq-minimap__number${i === activeIndex ? ' is-active' : ''}">${String(s).padStart(2, '0')}</span>`;
    i++;
    if (s < sections) {
      for (let t = 0; t < ticksPerSection; t++) {
        items += `<span class="sq-minimap__line${i === activeIndex ? ' is-active' : ''}"></span>`;
        i++;
      }
    }
  }
  const cls = ['sq-minimap', orientation === 'horizontal' ? 'sq-minimap--horizontal' : '', theme === 'light' ? 'sq-minimap--light' : ''].join(' ').trim();
  return `
    <div style="padding:2rem; background:${theme === 'light' ? '#1a1a1a' : 'var(--sq-cream, #f9f4eb)'};">
      <div class="${cls}"><div class="sq-minimap__bg"></div><div class="sq-minimap__inner">${items}</div></div>
    </div>`;
};

export const Playground = (args) => build(args);

export const Horizontal = () => build({ sections: 4, ticksPerSection: 6, activeIndex: 9, orientation: 'horizontal', theme: 'dark' });

export const LightTheme = () => build({ sections: 4, ticksPerSection: 6, activeIndex: 3, orientation: 'vertical', theme: 'light' });

export const Interactive = () => `
  <div style="padding:2rem; background:var(--sq-cream,#f9f4eb); display:flex; gap:2rem; align-items:center;">
    <div id="sq-minimap-demo" class="sq-minimap"><div class="sq-minimap__bg"></div><div class="sq-minimap__inner">
      ${[...Array(4).keys()].map((s) => `<span class="sq-minimap__number">0${s + 1}</span>${s < 3 ? '<span class="sq-minimap__line"></span>'.repeat(6) : ''}`).join('')}
    </div></div>
    <input type="range" min="0" max="21" value="3" style="width:200px"
      oninput="var els=document.querySelectorAll('#sq-minimap-demo .sq-minimap__number, #sq-minimap-demo .sq-minimap__line');els.forEach(function(e,i){e.classList.toggle('is-active', i==this.value)}.bind(this))" />
  </div>`;
