import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type DemoFrameProps = {
  title: ReactNode;
  children: ReactNode;
  aside?: ReactNode;
  className?: string;
};

export function DemoFrame({ title, children, aside, className }: DemoFrameProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-mist/10 bg-navy text-mist shadow-[0_30px_80px_-30px_rgb(1_12_34/0.55)]",
        className,
      )}
    >
      <div className="flex items-center justify-between gap-4 border-b border-mist/10 px-5 py-3.5">
        <div className="flex min-w-0 items-center gap-2 text-sm font-medium">{title}</div>
        {aside}
      </div>
      {children}
    </div>
  );
}
