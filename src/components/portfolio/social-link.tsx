import Link from "next/link";
import type { LucideIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

type SocialLinkProps = {
  href: string;
  icon: LucideIcon;
  label: string;
};

export function SocialLink({ href, icon: Icon, label }: SocialLinkProps) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");

  return (
    <Button
      asChild
      size="icon"
      variant="outline"
      className="size-11 rounded-full border-border/70 bg-background/70 backdrop-blur-sm"
    >
      <Link
        aria-label={label}
        href={href}
        prefetch={false}
        rel={isExternal ? "noreferrer" : undefined}
        target={isExternal ? "_blank" : undefined}
      >
        <Icon className="size-4.5" />
      </Link>
    </Button>
  );
}
