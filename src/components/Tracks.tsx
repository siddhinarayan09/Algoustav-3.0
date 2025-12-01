import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Globe, Shield, Lightbulb } from "lucide-react";

const Tracks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const tracks = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      subtitle: "Mind Flayer Intelligence Systems",
      description:
        "Harness the power of artificial intelligence to create intelligent systems that learn, adapt, and predict.",
    },
    {
      icon: Globe,
      title: "Web & App Development",
      subtitle: "Portal Interface Engineering",
      description:
        "Build seamless digital experiences that connect users across dimensions with cutting-edge web and mobile solutions.",
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      subtitle: "Defense Against the Upside Down",
      description:
        "Protect the digital realm from threats and vulnerabilities with innovative security solutions.",
    },
    {
      icon: Lightbulb,
      title: "Open Innovation",
      subtitle: "Tear Down the Walls Between Worlds",
      description:
        "Think beyond boundaries. Create groundbreaking solutions that address real-world challenges in any domain.",
    },
  ];

  return (
    <section id="tracks" className="py-20 sm:py-32 bg-muted/20 relative overflow-hidden">
      {/* Fog Background */}
      <div className="absolute inset-0 bg-gradient-radial from-neon-red/10 via-transparent to-transparent opacity-20" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-cinzel text-4xl sm:text-5xl md:text-6xl font-bold text-neon-red mb-4">
            Hackathon Tracks
          </h2>
          <div className="w-24 h-1 bg-neon-red mx-auto animate-glow-pulse mb-6" />
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Choose your dimension and start building
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {tracks.map((track, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className="bg-card border-2 border-neon-red/30 rounded-lg p-6 hover-glow transition-all group relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
            >
              {/* Animated Glow Background */}
              <div className="absolute inset-0 bg-gradient-radial from-neon-red/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="flex items-center justify-center w-16 h-16 bg-neon-red/10 border-2 border-neon-red/50 rounded-lg mb-4 group-hover:animate-glow-pulse">
                  <track.icon className="text-neon-red" size={32} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-cinzel font-bold text-foreground mb-2 group-hover:text-neon-red transition-colors">
                  {track.title}
                </h3>

                {/* Subtitle */}
                <p className="text-neon-red/80 text-sm font-medium mb-3 italic">
                  {track.subtitle}
                </p>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {track.description}
                </p>
              </div>

              {/* VHS Effect on Hover */}
              <div className="absolute inset-0 vhs-effect opacity-0 group-hover:opacity-50 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tracks;
