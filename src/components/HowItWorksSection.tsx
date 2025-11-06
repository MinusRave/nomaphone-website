import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "1",
    title: "Open your browser",
    description: "No downloads needed. Works on any device with internet.",
  },
  {
    number: "2",
    title: "Add credits",
    description: "Quick checkout with card or crypto. Start with just $10.",
  },
  {
    number: "3",
    title: "Dial and connect",
    description: "Enter any international number and hit call. That's it.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background to-blue-50/30 dark:to-blue-950/10">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Start calling in{" "}
            <span className="text-blue-600">under 30 seconds</span>
          </h2>
          <p className="text-lg text-muted-foreground md:text-xl">
            No verification, no paperwork. Just three simple steps.
          </p>
        </div>

        {/* Steps */}
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step, index) => (
              <React.Fragment key={index}>
                <Card className="relative overflow-hidden border-2 transition-all hover:border-blue-200 hover:shadow-lg dark:hover:border-blue-800">
                  <CardContent className="pt-6">
                    {/* Step number */}
                    <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 text-2xl font-bold text-white shadow-lg">
                      {step.number}
                    </div>
                    
                    <h3 className="mb-3 text-2xl font-bold">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                  
                  {/* Background decoration */}
                  <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-blue-100 opacity-20 dark:bg-blue-900" />
                </Card>
                
                {/* Arrow between steps */}
                {index < steps.length - 1 && (
                  <div className="hidden items-center justify-center md:flex">
                    <ArrowRight className="h-8 w-8 text-blue-600" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
