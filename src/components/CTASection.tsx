import * as React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 to-cyan-600 px-8 py-16 text-center shadow-2xl md:px-16 md:py-24">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-grid-white/[0.05] [mask-image:radial-gradient(white,transparent_70%)]" />
          
          <div className="relative mx-auto max-w-3xl">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Ready to start calling?
            </h2>
            <p className="mb-10 text-lg text-blue-50 md:text-xl">
              Join thousands of digital nomads and remote workers who save money on international calls every day.
              <br className="hidden sm:block" />
              No credit card required to start.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button 
                size="lg" 
                variant="secondary"
                className="group w-full bg-white text-blue-600 hover:bg-blue-50 sm:w-auto"
              >
                <Zap className="mr-2 h-5 w-5" />
                Get started free
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="w-full border-2 border-white text-white hover:bg-white/10 sm:w-auto"
              >
                View pricing
              </Button>
            </div>

            <p className="mt-8 text-sm text-blue-100">
              Start with $10 of free credits • No commitment • Cancel anytime
            </p>
          </div>

          {/* Floating elements decoration */}
          <div className="absolute -left-4 top-10 h-24 w-24 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -right-4 bottom-10 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
        </div>
      </div>
    </section>
  );
}
