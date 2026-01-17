"use client";

import { siteData } from "@/data/siteData";

interface ServiceSchemaProps {
  serviceName: string;
  serviceDescription: string;
  serviceUrl: string;
  priceRange?: string;
}

export function ServiceSchema({
  serviceName,
  serviceDescription,
  serviceUrl,
  priceRange,
}: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: serviceName,
    provider: {
      "@type": "LocalBusiness",
      "@id": `${siteData.seo.siteUrl}/#organization`,
      name: siteData.business.name,
      telephone: siteData.business.phone,
      address: {
        "@type": "PostalAddress",
        addressLocality: siteData.business.address.locality,
        addressRegion: siteData.business.address.region,
        postalCode: siteData.business.address.postalCode,
        addressCountry: siteData.business.address.country,
      },
    },
    areaServed: {
      "@type": "State",
      name: "Essex",
    },
    description: serviceDescription,
    url: `${siteData.seo.siteUrl}${serviceUrl}`,
    ...(priceRange && { priceRange }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
