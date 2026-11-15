import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { Eyebrow, Heading } from "@/components/ui/Typography";

export function ProductFeatures({ features }: { features: { title: string; text: string }[] }) {
  return (
    <Section tone="light">
      <Container>
        <div className="mb-16 max-w-2xl">
          <Reveal inView>
            <Eyebrow>Principais funcionalidades</Eyebrow>
          </Reveal>
          <Reveal inView delay={0.08} className="mt-5">
            <Heading as="h2" level="h2" className="text-balance">
              O que a solução se propõe a fazer.
            </Heading>
          </Reveal>
        </div>

        <ul className="grid gap-x-16 md:grid-cols-2">
          {features.map((feature, i) => (
            <li key={feature.title} className="group border-t border-navy/15 py-8">
              <Reveal inView delay={(i % 2) * 0.08} y={14}>
                <div className="flex gap-5">
                  <span className="mt-1 font-mono text-xs text-royal">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-royal">
                      {feature.title}
                    </h3>
                    <p className="mt-2 max-w-md text-[15px] leading-relaxed text-navy/65">{feature.text}</p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}