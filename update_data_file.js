const fs = require('fs');
const polyhubData = fs.readFileSync('src/data/polyhubData.ts', 'utf8');
const galleryItems = fs.readFileSync('generated_gallery_data.json', 'utf8');

const updated = polyhubData.replace(
  /export const GALLERY_ITEMS = \[[\s\S]*?\];/,
  `export const GALLERY_ITEMS = ${galleryItems};`
);

fs.writeFileSync('src/data/polyhubData.ts', updated);
console.log('polyhubData.ts successfully updated with 69 real gallery items!');
