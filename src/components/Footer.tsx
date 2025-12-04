import { Instagram, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-neon-red/30 py-12 relative overflow-hidden">
      {/* Noise Texture Effect */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==')]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Branding */}
          <div className="text-center md:text-left">
            <h3
              className="font-cinzel text-2xl font-bold text-neon-red mb-2"
              style={{ textShadow: "var(--text-shadow-glow)" }}
            >
              Algoutsav 3.0
            </h3>
            <p className="text-muted-foreground text-sm">
              NIT Rourkela's Flagship Competitive Programming Contest.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="mailto:algoutsav3.0nitrkl@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 bg-neon-red/10 border border-neon-red/50 rounded-full hover-glow transition-all hover:bg-neon-red/20"
              aria-label="Email"
            >
              <Mail className="text-neon-red" size={18} />
            </a>
            <a
              href="https://www.instagram.com/aps.nitr?igsh=bXlydzhlMTR2c2ll"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 bg-neon-red/10 border border-neon-red/50 rounded-full hover-glow transition-all hover:bg-neon-red/20"
              aria-label="Instagram"
            >
              <Instagram className="text-neon-red" size={18} />
            </a>
            <a
              href="https://www.linkedin.com/company/aps-nitr/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 bg-neon-red/10 border border-neon-red/50 rounded-full hover-glow transition-all hover:bg-neon-red/20"
              aria-label="LinkedIn"
            >
              <Linkedin className="text-neon-red" size={18} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-neon-red/20 my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2025 Algoutsav 3.0. All rights reserved.</p>
          <p className="font-mono text-xs italic">
            Designed with the Spirit of the Upside Down
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
