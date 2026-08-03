import { Section, Container } from "@/components/ui/Section";
import { ButtonOutline, TextLink } from "@/components/ui/Button";
import { site, bookingUrl } from "@/content/site";

export function CtaBand() {
  return (
    <Section theme="dark">
      <Container className="text-center">
        <h2 className="u-h2">Begin your practice at {site.shortName}.</h2>
        <p className="mt-4 u-h3 italic" style={{ color: "var(--on-soft)" }}>
          Private Pilates in {site.city}, {site.regionLong}.
        </p>
        <div className="mt-10 flex flex-col items-center gap-5">
          <ButtonOutline
            href={bookingUrl("private-session")}
            event={{ name: "book_click", service: "private-session", placement: "cta-band" }}
          >
            Book a session
          </ButtonOutline>
          <TextLink
            href={bookingUrl("consult")}
            event={{ name: "consult_click", placement: "cta-band" }}
          >
            Or book a free 15-minute call
          </TextLink>
        </div>
      </Container>
    </Section>
  );
}
