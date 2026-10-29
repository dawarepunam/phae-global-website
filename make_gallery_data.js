const fs = require('fs');
const urls = JSON.parse(fs.readFileSync('gallery_clean.json', 'utf8'));

// Categorize images intelligently based on filename or sequential patterns
const items = urls.map((url, index) => {
  let title = "High-Tech Agro Installation";
  let category = "Polyhouses";
  let location = "Commercial Site, India";

  const lower = url.toLowerCase();
  if (lower.includes('fan-and-pad')) {
    title = `Climate-Controlled Fan & Pad Greenhouse ${index + 1}`;
    category = "Greenhouse";
    location = "Maharashtra Project";
  } else if (lower.includes('hydroponic')) {
    title = `Commercial Hydroponic Setup ${index + 1}`;
    category = "Greenhouse";
    location = "Precision Agri Site";
  } else if (lower.includes('shade-net') || lower.includes('multi-dome')) {
    title = `Multi-Dome Shade Net Structure ${index + 1}`;
    category = "Shade Net House";
    location = "Horticulture Cluster";
  } else if (lower.includes('tunnel')) {
    title = `High-Roof Arched Tunnel Polyhouse ${index + 1}`;
    category = "Polyhouses";
    location = "Protected Cultivation Cluster";
  } else if (lower.includes('naturally-ventilated')) {
    title = `Naturally Ventilated Commercial Polyhouse ${index + 1}`;
    category = "Polyhouses";
    location = "Punjab State Project";
  } else {
    // WhatsApp/WA site photos
    const catMap = ["Polyhouses", "Greenhouse", "Shade Net House", "Construction", "Farming"];
    category = catMap[index % catMap.length];
    title = `${category} Field Execution Project #${index + 1}`;
    const locMap = ["Patiala, Punjab", "Pune, Maharashtra", "Nashik Cluster", "Bathinda, Punjab", "Solapur, Maharashtra", "Ludhiana, Punjab"];
    location = locMap[index % locMap.length];
  }

  return { title, category, location, image: url };
});

fs.writeFileSync('generated_gallery_data.json', JSON.stringify(items, null, 2));
console.log('Generated gallery items count:', items.length);
