import { ExternalLink, Github, Linkedin, Mail, MapPin } from "lucide-react";

import { SocialLink } from "@/components/portfolio/social-link";

const socialIcons = [
  { icon: Github, href: "https://github.com/adrian-237/", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Mail, href: "mailto:boronciuc.adrian@gmail.com", label: "Email" },
  { icon: ExternalLink, href: "#", label: "Portfolio" },
];

export default function Home() {
  return (
    <section className="min-h-[calc(100vh-10rem)] flex items-center justify-center relative">
      <div className="container px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2 leading-tight">
              <span className="text-foreground">{"Hey "}</span>
              <span className="text-3xl sm:text-4xl lg:text-5xl">{"👋"}</span>
              <span className="text-foreground">{", I'm "}</span>
              <span className="bg-linear-to-r from-blue-400 via-purple-500 to-blue-400 bg-clip-text text-transparent">
                Frontend
              </span>
              <br />
              <span className="bg-linear-to-r from-blue-400 via-purple-500 to-blue-400 bg-clip-text text-transparent">
                Developer
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-foreground font-medium mb-3">
              Frontend developer passionate about building clean, interactive,
              and user-focused web experiences.
            </p>

            <div className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground mb-6">
              <MapPin className="h-4 w-4 text-primary" />
              <span className="text-sm">Chișinău, Moldova</span>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-3">
              {socialIcons.map((item) => (
                <SocialLink
                  key={item.label}
                  href={item.href}
                  icon={item.icon}
                  label={item.label}
                />
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-full border-4 border-primary/60 overflow-hidden bg-linear-to-br from-primary/30 to-blue-600/20 flex items-center justify-center shadow-lg shadow-primary/20">
              <div className="text-6xl font-bold text-primary/80">FD</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
