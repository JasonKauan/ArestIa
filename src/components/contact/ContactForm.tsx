"use client";

import { useId, useRef, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowRight, Check, ChevronDown, LoaderCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import {
  SOLUTION_OPTIONS,
  contactSchema,
  isSolutionValue,
  type SolutionValue,
} from "@/lib/contact-schema";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";
type FieldErrors = Partial<Record<string, string>>;

type ContactFormProps = {
  /** Link do WhatsApp comercial (null se não estiver configurado). */
  whatsappHref: string | null;
  /** E-mail comercial (vazio se não estiver configurado). */
  email: string;
};

const inputClass =
  "w-full rounded-xl border border-navy/20 bg-white px-4 text-base text-navy placeholder:text-navy/60 " +
  "transition-[border-color,box-shadow] duration-200 hover:border-navy/40 " +
  "focus-visible:border-royal focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-royal/15 " +
  "aria-[invalid=true]:border-red-600 aria-[invalid=true]:ring-red-600/10";

function Field({
  id,
  label,
  optional,
  error,
  children,
}: {
  id: string;
  label: string;
  optional?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 flex items-baseline gap-2 text-sm font-medium text-navy">
        {label}
        {optional && <span className="text-xs font-normal text-navy/60">opcional</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-2 text-[13px] text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}

export function ContactForm({ whatsappHref, email }: ContactFormProps) {
  const params = useSearchParams();
  const uid = useId();
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});

  const solutionParam = params.get("solucao");
  const defaultSolution: SolutionValue = isSolutionValue(solutionParam) ? solutionParam : "outra";
  const wantsDemo = params.get("interesse") === "demonstracao";

  const id = (name: string) => `${uid}-${name}`;
  const fieldProps = (name: string) => ({
    id: id(name),
    name,
    "aria-invalid": errors[name] ? (true as const) : undefined,
    "aria-describedby": errors[name] ? `${id(name)}-error` : undefined,
    onChange: () => errors[name] && setErrors((prev) => ({ ...prev, [name]: undefined })),
  });

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return;

    const fd = new FormData(event.currentTarget);
    const payload = {
      name: String(fd.get("name") ?? ""),
      company: String(fd.get("company") ?? ""),
      email: String(fd.get("email") ?? ""),
      whatsapp: String(fd.get("whatsapp") ?? ""),
      solution: String(fd.get("solution") ?? ""),
      message: String(fd.get("message") ?? ""),
      consent: fd.get("consent") === "on",
      website: String(fd.get("website") ?? ""),
    };

    const parsed = contactSchema.safeParse(payload);
    if (!parsed.success) {
      const next: FieldErrors = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0]);
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      setStatus("idle");
      const first = Object.keys(next)[0];
      formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }

    setErrors({});
    setStatus("submitting");
    try {
      const response = await fetch("/api/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      setStatus(response.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="flex min-h-[26rem] flex-col items-start justify-center gap-5">
        <span className="flex size-12 items-center justify-center rounded-full bg-navy">
          <Check className="size-6 text-cyan" aria-hidden />
        </span>
        <h2 className="text-3xl font-semibold tracking-tight">Mensagem enviada.</h2>
        <p className="max-w-md text-base leading-relaxed text-navy/65">
          Recebemos o seu contato e vamos conversar sobre o seu cenário.
        </p>
        {whatsappHref && (
          <Button href={whatsappHref} variant="secondary">
            Prefere continuar pelo WhatsApp?
          </Button>
        )}
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-5">
      {wantsDemo && (
        <p className="rounded-xl border border-royal/20 bg-royal/5 px-4 py-3 text-sm text-royal">
          Você está solicitando uma demonstração. Conte um pouco do seu cenário e retornamos com
          os próximos passos.
        </p>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id={id("name")} label="Nome" error={errors.name}>
          <input {...fieldProps("name")} type="text" autoComplete="name" className={cn(inputClass, "h-12")} />
        </Field>
        <Field id={id("company")} label="Empresa" optional error={errors.company}>
          <input
            {...fieldProps("company")}
            type="text"
            autoComplete="organization"
            className={cn(inputClass, "h-12")}
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id={id("email")} label="E-mail" error={errors.email}>
          <input
            {...fieldProps("email")}
            type="email"
            autoComplete="email"
            inputMode="email"
            className={cn(inputClass, "h-12")}
          />
        </Field>
        <Field id={id("whatsapp")} label="WhatsApp" error={errors.whatsapp}>
          <input
            {...fieldProps("whatsapp")}
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            placeholder="(11) 90000-0000"
            className={cn(inputClass, "h-12")}
          />
        </Field>
      </div>

      <Field id={id("solution")} label="Solução de interesse" error={errors.solution}>
        <div className="relative">
          <select
            {...fieldProps("solution")}
            defaultValue={defaultSolution}
            className={cn(inputClass, "h-12 appearance-none pr-11")}
          >
            {SOLUTION_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <ChevronDown
            className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-navy/50"
            aria-hidden
          />
        </div>
      </Field>

      <Field id={id("message")} label="Descreva a sua necessidade" error={errors.message}>
        <textarea
          {...fieldProps("message")}
          rows={5}
          maxLength={2000}
          className={cn(inputClass, "min-h-32 resize-y py-3 leading-relaxed")}
        />
      </Field>

      {/* honeypot: invisível para pessoas */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor={id("website")}>Não preencha este campo</label>
        <input id={id("website")} name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label className="flex cursor-pointer items-start gap-3 text-sm leading-snug text-navy/75">
          <input
            id={id("consent")}
            name="consent"
            type="checkbox"
            aria-invalid={errors.consent ? true : undefined}
            aria-describedby={errors.consent ? `${id("consent")}-error` : undefined}
            onChange={() => errors.consent && setErrors((prev) => ({ ...prev, consent: undefined }))}
            className="mt-0.5 size-4 shrink-0 accent-royal"
          />
          <span>
            Li e concordo com a{" "}
            <Link href="/privacidade" target="_blank" className="text-royal underline underline-offset-4">
              política de privacidade
            </Link>
            .
          </span>
        </label>
        {errors.consent && (
          <p id={`${id("consent")}-error`} role="alert" className="mt-2 text-[13px] text-red-700">
            {errors.consent}
          </p>
        )}
      </div>

      <div aria-live="polite">
        {status === "error" && (
          <p className="rounded-xl border border-red-600/25 bg-red-600/5 px-4 py-3 text-sm text-red-800">
            Não foi possível enviar agora. Tente de novo em instantes
            {whatsappHref || email ? " ou fale com a gente por " : "."}
            {whatsappHref && (
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
                WhatsApp
              </a>
            )}
            {whatsappHref && email && " ou "}
            {email && (
              <a href={`mailto:${email}`} className="underline underline-offset-4">
                e-mail
              </a>
            )}
            {(whatsappHref || email) && "."}
          </p>
        )}
      </div>

      <Button type="submit" size="lg" disabled={status === "submitting"} className="w-full sm:w-auto">
        {status === "submitting" ? (
          <>
            <LoaderCircle className="size-4 animate-spin" aria-hidden />
            Enviando
          </>
        ) : (
          <>
            Enviar mensagem
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden />
          </>
        )}
      </Button>
    </form>
  );
}