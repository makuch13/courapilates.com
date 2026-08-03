import { Section, Container, Eyebrow } from "@/components/ui/Section";
import { Button, TextLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { featuredSessions } from "@/content/sessions";
import { bookingUrl } from "@/content/site";
import type { SessionSlug } from "@/lib/analytics";

/** First-timers look for price before they commit. Don't make them navigate. */
export function PricingPreview() {
  return (
    <Section theme="light" id="pricing">
      <Container>
        <Eyebrow>Sessions</Eyebrow>
        <h2 className="u-h2">Straightforward pricing.</h2>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {featuredSessions.map((s, i) => (
            <Reveal key={s.slug} delay={i * 80}>
              <div
                className="flex h-full flex-col border bg-warm p-7"
                style={{ borderColor: s.featured ? "var(--color-clay)" : "var(--rule)" }}
              >
                {s.featured && (
                  <p className="u-eyebrow mb-3 text-clay">Start here</p>
                )}
                <h3 className="u-h3">{s.name}</h3>
                <p className="mt-4 font-display text-[2rem] leading-none">{s.price}</p>
                <p className="mt-2 text-[0.875rem]" style={{ color: "var(--on-muted)" }}>
                  {s.meta}
                </p>
                <p className="mt-4 flex-1 text-[0.9375rem]" style={{ color: "var(--on-soft)" }}>
                  {s.blurb}
                </p>
                <div className="mt-7">
                  <Button
                    href={bookingUrl(s.slug)}
                    event={{
                      name: "book_click",
                      service: s.slug as SessionSlug,
                      placement: "pricing-preview",
                    }}
                    className="w-full"
                  >
                    Book
                  </Button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10">
          <TextLink href="/sessions" external={false}>
            See all pricing, series, and monthly practice
          </TextLink>
        </div>
      </Container>
    </Section>
  );
}
