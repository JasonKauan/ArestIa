import { cn } from "@/lib/utils";

type DemoBadgeProps = {
  className?: string;
};

export function DemoBadge({ className }: DemoBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-mist/60",
        className,
      )}
    >
      <span className="size-1.5 rounded-full bg-cyan" aria-hidden />
      Demo interativa
    </span>
  );
}
