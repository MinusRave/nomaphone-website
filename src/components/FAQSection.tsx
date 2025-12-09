import * as React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQSection() {
  const faqs = [
    {
      question: "Will this work to call my bank or a government office?",
      answer:
        "Yes. NomaPhone is built exactly for these calls. You can dial landlines, toll-free numbers and call center numbers in 210+ countries, including banks, tax offices and immigration hotlines. If they publish a phone number, you can call it from your browser.",
    },
    {
      question: "Do I need a local SIM card or phone number?",
      answer:
        "No. To place outbound calls you only need an internet connection and a browser. A virtual number is only required if you also want to receive calls or SMS, for example for banking 2FA or callbacks.",
    },
    {
      question: "Can I use NomaPhone for OTP and 2FA SMS?",
      answer:
        "Yes. If you purchase a virtual number (for example a US or UK local number), you can receive SMS with verification codes from most banks and online services. While we can’t legally guarantee delivery for 100% of providers, NomaPhone is designed with OTP/2FA use cases in mind.",
    },
    {
      question: "How good is the call quality?",
      answer:
        "We route calls through carrier-grade providers, the same type of infrastructure used by many contact centers and SaaS telephony tools. In practice, if your internet connection is stable, you can expect clear audio and reliable connections comparable to a regular VoIP call.",
    },
    {
      question: "Is this cheaper than roaming or traditional calling?",
      answer:
        "In most cases, yes. International roaming can easily cost $2–5/min plus monthly add-ons. With NomaPhone, US/Canada and UK landlines start at $0.03/min, India around $0.08–0.09/min and Mexico landlines at $0.03/min. A 20-minute call to the US is around $0.60 instead of $40–100 in roaming charges.",
    },
    {
      question: "How much does it cost to call [country]?",
      answer:
        "Example rates: USA/Canada $0.03/min, UK landline $0.03/min, UK mobile $0.06/min, India $0.08–0.09/min, Mexico (landline) $0.03/min, Thailand $0.19/min. Full, transparent rate tables for 210+ destinations will be available after signup.",
    },
    {
      question: "Do credits expire or require a monthly subscription?",
      answer:
        "Credits never expire. You top up once, and use your balance whenever you need to call – next week or next year. There are no mandatory monthly fees or contracts. You only pay for the minutes and messages you actually use.",
    },
    {
      question: "Can my team share one account and budget?",
      answer:
        "Yes. You can create a team workspace with a shared wallet, shared contacts and detailed call logs. Team members place calls from the company balance instead of their personal phones. Call history can be exported as CSV for accounting and reporting.",
    },
    {
      question: "Is NomaPhone available worldwide?",
      answer:
        "You can use NomaPhone from almost anywhere you have a stable internet connection, subject to local regulations on VoIP. If you can open a browser and access our site, you can place calls. Some virtual number options may be restricted based on country.",
    },
    {
      question: "When does NomaPhone launch?",
      answer:
        "We’re aiming for a Q2 2026 beta launch. Joining the waitlist now gives you early access plus bonus credits. The earliest supporters get the highest free credit amounts and founding member perks.",
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Questions? We've got answers.
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="mx-auto max-w-3xl">
          <Accordion
            type="multiple"
            defaultValue={["item-0", "item-1", "item-2"]}
            className="w-full"
          >
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
