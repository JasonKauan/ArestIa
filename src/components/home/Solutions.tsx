import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { Eyebrow, Heading, Text } from "@/components/ui/Typography";
import { PRODUCTS } from "@/lib/navigation";
import { PRODUCT_DETAILS } from "@/lib/products";
import { AssistantDemo } from "./demos/AssistantDemo";
import { DashboardDemo } from "./demos/DashboardDemo";
import { WhatsAppDemo } from "./demos/WhatsAppDemo";

function ProductCopy({ slug, index }: { slug: string; index: number }) {
  const product = PRODUCTS.find((p) => p.slug === slug)!;
  const details = PRODUCT_DETAILS[slug];

  return (
    <div>
      <Reveal inView>
        <Eyebrow>
          {String(index + 1).padStart(2, "0")} — {product.name}
        </Eyebrow>
      </Reveal>
      <Reveal inView delay={0.08} className="mt-5">
        <Heading as="h3" level="h2" className="text-balance">
          {details.title}
        </Heading>
      </Reveal>
      <Reveal inView delay={0.16} className="mt-6">
        <Text size="lead">{details.description}</Text>
      </Reveal>
      <Reveal inView delay={0.22} className="mt-8">
        <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
          {details.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3 text-sm leading-snug opacity-80">
              <span className="mt-[0.45rem] h-px w-4 shrink-0 bg-royal in-data-[tone=dark]:bg-cyan" />
              {feature}
            </li>
          ))}
        </ul>
      </Reveal>
      <Reveal inView delay={0.28} className="mt-10">
        <Button href={product.href} variant="secondary">
          Conhecer {product.name}
          <ArrowRight
            className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
            aria-hidden
          />
        </Button>
      </Reveal>
    </div>
  );
}

export function Solutions() {
  return (
    <>
      {/* 01 — ArestIA AI: escuro, brilho azul atrás da demo */}
      <Section id="solucoes" className="overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 top-1/3 size-[42rem] rounded-full bg-royal/20 blur-[130px]"
        />
        <Container className="relative">
          <div className="mb-20 max-w-3xl md:mb-28">
            <Reveal inView>
              <Eyebrow>Nossas soluções</Eyebrow>
            </Reveal>
            <Reveal inView delay={0.08} className="mt-5">
              <Heading as="h2" level="h1" className="text-balance">
                Soluções que conectam IA, automação e gestão.
              </Heading>
            </Reveal>
          </div>

          <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-5">
              <ProductCopy slug="llm-personalizado" index={0} />
            </div>
            <Reveal inView delay={0.1} className="lg:col-span-7">
              <AssistantDemo />
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* 02 — ArestIA Automation: superfície clara, trama de pontos */}
      <Section tone="light" className="overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 [background-image:radial-gradient(circle,rgb(18_63_164/0.16)_1px,transparent_1px)] [background-size:26px_26px] [mask-image:linear-gradient(to_left,black,transparent_65%)]"
        />
        <Container className="relative">
          <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
            <Reveal inView className="order-2 lg:order-1 lg:col-span-6">
              <WhatsAppDemo />
            </Reveal>
            <div className="order-1 lg:order-2 lg:col-span-5 lg:col-start-8">
              <ProductCopy slug="chatbot-whatsapp" index={1} />
            </div>
          </div>
        </Container>
      </Section>

      {/* 03 — ArestIA Systems: grade técnica, demo em largura total */}
      <Section className="overflow-hidden bg-navy-soft">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 [background-image:linear-gradient(rgb(248_250_252/0.04)_1px,transparent_1px),linear-gradient(90deg,rgb(248_250_252/0.04)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
        />
        <Container className="relative">
          <div className="mb-16">
            <ProductCopy slug="erp" index={2} />
          </div>
          <Reveal inView>
            <DashboardDemo />
          </Reveal>
          <p className="mt-5 text-center text-[13px] text-mist/55">
            Interface ilustrativa com dados fictícios. O sistema é personalizado conforme a
            realidade de cada operação.
          </p>
        </Container>
      </Section>
    </>
  );
}