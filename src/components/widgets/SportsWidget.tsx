"use client";

import React, { useEffect, useState } from "react";
import { RefreshCw, Activity, ChevronDown, ChevronUp } from "lucide-react";
import { MdOutlineSportsFootball, MdSportsBasketball } from "react-icons/md";
import { RiBaseballFill } from "react-icons/ri";

interface Game {
  id: string;
  date: string;
  name: string;
  shortName: string;
  sport: string;
  league: string;
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

type SportType = "nfl" | "ncaaf" | "nba" | "wnba" | "ncaam" | "ncaaw" | "mlb";
type DateFilterType = "yesterday" | "today" | "tomorrow" | "upcoming";

interface GameDetailsProps {
  gameId: string;
  sport: string;
  league: string;
  homeTeamId: string;
  awayTeamId: string;
  homeAbbr: string;
  awayAbbr: string;
}

function GameDetails({ gameId, sport, league, homeTeamId, awayTeamId, homeAbbr, awayAbbr }: GameDetailsProps) {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"boxscore" | "teamstats">("boxscore");
  const [selectedTeamId, setSelectedTeamId] = useState<string>(awayTeamId);

  useEffect(() => {
    let active = true;
    const fetchDetails = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`/api/sports/summary?sport=${sport}&league=${league}&event=${gameId}`);
        if (!res.ok) throw new Error("Stats currently unavailable");
        const json = await res.json();
        if (active) {
          setData(json);
        }
      } catch (err: any) {
        if (active) setError(err.message || "Failed to load stats");
      } finally {
        if (active) setLoading(false);
      }
    };
    fetchDetails();
    return () => { active = false; };
  }, [gameId, sport, league]);

  if (loading) {
    return (
      <div className="border-t border-border/30 mt-3 pt-3 flex justify-center py-4" id={`game-details-loading-${gameId}`}>
        <div className="w-4.5 h-4.5 border-2 border-accent border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="border-t border-border/30 mt-3 pt-3 text-center py-2 text-[10px] text-muted-foreground" id={`game-details-error-${gameId}`}>
        Stats are currently unavailable for this game
      </div>
    );
  }

  // Parse team stats
  const boxTeams = data.boxscore?.teams || [];
  const awayStats = boxTeams.find((t: any) => t.team?.id === awayTeamId)?.statistics || [];
  const homeStats = boxTeams.find((t: any) => t.team?.id === homeTeamId)?.statistics || [];

  const getStatVal = (statsList: any[], statName: string) => {
    return statsList.find((s: any) => s.name === statName)?.displayValue || "-";
  };

  let statsToShow: Array<{ key: string; label: string }> = [];
  if (sport === "basketball") {
    statsToShow = [
      { key: "fieldGoalPct", label: "FG %" },
      { key: "threePointFieldGoalPct", label: "3PT %" },
      { key: "freeThrowPct", label: "FT %" },
      { key: "totalRebounds", label: "Rebounds" },
      { key: "assists", label: "Assists" },
      { key: "turnovers", label: "Turnovers" }
    ];
  } else if (sport === "football") {
    statsToShow = [
      { key: "firstDowns", label: "1st Downs" },
      { key: "totalYards", label: "Total Yards" },
      { key: "netPassingYards", label: "Passing Yds" },
      { key: "rushingYards", label: "Rushing Yds" },
      { key: "turnovers", label: "Turnovers" },
      { key: "possessionTime", label: "Possession" }
    ];
  } else {
    statsToShow = [
      { key: "hits", label: "Hits" },
      { key: "errors", label: "Errors" },
      { key: "leftOnBase", label: "LOB" }
    ];
  }

  // Basketball Boxscore Parsing
  const teamBox = data.boxscore?.players?.find((t: any) => t.team?.id === selectedTeamId);
  const teamStatistics = teamBox?.statistics || [];
  const basketStats = teamStatistics[0]; // Basketball has 1 stats list for players

  let starters: any[] = [];
  let bench: any[] = [];

  if (sport === "basketball" && basketStats) {
    const headers = basketStats.names || [];
    const minIdx = headers.indexOf("MIN");
    const ptsIdx = headers.indexOf("PTS");
    const fg3Idx = headers.indexOf("3PM-3PA") !== -1 ? headers.indexOf("3PM-3PA") : headers.indexOf("3PT");
    const rebIdx = headers.indexOf("REB");
    const astIdx = headers.indexOf("AST");
    const stlIdx = headers.indexOf("STL");
    const blkIdx = headers.indexOf("BLK");

    const athletes = basketStats.athletes || [];
    athletes.forEach((ath: any) => {
      const getVal = (idx: number) => idx !== -1 ? ath.stats?.[idx] || "0" : "0";
      const p = {
        name: ath.athlete?.shortName || ath.athlete?.displayName || "Player",
        starter: ath.starter,
        dnp: ath.didNotPlay,
        reason: ath.reason,
        pts: getVal(ptsIdx),
        fg3: getVal(fg3Idx),
        reb: getVal(rebIdx),
        ast: getVal(astIdx),
        stl: getVal(stlIdx),
        blk: getVal(blkIdx),
        min: getVal(minIdx)
      };
      if (ath.starter) starters.push(p);
      else bench.push(p);
    });
  }

  // Football Rendering Helpers
  const renderFootballTable = (title: string, catName: string, fields: Array<{ name: string; label: string }>) => {
    const cat = teamStatistics.find((s: any) => s.name === catName);
    if (!cat || !cat.athletes || cat.athletes.length === 0) return null;
    const headers = cat.names || cat.keys || [];
    const fieldIndices = fields.map(f => headers.indexOf(f.name));

    return (
      <div className="flex flex-col gap-1.5 mt-2" id={`football-cat-${catName}-${gameId}`}>
        <div className="text-[8px] font-extrabold text-accent uppercase tracking-wider border-b border-border/20 pb-0.5">{title}</div>
        <table className="w-full text-left text-[9px] border-collapse font-mono">
          <thead>
            <tr className="text-muted-foreground/80 border-b border-border/10">
              <th className="py-1 font-semibold text-left">PLAYER</th>
              {fields.map((f, i) => (
                <th key={i} className="py-1 text-right font-semibold">{f.label}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-border/10">
            {cat.athletes.map((ath: any, aIdx: number) => (
              <tr key={aIdx} className="text-white hover:bg-secondary/15">
                <td className="py-1 font-medium text-left truncate max-w-[90px]">{ath.athlete?.shortName || ath.athlete?.displayName || "Player"}</td>
                {fieldIndices.map((idx, i) => {
                  const val = idx !== -1 ? ath.stats?.[idx] || "0" : "0";
                  return <td key={i} className="py-1 text-right text-muted-foreground font-mono">{val}</td>;
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  const renderBasketballTable = (title: string, playersList: any[]) => {
    if (playersList.length === 0) return null;
    return (
      <div className="flex flex-col gap-1.5 mt-2" id={`basketball-sec-${title.toLowerCase()}-${gameId}`}>
        <div className="text-[8px] font-extrabold text-accent uppercase tracking-wider border-b border-border/20 pb-0.5">{title}</div>
        <table className="w-full text-left text-[9px] border-collapse font-mono">
          <thead>
            <tr className="text-muted-foreground/80 border-b border-border/10">
              <th className="py-1 font-semibold text-left">PLAYER</th>
              <th className="py-1 text-right font-semibold">MIN</th>
              <th className="py-1 text-right font-semibold">PTS</th>
              <th className="py-1 text-right font-semibold">3PT</th>
              <th className="py-1 text-right font-semibold">REB</th>
              <th className="py-1 text-right font-semibold">AST</th>
              <th className="py-1 text-right font-semibold">STL</th>
              <th className="py-1 text-right font-semibold">BLK</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/10">
            {playersList.map((ath, aIdx) => (
              <tr key={aIdx} className="text-white hover:bg-secondary/15">
                <td className="py-1 font-medium text-left truncate max-w-[85px]">{ath.name}</td>
                {ath.dnp ? (
                  <td colSpan={7} className="py-1 text-right text-muted-foreground/60 italic text-[8px] font-mono">
                    {ath.reason || "DNP"}
                  </td>
                ) : (
                  <>
                    <td className="py-1 text-right text-muted-foreground/80 font-mono">{ath.min}</td>
                    <td className="py-1 text-right text-white font-bold font-mono">{ath.pts}</td>
                    <td className="py-1 text-right text-muted-foreground font-mono">{ath.fg3}</td>
                    <td className="py-1 text-right text-muted-foreground font-mono">{ath.reb}</td>
                    <td className="py-1 text-right text-muted-foreground font-mono">{ath.ast}</td>
                    <td className="py-1 text-right text-muted-foreground font-mono">{ath.stl}</td>
                    <td className="py-1 text-right text-muted-foreground font-mono">{ath.blk}</td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="border-t border-border/30 mt-3 pt-3 flex flex-col gap-3 text-[10px] font-mono animate-fadeIn" id={`game-details-box-${gameId}`}>
      {/* Tab Switcher */}
      <div className="flex border-b border-border/20 mb-1" id={`game-details-tabs-${gameId}`}>
        <button
          onClick={(e) => { e.stopPropagation(); setActiveTab("boxscore"); }}
          className={`flex-1 pb-1.5 text-center text-[9px] font-extrabold uppercase tracking-wider transition-all ${
            activeTab === "boxscore" ? "text-accent border-b-2 border-accent" : "text-muted-foreground hover:text-white"
          }`}
        >
          Box Score
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); setActiveTab("teamstats"); }}
          className={`flex-1 pb-1.5 text-center text-[9px] font-extrabold uppercase tracking-wider transition-all ${
            activeTab === "teamstats" ? "text-accent border-b-2 border-accent" : "text-muted-foreground hover:text-white"
          }`}
        >
          Team Stats
        </button>
      </div>

      {activeTab === "boxscore" ? (
        <div className="flex flex-col gap-2.5" id={`game-details-boxscore-${gameId}`} onClick={(e) => e.stopPropagation()}>
          {/* Team Toggle Selector */}
          <div className="flex bg-secondary/80 p-0.5 rounded-lg border border-border/40 gap-1.5" id={`game-details-team-toggle-${gameId}`}>
            <button
              onClick={() => setSelectedTeamId(awayTeamId)}
              className={`flex-1 py-1 rounded-md text-[9px] font-bold uppercase transition-all ${
                selectedTeamId === awayTeamId ? "bg-accent text-white shadow-sm" : "text-muted-foreground hover:text-white"
              }`}
            >
              {awayAbbr}
            </button>
            <button
              onClick={() => setSelectedTeamId(homeTeamId)}
              className={`flex-1 py-1 rounded-md text-[9px] font-bold uppercase transition-all ${
                selectedTeamId === homeTeamId ? "bg-accent text-white shadow-sm" : "text-muted-foreground hover:text-white"
              }`}
            >
              {homeAbbr}
            </button>
          </div>

          {/* Roster / Player Lists */}
          {!teamBox || teamStatistics.length === 0 ? (
            <div className="text-center py-4 text-muted-foreground/60 text-[9px]">
              No roster statistics found for this team.
            </div>
          ) : sport === "basketball" ? (
            <div className="space-y-3.5" id={`basketball-boxscore-tables-${gameId}`}>
              {renderBasketballTable("Starters", starters)}
              {renderBasketballTable("Bench", bench)}
            </div>
          ) : sport === "football" ? (
            <div className="space-y-3.5" id={`football-boxscore-tables-${gameId}`}>
              {renderFootballTable("Passing", "passing", [
                { name: "completions/passingAttempts", label: "C/ATT" },
                { name: "passingYards", label: "YDS" },
                { name: "passingTouchdowns", label: "TD" },
                { name: "interceptions", label: "INT" }
              ])}
              {renderFootballTable("Rushing", "rushing", [
                { name: "rushingAttempts", label: "CAR" },
                { name: "rushingYards", label: "YDS" },
                { name: "rushingTouchdowns", label: "TD" }
              ])}
              {renderFootballTable("Receiving", "receiving", [
                { name: "receptions", label: "REC" },
                { name: "receivingTargets", label: "TGTS" },
                { name: "receivingYards", label: "YDS" },
                { name: "receivingTouchdowns", label: "TD" }
              ])}
            </div>
          ) : (
            // Fallback for Baseball / others
            <div className="space-y-3" id={`other-boxscore-tables-${gameId}`}>
              {teamStatistics.map((cat: any, cIdx: number) => 
                renderFootballTable(cat.displayName || cat.name, cat.name, (cat.names || cat.keys || []).slice(0, 4).map((n: string) => ({ name: n, label: n.toUpperCase() })))
              )}
            </div>
          )}
        </div>
      ) : (
        <div className="flex flex-col gap-2.5" id={`game-details-team-comparison-${gameId}`} onClick={(e) => e.stopPropagation()}>
          <div className="space-y-1.5" id={`game-stats-list-${gameId}`}>
            {statsToShow.map((stat, idx) => {
              const aVal = getStatVal(awayStats, stat.key);
              const hVal = getStatVal(homeStats, stat.key);
              if (aVal === "-" && hVal === "-") return null;

              return (
                <div key={idx} className="flex justify-between items-center px-1 text-muted-foreground" id={`game-stat-row-${gameId}-${stat.key}`}>
                  <span className="w-12 text-left text-white font-semibold" id={`game-stat-away-${gameId}-${stat.key}`}>{aVal}</span>
                  <span className="text-[9px] text-muted-foreground/85 uppercase" id={`game-stat-label-${gameId}-${stat.key}`}>{stat.label}</span>
                  <span className="w-12 text-right text-white font-semibold" id={`game-stat-home-${gameId}-${stat.key}`}>{hVal}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default function SportsWidget() {
  const [sport, setSport] = useState<SportType>("nfl");
  const [dateFilter, setDateFilter] = useState<DateFilterType>("today");
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [expandedGameId, setExpandedGameId] = useState<string | null>(null);

  const getYYYYMMDD = (offsetDays: number) => {
    const date = new Date();
    date.setDate(date.getDate() + offsetDays);
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, "0");
    const d = String(date.getDate()).padStart(2, "0");
    return `${y}${m}${d}`;
  };

  const fetchScores = async (selectedSport: SportType, selectedDate: DateFilterType) => {
    setLoading(true);
    setError(null);
    setExpandedGameId(null); // Collapse when tab/date changes
    try {
      let endpoints: Array<{ sport: string; league: string }> = [];

      if (selectedSport === "nfl") {
        endpoints = [{ sport: "football", league: "nfl" }];
      } else if (selectedSport === "ncaaf") {
        endpoints = [{ sport: "football", league: "college-football" }];
      } else if (selectedSport === "nba") {
        endpoints = [
          { sport: "basketball", league: "nba" },
          { sport: "basketball", league: "nba-summer" }
        ];
      } else if (selectedSport === "wnba") {
        endpoints = [{ sport: "basketball", league: "wnba" }];
      } else if (selectedSport === "ncaam") {
        endpoints = [{ sport: "basketball", league: "mens-college-basketball" }];
      } else if (selectedSport === "ncaaw") {
        endpoints = [{ sport: "basketball", league: "womens-college-basketball" }];
      } else if (selectedSport === "mlb") {
        endpoints = [{ sport: "baseball", league: "mlb" }];
      }

      let dateParam = "";
      let targetLocalDateStr = "";

      if (selectedDate === "yesterday") {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        targetLocalDateStr = yesterday.toLocaleDateString();
        dateParam = `${getYYYYMMDD(-1)}-${getYYYYMMDD(0)}`;
      } else if (selectedDate === "today") {
        const today = new Date();
        targetLocalDateStr = today.toLocaleDateString();
        dateParam = `${getYYYYMMDD(0)}-${getYYYYMMDD(1)}`;
      } else if (selectedDate === "tomorrow") {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        targetLocalDateStr = tomorrow.toLocaleDateString();
        dateParam = `${getYYYYMMDD(1)}-${getYYYYMMDD(2)}`;
      }

      const dateQuery = dateParam ? `&dates=${dateParam}` : "";

      const fetchPromises = endpoints.map(async (ep) => {
        const url = `/api/sports/scoreboard?sport=${ep.sport}&league=${ep.league}${dateQuery}`;
        const res = await fetch(url);
        if (!res.ok) return { events: [], league: ep.league, sport: ep.sport };
        const data = await res.json();
        return { events: data.events || [], league: ep.league, sport: ep.sport };
      });

      const jsons = await Promise.all(fetchPromises);
      const events: any[] = [];
      jsons.forEach(item => {
        if (item && item.events) {
          const eventsWithMeta = item.events.map((e: any) => ({
            ...e,
            sportMeta: item.sport,
            leagueMeta: item.league
          }));
          events.push(...eventsWithMeta);
        }
      });
      
      const formattedGames = events.map((event: any) => {
        const competitors = event.competitions[0]?.competitors || [];
        return {
          id: event.id,
          date: event.date,
          name: event.name,
          shortName: event.shortName,
          sport: event.sportMeta || (selectedSport === "nfl" || selectedSport === "ncaaf" ? "football" : selectedSport === "mlb" ? "baseball" : "basketball"),
          league: event.leagueMeta || (selectedSport === "nfl" ? "nfl" : selectedSport === "wnba" ? "wnba" : "nba"),
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

      let finalGames = formattedGames;
      if (selectedDate !== "upcoming" && targetLocalDateStr) {
        finalGames = finalGames.filter((g: any) => {
          const gameLocalDate = new Date(g.date).toLocaleDateString();
          return gameLocalDate === targetLocalDateStr;
        });
      }

      setGames(finalGames);
    } catch (err: any) {
      setError(err.message || "Failed to load scores");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchScores(sport, dateFilter);
  }, [sport, dateFilter]);

  const getSportIcon = () => {
    const sizeClass = "h-5 w-5 text-accent";
    if (sport === "nfl" || sport === "ncaaf") {
      return <MdOutlineSportsFootball className={sizeClass} id="sports-widget-icon-football" />;
    }
    if (sport === "nba" || sport === "ncaam" || sport === "ncaaw" || sport === "wnba") {
      return <MdSportsBasketball className={sizeClass} id="sports-widget-icon-basketball" />;
    }
    return <RiBaseballFill className={sizeClass} id="sports-widget-icon-baseball" />;
  };

  const handleGameClick = (gameId: string) => {
    setExpandedGameId(prev => prev === gameId ? null : gameId);
  };

  return (
    <div className="bg-card border border-border rounded-2xl p-5 relative overflow-hidden transition-all duration-300 hover:border-accent/40 flex flex-col h-[400px]" id="sports-widget-root">
      {/* Background radial gradient glow */}
      <div className="absolute -right-16 -top-16 w-32 h-32 bg-accent/5 rounded-full blur-3xl pointer-events-none" id="sports-widget-bg-blur"></div>

      {/* Header Row */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-3 shrink-0" id="sports-widget-header">
        <div id="sports-widget-header-text">
          <h2 className="text-lg font-semibold text-white flex items-center gap-2" id="sports-widget-title">
            {getSportIcon()}
            Sports Scoreboard
          </h2>
          <p className="text-xs text-muted-foreground" id="sports-widget-subtitle">Live games &amp; updates</p>
        </div>

        <div className="flex items-center gap-2 w-full lg:w-auto justify-between lg:justify-start" id="sports-widget-actions">
          {/* Scrollable Sport Tabs container */}
          <div className="flex bg-secondary p-1 rounded-lg border border-border overflow-x-auto max-w-[calc(100%-40px)] scrollbar-none shrink-0" id="sports-widget-sport-tabs">
            {(["nfl", "ncaaf", "nba", "wnba", "ncaam", "ncaaw", "mlb"] as SportType[]).map((s) => (
              <button
                id={`sports-tab-btn-${s}`}
                key={s}
                onClick={() => setSport(s)}
                className={`px-2.5 py-1 rounded text-[10px] font-bold uppercase transition-all shrink-0 ${
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
            onClick={() => fetchScores(sport, dateFilter)} 
            disabled={loading}
            className="p-1.5 hover:bg-muted bg-secondary border border-border rounded-lg text-muted-foreground hover:text-white disabled:opacity-50 transition-colors shrink-0"
            title="Refresh scores"
          >
            <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin text-accent' : ''}`} />
          </button>
        </div>
      </div>

      {/* Date Filter Segmented Control */}
      <div className="flex bg-secondary/45 p-0.5 rounded-lg border border-border/50 mb-3 items-center justify-between shrink-0" id="sports-widget-date-filters">
        {(["yesterday", "today", "tomorrow", "upcoming"] as DateFilterType[]).map((d) => (
          <button
            key={d}
            id={`sports-date-btn-${d}`}
            onClick={() => setDateFilter(d)}
            className={`flex-1 py-1 text-[10px] font-bold uppercase rounded-md transition-all ${
              dateFilter === d
                ? "bg-accent text-white shadow-sm shadow-accent/10"
                : "text-muted-foreground hover:text-white"
            }`}
          >
            {d}
          </button>
        ))}
      </div>

      {/* Games Content */}
      {loading ? (
        <div className="flex-1 flex items-center justify-center" id="sports-widget-loader">
          <div className="w-6 h-6 border-2 border-accent border-t-transparent rounded-full animate-spin" id="sports-widget-spinner"></div>
        </div>
      ) : error ? (
        <div className="flex-1 flex flex-col items-center justify-center text-xs text-red-400 gap-2" id="sports-widget-error-container">
          <span id="sports-widget-error-text">{error}</span>
          <button id="sports-widget-retry-btn" onClick={() => fetchScores(sport, dateFilter)} className="mt-2 text-accent underline">Retry</button>
        </div>
      ) : games.length === 0 ? (
        <div className="flex-1 flex items-center justify-center text-xs text-muted-foreground font-mono" id="sports-widget-no-games">
          No games scheduled for this day
        </div>
      ) : (
        <div className="flex-1 overflow-y-auto pr-1 space-y-3" id="sports-widget-games-list">
          {games.slice(0, 5).map((game) => {
            const away = game.competitors.find((c) => c.homeAway === "away");
            const home = game.competitors.find((c) => c.homeAway === "home");
            const isLive = game.status.type.state === "in";
            const isExpanded = expandedGameId === game.id;
            
            return (
              <div 
                key={game.id} 
                onClick={() => handleGameClick(game.id)}
                className={`border rounded-xl p-3 flex flex-col transition-all hover:bg-secondary/60 hover:border-accent/40 cursor-pointer select-none ${
                  isExpanded ? "bg-secondary/70 border-accent/40" : "bg-secondary/40 border-border/50"
                }`}
                id={`sports-game-item-${game.id}`}
              >
                {/* Game Main Row */}
                <div className="flex items-center justify-between w-full" id={`sports-game-main-row-${game.id}`}>
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

                  <div className="w-px h-10 bg-border mx-4 shrink-0" id={`sports-game-divider-${game.id}`}></div>

                  {/* Game Status */}
                  <div className="flex flex-col items-center justify-center w-24 text-center shrink-0" id={`sports-game-status-box-${game.id}`}>
                    {isLive && (
                      <span className="inline-flex items-center gap-1.5 px-1.5 py-0.5 rounded text-[10px] font-bold bg-red-500/10 text-red-500 mb-1 uppercase tracking-wider animate-pulse" id={`sports-game-live-badge-${game.id}`}>
                        <Activity className="h-2.5 w-2.5" /> Live
                      </span>
                    )}
                    <span className="text-[10px] font-medium text-muted-foreground leading-tight flex items-center gap-1 justify-center hover:text-white" id={`sports-game-status-detail-${game.id}`}>
                      {game.status.type.detail}
                      {isExpanded ? <ChevronUp className="h-3 w-3 text-muted-foreground" /> : <ChevronDown className="h-3 w-3 text-muted-foreground" />}
                    </span>
                  </div>
                </div>

                {/* Expanded Boxscore Section */}
                {isExpanded && (
                  <GameDetails 
                    gameId={game.id} 
                    sport={game.sport} 
                    league={game.league} 
                    homeTeamId={home?.id || ""} 
                    awayTeamId={away?.id || ""} 
                    homeAbbr={home?.team?.abbreviation || "HOME"}
                    awayAbbr={away?.team?.abbreviation || "AWAY"}
                  />
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
