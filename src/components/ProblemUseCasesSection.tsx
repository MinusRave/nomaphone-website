import * as React from "react";
import { Briefcase, Building, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function ProblemUseCasesSection() {
  const useCases = [
    {
      icon: Briefcase,
      headline: "Your bank fraud alert can't wait",
      body: "You're in Chiang Mai working from a coworking space. Bank of America sends an SMS: 'Suspicious activity detected - call us immediately.' But international roaming costs $3/minute, and your client call is in 20 minutes. You need a solution now.",
    },
    {
      icon: Building,
      headline: "Property manager only has a landline",
      body: "You're in San Francisco, managing a rental property in Mumbai. Your property manager doesn't use WhatsApp - just an office landline that's only reachable during Indian business hours. That's 9 PM your time, after work, when you just want a quick, reliable call.",
    },
    {
      icon: Users,
      headline: "Team scattered, phone bills chaos",
      body: "Your 5-person agency has people in London, Warsaw, Lisbon, and Barcelona. Everyone uses personal phones for client calls. No tracking, no control, and your accountant is asking for detailed logs you don't have. You need one simple solution for the whole team.",
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Sounds familiar?
          </h2>
          <p className="text-lg text-muted-foreground md:text-xl">
            You're not alone. Here's what NomaPhone solves.
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <Card key={index} className="border-2">
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex rounded-lg bg-[hsl(var(--secondary)/0.1)] p-3">
                    <Icon className="h-6 w-6 text-[hsl(var(--secondary))]" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold">
                    {useCase.headline}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {useCase.body}
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