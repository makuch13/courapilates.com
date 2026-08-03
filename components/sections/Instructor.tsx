import Image from "next/image";
import { Section, Container, Eyebrow } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { TextLink } from "@/components/ui/Button";
import { instructor } from "@/content/method";

/**
 * The largest gap on the current homepage: it never introduces Courtney.
 * Every testimonial names her, and a first-time visitor has no idea who
 * she is. Both reference sites lead with a named human plus credentials.
 */
export function Instructor() {
  return (
    <Section theme="light">
      <Container>
        <div className="grid items-start gap-12 md:grid-cols-[5fr_6fr] md:gap-16">
          <Reveal>
            <div className="relative aspect-3/4 overflow-hidden">
              <Image
                src={instructor.image}
                alt={`${instructor.name}, founder and instructor`}
                fill
                sizes="(max-width: 768px) 100vw, 42vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={80}>
            <Eyebrow>Your instructor</Eyebrow>
            <h2 className="u-h2">{instructor.name}</h2>
            <p className="u-eyebrow mt-3" style={{ color: "var(--on-muted)" }}>
              {instructor.role}
            </p>

            <ul className="mt-6 space-y-1.5">
              {instructor.credentials.map((c) => (
                <li key={c} className="flex gap-3 text-[0.9375rem]" style={{ color: "var(--on-soft)" }}>
                  <span aria-hidden="true" className="text-clay">&mdash;</span>
                  {c}
                </li>
              ))}
            </ul>

            <div className="u-measure mt-6 space-y-4" style={{ color: "var(--on-soft)" }}>
              {instructor.bio.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {instructor.quote && (
              <blockquote
                className="u-h3 mt-8 border-l-2 pl-5 italic"
                style={{ borderColor: "var(--color-clay)" }}
              >
                {instructor.quote}
              </blockquote>
            )}

            <div className="mt-8">
              <TextLink href="/method" external={false}>More about the method</TextLink>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
