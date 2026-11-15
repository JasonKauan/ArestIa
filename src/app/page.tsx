import { SITE, SOCIAL } from "@/lib/constants";
import { Differentials } from "@/components/home/Differentials";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Hero } from "@/components/home/Hero";
import { Manifesto } from "@/components/home/Manifesto";
import { Segments } from "@/components/home/Segments";
import { Solutions } from "@/components/home/Solutions";
import { Technology } from "@/components/home/Technology";

export default function Home() {
  // Dados estruturados da empresa (SEO). Só inclui redes sociais que estiverem configuradas.
  const organizationLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}/brand/arestia-logo.svg`,
    slogan: SITE.slogan,
    description: SITE.description,
    sameAs: [SOCIAL.linkedin, SOCIAL.instagram].filter(Boolean),
  };

  return (
    <main id="conteudo" className="flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd).replace(/</g, "\\u003c") }}
      />
      <Hero />
      <Manifesto />
      <Solutions />
      <Technology />
      <Segments />
      <Differentials />
      <FinalCTA />
    </main>
  );
}