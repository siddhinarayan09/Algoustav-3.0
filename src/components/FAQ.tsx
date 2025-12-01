import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const faqs = [
    {
      question: "What is Algoutsav 3.0?",
      answer:
        "Algoutsav 3.0 is NIT Rourkela's flagship national-level hackathon with a Stranger Things theme. It challenges students from across India to create innovative solutions across multiple technology domains through a two-stage competition format.",
    },
    {
      question: "Who can participate?",
      answer:
        "Algoutsav 3.0 is open to all undergraduate and postgraduate students from engineering colleges across India. Teams of 2-4 members can register and compete.",
    },
    {
      question: "What is the hackathon format?",
      answer:
        "The hackathon consists of two stages: Stage 1 is an online submission phase where teams submit their initial ideas and prototypes. Stage 2 is a 48-hour offline finale at NIT Rourkela campus for selected teams.",
    },
    {
      question: "Where is Stage 2 conducted?",
      answer:
        "Stage 2 (the offline finale) will be conducted at NIT Rourkela campus on 10th and 11th January. Selected teams will compete in person with mentorship, workshops, and networking opportunities.",
    },
    {
      question: "What is the registration fee?",
      answer:
        "Registration details and fee information will be updated on the Unstop platform. Please check the registration page for the most current information.",
    },
    {
      question: "What are the judging criteria?",
      answer:
        "Projects will be evaluated based on innovation, technical implementation, real-world impact, scalability, and presentation quality. A panel of industry experts and professors will assess submissions.",
    },
    {
      question: "What facilities will be provided during Stage 2?",
      answer:
        "During the offline finale, participants will receive accommodation, meals, 24/7 workspace access, mentorship from industry experts, high-speed internet, and hardware resources as needed.",
    },
  ];

  return (
    <section id="faq" className="py-20 sm:py-32 bg-background relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-neon-red/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-cinzel text-4xl sm:text-5xl md:text-6xl font-bold text-neon-red mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1 bg-neon-red mx-auto animate-glow-pulse mb-6" />
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Got questions? We've got answers
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border-2 border-neon-red/30 rounded-lg px-6 hover-glow transition-all overflow-hidden"
              >
                <AccordionTrigger className="text-left text-lg font-cinzel font-semibold text-foreground hover:text-neon-red transition-colors py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Additional Help */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <a
            href="mailto:algoutsav@nitrkl.ac.in"
            className="inline-block text-neon-red hover:underline font-semibold"
          >
            Contact us at algoutsav@nitrkl.ac.in
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
