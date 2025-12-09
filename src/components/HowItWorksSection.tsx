import * as React from "react";
import { UserPlus, Wallet, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function HowItWorksSection() {
  const steps = [
    {
      icon: UserPlus,
      number: "1",
      headline: "Join the beta with your email",
      body:
        "No SIM required, no contract, no document upload. Create your NomaPhone account with just an email and you’re ready to go when we launch.",
    },
    {
      icon: Wallet,
      number: "2",
      headline: "Top up once, when you actually need it",
      body:
        "Add credits securely via Stripe. Your balance is available instantly and never expires, so you always have a way to call home, your bank or your clients.",
    },
    {
      icon: Phone,
      number: "3",
      headline: "Open your browser and call any number",
      body:
        "Type the number, see the per-minute rate, press call. From your laptop, tablet or phone. Perfect for those moments when WhatsApp isn’t an option and you just need a real line out.",
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            When you must call, it’s three simple steps.
          </h2>
          <p className="text-lg text-muted-foreground md:text-xl">
            No roaming setup, no calling cards, no random VoIP hacks. Just a
            browser, some credits and a working line to whoever you need to
            reach.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={index} className="relative border-2">
                <CardContent className="p-6">
                  {/* Step Number Badge */}
                  <div className="absolute -top-4 left-6">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[hsl(var(--secondary))] font-bold text-white">
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
                  <p className="leading-relaxed text-muted-foreground">
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
