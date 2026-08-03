"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/content/site";

/**
 * Injects Square's Appointments embed widget into a container we control.
 * Square's snippet renders wherever its <script> sits, so we append it into
 * the ref rather than using next/script (which hoists into <head>).
 */
export function SquareWidget() {
  const host = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const el = host.current;
    if (!el || el.dataset.loaded === "1") return;
    el.dataset.loaded = "1";

    const s = document.createElement("script");
    s.src = site.bookingWidgetSrc;
    s.async = true;
    s.onerror = () => setFailed(true);
    el.appendChild(s);

    // If the widget hasn't painted anything after 8s, surface the fallback.
    const t = setTimeout(() => {
      if (el.querySelectorAll("iframe, div").length === 0) setFailed(true);
    }, 8000);

    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <div ref={host} aria-live="polite" />
      {failed && (
        <div className="border p-6" style={{ borderColor: "var(--rule)" }}>
          <p style={{ color: "var(--on-soft)" }}>
            The booking widget didn&rsquo;t load.
          </p>
          <a
            href={site.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block rounded-[2px] bg-clay px-6 py-3.5 text-[0.75rem] font-medium uppercase tracking-[0.08em] text-warm"
          >
            Book on Square
          </a>
        </div>
      )}
    </>
  );
}
