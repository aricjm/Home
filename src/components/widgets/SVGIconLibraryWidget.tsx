"use client";

import React, { useState, useEffect } from "react";
import { Search, Copy, Check, Sparkles, X, RefreshCw, Plus } from "lucide-react";
import { CUSTOM_SVGS } from "./customSVGs";

// Helper to extract inner SVG paths for React rendering
const getInnerSvg = (raw: string): string => {
  const match = raw.match(/<svg[^>]*>([\s\S]*)<\/svg>/i);
  return match ? match[1] : raw;
};

// Generative client-side SVG vector path maker from scratch (fallback engine)
const generateSVGPath = (name: string, description: string, seed: number): string => {
  const combined = `${name.trim()}_${description.trim()}_${seed}`;

  // Deterministic 32-bit Jenkins-like hash calculation from string inputs
  let hash = 0;
  for (let i = 0; i < combined.length; i++) {
    hash = combined.charCodeAt(i) + ((hash << 5) - hash);
    hash = hash & hash;
  }
  const absHash = Math.abs(hash);

  const getVal = (offset: number, min: number, max: number) => {
    const val = Math.abs(Math.sin(absHash + offset * 14.521));
    return min + val * (max - min);
  };

  const getInt = (offset: number, min: number, max: number) => {
    return Math.floor(getVal(offset, min, max + 1));
  };

  const symmetry = getInt(1, 0, 2);
  const drawCircles = getVal(2, 0, 1) > 0.4;
  const drawLines = getVal(3, 0, 1) > 0.4;
  const numSteps = getInt(4, 3, 6);

  let paths: string[] = [];

  if (drawCircles) {
    const boundaryMode = getInt(5, 0, 2);
    const radius = getVal(6, 6, 11).toFixed(1);
    if (boundaryMode === 0) {
      paths.push(`<circle cx="12" cy="12" r="${radius}" />`);
      if (parseFloat(radius) > 4) {
        const innerRad = (parseFloat(radius) - 3).toFixed(1);
        paths.push(`<circle cx="12" cy="12" r="${innerRad}" stroke-dasharray="3,2" />`);
      }
    } else if (boundaryMode === 1) {
      paths.push(`<circle cx="12" cy="12" r="${radius}" stroke-dasharray="2,3" />`);
    } else {
      const size = (parseFloat(radius) * 2).toFixed(1);
      const xy = (12 - parseFloat(radius)).toFixed(1);
      paths.push(`<rect x="${xy}" y="${xy}" width="${size}" height="${size}" rx="3" />`);
    }
  }

  if (symmetry === 1) {
    const rightPoints: Array<{x: number; y: number}> = [];
    const numPoints = getInt(7, 3, 5);
    const topY = getVal(8, 3, 6);
    rightPoints.push({ x: 12, y: topY });

    for (let i = 0; i < numPoints; i++) {
      const px = getVal(9 + i * 2, 13.5, 21.5);
      const py = getVal(10 + i * 2, topY + 2, 17.5);
      rightPoints.push({ x: px, y: py });
    }

    const botY = getVal(11, 16.5, 21.5);
    rightPoints.push({ x: 12, y: botY });

    let pathString = `M 12 ${topY.toFixed(1)}`;
    for (let i = 1; i < rightPoints.length; i++) {
      const p = rightPoints[i];
      const curveChoice = getInt(12 + i, 0, 1);
      if (curveChoice === 0) {
        const cx1 = getVal(13 + i * 3, 13, 20).toFixed(1);
        const cy1 = (rightPoints[i-1].y + (p.y - rightPoints[i-1].y) * 0.3).toFixed(1);
        const cx2 = getVal(14 + i * 3, 13, 20).toFixed(1);
        const cy2 = (rightPoints[i-1].y + (p.y - rightPoints[i-1].y) * 0.7).toFixed(1);
        pathString += ` C ${cx1} ${cy1}, ${cx2} ${cy2}, ${p.x.toFixed(1)} ${p.y.toFixed(1)}`;
      } else {
        pathString += ` L ${p.x.toFixed(1)} ${p.y.toFixed(1)}`;
      }
    }

    for (let i = rightPoints.length - 2; i >= 0; i--) {
      const p = rightPoints[i];
      const mirrorX = (24 - p.x).toFixed(1);
      const curveChoice = getInt(15 + i, 0, 1);
      if (curveChoice === 0) {
        const prevP = rightPoints[i + 1];
        const cx1 = (24 - getVal(13 + i * 3, 13, 20)).toFixed(1);
        const cy1 = (prevP.y + (p.y - prevP.y) * 0.3).toFixed(1);
        const cx2 = (24 - getVal(14 + i * 3, 13, 20)).toFixed(1);
        const cy2 = (prevP.y + (p.y - prevP.y) * 0.7).toFixed(1);
        pathString += ` C ${cx1} ${cy1}, ${cx2} ${cy2}, ${mirrorX} ${p.y.toFixed(1)}`;
      } else {
        pathString += ` L ${mirrorX} ${p.y.toFixed(1)}`;
      }
    }
    pathString += " Z";
    paths.push(`<path d="${pathString}" />`);

    if (drawLines) {
      const lineY = getVal(16, topY + 2.5, botY - 2.5).toFixed(1);
      const lineW = getVal(17, 2, 5).toFixed(1);
      paths.push(`<path d="M ${(12 - parseFloat(lineW)).toFixed(1)} ${lineY} L ${(12 + parseFloat(lineW)).toFixed(1)} ${lineY}" />`);

      const nodeX = getVal(18, 14, 18).toFixed(1);
      const nodeY = getVal(19, topY + 2, botY - 2).toFixed(1);
      const nodeR = getVal(20, 0.7, 1.5).toFixed(1);
      paths.push(`<circle cx="${nodeX}" cy="${nodeY}" r="${nodeR}" />`);
      paths.push(`<circle cx="${(24 - parseFloat(nodeX)).toFixed(1)}" cy="${nodeY}" r="${nodeR}" />`);
    }

  } else if (symmetry === 2) {
    const petals = getInt(21, 5, 12);
    const outerR = getVal(22, 7.5, 11).toFixed(1);
    const innerR = getVal(23, 2.5, 6).toFixed(1);
    const steps: string[] = [];

    for (let i = 0; i < petals * 2; i++) {
      const angle = (i * Math.PI) / petals - Math.PI / 2;
      const r = i % 2 === 0 ? parseFloat(outerR) : parseFloat(innerR);
      const x = (12 + r * Math.cos(angle)).toFixed(1);
      const y = (12 + r * Math.sin(angle)).toFixed(1);
      steps.push(`${i === 0 ? 'M' : 'L'} ${x} ${y}`);
    }
    steps.push('Z');
    paths.push(`<path d="${steps.join(' ')}" />`);

    const coreRad = getVal(24, 1.2, 3.8).toFixed(1);
    paths.push(`<circle cx="12" cy="12" r="${coreRad}" fill="currentColor" />`);

    if (drawLines) {
      const crossR = (parseFloat(outerR) + 1.5).toFixed(1);
      paths.push(`<path d="M 12 ${(12 - parseFloat(crossR)).toFixed(1)} L 12 ${(12 + parseFloat(crossR)).toFixed(1)} M ${(12 - parseFloat(crossR)).toFixed(1)} 12 L ${(12 + parseFloat(crossR)).toFixed(1)} 12" opacity="0.6" />`);
    }

  } else {
    const startX = getVal(25, 3, 6).toFixed(1);
    const startY = getVal(26, 4, 10).toFixed(1);
    let pathD = `M ${startX} ${startY}`;

    let lastX = parseFloat(startX);
    let lastY = parseFloat(startY);

    for (let i = 0; i < numSteps; i++) {
      const nextX = getVal(27 + i * 4, lastX + 2, Math.min(22, lastX + 6.5));
      const nextY = getVal(28 + i * 4, 3, 21);
      
      const c1x = getVal(29 + i * 4, lastX, nextX).toFixed(1);
      const c1y = getVal(30 + i * 4, 3, 21).toFixed(1);
      const c2x = getVal(31 + i * 4, lastX, nextX).toFixed(1);
      const c2y = getVal(32 + i * 4, 3, 21).toFixed(1);

      pathD += ` C ${c1x} ${c1y}, ${c2x} ${c2y}, ${nextX.toFixed(1)} ${nextY.toFixed(1)}`;
      
      if (getVal(33 + i, 0, 1) > 0.4) {
        paths.push(`<circle cx="${nextX.toFixed(1)}" cy="${nextY.toFixed(1)}" r="${getVal(34+i, 0.8, 2.2).toFixed(1)}" />`);
      }
      lastX = nextX;
      lastY = nextY;
    }
    paths.push(`<path d="${pathD}" />`);

    if (drawLines) {
      const baselineY = getVal(35, 17, 21).toFixed(1);
      paths.push(`<path d="M 3 ${baselineY} L 21 ${baselineY}" stroke-dasharray="3,3" />`);
    }
  }

  return paths.join("\n");
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

  // Handle generation click (calling AI API or procedural fallback)
  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim()) return;

    const finalCategory = selectedAddCategory === "__NEW__" ? customCategory.trim() : selectedAddCategory.trim();
    if (!finalCategory) return;

    setIsGenerating(true);
    setSeed(0);
    try {
      const res = await fetch("/api/generate-icon", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: newName,
          description: newDesc,
          category: finalCategory,
          seed: 0
        })
      });
      if (!res.ok) throw new Error("Failed to generate AI icon");
      const resData = await res.json();
      setPreviewSvg(getInnerSvg(resData.svg));
    } catch (err) {
      console.warn("AI Generation offline, using client-side procedural fallback:", err);
      // Fallback
      const generatedPath = generateSVGPath(newName, newDesc, 0);
      setPreviewSvg(generatedPath);
    } finally {
      setIsGenerating(false);
    }
  };

  // Retry with new seeded shape
  const handleRetry = async () => {
    setIsGenerating(true);
    const nextSeed = seed + 1;
    setSeed(nextSeed);
    const finalCategory = selectedAddCategory === "__NEW__" ? customCategory.trim() : selectedAddCategory.trim();
    try {
      const res = await fetch("/api/generate-icon", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: newName,
          description: newDesc,
          category: finalCategory || "Miscellaneous",
          seed: nextSeed
        })
      });
      if (!res.ok) throw new Error("Failed to retry generate AI icon");
      const resData = await res.json();
      setPreviewSvg(getInnerSvg(resData.svg));
    } catch (err) {
      console.warn("AI Retry offline, using client-side procedural fallback:", err);
      // Fallback
      const generatedPath = generateSVGPath(newName, newDesc, nextSeed);
      setPreviewSvg(generatedPath);
    } finally {
      setIsGenerating(false);
    }
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
