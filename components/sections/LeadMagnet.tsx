"use client";

import { useState } from "react";
import { Section, Container } from "@/components/ui/Section";
import { track } from "@/lib/analytics";

/** Captures the ~90% who leave without booking. */
export function LeadMagnet() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "done" | "error">("idle");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setState("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "lead_magnet" }),
      });
      if (!res.ok) throw new Error();
      track({ name: "email_captured", source: "lead_magnet" });
      setState("done");
      setEmail("");
    } catch {
      setState("error");
    }
  }

  return (
    <Section theme="light">
      <Container className="max-w-2xl! text-center">
        <h2 className="u-h2">Not ready to book?</h2>
        <p className="mt-5 text-[1.0625rem]" style={{ color: "var(--on-soft)" }}>
          Get <em>5 Things to Know Before Your First Pilates Session</em> &mdash; a short guide
          on what to expect, what to wear, and how to tell a good studio from a bad one.
        </p>

        <form onSubmit={submit} className="mt-8 flex flex-col gap-3 sm:flex-row">
          <label htmlFor="lm-email" className="sr-only">Email address</label>
          <input
            id="lm-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            className="flex-1 border bg-warm px-4 py-3.5 text-[1rem] outline-none focus:border-clay"
            style={{ borderColor: "var(--rule)" }}
          />
          <button
            type="submit"
            disabled={state === "loading"}
            className="rounded-[2px] bg-clay px-7 py-3.5 text-[0.75rem] font-medium uppercase tracking-[0.08em] text-warm transition-colors hover:bg-ink disabled:opacity-60"
          >
            {state === "loading" ? "Sending…" : "Send it to me"}
          </button>
        </form>

        <p role="status" aria-live="polite" className="mt-4 min-h-6 text-[0.875rem]" style={{ color: "var(--on-muted)" }}>
          {state === "done" && "Check your inbox — it's on the way."}
          {state === "error" && "Something went wrong. Try again in a moment."}
        </p>
      </Container>
    </Section>
  );
}
