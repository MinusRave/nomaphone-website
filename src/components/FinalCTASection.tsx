import * as React from "react";
import { Check } from "lucide-react";
import { WaitlistFormSection } from "./WaitlistFormSection";

export function FinalCTASection() {
  const benefits = [
    "Up to $10 in credits (depending on when you join)",
    "Early access before public launch",
    "Founding member status (first 50)",
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-[hsl(var(--secondary)/0.15)] to-[hsl(var(--secondary)/0.05)]">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          {/* Section Header */}
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Ready to call from anywhere?
          </h2>
          <p className="mb-8 text-lg text-muted-foreground md:text-xl">
            Join the waitlist. Get early access and bonus credits.
          </p>

          {/* Benefits */}
          <div className="mx-auto mb-10 max-w-md">
            <p className="mb-4 text-lg font-semibold">Join the waitlist and get:</p>
            <div className="space-y-3 text-left">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-[hsl(var(--secondary))] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form #3 - Embedded */}
          <WaitlistFormSection variant="final" />

          {/* Bottom Text */}
          <p className="mt-6 text-sm text-muted-foreground">
            Launching Q1 2026. First 50 get the best perks. Don't miss out.
          </p>
        </div>
      </div>
    </section>
  );
}