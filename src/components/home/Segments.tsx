import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { Eyebrow, Heading } from "@/components/ui/Typography";
import { FEATURED_SEGMENT, OTHER_SEGMENTS } from "@/lib/home-content";

export function Segments() {
  return (
    <Section id="segmentos" className="overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-48 bottom-0 size-[36rem] rounded-full bg-royal/20 blur-[130px]"
      />
      <Container className="relative">
        <div className="mb-16 max-w-3xl md:mb-20">
          <Reveal inView>
            <Eyebrow>Segmentos</Eyebrow>
          </Reveal>
          <Reveal inView delay={0.08} className="mt-5">
            <Heading as="h2" level="h1" className="text-balance">
              Tecnologia adaptada à realidade de cada negócio.
            </Heading>
          </Reveal>
        </div>

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          {/* destaque: hotelaria, em superfície clara sobre o fundo escuro */}
          <Reveal inView className="lg:col-span-7">
            <div
              data-tone="light"
              className="relative h-full overflow-hidden rounded-3xl bg-mist p-8 text-navy md:p-12"
            >
              <svg
                aria-hidden
                viewBox="0 0 400 400"
                className="pointer-events-none absolute -bottom-24 -right-24 w-[26rem] text-royal"
                fill="none"
                stroke="currentColor"
                strokeOpacity="0.18"
              >
                {[60, 110, 160, 210].map((r) => (
                  <circle key={r} cx="400" cy="400" r={r} />
                ))}
              </svg>

              <Eyebrow className="in-data-[tone=dark]:text-royal">Em destaque</Eyebrow>
              <h3 className="mt-5 max-w-md text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl">
                {FEATURED_SEGMENT.name}
              </h3>
              <p className="mt-4 max-w-md text-base leading-relaxed text-navy/65">
                Um segmento onde atendimento, reservas e informação precisam andar juntos.
              </p>

              <ul className="relative mt-10 grid gap-x-8 sm:grid-cols-2">
                {FEATURED_SEGMENT.examples.map((example, i) => (
                  <li key={example} className="border-t border-navy/15 py-5">
                    <span className="font-mono text-xs text-royal">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="mt-2 text-base font-medium leading-snug tracking-tight">
                      {example}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* demais segmentos */}
          <div className="flex flex-col lg:col-span-5 lg:col-start-8">
            <ul className="flex-1">
              {OTHER_SEGMENTS.map((segment, i) => (
                <Reveal key={segment} inView delay={i * 0.08} y={16} as="li" className="group flex items-baseline gap-5 border-t border-mist/15 py-6 last:border-b">
                    <span className="font-mono text-xs text-cyan/80">
                      {String(i + 2).padStart(2, "0")}
                    </span>
                    <span className="text-xl font-medium tracking-tight text-mist/80 transition-colors duration-300 group-hover:text-mist sm:text-2xl">
                      {segment}
                    </span>
                  </Reveal>
              ))}
            </ul>
            <Reveal inView delay={0.4} y={12} className="mt-8">
              <p className="text-sm leading-relaxed text-mist/55">
                Seu segmento não está na lista?{" "}
                <Link
                  href="/contato"
                  className="inline-flex items-center gap-1 text-mist underline underline-offset-4 transition-colors hover:text-cyan"
                >
                  Vamos conversar sobre a sua realidade
                  <ArrowRight className="size-3.5" aria-hidden />
                </Link>
              </p>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}