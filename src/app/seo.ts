import { useEffect } from "react";

const SITE = "https://radyaar.com";

export type PageMeta = {
  /** Route path, used for canonical + og:url. */
  path: string;
  title: string;
  description: string;
  /** Absolute URL to the social card image. */
  image: string;
  /**
   * Keep the page out of search results. Note this is deliberately NOT paired
   * with a `Disallow` in robots.txt: blocking the crawl would stop bots from
   * ever reading this tag, which can leave the bare URL indexed anyway.
   */
  noindex?: boolean;
  /** JSON-LD structured data injected as an application/ld+json script. */
  jsonLd?: Record<string, unknown>;
};

export const PAGE_META = {
  home: {
    path: "/",
    title: "Radya Rahman — Product Designer & Researcher",
    description:
      "Radya Amirur Rahman is a Product Designer and Researcher with 4+ years of experience in iOS and Web Interfaces.",
    image: `${SITE}/og-image.png`,
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      mainEntity: {
        "@type": "Person",
        name: "Radya Amirur Rahman",
        alternateName: "Radya Rahman",
        url: `${SITE}/`,
        image: `${SITE}/favicon.png`,
        jobTitle: "Product Designer & Researcher",
        description:
          "Product Designer and Researcher with 4+ years of experience in iOS and Web Interfaces.",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Surakarta",
          addressCountry: "ID",
        },
        knowsAbout: [
          "Product Design",
          "UX Research",
          "iOS Design",
          "Web Design",
          "Figma",
          "Prototyping",
          "Usability Testing",
        ],
        sameAs: [
          "https://www.linkedin.com/in/radya13rahman/",
          "https://dribbble.com/radyaar",
          "https://layers.to/radyaar",
        ],
      },
    },
  },
  motion: {
    path: "/motion",
    title: "Radya Rahman — Motion & Launch Videos",
    description:
      "Story-driven launch videos, product films, and motion design for software teams — by Radya Amirur Rahman.",
    image: `${SITE}/og-image.png`,
    // Work in progress: shareable by link, kept out of search until the real
    // copy, rates, and footage land. Drop this line to make it indexable, and
    // add /motion back to public/sitemap.xml at the same time.
    noindex: true,
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Radya Rahman — Motion & Launch Videos",
      url: `${SITE}/motion`,
      description:
        "Story-driven launch videos, product films, and motion design for software teams.",
      isPartOf: { "@type": "WebSite", name: "Radya Rahman", url: `${SITE}/` },
    },
  },
} satisfies Record<string, PageMeta>;

/**
 * Head tags for a page, in the shape `vite-prerender-plugin` expects from
 * `prerender()`. Kept next to the runtime hook below so the static HTML and
 * the client-side navigation never drift apart.
 */
export function headElementsFor(meta: PageMeta) {
  const url = `${SITE}${meta.path}`;
  const elements: Array<{ type: string; props: Record<string, string> }> = [
    { type: "meta", props: { name: "description", content: meta.description } },
    {
      type: "meta",
      props: { name: "robots", content: meta.noindex ? "noindex, follow" : "index, follow" },
    },
    { type: "link", props: { rel: "canonical", href: url } },

    { type: "meta", props: { property: "og:type", content: "website" } },
    { type: "meta", props: { property: "og:url", content: url } },
    { type: "meta", props: { property: "og:title", content: meta.title } },
    { type: "meta", props: { property: "og:description", content: meta.description } },
    { type: "meta", props: { property: "og:image", content: meta.image } },
    { type: "meta", props: { property: "og:image:secure_url", content: meta.image } },
    { type: "meta", props: { property: "og:image:type", content: "image/png" } },
    { type: "meta", props: { property: "og:image:width", content: "1200" } },
    { type: "meta", props: { property: "og:image:height", content: "630" } },
    { type: "meta", props: { property: "og:image:alt", content: meta.title } },

    { type: "meta", props: { name: "twitter:card", content: "summary_large_image" } },
    { type: "meta", props: { name: "twitter:title", content: meta.title } },
    { type: "meta", props: { name: "twitter:description", content: meta.description } },
    { type: "meta", props: { name: "twitter:image", content: meta.image } },
  ];

  if (meta.jsonLd) {
    elements.push({
      type: "script",
      props: {
        type: "application/ld+json",
        children: JSON.stringify(meta.jsonLd),
      },
    });
  }

  return elements;
}

function upsertMeta(selector: string, attrs: Record<string, string>) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    document.head.appendChild(el);
  }
  for (const [key, value] of Object.entries(attrs)) el.setAttribute(key, value);
}

/**
 * Keeps `<title>` and the social/canonical tags in sync on the client. The
 * static HTML already carries the right tags for crawlers; this covers the dev
 * server (no prerender) and client-side navigation between routes.
 */
export function useHead(meta: PageMeta) {
  useEffect(() => {
    const url = `${SITE}${meta.path}`;
    document.title = meta.title;

    upsertMeta('meta[name="description"]', { name: "description", content: meta.description });
    upsertMeta('meta[name="robots"]', {
      name: "robots",
      content: meta.noindex ? "noindex, follow" : "index, follow",
    });
    upsertMeta('meta[property="og:url"]', { property: "og:url", content: url });
    upsertMeta('meta[property="og:title"]', { property: "og:title", content: meta.title });
    upsertMeta('meta[property="og:description"]', {
      property: "og:description",
      content: meta.description,
    });
    upsertMeta('meta[property="og:image"]', { property: "og:image", content: meta.image });
    upsertMeta('meta[name="twitter:title"]', { name: "twitter:title", content: meta.title });
    upsertMeta('meta[name="twitter:description"]', {
      name: "twitter:description",
      content: meta.description,
    });
    upsertMeta('meta[name="twitter:image"]', { name: "twitter:image", content: meta.image });

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = url;
  }, [meta]);
}
