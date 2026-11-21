import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ScrollWords } from "@/components/ui/ScrollWords";
import { Section } from "@/components/ui/Section";
import { Eyebrow, Text } from "@/components/ui/Typography";

const TRANSFORMATIONS = [
  { from: "Informações", to: "Inteligência" },
  { from: "Processos", to: "Automação" },
  { from: "Operações", to: "Experiências mais eficientes" },
];

export function Manifesto() {
  return (
    <Section tone="light" id="manifesto" className="overflow-hidden">
      {/* símbolo gigante e quase transparente, só como textura */}
      <Image
        src="/brand/arestia-mark.svg"
        alt=""
        aria-hidden
        width={560}
        height={560}
        className="pointer-events-none absolute -right-32 top-16 hidden w-[36rem] select-none opacity-[0.22] lg:block"
      />

      <Container className="relative">
        <Reveal inView>
          <Eyebrow>Manifesto</Eyebrow>
        </Reveal>

        <div className="mt-10 max-w-5xl">
          <ScrollWords
            text="A tecnologia precisa trabalhar a favor das pessoas e dos negócios."
            highlight={["pessoas", "negócios"]}
            className="text-balance"
          />
        </div>

        <div className="mt-20 grid gap-14 lg:grid-cols-12 lg:gap-8">
          <Reveal inView className="lg:col-span-5 lg:col-start-7">
            <Text size="lead" className="text-navy">
              Acreditamos que a tecnologia deve simplificar o complexo. Por isso, desenvolvemos
              soluções que transformam informações em inteligência, processos em automação e
              operações em experiências mais eficientes.
            </Text>
          </Reveal>

          <ul className="lg:col-span-5 lg:col-start-1 lg:row-start-1">
            {TRANSFORMATIONS.map((item, i) => (
              <Reveal key={item.from} inView delay={i * 0.12} y={16} as="li" className="group flex items-center gap-5 border-t border-navy/15 py-5 last:border-b">
                  <span className="w-28 shrink-0 font-mono text-xs uppercase tracking-[0.15em] text-navy/60">
                    {item.from}
                  </span>
                  <span className="relative h-px flex-1 bg-navy/15">
                    <span className="absolute inset-y-0 left-0 w-0 bg-royal transition-all duration-700 ease-out-expo group-hover:w-full" />
                    <span className="absolute -right-0.5 top-1/2 size-1.5 -translate-y-1/2 rounded-full bg-royal" />
                  </span>
                  <span className="text-base font-medium tracking-tight text-navy sm:text-lg">
                    {item.to}
                  </span>
                </Reveal>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}