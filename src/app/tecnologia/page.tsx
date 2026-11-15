import { FinalCTA } from "@/components/home/FinalCTA";
import { TechnologyExplorer } from "@/components/home/TechnologyExplorer";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { Eyebrow, Heading, Text } from "@/components/ui/Typography";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Tecnologia",
  description:
    "Inteligência artificial e LLMs, RAG, automação, integrações, engenharia de software e arquitetura de dados: a base tecnológica das soluções da ArestIA.",
  path: "/tecnologia",
});

const PRINCIPLES = [
  {
    title: "Partimos do problema",
    text: "Antes de escolher a tecnologia, entendemos o processo e o resultado que o negócio precisa alcançar.",
  },
  {
    title: "Integração desde o desenho",
    text: "Sistemas pensados para se conectar com o que a empresa já usa, em vez de criar mais uma ilha de informação.",
  },
  {
    title: "Segurança e privacidade desde o início",
    text: "Acesso controlado e cuidado com dados sensíveis fazem parte do desenho, não de um ajuste no final.",
  },
  {
    title: "Evolução contínua",
    text: "Arquitetura preparada para crescer junto com a operação, com novos módulos e integrações quando necessário.",
  },
];

export default function TecnologiaPage() {
  return (
    <main id="conteudo" className="flex-1">
      <Section flush className="overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-40 top-10 size-[38rem] rounded-full bg-royal/20 blur-[130px]"
        />
        <Container className="relative pb-24 pt-36 lg:pb-32 lg:pt-44">
          <div className="max-w-3xl">
            <Reveal>
              <Eyebrow>Tecnologia</Eyebrow>
            </Reveal>
            <Reveal delay={0.1} className="mt-6">
              <Heading as="h1" level="h1" className="text-balance">
                Mais do que software. Inteligência aplicada.
              </Heading>
            </Reveal>
            <Reveal delay={0.2} className="mt-7">
              <Text size="lead">
                Por trás de cada solução da ArestIA existe uma base que conecta modelos de IA,
                conhecimento, automação, integrações e dados, para transformar informação em
                decisão e processo em experiência.
              </Text>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section tone="light">
        <Container>
          <div className="mb-16 max-w-2xl">
            <Reveal inView>
              <Eyebrow>Pilares tecnológicos</Eyebrow>
            </Reveal>
            <Reveal inView delay={0.08} className="mt-5">
              <Heading as="h2" level="h2" className="text-balance">
                Seis pilares, uma mesma base.
              </Heading>
            </Reveal>
          </div>
          <TechnologyExplorer />
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="mb-16 max-w-2xl">
            <Reveal inView>
              <Eyebrow>Como construímos</Eyebrow>
            </Reveal>
            <Reveal inView delay={0.08} className="mt-5">
              <Heading as="h2" level="h2" className="text-balance">
                Princípios que guiam cada projeto.
              </Heading>
            </Reveal>
          </div>
          <ul className="grid gap-x-16 md:grid-cols-2">
            {PRINCIPLES.map((item, i) => (
              <li key={item.title} className="border-t border-mist/15 py-8">
                <Reveal inView delay={(i % 2) * 0.08} y={14}>
                  <div className="flex gap-5">
                    <span className="mt-1 font-mono text-xs text-cyan/80">{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <h3 className="text-xl font-semibold tracking-tight">{item.title}</h3>
                      <p className="mt-2 max-w-md text-[15px] leading-relaxed text-mist/60">{item.text}</p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <FinalCTA />
    </main>
  );
}