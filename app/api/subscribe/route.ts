import { NextResponse } from "next/server";

/**
 * Email capture. Wire RESEND_API_KEY + RESEND_AUDIENCE_ID to go live.
 * Until then this validates and no-ops so the form works in development.
 */
export async function POST(req: Request) {
  let email = "";
  let source = "unknown";

  try {
    const body = (await req.json()) as { email?: string; source?: string };
    email = (body.email ?? "").trim();
    source = body.source ?? "unknown";
  } catch {
    return NextResponse.json({ error: "Invalid body" }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  const key = process.env.RESEND_API_KEY;
  const audience = process.env.RESEND_AUDIENCE_ID;

  if (!key || !audience) {
    console.info("[subscribe] no Resend config yet — captured:", email, source);
    return NextResponse.json({ ok: true, stored: false });
  }

  const res = await fetch(`https://api.resend.com/audiences/${audience}/contacts`, {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({ email, unsubscribed: false }),
  });

  if (!res.ok) {
    return NextResponse.json({ error: "Subscribe failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true, stored: true });
}
