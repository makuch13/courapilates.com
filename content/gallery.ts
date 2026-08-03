/**
 * Curated Instagram tiles for the "Follow along" gallery.
 *
 * Add or remove entries here — the section is a scrolling rail, so the count
 * is free. Order is the display order.
 *
 * TODO before launch: these still hotlink the Squarespace CDN. Move the
 * files into /public and switch to local paths, or they break the day
 * Squarespace is cancelled.
 */
export type Tile = { src: string; alt: string };

const CDN =
  "https://images.squarespace-cdn.com/content/v1/68d449a73910931af3ee6794";

export const instagramTiles: Tile[] = [
  {
    src: `${CDN}/89427cf5-e69a-4108-88cf-5213d8bdde25/IMG_6125.jpeg`,
    alt: "Courtney cueing a client through a precise, controlled Reformer exercise",
  },
  {
    src: `${CDN}/6998e4fc-1a21-4980-b7d2-79c17991b794/609A8278.jpg`,
    alt: "Athletic strength work on the Reformer",
  },
  {
    src: `${CDN}/88ccf0bf-f115-4099-a967-d2cf704758be/609A8547.jpg`,
    alt: "Injury-aware programming on the Tower",
  },
  {
    src: `${CDN}/34faf5ae-5cca-4193-b1c3-16352db2182b/609A9253.jpg`,
    alt: "One-on-one instruction in the Lakeway studio",
  },
  {
    src: `${CDN}/d2b89bbd-1015-476a-977a-bc2905db120a/609A8481.jpg`,
    alt: "Detail of controlled movement on Pilates equipment",
  },
  {
    src: `${CDN}/e2edccbc-211f-437f-9f4b-e41a27b1c9da/Tezza-6820.jpeg`,
    alt: "Courtney Makuch, founder of Coura Pilates",
  },
];
