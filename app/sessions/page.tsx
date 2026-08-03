import type { Metadata } from "next";
import { Section, Container, Eyebrow } from "@/components/ui/Section";
import { Button, TextLink } from "@/components/ui/Button";
import { CtaBand } from "@/components/sections/CtaBand";
import { sessions } from "@/content/sessions";
import { site, bookingUrl } from "@/content/site";
import type { SessionSlug } from "@/lib/analytics";

export const metadata: Metadata = {
  title: "Sessions & Pricing",
  description: `Private Pilates session pricing, series, and monthly practice at ${site.name} in ${site.city}, ${site.regionLong}.`,
  alternates: { canonical: "/sessions" },
};

export default function SessionsPage() {
  return (
    <>
      <Section theme="light" className="pt-16!">
        <Container>
          <Eyebrow>Sessions</Eyebrow>
          <h1 className="u-display max-w-[14ch]">Sessions &amp; series.</h1>
          <p className="u-measure mt-7 text-[1.125rem]" style={{ color: "var(--on-soft)" }}>
            All sessions are 55 minutes and scheduled by appointment at the {site.city} studio.
          </p>

          <div className="mt-10 border-l-2 pl-6" style={{ borderColor: "var(--color-clay)" }}>
            <p className="u-eyebrow text-clay">Which is right for me?</p>
            <p className="u-measure mt-3" style={{ color: "var(--on-soft)" }}>
              New to Pilates, or new to the Reformer? Start with the three-session introduction.
              Already have a practice and want consistency? A series or monthly practice will
              cost you less per session. Not sure? Book a free 15-minute call.
            </p>
          </div>
        </Container>
      </Section>

      <Section theme="warm">
        <Container>
          <div className="grid gap-5 md:grid-cols-2">
            {sessions.map((s) => (
              <div
                key={s.slug}
                className="flex flex-col border bg-warm p-8"
                style={{ borderColor: s.featured ? "var(--color-clay)" : "var(--rule)" }}
              >
                {s.featured && <p className="u-eyebrow mb-3 text-clay">Start here</p>}
                <h2 className="u-h3">{s.name}</h2>
                <p className="mt-4 font-display text-[2.25rem] leading-none">{s.price}</p>
                <p className="mt-2 text-[0.875rem]" style={{ color: "var(--on-muted)" }}>{s.meta}</p>
                <p className="mt-5" style={{ color: "var(--on-soft)" }}>{s.blurb}</p>
                {s.detail && (
                  <ul className="mt-5 space-y-1.5">
                    {s.detail.map((d) => (
                      <li key={d} className="flex gap-3 text-[0.9375rem]" style={{ color: "var(--on-soft)" }}>
                        <span aria-hidden="true" className="text-clay">&mdash;</span>{d}
                      </li>
                    ))}
                  </ul>
                )}
                <div className="mt-8 pt-2">
                  <Button
                    href={bookingUrl(s.slug)}
                    event={{ name: "book_click", service: s.slug as SessionSlug, placement: "sessions-page" }}
                  >
                    Book
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 border-t pt-8" style={{ borderColor: "var(--rule)" }}>
            <h2 className="u-h3">Founding clients</h2>
            <p className="u-measure mt-3" style={{ color: "var(--on-soft)" }}>
              As {site.name} begins its first chapter, a limited number of founding clients will
              be welcomed into the studio. These early members help shape the foundation of the
              practice and the studio community.
            </p>
            <div className="mt-6">
              <TextLink href="/contact" external={false}>Ask about founding client rates</TextLink>
            </div>
          </div>
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}
