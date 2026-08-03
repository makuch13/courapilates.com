import Link from "next/link";
import { site, nav } from "@/content/site";

export function Footer() {
  return (
    <footer className="theme-dark" style={{ paddingBlock: "4rem" }}>
      <div className="mx-auto w-full px-5 sm:px-8" style={{ maxWidth: "var(--content-max)" }}>
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="u-h3">{site.name}</p>
            <p className="mt-3 text-[0.9375rem]" style={{ color: "var(--on-soft)" }}>
              Private studio in {site.city}, {site.region}.
              <br />
              Address shared upon booking for client privacy.
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="u-eyebrow mb-3" style={{ color: "var(--on-muted)" }}>Explore</p>
            {nav.map((n) => (
              <Link key={n.href} href={n.href} className="block py-1 text-[0.9375rem] hover:opacity-70">
                {n.label}
              </Link>
            ))}
          </nav>

          <div>
            <p className="u-eyebrow mb-3" style={{ color: "var(--on-muted)" }}>Follow</p>
            {[
              { label: "Instagram", href: site.instagram },
              { label: "TikTok", href: site.tiktok },
              { label: "YouTube", href: site.youtube },
            ].map((s) => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block py-1 text-[0.9375rem] hover:opacity-70"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <p className="mt-12 border-t pt-6 text-[0.8125rem]" style={{ borderColor: "var(--rule)", color: "var(--on-muted)" }}>
          &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
