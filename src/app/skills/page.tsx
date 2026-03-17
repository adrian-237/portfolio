import { Braces, Code, Figma, Globe, Layers, Palette, Zap } from "lucide-react";

import { SkillCard } from "@/components/portfolio/skill-card";

const skills = [
  { name: "React", icon: Layers },
  { name: "Next.js", icon: Globe },
  { name: "Tailwind CSS", icon: Palette },
  { name: "shadcn/ui", icon: Braces },
  { name: "Bootstrap", icon: Palette },
  { name: "TypeScript", icon: Code },
  { name: "Figma", icon: Figma },
  { name: "Payload CMS", icon: Zap },
] as const;

export default function SkillsPage() {
  return (
    <section className="py-12 relative">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 underline decoration-primary decoration-2 underline-offset-8">
            My Skills
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Technologies, tools & languages I work with.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <SkillCard key={skill.name} name={skill.name} icon={skill.icon} />
          ))}
        </div>
      </div>
    </section>
  );
}
