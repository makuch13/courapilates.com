import Image from "next/image";
import { Section, Container, Eyebrow } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { bookingUrl } from "@/content/site";

/**
 * The low-friction on-ramp - Coura's equivalent of FORM's free trial.
 * Position 3 is deliberate: on the current Squarespace site this sits
 * three-quarters down the page, which is the single biggest structural
 * conversion problem.
 */
export function IntroSeries() {
  return (
    <Section theme="warm">
      <Container>
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <Reveal>
            <div className="relative aspect-4/5 overflow-hidden">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/68d449a73910931af3ee6794/f8dd8110-81d0-4b7a-abdb-1b81f68939c5/609A9119.jpg"
                alt="A first Pilates session on the Reformer"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={80}>
            <Eyebrow>Start here</Eyebrow>
            <h2 className="u-h2">New to Pilates? Start with three.</h2>
            <div className="u-measure mt-5 space-y-4" style={{ color: "var(--on-soft)" }}>
              <p>
                The New Client Introduction is a three-session series built for people who
                have never touched a Reformer. We spend those three sessions learning the
                equipment, the foundational exercises, and how your body actually moves &mdash;
                before anything else.
              </p>
              <p>No experience needed. No group class to keep up with.</p>
            </div>
            <p className="mt-7 u-h3">Three 55-minute private sessions &mdash; $360</p>
            <div className="mt-7">
              <Button
                href={bookingUrl("intro-series")}
                event={{ name: "book_click", service: "intro-series", placement: "intro-series" }}
              >
                Book your intro series
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
