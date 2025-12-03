
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FileText, ArrowRight } from "lucide-react";
import heroBg from "@/assets/bg.jpg";

const Hero = () => {
  return (
    <section
      id="home"
  className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="hero-logo-container">
  <img
    src="https://res.cloudinary.com/dwh7xuupf/image/upload/v1764769922/au_imp_vssnsn.png"
    alt="Algoutsav 2026"
    className="hero-logo"
  />
</div>


          <motion.p
            className="text-base sm:text-lg md:text-xl text-muted-foreground -mt-16 mb-10 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            AlgoUtsav is an annual pan-India ICPC-styled Competitive Programming event organized by 
            the Algorithmic and Programming Society (APS), NIT Rourkela, operating under the Technical Society 
            of the Student Activity Centre (SAC), of NIT Rourkela.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <button className="button-49" data-text="Register now"
            onClick={() => window.open("https://unstop.com", "_blank")}>
            Register Now
            </button>


            <button className="button-49" data-text="Event Brochure"
            onClick={() => window.open("https://unstop.com", "_blank")}>
              Event Brochure
            </button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        
      </div>
    </section>
  );
};

export default Hero;


