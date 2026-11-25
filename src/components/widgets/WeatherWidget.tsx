"use client";

import React, { useEffect, useState } from "react";
import { 
  Cloud, 
  Sun, 
  CloudRain, 
  CloudSnow, 
  CloudLightning, 
  Wind, 
  Droplets, 
  RefreshCw,
  Sunset,
  Sparkles,
  Thermometer,
  ShieldAlert
} from "lucide-react";
import { 
  IconLayoutNavbarExpand, 
  IconLayoutBottombarExpandFilled 
} from "@tabler/icons-react";

interface ForecastDay {
  date: string;
  dayName: string;
  tempMax: number;
  tempMin: number;
  weatherCode: number;
}

interface HourlyUV {
  time: string;
  uv: number;
}

interface WeatherData {
  temp: number;
  feelsLike: number;
  humidity: number;
  windSpeed: number;
  precipitation: number;
  weatherCode: number;
  uvIndex: number;
  sunset: string;
  hourlyUV: HourlyUV[];
  forecast: ForecastDay[];
}

export default function WeatherWidget() {
  const [data, setData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const getDayName = (dateStr: string) => {
    const date = new Date(dateStr + "T00:00:00");
    return date.toLocaleDateString("en-US", { weekday: "short" });
  };

  const fetchWeather = async () => {
    setLoading(true);
    setError(null);
    try {
      // Waukee, IA coordinates
      const lat = 41.5794;
      const lon = -93.8741;
      
      const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m,uv_index&hourly=uv_index&daily=weather_code,temperature_2m_max,temperature_2m_min,sunset&temperature_unit=fahrenheit&wind_speed_unit=mph&timezone=auto&forecast_days=10`;
      
      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to fetch weather data");
      
      const json = await res.json();
      const current = json.current;
      const daily = json.daily;
      const hourly = json.hourly;
      
      // Parse 10-day forecast
      const forecast: ForecastDay[] = [];
      if (daily && daily.time) {
        for (let i = 0; i < daily.time.length; i++) {
          const dateStr = daily.time[i];
          let dayName = getDayName(dateStr);
          if (i === 0) dayName = "Today";
          forecast.push({
            date: dateStr,
            dayName,
            tempMax: Math.round(daily.temperature_2m_max[i]),
            tempMin: Math.round(daily.temperature_2m_min[i]),
            weatherCode: daily.weather_code[i]
          });
        }
      }

      // Parse hourly UV index for the rest of the day until sunset
      const hourlyUV: HourlyUV[] = [];
      if (hourly && hourly.time && daily && daily.sunset) {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, "0");
        const day = String(now.getDate()).padStart(2, "0");
        const hour = String(now.getHours()).padStart(2, "0");
        
        const currentLocalHourStr = `${year}-${month}-${day}T${hour}:00`;
        const sunsetLocalStr = daily.sunset[0]; // e.g. "2026-07-12T20:45"
        const todayStr = `${year}-${month}-${day}`;

        for (let i = 0; i < hourly.time.length; i++) {
          const timeStr = hourly.time[i]; // e.g. "2026-07-12T15:00"
          if (timeStr.startsWith(todayStr)) {
            // Include from current hour until the sunset hour
            if (timeStr >= currentLocalHourStr && timeStr <= sunsetLocalStr) {
              const h = parseInt(timeStr.split("T")[1].split(":")[0], 10);
              const ampm = h >= 12 ? "PM" : "AM";
              const displayHour = h % 12 === 0 ? 12 : h % 12;
              hourlyUV.push({
                time: `${displayHour} ${ampm}`,
                uv: parseFloat(hourly.uv_index[i].toFixed(1))
              });
            }
          }
        }
      }
      
      // Parse Sunset display time (e.g. "8:45 PM")
      let displaySunset = "";
      if (daily && daily.sunset && daily.sunset[0]) {
        const timePart = daily.sunset[0].split("T")[1]; // "20:45"
        const h = parseInt(timePart.split(":")[0], 10);
        const m = timePart.split(":")[1];
        const ampm = h >= 12 ? "PM" : "AM";
        const displayHour = h % 12 === 0 ? 12 : h % 12;
        displaySunset = `${displayHour}:${m} ${ampm}`;
      }

      setData({
        temp: Math.round(current.temperature_2m),
        feelsLike: Math.round(current.apparent_temperature),
        humidity: current.relative_humidity_2m,
        windSpeed: Math.round(current.wind_speed_10m),
        precipitation: current.precipitation,
        weatherCode: current.weather_code,
        uvIndex: current.uv_index !== undefined ? parseFloat(current.uv_index.toFixed(1)) : 0,
        sunset: displaySunset,
        hourlyUV,
        forecast
      });
    } catch (err: any) {
      setError(err.message || "Failed to load weather");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  const getWeatherIcon = (code: number, sizeClass = "h-10 w-10") => {
    if (code === 0) return <Sun className={`${sizeClass} text-yellow-400 animate-pulse`} id={`weather-icon-${code}`} />;
    if (code >= 1 && code <= 3) return <Cloud className={`${sizeClass} text-gray-400`} id={`weather-icon-${code}`} />;
    if ((code >= 51 && code <= 67) || (code >= 80 && code <= 82)) return <CloudRain className={`${sizeClass} text-blue-400`} id={`weather-icon-${code}`} />;
    if ((code >= 71 && code <= 77) || (code >= 85 && code <= 86)) return <CloudSnow className={`${sizeClass} text-blue-200`} id={`weather-icon-${code}`} />;
    if (code >= 95 && code <= 99) return <CloudLightning className={`${sizeClass} text-purple-400 animate-bounce`} id={`weather-icon-${code}`} />;
    return <Cloud className={`${sizeClass} text-gray-400`} id={`weather-icon-${code}`} />;
  };

  const getWeatherDescription = (code: number) => {
    if (code === 0) return "Clear Sky";
    if (code === 1) return "Mainly Clear";
    if (code === 2) return "Partly Cloudy";
    if (code === 3) return "Overcast";
    if (code >= 51 && code <= 55) return "Drizzle";
    if (code >= 61 && code <= 65) return "Rain";
    if (code >= 71 && code <= 75) return "Snow Showers";
    if (code >= 80 && code <= 82) return "Rain Showers";
    if (code >= 95 && code <= 99) return "Thunderstorm";
    return "Cloudy";
  };

  // SVG Chart constants
  const chartWidth = 600;
  const chartHeight = 90;
  const paddingX = 30;
  const paddingY = 20;
  const activeWidth = chartWidth - paddingX * 2;
  const activeHeight = chartHeight - paddingY * 2;

  const renderUVChart = (hourlyUV: HourlyUV[]) => {
    if (hourlyUV.length === 0) {
      return (
        <div className="flex items-center justify-center h-20 bg-secondary/10 border border-border/30 rounded-xl text-xs text-muted-foreground gap-2" id="weather-uv-empty-state">
          <ShieldAlert className="h-4.5 w-4.5 text-muted-foreground/60" />
          <span>Sunset reached. UV Index is 0.</span>
        </div>
      );
    }

    // Map coordinates
    const coords = hourlyUV.map((p, i) => {
      const x = hourlyUV.length > 1 
        ? paddingX + (i / (hourlyUV.length - 1)) * activeWidth 
        : paddingX + activeWidth / 2;
      
      // Scale UV Index: max value is 12 (extreme)
      const y = paddingY + activeHeight - (p.uv / 12) * activeHeight;
      return { x, y, uv: p.uv, time: p.time };
    });

    const linePath = coords.map((c, i) => `${i === 0 ? "M" : "L"} ${c.x} ${c.y}`).join(" ");
    const areaPath = `${linePath} L ${coords[coords.length - 1].x} ${chartHeight - paddingY + 5} L ${coords[0].x} ${chartHeight - paddingY + 5} Z`;

    return (
      <div className="w-full overflow-x-auto scrollbar-none animate-fadeIn" id="weather-uv-chart-scrollable">
        <div className="min-w-[550px] w-full" id="weather-uv-chart-svg-container">
          <svg viewBox={`0 0 ${chartWidth} ${chartHeight}`} className="w-full overflow-visible" id="weather-uv-chart-svg">
            <defs>
              <linearGradient id="uvAreaGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--color-accent, #0a84ff)" stopOpacity="0.25" />
                <stop offset="100%" stopColor="var(--color-accent, #0a84ff)" stopOpacity="0.0" />
              </linearGradient>
            </defs>

            {/* Grid line at bottom */}
            <line 
              x1={paddingX} 
              y1={chartHeight - paddingY + 5} 
              x2={chartWidth - paddingX} 
              y2={chartHeight - paddingY + 5} 
              className="stroke-border/40" 
              strokeWidth={1}
            />

            {/* Area Path */}
            <path d={areaPath} fill="url(#uvAreaGradient)" />

            {/* Line Path */}
            <path d={linePath} fill="none" stroke="var(--color-accent, #0a84ff)" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />

            {/* Dots and Labels */}
            {coords.map((c, i) => (
              <g key={i} className="group/dot">
                {/* Vertical helper line on hover */}
                <line 
                  x1={c.x} 
                  y1={paddingY} 
                  x2={c.x} 
                  y2={chartHeight - paddingY + 5} 
                  className="stroke-accent/10 opacity-0 group-hover/dot:opacity-100 transition-opacity" 
                  strokeDasharray="3 3"
                />

                {/* Point circle */}
                <circle 
                  cx={c.x} 
                  cy={c.y} 
                  r={3.5} 
                  className="fill-accent stroke-card transition-all" 
                  strokeWidth={1.5}
                />
                
                {/* Interactive outer pulse circle */}
                <circle 
                  cx={c.x} 
                  cy={c.y} 
                  r={8} 
                  className="fill-accent/20 opacity-0 group-hover/dot:opacity-100 transition-opacity cursor-pointer"
                />

                {/* UV Value label above dot */}
                <text 
                  x={c.x} 
                  y={c.y - 8} 
                  textAnchor="middle" 
                  className="fill-white font-mono text-[9px] font-bold"
                  id={`weather-uv-val-txt-${i}`}
                >
                  {c.uv}
                </text>

                {/* Time label below chart */}
                <text 
                  x={c.x} 
                  y={chartHeight - 3} 
                  textAnchor="middle" 
                  className="fill-muted-foreground font-mono text-[8px] font-semibold"
                  id={`weather-uv-time-txt-${i}`}
                >
                  {c.time}
                </text>
              </g>
            ))}
          </svg>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-card border border-border rounded-2xl p-6 relative overflow-hidden transition-all duration-300 hover:border-accent/40 flex flex-col gap-6" id="weather-widget-root">
      {/* Background radial gradient glow */}
      <div className="absolute -right-16 -top-16 w-32 h-32 bg-accent/5 rounded-full blur-3xl pointer-events-none" id="weather-widget-bg-blur"></div>

      {/* Header */}
      <div className="flex justify-between items-start" id="weather-widget-header">
        <div id="weather-widget-header-text">
          <h2 className="text-lg font-bold text-white flex items-center gap-2" id="weather-widget-title">
            <Sun className="h-5 w-5 text-accent animate-pulse" />
            Waukee Weather Dashboard
          </h2>
          <p className="text-xs text-muted-foreground" id="weather-widget-subtitle">Local Conditions & Forecasts</p>
        </div>
        
        {/* Header Controls */}
        <div className="flex items-center gap-2" id="weather-widget-header-controls">
          <button 
            id="weather-widget-expand-btn"
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1.5 hover:bg-muted rounded-lg text-muted-foreground hover:text-foreground transition-colors border border-border bg-secondary/30"
            title={isExpanded ? "Collapse Forecast" : "Expand Forecast"}
          >
            {isExpanded ? (
              <IconLayoutBottombarExpandFilled className="h-4 w-4 text-accent" />
            ) : (
              <IconLayoutNavbarExpand className="h-4 w-4 text-accent" />
            )}
          </button>
          <button 
            id="weather-widget-refresh-btn"
            onClick={fetchWeather} 
            disabled={loading}
            className="p-1.5 hover:bg-muted rounded-lg text-muted-foreground hover:text-foreground disabled:opacity-50 transition-colors border border-border bg-secondary/30"
            title="Refresh weather"
          >
            <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin text-accent' : ''}`} />
          </button>
        </div>
      </div>

      {loading ? (
        <div className="h-28 flex items-center justify-center" id="weather-widget-loader">
          <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" id="weather-widget-spinner"></div>
        </div>
      ) : error ? (
        <div className="h-28 flex flex-col items-center justify-center text-xs text-red-400 gap-2" id="weather-widget-error-container">
          <span id="weather-widget-error-text">{error}</span>
          <button id="weather-widget-retry-btn" onClick={fetchWeather} className="px-3 py-1.5 rounded-lg bg-secondary hover:bg-muted border border-border text-accent transition-colors">Retry</button>
        </div>
      ) : data ? (
        <div className="flex flex-col gap-6 animate-fadeIn" id="weather-widget-dashboard-layout">
          
          {/* Row 1: Current Weather Details banner (Always visible) */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between bg-secondary/25 border border-border/50 rounded-xl p-5 gap-6" id="weather-row-current">
            <div className="flex items-center gap-4.5" id="weather-current-temp-box">
              {getWeatherIcon(data.weatherCode, "h-14 w-14")}
              <div id="weather-current-temp-labels">
                <div className="text-4xl font-extrabold text-white tracking-tight leading-none" id="weather-current-temp">{data.temp}°F</div>
                <div className="text-sm font-semibold text-muted-foreground mt-1" id="weather-current-desc">{getWeatherDescription(data.weatherCode)}</div>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-8 text-xs text-muted-foreground w-full md:w-auto" id="weather-current-details-row">
              <div className="flex items-center gap-2 border-l border-border/40 pl-3 md:pl-4" id="weather-row-feels">
                <Thermometer className="h-4.5 w-4.5 text-orange-400 shrink-0" />
                <div className="flex flex-col">
                  <span className="text-[10px] text-muted-foreground/60 uppercase font-semibold">Feels Like</span>
                  <span className="text-white font-bold" id="weather-row-value-feels">{data.feelsLike}°F</span>
                </div>
              </div>
              <div className="flex items-center gap-2 border-l border-border/40 pl-3 md:pl-4" id="weather-row-humidity">
                <Droplets className="h-4.5 w-4.5 text-blue-400 shrink-0" />
                <div className="flex flex-col">
                  <span className="text-[10px] text-muted-foreground/60 uppercase font-semibold">Humidity</span>
                  <span className="text-white font-bold" id="weather-row-value-humidity">{data.humidity}%</span>
                </div>
              </div>
              <div className="flex items-center gap-2 border-l border-border/40 pl-3 md:pl-4" id="weather-row-wind">
                <Wind className="h-4.5 w-4.5 text-teal-400 shrink-0" />
                <div className="flex flex-col">
                  <span className="text-[10px] text-muted-foreground/60 uppercase font-semibold">Wind</span>
                  <span className="text-white font-bold" id="weather-row-value-wind">{data.windSpeed} mph</span>
                </div>
              </div>
              <div className="flex items-center gap-2 border-l border-border/40 pl-3 md:pl-4" id="weather-row-precip">
                <CloudRain className="h-4.5 w-4.5 text-accent shrink-0" />
                <div className="flex flex-col">
                  <span className="text-[10px] text-muted-foreground/60 uppercase font-semibold">Precip</span>
                  <span className="text-white font-bold" id="weather-row-value-precip">{data.precipitation}"</span>
                </div>
              </div>
            </div>
          </div>

          {/* Expanded content */}
          {isExpanded && (
            <>
              {/* Row 2: UV Hourly Forecast (Horizontal Chart) */}
              <div className="bg-secondary/25 border border-border/50 rounded-xl p-5 flex flex-col gap-3 animate-fadeIn" id="weather-row-uv-chart">
                <div className="flex items-center justify-between" id="weather-uv-chart-header">
                  <h3 className="text-xs font-semibold text-white uppercase tracking-wider flex items-center gap-2" id="weather-uv-chart-title">
                    <Sunset className="h-4 w-4 text-orange-400 animate-pulse" />
                    UV Hourly Forecast (Until Sunset)
                  </h3>
                  {data.sunset && (
                    <span className="text-[10px] text-muted-foreground font-mono font-semibold" id="weather-uv-sunset">
                      Sunset: {data.sunset}
                    </span>
                  )}
                </div>
                {renderUVChart(data.hourlyUV)}
              </div>

              {/* Row 3: 10-Day Forecast (Horizontal Row) */}
              <div className="flex flex-col gap-3 animate-fadeIn" id="weather-row-10day-forecast">
                <h3 className="text-xs font-semibold text-white uppercase tracking-wider flex items-center gap-2" id="weather-10day-title">
                  <Sparkles className="h-4 w-4 text-yellow-400" />
                  10-Day Extended Forecast
                </h3>

                <div 
                  className="flex flex-row overflow-x-auto gap-3.5 pb-2.5 scrollbar-thin select-none" 
                  id="weather-10day-horizontal-list"
                >
                  {data.forecast.map((day, idx) => (
                    <div 
                      key={idx} 
                      className="flex flex-col items-center text-center justify-between bg-secondary/20 hover:bg-secondary/45 border border-border/50 hover:border-accent/30 rounded-xl p-4 min-w-[105px] w-[105px] shrink-0 gap-2.5 transition-all duration-200 hover:-translate-y-0.5"
                      id={`weather-10day-item-${idx}`}
                    >
                      <span className="text-xs font-bold text-white" id={`weather-10day-day-${idx}`}>{day.dayName}</span>
                      <div className="flex flex-col items-center gap-1.5" id={`weather-10day-icon-desc-${idx}`}>
                        {getWeatherIcon(day.weatherCode, "h-7 w-7")}
                        <span 
                          className="text-[9px] text-muted-foreground font-medium truncate max-w-[85px] leading-tight" 
                          id={`weather-10day-desc-${idx}`}
                          title={getWeatherDescription(day.weatherCode)}
                        >
                          {getWeatherDescription(day.weatherCode)}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs font-mono pt-1 border-t border-border/30 w-full justify-center" id={`weather-10day-temp-box-${idx}`}>
                        <span className="text-white font-bold" id={`weather-10day-tempmax-${idx}`}>{day.tempMax}°</span>
                        <span className="text-muted-foreground/60 text-[10px]">/</span>
                        <span className="text-muted-foreground" id={`weather-10day-tempmin-${idx}`}>{day.tempMin}°</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

        </div>
      ) : null}
    </div>
  );
}
