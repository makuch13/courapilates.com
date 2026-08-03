import { ReactNode } from "react";

type Theme = "light" | "warm" | "dark" | "accent";

export function Section({
  children,
  theme = "light",
  id,
  className = "",
  flush = false,
}: {
  children: ReactNode;
  theme?: Theme;
  id?: string;
  className?: string;
  /** Drop vertical padding - for full-bleed image and marquee bands. */
  flush?: boolean;
}) {
  return (
    <section
      id={id}
      className={`theme-${theme} ${className}`}
      style={flush ? undefined : { paddingBlock: "var(--section-y)" }}
    >
      {children}
    </section>
  );
}

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`mx-auto w-full px-5 sm:px-8 ${className}`}
      style={{ maxWidth: "var(--content-max)" }}
    >
      {children}
    </div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="u-eyebrow mb-4" style={{ color: "var(--on-muted)" }}>
      {children}
    </p>
  );
}
