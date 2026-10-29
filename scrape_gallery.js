const https = require('https');
https.get('https://polyhubagro.com/gallery/', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const urls = data.match(/https?:\/\/[^\s"'<>]+\.(?:jpg|jpeg|png|webp)/gi) || [];
    console.log(JSON.stringify(Array.from(new Set(urls)), null, 2));
  });
}).on('error', err => console.log('Error:', err.message));
