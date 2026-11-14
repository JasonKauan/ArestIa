import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

/** Símbolo + wordmark ("Arest" claro, "IA" em ciano, como no logo original). Feito pra fundo escuro. */
export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="ArestIA Tecnologia — página inicial"
      className={cn("inline-flex items-center gap-2.5", className)}
    >
      <Image
        src="/brand/arestia-mark-bold.svg"
        alt=""
        width={34}
        height={40}
        priority
        className="h-9 w-auto"
      />
      <span className="text-[1.2rem] font-semibold tracking-tight text-mist">
        Arest<span className="text-cyan">IA</span>
      </span>
    </Link>
  );
}
