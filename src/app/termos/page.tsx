import { LegalDocument } from "@/components/legal/LegalDocument";
import { LEGAL_UPDATED, TERMS_SECTIONS } from "@/lib/legal-content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Termos de uso",
  description:
    "Condições de uso do site da ArestIA Tecnologia.",
  path: "/termos",
});

export default function TermosPage() {
  return (
    <LegalDocument
      eyebrow="Legal"
      title="Termos de uso"
      updatedAt={LEGAL_UPDATED}
      sections={TERMS_SECTIONS}
      related={{ label: "Política de privacidade", href: "/privacidade" }}
    />
  );
}