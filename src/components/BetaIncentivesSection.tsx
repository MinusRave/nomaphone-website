import * as React from "react";
import { Star, Gift, Users, Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function BetaIncentivesSection() {
  const tiers = [
    {
      icon: Star,
      label: "First 100",
      badge: "Best value",
      highlighted: true,
      benefits: [
        "$10 free calling credits at launch",
        "Locked-in beta pricing for life",
        "Priority access to new countries & features",
        "Founding member badge in your account",
      ],
      subtext:
        "Perfect if you know you’ll need to call banks, offices or clients from abroad in the next months.",
    },
    {
      icon: Gift,
      label: "Next 300",
      badge: null,
      highlighted: false,
      benefits: [
        "$5 free calling credits at launch",
        "Early access – 3 days before public launch",
        "Access to our private feedback channel",
      ],
      subtext: "Great if you’re curious and want to try NomaPhone with real calls.",
    },
    {
      icon: Users,
      label: "After 400",
      badge: null,
      highlighted: false,
      benefits: [
        "$3 free calling credits at launch",
        "Early access – 1 day before public launch",
      ],
      subtext: "Still better than waiting for the public launch with no bonus credits.",
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Extra credits for early callers.
          </h2>
          <p className="text-lg text-muted-foreground md:text-xl">
            Join the beta waitlist now and we'll give you free credits to make
            your first calls when NomaPhone goes live.
          </p>
        </div>

        {/* Tiers Grid */}
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          {tiers.map((tier, index) => {
            const Icon = tier.icon;
            return (
              <Card
                key={index}
                className={
                  tier.highlighted
                    ? "relative border-2 border-[hsl(var(--secondary))] shadow-lg scale-105 md:scale-110"
                    : "border-2"
                }
              >
                {/* Badge */}
                {tier.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-[hsl(var(--secondary))] text-white px-4 py-1">
                      {tier.badge}
                    </Badge>
                  </div>
                )}

                <CardHeader className="pb-4 text-center">
                  <div className="mx-auto mb-3 inline-flex rounded-lg bg-[hsl(var(--secondary)/0.1)] p-3">
                    <Icon className="h-8 w-8 text-[hsl(var(--secondary))]" />
                  </div>
                  <CardTitle className="text-2xl">{tier.label}</CardTitle>
                </CardHeader>

                <CardContent>
                  {/* Benefits List */}
                  <div className="mb-4 space-y-3">
                    {tier.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-start gap-2">
                        <Check className="mt-0.5 h-5 w-5 shrink-0 text-[hsl(var(--secondary))]" />
                        <span className="text-sm leading-relaxed">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* Subtext */}
                  <p className="border-t pt-4 text-center text-xs text-muted-foreground">
                    {tier.subtext}
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
