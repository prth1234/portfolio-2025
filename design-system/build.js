const fs = require('fs');
const path = require('path');

const filesToBundle = [
  'tokens/tokens.css',
  'styles/reset.css',
  'styles/typography.css',
  'styles/theme.css',
  'styles/grid.css',
  'styles/icons.css',
  'components/wavy-underline/wavy-underline.css',
  'components/wavy-divider/wavy-divider.css',
  'components/button/button.css',
  'components/explore-button/explore-button.css',
  'components/nav/nav.css',
  'components/career-timeline/career-timeline.css',
  'components/contact-form/contact-form.css',
  'components/accordion/accordion.css',
  'components/data-table/data-table.css',
  'components/project-card/project-card.css',
  'components/landscape-card/landscape-card.css',
  'components/comparison-list/comparison-list.css',
  'components/dotted-leader/dotted-leader.css',
  'components/badge-tag/badge-tag.css',
  'components/preloader/preloader.css',
  'components/click-animation/click-animation.css',
  'components/footer/footer.css'
];

const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

let bundled = '/**\n * SQUIGGLE UI - COMPLETE DESIGN SYSTEM BUNDLE\n * Generated automatically from modular tokens and components\n */\n\n';

for (const relPath of filesToBundle) {
  const fullPath = path.join(__dirname, relPath);
  if (fs.existsSync(fullPath)) {
    bundled += `/* --- ${relPath} --- */\n` + fs.readFileSync(fullPath, 'utf8') + '\n\n';
  }
}

fs.writeFileSync(path.join(distDir, 'design-system.css'), bundled, 'utf8');
console.log('✓ Successfully built dist/design-system.css');

