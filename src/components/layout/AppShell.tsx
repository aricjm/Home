"use client";

import React, { useState } from "react";
import {
  LayoutDashboard,
  Mail,
  Calendar,
  ListTodo,
  Settings,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Menu,
  X,
  Bell,
  Search,
  CloudRain,
  Trophy,
  Link2,
  FileText,
  User,
  LogOut,
  Sparkles,
  Image as ImageIcon,
  Library,
  Layers,
  Grid,
  Bookmark,
  Zap,
  LayoutGrid,
  Circle,
  Hexagon,
  Atom,
  Trees,
  Package,
  Sliders,
  ToggleLeft,
  Disc,
  Database,
  Apple
} from "lucide-react";

// Sub-components to be created
import { RiDropdownList, RiRadioButtonLine } from "react-icons/ri";
import { BsToggleOn } from "react-icons/bs";
import { InputField, MouseButtonLeft } from "iconoir-react";
import { IconLayoutSidebarRightExpand, IconLayoutSidebarLeftExpand } from "@tabler/icons-react";
import WeatherWidget from "../widgets/WeatherWidget";
import SportsWidget from "../widgets/SportsWidget";
import GmailWidget from "../widgets/GmailWidget";
import CalendarWidget from "../widgets/CalendarWidget";
import QuickLinks from "../widgets/QuickLinks";
import TrackerWidget from "../widgets/TrackerWidget";
import NotesWidget from "../widgets/NotesWidget";
import APISettings from "../widgets/APISettings";
import LucideIconLibraryWidget from "../widgets/LucideIconLibraryWidget";
import SVGIconLibraryWidget from "../widgets/SVGIconLibraryWidget";
import HeroiconsIconLibraryWidget from "../widgets/HeroiconsIconLibraryWidget";
import TablerIconLibraryWidget from "../widgets/TablerIconLibraryWidget";
import PhosphorIconLibraryWidget from "../widgets/PhosphorIconLibraryWidget";
import RadixIconLibraryWidget from "../widgets/RadixIconLibraryWidget";
import RemixIconLibraryWidget from "../widgets/RemixIconLibraryWidget";
import BootstrapIconLibraryWidget from "../widgets/BootstrapIconLibraryWidget";
import MaterialIconLibraryWidget from "../widgets/MaterialIconLibraryWidget";
import IconoirIconLibraryWidget from "../widgets/IconoirIconLibraryWidget";
import ReactIconsLibraryWidget from "../widgets/ReactIconsLibraryWidget";
import IconParkLibraryWidget from "../widgets/IconParkLibraryWidget";
import ButtonLibraryWidget from "../widgets/ButtonLibraryWidget";
import InputLibraryWidget from "../widgets/InputLibraryWidget";
import DropdownLibraryWidget from "../widgets/DropdownLibraryWidget";
import ToggleLibraryWidget from "../widgets/ToggleLibraryWidget";
import RadioLibraryWidget from "../widgets/RadioLibraryWidget";
import AllIconLibraryWidget from "../widgets/AllIconLibraryWidget";
import MySportsScheduleWidget from "../widgets/MySportsScheduleWidget";
import PgaLeaderboardWidget from "../widgets/PgaLeaderboardWidget";

type TabType = "dashboard" | "communications" | "workspace" | "settings";

export default function AppShell() {
  const [activeTab, setActiveTab] = useState<TabType>("dashboard");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [workspaceTab, setWorkspaceTab] = useState<
    | "trackers" | "notes" | "all-icons"
    | "lucide-icons" | "svg-icons" | "heroicons" | "tabler-icons" | "phosphor-icons" | "radix-icons"
    | "remix-icons" | "bootstrap-icons" | "material-icons" | "iconoir" | "react-icons" | "icon-park"
    | "btn-shadcn" | "btn-mantine" | "btn-chakra" | "btn-mui" | "btn-antd" | "btn-nextui" | "btn-daisyui" | "btn-flowbite" | "btn-radix-btn" | "btn-headless"
    | "input-shadcn" | "input-mantine" | "input-chakra" | "input-heroui" | "input-mui" | "input-antd" | "input-react-aria" | "input-radix" | "input-headless" | "input-rhf"
    | "dropdown-shadcn" | "dropdown-react-select" | "dropdown-mantine" | "dropdown-headless" | "dropdown-radix" | "dropdown-heroui" | "dropdown-chakra" | "dropdown-mui" | "dropdown-downshift" | "dropdown-cmdk"
    | "toggle-shadcn" | "toggle-radix" | "toggle-mantine" | "toggle-heroui" | "toggle-chakra" | "toggle-mui" | "toggle-headless" | "toggle-react-aria" | "toggle-antd" | "toggle-daisyui"
    | "radio-shadcn" | "radio-radix" | "radio-mantine" | "radio-heroui" | "radio-chakra" | "radio-mui" | "radio-headless" | "radio-react-aria" | "radio-antd" | "radio-daisyui"
  >("trackers");
  const [iconLibrariesExpanded, setIconLibrariesExpanded] = useState(false);
  const [btnLibrariesExpanded, setBtnLibrariesExpanded] = useState(false);
  const [inputLibrariesExpanded, setInputLibrariesExpanded] = useState(false);
  const [dropdownLibrariesExpanded, setDropdownLibrariesExpanded] = useState(false);
  const [toggleLibrariesExpanded, setToggleLibrariesExpanded] = useState(false);
  const [radioLibrariesExpanded, setRadioLibrariesExpanded] = useState(false);

  const topNavItems = [
    { id: "dashboard" as TabType, name: "Dashboard", icon: LayoutDashboard },
    { id: "communications" as TabType, name: "Inbox & Calendar", icon: Mail },
    { id: "workspace" as TabType, name: "Workspace", icon: ListTodo },
    { id: "settings" as TabType, name: "Settings", icon: Settings },
  ];

  // Render sidebar contents dynamically based on active top tab
  const renderSidebarContent = () => {
    const containerClasses = sidebarCollapsed ? "flex flex-col items-center gap-2 p-2" : "flex flex-col gap-2 p-4";
    const buttonClasses = sidebarCollapsed
      ? "flex items-center justify-center rounded-lg p-2.5 text-foreground hover:bg-muted transition-all hover:text-accent shrink-0"
      : "flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-foreground hover:bg-muted transition-all";

    switch (activeTab) {
      case "dashboard":
        return (
          <div className={containerClasses} id="dashboard-sidebar-container">
            <button className={buttonClasses} id="dashboard-sidebar-weather-btn">
              <CloudRain className="h-4 w-4 text-accent shrink-0" />
              {!sidebarCollapsed && <span id="dashboard-sidebar-weather-text">Weather Panel</span>}
            </button>
            <button className={buttonClasses} id="dashboard-sidebar-sports-btn">
              <Trophy className="h-4 w-4 text-accent shrink-0" />
              {!sidebarCollapsed && <span id="dashboard-sidebar-sports-text">Sports Scores</span>}
            </button>
            <button className={buttonClasses} id="dashboard-sidebar-links-btn">
              <Link2 className="h-4 w-4 text-accent shrink-0" />
              {!sidebarCollapsed && <span id="dashboard-sidebar-links-text">Favorite Links</span>}
            </button>
          </div>
        );
      case "communications":
        return (
          <div className={containerClasses} id="communications-sidebar-container">
            <button className={buttonClasses} id="communications-sidebar-gmail-btn">
              <Mail className="h-4 w-4 text-accent shrink-0" />
              {!sidebarCollapsed && <span id="communications-sidebar-gmail-text">Gmail Inbox</span>}
            </button>
            <button className={buttonClasses} id="communications-sidebar-calendar-btn">
              <Calendar className="h-4 w-4 text-accent shrink-0" />
              {!sidebarCollapsed && <span id="communications-sidebar-calendar-text">Google Calendar</span>}
            </button>
          </div>
        );
      case "workspace":
        const getWorkspaceBtnClass = (tab: typeof workspaceTab) => {
          const isActive = workspaceTab === tab;
          if (sidebarCollapsed) {
            return `flex items-center justify-center rounded-lg p-2.5 shrink-0 transition-all ${isActive ? "bg-accent text-white shadow-md shadow-accent/20" : "text-foreground hover:bg-muted hover:text-accent"
              }`;
          }
          return `flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all ${isActive ? "bg-accent text-white font-medium shadow-md shadow-accent/20" : "text-foreground hover:bg-muted hover:text-accent"
            }`;
        };
        return (
          <div className={containerClasses} id="workspace-sidebar-container">
            <button
              id="workspace-sidebar-trackers-btn"
              onClick={() => setWorkspaceTab("trackers")}
              className={getWorkspaceBtnClass("trackers")}
            >
              <ListTodo className={`h-4 w-4 shrink-0 ${workspaceTab === "trackers" ? "text-white" : "text-accent"}`} />
              {!sidebarCollapsed && <span id="workspace-sidebar-trackers-text">Active Trackers</span>}
            </button>
            <button
              id="workspace-sidebar-notes-btn"
              onClick={() => setWorkspaceTab("notes")}
              className={getWorkspaceBtnClass("notes")}
            >
              <FileText className={`h-4 w-4 shrink-0 ${workspaceTab === "notes" ? "text-white" : "text-accent"}`} />
              {!sidebarCollapsed && <span id="workspace-sidebar-notes-text">Scratchpad Notes</span>}
            </button>

            {/* Icon Libraries accordion */}
            {!sidebarCollapsed ? (
              <div id="workspace-sidebar-icon-libraries-section">
                <button
                  id="workspace-sidebar-icon-libraries-toggle"
                  onClick={() => setIconLibrariesExpanded(prev => !prev)}
                  className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-foreground hover:bg-muted transition-all hover:text-accent"
                >
                  <Apple className={`h-4 w-4 shrink-0 ${iconLibrariesExpanded ? "text-accent" : "text-accent"}`} />
                  <span id="workspace-sidebar-icon-libraries-text" className="flex-1 text-left">Icon Libraries</span>
                  <ChevronDown
                    id="workspace-sidebar-icon-libraries-chevron"
                    className={`h-3.5 w-3.5 text-muted-foreground transition-transform duration-200 ${iconLibrariesExpanded ? "rotate-180" : ""}`}
                  />
                </button>

                <div
                  id="workspace-sidebar-icon-libraries-children"
                  className={`overflow-hidden transition-all duration-200 ${iconLibrariesExpanded ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <div className="ml-3 pl-3 border-l border-border/50 flex flex-col gap-0.5 mt-1 mb-1" id="workspace-sidebar-icon-libraries-list">
                    {([
                      { tab: "all-icons", label: "All Icons", icon: Database },
                      { tab: "lucide-icons", label: "Lucide", icon: Sparkles },
                      { tab: "svg-icons", label: "SVG Library", icon: ImageIcon },
                      { tab: "heroicons", label: "Heroicons", icon: Library },
                      { tab: "tabler-icons", label: "Tabler", icon: Layers },
                      { tab: "phosphor-icons", label: "Phosphor", icon: Grid },
                      { tab: "radix-icons", label: "Radix UI", icon: Bookmark },
                      { tab: "remix-icons", label: "Remix Icons", icon: Zap },
                      { tab: "bootstrap-icons", label: "Bootstrap", icon: LayoutGrid },
                      { tab: "material-icons", label: "Material", icon: Circle },
                      { tab: "iconoir", label: "Iconoir", icon: Hexagon },
                      { tab: "react-icons", label: "React Icons (FA)", icon: Atom },
                      { tab: "icon-park", label: "Icon Park", icon: Trees },
                    ] as const).map(({ tab, label, icon: Icon }) => {
                      const isActive = workspaceTab === tab;
                      return (
                        <button
                          key={tab}
                          id={`workspace-sidebar-${tab}-btn`}
                          onClick={() => setWorkspaceTab(tab)}
                          className={`flex w-full items-center gap-2.5 rounded-lg px-2.5 py-1.5 text-xs transition-all ${isActive
                            ? "bg-accent text-white font-medium shadow-md shadow-accent/20"
                            : "text-foreground hover:bg-muted hover:text-accent"
                            }`}
                        >
                          <Icon className={`h-3.5 w-3.5 shrink-0 ${isActive ? "text-white" : "text-accent"}`} />
                          <span id={`workspace-sidebar-${tab}-text`}>{label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            ) : (
              /* Collapsed: show a single compact icon that opens the first icon library */
              <button
                id="workspace-sidebar-icon-libraries-collapsed-btn"
                onClick={() => { setIconLibrariesExpanded(true); setWorkspaceTab("lucide-icons"); }}
                className={`flex items-center justify-center rounded-lg p-2.5 shrink-0 transition-all text-foreground hover:bg-muted hover:text-accent`}
                title="Icon Libraries"
              >
                <Apple className="h-4 w-4 text-accent" />
              </button>
            )}

            {/* Button Libraries accordion */}
            {!sidebarCollapsed ? (
              <div id="workspace-sidebar-btn-libraries-section">
                <button
                  id="workspace-sidebar-btn-libraries-toggle"
                  onClick={() => setBtnLibrariesExpanded(prev => !prev)}
                  className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-foreground hover:bg-muted transition-all hover:text-accent"
                >
                  <MouseButtonLeft className="h-4 w-4 shrink-0 text-accent" />
                  <span id="workspace-sidebar-btn-libraries-text" className="flex-1 text-left">Button Libraries</span>
                  <ChevronDown
                    id="workspace-sidebar-btn-libraries-chevron"
                    className={`h-3.5 w-3.5 text-muted-foreground transition-transform duration-200 ${btnLibrariesExpanded ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  id="workspace-sidebar-btn-libraries-children"
                  className={`overflow-hidden transition-all duration-200 ${btnLibrariesExpanded ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <div className="ml-3 pl-3 border-l border-border/50 flex flex-col gap-0.5 mt-1 mb-1" id="workspace-sidebar-btn-libraries-list">
                    {([
                      { tab: "btn-shadcn", label: "shadcn/ui" },
                      { tab: "btn-mantine", label: "Mantine" },
                      { tab: "btn-chakra", label: "Chakra UI" },
                      { tab: "btn-mui", label: "MUI" },
                      { tab: "btn-antd", label: "Ant Design" },
                      { tab: "btn-nextui", label: "NextUI / HeroUI" },
                      { tab: "btn-daisyui", label: "DaisyUI" },
                      { tab: "btn-flowbite", label: "Flowbite" },
                      { tab: "btn-radix-btn", label: "Radix UI" },
                      { tab: "btn-headless", label: "Headless UI" },
                    ] as const).map(({ tab, label }) => {
                      const isActive = workspaceTab === tab;
                      return (
                        <button
                          key={tab}
                          id={`workspace-sidebar-${tab}-btn`}
                          onClick={() => setWorkspaceTab(tab)}
                          className={`flex w-full items-center gap-2.5 rounded-lg px-2.5 py-1.5 text-xs transition-all ${isActive
                            ? "bg-accent text-white font-medium shadow-md shadow-accent/20"
                            : "text-foreground hover:bg-muted hover:text-accent"
                            }`}
                        >
                          <span className={`h-1.5 w-1.5 rounded-full shrink-0 ${isActive ? "bg-white" : "bg-accent"}`} />
                          <span id={`workspace-sidebar-${tab}-text`}>{label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            ) : (
              <button
                id="workspace-sidebar-btn-libraries-collapsed-btn"
                onClick={() => { setBtnLibrariesExpanded(true); setWorkspaceTab("btn-shadcn"); }}
                className="flex items-center justify-center rounded-lg p-2.5 shrink-0 transition-all text-foreground hover:bg-muted hover:text-accent"
                title="Button Libraries"
              >
                <MouseButtonLeft className="h-4 w-4 text-accent" />
              </button>
            )}

            {/* Input Libraries accordion */}
            {!sidebarCollapsed ? (
              <div id="workspace-sidebar-input-libraries-section">
                <button
                  id="workspace-sidebar-input-libraries-toggle"
                  onClick={() => setInputLibrariesExpanded(prev => !prev)}
                  className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-foreground hover:bg-muted transition-all hover:text-accent"
                >
                  <InputField className="h-4 w-4 shrink-0 text-accent" />
                  <span id="workspace-sidebar-input-libraries-text" className="flex-1 text-left">Input Libraries</span>
                  <ChevronDown
                    id="workspace-sidebar-input-libraries-chevron"
                    className={`h-3.5 w-3.5 text-muted-foreground transition-transform duration-200 ${inputLibrariesExpanded ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  id="workspace-sidebar-input-libraries-children"
                  className={`overflow-hidden transition-all duration-200 ${inputLibrariesExpanded ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <div className="ml-3 pl-3 border-l border-border/50 flex flex-col gap-0.5 mt-1 mb-1" id="workspace-sidebar-input-libraries-list">
                    {([
                      { tab: "input-shadcn", label: "shadcn/ui" },
                      { tab: "input-mantine", label: "Mantine" },
                      { tab: "input-chakra", label: "Chakra UI" },
                      { tab: "input-heroui", label: "HeroUI" },
                      { tab: "input-mui", label: "MUI" },
                      { tab: "input-antd", label: "Ant Design" },
                      { tab: "input-react-aria", label: "React Aria" },
                      { tab: "input-radix", label: "Radix UI" },
                      { tab: "input-headless", label: "Headless UI" },
                      { tab: "input-rhf", label: "React Hook Form" },
                    ] as const).map(({ tab, label }) => {
                      const isActive = workspaceTab === tab;
                      return (
                        <button
                          key={tab}
                          id={`workspace-sidebar-${tab}-btn`}
                          onClick={() => setWorkspaceTab(tab)}
                          className={`flex w-full items-center gap-2.5 rounded-lg px-2.5 py-1.5 text-xs transition-all ${isActive
                            ? "bg-accent text-white font-medium shadow-md shadow-accent/20"
                            : "text-foreground hover:bg-muted hover:text-accent"
                            }`}
                        >
                          <span className={`h-1.5 w-1.5 rounded-full shrink-0 ${isActive ? "bg-white" : "bg-accent"}`} />
                          <span id={`workspace-sidebar-${tab}-text`}>{label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            ) : (
              <button
                id="workspace-sidebar-input-libraries-collapsed-btn"
                onClick={() => { setInputLibrariesExpanded(true); setWorkspaceTab("input-shadcn"); }}
                className="flex items-center justify-center rounded-lg p-2.5 shrink-0 transition-all text-foreground hover:bg-muted hover:text-accent"
                title="Input Libraries"
              >
                <InputField className="h-4 w-4 text-accent" />
              </button>
            )}

            {/* Dropdown Libraries accordion */}
            {!sidebarCollapsed ? (
              <div id="workspace-sidebar-dropdown-libraries-section">
                <button
                  id="workspace-sidebar-dropdown-libraries-toggle"
                  onClick={() => setDropdownLibrariesExpanded(prev => !prev)}
                  className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-foreground hover:bg-muted transition-all hover:text-accent"
                >
                  <RiDropdownList className="h-4 w-4 shrink-0 text-accent" />
                  <span id="workspace-sidebar-dropdown-libraries-text" className="flex-1 text-left">Dropdown Libraries</span>
                  <ChevronDown
                    id="workspace-sidebar-dropdown-dropdown-chevron"
                    className={`h-3.5 w-3.5 text-muted-foreground transition-transform duration-200 ${dropdownLibrariesExpanded ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  id="workspace-sidebar-dropdown-libraries-children"
                  className={`overflow-hidden transition-all duration-200 ${dropdownLibrariesExpanded ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <div className="ml-3 pl-3 border-l border-border/50 flex flex-col gap-0.5 mt-1 mb-1" id="workspace-sidebar-dropdown-libraries-list">
                    {([
                      { tab: "dropdown-shadcn", label: "shadcn/ui" },
                      { tab: "dropdown-react-select", label: "React Select" },
                      { tab: "dropdown-mantine", label: "Mantine" },
                      { tab: "dropdown-headless", label: "Headless UI" },
                      { tab: "dropdown-radix", label: "Radix UI" },
                      { tab: "dropdown-heroui", label: "HeroUI" },
                      { tab: "dropdown-chakra", label: "Chakra UI" },
                      { tab: "dropdown-mui", label: "MUI" },
                      { tab: "dropdown-downshift", label: "Downshift" },
                      { tab: "dropdown-cmdk", label: "cmdk" },
                    ] as const).map(({ tab, label }) => {
                      const isActive = workspaceTab === tab;
                      return (
                        <button
                          key={tab}
                          id={`workspace-sidebar-${tab}-btn`}
                          onClick={() => setWorkspaceTab(tab)}
                          className={`flex w-full items-center gap-2.5 rounded-lg px-2.5 py-1.5 text-xs transition-all ${isActive
                            ? "bg-accent text-white font-medium shadow-md shadow-accent/20"
                            : "text-foreground hover:bg-muted hover:text-accent"
                            }`}
                        >
                          <span className={`h-1.5 w-1.5 rounded-full shrink-0 ${isActive ? "bg-white" : "bg-accent"}`} />
                          <span id={`workspace-sidebar-${tab}-text`}>{label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            ) : (
              <button
                id="workspace-sidebar-dropdown-libraries-collapsed-btn"
                onClick={() => { setDropdownLibrariesExpanded(true); setWorkspaceTab("dropdown-shadcn"); }}
                className="flex items-center justify-center rounded-lg p-2.5 shrink-0 transition-all text-foreground hover:bg-muted hover:text-accent"
                title="Dropdown Libraries"
              >
                <RiDropdownList className="h-4 w-4 text-accent" />
              </button>
            )}

            {/* Toggle Libraries accordion */}
            {!sidebarCollapsed ? (
              <div id="workspace-sidebar-toggle-libraries-section">
                <button
                  id="workspace-sidebar-toggle-libraries-toggle"
                  onClick={() => setToggleLibrariesExpanded(prev => !prev)}
                  className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-foreground hover:bg-muted transition-all hover:text-accent"
                >
                  <BsToggleOn className="h-4 w-4 shrink-0 text-accent" />
                  <span id="workspace-sidebar-toggle-libraries-text" className="flex-1 text-left">Toggle Libraries</span>
                  <ChevronDown
                    id="workspace-sidebar-toggle-toggle-chevron"
                    className={`h-3.5 w-3.5 text-muted-foreground transition-transform duration-200 ${toggleLibrariesExpanded ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  id="workspace-sidebar-toggle-libraries-children"
                  className={`overflow-hidden transition-all duration-200 ${toggleLibrariesExpanded ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <div className="ml-3 pl-3 border-l border-border/50 flex flex-col gap-0.5 mt-1 mb-1" id="workspace-sidebar-toggle-libraries-list">
                    {([
                      { tab: "toggle-shadcn", label: "shadcn/ui" },
                      { tab: "toggle-radix", label: "Radix UI" },
                      { tab: "toggle-mantine", label: "Mantine" },
                      { tab: "toggle-heroui", label: "HeroUI" },
                      { tab: "toggle-chakra", label: "Chakra UI" },
                      { tab: "toggle-mui", label: "MUI" },
                      { tab: "toggle-headless", label: "Headless UI" },
                      { tab: "toggle-react-aria", label: "React Aria" },
                      { tab: "toggle-antd", label: "Ant Design" },
                      { tab: "toggle-daisyui", label: "DaisyUI" },
                    ] as const).map(({ tab, label }) => {
                      const isActive = workspaceTab === tab;
                      return (
                        <button
                          key={tab}
                          id={`workspace-sidebar-${tab}-btn`}
                          onClick={() => setWorkspaceTab(tab)}
                          className={`flex w-full items-center gap-2.5 rounded-lg px-2.5 py-1.5 text-xs transition-all ${isActive
                            ? "bg-accent text-white font-medium shadow-md shadow-accent/20"
                            : "text-foreground hover:bg-muted hover:text-accent"
                            }`}
                        >
                          <span className={`h-1.5 w-1.5 rounded-full shrink-0 ${isActive ? "bg-white" : "bg-accent"}`} />
                          <span id={`workspace-sidebar-${tab}-text`}>{label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            ) : (
              <button
                id="workspace-sidebar-toggle-libraries-collapsed-btn"
                onClick={() => { setToggleLibrariesExpanded(true); setWorkspaceTab("toggle-shadcn"); }}
                className="flex items-center justify-center rounded-lg p-2.5 shrink-0 transition-all text-foreground hover:bg-muted hover:text-accent"
                title="Toggle Libraries"
              >
                <BsToggleOn className="h-4 w-4 text-accent" />
              </button>
            )}

            {/* Radio Button Libraries accordion */}
            {!sidebarCollapsed ? (
              <div id="workspace-sidebar-radio-libraries-section">
                <button
                  id="workspace-sidebar-radio-libraries-toggle"
                  onClick={() => setRadioLibrariesExpanded(prev => !prev)}
                  className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-foreground hover:bg-muted transition-all hover:text-accent"
                >
                  <RiRadioButtonLine className="h-4 w-4 shrink-0 text-accent" />
                  <span id="workspace-sidebar-radio-libraries-text" className="flex-1 text-left">Radio Button Libraries</span>
                  <ChevronDown
                    id="workspace-sidebar-radio-radio-chevron"
                    className={`h-3.5 w-3.5 text-muted-foreground transition-transform duration-200 ${radioLibrariesExpanded ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  id="workspace-sidebar-radio-libraries-children"
                  className={`overflow-hidden transition-all duration-200 ${radioLibrariesExpanded ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <div className="ml-3 pl-3 border-l border-border/50 flex flex-col gap-0.5 mt-1 mb-1" id="workspace-sidebar-radio-libraries-list">
                    {([
                      { tab: "radio-shadcn", label: "shadcn/ui" },
                      { tab: "radio-radix", label: "Radix UI" },
                      { tab: "radio-mantine", label: "Mantine" },
                      { tab: "radio-heroui", label: "HeroUI" },
                      { tab: "radio-chakra", label: "Chakra UI" },
                      { tab: "radio-mui", label: "MUI" },
                      { tab: "radio-headless", label: "Headless UI" },
                      { tab: "radio-react-aria", label: "React Aria" },
                      { tab: "radio-antd", label: "Ant Design" },
                      { tab: "radio-daisyui", label: "DaisyUI" },
                    ] as const).map(({ tab, label }) => {
                      const isActive = workspaceTab === tab;
                      return (
                        <button
                          key={tab}
                          id={`workspace-sidebar-${tab}-btn`}
                          onClick={() => setWorkspaceTab(tab)}
                          className={`flex w-full items-center gap-2.5 rounded-lg px-2.5 py-1.5 text-xs transition-all ${isActive
                            ? "bg-accent text-white font-medium shadow-md shadow-accent/20"
                            : "text-foreground hover:bg-muted hover:text-accent"
                            }`}
                        >
                          <span className={`h-1.5 w-1.5 rounded-full shrink-0 ${isActive ? "bg-white" : "bg-accent"}`} />
                          <span id={`workspace-sidebar-${tab}-text`}>{label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            ) : (
              <button
                id="workspace-sidebar-radio-libraries-collapsed-btn"
                onClick={() => { setRadioLibrariesExpanded(true); setWorkspaceTab("radio-shadcn"); }}
                className="flex items-center justify-center rounded-lg p-2.5 shrink-0 transition-all text-foreground hover:bg-muted hover:text-accent"
                title="Radio Button Libraries"
              >
                <RiRadioButtonLine className="h-4 w-4 text-accent" />
              </button>
            )}
          </div>
        );
      case "settings":
        return (
          <div className={containerClasses} id="settings-sidebar-container">
            <button className={buttonClasses} id="settings-sidebar-accounts-btn">
              <User className="h-4 w-4 text-accent shrink-0" />
              {!sidebarCollapsed && <span id="settings-sidebar-accounts-text">Connected Accounts</span>}
            </button>
            <button className={buttonClasses} id="settings-sidebar-api-btn">
              <Settings className="h-4 w-4 text-accent shrink-0" />
              {!sidebarCollapsed && <span id="settings-sidebar-api-text">API Connections</span>}
            </button>
          </div>
        );
    }
  };

  // Render main panel based on active top tab
  const renderMainContent = () => {
    switch (activeTab) {
      case "dashboard":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="dashboard-main-grid">
            <div className="lg:col-span-2 space-y-6" id="dashboard-main-left-column">
              <WeatherWidget />
              <SportsWidget />
            </div>
            <div className="space-y-6" id="dashboard-main-right-column">
              <MySportsScheduleWidget />
              <PgaLeaderboardWidget />
              <QuickLinks />
              <TrackerWidget />
            </div>
          </div>
        );
      case "communications":
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6" id="communications-main-grid">
            <GmailWidget />
            <CalendarWidget />
          </div>
        );
      case "workspace":
        if (workspaceTab === "all-icons") {
          return (
            <div className="grid grid-cols-1 gap-6" id="workspace-all-icons-grid">
              <AllIconLibraryWidget />
            </div>
          );
        }
        if (workspaceTab === "lucide-icons") {
          return (
            <div className="grid grid-cols-1 gap-6" id="workspace-lucide-grid">
              <LucideIconLibraryWidget />
            </div>
          );
        }
        if (workspaceTab === "svg-icons") {
          return (
            <div className="grid grid-cols-1 gap-6" id="workspace-svg-grid">
              <SVGIconLibraryWidget />
            </div>
          );
        }
        if (workspaceTab === "heroicons") {
          return (
            <div className="grid grid-cols-1 gap-6" id="workspace-heroicons-grid">
              <HeroiconsIconLibraryWidget />
            </div>
          );
        }
        if (workspaceTab === "tabler-icons") {
          return (
            <div className="grid grid-cols-1 gap-6" id="workspace-tabler-grid">
              <TablerIconLibraryWidget />
            </div>
          );
        }
        if (workspaceTab === "phosphor-icons") {
          return (
            <div className="grid grid-cols-1 gap-6" id="workspace-phosphor-grid">
              <PhosphorIconLibraryWidget />
            </div>
          );
        }
        if (workspaceTab === "radix-icons") {
          return (
            <div className="grid grid-cols-1 gap-6" id="workspace-radix-grid">
              <RadixIconLibraryWidget />
            </div>
          );
        }
        if (workspaceTab === "remix-icons") {
          return (
            <div className="grid grid-cols-1 gap-6" id="workspace-remix-grid">
              <RemixIconLibraryWidget />
            </div>
          );
        }
        if (workspaceTab === "bootstrap-icons") {
          return (
            <div className="grid grid-cols-1 gap-6" id="workspace-bootstrap-grid">
              <BootstrapIconLibraryWidget />
            </div>
          );
        }
        if (workspaceTab === "material-icons") {
          return (
            <div className="grid grid-cols-1 gap-6" id="workspace-material-grid">
              <MaterialIconLibraryWidget />
            </div>
          );
        }
        if (workspaceTab === "iconoir") {
          return (
            <div className="grid grid-cols-1 gap-6" id="workspace-iconoir-grid">
              <IconoirIconLibraryWidget />
            </div>
          );
        }
        if (workspaceTab === "react-icons") {
          return (
            <div className="grid grid-cols-1 gap-6" id="workspace-react-icons-grid">
              <ReactIconsLibraryWidget />
            </div>
          );
        }
        if (workspaceTab === "icon-park") {
          return (
            <div className="grid grid-cols-1 gap-6" id="workspace-iconpark-grid">
              <IconParkLibraryWidget />
            </div>
          );
        }
        if (workspaceTab.startsWith("btn-")) {
          return (
            <div className="grid grid-cols-1 gap-6" id={`workspace-${workspaceTab}-grid`}>
              <ButtonLibraryWidget libraryId={workspaceTab} />
            </div>
          );
        }
        if (workspaceTab.startsWith("input-")) {
          return (
            <div className="grid grid-cols-1 gap-6" id={`workspace-${workspaceTab}-grid`}>
              <InputLibraryWidget libraryId={workspaceTab} />
            </div>
          );
        }
        if (workspaceTab.startsWith("dropdown-")) {
          return (
            <div className="grid grid-cols-1 gap-6" id={`workspace-${workspaceTab}-grid`}>
              <DropdownLibraryWidget libraryId={workspaceTab} />
            </div>
          );
        }
        if (workspaceTab.startsWith("toggle-")) {
          return (
            <div className="grid grid-cols-1 gap-6" id={`workspace-${workspaceTab}-grid`}>
              <ToggleLibraryWidget libraryId={workspaceTab} />
            </div>
          );
        }
        if (workspaceTab.startsWith("radio-")) {
          return (
            <div className="grid grid-cols-1 gap-6" id={`workspace-${workspaceTab}-grid`}>
              <RadioLibraryWidget libraryId={workspaceTab} />
            </div>
          );
        }
        if (workspaceTab === "notes") {
          return (
            <div className="grid grid-cols-1 gap-6" id="workspace-notes-grid">
              <NotesWidget />
            </div>
          );
        }
        return (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6" id="workspace-trackers-grid">
            <div className="lg:col-span-2" id="workspace-trackers-left-column">
              <TrackerWidget isFullView />
            </div>
            <div id="workspace-trackers-right-column">
              <NotesWidget />
            </div>
          </div>
        );
      case "settings":
        return (
          <div className="max-w-4xl mx-auto space-y-6" id="settings-main-container">
            <APISettings />
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col" id="app-shell-root">
      {/* FIXED TOP NAVIGATION BAR */}
      <header className="sticky top-0 z-50 h-16 w-full bg-card/80 backdrop-blur-md border-b border-border flex items-center justify-between px-4 md:px-6" id="app-shell-header">
        <div className="flex items-center gap-4" id="app-shell-header-left">
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-muted rounded-lg text-muted-foreground hover:text-foreground"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          <div className="flex items-center gap-2" id="app-shell-brand-container">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-accent to-blue-400 flex items-center justify-center shadow-neon" id="app-shell-logo-box">
              <span className="text-white font-bold text-sm" id="app-shell-logo-text">H</span>
            </div>
            <span className="font-semibold text-lg tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent" id="app-shell-brand-text">
              HomeOS
            </span>
          </div>
        </div>

        {/* Top Navigation Tabs */}
        <nav className="hidden md:flex items-center gap-1 bg-secondary p-1 rounded-xl border border-border/50" id="app-shell-top-nav">
          {topNavItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                id={`top-nav-btn-${item.id}`}
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-all ${isActive
                  ? "bg-accent text-white shadow-md shadow-accent/20"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
              >
                <Icon className="h-4 w-4" />
                <span id={`top-nav-text-${item.id}`}>{item.name}</span>
              </button>
            );
          })}
        </nav>

        {/* Top Nav Right Action area */}
        <div className="flex items-center gap-3" id="app-shell-header-right">
          <div className="relative hidden sm:block" id="app-shell-search-container">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              id="app-shell-search-input"
              type="text"
              placeholder="Search..."
              className="bg-secondary border border-border text-sm rounded-lg pl-9 pr-4 py-1.5 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent w-48 lg:w-64 transition-all"
            />
          </div>

          <button className="p-2 hover:bg-muted rounded-lg text-muted-foreground hover:text-foreground relative" id="app-shell-notification-btn">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-accent animate-pulse" id="app-shell-notification-badge"></span>
          </button>

          <div className="w-px h-6 bg-border" id="app-shell-header-divider"></div>

          <div className="flex items-center gap-2" id="app-shell-user-profile">
            <div className="w-8 h-8 rounded-full bg-secondary border border-border flex items-center justify-center text-accent" id="app-shell-user-avatar">
              <User className="h-4 w-4" />
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE TOP NAV (Shown only on small screens) */}
      <div
        id="mobile-menu-nav-container"
        className={`md:hidden fixed inset-x-0 top-16 bg-card border-b border-border z-40 transition-all duration-300 transform ${mobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
          }`}
      >
        <nav className="grid grid-cols-4 gap-1 p-2 bg-secondary/50" id="mobile-menu-nav">
          {topNavItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                id={`mobile-nav-btn-${item.id}`}
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`flex flex-col items-center justify-center py-2 text-xs font-medium rounded-lg gap-1 transition-all ${isActive
                  ? "text-accent bg-accent/10"
                  : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                <Icon className="h-5 w-5" />
                <span id={`mobile-nav-text-${item.id}`}>{item.name.split(" ")[0]}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* MAIN CONTAINER WITH SIDEBAR AND CONTENT */}
      <div className="flex-1 flex overflow-hidden" id="app-shell-body-container">
        {/* COLLAPSIBLE SIDEBAR */}
        <aside
          id="app-shell-sidebar"
          className={`relative bg-card/40 border-r border-border flex flex-col transition-all duration-300 ${sidebarCollapsed ? "w-16" : "w-64"
            } hidden md:flex`}
        >
          {/* Sidebar Header / Toggle */}
          <div
            id="app-shell-sidebar-header"
            className={`p-4 border-b border-border/50 flex items-center ${sidebarCollapsed ? "justify-center" : "justify-start gap-2.5"
              } shrink-0`}
          >
            <button
              id="sidebar-collapse-btn"
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="p-1.5 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground shrink-0 transition-colors"
              aria-label="Toggle Sidebar"
            >
              {sidebarCollapsed ? <IconLayoutSidebarLeftExpand className="h-4 w-4" /> : <IconLayoutSidebarRightExpand className="h-4 w-4" />}
            </button>
            {!sidebarCollapsed && (
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground truncate select-none" id="sidebar-header-label">
                {activeTab === "dashboard" && "Quick Access"}
                {activeTab === "communications" && "Google Services"}
                {activeTab === "workspace" && "Trackers & Tools"}
                {activeTab === "settings" && "Configuration"}
              </span>
            )}
          </div>

          {/* Sidebar Content */}
          <div className="flex-1 overflow-y-auto" id="app-shell-sidebar-content">
            {renderSidebarContent()}
          </div>

          {/* Sidebar Footer */}
          <div className="p-4 border-t border-border flex items-center justify-between shrink-0" id="app-shell-sidebar-footer">
            {!sidebarCollapsed && (
              <span className="text-xs text-muted-foreground font-mono" id="sidebar-version-label">v1.0.0</span>
            )}
          </div>
        </aside>

        {/* MAIN DISPLAY AREA */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 bg-gradient-to-b from-background via-background to-secondary/30" id="app-shell-main-display">
          <div className="max-w-7xl mx-auto space-y-6" id="app-shell-main-container">
            {/* Page Header */}
            {/* <div className="flex items-center justify-between" id="app-shell-page-header">
              <div id="app-shell-page-title-box">
                <h1 className="text-2xl font-bold tracking-tight text-white capitalize" id="app-shell-page-title">
                  {activeTab}
                </h1>
                <p className="text-sm text-muted-foreground" id="app-shell-page-subtitle">
                  Overview of your personal control center.
                </p>
              </div>

              <div className="text-xs text-muted-foreground font-mono bg-secondary px-3 py-1.5 rounded-lg border border-border" id="app-shell-page-location-date">
                WAUKEE, IA &bull; {new Date().toLocaleDateString(undefined, { weekday: 'long', month: 'short', day: 'numeric' })}
              </div>
            </div> */}

            {/* Render Widgets dynamically based on Top Nav tab */}
            {renderMainContent()}
          </div>
        </main>
      </div>
    </div>
  );
}
