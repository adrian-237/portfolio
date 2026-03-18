"use client";

import { useState } from "react";
import { Github, Linkedin, Mail, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SocialLinkCard } from "@/components/portfolio/social-link-card";

const socialLinks = [
  {
    href: "mailto:boronciuc.adrian@gmail.com",
    icon: Mail,
    label: "Email",
    description: "boronciuc.adrian@gmail.com",
  },
  {
    href: "https://www.linkedin.com/in/adrian-boronciuc-434a3935b/",
    icon: Linkedin,
    label: "LinkedIn",
    description: "View LinkedIn profile",
  },
  {
    href: "https://github.com/adrian-237/",
    icon: Github,
    label: "GitHub",
    description: "View github profile",
  },
] as const;

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitState(null);

    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = (await response.json()) as {
        error?: string;
        success?: boolean;
      };

      if (!response.ok) {
        setSubmitState({
          type: "error",
          message: result.error ?? "Something went wrong. Please try again.",
        });
        return;
      }

      setSubmitState({
        type: "success",
        message: "Message sent successfully. I’ll get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch {
      setSubmitState({
        type: "error",
        message: "Unable to send message right now. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="py-12 relative">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px flex-1 bg-border" />
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            contact
          </span>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                {"Let's work "}
                <span className="text-muted-foreground">together</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Have an opportunity or project in mind? Send a quick message - I
                usually respond within 24 hours.
              </p>
            </div>

            <div className="space-y-3">
              {socialLinks.map((item) => (
                <SocialLinkCard
                  key={item.label}
                  href={item.href}
                  icon={item.icon}
                  label={item.label}
                  description={item.description}
                />
              ))}
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <Input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <Textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                required
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
              >
                <Send className="h-4 w-4" />
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
              {submitState ? (
                <p
                  className={
                    submitState.type === "success"
                      ? "text-sm text-primary"
                      : "text-sm text-destructive"
                  }
                >
                  {submitState.message}
                </p>
              ) : null}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
