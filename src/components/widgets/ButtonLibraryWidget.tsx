import React, { useState } from "react";
import { Copy, Check, ExternalLink, Terminal, Code2, ChevronDown, Mail, Search, Loader2, ArrowRight, Trash2, Send } from "lucide-react";
import { BUTTON_LIBRARIES, getButtonLibrary } from "@/data/buttonLibraries";

function renderButtonPreview(libraryId: string, label: string) {
  // Base classes to reset and look consistent
  const base = "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:pointer-events-none text-sm px-4 py-2 rounded-lg";
  
  switch (libraryId) {
    case "btn-shadcn": {
      if (label === "Default") return <button className={`${base} bg-white text-black hover:bg-white/90 rounded-md`}>Click me</button>;
      if (label === "Destructive") return <button className={`${base} bg-red-605 text-white hover:bg-red-700 bg-red-600 rounded-md`}>Delete</button>;
      if (label === "Outline") return <button className={`${base} border border-border text-white hover:bg-secondary/50 rounded-md`}>Outline</button>;
      if (label === "Secondary") return <button className={`${base} bg-secondary text-white hover:bg-secondary/80 rounded-md`}>Secondary</button>;
      if (label === "Ghost") return <button className={`${base} text-white hover:bg-secondary/50 rounded-md`}>Ghost</button>;
      if (label === "Link") return <button className={`${base} text-accent underline underline-offset-4 hover:text-accent/80 rounded-md`}>Link</button>;
      if (label === "Size: sm") return <button className={`${base} bg-white text-black text-xs px-3 py-1 rounded-md`}>Small</button>;
      if (label === "Size: lg") return <button className={`${base} bg-white text-black text-base px-6 py-2.5 rounded-md`}>Large</button>;
      if (label === "Size: icon") return <button className={`${base} bg-white text-black p-2 rounded-md`}><Search className="h-4 w-4" /></button>;
      if (label === "Disabled") return <button className={`${base} bg-white/50 text-black/50 rounded-md`} disabled>Disabled</button>;
      if (label === "Loading") return <button className={`${base} bg-white text-black rounded-md opacity-80`} disabled><Loader2 className="mr-2 h-4 w-4 animate-spin" />Please wait</button>;
      if (label === "With Icon") return <button className={`${base} bg-white text-black rounded-md`}><Mail className="mr-2 h-4 w-4" />Login with Email</button>;
      if (label === "As Child") return <a href="#link" className={`${base} bg-white text-black hover:bg-white/90 rounded-md`}>Login</a>;
      break;
    }
    case "btn-mantine": {
      if (label.includes("Default")) return <button className={`${base} bg-blue-650 bg-blue-600 hover:bg-blue-700 text-white`}>Click me</button>;
      if (label === "Light") return <button className={`${base} bg-blue-500/15 text-blue-400 hover:bg-blue-500/25`}>Light</button>;
      if (label === "Outline") return <button className={`${base} border border-blue-500 text-blue-400 hover:bg-blue-500/10 bg-transparent`}>Outline</button>;
      if (label === "Subtle") return <button className={`${base} text-blue-400 hover:bg-blue-500/10 bg-transparent`}>Subtle</button>;
      if (label === "Transparent") return <button className={`${base} text-blue-400 bg-transparent`}>Transparent</button>;
      if (label === "White") return <button className={`${base} bg-white text-blue-650 text-blue-600 hover:bg-gray-100`}>White</button>;
      if (label === "Gradient") return <button className={`${base} bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 text-white`}>Gradient</button>;
      if (label === "Size: xs") return <button className={`${base} bg-blue-600 text-xs px-2 py-1`}>XS</button>;
      if (label === "Size: xl") return <button className={`${base} bg-blue-600 text-lg px-8 py-3`}>XL</button>;
      if (label === "Full Width") return <button className={`${base} bg-blue-600 w-full`}>Full Width</button>;
      if (label === "Loading") return <button className={`${base} bg-blue-600 text-white opacity-80`} disabled><Loader2 className="h-4 w-4 animate-spin" /></button>;
      if (label === "Disabled") return <button className={`${base} bg-blue-600/50 text-white/50`} disabled>Disabled</button>;
      if (label === "Radius: xl") return <button className={`${base} bg-blue-600 rounded-full`}>Rounded</button>;
      if (label === "Left Section") return <button className={`${base} bg-blue-600 text-white`}><Mail className="mr-2 h-4 w-4" />Email</button>;
      if (label === "Compact SM") return <button className={`${base} bg-blue-600 text-xs px-2.5 py-1`}>Compact SM</button>;
      break;
    }
    case "btn-chakra": {
      const chakraBase = "inline-flex items-center justify-center font-semibold rounded-md transition-all text-sm px-4 py-2";
      if (label === "Solid") return <button className={`${chakraBase} bg-blue-500 text-white hover:bg-blue-600 shadow-sm`}>Button</button>;
      if (label === "Outline") return <button className={`${chakraBase} border border-blue-500 text-blue-400 hover:bg-blue-500/10 bg-transparent`}>Outline</button>;
      if (label === "Ghost") return <button className={`${chakraBase} text-blue-400 hover:bg-blue-500/10 bg-transparent`}>Ghost</button>;
      if (label === "Link") return <button className={`${chakraBase} text-blue-400 underline hover:text-blue-500 bg-transparent`}>Link</button>;
      if (label === "Unstyled") return <button className="text-white hover:underline bg-transparent">Unstyled</button>;
      if (label === "Color: green") return <button className={`${chakraBase} bg-green-500 text-white hover:bg-green-600`}>Green</button>;
      if (label === "Color: red") return <button className={`${chakraBase} bg-red-500 text-white hover:bg-red-600`}>Danger</button>;
      if (label === "Size: xs") return <button className={`${chakraBase} bg-blue-500 text-xs px-2.5 py-1`}>XS</button>;
      if (label === "Size: lg") return <button className={`${chakraBase} bg-blue-500 text-base px-6 py-2.5`}>Large</button>;
      if (label === "Loading") return <button className={`${chakraBase} bg-blue-500 text-white opacity-80`} disabled><Loader2 className="h-4 w-4 animate-spin" /></button>;
      if (label === "Loading + Text") return <button className={`${chakraBase} bg-teal-500 text-white opacity-80`} disabled><Loader2 className="mr-2 h-4 w-4 animate-spin" />Submitting</button>;
      if (label === "Disabled") return <button className={`${chakraBase} bg-blue-500/50 text-white/50`} disabled>Disabled</button>;
      if (label === "Full Width") return <button className={`${chakraBase} bg-blue-500 text-white w-full`}>Full Width</button>;
      if (label === "Left Icon") return <button className={`${chakraBase} bg-blue-500 text-white`}><Mail className="mr-2 h-4 w-4" />Email</button>;
      if (label === "Right Icon") return <button className={`${chakraBase} bg-blue-500 text-white`}>Continue<ArrowRight className="ml-2 h-4 w-4" /></button>;
      break;
    }
    case "btn-mui": {
      const muiBase = "inline-flex items-center justify-center tracking-wide font-medium uppercase text-[11px] px-4 py-2 transition-all rounded shadow-sm";
      if (label === "Text") return <button className="text-blue-500 hover:bg-blue-500/10 font-medium px-4 py-2 uppercase text-[11px] rounded bg-transparent">Text</button>;
      if (label === "Contained") return <button className={`${muiBase} bg-blue-600 text-white hover:bg-blue-700 hover:shadow`}>Contained</button>;
      if (label === "Outlined") return <button className="border border-blue-500/50 text-blue-500 hover:bg-blue-500/10 font-medium px-4 py-2 uppercase text-[11px] rounded bg-transparent">Outlined</button>;
      if (label === "Color: primary") return <button className={`${muiBase} bg-blue-600 text-white hover:bg-blue-700`}>Primary</button>;
      if (label === "Color: secondary") return <button className={`${muiBase} bg-purple-650 bg-purple-600 text-white hover:bg-purple-700`}>Secondary</button>;
      if (label === "Color: success") return <button className={`${muiBase} bg-green-600 text-white hover:bg-green-700`}>Success</button>;
      if (label === "Color: error") return <button className={`${muiBase} bg-red-600 text-white hover:bg-red-700`}>Error</button>;
      if (label === "Color: warning") return <button className={`${muiBase} bg-amber-600 text-white hover:bg-amber-700`}>Warning</button>;
      if (label === "Size: small") return <button className="bg-blue-600 text-white font-medium uppercase text-[9px] px-3 py-1.5 rounded shadow-sm">Small</button>;
      if (label === "Size: large") return <button className="bg-blue-600 text-white font-medium uppercase text-[13px] px-6 py-2.5 rounded shadow-sm">Large</button>;
      if (label === "Disabled") return <button className="bg-white/10 text-white/30 font-medium uppercase text-[11px] px-4 py-2 rounded shadow-none cursor-not-allowed" disabled>Disabled</button>;
      if (label === "Full Width") return <button className={`${muiBase} bg-blue-600 text-white w-full`}>Full Width</button>;
      if (label === "Start Icon") return <button className={`${muiBase} bg-blue-600 text-white`}><Trash2 className="mr-2 h-3.5 w-3.5" />Delete</button>;
      if (label === "End Icon") return <button className={`${muiBase} bg-blue-600 text-white`}>Send<Send className="ml-2 h-3.5 w-3.5" /></button>;
      if (label === "Loading") return <button className="bg-blue-600/50 text-white/50 font-medium uppercase text-[11px] px-4 py-2 rounded flex items-center justify-center" disabled><Loader2 className="h-3.5 w-3.5 animate-spin" /></button>;
      break;
    }
    case "btn-antd": {
      const antBase = "inline-flex items-center justify-center text-sm px-4 py-1.5 transition-all border rounded-md shadow-sm";
      if (label === "Primary") return <button className={`${antBase} bg-blue-500 border-blue-500 text-white hover:bg-blue-400`}>Primary</button>;
      if (label === "Default") return <button className={`${antBase} border-border text-white hover:border-blue-400 hover:text-blue-400 bg-transparent`}>Default</button>;
      if (label === "Dashed") return <button className={`${antBase} border-dashed border-border text-white hover:border-blue-400 hover:text-blue-400 bg-transparent`}>Dashed</button>;
      if (label === "Text") return <button className="text-white hover:bg-white/5 text-sm px-4 py-1.5 rounded-md bg-transparent">Text</button>;
      if (label === "Link") return <button className="text-blue-500 hover:text-blue-400 text-sm hover:underline bg-transparent">Link</button>;
      if (label === "Danger Primary") return <button className={`${antBase} bg-red-500 border-red-500 text-white hover:bg-red-400`}>Danger</button>;
      if (label === "Danger Default") return <button className={`${antBase} border-red-500 text-red-500 hover:bg-red-500/10 bg-transparent`}>Danger</button>;
      if (label === "Ghost") return <button className="border border-blue-500 text-blue-500 hover:bg-blue-500/10 text-sm px-4 py-1.5 rounded-md bg-transparent">Ghost</button>;
      if (label === "Size: small") return <button className="bg-blue-500 border-blue-500 text-white text-xs px-2.5 py-1 rounded-md shadow-sm">Small</button>;
      if (label === "Size: large") return <button className="bg-blue-500 border-blue-500 text-white text-base px-6 py-2 rounded-md shadow-sm">Large</button>;
      if (label === "Loading") return <button className="bg-blue-500 border-blue-500 text-white text-sm px-4 py-1.5 rounded-md opacity-70 flex items-center" disabled><Loader2 className="mr-2 h-3.5 w-3.5 animate-spin" />Loading</button>;
      if (label === "Disabled") return <button className="bg-secondary border-border text-muted-foreground text-sm px-4 py-1.5 rounded-md cursor-not-allowed" disabled>Disabled</button>;
      if (label === "Block") return <button className={`${antBase} bg-blue-500 border-blue-500 text-white hover:bg-blue-400 w-full`}>Block</button>;
      if (label === "Icon Only") return <button className="bg-blue-500 border-blue-500 text-white p-2 rounded-full shadow-sm"><Search className="h-4 w-4" /></button>;
      if (label === "Button Group") return (
        <div className="inline-flex rounded-md shadow-sm">
          <button className="border border-border text-white text-sm px-3 py-1 hover:border-blue-400 rounded-l-md bg-transparent">Left</button>
          <button className="border-t border-b border-r border-border text-white text-sm px-3 py-1 hover:border-blue-400 rounded-r-md bg-transparent">Right</button>
        </div>
      );
      break;
    }
    case "btn-nextui": {
      const nextBase = "inline-flex items-center justify-center font-medium transition-all duration-200 text-sm px-4 py-2 rounded-xl active:scale-95";
      if (label === "Solid") return <button className={`${nextBase} bg-blue-600 text-white shadow-lg shadow-blue-600/35 hover:opacity-90`}>Button</button>;
      if (label === "Bordered") return <button className={`${nextBase} border-2 border-blue-600 text-blue-400 bg-transparent hover:bg-blue-600/10`}>Bordered</button>;
      if (label === "Light") return <button className={`${nextBase} text-blue-400 hover:bg-blue-600/10 bg-transparent`}>Light</button>;
      if (label === "Flat") return <button className={`${nextBase} bg-blue-600/20 text-blue-400 hover:opacity-90`}>Flat</button>;
      if (label === "Faded") return <button className={`${nextBase} bg-secondary/80 border border-border text-blue-400 hover:opacity-90`}>Faded</button>;
      if (label === "Shadow") return <button className={`${nextBase} bg-blue-600 text-white shadow-xl shadow-blue-600/50 hover:shadow-lg`}>Shadow</button>;
      if (label === "Ghost") return <button className={`${nextBase} border-2 border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white bg-transparent`}>Ghost</button>;
      if (label === "Color: secondary") return <button className={`${nextBase} bg-purple-600 text-white shadow-lg shadow-purple-600/30 hover:opacity-90`}>Secondary</button>;
      if (label === "Color: success") return <button className={`${nextBase} bg-green-600 text-white hover:opacity-90`}>Success</button>;
      if (label === "Color: warning") return <button className={`${nextBase} bg-amber-600 text-white hover:opacity-90`}>Warning</button>;
      if (label === "Color: danger") return <button className={`${nextBase} bg-red-600 text-white hover:opacity-90`}>Danger</button>;
      if (label === "Size: sm") return <button className="bg-blue-600 text-white text-xs px-3 py-1.5 rounded-lg font-medium">Small</button>;
      if (label === "Size: lg") return <button className="bg-blue-600 text-white text-base px-6 py-3 rounded-2xl font-semibold">Large</button>;
      if (label === "Radius: full") return <button className={`${nextBase} bg-blue-600 text-white rounded-full`}>Pill</button>;
      if (label === "Loading") return <button className={`${nextBase} bg-blue-600 text-white opacity-85`} disabled><Loader2 className="h-4 w-4 animate-spin" /></button>;
      if (label === "Disabled") return <button className={`${nextBase} bg-blue-600/50 text-white/50`} disabled>Disabled</button>;
      break;
    }
    case "btn-daisyui": {
      const daisyBase = "inline-flex items-center justify-center font-semibold text-sm px-4 py-2 rounded-lg bg-neutral text-neutral-content border-none hover:bg-neutral/80 shadow-md";
      if (label === "Default") return <button className={daisyBase}>Button</button>;
      if (label === "Primary") return <button className={`${daisyBase} bg-indigo-600 text-white hover:bg-indigo-700`}>Primary</button>;
      if (label === "Secondary") return <button className={`${daisyBase} bg-pink-600 text-white hover:bg-pink-700`}>Secondary</button>;
      if (label === "Accent") return <button className={`${daisyBase} bg-teal-600 text-white hover:bg-teal-700`}>Accent</button>;
      if (label === "Ghost") return <button className="bg-transparent hover:bg-white/10 text-white px-4 py-2 rounded-lg">Ghost</button>;
      if (label === "Link") return <button className="text-indigo-400 hover:underline bg-transparent">Link</button>;
      if (label === "Info") return <button className={`${daisyBase} bg-cyan-600 text-white hover:bg-cyan-700`}>Info</button>;
      if (label === "Success") return <button className={`${daisyBase} bg-emerald-600 text-white hover:bg-emerald-700`}>Success</button>;
      if (label === "Warning") return <button className={`${daisyBase} bg-amber-500 text-white hover:bg-amber-600`}>Warning</button>;
      if (label === "Error") return <button className={`${daisyBase} bg-rose-600 text-white hover:bg-rose-700`}>Error</button>;
      if (label === "Outline") return <button className="border border-white hover:bg-white hover:text-black text-white px-4 py-2 rounded-lg bg-transparent">Outline</button>;
      if (label === "Size: xs") return <button className="bg-neutral text-xs px-2.5 py-1 rounded">XS</button>;
      if (label === "Size: lg") return <button className="bg-neutral text-base px-6 py-3 rounded-xl">Large</button>;
      if (label === "Wide") return <button className="bg-neutral px-12 py-2 rounded-lg">Wide</button>;
      if (label === "Block") return <button className="bg-neutral w-full py-2 rounded-lg">Block</button>;
      if (label === "Disabled") return <button className="bg-neutral/40 text-neutral-content/40 cursor-not-allowed px-4 py-2 rounded-lg" disabled>Disabled</button>;
      if (label === "Circle") return <button className="bg-neutral p-3 rounded-full flex items-center justify-center h-10 w-10">✕</button>;
      break;
    }
    case "btn-flowbite": {
      const fbBase = "inline-flex items-center justify-center font-medium transition-all text-sm px-4 py-2 rounded-lg text-white";
      if (label === "Default") return <button className={`${fbBase} bg-blue-750 bg-blue-700 hover:bg-blue-800`}>Click me</button>;
      if (label === "Info") return <button className={`${fbBase} bg-cyan-600 hover:bg-cyan-700`}>Info</button>;
      if (label === "Failure") return <button className={`${fbBase} bg-red-600 hover:bg-red-700`}>Failure</button>;
      if (label === "Warning") return <button className={`${fbBase} bg-yellow-500 hover:bg-yellow-600`}>Warning</button>;
      if (label === "Success") return <button className={`${fbBase} bg-green-600 hover:bg-green-700`}>Success</button>;
      if (label === "Gray") return <button className="bg-gray-700 hover:bg-gray-600 text-white font-medium text-sm px-4 py-2 rounded-lg">Gray</button>;
      if (label === "Dark") return <button className="bg-gray-800 hover:bg-gray-700 text-white border border-gray-700 font-medium text-sm px-4 py-2 rounded-lg">Dark</button>;
      if (label === "Light") return <button className="bg-white hover:bg-gray-100 text-gray-900 border border-gray-300 font-medium text-sm px-4 py-2 rounded-lg">Light</button>;
      if (label === "Outline") return <button className="border border-cyan-600 text-cyan-400 hover:bg-cyan-600/10 font-medium text-sm px-4 py-2 rounded-lg bg-transparent">Outline Info</button>;
      if (label === "Gradient Mono") return <button className={`${fbBase} bg-gradient-to-r from-blue-500 to-blue-600 hover:bg-gradient-to-br`}>Gradient Mono</button>;
      if (label === "Gradient Duo") return <button className={`${fbBase} bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l`}>Gradient Duo</button>;
      if (label === "Size: xs") return <button className="bg-blue-700 text-xs px-2.5 py-1 rounded-md">XS</button>;
      if (label === "Size: xl") return <button className="bg-blue-700 text-base px-6 py-2.5 rounded-lg">XL</button>;
      if (label === "Pill") return <button className="bg-blue-700 px-4 py-2 rounded-full">Pill</button>;
      if (label === "Disabled") return <button className="bg-blue-700/50 text-white/50 cursor-not-allowed px-4 py-2 rounded-lg" disabled>Disabled</button>;
      if (label === "Processing") return <button className="bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center" disabled><Loader2 className="mr-2 h-4 w-4 animate-spin" />Processing</button>;
      break;
    }
    case "btn-radix-btn": {
      const rxBase = "inline-flex items-center justify-center transition-all text-sm font-medium px-4 py-1.5 rounded-md shadow-sm";
      if (label === "Solid") return <button className={`${rxBase} bg-indigo-600 text-white hover:bg-indigo-500`}>Button</button>;
      if (label === "Soft") return <button className={`${rxBase} bg-indigo-500/15 text-indigo-400 hover:bg-indigo-500/25`}>Soft</button>;
      if (label === "Outline") return <button className={`${rxBase} border border-indigo-500/50 text-indigo-400 hover:bg-indigo-500/10 bg-transparent`}>Outline</button>;
      if (label === "Surface") return <button className={`${rxBase} border border-indigo-500/20 bg-indigo-500/10 text-indigo-400 hover:border-indigo-500/50`}>Surface</button>;
      if (label === "Ghost") return <button className="text-indigo-400 hover:bg-indigo-500/10 text-sm px-4 py-1.5 rounded-md bg-transparent">Ghost</button>;
      if (label === "Color: indigo") return <button className={`${rxBase} bg-indigo-600 text-white`}>Indigo</button>;
      if (label === "Color: crimson") return <button className={`${rxBase} bg-rose-600 text-white hover:bg-rose-500`}>Crimson</button>;
      if (label === "Color: jade") return <button className={`${rxBase} bg-emerald-600 text-white hover:bg-emerald-500`}>Jade</button>;
      if (label === "Size: 1") return <button className="bg-indigo-600 text-white text-xs px-2.5 py-1 rounded shadow-sm">Size 1</button>;
      if (label === "Size: 3") return <button className="bg-indigo-600 text-white text-sm px-4 py-1.5 rounded-md shadow-sm">Size 3</button>;
      if (label === "Size: 4") return <button className="bg-indigo-600 text-white text-base px-6 py-2 rounded-md shadow-sm">Size 4</button>;
      if (label === "Radius: full") return <button className="bg-indigo-600 text-white text-sm px-4 py-1.5 rounded-full shadow-sm">Full Radius</button>;
      if (label === "Radius: none") return <button className="bg-indigo-600 text-white text-sm px-4 py-1.5 rounded-none shadow-sm">No Radius</button>;
      if (label === "High Contrast") return <button className="bg-white text-black text-sm px-4 py-1.5 rounded-md shadow-sm font-semibold">High Contrast</button>;
      if (label === "Disabled") return <button className="bg-indigo-600/50 text-white/50 text-sm px-4 py-1.5 rounded-md shadow-none" disabled>Disabled</button>;
      break;
    }
    case "btn-headless": {
      const hlBase = "inline-flex items-center justify-center text-sm font-semibold px-4 py-2 rounded-md transition-all";
      if (label === "Basic") return <button className={`${hlBase} bg-sky-600 text-white hover:bg-sky-500 shadow`}>Save changes</button>;
      if (label === "Outline") return <button className={`${hlBase} border border-sky-600 text-sky-400 hover:bg-sky-600/10 bg-transparent`}>Cancel</button>;
      if (label === "Disabled") return <button className={`${hlBase} bg-white/10 text-white/30 cursor-not-allowed`} disabled>Disabled</button>;
      if (label === "Hover State") return <button className={`${hlBase} bg-sky-600 text-white hover:bg-sky-500`}>Hover me</button>;
      if (label === "Active State") return <button className={`${hlBase} bg-sky-600 text-white active:bg-sky-700`}>Click me</button>;
      if (label === "Focus State") return <button className={`${hlBase} bg-sky-600 text-white focus:ring-2 focus:ring-sky-500`}>Focus me</button>;
      if (label === "Dark Style") return <button className="bg-gray-800 border border-gray-700 hover:bg-gray-700 text-white font-semibold text-sm px-4 py-2 rounded-md shadow-sm">Dark Button</button>;
      if (label === "Destructive") return <button className={`${hlBase} bg-red-500 text-white hover:bg-red-400`}>Delete</button>;
      break;
    }
  }

  return <button className={`${base} bg-accent text-white`}>{label}</button>;
}

interface ButtonLibraryWidgetProps {
  libraryId: string;
}

export default function ButtonLibraryWidget({ libraryId }: ButtonLibraryWidgetProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [filterText, setFilterText] = useState("");

  const lib = getButtonLibrary(libraryId);

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
      <div className="bg-card border border-border rounded-2xl p-6 text-muted-foreground" id="button-library-not-found">
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
    <div className="bg-card border border-border rounded-2xl p-6 relative overflow-hidden transition-all duration-300 hover:border-accent/40 flex flex-col gap-6" id={`button-library-${lib.id}-root`}>
      {/* Decorative blur */}
      <div className="absolute -right-16 -top-16 w-40 h-40 bg-accent/5 rounded-full blur-3xl pointer-events-none" id={`button-library-${lib.id}-blur`} />

      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start gap-4" id={`button-library-${lib.id}-header`}>
        <div id={`button-library-${lib.id}-header-text`}>
          <div className="flex items-center gap-2.5 mb-1" id={`button-library-${lib.id}-title-row`}>
            <h2 className="text-xl font-bold text-white" id={`button-library-${lib.id}-title`}>{lib.name}</h2>
            <span className="px-2 py-0.5 rounded-full bg-accent/15 border border-accent/25 text-accent text-[10px] font-semibold uppercase tracking-wider" id={`button-library-${lib.id}-badge`}>
              Button
            </span>
          </div>
          <p className="text-sm text-muted-foreground max-w-lg" id={`button-library-${lib.id}-description`}>{lib.description}</p>
        </div>
        <a
          id={`button-library-${lib.id}-website-link`}
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
      <div className="space-y-2" id={`button-library-${lib.id}-install-section`}>
        <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider" id={`button-library-${lib.id}-install-label`}>
          <Terminal className="h-3.5 w-3.5" />
          Install
        </div>
        <div className="flex items-center gap-2 bg-secondary/60 border border-border rounded-lg px-4 py-2.5" id={`button-library-${lib.id}-install-box`}>
          <code className="flex-1 text-sm font-mono text-emerald-400 break-all" id={`button-library-${lib.id}-install-code`}>{lib.installCommand}</code>
          <CopyButton text={lib.installCommand} id={`button-library-${lib.id}-install-copy`} />
        </div>
      </div>

      {/* Import statement */}
      <div className="space-y-2" id={`button-library-${lib.id}-import-section`}>
        <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider" id={`button-library-${lib.id}-import-label`}>
          <Code2 className="h-3.5 w-3.5" />
          Import
        </div>
        <div className="flex items-start gap-2 bg-secondary/60 border border-border rounded-lg px-4 py-2.5" id={`button-library-${lib.id}-import-box`}>
          <pre className="flex-1 text-sm font-mono text-accent whitespace-pre-wrap break-all leading-relaxed" id={`button-library-${lib.id}-import-code`}>{lib.importStatement}</pre>
          <CopyButton text={lib.importStatement} id={`button-library-${lib.id}-import-copy`} />
        </div>
      </div>

      {/* Provider setup (if applicable) */}
      {lib.providerSetup && (
        <div className="space-y-2" id={`button-library-${lib.id}-provider-section`}>
          <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider" id={`button-library-${lib.id}-provider-label`}>
            <Code2 className="h-3.5 w-3.5" />
            Provider Setup
          </div>
          <div className="flex items-start gap-2 bg-amber-500/5 border border-amber-500/20 rounded-lg px-4 py-2.5" id={`button-library-${lib.id}-provider-box`}>
            <pre className="flex-1 text-sm font-mono text-amber-300/80 whitespace-pre-wrap break-all leading-relaxed" id={`button-library-${lib.id}-provider-code`}>{lib.providerSetup}</pre>
            <CopyButton text={lib.providerSetup} id={`button-library-${lib.id}-provider-copy`} />
          </div>
        </div>
      )}

      {/* Examples Table */}
      <div className="space-y-3" id={`button-library-${lib.id}-examples-section`}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3" id={`button-library-${lib.id}-examples-header`}>
          <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider" id={`button-library-${lib.id}-examples-label`}>
            Examples &amp; Variants ({filteredExamples.length})
          </div>
          <input
            id={`button-library-${lib.id}-filter-input`}
            type="text"
            placeholder="Filter examples..."
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
            className="w-full sm:w-48 bg-secondary border border-border text-xs rounded-lg px-3 py-1.5 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent text-white placeholder-muted-foreground/60 transition-all"
          />
        </div>

        <div className="overflow-x-auto rounded-lg border border-border" id={`button-library-${lib.id}-examples-table-container`}>
          <table className="w-full text-left border-collapse" id={`button-library-${lib.id}-examples-table`}>
            <thead>
              <tr className="bg-secondary/60 border-b border-border text-[11px] font-semibold text-muted-foreground uppercase tracking-wider" id={`button-library-${lib.id}-table-header`}>
                <th className="px-4 py-3 w-[15%]" id={`button-library-${lib.id}-th-variant`}>Variant</th>
                <th className="px-4 py-3 w-[20%]" id={`button-library-${lib.id}-th-desc`}>Description</th>
                <th className="px-4 py-3 w-[22%]" id={`button-library-${lib.id}-th-preview`}>Visual Preview</th>
                <th className="px-4 py-3 w-[38%]" id={`button-library-${lib.id}-th-code`}>Component Code</th>
                <th className="px-4 py-3 w-[5%] text-center" id={`button-library-${lib.id}-th-copy`}>Copy</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/50" id={`button-library-${lib.id}-table-body`}>
              {filteredExamples.length === 0 ? (
                <tr id={`button-library-${lib.id}-no-results`}>
                  <td colSpan={5} className="px-4 py-6 text-center text-sm text-muted-foreground" id={`button-library-${lib.id}-no-results-cell`}>
                    No matching examples
                  </td>
                </tr>
              ) : (
                filteredExamples.map((ex, i) => (
                  <tr
                    key={ex.label}
                    className="hover:bg-secondary/25 transition-colors group"
                    id={`button-library-${lib.id}-row-${i}`}
                  >
                    <td className="px-4 py-3 font-medium text-sm text-white" id={`button-library-${lib.id}-label-${i}`}>
                      {ex.label}
                    </td>
                    <td className="px-4 py-3 text-xs text-muted-foreground" id={`button-library-${lib.id}-desc-${i}`}>
                      {ex.description}
                    </td>
                    <td className="px-4 py-3" id={`button-library-${lib.id}-preview-${i}`}>
                      <div className="flex items-center min-h-[40px]" id={`button-library-${lib.id}-preview-container-${i}`}>
                        {renderButtonPreview(lib.id, ex.label)}
                      </div>
                    </td>
                    <td className="px-4 py-3" id={`button-library-${lib.id}-code-${i}`}>
                      <pre className="text-xs font-mono text-accent bg-secondary/40 px-2.5 py-1.5 rounded border border-border/50 whitespace-pre-wrap break-all leading-relaxed select-all" id={`button-library-${lib.id}-pre-${i}`}>
                        {ex.code}
                      </pre>
                    </td>
                    <td className="px-4 py-3 text-center" id={`button-library-${lib.id}-action-${i}`}>
                      <CopyButton text={ex.code} id={`button-library-${lib.id}-copy-${i}`} />
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-2 border-t border-border/50 text-[10px] text-muted-foreground font-mono flex justify-between items-center" id={`button-library-${lib.id}-footer`}>
        <span id={`button-library-${lib.id}-footer-count`}>{lib.examples.length} examples across {lib.name}</span>
        <a href={lib.website} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" id={`button-library-${lib.id}-footer-link`}>
          {lib.website}
        </a>
      </div>
    </div>
  );
}
