import { cn } from "@/lib/utils";

type ContainerProps = React.ComponentPropsWithoutRef<"div"> & {
  /** "narrow" para textos editoriais, "wide" para o padrão do site. */
  size?: "narrow" | "wide";
};

export function Container({ size = "wide", className, ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-6 lg:px-10",
        size === "wide" ? "max-w-7xl" : "max-w-4xl",
        className,
      )}
      {...props}
    />
  );
}
