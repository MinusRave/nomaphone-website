import * as React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How is this different from WhatsApp or Skype?",
    answer: "WhatsApp and similar apps only work when both people have the app and internet. NomaPhone lets you call ANY phone number in the world - including landlines, businesses, and people without smartphones. Plus, no app installation required.",
  },
  {
    question: "Do I need to verify my phone number?",
    answer: "Nope! Unlike services like Google Voice, there's no verification needed. Just add credits and start calling immediately. Perfect for digital nomads who change numbers frequently.",
  },
  {
    question: "What countries can I call?",
    answer: "You can call 150+ countries worldwide, including mobile phones, landlines, and toll-free numbers. Major destinations like US, UK, EU, India, Mexico start from just $0.01/min.",
  },
  {
    question: "Do my credits expire?",
    answer: "Never. Your credits stay in your account forever. No time pressure, no monthly fees. Use them whenever you need.",
  },
  {
    question: "Can I receive calls and SMS?",
    answer: "Yes! You can purchase virtual numbers in 50+ countries to receive calls and SMS. Great for 2FA verification and staying reachable. Virtual numbers start at $2.99/month.",
  },
  {
    question: "Is the call quality good?",
    answer: "We use HD voice technology with automatic quality adjustment based on your connection. If you experience a poor quality call, we'll refund those minutes - guaranteed.",
  },
  {
    question: "How do you handle my data and privacy?",
    answer: "All calls are end-to-end encrypted. We don't sell your data, and we're not an ad company. Your conversations are private. We're GDPR compliant and take security seriously.",
  },
  {
    question: "Can I use this for my business?",
    answer: "Absolutely! We offer team accounts with shared wallets, analytics, call recording, and CRM integrations. Much more affordable than traditional business VoIP systems.",
  },
];

export function FAQSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Frequently asked questions
          </h2>
          <p className="text-lg text-muted-foreground md:text-xl">
            Everything you need to know. Can't find your answer?{" "}
            <a href="/contact" className="text-blue-600 underline hover:no-underline">
              Contact us
            </a>
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
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
