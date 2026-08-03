import { Section, Container, Eyebrow } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ScrollRail } from "@/components/ui/ScrollRail";
import { TextLink } from "@/components/ui/Button";
import { testimonials } from "@/content/testimonials";

/**
 * Result headline above each quote - scannable in three seconds, not ninety.
 *
 * Built as a rail rather than a grid so the section holds its shape as the
 * count grows. At three it reads as a row; past six it becomes a gallery
 * without any layout change. Adding a testimonial means editing
 * content/testimonials.ts and nothing else.
 */
export function TestimonialWall() {
  return (
    <Section theme="dark">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <Eyebrow>Client stories</Eyebrow>
            <h2 className="u-h2">What clients say.</h2>
          </div>
          <p className="u-eyebrow pb-1" style={{ color: "var(--on-muted)" }}>
            {testimonials.length} {testimonials.length === 1 ? "story" : "stories"}
          </p>
        </div>

        <ScrollRail label="Client testimonials" className="mt-12">
          {testimonials.map((t, i) => (
            <Reveal
              key={t.author}
              delay={Math.min(i, 4) * 80}
              className="w-[82vw] shrink-0 snap-start sm:w-[22rem]"
            >
              <figure
                className="flex h-full flex-col border-t pt-6"
                style={{ borderColor: "var(--rule)" }}
              >
                <h3 className="u-h3 max-w-[22ch]">&ldquo;{t.headline}&rdquo;</h3>
                <blockquote
                  className="mt-4 grow text-[0.9375rem]"
                  style={{ color: "var(--on-soft)" }}
                >
                  {t.quote}
                </blockquote>
                <figcaption
                  className="u-eyebrow mt-5"
                  style={{ color: "var(--on-muted)" }}
                >
                  {t.author}
                  {t.context && (
                    <span className="ml-2 normal-case tracking-normal">
                      &middot; {t.context}
                    </span>
                  )}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ScrollRail>

        <div className="mt-10">
          <TextLink href="/method" external={false}>
            Read the full stories
          </TextLink>
        </div>
      </Container>
    </Section>
  );
}
