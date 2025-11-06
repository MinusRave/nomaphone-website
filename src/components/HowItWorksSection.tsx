import * as React from "react";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  LineChart,
  Banknote,
  GraduationCap,
  BookOpen,
  Check,
} from "lucide-react";

/**
 * Landing-friendly "How it works"
 * Row 1: Intent tiles with direct links (FREE PROPOSAL start)
 * Row 2: 5-step visual so users know the journey at a glance
 * Links used exactly as requested:
 *  - /dashboard/create?intent=lead-magnet
 *  - /dashboard/create?intent=info-product
 *  - /dashboard/create?intent=course-material
 *  - /dashboard/create?intent=general-book
 * Rules: Editable = DOCX & Markdown. PDF for distribution. No ePub.
 */

const intents = [
  {
    id: "lead-magnet",
    href: "/dashboard/create?intent=lead-magnet",
    icon: LineChart,
    label: "Lead Magnet",
    badge: "Popular" as const,
    tagline: "Actionable, bite-sized content to convert traffic into leads.",
    bullets: [
      "Quick wins & practical tips",
      "Scannable bullet format",
      "Clear CTAs throughout",
      "Optimized for conversions",
    ],
    recommended: { chapters: 6, audience: "professionals" as const },
    cta: "Start free proposal",
  },
  {
    id: "info-product",
    href: "/dashboard/create?intent=info-product",
    icon: Banknote,
    label: "Digital Product",
    badge: "Recommended" as const,
    tagline: "Comprehensive guides to sell on marketplaces or your website.",
    bullets: [
      "Deep value & frameworks",
      "Professional structure",
      "Marketplace-ready output",
      "Complete implementation guides",
    ],
    recommended: { chapters: 12, audience: "professionals" as const },
    cta: "Start free proposal",
  },
  {
    id: "course-material",
    href: "/dashboard/create?intent=course-material",
    icon: GraduationCap,
    label: "Course Material",
    badge: null as const,
    tagline: "Educational content with learning objectives and exercises.",
    bullets: [
      "Pedagogical structure",
      "Objectives per chapter",
      "Exercises & assessments",
      "Progressive difficulty",
    ],
    recommended: { chapters: 15, audience: "students" as const },
    cta: "Start free proposal",
  },
  {
    id: "general-book",
    href: "/dashboard/create?intent=general-book",
    icon: BookOpen,
    label: "General Book",
    badge: null as const,
    tagline: "Flexible structure for custom topics and formats.",
    bullets: [
      "No preset optimization",
      "Maximum flexibility",
      "Customizable length",
      "Adaptable to any subject",
    ],
    recommended: { chapters: 10, audience: "general" as const },
    cta: "Start free proposal",
  },
] as const;

const steps = [
  {
    number: "1",
    title: "Pick your intent",
    description: "Choose Lead Magnet, Digital Product, Course Material, or General Book.",
    note: "We’ll optimize structure, tone, and pacing accordingly.",
  },
  {
    number: "2",
    title: "Add title & description",
    description: "Give a working title and a short brief about topic & audience.",
    note: "You can tweak details before writing.",
  },
  {
    number: "3",
    title: "Review 3 proposals",
    description: "Compare complete outlines and select your favorite.",
    note: "Proposals are free — no credits used.",
  },
  {
    number: "4",
    title: "Generate the manuscript",
    description: "Claude writes chapter-by-chapter with full context.",
    note: "1–3 credits per ebook depending on length. No subscription.",
  },
  {
    number: "5",
    title: "Export & finalize",
    description: "Download DOCX or Markdown to edit/brand, plus PDF for distribution.",
    note: "Editable formats: DOCX & Markdown. No ePub.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        {/* Section header — concise and action-oriented */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <Badge variant="secondary" className="mb-3">Step-by-step</Badge>
          <h2 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            How it works
          </h2>
          <p className="text-lg text-muted-foreground md:text-xl">
            Pick an outcome and start a free proposal. Then refine, generate, and export.
          </p>
        </div>

        {/* Row 1 — intent tiles with aligned content (badge absolute, CTA pinned) */}
        <div className="mx-auto mb-12 max-w-6xl grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {intents.map((item) => {
            const Icon = item.icon;
            return (
              <Card
                key={item.id}
                className="group relative overflow-hidden border-2 transition-all hover:scale-[1.02] hover:border-[hsl(var(--secondary)/0.45)] hover:shadow-lg"
              >
                {/* Badge moved out of flow for perfect alignment */}
                {item.badge && (
                  <div className="absolute right-3 top-3">
                    <Badge variant="secondary" className="pointer-events-none">
                      {item.badge}
                    </Badge>
                  </div>
                )}

                <CardContent className="flex h-full flex-col p-5">
                  {/* Icon + Title */}
                  <div className="mb-4 flex items-center gap-2">
                    <div className="inline-flex rounded-xl bg-[hsl(var(--secondary)/0.15)] p-2.5 text-[hsl(var(--secondary))]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-xl">{item.label}</CardTitle>
                  </div>

                  {/* Tagline */}
                  <CardDescription className="mb-3 text-base">
                    {item.tagline}
                  </CardDescription>

                  {/* Bullets */}
                  <ul className="mb-4 grid gap-1.5 text-sm">
                    {item.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-1 inline-flex h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(var(--secondary))]" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Meta: chapters / audience */}
                  <div className="mb-4 flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1 rounded-full border px-2 py-1">
                      <span className="font-medium">{item.recommended.chapters}</span> chapters
                    </span>
                    <span>•</span>
                    <span className="inline-flex items-center gap-1 rounded-full border px-2 py-1 capitalize">
                      {item.recommended.audience}
                    </span>
                  </div>

                  {/* CTA pinned to bottom for equal card heights */}
                  <Button asChild size="lg" className="mt-auto w-full group">
                    <a href={item.href}>
                      {item.cta}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </Button>
                </CardContent>

                {/* subtle spotlight */}
                <div className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity group-hover:opacity-100 bg-[radial-gradient(80%_60%_at_50%_0%,hsl(var(--secondary)/0.12),transparent_60%)]" />
              </Card>
            );
          })}
        </div>

        {/* Row 2 — 5-step visual */}
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-5">
            {steps.map((s, idx) => (
              <div key={s.number} className="relative">
                <Card className="h-full">
                  <CardContent className="p-5">
                    <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[hsl(var(--secondary)/0.18)] text-[hsl(var(--secondary))] text-sm font-bold">
                      {s.number}
                    </div>
                    <div className="mb-1.5 text-base font-semibold">{s.title}</div>
                    <div className="text-sm text-muted-foreground">{s.description}</div>
                    {s.note && (
                      <div className="mt-2 flex items-center gap-1 text-xs text-muted-foreground/80">
                        <Check className="h-3.5 w-3.5" />
                        {s.note}
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* arrow between cards (desktop) */}
                {idx < steps.length - 1 && (
                  <div className="pointer-events-none absolute right-[-12px] top-1/2 hidden -translate-y-1/2 md:block">
                    <ArrowRight className="h-5 w-5 text-[hsl(var(--secondary))]" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Safety net CTA under steps */}
          <div className="mt-8 text-center">
            <Button asChild size="lg" className="group">
              <a href="/dashboard/create">
                Start with a free proposal
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <p className="mt-3 text-sm text-muted-foreground">
              Free proposals. Pay only when you generate the manuscript (1–3 credits).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
