import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { Eyebrow, Heading, Text } from "@/components/ui/Typography";

export function ProductSteps({ steps }: { steps: { title: string; text: string }[] }) {
  return (
    <Section>
      <Container>
        <div className="mb-16 max-w-2xl">
          <Reveal inView>
            <Eyebrow>Como funciona</Eyebrow>
          </Reveal>
          <Reveal inView delay={0.08} className="mt-5">
            <Heading as="h2" level="h2" className="text-balance">
              Um caminho simples, do diagnóstico à operação.
            </Heading>
          </Reveal>
        </div>

        <ol className="grid gap-10 md:grid-cols-4 md:gap-6">
          {steps.map((step, i) => (
            <li
              key={step.title}
              className="relative border-l border-mist/15 pl-6 md:border-l-0 md:border-t md:pl-0 md:pr-4 md:pt-8"
            >
              <span
                aria-hidden
                className="absolute -left-[4.5px] top-1.5 size-2 rounded-full bg-cyan md:left-0 md:top-0 md:-translate-y-1/2"
              />
              <Reveal inView delay={i * 0.1} y={16}>
                <span className="font-mono text-xs text-cyan/80">{String(i + 1).padStart(2, "0")}</span>
                <Heading as="h3" level="h4" className="mt-3">
                  {step.title}
                </Heading>
                <Text className="mt-3 text-sm">{step.text}</Text>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}