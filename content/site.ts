/**
 * Single source of truth for the brand.
 *
 * NOTE: "COURA" is a live registered trademark in Class 041 (fitness
 * instruction) held by another party. Keeping the name in one constant means
 * a forced rename is a one-line change, not a rebuild. Never hardcode the
 * name in a component.
 */
export const site = {
  name: "Coura Pilates",
  shortName: "Coura",
  tagline: "Private Pilates designed for you.",
  description:
    "Private one-on-one Pilates in Lakeway, Texas. Classical foundations, athletic strength, and programming built around your body and your history.",
  url: "https://courapilates.com",
  city: "Lakeway",
  region: "TX",
  regionLong: "Texas",
  areaServed: ["Lakeway", "Bee Cave", "Austin"],
  instagram: "https://instagram.com/pilates.courtney",
  tiktok: "https://www.tiktok.com/@pilates.courtney",
  youtube: "https://www.youtube.com/@pilates.courtney",
  handle: "@pilates.courtney",
  email: "hello@courapilates.com", // TODO: confirm the real address
  /**
   * Tier 1 booking - Square Appointments hosted flow.
   * The real URL is the fallback so buttons work even if the Vercel env var
   * is missing. Override with NEXT_PUBLIC_SQUARE_BOOKING_URL if it changes.
   */
  bookingUrl:
    process.env.NEXT_PUBLIC_SQUARE_BOOKING_URL ??
    "https://app.squareup.com/appointments/book/j4h38sj7krni40/LSA2ZQWJF8F11/start",

  /** Square Appointments embed widget script (renders booking on /book). */
  bookingWidgetSrc:
    "https://square.site/appointments/buyer/widget/j4h38sj7krni40/LSA2ZQWJF8F11.js",

  /**
   * Where Book CTAs point.
   *  "square" - jump to Square's hosted page (safe default, known to work)
   *  "embed"  - stay on courapilates.com/book using Square's embed widget
   * Flip to "embed" once you have tested /book on a real phone.
   */
  bookingMode: "square" as "square" | "embed",
} as const;

export const nav = [
  { label: "The Method", href: "/method" },
  { label: "Sessions", href: "/sessions" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" },
] as const;

/**
 * Destination for a Book CTA.
 *
 * NOTE: Square Appointments does NOT support preselecting a service via URL -
 * the booking URL is identical regardless of which service the client picks.
 * (Confirmed limitation; long-standing Square feature request.) So `service`
 * is intentionally unused for routing and exists only so callers can pass it
 * to analytics - which is where the intent data actually matters. Real service
 * preselection requires the Bookings API build in Tier 2.
 */
export function bookingUrl(_service?: string) {
  return site.bookingMode === "embed" ? "/book" : site.bookingUrl;
}

/** True when CTAs should stay on-domain (affects target="_blank"). */
export const bookingIsInternal = () => site.bookingMode === "embed";
