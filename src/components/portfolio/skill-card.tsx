import type { LucideIcon } from "lucide-react";

type SkillCardProps = {
  name: string;
  icon: LucideIcon;
};

export function SkillCard({ name, icon: Icon }: SkillCardProps) {
  return (
    <div className="rounded-xl border border-border bg-card p-4 text-center hover:bg-secondary transition-colors">
      <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-primary">
        <Icon className="h-5 w-5" />
      </div>
      <p className="text-sm font-medium text-foreground">{name}</p>
    </div>
  );
}
