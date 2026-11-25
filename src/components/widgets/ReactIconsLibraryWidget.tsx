"use client";

import React, { useState } from "react";
import * as FAIcons from "react-icons/fa";
import { Search, Copy, Check, Sparkles } from "lucide-react";

// Dynamically extract Font Awesome icons from react-icons/fa
const ALL_REACT_ICONS = Object.keys(FAIcons).filter(
  (name) => /^Fa[A-Z]/.test(name)
);

export default function ReactIconsLibraryWidget() {
  const [filterText, setFilterText] = useState("");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 100;

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterText(e.target.value);
    setCurrentPage(1);
  };

  const filteredIcons = ALL_REACT_ICONS.filter((name) =>
    name.toLowerCase().includes(filterText.toLowerCase())
  );

  const totalPages = Math.ceil(filteredIcons.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const displayedIcons = filteredIcons.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleCopy = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="bg-card border border-border rounded-2xl p-6 relative overflow-hidden transition-all duration-300 hover:border-accent/40 flex flex-col min-h-[500px]" id="react-icons-library-root">
      <div className="absolute -right-16 -top-16 w-32 h-32 bg-accent/5 rounded-full blur-3xl pointer-events-none" id="react-icons-library-bg-blur"></div>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6" id="react-icons-library-header">
        <div id="react-icons-library-header-text">
          <h2 className="text-lg font-semibold text-white flex items-center gap-2" id="react-icons-library-title">
            <Sparkles className="h-5 w-5 text-accent animate-pulse" />
            React Icons (Font Awesome)
          </h2>
          <p className="text-xs text-muted-foreground" id="react-icons-library-subtitle">Browse and search Font Awesome icons via react-icons/fa</p>
        </div>
        <div className="relative w-full sm:w-64" id="react-icons-library-search-container">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            id="react-icons-library-search-input"
            type="text"
            placeholder="Search icons..."
            value={filterText}
            onChange={handleFilterChange}
            className="w-full bg-secondary border border-border text-sm rounded-lg pl-9 pr-4 py-1.5 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent text-white placeholder-muted-foreground/60 transition-all"
          />
        </div>
      </div>

      <div className="flex-1 overflow-x-auto" id="react-icons-library-table-container">
        <table className="w-full text-left border-collapse table-fixed" id="react-icons-library-table">
          <thead>
            <tr className="border-b border-border/80 text-xs font-semibold text-muted-foreground uppercase tracking-wider" id="react-icons-library-table-header-row">
              <th className="pb-3 pl-2 w-[24%]" id="react-icons-library-th-preview">Preview</th>
              <th className="pb-3 w-[62%]" id="react-icons-library-th-name">Icon Name</th>
              <th className="pb-3 w-[90%]" id="react-icons-library-th-code">React / Next.js Component Code</th>
              <th className="pb-3 pr-2 w-[10%] text-center" id="react-icons-library-th-action">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/40" id="react-icons-library-table-body">
            {filteredIcons.length === 0 ? (
              <tr id="react-icons-library-no-results-row">
                <td colSpan={4} className="py-8 text-center text-sm text-muted-foreground" id="react-icons-library-no-results-cell">No matching icons found</td>
              </tr>
            ) : (
              displayedIcons.map((name) => {
                const IconComponent = (FAIcons as any)[name];
                const codeString = `<${name} size={24} />`;
                if (!IconComponent) return null;
                return (
                  <tr key={name} className="hover:bg-secondary/25 transition-colors text-sm group" id={`react-icons-row-${name}`}>
                    <td className="py-3.5 pl-2" id={`react-icons-preview-cell-${name}`}>
                      <div className="w-10 h-10 rounded-lg bg-secondary/50 border border-border flex items-center justify-center text-muted-foreground group-hover:text-accent group-hover:border-accent/30 group-hover:bg-accent/5 transition-all" id={`react-icons-preview-box-${name}`}>
                        <IconComponent size={20} />
                      </div>
                    </td>
                    <td className="py-3.5 font-medium text-white select-all" id={`react-icons-name-cell-${name}`}>{name}</td>
                    <td className="py-3.5 font-mono text-xs text-accent bg-transparent select-all" id={`react-icons-code-cell-${name}`}>
                      <span className="bg-secondary/40 px-2 py-1.5 rounded border border-border/50 select-all" id={`react-icons-code-span-${name}`}>{codeString}</span>
                    </td>
                    <td className="py-3.5 pr-2 text-center" id={`react-icons-action-cell-${name}`}>
                      <button id={`react-icons-copy-btn-${name}`} onClick={() => handleCopy(codeString, name)} className={`p-2 rounded-lg border transition-all ${copiedId === name ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400" : "bg-secondary hover:bg-muted border-border text-muted-foreground hover:text-white"}`} title="Copy Component Code">
                        {copiedId === name ? <Check className="h-3.5 w-3.5" id={`react-icons-copied-icon-${name}`} /> : <Copy className="h-3.5 w-3.5" id={`react-icons-copy-icon-${name}`} />}
                      </button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {totalPages > 1 && (
        <div className="flex justify-between items-center mt-4 pt-3 border-t border-border/40 gap-4" id="react-icons-library-pagination">
          <button id="react-icons-library-prev-btn" disabled={currentPage === 1} onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} className="px-3 py-1.5 bg-secondary hover:bg-muted border border-border text-xs rounded-lg text-white font-medium disabled:opacity-40 disabled:pointer-events-none transition-colors">Previous</button>
          <span className="text-xs text-muted-foreground font-mono" id="react-icons-library-page-info">Page {currentPage} of {totalPages}</span>
          <button id="react-icons-library-next-btn" disabled={currentPage === totalPages} onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} className="px-3 py-1.5 bg-secondary hover:bg-muted border border-border text-xs rounded-lg text-white font-medium disabled:opacity-40 disabled:pointer-events-none transition-colors">Next</button>
        </div>
      )}

      <div className="mt-4 pt-3 border-t border-border/50 text-[10px] text-muted-foreground font-mono flex justify-between items-center" id="react-icons-library-footer">
        <span id="react-icons-library-footer-count">Showing {filteredIcons.length > 0 ? startIndex + 1 : 0} - {Math.min(startIndex + displayedIcons.length, filteredIcons.length)} of {filteredIcons.length} matching icons (Total: {ALL_REACT_ICONS.length})</span>
        <span id="react-icons-library-footer-source">Imports from 'react-icons/fa'</span>
      </div>
    </div>
  );
}
