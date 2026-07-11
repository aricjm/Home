"use client";

import React, { useState, useEffect } from "react";
import { FileText, Save, Check } from "lucide-react";

export default function NotesWidget() {
  const [note, setNote] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [showSavedMessage, setShowSavedMessage] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("homeos_scratchpad");
    if (stored) {
      setNote(stored);
    }
  }, []);

  const handleSave = () => {
    setIsSaving(true);
    localStorage.setItem("homeos_scratchpad", note);
    setTimeout(() => {
      setIsSaving(false);
      setShowSavedMessage(true);
      setTimeout(() => setShowSavedMessage(false), 2000);
    }, 500);
  };

  // Auto-save typing with simple delay
  useEffect(() => {
    const timeout = setTimeout(() => {
      localStorage.setItem("homeos_scratchpad", note);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [note]);

  return (
    <div className="bg-card border border-border rounded-2xl p-5 relative overflow-hidden transition-all duration-300 hover:border-accent/40 flex flex-col h-[350px]" id="notes-widget-root">
      <div className="absolute -right-16 -top-16 w-32 h-32 bg-accent/5 rounded-full blur-3xl pointer-events-none" id="notes-widget-bg-blur"></div>

      <div className="flex justify-between items-center mb-4" id="notes-widget-header">
        <div id="notes-widget-header-text">
          <h2 className="text-lg font-semibold text-white flex items-center gap-2" id="notes-widget-title">
            <FileText className="h-5 w-5 text-accent" />
            Scratchpad
          </h2>
          <p className="text-xs text-muted-foreground" id="notes-widget-subtitle">Autosaved notes</p>
        </div>
        
        <button 
          id="notes-widget-save-btn"
          onClick={handleSave}
          disabled={isSaving}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-secondary hover:bg-muted border border-border rounded-lg text-xs font-semibold text-muted-foreground hover:text-white transition-colors"
        >
          {showSavedMessage ? (
            <>
              <Check className="h-3.5 w-3.5 text-emerald-400" id="notes-widget-saved-icon" />
              <span className="text-emerald-400" id="notes-widget-saved-text">Saved</span>
            </>
          ) : (
            <>
              <Save className="h-3.5 w-3.5" id="notes-widget-save-icon" />
              <span id="notes-widget-save-text">Save</span>
            </>
          )}
        </button>
      </div>

      <div className="flex-1" id="notes-widget-textarea-container">
        <textarea
          id="notes-widget-textarea"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Jot down tasks, links, or details to keep track of here. They are automatically saved..."
          className="w-full h-full bg-secondary/35 border border-border text-xs rounded-xl p-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent resize-none placeholder-muted-foreground/60 transition-all"
        />
      </div>
    </div>
  );
}
