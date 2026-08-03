import { Section, Container, Eyebrow } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { firstSession } from "@/content/method";

/** Removes the #1 reason a nervous beginner doesn't book. */
export function FirstSession() {
  return (
    <Section theme="accent">
      <Container>
        <Eyebrow>What to expect</Eyebrow>
        <h2 className="u-h2 max-w-[20ch]">Your first session, start to finish.</h2>

        <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {firstSession.map((s, i) => (
            <Reveal key={s.n} delay={i * 80}>
              <p className="u-eyebrow" style={{ color: "var(--on-muted)" }}>{s.n}</p>
              <h3 className="u-h3 mt-2">{s.title}</h3>
              <p className="mt-3 text-[0.9375rem]" style={{ color: "var(--on-soft)" }}>
                {s.body}
              </p>
            </Reveal>
          ))}
        </div>

        <p className="mt-12 max-w-[52ch] text-[0.9375rem]" style={{ color: "var(--on-soft)" }}>
          Wear something you can move in. Grip socks are provided for your first session.
          Arrive five minutes early &mdash; the address is sent when you book.
        </p>
      </Container>
    </Section>
  );
}
