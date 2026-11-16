

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { Eyebrow, Heading, Text } from "@/components/ui/Typography";
import { PRODUCTS } from "@/lib/navigation";
import { PRODUCT_DETAILS } from "@/lib/products";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Soluções",
  description:
    "Conheça as soluções da ArestIA: LLM personalizado, chatbot de agendamento no WhatsApp e sistema de gestão empresarial.",
  path: "/solucoes",
});

export default function SolucoesPage() {
  return (
    <main id="conteudo" className="flex-1">
      <Section flush className="overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 top-10 size-[40rem] rounded-full bg-royal/20 blur-[130px]"
        />
        <Container className="relative pb-24 pt-36 lg:pb-32 lg:pt-44">
          <div className="max-w-3xl">
            <Reveal>
              <Eyebrow>Soluções</Eyebrow>
            </Reveal>
            <Reveal delay={0.1} className="mt-6">
              <Heading as="h1" level="h1" className="text-balance">
                Soluções que conectam IA, automação e gestão.
              </Heading>
            </Reveal>
            <Reveal delay={0.2} className="mt-7">
              <Text size="lead">
                Três linhas de produto, desenvolvidas para transformar processos complexos em
                experiências simples, inteligentes e eficientes. Podem ser adotadas separadamente
                e, quando fizer sentido, integradas entre si.
              </Text>
            </Reveal>
          </div>

          <ul className="mt-20">
            {PRODUCTS.map((product, i) => {
              const details = PRODUCT_DETAILS[product.slug];
              return (
                <Reveal key={product.slug} inView delay={0.05} y={18}>
                  <li className="border-t border-mist/15 last:border-b">
                    <Link
                      href={product.href}
                      className="group grid items-start gap-6 py-10 transition-colors hover:bg-mist/[0.03] md:grid-cols-[4rem_1fr_1.2fr_2rem] md:gap-8 md:px-2 md:py-12"
                    >
                      <span className="font-mono text-sm text-cyan/80">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                          {product.name}
                        </h2>
                        <p className="mt-2 font-mono text-xs uppercase tracking-[0.15em] text-mist/50">
                          {product.label}
                        </p>
                      </div>
                      <div>
                        <p className="text-lg font-medium leading-snug tracking-tight text-mist">
                          {details.title}
                        </p>
                        <p className="mt-3 text-[15px] leading-relaxed text-mist/60">
                          {details.description}
                        </p>
                      </div>
                      <ArrowUpRight
                        className="hidden size-6 text-mist/40 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan md:block"
                        aria-hidden
                      />
                    </Link>
                  </li>
                </Reveal>
              );
            })}
          </ul>
        </Container>
      </Section>
      <FinalCTA />
    </main>
  );
}