import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { Eyebrow, Heading } from "@/components/ui/Typography";
import { TechnologyExplorer } from "./TechnologyExplorer";

export function Technology() {
  return (
    <Section tone="light" id="tecnologia">
      <Container>
        <div className="mb-16 max-w-3xl md:mb-20">
          <Reveal inView>
            <Eyebrow>Tecnologia</Eyebrow>
          </Reveal>
          <Reveal inView delay={0.08} className="mt-5">
            <Heading as="h2" level="h1" className="text-balance">
              Mais do que software. Inteligência aplicada.
            </Heading>
          </Reveal>
        </div>
        <TechnologyExplorer />
      </Container>
    </Section>
  );
}