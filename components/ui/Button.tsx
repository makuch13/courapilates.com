"use client";

import { ReactNode } from "react";
import { track, type CouraEvent } from "@/lib/analytics";

type Common = {
  children: ReactNode;
  href: string;
  event?: CouraEvent;
  className?: string;
  /** Force behaviour. Omit and it is inferred: internal hrefs stay in-tab. */
  external?: boolean;
};

/** Links starting with "/" or "#" are internal - never open them in a new tab. */
const isExternal = (href: string, override?: boolean) =>
  override ?? !(href.startsWith("/") || href.startsWith("#"));

const targetProps = (href: string, override?: boolean) =>
  isExternal(href, override) ? { target: "_blank", rel: "noopener noreferrer" } : {};

const base =
  "inline-flex items-center justify-center text-center transition-colors duration-200 " +
  "text-[0.8125rem] font-medium uppercase tracking-[0.08em] rounded-[2px]";

/** Primary CTA. One style, site-wide. */
export function Button({ children, href, event, className = "", external }: Common) {
  return (
    <a
      href={href}
      {...targetProps(href, external)}
      onClick={() => event && track(event)}
      className={`${base} bg-clay text-warm px-7 py-4 hover:bg-ink ${className}`}
    >
      {children}
    </a>
  );
}

/** Secondary door - the low-commitment option beside every primary CTA. */
export function TextLink({ children, href, event, className = "", external }: Common) {
  return (
    <a
      href={href}
      {...targetProps(href, external)}
      onClick={() => event && track(event)}
      className={`inline-flex items-center gap-1.5 text-[0.9375rem] underline
        underline-offset-[6px] decoration-1 hover:opacity-70 transition-opacity ${className}`}
      style={{ color: "var(--on-soft)", textDecorationColor: "var(--on-muted)" }}
    >
      {children}
      <span aria-hidden="true">&rarr;</span>
    </a>
  );
}

/** Outline variant for use on dark and accent surfaces. */
export function ButtonOutline({ children, href, event, className = "", external }: Common) {
  return (
    <a
      href={href}
      {...targetProps(href, external)}
      onClick={() => event && track(event)}
      className={`${base} px-7 py-4 border hover:opacity-75 ${className}`}
      style={{ borderColor: "var(--on)", color: "var(--on)" }}
    >
      {children}
    </a>
  );
}
