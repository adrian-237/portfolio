import { Tag } from "@/components/portfolio/tag";
import { TimelineItem } from "@/components/portfolio/timeline-item";

const aboutTags = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "UI/UX",
  "Accessibility",
] as const;

const timeline = [
  {
    year: "2026",
    description:
      "Continuing to expand professional experience, focusing on advanced frontend development, while working with Next.js and NestJS to strengthen knowledge of application structure, data flow, and API development.",
  },
  {
    year: "2025",
    description:
      "Began studies at the Technical University of Moldova (UTM) while starting a freelance career, delivering modern web applications and client-focused solutions.",
  },
  {
    year: "2024",
    description:
      "Advanced frontend development skills with React though practical projects, while exploring modern tools and headless CMS platforms such as Payload CMS to build flexible, content-driven applications.",
  },
  {
    year: "2023",
    description:
      "Started learning frontend technologies, including HTML, CSS, JavaScript, building a strong foundation in web development.",
  },
  {
    year: "2021",
    description:
      "Enrolled at CEITI College in Chișinău, Moldova, beginning formal education in IT and software development.",
  },
] as const;

export default function AboutPage() {
  return (
    <section className="py-12 relative">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 md:mb-8 underline decoration-primary decoration-2 underline-offset-8">
            Who Am I
          </h2>
          <p className="text-muted-foreground max-w-6xl mx-auto leading-relaxed">
            My name is Boronciuc Adrian. <br /> I&apos;m a frontend developer
            passionate about building clean, interactive, and user-focuobased
            web experiences. I enjoy turning ideas into visually appealing and
            functional interfaces using modern technologies. With a focus on
            unique design and smooth user experience, I constantly explore new
            tools and trends to improve my skills.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {aboutTags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>

        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-foreground underline decoration-amber-500 decoration-2 underline-offset-8">
            Timeline
          </h3>
        </div>

        <div className="space-y-5 max-w-6xl mx-auto">
          {timeline.map((item) => (
            <TimelineItem
              key={item.year}
              year={item.year}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
