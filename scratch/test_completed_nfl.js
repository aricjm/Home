const fs = require('fs');

async function test() {
  try {
    const res = await fetch("https://site.api.espn.com/apis/site/v2/sports/football/nfl/summary?event=401671804");
    if (!res.ok) throw new Error("Status " + res.status);
    const json = await res.json();
    fs.writeFileSync("scratch_nfl_completed.json", JSON.stringify(json, null, 2));
    console.log("Saved completed NFL summary!");
    console.log("Top-level keys:", Object.keys(json));
    if (json.boxscore) {
      console.log("Boxscore keys:", Object.keys(json.boxscore));
      if (json.boxscore.players) {
        console.log("Players count:", json.boxscore.players.length);
        const teamBox = json.boxscore.players[0];
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
    console.error(e);
  }
}

test();
