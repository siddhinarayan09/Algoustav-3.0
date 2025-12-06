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
    question: "What is AlgoUtsav?",
    answer:
      "AlgoUtsav is a national-level competitive programming event organised by the Algorithmic & Programming Society (APS) of NIT Rourkela. It follows an ICPC-style format and features both team and individual rounds."
  },
  {
    question: "Who can participate?",
    answer:
      "AlgoUtsav is open to students from all institutes across India—both undergraduate and postgraduate. Team participation is allowed only with students from the same institute."
  },
  {
    question: "What is the team size?",
    answer:
      "For the ICPC-style team contest, each team must have 2–3 members. The individual contest (if applicable) is attempted solo."
  },
  {
    question: "Can team members be from different colleges or different years?",
    answer:
      "All team members must belong to the same institute. Cross-college teams are not permitted. Students from different academic years within the same college can form a team without restrictions."
  },
  {
    question: "Is there any participation fee?",
    answer:
      "No. AlgoUtsav is completely free to participate in—there is no registration or participation fee."
  },
  {
    question: "What is the contest format and schedule?",
    answer:
      "The event consists of two stages:\n\n• Preliminary Round: Online, hosted on Codeforces. Team size: 2–3 members. Duration ~2.5 hours.\n\n• Final Round (Offline at NIT Rourkela): Shortlisted teams compete in an ICPC-style team contest on Day 1, followed by an individual contest on Day 2."
  },
  {
    question: "Will students be provided accommodation and food during the offline finals?",
    answer:
      "Yes. Accommodation will be provided by the organisers for all shortlisted teams. Further details will be shared closer to the final round."
  },
  {
    question: "Why should I participate in AlgoUtsav?",
    answer:
      "AlgoUtsav offers an opportunity to test and sharpen your competitive programming skills, compete with top coders from across India, experience an ICPC-style environment, and win exciting prizes, merchandise, and recognition."
  },
  {
    question: "What are the prizes?",
    answer:
      "Prize pool as listed on Unstop and in the Prizes section, along with exclusive AlgoUtsav merchandise, trophies and swags for top performers."
  },
  {
    question: "How can I register for AlgoUtsav?",
    answer:
      "Registrations are handled through the official Unstop event page. Teams must be formed prior to registration."
  }
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
            Contact us at algoutsav3.0nitrkl@gmail.com
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
