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
  Image as ImageIcon
} from "lucide-react";

// Sub-components to be created
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

type TabType = "dashboard" | "communications" | "workspace" | "settings";

export default function AppShell() {
  const [activeTab, setActiveTab] = useState<TabType>("dashboard");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [workspaceTab, setWorkspaceTab] = useState<"trackers" | "notes" | "lucide-icons" | "svg-icons">("trackers");

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
        const getWorkspaceBtnClass = (tab: "trackers" | "notes" | "lucide-icons" | "svg-icons") => {
          const isActive = workspaceTab === tab;
          if (sidebarCollapsed) {
            return `flex items-center justify-center rounded-lg p-2.5 shrink-0 transition-all ${
              isActive ? "bg-accent text-white shadow-md shadow-accent/20" : "text-foreground hover:bg-muted hover:text-accent"
            }`;
          }
          return `flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all ${
            isActive ? "bg-accent text-white font-medium shadow-md shadow-accent/20" : "text-foreground hover:bg-muted hover:text-accent"
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
            <button 
              id="workspace-sidebar-lucide-btn"
              onClick={() => setWorkspaceTab("lucide-icons")}
              className={getWorkspaceBtnClass("lucide-icons")}
            >
              <Sparkles className={`h-4 w-4 shrink-0 ${workspaceTab === "lucide-icons" ? "text-white" : "text-accent"}`} />
              {!sidebarCollapsed && <span id="workspace-sidebar-lucide-text">Lucide Icon Library</span>}
            </button>
            <button 
              id="workspace-sidebar-svg-btn"
              onClick={() => setWorkspaceTab("svg-icons")}
              className={getWorkspaceBtnClass("svg-icons")}
            >
              <ImageIcon className={`h-4 w-4 shrink-0 ${workspaceTab === "svg-icons" ? "text-white" : "text-accent"}`} />
              {!sidebarCollapsed && <span id="workspace-sidebar-svg-text">SVG Icon Library</span>}
            </button>
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
            className={`p-4 border-b border-border/50 flex items-center ${sidebarCollapsed ? "justify-center" : "justify-between gap-3"
            } shrink-0`}
          >
            <button
              id="sidebar-collapse-btn"
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="p-1.5 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground shrink-0 transition-colors"
              aria-label="Toggle Sidebar"
            >
              {sidebarCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
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
            <div className="flex items-center justify-between" id="app-shell-page-header">
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
            </div>

            {/* Render Widgets dynamically based on Top Nav tab */}
            {renderMainContent()}
          </div>
        </main>
      </div>
    </div>
  );
}
