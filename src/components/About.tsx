import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Trophy, Sparkles } from "lucide-react";
import aboutIllustration from "@/assets/about-illustration.jpg";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Users,
      title: "National-level Participation",
      description: "Students from top engineering colleges across India compete",
    },
    {
      icon: Trophy,
      title: "Top-tier Evaluation Panel",
      description: "Industry experts and professors judge your innovations",
    },
    {
      icon: Sparkles,
      title: "Exciting Prizes + Goodies",
      description: "Win cash prizes, certificates, and exclusive merchandise",
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-32 bg-background relative overflow-hidden">
      {/* Fog Effect */}
      <div className="absolute inset-0 bg-gradient-radial from-neon-red/5 via-transparent to-transparent opacity-30" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-cinzel text-4xl sm:text-5xl md:text-6xl font-bold text-neon-red mb-4">
            About the Event
          </h2>
          <div className="w-24 h-1 bg-neon-red mx-auto animate-glow-pulse" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden border-2 border-neon-red/30 hover-glow">
              <img
                src={aboutIllustration}
                alt="Stranger Things portal illustration"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-foreground text-lg leading-relaxed">
              <span className="text-neon-red font-semibold">Algoutsav 3.0</span> returns with a{" "}
              <span className="text-neon-red">Stranger Things</span> inspired theme — challenging
              students across India to engineer beyond the ordinary, confront unknown ideas, and
              solve real-world problems through innovation.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed">
              The hackathon is structured in two stages:
            </p>

            <div className="space-y-4 pl-6 border-l-2 border-neon-red/50">
              <div>
                <h4 className="text-neon-red font-semibold text-lg">Stage 1 (Online Submission)</h4>
                <p className="text-muted-foreground">
                  Submit your innovative ideas and prototypes from anywhere in India.
                </p>
              </div>
              <div>
                <h4 className="text-neon-red font-semibold text-lg">
                  Stage 2 (Offline 48-hour Finale)
                </h4>
                <p className="text-muted-foreground">
                  Selected teams compete at NIT Rourkela campus for the ultimate showdown.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Feature Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
              className="bg-card border border-neon-red/30 rounded-lg p-6 hover-glow transition-all group"
            >
              <div className="flex items-center justify-center w-14 h-14 bg-neon-red/10 rounded-lg mb-4 border border-neon-red/50 group-hover:animate-glow-pulse">
                <feature.icon className="text-neon-red" size={28} />
              </div>
              <h3 className="text-xl font-cinzel font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
