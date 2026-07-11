"use client";

import React, { useState, useEffect } from "react";
import { Link2, Plus, Trash2, ExternalLink } from "lucide-react";

interface QuickLink {
  id: string;
  name: string;
  url: string;
}

const defaultLinks: QuickLink[] = [
  { id: "1", name: "GitHub Workspace", url: "https://github.com/aricjm/Home" },
  { id: "2", name: "Neon DB Console", url: "https://console.neon.tech" },
  { id: "3", name: "Next.js Documentation", url: "https://nextjs.org/docs" },
  { id: "4", name: "ESPN Sports Scores", url: "https://www.espn.com" },
];

export default function QuickLinks() {
  const [links, setLinks] = useState<QuickLink[]>([]);
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("homeos_quick_links");
    if (stored) {
      setLinks(JSON.parse(stored));
    } else {
      setLinks(defaultLinks);
      localStorage.setItem("homeos_quick_links", JSON.stringify(defaultLinks));
    }
  }, []);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !url) return;

    let formattedUrl = url;
    if (!/^https?:\/\//i.test(url)) {
      formattedUrl = `https://${url}`;
    }

    const newLink: QuickLink = {
      id: Date.now().toString(),
      name,
      url: formattedUrl
    };

    const updated = [...links, newLink];
    setLinks(updated);
    localStorage.setItem("homeos_quick_links", JSON.stringify(updated));
    setName("");
    setUrl("");
    setShowAddForm(false);
  };

  const handleDelete = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const updated = links.filter((l) => l.id !== id);
    setLinks(updated);
    localStorage.setItem("homeos_quick_links", JSON.stringify(updated));
  };

  return (
    <div className="bg-card border border-border rounded-2xl p-5 relative overflow-hidden transition-all duration-300 hover:border-accent/40 flex flex-col h-[350px]" id="quick-links-root">
      <div className="absolute -right-16 -top-16 w-32 h-32 bg-accent/5 rounded-full blur-3xl pointer-events-none" id="quick-links-bg-blur"></div>

      <div className="flex justify-between items-center mb-4" id="quick-links-header">
        <div id="quick-links-header-text">
          <h2 className="text-lg font-semibold text-white flex items-center gap-2" id="quick-links-title">
            <Link2 className="h-5 w-5 text-accent" />
            Quick Links
          </h2>
          <p className="text-xs text-muted-foreground" id="quick-links-subtitle">Speed dials</p>
        </div>
        <button 
          id="quick-links-toggle-add-btn"
          onClick={() => setShowAddForm(!showAddForm)}
          className="p-1.5 bg-secondary hover:bg-muted border border-border rounded-lg text-muted-foreground hover:text-white transition-colors"
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>

      {showAddForm ? (
        <form onSubmit={handleAdd} className="space-y-3 bg-secondary/35 p-3 rounded-xl border border-border" id="quick-links-form">
          <h3 className="text-xs font-bold text-white uppercase" id="quick-links-form-title">Add Quick Link</h3>
          <div className="space-y-2" id="quick-links-form-inputs">
            <input 
              id="quick-links-input-name"
              type="text" 
              placeholder="Link Name (e.g. Google)" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-secondary border border-border text-xs rounded-lg px-3 py-2 text-white focus:outline-none focus:border-accent"
              required
            />
            <input 
              id="quick-links-input-url"
              type="text" 
              placeholder="URL (e.g. google.com)" 
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="w-full bg-secondary border border-border text-xs rounded-lg px-3 py-2 text-white focus:outline-none focus:border-accent"
              required
            />
          </div>
          <div className="flex justify-end gap-2 text-xs" id="quick-links-form-actions">
            <button 
              id="quick-links-cancel-btn"
              type="button" 
              onClick={() => setShowAddForm(false)} 
              className="px-3 py-1.5 hover:bg-muted text-muted-foreground rounded-lg"
            >
              Cancel
            </button>
            <button 
              id="quick-links-submit-btn"
              type="submit" 
              className="px-3 py-1.5 bg-accent hover:bg-accent-hover text-white font-semibold rounded-lg"
            >
              Add Link
            </button>
          </div>
        </form>
      ) : (
        <div className="flex-1 overflow-y-auto space-y-2 pr-1" id="quick-links-list">
          {links.map((link) => (
            <a 
              key={link.id} 
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-2.5 rounded-xl bg-secondary/30 border border-border/50 flex items-center justify-between transition-all hover:bg-secondary/60 hover:border-accent/30"
              id={`quick-link-item-${link.id}`}
            >
              <div className="flex items-center gap-3 overflow-hidden" id={`quick-link-content-${link.id}`}>
                <div className="w-8 h-8 rounded-lg bg-secondary border border-border flex items-center justify-center font-bold text-xs text-accent shrink-0 group-hover:bg-accent/10 group-hover:border-accent/30 transition-colors" id={`quick-link-avatar-${link.id}`}>
                  {link.name.substring(0, 2).toUpperCase()}
                </div>
                <div className="truncate text-xs" id={`quick-link-text-${link.id}`}>
                  <div className="font-semibold text-white group-hover:text-accent transition-colors" id={`quick-link-name-${link.id}`}>{link.name}</div>
                  <div className="text-muted-foreground truncate text-[10px]" id={`quick-link-url-${link.id}`}>{link.url.replace(/^https?:\/\//i, "")}</div>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" id={`quick-link-actions-${link.id}`}>
                <button 
                  id={`quick-link-delete-btn-${link.id}`}
                  onClick={(e) => handleDelete(link.id, e)}
                  className="p-1 hover:bg-red-500/10 rounded text-muted-foreground hover:text-red-400 transition-colors"
                >
                  <Trash2 className="h-3.5 w-3.5" id={`quick-link-trash-icon-${link.id}`} />
                </button>
                <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" id={`quick-link-ext-icon-${link.id}`} />
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
