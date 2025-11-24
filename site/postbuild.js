import { copyFileSync, mkdirSync } from 'fs';
import { join } from 'path';

// Create playground directory in dist
const playgroundDir = join('dist', 'playground');
mkdirSync(playgroundDir, { recursive: true });

// Copy image files to playground directory
const images = [
  'peep-100.png',
  'peep-102.png',
  'peep-103.png',
  'peep-18.png',
  'peep-2.png',
  'peep-73.png',
  'question-mark-1.png',
  'question-mark-2.png',
  'question-mark-3.png',
  'shorts-preview.png'
];

images.forEach(img => {
  try {
    copyFileSync(join('dist', img), join(playgroundDir, img));
    console.log(`✓ Copied ${img} to playground/`);
  } catch (err) {
    console.error(`✗ Failed to copy ${img}:`, err.message);
  }
});

console.log('\n✓ Post-build image copying complete!\n');
