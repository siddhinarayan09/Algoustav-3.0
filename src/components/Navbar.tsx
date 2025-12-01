import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Timeline", href: "#timeline" },
    { name: "Tracks", href: "#tracks" },
    { name: "Prizes", href: "#prizes" },
    { name: "Sponsors", href: "#sponsors" },
    { name: "FAQs", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-neon-red/20"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("#home")}
            className="text-xl sm:text-2xl font-cinzel font-bold text-neon-red hover:animate-flicker transition-all"
            style={{ textShadow: "var(--text-shadow-glow)" }}
          >
            Algoutsav 3.0
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-foreground hover:text-neon-red transition-colors duration-300 text-sm font-medium"
              >
                {link.name}
              </button>
            ))}
            <Button
              variant="outline"
              className="border-neon-red text-neon-red hover:bg-neon-red hover:text-primary-foreground hover-glow"
              onClick={() => window.open("https://unstop.com", "_blank")}
            >
              Register on Unstop
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-foreground hover:text-neon-red transition-colors"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-card/98 backdrop-blur-lg border-t border-neon-red/20">
          <div className="container mx-auto px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left text-foreground hover:text-neon-red transition-colors duration-300 text-base font-medium py-2"
              >
                {link.name}
              </button>
            ))}
            <Button
              variant="outline"
              className="w-full border-neon-red text-neon-red hover:bg-neon-red hover:text-primary-foreground"
              onClick={() => window.open("https://unstop.com", "_blank")}
            >
              Register on Unstop
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
