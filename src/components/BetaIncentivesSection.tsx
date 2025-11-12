import * as React from "react";
import { Star, Gift, Users, Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function BetaIncentivesSection() {
  const tiers = [
    {
      icon: Star,
      label: "First 50",
      badge: "Best Value",
      highlighted: true,
      benefits: [
        "$5 free credits when we launch",
        "+$5 bonus credits when you make your first $25+ purchase",
        "Early access - 7 days before public launch",
        "Founding member status",
      ],
      subtext: "Total $10 value - Get started free, earn more when you're ready",
    },
    {
      icon: Gift,
      label: "Next 150",
      badge: null,
      highlighted: false,
      benefits: [
        "$3 free credits when we launch",
        "+$2 bonus credits when you make your first $10+ purchase",
        "Early access - 3 days before public launch",
      ],
      subtext: "Total $5 value",
    },
    {
      icon: Users,
      label: "After 200",
      badge: null,
      highlighted: false,
      benefits: [
        "$3 free credits when we launch",
        "Early access - 1 day before public launch",
      ],
      subtext: "Still a great deal",
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Beta perks for early supporters
          </h2>
          <p className="text-lg text-muted-foreground md:text-xl">
            Join now and get more. Limited spots at each tier.
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

                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-3 inline-flex rounded-lg bg-[hsl(var(--secondary)/0.1)] p-3">
                    <Icon className="h-8 w-8 text-[hsl(var(--secondary))]" />
                  </div>
                  <CardTitle className="text-2xl">{tier.label}</CardTitle>
                </CardHeader>

                <CardContent>
                  {/* Benefits List */}
                  <div className="space-y-3 mb-4">
                    {tier.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-[hsl(var(--secondary))] shrink-0 mt-0.5" />
                        <span className="text-sm leading-relaxed">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* Subtext */}
                  <p className="text-xs text-muted-foreground text-center pt-4 border-t">
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