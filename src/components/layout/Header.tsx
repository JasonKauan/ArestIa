"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { DEMO_HREF } from "@/lib/navigation";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";
import { Navigation } from "./Navigation";

/**
 * Header fixo: transparente no topo, vidro fosco azul-marinho depois que a página rola.
 *
 * IMPORTANTE: o vidro (backdrop-filter) fica numa camada IRMÃ separada, e não no <header>.
 * Um elemento com backdrop-filter vira o "bloco de referência" dos descendentes com position: fixed,
 * então, se o filtro estivesse no <header>, o menu mobile (fixed inset-0, filho do header) deixaria de
 * cobrir a tela e ficaria do tamanho do header assim que a página fosse rolada.
 */
export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        aria-hidden
        className={cn(
          "absolute inset-0 -z-10 border-b border-mist/10 bg-navy/75 backdrop-blur-xl transition-opacity duration-300",
          scrolled ? "opacity-100" : "opacity-0",
        )}
      />
      <div className="mx-auto flex h-[4.5rem] w-full max-w-7xl items-center justify-between px-6 lg:px-10">
        <Logo className="relative z-[60]" />
        <Navigation />
        <div className="flex items-center gap-3">
          <Button href={DEMO_HREF} className="hidden lg:inline-flex">
            Solicitar demonstração
          </Button>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}