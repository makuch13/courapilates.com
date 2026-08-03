"use client";

import Image from "next/image";
import { useState } from "react";
import { Section, Container, Eyebrow } from "@/components/ui/Section";
import { pillars } from "@/content/method";

/** FORM's tabbed content switcher, applied to the three method principles. */
export function MethodPillars() {
  const [active, setActive] = useState(0);
  const current = pillars[active];

  return (
    <Section theme="dark" id="method">
      <Container>
        <Eyebrow>The Coura Method</Eyebrow>
        <h2 className="u-h2 max-w-[18ch]">Three principles. Every session.</h2>

        <div
          className="mt-10 flex gap-1 border-b"
          style={{ borderColor: "var(--rule)" }}
          role="tablist"
          aria-label="The three principles"
        >
          {pillars.map((p, i) => (
            <button
              key={p.id}
              role="tab"
              id={`tab-${p.id}`}
              aria-selected={i === active}
              aria-controls={`panel-${p.id}`}
              onClick={() => setActive(i)}
              className="u-eyebrow -mb-px border-b-2 px-4 py-3.5 transition-colors sm:px-6"
              style={{
                borderColor: i === active ? "var(--on)" : "transparent",
                color: i === active ? "var(--on)" : "var(--on-muted)",
              }}
            >
              {p.name}
            </button>
          ))}
        </div>

        <div
          key={current.id}
          role="tabpanel"
          id={`panel-${current.id}`}
          aria-labelledby={`tab-${current.id}`}
          className="reveal is-in mt-10 grid items-center gap-10 md:grid-cols-2 md:gap-16"
        >
          <div>
            <p className="u-h3">{current.lede}</p>
            <p className="u-measure mt-4 text-[1.0625rem]" style={{ color: "var(--on-soft)" }}>
              {current.body}
            </p>
          </div>
          <div className="relative aspect-4/3 overflow-hidden md:order-first">
            <Image
              src={current.image}
              alt={current.alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
