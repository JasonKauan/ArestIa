import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { Eyebrow, Heading, Text } from "@/components/ui/Typography";
import { PRODUCTS } from "@/lib/navigation";

type ProductCTAProps = { slug: string; name: string; demoHref: string };

export function ProductCTA({ slug, name, demoHref }: ProductCTAProps) {
  const others = PRODUCTS.filter((p) => p.slug !== slug);

  return (
    <Section className="overflow-hidden bg-royal">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-72 top-1/2 size-[64rem] -translate-y-1/2 rounded-full border border-mist/10"
      />
      <Container className="relative">
        <Reveal inView>
          <Eyebrow>Próximo passo</Eyebrow>
        </Reveal>
        <Reveal inView delay={0.08} className="mt-6">
          <Heading as="h2" level="h1" className="max-w-3xl text-balance">
            Vamos ver o {name} aplicado ao seu negócio?
          </Heading>
        </Reveal>
        <Reveal inView delay={0.16} className="mt-7">
          <Text size="lead" className="max-w-xl text-mist opacity-80">
            Conte um pouco sobre a sua operação e mostramos como a solução pode ser adaptada à sua realidade.
          </Text>
        </Reveal>
        <Reveal inView delay={0.24} className="mt-10">
          <Button href={demoHref} size="lg">
            Solicitar demonstração
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden />
          </Button>
        </Reveal>

        <Reveal inView delay={0.3} className="mt-16 border-t border-mist/15 pt-8">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-mist/80">Conheça também</p>
          <ul className="mt-4 flex flex-wrap gap-x-8 gap-y-3">
            {others.map((p) => (
              <li key={p.slug}>
                <Link
                  href={p.href}
                  className="group inline-flex items-center gap-2 text-lg font-medium tracking-tight text-mist transition-colors hover:text-cyan"
                >
                  {p.name}
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden />
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </Section>
  );
}