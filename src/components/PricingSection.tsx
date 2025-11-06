import * as React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, Sparkles } from "lucide-react";

const payPerUsePackages = [
  {
    amount: "$10",
    credits: "1000 credits",
    popular: false,
    features: [
      "~1000 minutes to US/EU",
      "No expiration",
      "Instant top-up",
      "Email support",
    ],
  },
  {
    amount: "$25",
    credits: "2500 credits",
    popular: true,
    features: [
      "~2500 minutes to US/EU",
      "No expiration",
      "Priority support",
      "SMS included",
    ],
  },
  {
    amount: "$50",
    credits: "5500 credits",
    popular: false,
    features: [
      "~5500 minutes to US/EU",
      "10% bonus credits",
      "Priority support",
      "SMS included",
    ],
  },
];

const subscriptionPlan = {
  name: "Nomad Plus",
  price: "$9.99",
  period: "/month",
  features: [
    "500 min/month included (US/EU/UK)",
    "50% off additional minutes",
    "1 virtual number included",
    "100 SMS/month included",
    "Call recording",
    "AI transcription",
    "Priority support",
    "Cancel anytime",
  ],
};

export function PricingSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-muted-foreground md:text-xl">
            Choose the plan that works for you. No hidden fees, no surprises.
          </p>
        </div>

        {/* Pricing tabs */}
        <Tabs defaultValue="payperuse" className="mx-auto max-w-6xl">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="payperuse">Pay per use</TabsTrigger>
            <TabsTrigger value="subscription">Monthly plan</TabsTrigger>
          </TabsList>

          {/* Pay per use */}
          <TabsContent value="payperuse" className="mt-10">
            <div className="grid gap-6 md:grid-cols-3">
              {payPerUsePackages.map((pkg, index) => (
                <Card 
                  key={index}
                  className={`relative ${
                    pkg.popular 
                      ? "border-blue-600 shadow-xl dark:border-blue-500" 
                      : "border-border"
                  }`}
                >
                  {pkg.popular && (
                    <Badge 
                      className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600"
                    >
                      <Sparkles className="mr-1 h-3 w-3" />
                      Most popular
                    </Badge>
                  )}
                  
                  <CardHeader>
                    <CardTitle className="text-4xl">{pkg.amount}</CardTitle>
                    <CardDescription className="text-lg">{pkg.credits}</CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <ul className="space-y-3">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  
                  <CardFooter>
                    <Button 
                      className="w-full" 
                      variant={pkg.popular ? "default" : "outline"}
                    >
                      Buy credits
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            
            <p className="mt-8 text-center text-sm text-muted-foreground">
              Average rates: US/EU/UK $0.01/min • Asia $0.02/min • LatAm $0.02/min • Africa $0.05/min
            </p>
          </TabsContent>

          {/* Subscription */}
          <TabsContent value="subscription" className="mt-10">
            <Card className="mx-auto max-w-lg border-2 border-blue-600 shadow-xl dark:border-blue-500">
              <CardHeader>
                <div className="flex items-baseline gap-1">
                  <CardTitle className="text-5xl">{subscriptionPlan.price}</CardTitle>
                  <span className="text-muted-foreground">{subscriptionPlan.period}</span>
                </div>
                <CardDescription className="text-lg">
                  {subscriptionPlan.name}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3">
                  {subscriptionPlan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter>
                <Button className="w-full" size="lg">
                  Start free trial
                </Button>
              </CardFooter>
            </Card>
            
            <p className="mt-8 text-center text-sm text-muted-foreground">
              14-day free trial • No credit card required • Cancel anytime
            </p>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
