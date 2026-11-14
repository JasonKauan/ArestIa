import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { Eyebrow, Heading, Text } from "@/components/ui/Typography";
import { whatsappLink } from "@/lib/constants";

export function FinalCTA() {
  // Usa o WhatsApp comercial se estiver configurado; senão leva ao formulário de contato.
  const href =
    whatsappLink("Olá! Gostaria de conversar com a ArestIA sobre uma solução para o meu negócio.") ??
    "/contato";

  return (
    <Section className="overflow-hidden bg-royal">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-72 top-1/2 size-[64rem] -translate-y-1/2 rounded-full border border-mist/10"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-48 top-1/2 size-[48rem] -translate-y-1/2 rounded-full border border-mist/10"
      />
      <Image
        src="/brand/arestia-mark.svg"
        alt=""
        aria-hidden
        width={560}
        height={560}
        className="pointer-events-none absolute -right-24 top-1/2 hidden w-[34rem] -translate-y-1/2 select-none opacity-40 lg:block"
      />

      <Container className="relative">
        <Reveal inView>
          <Eyebrow>Vamos conversar</Eyebrow>
        </Reveal>
        <Reveal inView delay={0.08} className="mt-6">
          <Heading as="h2" level="display" className="max-w-4xl text-balance">
            Seu próximo avanço começa com uma boa ideia.
          </Heading>
        </Reveal>
        <Reveal inView delay={0.16} className="mt-8">
          <Text size="lead" className="max-w-xl text-mist opacity-80">
            Vamos entender os desafios do seu negócio e construir uma solução tecnológica
            adequada à sua realidade.
          </Text>
        </Reveal>
        <Reveal inView delay={0.24} className="mt-10">
          <Button href={href} size="lg">
            Converse com a ArestIA
            <ArrowRight
              className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
              aria-hidden
            />
          </Button>
        </Reveal>
      </Container>
    </Section>
  );
}