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
    <div className={`bg-card border border-border rounded-2xl p-5 relative overflow-hidden transition-all duration-300 hover:border-accent/40 flex flex-col ${
      isFullView ? "min-h-[500px]" : "h-[350px]"
    }`}>
      <div className="absolute -right-16 -top-16 w-32 h-32 bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-lg font-semibold text-white flex items-center gap-2">
            <ListTodo className="h-5 w-5 text-accent" />
            Workspace Trackers
          </h2>
          <p className="text-xs text-muted-foreground">Keep tabs on habits & goals</p>
        </div>
        <button 
          onClick={() => setShowAddForm(!showAddForm)}
          className="p-1.5 bg-secondary hover:bg-muted border border-border rounded-lg text-muted-foreground hover:text-white transition-colors"
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>

      {showAddForm ? (
        <form onSubmit={handleAdd} className="space-y-3 bg-secondary/35 p-3 rounded-xl border border-border mb-3">
          <h3 className="text-xs font-bold text-white uppercase">Create Tracker</h3>
          <div className="space-y-2">
            <input 
              type="text" 
              placeholder="Tracker Name (e.g. Drink Water)" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-secondary border border-border text-xs rounded-lg px-3 py-2 text-white focus:outline-none focus:border-accent"
              required
            />
            
            <div className="flex gap-4">
              <label className="flex items-center gap-2 text-xs text-muted-foreground cursor-pointer">
                <input 
                  type="radio" 
                  checked={type === "toggle"} 
                  onChange={() => setType("toggle")}
                  className="accent-accent"
                />
                Checkmark
              </label>
              <label className="flex items-center gap-2 text-xs text-muted-foreground cursor-pointer">
                <input 
                  type="radio" 
                  checked={type === "count"} 
                  onChange={() => setType("count")}
                  className="accent-accent"
                />
                Counter
              </label>
            </div>

            {type === "count" && (
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground">Target limit:</span>
                <input 
                  type="number" 
                  min="1" 
                  value={target}
                  onChange={(e) => setTarget(Number(e.target.value))}
                  className="w-20 bg-secondary border border-border text-xs rounded-lg px-2 py-1 text-white focus:outline-none focus:border-accent"
                />
              </div>
            )}
          </div>
          <div className="flex justify-end gap-2 text-xs">
            <button 
              type="button" 
              onClick={() => setShowAddForm(false)} 
              className="px-3 py-1.5 hover:bg-muted text-muted-foreground rounded-lg"
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="px-3 py-1.5 bg-accent hover:bg-accent-hover text-white font-semibold rounded-lg"
            >
              Create
            </button>
          </div>
        </form>
      ) : null}

      <div className="flex-1 overflow-y-auto space-y-2.5 pr-1">
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
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 overflow-hidden">
                  {t.type === "toggle" ? (
                    <button onClick={() => handleToggle(t.id)} className="text-accent shrink-0">
                      {t.value > 0 ? (
                        <CheckSquare className="h-5 w-5 text-emerald-400 fill-emerald-500/10" />
                      ) : (
                        <Square className="h-5 w-5 text-muted-foreground/60" />
                      )}
                    </button>
                  ) : (
                    <div className="flex flex-col items-center select-none bg-secondary/80 rounded-lg p-0.5 border border-border shrink-0">
                      <button 
                        onClick={() => handleIncrement(t.id, 1)} 
                        disabled={isDone}
                        className="p-0.5 hover:text-accent disabled:opacity-30"
                      >
                        <ChevronUp className="h-3 w-3" />
                      </button>
                      <span className="text-[10px] font-bold font-mono px-1.5">{t.value}</span>
                      <button 
                        onClick={() => handleIncrement(t.id, -1)} 
                        disabled={t.value === 0}
                        className="p-0.5 hover:text-accent disabled:opacity-30"
                      >
                        <ChevronDown className="h-3 w-3" />
                      </button>
                    </div>
                  )}

                  <div className="truncate text-xs">
                    <div className={`font-semibold ${isDone ? "text-emerald-400/90 line-through" : "text-white"}`}>
                      {t.name}
                    </div>
                    {t.type === "count" && (
                      <div className="text-[10px] text-muted-foreground">
                        Goal: {t.target} total
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    isDone 
                      ? "bg-emerald-500/10 text-emerald-400" 
                      : "bg-accent/10 text-accent"
                  }`}>
                    {percent}%
                  </span>
                  
                  {isFullView && (
                    <button 
                      onClick={() => handleDelete(t.id)}
                      className="p-1 hover:bg-red-500/10 rounded text-muted-foreground hover:text-red-400 transition-colors"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  )}
                </div>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-secondary h-1 rounded-full mt-3 overflow-hidden">
                <div 
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
