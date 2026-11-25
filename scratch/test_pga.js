const fs = require('fs');
const json = JSON.parse(fs.readFileSync('scratch_pga_raw.json', 'utf8'));
console.log("Venue info in raw JSON:", JSON.stringify(json.events[0].competitions[0].venue, null, 2));
