"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { DEMO_HREF, MAIN_NAV, PRODUCTS } from "@/lib/navigation";

/** Botão hambúrguer + painel em tela cheia (só aparece abaixo de lg). */
export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const close = () => setOpen(false);

  // trava o scroll da página e fecha com Esc enquanto o menu está aberto
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className="relative z-[60] inline-flex size-11 items-center justify-center rounded-full border border-mist/15 text-mist transition-colors hover:bg-mist/5 active:scale-95"
      >
        {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            id={panelId}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[55] overflow-y-auto bg-navy px-6 pb-10 pt-28"
          >
            <nav aria-label="Menu mobile">
              <ul className="flex flex-col">
                {MAIN_NAV.map((item, i) => (
                  <motion.li
                    key={item.label}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 + i * 0.05, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="border-b border-mist/10"
                  >
                    <Link
                      href={item.href}
                      onClick={close}
                      className="flex items-center justify-between py-5 text-2xl font-semibold tracking-tight text-mist"
                    >
                      {item.label}
                      <ArrowRight className="size-5 text-mist/40" aria-hidden />
                    </Link>

                    {item.hasProducts && (
                      <ul className="mb-5 -mt-1 flex flex-col gap-1 pl-1">
                        {PRODUCTS.map((product, n) => (
                          <li key={product.slug}>
                            <Link
                              href={product.href}
                              onClick={close}
                              className="flex items-baseline gap-3 rounded-lg py-2 text-mist/70 transition-colors hover:text-mist"
                            >
                              <span className="font-mono text-xs text-cyan/80">
                                {String(n + 1).padStart(2, "0")}
                              </span>
                              <span className="text-base">{product.name}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </motion.li>
                ))}
              </ul>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="mt-8"
            >
              <Button href={DEMO_HREF} size="lg" className="w-full" onClick={close}>
                Solicitar demonstração
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
