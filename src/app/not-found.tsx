import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { Eyebrow, Heading, Text } from "@/components/ui/Typography";

export const metadata: Metadata = {
  title: "Página não encontrada",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main id="conteudo" className="flex-1">
      <Section flush className="flex min-h-[100svh] items-center overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 top-1/4 size-[40rem] rounded-full bg-royal/20 blur-[130px]"
        />
        <span
          aria-hidden
          className="pointer-events-none absolute -right-6 bottom-0 select-none font-mono text-[14rem] font-semibold leading-none tracking-tighter text-mist/[0.04] sm:text-[22rem]"
        >
          404
        </span>
        <Container className="relative py-40">
          <Reveal>
            <Eyebrow>Erro 404</Eyebrow>
          </Reveal>
          <Reveal delay={0.1} className="mt-6">
            <Heading as="h1" level="h1" className="max-w-2xl text-balance">
              Esta página não existe.
            </Heading>
          </Reveal>
          <Reveal delay={0.2} className="mt-7">
            <Text size="lead" className="max-w-xl">
              O endereço pode ter mudado ou ter sido digitado com algum erro. Vamos te levar de
              volta ao caminho certo.
            </Text>
          </Reveal>
          <Reveal delay={0.3} className="mt-10 flex flex-wrap gap-3">
            <Button size="lg" href="/">
              Voltar ao início
            </Button>
            <Button size="lg" variant="secondary" href="/solucoes">
              Ver as soluções
            </Button>
          </Reveal>
        </Container>
      </Section>
    </main>
  );
}