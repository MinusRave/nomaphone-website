import * as React from "react";
import { GraduationCap, Radio, Globe } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

export function SocialProofSection() {
  const credentials = [
    {
      icon: GraduationCap,
      text: "Telecom Engineer (MS, USA)",
    },
    {
      icon: Radio,
      text: "10+ years at global carrier",
    },
    {
      icon: Globe,
      text: "Built across 3 continents",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[hsl(var(--muted)/0.3)]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Built by nomads, for nomads
          </h2>
          <p className="text-lg text-muted-foreground md:text-xl">
            10+ years in telecom. A lifetime of calling home from abroad.
          </p>
        </div>

        {/* Founder Story */}
        <div className="mx-auto max-w-4xl">
          {/* Avatar */}
          <div className="mb-8 flex justify-center">
            <Avatar className="h-24 w-24 border-2 border-[hsl(var(--secondary))]">
              <AvatarFallback className="text-2xl font-bold bg-[hsl(var(--secondary)/0.1)] text-[hsl(var(--secondary))]">
                J
              </AvatarFallback>
            </Avatar>
          </div>

          {/* Story Copy */}
          <div className="prose prose-lg mx-auto max-w-3xl text-center dark:prose-invert">
            <p className="text-lg leading-relaxed text-muted-foreground">
              I'm from Italy. After getting my master's in telecommunications
              engineering in the US, I spent 10+ years working for a global
              carrier - traveling across Europe and Oceania, building the
              infrastructure that powers international calls.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground">
              But here's the irony: I couldn't find a simple solution for my own
              international calling needs.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground">
              My parents have friends and relatives scattered across the US and
              Latin America. For years, we all used Skype - it worked, barely.
              Then Skype shut down consumer calling. We switched to WhatsApp,
              which is great... until you need to call a landline. Or someone
              without a smartphone. Or your bank's customer service.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground">
              I watched my mom struggle to call her sister in Argentina. I paid
              $40 roaming charges to sort out a fraud alert while working from
              Lisbon. I saw the same frustration everywhere in the digital nomad
              community.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground">
              So I built NomaPhone. Browser-based, reliable, transparent. The
              solution I couldn't find anywhere else.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground">
              Ten years building telecom systems, five years building scalable
              web apps from remote locations - all leading to this. A calling
              service that actually works for people who live without borders.
            </p>

            {/* Signature */}
            <p className="mt-8 text-base font-semibold">
              — Giuseppe, Founder & Engineer
              <br />
              <span className="text-sm text-muted-foreground">
                Currently in Naples, Italy
              </span>
            </p>
          </div>

          {/* Credentials Cards */}
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {credentials.map((credential, index) => {
              const Icon = credential.icon;
              return (
                <Card key={index} className="border-2">
                  <CardContent className="flex flex-col items-center p-6 text-center">
                    <div className="mb-3 inline-flex rounded-lg bg-[hsl(var(--secondary)/0.1)] p-3">
                      <Icon className="h-6 w-6 text-[hsl(var(--secondary))]" />
                    </div>
                    <p className="text-sm font-medium">{credential.text}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Values/Promise Callout */}
          <Card className="mt-12 border-2 border-[hsl(var(--secondary)/0.3)] bg-[hsl(var(--secondary)/0.05)]">
            <CardContent className="p-8 text-center">
              <p className="text-lg leading-relaxed">
                <span className="font-semibold">My commitment:</span> Carrier-grade
                quality, nomad-friendly simplicity. No contracts, no hidden fees,
                no expiring credits. I build tools I'd want to use myself - and
                that my family actually does use.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}