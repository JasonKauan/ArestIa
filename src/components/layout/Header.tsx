"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { DEMO_HREF } from "@/lib/navigation";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";
import { Navigation } from "./Navigation";

/** Header fixo: transparente no topo, vidro fosco azul-marinho depois que a página rola. */
export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-300",
        scrolled
          ? "border-mist/10 bg-navy/75 backdrop-blur-xl"
          : "border-transparent bg-transparent",
      )}
    >
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
