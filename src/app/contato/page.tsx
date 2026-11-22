import { Suspense } from "react";
import { ArrowUpRight } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { Eyebrow, Heading, Text } from "@/components/ui/Typography";
import { CONTACT, whatsappLink } from "@/lib/constants";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contato",
  description:
    "Converse com a ArestIA sobre IA, automação e gestão empresarial. Conte o desafio do seu negócio e solicite uma demonstração.",
  path: "/contato",
});

export default function ContatoPage() {
  const whatsapp = whatsappLink();

  return (
    <main id="conteudo" className="flex-1">
      <Section flush className="overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-40 top-20 size-[38rem] rounded-full bg-royal/20 blur-[130px]"
        />
        <Container className="relative grid gap-14 pb-24 pt-36 lg:grid-cols-12 lg:gap-10 lg:pb-32 lg:pt-44">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow>Contato</Eyebrow>
            </Reveal>
            <Reveal delay={0.1} className="mt-6">
              <Heading as="h1" level="h1" className="text-balance">
                Converse com a ArestIA.
              </Heading>
            </Reveal>
            <Reveal delay={0.2} className="mt-7">
              <Text size="lead">
                Vamos entender os desafios do seu negócio e construir uma solução tecnológica
                adequada à sua realidade.
              </Text>
            </Reveal>

            {(whatsapp || CONTACT.email) && (
              <Reveal delay={0.3} className="mt-12">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-mist/50">
                  Prefere falar direto?
                </p>
                <ul className="mt-4">
                  {whatsapp && (
                    <li className="border-t border-mist/15 last:border-b">
                      <a
                        href={whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between py-4 text-lg font-medium tracking-tight transition-colors hover:text-cyan"
                      >
                        WhatsApp comercial
                        <ArrowUpRight className="size-4 text-mist/40 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:text-cyan" aria-hidden />
                      </a>
                    </li>
                  )}
                  {CONTACT.email && (
                    <li className="border-t border-mist/15 last:border-b">
                      <a
                        href={`mailto:${CONTACT.email}`}
                        className="group flex items-center justify-between py-4 text-lg font-medium tracking-tight transition-colors hover:text-cyan"
                      >
                        {CONTACT.email}
                        <ArrowUpRight className="size-4 text-mist/40 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:text-cyan" aria-hidden />
                      </a>
                    </li>
                  )}
                </ul>
              </Reveal>
            )}
          </div>

          <Reveal delay={0.15} className="lg:col-span-7">
            <div data-tone="light" className="rounded-3xl bg-mist p-6 text-navy [color-scheme:light] sm:p-10">
              <Suspense fallback={<div className="min-h-[34rem]" aria-hidden />}>
                <ContactForm whatsappHref={whatsapp} email={CONTACT.email} />
              </Suspense>
            </div>
          </Reveal>
        </Container>
      </Section>
    </main>
  );
}