"use client";

import { siteData } from "@/data/siteData";

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteData.seo.siteUrl}/#organization`,
    name: siteData.business.name,
    description: siteData.seo.defaultDescription,
    url: siteData.seo.siteUrl,
    telephone: siteData.business.phone,
    email: siteData.business.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteData.business.address.street,
      addressLocality: siteData.business.address.locality,
      addressRegion: siteData.business.address.region,
      postalCode: siteData.business.address.postalCode,
      addressCountry: siteData.business.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteData.business.geo.latitude,
      longitude: siteData.business.geo.longitude,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "08:00",
      closes: "20:00",
    },
    priceRange: siteData.business.priceRange,
    areaServed: siteData.serviceArea.locations.map((loc) => ({
      "@type": "City",
      name: loc.name,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Damp Proofing Services",
      itemListElement: siteData.services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.name,
          description: service.shortDescription,
        },
      })),
    },
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
