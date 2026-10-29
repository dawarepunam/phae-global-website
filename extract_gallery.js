const https = require('https');
const fs = require('fs');

https.get('https://polyhubagro.com/gallery/', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const rawMatches = data.match(/https:\/\/polyhubagro\.com\/wp-content\/uploads\/[^\s"'<>]+\.(?:jpg|png|jpeg)/gi) || [];
    const cleanUrls = Array.from(new Set(
      rawMatches
        .filter(u => !u.includes('logo') && !u.includes('cropped') && !u.includes('no-image') && !u.includes('header-bg'))
        .map(u => u.replace(/-\d+x\d+\.(jpg|png|jpeg)$/i, '.$1'))
    ));
    fs.writeFileSync('gallery_clean.json', JSON.stringify(cleanUrls, null, 2));
    console.log('Successfully extracted full-res images count:', cleanUrls.length);
    console.log(cleanUrls.slice(0, 10));
  });
}).on('error', err => console.log('Error:', err.message));
