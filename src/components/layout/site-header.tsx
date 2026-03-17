"use client";

import Link from "next/link";
import { Code2, Github, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function SiteHeader() {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-primary font-semibold text-lg"
          >
            <Code2 className="h-5 w-5" />
            {/* <span>Adrian</span> */}
          </Link>

          <div className="flex items-center gap-1">
            <Button asChild variant="ghost" size="icon" className="rounded-lg">
              <Link
                href="https://github.com/adrian-237/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </Link>
            </Button>
            <Button
              onClick={() => setTheme(isDark ? "light" : "dark")}
              variant="ghost"
              size="icon"
              className="rounded-lg"
              aria-label="Toggle theme"
            >
              <Sun className="hidden h-5 w-5 dark:block" />
              <Moon className="block h-5 w-5 dark:hidden" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
