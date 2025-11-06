import * as React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does the credit system work?",
    answer:
      'Simple: 1 credit for eBooks up to 5 chapters, 2 credits for up to 10 chapters, 3 credits for up to 20 chapters. You only pay when you generate the final eBook — creating ideas and proposals is completely free.',
  },
  {
    question: "Can I edit and customize the generated content?",
    answer:
      "Absolutely! Unlike most AI tools that only give you PDFs, we provide fully editable DOCX and Markdown formats. Open in Microsoft Word, Google Docs, Notion, or any text editor. Add your branding, tweak sections, combine with your content — full ownership and control.",
  },
  {
    question: "Can I try different eBook structures before paying?",
    answer:
      'Yes! Create unlimited eBook ideas and get 3 AI-generated proposals for each — all free. You only use credits when you choose a proposal and click "Generate eBook". Experiment as much as you want.',
  },
  {
    question: "What formats can I download?",
    answer:
      "Every eBook can be downloaded in three formats: Markdown (instant, perfect for Notion/web), DOCX (fully editable in Word/Google Docs), and PDF (professional, print-ready). All formats include your metadata like author name, copyright, and subtitle.",
  },
  {
    question: "Is this for fiction books or novels?",
    answer:
      "No. Bookify is specifically designed for business and educational content: lead magnets, info products you can sell, course workbooks, training manuals, guides, and how-to eBooks. Not for creative fiction or novels.",
  },
  {
    question: "How long does generation take?",
    answer:
      "About 2 minutes per chapter. A 5-chapter eBook takes ~10 minutes, a 10-chapter eBook ~20 minutes. You can leave the page — generation continues in the background and you get notified when done.",
  },
  {
    question: "What if I run out of credits?",
    answer:
      "You can purchase more credits anytime from the pricing page. New users start with 1 free credit to try the platform. Credits never expire and can be used whenever you need them.",
  },
  {
    question: "What languages are supported?",
    answer:
      "Currently 10+ languages: English, Italian, Spanish, French, German, Portuguese, Dutch, Russian, Chinese (Simplified), and Japanese. The AI adapts writing style and content appropriately for each language.",
  },
  {
    question: "Can I sell the eBooks I create?",
    answer:
      "Yes! You have full commercial rights to all content generated. Use it as lead magnets, sell on Gumroad/Amazon, include in courses, or distribute to clients. The content is yours to use however you want.",
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
            Everything you need to know. Can’t find your answer?{" "}
            <a
              href="/contact"
              className="text-[hsl(var(--secondary))] underline hover:no-underline"
            >
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
