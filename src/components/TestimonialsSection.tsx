import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Laura Bennett",
    role: "Growth Marketer",
    avatar: "LB",
    content:
      "We shipped a high-performing lead magnet in a day. The free proposals made it easy to compare structures, and editing in Google Docs via DOCX was seamless.",
    rating: 5,
  },
  {
    name: "Diego Morales",
    role: "Info Product Entrepreneur",
    avatar: "DM",
    content:
      "I turned my framework into a sellable ebook without spending weeks writing. Credit-based pricing is perfect—pay only when I’m ready to generate.",
    rating: 5,
  },
  {
    name: "Chloe Martin",
    role: "Course Creator",
    avatar: "CM",
    content:
      "The chapter-by-chapter engine kept everything consistent. I exported to Markdown for Notion and a clean PDF for distribution to students.",
    rating: 5,
  },
  {
    name: "Arjun Patel",
    role: "Agency Owner",
    avatar: "AP",
    content:
      "Smart proposals gave us three viable angles for a client’s lead magnet. We refined the outline, generated the manuscript, and branded it in Word.",
    rating: 5,
  },
  {
    name: "Marta Rossi",
    role: "Startup Founder",
    avatar: "MR",
    content:
      "Finally a focused tool for business ebooks, not generic AI blogs. Clear workflow, real editing with DOCX/MD, and a polished PDF for our launch.",
    rating: 5,
  },
  {
    name: "James O’Connor",
    role: "Coach & Consultant",
    avatar: "JO",
    content:
      "From outline to finished draft in one sitting. The ability to tweak structure first, then generate, saved me from endless rewrites.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-[hsl(var(--muted))] to-background dark:from-[hsl(var(--background))] dark:to-background">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Loved by{" "}
            <span className="bg-[linear-gradient(to_right,hsl(var(--secondary-muted)),hsl(var(--secondary)))] bg-clip-text text-transparent">
              creators and teams
            </span>
          </h2>
          <p className="text-lg text-muted-foreground md:text-xl">
            Marketers, educators, and digital entrepreneurs use Bookify to craft lead magnets, info products, and course material—fast.
          </p>
        </div>

        {/* Stats bar (keep generic on the landing; adjust if you have real numbers) */}
        <div className="mx-auto mb-16 grid max-w-4xl gap-8 text-center sm:grid-cols-3">
          <div>
            <div className="text-4xl font-bold text-[hsl(var(--secondary))]">4.8/5</div>
            <div className="mt-2 text-sm text-muted-foreground">Average rating</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-[hsl(var(--secondary))]">Thousands</div>
            <div className="mt-2 text-sm text-muted-foreground">Of proposals generated</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-[hsl(var(--secondary))]">10+ </div>
            <div className="mt-2 text-sm text-muted-foreground">Languages supported</div>
          </div>
        </div>

        {/* Testimonials grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, index) => (
            <Card
              key={index}
              className="border-2 transition-all hover:border-[hsl(var(--secondary)/0.35)] hover:shadow-lg"
            >
              <CardContent className="pt-6">
                {/* Rating stars */}
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 text-[hsl(var(--secondary))] fill-[hsl(var(--secondary))]"
                    />
                  ))}
                </div>

                {/* Testimonial content */}
                <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                  “{t.content}”
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <Avatar>
                    {/* If you have images, set <AvatarImage src="..."/> */}
                    <AvatarFallback className="bg-[hsl(var(--secondary)/0.15)] text-[hsl(var(--secondary))]">
                      {t.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-sm text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
