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
    <div className="bg-card border border-border rounded-2xl p-5 relative overflow-hidden transition-all duration-300 hover:border-accent/40 flex flex-col h-[350px]" id="calendar-widget-root">
      <div className="absolute -right-16 -top-16 w-32 h-32 bg-accent/5 rounded-full blur-3xl pointer-events-none" id="calendar-widget-bg-blur"></div>

      <div className="flex justify-between items-center mb-4" id="calendar-widget-header">
        <div id="calendar-widget-header-text">
          <h2 className="text-lg font-semibold text-white flex items-center gap-2" id="calendar-widget-title">
            <Calendar className="h-5 w-5 text-accent" />
            Calendar Agenda
          </h2>
          <p className="text-xs text-muted-foreground" id="calendar-widget-subtitle">Upcoming events</p>
        </div>
        
        {isConnected && (
          <button className="p-1.5 bg-secondary hover:bg-muted border border-border rounded-lg text-muted-foreground hover:text-white transition-colors" id="calendar-widget-add-btn">
            <Plus className="h-4 w-4" />
          </button>
        )}
      </div>

      {!isConnected ? (
        <div className="flex-1 flex flex-col" id="calendar-widget-not-connected-container">
          <div className="relative flex-1 overflow-hidden filter blur-[2px] pointer-events-none select-none" id="calendar-widget-mock-overlay">
            <div className="space-y-3" id="calendar-widget-mock-list">
              {mockEvents.map((event) => (
                <div key={event.id} className={`p-2.5 rounded-lg bg-secondary/20 border-l-4 ${event.color} border border-y-border/40 border-r-border/40`} id={`calendar-mock-item-${event.id}`}>
                  <div className="text-xs font-semibold text-white" id={`calendar-mock-title-${event.id}`}>{event.title}</div>
                  <div className="flex items-center gap-2 mt-1 text-[10px] text-muted-foreground" id={`calendar-mock-meta-${event.id}`}>
                    <Clock className="h-3 w-3" />
                    <span id={`calendar-mock-time-${event.id}`}>{event.time}</span>
                    <MapPin className="h-3 w-3 ml-2" />
                    <span id={`calendar-mock-loc-${event.id}`}>{event.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute inset-0 bg-card/60 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center" id="calendar-widget-overlay-content">
            <CalendarRange className="h-10 w-10 text-accent mb-3" id="calendar-widget-overlay-icon" />
            <h3 className="text-sm font-semibold text-white mb-1" id="calendar-widget-overlay-title">Calendar Not Connected</h3>
            <p className="text-xs text-muted-foreground mb-4 max-w-xs" id="calendar-widget-overlay-desc">
              Link your Google Calendar to view schedules, check notifications, and add reminders right from HomeOS.
            </p>
            <button className="px-4 py-2 bg-accent hover:bg-accent-hover text-white text-xs font-semibold rounded-xl shadow-lg shadow-accent/20 transition-all" id="calendar-widget-connect-btn">
              Connect Google Calendar
            </button>
          </div>
        </div>
      ) : (
        <div className="flex-1 overflow-y-auto space-y-3 pr-1" id="calendar-widget-events-list">
          {mockEvents.map((event) => (
            <div 
              key={event.id} 
              className={`p-3 rounded-xl bg-secondary/30 border-l-4 ${event.color} border border-y-border/50 border-r-border/50 transition-all hover:bg-secondary/50`}
              id={`calendar-item-${event.id}`}
            >
              <h4 className="text-xs font-bold text-white" id={`calendar-item-title-${event.id}`}>{event.title}</h4>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1.5 text-[10px] text-muted-foreground" id={`calendar-item-meta-${event.id}`}>
                <span className="flex items-center gap-1" id={`calendar-item-time-box-${event.id}`}>
                  <Clock className="h-3 w-3 text-accent" />
                  <span id={`calendar-item-time-${event.id}`}>{event.time}</span>
                </span>
                <span className="flex items-center gap-1" id={`calendar-item-loc-box-${event.id}`}>
                  <MapPin className="h-3 w-3 text-accent" />
                  <span id={`calendar-item-loc-${event.id}`}>{event.location}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
