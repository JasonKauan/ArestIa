import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { Eyebrow, Heading } from "@/components/ui/Typography";

type ProductBenefitsProps = { integrations: string[]; benefits: string[] };

export function ProductBenefits({ integrations, benefits }: ProductBenefitsProps) {
  return (
    <Section tone="light">
      <Container className="grid gap-16 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <Reveal inView>
            <Eyebrow>Possibilidades de integração</Eyebrow>
          </Reveal>
          <Reveal inView delay={0.08} className="mt-5">
            <Heading as="h2" level="h3" className="text-balance">
              Conecta com o que a sua operação já usa.
            </Heading>
          </Reveal>
          <Reveal inView delay={0.14} className="mt-8">
            <ul className="flex flex-wrap gap-2.5">
              {integrations.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-navy/20 px-4 py-2 text-sm text-navy/80"
                >
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-[13px] text-navy/50">
              As integrações são definidas conforme o escopo de cada projeto.
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <Reveal inView>
            <Eyebrow>Benefícios para a operação</Eyebrow>
          </Reveal>
          <ul className="mt-6">
            {benefits.map((benefit, i) => (
              <Reveal key={benefit} inView delay={i * 0.06} y={12}>
                <li className="flex items-start gap-4 border-t border-navy/15 py-5 last:border-b">
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-navy">
                    <Check className="size-3.5 text-cyan" aria-hidden />
                  </span>
                  <span className="text-lg font-medium leading-snug tracking-tight">{benefit}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}