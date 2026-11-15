import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { Eyebrow, Heading, Text } from "@/components/ui/Typography";
import { ProductHeroVisual } from "./ProductHeroVisual";

type ProductHeroProps = {
  slug: string;
  name: string;
  label: string;
  title: string;
  description: string;
  demoHref: string;
};

export function ProductHero({ slug, name, label, title, description, demoHref }: ProductHeroProps) {
  return (
    <Section flush className="overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-10 size-[40rem] rounded-full bg-royal/20 blur-[130px]"
      />
      <Container className="relative grid items-center gap-12 pb-20 pt-36 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pb-28 lg:pt-44">
        <div>
          <Reveal>
            <nav aria-label="Você está em" className="mb-8">
              <ol className="flex items-center gap-1.5 font-mono text-xs text-mist/50">
                <li>
                  <Link href="/solucoes" className="transition-colors hover:text-mist">
                    Soluções
                  </Link>
                </li>
                <ChevronRight className="size-3" aria-hidden />
                <li aria-current="page" className="text-mist/80">
                  {name}
                </li>
              </ol>
            </nav>
          </Reveal>
          <Reveal delay={0.05}>
            <Eyebrow>
              {name} · {label}
            </Eyebrow>
          </Reveal>
          <Reveal delay={0.12} className="mt-6">
            <Heading as="h1" level="h1" className="text-balance">
              {title}
            </Heading>
          </Reveal>
          <Reveal delay={0.24} className="mt-7">
            <Text size="lead" className="max-w-xl">
              {description}
            </Text>
          </Reveal>
          <Reveal delay={0.36} className="mt-10 flex flex-wrap gap-3">
            <Button size="lg" href={demoHref}>
              Solicitar demonstração
            </Button>
            <Button size="lg" variant="secondary" href="#demonstracao">
              Ver demonstração
            </Button>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <ProductHeroVisual slug={slug} className="mx-auto w-full max-w-[32rem] lg:max-w-none" />
        </Reveal>
      </Container>
    </Section>
  );
}