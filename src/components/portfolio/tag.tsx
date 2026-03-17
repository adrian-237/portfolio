import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type TagProps = {
  children: ReactNode;
  className?: string;
};

export function Tag({ children, className }: TagProps) {
  return (
    <span
      className={cn(
        "px-3 py-1.5 rounded-full border border-border bg-secondary text-secondary-foreground text-sm font-medium",
        className,
      )}
    >
      {children}
    </span>
  );
}
