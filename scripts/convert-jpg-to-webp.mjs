import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '..', 'public');
const imagesDir = path.join(publicDir, 'images');

const EXCLUDE = ['bluturkey.png', 'blu_turkey.png'];

async function convertJpgToWebp() {
  const files = fs.readdirSync(imagesDir);
  const jpgFiles = files.filter(
    (f) =>
      (f.endsWith('.jpg') || f.endsWith('.jpeg')) &&
      !EXCLUDE.includes(f.toLowerCase())
  );

  console.log(`Converting ${jpgFiles.length} JPG files to WebP...`);

  for (const file of jpgFiles) {
    const inputPath = path.join(imagesDir, file);
    const baseName = path.basename(file, path.extname(file));
    const outputPath = path.join(imagesDir, `${baseName}.webp`);

    try {
      await sharp(inputPath)
        .webp({ quality: 85 })
        .toFile(outputPath);

      const inputSize = fs.statSync(inputPath).size;
      const outputSize = fs.statSync(outputPath).size;
      const saved = ((1 - outputSize / inputSize) * 100).toFixed(1);

      console.log(`  ✓ ${file} → ${baseName}.webp (${saved}% smaller)`);

      try {
        fs.unlinkSync(inputPath);
      } catch {
        // Skip if unlink fails (e.g. Windows file lock)
      }
    } catch (err) {
      console.error(`  ✗ ${file}:`, err.message);
    }
  }

  console.log('Done.');
}

convertJpgToWebp();
