import Link from "next/link";
import type { LucideIcon } from "lucide-react";

type SocialLinkCardProps = {
  href: string;
  icon: LucideIcon;
  label: string;
  description: string;
};

export function SocialLinkCard({
  href,
  icon: Icon,
  label,
  description,
}: SocialLinkCardProps) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");

  return (
    <Link
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="flex items-center gap-4 rounded-xl border border-border bg-card px-4 py-3 transition-colors hover:bg-secondary"
    >
      <div className="rounded-lg bg-secondary p-2 text-primary">
        <Icon className="h-4 w-4" />
      </div>
      <div>
        <p className="text-sm font-semibold text-foreground">{label}</p>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </Link>
  );
}
