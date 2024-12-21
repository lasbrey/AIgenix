"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does the AI content generation work?",
    answer: "Our AI analyzes your audience, past performance, and industry trends to generate engaging content suggestions tailored to your brand voice and goals."
  },
  {
    question: "Can I schedule posts for multiple platforms?",
    answer: "Yes! You can schedule and manage content across all major social media platforms including Twitter, Instagram, LinkedIn, and Facebook."
  },
  {
    question: "What kind of analytics do you provide?",
    answer: "We provide comprehensive analytics including engagement rates, audience growth, best posting times, content performance, and audience demographics."
  },
  {
    question: "Is there a free trial available?",
    answer: "Yes, we offer a 14-day free trial with full access to all features, no credit card required."
  }
];

export function FaqSection() {
  return (
    <section className="py-20">
      <div className="container px-4 mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground">Find answers to common questions about our platform</p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}