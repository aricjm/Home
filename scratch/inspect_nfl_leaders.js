const fs = require('fs');
try {
  const j = JSON.parse(fs.readFileSync('scratch_nfl_summary.json', 'utf8'));
  console.log("Leaders exists:", !!j.leaders);
  if (j.leaders) {
    console.log("Leaders length:", j.leaders.length);
    j.leaders.forEach((teamLeader, idx) => {
      console.log(`TeamLeader ${idx}:`, teamLeader.team.displayName);
      console.log(`  Categories:`, teamLeader.leaders.map(cat => cat.name));
      teamLeader.leaders.forEach((cat) => {
        console.log(`    Category: ${cat.name}`);
        if (cat.leaders && cat.leaders.length > 0) {
          console.log(`      Leader athlete: ${cat.leaders[0].athlete.displayName} stat value: ${cat.leaders[0].displayValue}`);
        }
      });
    });
  }
} catch(e) {
  console.error(e);
}
