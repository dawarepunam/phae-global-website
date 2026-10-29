const https = require('https');
https.get('https://polyhubagro.com/subsidy/', res => {
  let d = '';
  res.on('data', c => d += c);
  res.on('end', () => {
    const clean = d
      .replace(/<style[\s\S]*?<\/style>/gi, '')
      .replace(/<script[\s\S]*?<\/script>/gi, '')
      .replace(/<header[\s\S]*?<\/header>/gi, '')
      .replace(/<footer[\s\S]*?<\/footer>/gi, '')
      .replace(/<[^>]+>/g, '\n')
      .split('\n')
      .map(s => s.trim())
      .filter(s => s.length > 2)
      .join('\n');
    console.log(clean);
  });
}).on('error', err => console.log(err.message));

