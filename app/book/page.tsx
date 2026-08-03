import type { Metadata } from "next";
import { Section, Container, Eyebrow } from "@/components/ui/Section";
import { SquareWidget } from "@/components/SquareWidget";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Book a Session",
  description: `Book a private Pilates session at ${site.name} in ${site.city}, ${site.regionLong}.`,
  alternates: { canonical: "/book" },
};

/**
 * On-domain booking using Square's Appointments embed widget.
 *
 * This is the middle rung between Tier 1 (jump to Square) and Tier 2 (custom
 * flow on the Bookings API): the client never leaves courapilates.com, and it
 * costs no API work. The widget itself is styled by Square, so it will not
 * match the site perfectly - test it on a phone before flipping
 * `site.bookingMode` to "embed".
 */
export default function BookPage() {
  return (
    <Section theme="light" className="pt-16!">
      <Container className="max-w-3xl!">
        <Eyebrow>Booking</Eyebrow>
        <h1 className="u-display">Book a session.</h1>
        <p className="u-measure mt-6 text-[1.0625rem]" style={{ color: "var(--on-soft)" }}>
          Sessions are 55 minutes, one-on-one, at the {site.city} studio. New to Pilates?
          Choose the New Client Introduction. The studio address is sent with your
          confirmation.
        </p>

        <div className="mt-12 min-h-[520px]">
          <SquareWidget />
        </div>

        <noscript>
          <p className="mt-6">
            Booking requires JavaScript.{" "}
            <a href={site.bookingUrl} className="underline">
              Book on Square instead
            </a>
            .
          </p>
        </noscript>
      </Container>
    </Section>
  );
}
