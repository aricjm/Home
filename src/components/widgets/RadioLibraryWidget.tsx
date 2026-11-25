"use client";

import React, { useState } from "react";
import { Copy, Check, ExternalLink, Terminal, Code2 } from "lucide-react";
import { RADIO_LIBRARIES, getRadioLibrary } from "@/data/radioLibraries";

interface RadioLibraryWidgetProps {
  libraryId: string;
}

export default function RadioLibraryWidget({ libraryId }: RadioLibraryWidgetProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [filterText, setFilterText] = useState("");
  const [selectedRadio, setSelectedRadio] = useState<Record<number, string>>({});

  const lib = getRadioLibrary(libraryId);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const CopyButton = ({ text, id, className = "" }: { text: string; id: string; className?: string }) => (
    <button
      id={id}
      onClick={() => handleCopy(text, id)}
      className={`p-1.5 rounded-md border transition-all shrink-0 ${
        copiedId === id
          ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
          : "bg-secondary hover:bg-muted border-border text-muted-foreground hover:text-white"
      } ${className}`}
      title="Copy to clipboard"
    >
      {copiedId === id
        ? <Check className="h-3 w-3" />
        : <Copy className="h-3 w-3" />}
    </button>
  );

  if (!lib) {
    return (
      <div className="bg-card border border-border rounded-2xl p-6 text-muted-foreground" id="radio-library-not-found">
        Library not found: {libraryId}
      </div>
    );
  }

  const filteredExamples = lib.examples.filter(
    (ex) =>
      ex.label.toLowerCase().includes(filterText.toLowerCase()) ||
      ex.description.toLowerCase().includes(filterText.toLowerCase())
  );

  const renderRadioPreview = (libraryId: string, label: string, index: number) => {
    const val = selectedRadio[index] || "1";
    const setVal = (newVal: string) => setSelectedRadio(prev => ({ ...prev, [index]: newVal }));

    const radioOuterBase = "flex items-center justify-center h-4 w-4 rounded-full border border-border cursor-pointer select-none transition-colors";
    const radioInnerBase = "h-2 w-2 rounded-full bg-accent transition-all";

    const customRadio = (itemVal: string, text: string) => {
      const isSelected = val === itemVal;
      return (
        <label onClick={() => setVal(itemVal)} className="flex items-center gap-2 cursor-pointer text-xs text-white">
          <span className={`${radioOuterBase} ${isSelected ? "border-accent bg-accent/10" : "border-border"}`}>
            {isSelected && <span className={radioInnerBase} />}
          </span>
          <span>{text}</span>
        </label>
      );
    };

    switch (libraryId) {
      case "radio-shadcn": {
        if (label === "Basic Group") return (
          <div className="flex flex-col gap-2">
            {customRadio("1", "Default")}
            {customRadio("2", "Comfortable")}
          </div>
        );
        if (label === "Disabled Item") return (
          <div className="flex items-center gap-2 opacity-50 cursor-not-allowed">
            <span className="flex items-center justify-center h-4 w-4 rounded-full border border-border/50 bg-white/5"></span>
            <span className="text-xs text-white/50">Disabled Option</span>
          </div>
        );
        break;
      }
      case "radio-radix": {
        if (label === "Radio Primitive") return (
          <div className="flex flex-col gap-2">
            {customRadio("1", "Option A")}
            {customRadio("2", "Option B")}
          </div>
        );
        break;
      }
      case "radio-mantine": {
        if (label === "Basic Group") return (
          <div className="flex flex-col gap-1">
            <span className="text-xs font-semibold text-white">Select framework <span className="text-red-500">*</span></span>
            <div className="flex items-center gap-3">
              {customRadio("1", "React")}
              {customRadio("2", "Svelte")}
            </div>
          </div>
        );
        if (label === "Helper Texts") return (
          <div className="flex flex-col gap-0.5">
            {customRadio("1", "Option")}
            <span className="text-[10px] text-muted-foreground pl-6">Additional details here</span>
          </div>
        );
        if (label === "Disabled Options") return (
          <div className="flex items-center gap-2 opacity-50 cursor-not-allowed">
            <span className="flex items-center justify-center h-4 w-4 rounded-full border border-border/50 bg-white/5"></span>
            <span className="text-xs text-white/50">Disabled Option</span>
          </div>
        );
        break;
      }
      case "radio-heroui": {
        if (label === "Basic Group") return (
          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold text-muted-foreground">Select your plans</span>
            {customRadio("1", "Basic")}
            {customRadio("2", "Pro Edition")}
          </div>
        );
        if (label === "Description Text") return (
          <div className="flex flex-col gap-0.5">
            {customRadio("1", "Enterprise")}
            <span className="text-[10px] text-muted-foreground pl-6">Best for teams</span>
          </div>
        );
        if (label === "Color scheme") return (
          <label onClick={() => setVal("1")} className="flex items-center gap-2 cursor-pointer text-xs text-white">
            <span className={`flex items-center justify-center h-4 w-4 rounded-full border ${val === "1" ? "border-emerald-500 bg-emerald-500/10" : "border-border"}`}>
              {val === "1" && <span className="h-2 w-2 rounded-full bg-emerald-500" />}
            </span>
            <span>Success Plan</span>
          </label>
        );
        break;
      }
      case "radio-chakra": {
        if (label === "Basic Group") return (
          <div className="flex items-center gap-3">
            {customRadio("1", "Option 1")}
            {customRadio("2", "Option 2")}
          </div>
        );
        if (label === "Color Schema") return (
          <label onClick={() => setVal("1")} className="flex items-center gap-2 cursor-pointer text-xs text-white">
            <span className={`flex items-center justify-center h-4 w-4 rounded-full border ${val === "1" ? "border-teal-500 bg-teal-500/10" : "border-border"}`}>
              {val === "1" && <span className="h-2 w-2 rounded-full bg-teal-500" />}
            </span>
            <span>Teal Radio</span>
          </label>
        );
        break;
      }
      case "radio-mui": {
        if (label === "Basic Group") return (
          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold text-muted-foreground">Gender</span>
            {customRadio("1", "Female")}
            {customRadio("2", "Male")}
          </div>
        );
        if (label === "Row Layout") return (
          <div className="flex items-center gap-3">
            {customRadio("1", "A")}
            {customRadio("2", "B")}
          </div>
        );
        break;
      }
      case "radio-headless": {
        if (label === "Basic Group") return (
          <div className="flex flex-col gap-2 w-full max-w-[200px]">
            <div onClick={() => setVal("1")} className={`flex items-center justify-between rounded-lg py-2 px-3 text-white cursor-pointer transition-colors ${val === "1" ? "bg-white/10" : "bg-white/5 hover:bg-white/10"}`}>
              <span className="text-xs">Startup</span>
              {val === "1" && <span className="h-2 w-2 rounded-full bg-white" />}
            </div>
            <div onClick={() => setVal("2")} className={`flex items-center justify-between rounded-lg py-2 px-3 text-white cursor-pointer transition-colors ${val === "2" ? "bg-white/10" : "bg-white/5 hover:bg-white/10"}`}>
              <span className="text-xs">Business</span>
              {val === "2" && <span className="h-2 w-2 rounded-full bg-white" />}
            </div>
          </div>
        );
        break;
      }
      case "radio-react-aria": {
        if (label === "Basic Group") return (
          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold text-white">Favorite fruit</span>
            {customRadio("1", "Apple")}
            {customRadio("2", "Banana")}
          </div>
        );
        break;
      }
      case "radio-antd": {
        if (label === "Basic Group") return (
          <div className="flex items-center gap-3">
            {customRadio("1", "A")}
            {customRadio("2", "B")}
          </div>
        );
        if (label === "Radio Button style") return (
          <div className="inline-flex rounded-md overflow-hidden border border-border shadow-sm">
            <button onClick={() => setVal("1")} className={`px-3 py-1 text-xs transition-colors ${val === "1" ? "bg-blue-500 text-white" : "text-white bg-transparent hover:bg-white/5"}`}>Hangzhou</button>
            <button onClick={() => setVal("2")} className={`px-3 py-1 text-xs border-l border-border transition-colors ${val === "2" ? "bg-blue-500 text-white" : "text-white bg-transparent hover:bg-white/5"}`}>Shanghai</button>
          </div>
        );
        break;
      }
      case "radio-daisyui": {
        if (label === "Default Radio") return (
          <div className="flex items-center gap-2">
            <input type="radio" checked={val === "1"} onChange={() => setVal("1")} className="w-4 h-4 rounded-full border border-border checked:bg-neutral appearance-none checked:border-neutral cursor-pointer flex items-center justify-center after:content-[''] after:w-2 after:h-2 after:rounded-full checked:after:bg-white" />
            <span className="text-xs text-white">Default Radio</span>
          </div>
        );
        if (label === "Primary Radio") return (
          <div className="flex items-center gap-2">
            <input type="radio" checked={val === "1"} onChange={() => setVal("1")} className="w-4 h-4 rounded-full border border-border checked:bg-indigo-600 appearance-none checked:border-indigo-600 cursor-pointer flex items-center justify-center after:content-[''] after:w-2 after:h-2 after:rounded-full checked:after:bg-white" />
            <span className="text-xs text-white">Primary Radio</span>
          </div>
        );
        if (label === "Sizes") return (
          <input type="radio" checked={val === "1"} onChange={() => setVal("1")} className="w-3 h-3 rounded-full border border-border checked:bg-neutral appearance-none checked:border-neutral cursor-pointer flex items-center justify-center after:content-[''] after:w-1.5 after:h-1.5 after:rounded-full checked:after:bg-white" />
        );
        break;
      }
    }

    return (
      <div className="flex flex-col gap-2">
        {customRadio("1", "Option A")}
        {customRadio("2", "Option B")}
      </div>
    );
  };

  return (
    <div className="bg-card border border-border rounded-2xl p-6 relative overflow-hidden transition-all duration-300 hover:border-accent/40 flex flex-col gap-6" id={`radio-library-${lib.id}-root`}>
      {/* Decorative blur */}
      <div className="absolute -right-16 -top-16 w-40 h-40 bg-accent/5 rounded-full blur-3xl pointer-events-none" id={`radio-library-${lib.id}-blur`} />

      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start gap-4" id={`radio-library-${lib.id}-header`}>
        <div id={`radio-library-${lib.id}-header-text`}>
          <div className="flex items-center gap-2.5 mb-1" id={`radio-library-${lib.id}-title-row`}>
            <h2 className="text-xl font-bold text-white" id={`radio-library-${lib.id}-title`}>{lib.name}</h2>
            <span className="px-2 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/25 text-amber-400 text-[10px] font-semibold uppercase tracking-wider" id={`radio-library-${lib.id}-badge`}>
              Radio Button
            </span>
          </div>
          <p className="text-sm text-muted-foreground max-w-lg" id={`radio-library-${lib.id}-description`}>{lib.description}</p>
        </div>
        <a
          id={`radio-library-${lib.id}-website-link`}
          href={lib.website}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs text-accent hover:text-white transition-colors shrink-0 border border-accent/30 hover:border-accent/60 rounded-lg px-3 py-1.5"
        >
          <ExternalLink className="h-3.5 w-3.5" />
          Docs
        </a>
      </div>

      {/* Install command */}
      <div className="space-y-2" id={`radio-library-${lib.id}-install-section`}>
        <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider" id={`radio-library-${lib.id}-install-label`}>
          <Terminal className="h-3.5 w-3.5" />
          Install
        </div>
        <div className="flex items-center gap-2 bg-secondary/60 border border-border rounded-lg px-4 py-2.5" id={`radio-library-${lib.id}-install-box`}>
          <code className="flex-1 text-sm font-mono text-emerald-400 break-all" id={`radio-library-${lib.id}-install-code`}>{lib.installCommand}</code>
          <CopyButton text={lib.installCommand} id={`radio-library-${lib.id}-install-copy`} />
        </div>
      </div>

      {/* Import statement */}
      <div className="space-y-2" id={`radio-library-${lib.id}-import-section`}>
        <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider" id={`radio-library-${lib.id}-import-label`}>
          <Code2 className="h-3.5 w-3.5" />
          Import
        </div>
        <div className="flex items-start gap-2 bg-secondary/60 border border-border rounded-lg px-4 py-2.5" id={`radio-library-${lib.id}-import-box`}>
          <pre className="flex-1 text-sm font-mono text-accent whitespace-pre-wrap break-all leading-relaxed" id={`radio-library-${lib.id}-import-code`}>{lib.importStatement}</pre>
          <CopyButton text={lib.importStatement} id={`radio-library-${lib.id}-import-copy`} />
        </div>
      </div>

      {/* Provider setup (if applicable) */}
      {lib.providerSetup && (
        <div className="space-y-2" id={`radio-library-${lib.id}-provider-section`}>
          <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider" id={`radio-library-${lib.id}-provider-label`}>
            <Code2 className="h-3.5 w-3.5" />
            Provider Setup
          </div>
          <div className="flex items-start gap-2 bg-amber-500/5 border border-amber-500/20 rounded-lg px-4 py-2.5" id={`radio-library-${lib.id}-provider-box`}>
            <pre className="flex-1 text-sm font-mono text-amber-300/80 whitespace-pre-wrap break-all leading-relaxed" id={`radio-library-${lib.id}-provider-code`}>{lib.providerSetup}</pre>
            <CopyButton text={lib.providerSetup} id={`radio-library-${lib.id}-provider-copy`} />
          </div>
        </div>
      )}

      {/* Examples Table */}
      <div className="space-y-3" id={`radio-library-${lib.id}-examples-section`}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3" id={`radio-library-${lib.id}-examples-header`}>
          <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider" id={`radio-library-${lib.id}-examples-label`}>
            Examples &amp; Variants ({filteredExamples.length})
          </div>
          <input
            id={`radio-library-${lib.id}-filter-input`}
            type="text"
            placeholder="Filter examples..."
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
            className="w-full sm:w-48 bg-secondary border border-border text-xs rounded-lg px-3 py-1.5 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent text-white placeholder-muted-foreground/60 transition-all"
          />
        </div>

        <div className="overflow-x-auto rounded-lg border border-border" id={`radio-library-${lib.id}-examples-table-container`}>
          <table className="w-full text-left border-collapse" id={`radio-library-${lib.id}-examples-table`}>
            <thead>
              <tr className="bg-secondary/60 border-b border-border text-[11px] font-semibold text-muted-foreground uppercase tracking-wider" id={`radio-library-${lib.id}-table-header`}>
                <th className="px-4 py-3 w-[15%]" id={`radio-library-${lib.id}-th-variant`}>Variant</th>
                <th className="px-4 py-3 w-[20%]" id={`radio-library-${lib.id}-th-desc`}>Description</th>
                <th className="px-4 py-3 w-[22%]" id={`radio-library-${lib.id}-th-preview`}>Visual Preview</th>
                <th className="px-4 py-3 w-[38%]" id={`radio-library-${lib.id}-th-code`}>Component Code</th>
                <th className="px-4 py-3 w-[5%] text-center" id={`radio-library-${lib.id}-th-copy`}>Copy</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/50" id={`radio-library-${lib.id}-table-body`}>
              {filteredExamples.length === 0 ? (
                <tr id={`radio-library-${lib.id}-no-results`}>
                  <td colSpan={5} className="px-4 py-6 text-center text-sm text-muted-foreground" id={`radio-library-${lib.id}-no-results-cell`}>
                    No matching examples
                  </td>
                </tr>
              ) : (
                filteredExamples.map((ex, i) => (
                  <tr
                    key={ex.label}
                    className="hover:bg-secondary/25 transition-colors group"
                    id={`radio-library-${lib.id}-row-${i}`}
                  >
                    <td className="px-4 py-3 font-medium text-sm text-white" id={`radio-library-${lib.id}-label-${i}`}>
                      {ex.label}
                    </td>
                    <td className="px-4 py-3 text-xs text-muted-foreground" id={`radio-library-${lib.id}-desc-${i}`}>
                      {ex.description}
                    </td>
                    <td className="px-4 py-3" id={`radio-library-${lib.id}-preview-${i}`}>
                      <div className="flex items-center min-h-[40px] py-1" id={`radio-library-${lib.id}-preview-container-${i}`}>
                        {renderRadioPreview(lib.id, ex.label, i)}
                      </div>
                    </td>
                    <td className="px-4 py-3" id={`radio-library-${lib.id}-code-${i}`}>
                      <pre className="text-xs font-mono text-accent bg-secondary/40 px-2.5 py-1.5 rounded border border-border/50 whitespace-pre-wrap break-all leading-relaxed select-all" id={`radio-library-${lib.id}-pre-${i}`}>
                        {ex.code}
                      </pre>
                    </td>
                    <td className="px-4 py-3 text-center" id={`radio-library-${lib.id}-action-${i}`}>
                      <CopyButton text={ex.code} id={`radio-library-${lib.id}-copy-${i}`} />
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-2 border-t border-border/50 text-[10px] text-muted-foreground font-mono flex justify-between items-center" id={`radio-library-${lib.id}-footer`}>
        <span id={`radio-library-${lib.id}-footer-count`}>{lib.examples.length} examples across {lib.name}</span>
        <a href={lib.website} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" id={`radio-library-${lib.id}-footer-link`}>
          {lib.website}
        </a>
      </div>
    </div>
  );
}
