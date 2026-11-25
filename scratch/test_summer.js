const endpoints = [
  "nba-summer",
  "nba-summer-league",
  "nba-summer-las-vegas",
  "nba-summer-utah",
  "nba-summer-sacramento",
  "nba/summer"
];

async function test() {
  for (const ep of endpoints) {
    try {
      const url = `https://site.api.espn.com/apis/site/v2/sports/basketball/${ep}/scoreboard`;
      const res = await fetch(url);
      console.log(`Endpoint: ${ep} -> Status: ${res.status}`);
      if (res.ok) {
        const json = await res.json();
        console.log(`  Events count: ${json.events?.length || 0}`);
        if (json.events?.length > 0) {
          console.log(`  Sample event: ${json.events[0].name}`);
        }
      }
    } catch(e) {
      console.log(`Endpoint: ${ep} -> Error: ${e.message}`);
    }
  }
}

test();
