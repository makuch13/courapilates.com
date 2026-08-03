"use client";

import Link from "next/link";
import { useState } from "react";
import { site, nav, bookingUrl, bookingIsInternal } from "@/content/site";
import { track } from "@/lib/analytics";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="theme-light sticky top-0 z-40 border-b" style={{ borderColor: "var(--rule)" }}>
      <div className="mx-auto flex w-full items-center gap-6 px-5 py-4 sm:px-8" style={{ maxWidth: "var(--content-max)" }}>
        <Link href="/" className="u-h3 shrink-0 tracking-tight">
          {site.name}
        </Link>

        <nav className="ml-auto hidden items-center gap-7 md:flex" aria-label="Main">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="text-[0.9375rem] hover:opacity-65 transition-opacity">
              {n.label}
            </Link>
          ))}
          <a
            href={bookingUrl()}
            {...(bookingIsInternal() ? {} : { target: "_blank", rel: "noopener noreferrer" })}
            onClick={() => track({ name: "book_click", service: "private-session", placement: "header" })}
            className="rounded-[2px] bg-clay px-5 py-2.5 text-[0.75rem] font-medium uppercase tracking-[0.08em] text-warm hover:bg-ink transition-colors"
          >
            Book a session
          </a>
        </nav>

        <button
          className="ml-auto p-2 md:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block h-px w-6 bg-ink" />
          <span className="mt-1.5 block h-px w-6 bg-ink" />
        </button>
      </div>

      {open && (
        <nav className="border-t px-5 pb-5 md:hidden" style={{ borderColor: "var(--rule)" }} aria-label="Mobile">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="block border-b py-3.5 text-[1.0625rem]"
              style={{ borderColor: "var(--rule)" }}
            >
              {n.label}
            </Link>
          ))}
          <a
            href={bookingUrl()}
            {...(bookingIsInternal() ? {} : { target: "_blank", rel: "noopener noreferrer" })}
            onClick={() => track({ name: "book_click", service: "private-session", placement: "header-mobile" })}
            className="mt-4 block rounded-[2px] bg-clay px-5 py-3.5 text-center text-[0.75rem] font-medium uppercase tracking-[0.08em] text-warm"
          >
            Book a session
          </a>
        </nav>
      )}
    </header>
  );
}
