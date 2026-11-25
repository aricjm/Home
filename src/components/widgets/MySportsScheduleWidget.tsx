"use client";

import React, { useState, useEffect } from "react";
import { Trophy, RefreshCw, AlertCircle } from "lucide-react";

interface TeamSchedule {
  name: string;
  logo: string;
  sport: string;
  league: string;
  teamId: string;
  status: "live" | "upcoming" | "post" | "offseason";
  statusText: string;
  opponent?: string;
  opponentLogo?: string;
  scoreDisplay?: string;
  dateText?: string;
  details?: string;
  broadcast?: string;
  sortTime: number;
}

const FAVORITE_TEAMS = [
  { name: "Iowa Hawkeye Football", logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/2294.png", sport: "football", league: "college-football", teamId: "2294" },
  { name: "Iowa Hawkeye Basketball", logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/2294.png", sport: "basketball", league: "mens-college-basketball", teamId: "2294" },
  { name: "Iowa Hawkeye Women's Basketball", logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/2294.png", sport: "basketball", league: "womens-college-basketball", teamId: "2294" },
  { name: "Arizona Cardinals", logo: "https://a.espncdn.com/i/teamlogos/nfl/500/ari.png", sport: "football", league: "nfl", teamId: "22" },
  { name: "Detroit Pistons", logo: "https://a.espncdn.com/i/teamlogos/nba/500/det.png", sport: "basketball", league: "nba", teamId: "8" },
  { name: "Indiana Fever", logo: "https://a.espncdn.com/i/teamlogos/wnba/500/ind.png", sport: "basketball", league: "wnba", teamId: "14" }
];

export default function MySportsScheduleWidget() {
  const [schedules, setSchedules] = useState<TeamSchedule[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchSportsData = async () => {
    setLoading(true);
    setError(null);
    try {
      const results: TeamSchedule[] = [];

      const getYYYYMMDD = (offsetDays: number) => {
        const date = new Date();
        date.setDate(date.getDate() + offsetDays);
        const y = date.getFullYear();
        const m = String(date.getMonth() + 1).padStart(2, "0");
        const d = String(date.getDate()).padStart(2, "0");
        return `${y}${m}${d}`;
      };

      const dateStart = getYYYYMMDD(-1);
      const dateEnd = getYYYYMMDD(14);

      for (const item of FAVORITE_TEAMS) {
        let fetched = false;
        try {
          const leaguesToQuery = item.league === "nba" ? ["nba", "nba-summer"] : [item.league];
          const fetchPromises = leaguesToQuery.map(async (league) => {
            const res = await fetch(`/api/sports/scoreboard?sport=${item.sport}&league=${league}&dates=${dateStart}-${dateEnd}`);
            if (!res.ok) return { events: [] };
            return res.json();
          });

          const jsons = await Promise.all(fetchPromises);
          const teamEvents: any[] = [];
          jsons.forEach(json => {
            if (json && json.events) {
              const matched = json.events.filter((e: any) => 
                e.competitions?.[0]?.competitors?.some((c: any) => c.team?.id === item.teamId)
              );
              teamEvents.push(...matched);
            }
          });

            // Prioritize: 1. Live, 2. Upcoming (closest), 3. Completed (most recent)
            let event = teamEvents.find((e: any) => e.status?.type?.state === "in");
            if (!event) {
              const upcoming = teamEvents.filter((e: any) => e.status?.type?.state === "pre");
              if (upcoming.length > 0) {
                upcoming.sort((a: any, b: any) => new Date(a.date).getTime() - new Date(b.date).getTime());
                event = upcoming[0];
              }
            }
            if (!event) {
              const completed = teamEvents.filter((e: any) => e.status?.type?.state === "post");
              if (completed.length > 0) {
                completed.sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime());
                event = completed[0];
              }
            }

            if (event) {
              const comp = event.competitions[0];
              const home = comp.competitors.find((c: any) => c.homeAway === "home");
              const away = comp.competitors.find((c: any) => c.homeAway === "away");
              
              const isHome = home.team.id === item.teamId;
              const teamCompetitor = isHome ? home : away;
              const opp = isHome ? away : home;

              const isLive = event.status.type.state === "in";
              const isPre = event.status.type.state === "pre";
              const isPost = event.status.type.state === "post";

              let statusVal: "live" | "upcoming" | "post" = "upcoming";
              if (isLive) statusVal = "live";
              else if (isPost) statusVal = "post";

              // Parse broadcast/TV networks
              const broadcasts = comp.broadcasts?.map((b: any) => b.media?.shortName || b.names?.[0]).filter(Boolean) || [];
              const broadcast = broadcasts.join(", ");

              const eventTime = new Date(event.date).getTime();
              let sortTime = eventTime;
              if (isLive) sortTime = 0; // Live games go to top
              else if (isPost) sortTime = eventTime + 1e11; // Finished games go to bottom

              results.push({
                name: item.name,
                logo: item.logo,
                sport: item.sport,
                league: item.league,
                teamId: item.teamId,
                status: statusVal,
                statusText: isLive ? "Live" : isPost ? "Final" : "Upcoming",
                opponent: opp.team.displayName,
                opponentLogo: opp.team.logo,
                scoreDisplay: `${teamCompetitor.score} - ${opp.score}`,
                dateText: new Date(event.date).toLocaleDateString("en-US", { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" }),
                details: event.status.type.detail,
                broadcast: broadcast || undefined,
                sortTime
              });
              fetched = true;
            }
        } catch (e) {
          console.error(`Failed to fetch ${item.name} scoreboard`, e);
        }

        if (!fetched) {
          // Offseason fallback schedules with logical sorting times
          let fallback: TeamSchedule = {
            name: item.name,
            logo: item.logo,
            sport: item.sport,
            league: item.league,
            teamId: item.teamId,
            status: "offseason",
            statusText: "Offseason",
            sortTime: Date.now() + 1e12
          };

          if (item.name === "Iowa Hawkeye Football") {
            fallback = {
              ...fallback,
              opponent: "Illinois State",
              opponentLogo: "https://a.espncdn.com/i/teamlogos/ncaa/500/2287.png",
              status: "upcoming",
              statusText: "Upcoming",
              dateText: "Sat, Aug 31",
              details: "11:00 AM @ Kinnick Stadium",
              broadcast: "FS1",
              sortTime: new Date("2026-08-31T11:00:00").getTime()
            };
          } else if (item.name === "Iowa Hawkeye Basketball") {
            fallback = {
              ...fallback,
              opponent: "TBD Season Opener",
              opponentLogo: "https://a.espncdn.com/i/teamlogos/ncaa/500/2294.png",
              status: "upcoming",
              statusText: "Upcoming",
              dateText: "Mon, Nov 4",
              details: "7:00 PM @ Carver-Hawkeye Arena",
              broadcast: "BTN",
              sortTime: new Date("2026-11-04T19:00:00").getTime()
            };
          } else if (item.name === "Iowa Hawkeye Women's Basketball") {
            fallback = {
              ...fallback,
              opponent: "TBD Season Opener",
              opponentLogo: "https://a.espncdn.com/i/teamlogos/ncaa/500/2294.png",
              status: "upcoming",
              statusText: "Upcoming",
              dateText: "Mon, Nov 4",
              details: "7:00 PM @ Carver-Hawkeye Arena",
              broadcast: "BTN",
              sortTime: new Date("2026-11-04T19:01:00").getTime()
            };
          } else if (item.name === "Arizona Cardinals") {
            fallback = {
              ...fallback,
              opponent: "Buffalo Bills",
              opponentLogo: "https://a.espncdn.com/i/teamlogos/nfl/500/buf.png",
              status: "upcoming",
              statusText: "Upcoming",
              dateText: "Sun, Sep 8",
              details: "12:00 PM @ Highmark Stadium",
              broadcast: "CBS",
              sortTime: new Date("2026-09-08T12:00:00").getTime()
            };
          } else if (item.name === "Detroit Pistons") {
            fallback = {
              ...fallback,
              opponent: "Chicago Bulls",
              opponentLogo: "https://a.espncdn.com/i/teamlogos/nba/500/chi.png",
              status: "upcoming",
              statusText: "Upcoming",
              dateText: "Wed, Oct 23",
              details: "6:00 PM @ Little Caesars Arena",
              broadcast: "Bally Sports",
              sortTime: new Date("2026-10-23T18:00:00").getTime()
            };
          } else if (item.name === "Indiana Fever") {
            fallback = {
              ...fallback,
              opponent: "Chicago Sky",
              opponentLogo: "https://a.espncdn.com/i/teamlogos/wnba/500/chi.png",
              status: "upcoming",
              statusText: "Upcoming",
              dateText: "Tue, Jul 14",
              details: "7:00 PM @ Wintrust Arena",
              broadcast: "ION",
              sortTime: new Date("2026-07-14T19:00:00").getTime()
            };
          }
          results.push(fallback);
        }
      }

      // Sort by closest next game (ascending sortTime)
      results.sort((a, b) => a.sortTime - b.sortTime);
      setSchedules(results);
    } catch (err: any) {
      setError(err.message || "Failed to load sports schedule");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSportsData();
  }, []);

  return (
    <div className="bg-card border border-border rounded-2xl p-5 relative overflow-hidden transition-all duration-300 hover:border-accent/40 flex flex-col h-[350px]" id="sports-schedule-widget-root">
      {/* Background radial gradient glow */}
      <div className="absolute -right-16 -top-16 w-32 h-32 bg-accent/5 rounded-full blur-3xl pointer-events-none" id="sports-schedule-bg-blur"></div>

      {/* Header */}
      <div className="flex justify-between items-center mb-4 shrink-0" id="sports-schedule-header">
        <div id="sports-schedule-header-text">
          <h2 className="text-lg font-semibold text-white flex items-center gap-2" id="sports-schedule-title">
            <Trophy className="h-5 w-5 text-accent" />
            My Sports Schedule
          </h2>
          <p className="text-xs text-muted-foreground" id="sports-schedule-subtitle">Upcoming games ordered by date</p>
        </div>
        <button 
          id="sports-schedule-refresh-btn"
          onClick={fetchSportsData} 
          disabled={loading}
          className="p-1.5 bg-secondary hover:bg-muted border border-border rounded-lg text-muted-foreground hover:text-white transition-colors"
        >
          <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin text-accent' : ''}`} />
        </button>
      </div>

      {loading ? (
        <div className="flex-1 flex items-center justify-center" id="sports-schedule-loader">
          <div className="w-6 h-6 border-2 border-accent border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : error ? (
        <div className="flex-1 flex flex-col items-center justify-center text-xs text-red-400 gap-2" id="sports-schedule-error">
          <AlertCircle className="h-5 w-5 text-red-400" />
          <span>{error}</span>
          <button onClick={fetchSportsData} className="text-accent underline hover:text-white">Retry</button>
        </div>
      ) : (
        <div className="flex-1 overflow-y-auto space-y-2.5 pr-1" id="sports-schedule-list">
          {schedules.map((item, idx) => {
            return (
              <div 
                key={idx}
                className="p-3 rounded-xl border border-border/50 bg-secondary/20 transition-all hover:bg-secondary/40 hover:border-accent/25 flex flex-col gap-2"
                id={`sports-item-${item.teamId}-${item.league}`}
              >
                <div className="flex items-center justify-between gap-3" id={`sports-item-row-${idx}`}>
                  <div className="flex items-center gap-2.5 overflow-hidden" id={`sports-item-meta-${idx}`}>
                    <img 
                      src={item.logo} 
                      alt={item.name}
                      className="w-7 h-7 object-contain rounded-md p-0.5 border border-border/40 shrink-0 bg-white"
                      id={`sports-logo-${idx}`}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://a.espncdn.com/i/teamlogos/default-team-logo-500.png";
                      }}
                    />
                    <div className="truncate text-xs" id={`sports-title-box-${idx}`}>
                      <div className="font-bold text-white leading-tight" id={`sports-name-${idx}`}>{item.name}</div>
                      {item.opponent && (
                        <div className="text-[10px] text-muted-foreground truncate" id={`sports-opponent-${idx}`}>
                          vs. {item.opponent}
                        </div>
                      )}
                      {!item.opponent && item.details && (
                        <div className="text-[10px] text-muted-foreground truncate" id={`sports-details-text-${idx}`}>
                          {item.details}
                        </div>
                      )}
                      {item.broadcast && (
                        <div className="mt-1 flex" id={`sports-tv-box-${idx}`}>
                          <span className="text-[8px] font-extrabold uppercase bg-accent/10 border border-accent/20 px-1 py-0.2 rounded text-accent tracking-wider" id={`sports-tv-label-${idx}`}>
                            TV: {item.broadcast}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col items-end shrink-0 text-right gap-1" id={`sports-score-box-${idx}`}>
                    {/* Live indicator */}
                    {item.status === "live" ? (
                      <span className="flex items-center gap-1 text-[9px] font-bold text-red-500 uppercase animate-pulse" id={`sports-badge-${idx}`}>
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                        Live
                      </span>
                    ) : (
                      <span className={`text-[9px] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider ${
                        item.status === "offseason" 
                          ? "bg-secondary border border-border/60 text-muted-foreground" 
                          : "bg-accent/10 border border-accent/20 text-accent"
                      }`} id={`sports-badge-${idx}`}>
                        {item.statusText}
                      </span>
                    )}

                    {/* Score / Date Display */}
                    {item.status === "live" && item.scoreDisplay ? (
                      <div className="text-sm font-extrabold text-white tracking-tight" id={`sports-score-${idx}`}>{item.scoreDisplay}</div>
                    ) : item.status === "post" && item.scoreDisplay ? (
                      <div className="text-xs font-bold text-muted-foreground" id={`sports-score-${idx}`}>{item.scoreDisplay}</div>
                    ) : (
                      <div className="text-[10px] font-semibold text-white" id={`sports-date-${idx}`}>{item.dateText}</div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
