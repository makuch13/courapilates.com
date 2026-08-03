import Image from "next/image";
import { site, bookingUrl } from "@/content/site";
import { Button, TextLink } from "@/components/ui/Button";

/**
 * Full-bleed hero. Swap the <Image> for a <video> with poster + preload="none"
 * once the studio footage is in /public - but keep the static image under
 * 640px. Never ship video to a phone on cellular; that is where
 * Squarespace-style video heroes lose their performance budget.
 */
export function Hero() {
  return (
    <section className="theme-dark relative isolate flex min-h-[86vh] items-end overflow-hidden">
      <Image
        src="https://images.squarespace-cdn.com/content/v1/68d449a73910931af3ee6794/720f9d1c-d0da-44f2-bbca-e8d3dff0cdb6/IMG_3734.JPG"
        alt="The Coura Pilates studio in Lakeway, Texas"
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-ink/45" />

      <div
        className="mx-auto w-full px-5 pb-20 pt-32 sm:px-8"
        style={{ maxWidth: "var(--content-max)" }}
      >
        <p className="u-eyebrow mb-5 text-bone/80">
          Private Pilates Studio &middot; {site.city}, {site.regionLong}
        </p>

        <h1 className="u-display max-w-[16ch] text-bone">
          Private Pilates{" "}
          <em className="italic">
            designed for you.
          </em>
        </h1>

        <p className="u-measure mt-6 text-[1.125rem] text-bone/85">
          One-on-one sessions on Reformer, Tower, and Chair &mdash; built around your body,
          your goals, and your history.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
          <Button
            href={bookingUrl("private-session")}
            event={{ name: "book_click", service: "private-session", placement: "hero" }}
          >
            Book a session
          </Button>
          <TextLink
            href={bookingUrl("consult")}
            event={{ name: "consult_click", placement: "hero" }}
            className="!text-bone/90"
          >
            New to Pilates? Book a free 15-min call
          </TextLink>
        </div>
      </div>
    </section>
  );
}
