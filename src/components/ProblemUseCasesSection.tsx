import * as React from "react";
import { Briefcase, Building, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function ProblemUseCasesSection() {
  const useCases = [
    {
      icon: Briefcase,
      headline: "Your bank says “call us now”",
      body:
        "You’re in Chiang Mai on a Thai eSIM. Bank of America texts: “Suspicious activity – call us immediately.” WhatsApp can’t call their toll-free number, roaming is $3/min, and you’ve got a client call in 20 minutes. You need a reliable way to dial them from your laptop, right now.",
    },
    {
      icon: Building,
      headline: "Government and offices don’t live on WhatsApp",
      body:
        "You’re abroad and need to call IRS, USCIS, HMRC or your property manager’s office landline. They only pick up on their local number, during business hours, and you’re tired of juggling calling cards, apps and random VoIP hacks that cut out mid-call.",
    },
    {
      icon: Users,
      headline: "Remote team, messy phone bills",
      body:
        "Your 5-person agency is spread across London, Lisbon and Warsaw. Everyone uses personal mobiles to call clients. No shared call history, no cost control, and your accountant wants detailed logs you can’t provide. You need one shared wallet and one place to make every business call.",
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            These are the calls WhatsApp can’t handle.
          </h2>
          <p className="text-lg text-muted-foreground md:text-xl">
            NomaPhone exists for the moments when you must call a real phone
            number from abroad and failure isn’t an option.
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
                  <p className="leading-relaxed text-muted-foreground">
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
