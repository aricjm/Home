"use client";

import React, { useState } from "react";
import { Search, Copy, Check, Sparkles } from "lucide-react";
import { CUSTOM_SVGS } from "./customSVGs";

export default function SVGIconLibraryWidget() {
  const [filterText, setFilterText] = useState("");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const keys = Object.keys(CUSTOM_SVGS);
  const filteredKeys = keys.filter((key) => {
    const item = CUSTOM_SVGS[key];
    return (
      key.toLowerCase().includes(filterText.toLowerCase()) ||
      item.category.toLowerCase().includes(filterText.toLowerCase()) ||
      item.desc.toLowerCase().includes(filterText.toLowerCase())
    );
  });

  const handleCopy = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="bg-card border border-border rounded-2xl p-6 relative overflow-hidden transition-all duration-300 hover:border-accent/40 flex flex-col min-h-[500px]">
      <div className="absolute -right-16 -top-16 w-32 h-32 bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h2 className="text-lg font-semibold text-white flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-accent animate-pulse" />
            SVG Custom Icon Library
          </h2>
          <p className="text-xs text-muted-foreground">Custom handcrafted vector SVGs built for HomeOS</p>
        </div>

        {/* Filter input */}
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search custom icons..."
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
            className="w-full bg-secondary border border-border text-sm rounded-lg pl-9 pr-4 py-1.5 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent text-white placeholder-muted-foreground/60 transition-all"
          />
        </div>
      </div>

      <div className="flex-1 overflow-x-auto">
        <table className="w-full text-left border-collapse table-fixed">
          <thead>
            <tr className="border-b border-border/80 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              <th className="pb-3 pl-2 w-[24%]">Preview</th>
              <th className="pb-3 w-[62%]">Icon Name</th>
              <th className="pb-3 w-[90%]">React / Next.js Component Code</th>
              <th className="pb-3 pr-2 w-[10%] text-center">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/40">
            {filteredKeys.length === 0 ? (
              <tr>
                <td colSpan={4} className="py-8 text-center text-sm text-muted-foreground">
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
                  >
                    {/* Column 1: SVG Icon Preview */}
                    <td className="py-3.5 pl-2">
                      <div className="w-10 h-10 rounded-lg bg-secondary/50 border border-border flex items-center justify-center text-muted-foreground group-hover:text-accent group-hover:border-accent/30 group-hover:bg-accent/5 transition-all">
                        <IconDraw className="h-5 w-5" />
                      </div>
                    </td>

                    {/* Column 2: Name & Category */}
                    <td className="py-3.5 font-medium text-white select-all">
                      <div className="font-semibold text-white">{name}</div>
                      <div className="text-[10px] text-muted-foreground">{item.category} &bull; {item.desc}</div>
                    </td>

                    {/* Column 3: Raw SVG Code */}
                    <td className="py-3.5 font-mono text-xs text-accent bg-transparent select-all">
                      <div className="overflow-x-auto select-all max-w-[400px]">
                        <pre className="bg-secondary/40 px-2 py-1.5 rounded border border-border/50 select-all whitespace-pre text-[10px] leading-tight">
                          {codeString}
                        </pre>
                      </div>
                    </td>

                    {/* Column 4: Copy Action */}
                    <td className="py-3.5 pr-2 text-center">
                      <button
                        onClick={() => handleCopy(codeString, name)}
                        className={`p-2 rounded-lg border transition-all ${
                          copiedId === name
                            ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                            : "bg-secondary hover:bg-muted border-border text-muted-foreground hover:text-white"
                        }`}
                        title="Copy Raw SVG XML"
                      >
                        {copiedId === name ? (
                          <Check className="h-3.5 w-3.5" />
                        ) : (
                          <Copy className="h-3.5 w-3.5" />
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
      
      <div className="mt-4 pt-3 border-t border-border/50 text-[10px] text-muted-foreground font-mono flex justify-between items-center">
        <span>Showing {filteredKeys.length} of {keys.length} custom SVGs</span>
        <span>Self-contained Vector XML Icons</span>
      </div>
    </div>
  );
}
