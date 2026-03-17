import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type Project = {
  title: string;
  description: string;
  stack: readonly string[];
  live?: string;
  source?: string;
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
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.stack.map((item) => (
          <span
            key={item}
            className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="flex gap-2">
        {project.live && (
          <Link
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md bg-primary text-primary-foreground text-xs font-medium hover:bg-primary/90 transition-colors"
          >
            Live Demo <ArrowUpRight className="h-3 w-3" />
          </Link>
        )}
        {project.source && (
          <Link
            href={project.source}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md border border-border text-xs font-medium hover:bg-muted transition-colors"
          >
            Source Code <ArrowUpRight className="h-3 w-3" />
          </Link>
        )}
      </div>
    </article>
  );
}
