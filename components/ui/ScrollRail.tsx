"use client";

import { ReactNode, useCallback, useEffect, useRef, useState } from "react";

/**
 * Horizontal scroll-snap rail.
 *
 * Built so a section reads correctly whether it holds 3 items or 30 — the
 * arrows only appear once the content actually overflows, so a short list
 * looks like a plain row rather than a broken carousel.
 *
 * Touch users swipe. Keyboard users tab to the rail and use arrow keys
 * (native behaviour on a focusable scroll container). Pointer users get
 * the buttons.
 */
export function ScrollRail({
  children,
  label,
  className = "",
  railClassName = "",
}: {
  children: ReactNode;
  /** Accessible name for the scrollable region. */
  label: string;
  className?: string;
  railClassName?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const sync = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setCanPrev(el.scrollLeft > 8);
    setCanNext(el.scrollLeft < max - 8);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    sync();
    el.addEventListener("scroll", sync, { passive: true });
    const ro =
      typeof ResizeObserver !== "undefined" ? new ResizeObserver(sync) : null;
    ro?.observe(el);
    return () => {
      el.removeEventListener("scroll", sync);
      ro?.disconnect();
    };
  }, [sync]);

  const page = (dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({
      left: dir * Math.round(el.clientWidth * 0.8),
      behavior: reduce ? "auto" : "smooth",
    });
  };

  const arrow =
    "absolute top-1/2 z-10 hidden -translate-y-1/2 items-center justify-center " +
    "rounded-full border backdrop-blur transition-opacity md:flex h-11 w-11 " +
    "hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-2";

  return (
    <div className={`relative ${className}`}>
      {canPrev && (
        <button
          type="button"
          onClick={() => page(-1)}
          aria-label="Scroll left"
          className={`${arrow} -left-2 lg:-left-5`}
          style={{
            borderColor: "var(--rule)",
            background: "color-mix(in srgb, var(--on) 8%, transparent)",
          }}
        >
          <Chevron dir="left" />
        </button>
      )}

      <div
        ref={ref}
        role="region"
        aria-label={label}
        tabIndex={0}
        className={
          "flex snap-x snap-mandatory gap-5 overflow-x-auto overscroll-x-contain scroll-smooth " +
          "pb-2 [-ms-overflow-style:none] [scrollbar-width:none] " +
          "[&::-webkit-scrollbar]:hidden " +
          railClassName
        }
      >
        {children}
      </div>

      {canNext && (
        <button
          type="button"
          onClick={() => page(1)}
          aria-label="Scroll right"
          className={`${arrow} -right-2 lg:-right-5`}
          style={{
            borderColor: "var(--rule)",
            background: "color-mix(in srgb, var(--on) 8%, transparent)",
          }}
        >
          <Chevron dir="right" />
        </button>
      )}
    </div>
  );
}

function Chevron({ dir }: { dir: "left" | "right" }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={dir === "left" ? "M15 18l-6-6 6-6" : "M9 18l6-6-6-6"} />
    </svg>
  );
}
