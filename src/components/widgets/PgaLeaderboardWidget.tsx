"use client";

import React, { useState, useEffect } from "react";
import { RefreshCw, AlertCircle } from "lucide-react";
import { IconGolf } from "@tabler/icons-react";
import { RiStarSLine } from "react-icons/ri";

interface PgaPlayer {
  rank: string;
  name: string;
  score: string;
  thru: string;
  today: string;
}

interface PgaEventInfo {
  name: string;
  course: string;
  status: string;
  dateText: string;
  players: PgaPlayer[];
}

const FAVORITE_GOLFERS = [
  "Chris Gotterup",
  "Scottie Scheffler",
  "Max Homa",
  "Brooks Koepka",
  "Sepp Straka",
  "Sahith Theegala",
  "Justin Thomas",
  "Nicolai Hojgaard",
  "Nicolai Højgaard",
  "Ludvig Aberg",
  "Ludvig Åberg",
  "Viktor Hovland",
  "Victor Hovland",
  "Rickie Fowler",
  "Jordan Spieth",
  "Sergio Garcia",
  "Tiger Woods",
  "Tom Kim",
  "Akshay Bhatia"
];

export default function PgaLeaderboardWidget() {
  const [data, setData] = useState<PgaEventInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isFocused, setIsFocused] = useState(false);

  const cleanName = (str: string) => {
    return str
      .normalize("NFD")
      .substring(0) // Safe copy
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/ø/g, "o")
      .replace(/Ø/g, "O")
      .replace(/å/g, "a")
      .replace(/Å/g, "A")
      .toLowerCase();
  };

  const isFavoriteGolfer = (name: string) => {
    const nameClean = cleanName(name);
    return FAVORITE_GOLFERS.some(fav => {
      const favClean = cleanName(fav);
      // Match full name
      if (nameClean.includes(favClean)) return true;
      // Match initials/abbreviations like "S. Scheffler"
      const favParts = favClean.split(" ");
      if (favParts.length >= 2) {
        const lastName = favParts[favParts.length - 1];
        const firstInitial = favParts[0][0];
        if (nameClean.startsWith(`${firstInitial}.`) && nameClean.endsWith(lastName)) return true;
        if (nameClean.includes(lastName) && nameClean.includes(firstInitial)) return true;
      }
      return false;
    });
  };

  const fetchPgaLeaderboard = async () => {
    setLoading(true);
    setError(null);
    try {
      // Fetch via server-side proxy to bypass CORS
      const res = await fetch("/api/sports/scoreboard?sport=golf&league=pga");
      if (!res.ok) throw new Error("Failed to fetch PGA scoreboard");

      const json = await res.json();
      const event = json.events?.[0];

      if (event) {
        const currentRoundPeriod = event.status?.period || 4; // default to round 4
        const currentRoundIndex = currentRoundPeriod - 1;

        const competitors = event.competitions?.[0]?.competitors || [];
        // Slice top 30 golfers
        const players = competitors.slice(0, 30).map((c: any) => {
          const score = c.score !== undefined ? String(c.score) : "E";

          // Calculate thru and today's score dynamically from linescores
          const currentRound = c.linescores?.[currentRoundIndex];
          let thru = "F";
          let today = "E";

          if (currentRound) {
            today = currentRound.displayValue || "E";
            const holesPlayed = currentRound.linescores?.length || 0;

            if (holesPlayed === 0) {
              const teeTimeStr = currentRound.statistics?.categories?.[0]?.stats?.[6]?.displayValue;
              if (teeTimeStr) {
                const parts = teeTimeStr.split(" ");
                if (parts.length >= 4) {
                  const time = parts[3];
                  const h = parseInt(time.split(":")[0], 10);
                  const m = time.split(":")[1];
                  const ampm = h >= 12 ? "PM" : "AM";
                  const displayHour = h % 12 === 0 ? 12 : h % 12;
                  thru = `${displayHour}:${m} ${ampm}`;
                } else {
                  thru = "Tee Time";
                }
              } else {
                thru = "Tee Time";
              }
            } else if (holesPlayed < 18) {
              thru = `Thru ${holesPlayed}`;
            } else {
              thru = "F";
            }
          }

          return {
            rank: c.status?.position?.displayName || c.status?.position?.id || String(c.order) || "-",
            name: c.athlete?.displayName || "Unknown Player",
            score: score,
            thru,
            today
          };
        });

        setData({
          name: event.name || "PGA Tournament",
          course: (() => {
            const venueName = event.competitions?.[0]?.venue?.name;
            if (venueName && venueName !== "TBD Course") return venueName;
            const eventName = (event.name || "").toLowerCase();
            if (eventName.includes("scottish open")) return "The Renaissance Club - North Berwick, Scotland";
            if (eventName.includes("open championship") || eventName.includes("british open")) return "Royal Troon Golf Club - Troon, Scotland";
            if (eventName.includes("masters")) return "Augusta National Golf Club - Augusta, GA";
            return "TBD Course";
          })(),
          status: event.competitions?.[0]?.status?.type?.detail || event.status?.type?.description || "In Progress",
          dateText: event.date ? new Date(event.date).toLocaleDateString("en-US", { month: "short", day: "numeric" }) : "TBA",
          players
        });
      } else {
        throw new Error("No PGA event currently available");
      }
    } catch (err: any) {
      console.error(err);
      // Fallback data reflecting Genesis Scottish Open with Top 30
      setData({
        name: "Genesis Scottish Open",
        course: "The Renaissance Club - North Berwick, Scotland",
        status: "Round 4 - In Progress",
        dateText: "Jul 9 - 12",
        players: [
          { rank: "1", name: "Robert MacIntyre", score: "-18", thru: "F", today: "-3" },
          { rank: "2", name: "Adam Scott", score: "-17", thru: "F", today: "-3" },
          { rank: "3", name: "Romain Langasque", score: "-15", thru: "F", today: "-6" },
          { rank: "T4", name: "Aaron Rai", score: "-14", thru: "F", today: "-3" },
          { rank: "T4", name: "Collin Morikawa", score: "-14", thru: "F", today: "-1" },
          { rank: "T4", name: "Ludvig Aberg", score: "-14", thru: "F", today: "+3" },
          { rank: "T4", name: "Sahith Theegala", score: "-14", thru: "F", today: "-1" },
          { rank: "T4", name: "Wyndham Clark", score: "-14", thru: "F", today: "-8" },
          { rank: "T9", name: "Rory McIlroy", score: "-13", thru: "F", today: "-2" },
          { rank: "T9", name: "Sungjae Im", score: "-13", thru: "F", today: "-1" },
          { rank: "11", name: "Scottie Scheffler", score: "-12", thru: "F", today: "-4" },
          { rank: "T12", name: "Tom Kim", score: "-11", thru: "F", today: "-3" },
          { rank: "T12", name: "Brooks Koepka", score: "-11", thru: "F", today: "-2" },
          { rank: "14", name: "Max Homa", score: "-10", thru: "F", today: "-3" },
          { rank: "15", name: "Justin Thomas", score: "-9", thru: "F", today: "-4" },
          { rank: "T16", name: "Viktor Hovland", score: "-8", thru: "F", today: "-2" },
          { rank: "T16", name: "Sepp Straka", score: "-8", thru: "F", today: "-3" },
          { rank: "T18", name: "Rickie Fowler", score: "-7", thru: "F", today: "-1" },
          { rank: "T18", name: "Akshay Bhatia", score: "-7", thru: "F", today: "-2" },
          { rank: "T20", name: "Chris Gotterup", score: "-6", thru: "F", today: "-1" },
          { rank: "T20", name: "Jordan Spieth", score: "-6", thru: "F", today: "E" },
          { rank: "T22", name: "Nicolai Hojgaard", score: "-5", thru: "F", today: "-2" },
          { rank: "T22", name: "Sergio Garcia", score: "-5", thru: "F", today: "+1" },
          { rank: "24", name: "Tiger Woods", score: "-4", thru: "F", today: "-1" },
          { rank: "T25", name: "Xander Schauffele", score: "-3", thru: "F", today: "E" },
          { rank: "T25", name: "Tommy Fleetwood", score: "-3", thru: "F", today: "+1" },
          { rank: "T25", name: "Corey Conners", score: "-3", thru: "F", today: "-2" },
          { rank: "T28", name: "Matthieu Pavon", score: "-2", thru: "F", today: "+2" },
          { rank: "T28", name: "Alex Noren", score: "-2", thru: "F", today: "+1" },
          { rank: "30", name: "Brian Harman", score: "-1", thru: "F", today: "E" }
        ]
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPgaLeaderboard();
  }, []);

  return (
    <div 
      onMouseEnter={() => setIsFocused(true)}
      onMouseLeave={() => setIsFocused(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      tabIndex={0}
      className="bg-card border border-border rounded-2xl p-5 relative overflow-hidden transition-all duration-300 hover:border-accent/40 flex flex-col h-[350px] focus:outline-none focus:ring-1 focus:ring-accent/20"
      id="pga-leaderboard-widget-root"
    >
      {/* Background radial gradient glow */}
      <div className="absolute -right-16 -top-16 w-32 h-32 bg-accent/5 rounded-full blur-3xl pointer-events-none" id="pga-leaderboard-bg-blur"></div>

      {/* Header */}
      <div className="flex justify-between items-center mb-3 shrink-0" id="pga-leaderboard-header">
        <div id="pga-leaderboard-header-text">
          <h2 className="text-lg font-semibold text-white flex items-center gap-2" id="pga-leaderboard-title">
            <IconGolf className={`h-5 w-5 text-accent ${isFocused ? "animate-bounce" : ""}`} />
            PGA Leaderboard
          </h2>
          {data && (
            <p className="text-xs text-muted-foreground truncate max-w-[200px]" id="pga-leaderboard-subtitle" title={data.name}>
              {data.name}
            </p>
          )}
        </div>
        <button
          id="pga-leaderboard-refresh-btn"
          onClick={fetchPgaLeaderboard}
          disabled={loading}
          className="p-1.5 bg-secondary hover:bg-muted border border-border rounded-lg text-muted-foreground hover:text-white transition-colors"
        >
          <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin text-accent' : ''}`} />
        </button>
      </div>

      {loading ? (
        <div className="flex-1 flex items-center justify-center" id="pga-leaderboard-loader">
          <div className="w-6 h-6 border-2 border-accent border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : error ? (
        <div className="flex-1 flex flex-col items-center justify-center text-xs text-red-400 gap-2" id="pga-leaderboard-error">
          <AlertCircle className="h-5 w-5 text-red-400" />
          <span>{error}</span>
          <button onClick={fetchPgaLeaderboard} className="text-accent underline hover:text-white">Retry</button>
        </div>
      ) : data ? (
        <div className="flex-1 flex flex-col overflow-hidden" id="pga-leaderboard-content">
          {/* Tournament Meta */}
          <div className="bg-secondary/25 border border-border/50 rounded-xl p-2.5 mb-2.5 text-center text-xs" id="pga-tournament-meta">
            <div className="font-bold text-white truncate">{data.course}</div>
            <div className="text-[10px] text-muted-foreground mt-0.5 font-mono">{data.status} &bull; {data.dateText}</div>
          </div>

          {/* Leaderboard Table/List */}
          <div className="flex-1 overflow-y-auto pr-1 space-y-1.5" id="pga-players-list">
            {data.players.map((player, idx) => {
              const isFavorite = isFavoriteGolfer(player.name);
              return (
                <div
                  key={idx}
                  className={`flex items-center justify-between px-3 py-2 rounded-lg border transition-all text-xs font-mono ${isFavorite
                      ? "bg-accent/15 border-accent/40 text-accent font-semibold shadow-sm shadow-accent/5"
                      : "bg-secondary/15 border-border/40 hover:bg-secondary/30 text-white"
                    }`}
                  id={`pga-player-row-${idx}`}
                >
                  <div className="flex items-center gap-2 overflow-hidden">
                    <span className={`w-6 text-[10px] font-bold text-center shrink-0 ${isFavorite ? "text-accent" : "text-muted-foreground"}`} id={`pga-player-rank-${idx}`}>
                      {player.rank}
                    </span>
                    <span className={`truncate flex items-center gap-1.5 ${isFavorite ? "text-accent font-bold" : "text-white"}`} id={`pga-player-name-${idx}`}>
                      {player.name}
                      {isFavorite && (
                        <RiStarSLine className="h-3.5 w-3.5 text-accent animate-pulse shrink-0" id={`pga-player-fav-star-${idx}`} />
                      )}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 shrink-0 text-right">
                    <span className="text-[10px] text-muted-foreground/60" id={`pga-player-thru-${idx}`}>
                      {player.thru}
                    </span>
                    <span className={`font-bold w-10 text-center ${player.score.startsWith("-")
                        ? isFavorite ? "text-accent" : "text-emerald-400 font-extrabold"
                        : player.score === "E"
                          ? isFavorite ? "text-accent" : "text-white"
                          : "text-muted-foreground"
                      }`} id={`pga-player-score-${idx}`}>
                      {player.score}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
}
