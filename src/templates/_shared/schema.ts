import type { TemplateContent } from "../types";

/**
 * JSON-LD del negocio según su nicho (`business.schemaType`) + FAQPage.
 * No incluye aggregateRating: Google no admite reseñas propias del negocio.
 */
export function buildTemplateSchema(content: TemplateContent) {
  const { business, meta, faq, sections } = content;
  const url = meta.siteUrl;

  const organization = {
    "@context": "https://schema.org",
    "@type": business.schemaType,
    "@id": `${url}#negocio`,
    name: business.name,
    description: meta.description,
    url,
    image: new URL(meta.ogImage.src, url).toString(),
    telephone: business.phone,
    email: business.email,
    priceRange: business.priceRange,
    currenciesAccepted: "USD",
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.street,
      addressLocality: business.address.locality,
      addressRegion: business.address.region,
      addressCountry: business.address.country,
    },
    hasMap: business.mapsUrl,
    openingHoursSpecification: business.hours.map((slot) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: slot.days,
      opens: slot.opens,
      closes: slot.closes,
    })),
    sameAs: business.social.map((item) => item.href),
  };

  const schemas: object[] = [organization];

  if (sections.includes("faq") && faq.items.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faq.items.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    });
  }

  return schemas;
}
