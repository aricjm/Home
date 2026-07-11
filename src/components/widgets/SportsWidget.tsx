"use client";

import React, { useEffect, useState } from "react";
import { Trophy, RefreshCw, ChevronLeft, ChevronRight, Activity } from "lucide-react";

interface Game {
  id: string;
  date: string;
  name: string;
  shortName: string;
  status: {
    type: {
      completed: boolean;
      detail: string;
      state: "pre" | "in" | "post";
    };
  };
  competitors: Array<{
    id: string;
    homeAway: "home" | "away";
    score: string;
    team: {
      abbreviation: string;
      displayName: string;
      logo: string;
      color: string;
    };
  }>;
}

type SportType = "nfl" | "nba" | "mlb";

export default function SportsWidget() {
  const [sport, setSport] = useState<SportType>("nfl");
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchScores = async (selectedSport: SportType) => {
    setLoading(true);
    setError(null);
    try {
      let path = "";
      if (selectedSport === "nfl") path = "football/nfl";
      else if (selectedSport === "nba") path = "basketball/nba";
      else if (selectedSport === "mlb") path = "baseball/mlb";

      const url = `https://site.api.espn.com/apis/site/v2/sports/${path}/scoreboard`;
      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to fetch ESPN scoreboard");
      const json = await res.json();
      
      const events = json.events || [];
      const formattedGames = events.map((event: any) => {
        const competitors = event.competitions[0]?.competitors || [];
        return {
          id: event.id,
          date: event.date,
          name: event.name,
          shortName: event.shortName,
          status: {
            type: {
              completed: event.status.type.completed,
              detail: event.status.type.detail,
              state: event.status.type.state,
            }
          },
          competitors: competitors.map((comp: any) => ({
            id: comp.id,
            homeAway: comp.homeAway,
            score: comp.score,
            team: {
              abbreviation: comp.team.abbreviation,
              displayName: comp.team.displayName,
              logo: comp.team.logo,
              color: comp.team.color || "0a84ff",
            }
          }))
        };
      });

      setGames(formattedGames);
    } catch (err: any) {
      setError(err.message || "Failed to load scores");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchScores(sport);
  }, [sport]);

  return (
    <div className="bg-card border border-border rounded-2xl p-5 relative overflow-hidden transition-all duration-300 hover:border-accent/40" id="sports-widget-root">
      <div className="absolute -right-16 -top-16 w-32 h-32 bg-accent/5 rounded-full blur-3xl pointer-events-none" id="sports-widget-bg-blur"></div>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-4" id="sports-widget-header">
        <div id="sports-widget-header-text">
          <h2 className="text-lg font-semibold text-white flex items-center gap-2" id="sports-widget-title">
            <Trophy className="h-5 w-5 text-accent" />
            Sports Scoreboard
          </h2>
          <p className="text-xs text-muted-foreground" id="sports-widget-subtitle">Live games & updates</p>
        </div>

        <div className="flex items-center gap-2 self-stretch sm:self-auto justify-between sm:justify-start" id="sports-widget-actions">
          <div className="flex bg-secondary p-1 rounded-lg border border-border" id="sports-widget-sport-tabs">
            {(["nfl", "nba", "mlb"] as SportType[]).map((s) => (
              <button
                id={`sports-tab-btn-${s}`}
                key={s}
                onClick={() => setSport(s)}
                className={`px-3 py-1 rounded text-xs font-semibold uppercase transition-all ${
                  sport === s 
                    ? "bg-accent text-white" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {s}
              </button>
            ))}
          </div>

          <button 
            id="sports-widget-refresh-btn"
            onClick={() => fetchScores(sport)} 
            disabled={loading}
            className="p-1.5 hover:bg-muted rounded-lg text-muted-foreground hover:text-foreground disabled:opacity-50 transition-colors"
          >
            <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin text-accent' : ''}`} />
          </button>
        </div>
      </div>

      {loading ? (
        <div className="h-40 flex items-center justify-center" id="sports-widget-loader">
          <div className="w-6 h-6 border-2 border-accent border-t-transparent rounded-full animate-spin" id="sports-widget-spinner"></div>
        </div>
      ) : error ? (
        <div className="h-40 flex flex-col items-center justify-center text-xs text-red-400" id="sports-widget-error-container">
          <span id="sports-widget-error-text">{error}</span>
          <button id="sports-widget-retry-btn" onClick={() => fetchScores(sport)} className="mt-2 text-accent underline">Retry</button>
        </div>
      ) : games.length === 0 ? (
        <div className="h-40 flex items-center justify-center text-sm text-muted-foreground" id="sports-widget-no-games">
          No games scheduled today
        </div>
      ) : (
        <div className="space-y-3 max-h-64 overflow-y-auto pr-1" id="sports-widget-games-list">
          {games.slice(0, 5).map((game) => {
            const away = game.competitors.find((c) => c.homeAway === "away");
            const home = game.competitors.find((c) => c.homeAway === "home");
            const isLive = game.status.type.state === "in";
            
            return (
              <div 
                key={game.id} 
                className="bg-secondary/40 border border-border/50 rounded-xl p-3 flex items-center justify-between transition-all hover:bg-secondary/60 hover:border-border"
                id={`sports-game-item-${game.id}`}
              >
                <div className="flex-1 space-y-2" id={`sports-game-teams-${game.id}`}>
                  {/* Away Team */}
                  <div className="flex items-center justify-between" id={`sports-game-away-row-${game.id}`}>
                    <div className="flex items-center gap-2" id={`sports-game-away-team-${game.id}`}>
                      {away?.team.logo ? (
                        <img src={away.team.logo} alt="" className="w-6 h-6 object-contain" id={`sports-game-away-logo-${game.id}`} />
                      ) : (
                        <div className="w-6 h-6 rounded-full bg-muted" id={`sports-game-away-logo-placeholder-${game.id}`}></div>
                      )}
                      <span className="text-sm font-semibold text-white" id={`sports-game-away-name-${game.id}`}>{away?.team.displayName}</span>
                    </div>
                    <span className={`text-sm font-bold ${isLive || game.status.type.completed ? 'text-white' : 'text-muted-foreground'}`} id={`sports-game-away-score-${game.id}`}>
                      {away?.score || 0}
                    </span>
                  </div>

                  {/* Home Team */}
                  <div className="flex items-center justify-between" id={`sports-game-home-row-${game.id}`}>
                    <div className="flex items-center gap-2" id={`sports-game-home-team-${game.id}`}>
                      {home?.team.logo ? (
                        <img src={home.team.logo} alt="" className="w-6 h-6 object-contain" id={`sports-game-home-logo-${game.id}`} />
                      ) : (
                        <div className="w-6 h-6 rounded-full bg-muted" id={`sports-game-home-logo-placeholder-${game.id}`}></div>
                      )}
                      <span className="text-sm font-semibold text-white" id={`sports-game-home-name-${game.id}`}>{home?.team.displayName}</span>
                    </div>
                    <span className={`text-sm font-bold ${isLive || game.status.type.completed ? 'text-white' : 'text-muted-foreground'}`} id={`sports-game-home-score-${game.id}`}>
                      {home?.score || 0}
                    </span>
                  </div>
                </div>

                <div className="w-px h-10 bg-border mx-4" id={`sports-game-divider-${game.id}`}></div>

                {/* Game Status */}
                <div className="flex flex-col items-center justify-center w-24 text-center" id={`sports-game-status-box-${game.id}`}>
                  {isLive && (
                    <span className="inline-flex items-center gap-1.5 px-1.5 py-0.5 rounded text-[10px] font-bold bg-red-500/10 text-red-500 mb-1 uppercase tracking-wider animate-pulse" id={`sports-game-live-badge-${game.id}`}>
                      <Activity className="h-2.5 w-2.5" /> Live
                    </span>
                  )}
                  <span className="text-[10px] font-medium text-muted-foreground leading-tight" id={`sports-game-status-detail-${game.id}`}>
                    {game.status.type.detail}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
