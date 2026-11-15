import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { Eyebrow, Heading, Text } from "@/components/ui/Typography";

type ProductProblemProps = { title: string; text: string; points: string[] };

export function ProductProblem({ title, text, points }: ProductProblemProps) {
  return (
    <Section tone="light">
      <Container className="grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-6">
          <Reveal inView>
            <Eyebrow>O desafio</Eyebrow>
          </Reveal>
          <Reveal inView delay={0.08} className="mt-5">
            <Heading as="h2" level="h2" className="text-balance">
              {title}
            </Heading>
          </Reveal>
        </div>
        <div className="lg:col-span-5 lg:col-start-8">
          <Reveal inView delay={0.12}>
            <Text size="lead" className="text-navy">
              {text}
            </Text>
          </Reveal>
          <ul className="mt-10">
            {points.map((point, i) => (
              <Reveal key={point} inView delay={0.1 + i * 0.06} y={12}>
                <li className="flex items-baseline gap-4 border-t border-navy/15 py-4 last:border-b">
                  <span className="font-mono text-xs text-royal">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-base font-medium tracking-tight">{point}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}