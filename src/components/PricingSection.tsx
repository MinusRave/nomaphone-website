import * as React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, Zap, Package } from "lucide-react";

const subscriptionPlans = [
  {
    name: "Hobby",
    price: "€19.90",
    period: "/month",
    credits: "10 credits/month",
    pricePerCredit: "€1.99/credit",
    popular: false,
    features: [
      "Credits accumulate forever",
      "No expiration date",
      "Perfect for occasional creators",
      "Cancel anytime",
    ],
  },
  {
    name: "Pro",
    price: "€49.90",
    period: "/month",
    credits: "30 credits/month",
    pricePerCredit: "€1.66/credit",
    savings: "Save 17%",
    popular: true,
    features: [
      "Credits accumulate forever",
      "No expiration date",
      "Best for regular creators",
      "Priority support",
    ],
  },
  {
    name: "Business",
    price: "€99.90",
    period: "/month",
    credits: "75 credits/month",
    pricePerCredit: "€1.33/credit",
    savings: "Save 33%",
    popular: false,
    features: [
      "Credits accumulate forever",
      "No expiration date",
      "Perfect for power users",
      "Priority support",
    ],
  },
];

const oneTimePackages = [
  {
    amount: "€2.90",
    credits: "1 credit",
    pricePerCredit: "€2.90/credit",
    chapters: "Up to 5 chapters",
    popular: false,
    features: [
      "Perfect for trying out",
      "No expiration",
      "Pay once, use anytime",
    ],
  },
  {
    amount: "€4.90",
    credits: "2 credits",
    pricePerCredit: "€2.45/credit",
    savings: "15% off",
    chapters: "Up to 10 chapters",
    popular: false,
    features: [
      "Great for small projects",
      "No expiration",
      "Pay once, use anytime",
    ],
  },
  {
    amount: "€5.90",
    credits: "3 credits",
    pricePerCredit: "€1.97/credit",
    savings: "32% off",
    chapters: "Up to 20 chapters",
    popular: false,
    features: [
      "Ideal for complete books",
      "No expiration",
      "Pay once, use anytime",
    ],
  },
  {
    amount: "€19.90",
    credits: "10 credits",
    pricePerCredit: "€1.99/credit",
    savings: "31% off",
    chapters: "Multiple projects",
    popular: false,
    features: [
      "Best value for flexibility",
      "No expiration",
      "Pay once, use anytime",
    ],
  },
  {
    amount: "€39.90",
    credits: "25 credits",
    pricePerCredit: "€1.60/credit",
    savings: "45% off",
    chapters: "Multiple projects",
    popular: false,
    features: [
      "Great for series creators",
      "No expiration",
      "Pay once, use anytime",
    ],
  },
  {
    amount: "€69.90",
    credits: "50 credits",
    pricePerCredit: "€1.40/credit",
    savings: "52% off",
    chapters: "Multiple projects",
    popular: true,
    features: [
      "Maximum savings per credit",
      "No expiration",
      "Pay once, use anytime",
    ],
  },
];

export function PricingSection() {
  return (
    <section className="py-20 md:py-32" id="pricing">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Choose your <span className="text-primary">plan</span>
          </h2>
          <p className="text-lg text-muted-foreground md:text-xl">
            Monthly subscriptions or one-time purchases. All credits accumulate and never expire.
          </p>
        </div>

        {/* Pricing tabs */}
        <Tabs defaultValue="subscription" className="mx-auto max-w-6xl">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="subscription">
              <Zap className="mr-2 h-4 w-4" />
              Monthly Subscriptions
            </TabsTrigger>
            <TabsTrigger value="onetime">
              <Package className="mr-2 h-4 w-4" />
              One-Time Packs
            </TabsTrigger>
          </TabsList>

          {/* Monthly Subscriptions */}
          <TabsContent value="subscription" className="mt-10">
            <p className="text-center text-muted-foreground mb-10">
              Get credits every month. All credits accumulate with no limit and never expire.
            </p>
            <div className="grid gap-6 md:grid-cols-3">
              {subscriptionPlans.map((plan, index) => (
                <Card 
                  key={index}
                  className={`relative ${
                    plan.popular 
                      ? "border-primary shadow-xl ring-2 ring-primary" 
                      : "border-border"
                  }`}
                >
                  {plan.popular && (
                    <Badge 
                      className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary"
                    >
                      Most Popular
                    </Badge>
                  )}
                  
                  <CardHeader>
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <CardDescription>{plan.credits}</CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="mb-6">
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-bold">{plan.price}</span>
                        <span className="text-muted-foreground">{plan.period}</span>
                      </div>
                      <div className="mt-2 flex items-center gap-2 text-sm">
                        <span className="text-muted-foreground">{plan.pricePerCredit}</span>
                        {plan.savings && (
                          <span className="inline-flex items-center rounded-md bg-green-50 dark:bg-green-900/20 px-2 py-1 text-xs font-medium text-green-700 dark:text-green-400">
                            {plan.savings}
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  
                  <CardFooter>
                    <Button 
                      className="w-full" 
                      variant={plan.popular ? "default" : "outline"}
                    >
                      
                       <a href="https://dash.bookify.it/login">Subscribe</a>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* One-Time Purchases */}
          <TabsContent value="onetime" className="mt-10">
            <p className="text-center text-muted-foreground mb-10">
              Pay once, use anytime. Credits never expire and work alongside subscription credits.
            </p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {oneTimePackages.map((pkg, index) => (
                <Card 
                  key={index}
                  className={`relative ${
                    pkg.popular 
                      ? "border-primary shadow-xl ring-2 ring-primary" 
                      : "border-border"
                  }`}
                >
                  {pkg.popular && (
                    <Badge 
                      className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary"
                    >
                      Best Price
                    </Badge>
                  )}
                  
                  <CardHeader>
                    <CardTitle className="text-3xl">{pkg.amount}</CardTitle>
                    <CardDescription className="text-base">{pkg.credits}</CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="mb-4">
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-muted-foreground">{pkg.pricePerCredit}</span>
                        {pkg.savings && (
                          <span className="inline-flex items-center rounded-md bg-green-50 dark:bg-green-900/20 px-2 py-1 text-xs font-medium text-green-700 dark:text-green-400">
                            {pkg.savings}
                          </span>
                        )}
                      </div>
                      {pkg.chapters && (
                        <p className="mt-1 text-sm text-muted-foreground italic">{pkg.chapters}</p>
                      )}
                    </div>
                    
                    <ul className="space-y-3">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
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
                      
                      <a href="https://dash.bookify.it/login">Buy Now</a>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* FAQ Section */}
        <div className="mt-20 border-t border-border pt-16">
          <h3 className="text-xl font-semibold text-center mb-8">Frequently Asked Questions</h3>
          <div className="max-w-3xl mx-auto space-y-6 text-sm">
            <div>
              <p className="font-medium mb-2">Do credits ever expire?</p>
              <p className="text-muted-foreground">
                No! All credits, whether from subscriptions or one-time purchases, accumulate forever with no
                expiration date. Use them whenever you want.
              </p>
            </div>
            <div>
              <p className="font-medium mb-2">Can I buy one-time credits if I have a subscription?</p>
              <p className="text-muted-foreground">
                Absolutely! You can mix and match. All credits go into the same balance and accumulate together.
              </p>
            </div>
            <div>
              <p className="font-medium mb-2">What happens if I cancel my subscription?</p>
              <p className="text-muted-foreground">
                You keep all accumulated credits forever. They never expire, even after cancellation. You simply
                won't receive new monthly credits.
              </p>
            </div>
            <div>
              <p className="font-medium mb-2">How many chapters can I create per credit?</p>
              <p className="text-muted-foreground">
                1 credit = up to 5 chapters, 2 credits = up to 10 chapters, 3 credits = up to 20 chapters (full
                book).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}