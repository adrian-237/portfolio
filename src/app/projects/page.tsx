import { ExternalLink } from "lucide-react";
import Link from "next/link";

import { ProjectCard } from "@/components/portfolio/project-card";

const projects = [
  {
    title: "Expense Tracker",
    description:
      "A personal finance management platform built with React + TypeScript (frontend) and NestJS + PostgreSQL (backend) that lets users manage multiple wallets with multi-currency support, track income & expenses with customizable categories featuring spending limits (weekly, monthly, yearly), monitor subscriptions, automate salary deposits on set dates, and execute transfers between wallets with live currency conversion.",
    stack: ["React", "Nest.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    live: "https://expense.electrolit.biz/",
    source: "https://github.com/adrian-237/ExpenseTracker",
  },
  {
    title: "Personal Movie Library",
    description:
      "Movie Circle - A modern media discovery & collections app built with Next.js + TypeScript featuring route-based sections, reusable UI components, and theme support, where you can browse/discover movies & TV shows, build personal collections (watchlists, favorites, etc.), share collections with friends via controlled links, and manage your profile + auth while exploring detailed media info like cast, reviews, and similar titles.",
    stack: ["React", "shadcn/ui", "Next.js", "Tailwind CSS"],
    live: "https://movie-circle.vercel.app/",
    source: "https://github.com/adrian-237/movie-circle",
  },
  {
    title: "English School Dynamic Landing Page",
    description:
      "An English language school platform built with Next.js and TypeScript (frontend) and Payload CMS with PostgreSQL (headless backend). It features a fully dynamic landing page where admins can manage all content (sections, images, links, colors), courses (levels, types, pricing, promotions), and includes student applications, retakes, feedback forms, and CRM integration to capture and track all leads.",
    stack: ["React", "Payload CMS", "Tailwind CSS", "shadcn/ui"],
    live: "https://www.expertschool.md/",
  },
  {
    title: "Company Information Website",
    description:
      "A Next.js + TypeScript app with Payload CMS headless backend and PostgreSQL database featuring a multilingual (EN, RO, RU) website with a dynamic blog page integrated with backend for articles management, contact forms with email notifications via Nodemailer, and SEO optimization using Schema.org structured data. Built with shadcn components, Tailwind CSS, and next-intl for localization.",
    stack: ["React", "Payload CMS", "Tailwind CSS", "shadcn/ui"],
    live: "https://slavena.md/",
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
