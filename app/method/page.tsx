import type { Metadata } from "next";
import Image from "next/image";
import { Section, Container, Eyebrow } from "@/components/ui/Section";
import { CtaBand } from "@/components/sections/CtaBand";
import { pillars, instructor, equipment } from "@/content/method";
import { testimonials } from "@/content/testimonials";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "The Method",
  description: `The Coura Method and the instructor behind it. Private Pilates in ${site.city}, ${site.regionLong}.`,
  alternates: { canonical: "/method" },
};

export default function MethodPage() {
  return (
    <>
      <Section theme="light" className="pt-16!">
        <Container>
          <Eyebrow>The Coura Method</Eyebrow>
          <h1 className="u-display max-w-[14ch]">
            Precision first.{" "}
            <em className="italic">Strength follows.</em>
          </h1>
          <p className="u-measure mt-7 text-[1.125rem]" style={{ color: "var(--on-soft)" }}>
            Rooted in classical Pilates and refined through modern athletic training, the
            method focuses on building deep strength, balance, and control through precise,
            intentional movement.
          </p>
        </Container>
      </Section>

      <Section theme="warm">
        <Container>
          <div className="grid gap-14">
            {pillars.map((p, i) => (
              <div key={p.id} className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
                <div className={i % 2 === 1 ? "md:order-last" : ""}>
                  <div className="relative aspect-4/3 overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div>
                  <Eyebrow>{p.name}</Eyebrow>
                  <h2 className="u-h2">{p.lede}</h2>
                  <p className="u-measure mt-4" style={{ color: "var(--on-soft)" }}>{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section theme="light">
        <Container>
          <div className="grid items-start gap-12 md:grid-cols-[5fr_6fr] md:gap-16">
            <div className="relative aspect-3/4 overflow-hidden">
              <Image
                src={instructor.image}
                alt={`${instructor.name}, founder and instructor`}
                fill
                sizes="(max-width: 768px) 100vw, 42vw"
                className="object-cover"
              />
            </div>
            <div>
              <Eyebrow>Your instructor</Eyebrow>
              <h2 className="u-h2">{instructor.name}</h2>
              <ul className="mt-6 space-y-1.5">
                {instructor.credentials.map((c) => (
                  <li key={c} className="flex gap-3 text-[0.9375rem]" style={{ color: "var(--on-soft)" }}>
                    <span aria-hidden="true" className="text-clay">&mdash;</span>{c}
                  </li>
                ))}
              </ul>
              <div className="u-measure mt-6 space-y-4" style={{ color: "var(--on-soft)" }}>
                {instructor.bio.map((p, i) => <p key={i}>{p}</p>)}
              </div>
              <h3 className="u-h3 mt-10">The studio</h3>
              <p className="u-measure mt-3" style={{ color: "var(--on-soft)" }}>
                A private studio in {site.city}, fully equipped with {equipment.slice(0, -1).join(", ")},
                and {equipment[equipment.length - 1]}. The exact address is shared when you book.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section theme="dark">
        <Container>
          <Eyebrow>In their words</Eyebrow>
          <h2 className="u-h2">Client stories.</h2>
          <div className="mt-12 grid gap-12 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.author} className="border-t pt-6" style={{ borderColor: "var(--rule)" }}>
                <h3 className="u-h3 max-w-[22ch]">&ldquo;{t.headline}&rdquo;</h3>
                <blockquote className="mt-4 text-[0.9375rem]" style={{ color: "var(--on-soft)" }}>
                  {t.full ?? t.quote}
                </blockquote>
                <figcaption className="u-eyebrow mt-5" style={{ color: "var(--on-muted)" }}>
                  {t.author}
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}
