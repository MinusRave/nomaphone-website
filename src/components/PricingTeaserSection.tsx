import * as React from "react";
import { Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function PricingTeaserSection() {
  const callingRates = [
    { country: "🇺🇸 USA / Canada", rate: "$0.03/min" },
    { country: "🇬🇧 UK Landline", rate: "$0.03/min" },
    { country: "🇬🇧 UK Mobile", rate: "$0.06/min" },
    { country: "🇮🇳 India", rate: "$0.08–0.09/min" },
    { country: "🇲🇽 Mexico (landline)", rate: "$0.03/min" },
    { country: "🇹🇭 Thailand", rate: "$0.19/min" },
  ];

  const creditPackages = [
    { amount: "$10", credits: "10 credits", bonus: false },
    { amount: "$25", credits: "25 credits", bonus: false },
    { amount: "$50", credits: "55 credits", bonus: true, bonusText: "10% bonus" },
    { amount: "$100", credits: "115 credits", bonus: true, bonusText: "15% bonus" },
  ];

  const virtualNumbers = [
    { country: "🇺🇸 USA Local", price: "$2.19/month" },
    { country: "🇬🇧 UK Local", price: "$1.90/month" },
    { country: "🇮🇳 India", price: "Coming soon", comingSoon: true },
    { country: "🇲🇽 Mexico", price: "Coming soon", comingSoon: true },
  ];

  const keyPoints = [
    "1 credit = $1 of calling & SMS balance",
    "Credits never expire",
    "No monthly subscriptions",
    "Use it when you actually need to call",
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Clear rates, no contracts, no surprises.
          </h2>
          <p className="text-lg text-muted-foreground md:text-xl">
            Know roughly what you’ll pay before you call your bank, your
            government office or your clients abroad.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          {/* Left: Calling Rates */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-2xl">
                Typical pay-per-minute rates
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {callingRates.map((rate, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between border-b pb-3 last:border-b-0 last:pb-0"
                  >
                    <span className="font-medium">
                      {rate.country}
                    </span>
                    <span className="text-lg font-semibold text-[hsl(var(--secondary))]">
                      {rate.rate}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm text-muted-foreground">
                Over 210 destinations supported. You’ll see full, transparent
                rates by country after signup — no hidden fees, ever.
              </p>
            </CardContent>
          </Card>

          {/* Right: Credit Packages */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-2xl">Top up once, use anytime</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-6 space-y-3">
                {creditPackages.map((pkg, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between border-b pb-3 last:border-b-0 last:pb-0"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-lg font-semibold">{pkg.amount}</span>
                      <span className="text-muted-foreground">{pkg.credits}</span>
                    </div>
                    {pkg.bonus && (
                      <Badge variant="secondary">{pkg.bonusText}</Badge>
                    )}
                  </div>
                ))}
              </div>

              {/* Key Points */}
              <div className="border-t pt-4 space-y-2">
                {keyPoints.map((point, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-[hsl(var(--secondary))]" />
                    <span className={index === 1 ? "font-semibold" : ""}>
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Virtual Numbers Section */}
        <div className="mx-auto mt-8 max-w-6xl">
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-2xl">Local numbers when you need a “home base”</CardTitle>
              <p className="text-muted-foreground">
                Keep a local presence for banks, clients and services that won’t
                call foreign numbers.
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {virtualNumbers.map((number, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between rounded-lg border p-4"
                  >
                    <span className="font-medium">{number.country}</span>
                    <span
                      className={
                        number.comingSoon
                          ? "text-sm text-muted-foreground"
                          : "font-semibold text-[hsl(var(--secondary))]"
                      }
                    >
                      {number.price}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
