import { Plus } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { Eyebrow, Heading } from "@/components/ui/Typography";

export function ProductFAQ({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <Section>
      <Container className="grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4">
          <Reveal inView>
            <Eyebrow>Perguntas frequentes</Eyebrow>
          </Reveal>
          <Reveal inView delay={0.08} className="mt-5">
            <Heading as="h2" level="h2" className="text-balance">
              Dúvidas comuns.
            </Heading>
          </Reveal>
        </div>

        <div className="lg:col-span-7 lg:col-start-6">
          {faqs.map((faq) => (
            <details key={faq.q} className="group border-t border-mist/15 py-6 last:border-b">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-medium tracking-tight [&::-webkit-details-marker]:hidden">
                {faq.q}
                <Plus
                  className="size-5 shrink-0 text-cyan transition-transform duration-300 group-open:rotate-45"
                  aria-hidden
                />
              </summary>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-mist/65">{faq.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </Section>
  );
}