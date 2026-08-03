import Image from "next/image";
import { Section, Container, Eyebrow } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { equipment } from "@/content/method";
import { site } from "@/content/site";

export function StudioStrip() {
  return (
    <>
      <Section theme="light">
        <Container>
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
            <Reveal>
              <Eyebrow>The studio</Eyebrow>
              <h2 className="u-h2">A private studio in {site.city}.</h2>
              <p className="u-measure mt-5" style={{ color: "var(--on-soft)" }}>
                Fully equipped. No crowd, no waiting, no one watching. Just your session.
              </p>
              <ul className="mt-7 flex flex-wrap gap-2">
                {equipment.map((e) => (
                  <li
                    key={e}
                    className="u-eyebrow border px-3 py-1.5"
                    style={{ borderColor: "var(--rule)", color: "var(--on-soft)" }}
                  >
                    {e}
                  </li>
                ))}
              </ul>
              <p className="mt-7 text-[0.875rem]" style={{ color: "var(--on-muted)" }}>
                The exact address is shared when you book, for client privacy.
              </p>
            </Reveal>

            <Reveal delay={80}>
              <div className="relative aspect-4/3 overflow-hidden">
                <Image
                  src="https://images.squarespace-cdn.com/content/v1/68d449a73910931af3ee6794/4eb5c938-0d9f-4250-85d1-7ec9163dcee6/609A9394+%281%29.jpg"
                  alt={`Inside the ${site.name} studio`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}
