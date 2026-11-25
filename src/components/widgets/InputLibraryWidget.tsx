"use client";

import React, { useState } from "react";
import { Copy, Check, ExternalLink, Terminal, Code2, Search, Mail, Eye, Phone, HelpCircle } from "lucide-react";
import { INPUT_LIBRARIES, getInputLibrary } from "@/data/inputLibraries";

function renderInputPreview(libraryId: string, label: string) {
  // Base classes for inputs
  const inputBase = "bg-transparent border border-border rounded-md px-3 py-1.5 text-sm text-white placeholder-muted-foreground/50 focus:outline-none focus:border-accent w-full max-w-[200px] transition-all";

  switch (libraryId) {
    case "input-shadcn": {
      if (label === "Text") return <input type="text" className={inputBase} placeholder="Enter text..." />;
      if (label === "Email") return <input type="email" className={inputBase} placeholder="you@example.com" />;
      if (label === "Password") return <input type="password" className={inputBase} placeholder="••••••••" />;
      if (label === "Number") return <input type="number" className={inputBase} placeholder="0" />;
      if (label === "File") return <input type="file" className="text-xs text-muted-foreground file:mr-3 file:py-1 file:px-2.5 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-accent/15 file:text-accent hover:file:bg-accent/25 max-w-[200px]" />;
      if (label === "Search") return <input type="search" className={inputBase} placeholder="Search..." />;
      if (label === "Disabled") return <input disabled className={`${inputBase} opacity-50 cursor-not-allowed`} placeholder="Disabled" />;
      if (label === "Read Only") return <input readOnly className={`${inputBase} cursor-default`} value="Read only value" />;
      if (label === "With Label") return (
        <div className="flex flex-col gap-1 w-full max-w-[200px]">
          <span className="text-xs font-semibold text-white">Email</span>
          <input type="email" className={inputBase} placeholder="Email" />
        </div>
      );
      if (label === "With Button") return (
        <div className="flex items-center gap-1.5 w-full max-w-[200px]">
          <input type="email" className={`${inputBase} flex-1`} placeholder="Email" />
          <button className="bg-white text-black text-xs font-semibold px-2.5 py-1.5 rounded-md hover:bg-gray-150">Subscribe</button>
        </div>
      );
      break;
    }
    case "input-mantine": {
      if (label === "TextInput") return (
        <div className="flex flex-col gap-0.5 w-full max-w-[200px]">
          <span className="text-xs text-white/90">Your name</span>
          <input type="text" className={inputBase} placeholder="Enter name" />
        </div>
      );
      if (label === "Required") return (
        <div className="flex flex-col gap-0.5 w-full max-w-[200px]">
          <span className="text-xs text-white/90">Email <span className="text-red-500">*</span></span>
          <input type="email" className={inputBase} placeholder="email@example.com" />
        </div>
      );
      if (label === "Description") return (
        <div className="flex flex-col gap-0.5 w-full max-w-[200px]">
          <span className="text-xs text-white/90">Username</span>
          <input type="text" className={inputBase} placeholder="johndoe" />
          <span className="text-[10px] text-muted-foreground">Only letters and numbers</span>
        </div>
      );
      if (label === "Error") return (
        <div className="flex flex-col gap-0.5 w-full max-w-[200px]">
          <span className="text-xs text-white/90">Email</span>
          <input type="email" className={`${inputBase} border-red-500 focus:border-red-500`} placeholder="email" />
          <span className="text-[10px] text-red-500">Invalid email address</span>
        </div>
      );
      if (label === "Disabled") return (
        <div className="flex flex-col gap-0.5 w-full max-w-[200px]">
          <span className="text-xs text-white/40">Disabled</span>
          <input disabled className={`${inputBase} opacity-50 cursor-not-allowed`} placeholder="Disabled" />
        </div>
      );
      if (label === "PasswordInput") return (
        <div className="flex flex-col gap-0.5 w-full max-w-[200px] relative">
          <span className="text-xs text-white/90">Password</span>
          <div className="relative">
            <input type="password" className={`${inputBase} pr-8`} placeholder="Your password" />
            <Eye className="h-4 w-4 text-muted-foreground absolute right-2.5 top-1/2 -translate-y-1/2 cursor-pointer" />
          </div>
        </div>
      );
      if (label === "NumberInput") return (
        <div className="flex flex-col gap-0.5 w-full max-w-[200px]">
          <span className="text-xs text-white/90">Age</span>
          <input type="number" className={inputBase} placeholder="Your age" min={0} max={120} />
        </div>
      );
      if (label === "Textarea") return (
        <div className="flex flex-col gap-0.5 w-full max-w-[200px]">
          <span className="text-xs text-white/90">Comment</span>
          <textarea className="bg-transparent border border-border rounded-md px-3 py-1 text-xs text-white placeholder-muted-foreground/50 w-full max-w-[200px] min-h-[50px]" placeholder="Your comment..."></textarea>
        </div>
      );
      if (label === "Variant: filled") return (
        <div className="flex flex-col gap-0.5 w-full max-w-[200px]">
          <span className="text-xs text-white/90">Filled</span>
          <input type="text" className="bg-white/5 border border-transparent rounded-md px-3 py-1.5 text-sm text-white placeholder-muted-foreground/50 focus:border-accent w-full max-w-[200px]" placeholder="Filled" />
        </div>
      );
      if (label === "Variant: unstyled") return (
        <div className="flex flex-col gap-0.5 w-full max-w-[200px]">
          <span className="text-xs text-white/90">Unstyled</span>
          <input type="text" className="bg-transparent border-0 rounded-none p-0 text-sm text-white placeholder-muted-foreground/50 w-full max-w-[200px]" placeholder="Unstyled" />
        </div>
      );
      if (label === "Size: xs") return <input type="text" className="bg-transparent border border-border rounded px-2 py-0.5 text-xs text-white placeholder-muted-foreground/50 w-full max-w-[200px]" placeholder="Extra small" />;
      if (label === "Size: xl") return <input type="text" className="bg-transparent border border-border rounded-xl px-4 py-2.5 text-base text-white placeholder-muted-foreground/50 w-full max-w-[200px]" placeholder="Extra large" />;
      if (label === "With Left Section") return (
        <div className="relative w-full max-w-[200px]">
          <Search className="h-4 w-4 text-muted-foreground absolute left-2.5 top-1/2 -translate-y-1/2" />
          <input type="text" className={`${inputBase} pl-8`} placeholder="Search..." />
        </div>
      );
      break;
    }
    case "input-chakra": {
      if (label === "Default") return <input type="text" className={inputBase} placeholder="Basic usage" />;
      if (label === "Variant: outline") return <input type="text" className={`${inputBase} border-blue-500`} placeholder="Outline" />;
      if (label === "Variant: flushed") return <input type="text" className="bg-transparent border-b border-border rounded-none px-0 py-1.5 text-sm text-white placeholder-muted-foreground/50 focus:border-blue-500 w-full max-w-[200px] outline-none" placeholder="Flushed" />;
      if (label === "Variant: filled") return <input type="text" className="bg-white/10 border-0 rounded-md px-3 py-1.5 text-sm text-white placeholder-muted-foreground/50 focus:bg-transparent focus:ring-1 focus:ring-blue-500 w-full max-w-[200px]" placeholder="Filled" />;
      if (label === "Variant: unstyled") return <input type="text" className="bg-transparent p-0 text-sm text-white focus:outline-none w-full max-w-[200px]" placeholder="Unstyled" />;
      if (label === "Size: xs") return <input type="text" className="bg-transparent border border-border rounded-sm px-2 py-0.5 text-xs text-white placeholder-muted-foreground/50 w-full max-w-[200px]" placeholder="XS" />;
      if (label === "Size: lg") return <input type="text" className="bg-transparent border border-border rounded-md px-4 py-2 text-base text-white placeholder-muted-foreground/50 w-full max-w-[200px]" placeholder="Large" />;
      if (label === "Disabled") return <input disabled className={`${inputBase} opacity-50 cursor-not-allowed`} placeholder="Disabled" />;
      if (label === "Read Only") return <input readOnly className={`${inputBase} cursor-default bg-white/5`} value="Read only" />;
      if (label === "Invalid") return <input type="text" className={`${inputBase} border-red-500 focus:border-red-500`} placeholder="Invalid input" />;
      if (label === "With Left Addon") return (
        <div className="flex rounded-md overflow-hidden max-w-[200px] border border-border">
          <span className="bg-secondary px-3 py-1 text-xs text-muted-foreground select-none flex items-center">https://</span>
          <input type="text" className="bg-transparent border-0 px-2 py-1 text-sm text-white focus:outline-none flex-1" placeholder="domain.com" />
        </div>
      );
      if (label === "With Left Icon") return (
        <div className="relative w-full max-w-[200px]">
          <Phone className="h-4 w-4 text-muted-foreground absolute left-2.5 top-1/2 -translate-y-1/2" />
          <input type="tel" className={`${inputBase} pl-8`} placeholder="Phone number" />
        </div>
      );
      if (label === "With FormControl") return (
        <div className="flex flex-col gap-1 w-full max-w-[200px]">
          <span className="text-xs font-semibold text-white">Email</span>
          <input type="email" className={`${inputBase} border-red-500`} placeholder="Email" />
          <span className="text-[10px] text-red-400">Email is required.</span>
        </div>
      );
      break;
    }
    case "input-heroui": {
      if (label === "Default") return (
        <div className="bg-secondary/40 border border-border rounded-xl p-2 w-full max-w-[200px] flex flex-col">
          <span className="text-[10px] text-muted-foreground font-semibold">Name</span>
          <input type="text" className="bg-transparent border-0 p-0 text-sm text-white focus:outline-none" placeholder="Enter your name" />
        </div>
      );
      if (label === "Email") return (
        <div className="bg-secondary/40 border border-border rounded-xl p-2 w-full max-w-[200px] flex flex-col">
          <span className="text-[10px] text-muted-foreground font-semibold">Email</span>
          <input type="email" className="bg-transparent border-0 p-0 text-sm text-white focus:outline-none" placeholder="you@example.com" />
        </div>
      );
      if (label === "Password") return (
        <div className="bg-secondary/40 border border-border rounded-xl p-2 w-full max-w-[200px] flex flex-col">
          <span className="text-[10px] text-muted-foreground font-semibold">Password</span>
          <input type="password" className="bg-transparent border-0 p-0 text-sm text-white focus:outline-none" placeholder="••••••••" />
        </div>
      );
      if (label === "Variant: bordered") return <input type="text" className="bg-transparent border-2 border-border focus:border-accent rounded-xl px-3 py-2 text-sm text-white w-full max-w-[200px] outline-none" placeholder="Bordered" />;
      if (label === "Variant: faded") return <input type="text" className="bg-secondary border border-border rounded-xl px-3 py-2 text-sm text-white w-full max-w-[200px] outline-none" placeholder="Faded" />;
      if (label === "Variant: underlined") return <input type="text" className="bg-transparent border-b-2 border-border focus:border-accent px-0 py-2 text-sm text-white w-full max-w-[200px] outline-none rounded-none" placeholder="Underlined" />;
      if (label === "Variant: flat") return <input type="text" className="bg-secondary/70 border-0 rounded-xl px-3 py-2.5 text-sm text-white w-full max-w-[200px] outline-none" placeholder="Flat" />;
      if (label === "Color: primary") return <input type="text" className="bg-transparent border-2 border-blue-500 focus:border-blue-600 rounded-xl px-3 py-2 text-sm text-white w-full max-w-[200px] outline-none" placeholder="Primary" />;
      if (label === "Color: success") return <input type="text" className="bg-transparent border-2 border-emerald-500 focus:border-emerald-600 rounded-xl px-3 py-2 text-sm text-white w-full max-w-[200px] outline-none" placeholder="Success" />;
      if (label === "Color: danger") return (
        <div className="flex flex-col gap-1 w-full max-w-[200px]">
          <input type="text" className="bg-transparent border-2 border-red-500 rounded-xl px-3 py-2 text-sm text-white w-full max-w-[200px] outline-none" placeholder="Danger" />
          <span className="text-[10px] text-red-400 px-1">Invalid input</span>
        </div>
      );
      if (label === "Required") return <input type="text" className="bg-transparent border border-border rounded-xl px-3 py-2 text-sm text-white w-full max-w-[200px] focus:border-accent outline-none" placeholder="Required field *" />;
      if (label === "Disabled") return <input disabled className="bg-transparent border border-border/30 rounded-xl px-3 py-2 text-sm text-white/30 w-full max-w-[200px] cursor-not-allowed" placeholder="Disabled" />;
      if (label === "Read Only") return <input readOnly className="bg-transparent border border-border rounded-xl px-3 py-2 text-sm text-white/70 w-full max-w-[200px]" value="Read only value" />;
      if (label === "Description") return (
        <div className="flex flex-col gap-1 w-full max-w-[200px]">
          <input type="email" className="bg-transparent border border-border rounded-xl px-3 py-2 text-sm text-white w-full max-w-[200px] outline-none focus:border-accent" placeholder="email@example.com" />
          <span className="text-[9px] text-muted-foreground px-1">We will never share your email</span>
        </div>
      );
      if (label === "Start Content") return (
        <div className="relative w-full max-w-[200px]">
          <Mail className="h-4 w-4 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
          <input type="text" className="bg-transparent border border-border rounded-xl pl-9 pr-3 py-2 text-sm text-white w-full max-w-[200px] outline-none focus:border-accent" placeholder="Enter email" />
        </div>
      );
      break;
    }
    case "input-mui": {
      if (label === "Standard") return (
        <div className="flex flex-col w-full max-w-[200px] border-b border-border focus-within:border-blue-500 py-1 transition-all">
          <span className="text-[10px] text-blue-500">Standard</span>
          <input type="text" className="bg-transparent border-0 p-0 text-sm text-white focus:outline-none" placeholder="Standard input" />
        </div>
      );
      if (label === "Outlined") return (
        <div className="relative w-full max-w-[200px] border border-border focus-within:border-blue-500 rounded px-3 py-1.5 transition-all">
          <span className="text-[9px] text-muted-foreground absolute -top-2.5 left-2 bg-card px-1 font-semibold">Outlined</span>
          <input type="text" className="bg-transparent border-0 p-0 text-sm text-white focus:outline-none w-full" placeholder="Outlined input" />
        </div>
      );
      if (label === "Filled") return (
        <div className="w-full max-w-[200px] bg-white/5 border-b border-border focus-within:border-blue-500 px-3 py-1.5 rounded-t transition-all">
          <span className="text-[10px] text-blue-500">Filled</span>
          <input type="text" className="bg-transparent border-0 p-0 text-sm text-white focus:outline-none w-full" placeholder="Filled input" />
        </div>
      );
      if (label === "Required") return <input type="text" className="bg-transparent border border-border rounded px-3 py-1.5 text-sm text-white placeholder-muted-foreground/50 w-full max-w-[200px] focus:border-blue-500 outline-none" placeholder="Required *" />;
      if (label === "Disabled") return <input disabled className="bg-white/5 border border-border/30 rounded px-3 py-1.5 text-sm text-white/30 w-full max-w-[200px] cursor-not-allowed" placeholder="Disabled" />;
      if (label === "Read Only") return <input readOnly className="bg-transparent border border-border rounded px-3 py-1.5 text-sm text-white/70 w-full max-w-[200px]" value="Read only" />;
      if (label === "Error") return (
        <div className="flex flex-col gap-1 w-full max-w-[200px]">
          <input type="text" className="bg-transparent border border-red-500 rounded px-3 py-1.5 text-sm text-white w-full max-w-[200px] outline-none" placeholder="Error" />
          <span className="text-[10px] text-red-500">Incorrect entry.</span>
        </div>
      );
      if (label === "Helper Text") return (
        <div className="flex flex-col gap-1 w-full max-w-[200px]">
          <input type="text" className={inputBase} placeholder="With helper" />
          <span className="text-[10px] text-muted-foreground">Some important text</span>
        </div>
      );
      if (label === "Password") return <input type="password" className={inputBase} placeholder="Password" />;
      if (label === "Number") return <input type="number" className={inputBase} placeholder="0" />;
      if (label === "Multiline") return <textarea rows={2} className="bg-transparent border border-border rounded px-3 py-1 text-sm text-white placeholder-muted-foreground/50 w-full max-w-[200px] focus:border-blue-500 outline-none" placeholder="Multiline"></textarea>;
      if (label === "Small") return <input type="text" className="bg-transparent border border-border rounded px-2.5 py-1 text-xs text-white w-full max-w-[200px] outline-none" placeholder="Small" />;
      if (label === "Full Width") return <input type="text" className={`${inputBase} w-full`} placeholder="Full Width" />;
      if (label === "Start Adornment") return (
        <div className="flex border border-border rounded overflow-hidden max-w-[200px] focus-within:border-blue-500">
          <span className="bg-white/5 px-2.5 py-1 text-sm text-muted-foreground">$</span>
          <input type="text" className="bg-transparent border-0 px-2 py-1 text-sm text-white focus:outline-none flex-1" placeholder="Amount" />
        </div>
      );
      if (label === "End Adornment") return (
        <div className="flex border border-border rounded overflow-hidden max-w-[200px] focus-within:border-blue-500">
          <input type="text" className="bg-transparent border-0 px-2 py-1 text-sm text-white focus:outline-none flex-1" placeholder="Weight" />
          <span className="bg-white/5 px-2.5 py-1 text-sm text-muted-foreground">kg</span>
        </div>
      );
      break;
    }
    case "input-antd": {
      if (label === "Basic") return <input type="text" className={inputBase} placeholder="Basic input" />;
      if (label === "With Prefix") return (
        <div className="relative w-full max-w-[200px]">
          <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground text-xs font-semibold">@</span>
          <input type="text" className={`${inputBase} pl-7`} placeholder="Username" />
        </div>
      );
      if (label === "With Suffix") return (
        <div className="relative w-full max-w-[200px]">
          <input type="text" className={`${inputBase} pr-7`} placeholder="Suffix" />
          <HelpCircle className="h-4 w-4 text-muted-foreground absolute right-2.5 top-1/2 -translate-y-1/2" />
        </div>
      );
      if (label === "Password") return <input type="password" className={inputBase} placeholder="input password" />;
      if (label === "Search") return (
        <div className="flex rounded-md overflow-hidden max-w-[200px] border border-border">
          <input type="text" className="bg-transparent border-0 px-2.5 py-1 text-sm text-white focus:outline-none flex-1" placeholder="input search text" />
          <button className="bg-blue-500 text-white px-3 hover:bg-blue-600 flex items-center justify-center"><Search className="h-3.5 w-3.5" /></button>
        </div>
      );
      if (label === "Textarea") return <textarea rows={2} className="bg-transparent border border-border rounded-md px-3 py-1 text-xs text-white placeholder-muted-foreground/50 w-full max-w-[200px] outline-none" placeholder="TextArea"></textarea>;
      if (label === "InputNumber") return <input type="number" className={inputBase} defaultValue={3} />;
      if (label === "Size: small") return <input type="text" className="bg-transparent border border-border rounded px-2 py-0.5 text-xs text-white w-full max-w-[200px] outline-none" placeholder="Small" />;
      if (label === "Size: large") return <input type="text" className="bg-transparent border border-border rounded-lg px-4 py-2.5 text-base text-white w-full max-w-[200px] outline-none" placeholder="Large" />;
      if (label === "Disabled") return <input disabled className="bg-secondary border border-border rounded px-3 py-1.5 text-sm text-white/40 w-full max-w-[200px] cursor-not-allowed" placeholder="Disabled" />;
      if (label === "Status: error") return <input type="text" className="bg-transparent border border-red-500 rounded px-3 py-1.5 text-sm text-white w-full max-w-[200px] focus:border-red-650 outline-none" placeholder="Error status" />;
      if (label === "Status: warning") return <input type="text" className="bg-transparent border border-amber-500 rounded px-3 py-1.5 text-sm text-white w-full max-w-[200px] focus:border-amber-650 outline-none" placeholder="Warning status" />;
      if (label === "With Addon") return (
        <div className="flex rounded-md overflow-hidden max-w-[200px] border border-border">
          <span className="bg-secondary px-2 py-1 text-xs text-muted-foreground flex items-center">http://</span>
          <input type="text" className="bg-transparent border-0 px-2 py-1 text-sm text-white focus:outline-none flex-1" placeholder="mysite" />
          <span className="bg-secondary px-2 py-1 text-xs text-muted-foreground flex items-center">.com</span>
        </div>
      );
      if (label === "Allow Clear") return (
        <div className="relative w-full max-w-[200px]">
          <input type="text" className={`${inputBase} pr-7`} placeholder="Click ✕ to clear" defaultValue="Value" />
          <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-white cursor-pointer text-xs">✕</span>
        </div>
      );
      break;
    }
    case "input-react-aria": {
      if (label === "Basic TextField") return (
        <div className="flex flex-col gap-1 w-full max-w-[200px]">
          <span className="text-xs font-semibold text-white">Name</span>
          <input type="text" className={inputBase} />
        </div>
      );
      if (label === "With Placeholder") return (
        <div className="flex flex-col gap-1 w-full max-w-[200px]">
          <span className="text-xs font-semibold text-white">Email</span>
          <input type="email" className={inputBase} placeholder="you@example.com" />
        </div>
      );
      if (label === "Required") return (
        <div className="flex flex-col gap-1 w-full max-w-[200px]">
          <span className="text-xs font-semibold text-white">Username *</span>
          <input type="text" className={inputBase} required />
        </div>
      );
      if (label === "Disabled") return (
        <div className="flex flex-col gap-1 w-full max-w-[200px] opacity-55">
          <span className="text-xs font-semibold text-white">Disabled</span>
          <input disabled className={inputBase} />
        </div>
      );
      if (label === "Read Only") return (
        <div className="flex flex-col gap-1 w-full max-w-[200px]">
          <span className="text-xs font-semibold text-white">Read Only</span>
          <input readOnly className={inputBase} value="Read only value" />
        </div>
      );
      if (label === "With Description") return (
        <div className="flex flex-col gap-1 w-full max-w-[200px]">
          <span className="text-xs font-semibold text-white">Email</span>
          <input type="email" className={inputBase} />
          <span className="text-[10px] text-muted-foreground font-mono">We will never share your email.</span>
        </div>
      );
      if (label === "Invalid") return (
        <div className="flex flex-col gap-1 w-full max-w-[200px]">
          <span className="text-xs font-semibold text-white">Password</span>
          <input type="password" className={`${inputBase} border-red-500`} defaultValue="123" />
          <span className="text-[10px] text-red-400">Password must be 8+ characters.</span>
        </div>
      );
      if (label === "Password") return (
        <div className="flex flex-col gap-1 w-full max-w-[200px]">
          <span className="text-xs font-semibold text-white">Password</span>
          <input type="password" className={inputBase} />
        </div>
      );
      if (label === "Custom Validation") return (
        <div className="flex flex-col gap-1 w-full max-w-[200px]">
          <span className="text-xs font-semibold text-white">Username</span>
          <input type="text" className={`${inputBase} border-red-500`} defaultValue="ab" />
          <span className="text-[10px] text-red-400">Too short</span>
        </div>
      );
      break;
    }
    case "input-radix": {
      if (label === "Default") return <input type="text" className={`${inputBase} bg-white/5 border border-border/80 focus:border-indigo-500 rounded-md`} placeholder="Search…" />;
      if (label === "Variant: soft") return <input type="text" className="bg-indigo-500/10 border-0 rounded px-3 py-1.5 text-sm text-indigo-300 placeholder-indigo-400/50 focus:ring-1 focus:ring-indigo-500 w-full max-w-[200px]" placeholder="Soft" />;
      if (label === "Variant: surface") return <input type="text" className="bg-card border border-border rounded px-3 py-1.5 text-sm text-white placeholder-muted-foreground/50 focus:border-indigo-500 w-full max-w-[200px]" placeholder="Surface" />;
      if (label === "Variant: classic") return <input type="text" className="bg-black/20 border border-border/85 focus:border-indigo-500 rounded-md px-3 py-1.5 text-sm text-white w-full max-w-[200px]" placeholder="Classic" />;
      if (label === "Color: indigo") return <input type="text" className="bg-transparent border border-indigo-500/50 focus:border-indigo-500 rounded-md px-3 py-1.5 text-sm text-indigo-400 w-full max-w-[200px] outline-none" placeholder="Indigo" />;
      if (label === "Color: crimson") return <input type="text" className="bg-transparent border border-rose-500/55 focus:border-rose-500 rounded-md px-3 py-1.5 text-sm text-rose-455 w-full max-w-[200px] outline-none" placeholder="Crimson" />;
      if (label === "Size: 1") return <input type="text" className="bg-transparent border border-border rounded px-2.5 py-0.5 text-xs text-white w-full max-w-[200px] outline-none" placeholder="Size 1" />;
      if (label === "Size: 3") return <input type="text" className="bg-transparent border border-border rounded-lg px-4 py-2 text-base text-white w-full max-w-[200px] outline-none" placeholder="Size 3" />;
      if (label === "Radius: full") return <input type="text" className="bg-transparent border border-border rounded-full px-4 py-1.5 text-sm text-white w-full max-w-[200px] outline-none" placeholder="Full radius" />;
      if (label === "Disabled") return <input disabled className="bg-transparent border border-border/30 rounded px-3 py-1.5 text-sm text-white/30 w-full max-w-[200px] cursor-not-allowed" placeholder="Disabled" />;
      if (label === "With Left Slot") return (
        <div className="relative w-full max-w-[200px]">
          <Search className="h-4 w-4 text-indigo-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
          <input type="text" className="bg-transparent border border-border rounded-md pl-8 pr-3 py-1.5 text-sm text-white w-full max-w-[200px] outline-none focus:border-indigo-500" placeholder="Search…" />
        </div>
      );
      if (label === "With Right Slot") return (
        <div className="relative w-full max-w-[200px]">
          <input type="password" className="bg-transparent border border-border rounded-md pl-3 pr-8 py-1.5 text-sm text-white w-full max-w-[200px] outline-none focus:border-indigo-500" placeholder="Password" />
          <Eye className="h-4 w-4 text-indigo-400 absolute right-2.5 top-1/2 -translate-y-1/2" />
        </div>
      );
      if (label === "TextArea") return <textarea className="bg-transparent border border-border rounded px-3 py-1 text-sm text-white placeholder-muted-foreground/50 w-full max-w-[200px] min-h-[50px] outline-none focus:border-indigo-500" placeholder="Reply to comment…"></textarea>;
      break;
    }
    case "input-headless": {
      if (label === "Basic Field") return (
        <div className="flex flex-col gap-1 w-full max-w-[200px]">
          <span className="text-xs font-medium text-white">Name</span>
          <input type="text" className="bg-white/5 border border-transparent rounded-lg px-3 py-1.5 text-sm text-white focus:border-sky-500 outline-none" name="name" />
        </div>
      );
      if (label === "With Description") return (
        <div className="flex flex-col gap-0.5 w-full max-w-[200px]">
          <span className="text-xs font-medium text-white">Bio</span>
          <span className="text-[10px] text-white/50">A few sentences about yourself.</span>
          <input type="text" className="bg-white/5 border border-transparent rounded-lg px-3 py-1.5 text-sm text-white focus:border-sky-500 outline-none" name="bio" />
        </div>
      );
      if (label === "Disabled") return (
        <div className="flex flex-col gap-1 w-full max-w-[200px] opacity-50">
          <span className="text-xs font-medium text-white">Country</span>
          <input disabled className="bg-white/5 border border-transparent rounded-lg px-3 py-1.5 text-sm text-white cursor-not-allowed" name="country" />
        </div>
      );
      if (label === "Hover State") return <input type="text" className="bg-white/5 hover:bg-white/10 border border-transparent rounded-lg px-3 py-1.5 text-sm text-white outline-none" placeholder="Hover me" />;
      if (label === "Active State") return <input type="text" className="bg-white/5 focus:bg-white/15 border border-transparent rounded-lg px-3 py-1.5 text-sm text-white outline-none" placeholder="Focus me" />;
      if (label === "Focus State") return <input type="text" className="bg-white/5 border border-transparent focus:ring-2 focus:ring-blue-500 rounded-lg px-3 py-1.5 text-sm text-white outline-none" placeholder="Focus me" />;
      if (label === "Invalid State") return <input type="text" className="bg-red-500/10 border border-red-500 rounded-lg px-3 py-1.5 text-sm text-white outline-none" placeholder="Invalid" />;
      if (label === "Textarea") return <textarea rows={2} className="bg-white/5 border border-transparent rounded-lg px-3 py-1.5 text-xs text-white outline-none w-full max-w-[200px]" placeholder="Write your comment..."></textarea>;
      break;
    }
    case "input-rhf": {
      if (label === "Basic Setup") return (
        <div className="flex flex-col gap-1.5 w-full max-w-[200px]">
          <input type="text" className={inputBase} placeholder="First Name" />
          <button className="bg-accent text-white text-xs font-semibold px-2.5 py-1.5 rounded-md">Submit</button>
        </div>
      );
      if (label === "Required Field") return <input type="text" className={inputBase} placeholder="Last name (required)" required />;
      if (label === "Email Validation") return (
        <div className="flex flex-col gap-1 w-full max-w-[200px]">
          <input type="text" className={`${inputBase} border-red-500`} placeholder="Email" defaultValue="invalid-email" />
          <span className="text-[10px] text-red-500">Invalid email address</span>
        </div>
      );
      if (label === "Min/Max Length") return (
        <div className="flex flex-col gap-1 w-full max-w-[200px]">
          <input type="text" className={`${inputBase} border-red-500`} placeholder="Username" defaultValue="ab" />
          <span className="text-[10px] text-red-500">Min 3 chars</span>
        </div>
      );
      if (label === "Min/Max Value") return <input type="number" className={inputBase} placeholder="Age" min={18} max={99} defaultValue={16} />;
      if (label === "Custom Validate") return (
        <div className="flex flex-col gap-1 w-full max-w-[200px]">
          <input type="text" className={`${inputBase} border-red-500`} placeholder="Username" defaultValue="admin" />
          <span className="text-[10px] text-red-500">Username is taken</span>
        </div>
      );
      if (label === "Controller") return <input type="text" className={inputBase} placeholder="Controlled input" />;
      if (label === "Watch Value") return (
        <div className="flex flex-col gap-1 w-full max-w-[200px]">
          <input type="text" className={inputBase} placeholder="Email" defaultValue="you@example.com" />
          <span className="text-[9px] text-muted-foreground">Current value: you@example.com</span>
        </div>
      );
      if (label === "Default Values") return <input type="text" className={inputBase} defaultValue="John" />;
      if (label === "FormState Errors") return (
        <div className="flex flex-col gap-1 w-full max-w-[200px]">
          <span className="text-[10px] text-red-500">Email is required</span>
        </div>
      );
      if (label === "Reset Form") return <button className="bg-secondary text-white text-xs font-semibold px-4 py-1.5 rounded-lg border border-border hover:bg-muted">Reset</button>;
      if (label === "Form State") return <button className="bg-accent/50 text-white/50 text-xs font-semibold px-4 py-1.5 rounded-lg cursor-not-allowed" disabled>Submit</button>;
      break;
    }
  }

  return <input type="text" className={inputBase} placeholder={label} />;
}

interface InputLibraryWidgetProps {
  libraryId: string;
}

export default function InputLibraryWidget({ libraryId }: InputLibraryWidgetProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [filterText, setFilterText] = useState("");

  const lib = getInputLibrary(libraryId);

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
      <div className="bg-card border border-border rounded-2xl p-6 text-muted-foreground" id="input-library-not-found">
        Library not found: {libraryId}
      </div>
    );
  }

  const filteredExamples = lib.examples.filter(
    (ex) =>
      ex.label.toLowerCase().includes(filterText.toLowerCase()) ||
      ex.description.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div className="bg-card border border-border rounded-2xl p-6 relative overflow-hidden transition-all duration-300 hover:border-accent/40 flex flex-col gap-6" id={`input-library-${lib.id}-root`}>
      {/* Decorative blur */}
      <div className="absolute -right-16 -top-16 w-40 h-40 bg-accent/5 rounded-full blur-3xl pointer-events-none" id={`input-library-${lib.id}-blur`} />

      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start gap-4" id={`input-library-${lib.id}-header`}>
        <div id={`input-library-${lib.id}-header-text`}>
          <div className="flex items-center gap-2.5 mb-1" id={`input-library-${lib.id}-title-row`}>
            <h2 className="text-xl font-bold text-white" id={`input-library-${lib.id}-title`}>{lib.name}</h2>
            <span className="px-2 py-0.5 rounded-full bg-violet-500/15 border border-violet-500/25 text-violet-400 text-[10px] font-semibold uppercase tracking-wider" id={`input-library-${lib.id}-badge`}>
              Input
            </span>
          </div>
          <p className="text-sm text-muted-foreground max-w-lg" id={`input-library-${lib.id}-description`}>{lib.description}</p>
        </div>
        <a
          id={`input-library-${lib.id}-website-link`}
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
      <div className="space-y-2" id={`input-library-${lib.id}-install-section`}>
        <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider" id={`input-library-${lib.id}-install-label`}>
          <Terminal className="h-3.5 w-3.5" />
          Install
        </div>
        <div className="flex items-center gap-2 bg-secondary/60 border border-border rounded-lg px-4 py-2.5" id={`input-library-${lib.id}-install-box`}>
          <code className="flex-1 text-sm font-mono text-emerald-400 break-all" id={`input-library-${lib.id}-install-code`}>{lib.installCommand}</code>
          <CopyButton text={lib.installCommand} id={`input-library-${lib.id}-install-copy`} />
        </div>
      </div>

      {/* Import statement */}
      <div className="space-y-2" id={`input-library-${lib.id}-import-section`}>
        <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider" id={`input-library-${lib.id}-import-label`}>
          <Code2 className="h-3.5 w-3.5" />
          Import
        </div>
        <div className="flex items-start gap-2 bg-secondary/60 border border-border rounded-lg px-4 py-2.5" id={`input-library-${lib.id}-import-box`}>
          <pre className="flex-1 text-sm font-mono text-accent whitespace-pre-wrap break-all leading-relaxed" id={`input-library-${lib.id}-import-code`}>{lib.importStatement}</pre>
          <CopyButton text={lib.importStatement} id={`input-library-${lib.id}-import-copy`} />
        </div>
      </div>

      {/* Provider setup (if applicable) */}
      {lib.providerSetup && (
        <div className="space-y-2" id={`input-library-${lib.id}-provider-section`}>
          <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider" id={`input-library-${lib.id}-provider-label`}>
            <Code2 className="h-3.5 w-3.5" />
            Provider Setup
          </div>
          <div className="flex items-start gap-2 bg-amber-500/5 border border-amber-500/20 rounded-lg px-4 py-2.5" id={`input-library-${lib.id}-provider-box`}>
            <pre className="flex-1 text-sm font-mono text-amber-300/80 whitespace-pre-wrap break-all leading-relaxed" id={`input-library-${lib.id}-provider-code`}>{lib.providerSetup}</pre>
            <CopyButton text={lib.providerSetup} id={`input-library-${lib.id}-provider-copy`} />
          </div>
        </div>
      )}

      {/* Examples Table */}
      <div className="space-y-3" id={`input-library-${lib.id}-examples-section`}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3" id={`input-library-${lib.id}-examples-header`}>
          <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider" id={`input-library-${lib.id}-examples-label`}>
            Examples &amp; Patterns ({filteredExamples.length})
          </div>
          <input
            id={`input-library-${lib.id}-filter-input`}
            type="text"
            placeholder="Filter examples..."
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
            className="w-full sm:w-48 bg-secondary border border-border text-xs rounded-lg px-3 py-1.5 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent text-white placeholder-muted-foreground/60 transition-all"
          />
        </div>

        <div className="overflow-x-auto rounded-lg border border-border" id={`input-library-${lib.id}-examples-table-container`}>
          <table className="w-full text-left border-collapse" id={`input-library-${lib.id}-examples-table`}>
            <thead>
              <tr className="bg-secondary/60 border-b border-border text-[11px] font-semibold text-muted-foreground uppercase tracking-wider" id={`input-library-${lib.id}-table-header`}>
                <th className="px-4 py-3 w-[15%]" id={`input-library-${lib.id}-th-variant`}>Pattern</th>
                <th className="px-4 py-3 w-[20%]" id={`input-library-${lib.id}-th-desc`}>Description</th>
                <th className="px-4 py-3 w-[22%]" id={`input-library-${lib.id}-th-preview`}>Visual Preview</th>
                <th className="px-4 py-3 w-[38%]" id={`input-library-${lib.id}-th-code`}>Component Code</th>
                <th className="px-4 py-3 w-[5%] text-center" id={`input-library-${lib.id}-th-copy`}>Copy</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/50" id={`input-library-${lib.id}-table-body`}>
              {filteredExamples.length === 0 ? (
                <tr id={`input-library-${lib.id}-no-results`}>
                  <td colSpan={5} className="px-4 py-6 text-center text-sm text-muted-foreground" id={`input-library-${lib.id}-no-results-cell`}>
                    No matching examples
                  </td>
                </tr>
              ) : (
                filteredExamples.map((ex, i) => (
                  <tr
                    key={ex.label}
                    className="hover:bg-secondary/25 transition-colors group"
                    id={`input-library-${lib.id}-row-${i}`}
                  >
                    <td className="px-4 py-3 font-medium text-sm text-white" id={`input-library-${lib.id}-label-${i}`}>
                      {ex.label}
                    </td>
                    <td className="px-4 py-3 text-xs text-muted-foreground" id={`input-library-${lib.id}-desc-${i}`}>
                      {ex.description}
                    </td>
                    <td className="px-4 py-3" id={`input-library-${lib.id}-preview-${i}`}>
                      <div className="flex items-center min-h-[40px] py-1" id={`input-library-${lib.id}-preview-container-${i}`}>
                        {renderInputPreview(lib.id, ex.label)}
                      </div>
                    </td>
                    <td className="px-4 py-3" id={`input-library-${lib.id}-code-${i}`}>
                      <pre className="text-xs font-mono text-accent bg-secondary/40 px-2.5 py-1.5 rounded border border-border/50 whitespace-pre-wrap break-all leading-relaxed select-all" id={`input-library-${lib.id}-pre-${i}`}>
                        {ex.code}
                      </pre>
                    </td>
                    <td className="px-4 py-3 text-center" id={`input-library-${lib.id}-action-${i}`}>
                      <CopyButton text={ex.code} id={`input-library-${lib.id}-copy-${i}`} />
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-2 border-t border-border/50 text-[10px] text-muted-foreground font-mono flex justify-between items-center" id={`input-library-${lib.id}-footer`}>
        <span id={`input-library-${lib.id}-footer-count`}>{lib.examples.length} examples across {lib.name}</span>
        <a href={lib.website} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" id={`input-library-${lib.id}-footer-link`}>
          {lib.website}
        </a>
      </div>
    </div>
  );
}
