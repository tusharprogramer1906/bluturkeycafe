import sharp from 'sharp';
import { mkdir } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '..', 'public', 'images');
const menuDir = join(publicDir, 'menu');

const MAPPING = [
  {
    src: 'ChatGPT Image Mar 17, 2026, 07_19_55 PM.png',
    dest: 'blu-turkey-chicken-tikka-pizza-delhi.webp',
  },
  {
    src: 'ChatGPT Image Mar 17, 2026, 07_16_04 PM.png',
    dest: 'blu-turkey-creamy-white-sauce-pasta-delhi.webp',
  },
  {
    src: 'ChatGPT Image Mar 17, 2026, 07_14_42 PM.png',
    dest: 'blu-turkey-veg-grilled-sandwich-fries-delhi.webp',
  },
  {
    src: 'ChatGPT Image Mar 17, 2026, 07_13_09 PM.png',
    dest: 'blu-turkey-croissant-sandwich-delhi.webp',
  },
];

await mkdir(menuDir, { recursive: true });

for (const { src, dest } of MAPPING) {
  const inputPath = join(publicDir, src);
  const outputPath = join(menuDir, dest);
  await sharp(inputPath)
    .resize(1200, null, { withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(outputPath);
  console.log(`Converted: ${src} -> ${dest}`);
}

console.log('Done!');
