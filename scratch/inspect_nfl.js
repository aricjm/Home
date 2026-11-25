const fs = require('fs');
try {
  const j = JSON.parse(fs.readFileSync('scratch_nfl_summary.json', 'utf8'));
  console.log("Summary top-level keys:", Object.keys(j));
  if (j.boxscore) {
    console.log("Boxscore keys:", Object.keys(j.boxscore));
    if (j.boxscore.players) {
      console.log("Players count:", j.boxscore.players.length);
      const teamBox = j.boxscore.players[0];
      console.log("TeamBox keys:", Object.keys(teamBox));
      if (teamBox.statistics) {
        console.log("Statistics count:", teamBox.statistics.length);
        teamBox.statistics.forEach((cat, idx) => {
          console.log(`Category ${idx}: ${cat.name || cat.displayName}`);
          console.log(`  Names/Keys:`, cat.names || cat.keys);
          if (cat.athletes && cat.athletes.length > 0) {
            console.log(`  Sample athlete stats:`, cat.athletes[0].athlete.displayName, cat.athletes[0].stats);
          }
        });
      }
    }
  }
} catch(e) {
  console.error("Error:", e);
}
