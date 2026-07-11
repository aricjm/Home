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
    if (code === 0) return <Sun className="h-10 w-10 text-yellow-400 animate-pulse" />;
    if (code >= 1 && code <= 3) return <Cloud className="h-10 w-10 text-gray-400" />;
    if ((code >= 51 && code <= 67) || (code >= 80 && code <= 82)) return <CloudRain className="h-10 w-10 text-blue-400" />;
    if ((code >= 71 && code <= 77) || (code >= 85 && code <= 86)) return <CloudSnow className="h-10 w-10 text-blue-200" />;
    if (code >= 95 && code <= 99) return <CloudLightning className="h-10 w-10 text-purple-400 animate-bounce" />;
    return <Cloud className="h-10 w-10 text-gray-400" />;
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
    <div className="bg-card border border-border rounded-2xl p-5 relative overflow-hidden transition-all duration-300 hover:border-accent/40">
      {/* Background radial gradient glow */}
      <div className="absolute -right-16 -top-16 w-32 h-32 bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-lg font-semibold text-white">Weather</h2>
          <p className="text-xs text-muted-foreground">Waukee, IA</p>
        </div>
        <button 
          onClick={fetchWeather} 
          disabled={loading}
          className="p-1.5 hover:bg-muted rounded-lg text-muted-foreground hover:text-foreground disabled:opacity-50 transition-colors"
        >
          <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin text-accent' : ''}`} />
        </button>
      </div>

      {loading ? (
        <div className="h-24 flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-accent border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : error ? (
        <div className="h-24 flex flex-col items-center justify-center text-xs text-red-400">
          <span>{error}</span>
          <button onClick={fetchWeather} className="mt-2 text-accent underline">Retry</button>
        </div>
      ) : data ? (
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {getWeatherIcon(data.weatherCode)}
            <div>
              <div className="text-3xl font-bold text-white tracking-tight">{data.temp}°F</div>
              <div className="text-sm font-medium text-muted-foreground">{getWeatherDescription(data.weatherCode)}</div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Droplets className="h-3.5 w-3.5 text-blue-400" />
              <span>Feels: <strong className="text-white">{data.feelsLike}°F</strong></span>
            </div>
            <div className="flex items-center gap-1.5">
              <Droplets className="h-3.5 w-3.5 text-blue-400" />
              <span>Humidity: <strong className="text-white">{data.humidity}%</strong></span>
            </div>
            <div className="flex items-center gap-1.5">
              <Wind className="h-3.5 w-3.5 text-teal-400" />
              <span>Wind: <strong className="text-white">{data.windSpeed} mph</strong></span>
            </div>
            <div className="flex items-center gap-1.5">
              <CloudRain className="h-3.5 w-3.5 text-accent" />
              <span>Precip: <strong className="text-white">{data.precipitation}"</strong></span>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
