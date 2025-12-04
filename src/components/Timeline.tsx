import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Trophy, Rocket, Code2 } from "lucide-react";

const Timeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const events = [
    {
      date: "16th December",
      title: "Stage 1: Preliminary Round",
      description:
        "Teams of 2-3 members attempt to solve a curated set of algorithmic questions within a stipulated time frame.",
      icon: Rocket,
    },
    {
      date: "10th January",
      title: "Stage 2: ICPC Style Team Contest",
      description: "Selected teams will be invited to NIT Rourkela for an intense ICPC style contest.",
      icon: Trophy,
    },
    {
      date: "11th January",
      title: "Stage 2: Individual Contest",
      description: "Contestants participate individually and solve problems to showcase their personal skills.",
      icon: Code2,
    },
  ];

  return (
    <section
      id="timeline"
      className="py-20 sm:py-32 bg-gradient-to-b from-background via-background to-muted/20 relative"
      ref={containerRef}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-cinzel text-4xl sm:text-5xl md:text-6xl font-bold text-neon-red mb-4">
            Timeline
          </h2>
          <div className="w-24 h-1 bg-neon-red mx-auto animate-glow-pulse" />
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-muted-foreground/30 transform -translate-x-1/2" />

          {/* Animated Progress Line */}
          <motion.div
            className="absolute left-8 md:left-1/2 top-0 w-0.5 bg-neon-red transform -translate-x-1/2"
            style={{ height: lineHeight }}
          />

          {/* Timeline Events */}
          <div className="space-y-16 md:space-y-24">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-row`}
              >
                {/* Pointer Circle */}
                <motion.div
                  className="absolute left-6 md:left-[440px] w-4 h-4 bg-neon-red rounded-full border-4 border-background transform -translate-x-1/2 z-10"
                  whileInView={{ scale: [1, 1.3, 1], boxShadow: ["0 0 0px rgba(228, 28, 36, 0.5)", "0 0 20px rgba(228, 28, 36, 1)", "0 0 0px rgba(228, 28, 36, 0.5)"] }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                />

                {/* Content Card */}
                <div
                  className={`w-full md:w-5/12 ml-20 md:ml-0 ${
                    index % 2 === 0 ? "md:text-right" : ""
                  }`}
                >
                  <motion.div
                    className="bg-card border border-neon-red/30 rounded-lg p-6 hover-glow transition-all group relative overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                  >
                    {/* VHS Glitch Effect on Hover */}
                    <div className="absolute inset-0 vhs-effect opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div className="relative z-10">
                      <div
                        className={`flex items-center gap-3 mb-3 ${
                          index % 2 === 0 ? "md:justify-end" : "md:justify-start"
                        }`}
                      >
                        <event.icon className="text-neon-red group-hover:animate-flicker" size={24} />
                        <span className="text-neon-red font-cinzel text-xl font-semibold">
                          {event.date}
                        </span>
                      </div>
                      <h3 className="text-xl font-cinzel font-bold text-foreground mb-2 group-hover:text-neon-red transition-colors">
                        {event.title}
                      </h3>
                      <p className="text-muted-foreground">{event.description}</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
