import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type Project = {
  title: string;
  description: string;
  stack: readonly string[];
  href: string;
};

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="rounded-xl border border-border bg-card p-5">
      <div className="flex items-start justify-between gap-4 mb-3">
        <h3 className="text-lg font-semibold text-foreground">
          {project.title}
        </h3>
        <Link
          href={project.href}
          className="text-primary hover:text-primary/80"
          aria-label={`Open ${project.title}`}
        >
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <span
            key={item}
            className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground"
          >
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}
