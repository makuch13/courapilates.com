import { site } from "@/content/site";
import { sessions } from "@/content/sessions";
import { faqs } from "@/content/faqs";

/**
 * Service-area business, not a storefront - the studio address is private and
 * shared at booking. Use areaServed rather than a public `address`.
 */
export function businessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    "@id": `${site.url}/#business`,
    name: site.name,
    description: site.description,
    url: site.url,
    priceRange: "$$$",
    areaServed: site.areaServed.map((n) => ({ "@type": "City", name: n })),
    sameAs: [site.instagram, site.tiktok, site.youtube],
    makesOffer: sessions.map((s) => ({
      "@type": "Offer",
      name: s.name,
      description: s.blurb,
      priceCurrency: "USD",
      price: s.priceValue,
    })),
    // aggregateRating intentionally omitted until there are real Google
    // reviews to reference. Never fabricate this.
  };
}

export function faqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs
      .filter((f) => !f.a.includes("[TODO"))
      .map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
  };
}

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
