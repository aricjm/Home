"use client";

import React from "react";
import { Mail, Search, ExternalLink, ShieldAlert, Star } from "lucide-react";

// Mock emails for preview when not connected
const mockEmails = [
  { id: "1", from: "GitHub Notifications", subject: "[GitHub] Security Alert: 2 vulnerabilities found", date: "9:42 AM", read: false, starred: true },
  { id: "2", from: "Vercel Team", subject: "Deploy completed: home-dashboard-v3", date: "8:15 AM", read: true, starred: false },
  { id: "3", from: "Google Cloud", subject: "Monthly Billing Statement Available", date: "Yesterday", read: true, starred: false },
  { id: "4", from: "ESPN Fantasy", subject: "Your draft results are in!", date: "Jul 10", read: false, starred: true },
];

export default function GmailWidget() {
  // We will assume not authenticated yet (Auth.js v5 placeholder)
  const isConnected = false;

  return (
    <div className="bg-card border border-border rounded-2xl p-5 relative overflow-hidden transition-all duration-300 hover:border-accent/40 flex flex-col h-[350px]">
      <div className="absolute -right-16 -top-16 w-32 h-32 bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-lg font-semibold text-white flex items-center gap-2">
            <Mail className="h-5 w-5 text-accent" />
            Gmail Inbox
          </h2>
          <p className="text-xs text-muted-foreground">Recent messages</p>
        </div>
        
        {isConnected && (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-500/10 text-emerald-400">
            Connected
          </span>
        )}
      </div>

      {!isConnected ? (
        <div className="flex-1 flex flex-col">
          {/* Blur overlay preview for mock look */}
          <div className="relative flex-1 overflow-hidden filter blur-[2px] pointer-events-none select-none">
            <div className="space-y-3">
              {mockEmails.map((email) => (
                <div key={email.id} className="flex items-center justify-between p-2 rounded-lg bg-secondary/20 border border-border/30">
                  <div className="flex items-center gap-2">
                    <Star className={`h-4 w-4 ${email.starred ? 'text-yellow-500 fill-yellow-500' : 'text-muted-foreground'}`} />
                    <div className="text-xs">
                      <div className="font-semibold text-white">{email.from}</div>
                      <div className="text-muted-foreground line-clamp-1">{email.subject}</div>
                    </div>
                  </div>
                  <span className="text-[10px] text-muted-foreground whitespace-nowrap">{email.date}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute inset-0 bg-card/60 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center">
            <ShieldAlert className="h-10 w-10 text-accent mb-3" />
            <h3 className="text-sm font-semibold text-white mb-1">Gmail Account Not Connected</h3>
            <p className="text-xs text-muted-foreground mb-4 max-w-xs">
              Connect your Google Workspace Account to securely view and search your recent emails directly in HomeOS.
            </p>
            <button className="px-4 py-2 bg-accent hover:bg-accent-hover text-white text-xs font-semibold rounded-xl shadow-lg shadow-accent/20 transition-all">
              Sign In with Google
            </button>
          </div>
        </div>
      ) : (
        /* Connected view would pull actual emails */
        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="relative mb-3">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Search emails..." 
              className="w-full bg-secondary border border-border text-xs rounded-lg pl-9 pr-4 py-1.5 focus:outline-none focus:border-accent"
            />
          </div>
          
          <div className="flex-1 overflow-y-auto space-y-2 pr-1">
            {mockEmails.map((email) => (
              <div 
                key={email.id} 
                className={`p-2.5 rounded-xl border flex items-center justify-between transition-all hover:bg-secondary/40 ${
                  email.read 
                    ? "bg-secondary/20 border-border/50 text-muted-foreground" 
                    : "bg-secondary/60 border-accent/20 text-white font-medium"
                }`}
              >
                <div className="flex items-center gap-3 overflow-hidden">
                  <Star className={`h-4 w-4 shrink-0 ${email.starred ? 'text-yellow-500 fill-yellow-500' : 'text-muted-foreground/40'}`} />
                  <div className="truncate text-xs">
                    <div className={email.read ? "text-gray-300" : "text-white font-semibold"}>{email.from}</div>
                    <div className="text-muted-foreground truncate">{email.subject}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-[10px] text-muted-foreground">{email.date}</span>
                  <ExternalLink className="h-3.5 w-3.5 text-muted-foreground/60 hover:text-accent cursor-pointer" />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
