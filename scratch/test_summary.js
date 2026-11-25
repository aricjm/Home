const fs = require('fs');

async function run() {
  try {
    const raw = fs.readFileSync('scratch_wnba.json', 'utf8');
    const json = JSON.parse(raw);
    const eventId = json.events[0].id;
    console.log("Found event ID:", eventId);

    const url = `https://site.api.espn.com/apis/site/v2/sports/basketball/wnba/summary?event=${eventId}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to fetch summary");
    const summary = await res.json();
    
    fs.writeFileSync("scratch_summary.json", JSON.stringify(summary, null, 2));
    console.log("Saved WNBA event summary!");
    console.log("Keys of summary:", Object.keys(summary));
    
    if (summary.boxscore) {
      console.log("Boxscore keys:", Object.keys(summary.boxscore));
      if (summary.boxscore.players) {
        console.log("Players statistics is array:", Array.isArray(summary.boxscore.players));
        console.log("Players count in boxscore:", summary.boxscore.players.length);
        console.log("Sample player category stats:", JSON.stringify(summary.boxscore.players[0].statistics[0], null, 2));
      }
      if (summary.boxscore.teams) {
        console.log("Teams statistics count:", summary.boxscore.teams.length);
        console.log("Sample team stats:", JSON.stringify(summary.boxscore.teams[0], null, 2));
      }
    }
  } catch(e) {
    console.error("Error:", e);
  }
}

run();
