import * as React from "react";
import { UserPlus, Wallet, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function HowItWorksSection() {
  const steps = [
    {
      icon: UserPlus,
      number: "1",
      headline: "Sign up with email",
      body: "One click with Google or just your email. No phone verification, no proof of address, no waiting. You're in immediately.",
    },
    {
      icon: Wallet,
      number: "2",
      headline: "Add credits instantly",
      body: "Choose your package, pay with card via Stripe. Your credits appear immediately and never expire.",
    },
    {
      icon: Phone,
      number: "3",
      headline: "Open browser and call",
      body: "Type the number, see the rate, click call. Works on laptop, tablet, phone. Chrome, Safari, Firefox - anything with a browser. That's it.",
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            From idea to call in 10 seconds
          </h2>
          <p className="text-lg text-muted-foreground md:text-xl">
            No app, no verification, no complexity. Just works.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={index} className="border-2 relative">
                <CardContent className="p-6">
                  {/* Step Number Badge */}
                  <div className="absolute -top-4 left-6">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[hsl(var(--secondary))] text-white font-bold">
                      {step.number}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="mb-4 mt-4 inline-flex rounded-lg bg-[hsl(var(--secondary)/0.1)] p-3">
                    <Icon className="h-6 w-6 text-[hsl(var(--secondary))]" />
                  </div>

                  {/* Content */}
                  <h3 className="mb-3 text-xl font-semibold">
                    {step.headline}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.body}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}