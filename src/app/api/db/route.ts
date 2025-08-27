import { NextResponse } from "next/server";

export async function GET() {
  const url = `https://place.dog/300/200?random=${Math.random()}`;

  try {
    const res = await fetch(url);

    if (!res.ok) {
      return NextResponse.json({ error: "Image not found" }, { status: 404 });
    }

    // Return JSON with new image URL
    return NextResponse.json({
      result: "Here is your random dog photo!",
      photo: url,
    });
  } catch (err) {
    return NextResponse.json({ error: "Failed to fetch image" }, { status: 500 });
  }
}
