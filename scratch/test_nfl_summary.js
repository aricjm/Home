const fs = require('fs');

async function check() {
  try {
    // Fetch NFL scoreboard
    const scoreRes = await fetch("https://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard");
    if (!scoreRes.ok) throw new Error("Failed to fetch NFL scoreboard");
    const scoreboard = await scoreRes.json();
    
    if (!scoreboard.events || scoreboard.events.length === 0) {
      console.log("No NFL events found!");
      return;
    }
    
    // Find the first event (game)
    const eventId = scoreboard.events[0].id;
    console.log("NFL Event Name:", scoreboard.events[0].name);
    console.log("NFL Event ID:", eventId);
    
    // Fetch summary
    const summaryRes = await fetch(`https://site.api.espn.com/apis/site/v2/sports/football/nfl/summary?event=${eventId}`);
    if (!summaryRes.ok) throw new Error("Failed to fetch NFL summary");
    const summary = await summaryRes.json();
    
    fs.writeFileSync("scratch_nfl_summary.json", JSON.stringify(summary, null, 2));
    console.log("Saved NFL summary!");
    
    if (summary.boxscore && summary.boxscore.players) {
      console.log("Football boxscore players count (should be 2 for 2 teams):", summary.boxscore.players.length);
      summary.boxscore.players.forEach((teamBox, tIdx) => {
        console.log(`Team ${tIdx+1}: ${teamBox.team.displayName}`);
        console.log(`Statistics categories available:`, teamBox.statistics.map(s => s.name));
        teamBox.statistics.forEach((cat) => {
          console.log(`  Category: ${cat.name} (${cat.keys || cat.names})`);
          if (cat.athletes && cat.athletes.length > 0) {
            console.log(`    Sample player: ${cat.athletes[0].athlete.displayName} stats:`, cat.athletes[0].stats);
          }
        });
      });
    }
  } catch(e) {
    console.error("Error:", e);
  }
}

check();
