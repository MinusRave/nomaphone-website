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
      headline: "Call from any browser, on any connection",
      body:
        "Coworking Wi-Fi, hotel network, airport lounge – if you can open a browser, you can place a call. No SIM, no roaming plan, no app store. Just log in and dial.",
    },
    {
      icon: Phone,
      headline: "Reach real phone numbers, not just apps",
      body:
        "Call landlines, toll-free numbers and mobiles in 210+ countries. Banks, government offices, property managers, call centers – all the places WhatsApp and FaceTime can’t reach.",
    },
    {
      icon: Hash,
      headline: "Keep a local number, wherever you are",
      body:
        "Get USA, UK, India or Mexico virtual numbers so people can call or text you like you’re still local. Perfect for banks, client callbacks and services that refuse to call foreign numbers.",
    },
    {
      icon: MessageSquare,
      headline: "Reliable SMS for OTP and 2FA",
      body:
        "Receive verification codes from banks and online services on your NomaPhone numbers. Keep access to your accounts while you travel, without fighting with your home SIM.",
    },
    {
      icon: Users,
      headline: "One calling hub for your whole team",
      body:
        "Shared wallet, shared contacts and full call history. Everyone calls from the company account, not their personal phones. Export logs for accounting in one click.",
    },
    {
      icon: Wallet,
      headline: "Simple pay-per-use, no commitments",
      body:
        "Buy credits once, use them whenever. Credits never expire and there are no monthly fees. Call twice a month or every day – you only pay for the minutes and messages you actually use.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[hsl(var(--muted)/0.3)]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            One tool for every “I need to call them now” moment.
          </h2>
          <p className="text-lg text-muted-foreground md:text-xl">
            From banks and government offices to clients and property
            managers, NomaPhone gives you a stable line out from anywhere in
            the world.
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
