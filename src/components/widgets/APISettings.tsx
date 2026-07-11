"use client";

import React, { useState, useEffect } from "react";
import { Settings, CheckCircle2, XCircle, Database, ShieldAlert, Key, Globe } from "lucide-react";

export default function APISettings() {
  const [googleConnected, setGoogleConnected] = useState(false);
  const [dbConnected, setDbConnected] = useState(false);

  useEffect(() => {
    // Mock check
    setGoogleConnected(false);
    setDbConnected(false);
  }, []);

  return (
    <div className="bg-card border border-border rounded-2xl p-6 relative overflow-hidden transition-all duration-300 hover:border-accent/40">
      <div className="absolute -right-16 -top-16 w-32 h-32 bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-lg font-semibold text-white flex items-center gap-2">
            <Settings className="h-5 w-5 text-accent" />
            Integrations & API Settings
          </h2>
          <p className="text-xs text-muted-foreground">Manage databases, external services, and auth tokens</p>
        </div>
      </div>

      <div className="space-y-6">
        {/* Neon Database Section */}
        <div className="p-4 rounded-xl bg-secondary/30 border border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <Database className="h-5 w-5 text-indigo-400 mt-0.5 shrink-0" />
            <div>
              <h3 className="text-sm font-semibold text-white">Neon PostgreSQL Database</h3>
              <p className="text-xs text-muted-foreground mt-0.5 max-w-lg">
                Utilize Drizzle ORM to sync your quick links, active trackers, and user preferences to a serverless Postgres DB.
              </p>
              <div className="mt-2 text-[10px] text-muted-foreground font-mono bg-secondary px-2 py-1 rounded inline-block">
                DATABASE_URL=postgres://alex...
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-2 self-start sm:self-center">
            {dbConnected ? (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400">
                <CheckCircle2 className="h-3.5 w-3.5" /> Connected
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-yellow-500/10 text-yellow-400">
                <XCircle className="h-3.5 w-3.5" /> Config Required
              </span>
            )}
          </div>
        </div>

        {/* Google OAuth Section */}
        <div className="p-4 rounded-xl bg-secondary/30 border border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <Globe className="h-5 w-5 text-red-400 mt-0.5 shrink-0" />
            <div>
              <h3 className="text-sm font-semibold text-white">Google OAuth (Gmail & Calendar)</h3>
              <p className="text-xs text-muted-foreground mt-0.5 max-w-lg">
                Connect your Google account using Auth.js (v5) to enable direct reading of recent emails and upcoming calendar slots.
              </p>
              <div className="mt-2 flex flex-wrap gap-2 text-[10px] text-muted-foreground font-mono">
                <span className="bg-secondary px-2 py-1 rounded">AUTH_GOOGLE_ID</span>
                <span className="bg-secondary px-2 py-1 rounded">AUTH_GOOGLE_SECRET</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-2 self-start sm:self-center">
            {googleConnected ? (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400">
                <CheckCircle2 className="h-3.5 w-3.5" /> Active
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-yellow-500/10 text-yellow-400">
                <ShieldAlert className="h-3.5 w-3.5" /> Link Account
              </span>
            )}
          </div>
        </div>

        {/* External Public APIs */}
        <div className="p-4 rounded-xl bg-secondary/30 border border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <Key className="h-5 w-5 text-teal-400 mt-0.5 shrink-0" />
            <div>
              <h3 className="text-sm font-semibold text-white">Public API Connections</h3>
              <p className="text-xs text-muted-foreground mt-0.5 max-w-lg">
                HomeOS integrates with Open-Meteo for localized Waukee, IA weather forecasts and ESPN Scores API without authentication tokens.
              </p>
            </div>
          </div>
          
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 self-start sm:self-center">
            <CheckCircle2 className="h-3.5 w-3.5" /> Working
          </span>
        </div>
      </div>
    </div>
  );
}
