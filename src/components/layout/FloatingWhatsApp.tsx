"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Botão flutuante de WhatsApp. Só é renderizado quando há número configurado (ver layout.tsx).
 * Aparece depois que a pessoa rola a primeira dobra e não aparece na página de Contato,
 * que já tem o formulário e o link direto. Usa um ícone genérico, não a marca de terceiros.
 */
export function FloatingWhatsApp({ href }: { href: string }) {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (pathname === "/contato") return null;

  return (
    <aside
      aria-label="Contato rápido"
      aria-hidden={visible ? undefined : true}
      className={cn(
        "fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-5 z-40 transition-[transform,opacity] duration-300 sm:right-8",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0",
      )}
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com a ArestIA pelo WhatsApp"
        tabIndex={visible ? 0 : -1}
        className="group inline-flex h-14 items-center rounded-full bg-cyan px-4 text-navy shadow-[0_10px_40px_-10px_rgb(60_235_255/0.6)] transition-[transform,background-color] duration-300 hover:bg-mist active:scale-95"
      >
        <MessageCircle className="size-6 shrink-0" aria-hidden />
        <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-medium transition-[max-width,margin] duration-300 group-hover:ml-2 group-hover:max-w-40 group-focus-visible:ml-2 group-focus-visible:max-w-40">
          Fale com a gente
        </span>
      </a>
    </aside>
  );
}