"use client";

import React, { useState } from "react";
import { Copy, Check, ExternalLink, Terminal, Code2, Bold, Sun, Moon } from "lucide-react";
import { TOGGLE_LIBRARIES, getToggleLibrary } from "@/data/toggleLibraries";

interface ToggleLibraryWidgetProps {
  libraryId: string;
}

export default function ToggleLibraryWidget({ libraryId }: ToggleLibraryWidgetProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [filterText, setFilterText] = useState("");
  const [toggleStates, setToggleStates] = useState<Record<number, boolean>>({});

  const lib = getToggleLibrary(libraryId);

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
      <div className="bg-card border border-border rounded-2xl p-6 text-muted-foreground" id="toggle-library-not-found">
        Library not found: {libraryId}
      </div>
    );
  }

  const filteredExamples = lib.examples.filter(
    (ex) =>
      ex.label.toLowerCase().includes(filterText.toLowerCase()) ||
      ex.description.toLowerCase().includes(filterText.toLowerCase())
  );

  const renderTogglePreview = (libraryId: string, label: string, index: number) => {
    const isChecked = !!toggleStates[index];
    const toggle = () => setToggleStates(prev => ({ ...prev, [index]: !isChecked }));

    // Switch container base
    const switchTrackBase = "relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none";
    const switchThumbBase = "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out";

    switch (libraryId) {
      case "toggle-shadcn": {
        if (label === "Switch Basic") return (
          <button
            onClick={toggle}
            className={`${switchTrackBase} ${isChecked ? "bg-white" : "bg-white/10"}`}
          >
            <span className={`${switchThumbBase} ${isChecked ? "translate-x-5 bg-black" : "translate-x-0 bg-white"}`} />
          </button>
        );
        if (label === "Switch Label") return (
          <div className="flex items-center gap-2">
            <button
              onClick={toggle}
              className={`${switchTrackBase} ${isChecked ? "bg-white" : "bg-white/10"}`}
            >
              <span className={`${switchThumbBase} ${isChecked ? "translate-x-5 bg-black" : "translate-x-0 bg-white"}`} />
            </button>
            <span className="text-xs text-white">Airplane Mode</span>
          </div>
        );
        if (label === "Toggle Button") return (
          <button
            onClick={toggle}
            className={`p-2 rounded border transition-colors ${isChecked ? "bg-accent/20 border-accent text-white" : "bg-secondary border-border text-muted-foreground hover:text-white"}`}
          >
            <Bold className="h-4 w-4" />
          </button>
        );
        if (label === "Disabled Switch") return (
          <button disabled className={`${switchTrackBase} bg-white/5 opacity-50 cursor-not-allowed`}>
            <span className={`${switchThumbBase} translate-x-0`} />
          </button>
        );
        break;
      }
      case "toggle-radix": {
        if (label === "Switch Primitive") return (
          <button
            onClick={toggle}
            className={`${switchTrackBase} ${isChecked ? "bg-emerald-600" : "bg-white/10"}`}
          >
            <span className={`${switchThumbBase} ${isChecked ? "translate-x-5" : "translate-x-0"}`} />
          </button>
        );
        break;
      }
      case "toggle-mantine": {
        if (label === "Basic Switch") return (
          <div className="flex items-center gap-2">
            <button
              onClick={toggle}
              className={`${switchTrackBase} ${isChecked ? "bg-blue-600" : "bg-white/10"}`}
            >
              <span className={`${switchThumbBase} ${isChecked ? "translate-x-5" : "translate-x-0"}`} />
            </button>
            <span className="text-xs text-white">Activate setting</span>
          </div>
        );
        if (label === "Inner Labels") return (
          <button
            onClick={toggle}
            className={`relative inline-flex h-6 w-14 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${isChecked ? "bg-blue-600" : "bg-white/10"}`}
          >
            <span className="absolute inset-0 flex items-center justify-between px-2 text-[9px] font-bold text-white select-none pointer-events-none">
              <span>ON</span>
              <span>OFF</span>
            </span>
            <span className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow transition duration-200 ease-in-out ${isChecked ? "translate-x-8" : "translate-x-0"}`} />
          </button>
        );
        if (label === "Size: xs") return (
          <button onClick={toggle} className={`relative inline-flex h-4 w-8 shrink-0 cursor-pointer rounded-full border-1 border-transparent transition-colors duration-200 ${isChecked ? "bg-blue-600" : "bg-white/10"}`}>
            <span className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white shadow transition duration-200 ${isChecked ? "translate-x-4" : "translate-x-0"}`} />
          </button>
        );
        if (label === "Size: xl") return (
          <button onClick={toggle} className={`relative inline-flex h-8 w-16 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ${isChecked ? "bg-blue-600" : "bg-white/10"}`}>
            <span className={`inline-block h-7 w-7 transform rounded-full bg-white shadow transition duration-200 ${isChecked ? "translate-x-8" : "translate-x-0"}`} />
          </button>
        );
        if (label === "Disabled") return (
          <button disabled className={`${switchTrackBase} bg-white/5 opacity-55 cursor-not-allowed`}>
            <span className={`${switchThumbBase} translate-x-0`} />
          </button>
        );
        break;
      }
      case "toggle-heroui": {
        if (label === "Basic Switch") return (
          <div className="flex items-center gap-2">
            <button
              onClick={toggle}
              className={`relative inline-flex h-7 w-12 shrink-0 cursor-pointer rounded-xl border-2 border-transparent transition-colors duration-250 ${isChecked ? "bg-blue-600" : "bg-white/10"}`}
            >
              <span className={`inline-block h-6 w-6 transform rounded-lg bg-white shadow transition duration-250 ${isChecked ? "translate-x-5" : "translate-x-0"}`} />
            </button>
            <span className="text-xs text-white">Automatic updates</span>
          </div>
        );
        if (label === "Thumb Icon") return (
          <button
            onClick={toggle}
            className={`relative inline-flex h-7 w-14 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ${isChecked ? "bg-blue-600" : "bg-white/10"}`}
          >
            <span className="absolute inset-0 flex items-center justify-between px-1.5 text-white select-none pointer-events-none">
              <Sun className="h-3.5 w-3.5 text-amber-400" />
              <Moon className="h-3.5 w-3.5 text-slate-400" />
            </span>
            <span className={`pointer-events-none inline-block h-6 w-6 transform rounded-full bg-white shadow transition duration-200 flex items-center justify-center ${isChecked ? "translate-x-7" : "translate-x-0"}`} />
          </button>
        );
        if (label === "Color Variants") return (
          <button
            onClick={toggle}
            className={`${switchTrackBase} ${isChecked ? "bg-emerald-600" : "bg-white/10"}`}
          >
            <span className={`${switchThumbBase} ${isChecked ? "translate-x-5" : "translate-x-0"}`} />
          </button>
        );
        break;
      }
      case "toggle-chakra": {
        if (label === "Basic Switch") return (
          <button
            onClick={toggle}
            className={`${switchTrackBase} ${isChecked ? "bg-blue-500" : "bg-white/10"}`}
          >
            <span className={`${switchThumbBase} ${isChecked ? "translate-x-5" : "translate-x-0"}`} />
          </button>
        );
        if (label === "Chakra FormControl") return (
          <div className="flex items-center gap-3">
            <span className="text-xs text-white">Email Alerts?</span>
            <button
              onClick={toggle}
              className={`${switchTrackBase} ${isChecked ? "bg-blue-500" : "bg-white/10"}`}
            >
              <span className={`${switchThumbBase} ${isChecked ? "translate-x-5" : "translate-x-0"}`} />
            </button>
          </div>
        );
        if (label === "Color Scheme") return (
          <button
            onClick={toggle}
            className={`relative inline-flex h-7 w-12 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ${isChecked ? "bg-teal-500" : "bg-white/10"}`}
          >
            <span className={`inline-block h-6 w-6 transform rounded-full bg-white shadow transition duration-200 ${isChecked ? "translate-x-5" : "translate-x-0"}`} />
          </button>
        );
        break;
      }
      case "toggle-mui": {
        if (label === "Basic Switch") return (
          <button
            onClick={toggle}
            className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-1 border-transparent transition-colors duration-200 ${isChecked ? "bg-blue-500" : "bg-white/20"}`}
          >
            <span className={`inline-block h-4.5 w-4.5 transform rounded-full bg-white shadow transition duration-200 ${isChecked ? "translate-x-4" : "translate-x-0"}`} />
          </button>
        );
        if (label === "Form Label Switch") return (
          <div className="flex items-center gap-2">
            <button
              onClick={toggle}
              className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-1 border-transparent transition-colors duration-200 ${isChecked ? "bg-blue-500" : "bg-white/20"}`}
            >
              <span className={`inline-block h-4.5 w-4.5 transform rounded-full bg-white shadow transition duration-200 ${isChecked ? "translate-x-4" : "translate-x-0"}`} />
            </button>
            <span className="text-xs text-white">Label</span>
          </div>
        );
        if (label === "Color: secondary") return (
          <button
            onClick={toggle}
            className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-1 border-transparent transition-colors duration-200 ${isChecked ? "bg-purple-500" : "bg-white/20"}`}
          >
            <span className={`inline-block h-4.5 w-4.5 transform rounded-full bg-white shadow transition duration-200 ${isChecked ? "translate-x-4" : "translate-x-0"}`} />
          </button>
        );
        break;
      }
      case "toggle-headless": {
        if (label === "Basic Switch") return (
          <button
            onClick={toggle}
            className={`relative inline-flex h-7 w-14 shrink-0 cursor-pointer rounded-full bg-white/10 p-1 transition-colors duration-250 ${isChecked ? "bg-sky-600" : "bg-white/10"}`}
          >
            <span className={`pointer-events-none block h-5 w-5 transform rounded-full bg-white shadow transition duration-250 ${isChecked ? "translate-x-7" : "translate-x-0"}`} />
          </button>
        );
        break;
      }
      case "toggle-react-aria": {
        if (label === "Basic Switch") return (
          <div className="flex items-center gap-2">
            <button
              onClick={toggle}
              className={`${switchTrackBase} ${isChecked ? "bg-blue-600" : "bg-white/10"}`}
            >
              <span className={`${switchThumbBase} ${isChecked ? "translate-x-5" : "translate-x-0"}`} />
            </button>
            <span className="text-xs text-white">Low Power Mode</span>
          </div>
        );
        if (label === "Disabled") return (
          <div className="flex items-center gap-2 opacity-50">
            <button disabled className={`${switchTrackBase} bg-white/5 cursor-not-allowed`}>
              <span className={`${switchThumbBase} translate-x-0`} />
            </button>
            <span className="text-xs text-white">Low Power Mode</span>
          </div>
        );
        break;
      }
      case "toggle-antd": {
        if (label === "Basic Switch") return (
          <button
            onClick={toggle}
            className={`relative inline-flex h-5 w-10 shrink-0 cursor-pointer rounded-full border-1 border-transparent transition-colors duration-200 ${isChecked ? "bg-blue-500" : "bg-white/20"}`}
          >
            <span className={`inline-block h-4.5 w-4.5 transform rounded-full bg-white shadow transition duration-200 ${isChecked ? "translate-x-5" : "translate-x-0"}`} />
          </button>
        );
        if (label === "Inner Text/Icons") return (
          <button
            onClick={toggle}
            className={`relative inline-flex h-6 w-12 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ${isChecked ? "bg-blue-500" : "bg-white/10"}`}
          >
            <span className="absolute inset-0 flex items-center justify-between px-1.5 text-[9px] font-bold text-white select-none pointer-events-none">
              <span>1</span>
              <span>0</span>
            </span>
            <span className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition duration-200 ${isChecked ? "translate-x-6" : "translate-x-0"}`} />
          </button>
        );
        if (label === "Loading Switch") return (
          <button
            onClick={toggle}
            className={`relative inline-flex h-5 w-10 shrink-0 cursor-pointer rounded-full border-1 border-transparent transition-colors duration-200 opacity-80 ${isChecked ? "bg-blue-500" : "bg-white/20"}`}
          >
            <span className={`inline-block h-4.5 w-4.5 transform rounded-full bg-white shadow transition duration-200 flex items-center justify-center ${isChecked ? "translate-x-5" : "translate-x-0"}`}>
              <span className="w-2.5 h-2.5 border-t border-b border-blue-500 rounded-full animate-spin" />
            </span>
          </button>
        );
        break;
      }
      case "toggle-daisyui": {
        if (label === "Default Toggle") return (
          <input type="checkbox" checked={isChecked} onChange={toggle} className="w-12 h-6 rounded-full bg-white/10 checked:bg-neutral relative appearance-none cursor-pointer after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:w-5 after:h-5 after:rounded-full after:bg-white after:transition-all checked:after:translate-x-6" />
        );
        if (label === "Primary Toggle") return (
          <input type="checkbox" checked={isChecked} onChange={toggle} className="w-12 h-6 rounded-full bg-white/10 checked:bg-indigo-600 relative appearance-none cursor-pointer after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:w-5 after:h-5 after:rounded-full after:bg-white after:transition-all checked:after:translate-x-6" />
        );
        if (label === "Sizes") return (
          <input type="checkbox" checked={isChecked} onChange={toggle} className="w-8 h-4 rounded-full bg-white/10 checked:bg-neutral relative appearance-none cursor-pointer after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:w-3 after:h-3 after:rounded-full after:bg-white after:transition-all checked:after:translate-x-4" />
        );
        break;
      }
    }

    return (
      <button onClick={toggle} className={`${switchTrackBase} ${isChecked ? "bg-accent" : "bg-white/10"}`}>
        <span className={`${switchThumbBase} ${isChecked ? "translate-x-5" : "translate-x-0"}`} />
      </button>
    );
  };

  return (
    <div className="bg-card border border-border rounded-2xl p-6 relative overflow-hidden transition-all duration-300 hover:border-accent/40 flex flex-col gap-6" id={`toggle-library-${lib.id}-root`}>
      {/* Decorative blur */}
      <div className="absolute -right-16 -top-16 w-40 h-40 bg-accent/5 rounded-full blur-3xl pointer-events-none" id={`toggle-library-${lib.id}-blur`} />

      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start gap-4" id={`toggle-library-${lib.id}-header`}>
        <div id={`toggle-library-${lib.id}-header-text`}>
          <div className="flex items-center gap-2.5 mb-1" id={`toggle-library-${lib.id}-title-row`}>
            <h2 className="text-xl font-bold text-white" id={`toggle-library-${lib.id}-title`}>{lib.name}</h2>
            <span className="px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/25 text-emerald-400 text-[10px] font-semibold uppercase tracking-wider" id={`toggle-library-${lib.id}-badge`}>
              Toggle
            </span>
          </div>
          <p className="text-sm text-muted-foreground max-w-lg" id={`toggle-library-${lib.id}-description`}>{lib.description}</p>
        </div>
        <a
          id={`toggle-library-${lib.id}-website-link`}
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
      <div className="space-y-2" id={`toggle-library-${lib.id}-install-section`}>
        <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider" id={`toggle-library-${lib.id}-install-label`}>
          <Terminal className="h-3.5 w-3.5" />
          Install
        </div>
        <div className="flex items-center gap-2 bg-secondary/60 border border-border rounded-lg px-4 py-2.5" id={`toggle-library-${lib.id}-install-box`}>
          <code className="flex-1 text-sm font-mono text-emerald-400 break-all" id={`toggle-library-${lib.id}-install-code`}>{lib.installCommand}</code>
          <CopyButton text={lib.installCommand} id={`toggle-library-${lib.id}-install-copy`} />
        </div>
      </div>

      {/* Import statement */}
      <div className="space-y-2" id={`toggle-library-${lib.id}-import-section`}>
        <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider" id={`toggle-library-${lib.id}-import-label`}>
          <Code2 className="h-3.5 w-3.5" />
          Import
        </div>
        <div className="flex items-start gap-2 bg-secondary/60 border border-border rounded-lg px-4 py-2.5" id={`toggle-library-${lib.id}-import-box`}>
          <pre className="flex-1 text-sm font-mono text-accent whitespace-pre-wrap break-all leading-relaxed" id={`toggle-library-${lib.id}-import-code`}>{lib.importStatement}</pre>
          <CopyButton text={lib.importStatement} id={`toggle-library-${lib.id}-import-copy`} />
        </div>
      </div>

      {/* Provider setup (if applicable) */}
      {lib.providerSetup && (
        <div className="space-y-2" id={`toggle-library-${lib.id}-provider-section`}>
          <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider" id={`toggle-library-${lib.id}-provider-label`}>
            <Code2 className="h-3.5 w-3.5" />
            Provider Setup
          </div>
          <div className="flex items-start gap-2 bg-amber-500/5 border border-amber-500/20 rounded-lg px-4 py-2.5" id={`toggle-library-${lib.id}-provider-box`}>
            <pre className="flex-1 text-sm font-mono text-amber-300/80 whitespace-pre-wrap break-all leading-relaxed" id={`toggle-library-${lib.id}-provider-code`}>{lib.providerSetup}</pre>
            <CopyButton text={lib.providerSetup} id={`toggle-library-${lib.id}-provider-copy`} />
          </div>
        </div>
      )}

      {/* Examples Table */}
      <div className="space-y-3" id={`toggle-library-${lib.id}-examples-section`}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3" id={`toggle-library-${lib.id}-examples-header`}>
          <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider" id={`toggle-library-${lib.id}-examples-label`}>
            Examples &amp; Variants ({filteredExamples.length})
          </div>
          <input
            id={`toggle-library-${lib.id}-filter-input`}
            type="text"
            placeholder="Filter examples..."
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
            className="w-full sm:w-48 bg-secondary border border-border text-xs rounded-lg px-3 py-1.5 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent text-white placeholder-muted-foreground/60 transition-all"
          />
        </div>

        <div className="overflow-x-auto rounded-lg border border-border" id={`toggle-library-${lib.id}-examples-table-container`}>
          <table className="w-full text-left border-collapse" id={`toggle-library-${lib.id}-examples-table`}>
            <thead>
              <tr className="bg-secondary/60 border-b border-border text-[11px] font-semibold text-muted-foreground uppercase tracking-wider" id={`toggle-library-${lib.id}-table-header`}>
                <th className="px-4 py-3 w-[15%]" id={`toggle-library-${lib.id}-th-variant`}>Variant</th>
                <th className="px-4 py-3 w-[20%]" id={`toggle-library-${lib.id}-th-desc`}>Description</th>
                <th className="px-4 py-3 w-[22%]" id={`toggle-library-${lib.id}-th-preview`}>Visual Preview</th>
                <th className="px-4 py-3 w-[38%]" id={`toggle-library-${lib.id}-th-code`}>Component Code</th>
                <th className="px-4 py-3 w-[5%] text-center" id={`toggle-library-${lib.id}-th-copy`}>Copy</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/50" id={`toggle-library-${lib.id}-table-body`}>
              {filteredExamples.length === 0 ? (
                <tr id={`toggle-library-${lib.id}-no-results`}>
                  <td colSpan={5} className="px-4 py-6 text-center text-sm text-muted-foreground" id={`toggle-library-${lib.id}-no-results-cell`}>
                    No matching examples
                  </td>
                </tr>
              ) : (
                filteredExamples.map((ex, i) => (
                  <tr
                    key={ex.label}
                    className="hover:bg-secondary/25 transition-colors group"
                    id={`toggle-library-${lib.id}-row-${i}`}
                  >
                    <td className="px-4 py-3 font-medium text-sm text-white" id={`toggle-library-${lib.id}-label-${i}`}>
                      {ex.label}
                    </td>
                    <td className="px-4 py-3 text-xs text-muted-foreground" id={`toggle-library-${lib.id}-desc-${i}`}>
                      {ex.description}
                    </td>
                    <td className="px-4 py-3" id={`toggle-library-${lib.id}-preview-${i}`}>
                      <div className="flex items-center min-h-[40px] py-1" id={`toggle-library-${lib.id}-preview-container-${i}`}>
                        {renderTogglePreview(lib.id, ex.label, i)}
                      </div>
                    </td>
                    <td className="px-4 py-3" id={`toggle-library-${lib.id}-code-${i}`}>
                      <pre className="text-xs font-mono text-accent bg-secondary/40 px-2.5 py-1.5 rounded border border-border/50 whitespace-pre-wrap break-all leading-relaxed select-all" id={`toggle-library-${lib.id}-pre-${i}`}>
                        {ex.code}
                      </pre>
                    </td>
                    <td className="px-4 py-3 text-center" id={`toggle-library-${lib.id}-action-${i}`}>
                      <CopyButton text={ex.code} id={`toggle-library-${lib.id}-copy-${i}`} />
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-2 border-t border-border/50 text-[10px] text-muted-foreground font-mono flex justify-between items-center" id={`toggle-library-${lib.id}-footer`}>
        <span id={`toggle-library-${lib.id}-footer-count`}>{lib.examples.length} examples across {lib.name}</span>
        <a href={lib.website} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" id={`toggle-library-${lib.id}-footer-link`}>
          {lib.website}
        </a>
      </div>
    </div>
  );
}
