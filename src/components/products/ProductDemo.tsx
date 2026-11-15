import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { Eyebrow, Heading } from "@/components/ui/Typography";
import { AssistantDemo } from "@/components/home/demos/AssistantDemo";
import { DashboardDemo } from "@/components/home/demos/DashboardDemo";
import { WhatsAppDemo } from "@/components/home/demos/WhatsAppDemo";

type ProductDemoProps = { slug: string; title: string; note: string };

export function ProductDemo({ slug, title, note }: ProductDemoProps) {
  return (
    <Section id="demonstracao" className="overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 size-[44rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-royal/15 blur-[140px]"
      />
      <Container className="relative">
        <div className="mb-14 max-w-2xl">
          <Reveal inView>
            <Eyebrow>Demonstração</Eyebrow>
          </Reveal>
          <Reveal inView delay={0.08} className="mt-5">
            <Heading as="h2" level="h2" className="text-balance">
              {title}
            </Heading>
          </Reveal>
        </div>

        <Reveal inView delay={0.1}>
          {slug === "llm-personalizado" && (
            <div className="mx-auto max-w-3xl">
              <AssistantDemo />
            </div>
          )}
          {slug === "chatbot-whatsapp" && <WhatsAppDemo onDark />}
          {slug === "erp" && <DashboardDemo />}
        </Reveal>

        <p className="mt-6 text-center text-[13px] text-mist/45">{note}</p>
      </Container>
    </Section>
  );
}