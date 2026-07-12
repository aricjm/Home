"use client";

import React, { useState } from "react";
import * as RadixIcons from "@radix-ui/react-icons";
import { Search, Copy, Check, Sparkles } from "lucide-react"; // Using Lucide for controls

// Dynamically extract all icons exported by @radix-ui/react-icons
const ALL_RADIX_ICONS = Object.keys(RadixIcons).filter(
  (name) => name.endsWith("Icon") && typeof (RadixIcons as any)[name] === "object"
);

export default function RadixIconLibraryWidget() {
  const [filterText, setFilterText] = useState("");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  
  const ITEMS_PER_PAGE = 100;

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterText(e.target.value);
    setCurrentPage(1);
  };

  const filteredIcons = ALL_RADIX_ICONS.filter((name) =>
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
    <div className="bg-card border border-border rounded-2xl p-6 relative overflow-hidden transition-all duration-300 hover:border-accent/40 flex flex-col min-h-[500px]" id="radix-icon-library-root">
      <div className="absolute -right-16 -top-16 w-32 h-32 bg-accent/5 rounded-full blur-3xl pointer-events-none" id="radix-icon-library-bg-blur"></div>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6" id="radix-icon-library-header">
        <div id="radix-icon-library-header-text">
          <h2 className="text-lg font-semibold text-white flex items-center gap-2" id="radix-icon-library-title">
            <Sparkles className="h-5 w-5 text-accent animate-pulse" />
            Radix Icon Library
          </h2>
          <p className="text-xs text-muted-foreground" id="radix-icon-library-subtitle">Browse and search available Radix UI SVG icons</p>
        </div>

        {/* Filter input */}
        <div className="relative w-full sm:w-64" id="radix-icon-library-search-container">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            id="radix-icon-library-search-input"
            type="text"
            placeholder="Search icons..."
            value={filterText}
            onChange={handleFilterChange}
            className="w-full bg-secondary border border-border text-sm rounded-lg pl-9 pr-4 py-1.5 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent text-white placeholder-muted-foreground/60 transition-all"
          />
        </div>
      </div>

      <div className="flex-1 overflow-x-auto" id="radix-icon-library-table-container">
        <table className="w-full text-left border-collapse table-fixed" id="radix-icon-library-table">
          <thead>
            <tr className="border-b border-border/80 text-xs font-semibold text-muted-foreground uppercase tracking-wider" id="radix-icon-library-table-header-row">
              <th className="pb-3 pl-2 w-[24%]" id="radix-icon-library-th-preview">Preview</th>
              <th className="pb-3 w-[62%]" id="radix-icon-library-th-name">Icon Name</th>
              <th className="pb-3 w-[90%]" id="radix-icon-library-th-code">React / Next.js Component Code</th>
              <th className="pb-3 pr-2 w-[10%] text-center" id="radix-icon-library-th-action">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/40" id="radix-icon-library-table-body">
            {filteredIcons.length === 0 ? (
              <tr id="radix-icon-library-no-results-row">
                <td colSpan={4} className="py-8 text-center text-sm text-muted-foreground" id="radix-icon-library-no-results-cell">
                  No matching icons found
                </td>
              </tr>
            ) : (
              displayedIcons.map((name) => {
                // Dynamically fetch the icon component from Radix
                const IconComponent = (RadixIcons as any)[name];
                const codeString = `<${name} className="h-5 w-5" />`;

                if (!IconComponent) return null;

                return (
                  <tr
                    key={name}
                    className="hover:bg-secondary/25 transition-colors text-sm group"
                    id={`radix-icon-row-${name}`}
                  >
                    {/* Column 1: Icon Preview */}
                    <td className="py-3.5 pl-2" id={`radix-icon-preview-cell-${name}`}>
                      <div className="w-10 h-10 rounded-lg bg-secondary/50 border border-border flex items-center justify-center text-muted-foreground group-hover:text-accent group-hover:border-accent/30 group-hover:bg-accent/5 transition-all" id={`radix-icon-preview-box-${name}`}>
                        <IconComponent className="h-5 w-5" />
                      </div>
                    </td>

                    {/* Column 2: Name */}
                    <td className="py-3.5 font-medium text-white select-all" id={`radix-icon-name-cell-${name}`}>
                      {name}
                    </td>

                    {/* Column 3: Component Code */}
                    <td className="py-3.5 font-mono text-xs text-accent bg-transparent select-all" id={`radix-icon-code-cell-${name}`}>
                      <span className="bg-secondary/40 px-2 py-1.5 rounded border border-border/50 select-all" id={`radix-icon-code-span-${name}`}>
                        {codeString}
                      </span>
                    </td>

                    {/* Column 4: Copy Action */}
                    <td className="py-3.5 pr-2 text-center" id={`radix-icon-action-cell-${name}`}>
                      <button
                        id={`radix-icon-copy-btn-${name}`}
                        onClick={() => handleCopy(codeString, name)}
                        className={`p-2 rounded-lg border transition-all ${copiedId === name
                          ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                          : "bg-secondary hover:bg-muted border-border text-muted-foreground hover:text-white"
                          }`}
                        title="Copy Component Code"
                      >
                        {copiedId === name ? (
                          <Check className="h-3.5 w-3.5" id={`radix-icon-copied-icon-${name}`} />
                        ) : (
                          <Copy className="h-3.5 w-3.5" id={`radix-icon-copy-icon-${name}`} />
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

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-between items-center mt-4 pt-3 border-t border-border/40 gap-4" id="radix-icon-library-pagination">
          <button
            id="radix-icon-library-prev-btn"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            className="px-3 py-1.5 bg-secondary hover:bg-muted border border-border text-xs rounded-lg text-white font-medium disabled:opacity-40 disabled:pointer-events-none transition-colors"
          >
            Previous
          </button>
          <span className="text-xs text-muted-foreground font-mono" id="radix-icon-library-page-info">
            Page {currentPage} of {totalPages}
          </span>
          <button
            id="radix-icon-library-next-btn"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            className="px-3 py-1.5 bg-secondary hover:bg-muted border border-border text-xs rounded-lg text-white font-medium disabled:opacity-40 disabled:pointer-events-none transition-colors"
          >
            Next
          </button>
        </div>
      )}

      <div className="mt-4 pt-3 border-t border-border/50 text-[10px] text-muted-foreground font-mono flex justify-between items-center" id="radix-icon-library-footer">
        <span id="radix-icon-library-footer-count">Showing {filteredIcons.length > 0 ? startIndex + 1 : 0} - {Math.min(startIndex + displayedIcons.length, filteredIcons.length)} of {filteredIcons.length} matching icons (Total: {ALL_RADIX_ICONS.length})</span>
        <span id="radix-icon-library-footer-source">Imports from '@radix-ui/react-icons'</span>
      </div>
    </div>
  );
}
