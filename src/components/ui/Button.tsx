import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full font-medium " +
  "transition-[transform,background-color,border-color,box-shadow,color] duration-300 ease-out-expo " +
  "active:scale-[0.97] disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  // ciano luminoso: chamada principal, funciona em fundo escuro e claro
  primary:
    "bg-cyan text-navy hover:bg-mist hover:shadow-[0_0_32px_-4px_rgb(60_235_255/0.55)]",
  // contorno que herda a cor do texto da Section (claro no escuro, escuro no claro)
  secondary:
    "border border-current/25 hover:border-current/70 hover:bg-current/5",
  ghost: "opacity-80 hover:opacity-100",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-6 text-sm",
  lg: "h-13 px-8 text-base",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsLink = CommonProps & { href: string } & Omit<
    React.ComponentPropsWithoutRef<typeof Link>,
    "href" | "className" | "children"
  >;

type ButtonAsButton = CommonProps & { href?: undefined } & Omit<
    React.ComponentPropsWithoutRef<"button">,
    "className" | "children"
  >;

export type ButtonProps = ButtonAsLink | ButtonAsButton;

export function Button(props: ButtonProps) {
  const { variant = "primary", size = "md", className, children, ...rest } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if ("href" in rest && rest.href !== undefined) {
    const { href, ...linkProps } = rest as Omit<ButtonAsLink, keyof CommonProps>;
    const external = /^(https?:|mailto:|tel:)/.test(href);
    return external ? (
      <a
        href={href}
        className={classes}
        {...(href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
      >
        {children}
      </a>
    ) : (
      <Link href={href} className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={classes}
      {...(rest as React.ComponentPropsWithoutRef<"button">)}
    >
      {children}
    </button>
  );
}
