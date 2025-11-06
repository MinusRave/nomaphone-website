import * as React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X } from "lucide-react";

/**
 * Comparison Table Component
 * 
 * Opzionale: Usa questa sezione per confrontare NomaPhone con i competitor.
 * Utile per conversion su pagine di pricing o features.
 */

interface ComparisonRow {
  feature: string;
  nomaphone: boolean | string;
  yadaphone: boolean | string;
  googlevoice: boolean | string;
  whatsapp: boolean | string;
}

const comparisonData: ComparisonRow[] = [
  {
    feature: "No app required",
    nomaphone: true,
    yadaphone: true,
    googlevoice: false,
    whatsapp: false,
  },
  {
    feature: "Call landlines",
    nomaphone: true,
    yadaphone: true,
    googlevoice: true,
    whatsapp: false,
  },
  {
    feature: "SMS & 2FA",
    nomaphone: true,
    yadaphone: false,
    googlevoice: "US only",
    whatsapp: true,
  },
  {
    feature: "No verification",
    nomaphone: true,
    yadaphone: true,
    googlevoice: false,
    whatsapp: false,
  },
  {
    feature: "Pay per use",
    nomaphone: true,
    yadaphone: true,
    googlevoice: true,
    whatsapp: "Free",
  },
  {
    feature: "Virtual numbers",
    nomaphone: "50+ countries",
    yadaphone: "Limited",
    googlevoice: "US only",
    whatsapp: false,
  },
  {
    feature: "Call recording",
    nomaphone: true,
    yadaphone: false,
    googlevoice: false,
    whatsapp: false,
  },
  {
    feature: "AI transcription",
    nomaphone: true,
    yadaphone: false,
    googlevoice: false,
    whatsapp: false,
  },
  {
    feature: "Team features",
    nomaphone: true,
    yadaphone: "Basic",
    googlevoice: "Workspace only",
    whatsapp: "Business",
  },
  {
    feature: "Price (USA)",
    nomaphone: "$0.01/min",
    yadaphone: "$0.02/min",
    googlevoice: "Free*",
    whatsapp: "Free*",
  },
];

const renderCell = (value: boolean | string) => {
  if (value === true) {
    return <Check className="mx-auto h-5 w-5 text-green-600" />;
  }
  if (value === false) {
    return <X className="mx-auto h-5 w-5 text-red-400" />;
  }
  return <span className="text-sm text-muted-foreground">{value}</span>;
};

export function ComparisonSection() {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <Badge variant="secondary" className="mb-4">
            Comparison
          </Badge>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Why choose{" "}
            <span className="text-blue-600">NomaPhone</span>?
          </h2>
          <p className="text-lg text-muted-foreground md:text-xl">
            See how we stack up against the competition. Hint: we win.
          </p>
        </div>

        {/* Comparison table */}
        <Card className="mx-auto max-w-6xl overflow-hidden">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b bg-muted/50">
                    <th className="p-4 text-left font-semibold">Feature</th>
                    <th className="p-4 text-center">
                      <div className="flex flex-col items-center gap-1">
                        <span className="font-bold text-blue-600">NomaPhone</span>
                        <Badge className="bg-blue-600">That's us! 🎉</Badge>
                      </div>
                    </th>
                    <th className="p-4 text-center font-semibold text-muted-foreground">
                      YadaPhone
                    </th>
                    <th className="p-4 text-center font-semibold text-muted-foreground">
                      Google Voice
                    </th>
                    <th className="p-4 text-center font-semibold text-muted-foreground">
                      WhatsApp
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr
                      key={index}
                      className={`border-b transition-colors hover:bg-muted/50 ${
                        index % 2 === 0 ? "bg-background" : "bg-muted/20"
                      }`}
                    >
                      <td className="p-4 font-medium">{row.feature}</td>
                      <td className="p-4 text-center bg-blue-50 dark:bg-blue-950/20">
                        {renderCell(row.nomaphone)}
                      </td>
                      <td className="p-4 text-center">{renderCell(row.yadaphone)}</td>
                      <td className="p-4 text-center">{renderCell(row.googlevoice)}</td>
                      <td className="p-4 text-center">{renderCell(row.whatsapp)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="border-t bg-muted/30 p-4 text-center text-sm text-muted-foreground">
              * WhatsApp/Google Voice are free for VoIP-to-VoIP only. Can't call regular phone numbers without internet on both ends.
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
