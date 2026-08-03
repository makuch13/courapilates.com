"use client";

import { useEffect, useState } from "react";
import { bookingUrl, bookingIsInternal } from "@/content/site";
import { track } from "@/lib/analytics";

/** Persistent mobile Book button once the hero scrolls away. */
export function StickyCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.85);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 p-3 transition-transform duration-300 md:hidden"
      style={{
        transform: show ? "translateY(0)" : "translateY(120%)",
        transitionTimingFunction: "var(--ease-out)",
      }}
      aria-hidden={!show}
    >
      <a
        href={bookingUrl()}
        {...(bookingIsInternal() ? {} : { target: "_blank", rel: "noopener noreferrer" })}
        tabIndex={show ? 0 : -1}
        onClick={() => track({ name: "book_click", service: "private-session", placement: "sticky-mobile" })}
        className="block rounded-[2px] bg-ink px-6 py-4 text-center text-[0.75rem] font-medium uppercase tracking-[0.08em] text-bone shadow-lg"
      >
        Book a session
      </a>
    </div>
  );
}
