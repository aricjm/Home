"use client";

import React, { useState } from "react";
import * as LucideIcons from "lucide-react";
import * as HeroIcons from "@heroicons/react/24/outline";
import * as TablerIcons from "@tabler/icons-react";
import * as PhosphorIcons from "@phosphor-icons/react";
import * as RadixIcons from "@radix-ui/react-icons";
import * as RemixIcons from "react-icons/ri";
import * as BootstrapIcons from "react-bootstrap-icons";
import * as MDIcons from "react-icons/md";
import * as IconoirIcons from "iconoir-react";
import * as FAIcons from "react-icons/fa";
import * as IconParkIcons from "@icon-park/react";
import { CUSTOM_SVGS } from "./customSVGs";
import { Search, Copy, Check, Sparkles } from "lucide-react";

// Helper to extract inner SVG paths for React rendering
const getInnerSvg = (raw: string): string => {
  const match = raw.match(/<svg[^>]*>([\s\S]*)<\/svg>/i);
  return match ? match[1] : raw;
};

class SafeErrorBoundary extends React.Component<
  { iconName: string; children: React.ReactNode; fallback: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error(`Failed to render icon "${this.props.iconName}":`, error, errorInfo);
  }

  componentDidUpdate(prevProps: any) {
    if (prevProps.iconName !== this.props.iconName) {
      this.setState({ hasError: false });
    }
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

const IconRenderer = ({ icon }: { icon: typeof ALL_ICONS_COMBINED[0] }) => {
  if (icon.library === "Custom SVG") {
    const record = CUSTOM_SVGS[icon.name];
    if (!record) return null;
    return record.draw({ className: "h-5 w-5 text-white" });
  }

  const IconComp = icon.component;
  if (!IconComp) return null;

  if (icon.library === "Icon Park") {
    return <IconComp size={20} />;
  }

  return <IconComp className="h-5 w-5 text-white" size={20} />;
};

// 1. Lucide
const ALL_LUCIDE = Object.keys(LucideIcons).filter(
  (name) => /^[A-Z]/.test(name) && name !== "LucideIcon" && typeof (LucideIcons as any)[name] === "object"
).map(name => ({
  key: `lucide-${name}`,
  name,
  library: "Lucide",
  package: "lucide-react",
  component: (LucideIcons as any)[name],
  type: "object"
}));

// 2. Custom
const ALL_CUSTOM = Object.keys(CUSTOM_SVGS).map(name => ({
  key: `custom-${name}`,
  name,
  library: "Custom SVG",
  package: "Custom",
  component: null,
  type: "svg"
}));

// 3. Heroicons
const ALL_HERO = Object.keys(HeroIcons).filter(
  (name) => name.endsWith("Icon") && typeof (HeroIcons as any)[name] === "object"
).map(name => ({
  key: `hero-${name}`,
  name,
  library: "Heroicons",
  package: "@heroicons/react",
  component: (HeroIcons as any)[name],
  type: "object"
}));

// 4. Tabler
const ALL_TABLER = Object.keys(TablerIcons).filter(
  (name) => /^[A-Z]/.test(name) && typeof (TablerIcons as any)[name] === "object"
).map(name => ({
  key: `tabler-${name}`,
  name,
  library: "Tabler",
  package: "@tabler/icons-react",
  component: (TablerIcons as any)[name],
  type: "object"
}));

// 5. Phosphor
const ALL_PHOSPHOR = Object.keys(PhosphorIcons).filter(
  (name) => /^[A-Z]/.test(name) && typeof (PhosphorIcons as any)[name] === "object"
).map(name => ({
  key: `phosphor-${name}`,
  name,
  library: "Phosphor",
  package: "@phosphor-icons/react",
  component: (PhosphorIcons as any)[name],
  type: "object"
}));

// 6. Radix
const ALL_RADIX = Object.keys(RadixIcons).filter(
  (name) => /^[A-Z]/.test(name) && typeof (RadixIcons as any)[name] === "object"
).map(name => ({
  key: `radix-${name}`,
  name,
  library: "Radix UI",
  package: "@radix-ui/react-icons",
  component: (RadixIcons as any)[name],
  type: "object"
}));

// 7. Remix
const ALL_REMIX = Object.keys(RemixIcons).filter(
  (name) => /^[A-Z]/.test(name) && typeof (RemixIcons as any)[name] === "function"
).map(name => ({
  key: `remix-${name}`,
  name,
  library: "Remix Icons",
  package: "react-icons/ri",
  component: (RemixIcons as any)[name],
  type: "function"
}));

// 8. Bootstrap
const ALL_BOOTSTRAP = Object.keys(BootstrapIcons).filter(
  (name) => /^[A-Z]/.test(name) && typeof (BootstrapIcons as any)[name] === "object"
).map(name => ({
  key: `bootstrap-${name}`,
  name,
  library: "Bootstrap",
  package: "react-bootstrap-icons",
  component: (BootstrapIcons as any)[name],
  type: "object"
}));

// 9. Material
const ALL_MATERIAL = Object.keys(MDIcons).filter(
  (name) => /^[A-Z]/.test(name) && typeof (MDIcons as any)[name] === "function"
).map(name => ({
  key: `material-${name}`,
  name,
  library: "Material Design",
  package: "react-icons/md",
  component: (MDIcons as any)[name],
  type: "function"
}));

// 10. Iconoir
const ALL_ICONOIR = Object.keys(IconoirIcons).filter(
  (name) => /^[A-Z]/.test(name) && !name.startsWith("Iconoir") && typeof (IconoirIcons as any)[name] === "object"
).map(name => ({
  key: `iconoir-${name}`,
  name,
  library: "Iconoir",
  package: "iconoir-react",
  component: (IconoirIcons as any)[name],
  type: "object"
}));

// 11. React Icons (FA)
const ALL_FA = Object.keys(FAIcons).filter(
  (name) => /^[A-Z]/.test(name) && typeof (FAIcons as any)[name] === "function"
).map(name => ({
  key: `fa-${name}`,
  name,
  library: "React Icons (FA)",
  package: "react-icons/fa",
  component: (FAIcons as any)[name],
  type: "function"
}));

// 12. Icon Park
const ALL_ICONPARK = Object.keys(IconParkIcons).filter(
  (name) => /^[A-Z]/.test(name) && name !== "IconProvider" && name !== "IconWrapper" && name !== "DEFAULT_ICON_CONFIGS" && typeof (IconParkIcons as any)[name] === "function"
).map(name => ({
  key: `iconpark-${name}`,
  name,
  library: "Icon Park",
  package: "@icon-park/react",
  component: (IconParkIcons as any)[name],
  type: "function"
}));

// Combine all icon lists into a single master database
const ALL_ICONS_COMBINED = [
  ...ALL_LUCIDE,
  ...ALL_CUSTOM,
  ...ALL_HERO,
  ...ALL_TABLER,
  ...ALL_PHOSPHOR,
  ...ALL_RADIX,
  ...ALL_REMIX,
  ...ALL_BOOTSTRAP,
  ...ALL_MATERIAL,
  ...ALL_ICONOIR,
  ...ALL_FA,
  ...ALL_ICONPARK
];

export default function AllIconLibraryWidget() {
  const [filterText, setFilterText] = useState("");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [libraryFilter, setLibraryFilter] = useState("all");

  const ITEMS_PER_PAGE = 100;

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterText(e.target.value);
    setCurrentPage(1);
  };

  const handleLibraryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLibraryFilter(e.target.value);
    setCurrentPage(1);
  };

  // Filter combined master list by search text and library type
  const filteredIcons = ALL_ICONS_COMBINED.filter((icon) => {
    const matchesSearch = icon.name.toLowerCase().includes(filterText.toLowerCase());
    const matchesLibrary = libraryFilter === "all" || icon.library === libraryFilter;
    return matchesSearch && matchesLibrary;
  });

  // Paginate list
  const totalPages = Math.ceil(filteredIcons.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedIcons = filteredIcons.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const getCodeSnippet = (icon: typeof ALL_ICONS_COMBINED[0]) => {
    if (icon.library === "Custom SVG") {
      const record = CUSTOM_SVGS[icon.name];
      return record ? record.raw : `<svg />`;
    }
    return `import { ${icon.name} } from "${icon.package}";`;
  };

  // Extract list of all libraries for dropdown filter selector
  const librariesList = Array.from(new Set(ALL_ICONS_COMBINED.map((i) => i.library))).sort();

  return (
    <div className="bg-card border border-border rounded-2xl p-6 relative overflow-hidden transition-all duration-300 hover:border-accent/40 flex flex-col gap-6" id="all-icons-library-root">
      {/* Decorative blur */}
      <div className="absolute -right-16 -top-16 w-40 h-40 bg-accent/5 rounded-full blur-3xl pointer-events-none" id="all-icons-library-blur" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start gap-4" id="all-icons-library-header">
        <div id="all-icons-library-header-text">
          <div className="flex items-center gap-2.5 mb-1" id="all-icons-library-title-row">
            <h2 className="text-xl font-bold text-white" id="all-icons-library-title">All Icons</h2>
            <span className="px-2 py-0.5 rounded-full bg-indigo-500/15 border border-indigo-500/25 text-indigo-400 text-[10px] font-semibold uppercase tracking-wider animate-pulse" id="all-icons-library-badge">
              Master Index
            </span>
          </div>
          <p className="text-sm text-muted-foreground max-w-lg" id="all-icons-library-description">
            A combined directory indexing {ALL_ICONS_COMBINED.length.toLocaleString()} icons across all 12 supported developers and custom libraries.
          </p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4" id="all-icons-library-controls">
        <div className="relative flex-1" id="all-icons-library-search-box">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            id="all-icons-library-search-input"
            type="text"
            placeholder="Search all icons..."
            value={filterText}
            onChange={handleFilterChange}
            className="w-full bg-secondary border border-border rounded-xl pl-9 pr-4 py-2.5 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent text-white placeholder-muted-foreground/60 transition-all"
          />
        </div>
        <div className="flex items-center gap-2" id="all-icons-library-select-box">
          <label className="text-xs text-muted-foreground font-semibold" htmlFor="all-icons-library-select">Library:</label>
          <select
            id="all-icons-library-select"
            value={libraryFilter}
            onChange={handleLibraryChange}
            className="bg-secondary border border-border rounded-xl px-3 py-2.5 text-xs focus:outline-none focus:border-accent text-white transition-all cursor-pointer min-w-[140px]"
          >
            <option value="all">All Libraries ({ALL_ICONS_COMBINED.length})</option>
            {librariesList.map((libName) => {
              const count = ALL_ICONS_COMBINED.filter((i) => i.library === libName).length;
              return (
                <option key={libName} value={libName}>
                  {libName} ({count})
                </option>
              );
            })}
          </select>
        </div>
      </div>

      {/* Master Icons Table */}
      <div className="overflow-x-auto rounded-lg border border-border" id="all-icons-library-table-container">
        <table className="w-full text-left border-collapse" id="all-icons-library-table">
          <thead>
            <tr className="bg-secondary/60 border-b border-border text-[11px] font-semibold text-muted-foreground uppercase tracking-wider" id="all-icons-library-table-header">
              <th className="px-4 py-3.5 w-[12%]" id="all-icons-library-th-preview">Preview</th>
              <th className="px-4 py-3.5 w-[22%]" id="all-icons-library-th-name">Icon Name</th>
              <th className="px-4 py-3.5 w-[18%]" id="all-icons-library-th-library">Library</th>
              <th className="px-4 py-3.5" id="all-icons-library-th-code">Import Code / SVG</th>
              <th className="px-4 py-3.5 w-[48px] text-center" id="all-icons-library-th-copy">Copy</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/50" id="all-icons-library-table-body">
            {paginatedIcons.length === 0 ? (
              <tr id="all-icons-library-no-results">
                <td colSpan={5} className="px-4 py-6 text-center text-sm text-muted-foreground" id="all-icons-library-no-results-cell">
                  No matching icons found
                </td>
              </tr>
            ) : (
              paginatedIcons.map((icon) => {
                const codeSnippet = getCodeSnippet(icon);
                const isCopied = copiedId === icon.key;
                return (
                  <tr
                    key={icon.key}
                    className="hover:bg-secondary/25 transition-colors group"
                    id={`all-icons-library-row-${icon.key}`}
                  >
                    <td className="py-3 px-4" id={`all-icons-library-preview-cell-${icon.key}`}>
                      <div className="w-9 h-9 rounded-lg bg-secondary/50 border border-border flex items-center justify-center text-white" id={`all-icons-library-preview-box-${icon.key}`}>
                        <SafeErrorBoundary
                          iconName={icon.key}
                          fallback={<span className="text-[10px] text-red-500/80 font-mono">Err</span>}
                        >
                          <IconRenderer icon={icon} />
                        </SafeErrorBoundary>
                      </div>
                    </td>
                    <td className="py-3 px-4 font-medium text-sm text-white select-all" id={`all-icons-library-name-cell-${icon.key}`}>
                      {icon.name}
                    </td>
                    <td className="py-3 px-4" id={`all-icons-library-library-cell-${icon.key}`}>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-accent/10 border border-accent/20 text-accent" id={`all-icons-library-library-badge-${icon.key}`}>
                        {icon.library}
                      </span>
                    </td>
                    <td className="py-3 px-4" id={`all-icons-library-code-cell-${icon.key}`}>
                      <pre className="text-xs font-mono text-accent bg-secondary/40 px-2.5 py-1.5 rounded border border-border/50 whitespace-pre-wrap break-all leading-relaxed select-all" id={`all-icons-library-pre-${icon.key}`}>
                        {codeSnippet}
                      </pre>
                    </td>
                    <td className="py-3 px-4 text-center" id={`all-icons-library-action-cell-${icon.key}`}>
                      <button
                        id={`all-icons-library-copy-btn-${icon.key}`}
                        onClick={() => handleCopy(codeSnippet, icon.key)}
                        className={`p-1.5 rounded-md border transition-all ${
                          isCopied
                            ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                            : "bg-secondary hover:bg-muted border-border text-muted-foreground hover:text-white"
                        }`}
                        title="Copy code to clipboard"
                      >
                        {isCopied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
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
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2" id="all-icons-library-pagination">
          <div className="text-xs text-muted-foreground font-mono" id="all-icons-library-pagination-info">
            Showing {startIndex + 1} - {Math.min(startIndex + ITEMS_PER_PAGE, filteredIcons.length)} of{" "}
            {filteredIcons.length.toLocaleString()} matching icons (Total: {ALL_ICONS_COMBINED.length.toLocaleString()})
          </div>
          <div className="flex items-center gap-1.5" id="all-icons-library-pagination-buttons">
            <button
              id="all-icons-library-prev-page-btn"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              className="px-3 py-1.5 rounded-lg border border-border bg-secondary hover:bg-muted text-xs text-white disabled:opacity-50 disabled:pointer-events-none transition-colors"
            >
              Previous
            </button>
            <span className="text-xs text-white font-semibold px-2" id="all-icons-library-page-indicator">
              Page {currentPage} of {totalPages}
            </span>
            <button
              id="all-icons-library-next-page-btn"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              className="px-3 py-1.5 rounded-lg border border-border bg-secondary hover:bg-muted text-xs text-white disabled:opacity-50 disabled:pointer-events-none transition-colors"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
