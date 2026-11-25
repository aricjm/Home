"use client";

import React, { useState } from "react";
import { Copy, Check, ExternalLink, Terminal, Code2, ChevronDown, ChevronRight, Settings, Trash, Plus, Search, User } from "lucide-react";
import { DROPDOWN_LIBRARIES, getDropdownLibrary } from "@/data/dropdownLibraries";

interface DropdownLibraryWidgetProps {
  libraryId: string;
}

export default function DropdownLibraryWidget({ libraryId }: DropdownLibraryWidgetProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [filterText, setFilterText] = useState("");
  const [activeDropdownIndex, setActiveDropdownIndex] = useState<number | null>(null);

  const lib = getDropdownLibrary(libraryId);

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
      <div className="bg-card border border-border rounded-2xl p-6 text-muted-foreground" id="dropdown-library-not-found">
        Library not found: {libraryId}
      </div>
    );
  }

  const filteredExamples = lib.examples.filter(
    (ex) =>
      ex.label.toLowerCase().includes(filterText.toLowerCase()) ||
      ex.description.toLowerCase().includes(filterText.toLowerCase())
  );

  const renderDropdownPreview = (libraryId: string, label: string, index: number) => {
    const isOpen = activeDropdownIndex === index;
    const toggle = () => setActiveDropdownIndex(isOpen ? null : index);

    // Render option list overlay
    const overlayBase = "absolute z-50 mt-1 bg-secondary border border-border rounded-lg shadow-xl p-1 w-44 font-sans";

    switch (libraryId) {
      case "dropdown-shadcn": {
        if (label === "Basic Dropdown") return (
          <div className="relative">
            <button onClick={toggle} className="bg-white text-black text-xs font-semibold px-3 py-1.5 rounded-md hover:bg-gray-150 inline-flex items-center gap-1">Open <ChevronDown className="h-3 w-3" /></button>
            {isOpen && (
              <div className={overlayBase}>
                <div className="px-2 py-1 text-[10px] text-muted-foreground font-semibold">My Account</div>
                <div className="h-[1px] bg-border my-1" />
                <div className="px-2 py-1 text-xs text-white hover:bg-white/10 rounded cursor-pointer">Profile</div>
                <div className="px-2 py-1 text-xs text-white hover:bg-white/10 rounded cursor-pointer">Billing</div>
                <div className="px-2 py-1 text-xs text-white hover:bg-white/10 rounded cursor-pointer">Settings</div>
              </div>
            )}
          </div>
        );
        if (label === "With Shortcut") return (
          <div className="relative">
            <button onClick={toggle} className="bg-white text-black text-xs font-semibold px-3 py-1.5 rounded-md hover:bg-gray-150 inline-flex items-center gap-1">Options <ChevronDown className="h-3 w-3" /></button>
            {isOpen && (
              <div className={overlayBase}>
                <div className="px-2 py-1 text-xs text-white hover:bg-white/10 rounded cursor-pointer flex justify-between">
                  <span>Profile</span>
                  <span className="text-[10px] text-muted-foreground">⇧⌘P</span>
                </div>
              </div>
            )}
          </div>
        );
        if (label === "Disabled Item") return (
          <div className="relative">
            <button onClick={toggle} className="bg-white text-black text-xs font-semibold px-3 py-1.5 rounded-md hover:bg-gray-150 inline-flex items-center gap-1">Manage <ChevronDown className="h-3 w-3" /></button>
            {isOpen && (
              <div className={overlayBase}>
                <div className="px-2 py-1 text-xs text-muted-foreground opacity-50 cursor-not-allowed">API Access (Locked)</div>
              </div>
            )}
          </div>
        );
        if (label === "With Icons") return (
          <div className="relative">
            <button onClick={toggle} className="bg-white text-black text-xs font-semibold px-3 py-1.5 rounded-md hover:bg-gray-150 inline-flex items-center gap-1">Account <ChevronDown className="h-3 w-3" /></button>
            {isOpen && (
              <div className={overlayBase}>
                <div className="px-2 py-1 text-xs text-white hover:bg-white/10 rounded cursor-pointer flex items-center gap-2">
                  <User className="h-3.5 w-3.5 text-muted-foreground" />
                  <span>Profile</span>
                </div>
              </div>
            )}
          </div>
        );
        if (label === "Submenu") return (
          <div className="relative">
            <button onClick={toggle} className="bg-white text-black text-xs font-semibold px-3 py-1.5 rounded-md hover:bg-gray-150 inline-flex items-center gap-1">Share <ChevronDown className="h-3 w-3" /></button>
            {isOpen && (
              <div className={overlayBase}>
                <div className="px-2 py-1 text-xs text-white hover:bg-white/10 rounded cursor-pointer flex justify-between items-center group">
                  <span>Invite users</span>
                  <ChevronRight className="h-3 w-3 text-muted-foreground" />
                </div>
              </div>
            )}
          </div>
        );
        break;
      }
      case "dropdown-react-select": {
        if (label === "Basic Select") return (
          <div className="border border-border bg-transparent rounded px-2.5 py-1 text-xs text-white w-44 flex justify-between items-center cursor-pointer hover:border-accent">
            <span>Chocolate</span>
            <ChevronDown className="h-3 w-3 text-muted-foreground" />
          </div>
        );
        if (label === "Multi Select") return (
          <div className="border border-border bg-transparent rounded p-1 text-xs text-white w-44 flex flex-wrap gap-1 items-center cursor-pointer">
            <span className="bg-secondary px-1.5 py-0.5 rounded text-[10px] border border-border flex items-center gap-1">Chocolate <span className="hover:text-red-400">✕</span></span>
            <span className="bg-secondary px-1.5 py-0.5 rounded text-[10px] border border-border flex items-center gap-1">Strawberry <span className="hover:text-red-400">✕</span></span>
          </div>
        );
        if (label === "Clearable Select") return (
          <div className="border border-border bg-transparent rounded px-2.5 py-1 text-xs text-white w-44 flex justify-between items-center cursor-pointer">
            <span>Chocolate</span>
            <div className="flex items-center gap-1.5">
              <span className="text-muted-foreground hover:text-white text-[10px]">✕</span>
              <div className="w-[1px] bg-border h-3" />
              <ChevronDown className="h-3 w-3 text-muted-foreground" />
            </div>
          </div>
        );
        if (label === "Searchable Select") return (
          <div className="border border-border bg-transparent rounded px-2.5 py-1 text-xs text-white w-44 flex justify-between items-center cursor-pointer">
            <input type="text" className="bg-transparent border-0 p-0 text-xs w-full focus:outline-none" placeholder="Search..." defaultValue="Choc" />
            <ChevronDown className="h-3 w-3 text-muted-foreground" />
          </div>
        );
        if (label === "Disabled Select") return (
          <div className="border border-border/30 bg-white/5 rounded px-2.5 py-1 text-xs text-white/40 w-44 flex justify-between items-center cursor-not-allowed">
            <span>Select...</span>
            <ChevronDown className="h-3 w-3 text-white/20" />
          </div>
        );
        break;
      }
      case "dropdown-mantine": {
        if (label === "Basic Menu") return (
          <div className="relative">
            <button onClick={toggle} className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-3 py-1.5 rounded inline-flex items-center gap-1">Toggle menu</button>
            {isOpen && (
              <div className={`${overlayBase} w-48 shadow-lg`}>
                <div className="px-2 py-0.5 text-[10px] text-muted-foreground uppercase font-bold">Application</div>
                <div className="px-2 py-1 text-xs text-white hover:bg-blue-600 rounded cursor-pointer flex items-center gap-2">
                  <Settings className="h-3.5 w-3.5 text-muted-foreground group-hover:text-white" />
                  <span>Settings</span>
                </div>
                <div className="px-2 py-1 text-xs text-red-400 hover:bg-red-600 hover:text-white rounded cursor-pointer flex items-center gap-2">
                  <Trash className="h-3.5 w-3.5" />
                  <span>Delete</span>
                </div>
              </div>
            )}
          </div>
        );
        if (label === "Hover Trigger") return (
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-3 py-1.5 rounded">Hover me</button>
        );
        if (label === "Dividers & Labels") return (
          <div className={`${overlayBase} w-48 relative`}>
            <div className="px-2 py-0.5 text-[10px] text-red-400 uppercase font-bold">Danger zone</div>
            <div className="h-[1px] bg-border my-1" />
            <div className="px-2 py-1 text-xs text-red-500 hover:bg-red-600 hover:text-white rounded cursor-pointer">Delete account</div>
          </div>
        );
        break;
      }
      case "dropdown-headless": {
        if (label === "Standard Dropdown") return (
          <div className="relative">
            <button onClick={toggle} className="bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold px-3 py-1.5 rounded inline-flex items-center gap-1">Options</button>
            {isOpen && (
              <div className={`${overlayBase} w-48 bg-gray-800 border-white/5`}>
                <div className="px-3 py-1.5 text-xs text-white hover:bg-white/10 rounded cursor-pointer">Settings</div>
              </div>
            )}
          </div>
        );
        if (label === "Transitions") return (
          <button className="bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold px-3 py-1.5 rounded">Edit</button>
        );
        break;
      }
      case "dropdown-radix": {
        if (label === "Radix Primitive") return (
          <div className="relative">
            <button onClick={toggle} className="border border-border text-white text-xs font-semibold px-3 py-1.5 rounded hover:bg-secondary inline-flex items-center gap-1">Options</button>
            {isOpen && (
              <div className={overlayBase}>
                <div className="px-2 py-1 text-xs text-white hover:bg-white/10 rounded cursor-pointer">Cut</div>
                <div className="h-[1px] bg-border my-1" />
                <div className="px-2 py-1 text-xs text-white hover:bg-white/10 rounded cursor-pointer">Copy</div>
              </div>
            )}
          </div>
        );
        break;
      }
      case "dropdown-heroui": {
        if (label === "Basic Dropdown") return (
          <div className="relative">
            <button onClick={toggle} className="border-2 border-blue-600 hover:bg-blue-600/10 text-blue-400 text-xs font-semibold px-3 py-1.5 rounded-xl inline-flex items-center gap-1">Open Menu</button>
            {isOpen && (
              <div className={`${overlayBase} rounded-xl w-48`}>
                <div className="px-3 py-1.5 text-xs text-white hover:bg-secondary rounded-lg cursor-pointer">New file</div>
                <div className="px-3 py-1.5 text-xs text-white hover:bg-secondary rounded-lg cursor-pointer">Copy link</div>
                <div className="px-3 py-1.5 text-xs text-red-500 hover:bg-red-500/10 rounded-lg cursor-pointer">Delete file</div>
              </div>
            )}
          </div>
        );
        if (label === "Disabled Keys") return (
          <div className="relative">
            <button onClick={toggle} className="border-2 border-blue-600 hover:bg-blue-600/10 text-blue-400 text-xs font-semibold px-3 py-1.5 rounded-xl inline-flex items-center gap-1">Open Menu</button>
            {isOpen && (
              <div className={`${overlayBase} rounded-xl w-48`}>
                <div className="px-3 py-1.5 text-xs text-white hover:bg-secondary rounded-lg cursor-pointer">New</div>
                <div className="px-3 py-1.5 text-xs text-white/30 cursor-not-allowed">Copy (Disabled)</div>
              </div>
            )}
          </div>
        );
        if (label === "Custom Styles") return (
          <div className={`${overlayBase} rounded-xl w-48`}>
            <div className="px-3 py-1.5 text-xs text-white hover:bg-blue-600 rounded-lg cursor-pointer">My Profile</div>
          </div>
        );
        break;
      }
      case "dropdown-chakra": {
        if (label === "Basic Menu") return (
          <div className="relative">
            <button onClick={toggle} className="bg-blue-500 hover:bg-blue-600 text-white text-xs font-semibold px-3 py-1.5 rounded inline-flex items-center gap-1">Actions <ChevronDown className="h-3 w-3" /></button>
            {isOpen && (
              <div className={overlayBase}>
                <div className="px-2 py-1 text-xs text-white hover:bg-white/10 rounded cursor-pointer">Download</div>
                <div className="px-2 py-1 text-xs text-white hover:bg-white/10 rounded cursor-pointer">Create a Copy</div>
                <div className="h-[1px] bg-border my-1" />
                <div className="px-2 py-1 text-xs text-white hover:bg-white/10 rounded cursor-pointer">Delete</div>
              </div>
            )}
          </div>
        );
        if (label === "With Icon & Command") return (
          <div className="relative">
            <button onClick={toggle} className="bg-blue-500 hover:bg-blue-600 text-white text-xs font-semibold px-3 py-1.5 rounded inline-flex items-center gap-1">File <ChevronDown className="h-3 w-3" /></button>
            {isOpen && (
              <div className={`${overlayBase} w-48`}>
                <div className="px-2 py-1 text-xs text-white hover:bg-white/10 rounded cursor-pointer flex justify-between items-center">
                  <span className="flex items-center gap-2"><Plus className="h-3.5 w-3.5 text-muted-foreground" /> New Tab</span>
                  <span className="text-[9px] text-muted-foreground">⌘N</span>
                </div>
              </div>
            )}
          </div>
        );
        break;
      }
      case "dropdown-mui": {
        if (label === "Anchor Menu") return (
          <div className="relative">
            <button onClick={toggle} className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium uppercase tracking-wider px-3 py-1.5 rounded shadow">Open Menu</button>
            {isOpen && (
              <div className={`${overlayBase} rounded shadow-md`}>
                <div className="px-4 py-2 text-xs text-white hover:bg-white/5 cursor-pointer">Profile</div>
                <div className="px-4 py-2 text-xs text-white hover:bg-white/5 cursor-pointer">Logout</div>
              </div>
            )}
          </div>
        );
        if (label === "Selected Item") return (
          <div className={overlayBase}>
            <div className="px-4 py-2 text-xs text-blue-500 bg-blue-500/10 font-semibold cursor-pointer">Profile</div>
          </div>
        );
        break;
      }
      case "dropdown-downshift": {
        if (label === "useSelect Hook") return (
          <div className="border border-border rounded px-3 py-1.5 text-xs text-white w-44 flex justify-between items-center cursor-pointer hover:border-accent">
            <span>Select Color</span>
            <ChevronDown className="h-3 w-3 text-muted-foreground" />
          </div>
        );
        break;
      }
      case "dropdown-cmdk": {
        if (label === "Search Portal" || label === "Search Palette") return (
          <div className="border border-border bg-secondary/50 rounded-lg p-2 w-48 font-mono text-[10px] flex flex-col gap-1.5">
            <div className="flex items-center gap-1.5 border-b border-border pb-1">
              <Search className="h-3 w-3 text-muted-foreground" />
              <input type="text" className="bg-transparent border-0 p-0 text-[10px] focus:outline-none w-full text-white" placeholder="Search..." />
            </div>
            <div className="text-[9px] text-muted-foreground uppercase font-bold">Settings</div>
            <div className="px-1.5 py-0.5 rounded text-white bg-white/5 hover:bg-white/10 cursor-pointer">Profile</div>
            <div className="px-1.5 py-0.5 rounded text-white hover:bg-white/10 cursor-pointer">Billing</div>
          </div>
        );
        break;
      }
    }

    return (
      <div className="border border-border rounded px-3 py-1.5 text-xs text-muted-foreground cursor-pointer">
        Dropdown Preview
      </div>
    );
  };

  return (
    <div className="bg-card border border-border rounded-2xl p-6 relative overflow-hidden transition-all duration-300 hover:border-accent/40 flex flex-col gap-6" id={`dropdown-library-${lib.id}-root`}>
      {/* Decorative blur */}
      <div className="absolute -right-16 -top-16 w-40 h-40 bg-accent/5 rounded-full blur-3xl pointer-events-none" id={`dropdown-library-${lib.id}-blur`} />

      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start gap-4" id={`dropdown-library-${lib.id}-header`}>
        <div id={`dropdown-library-${lib.id}-header-text`}>
          <div className="flex items-center gap-2.5 mb-1" id={`dropdown-library-${lib.id}-title-row`}>
            <h2 className="text-xl font-bold text-white" id={`dropdown-library-${lib.id}-title`}>{lib.name}</h2>
            <span className="px-2 py-0.5 rounded-full bg-cyan-500/15 border border-cyan-500/25 text-cyan-400 text-[10px] font-semibold uppercase tracking-wider" id={`dropdown-library-${lib.id}-badge`}>
              Dropdown
            </span>
          </div>
          <p className="text-sm text-muted-foreground max-w-lg" id={`dropdown-library-${lib.id}-description`}>{lib.description}</p>
        </div>
        <a
          id={`dropdown-library-${lib.id}-website-link`}
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
      <div className="space-y-2" id={`dropdown-library-${lib.id}-install-section`}>
        <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider" id={`dropdown-library-${lib.id}-install-label`}>
          <Terminal className="h-3.5 w-3.5" />
          Install
        </div>
        <div className="flex items-center gap-2 bg-secondary/60 border border-border rounded-lg px-4 py-2.5" id={`dropdown-library-${lib.id}-install-box`}>
          <code className="flex-1 text-sm font-mono text-emerald-400 break-all" id={`dropdown-library-${lib.id}-install-code`}>{lib.installCommand}</code>
          <CopyButton text={lib.installCommand} id={`dropdown-library-${lib.id}-install-copy`} />
        </div>
      </div>

      {/* Import statement */}
      <div className="space-y-2" id={`dropdown-library-${lib.id}-import-section`}>
        <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider" id={`dropdown-library-${lib.id}-import-label`}>
          <Code2 className="h-3.5 w-3.5" />
          Import
        </div>
        <div className="flex items-start gap-2 bg-secondary/60 border border-border rounded-lg px-4 py-2.5" id={`dropdown-library-${lib.id}-import-box`}>
          <pre className="flex-1 text-sm font-mono text-accent whitespace-pre-wrap break-all leading-relaxed" id={`dropdown-library-${lib.id}-import-code`}>{lib.importStatement}</pre>
          <CopyButton text={lib.importStatement} id={`dropdown-library-${lib.id}-import-copy`} />
        </div>
      </div>

      {/* Provider setup (if applicable) */}
      {lib.providerSetup && (
        <div className="space-y-2" id={`dropdown-library-${lib.id}-provider-section`}>
          <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider" id={`dropdown-library-${lib.id}-provider-label`}>
            <Code2 className="h-3.5 w-3.5" />
            Provider Setup
          </div>
          <div className="flex items-start gap-2 bg-amber-500/5 border border-amber-500/20 rounded-lg px-4 py-2.5" id={`dropdown-library-${lib.id}-provider-box`}>
            <pre className="flex-1 text-sm font-mono text-amber-300/80 whitespace-pre-wrap break-all leading-relaxed" id={`dropdown-library-${lib.id}-provider-code`}>{lib.providerSetup}</pre>
            <CopyButton text={lib.providerSetup} id={`dropdown-library-${lib.id}-provider-copy`} />
          </div>
        </div>
      )}

      {/* Examples Table */}
      <div className="space-y-3" id={`dropdown-library-${lib.id}-examples-section`}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3" id={`dropdown-library-${lib.id}-examples-header`}>
          <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider" id={`dropdown-library-${lib.id}-examples-label`}>
            Examples &amp; Variants ({filteredExamples.length})
          </div>
          <input
            id={`dropdown-library-${lib.id}-filter-input`}
            type="text"
            placeholder="Filter examples..."
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
            className="w-full sm:w-48 bg-secondary border border-border text-xs rounded-lg px-3 py-1.5 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent text-white placeholder-muted-foreground/60 transition-all"
          />
        </div>

        <div className="overflow-x-auto rounded-lg border border-border" id={`dropdown-library-${lib.id}-examples-table-container`}>
          <table className="w-full text-left border-collapse" id={`dropdown-library-${lib.id}-examples-table`}>
            <thead>
              <tr className="bg-secondary/60 border-b border-border text-[11px] font-semibold text-muted-foreground uppercase tracking-wider" id={`dropdown-library-${lib.id}-table-header`}>
                <th className="px-4 py-3 w-[15%]" id={`dropdown-library-${lib.id}-th-variant`}>Variant</th>
                <th className="px-4 py-3 w-[20%]" id={`dropdown-library-${lib.id}-th-desc`}>Description</th>
                <th className="px-4 py-3 w-[22%]" id={`dropdown-library-${lib.id}-th-preview`}>Visual Preview</th>
                <th className="px-4 py-3 w-[38%]" id={`dropdown-library-${lib.id}-th-code`}>Component Code</th>
                <th className="px-4 py-3 w-[5%] text-center" id={`dropdown-library-${lib.id}-th-copy`}>Copy</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/50" id={`dropdown-library-${lib.id}-table-body`}>
              {filteredExamples.length === 0 ? (
                <tr id={`dropdown-library-${lib.id}-no-results`}>
                  <td colSpan={5} className="px-4 py-6 text-center text-sm text-muted-foreground" id={`dropdown-library-${lib.id}-no-results-cell`}>
                    No matching examples
                  </td>
                </tr>
              ) : (
                filteredExamples.map((ex, i) => (
                  <tr
                    key={ex.label}
                    className="hover:bg-secondary/25 transition-colors group"
                    id={`dropdown-library-${lib.id}-row-${i}`}
                  >
                    <td className="px-4 py-3 font-medium text-sm text-white" id={`dropdown-library-${lib.id}-label-${i}`}>
                      {ex.label}
                    </td>
                    <td className="px-4 py-3 text-xs text-muted-foreground" id={`dropdown-library-${lib.id}-desc-${i}`}>
                      {ex.description}
                    </td>
                    <td className="px-4 py-3" id={`dropdown-library-${lib.id}-preview-${i}`}>
                      <div className="flex items-center min-h-[40px] py-1" id={`dropdown-library-${lib.id}-preview-container-${i}`}>
                        {renderDropdownPreview(lib.id, ex.label, i)}
                      </div>
                    </td>
                    <td className="px-4 py-3" id={`dropdown-library-${lib.id}-code-${i}`}>
                      <pre className="text-xs font-mono text-accent bg-secondary/40 px-2.5 py-1.5 rounded border border-border/50 whitespace-pre-wrap break-all leading-relaxed select-all" id={`dropdown-library-${lib.id}-pre-${i}`}>
                        {ex.code}
                      </pre>
                    </td>
                    <td className="px-4 py-3 text-center" id={`dropdown-library-${lib.id}-action-${i}`}>
                      <CopyButton text={ex.code} id={`dropdown-library-${lib.id}-copy-${i}`} />
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-2 border-t border-border/50 text-[10px] text-muted-foreground font-mono flex justify-between items-center" id={`dropdown-library-${lib.id}-footer`}>
        <span id={`dropdown-library-${lib.id}-footer-count`}>{lib.examples.length} examples across {lib.name}</span>
        <a href={lib.website} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" id={`dropdown-library-${lib.id}-footer-link`}>
          {lib.website}
        </a>
      </div>
    </div>
  );
}
