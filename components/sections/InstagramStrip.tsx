import Image from "next/image";
import { Section, Container } from "@/components/ui/Section";
import { ScrollRail } from "@/components/ui/ScrollRail";
import { site } from "@/content/site";
import { instagramTiles } from "@/content/gallery";

/**
 * Static curated tiles at launch. Swap for the Instagram Basic Display API
 * later if it's worth the token-refresh maintenance - usually it isn't for
 * a studio this size.
 *
 * Rail rather than a fixed grid so the tile count can grow without the
 * layout breaking into an awkward second row.
 */
export function InstagramStrip() {
  return (
    <Section theme="warm">
      <Container>
        <p className="u-eyebrow" style={{ color: "var(--on-muted)" }}>
          Follow along
        </p>
        <a
          href={site.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="u-h3 mt-1 inline-block transition-opacity hover:opacity-70"
        >
          {site.handle}
        </a>

        <ScrollRail
          label={`${site.name} on Instagram`}
          className="mt-8"
          railClassName="gap-2"
        >
          {instagramTiles.map((tile) => (
            <a
              key={tile.src}
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-square w-[40vw] shrink-0 snap-start overflow-hidden sm:w-[13.5rem]"
            >
              <Image
                src={tile.src}
                alt={tile.alt}
                fill
                sizes="(max-width: 640px) 40vw, 216px"
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </a>
          ))}
        </ScrollRail>
      </Container>
    </Section>
  );
}
