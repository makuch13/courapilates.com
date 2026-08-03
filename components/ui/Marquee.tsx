import { marqueeItems } from "@/content/method";

/** CSS-only scrolling value props. The FORM pattern, under the hero. */
export function Marquee() {
  const line = marqueeItems.join("  ·  ");
  return (
    <div className="marquee theme-dark py-4" aria-label="What defines a session at the studio">
      <div className="marquee__track u-eyebrow">
        <span className="whitespace-nowrap pr-8">{line}&nbsp;&middot;&nbsp;</span>
        <span className="whitespace-nowrap pr-8" aria-hidden="true">
          {line}&nbsp;&middot;&nbsp;
        </span>
      </div>
    </div>
  );
}
