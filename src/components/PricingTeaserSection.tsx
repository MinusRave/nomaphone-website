import * as React from "react";
import { Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function PricingTeaserSection() {
  const callingRates = [
    { country: "USA / Canada", flag: "🇺🇸", rate: "$0.03" },
    { country: "UK Landline", flag: "🇬🇧", rate: "$0.03" },
    { country: "UK Mobile", flag: "🇬🇧", rate: "$0.06" },
    { country: "India", flag: "🇮🇳", rate: "$0.08–0.09" },
    { country: "Mexico (landline)", flag: "🇲🇽", rate: "$0.03" },
    { country: "Thailand", flag: "🇹🇭", rate: "$0.19" },
  ];

  const creditPackages = [
    { amount: "$10", credits: "10 credits", bonus: false },
    { amount: "$25", credits: "25 credits", bonus: false },
    { amount: "$50", credits: "55 credits", bonus: true, bonusText: "+10%" },
    { amount: "$100", credits: "115 credits", bonus: true, bonusText: "+15%" },
  ];

  const virtualNumbers = [
    { country: "USA Local", flag: "🇺🇸", price: "$2.19/mo" },
    { country: "UK Local", flag: "🇬🇧", price: "$1.90/mo" },
    { country: "India", flag: "🇮🇳", price: "Coming soon", comingSoon: true },
    { country: "Mexico", flag: "🇲🇽", price: "Coming soon", comingSoon: true },
  ];

  const keyPoints = [
    "1 credit = $1 of calling & SMS balance",
    "Credits never expire",
    "No monthly subscriptions",
    "Use it when you actually need to call",
  ];

  return (
    <section className="py-[var(--space-16)] md:py-[var(--space-24)] bg-[var(--color-midnight)]">
      <div className="container mx-auto px-[var(--space-4)] max-w-[1200px]">
        {/* Section Header */}
        <div className="mx-auto mb-[var(--space-12)] max-w-3xl text-center">
          <h2 className="mb-[var(--space-4)] text-[length:var(--text-3xl)] font-bold tracking-[var(--tracking-tight)] sm:text-[length:var(--text-4xl)] md:text-[length:var(--text-5xl)] font-display text-[var(--color-text-primary)]">
            Clear rates, no contracts, no surprises.
          </h2>
          <p className="text-[length:var(--text-lg)] text-[var(--color-text-secondary)] font-body md:text-[length:var(--text-xl)]">
            Know roughly what you’ll pay before you call your bank, your
            government office or your clients abroad.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="mx-auto grid max-w-6xl gap-[var(--space-8)] md:grid-cols-2">
          {/* Left: Calling Rates */}
          <Card>
            <CardHeader>
              <CardTitle>
                Typical pay-per-minute rates
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col">
                {callingRates.map((rate, index) => (
                  <div key={index} className="rate-row">
                    <span className="rate-country">
                      <span className="rate-flag">{rate.flag}</span>
                      <span className="rate-name">{rate.country}</span>
                    </span>
                    <span className="rate-price">
                      {rate.rate}<span className="rate-unit">/min</span>
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-[var(--space-6)] text-[length:var(--text-sm)] text-[var(--color-text-muted)] font-body">
                Over 210 destinations supported. You’ll see full, transparent
                rates by country after signup — no hidden fees, ever.
              </p>
            </CardContent>
          </Card>

          {/* Right: Credit Packages */}
          <Card>
            <CardHeader>
              <CardTitle>Top up once, use anytime</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-[var(--space-6)] space-y-[var(--space-3)]">
                {creditPackages.map((pkg, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between border-b border-[var(--color-border)] pb-[var(--space-3)] last:border-b-0 last:pb-0"
                  >
                    <div className="flex items-center gap-[var(--space-3)]">
                      <span className="text-[length:var(--text-lg)] font-semibold font-mono text-[var(--color-text-primary)]">{pkg.amount}</span>
                      <span className="text-[var(--color-text-secondary)] font-body">{pkg.credits}</span>
                    </div>
                    {pkg.bonus && (
                      <Badge variant="secondary">{pkg.bonusText}</Badge>
                    )}
                  </div>
                ))}
              </div>

              {/* Key Points */}
              <div className="border-t border-[var(--color-border)] pt-[var(--space-4)] space-y-[var(--space-2)]">
                {keyPoints.map((point, index) => (
                  <div key={index} className="flex items-center gap-[var(--space-2)]">
                    <Check className="h-4 w-4 text-[var(--color-signal)]" />
                    <span className={`font-body text-[var(--color-text-primary)] ${index === 1 ? "font-semibold" : ""}`}>
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Virtual Numbers Section */}
        <div className="mx-auto mt-[var(--space-8)] max-w-6xl">
          <Card>
            <CardHeader>
              <CardTitle>Local numbers when you need a “home base”</CardTitle>
              <p className="text-[var(--color-text-secondary)] font-body mt-2">
                Keep a local presence for banks, clients and services that won’t
                call foreign numbers.
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid gap-[var(--space-4)] sm:grid-cols-2 lg:grid-cols-4">
                {virtualNumbers.map((number, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-[var(--space-4)]"
                  >
                    <span className="font-medium font-body flex items-center gap-2">
                      <span className="text-xl">{number.flag}</span>
                      <span className="text-[var(--color-text-primary)]">{number.country}</span>
                    </span>
                    <span
                      className={
                        number.comingSoon
                          ? "text-[length:var(--text-sm)] text-[var(--color-text-muted)] font-body"
                          : "font-semibold font-mono text-[var(--color-signal)]"
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