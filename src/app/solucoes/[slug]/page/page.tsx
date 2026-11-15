import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductBenefits } from "@/components/products/ProductBenefits";
import { ProductCTA } from "@/components/products/ProductCTA";
import { ProductDemo } from "@/components/products/ProductDemo";
import { ProductFAQ } from "@/components/products/ProductFAQ";
import { ProductFeatures } from "@/components/products/ProductFeatures";
import { ProductHero } from "@/components/products/ProductHero";
import { ProductProblem } from "@/components/products/ProductProblem";
import { ProductSteps } from "@/components/products/ProductSteps";
import { SITE } from "@/lib/constants";
import { DEMO_HREF, PRODUCTS } from "@/lib/navigation";
import { PRODUCT_PAGES } from "@/lib/product-pages";
import { PRODUCT_DETAILS } from "@/lib/products";
import { pageMetadata } from "@/lib/seo";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);
  const page = PRODUCT_PAGES[slug];
  if (!product || !page) return {};

  return pageMetadata({
    title: `${product.name} — ${product.label}`,
    description: page.seoDescription,
    path: `/solucoes/${slug}`,
  });
}

export default async function ProductPage({ params }: Params) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);
  const page = PRODUCT_PAGES[slug];
  const details = PRODUCT_DETAILS[slug];
  if (!product || !page || !details) notFound();

  const demoHref = `${DEMO_HREF}&solucao=${slug}`;

  // Dados estruturados (SEO). Sem preço, avaliação ou qualquer dado que não exista.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: product.name,
    description: page.seoDescription,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: `${SITE.url}/solucoes/${slug}`,
    provider: { "@type": "Organization", name: SITE.name, url: SITE.url },
  };

  return (
    <main id="conteudo" className="flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <ProductHero
        slug={slug}
        name={product.name}
        label={product.label}
        title={details.title}
        description={details.description}
        demoHref={demoHref}
      />
      <ProductProblem {...page.problem} />
      <ProductSteps steps={page.steps} />
      <ProductFeatures features={page.features} />
      <ProductDemo slug={slug} title={page.demo.title} note={page.demo.note} />
      <ProductBenefits integrations={page.integrations} benefits={page.benefits} />
      <ProductFAQ faqs={page.faqs} />
      <ProductCTA slug={slug} name={product.name} demoHref={demoHref} />
    </main>
  );
}