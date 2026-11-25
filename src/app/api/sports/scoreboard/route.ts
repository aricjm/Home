import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const sport = searchParams.get("sport");
  const league = searchParams.get("league");
  const dates = searchParams.get("dates");

  if (!sport || !league) {
    return NextResponse.json({ error: "Missing sport or league parameters" }, { status: 400 });
  }

  try {
    let url = `https://site.api.espn.com/apis/site/v2/sports/${sport}/${league}/scoreboard`;
    if (dates) {
      url += `?dates=${dates}`;
    }
    
    const res = await fetch(url, { next: { revalidate: 30 } }); // Cache for 30 seconds
    if (!res.ok) {
      return NextResponse.json({ error: `ESPN returned status ${res.status}` }, { status: res.status });
    }
    const data = await res.json();
    return NextResponse.json(data);
  } catch (err: any) {
    return NextResponse.json({ error: err.message || "Failed to fetch ESPN data" }, { status: 500 });
  }
}
