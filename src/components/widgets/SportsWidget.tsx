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
    <div className="bg-card border border-border rounded-2xl p-5 relative overflow-hidden transition-all duration-300 hover:border-accent/40">
      <div className="absolute -right-16 -top-16 w-32 h-32 bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-4">
        <div>
          <h2 className="text-lg font-semibold text-white flex items-center gap-2">
            <Trophy className="h-5 w-5 text-accent" />
            Sports Scoreboard
          </h2>
          <p className="text-xs text-muted-foreground">Live games & updates</p>
        </div>

        <div className="flex items-center gap-2 self-stretch sm:self-auto justify-between sm:justify-start">
          <div className="flex bg-secondary p-1 rounded-lg border border-border">
            {(["nfl", "nba", "mlb"] as SportType[]).map((s) => (
              <button
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
            onClick={() => fetchScores(sport)} 
            disabled={loading}
            className="p-1.5 hover:bg-muted rounded-lg text-muted-foreground hover:text-foreground disabled:opacity-50 transition-colors"
          >
            <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin text-accent' : ''}`} />
          </button>
        </div>
      </div>

      {loading ? (
        <div className="h-40 flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-accent border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : error ? (
        <div className="h-40 flex flex-col items-center justify-center text-xs text-red-400">
          <span>{error}</span>
          <button onClick={() => fetchScores(sport)} className="mt-2 text-accent underline">Retry</button>
        </div>
      ) : games.length === 0 ? (
        <div className="h-40 flex items-center justify-center text-sm text-muted-foreground">
          No games scheduled today
        </div>
      ) : (
        <div className="space-y-3 max-h-64 overflow-y-auto pr-1">
          {games.slice(0, 5).map((game) => {
            const away = game.competitors.find((c) => c.homeAway === "away");
            const home = game.competitors.find((c) => c.homeAway === "home");
            const isLive = game.status.type.state === "in";
            
            return (
              <div 
                key={game.id} 
                className="bg-secondary/40 border border-border/50 rounded-xl p-3 flex items-center justify-between transition-all hover:bg-secondary/60 hover:border-border"
              >
                <div className="flex-1 space-y-2">
                  {/* Away Team */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {away?.team.logo ? (
                        <img src={away.team.logo} alt="" className="w-6 h-6 object-contain" />
                      ) : (
                        <div className="w-6 h-6 rounded-full bg-muted"></div>
                      )}
                      <span className="text-sm font-semibold text-white">{away?.team.displayName}</span>
                    </div>
                    <span className={`text-sm font-bold ${isLive || game.status.type.completed ? 'text-white' : 'text-muted-foreground'}`}>
                      {away?.score || 0}
                    </span>
                  </div>

                  {/* Home Team */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {home?.team.logo ? (
                        <img src={home.team.logo} alt="" className="w-6 h-6 object-contain" />
                      ) : (
                        <div className="w-6 h-6 rounded-full bg-muted"></div>
                      )}
                      <span className="text-sm font-semibold text-white">{home?.team.displayName}</span>
                    </div>
                    <span className={`text-sm font-bold ${isLive || game.status.type.completed ? 'text-white' : 'text-muted-foreground'}`}>
                      {home?.score || 0}
                    </span>
                  </div>
                </div>

                <div className="w-px h-10 bg-border mx-4"></div>

                {/* Game Status */}
                <div className="flex flex-col items-center justify-center w-24 text-center">
                  {isLive && (
                    <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-bold bg-red-500/10 text-red-500 mb-1 uppercase tracking-wider animate-pulse">
                      <Activity className="h-2.5 w-2.5" /> Live
                    </span>
                  )}
                  <span className="text-[10px] font-medium text-muted-foreground leading-tight">
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
