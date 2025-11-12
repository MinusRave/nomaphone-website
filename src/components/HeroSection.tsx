import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Globe,
  Smartphone,
  Zap,
  CheckCircle2,
} from "lucide-react";

export function HeroSection() {
  const [email, setEmail] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // TODO: Integrate with Brevo API
    console.log("Waitlist signup:", email);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setEmail("");
    alert("Thanks! You're on the waitlist 🎉");
  };

  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--muted))] via-background to-[hsl(var(--secondary)/0.08)] dark:from-[hsl(var(--background))] dark:via-[hsl(var(--background))] dark:to-[hsl(var(--secondary)/0.12)]" />
        <div className="pointer-events-none absolute -inset-[20%] rounded-full bg-[radial-gradient(ellipse_at_top_left,hsl(var(--secondary)/0.18),transparent_55%)] dark:bg-[radial-gradient(ellipse_at_top_left,hsl(var(--secondary)/0.25),transparent_55%)]" />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <Badge variant="secondary" className="mb-6 px-4 py-2">
            <Globe className="mr-2 h-4 w-4" />
            Launching Q1 2026 • Join Beta Waitlist
          </Badge>

          {/* H1 - SEO Optimized */}
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            International Calling for{" "}
            <span className="bg-[linear-gradient(to_right,hsl(var(--secondary-muted)),hsl(var(--secondary)))] bg-clip-text text-transparent">
              Digital Nomads
            </span>
          </h1>

          {/* Subheadline - Specific countries */}
          <p className="mb-10 text-lg text-muted-foreground md:text-xl lg:text-2xl">
            Call USA, UK, India landlines from Thailand, Bali, Mexico.
            <br className="hidden sm:inline" />
            Browser-based, no app, no roaming. Pay only what you use.
          </p>

          {/* Form #1 - Hero Inline */}
          <form onSubmit={handleSubmit} className="mx-auto mb-8 max-w-md">
            <div className="flex flex-col gap-3 sm:flex-row">
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1"
                disabled={isSubmitting}
              />
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="sm:w-auto"
              >
                {isSubmitting ? "Joining..." : "Join Beta Waitlist"}
              </Button>
            </div>
            <p className="mt-2 text-xs text-muted-foreground">
              First 50 get $5 free credits • No spam, unsubscribe anytime
            </p>
          </form>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4 text-[hsl(var(--secondary))]" />
              <span>210+ countries coverage</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-[hsl(var(--secondary))]" />
              <span>30 seconds to first call</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-[hsl(var(--secondary))]" />
              <span>No app required</span>
            </div>
            <div className="flex items-center gap-2">
              <Smartphone className="h-4 w-4 text-[hsl(var(--secondary))]" />
              <span>SMS + Virtual numbers</span>
            </div>
          </div>
        </div>

{/* Hero visual - Nomad context */}
<div className="mx-auto mt-16 max-w-5xl">
  <div className="relative overflow-hidden rounded-2xl shadow-2xl">
    {/* Glow effect behind */}
    <div className="pointer-events-none absolute -inset-8 rounded-3xl bg-[radial-gradient(ellipse_at_center,hsl(var(--secondary)/0.3),transparent_70%)]" />
    
    {/* Main container */}
    <div className="relative aspect-video overflow-hidden rounded-2xl border border-[hsl(var(--border))] bg-gradient-to-br from-[hsl(var(--muted))] to-[hsl(var(--background))]">
      {/* SVG Image */}
      <img 
        src="/nomaphone-mockup.svg" 
        alt="NomaPhone Dashboard Interface"
        className="h-full w-full object-cover"
      />
      
      {/* Inner ring for depth */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-[hsl(var(--border)/0.5)]" />
    </div>
  </div>
</div>


      </div>
    </section>
  );
}