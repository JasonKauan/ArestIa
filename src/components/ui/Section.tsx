import { cn } from "@/lib/utils";

type SectionProps = React.ComponentPropsWithoutRef<"section"> & {
  /** "dark" = fundo azul-marinho. "light" = superfície clara. */
  tone?: "dark" | "light";
  /** Remove o espaçamento vertical padrão (ex.: hero, que controla o próprio). */
  flush?: boolean;
};

export function Section({
  tone = "dark",
  flush = false,
  className,
  ...props
}: SectionProps) {
  return (
    <section
      data-tone={tone}
      className={cn(
        "relative",
        tone === "dark" ? "bg-navy text-mist" : "bg-mist text-navy",
        !flush && "py-24 md:py-32",
        className,
      )}
      {...props}
    />
  );
}
