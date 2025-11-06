import * as React from "react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";
import {
  Sparkles,
  BriefcaseBusiness,
  Lightbulb,
  FileEdit,
  Files,
  BookOpenText,
  CreditCard,
  BarChart3,
  Languages,
  ClipboardList,
} from "lucide-react";

type Feature = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
};

const FEATURES = {
  create: [
    {
      icon: Sparkles,
      title: "AI-crafted long-form",
      description:
        "Built on top of Claude, ensures structure, clarity, and consistency across every chapter.",
    },
    {
      icon: Lightbulb,
      title: "Smart proposals (free)",
      description:
        "Get three alternative outlines and refine titles, chapters, and depth before writing.",
    },
    {
      icon: Languages,
      title: "Multi-language",
      description:
        "Create in 10+ languages, including English, Italian, Spanish, French, and German.",
    },
  ] as Feature[],
  control: [
    {
      icon: BookOpenText,
      title: "Chapter-by-chapter engine",
      description:
        "Each section is written with full context from the previous ones—no generic filler.",
    },
    {
      icon: BarChart3,
      title: "Live writing progress",
      description:
        "See the manuscript unfold in real time, from outline to polished chapters.",
    },
    {
      icon: ClipboardList,
      title: "Professional metadata",
      description:
        "Author, subtitle, and copyright for clean publishing on your site or marketplaces.",
    },
  ] as Feature[],
  deliver: [
    {
      icon: FileEdit,
      title: "Fully editable exports",
      description:
        "Download DOCX and Markdown for real editing and branding in Word, Google Docs, or Notion.",
    },
    {
      icon: Files,
      title: "Distribution-ready PDF",
      description:
        "Share or sell a polished PDF version. Editable formats are DOCX & Markdown (no ePub).",
    },
    {
      icon: CreditCard,
      title: "Credit-based pricing",
      description:
        "1–3 credits per ebook depending on chapter count. No subscriptions, clear and fair.",
    },
  ] as Feature[],
};

function FeatureTile({ icon: Icon, title, description }: Feature) {
  return (
    <div className="group relative rounded-2xl border bg-background/60 p-5 transition-all hover:shadow-md">
      <div className="absolute inset-0 -z-10 opacity-0 transition-opacity group-hover:opacity-100 bg-[radial-gradient(80%_60%_at_50%_0%,hsl(var(--secondary)/0.12),transparent_60%)]" />
      <div className="mb-3 inline-flex rounded-xl bg-[hsl(var(--secondary)/0.12)] p-2.5 text-[hsl(var(--secondary))]">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mb-1.5 text-lg font-semibold">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}

export function FeaturesSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        {/* Section header (no hero repetition) */}
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <Badge variant="secondary" className="mb-4">
            Built for digital entrepreneurs
          </Badge>
          <h2 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Tools that turn ideas into assets
          </h2>
          <p className="text-lg text-muted-foreground md:text-xl">
            From lead magnets to full course workbooks—create, control, and
            deliver with a workflow that respects your brand and your time.
          </p>
        </div>

        {/* Two highlight stripes */}
        <div className="mb-8 grid gap-4 md:grid-cols-2">
          <div className="relative overflow-hidden rounded-2xl border p-5">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent,transparent,rgba(0,0,0,0.03))]" />
            <div className="mb-2 flex items-center gap-2">
              <div className="inline-flex rounded-lg bg-[hsl(var(--secondary)/0.15)] p-2 text-[hsl(var(--secondary))]">
                <BriefcaseBusiness className="h-5 w-5" />
              </div>
              <span className="text-sm font-medium">Business focus</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Designed for lead magnets, info products, and course workbooks—non-fiction that sells, not novels.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-2xl border p-5">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent,transparent,rgba(0,0,0,0.03))]" />
            <div className="mb-2 flex items-center gap-2">
              <div className="inline-flex rounded-lg bg-[hsl(var(--secondary)/0.15)] p-2 text[--var(--secondary)] text-[hsl(var(--secondary))]">
                <CreditCard className="h-5 w-5" />
              </div>
              <span className="text-sm font-medium">Simple pricing</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Free proposals forever. Pay only when you generate the manuscript—1–3 credits per ebook.
            </p>
          </div>
        </div>

        <Separator className="mb-10" />

        {/* Tabs: Create / Control / Deliver */}
        <Tabs defaultValue="create" className="mx-auto max-w-5xl">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="create">Create</TabsTrigger>
            <TabsTrigger value="control">Control</TabsTrigger>
            <TabsTrigger value="deliver">Deliver</TabsTrigger>
          </TabsList>

          <TabsContent value="create" className="mt-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {FEATURES.create.map((f, i) => (
                <FeatureTile key={`c-${i}`} {...f} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="control" className="mt-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {FEATURES.control.map((f, i) => (
                <FeatureTile key={`k-${i}`} {...f} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="deliver" className="mt-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {FEATURES.deliver.map((f, i) => (
                <FeatureTile key={`d-${i}`} {...f} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
