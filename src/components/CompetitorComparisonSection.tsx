import * as React from "react";
import { Smartphone, Globe, CreditCard, ShieldCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function CompetitorComparisonSection() {
  const comparisons = [
    {
      icon: Smartphone,
      headline: "No app required",
      body: "Works in any browser on any device. No downloads, no updates, no 'sorry, not available for your OS.' Just open a tab and call. Your laptop, your phone, your friend's computer - all work the same.",
    },
    {
      icon: Globe,
      headline: "Available worldwide",
      body: "Not just for US residents. NomaPhone works anywhere you are, calling anywhere you need. No verification hoops, no proof of US address, no geo-restrictions. Digital nomad in Bali? You're in.",
    },
    {
      icon: CreditCard,
      headline: "Pay only what you use",
      body: "No $15/month international add-ons that you barely use. No surprise bills. Buy credits once, use them over 6 months or 6 years - they never expire. Call twice a year or twice a day, same simple pricing.",
    },
    {
      icon: ShieldCheck,
      headline: "Quality you can trust",
      body: "When you're calling your bank about a fraud alert or your property manager about an emergency, you need it to work. Carrier-grade reliability, not the cheapest-possible VoIP. Some things are worth paying 3 cents per minute for.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[hsl(var(--muted)/0.3)]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Why NomaPhone?
          </h2>
          <p className="text-lg text-muted-foreground md:text-xl">
            We built what we couldn't find anywhere else.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          {comparisons.map((comparison, index) => {
            const Icon = comparison.icon;
            return (
              <Card key={index} className="border-2">
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex rounded-lg bg-[hsl(var(--secondary)/0.1)] p-3">
                    <Icon className="h-6 w-6 text-[hsl(var(--secondary))]" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold">
                    {comparison.headline}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {comparison.body}
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