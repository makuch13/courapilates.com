import type { Metadata } from "next";
import { Section, Container, Eyebrow } from "@/components/ui/Section";
import { CtaBand } from "@/components/sections/CtaBand";
import { faqs } from "@/content/faqs";
import { faqSchema, JsonLd } from "@/lib/schema";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "FAQs",
  description: `Common questions about private Pilates at ${site.name} — what to expect, what to wear, injuries, pricing, and where the studio is.`,
  alternates: { canonical: "/faqs" },
};

export default function FaqsPage() {
  return (
    <>
      <Section theme="light" className="pt-16!">
        <Container className="max-w-3xl!">
          <Eyebrow>FAQs</Eyebrow>
          <h1 className="u-display">Questions.</h1>

          <div className="mt-12">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group border-b py-5"
                style={{ borderColor: "var(--rule)" }}
              >
                <summary className="u-h3 flex cursor-pointer list-none items-start justify-between gap-6 marker:content-['']">
                  {f.q}
                  <span
                    aria-hidden="true"
                    className="mt-1.5 shrink-0 text-clay transition-transform duration-200 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="u-measure mt-4" style={{ color: "var(--on-soft)" }}>{f.a}</p>
              </details>
            ))}
          </div>
        </Container>
      </Section>

      <CtaBand />
      <JsonLd data={faqSchema()} />
    </>
  );
}
