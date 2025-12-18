import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does a website take?",
    answer: "Typically 2-4 weeks depending on complexity. We follow a structured process: Discovery (Week 1), Design (Week 2), Development (Week 3), and Launch (Week 4).",
  },
  {
    question: "Do you provide hosting?",
    answer: "Yes, we provide premium hosting via Vercel or AWS. This includes SSL certificates, CDN, and 99.9% uptime guarantee.",
  },
  {
    question: "What is the payment structure?",
    answer: "We require 50% upfront to begin the project, with the remaining 50% due upon completion before launch.",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="py-32 md:py-40">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-gradient-hero">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass rounded-xl px-6 border-white/[0.08]"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-primary transition-colors py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
