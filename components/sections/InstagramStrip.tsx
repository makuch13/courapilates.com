import Image from "next/image";
import { Section, Container } from "@/components/ui/Section";
import { site } from "@/content/site";

/**
 * Static curated tiles at launch. Swap for the Instagram Basic Display API
 * later if it's worth the token-refresh maintenance - usually it isn't for
 * a studio this size.
 */
const tiles = [
  "https://images.squarespace-cdn.com/content/v1/68d449a73910931af3ee6794/89427cf5-e69a-4108-88cf-5213d8bdde25/IMG_6125.jpeg",
  "https://images.squarespace-cdn.com/content/v1/68d449a73910931af3ee6794/6998e4fc-1a21-4980-b7d2-79c17991b794/609A8278.jpg",
  "https://images.squarespace-cdn.com/content/v1/68d449a73910931af3ee6794/88ccf0bf-f115-4099-a967-d2cf704758be/609A8547.jpg",
  "https://images.squarespace-cdn.com/content/v1/68d449a73910931af3ee6794/34faf5ae-5cca-4193-b1c3-16352db2182b/609A9253.jpg",
  "https://images.squarespace-cdn.com/content/v1/68d449a73910931af3ee6794/d2b89bbd-1015-476a-977a-bc2905db120a/609A8481.jpg",
  "https://images.squarespace-cdn.com/content/v1/68d449a73910931af3ee6794/e2edccbc-211f-437f-9f4b-e41a27b1c9da/Tezza-6820.jpeg",
];

export function InstagramStrip() {
  return (
    <Section theme="warm">
      <Container>
        <p className="u-eyebrow" style={{ color: "var(--on-muted)" }}>Follow along</p>
        <a
          href={site.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="u-h3 mt-1 inline-block hover:opacity-70 transition-opacity"
        >
          {site.handle}
        </a>
        <div className="mt-8 grid grid-cols-3 gap-2 md:grid-cols-6">
          {tiles.map((src, i) => (
            <a
              key={src}
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-square overflow-hidden"
            >
              <Image
                src={src}
                alt={`${site.name} on Instagram, image ${i + 1}`}
                fill
                sizes="(max-width: 768px) 33vw, 16vw"
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </a>
          ))}
        </div>
      </Container>
    </Section>
  );
}
