import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Medal, Award, Gift, Star } from "lucide-react";

const Prizes = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const prizes = [
    {
      icon: Trophy,
      title: "Prize Pool",
      amount: "₹2 Lakhs+",
      description: "Total prize money to be won",
      highlight: true,
    },
    {
      icon: Medal,
      title: "Winner",
      amount: "₹75,000",
      description: "First place team prize",
      highlight: false,
    },
    {
      icon: Award,
      title: "Runner-up",
      amount: "₹50,000",
      description: "Second place team prize",
      highlight: false,
    },
    {
      icon: Star,
      title: "Special Awards",
      amount: "Multiple",
      description: "Best Innovation, Best Presentation, and more",
      highlight: false,
    },
    {
      icon: Gift,
      title: "Goodies + Merchandise",
      amount: "For All",
      description: "Exclusive Algoutsav merchandise and swag",
      highlight: false,
    },
  ];

  return (
    <section id="prizes" className="py-20 sm:py-32 bg-background relative overflow-hidden">
      {/* Animated Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-red/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-red/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-cinzel text-4xl sm:text-5xl md:text-6xl font-bold text-neon-red mb-4">
            Prizes & Rewards
          </h2>
          <div className="w-24 h-1 bg-neon-red mx-auto animate-glow-pulse mb-6" />
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Compete for exciting prizes, certificates, and exclusive merchandise
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {prizes.map((prize, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className={`bg-card border-2 rounded-lg p-8 transition-all group relative overflow-hidden ${
                prize.highlight
                  ? "border-neon-red lg:col-span-3 lg:py-12"
                  : "border-neon-red/30"
              } hover-glow`}
              whileHover={{ scale: 1.05 }}
            >
              {/* Glow Effect */}
              <div
                className={`absolute inset-0 bg-gradient-radial from-neon-red/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                  prize.highlight ? "opacity-30" : ""
                }`}
              />

              <div className="relative z-10 text-center">
                {/* Icon */}
                <div
                  className={`flex items-center justify-center mx-auto mb-6 bg-neon-red/10 border-2 border-neon-red/50 rounded-full group-hover:animate-glow-pulse ${
                    prize.highlight ? "w-24 h-24" : "w-20 h-20"
                  }`}
                >
                  <prize.icon
                    className="text-neon-red"
                    size={prize.highlight ? 48 : 36}
                  />
                </div>

                {/* Title */}
                <h3
                  className={`font-cinzel font-bold text-foreground mb-3 group-hover:text-neon-red transition-colors ${
                    prize.highlight ? "text-3xl md:text-4xl" : "text-2xl"
                  }`}
                  style={
                    prize.highlight
                      ? {
                          textShadow:
                            "0 0 20px rgba(228, 28, 36, 0.5)",
                        }
                      : {}
                  }
                >
                  {prize.title}
                </h3>

                {/* Amount */}
                <p
                  className={`font-bold text-neon-red mb-2 ${
                    prize.highlight ? "text-4xl md:text-5xl" : "text-3xl"
                  }`}
                >
                  {prize.amount}
                </p>

                {/* Description */}
                <p className="text-muted-foreground">{prize.description}</p>
              </div>

              {/* VHS Effect */}
              <div className="absolute inset-0 vhs-effect opacity-0 group-hover:opacity-30 transition-opacity" />
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16 max-w-3xl mx-auto"
        >
          <div className="bg-card/50 border border-neon-red/20 rounded-lg p-6 backdrop-blur-sm">
            <p className="text-muted-foreground text-sm leading-relaxed">
              All finalists will receive participation certificates and exclusive Algoutsav merchandise.
              Additional prizes and perks will be announced soon!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Prizes;
