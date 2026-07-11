"use client";

import React from "react";
import { Calendar, Plus, MapPin, Clock, CalendarRange } from "lucide-react";

const mockEvents = [
  { id: "1", title: "Daily Sync & Standup", time: "9:00 AM - 9:30 AM", location: "Google Meet", color: "border-l-accent" },
  { id: "2", title: "Waukee Rec Center Basketball", time: "12:00 PM - 1:00 PM", location: "Waukee YMCA", color: "border-l-emerald-500" },
  { id: "3", title: "Refactor Database Schema", time: "2:00 PM - 3:30 PM", location: "Workspace", color: "border-l-purple-500" },
  { id: "4", title: "Dinner with Family", time: "6:30 PM - 8:00 PM", location: "Waukee Downtown", color: "border-l-yellow-500" },
];

export default function CalendarWidget() {
  const isConnected = false;

  return (
    <div className="bg-card border border-border rounded-2xl p-5 relative overflow-hidden transition-all duration-300 hover:border-accent/40 flex flex-col h-[350px]">
      <div className="absolute -right-16 -top-16 w-32 h-32 bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-lg font-semibold text-white flex items-center gap-2">
            <Calendar className="h-5 w-5 text-accent" />
            Calendar Agenda
          </h2>
          <p className="text-xs text-muted-foreground">Upcoming events</p>
        </div>
        
        {isConnected && (
          <button className="p-1.5 bg-secondary hover:bg-muted border border-border rounded-lg text-muted-foreground hover:text-white transition-colors">
            <Plus className="h-4 w-4" />
          </button>
        )}
      </div>

      {!isConnected ? (
        <div className="flex-1 flex flex-col">
          <div className="relative flex-1 overflow-hidden filter blur-[2px] pointer-events-none select-none">
            <div className="space-y-3">
              {mockEvents.map((event) => (
                <div key={event.id} className={`p-2.5 rounded-lg bg-secondary/20 border-l-4 ${event.color} border border-y-border/40 border-r-border/40`}>
                  <div className="text-xs font-semibold text-white">{event.title}</div>
                  <div className="flex items-center gap-2 mt-1 text-[10px] text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span>{event.time}</span>
                    <MapPin className="h-3 w-3 ml-2" />
                    <span>{event.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute inset-0 bg-card/60 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center">
            <CalendarRange className="h-10 w-10 text-accent mb-3" />
            <h3 className="text-sm font-semibold text-white mb-1">Calendar Not Connected</h3>
            <p className="text-xs text-muted-foreground mb-4 max-w-xs">
              Link your Google Calendar to view schedules, check notifications, and add reminders right from HomeOS.
            </p>
            <button className="px-4 py-2 bg-accent hover:bg-accent-hover text-white text-xs font-semibold rounded-xl shadow-lg shadow-accent/20 transition-all">
              Connect Google Calendar
            </button>
          </div>
        </div>
      ) : (
        <div className="flex-1 overflow-y-auto space-y-3 pr-1">
          {mockEvents.map((event) => (
            <div 
              key={event.id} 
              className={`p-3 rounded-xl bg-secondary/30 border-l-4 ${event.color} border border-y-border/50 border-r-border/50 transition-all hover:bg-secondary/50`}
            >
              <h4 className="text-xs font-bold text-white">{event.title}</h4>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1.5 text-[10px] text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3 text-accent" />
                  {event.time}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="h-3 w-3 text-accent" />
                  {event.location}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
