import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { Eyebrow, Heading } from "@/components/ui/Typography";
import { DIFFERENTIALS } from "@/lib/home-content";

export function Differentials() {
  return (
    <Section tone="light" id="diferenciais">
      <Container>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start">
            <Reveal inView>
              <Eyebrow>Diferenciais</Eyebrow>
            </Reveal>
            <Reveal inView delay={0.08} className="mt-5">
              <Heading as="h2" level="h1" className="text-balance">
                Tecnologia pensada para resolver problemas reais.
              </Heading>
            </Reveal>
          </div>

          <ol className="lg:col-span-7">
            {DIFFERENTIALS.map((item, i) => (
              <li key={item.title} className="group border-t border-navy/15 py-9 last:border-b">
                <Reveal inView delay={i * 0.06} y={18}>
                  <div className="grid gap-4 sm:grid-cols-[4.5rem_1fr] sm:gap-8">
                    <span className="font-mono text-sm text-royal">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <Heading
                        as="h3"
                        level="h3"
                        className="text-3xl transition-colors duration-300 group-hover:text-royal sm:text-4xl"
                      >
                        {item.title}
                      </Heading>
                      <p className="mt-3 max-w-md text-base leading-relaxed text-navy/65">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </Section>
  );
}