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
      question: "Can I call landlines and mobile numbers?",
      answer:
        "Yes. NomaPhone calls any traditional phone number - landlines, mobile phones, office numbers, toll-free numbers. If it has a phone number, you can call it. Works in 210+ countries.",
    },
    {
      question: "Do I need to install an app?",
      answer:
        "No. NomaPhone works directly in your browser - Chrome, Safari, Firefox, Edge. Any device with a browser and internet works. No downloads, no updates, no installation required.",
    },
    {
      question: "Can I call USA numbers from Thailand?",
      answer:
        "Absolutely. NomaPhone works anywhere you have internet. Call USA from Thailand, UK from Bali, India from Portugal - any combination. No geo-restrictions, no verification hoops.",
    },
    {
      question: "How much does it cost to call [country]?",
      answer:
        "USA/Canada: $0.03/min. UK landline: $0.03/min. India: $0.08-0.09/min. Mexico: $0.03/min. Thailand: $0.19/min. See full rates for 210+ countries after signup. Credits never expire.",
    },
    {
      question: "Do credits expire?",
      answer:
        "Never. Buy credits once, use them whenever you want - next week or next year. No expiration, no monthly fees, no pressure. Your money, your timeline.",
    },
    {
      question: "What's better than Google Voice for non-US residents?",
      answer:
        "Google Voice only works for US residents with US phone numbers. NomaPhone works for anyone, anywhere. No verification, no proof of address, no geo-restrictions. Digital nomad in Bali? You're in.",
    },
    {
      question: "Can I receive calls and SMS?",
      answer:
        "Yes, with a virtual number. Purchase a USA, UK, or other local number ($1.90-4.09/month) and receive calls and SMS - perfect for banking 2FA, client callbacks, or keeping a home number while traveling.",
    },
    {
      question: "Is this cheaper than roaming?",
      answer:
        "Much cheaper. International roaming typically costs $2-5/minute plus $10-15/month add-ons. NomaPhone has no monthly fees, and rates start at $0.03/minute. A 20-minute call to USA costs you $0.60 instead of $40-100 in roaming charges.",
    },
    {
      question: "Can my team share credits?",
      answer:
        "Yes. Create a team account with shared wallet, team contacts, and detailed call logs. Everyone calls from the company budget. Perfect for remote teams spread across countries. Export CSV for accounting.",
    },
    {
      question: "When does NomaPhone launch?",
      answer:
        "Q1 2026. Join the waitlist now to secure early access and bonus credits. First 50 signups get the best perks - $10 total value plus founding member status.",
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
                <AccordionContent className="text-base text-muted-foreground leading-relaxed">
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