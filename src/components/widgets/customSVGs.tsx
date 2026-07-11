"use client";

import React from "react";

// Handcrafted custom vector SVG records for HomeOS Custom Icon library
export interface CustomSVGRecord {
  category: string;
  desc: string;
  draw: (props: React.SVGProps<SVGSVGElement>) => React.JSX.Element;
  raw: string;
}

export const CUSTOM_SVGS: Record<string, CustomSVGRecord> = {
  Dog: {
    category: "Animals",
    desc: "Loyal puppy face layout",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M6 18l-2-2v-4a8 8 0 0 1 16 0v4l-2 2" /><circle cx="7.5" cy="14.5" r="1.5" fill="currentColor" /><circle cx="16.5" cy="14.5" r="1.5" fill="currentColor" /><path d="M12 15v1.5M10 18h4v-1.5H10z" /><path d="M4 10l-1.5 3a1 1 0 0 0 1.5 1.2L6 13M20 10l1.5 3a1 1 0 0 1-1.5 1.2L18 13" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 18l-2-2v-4a8 8 0 0 1 16 0v4l-2 2" /><circle cx="7.5" cy="14.5" r="1.5" fill="currentColor" /><circle cx="16.5" cy="14.5" r="1.5" fill="currentColor" /><path d="M12 15v1.5M10 18h4v-1.5H10z" /><path d="M4 10l-1.5 3a1 1 0 0 0 1.5 1.2L6 13M20 10l1.5 3a1 1 0 0 1-1.5 1.2L18 13" /></svg>`
  },
  Cat: {
    category: "Animals",
    desc: "Slick cat head with whiskers",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M12 5c.7 0 1.4.1 2 .3l2.3-2.3a1 1 0 0 1 1.6.9l-.9 3.2a8 8 0 0 1 4.7 6.4v.5a3 3 0 0 1-3 3H5.3a3 3 0 0 1-3-3v-.5a8 8 0 0 1 4.7-6.4l-.9-3.2a1 1 0 0 1 1.6-.9l2.3 2.3c.6-.2 1.3-.3 2-.3z" /><circle cx="8" cy="13.5" r="1" fill="currentColor" /><circle cx="16" cy="13.5" r="1" fill="currentColor" /><path d="M12 15v1M9.5 16.5h5M6 14.5h-3M6 15.5h-3.5M18 14.5h3M18 15.5h3.5" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5c.7 0 1.4.1 2 .3l2.3-2.3a1 1 0 0 1 1.6.9l-.9 3.2a8 8 0 0 1 4.7 6.4v.5a3 3 0 0 1-3 3H5.3a3 3 0 0 1-3-3v-.5a8 8 0 0 1 4.7-6.4l-.9-3.2a1 1 0 0 1 1.6-.9l2.3 2.3c.6-.2 1.3-.3 2-.3z" /><circle cx="8" cy="13.5" r="1" fill="currentColor" /><circle cx="16" cy="13.5" r="1" fill="currentColor" /><path d="M12 15v1M9.5 16.5h5M6 14.5h-3M6 15.5h-3.5M18 14.5h3M18 15.5h3.5" /></svg>`
  },
  Fish: {
    category: "Animals",
    desc: "Minimal ocean fish swimming",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M22 12c-3.5 4.5-9 6-13 4.5S3 12 3 12s2-3 6-4.5 9.5 0 13 4.5z" /><path d="M3 12l-2 2.5V9.5L3 12z" /><circle cx="17.5" cy="11.5" r="1" fill="currentColor" /><path d="M11 11.5c-.5.5-1.5.5-2 0" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12c-3.5 4.5-9 6-13 4.5S3 12 3 12s2-3 6-4.5 9.5 0 13 4.5z" /><path d="M3 12l-2 2.5V9.5L3 12z" /><circle cx="17.5" cy="11.5" r="1" fill="currentColor" /><path d="M11 11.5c-.5.5-1.5.5-2 0" /></svg>`
  },
  Bird: {
    category: "Animals",
    desc: "Elegant bird silhouette",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M8 10a4 4 0 0 1 7.2-2.4L18 8l-2 1a4 4 0 0 1-8 1z" /><path d="M8 10c-3 1.5-6 1.5-6 4.5 0 2 2.5 3.5 5 3.5s7-4.5 11-4.5h2l-2-2.5-3-.5" /><path d="M9 18l-1.5 3M12 17.5l-1 3.5" /><circle cx="13" cy="7.5" r="0.75" fill="currentColor" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 10a4 4 0 0 1 7.2-2.4L18 8l-2 1a4 4 0 0 1-8 1z" /><path d="M8 10c-3 1.5-6 1.5-6 4.5 0 2 2.5 3.5 5 3.5s7-4.5 11-4.5h2l-2-2.5-3-.5" /><path d="M9 18l-1.5 3M12 17.5l-1 3.5" /><circle cx="13" cy="7.5" r="0.75" fill="currentColor" /></svg>`
  },
  Bear: {
    category: "Animals",
    desc: "Robust forest bear face outline",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M5 10v4a7 7 0 0 0 14 0v-4" /><path d="M5 10c0-3 3-5 7-5s7 2 7 5" /><circle cx="4.5" cy="5.5" r="2.5" /><circle cx="19.5" cy="5.5" r="2.5" /><circle cx="8" cy="10" r="1" fill="currentColor" /><circle cx="16" cy="10" r="1" fill="currentColor" /><path d="M12 12a2 2 0 0 0-2 2h4a2 2 0 0 0-2-2z" fill="currentColor" /><path d="M12 14v2.5" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 10v4a7 7 0 0 0 14 0v-4" /><path d="M5 10c0-3 3-5 7-5s7 2 7 5" /><circle cx="4.5" cy="5.5" r="2.5" /><circle cx="19.5" cy="5.5" r="2.5" /><circle cx="8" cy="10" r="1" fill="currentColor" /><circle cx="16" cy="10" r="1" fill="currentColor" /><path d="M12 12a2 2 0 0 0-2 2h4a2 2 0 0 0-2-2z" fill="currentColor" /><path d="M12 14v2.5" /></svg>`
  },
  Rabbit: {
    category: "Animals",
    desc: "Rabbit head with long ears",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M12 11c1.5 0 3 .8 4.2 2a6 6 0 0 1 1.8 4v2H6v-2c0-1.6.6-3 1.8-4A6 6 0 0 1 12 11z" /><path d="M9 11V3.5a1.5 1.5 0 0 1 3 0V11M15 11V3.5a1.5 1.5 0 0 0-3 0V11" /><circle cx="9.5" cy="15.5" r="0.75" fill="currentColor" /><circle cx="14.5" cy="15.5" r="0.75" fill="currentColor" /><path d="M12 16.5l-1 1.5h2z" fill="currentColor" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 11c1.5 0 3 .8 4.2 2a6 6 0 0 1 1.8 4v2H6v-2c0-1.6.6-3 1.8-4A6 6 0 0 1 12 11z" /><path d="M9 11V3.5a1.5 1.5 0 0 1 3 0V11M15 11V3.5a1.5 1.5 0 0 0-3 0V11" /><circle cx="9.5" cy="15.5" r="0.75" fill="currentColor" /><circle cx="14.5" cy="15.5" r="0.75" fill="currentColor" /><path d="M12 16.5l-1 1.5h2z" fill="currentColor" /></svg>`
  },
  Panda: {
    category: "Animals",
    desc: "Panda face with circular highlights",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M6 10a6 6 0 0 1 12 0v4a6 6 0 0 1-12 0v-4z" /><circle cx="5" cy="6" r="2" fill="currentColor" /><circle cx="19" cy="6" r="2" fill="currentColor" /><ellipse cx="8.5" cy="11.5" rx="1.5" ry="2" fill="currentColor" /><ellipse cx="15.5" cy="11.5" rx="1.5" ry="2" fill="currentColor" /><path d="M12 14.5a1.5 1.5 0 0 0-1.5 1.5h3a1.5 1.5 0 0 0-1.5-1.5z" fill="currentColor" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 10a6 6 0 0 1 12 0v4a6 6 0 0 1-12 0v-4z" /><circle cx="5" cy="6" r="2" fill="currentColor" /><circle cx="19" cy="6" r="2" fill="currentColor" /><ellipse cx="8.5" cy="11.5" rx="1.5" ry="2" fill="currentColor" /><ellipse cx="15.5" cy="11.5" rx="1.5" ry="2" fill="currentColor" /><path d="M12 14.5a1.5 1.5 0 0 0-1.5 1.5h3a1.5 1.5 0 0 0-1.5-1.5z" fill="currentColor" /></svg>`
  },
  Elephant: {
    category: "Animals",
    desc: "Elephant head with trunk",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M8 10a4 4 0 0 1 8 0v3h-8v-3z" /><path d="M5 10c0-1 0-3 3-3s3 2 3 3v2" /><path d="M19 10c0-1 0-3-3-3s-3 2-3 3v2" /><path d="M12 13v5a2 2 0 0 0 2 2h0.5" /><circle cx="10" cy="10" r="0.75" fill="currentColor" /><circle cx="14" cy="10" r="0.75" fill="currentColor" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 10a4 4 0 0 1 8 0v3h-8v-3z" /><path d="M5 10c0-1 0-3 3-3s3 2 3 3v2" /><path d="M19 10c0-1 0-3-3-3s-3 2-3 3v2" /><path d="M12 13v5a2 2 0 0 0 2 2h0.5" /><circle cx="10" cy="10" r="0.75" fill="currentColor" /><circle cx="14" cy="10" r="0.75" fill="currentColor" /></svg>`
  },
  Lion: {
    category: "Animals",
    desc: "Lion with a majestic mane outline",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <circle cx="12" cy="12" r="5" /><path d="M12 3c-1.5 1-2.5 0-3.5 1.5S7 4 6 5.5s.5 2.5-.5 4S4 11 4 12.5s1 2.5.5 4S6 18.5 7 19.5s1.5-.5 3 .5s2 .5 3-.5 2.5 1.5 3.5-.5 2 0 2.5-1.5s-.5-2.5.5-4S20 12 20 10.5s-1-2.5-.5-4S17 5 16 4.5s-1.5.5-3-.5" /><circle cx="10" cy="11.5" r="0.75" fill="currentColor" /><circle cx="14" cy="11.5" r="0.75" fill="currentColor" /><path d="M12 13.5l-1 1h2z" fill="currentColor" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 3c-1.5 1-2.5 0-3.5 1.5S7 4 6 5.5s.5 2.5-.5 4S4 11 4 12.5s1 2.5.5 4S6 18.5 7 19.5s1.5-.5 3 .5s2 .5 3-.5 2.5 1.5 3.5-.5 2 0 2.5-1.5s-.5-2.5.5-4S20 12 20 10.5s-1-2.5-.5-4S17 5 16 4.5s-1.5.5-3-.5" /><circle cx="10" cy="11.5" r="0.75" fill="currentColor" /><circle cx="14" cy="11.5" r="0.75" fill="currentColor" /><path d="M12 13.5l-1 1h2z" fill="currentColor" /></svg>`
  },
  Deer: {
    category: "Animals",
    desc: "Deer head with complex antlers",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M12 18l-3-4.5V11h6v2.5L12 18z" /><path d="M9 11L6.5 8.5M15 11l2.5-2.5" /><path d="M7 9V5.5M6.5 7.5H4.5M17 9V5.5M17.5 7.5h2" /><circle cx="10" cy="13.5" r="0.5" fill="currentColor" /><circle cx="14" cy="13.5" r="0.5" fill="currentColor" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 18l-3-4.5V11h6v2.5L12 18z" /><path d="M9 11L6.5 8.5M15 11l2.5-2.5" /><path d="M7 9V5.5M6.5 7.5H4.5M17 9V5.5M17.5 7.5h2" /><circle cx="10" cy="13.5" r="0.5" fill="currentColor" /><circle cx="14" cy="13.5" r="0.5" fill="currentColor" /></svg>`
  },
  Owl: {
    category: "Animals",
    desc: "Owl with large circular eyes",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M12 3a6 6 0 0 0-6 6v7a6 6 0 0 0 12 0V9a6 6 0 0 0-6-6z" /><circle cx="9" cy="9.5" r="2" /><circle cx="15" cy="9.5" r="2" /><circle cx="9" cy="9.5" r="0.75" fill="currentColor" /><circle cx="15" cy="9.5" r="0.75" fill="currentColor" /><path d="M12 10.5l-1 1.5h2z" fill="currentColor" /><path d="M8 17s2-1 4-1 4 1 4 1" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0-6 6v7a6 6 0 0 0 12 0V9a6 6 0 0 0-6-6z" /><circle cx="9" cy="9.5" r="2" /><circle cx="15" cy="9.5" r="2" /><circle cx="9" cy="9.5" r="0.75" fill="currentColor" /><circle cx="15" cy="9.5" r="0.75" fill="currentColor" /><path d="M12 10.5l-1 1.5h2z" fill="currentColor" /><path d="M8 17s2-1 4-1 4 1 4 1" /></svg>`
  },
  Turtle: {
    category: "Animals",
    desc: "Turtle shell and legs",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <circle cx="12" cy="12" r="6" /><path d="M12 3V2a1 1 0 0 1 1-1h-2a1 1 0 0 1 1 1v1M12 18v2a1 1 0 0 0 1 1h-2a1 1 0 0 0 1-1v-2M6.5 7L5 5.5M17.5 7L19 5.5M6.5 17L5 18.5M17.5 17L19 18.5" /><path d="M9 12h6M12 9v6" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="6" /><path d="M12 3V2a1 1 0 0 1 1-1h-2a1 1 0 0 1 1 1v1M12 18v2a1 1 0 0 0 1 1h-2a1 1 0 0 0 1-1v-2M6.5 7L5 5.5M17.5 7L19 5.5M6.5 17L5 18.5M17.5 17L19 18.5" /><path d="M9 12h6M12 9v6" /></svg>`
  },
  Frog: {
    category: "Animals",
    desc: "Silly frog face outline",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M4 14a8 8 0 0 0 16 0c0-3.5-3.5-5-8-5s-8 1.5-8 5z" /><circle cx="7" cy="8.5" r="2.5" /><circle cx="17" cy="8.5" r="2.5" /><circle cx="7" cy="8.5" r="1" fill="currentColor" /><circle cx="17" cy="8.5" r="1" fill="currentColor" /><path d="M7 15.5c2 2 8 2 10 0" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 14a8 8 0 0 0 16 0c0-3.5-3.5-5-8-5s-8 1.5-8 5z" /><circle cx="7" cy="8.5" r="2.5" /><circle cx="17" cy="8.5" r="2.5" /><circle cx="7" cy="8.5" r="1" fill="currentColor" /><circle cx="17" cy="8.5" r="1" fill="currentColor" /><path d="M7 15.5c2 2 8 2 10 0" /></svg>`
  },
  Monkey: {
    category: "Animals",
    desc: "Monkey face with prominent ears",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <circle cx="12" cy="13" r="5" /><circle cx="6.5" cy="11.5" r="2" /><circle cx="17.5" cy="11.5" r="2" /><path d="M12 11c-1 0-2 .5-2.5 1.5.5.5 1.5.5 2.5.5s2 0 2.5-.5c-.5-1-1.5-1.5-2.5-1.5z" fill="currentColor" /><path d="M9.5 15.5c1 1.5 4 1.5 5 0" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="13" r="5" /><circle cx="6.5" cy="11.5" r="2" /><circle cx="17.5" cy="11.5" r="2" /><path d="M12 11c-1 0-2 .5-2.5 1.5.5.5 1.5.5 2.5.5s2 0 2.5-.5c-.5-1-1.5-1.5-2.5-1.5z" fill="currentColor" /><path d="M9.5 15.5c1 1.5 4 1.5 5 0" /></svg>`
  },
  Koala: {
    category: "Animals",
    desc: "Koala face with fluffy ears",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M7 11a5 5 0 0 0 10 0v1a5 5 0 0 0-10 0v-1z" /><circle cx="5.5" cy="8.5" r="2.5" fill="currentColor" /><circle cx="18.5" cy="8.5" r="2.5" fill="currentColor" /><ellipse cx="12" cy="12.5" rx="1.25" ry="2" fill="currentColor" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 11a5 5 0 0 0 10 0v1a5 5 0 0 0-10 0v-1z" /><circle cx="5.5" cy="8.5" r="2.5" fill="currentColor" /><circle cx="18.5" cy="8.5" r="2.5" fill="currentColor" /><ellipse cx="12" cy="12.5" rx="1.25" ry="2" fill="currentColor" /></svg>`
  },
  Giraffe: {
    category: "Animals",
    desc: "Tall giraffe head & neck profile",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M16 22V7.5c0-1 .5-2 1.5-2.5h1a1 1 0 0 0 1-1V3" /><path d="M18.5 3h-2l-1.5 2H13l1 2h2v15" /><circle cx="17.5" cy="8.5" r="0.5" fill="currentColor" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 22V7.5c0-1 .5-2 1.5-2.5h1a1 1 0 0 0 1-1V3" /><path d="M18.5 3h-2l-1.5 2H13l1 2h2v15" /><circle cx="17.5" cy="8.5" r="0.5" fill="currentColor" /></svg>`
  },
  Snake: {
    category: "Animals",
    desc: "Slithering dynamic snake curve",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M4 14.5c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5c0 2.5 2 4.5 4.5 4.5s4.5-2 4.5-4.5v-3" /><circle cx="18" cy="7.5" r="1.5" fill="currentColor" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 14.5c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5c0 2.5 2 4.5 4.5 4.5s4.5-2 4.5-4.5v-3" /><circle cx="18" cy="7.5" r="1.5" fill="currentColor" /></svg>`
  },
  Spider: {
    category: "Animals",
    desc: "Creepy 8-legged spider",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <circle cx="12" cy="12" r="3.5" /><circle cx="12" cy="7" r="1.5" fill="currentColor" /><path d="M9 12H3M15 12h6M9.5 9.5L5 6M14.5 9.5L19 6M9.5 14.5L5 18M14.5 14.5L19 18" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3.5" /><circle cx="12" cy="7" r="1.5" fill="currentColor" /><path d="M9 12H3M15 12h6M9.5 9.5L5 6M14.5 9.5L19 6M9.5 14.5L5 18M14.5 14.5L19 18" /></svg>`
  },
  Butterfly: {
    category: "Animals",
    desc: "Detailed mirrored butterfly wings",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M12 4v16" /><path d="M12 6c1.5-2 5-2.5 7-1s1.5 5.5-.5 7c-2 1.5-5 .5-6.5-1M12 6c-1.5-2-5-2.5-7-1s-1.5 5.5.5 7c2 1.5 5 .5 6.5-1" /><path d="M12 13c1.5-.5 5 .5 5.5 3s-3.5 4.5-5.5 2M12 13c-1.5-.5-5 .5-5.5 3s3.5 4.5 5.5 2" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 4v16" /><path d="M12 6c1.5-2 5-2.5 7-1s1.5 5.5-.5 7c-2 1.5-5 .5-6.5-1M12 6c-1.5-2-5-2.5-7-1s-1.5 5.5.5 7c2 1.5 5 .5 6.5-1" /><path d="M12 13c1.5-.5 5 .5 5.5 3s-3.5 4.5-5.5 2M12 13c-1.5-.5-5 .5-5.5 3s3.5 4.5 5.5 2" /></svg>`
  },
  Bee: {
    category: "Animals",
    desc: "Cute flying bumblebee",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="5" y="10" width="10" height="7" rx="3.5" /><path d="M8.5 10v7M11.5 10v7M10 10c0-2.5 2-4 3.5-4S15.5 8 15 10" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="10" width="10" height="7" rx="3.5" /><path d="M8.5 10v7M11.5 10v7M10 10c0-2.5 2-4 3.5-4S15.5 8 15 10" /></svg>`
  },
  Horse: {
    category: "Animals",
    desc: "Galloping horse head profile",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M7 20c2-5 3.5-9 6-11s5.5 0 6.5.5L21 7l-2.5 2-1 2.5L14 13.5c0 1.5 1 4 2 5.5l-4-.5-5 1.5z" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 20c2-5 3.5-9 6-11s5.5 0 6.5.5L21 7l-2.5 2-1 2.5L14 13.5c0 1.5 1 4 2 5.5l-4-.5-5 1.5z" /></svg>`
  },
  Sheep: {
    category: "Animals",
    desc: "Cloudy fluffy sheep silhouette",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M9 16.5c-2 0-3-1.5-3-3s1-2.5 2.5-2.5 2.5-.5 3.5.5c1-1 2-1 3.5-.5s2 1.5 2 3c0 2-1.5 3-3.5 3H9z" /><path d="M9 16.5l-1 3.5M13 16.5l-1 3.5" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 16.5c-2 0-3-1.5-3-3s1-2.5 2.5-2.5 2.5-.5 3.5.5c1-1 2-1 3.5-.5s2 1.5 2 3c0 2-1.5 3-3.5 3H9z" /><path d="M9 16.5l-1 3.5M13 16.5l-1 3.5" /></svg>`
  },
  Pig: {
    category: "Animals",
    desc: "Pig face with circular nose snout",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <circle cx="12" cy="12" r="7" /><circle cx="12" cy="13.5" r="2.5" /><circle cx="7.5" cy="9.5" r="0.75" fill="currentColor" /><circle cx="16.5" cy="9.5" r="0.75" fill="currentColor" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="7" /><circle cx="12" cy="13.5" r="2.5" /><circle cx="7.5" cy="9.5" r="0.75" fill="currentColor" /><circle cx="16.5" cy="9.5" r="0.75" fill="currentColor" /></svg>`
  },
  Dolphin: {
    category: "Animals",
    desc: "Jumping dolphin silhouette",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M3 18c4-4 8-6.5 13-5s6-2 6-2-2-1.5-5-2-7.5.5-11 5" /><path d="M22 11c-2 2-3 4-6 4" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18c4-4 8-6.5 13-5s6-2 6-2-2-1.5-5-2-7.5.5-11 5" /><path d="M22 11c-2 2-3 4-6 4" /></svg>`
  },
  Octopus: {
    category: "Animals",
    desc: "Handcrafted sea octopus with tentacles",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M12 3a6 6 0 0 0-6 6v3a6 6 0 0 0 12 0V9a6 6 0 0 0-6-6z" /><path d="M6 14.5s-2 2.5-1 4M9 15s-2.5 3-1.5 5.5M12 15v5.5M15 15s2.5 3 1.5 5.5M18 14.5s2 2.5 1 4" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0-6 6v3a6 6 0 0 0 12 0V9a6 6 0 0 0-6-6z" /><path d="M6 14.5s-2 2.5-1 4M9 15s-2.5 3-1.5 5.5M12 15v5.5M15 15s2.5 3 1.5 5.5M18 14.5s2 2.5 1 4" /></svg>`
  },
  SoccerBall: {
    category: "Sports",
    desc: "Classic soccer ball with line details",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <circle cx="12" cy="12" r="10" /><polygon points="12,9 14.5,11 13.5,14 10.5,14 9.5,11" fill="currentColor" /><path d="M12 9l-1.5-3M14.5 11l3-1.5M13.5 14L15 17M10.5 14L9 17M9.5 11l-3-1.5" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polygon points="12,9 14.5,11 13.5,14 10.5,14 9.5,11" fill="currentColor" /><path d="M12 9l-1.5-3M14.5 11l3-1.5M13.5 14L15 17M10.5 14L9 17M9.5 11l-3-1.5" /></svg>`
  },
  Basketball: {
    category: "Sports",
    desc: "Basketball outline with seams",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <circle cx="12" cy="12" r="10" /><path d="M12 2v20M2 12h20" /><path d="M6 4.5c2.5 3 2.5 12 0 15M18 4.5c-2.5 3-2.5 12 0 15" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 2v20M2 12h20" /><path d="M6 4.5c2.5 3 2.5 12 0 15M18 4.5c-2.5 3-2.5 12 0 15" /></svg>`
  },
  Baseball: {
    category: "Sports",
    desc: "Baseball with curved seams",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <circle cx="12" cy="12" r="10" /><path d="M5 8c3 1.5 5.5 4 5.5 8M18.5 8c-3 1.5-5.5 4-5.5 8" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M5 8c3 1.5 5.5 4 5.5 8M18.5 8c-3 1.5-5.5 4-5.5 8" /></svg>`
  },
  Football: {
    category: "Sports",
    desc: "American football laces",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M2.5 12c4-7 15-7 19 0-4 7-15 7-19 0z" /><path d="M12 7.5v9M9.5 10v4M14.5 10v4M7 12h10" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 12c4-7 15-7 19 0-4 7-15 7-19 0z" /><path d="M12 7.5v9M9.5 10v4M14.5 10v4M7 12h10" /></svg>`
  },
  TennisBall: {
    category: "Sports",
    desc: "Tennis ball seam curvature",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <circle cx="12" cy="12" r="10" /><path d="M2.5 12C7 7 17 7 21.5 12" /><path d="M2.5 12c4.5 5 14.5 5 19 0" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M2.5 12C7 7 17 7 21.5 12" /><path d="M2.5 12c4.5 5 14.5 5 19 0" /></svg>`
  },
  GolfBall: {
    category: "Sports",
    desc: "Golf tee with resting golf ball",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <circle cx="12" cy="8" r="6" /><path d="M12 14v6M10 21.5h4M9.5 14c1 1.5 4 1.5 5 0" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6" /><path d="M12 14v6M10 21.5h4M9.5 14c1 1.5 4 1.5 5 0" /></svg>`
  },
  Trophy: {
    category: "Sports",
    desc: "Detailed championship trophy",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18" /><path d="M6 4h12v7a6 6 0 0 1-12 0V4z" /><path d="M12 15v4M8 20h8" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18" /><path d="M6 4h12v7a6 6 0 0 1-12 0V4z" /><path d="M12 15v4M8 20h8" /></svg>`
  },
  Medal: {
    category: "Sports",
    desc: "Award ribbon with circular medallion",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <circle cx="12" cy="14" r="5" /><polyline points="8,2 12,9 16,2" /><polyline points="10,2 10,8M14,2 14,8" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="14" r="5" /><polyline points="8,2 12,9 16,2" /><polyline points="10,2 10,8M14,2 14,8" /></svg>`
  },
  Whistle: {
    category: "Sports",
    desc: "Referee whistle design",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M10 14H3V7h10a4 4 0 0 1 4 4v3" /><path d="M17 10h4v2.5H17z" /><circle cx="8" cy="10.5" r="1.5" fill="currentColor" /><path d="M13 14H3v3.5A1.5 1.5 0 0 0 4.5 19H7a1 1 0 0 0 1-1v-4" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 14H3V7h10a4 4 0 0 1 4 4v3" /><path d="M17 10h4v2.5H17z" /><circle cx="8" cy="10.5" r="1.5" fill="currentColor" /><path d="M13 14H3v3.5A1.5 1.5 0 0 0 4.5 19H7a1 1 0 0 0 1-1v-4" /></svg>`
  },
  Sneaker: {
    category: "Sports",
    desc: "Sleek running shoe profile",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M3 17h18l-1.5-4.5L14 12H9L6.5 9.5 3 10v7z" /><path d="M7.5 12L9 9.5M10.5 12l1-2.5M3 15.5h18M3 17a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 17h18l-1.5-4.5L14 12H9L6.5 9.5 3 10v7z" /><path d="M7.5 12L9 9.5M10.5 12l1-2.5M3 15.5h18M3 17a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1" /></svg>`
  },
  Bicycle: {
    category: "Sports",
    desc: "Bicycle wireframe outline",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <circle cx="5.5" cy="15.5" r="3.5" /><circle cx="18.5" cy="15.5" r="3.5" /><polyline points="5.5,15.5 10,9 15.5,15.5 18.5,15.5" /><polyline points="10,9 12,5 15.5,5" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="5.5" cy="15.5" r="3.5" /><circle cx="18.5" cy="15.5" r="3.5" /><polyline points="5.5,15.5 10,9 15.5,15.5 18.5,15.5" /><polyline points="10,9 12,5 15.5,5" /></svg>`
  },
  Bowling: {
    category: "Sports",
    desc: "Bowling pin and finger-hole ball",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <circle cx="7.5" cy="14.5" r="5.5" /><circle cx="6" cy="12" r="0.75" fill="currentColor" /><circle cx="8" cy="11.5" r="0.75" fill="currentColor" /><circle cx="8" cy="13.5" r="0.75" fill="currentColor" /><path d="M18 4.5a1.5 1.5 0 0 1 3 0L19.5 9v11h-3V9L18 4.5z" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="7.5" cy="14.5" r="5.5" /><circle cx="6" cy="12" r="0.75" fill="currentColor" /><circle cx="8" cy="11.5" r="0.75" fill="currentColor" /><circle cx="8" cy="13.5" r="0.75" fill="currentColor" /><path d="M18 4.5a1.5 1.5 0 0 1 3 0L19.5 9v11h-3V9L18 4.5z" /></svg>`
  },
  Dumbbell: {
    category: "Sports",
    desc: "Fitness hand weight bar",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M6.5 4h-2a1.5 1.5 0 0 0-1.5 1.5v13A1.5 1.5 0 0 0 4.5 20h2M17.5 4h2a1.5 1.5 0 0 1 1.5 1.5v13A1.5 1.5 0 0 1 19.5 20h-2" /><path d="M3 8.5h3.5v7H3v-7zM17.5 8.5H21v7h-3.5v-7zM6.5 12h11" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6.5 4h-2a1.5 1.5 0 0 0-1.5 1.5v13A1.5 1.5 0 0 0 4.5 20h2M17.5 4h2a1.5 1.5 0 0 1 1.5 1.5v13A1.5 1.5 0 0 1 19.5 20h-2" /><path d="M3 8.5h3.5v7H3v-7zM17.5 8.5H21v7h-3.5v-7zM6.5 12h11" /></svg>`
  },
  PingPong: {
    category: "Sports",
    desc: "Table tennis paddle and ball",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <circle cx="11.5" cy="9.5" r="5.5" /><path d="M9.5 14.5l-4.5 5a1 1 0 0 0 1.5 1.5l5-4.5" /><circle cx="17.5" cy="15.5" r="1.5" fill="currentColor" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11.5" cy="9.5" r="5.5" /><path d="M9.5 14.5l-4.5 5a1 1 0 0 0 1.5 1.5l5-4.5" /><circle cx="17.5" cy="15.5" r="1.5" fill="currentColor" /></svg>`
  },
  Target: {
    category: "Sports",
    desc: "Bullseye target with scoring circles",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6.5" /><circle cx="12" cy="12" r="3" fill="currentColor" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6.5" /><circle cx="12" cy="12" r="3" fill="currentColor" /></svg>`
  },
  Helmet: {
    category: "Sports",
    desc: "Gridiron football helmet outline",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M5 14.5V11a7 7 0 0 1 14 0v3.5" /><path d="M5 14.5h14M8.5 14.5v3.5h7v-3.5" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 14.5V11a7 7 0 0 1 14 0v3.5" /><path d="M5 14.5h14M8.5 14.5v3.5h7v-3.5" /></svg>`
  },
  Skateboard: {
    category: "Sports",
    desc: "Skateboard deck and wheels layout",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="2" y="9.5" width="20" height="3" rx="1.5" /><circle cx="6.5" cy="15.5" r="2" /><circle cx="17.5" cy="15.5" r="2" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="9.5" width="20" height="3" rx="1.5" /><circle cx="6.5" cy="15.5" r="2" /><circle cx="17.5" cy="15.5" r="2" /></svg>`
  },
  Skiing: {
    category: "Sports",
    desc: "Crossed skis with poles",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M3 21l18-18M21 3v2M21 21L3 3" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21l18-18M21 3v2M21 21L3 3" /></svg>`
  },
  Sword: {
    category: "Sports",
    desc: "Crossed fencing swords",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M18.5 5.5L5.5 18.5M5.5 18.5L3.5 20.5" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18.5 5.5L5.5 18.5M5.5 18.5L3.5 20.5" /></svg>`
  },
  CompassNav: {
    category: "Sports",
    desc: "Directional hiking compass",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <circle cx="12" cy="12" r="10" /><polygon points="12,6 14.5,12 12,18 9.5,12" fill="currentColor" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polygon points="12,6 14.5,12 12,18 9.5,12" fill="currentColor" /></svg>`
  },
  Campfire: {
    category: "Sports",
    desc: "Campfire logs and flame",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M5 19l14-5M19 19L5 14" /><path d="M12 4.5c2.5 3 2.5 7 0 10.5" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 19l14-5M19 19L5 14" /><path d="M12 4.5c2.5 3 2.5 7 0 10.5" /></svg>`
  },
  Map: {
    category: "Sports",
    desc: "Folded adventure tracking map",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M3 6l6-3 6 3 6-3v15l-6 3-6-3-6 3V6z" /><path d="M9 3v15M15 6v15" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6l6-3 6 3 6-3v15l-6 3-6-3-6 3V6z" /><path d="M9 3v15M15 6v15" /></svg>`
  },
  Dice: {
    category: "Sports",
    desc: "Tabletop gaming dice showing dots",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="4" y="4" width="16" height="16" rx="3" /><circle cx="12" cy="12" r="1" fill="currentColor" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="3" /><circle cx="12" cy="12" r="1" fill="currentColor" /></svg>`
  },
  Controller: {
    category: "Sports",
    desc: "Retro game console controller",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="2" y="6" width="20" height="12" rx="4" /><path d="M6 12h4v-4h-4z" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="6" width="20" height="12" rx="4" /><path d="M6 12h4v-4h-4z" /></svg>`
  },
  ChessKing: {
    category: "Sports",
    desc: "Chess king board piece",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M5 20h14v-2.5h-14V20z" /><path d="M7 17.5L5 9.5l3.5 2.5L12 6l3.5 6L19 9.5l-2 8H7z" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 20h14v-2.5h-14V20z" /><path d="M7 17.5L5 9.5l3.5 2.5L12 6l3.5 6L19 9.5l-2 8H7z" /></svg>`
  },
  Sunny: {
    category: "Weather",
    desc: "Bright sun with detailed ray points",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <circle cx="12" cy="12" r="4" fill="currentColor" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2.2 2.2M16.8 16.8L19 19M5 19l2.2-2.2M16.8 7.2L19 5" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4" fill="currentColor" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2.2 2.2M16.8 16.8L19 19M5 19l2.2-2.2M16.8 7.2L19 5" /></svg>`
  },
  Cloudy: {
    category: "Weather",
    desc: "Fluffy cloud outline",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M17.5 18a4.5 4.5 0 0 0 0-9h-.7a7 7 0 1 0-11.9 3.2 4 4 0 0 0 1.1 7.8h11.5z" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 18a4.5 4.5 0 0 0 0-9h-.7a7 7 0 1 0-11.9 3.2 4 4 0 0 0 1.1 7.8h11.5z" /></svg>`
  },
  Rainy: {
    category: "Weather",
    desc: "Cloud with slanted raindrops",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M16 14a4 4 0 0 0 0-8h-.7a6 6 0 1 0-10 2.2 3.5 3.5 0 0 0 .7 6.8h10z" /><path d="M7.5 17l-1 3M11.5 17l-1 3M15.5 17l-1 3" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 14a4 4 0 0 0 0-8h-.7a6 6 0 1 0-10 2.2 3.5 3.5 0 0 0 .7 6.8h10z" /><path d="M7.5 17l-1 3M11.5 17l-1 3M15.5 17l-1 3" /></svg>`
  },
  Stormy: {
    category: "Weather",
    desc: "Rain cloud with custom lightning bolt",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M16 14a4 4 0 0 0 0-8h-.7a6 6 0 1 0-10 2.2 3.5 3.5 0 0 0 .7 6.8h10z" /><polygon points="11.5,15 9.5,19 12.5,19 10.5,23 14.5,17 11.5,17" fill="currentColor" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 14a4 4 0 0 0 0-8h-.7a6 6 0 1 0-10 2.2 3.5 3.5 0 0 0 .7 6.8h10z" /><polygon points="11.5,15 9.5,19 12.5,19 10.5,23 14.5,17 11.5,17" fill="currentColor" /></svg>`
  },
  Snowy: {
    category: "Weather",
    desc: "Cloud with falling snowflakes",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M16 14a4 4 0 0 0 0-8h-.7a6 6 0 1 0-10 2.2 3.5 3.5 0 0 0 .7 6.8h10z" /><circle cx="7.5" cy="18" r="0.75" fill="currentColor" /><circle cx="11.5" cy="18" r="0.75" fill="currentColor" /><circle cx="15.5" cy="18" r="0.75" fill="currentColor" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 14a4 4 0 0 0 0-8h-.7a6 6 0 1 0-10 2.2 3.5 3.5 0 0 0 .7 6.8h10z" /><circle cx="7.5" cy="18" r="0.75" fill="currentColor" /><circle cx="11.5" cy="18" r="0.75" fill="currentColor" /><circle cx="15.5" cy="18" r="0.75" fill="currentColor" /></svg>`
  },
  Windy: {
    category: "Weather",
    desc: "Double blowing wind currents",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M3 8.5h15a2.5 2.5 0 0 0 2.5-2.5h0A2.5 2.5 0 0 0 18 3.5" /><path d="M2 12.5h18a2.5 2.5 0 0 1 2.5 2.5h0A2.5 2.5 0 0 1 20 17.5" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 8.5h15a2.5 2.5 0 0 0 2.5-2.5h0A2.5 2.5 0 0 0 18 3.5" /><path d="M2 12.5h18a2.5 2.5 0 0 1 2.5 2.5h0A2.5 2.5 0 0 1 20 17.5" /></svg>`
  },
  Tornado: {
    category: "Weather",
    desc: "Swirling tornado vortex outline",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M2.5 4h19M4 8h16M6.5 12h11M8.5 16h7M10.5 20h3" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 4h19M4 8h16M6.5 12h11M8.5 16h7M10.5 20h3" /></svg>`
  },
  Rainbow: {
    category: "Weather",
    desc: "Arching multi-layer rainbow curves",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M4 18a8 8 0 0 1 16 0M7 18a5 5 0 0 1 10 0" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 18a8 8 0 0 1 16 0M7 18a5 5 0 0 1 10 0" /></svg>`
  },
  Moony: {
    category: "Weather",
    desc: "Crescent moon with distant stars",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M12 3a9 9 0 1 0 9 9 7.5 7.5 0 0 1-9-9z" fill="currentColor" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a9 9 0 1 0 9 9 7.5 7.5 0 0 1-9-9z" fill="currentColor" /></svg>`
  },
  HotSun: {
    category: "Weather",
    desc: "Sun paired with a thermometer",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M10 12c-2.2 0-4-1.8-4-4s1.8-4 4-4M10 2V1M4 5.5l-1-1" /><path d="M17 11.5V17a2.5 2.5 0 0 0 1.5 2.3v1.2a1 1 0 0 1-2 0v-1.2A2.5 2.5 0 0 0 18 17v-5.5h-1z" fill="currentColor" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 12c-2.2 0-4-1.8-4-4s1.8-4 4-4M10 2V1M4 5.5l-1-1" /><path d="M17 11.5V17a2.5 2.5 0 0 0 1.5 2.3v1.2a1 1 0 0 1-2 0v-1.2A2.5 2.5 0 0 0 18 17v-5.5h-1z" fill="currentColor" /></svg>`
  },
  ColdSnow: {
    category: "Weather",
    desc: "Detailed geometric snowflake",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M12 2v20M2 12h20M5.5 5.5l13 13" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M2 12h20M5.5 5.5l13 13" /></svg>`
  },
  Sunrise: {
    category: "Weather",
    desc: "Rising sun over water waves",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M17 14a5 5 0 0 0-10 0M12 9V5" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 14a5 5 0 0 0-10 0M12 9V5" /></svg>`
  },
  Sunset: {
    category: "Weather",
    desc: "Sun setting behind mountains",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M16 11c0-2.2-1.8-4-4-4s-4 1.8-4 4M3 13.5h18" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 11c0-2.2-1.8-4-4-4s-4 1.8-4 4M3 13.5h18" /></svg>`
  },
  Foggy: {
    category: "Weather",
    desc: "Mist lines layered under a cloud",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M17.5 12a4.5 4.5 0 0 0 0-9H17a7 7 0 1 0-12 3.5M4 14.5h16" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 12a4.5 4.5 0 0 0 0-9H17a7 7 0 1 0-12 3.5M4 14.5h16" /></svg>`
  },
  Umbrella: {
    category: "Weather",
    desc: "Open umbrella sheltering rain",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M12 12v7.5a1.5 1.5 0 0 0 3 0M2.5 12c0-5 4.5-9 9.5-9s9.5 4 9.5 9h-19z" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 12v7.5a1.5 1.5 0 0 0 3 0M2.5 12c0-5 4.5-9 9.5-9s9.5 4 9.5 9h-19z" /></svg>`
  },
  FullMoon: {
    category: "Weather",
    desc: "Cratered full moon circle",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <circle cx="12" cy="12" r="10" fill="currentColor" /><circle cx="8" cy="8" r="1.5" /><circle cx="16" cy="10" r="2" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" fill="currentColor" /><circle cx="8" cy="8" r="1.5" /><circle cx="16" cy="10" r="2" /></svg>`
  },
  StarryNight: {
    category: "Weather",
    desc: "Night sky with multiple stars",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M12 3a9 9 0 0 0 9 9" fill="currentColor" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a9 9 0 0 0 9 9" fill="currentColor" /></svg>`
  },
  Meteor: {
    category: "Weather",
    desc: "Falling asteroid meteor fire tail",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <circle cx="18" cy="6" r="3.5" fill="currentColor" /><path d="M15.5 8.5L3 21" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="6" r="3.5" fill="currentColor" /><path d="M15.5 8.5L3 21" /></svg>`
  },
  Galaxy: {
    category: "Weather",
    desc: "Spiral outer space galaxy",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M12 12c3-4 6-2 6 0s-3 4-6 4" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 12c3-4 6-2 6 0s-3 4-6 4" /></svg>`
  },
  LightningBolt: {
    category: "Weather",
    desc: "High energy lightning warning sign",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <polygon points="13.5,2 5,12.5 12,12.5 10.5,22 19,11.5 12,11.5" fill="currentColor" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13.5,2 5,12.5 12,12.5 10.5,22 19,11.5 12,11.5" fill="currentColor" /></svg>`
  },
  HeavyRain: {
    category: "Weather",
    desc: "Drenching downpour rain storm",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M16 12a4 4 0 0 0 0-8h-.7M6 14h10" /><path d="M6.5 15l-1.5 5M9.5 15l-1.5 5M12.5 15l-1.5 5M15.5 15l-1.5 5" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 12a4 4 0 0 0 0-8h-.7M6 14h10" /><path d="M6.5 15l-1.5 5M9.5 15l-1.5 5M12.5 15l-1.5 5M15.5 15l-1.5 5" /></svg>`
  },
  Hail: {
    category: "Weather",
    desc: "Storm cloud with falling ice hail",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M16 12a4 4 0 0 0 0-8" /><circle cx="7" cy="16" r="1" fill="currentColor" /><circle cx="12" cy="16" r="1" fill="currentColor" /><circle cx="17" cy="16" r="1" fill="currentColor" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 12a4 4 0 0 0 0-8" /><circle cx="7" cy="16" r="1" fill="currentColor" /><circle cx="12" cy="16" r="1" fill="currentColor" /><circle cx="17" cy="16" r="1" fill="currentColor" /></svg>`
  },
  Eclipse: {
    category: "Weather",
    desc: "Solar eclipse corona ring",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <circle cx="12" cy="12" r="8" /><circle cx="10" cy="12" r="8" fill="currentColor" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="8" /><circle cx="10" cy="12" r="8" fill="currentColor" /></svg>`
  },
  CloudSunRain: {
    category: "Weather",
    desc: "Cloud, sun and rain drops together",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M12 9a4 4 0 0 1 4 4" /><path d="M6 14h8" /><path d="M7 17v2M11 17v2" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 9a4 4 0 0 1 4 4" /><path d="M6 14h8" /><path d="M7 17v2M11 17v2" /></svg>`
  },
  CloudLightning: {
    category: "Weather",
    desc: "Single cloud firing lightning",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M19 10a4 4 0 0 0-8-1.5" /><polygon points="13,12 9,17 12,17 10,22 15,15 12,15" fill="currentColor" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 10a4 4 0 0 0-8-1.5" /><polygon points="13,12 9,17 12,17 10,22 15,15 12,15" fill="currentColor" /></svg>`
  },
  CoffeeCup: {
    category: "Food & Drink",
    desc: "Hot mug filled with coffee steam",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M5 8h11a3 3 0 0 1 3 3v5a5 5 0 0 1-5 5H10a5 5 0 0 1-5-5V8z" /><path d="M19 11h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 8h11a3 3 0 0 1 3 3v5a5 5 0 0 1-5 5H10a5 5 0 0 1-5-5V8z" /><path d="M19 11h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2" /></svg>`
  },
  IceCream: {
    category: "Food & Drink",
    desc: "Scoop ice cream in a waffle cone",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M12 12c3 0 4-4 4-6s-2.5-3-4-3-4 1-4 3 1 6 4 6z" /><path d="M8 11.5L12 21l4-9.5H8z" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 12c3 0 4-4 4-6s-2.5-3-4-3-4 1-4 3 1 6 4 6z" /><path d="M8 11.5L12 21l4-9.5H8z" /></svg>`
  },
  Pizza: {
    category: "Food & Drink",
    desc: "Tasty triangular pizza slice",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <polygon points="12,3 2,21 22,21" /><circle cx="12" cy="15" r="1" fill="currentColor" /><circle cx="8" cy="18" r="1" fill="currentColor" /><circle cx="16" cy="18" r="1" fill="currentColor" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12,3 2,21 22,21" /><circle cx="12" cy="15" r="1" fill="currentColor" /><circle cx="8" cy="18" r="1" fill="currentColor" /><circle cx="16" cy="18" r="1" fill="currentColor" /></svg>`
  },
  Burger: {
    category: "Food & Drink",
    desc: "Stacked hamburger with buns and patty",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M3 11a9 9 0 0 1 18 0v1H3v-1zM3 18a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-1H3v1z" /><rect x="2" y="13" width="20" height="3" rx="1.5" fill="currentColor" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11a9 9 0 0 1 18 0v1H3v-1zM3 18a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-1H3v1z" /><rect x="2" y="13" width="20" height="3" rx="1.5" fill="currentColor" /></svg>`
  },
  WineGlass: {
    category: "Food & Drink",
    desc: "Wine goblet glass with liquid",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M6 3h12v7a6 6 0 0 1-12 0V3z" /><path d="M12 10v9M8 20h8" /><path d="M6 7h12" className="opacity-40" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3h12v7a6 6 0 0 1-12 0V3z" /><path d="M12 10v9M8 20h8" /><path d="M6 7h12" className="opacity-40" /></svg>`
  },
  BeerMug: {
    category: "Food & Drink",
    desc: "Frothy Bavarian beer pint",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="5" y="6" width="11" height="15" rx="2" /><path d="M16 9h3a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-3" /><path d="M5 6a3 3 0 0 1 11 0" fill="currentColor" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="6" width="11" height="15" rx="2" /><path d="M16 9h3a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-3" /><path d="M5 6a3 3 0 0 1 11 0" fill="currentColor" /></svg>`
  },
  Cookie: {
    category: "Food & Drink",
    desc: "Bitten sweet chocolate chip cookie",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <circle cx="12" cy="12" r="10" /><circle cx="8" cy="8" r="1" fill="currentColor" /><circle cx="16" cy="9" r="1" fill="currentColor" /><circle cx="15" cy="15" r="1" fill="currentColor" /><circle cx="9" cy="14" r="1" fill="currentColor" /><path d="M21 10.5a2.5 2.5 0 0 0-2.5-2.5" className="opacity-30" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="8" cy="8" r="1" fill="currentColor" /><circle cx="16" cy="9" r="1" fill="currentColor" /><circle cx="15" cy="15" r="1" fill="currentColor" /><circle cx="9" cy="14" r="1" fill="currentColor" /><path d="M21 10.5a2.5 2.5 0 0 0-2.5-2.5" className="opacity-30" /></svg>`
  },
  Doughnut: {
    category: "Food & Drink",
    desc: "Frosted doughnut with sprinkles",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="3.5" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="3.5" /></svg>`
  },
  Egg: {
    category: "Food & Drink",
    desc: "Frying pan egg sunny side up",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M12 2C7.5 2 4 6 4 11s3.5 11 8 11 8-6 8-11-3.5-9-8-9z" /><circle cx="12" cy="13" r="3" fill="currentColor" className="text-yellow-500" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C7.5 2 4 6 4 11s3.5 11 8 11 8-6 8-11-3.5-9-8-9z" /><circle cx="12" cy="13" r="3" fill="currentColor" className="text-yellow-500" /></svg>`
  },
  Avocado: {
    category: "Food & Drink",
    desc: "Sliced avocado showing core pit",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M12 2C8 2 6 6 6 12s2.5 10 6 10 6-4 6-10-2-10-6-10z" /><circle cx="12" cy="14" r="3.5" fill="currentColor" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C8 2 6 6 6 12s2.5 10 6 10 6-4 6-10-2-10-6-10z" /><circle cx="12" cy="14" r="3.5" fill="currentColor" /></svg>`
  },
  Carrot: {
    category: "Food & Drink",
    desc: "Fresh organic carrot root",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M20 4l-4 4M18.5 7.5L5 21a1.5 1.5 0 0 1-2-2L16.5 5.5" /><path d="M17 3c2-2 4 0 4 0" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 4l-4 4M18.5 7.5L5 21a1.5 1.5 0 0 1-2-2L16.5 5.5" /><path d="M17 3c2-2 4 0 4 0" /></svg>`
  },
  Strawberry: {
    category: "Food & Drink",
    desc: "Fresh strawberry berry",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M12 21.5c-4.5-3.5-7-7-7-10.5a5 5 0 0 1 10 0c0 3.5-2.5 7-7 10.5z" /><path d="M9 7c1-2 4-2 6 0" fill="currentColor" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21.5c-4.5-3.5-7-7-7-10.5a5 5 0 0 1 10 0c0 3.5-2.5 7-7 10.5z" /><path d="M9 7c1-2 4-2 6 0" fill="currentColor" /></svg>`
  },
  ChefHat: {
    category: "Food & Drink",
    desc: "Professional bakery chef hat",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M6 17.5V19h12v-1.5" /><path d="M6 17.5c-2.5 0-3.5-3-1-4.5.5-.3 1-.3 1.5 0v-4A5.5 5.5 0 0 1 18 9v4c.5-.3 1-.3 1.5 0 2.5 1.5 1.5 4.5-1 4.5H6z" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 17.5V19h12v-1.5" /><path d="M6 17.5c-2.5 0-3.5-3-1-4.5.5-.3 1-.3 1.5 0v-4A5.5 5.5 0 0 1 18 9v4c.5-.3 1-.3 1.5 0 2.5 1.5 1.5 4.5-1 4.5H6z" /></svg>`
  },
  CoffeeBeans: {
    category: "Food & Drink",
    desc: "Roasted espresso coffee beans",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <ellipse cx="8" cy="12" rx="4" ry="6" transform="rotate(-30 8 12)" /><ellipse cx="16" cy="12" rx="4" ry="6" transform="rotate(30 16 12)" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="8" cy="12" rx="4" ry="6" transform="rotate(-30 8 12)" /><ellipse cx="16" cy="12" rx="4" ry="6" transform="rotate(30 16 12)" /></svg>`
  },
  AppleHealth: {
    category: "Food & Drink",
    desc: "Crisp apple representing health",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M12 7.5c-1.5-2.5-5-2.5-6.5-1A5 5 0 0 0 5 13.5c0 3.5 4.5 7.5 7 7.5s7-4 7-7.5a5 5 0 0 0-.5-7c-1.5-1.5-5-1.5-6.5 1z" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 7.5c-1.5-2.5-5-2.5-6.5-1A5 5 0 0 0 5 13.5c0 3.5 4.5 7.5 7 7.5s7-4 7-7.5a5 5 0 0 0-.5-7c-1.5-1.5-5-1.5-6.5 1z" /></svg>`
  },
  Cocktail: {
    category: "Food & Drink",
    desc: "Cocktail glass with olive garnish",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <polygon points="3,4 21,4 12,13" /><path d="M12 13v7M8 20h8" /><circle cx="7" cy="8" r="1.5" fill="currentColor" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="3,4 21,4 12,13" /><path d="M12 13v7M8 20h8" /><circle cx="7" cy="8" r="1.5" fill="currentColor" /></svg>`
  },
  Banana: {
    category: "Food & Drink",
    desc: "Peeled yellow banana",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M5 21s11-2 14-11c2-6-3-7-3-7s.5 4-2.5 7-5.5 3.5-8.5 11z" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 21s11-2 14-11c2-6-3-7-3-7s.5 4-2.5 7-5.5 3.5-8.5 11z" /></svg>`
  },
  Cheese: {
    category: "Food & Drink",
    desc: "Swiss cheese wedge with holes",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <polygon points="3,19 21,19 18,5 3,11" /><circle cx="8" cy="13" r="1" fill="currentColor" /><circle cx="13" cy="15" r="1" fill="currentColor" /><circle cx="12" cy="10" r="1.5" fill="currentColor" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="3,19 21,19 18,5 3,11" /><circle cx="8" cy="13" r="1" fill="currentColor" /><circle cx="13" cy="15" r="1" fill="currentColor" /><circle cx="12" cy="10" r="1.5" fill="currentColor" /></svg>`
  },
  MugTea: {
    category: "Food & Drink",
    desc: "Herbal tea mug with tag",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="6" y="8" width="10" height="12" rx="2" /><path d="M16 11h3a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-3M9 8V5h2" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="8" width="10" height="12" rx="2" /><path d="M16 11h3a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-3M9 8V5h2" /></svg>`
  },
  Bread: {
    category: "Food & Drink",
    desc: "Sliced bakery bread loaf",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M5 20h14a3 3 0 0 0 3-3V9a5 5 0 0 0-5-5H7a5 5 0 0 0-5 5v8a3 3 0 0 0 3 3z" /><path d="M6 4v16M11 4v16M16 4v16" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 20h14a3 3 0 0 0 3-3V9a5 5 0 0 0-5-5H7a5 5 0 0 0-5 5v8a3 3 0 0 0 3 3z" /><path d="M6 4v16M11 4v16M16 4v16" /></svg>`
  },
  Honey: {
    category: "Food & Drink",
    desc: "Honey pot container jar",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="5" y="8" width="14" height="12" rx="3" /><path d="M8 8V5h8v3" /><circle cx="12" cy="13" r="2.5" fill="currentColor" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="8" width="14" height="12" rx="3" /><path d="M8 8V5h8v3" /><circle cx="12" cy="13" r="2.5" fill="currentColor" /></svg>`
  },
  Soup: {
    category: "Food & Drink",
    desc: "Warm bowl of soup steam",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M3 12h18a9 9 0 0 1-18 0z" /><path d="M7 8V5M12 8V4M17 8V5" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12h18a9 9 0 0 1-18 0z" /><path d="M7 8V5M12 8V4M17 8V5" /></svg>`
  },
  Meat: {
    category: "Food & Drink",
    desc: "Prime cut steak outline",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M12 4c5 0 9 3 9 7s-4 9-9 9-9-3-9-7 4-9 9-9z" /><circle cx="12" cy="11" r="2" fill="currentColor" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 4c5 0 9 3 9 7s-4 9-9 9-9-3-9-7 4-9 9-9z" /><circle cx="12" cy="11" r="2" fill="currentColor" /></svg>`
  },
  FishBone: {
    category: "Food & Drink",
    desc: "Fish bone skeleton outline",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M3 12h18M18 12l3-3.5M18 12l3 3.5M7 7v10M11 7v10M15 7v10" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12h18M18 12l3-3.5M18 12l3 3.5M7 7v10M11 7v10M15 7v10" /></svg>`
  },
  Candy: {
    category: "Food & Drink",
    desc: "Wrapped sweet candy piece",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <circle cx="12" cy="12" r="5" /><path d="M8 12L3 8.5v7zM16 12l5-3.5v7z" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M8 12L3 8.5v7zM16 12l5-3.5v7z" /></svg>`
  },
  Car: {
    category: "Transportation",
    desc: "Compact sedan outline",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 8 16 8H8s-2.7 2.6-4.5 3.1c-.8.2-1.5 1-1.5 1.9v3c0 .6.4 1 1 1h2" /><circle cx="7" cy="17" r="2.5" /><circle cx="17" cy="17" r="2.5" /><path d="M14.5 8l-2-3h-5l-2 3M2 13h20" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 8 16 8H8s-2.7 2.6-4.5 3.1c-.8.2-1.5 1-1.5 1.9v3c0 .6.4 1 1 1h2" /><circle cx="7" cy="17" r="2.5" /><circle cx="17" cy="17" r="2.5" /><path d="M14.5 8l-2-3h-5l-2 3M2 13h20" /></svg>`
  },
  Rocket: {
    category: "Transportation",
    desc: "Rocket ship blasting off",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M4.5 16.5c-1.5 1.5-2.5 4.5-2.5 4.5s3-1 4.5-2.5" /><path d="M12 2C7 5 5 11 5.5 15.5c2-2 5-3 6.5-1s1 4.5-1 6.5c4.5.5 10.5-1.5 13.5-6.5C22 9.5 17.5 2 12 2z" /><circle cx="13" cy="11" r="1.5" fill="currentColor" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.5-2.5 4.5-2.5 4.5s3-1 4.5-2.5" /><path d="M12 2C7 5 5 11 5.5 15.5c2-2 5-3 6.5-1s1 4.5-1 6.5c4.5.5 10.5-1.5 13.5-6.5C22 9.5 17.5 2 12 2z" /><circle cx="13" cy="11" r="1.5" fill="currentColor" /></svg>`
  },
  Airplane: {
    category: "Transportation",
    desc: "Passenger airline flight jet",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M22 2l-9 9-7-1.5-2 2 6 3.5-1.5 5.5 1.5.5 3.5-4 5.5 1.5 2-2z" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2l-9 9-7-1.5-2 2 6 3.5-1.5 5.5 1.5.5 3.5-4 5.5 1.5 2-2z" /></svg>`
  },
  Helicopter: {
    category: "Transportation",
    desc: "Rescue helicopter rotor copter",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M3 16h11a5 5 0 0 0 5-5v-1H6v4z" /><path d="M12 10V6h5M8 6h14M3 18h16M5 16v2M17 16v2" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 16h11a5 5 0 0 0 5-5v-1H6v4z" /><path d="M12 10V6h5M8 6h14M3 18h16M5 16v2M17 16v2" /></svg>`
  },
  Ship: {
    category: "Transportation",
    desc: "Cargo cruise ship ocean liner",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M2 17l2 3h16l2-3H2z" /><path d="M6 17v-6h4v6M14 17v-8h4v8" fill="currentColor" className="text-accent/15" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 17l2 3h16l2-3H2z" /><path d="M6 17v-6h4v6M14 17v-8h4v8" fill="currentColor" className="text-accent/15" /></svg>`
  },
  Sailboat: {
    category: "Transportation",
    desc: "Sailing wind boat yacht",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M4 17h16l-2 3H6L4 17z" /><path d="M12 17V3L5 13h7zM12 13h5.5L12 7z" fill="currentColor" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 17h16l-2 3H6L4 17z" /><path d="M12 17V3L5 13h7zM12 13h5.5L12 7z" fill="currentColor" /></svg>`
  },
  Train: {
    category: "Transportation",
    desc: "High-speed rail locomotive",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="4" y="3" width="14" height="15" rx="3" /><circle cx="8" cy="14" r="1.5" fill="currentColor" /><circle cx="14" cy="14" r="1.5" fill="currentColor" /><path d="M4 9h14M9 18l-2 3M15 18l2 3" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="3" width="14" height="15" rx="3" /><circle cx="8" cy="14" r="1.5" fill="currentColor" /><circle cx="14" cy="14" r="1.5" fill="currentColor" /><path d="M4 9h14M9 18l-2 3M15 18l2 3" /></svg>`
  },
  Truck: {
    category: "Transportation",
    desc: "Logistics shipping cargo truck",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="2" y="5" width="13" height="11" rx="1" /><path d="M15 8h4.5l2.5 3v5H15V8z" /><circle cx="6" cy="17" r="2" /><circle cx="18" cy="17" r="2" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="13" height="11" rx="1" /><path d="M15 8h4.5l2.5 3v5H15V8z" /><circle cx="6" cy="17" r="2" /><circle cx="18" cy="17" r="2" /></svg>`
  },
  Bus: {
    category: "Transportation",
    desc: "City transit public bus",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="3" y="3" width="18" height="14" rx="2" /><circle cx="7.5" cy="20" r="1.5" fill="currentColor" /><circle cx="16.5" cy="20" r="1.5" fill="currentColor" /><path d="M3 10h18M3 14h18" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="14" rx="2" /><circle cx="7.5" cy="20" r="1.5" fill="currentColor" /><circle cx="16.5" cy="20" r="1.5" fill="currentColor" /><path d="M3 10h18M3 14h18" /></svg>`
  },
  Subway: {
    category: "Transportation",
    desc: "Metro underground subway car",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="4" y="3" width="16" height="14" rx="4" /><path d="M4 11h16M9 17l-2 4M15 17l2 4" /><circle cx="9" cy="7" r="1" fill="currentColor" /><circle cx="15" cy="7" r="1" fill="currentColor" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="3" width="16" height="14" rx="4" /><path d="M4 11h16M9 17l-2 4M15 17l2 4" /><circle cx="9" cy="7" r="1" fill="currentColor" /><circle cx="15" cy="7" r="1" fill="currentColor" /></svg>`
  },
  Anchor: {
    category: "Transportation",
    desc: "Nautical marine anchor symbol",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <circle cx="12" cy="5" r="2" /><path d="M12 7v11M8 12H5c0 4 3.5 7 7 7s7-3 7-7h-3" /><path d="M12 19.5v0" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="5" r="2" /><path d="M12 7v11M8 12H5c0 4 3.5 7 7 7s7-3 7-7h-3" /><path d="M12 19.5v0" /></svg>`
  },
  Ufo: {
    category: "Transportation",
    desc: "Retro sci-fi alien flying saucer",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M12 6a4 4 0 0 1 4 4H8a4 4 0 0 1 4-4z" /><ellipse cx="12" cy="13" rx="10" ry="3" /><path d="M6 14.5l-2 3.5M18 14.5l2 3.5M12 16v3" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 6a4 4 0 0 1 4 4H8a4 4 0 0 1 4-4z" /><ellipse cx="12" cy="13" rx="10" ry="3" /><path d="M6 14.5l-2 3.5M18 14.5l2 3.5M12 16v3" /></svg>`
  },
  BicycleCargo: {
    category: "Transportation",
    desc: "Cargo transport bicycle courier",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <circle cx="5" cy="16" r="3" /><circle cx="19" cy="16" r="3" /><path d="M5 16h6M19 16h-5M12 8h6l1 5h-7z" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="5" cy="16" r="3" /><circle cx="19" cy="16" r="3" /><path d="M5 16h6M19 16h-5M12 8h6l1 5h-7z" /></svg>`
  },
  HotAirBalloon: {
    category: "Transportation",
    desc: "Retro passenger hot air balloon",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <ellipse cx="12" cy="9" rx="7" ry="8" /><rect x="10" y="19" width="4" height="2" fill="currentColor" /><path d="M8 15l2 4M16 15l-2 4" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="9" rx="7" ry="8" /><rect x="10" y="19" width="4" height="2" fill="currentColor" /><path d="M8 15l2 4M16 15l-2 4" /></svg>`
  },
  Parachute: {
    category: "Transportation",
    desc: "Skydive dome canopy parachute",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M12 19v3M3 12c0-5 4-8 9-8s9 3 9 8H3z" /><path d="M3 12l9 7M21 12l-9 7" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19v3M3 12c0-5 4-8 9-8s9 3 9 8H3z" /><path d="M3 12l9 7M21 12l-9 7" /></svg>`
  },
  Speedboat: {
    category: "Transportation",
    desc: "Racing water jet speedboat",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M2 15l15-2 5 2H2z" /><path d="M15 13L10 6H6l3 7h6z" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 15l15-2 5 2H2z" /><path d="M15 13L10 6H6l3 7h6z" /></svg>`
  },
  Tractor: {
    category: "Transportation",
    desc: "Agricultural farm field tractor",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="4" y="10" width="8" height="6" rx="1" /><circle cx="7" cy="18" r="2.5" /><circle cx="17" cy="16" r="4.5" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="10" width="8" height="6" rx="1" /><circle cx="7" cy="18" r="2.5" /><circle cx="17" cy="16" r="4.5" /></svg>`
  },
  Motorcycle: {
    category: "Transportation",
    desc: "Road racing cruiser motorcycle",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <circle cx="5" cy="15" r="3.5" /><circle cx="19" cy="15" r="3.5" /><path d="M5 15h3l4-5h4l3 5" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="5" cy="15" r="3.5" /><circle cx="19" cy="15" r="3.5" /><path d="M5 15h3l4-5h4l3 5" /></svg>`
  },
  Scooter: {
    category: "Transportation",
    desc: "Micro electric kick scooter",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <circle cx="5" cy="18" r="2" /><circle cx="19" cy="18" r="2" /><path d="M5 18h12M17 18V4h-3" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="5" cy="18" r="2" /><circle cx="19" cy="18" r="2" /><path d="M5 18h12M17 18V4h-3" /></svg>`
  },
  Hoverboard: {
    category: "Transportation",
    desc: "Dual-wheel smart balancing board",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="4" y="11" width="16" height="2" rx="1" /><circle cx="3" cy="12" r="2" fill="currentColor" /><circle cx="21" cy="12" r="2" fill="currentColor" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="11" width="16" height="2" rx="1" /><circle cx="3" cy="12" r="2" fill="currentColor" /><circle cx="21" cy="12" r="2" fill="currentColor" /></svg>`
  },
  LaptopOffice: {
    category: "Tools & Tech",
    desc: "Laptop showing software code layout",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="3" y="4" width="18" height="12" rx="2" /><path d="M2 19h20M2 19l1.5-3M22 19l-1.5-3" /><path d="M7 8h6M7 11h4" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="12" rx="2" /><path d="M2 19h20M2 19l1.5-3M22 19l-1.5-3" /><path d="M7 8h6M7 11h4" /></svg>`
  },
  SmartphoneApp: {
    category: "Tools & Tech",
    desc: "Phone displaying dashboard app grids",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="5" y="2" width="14" height="20" rx="3" /><circle cx="12" cy="18" r="0.75" fill="currentColor" /><path d="M11 4h2" /><rect x="8" y="7" width="2" height="2" rx="0.5" fill="currentColor" /><rect x="14" y="7" width="2" height="2" rx="0.5" fill="currentColor" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="3" /><circle cx="12" cy="18" r="0.75" fill="currentColor" /><path d="M11 4h2" /><rect x="8" y="7" width="2" height="2" rx="0.5" fill="currentColor" /><rect x="14" y="7" width="2" height="2" rx="0.5" fill="currentColor" /></svg>`
  },
  ServerRack: {
    category: "Tools & Tech",
    desc: "Stackable datacenter server node",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="3" y="3" width="18" height="5" rx="1" /><rect x="3" y="10" width="18" height="5" rx="1" /><rect x="3" y="17" width="18" height="5" rx="1" /><circle cx="6" cy="5.5" r="0.75" fill="currentColor" /><path d="M17 5.5h2M17 12.5h2" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="5" rx="1" /><rect x="3" y="10" width="18" height="5" rx="1" /><rect x="3" y="17" width="18" height="5" rx="1" /><circle cx="6" cy="5.5" r="0.75" fill="currentColor" /><path d="M17 5.5h2M17 12.5h2" /></svg>`
  },
  CreditCardPay: {
    category: "Tools & Tech",
    desc: "E-commerce card with secure microchip",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="2" y="5" width="20" height="14" rx="3" /><path d="M2 9.5h20" /><rect x="5" y="13" width="4" height="3" rx="0.5" fill="currentColor" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="3" /><path d="M2 9.5h20" /><rect x="5" y="13" width="4" height="3" rx="0.5" fill="currentColor" /></svg>`
  },
  ShieldSecure: {
    category: "Tools & Tech",
    desc: "Shield verified with internal checkmark",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 11.5l2 2 4-4" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 11.5l2 2 4-4" /></svg>`
  },
  DatabaseSync: {
    category: "Tools & Tech",
    desc: "Double database server stack",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <ellipse cx="12" cy="5" rx="7" ry="2" /><path d="M5 5v5c0 1.1 3 2 7 2s7-.9 7-2V5M5 10v5c0 1.1 3 2 7 2s7-.9 7-2v-5M5 15v4c0 1.1 3 2 7 2s7-.9 7-2v-4" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="7" ry="2" /><path d="M5 5v5c0 1.1 3 2 7 2s7-.9 7-2V5M5 10v5c0 1.1 3 2 7 2s7-.9 7-2v-5M5 15v4c0 1.1 3 2 7 2s7-.9 7-2v-4" /></svg>`
  },
  LineChart: {
    category: "Tools & Tech",
    desc: "Financial stock analytics progress chart",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M3 3v18h18" /><polyline points="5,16 9,10 13,13 19,5" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><polyline points="5,16 9,10 13,13 19,5" /></svg>`
  },
  BarChart: {
    category: "Tools & Tech",
    desc: "Business growth vertical bar metrics",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M3 3v18h18" /><rect x="6" y="13" width="3" height="8" rx="0.5" fill="currentColor" /><rect x="11" y="9" width="3" height="12" rx="0.5" fill="currentColor" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><rect x="6" y="13" width="3" height="8" rx="0.5" fill="currentColor" /><rect x="11" y="9" width="3" height="12" rx="0.5" fill="currentColor" /></svg>`
  },
  BriefcaseBiz: {
    category: "Tools & Tech",
    desc: "Business office briefcase case",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="3" y="7" width="18" height="14" rx="2" /><path d="M9 7V4.5a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 15 4.5V7" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="7" width="18" height="14" rx="2" /><path d="M9 7V4.5a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 15 4.5V7" /></svg>`
  },
  GiftBox: {
    category: "Tools & Tech",
    desc: "Present package wrapped with ribbon",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="3" y="8" width="18" height="13" rx="2" /><rect x="2" y="8" width="20" height="4" rx="1" fill="currentColor" /><path d="M12 8v13" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="8" width="18" height="13" rx="2" /><rect x="2" y="8" width="20" height="4" rx="1" fill="currentColor" /><path d="M12 8v13" /></svg>`
  },
  BulbIdea: {
    category: "Tools & Tech",
    desc: "Innovative lightbulb with energy rays",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M15 15.5A6.5 6.5 0 1 0 9 15.5V18h6v-2.5z" /><path d="M10 21.5h4" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 15.5A6.5 6.5 0 1 0 9 15.5V18h6v-2.5z" /><path d="M10 21.5h4" /></svg>`
  },
  GearSettings: {
    category: "Tools & Tech",
    desc: "Mechanical settings gear cogwheel",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <circle cx="12" cy="12" r="3.5" /><path d="M12 2v2.5M12 19.5V22M2 12h2.5" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3.5" /><path d="M12 2v2.5M12 19.5V22M2 12h2.5" /></svg>`
  },
  KeyPass: {
    category: "Tools & Tech",
    desc: "Security lock skeleton key",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <circle cx="7" cy="12" r="4" /><path d="M11 12h10M17.5 12v3.5" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="7" cy="12" r="4" /><path d="M11 12h10M17.5 12v3.5" /></svg>`
  },
  HammerTool: {
    category: "Tools & Tech",
    desc: "Industrial construction hammer",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M14.5 9.5l-9 9M9.5 14.5l-4-4" /><path d="M13 3.5l7.5 7.5L22 9.5l-6-6z" fill="currentColor" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 9.5l-9 9M9.5 14.5l-4-4" /><path d="M13 3.5l7.5 7.5L22 9.5l-6-6z" fill="currentColor" /></svg>`
  },
  WrenchTool: {
    category: "Tools & Tech",
    desc: "Adjustable mechanic hex wrench",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M17 4.5l2.5 2.5L7 19.5H4.5V17z" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 4.5l2.5 2.5L7 19.5H4.5V17z" /></svg>`
  },
  SmartHome: {
    category: "Tools & Tech",
    desc: "House containing a hardware microchip",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z" /><rect x="9" y="10" width="6" height="6" rx="1" fill="currentColor" /><path d="M12 8v2M12 16v2" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z" /><rect x="9" y="10" width="6" height="6" rx="1" fill="currentColor" /><path d="M12 8v2M12 16v2" /></svg>`
  },
  Cpu: {
    category: "Tools & Tech",
    desc: "Silicon microchip computer processor",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="4" y="4" width="16" height="16" rx="2" /><path d="M9 4V2M15 4V2M9 22v-2M15 22v-2M20 9h2M20 15h2M2 9h2M2 15h2" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M9 4V2M15 4V2M9 22v-2M15 22v-2M20 9h2M20 15h2M2 9h2M2 15h2" /></svg>`
  },
  MousePointer: {
    category: "Tools & Tech",
    desc: "Slick cursor mouse arrow",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <polygon points="3,3 10,21 13,13 21,10" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="3,3 10,21 13,13 21,10" /></svg>`
  },
  Keyboard: {
    category: "Tools & Tech",
    desc: "Desktop computer keyboard",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="2" y="6" width="20" height="12" rx="2" /><path d="M6 10h1M10 10h1M14 10h1M18 10h1M6 14h12" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="6" width="20" height="12" rx="2" /><path d="M6 10h1M10 10h1M14 10h1M18 10h1M6 14h12" /></svg>`
  },
  Webcam: {
    category: "Tools & Tech",
    desc: "Video streaming computer webcam",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <circle cx="12" cy="10" r="6" /><circle cx="12" cy="10" r="2" fill="currentColor" /><path d="M12 16v4M8 20h8" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="10" r="6" /><circle cx="12" cy="10" r="2" fill="currentColor" /><path d="M12 16v4M8 20h8" /></svg>`
  },
  Router: {
    category: "Tools & Tech",
    desc: "Network router with signals",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="3" y="14" width="18" height="6" rx="2" /><path d="M6 14v-6M18 14v-6M12 14v-2M9 4c2-2 4-2 6 0" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="14" width="18" height="6" rx="2" /><path d="M6 14v-6M18 14v-6M12 14v-2M9 4c2-2 4-2 6 0" /></svg>`
  },
  Microphone: {
    category: "Tools & Tech",
    desc: "Podcasting broadcast microphone",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="9" y="2" width="6" height="11" rx="3" /><path d="M5 10a7 7 0 0 0 14 0M12 17v4M8 21h8" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="2" width="6" height="11" rx="3" /><path d="M5 10a7 7 0 0 0 14 0M12 17v4M8 21h8" /></svg>`
  },
  Headphones: {
    category: "Tools & Tech",
    desc: "DJ studio acoustic headphones",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M3 14c0-4.5 4-8 9-8s9 3.5 9 8v3a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2M3 14a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H3v-3z" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 14c0-4.5 4-8 9-8s9 3.5 9 8v3a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2M3 14a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H3v-3z" /></svg>`
  },
  Speaker: {
    category: "Tools & Tech",
    desc: "Audio sub woofer speaker cabinet",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="4" y="3" width="16" height="18" rx="2" /><circle cx="12" cy="8" r="2" /><circle cx="12" cy="15" r="3.5" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="3" width="16" height="18" rx="2" /><circle cx="12" cy="8" r="2" /><circle cx="12" cy="15" r="3.5" /></svg>`
  },
  CloudServer: {
    category: "Tools & Tech",
    desc: "Network cloud linked with server rack",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M16 10a4 4 0 0 0-8-1.5" /><rect x="5" y="14" width="14" height="6" rx="1.5" /><circle cx="8" cy="17" r="0.75" fill="currentColor" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 10a4 4 0 0 0-8-1.5" /><rect x="5" y="14" width="14" height="6" rx="1.5" /><circle cx="8" cy="17" r="0.75" fill="currentColor" /></svg>`
  },
  PrintOffice: {
    category: "Tools & Tech",
    desc: "Office desk document printer",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="4" y="9" width="16" height="9" rx="1" /><path d="M6 9V4h12v5M6 15h12v5H6z" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="9" width="16" height="9" rx="1" /><path d="M6 9V4h12v5M6 15h12v5H6z" /></svg>`
  },
  CdPlayer: {
    category: "Tools & Tech",
    desc: "Optical disc drive CD player",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="3" /><circle cx="12" cy="12" r="1.25" fill="currentColor" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="3" /><circle cx="12" cy="12" r="1.25" fill="currentColor" /></svg>`
  },
  GameBoy: {
    category: "Tools & Tech",
    desc: "Retro hand held gaming device",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="4" y="2" width="14" height="20" rx="3" /><rect x="7" y="5" width="8" height="6" fill="currentColor" className="text-accent/15" /><path d="M8 15h2M7 16h4M14 15.5a1 1 0 1 1-2 0M16.5 17a1 1 0 1 1-2 0" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="14" height="20" rx="3" /><rect x="7" y="5" width="8" height="6" fill="currentColor" className="text-accent/15" /><path d="M8 15h2M7 16h4M14 15.5a1 1 0 1 1-2 0M16.5 17a1 1 0 1 1-2 0" /></svg>`
  },
  Diskette: {
    category: "Tools & Tech",
    desc: "Vintage 3.5 floppy diskette save",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M7 3v6h8V3" /><rect x="7" y="13" width="10" height="8" rx="1" fill="currentColor" className="text-accent/10" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M7 3v6h8V3" /><rect x="7" y="13" width="10" height="8" rx="1" fill="currentColor" className="text-accent/10" /></svg>`
  },
  Projector: {
    category: "Tools & Tech",
    desc: "Cinematic media presentation projector",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="2" y="10" width="14" height="9" rx="2" /><circle cx="20" cy="14" r="3.5" /><circle cx="20" cy="14" r="1.5" fill="currentColor" /><path d="M4 19v2M14 19v2" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="10" width="14" height="9" rx="2" /><circle cx="20" cy="14" r="3.5" /><circle cx="20" cy="14" r="1.5" fill="currentColor" /><path d="M4 19v2M14 19v2" /></svg>`
  },
  BatteryMax: {
    category: "Tools & Tech",
    desc: "Fully charged green status battery",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="2" y="7" width="16" height="10" rx="2" /><path d="M21 11v2" /><rect x="5" y="10" width="10" height="4" rx="0.5" fill="currentColor" className="text-emerald-400" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="16" height="10" rx="2" /><path d="M21 11v2" /><rect x="5" y="10" width="10" height="4" rx="0.5" fill="currentColor" className="text-emerald-400" /></svg>`
  },
  CablePlug: {
    category: "Tools & Tech",
    desc: "Electric AC wire power plug",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="8" y="10" width="8" height="8" rx="2" /><path d="M10 10V6M14 10V6M12 18v4" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="8" y="10" width="8" height="8" rx="2" /><path d="M10 10V6M14 10V6M12 18v4" /></svg>`
  },
  Telescope: {
    category: "Tools & Tech",
    desc: "Astronomical starry space telescope",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M19.5 4.5l-11 11-2.5-2.5 11-11 2.5 2.5z" /><path d="M8.5 15.5L4 20M12 12l2 6" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19.5 4.5l-11 11-2.5-2.5 11-11 2.5 2.5z" /><path d="M8.5 15.5L4 20M12 12l2 6" /></svg>`
  },
  RobotHelper: {
    category: "Tools & Tech",
    desc: "Sleek smart assistant cyborg helper",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="5" y="7" width="14" height="12" rx="3" /><circle cx="9.5" cy="12" r="1.5" fill="currentColor" /><circle cx="14.5" cy="12" r="1.5" fill="currentColor" /><path d="M9 16.5c2 1.5 4 1.5 6 0M12 7V4M10 4h4" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="7" width="14" height="12" rx="3" /><circle cx="9.5" cy="12" r="1.5" fill="currentColor" /><circle cx="14.5" cy="12" r="1.5" fill="currentColor" /><path d="M9 16.5c2 1.5 4 1.5 6 0M12 7V4M10 4h4" /></svg>`
  },
  SatelliteTech: {
    category: "Tools & Tech",
    desc: "Space orbit communications satellite",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M4 14.5l5.5-5.5M10.5 8.5L8.5 6.5M15.5 13.5l-2-2" /><rect x="14" y="3" width="7" height="4" fill="currentColor" className="text-accent/20" /><rect x="3" y="14" width="7" height="4" fill="currentColor" className="text-accent/20" /><path d="M11 11c2.5 2.5 6.5 1.5 6.5 1.5S19 16.5 21.5 19v2.5" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 14.5l5.5-5.5M10.5 8.5L8.5 6.5M15.5 13.5l-2-2" /><rect x="14" y="3" width="7" height="4" fill="currentColor" className="text-accent/20" /><rect x="3" y="14" width="7" height="4" fill="currentColor" className="text-accent/20" /><path d="M11 11c2.5 2.5 6.5 1.5 6.5 1.5S19 16.5 21.5 19v2.5" /></svg>`
  },
  Tree: {
    category: "Home / Misc",
    desc: "Pine tree outline shape",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <polygon points="12,2 4,10 8,10 3,16 9,16 7,22 17,22 15,16 21,16 16,10 20,10" /><path d="M12 16v6M10 22h4" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12,2 4,10 8,10 3,16 9,16 7,22 17,22 15,16 21,16 16,10 20,10" /><path d="M12 16v6M10 22h4" /></svg>`
  },
  StarGlow: {
    category: "Home / Misc",
    desc: "Glowing sky star outline",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <polygon points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9" /></svg>`
  },
  HeartLove: {
    category: "Home / Misc",
    desc: "Classic heart health representation",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M12 21.5c-5.5-4.5-9-7.5-9-11a4.5 4.5 0 0 1 7.6-3.2L12 9l1.4-1.7A4.5 4.5 0 0 1 21 10.5c0 3.5-3.5 6.5-9 11z" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21.5c-5.5-4.5-9-7.5-9-11a4.5 4.5 0 0 1 7.6-3.2L12 9l1.4-1.7A4.5 4.5 0 0 1 21 10.5c0 3.5-3.5 6.5-9 11z" /></svg>`
  },
  SparkleMagic: {
    category: "Home / Misc",
    desc: "Magic dust sparkle vector",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6.5 6.5l2.8 2.8M14.7 14.7l2.8 2.8M6.5 17.5l2.8-2.8M14.7 9.3l2.8-2.8" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6.5 6.5l2.8 2.8M14.7 14.7l2.8 2.8M6.5 17.5l2.8-2.8M14.7 9.3l2.8-2.8" /></svg>`
  },
  CrownRoyal: {
    category: "Home / Misc",
    desc: "Gold crown piece representing quality",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <polygon points="2,19 22,19 19,7 12,13 5,7" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="2,19 22,19 19,7 12,13 5,7" /></svg>`
  },
  DiamondJewel: {
    category: "Home / Misc",
    desc: "Premium precious cut diamond outline",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <polygon points="6,3 18,3 22,9 12,21 2,9" /><polyline points="2,9 12,9 22,9" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="6,3 18,3 22,9 12,21 2,9" /><polyline points="2,9 12,9 22,9" /></svg>`
  },
  Balloon: {
    category: "Home / Misc",
    desc: "Party celebrating floating balloon",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <ellipse cx="12" cy="10" rx="6" ry="7" /><path d="M12 17v5M12 17l-1.5 1.5h3z" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="10" rx="6" ry="7" /><path d="M12 17v5M12 17l-1.5 1.5h3z" /></svg>`
  },
  Lock: {
    category: "Home / Misc",
    desc: "Locked security status sign",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="5" y="11" width="14" height="10" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="11" width="14" height="10" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>`
  },
  Unlock: {
    category: "Home / Misc",
    desc: "Unlocked accessibility status sign",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="5" y="11" width="14" height="10" rx="2" /><path d="M7 11V7a5 5 0 0 1 9.5-2" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="11" width="14" height="10" rx="2" /><path d="M7 11V7a5 5 0 0 1 9.5-2" /></svg>`
  },
  GraduationCap: {
    category: "Home / Misc",
    desc: "Academic mortarboard cap",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <polygon points="12,2 22,7 12,12 2,7" /><path d="M6 10v6a6 6 0 0 0 12 0v-6" /><path d="M21.5 7.5v8.5a1 1 0 0 1-1.5 1" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12,2 22,7 12,12 2,7" /><path d="M6 10v6a6 6 0 0 0 12 0v-6" /><path d="M21.5 7.5v8.5a1 1 0 0 1-1.5 1" /></svg>`
  },
  PenTool: {
    category: "Home / Misc",
    desc: "Illustrator vector pen tool",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M12 2L2 12l5 5 10-10L12 2z" /><path d="M17 7l2.5 2.5" /><circle cx="4.5" cy="19.5" r="1.5" fill="currentColor" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 12l5 5 10-10L12 2z" /><path d="M17 7l2.5 2.5" /><circle cx="4.5" cy="19.5" r="1.5" fill="currentColor" /></svg>`
  },
  Ruler: {
    category: "Home / Misc",
    desc: "Measurement drafting straight ruler",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="2" y="7" width="20" height="10" rx="1" /><path d="M6 7v3M10 7v3M14 7v3M18 7v3" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="10" rx="1" /><path d="M6 7v3M10 7v3M14 7v3M18 7v3" /></svg>`
  },
  BookOpen: {
    category: "Home / Misc",
    desc: "Open education reading textbook",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M2 3h8a2 2 0 0 1 2 2v14a2 2 0 0 0-2-2H2V3zM22 3h-8a2 2 0 0 0-2 2v14a2 2 0 0 1 2-2h8V3z" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h8a2 2 0 0 1 2 2v14a2 2 0 0 0-2-2H2V3zM22 3h-8a2 2 0 0 0-2 2v14a2 2 0 0 1 2-2h8V3z" /></svg>`
  },
  Calculator: {
    category: "Home / Misc",
    desc: "Financial accounting calculator console",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="4" y="3" width="16" height="18" rx="2" /><rect x="7" y="6" width="10" height="3" fill="currentColor" className="text-accent/10" /><circle cx="8" cy="13" r="0.75" fill="currentColor" /><circle cx="12" cy="13" r="0.75" fill="currentColor" /><circle cx="16" cy="13" r="0.75" fill="currentColor" /><circle cx="8" cy="17" r="0.75" fill="currentColor" /><circle cx="12" cy="17" r="0.75" fill="currentColor" /><circle cx="16" cy="17" r="0.75" fill="currentColor" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="3" width="16" height="18" rx="2" /><rect x="7" y="6" width="10" height="3" fill="currentColor" className="text-accent/10" /><circle cx="8" cy="13" r="0.75" fill="currentColor" /><circle cx="12" cy="13" r="0.75" fill="currentColor" /><circle cx="16" cy="13" r="0.75" fill="currentColor" /><circle cx="8" cy="17" r="0.75" fill="currentColor" /><circle cx="12" cy="17" r="0.75" fill="currentColor" /><circle cx="16" cy="17" r="0.75" fill="currentColor" /></svg>`
  },
  CalendarDay: {
    category: "Home / Misc",
    desc: "Monthly schedule calendar day event",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="3" y="4" width="18" height="17" rx="2" /><path d="M16 2v4M8 2v4M3 9h18" /><rect x="7" y="12" width="3" height="3" rx="0.5" fill="currentColor" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="17" rx="2" /><path d="M16 2v4M8 2v4M3 9h18" /><rect x="7" y="12" width="3" height="3" rx="0.5" fill="currentColor" /></svg>`
  },
  Paperclip: {
    category: "Home / Misc",
    desc: "Office document paper clip binder",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M6 12v5a5 5 0 0 0 10 0V8a3 3 0 0 0-6 0v7a1 1 0 0 0 2 0V9" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 12v5a5 5 0 0 0 10 0V8a3 3 0 0 0-6 0v7a1 1 0 0 0 2 0V9" /></svg>`
  },
  FolderOpen: {
    category: "Home / Misc",
    desc: "Desktop file system directory folder",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2" /><path d="M2 10h20l-2 9H4z" fill="currentColor" className="text-accent/15" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2" /><path d="M2 10h20l-2 9H4z" fill="currentColor" className="text-accent/15" /></svg>`
  },
  LifeBuoy: {
    category: "Home / Misc",
    desc: "Safety marine rescue ring",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="4" /><path d="M4.5 4.5l5 5M14.5 14.5l5 5M4.5 19.5l5-5M14.5 9.5l5-5" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="4" /><path d="M4.5 4.5l5 5M14.5 14.5l5 5M4.5 19.5l5-5M14.5 9.5l5-5" /></svg>`
  },
  AlertTriangle: {
    category: "Home / Misc",
    desc: "Warning hazard alert triangle indicator",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <polygon points="12,3 2,21 22,21" /><path d="M12 9v5M12 17h.01" fill="currentColor" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12,3 2,21 22,21" /><path d="M12 9v5M12 17h.01" fill="currentColor" /></svg>`
  },
  InfoCircle: {
    category: "Home / Misc",
    desc: "Informational circular signpost helper",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" fill="currentColor" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" fill="currentColor" /></svg>`
  },
  PlayMedia: {
    category: "Music & Media",
    desc: "Start media playback arrow",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <polygon points="5,3 19,12 5,21" fill="currentColor" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5,3 19,12 5,21" fill="currentColor" /></svg>`
  },
  PauseMedia: {
    category: "Music & Media",
    desc: "Halt media playback bars",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="6" y="4" width="4" height="16" fill="currentColor" /><rect x="14" y="4" width="4" height="16" fill="currentColor" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="4" width="4" height="16" fill="currentColor" /><rect x="14" y="4" width="4" height="16" fill="currentColor" /></svg>`
  },
  StopMedia: {
    category: "Music & Media",
    desc: "End media playback square",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="4" y="4" width="16" height="16" fill="currentColor" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" fill="currentColor" /></svg>`
  },
  ForwardMedia: {
    category: "Music & Media",
    desc: "Fast forward play double arrow",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <polygon points="5,4 15,12 5,20" fill="currentColor" /><polygon points="13,4 23,12 13,20" fill="currentColor" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5,4 15,12 5,20" fill="currentColor" /><polygon points="13,4 23,12 13,20" fill="currentColor" /></svg>`
  },
  BackwardMedia: {
    category: "Music & Media",
    desc: "Rewind play double arrow",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <polygon points="19,20 9,12 19,4" fill="currentColor" /><polygon points="11,20 1,12 11,4" fill="currentColor" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="19,20 9,12 19,4" fill="currentColor" /><polygon points="11,20 1,12 11,4" fill="currentColor" /></svg>`
  },
  MusicNote: {
    category: "Music & Media",
    desc: "Single acoustic music note melody",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <circle cx="9" cy="18" r="3" fill="currentColor" /><path d="M12 18V4h9v4h-9" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="18" r="3" fill="currentColor" /><path d="M12 18V4h9v4h-9" /></svg>`
  },
  MusicChord: {
    category: "Music & Media",
    desc: "Double music note chord beam",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <circle cx="6" cy="18" r="3" fill="currentColor" /><circle cx="18" cy="16" r="3" fill="currentColor" /><path d="M9 18V4h12v12" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="18" r="3" fill="currentColor" /><circle cx="18" cy="16" r="3" fill="currentColor" /><path d="M9 18V4h12v12" /></svg>`
  },
  FilmRoll: {
    category: "Music & Media",
    desc: "Movie cinematography camera film roll",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="3" fill="currentColor" /><path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="3" fill="currentColor" /><path d="M12 2v4M12 18v4M2 12h4M18 12h4" /></svg>`
  },
  DiscRecord: {
    category: "Music & Media",
    desc: "Retro vinyl music album record LP",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="1.5" fill="currentColor" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="1.5" fill="currentColor" /></svg>`
  },
  VolumeMax: {
    category: "Music & Media",
    desc: "Speaker volume at maximum levels",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <polygon points="11,5 6,9H2v6h4l5,4" fill="currentColor" /><path d="M15.5 8.5c1 1.5 1 3.5 0 5M19 5.5c2.5 3 2.5 7 0 10" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11,5 6,9H2v6h4l5,4" fill="currentColor" /><path d="M15.5 8.5c1 1.5 1 3.5 0 5M19 5.5c2.5 3 2.5 7 0 10" /></svg>`
  },
  VolumeMute: {
    category: "Music & Media",
    desc: "Speaker volume muted silent",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <polygon points="11,5 6,9H2v6h4l5,4" /><path d="M22 9l-6 6M16 9l6 6" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11,5 6,9H2v6h4l5,4" /><path d="M22 9l-6 6M16 9l6 6" /></svg>`
  },
  Guitar: {
    category: "Music & Media",
    desc: "Acoustic musical guitar vector",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M9 19c-2 2-5.5 1.5-6.5-.5s-1-4.5 1-6.5c1.5-1.5 4.5-2.5 6-1.5l10.5-10.5M20 2v2M22 4v2" /><circle cx="8" cy="15" r="1.5" fill="currentColor" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-2 2-5.5 1.5-6.5-.5s-1-4.5 1-6.5c1.5-1.5 4.5-2.5 6-1.5l10.5-10.5M20 2v2M22 4v2" /><circle cx="8" cy="15" r="1.5" fill="currentColor" /></svg>`
  },
  Piano: {
    category: "Music & Media",
    desc: "Keyboard musical synthesizer piano",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="2" y="5" width="20" height="14" rx="2" /><path d="M6 5v9M10 5v9M14 5v9M18 5v9M2 14h20" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2" /><path d="M6 5v9M10 5v9M14 5v9M18 5v9M2 14h20" /></svg>`
  },
  CameraStudio: {
    category: "Music & Media",
    desc: "Photography digital slr camera lens",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="3" y="8" width="18" height="12" rx="2" /><circle cx="12" cy="14" r="3.5" /><circle cx="12" cy="14" r="1.25" fill="currentColor" /><path d="M9 8V5h6v3" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="8" width="18" height="12" rx="2" /><circle cx="12" cy="14" r="3.5" /><circle cx="12" cy="14" r="1.25" fill="currentColor" /><path d="M9 8V5h6v3" /></svg>`
  },
  Clapperboard: {
    category: "Music & Media",
    desc: "Hollywood cinema movie clapper board",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="3" y="8" width="18" height="12" rx="2" /><path d="M3 8L6 4h15v4H3z" fill="currentColor" className="text-accent/20" /><path d="M9 4l-3 4M14 4l-3 4M19 4l-3 4" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="8" width="18" height="12" rx="2" /><path d="M3 8L6 4h15v4H3z" fill="currentColor" className="text-accent/20" /><path d="M9 4l-3 4M14 4l-3 4M19 4l-3 4" /></svg>`
  },
  MicrophoneStand: {
    category: "Music & Media",
    desc: "Studio vocal microphone on a stand",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <circle cx="12" cy="5" r="2.5" fill="currentColor" /><path d="M12 7.5v12.5M8 20h8" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="5" r="2.5" fill="currentColor" /><path d="M12 7.5v12.5M8 20h8" /></svg>`
  },
  PodcastStream: {
    category: "Music & Media",
    desc: "Live podcast rss antenna broadcast",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <circle cx="12" cy="12" r="2" fill="currentColor" /><path d="M8.5 8.5c2-2 5-2 7 0M5.5 5.5c3.5-3.5 9.5-3.5 13 0" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="2" fill="currentColor" /><path d="M8.5 8.5c2-2 5-2 7 0M5.5 5.5c3.5-3.5 9.5-3.5 13 0" /></svg>`
  },
  VirtualReality: {
    category: "Music & Media",
    desc: "VR gaming electronic headset visor",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="3" y="7" width="18" height="10" rx="3" /><circle cx="8" cy="12" r="1" fill="currentColor" /><circle cx="16" cy="12" r="1" fill="currentColor" /><path d="M3 12h18" className="opacity-40" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="7" width="18" height="10" rx="3" /><circle cx="8" cy="12" r="1" fill="currentColor" /><circle cx="16" cy="12" r="1" fill="currentColor" /><path d="M3 12h18" className="opacity-40" /></svg>`
  },
  HeadphonesDj: {
    category: "Music & Media",
    desc: "DJ style professional headphones",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M3 11c0-5 4-9 9-9s9 4 9 9" /><rect x="2" y="11" width="3" height="6" rx="1.5" fill="currentColor" /><rect x="19" y="11" width="3" height="6" rx="1.5" fill="currentColor" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11c0-5 4-9 9-9s9 4 9 9" /><rect x="2" y="11" width="3" height="6" rx="1.5" fill="currentColor" /><rect x="19" y="11" width="3" height="6" rx="1.5" fill="currentColor" /></svg>`
  },
  RadioTuner: {
    category: "Music & Media",
    desc: "Retro AM/FM analog stereo radio receiver",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="3" y="7" width="18" height="12" rx="2" /><circle cx="7" cy="13" r="2" /><path d="M14 11h4M14 15h4M6 7l6-4" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="7" width="18" height="12" rx="2" /><circle cx="7" cy="13" r="2" /><path d="M14 11h4M14 15h4M6 7l6-4" /></svg>`
  },
  Megaphone: {
    category: "Music & Media",
    desc: "Audio bullhorn marketing megaphone",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M3 11l13-6v14L3 13z" fill="currentColor" className="text-accent/15" /><path d="M16 8h4v8h-4" /><path d="M6 12.5v5A1.5 1.5 0 0 0 7.5 19h1.5a1 1 0 0 0 1-1v-5.5" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11l13-6v14L3 13z" fill="currentColor" className="text-accent/15" /><path d="M16 8h4v8h-4" /><path d="M6 12.5v5A1.5 1.5 0 0 0 7.5 19h1.5a1 1 0 0 0 1-1v-5.5" /></svg>`
  },
  MusicBell: {
    category: "Music & Media",
    desc: "Orchestra hand bell note signal",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M18 8a6 6 0 0 0-12 0v7h12V8z" /><circle cx="12" cy="18" r="1.5" fill="currentColor" /><path d="M12 2v2M4 17h16" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8a6 6 0 0 0-12 0v7h12V8z" /><circle cx="12" cy="18" r="1.5" fill="currentColor" /><path d="M12 2v2M4 17h16" /></svg>`
  },
  RssFeed: {
    category: "Music & Media",
    desc: "RSS blog update stream signal logo",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <circle cx="5" cy="19" r="1.5" fill="currentColor" /><path d="M4 4c9.5 0 16 6.5 16 16M4 11.5c5.5 0 8.5 3 8.5 8.5" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="5" cy="19" r="1.5" fill="currentColor" /><path d="M4 4c9.5 0 16 6.5 16 16M4 11.5c5.5 0 8.5 3 8.5 8.5" /></svg>`
  },
  CassetteTape: {
    category: "Music & Media",
    desc: "Retro magnetic audio cassette tape",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="3" y="6" width="18" height="12" rx="2" /><circle cx="8.5" cy="12" r="1.5" fill="currentColor" /><circle cx="15.5" cy="12" r="1.5" fill="currentColor" /><rect x="7" y="10" width="10" height="4" rx="0.5" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="6" width="18" height="12" rx="2" /><circle cx="8.5" cy="12" r="1.5" fill="currentColor" /><circle cx="15.5" cy="12" r="1.5" fill="currentColor" /><rect x="7" y="10" width="10" height="4" rx="0.5" /></svg>`
  },
  DrumInstruments: {
    category: "Music & Media",
    desc: "Acoustic snare drum set",
    draw: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
        <ellipse cx="12" cy="7" rx="9" ry="3" /><path d="M3 7v10c0 1.6 4 3 9 3s9-1.4 9-3V7" /><path d="M5.5 7v10M18.5 7v10" />
      </svg>
    ),
    raw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="7" rx="9" ry="3" /><path d="M3 7v10c0 1.6 4 3 9 3s9-1.4 9-3V7" /><path d="M5.5 7v10M18.5 7v10" /></svg>`
  }
};
