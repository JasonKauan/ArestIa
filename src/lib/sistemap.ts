import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";
import { PRODUCTS } from "@/lib/navigation";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/solucoes",
    ...PRODUCTS.map((p) => p.href),
    "/tecnologia",
    "/sobre",
    "/contato",
    "/privacidade",
    "/termos",
  ];

  return paths.map((path) => ({
    url: `${SITE.url}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : path.startsWith("/solucoes") ? 0.8 : 0.5,
  }));
}