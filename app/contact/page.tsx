import type { Metadata } from "next";
import { Section, Container, Eyebrow } from "@/components/ui/Section";
import { Button, TextLink } from "@/components/ui/Button";
import { site, bookingUrl } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name} — private Pilates in ${site.city}, ${site.regionLong}.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <Section theme="light" className="pt-16!">
      <Container>
        <div className="grid gap-14 md:grid-cols-2 md:gap-20">
          <div>
            <Eyebrow>Contact</Eyebrow>
            <h1 className="u-display">Get in touch.</h1>
            <p className="u-measure mt-7 text-[1.125rem]" style={{ color: "var(--on-soft)" }}>
              The fastest way to start is a free 15-minute call &mdash; no commitment, just a
              conversation about your body and what you&rsquo;re looking for.
            </p>
            <div className="mt-9 flex flex-col items-start gap-5">
              <Button
                href={bookingUrl("consult")}
                event={{ name: "consult_click", placement: "contact-page" }}
              >
                Book a free 15-min call
              </Button>
              <TextLink
                href={bookingUrl("private-session")}
                event={{ name: "book_click", service: "private-session", placement: "contact-page" }}
              >
                Or book a session directly
              </TextLink>
            </div>
          </div>

          <div className="border-t pt-8 md:border-l md:border-t-0 md:pl-12 md:pt-0" style={{ borderColor: "var(--rule)" }}>
            <h2 className="u-h3">The studio</h2>
            <p className="mt-3" style={{ color: "var(--on-soft)" }}>
              Private studio in {site.city}, {site.region}.
              <br />
              Address shared upon booking for client privacy.
            </p>

            <h2 className="u-h3 mt-10">Email</h2>
            <a href={`mailto:${site.email}`} className="mt-3 inline-block underline underline-offset-4">
              {site.email}
            </a>

            <h2 className="u-h3 mt-10">Follow</h2>
            <div className="mt-3 flex flex-col gap-1.5">
              {[
                { label: "Instagram", href: site.instagram },
                { label: "TikTok", href: site.tiktok },
                { label: "YouTube", href: site.youtube },
              ].map((s) => (
                <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" className="hover:opacity-70">
                  {s.label} &mdash; {site.handle}
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
