import * as React from "react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { 
  Globe2, 
  CreditCard, 
  Smartphone, 
  Lock, 
  TrendingDown,
  Clock,
  MessageSquare,
  Headphones
} from "lucide-react";

const features = [
  {
    icon: Globe2,
    title: "No app required",
    description: "Works directly in your browser. No downloads, updates, or storage needed.",
  },
  {
    icon: CreditCard,
    title: "Pay per use",
    description: "Only pay for what you use. No subscriptions, no monthly fees, credits never expire.",
  },
  {
    icon: TrendingDown,
    title: "Unbeatable rates",
    description: "From $0.01/min to major destinations. Up to 90% cheaper than traditional carriers.",
  },
  {
    icon: Clock,
    title: "Instant setup",
    description: "Start calling in under 30 seconds. No verification, no paperwork, just dial.",
  },
  {
    icon: Lock,
    title: "Secure & private",
    description: "End-to-end encrypted calls. Your conversations stay between you and who you call.",
  },
  {
    icon: Smartphone,
    title: "Works everywhere",
    description: "Call any phone number worldwide - mobile, landline, even toll-free numbers.",
  },
  {
    icon: MessageSquare,
    title: "SMS & 2FA",
    description: "Send texts and receive verification codes. Perfect for banking and authentication.",
  },
  {
    icon: Headphones,
    title: "Crystal clear quality",
    description: "HD voice with automatic quality adjustment. Bad call? Get your minutes back.",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Everything you need,{" "}
            <span className="text-blue-600">nothing you don't</span>
          </h2>
          <p className="text-lg text-muted-foreground md:text-xl">
            Built for digital nomads, remote workers, and anyone who needs to stay connected globally.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index}
                className="group relative overflow-hidden border-2 transition-all hover:border-blue-200 hover:shadow-lg dark:hover:border-blue-800"
              >
                <CardHeader>
                  <div className="mb-4 inline-flex rounded-lg bg-blue-100 p-3 text-blue-600 dark:bg-blue-950 dark:text-blue-400">
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                
                {/* Hover effect */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 to-cyan-50 opacity-0 transition-opacity group-hover:opacity-100 dark:from-blue-950/50 dark:to-cyan-950/50" />
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
