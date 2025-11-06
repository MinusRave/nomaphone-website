import * as React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[hsl(var(--secondary))] to-yellow-400 px-8 py-16 text-center shadow-2xl md:px-16 md:py-24 dark:from-yellow-500 dark:to-yellow-300">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-grid-black/[0.05] dark:bg-grid-white/[0.05] [mask-image:radial-gradient(white,transparent_70%)]" />

          <div className="relative mx-auto max-w-3xl">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-black dark:text-gray-950 sm:text-4xl md:text-5xl">
              Ready to create your first eBook?
            </h2>
            <p className="mb-10 text-lg text-black/80 dark:text-gray-900/90 md:text-xl">
              Start from a free proposal and get{" "}
              <strong>1 free credit</strong> when you sign up.
              <br className="hidden sm:block" />
              No subscriptions, no limits — pay only when you generate.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                variant="secondary"
                className="group w-full bg-black text-yellow-400 hover:bg-black/90 sm:w-auto"
                asChild
              >
                <a href="/dashboard/create">
                  <Zap className="mr-2 h-5 w-5" />
                  Start free proposal
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="w-full border-2 border-black text-black hover:bg-black/10 sm:w-auto dark:border-gray-800 dark:text-gray-900 dark:hover:bg-gray-800/10"
                asChild
              >
                <a href="/pricing">View pricing</a>
              </Button>
            </div>

            <p className="mt-8 text-sm text-black/70 dark:text-gray-900/80">
              Free proposals • 1 free credit at signup • No subscription required
            </p>
          </div>

          {/* Floating glow accents */}
          <div className="absolute -left-4 top-10 h-24 w-24 rounded-full bg-white/20 blur-2xl" />
          <div className="absolute -right-4 bottom-10 h-32 w-32 rounded-full bg-white/20 blur-2xl" />
        </div>
      </div>
    </section>
  );
}
