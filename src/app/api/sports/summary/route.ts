import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const sport = searchParams.get("sport");
  const league = searchParams.get("league");
  const eventId = searchParams.get("event");

  if (!sport || !league || !eventId) {
    return NextResponse.json({ error: "Missing sport, league, or event parameters" }, { status: 400 });
  }

  try {
    const url = `https://site.api.espn.com/apis/site/v2/sports/${sport}/${league}/summary?event=${eventId}`;
    const res = await fetch(url, { next: { revalidate: 15 } }); // Cache for 15 seconds
    if (!res.ok) {
      return NextResponse.json({ error: `ESPN returned status ${res.status}` }, { status: res.status });
    }
    const data = await res.json();
    return NextResponse.json(data);
  } catch (err: any) {
    return NextResponse.json({ error: err.message || "Failed to fetch ESPN summary data" }, { status: 500 });
  }
}
