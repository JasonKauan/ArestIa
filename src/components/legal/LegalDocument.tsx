import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { Eyebrow, Heading } from "@/components/ui/Typography";
import { CONTACT } from "@/lib/constants";
import type { LegalSection } from "@/lib/legal-content";

type LegalDocumentProps = {
  eyebrow: string;
  title: string;
  updatedAt: string;
  sections: LegalSection[];
  related: { label: string; href: string };
};

export function LegalDocument({ eyebrow, title, updatedAt, sections, related }: LegalDocumentProps) {
  return (
    <main id="conteudo" className="flex-1">
      <Section flush>
        <Container size="narrow" className="pb-16 pt-36 lg:pt-44">
          <Reveal>
            <Eyebrow>{eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.1} className="mt-6">
            <Heading as="h1" level="h1">
              {title}
            </Heading>
          </Reveal>
          <Reveal delay={0.2} className="mt-6">
            <p className="font-mono text-xs uppercase tracking-[0.15em] text-mist/50">
              Atualizada em {updatedAt}
            </p>
          </Reveal>
        </Container>
      </Section>

      <Section tone="light">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <nav aria-label="Nesta página" className="hidden lg:col-span-3 lg:block">
            <ol className="sticky top-28 space-y-3 border-l border-navy/15 pl-5 text-sm">
              {sections.map((section, i) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="flex gap-3 text-navy/65 transition-colors hover:text-royal"
                  >
                    <span className="font-mono text-xs text-navy/60">{String(i + 1).padStart(2, "0")}</span>
                    {section.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="lg:col-span-8 lg:col-start-5">
            {sections.map((section, i) => (
              <section key={section.id} id={section.id} className="scroll-mt-28 border-t border-navy/15 py-10 first:border-t-0 first:pt-0">
                <h2 className="flex items-baseline gap-4 text-2xl font-semibold tracking-tight">
                  <span className="font-mono text-sm text-royal">{String(i + 1).padStart(2, "0")}</span>
                  {section.title}
                </h2>
                <div className="mt-5 space-y-4 text-base leading-relaxed text-navy/75">
                  {section.paragraphs?.map((p) => <p key={p}>{p}</p>)}
                  {section.items && (
                    <ul className="space-y-2.5">
                      {section.items.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-[0.7rem] h-px w-4 shrink-0 bg-royal" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.contact && (
                    <p>
                      Para exercer seus direitos ou tirar dúvidas, fale com a gente
                      {CONTACT.email ? (
                        <>
                          {" "}pelo e-mail{" "}
                          <a href={`mailto:${CONTACT.email}`} className="text-royal underline underline-offset-4">
                            {CONTACT.email}
                          </a>
                          {" "}ou
                        </>
                      ) : null}{" "}
                      pela página de{" "}
                      <Link href="/contato" className="text-royal underline underline-offset-4">
                        contato
                      </Link>
                      .
                    </p>
                  )}
                </div>
              </section>
            ))}

            <p className="border-t border-navy/15 pt-8 text-sm text-navy/60">
              Veja também:{" "}
              <Link href={related.href} className="text-royal underline underline-offset-4">
                {related.label}
              </Link>
            </p>
          </div>
        </Container>
      </Section>
    </main>
  );
}