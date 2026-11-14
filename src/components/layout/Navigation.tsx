"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { MAIN_NAV, PRODUCTS, type NavItem } from "@/lib/navigation";
import { cn } from "@/lib/utils";

const linkClass =
  "relative rounded-full px-4 py-2 text-sm text-mist/70 transition-colors duration-200 hover:text-mist";

function isActive(pathname: string, item: NavItem) {
  if (item.href.includes("#")) return false;
  return pathname === item.href || pathname.startsWith(`${item.href}/`);
}

/** Dropdown de soluções: abre no hover, no clique e no teclado. */
function SolutionsDropdown({ item, active }: { item: NavItem; active: boolean }) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (!wrapperRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  return (
    <div
      ref={wrapperRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onBlur={(e) => {
        if (!wrapperRef.current?.contains(e.relatedTarget as Node)) setOpen(false);
      }}
      onKeyDown={(e) => {
        if (e.key === "Escape") setOpen(false);
      }}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        aria-haspopup="true"
        onClick={() => setOpen((v) => !v)}
        className={cn(linkClass, "inline-flex items-center gap-1.5", (open || active) && "text-mist")}
      >
        {item.label}
        <ChevronDown
          className={cn("size-3.5 transition-transform duration-300", open && "rotate-180")}
          aria-hidden
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            id={panelId}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            // pt-3 cria uma "ponte" invisível pro mouse não fechar o menu no vão
            className="absolute left-1/2 top-full w-[26rem] -translate-x-1/2 pt-3"
          >
            <div className="overflow-hidden rounded-2xl border border-mist/10 bg-navy-soft/95 p-2 shadow-2xl shadow-black/40 backdrop-blur-xl">
              <ul>
                {PRODUCTS.map((product, i) => (
                  <li key={product.slug}>
                    <Link
                      href={product.href}
                      onClick={() => setOpen(false)}
                      className="group flex items-start gap-4 rounded-xl px-4 py-3.5 transition-colors hover:bg-mist/5"
                    >
                      <span className="mt-0.5 font-mono text-xs text-cyan/80">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="flex-1">
                        <span className="block text-sm font-medium text-mist">{product.name}</span>
                        <span className="block text-[13px] leading-snug text-mist/55">
                          {product.summary}
                        </span>
                      </span>
                      <ArrowRight
                        className="mt-0.5 size-4 -translate-x-1 text-cyan opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                        aria-hidden
                      />
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="mt-1 flex items-center justify-between rounded-xl border-t border-mist/10 px-4 py-3 text-[13px] text-mist/60 transition-colors hover:text-mist"
              >
                Ver todas as soluções
                <ArrowRight className="size-3.5" aria-hidden />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav aria-label="Principal" className="hidden lg:block">
      <ul className="flex items-center gap-1">
        {MAIN_NAV.map((item) => {
          const active = isActive(pathname, item);
          return (
            <li key={item.label}>
              {item.hasProducts ? (
                <SolutionsDropdown item={item} active={active} />
              ) : (
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(linkClass, active && "text-mist")}
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
