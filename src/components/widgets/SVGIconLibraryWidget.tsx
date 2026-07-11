"use client";

import React, { useState } from "react";
import { Search, Copy, Check, Sparkles } from "lucide-react";
import { CUSTOM_SVGS } from "./customSVGs";

export default function SVGIconLibraryWidget() {
  const [filterText, setFilterText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const keys = Object.keys(CUSTOM_SVGS);
  
  // Extract unique categories dynamically and sort them
  const categories = Array.from(
    new Set(keys.map((key) => CUSTOM_SVGS[key].category))
  ).sort();

  const filteredKeys = keys.filter((key) => {
    const item = CUSTOM_SVGS[key];
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

        {/* Controls container (Dropdown + Search) */}
        <div className="flex flex-col sm:flex-row gap-3 w-full xl:w-auto" id="svg-icon-library-controls">
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
                const item = CUSTOM_SVGS[name];
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
    </div>
  );
}
