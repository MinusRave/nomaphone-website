import * as React from "react";
import {
  Globe,
  Phone,
  Hash,
  MessageSquare,
  Users,
  Wallet,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function SolutionFeaturesSection() {
  const features = [
    {
      icon: Globe,
      headline: "Call from any browser",
      body: "No app to download. Works on your laptop, tablet, or phone. Chrome, Safari, Firefox - if it has a browser, it works. Your office is everywhere, your calls should be too.",
    },
    {
      icon: Phone,
      headline: "Reach any number worldwide",
      body: "Call landlines and mobile numbers in 210+ countries. Banks, government offices, property managers, clients - anyone with a traditional phone number. WhatsApp not required on their end.",
    },
    {
      icon: Hash,
      headline: "Get a local number anywhere",
      body: "USA, UK, India, Mexico virtual numbers. Receive calls and SMS like a local. Perfect for banking 2FA, client callbacks, or keeping your home number while traveling.",
    },
    {
      icon: MessageSquare,
      headline: "Send and receive SMS",
      body: "Get verification codes from your bank. Receive 2FA messages. Send texts when calling isn't an option. Essential for managing accounts while traveling.",
    },
    {
      icon: Users,
      headline: "Built for remote teams",
      body: "Shared wallet, team contacts, detailed call logs. Everyone calls from the company budget. Export CSV for accounting. Roles and permissions included.",
    },
    {
      icon: Wallet,
      headline: "No contracts, no subscriptions",
      body: "Buy credits, use them whenever. Credits never expire. No monthly fees. No commitment. Call 2 times a month or 200 - pay only for what you actually use.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[hsl(var(--muted)/0.3)]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Everything you need. Nothing you don't.
          </h2>
          <p className="text-lg text-muted-foreground md:text-xl">
            Professional international calling built for people who work without
            borders.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="border-2">
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex rounded-lg bg-[hsl(var(--secondary)/0.1)] p-3">
                    <Icon className="h-6 w-6 text-[hsl(var(--secondary))]" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold">
                    {feature.headline}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.body}
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