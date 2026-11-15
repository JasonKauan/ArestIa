import { LegalDocument } from "@/components/legal/LegalDocument";
import { LEGAL_UPDATED, PRIVACY_SECTIONS } from "@/lib/legal-content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Política de privacidade",
  description:
    "Como a ArestIA Tecnologia trata os dados pessoais coletados pelo site, conforme a LGPD.",
  path: "/privacidade",
});

export default function PrivacidadePage() {
  return (
    <LegalDocument
      eyebrow="Legal"
      title="Política de privacidade"
      updatedAt={LEGAL_UPDATED}
      sections={PRIVACY_SECTIONS}
      related={{ label: "Termos de uso", href: "/termos" }}
    />
  );
}