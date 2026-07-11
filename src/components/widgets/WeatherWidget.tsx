"use client";

import React, { useEffect, useState } from "react";
import { Cloud, Sun, CloudRain, CloudSnow, CloudLightning, Wind, Droplets, RefreshCw } from "lucide-react";

interface WeatherData {
  temp: number;
  feelsLike: number;
  humidity: number;
  windSpeed: number;
  precipitation: number;
  weatherCode: number;
}

export default function WeatherWidget() {
  const [data, setData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchWeather = async () => {
    setLoading(true);
    setError(null);
    try {
      // Waukee, IA coordinates
      const lat = 41.5794;
      const lon = -93.8741;
      const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m&temperature_unit=fahrenheit&wind_speed_unit=mph`;
      
      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to fetch weather data");
      
      const json = await res.json();
      const current = json.current;
      
      setData({
        temp: Math.round(current.temperature_2m),
        feelsLike: Math.round(current.apparent_temperature),
        humidity: current.relative_humidity_2m,
        windSpeed: Math.round(current.wind_speed_10m),
        precipitation: current.precipitation,
        weatherCode: current.weather_code,
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

  const getWeatherIcon = (code: number) => {
    if (code === 0) return <Sun className="h-10 w-10 text-yellow-400 animate-pulse" id="weather-icon-sun" />;
    if (code >= 1 && code <= 3) return <Cloud className="h-10 w-10 text-gray-400" id="weather-icon-cloud" />;
    if ((code >= 51 && code <= 67) || (code >= 80 && code <= 82)) return <CloudRain className="h-10 w-10 text-blue-400" id="weather-icon-rain" />;
    if ((code >= 71 && code <= 77) || (code >= 85 && code <= 86)) return <CloudSnow className="h-10 w-10 text-blue-200" id="weather-icon-snow" />;
    if (code >= 95 && code <= 99) return <CloudLightning className="h-10 w-10 text-purple-400 animate-bounce" id="weather-icon-lightning" />;
    return <Cloud className="h-10 w-10 text-gray-400" id="weather-icon-default" />;
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

  return (
    <div className="bg-card border border-border rounded-2xl p-5 relative overflow-hidden transition-all duration-300 hover:border-accent/40" id="weather-widget-root">
      {/* Background radial gradient glow */}
      <div className="absolute -right-16 -top-16 w-32 h-32 bg-accent/5 rounded-full blur-3xl pointer-events-none" id="weather-widget-bg-blur"></div>

      <div className="flex justify-between items-start mb-4" id="weather-widget-header">
        <div id="weather-widget-header-text">
          <h2 className="text-lg font-semibold text-white" id="weather-widget-title">Weather</h2>
          <p className="text-xs text-muted-foreground" id="weather-widget-subtitle">Waukee, IA</p>
        </div>
        <button 
          id="weather-widget-refresh-btn"
          onClick={fetchWeather} 
          disabled={loading}
          className="p-1.5 hover:bg-muted rounded-lg text-muted-foreground hover:text-foreground disabled:opacity-50 transition-colors"
        >
          <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin text-accent' : ''}`} />
        </button>
      </div>

      {loading ? (
        <div className="h-24 flex items-center justify-center" id="weather-widget-loader">
          <div className="w-6 h-6 border-2 border-accent border-t-transparent rounded-full animate-spin" id="weather-widget-spinner"></div>
        </div>
      ) : error ? (
        <div className="h-24 flex flex-col items-center justify-center text-xs text-red-400" id="weather-widget-error-container">
          <span id="weather-widget-error-text">{error}</span>
          <button id="weather-widget-retry-btn" onClick={fetchWeather} className="mt-2 text-accent underline">Retry</button>
        </div>
      ) : data ? (
        <div className="flex items-center justify-between" id="weather-widget-data-container">
          <div className="flex items-center gap-4" id="weather-widget-temp-box">
            {getWeatherIcon(data.weatherCode)}
            <div id="weather-widget-temp-labels">
              <div className="text-3xl font-bold text-white tracking-tight" id="weather-widget-temp-value">{data.temp}°F</div>
              <div className="text-sm font-medium text-muted-foreground" id="weather-widget-desc-value">{getWeatherDescription(data.weatherCode)}</div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs text-muted-foreground" id="weather-widget-details-grid">
            <div className="flex items-center gap-1.5" id="weather-detail-feels">
              <Droplets className="h-3.5 w-3.5 text-blue-400" />
              <span>Feels: <strong className="text-white" id="weather-value-feels">{data.feelsLike}°F</strong></span>
            </div>
            <div className="flex items-center gap-1.5" id="weather-detail-humidity">
              <Droplets className="h-3.5 w-3.5 text-blue-400" />
              <span>Humidity: <strong className="text-white" id="weather-value-humidity">{data.humidity}%</strong></span>
            </div>
            <div className="flex items-center gap-1.5" id="weather-detail-wind">
              <Wind className="h-3.5 w-3.5 text-teal-400" />
              <span>Wind: <strong className="text-white" id="weather-value-wind">{data.windSpeed} mph</strong></span>
            </div>
            <div className="flex items-center gap-1.5" id="weather-detail-precip">
              <CloudRain className="h-3.5 w-3.5 text-accent" />
              <span>Precip: <strong className="text-white" id="weather-value-precip">{data.precipitation}"</strong></span>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
