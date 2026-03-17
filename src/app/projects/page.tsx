import { ExternalLink } from "lucide-react";
import Link from "next/link";

import { ProjectCard } from "@/components/portfolio/project-card";

const projects = [
  {
    title: "Portfolio Platform",
    description:
      "A modern portfolio with route-based sections, reusable components, and theme support.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    href: "#",
  },
  {
    title: "Design System Kit",
    description:
      "Reusable UI building blocks for faster development and consistent product experiences.",
    stack: ["React", "shadcn/ui", "Storybook"],
    href: "#",
  },
  {
    title: "Data Dashboard",
    description:
      "Responsive analytics dashboard focused on clear hierarchy and smooth interactions.",
    stack: ["Next.js", "Charts", "Tailwind CSS"],
    href: "#",
  },
  {
    title: "Landing Experience",
    description:
      "Conversion-focused landing page with animations and polished responsive layouts.",
    stack: ["React", "Framer Motion", "CSS"],
    href: "#",
  },
] as const;

export default function ProjectsPage() {
  return (
    <section className="py-12 relative">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px flex-1 bg-border" />
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            projects
          </span>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-3">
            {"Things I've Built"}
          </h2>
          <p className="text-muted-foreground max-w-xl">
            Real-world projects focused on system design, scalability, and clean
            engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href={"https://github.com/adrian-237/"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            View all projects on GitHub
            <ExternalLink className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
