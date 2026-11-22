"use client";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow, Heading, Text } from "@/components/ui/Typography";

/** Tela de erro inesperado (algo quebrou ao renderizar a página). */
export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <main id="conteudo" className="flex-1">
      <Section flush className="flex min-h-[100svh] items-center">
        <Container className="py-40">
          <Eyebrow>Algo deu errado</Eyebrow>
          <Heading as="h1" level="h1" className="mt-6 max-w-2xl text-balance">
            Não conseguimos carregar esta página.
          </Heading>
          <Text size="lead" className="mt-7 max-w-xl">
            Foi um problema temporário do nosso lado. Tente novamente ou volte para o início.
          </Text>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button size="lg" onClick={() => reset()}>
              Tentar de novo
            </Button>
            <Button size="lg" variant="secondary" href="/">
              Voltar ao início
            </Button>
          </div>
        </Container>
      </Section>
    </main>
  );
}