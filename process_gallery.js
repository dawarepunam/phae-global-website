const fs = require('fs');
const urls = JSON.parse(fs.readFileSync('gallery_urls.json', 'utf8') || '[]');
