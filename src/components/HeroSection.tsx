import * as React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Globe, Zap, Shield } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-background to-cyan-50 dark:from-blue-950/20 dark:via-background dark:to-cyan-950/20" />
      
      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <Badge variant="secondary" className="mb-6 px-4 py-2">
            <Zap className="mr-2 h-4 w-4" />
            No app required • Pay per use
          </Badge>

          {/* Headline */}
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Call anyone,{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              anywhere
            </span>
            <br />
            Right from your browser
          </h1>

          {/* Subheadline */}
          <p className="mb-10 text-lg text-muted-foreground md:text-xl lg:text-2xl">
            International calls made simple. No downloads, no contracts, no hassle.
            <br className="hidden sm:block" />
            Just open, dial, and connect.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="group w-full sm:w-auto">
              Start calling now
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              See pricing
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4 text-blue-600" />
              <span>150+ countries</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-blue-600" />
              <span>Encrypted calls</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-blue-600" />
              <span>Instant setup</span>
            </div>
          </div>
        </div>

        {/* Hero visual placeholder */}
        <div className="mx-auto mt-16 max-w-5xl">
          <div className="relative aspect-video overflow-hidden rounded-2xl border bg-gradient-to-br from-blue-100 to-cyan-100 shadow-2xl dark:from-blue-950 dark:to-cyan-950">
            {/* Qui puoi inserire uno screenshot o un elemento grafico */}
            <div className="flex h-full items-center justify-center">
              <div className="text-center">
                <Globe className="mx-auto h-24 w-24 text-blue-600 opacity-50" />
                <p className="mt-4 text-muted-foreground">App screenshot</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
