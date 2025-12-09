import * as React from "react";
import { Check } from "lucide-react";
import { WaitlistFormSection } from "./WaitlistFormSection";

export function FinalCTASection() {
  const benefits = [
    "Up to $10 in free calling credits",
    "Early access before public launch",
    "Founding member badge (first 100)",
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-[hsl(var(--secondary)/0.15)] to-[hsl(var(--secondary)/0.05)]">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          {/* Section Header */}
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            The call you can’t make today will cost you tomorrow.
          </h2>
          <p className="mb-8 text-lg text-muted-foreground md:text-xl">
            Banks, government offices, property managers and clients still rely
            on phone numbers. When you need to call one — you need a solution
            that works from anywhere.
          </p>

          {/* Benefits */}
          <div className="mx-auto mb-10 max-w-md">
            <p className="mb-4 text-lg font-semibold">Join the waitlist and get:</p>
            <div className="space-y-3 text-left">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-[hsl(var(--secondary))]" />
                  <span className="leading-relaxed">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form #3 - Embedded */}
          <WaitlistFormSection variant="final" />

          {/* Bottom Text */}
          <p className="mt-6 text-sm text-muted-foreground">
            Launching Q2 2026 • First 100 get lifetime beta perks and the highest bonus credits.
          </p>
        </div>
      </div>
    </section>
  );
}
