import * as React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Book,
  Sparkles,
  ShieldCheck,
  FileDown,
  Timer,
  LineChart,
} from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background brand-friendly */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--muted))] via-background to-[hsl(var(--secondary)/0.08)] dark:from-[hsl(var(--background))] dark:via-[hsl(var(--background))] dark:to-[hsl(var(--secondary)/0.12)]" />
        <div className="pointer-events-none absolute -inset-[20%] rounded-full bg-[radial-gradient(ellipse_at_top_left,hsl(var(--secondary)/0.18),transparent_55%)] dark:bg-[radial-gradient(ellipse_at_top_left,hsl(var(--secondary)/0.25),transparent_55%)]" />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <Badge variant="secondary" className="mb-6 px-4 py-2">
            <Sparkles className="mr-2 h-4 w-4" />
            Free proposal • Pay per manuscript
          </Badge>

          {/* Headline */}
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Create{" "}
            <span className="bg-[linear-gradient(to_right,hsl(var(--secondary-muted)),hsl(var(--secondary)))] bg-clip-text text-transparent">
              business-ready ebooks
            </span>{" "}
            with AI
          </h1>

          {/* Subheadline */}
          <p className="mb-10 text-lg text-muted-foreground md:text-xl lg:text-2xl">
            Lead magnets that convert, paid digital products you can sell, full
            course workbooks, and any non-fiction ebook. Generate unlimited
            proposals for free — pay only when you produce the manuscript.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="group w-full sm:w-auto"
              onClick={() => {
                const el = document.querySelector("#free-proposal");
                if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              Generate free proposal
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto"
              onClick={() => {
                const el = document.querySelector("#how-it-works");
                if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              How it works
            </Button>
          </div>

          {/* Trust / proof points */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <LineChart className="h-4 w-4 text-[hsl(var(--secondary))]" />
              <span>Lead magnets & playbooks</span>
            </div>
            <div className="flex items-center gap-2">
              <Book className="h-4 w-4 text-[hsl(var(--secondary))]" />
              <span>Course workbooks & guides</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-[hsl(var(--secondary))]" />
              <span>No subscription — pay per use</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-[hsl(var(--secondary))]" />
              <span>Claude-powered consistency</span>
            </div>
            <div className="flex items-center gap-2">
              <FileDown className="h-4 w-4 text-[hsl(var(--secondary))]" />
              <span>Export PDF / Docx / MD</span>
            </div>
            <div className="flex items-center gap-2">
              <Timer className="h-4 w-4 text-[hsl(var(--secondary))]" />
              <span>From idea to draft in minutes</span>
            </div>
          </div>
        </div>

        {/* Hero visual */}
        <div className="mx-auto mt-16 max-w-5xl">
          <div className="relative aspect-video overflow-hidden rounded-2xl border bg-gradient-to-br from-[hsl(var(--secondary)/0.15)] to-[hsl(var(--secondary)/0.05)] shadow-2xl">
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-[hsl(var(--border))]" />
            <div className="flex h-full items-center justify-center">
              <div className="text-center">
                <Book className="mx-auto h-24 w-24 text-[hsl(var(--secondary))] opacity-70" />
                <p className="mt-4 text-muted-foreground">
                  Example outline • “Marketing Funnel Lead Magnet”
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute -inset-8 rounded-3xl bg-[radial-gradient(ellipse_at_bottom,hsl(var(--secondary)/0.25),transparent_60%)]" />
          </div>
        </div>
      </div>
    </section>
  );
}
