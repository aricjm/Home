"use client";

import React, { useState, useEffect } from "react";
import { ListTodo, Plus, Trash2, CheckSquare, Square, ChevronUp, ChevronDown } from "lucide-react";

interface TrackerItem {
  id: string;
  name: string;
  type: "count" | "toggle";
  value: number;
  target: number;
}

const defaultTrackers: TrackerItem[] = [
  { id: "1", name: "Drink Water (Glasses)", type: "count", value: 3, target: 8 },
  { id: "2", name: "Hit the Gym", type: "toggle", value: 0, target: 1 },
  { id: "3", name: "Read Technical Articles", type: "toggle", value: 1, target: 1 },
  { id: "4", name: "LeetCode Daily Challenge", type: "count", value: 0, target: 2 },
];

interface TrackerWidgetProps {
  isFullView?: boolean;
}

export default function TrackerWidget({ isFullView = false }: TrackerWidgetProps) {
  const [trackers, setTrackers] = useState<TrackerItem[]>([]);
  const [name, setName] = useState("");
  const [type, setType] = useState<"count" | "toggle">("toggle");
  const [target, setTarget] = useState(1);
  const [showAddForm, setShowAddForm] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("homeos_trackers");
    if (stored) {
      setTrackers(JSON.parse(stored));
    } else {
      setTrackers(defaultTrackers);
      localStorage.setItem("homeos_trackers", JSON.stringify(defaultTrackers));
    }
  }, []);

  const handleUpdate = (updated: TrackerItem[]) => {
    setTrackers(updated);
    localStorage.setItem("homeos_trackers", JSON.stringify(updated));
  };

  const handleIncrement = (id: string, step: number) => {
    const updated = trackers.map((t) => {
      if (t.id === id) {
        const val = Math.max(0, Math.min(t.target, t.value + step));
        return { ...t, value: val };
      }
      return t;
    });
    handleUpdate(updated);
  };

  const handleToggle = (id: string) => {
    const updated = trackers.map((t) => {
      if (t.id === id) {
        return { ...t, value: t.value === 0 ? 1 : 0 };
      }
      return t;
    });
    handleUpdate(updated);
  };

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name) return;

    const newItem: TrackerItem = {
      id: Date.now().toString(),
      name,
      type,
      value: 0,
      target: type === "toggle" ? 1 : Number(target) || 1
    };

    const updated = [...trackers, newItem];
    handleUpdate(updated);
    setName("");
    setTarget(1);
    setShowAddForm(false);
  };

  const handleDelete = (id: string) => {
    const updated = trackers.filter((t) => t.id !== id);
    handleUpdate(updated);
  };

  return (
    <div 
      id="tracker-widget-root"
      className={`bg-card border border-border rounded-2xl p-5 relative overflow-hidden transition-all duration-300 hover:border-accent/40 flex flex-col ${
        isFullView ? "min-h-[500px]" : "h-[350px]"
      }`}
    >
      <div className="absolute -right-16 -top-16 w-32 h-32 bg-accent/5 rounded-full blur-3xl pointer-events-none" id="tracker-widget-bg-blur"></div>

      <div className="flex justify-between items-center mb-4" id="tracker-widget-header">
        <div id="tracker-widget-header-text">
          <h2 className="text-lg font-semibold text-white flex items-center gap-2" id="tracker-widget-title">
            <ListTodo className="h-5 w-5 text-accent" />
            Workspace Trackers
          </h2>
          <p className="text-xs text-muted-foreground" id="tracker-widget-subtitle">Keep tabs on habits & goals</p>
        </div>
        <button 
          id="tracker-widget-toggle-add-btn"
          onClick={() => setShowAddForm(!showAddForm)}
          className="p-1.5 bg-secondary hover:bg-muted border border-border rounded-lg text-muted-foreground hover:text-white transition-colors"
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>

      {showAddForm ? (
        <form onSubmit={handleAdd} className="space-y-3 bg-secondary/35 p-3 rounded-xl border border-border mb-3" id="tracker-widget-form">
          <h3 className="text-xs font-bold text-white uppercase" id="tracker-widget-form-title">Create Tracker</h3>
          <div className="space-y-2" id="tracker-widget-form-inputs">
            <input 
              id="tracker-widget-input-name"
              type="text" 
              placeholder="Tracker Name (e.g. Drink Water)" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-secondary border border-border text-xs rounded-lg px-3 py-2 text-white focus:outline-none focus:border-accent"
              required
            />
            
            <div className="flex gap-4" id="tracker-widget-radio-container">
              <label className="flex items-center gap-2 text-xs text-muted-foreground cursor-pointer" id="tracker-widget-label-checkmark">
                <input 
                  id="tracker-widget-radio-toggle"
                  type="radio" 
                  checked={type === "toggle"} 
                  onChange={() => setType("toggle")}
                  className="accent-accent"
                />
                Checkmark
              </label>
              <label className="flex items-center gap-2 text-xs text-muted-foreground cursor-pointer" id="tracker-widget-label-counter">
                <input 
                  id="tracker-widget-radio-count"
                  type="radio" 
                  checked={type === "count"} 
                  onChange={() => setType("count")}
                  className="accent-accent"
                />
                Counter
              </label>
            </div>

            {type === "count" && (
              <div className="flex items-center gap-2" id="tracker-widget-target-container">
                <span className="text-xs text-muted-foreground" id="tracker-widget-target-label">Target limit:</span>
                <input 
                  id="tracker-widget-input-target"
                  type="number" 
                  min="1" 
                  value={target}
                  onChange={(e) => setTarget(Number(e.target.value))}
                  className="w-20 bg-secondary border border-border text-xs rounded-lg px-2 py-1 text-white focus:outline-none focus:border-accent"
                />
              </div>
            )}
          </div>
          <div className="flex justify-end gap-2 text-xs" id="tracker-widget-form-actions">
            <button 
              id="tracker-widget-cancel-btn"
              type="button" 
              onClick={() => setShowAddForm(false)} 
              className="px-3 py-1.5 hover:bg-muted text-muted-foreground rounded-lg"
            >
              Cancel
            </button>
            <button 
              id="tracker-widget-submit-btn"
              type="submit" 
              className="px-3 py-1.5 bg-accent hover:bg-accent-hover text-white font-semibold rounded-lg"
            >
              Create
            </button>
          </div>
        </form>
      ) : null}

      <div className="flex-1 overflow-y-auto space-y-2.5 pr-1" id="tracker-widget-list">
        {trackers.map((t) => {
          const percent = Math.round((t.value / t.target) * 100);
          const isDone = t.value >= t.target;

          return (
            <div 
              key={t.id} 
              className={`p-3 rounded-xl border flex flex-col justify-between transition-all hover:bg-secondary/40 ${
                isDone 
                  ? "bg-emerald-950/10 border-emerald-500/20 text-muted-foreground" 
                  : "bg-secondary/20 border-border/50 text-white"
              }`}
              id={`tracker-item-${t.id}`}
            >
              <div className="flex items-center justify-between" id={`tracker-item-header-${t.id}`}>
                <div className="flex items-center gap-3 overflow-hidden" id={`tracker-item-left-${t.id}`}>
                  {t.type === "toggle" ? (
                    <button id={`tracker-item-toggle-btn-${t.id}`} onClick={() => handleToggle(t.id)} className="text-accent shrink-0">
                      {t.value > 0 ? (
                        <CheckSquare className="h-5 w-5 text-emerald-400 fill-emerald-500/10" id={`tracker-item-checked-icon-${t.id}`} />
                      ) : (
                        <Square className="h-5 w-5 text-muted-foreground/60" id={`tracker-item-unchecked-icon-${t.id}`} />
                      )}
                    </button>
                  ) : (
                    <div className="flex flex-col items-center select-none bg-secondary/80 rounded-lg p-0.5 border border-border shrink-0" id={`tracker-item-counter-box-${t.id}`}>
                      <button 
                        id={`tracker-item-inc-btn-${t.id}`}
                        onClick={() => handleIncrement(t.id, 1)} 
                        disabled={isDone}
                        className="p-0.5 hover:text-accent disabled:opacity-30"
                      >
                        <ChevronUp className="h-3 w-3" />
                      </button>
                      <span className="text-[10px] font-bold font-mono px-1.5" id={`tracker-item-count-value-${t.id}`}>{t.value}</span>
                      <button 
                        id={`tracker-item-dec-btn-${t.id}`}
                        onClick={() => handleIncrement(t.id, -1)} 
                        disabled={t.value === 0}
                        className="p-0.5 hover:text-accent disabled:opacity-30"
                      >
                        <ChevronDown className="h-3 w-3" />
                      </button>
                    </div>
                  )}

                  <div className="truncate text-xs" id={`tracker-item-text-${t.id}`}>
                    <div className={`font-semibold ${isDone ? "text-emerald-400/90 line-through" : "text-white"}`} id={`tracker-item-name-${t.id}`}>
                      {t.name}
                    </div>
                    {t.type === "count" && (
                      <div className="text-[10px] text-muted-foreground" id={`tracker-item-goal-${t.id}`}>
                        Goal: {t.target} total
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2" id={`tracker-item-right-${t.id}`}>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    isDone 
                      ? "bg-emerald-500/10 text-emerald-400" 
                      : "bg-accent/10 text-accent"
                  }`} id={`tracker-item-percentage-${t.id}`}>
                    {percent}%
                  </span>
                  
                  {isFullView && (
                    <button 
                      id={`tracker-item-delete-btn-${t.id}`}
                      onClick={() => handleDelete(t.id)}
                      className="p-1 hover:bg-red-500/10 rounded text-muted-foreground hover:text-red-400 transition-colors"
                    >
                      <Trash2 className="h-4 w-4" id={`tracker-item-trash-icon-${t.id}`} />
                    </button>
                  )}
                </div>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-secondary h-1 rounded-full mt-3 overflow-hidden" id={`tracker-item-progress-track-${t.id}`}>
                <div 
                  id={`tracker-item-progress-fill-${t.id}`}
                  className={`h-full transition-all duration-500 ${isDone ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]' : 'bg-accent shadow-[0_0_8px_rgba(10,132,255,0.5)]'}`}
                  style={{ width: `${percent}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
