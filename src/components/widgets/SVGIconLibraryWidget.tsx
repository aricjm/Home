"use client";

import React, { useState, useEffect } from "react";
import { Search, Copy, Check, Sparkles, X, RefreshCw, Plus } from "lucide-react";
import { CUSTOM_SVGS } from "./customSVGs";

// Helper to extract inner SVG paths for React rendering
const getInnerSvg = (raw: string): string => {
  const match = raw.match(/<svg[^>]*>([\s\S]*)<\/svg>/i);
  return match ? match[1] : raw;
};

// Generative client-side SVG vector path maker
const generateSVGPath = (name: string, category: string, seed: number): string => {
  const normalized = name.toLowerCase().trim();

  // Keyword matching for high-quality standard shapes
  if (normalized.includes("heart")) {
    return `<path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />`;
  }
  if (normalized.includes("star")) {
    return `<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />`;
  }
  if (normalized.includes("cloud")) {
    return `<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />`;
  }
  if (normalized.includes("sun")) {
    return `<circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />`;
  }
  if (normalized.includes("moon")) {
    return `<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />`;
  }
  if (normalized.includes("check")) {
    return `<path d="M20 6L9 17l-5-5" />`;
  }
  if (normalized.includes("mail") || normalized.includes("email") || normalized.includes("envelope")) {
    return `<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><path d="M22 6l-10 7L2 6" />`;
  }
  if (normalized.includes("user") || normalized.includes("profile") || normalized.includes("avatar")) {
    return `<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />`;
  }
  if (normalized.includes("search")) {
    return `<circle cx="11" cy="11" r="8" /><path d="M21 21l-4.3-4.3" />`;
  }
  if (normalized.includes("bell") || normalized.includes("notification")) {
    return `<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" />`;
  }
  if (normalized.includes("setting") || normalized.includes("gear") || normalized.includes("config")) {
    return `<circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />`;
  }
  if (normalized.includes("clock") || normalized.includes("time")) {
    return `<circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />`;
  }
  if (normalized.includes("shield") || normalized.includes("protect") || normalized.includes("secure")) {
    return `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />`;
  }
  if (normalized.includes("home") || normalized.includes("house")) {
    return `<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><path d="M9 22V12h6v10" />`;
  }
  if (normalized.includes("lock") && !normalized.includes("unlock")) {
    return `<rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />`;
  }
  if (normalized.includes("unlock")) {
    return `<rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 9.9-1" />`;
  }
  if (normalized.includes("trash") || normalized.includes("delete") || normalized.includes("remove")) {
    return `<path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M10 11v6M14 11v6" />`;
  }
  if (normalized.includes("music") || normalized.includes("song") || normalized.includes("audio")) {
    return `<path d="M9 18V5l12-2v13M9 9l12-2" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" />`;
  }
  if (normalized.includes("coffee") || normalized.includes("cup") || normalized.includes("drink")) {
    return `<path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8zM6 1v3M10 1v3M14 1v3" />`;
  }
  if (normalized.includes("car") || normalized.includes("vehicle") || normalized.includes("drive")) {
    return `<path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 1 12v4c0 .6.4 1 1 1h2" /><circle cx="7" cy="17" r="2" /><circle cx="17" cy="17" r="2" />`;
  }
  if (normalized.includes("trophy") || normalized.includes("winner")) {
    return `<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34M12 2a6 6 0 0 1 6 6c0 3.2-1.9 5.86-5 6.66V2z" />`;
  }
  if (normalized.includes("zap") || normalized.includes("lightning") || normalized.includes("energy")) {
    return `<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />`;
  }
  if (normalized.includes("wifi") || normalized.includes("signal")) {
    return `<path d="M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.94 0M12 20h.01" />`;
  }
  if (normalized.includes("camera") || normalized.includes("photo")) {
    return `<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" /><circle cx="12" cy="13" r="4" />`;
  }
  if (normalized.includes("globe") || normalized.includes("world")) {
    return `<circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />`;
  }

  // Fallback: Deterministic custom layout based on name string & seed offsets
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  hash += seed * 12345;

  const getVal = (offset: number, min: number, max: number) => {
    const val = Math.abs(Math.sin(hash + offset));
    return min + val * (max - min);
  };

  const mode = Math.abs(hash) % 4;

  if (mode === 0) {
    // Polygonal badge / star emblem
    const points: string[] = [];
    const numPoints = Math.round(getVal(1, 6, 12));
    const r1 = getVal(2, 4, 7);
    const r2 = getVal(3, 8, 11);
    for (let i = 0; i < numPoints * 2; i++) {
      const angle = (i * Math.PI) / numPoints - Math.PI / 2;
      const r = i % 2 === 0 ? r2 : r1;
      const x = (12 + r * Math.cos(angle)).toFixed(1);
      const y = (12 + r * Math.sin(angle)).toFixed(1);
      points.push(`${i === 0 ? 'M' : 'L'} ${x} ${y}`);
    }
    points.push('Z');
    return `<path d="${points.join(' ')}" />`;
  } else if (mode === 1) {
    // Shield layout
    const w = getVal(4, 5, 8).toFixed(1);
    const h1 = getVal(5, 5, 8).toFixed(1);
    const h2 = getVal(6, 13, 17).toFixed(1);
    const rad = getVal(7, 1, 3).toFixed(1);
    return `<path d="M 12 3 L ${12 + parseFloat(w)} ${h1} L ${12 + parseFloat(w)} ${h2} Q ${12 + parseFloat(w)} 21 12 21 Q ${12 - parseFloat(w)} 21 ${12 - parseFloat(w)} ${h2} L ${12 - parseFloat(w)} ${h1} Z" /><circle cx="12" cy="11" r="${rad}" />`;
  } else if (mode === 2) {
    // Geometric orbital flower
    const petSize = getVal(8, 2, 4.5).toFixed(1);
    const ringRad = getVal(9, 6, 9.5).toFixed(1);
    return `<circle cx="12" cy="12" r="${petSize}" /><circle cx="12" cy="12" r="${ringRad}" stroke-dasharray="4,3" /><path d="M 12 2 L 12 6 M 12 18 L 12 22 M 2 12 L 6 12 M 18 12 L 22 12" />`;
  } else {
    // Interlinked tech frames
    const size = getVal(10, 4, 8).toFixed(1);
    const offset = getVal(11, 2, 4).toFixed(1);
    const inner = getVal(12, 1, 3).toFixed(1);
    const x1 = (12 - parseFloat(size) / 2).toFixed(1);
    const y1 = (12 - parseFloat(size) / 2).toFixed(1);
    const x2 = (12 - parseFloat(size) / 2 + parseFloat(offset)).toFixed(1);
    const y2 = (12 - parseFloat(size) / 2 + parseFloat(offset)).toFixed(1);
    return `<rect x="${x1}" y="${y1}" width="${size}" height="${size}" rx="1" /><rect x="${x2}" y="${y2}" width="${size}" height="${size}" rx="1" opacity="0.7" /><circle cx="12" cy="12" r="${inner}" />`;
  }
};

export default function SVGIconLibraryWidget() {
  const [filterText, setFilterText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // User Custom SVGs Generation States
  const [userIcons, setUserIcons] = useState<Record<string, { category: string; desc: string; raw: string }>>({});
  const [showAddModal, setShowAddModal] = useState(false);
  const [newName, setNewName] = useState("");
  
  // Category Selector states for Modal
  const [selectedAddCategory, setSelectedAddCategory] = useState("");
  const [customCategory, setCustomCategory] = useState("");

  const [newDesc, setNewDesc] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [previewSvg, setPreviewSvg] = useState<string | null>(null);
  const [seed, setSeed] = useState(0);

  // Load custom user icons from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("homeos_user_svgs");
    if (stored) {
      setUserIcons(JSON.parse(stored));
    }
  }, []);

  // Merge static icons and user-created icons
  const allIcons: Record<string, { category: string; desc: string; raw: string; draw: React.ComponentType<React.SVGProps<SVGSVGElement>> }> = {
    ...Object.keys(CUSTOM_SVGS).reduce((acc, key) => {
      acc[key] = {
        category: CUSTOM_SVGS[key].category,
        desc: CUSTOM_SVGS[key].desc,
        raw: CUSTOM_SVGS[key].raw,
        draw: CUSTOM_SVGS[key].draw
      };
      return acc;
    }, {} as any),
    ...Object.keys(userIcons).reduce((acc, key) => {
      const item = userIcons[key];
      acc[key] = {
        category: item.category,
        desc: item.desc,
        raw: item.raw,
        draw: (props: React.SVGProps<SVGSVGElement>) => (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
            dangerouslySetInnerHTML={{ __html: getInnerSvg(item.raw) }}
          />
        )
      };
      return acc;
    }, {} as any)
  };

  const keys = Object.keys(allIcons);

  // Extract unique categories dynamically and sort them
  const categories = Array.from(
    new Set(keys.map((key) => allIcons[key].category))
  ).sort();

  // Enforce Category Defaults when Modal opens
  useEffect(() => {
    if (showAddModal) {
      setSelectedAddCategory(categories[0] || "Animals");
      setCustomCategory("");
    }
  }, [showAddModal]);

  const filteredKeys = keys.filter((key) => {
    const item = allIcons[key];
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch =
      key.toLowerCase().includes(filterText.toLowerCase()) ||
      item.category.toLowerCase().includes(filterText.toLowerCase()) ||
      item.desc.toLowerCase().includes(filterText.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleCopy = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Handle generation click
  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim()) return;

    const finalCategory = selectedAddCategory === "__NEW__" ? customCategory.trim() : selectedAddCategory.trim();
    if (!finalCategory) return;

    setIsGenerating(true);
    setSeed(0);
    setTimeout(() => {
      const generatedPath = generateSVGPath(newName, finalCategory, 0);
      setPreviewSvg(generatedPath);
      setIsGenerating(false);
    }, 1200);
  };

  // Retry with new seeded shape
  const handleRetry = () => {
    setIsGenerating(true);
    const nextSeed = seed + 1;
    setSeed(nextSeed);
    const finalCategory = selectedAddCategory === "__NEW__" ? customCategory.trim() : selectedAddCategory.trim();
    setTimeout(() => {
      const generatedPath = generateSVGPath(newName, finalCategory || "Miscellaneous", nextSeed);
      setPreviewSvg(generatedPath);
      setIsGenerating(false);
    }, 1000);
  };

  // Accept and commit user SVG to localStorage
  const handleAccept = () => {
    if (!newName.trim() || !previewSvg) return;

    const formattedName = newName
      .trim()
      .split(" ")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join("");

    const finalCategory = selectedAddCategory === "__NEW__" ? customCategory.trim() : selectedAddCategory.trim();

    const fullRawSvg = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">${previewSvg}</svg>`;

    const updated = {
      ...userIcons,
      [formattedName]: {
        category: finalCategory || "Miscellaneous",
        desc: newDesc.trim() || "AI Generated Icon",
        raw: fullRawSvg,
      },
    };

    setUserIcons(updated);
    localStorage.setItem("homeos_user_svgs", JSON.stringify(updated));
    closeModal();
  };

  const closeModal = () => {
    setShowAddModal(false);
    setNewName("");
    setSelectedAddCategory("");
    setCustomCategory("");
    setNewDesc("");
    setPreviewSvg(null);
    setSeed(0);
    setIsGenerating(false);
  };

  const currentPreviewCategoryDisplay = selectedAddCategory === "__NEW__" ? customCategory : selectedAddCategory;

  return (
    <div className="bg-card border border-border rounded-2xl p-6 relative overflow-hidden transition-all duration-300 hover:border-accent/40 flex flex-col min-h-[500px]" id="svg-icon-library-root">
      <div className="absolute -right-16 -top-16 w-32 h-32 bg-accent/5 rounded-full blur-3xl pointer-events-none" id="svg-icon-library-bg-blur"></div>

      <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4 mb-6" id="svg-icon-library-header">
        <div id="svg-icon-library-header-text">
          <h2 className="text-lg font-semibold text-white flex items-center gap-2" id="svg-icon-library-title">
            <Sparkles className="h-5 w-5 text-accent animate-pulse" />
            SVG Custom Icon Library
          </h2>
          <p className="text-xs text-muted-foreground" id="svg-icon-library-subtitle">Custom handcrafted vector SVGs built for HomeOS</p>
        </div>

        {/* Controls container (Add Icon + Dropdown + Search) */}
        <div className="flex flex-col sm:flex-row gap-3 w-full xl:w-auto items-stretch sm:items-center" id="svg-icon-library-controls">
          {/* Add Icon Button */}
          <button
            id="svg-icon-library-add-icon-btn"
            onClick={() => setShowAddModal(true)}
            className="flex items-center justify-center gap-1.5 px-3.5 py-1.5 bg-accent hover:bg-accent-hover text-white text-sm font-semibold rounded-lg transition-all shadow-md shadow-accent/15 shrink-0"
          >
            <Plus className="h-4 w-4" />
            Add Icon
          </button>

          {/* Category Dropdown */}
          <div className="relative w-full sm:w-48" id="svg-icon-library-category-select-container">
            <select
              id="svg-icon-library-category-select"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full bg-secondary border border-border text-sm rounded-lg px-3 py-1.5 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent text-white transition-all appearance-none pr-8 cursor-pointer"
            >
              <option value="All" id="svg-category-option-all">All Categories</option>
              {categories.map((cat) => (
                <option key={cat} value={cat} id={`svg-category-option-${cat.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}>
                  {cat}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2.5 pointer-events-none text-muted-foreground" id="svg-category-select-arrow-container">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20" id="svg-category-select-arrow">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" id="svg-category-select-arrow-path" />
              </svg>
            </div>
          </div>

          {/* Filter input */}
          <div className="relative w-full sm:w-64" id="svg-icon-library-search-container">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              id="svg-icon-library-search-input"
              type="text"
              placeholder="Search custom icons..."
              value={filterText}
              onChange={(e) => setFilterText(e.target.value)}
              className="w-full bg-secondary border border-border text-sm rounded-lg pl-9 pr-4 py-1.5 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent text-white placeholder-muted-foreground/60 transition-all"
            />
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-x-auto" id="svg-icon-library-table-container">
        <table className="w-full text-left border-collapse table-fixed" id="svg-icon-library-table">
          <thead>
            <tr className="border-b border-border/80 text-xs font-semibold text-muted-foreground uppercase tracking-wider" id="svg-icon-library-table-header-row">
              <th className="pb-3 pl-2 w-[24%]" id="svg-icon-library-th-preview">Preview</th>
              <th className="pb-3 w-[62%]" id="svg-icon-library-th-name">Icon Name</th>
              <th className="pb-3 w-[90%]" id="svg-icon-library-th-code">React / Next.js Component Code</th>
              <th className="pb-3 pr-2 w-[10%] text-center" id="svg-icon-library-th-action">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/40" id="svg-icon-library-table-body">
            {filteredKeys.length === 0 ? (
              <tr id="svg-icon-library-no-results-row">
                <td colSpan={4} className="py-8 text-center text-sm text-muted-foreground" id="svg-icon-library-no-results-cell">
                  No matching custom SVGs found
                </td>
              </tr>
            ) : (
              filteredKeys.map((name) => {
                const item = allIcons[name];
                const IconDraw = item.draw;
                const codeString = item.raw;

                return (
                  <tr 
                    key={name} 
                    className="hover:bg-secondary/25 transition-colors text-sm group"
                    id={`svg-icon-row-${name}`}
                  >
                    {/* Column 1: SVG Icon Preview */}
                    <td className="py-3.5 pl-2" id={`svg-icon-preview-cell-${name}`}>
                      <div className="w-10 h-10 rounded-lg bg-secondary/50 border border-border flex items-center justify-center text-muted-foreground group-hover:text-accent group-hover:border-accent/30 group-hover:bg-accent/5 transition-all" id={`svg-icon-preview-box-${name}`}>
                        <IconDraw className="h-5 w-5" />
                      </div>
                    </td>

                    {/* Column 2: Name & Category */}
                    <td className="py-3.5 font-medium text-white select-all" id={`svg-icon-name-cell-${name}`}>
                      <div className="font-semibold text-white" id={`svg-icon-name-div-${name}`}>{name}</div>
                      <div className="text-[10px] text-muted-foreground" id={`svg-icon-meta-div-${name}`}>{item.category} &bull; {item.desc}</div>
                    </td>

                    {/* Column 3: Raw SVG Code */}
                    <td className="py-3.5 font-mono text-xs text-accent bg-transparent select-all" id={`svg-icon-code-cell-${name}`}>
                      <div className="overflow-x-auto select-all max-w-[400px]" id={`svg-icon-code-scroll-${name}`}>
                        <pre className="bg-secondary/40 px-2 py-1.5 rounded border border-border/50 select-all whitespace-pre text-[10px] leading-tight" id={`svg-icon-code-pre-${name}`}>
                          {codeString}
                        </pre>
                      </div>
                    </td>

                    {/* Column 4: Copy Action */}
                    <td className="py-3.5 pr-2 text-center" id={`svg-icon-action-cell-${name}`}>
                      <button
                        id={`svg-icon-copy-btn-${name}`}
                        onClick={() => handleCopy(codeString, name)}
                        className={`p-2 rounded-lg border transition-all ${
                          copiedId === name
                            ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                            : "bg-secondary hover:bg-muted border-border text-muted-foreground hover:text-white"
                        }`}
                        title="Copy Raw SVG XML"
                      >
                        {copiedId === name ? (
                          <Check className="h-3.5 w-3.5" id={`svg-icon-copied-icon-${name}`} />
                        ) : (
                          <Copy className="h-3.5 w-3.5" id={`svg-icon-copy-icon-${name}`} />
                        )}
                      </button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
      
      <div className="mt-4 pt-3 border-t border-border/50 text-[10px] text-muted-foreground font-mono flex justify-between items-center" id="svg-icon-library-footer">
        <span id="svg-icon-library-footer-count">Showing {filteredKeys.length} of {keys.length} custom SVGs</span>
        <span id="svg-icon-library-footer-source">Self-contained Vector XML Icons</span>
      </div>

      {/* Modal Backdrop */}
      {showAddModal && (
        <div 
          id="svg-add-modal-backdrop"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200"
        >
          {/* Modal Container */}
          <div 
            id="svg-add-modal-container"
            className="bg-card border border-border w-full max-w-md rounded-2xl overflow-hidden shadow-2xl flex flex-col relative animate-in zoom-in-95 duration-200"
          >
            {/* Header */}
            <div className="p-5 border-b border-border/80 flex items-center justify-between" id="svg-add-modal-header">
              <h3 className="text-md font-bold text-white flex items-center gap-2" id="svg-add-modal-title">
                <Sparkles className="h-5 w-5 text-accent animate-pulse" />
                AI SVG Icon Generator
              </h3>
              <button 
                id="svg-add-modal-close-btn"
                onClick={closeModal}
                className="p-1 hover:bg-secondary rounded-lg text-muted-foreground hover:text-white transition-all"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Form & Generation Area */}
            <div className="p-5 space-y-4" id="svg-add-modal-body">
              {previewSvg ? (
                /* Preview State */
                <div className="space-y-4" id="svg-add-preview-container">
                  <div className="flex flex-col items-center justify-center p-8 bg-secondary/30 border border-border rounded-xl" id="svg-add-preview-box-outer">
                    <div className="w-20 h-20 bg-accent/10 border-2 border-accent/30 rounded-2xl flex items-center justify-center text-accent mb-3 shadow-neon" id="svg-add-preview-box-inner">
                      <svg 
                        id="svg-add-preview-render"
                        viewBox="0 0 24 24" 
                        className="h-12 w-12" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        dangerouslySetInnerHTML={{ __html: previewSvg }}
                      />
                    </div>
                    <div className="text-sm font-semibold text-white" id="svg-add-preview-name">{newName}</div>
                    <div className="text-xs text-muted-foreground" id="svg-add-preview-category">{currentPreviewCategoryDisplay} &bull; {newDesc || "Custom Icon"}</div>
                  </div>

                  {/* Actions for generated icon */}
                  <div className="flex gap-3 justify-end text-sm" id="svg-add-preview-actions">
                    <button 
                      id="svg-add-preview-retry-btn"
                      onClick={handleRetry}
                      disabled={isGenerating}
                      className="px-4 py-2 border border-border bg-secondary hover:bg-muted text-white rounded-lg flex items-center gap-1.5 transition-all"
                    >
                      <RefreshCw className={`h-4 w-4 ${isGenerating ? 'animate-spin' : ''}`} />
                      Retry
                    </button>
                    <button 
                      id="svg-add-preview-accept-btn"
                      onClick={handleAccept}
                      className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg flex items-center gap-1.5 transition-all"
                    >
                      <Check className="h-4 w-4" />
                      Accept & Save
                    </button>
                  </div>
                </div>
              ) : isGenerating ? (
                /* Generating Loading State */
                <div className="py-12 flex flex-col items-center justify-center space-y-4" id="svg-add-loading-container">
                  <div className="w-12 h-12 border-2 border-accent border-t-transparent rounded-full animate-spin" id="svg-add-loading-spinner"></div>
                  <div className="text-sm font-semibold text-white animate-pulse" id="svg-add-loading-text">Generating SVG Layout...</div>
                  <div className="text-xs text-muted-foreground" id="svg-add-loading-subtext">Drafting vector points & bezier curves</div>
                </div>
              ) : (
                /* Form State */
                <form onSubmit={handleCreate} className="space-y-4" id="svg-add-form">
                  <div className="space-y-1.5" id="svg-add-form-field-name">
                    <label className="text-xs font-semibold text-muted-foreground uppercase" htmlFor="svg-add-input-name">Icon Name</label>
                    <input 
                      id="svg-add-input-name"
                      type="text" 
                      placeholder="e.g. Shield Check, Running Shoe" 
                      value={newName}
                      onChange={(e) => setNewName(e.target.value)}
                      className="w-full bg-secondary border border-border text-sm rounded-lg px-3 py-2 text-white focus:outline-none focus:border-accent"
                      required
                    />
                  </div>

                  {/* Category Selector */}
                  <div className="space-y-1.5" id="svg-add-form-field-category">
                    <label className="text-xs font-semibold text-muted-foreground uppercase" htmlFor="svg-add-select-category">Category</label>
                    <div className="relative" id="svg-add-select-category-container">
                      <select
                        id="svg-add-select-category"
                        value={selectedAddCategory}
                        onChange={(e) => {
                          setSelectedAddCategory(e.target.value);
                          if (e.target.value !== "__NEW__") {
                            setCustomCategory("");
                          }
                        }}
                        className="w-full bg-secondary border border-border text-sm rounded-lg px-3 py-2 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent text-white transition-all appearance-none pr-8 cursor-pointer"
                        required
                      >
                        {categories.map((cat) => (
                          <option key={cat} value={cat} id={`svg-add-category-opt-${cat.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}>
                            {cat}
                          </option>
                        ))}
                        <option value="__NEW__" id="svg-add-category-opt-new-trigger">Add New Category...</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-2.5 pointer-events-none text-muted-foreground" id="svg-add-select-category-arrow-container">
                        <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20" id="svg-add-select-category-arrow">
                          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" id="svg-add-select-category-arrow-path" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Add New Category Custom Text Field */}
                  {selectedAddCategory === "__NEW__" && (
                    <div className="space-y-1.5 animate-in slide-in-from-top-2 duration-200" id="svg-add-form-field-custom-category">
                      <label className="text-xs font-semibold text-muted-foreground uppercase" htmlFor="svg-add-input-custom-category">New Category Name</label>
                      <input 
                        id="svg-add-input-custom-category"
                        type="text" 
                        placeholder="e.g. Workspace, Games, Devices" 
                        value={customCategory}
                        onChange={(e) => setCustomCategory(e.target.value)}
                        className="w-full bg-secondary border border-border text-sm rounded-lg px-3 py-2 text-white focus:outline-none focus:border-accent"
                        required
                      />
                    </div>
                  )}

                  <div className="space-y-1.5" id="svg-add-form-field-desc">
                    <label className="text-xs font-semibold text-muted-foreground uppercase" htmlFor="svg-add-input-desc">Description</label>
                    <input 
                      id="svg-add-input-desc"
                      type="text" 
                      placeholder="e.g. Slick defense checkmark outline" 
                      value={newDesc}
                      onChange={(e) => setNewDesc(e.target.value)}
                      className="w-full bg-secondary border border-border text-sm rounded-lg px-3 py-2 text-white focus:outline-none focus:border-accent"
                    />
                  </div>

                  <div className="flex justify-end gap-2 text-sm pt-2" id="svg-add-form-actions">
                    <button 
                      id="svg-add-form-cancel-btn"
                      type="button" 
                      onClick={closeModal} 
                      className="px-4 py-2 border border-border hover:bg-secondary text-muted-foreground hover:text-white rounded-lg transition-all"
                    >
                      Cancel
                    </button>
                    <button 
                      id="svg-add-form-submit-btn"
                      type="submit" 
                      className="px-4 py-2 bg-accent hover:bg-accent-hover text-white font-semibold rounded-lg shadow-lg shadow-accent/20 transition-all"
                    >
                      Create Icon
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
