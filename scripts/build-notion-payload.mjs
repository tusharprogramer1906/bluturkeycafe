import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const body = fs.readFileSync(path.join(__dirname, '../.cursor/tmp-hangout-article.md'), 'utf8');
const meta = `## SEO meta (for Next.js)
\`\`\`plain text
---
title: "Best Cafes for Friends Hangout in GK1"
slug: "best-cafes-friends-hangout-gk1"
metaTitle: "Best Hangout Cafes GK1 for Friends | Blu Turkey Cafe"
metaDescription: "Planning a GK1 group meet? Choose social cafes in South Delhi—coffee, food, vibe—plus why Blu Turkey (M Block) works for friends."
date: "2026-04-06"
schema: "Article"
---

\`\`\`

`;
const full = meta + body;
const out = path.join(__dirname, '../.cursor/notion-replace-content.json');
fs.writeFileSync(out, JSON.stringify({ new_str: full }, null, 0), 'utf8');
console.log('Wrote', out, 'chars', full.length);
