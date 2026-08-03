import { Section, Container, Eyebrow } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { testimonials } from "@/content/testimonials";

/** Result headline above each quote - scannable in three seconds, not ninety. */
export function TestimonialWall() {
  return (
    <Section theme="dark">
      <Container>
        <Eyebrow>Client stories</Eyebrow>
        <h2 className="u-h2">What clients say.</h2>

        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.author} delay={i * 80}>
              <figure className="border-t pt-6" style={{ borderColor: "var(--rule)" }}>
                <h3 className="u-h3 max-w-[22ch]">&ldquo;{t.headline}&rdquo;</h3>
                <blockquote className="mt-4 text-[0.9375rem]" style={{ color: "var(--on-soft)" }}>
                  {t.quote}
                </blockquote>
                <figcaption className="u-eyebrow mt-5" style={{ color: "var(--on-muted)" }}>
                  {t.author}
                  {t.context && <span className="ml-2 normal-case tracking-normal">&middot; {t.context}</span>}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
