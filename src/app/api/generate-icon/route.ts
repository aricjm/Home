import { NextResponse } from "next/server";

// Generative client-side SVG vector path maker from scratch (fallback engine)
const generateProceduralSVG = (name: string, description: string, seed: number): string => {
  const combined = `${name.trim()}_${description.trim()}_${seed}`;

  let hash = 0;
  for (let i = 0; i < combined.length; i++) {
    hash = combined.charCodeAt(i) + ((hash << 5) - hash);
    hash = hash & hash;
  }
  const absHash = Math.abs(hash);

  const getVal = (offset: number, min: number, max: number) => {
    const val = Math.abs(Math.sin(absHash + offset * 14.521));
    return min + val * (max - min);
  };

  const getInt = (offset: number, min: number, max: number) => {
    return Math.floor(getVal(offset, min, max + 1));
  };

  const symmetry = getInt(1, 0, 2);
  const drawCircles = getVal(2, 0, 1) > 0.4;
  const drawLines = getVal(3, 0, 1) > 0.4;
  const numSteps = getInt(4, 3, 6);

  let paths: string[] = [];

  if (drawCircles) {
    const boundaryMode = getInt(5, 0, 2);
    const radius = getVal(6, 6, 11).toFixed(1);
    if (boundaryMode === 0) {
      paths.push(`<circle cx="12" cy="12" r="${radius}" />`);
      if (parseFloat(radius) > 4) {
        const innerRad = (parseFloat(radius) - 3).toFixed(1);
        paths.push(`<circle cx="12" cy="12" r="${innerRad}" stroke-dasharray="3,2" />`);
      }
    } else if (boundaryMode === 1) {
      paths.push(`<circle cx="12" cy="12" r="${radius}" stroke-dasharray="2,3" />`);
    } else {
      const size = (parseFloat(radius) * 2).toFixed(1);
      const xy = (12 - parseFloat(radius)).toFixed(1);
      paths.push(`<rect x="${xy}" y="${xy}" width="${size}" height="${size}" rx="3" />`);
    }
  }

  if (symmetry === 1) {
    const rightPoints: Array<{x: number; y: number}> = [];
    const numPoints = getInt(7, 3, 5);
    const topY = getVal(8, 3, 6);
    rightPoints.push({ x: 12, y: topY });

    for (let i = 0; i < numPoints; i++) {
      const px = getVal(9 + i * 2, 13.5, 21.5);
      const py = getVal(10 + i * 2, topY + 2, 17.5);
      rightPoints.push({ x: px, y: py });
    }

    const botY = getVal(11, 16.5, 21.5);
    rightPoints.push({ x: 12, y: botY });

    let pathString = `M 12 ${topY.toFixed(1)}`;
    for (let i = 1; i < rightPoints.length; i++) {
      const p = rightPoints[i];
      const curveChoice = getInt(12 + i, 0, 1);
      if (curveChoice === 0) {
        const cx1 = getVal(13 + i * 3, 13, 20).toFixed(1);
        const cy1 = (rightPoints[i-1].y + (p.y - rightPoints[i-1].y) * 0.3).toFixed(1);
        const cx2 = getVal(14 + i * 3, 13, 20).toFixed(1);
        const cy2 = (rightPoints[i-1].y + (p.y - rightPoints[i-1].y) * 0.7).toFixed(1);
        pathString += ` C ${cx1} ${cy1}, ${cx2} ${cy2}, ${p.x.toFixed(1)} ${p.y.toFixed(1)}`;
      } else {
        pathString += ` L ${p.x.toFixed(1)} ${p.y.toFixed(1)}`;
      }
    }

    for (let i = rightPoints.length - 2; i >= 0; i--) {
      const p = rightPoints[i];
      const mirrorX = (24 - p.x).toFixed(1);
      const curveChoice = getInt(15 + i, 0, 1);
      if (curveChoice === 0) {
        const prevP = rightPoints[i + 1];
        const cx1 = (24 - getVal(13 + i * 3, 13, 20)).toFixed(1);
        const cy1 = (prevP.y + (p.y - prevP.y) * 0.3).toFixed(1);
        const cx2 = (24 - getVal(14 + i * 3, 13, 20)).toFixed(1);
        const cy2 = (prevP.y + (p.y - prevP.y) * 0.7).toFixed(1);
        pathString += ` C ${cx1} ${cy1}, ${cx2} ${cy2}, ${mirrorX} ${p.y.toFixed(1)}`;
      } else {
        pathString += ` L ${mirrorX} ${p.y.toFixed(1)}`;
      }
    }
    pathString += " Z";
    paths.push(`<path d="${pathString}" />`);

    if (drawLines) {
      const lineY = getVal(16, topY + 2.5, botY - 2.5).toFixed(1);
      const lineW = getVal(17, 2, 5).toFixed(1);
      paths.push(`<path d="M ${(12 - parseFloat(lineW)).toFixed(1)} ${lineY} L ${(12 + parseFloat(lineW)).toFixed(1)} ${lineY}" />`);

      const nodeX = getVal(18, 14, 18).toFixed(1);
      const nodeY = getVal(19, topY + 2, botY - 2).toFixed(1);
      const nodeR = getVal(20, 0.7, 1.5).toFixed(1);
      paths.push(`<circle cx="${nodeX}" cy="${nodeY}" r="${nodeR}" />`);
      paths.push(`<circle cx="${(24 - parseFloat(nodeX)).toFixed(1)}" cy="${nodeY}" r="${nodeR}" />`);
    }

  } else if (symmetry === 2) {
    const petals = getInt(21, 5, 12);
    const outerR = getVal(22, 7.5, 11).toFixed(1);
    const innerR = getVal(23, 2.5, 6).toFixed(1);
    const steps: string[] = [];

    for (let i = 0; i < petals * 2; i++) {
      const angle = (i * Math.PI) / petals - Math.PI / 2;
      const r = i % 2 === 0 ? parseFloat(outerR) : parseFloat(innerR);
      const x = (12 + r * Math.cos(angle)).toFixed(1);
      const y = (12 + r * Math.sin(angle)).toFixed(1);
      steps.push(`${i === 0 ? 'M' : 'L'} ${x} ${y}`);
    }
    steps.push('Z');
    paths.push(`<path d="${steps.join(' ')}" />`);

    const coreRad = getVal(24, 1.2, 3.8).toFixed(1);
    paths.push(`<circle cx="12" cy="12" r="${coreRad}" fill="currentColor" />`);

    if (drawLines) {
      const crossR = (parseFloat(outerR) + 1.5).toFixed(1);
      paths.push(`<path d="M 12 ${(12 - parseFloat(crossR)).toFixed(1)} L 12 ${(12 + parseFloat(crossR)).toFixed(1)} M ${(12 - parseFloat(crossR)).toFixed(1)} 12 L ${(12 + parseFloat(crossR)).toFixed(1)} 12" opacity="0.6" />`);
    }

  } else {
    const startX = getVal(25, 3, 6).toFixed(1);
    const startY = getVal(26, 4, 10).toFixed(1);
    let pathD = `M ${startX} ${startY}`;

    let lastX = parseFloat(startX);
    let lastY = parseFloat(startY);

    for (let i = 0; i < numSteps; i++) {
      const nextX = getVal(27 + i * 4, lastX + 2, Math.min(22, lastX + 6.5));
      const nextY = getVal(28 + i * 4, 3, 21);
      
      const c1x = getVal(29 + i * 4, lastX, nextX).toFixed(1);
      const c1y = getVal(30 + i * 4, 3, 21).toFixed(1);
      const c2x = getVal(31 + i * 4, lastX, nextX).toFixed(1);
      const c2y = getVal(32 + i * 4, 3, 21).toFixed(1);

      pathD += ` C ${c1x} ${c1y}, ${c2x} ${c2y}, ${nextX.toFixed(1)} ${nextY.toFixed(1)}`;
      
      if (getVal(33 + i, 0, 1) > 0.4) {
        paths.push(`<circle cx="${nextX.toFixed(1)}" cy="${nextY.toFixed(1)}" r="${getVal(34+i, 0.8, 2.2).toFixed(1)}" />`);
      }
      lastX = nextX;
      lastY = nextY;
    }
    paths.push(`<path d="${pathD}" />`);

    if (drawLines) {
      const baselineY = getVal(35, 17, 21).toFixed(1);
      paths.push(`<path d="M 3 ${baselineY} L 21 ${baselineY}" stroke-dasharray="3,3" />`);
    }
  }

  const innerSvg = paths.join("\n");
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${innerSvg}</svg>`;
};

export async function POST(req: Request) {
  try {
    const { name, description, category, seed } = await req.json();

    if (!name) {
      return NextResponse.json({ error: "Name is required" }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;

    // Fallback immediately if API Key is not set or placeholders are used
    if (!apiKey || apiKey.includes("your-") || apiKey.trim() === "") {
      const proceduralSvg = generateProceduralSVG(name, description || "", seed || 0);
      return NextResponse.json({ svg: proceduralSvg, source: "procedural-fallback" });
    }

    // Call Google Gemini Developer API
    const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;
    
    const promptText = `You are a professional web UI designer.
Generate a clean, modern, minimalist custom vector SVG icon for:
Icon Name: "${name}"
Category: "${category || 'Miscellaneous'}"
Description: "${description || 'Custom handcrafted vector'}"
Seed: ${seed || 0} (Make sure the design is noticeably different if seed changes)

Guidelines:
1. Return ONLY valid SVG code.
2. The outer element MUST be exactly: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">...</svg>
3. Use minimal lines, shapes, paths, circles, rectangles. Keep it simple, elegant, and modern.
4. Do NOT wrap the output in markdown code blocks like \`\`\`xml or \`\`\`svg. Output only raw XML text.`;

    const response = await fetch(geminiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{
          parts: [{ text: promptText }]
        }]
      })
    });

    if (!response.ok) {
      throw new Error(`Gemini API responded with status ${response.status}`);
    }

    const json = await response.json();
    let text = json.candidates?.[0]?.content?.parts?.[0]?.text;
    
    if (!text) {
      throw new Error("Invalid response format from Gemini API");
    }

    // Clean any markdown formatting that the LLM may have returned
    let cleanSvg = text.trim();
    if (cleanSvg.includes("```")) {
      cleanSvg = cleanSvg.replace(/```[a-z]*\n?/gi, "").trim();
    }

    // Basic check to verify it contains <svg
    if (!cleanSvg.toLowerCase().includes("<svg")) {
      throw new Error("Model response did not contain valid SVG tag");
    }

    return NextResponse.json({ svg: cleanSvg, source: "gemini-ai" });

  } catch (err: any) {
    console.error("AI Generation Error:", err);
    
    // In case of error (e.g. rate limit, bad api key, network drop), execute procedural fallback
    try {
      const { name, description, seed } = await req.json();
      const proceduralSvg = generateProceduralSVG(name, description || "", seed || 0);
      return NextResponse.json({ 
        svg: proceduralSvg, 
        source: "procedural-error-fallback", 
        warning: err.message || "AI failed, falling back to local procedural engine" 
      });
    } catch {
      return NextResponse.json({ error: "Failed to generate SVG" }, { status: 500 });
    }
  }
}
