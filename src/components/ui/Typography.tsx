import { cn } from "@/lib/utils";

type Level = "display" | "h1" | "h2" | "h3" | "h4";

const headingStyles: Record<Level, string> = {
  display:
    "text-[2.6rem] font-semibold leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl xl:text-[5.25rem]",
  h1: "text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl",
  h2: "text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl",
  h3: "text-2xl font-semibold leading-tight tracking-tight sm:text-3xl",
  h4: "text-lg font-semibold leading-snug tracking-tight sm:text-xl",
};

type HeadingProps = React.ComponentPropsWithoutRef<"h2"> & {
  /** Aparência visual. */
  level?: Level;
  /** Tag HTML real — mantém a hierarquia de títulos correta pro SEO. */
  as?: "h1" | "h2" | "h3" | "h4";
};

export function Heading({
  level = "h2",
  as: Tag = "h2",
  className,
  ...props
}: HeadingProps) {
  return <Tag className={cn(headingStyles[level], className)} {...props} />;
}

/** Rótulo pequeno em caixa-alta acima dos títulos. Cor se adapta ao fundo da Section. */
export function Eyebrow({ className, ...props }: React.ComponentPropsWithoutRef<"p">) {
  return (
    <p
      className={cn(
        "font-mono text-xs uppercase tracking-[0.2em]",
        "text-royal in-data-[tone=dark]:text-cyan",
        className,
      )}
      {...props}
    />
  );
}

/** Texto de apoio (subtítulos, parágrafos longos). */
export function Text({
  size = "base",
  className,
  ...props
}: React.ComponentPropsWithoutRef<"p"> & { size?: "base" | "lead" }) {
  return (
    <p
      className={cn(
        "text-pretty opacity-70",
        size === "lead" ? "text-lg leading-relaxed sm:text-xl" : "text-base leading-relaxed",
        className,
      )}
      {...props}
    />
  );
}