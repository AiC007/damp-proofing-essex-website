"use client";

import { siteData } from "@/data/siteData";

interface ArticleSchemaProps {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  image?: string;
}

export function ArticleSchema({
  headline,
  description,
  url,
  datePublished,
  dateModified,
  image,
}: ArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    url: `${siteData.seo.siteUrl}${url}`,
    datePublished,
    dateModified,
    author: {
      "@type": "Organization",
      name: siteData.business.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteData.business.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteData.seo.siteUrl}/images/logo.png`,
      },
    },
    ...(image && {
      image: {
        "@type": "ImageObject",
        url: `${siteData.seo.siteUrl}${image}`,
      },
    }),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteData.seo.siteUrl}${url}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
