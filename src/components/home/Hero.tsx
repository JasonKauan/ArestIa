import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { Eyebrow, Heading, Text } from "@/components/ui/Typography";
import { PRODUCTS } from "@/lib/navigation";
import { HeroVisual } from "./HeroVisual";

export function Hero() {
  return (
    <Section flush className="flex min-h-[100svh] flex-col overflow-hidden">
      {/* hairlines verticais: estrutura editorial discreta */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 mx-auto flex max-w-7xl justify-between px-6 [mask-image:linear-gradient(to_bottom,black,transparent_85%)] lg:px-10"
      >
        {[0, 1, 2, 3, 4].map((i) => (
          <span key={i} className="h-full w-px bg-mist/[0.05]" />
        ))}
      </div>

      <Container className="relative grid flex-1 items-center gap-10 pb-10 pt-32 lg:grid-cols-[1.08fr_0.92fr] lg:gap-6 lg:pt-28">
        <div className="flex flex-col items-start">
          <Reveal>
            <Eyebrow>Inteligência Artificial &amp; Sistemas</Eyebrow>
          </Reveal>
          <Reveal delay={0.1} className="mt-6">
            <Heading as="h1" level="display">
              Inteligência que transforma a forma de fazer negócios.
            </Heading>
          </Reveal>
          <Reveal delay={0.25} className="mt-8">
            <Text size="lead" className="max-w-xl">
              Desenvolvemos soluções inteligentes que conectam IA, automação e gestão empresarial
              para levar sua operação a um novo nível.
            </Text>
          </Reveal>
          <Reveal delay={0.4} className="mt-10 flex flex-wrap gap-3">
            <Button size="lg" href="/solucoes">
              Conheça nossas soluções
              <ArrowRight
                className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden
              />
            </Button>
            <Button size="lg" variant="secondary" href="/contato">
              Fale com um especialista
            </Button>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="relative mx-auto w-full max-w-[34rem] lg:mx-0 lg:max-w-none lg:translate-x-6">
          <HeroVisual className="h-auto w-full" />
        </Reveal>
      </Container>

      {/* acesso rápido às três linhas de produto */}
      <Container className="relative pb-8">
        <Reveal delay={0.9} y={12}>
          <ul className="grid border-t border-mist/10 sm:grid-cols-3 sm:divide-x sm:divide-mist/10">
            {PRODUCTS.map((product, i) => (
              <li key={product.slug}>
                <Link
                  href={product.href}
                  className="group flex items-center gap-4 py-5 transition-colors hover:bg-mist/[0.03] sm:px-6 sm:first:pl-0"
                >
                  <span className="font-mono text-xs text-cyan/80">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex flex-col">
                    <span className="text-sm font-medium text-mist">{product.name}</span>
                    <span className="text-[13px] text-mist/50">{product.label}</span>
                  </span>
                  <ArrowUpRight
                    className="ml-auto size-4 text-cyan opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:opacity-100"
                    aria-hidden
                  />
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </Section>
  );
}