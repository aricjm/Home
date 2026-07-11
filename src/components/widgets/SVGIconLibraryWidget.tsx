"use client";

import React, { useState } from "react";
import { Search, Copy, Check, Sparkles } from "lucide-react";

// Inline functional SVG icons (50 icons)
// Custom path calculations styled to match the premium line art aesthetic
const CUSTOM_SVGS: Record<string, { category: string; desc: string; draw: (props: React.SVGProps<SVGSVGElement>) => React.JSX.Element; raw: string }> = {
  // ANIMALS (15)
  Dog: {
    category: "Animals",
    desc: "Loyal puppy face layout",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M6 18l-2-2v-4a8 8 0 0 1 16 0v4l-2 2" />
        <path d="M9 14.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" fill="currentColor" />
        <path d="M18 14.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" fill="currentColor" />
        <path d="M12 15v1.5M10 18h4v-1.5H10z" />
        <path d="M4 10l-1.5 3a1 1 0 0 0 1.5 1.2L6 13M20 10l1.5 3a1 1 0 0 1-1.5 1.2L18 13" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <path d="M6 18l-2-2v-4a8 8 0 0 1 16 0v4l-2 2" />
  <circle cx="7.5" cy="14.5" r="1.5" fill="currentColor" />
  <circle cx="16.5" cy="14.5" r="1.5" fill="currentColor" />
  <path d="M12 15v1.5M10 18h4v-1.5H10z" />
  <path d="M4 10l-1.5 3a1 1 0 0 0 1.5 1.2L6 13M20 10l1.5 3a1 1 0 0 1-1.5 1.2L18 13" />
</svg>`
  },
  Cat: {
    category: "Animals",
    desc: "Slick cat head with whiskers",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M12 5c.7 0 1.4.1 2 .3l2.3-2.3a1 1 0 0 1 1.6.9l-.9 3.2a8 8 0 0 1 4.7 6.4v.5a3 3 0 0 1-3 3H5.3a3 3 0 0 1-3-3v-.5a8 8 0 0 1 4.7-6.4l-.9-3.2a1 1 0 0 1 1.6-.9l2.3 2.3c.6-.2 1.3-.3 2-.3z" />
        <path d="M9 13.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" fill="currentColor" />
        <path d="M17 13.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" fill="currentColor" />
        <path d="M12 15v1M9.5 16.5h5" />
        <path d="M6 14.5h-3M6 15.5h-3.5M18 14.5h3M18 15.5h3.5" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <path d="M12 5c.7 0 1.4.1 2 .3l2.3-2.3a1 1 0 0 1 1.6.9l-.9 3.2a8 8 0 0 1 4.7 6.4v.5a3 3 0 0 1-3 3H5.3a3 3 0 0 1-3-3v-.5a8 8 0 0 1 4.7-6.4l-.9-3.2a1 1 0 0 1 1.6-.9l2.3 2.3c.6-.2 1.3-.3 2-.3z" />
  <circle cx="8" cy="13.5" r="1" fill="currentColor" />
  <circle cx="16" cy="13.5" r="1" fill="currentColor" />
  <path d="M12 15v1M9.5 16.5h5M6 14.5h-3M6 15.5h-3.5M18 14.5h3M18 15.5h3.5" />
</svg>`
  },
  Fish: {
    category: "Animals",
    desc: "Minimal ocean fish swimming",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M22 12c-3.5 4.5-9 6-13 4.5S3 12 3 12s2-3 6-4.5 9.5 0 13 4.5z" />
        <path d="M3 12l-2 2.5V9.5L3 12z" />
        <circle cx="17.5" cy="11.5" r="1" fill="currentColor" />
        <path d="M11 11.5c-.5.5-1.5.5-2 0" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <path d="M22 12c-3.5 4.5-9 6-13 4.5S3 12 3 12s2-3 6-4.5 9.5 0 13 4.5z" />
  <path d="M3 12l-2 2.5V9.5L3 12z" />
  <circle cx="17.5" cy="11.5" r="1" fill="currentColor" />
  <path d="M11 11.5c-.5.5-1.5.5-2 0" />
</svg>`
  },
  Bird: {
    category: "Animals",
    desc: "Elegant bird silhouette",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M8 10a4 4 0 0 1 7.2-2.4L18 8l-2 1a4 4 0 0 1-8 1z" />
        <path d="M8 10c-3 1.5-6 1.5-6 4.5 0 2 2.5 3.5 5 3.5s7-4.5 11-4.5h2l-2-2.5-3-.5" />
        <path d="M9 18l-1.5 3M12 17.5l-1 3.5" />
        <circle cx="13" cy="7.5" r="0.75" fill="currentColor" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <path d="M8 10a4 4 0 0 1 7.2-2.4L18 8l-2 1a4 4 0 0 1-8 1z" />
  <path d="M8 10c-3 1.5-6 1.5-6 4.5 0 2 2.5 3.5 5 3.5s7-4.5 11-4.5h2l-2-2.5-3-.5" />
  <path d="M9 18l-1.5 3M12 17.5l-1 3.5" />
  <circle cx="13" cy="7.5" r="0.75" fill="currentColor" />
</svg>`
  },
  Bear: {
    category: "Animals",
    desc: "Robust forest bear face outline",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M5 10v4a7 7 0 0 0 14 0v-4" />
        <path d="M5 10c0-3 3-5 7-5s7 2 7 5" />
        <circle cx="4.5" cy="5.5" r="2.5" />
        <circle cx="19.5" cy="5.5" r="2.5" />
        <circle cx="8" cy="10" r="1" fill="currentColor" />
        <circle cx="16" cy="10" r="1" fill="currentColor" />
        <path d="M12 12a2 2 0 0 0-2 2h4a2 2 0 0 0-2-2z" fill="currentColor" />
        <path d="M12 14v2.5" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <path d="M5 10v4a7 7 0 0 0 14 0v-4" />
  <path d="M5 10c0-3 3-5 7-5s7 2 7 5" />
  <circle cx="4.5" cy="5.5" r="2.5" />
  <circle cx="19.5" cy="5.5" r="2.5" />
  <circle cx="8" cy="10" r="1" fill="currentColor" />
  <circle cx="16" cy="10" r="1" fill="currentColor" />
  <path d="M12 12a2 2 0 0 0-2 2h4a2 2 0 0 0-2-2z" fill="currentColor" />
  <path d="M12 14v2.5" />
</svg>`
  },
  Rabbit: {
    category: "Animals",
    desc: "Rabbit head with long ears",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M12 11c1.5 0 3 .8 4.2 2a6 6 0 0 1 1.8 4v2H6v-2c0-1.6.6-3 1.8-4A6 6 0 0 1 12 11z" />
        <path d="M9 11V3.5a1.5 1.5 0 0 1 3 0V11M15 11V3.5a1.5 1.5 0 0 0-3 0V11" />
        <circle cx="9.5" cy="15.5" r="0.75" fill="currentColor" />
        <circle cx="14.5" cy="15.5" r="0.75" fill="currentColor" />
        <path d="M12 16.5l-1 1.5h2z" fill="currentColor" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <path d="M12 11c1.5 0 3 .8 4.2 2a6 6 0 0 1 1.8 4v2H6v-2c0-1.6.6-3 1.8-4A6 6 0 0 1 12 11z" />
  <path d="M9 11V3.5a1.5 1.5 0 0 1 3 0V11M15 11V3.5a1.5 1.5 0 0 0-3 0V11" />
  <circle cx="9.5" cy="15.5" r="0.75" fill="currentColor" />
  <circle cx="14.5" cy="15.5" r="0.75" fill="currentColor" />
  <path d="M12 16.5l-1 1.5h2z" fill="currentColor" />
</svg>`
  },
  Panda: {
    category: "Animals",
    desc: "Panda face with circular highlights",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M6 10a6 6 0 0 1 12 0v4a6 6 0 0 1-12 0v-4z" />
        <circle cx="5" cy="6" r="2" fill="currentColor" />
        <circle cx="19" cy="6" r="2" fill="currentColor" />
        <ellipse cx="8.5" cy="11.5" rx="1.5" ry="2" fill="currentColor" />
        <ellipse cx="15.5" cy="11.5" rx="1.5" ry="2" fill="currentColor" />
        <circle cx="8.5" cy="11.5" r="0.5" className="text-white" />
        <circle cx="15.5" cy="11.5" r="0.5" className="text-white" />
        <path d="M12 14.5a1.5 1.5 0 0 0-1.5 1.5h3a1.5 1.5 0 0 0-1.5-1.5z" fill="currentColor" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <path d="M6 10a6 6 0 0 1 12 0v4a6 6 0 0 1-12 0v-4z" />
  <circle cx="5" cy="6" r="2" fill="currentColor" />
  <circle cx="19" cy="6" r="2" fill="currentColor" />
  <ellipse cx="8.5" cy="11.5" rx="1.5" ry="2" fill="currentColor" />
  <ellipse cx="15.5" cy="11.5" rx="1.5" ry="2" fill="currentColor" />
  <path d="M12 14.5a1.5 1.5 0 0 0-1.5 1.5h3a1.5 1.5 0 0 0-1.5-1.5z" fill="currentColor" />
</svg>`
  },
  Elephant: {
    category: "Animals",
    desc: "Elephant head with trunk",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M8 10a4 4 0 0 1 8 0v3h-8v-3z" />
        <path d="M5 10c0-1 0-3 3-3s3 2 3 3v2" />
        <path d="M19 10c0-1 0-3-3-3s-3 2-3 3v2" />
        <path d="M12 13v5a2 2 0 0 0 2 2h0.5" />
        <circle cx="10" cy="10" r="0.75" fill="currentColor" />
        <circle cx="14" cy="10" r="0.75" fill="currentColor" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <path d="M8 10a4 4 0 0 1 8 0v3h-8v-3z" />
  <path d="M5 10c0-1 0-3 3-3s3 2 3 3v2" />
  <path d="M19 10c0-1 0-3-3-3s-3 2-3 3v2" />
  <path d="M12 13v5a2 2 0 0 0 2 2h0.5" />
  <circle cx="10" cy="10" r="0.75" fill="currentColor" />
  <circle cx="14" cy="10" r="0.75" fill="currentColor" />
</svg>`
  },
  Lion: {
    category: "Animals",
    desc: "Lion with a majestic mane outline",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <circle cx="12" cy="12" r="5" />
        <path d="M12 3c-1.5 1-2.5 0-3.5 1.5S7 4 6 5.5s.5 2.5-.5 4S4 11 4 12.5s1 2.5.5 4S6 18.5 7 19.5s1.5-.5 3 .5s2 .5 3-.5 2.5 1.5 3.5-.5 2 0 2.5-1.5s-.5-2.5.5-4S20 12 20 10.5s-1-2.5-.5-4S17 5 16 4.5s-1.5.5-3-.5" />
        <circle cx="10" cy="11.5" r="0.75" fill="currentColor" />
        <circle cx="14" cy="11.5" r="0.75" fill="currentColor" />
        <path d="M12 13.5l-1 1h2z" fill="currentColor" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <circle cx="12" cy="12" r="5" />
  <path d="M12 3c-1.5 1-2.5 0-3.5 1.5S7 4 6 5.5s.5 2.5-.5 4S4 11 4 12.5s1 2.5.5 4S6 18.5 7 19.5s1.5-.5 3 .5s2 .5 3-.5 2.5 1.5 3.5-.5 2 0 2.5-1.5s-.5-2.5.5-4S20 12 20 10.5s-1-2.5-.5-4S17 5 16 4.5s-1.5.5-3-.5" />
  <circle cx="10" cy="11.5" r="0.75" fill="currentColor" />
  <circle cx="14" cy="11.5" r="0.75" fill="currentColor" />
  <path d="M12 13.5l-1 1h2z" fill="currentColor" />
</svg>`
  },
  Deer: {
    category: "Animals",
    desc: "Deer head with complex antlers",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M12 18l-3-4.5V11h6v2.5L12 18z" />
        <path d="M9 11L6.5 8.5M15 11l2.5-2.5" />
        <path d="M7 9V5.5M6.5 7.5H4.5M17 9V5.5M17.5 7.5h2" />
        <circle cx="10" cy="13.5" r="0.5" fill="currentColor" />
        <circle cx="14" cy="13.5" r="0.5" fill="currentColor" />
        <path d="M12 16.5v1" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <path d="M12 18l-3-4.5V11h6v2.5L12 18z" />
  <path d="M9 11L6.5 8.5M15 11l2.5-2.5" />
  <path d="M7 9V5.5M6.5 7.5H4.5M17 9V5.5M17.5 7.5h2" />
  <circle cx="10" cy="13.5" r="0.5" fill="currentColor" />
  <circle cx="14" cy="13.5" r="0.5" fill="currentColor" />
</svg>`
  },
  Owl: {
    category: "Animals",
    desc: "Owl with large circular eyes",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M12 3a6 6 0 0 0-6 6v7a6 6 0 0 0 12 0V9a6 6 0 0 0-6-6z" />
        <circle cx="9" cy="9.5" r="2" />
        <circle cx="15" cy="9.5" r="2" />
        <circle cx="9" cy="9.5" r="0.75" fill="currentColor" />
        <circle cx="15" cy="9.5" r="0.75" fill="currentColor" />
        <path d="M12 10.5l-1 1.5h2z" fill="currentColor" />
        <path d="M8 17s2-1 4-1 4 1 4 1" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <path d="M12 3a6 6 0 0 0-6 6v7a6 6 0 0 0 12 0V9a6 6 0 0 0-6-6z" />
  <circle cx="9" cy="9.5" r="2" /><circle cx="15" cy="9.5" r="2" />
  <circle cx="9" cy="9.5" r="0.75" fill="currentColor" /><circle cx="15" cy="9.5" r="0.75" fill="currentColor" />
  <path d="M12 10.5l-1 1.5h2z" fill="currentColor" />
  <path d="M8 17s2-1 4-1 4 1 4 1" />
</svg>`
  },
  Turtle: {
    category: "Animals",
    desc: "Turtle shell and legs",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <circle cx="12" cy="12" r="6" />
        <path d="M12 3V2a1 1 0 0 1 1-1h-2a1 1 0 0 1 1 1v1M12 18v2a1 1 0 0 0 1 1h-2a1 1 0 0 0 1-1v-2" />
        <path d="M6.5 7L5 5.5M17.5 7L19 5.5M6.5 17L5 18.5M17.5 17L19 18.5" />
        <path d="M9 12h6M12 9v6" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <circle cx="12" cy="12" r="6" />
  <path d="M12 3V2a1 1 0 0 1 1-1h-2a1 1 0 0 1 1 1v1M12 18v2a1 1 0 0 0 1 1h-2a1 1 0 0 0 1-1v-2M6.5 7L5 5.5M17.5 7L19 5.5M6.5 17L5 18.5M17.5 17L19 18.5" />
  <path d="M9 12h6M12 9v6" />
</svg>`
  },
  Frog: {
    category: "Animals",
    desc: "Silly frog face outline",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M4 14a8 8 0 0 0 16 0c0-3.5-3.5-5-8-5s-8 1.5-8 5z" />
        <circle cx="7" cy="8.5" r="2.5" />
        <circle cx="17" cy="8.5" r="2.5" />
        <circle cx="7" cy="8.5" r="1" fill="currentColor" />
        <circle cx="17" cy="8.5" r="1" fill="currentColor" />
        <path d="M7 15.5c2 2 8 2 10 0" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <path d="M4 14a8 8 0 0 0 16 0c0-3.5-3.5-5-8-5s-8 1.5-8 5z" />
  <circle cx="7" cy="8.5" r="2.5" /><circle cx="17" cy="8.5" r="2.5" />
  <circle cx="7" cy="8.5" r="1" fill="currentColor" /><circle cx="17" cy="8.5" r="1" fill="currentColor" />
  <path d="M7 15.5c2 2 8 2 10 0" />
</svg>`
  },
  Monkey: {
    category: "Animals",
    desc: "Monkey face with prominent ears",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <circle cx="12" cy="13" r="5" />
        <circle cx="6.5" cy="11.5" r="2" />
        <circle cx="17.5" cy="11.5" r="2" />
        <path d="M12 11c-1 0-2 .5-2.5 1.5.5.5 1.5.5 2.5.5s2 0 2.5-.5c-.5-1-1.5-1.5-2.5-1.5z" fill="currentColor" />
        <circle cx="10" cy="12.5" r="0.5" fill="currentColor" />
        <circle cx="14" cy="12.5" r="0.5" fill="currentColor" />
        <path d="M9.5 15.5c1 1.5 4 1.5 5 0" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <circle cx="12" cy="13" r="5" />
  <circle cx="6.5" cy="11.5" r="2" /><circle cx="17.5" cy="11.5" r="2" />
  <path d="M12 11c-1 0-2 .5-2.5 1.5.5.5 1.5.5 2.5.5s2 0 2.5-.5c-.5-1-1.5-1.5-2.5-1.5z" fill="currentColor" />
  <path d="M9.5 15.5c1 1.5 4 1.5 5 0" />
</svg>`
  },
  Koala: {
    category: "Animals",
    desc: "Koala face with fluffy ears",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M7 11a5 5 0 0 0 10 0v1a5 5 0 0 0-10 0v-1z" />
        <circle cx="5.5" cy="8.5" r="2.5" fill="currentColor" />
        <circle cx="18.5" cy="8.5" r="2.5" fill="currentColor" />
        <ellipse cx="12" cy="12.5" rx="1.25" ry="2" fill="currentColor" />
        <circle cx="9.5" cy="10.5" r="0.5" className="text-white" />
        <circle cx="14.5" cy="10.5" r="0.5" className="text-white" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <path d="M7 11a5 5 0 0 0 10 0v1a5 5 0 0 0-10 0v-1z" />
  <circle cx="5.5" cy="8.5" r="2.5" fill="currentColor" />
  <circle cx="18.5" cy="8.5" r="2.5" fill="currentColor" />
  <ellipse cx="12" cy="12.5" rx="1.25" ry="2" fill="currentColor" />
</svg>`
  },

  // SPORTS (15)
  SoccerBall: {
    category: "Sports",
    desc: "Classic soccer ball with line details",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <circle cx="12" cy="12" r="10" />
        <polygon points="12,9 14.5,11 13.5,14 10.5,14 9.5,11" fill="currentColor" />
        <path d="M12 9l-1.5-3M14.5 11l3-1.5M13.5 14L15 17M10.5 14L9 17M9.5 11l-3-1.5" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <circle cx="12" cy="12" r="10" />
  <polygon points="12,9 14.5,11 13.5,14 10.5,14 9.5,11" fill="currentColor" />
  <path d="M12 9l-1.5-3M14.5 11l3-1.5M13.5 14L15 17M10.5 14L9 17M9.5 11l-3-1.5" />
</svg>`
  },
  Basketball: {
    category: "Sports",
    desc: "Basketball outline with seams",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2v20M2 12h20" />
        <path d="M6 4.5c2.5 3 2.5 12 0 15M18 4.5c-2.5 3-2.5 12 0 15" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <circle cx="12" cy="12" r="10" />
  <path d="M12 2v20M2 12h20" />
  <path d="M6 4.5c2.5 3 2.5 12 0 15M18 4.5c-2.5 3-2.5 12 0 15" />
</svg>`
  },
  Baseball: {
    category: "Sports",
    desc: "Baseball with curved seams",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <circle cx="12" cy="12" r="10" />
        <path d="M5 8c3 1.5 5.5 4 5.5 8M18.5 8c-3 1.5-5.5 4-5.5 8" />
        <path d="M4 11.5c1 .5 1.5.5 2 0M6 14.5c1 .5 1.5.5 2 0M17.5 11.5c-.5.5-1 .5-2.5 0" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <circle cx="12" cy="12" r="10" />
  <path d="M5 8c3 1.5 5.5 4 5.5 8M18.5 8c-3 1.5-5.5 4-5.5 8" />
</svg>`
  },
  Football: {
    category: "Sports",
    desc: "American football laces",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M2.5 12c4-7 15-7 19 0-4 7-15 7-19 0z" />
        <path d="M12 7.5v9M9.5 10v4M14.5 10v4M7 12h10" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <path d="M2.5 12c4-7 15-7 19 0-4 7-15 7-19 0z" />
  <path d="M12 7.5v9M9.5 10v4M14.5 10v4M7 12h10" />
</svg>`
  },
  TennisBall: {
    category: "Sports",
    desc: "Tennis ball seam curvature",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <circle cx="12" cy="12" r="10" />
        <path d="M4.5 12c2.5 3 2.5 7 0 10M19.5 0c-2.5 3-2.5 7 0 10" className="opacity-40" />
        <path d="M2.5 12C7 7 17 7 21.5 12" />
        <path d="M2.5 12c4.5 5 14.5 5 19 0" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <circle cx="12" cy="12" r="10" />
  <path d="M2.5 12C7 7 17 7 21.5 12" />
  <path d="M2.5 12c4.5 5 14.5 5 19 0" />
</svg>`
  },
  GolfBall: {
    category: "Sports",
    desc: "Golf tee with resting golf ball",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <circle cx="12" cy="8" r="6" />
        <path d="M12 14v6M10 21.5h4M9.5 14c1 1.5 4 1.5 5 0" />
        <circle cx="10" cy="6" r="0.5" fill="currentColor" />
        <circle cx="14" cy="6" r="0.5" fill="currentColor" />
        <circle cx="12" cy="8" r="0.5" fill="currentColor" />
        <circle cx="10" cy="10" r="0.5" fill="currentColor" />
        <circle cx="14" cy="10" r="0.5" fill="currentColor" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <circle cx="12" cy="8" r="6" />
  <path d="M12 14v6M10 21.5h4M9.5 14c1 1.5 4 1.5 5 0" />
</svg>`
  },
  Trophy: {
    category: "Sports",
    desc: "Detailed championship trophy",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
        <path d="M6 4h12v7a6 6 0 0 1-12 0V4z" />
        <path d="M12 15v4M8 20h8" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
  <path d="M6 4h12v7a6 6 0 0 1-12 0V4z" />
  <path d="M12 15v4M8 20h8" />
</svg>`
  },
  Medal: {
    category: "Sports",
    desc: "Award ribbon with circular medallion",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <circle cx="12" cy="14" r="5" />
        <polyline points="8,2 12,9 16,2" />
        <polyline points="10,2 10,8M14,2 14,8" />
        <circle cx="12" cy="14" r="2.5" fill="currentColor" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <circle cx="12" cy="14" r="5" />
  <polyline points="8,2 12,9 16,2" />
  <polyline points="10,2 10,8M14,2 14,8" />
</svg>`
  },
  Whistle: {
    category: "Sports",
    desc: "Referee whistle design",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M10 14H3V7h10a4 4 0 0 1 4 4v3" />
        <path d="M17 10h4v2.5H17z" />
        <circle cx="8" cy="10.5" r="1.5" fill="currentColor" />
        <path d="M13 14H3v3.5A1.5 1.5 0 0 0 4.5 19H7a1 1 0 0 0 1-1v-4" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <path d="M10 14H3V7h10a4 4 0 0 1 4 4v3" />
  <path d="M17 10h4v2.5H17z" />
  <circle cx="8" cy="10.5" r="1.5" fill="currentColor" />
  <path d="M13 14H3v3.5A1.5 1.5 0 0 0 4.5 19H7a1 1 0 0 0 1-1v-4" />
</svg>`
  },
  Sneaker: {
    category: "Sports",
    desc: "Sleek running shoe profile",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M3 17h18l-1.5-4.5L14 12H9L6.5 9.5 3 10v7z" />
        <path d="M7.5 12L9 9.5M10.5 12l1-2.5" />
        <path d="M3 15.5h18M3 17a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <path d="M3 17h18l-1.5-4.5L14 12H9L6.5 9.5 3 10v7z" />
  <path d="M7.5 12L9 9.5M10.5 12l1-2.5M3 15.5h18M3 17a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1" />
</svg>`
  },
  Bicycle: {
    category: "Sports",
    desc: "Bicycle wireframe outline",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <circle cx="5.5" cy="15.5" r="3.5" />
        <circle cx="18.5" cy="15.5" r="3.5" />
        <polyline points="5.5,15.5 10,9 15.5,15.5 18.5,15.5" />
        <polyline points="10,9 12,5 15.5,5" />
        <polyline points="10,9 12,15.5" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <circle cx="5.5" cy="15.5" r="3.5" />
  <circle cx="18.5" cy="15.5" r="3.5" />
  <polyline points="5.5,15.5 10,9 15.5,15.5 18.5,15.5" />
  <polyline points="10,9 12,5 15.5,5" />
</svg>`
  },
  Bowling: {
    category: "Sports",
    desc: "Bowling pin and finger-hole ball",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <circle cx="7.5" cy="14.5" r="5.5" />
        <circle cx="6" cy="12" r="0.75" fill="currentColor" />
        <circle cx="8" cy="11.5" r="0.75" fill="currentColor" />
        <circle cx="8" cy="13.5" r="0.75" fill="currentColor" />
        <path d="M18 4.5a1.5 1.5 0 0 1 3 0L19.5 9v11h-3V9L18 4.5z" />
        <path d="M17.5 7h1" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <circle cx="7.5" cy="14.5" r="5.5" />
  <circle cx="6" cy="12" r="0.75" fill="currentColor" />
  <circle cx="8" cy="11.5" r="0.75" fill="currentColor" />
  <circle cx="8" cy="13.5" r="0.75" fill="currentColor" />
  <path d="M18 4.5a1.5 1.5 0 0 1 3 0L19.5 9v11h-3V9L18 4.5z" />
</svg>`
  },
  Dumbbell: {
    category: "Sports",
    desc: "Fitness hand weight bar",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M6.5 4h-2a1.5 1.5 0 0 0-1.5 1.5v13A1.5 1.5 0 0 0 4.5 20h2M17.5 4h2a1.5 1.5 0 0 1 1.5 1.5v13A1.5 1.5 0 0 1 19.5 20h-2" />
        <path d="M3 8.5h3.5v7H3v-7zM17.5 8.5H21v7h-3.5v-7zM6.5 12h11" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <path d="M6.5 4h-2a1.5 1.5 0 0 0-1.5 1.5v13A1.5 1.5 0 0 0 4.5 20h2M17.5 4h2a1.5 1.5 0 0 1 1.5 1.5v13A1.5 1.5 0 0 1 19.5 20h-2" />
  <path d="M3 8.5h3.5v7H3v-7zM17.5 8.5H21v7h-3.5v-7zM6.5 12h11" />
</svg>`
  },
  PingPong: {
    category: "Sports",
    desc: "Table tennis paddle and ball",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <circle cx="11.5" cy="9.5" r="5.5" />
        <path d="M9.5 14.5l-4.5 5a1 1 0 0 0 1.5 1.5l5-4.5" />
        <circle cx="17.5" cy="15.5" r="1.5" fill="currentColor" />
        <path d="M12 9.5c.5.5.5 1.5 0 2" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <circle cx="11.5" cy="9.5" r="5.5" />
  <path d="M9.5 14.5l-4.5 5a1 1 0 0 0 1.5 1.5l5-4.5" />
  <circle cx="17.5" cy="15.5" r="1.5" fill="currentColor" />
</svg>`
  },
  Target: {
    category: "Sports",
    desc: "Bullseye target with scoring circles",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6.5" />
        <circle cx="12" cy="12" r="3" fill="currentColor" />
        <path d="M12 2v20M2 12h20" className="opacity-30" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <circle cx="12" cy="12" r="10" />
  <circle cx="12" cy="12" r="6.5" />
  <circle cx="12" cy="12" r="3" fill="currentColor" />
</svg>`
  },

  // WEATHER (15)
  Sunny: {
    category: "Weather",
    desc: "Bright sun with detailed ray points",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <circle cx="12" cy="12" r="4" fill="currentColor" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2.2 2.2M16.8 16.8L19 19M5 19l2.2-2.2M16.8 7.2L19 5" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <circle cx="12" cy="12" r="4" fill="currentColor" />
  <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2.2 2.2M16.8 16.8L19 19M5 19l2.2-2.2M16.8 7.2L19 5" />
</svg>`
  },
  Cloudy: {
    category: "Weather",
    desc: "Fluffy cloud outline",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M17.5 18a4.5 4.5 0 0 0 0-9h-.7a7 7 0 1 0-11.9 3.2 4 4 0 0 0 1.1 7.8h11.5z" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <path d="M17.5 18a4.5 4.5 0 0 0 0-9h-.7a7 7 0 1 0-11.9 3.2 4 4 0 0 0 1.1 7.8h11.5z" />
</svg>`
  },
  Rainy: {
    category: "Weather",
    desc: "Cloud with slanted raindrops",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M16 14a4 4 0 0 0 0-8h-.7a6 6 0 1 0-10 2.2 3.5 3.5 0 0 0 .7 6.8h10z" />
        <path d="M7.5 17l-1 3M11.5 17l-1 3M15.5 17l-1 3" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <path d="M16 14a4 4 0 0 0 0-8h-.7a6 6 0 1 0-10 2.2 3.5 3.5 0 0 0 .7 6.8h10z" />
  <path d="M7.5 17l-1 3M11.5 17l-1 3M15.5 17l-1 3" />
</svg>`
  },
  Stormy: {
    category: "Weather",
    desc: "Rain cloud with custom lightning bolt",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M16 14a4 4 0 0 0 0-8h-.7a6 6 0 1 0-10 2.2 3.5 3.5 0 0 0 .7 6.8h10z" />
        <polygon points="11.5,15 9.5,19 12.5,19 10.5,23 14.5,17 11.5,17" fill="currentColor" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <path d="M16 14a4 4 0 0 0 0-8h-.7a6 6 0 1 0-10 2.2 3.5 3.5 0 0 0 .7 6.8h10z" />
  <polygon points="11.5,15 9.5,19 12.5,19 10.5,23 14.5,17 11.5,17" fill="currentColor" />
</svg>`
  },
  Snowy: {
    category: "Weather",
    desc: "Cloud with falling snowflakes",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M16 14a4 4 0 0 0 0-8h-.7a6 6 0 1 0-10 2.2 3.5 3.5 0 0 0 .7 6.8h10z" />
        <circle cx="7.5" cy="18" r="0.75" fill="currentColor" />
        <circle cx="11.5" cy="18" r="0.75" fill="currentColor" />
        <circle cx="15.5" cy="18" r="0.75" fill="currentColor" />
        <circle cx="9.5" cy="20.5" r="0.75" fill="currentColor" />
        <circle cx="13.5" cy="20.5" r="0.75" fill="currentColor" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <path d="M16 14a4 4 0 0 0 0-8h-.7a6 6 0 1 0-10 2.2 3.5 3.5 0 0 0 .7 6.8h10z" />
  <circle cx="7.5" cy="18" r="0.75" fill="currentColor" />
  <circle cx="11.5" cy="18" r="0.75" fill="currentColor" />
  <circle cx="15.5" cy="18" r="0.75" fill="currentColor" />
</svg>`
  },
  Windy: {
    category: "Weather",
    desc: "Double blowing wind currents",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M3 8.5h15a2.5 2.5 0 0 0 2.5-2.5h0A2.5 2.5 0 0 0 18 3.5" />
        <path d="M2 12.5h18a2.5 2.5 0 0 1 2.5 2.5h0A2.5 2.5 0 0 1 20 17.5" />
        <path d="M5 16.5h7" className="opacity-60" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <path d="M3 8.5h15a2.5 2.5 0 0 0 2.5-2.5h0A2.5 2.5 0 0 0 18 3.5" />
  <path d="M2 12.5h18a2.5 2.5 0 0 1 2.5 2.5h0A2.5 2.5 0 0 1 20 17.5" />
  <path d="M5 16.5h7" />
</svg>`
  },
  Tornado: {
    category: "Weather",
    desc: "Swirling tornado vortex outline",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M2.5 4h19M4 8h16M6.5 12h11M8.5 16h7M10.5 20h3" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <path d="M2.5 4h19M4 8h16M6.5 12h11M8.5 16h7M10.5 20h3" />
</svg>`
  },
  Rainbow: {
    category: "Weather",
    desc: "Arching multi-layer rainbow curves",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M4 18a8 8 0 0 1 16 0M7 18a5 5 0 0 1 10 0M10 18a2 2 0 0 1 4 0" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <path d="M4 18a8 8 0 0 1 16 0M7 18a5 5 0 0 1 10 0M10 18a2 2 0 0 1 4 0" />
</svg>`
  },
  Moony: {
    category: "Weather",
    desc: "Crescent moon with distant stars",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M12 3a9 9 0 1 0 9 9 7.5 7.5 0 0 1-9-9z" fill="currentColor" />
        <path d="M19 3v2M18 4h2M14 6.5v1M13.5 7h1" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <path d="M12 3a9 9 0 1 0 9 9 7.5 7.5 0 0 1-9-9z" fill="currentColor" />
  <path d="M19 3v2M18 4h2M14 6.5v1M13.5 7h1" />
</svg>`
  },
  HotSun: {
    category: "Weather",
    desc: "Sun paired with a thermometer",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M10 12c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4" />
        <path d="M10 2V1M4 5.5l-1-1M16 5.5l1-1M3 11h1M16 11h1" />
        <path d="M17 11.5V17a2.5 2.5 0 0 0 1.5 2.3v1.2a1 1 0 0 1-2 0v-1.2A2.5 2.5 0 0 0 18 17v-5.5h-1z" fill="currentColor" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <path d="M10 12c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4M10 2V1M4 5.5l-1-1M16 5.5l1-1M3 11h1M16 11h1" />
  <path d="M17 11.5V17a2.5 2.5 0 0 0 1.5 2.3v1.2a1 1 0 0 1-2 0v-1.2A2.5 2.5 0 0 0 18 17v-5.5h-1z" fill="currentColor" />
</svg>`
  },
  ColdSnow: {
    category: "Weather",
    desc: "Detailed geometric snowflake",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M12 2v20M2 12h20M5.5 5.5l13 13M18.5 5.5l-13 13" />
        <path d="M9.5 4.5l2.5 2.5 2.5-2.5M9.5 19.5l2.5-2.5 2.5 2.5M4.5 9.5l2.5 2.5-2.5 2.5M19.5 9.5l-2.5 2.5 2.5 2.5" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <path d="M12 2v20M2 12h20M5.5 5.5l13 13M18.5 5.5l-13 13" />
  <path d="M9.5 4.5l2.5 2.5 2.5-2.5M9.5 19.5l2.5-2.5 2.5 2.5M4.5 9.5l2.5 2.5-2.5 2.5M19.5 9.5l-2.5 2.5 2.5 2.5" />
</svg>`
  },
  Sunrise: {
    category: "Weather",
    desc: "Rising sun over water waves",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M17 14a5 5 0 0 0-10 0" />
        <path d="M12 9V5M8.5 9.5l-2.5-2.5M15.5 9.5l2.5-2.5" />
        <path d="M2 17.5h20M4 20.5h16" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <path d="M17 14a5 5 0 0 0-10 0" />
  <path d="M12 9V5M8.5 9.5l-2.5-2.5M15.5 9.5l2.5-2.5" />
  <path d="M2 17.5h20M4 20.5h16" />
</svg>`
  },
  Sunset: {
    category: "Weather",
    desc: "Sun setting behind mountains",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M16 11c0-2.2-1.8-4-4-4s-4 1.8-4 4" />
        <path d="M3 13.5h18M3 16h18M5 19.5h14" />
        <polyline points="2,11 6,6 10,11" className="opacity-30" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <path d="M16 11c0-2.2-1.8-4-4-4s-4 1.8-4 4" />
  <path d="M3 13.5h18M3 16h18M5 19.5h14" />
</svg>`
  },
  Foggy: {
    category: "Weather",
    desc: "Mist lines layered under a cloud",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M17.5 12a4.5 4.5 0 0 0 0-9H17a7 7 0 1 0-12 3.5" />
        <path d="M4 14.5h16M2 18.5h20M6 21.5h12" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <path d="M17.5 12a4.5 4.5 0 0 0 0-9H17a7 7 0 1 0-12 3.5" />
  <path d="M4 14.5h16M2 18.5h20M6 21.5h12" />
</svg>`
  },
  Umbrella: {
    category: "Weather",
    desc: "Open umbrella sheltering rain",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M12 12v7.5a1.5 1.5 0 0 0 3 0" />
        <path d="M2.5 12c0-5 4.5-9 9.5-9s9.5 4 9.5 9h-19z" />
        <circle cx="12" cy="2.5" r="0.5" fill="currentColor" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <path d="M12 12v7.5a1.5 1.5 0 0 0 3 0" />
  <path d="M2.5 12c0-5 4.5-9 9.5-9s9.5 4 9.5 9h-19z" />
</svg>`
  },

  // HOME / MISC (5)
  SmartHome: {
    category: "Home / Misc",
    desc: "House containing a hardware microchip",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z" />
        <rect x="9" y="10" width="6" height="6" rx="1" fill="currentColor" className="text-accent/30" />
        <path d="M12 8v2M12 16v2M8 12h2M16 12h2" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z" />
  <rect x="9" y="10" width="6" height="6" rx="1" fill="currentColor" />
  <path d="M12 8v2M12 16v2M8 12h2M16 12h2" />
</svg>`
  },
  Car: {
    category: "Home / Misc",
    desc: "Compact sedan outline",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 8 16 8H8s-2.7 2.6-4.5 3.1c-.8.2-1.5 1-1.5 1.9v3c0 .6.4 1 1 1h2" />
        <circle cx="7" cy="17" r="2.5" />
        <circle cx="17" cy="17" r="2.5" />
        <path d="M14.5 8l-2-3h-5l-2 3M2 13h20" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 8 16 8H8s-2.7 2.6-4.5 3.1c-.8.2-1.5 1-1.5 1.9v3c0 .6.4 1 1 1h2" />
  <circle cx="7" cy="17" r="2.5" /><circle cx="17" cy="17" r="2.5" />
  <path d="M14.5 8l-2-3h-5l-2 3M2 13h20" />
</svg>`
  },
  Rocket: {
    category: "Home / Misc",
    desc: "Rocket ship blasting off",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M4.5 16.5c-1.5 1.5-2.5 4.5-2.5 4.5s3-1 4.5-2.5" />
        <path d="M12 2C7 5 5 11 5.5 15.5c2-2 5-3 6.5-1s1 4.5-1 6.5c4.5.5 10.5-1.5 13.5-6.5C22 9.5 17.5 2 12 2z" />
        <circle cx="13" cy="11" r="1.5" fill="currentColor" />
        <path d="M7.5 16.5l-3.5 1M16.5 7.5l1-3.5" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <path d="M4.5 16.5c-1.5 1.5-2.5 4.5-2.5 4.5s3-1 4.5-2.5" />
  <path d="M12 2C7 5 5 11 5.5 15.5c2-2 5-3 6.5-1s1 4.5-1 6.5c4.5.5 10.5-1.5 13.5-6.5C22 9.5 17.5 2 12 2z" />
  <circle cx="13" cy="11" r="1.5" fill="currentColor" />
</svg>`
  },
  GraduationCap: {
    category: "Home / Misc",
    desc: "Academic mortarboard cap",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <polygon points="12,2 22,7 12,12 2,7" />
        <path d="M6 10v6a6 6 0 0 0 12 0v-6" />
        <path d="M21.5 7.5v8.5a1 1 0 0 1-1.5 1" />
        <circle cx="20" cy="17" r="0.75" fill="currentColor" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <polygon points="12,2 22,7 12,12 2,7" />
  <path d="M6 10v6a6 6 0 0 0 12 0v-6" />
  <path d="M21.5 7.5v8.5a1 1 0 0 1-1.5 1" />
</svg>`
  },
  Tree: {
    category: "Home / Misc",
    desc: "Pine tree outline shape",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <polygon points="12,2 4,10 8,10 3,16 9,16 7,22 17,22 15,16 21,16 16,10 20,10" />
        <path d="M12 16v6M10 22h4" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <polygon points="12,2 4,10 8,10 3,16 9,16 7,22 17,22 15,16 21,16 16,10 20,10" />
  <path d="M12 16v6" />
</svg>`
  }
};

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
