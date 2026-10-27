import type { Metadata } from "next";
import { getPortfolioPage, site } from "./site";

export function pageMetadata(path: string): Metadata {
  const page = getPortfolioPage(path)!;

  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: page.canonicalPath ?? path },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: site.name,
      title: page.title,
      description: page.description,
      url: page.canonicalPath ?? path,
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: site.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [{ url: "/opengraph-image", alt: site.name }],
    },
  };
}

export function pageStructuredData(path: string) {
  const page = getPortfolioPage(path)!;
  const personId = `${site.url}/#person`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: `${site.url}/`,
        name: site.name,
        inLanguage: "en",
        author: { "@id": personId },
      },
      {
        "@type": "Person",
        "@id": personId,
        name: site.owner,
        url: `${site.url}/`,
        sameAs: [
          "https://www.linkedin.com/in/lorenzo-ye-kai/",
          "https://x.com/lorenzoyekai",
        ],
      },
      {
        "@type": page.schemaType,
        "@id": `${site.url}${path}#webpage`,
        url: `${site.url}${path}`,
        name: page.title,
        description: page.description,
        inLanguage: "en",
        isPartOf: { "@id": `${site.url}/#website` },
        about: { "@id": personId },
        ...(page.schemaType === "ProfilePage"
          ? { mainEntity: { "@id": personId } }
          : {}),
      },
    ],
  };
}
