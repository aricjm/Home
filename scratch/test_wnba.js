const fs = require('fs');

fetch("https://site.api.espn.com/apis/site/v2/sports/basketball/wnba/scoreboard")
  .then(res => res.json())
  .then(json => {
    fs.writeFileSync("scratch_wnba.json", JSON.stringify(json, null, 2));
    console.log("WNBA scoreboard fetched!");
    const events = json.events || [];
    console.log("Number of WNBA events today:", events.length);
    events.forEach((event, idx) => {
      console.log(`Event ${idx+1}: ${event.name} (Date: ${event.date})`);
      const comp = event.competitions[0];
      comp.competitors.forEach((c) => {
        console.log(`  - Team: ${c.team.displayName} (ID: ${c.team.id})`);
      });
    });
  })
  .catch(console.error);
