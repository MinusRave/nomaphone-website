import * as React from "react";
import { Star, Gift, Check, Lock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function BetaIncentivesSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            300 early adopters already claimed their credits.
          </h2>
          <p className="text-lg text-muted-foreground md:text-xl">
            The first 300 members got $10 in free calling credits — that tier is
            gone. Join now and we’ll match your first $5 top-up, dollar for
            dollar.
          </p>
        </div>

        {/* Tiers Grid */}
        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
          {/* Sold-out tier */}
          <Card className="relative border-2 opacity-60">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <Badge variant="secondary" className="px-4 py-1">
                <Lock className="mr-1 h-3 w-3" />
                Sold out
              </Badge>
            </div>

            <CardHeader className="pb-4 text-center">
              <div className="mx-auto mb-3 inline-flex rounded-lg bg-[hsl(var(--secondary)/0.1)] p-3">
                <Star className="h-8 w-8 text-[hsl(var(--secondary))]" />
              </div>
              <CardTitle className="text-2xl">First 300 members</CardTitle>
            </CardHeader>

            <CardContent>
              <div className="mb-4 space-y-3">
                {["$10 free calling credits at launch", "Early access before public launch", "Priority access to new features"].map((benefit, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
                    <span className="text-sm leading-relaxed line-through text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
              <p className="border-t pt-4 text-center text-xs text-muted-foreground">
                These spots have been claimed. Thanks, early supporters!
              </p>
            </CardContent>
          </Card>

          {/* Current tier */}
          <Card className="relative border-2 border-[hsl(var(--secondary))] shadow-lg scale-105 md:scale-110">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <Badge className="bg-[hsl(var(--secondary))] text-white px-4 py-1">
                Available now
              </Badge>
            </div>

            <CardHeader className="pb-4 text-center">
              <div className="mx-auto mb-3 inline-flex rounded-lg bg-[hsl(var(--secondary)/0.1)] p-3">
                <Gift className="h-8 w-8 text-[hsl(var(--secondary))]" />
              </div>
              <CardTitle className="text-2xl">New members</CardTitle>
            </CardHeader>

            <CardContent>
              <div className="mb-4 space-y-3">
                {["We’ll match your first $5 top-up — get $10 to call with", "Early access before public launch", "Access to our private feedback channel"].map((benefit, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-[hsl(var(--secondary))]" />
                    <span className="text-sm leading-relaxed">{benefit}</span>
                  </div>
                ))}
              </div>
              <p className="border-t pt-4 text-center text-xs text-muted-foreground">
                Top up $5 at launch and we’ll add another $5 on us.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
