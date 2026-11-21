import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { Eyebrow, Heading, Text } from "@/components/ui/Typography";
import { DIFFERENTIALS } from "@/lib/home-content";
import { PRODUCTS } from "@/lib/navigation";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Sobre a ArestIA",
  description:
    "A ArestIA é uma empresa brasileira de tecnologia especializada em inteligência artificial, desenvolvimento de software e soluções empresariais.",
  path: "/sobre",
});

export default function SobrePage() {
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
              <Eyebrow>Sobre a ArestIA</Eyebrow>
            </Reveal>
            <Reveal delay={0.1} className="mt-6">
              <Heading as="h1" level="h1" className="text-balance">
                Inteligência que constrói soluções.
              </Heading>
            </Reveal>
            <Reveal delay={0.2} className="mt-7">
              <Text size="lead">
                A ArestIA é uma empresa brasileira de tecnologia especializada em inteligência
                artificial, desenvolvimento de software e soluções empresariais.
              </Text>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section tone="light">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6">
            <Reveal inView>
              <Eyebrow>Quem somos</Eyebrow>
            </Reveal>
            <Reveal inView delay={0.08} className="mt-5">
              <Heading as="h2" level="h2" className="text-balance">
                Conectamos inteligência artificial, automação e gestão empresarial.
              </Heading>
            </Reveal>
          </div>
          <Reveal inView delay={0.12} className="lg:col-span-5 lg:col-start-8">
            <Text size="lead" className="text-navy">
              Desenvolvemos soluções tecnológicas que transformam processos complexos em
              experiências simples, inteligentes e eficientes. Nosso posicionamento resume o que
              fazemos: Inteligência Artificial &amp; Sistemas.
            </Text>
          </Reveal>
        </Container>
      </Section>

      <Section className="overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-40 bottom-0 size-[36rem] rounded-full bg-royal/20 blur-[130px]"
        />
        <Container className="relative">
          <Reveal inView>
            <Eyebrow>No que acreditamos</Eyebrow>
          </Reveal>
          <Reveal inView delay={0.08} className="mt-6">
            <Heading as="h2" level="h1" className="max-w-4xl text-balance">
              A tecnologia precisa trabalhar a favor das pessoas e dos negócios.
            </Heading>
          </Reveal>
          <Reveal inView delay={0.16} className="mt-8">
            <Text size="lead" className="max-w-2xl">
              Acreditamos que a tecnologia deve simplificar o complexo. Por isso, transformamos
              informações em inteligência, processos em automação e operações em experiências mais
              eficientes.
            </Text>
          </Reveal>
        </Container>
      </Section>

      <Section tone="light">
        <Container>
          <div className="mb-14 max-w-2xl">
            <Reveal inView>
              <Eyebrow>O que construímos</Eyebrow>
            </Reveal>
            <Reveal inView delay={0.08} className="mt-5">
              <Heading as="h2" level="h2" className="text-balance">
                Três linhas de solução.
              </Heading>
            </Reveal>
          </div>
          <ul>
            {PRODUCTS.map((product, i) => (
              <Reveal key={product.slug} inView delay={i * 0.06} y={14} as="li" className="border-t border-navy/15 last:border-b">
                  <Link
                    href={product.href}
                    className="group flex items-center gap-6 py-7 transition-colors hover:text-royal"
                  >
                    <span className="font-mono text-xs text-royal">{String(i + 1).padStart(2, "0")}</span>
                    <span className="flex-1">
                      <span className="block text-2xl font-semibold tracking-tight sm:text-3xl">{product.name}</span>
                      <span className="mt-1 block text-sm text-navy/65">{product.label}</span>
                    </span>
                    <ArrowUpRight className="size-5 text-navy/50 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-royal" aria-hidden />
                  </Link>
                </Reveal>
            ))}
          </ul>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="mb-14 max-w-2xl">
            <Reveal inView>
              <Eyebrow>Como trabalhamos</Eyebrow>
            </Reveal>
            <Reveal inView delay={0.08} className="mt-5">
              <Heading as="h2" level="h2" className="text-balance">
                Tecnologia pensada para resolver problemas reais.
              </Heading>
            </Reveal>
          </div>
          <ol className="grid gap-10 md:grid-cols-4 md:gap-6">
            {DIFFERENTIALS.map((item, i) => (
              <li key={item.title} className="border-t border-mist/15 pt-6">
                <Reveal inView delay={i * 0.08} y={14}>
                  <span className="font-mono text-xs text-cyan/80">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-3 text-xl font-semibold tracking-tight">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-mist/60">{item.text}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <FinalCTA />
    </main>
  );
}