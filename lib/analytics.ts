export type SessionSlug =
  | "intro-series"
  | "private-session"
  | "session-series"
  | "monthly-practice"
  | "consult";

export type CouraEvent =
  | { name: "book_click"; service: SessionSlug; placement: string }
  | { name: "consult_click"; placement: string }
  | { name: "quiz_started" }
  | { name: "quiz_completed"; recommendation: SessionSlug }
  | { name: "email_captured"; source: "lead_magnet" | "quiz" | "footer" }
  | { name: "pricing_viewed"; placement: "home" | "sessions" };

/**
 * Typed event helper. `placement` is what lets you tell whether the hero,
 * the pricing cards, or the sticky mobile bar is actually doing the work -
 * which is the analysis that makes this a portfolio piece.
 */
export function track(event: CouraEvent) {
  if (typeof window === "undefined") return;
  const { name, ...params } = event;
  const w = window as unknown as { gtag?: (...a: unknown[]) => void };
  w.gtag?.("event", name, params);
  if (process.env.NODE_ENV === "development") {
    console.debug("[track]", name, params);
  }
}
