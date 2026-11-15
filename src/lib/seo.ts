import type { Metadata } from "next";
import { SITE } from "./constants";

/**
 * Metadados padrão de página: título, descrição, canonical e Open Graph próprios.
 * (Sem isso, o Open Graph do layout é herdado e todo link compartilhado sai com o título da Home.)
 */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: SITE.locale,
      siteName: SITE.name,
      title: `${title} | ${SITE.shortName}`,
      description,
      url: path,
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: `${SITE.name} — ${SITE.slogan}` }],
    },
  };
}