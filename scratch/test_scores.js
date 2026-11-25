const fs = require('fs');
try {
  const raw = fs.readFileSync('scratch_wnba.json', 'utf8');
  const j = JSON.parse(raw);
  j.events.forEach((e) => {
    console.log(`Event: ${e.name} (State: ${e.status.type.state})`);
    e.competitions[0].competitors.forEach((c) => {
      console.log(`  - Team: ${c.team.displayName}, Score: ${c.score} (type: ${typeof c.score})`);
    });
  });
} catch(e) {
  console.error(e);
}
