"use client";

import { useEffect, useState } from "react";
import { bookingUrl } from "@/content/site";
import { track } from "@/lib/analytics";

const KEY = "coura-announce-dismissed";

export function AnnouncementBar() {
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    try {
      setHidden(localStorage.getItem(KEY) === "1");
    } catch {
      setHidden(false);
    }
  }, []);

  if (hidden) return null;

  return (
    <div className="theme-dark relative">
      <a
        href={bookingUrl("intro-series")}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => track({ name: "book_click", service: "intro-series", placement: "announcement" })}
        className="u-eyebrow block py-2.5 pr-10 pl-5 text-center hover:opacity-75 transition-opacity"
      >
        Founding client rates &mdash; a limited number of spots at the Lakeway studio &rarr;
      </a>
      <button
        onClick={() => {
          setHidden(true);
          try { localStorage.setItem(KEY, "1"); } catch {}
        }}
        aria-label="Dismiss announcement"
        className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-lg leading-none opacity-60 hover:opacity-100"
      >
        &times;
      </button>
    </div>
  );
}
