import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function FooterSection() {
  return (
    <footer className="relative border-t border-border">
      {/* Massive Logotype */}
      <div className="overflow-hidden py-16 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="font-heading text-[12vw] lg:text-[10vw] font-bold leading-none tracking-tighter text-foreground/5 select-none">
            KE.KOPI STREET
          </h2>
        </motion.div>
      </div>

      {/* Info Bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 lg:py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Location */}
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-3">
                Location
              </p>
              <p className="text-sm text-foreground/80 leading-relaxed">
                Jl. Jend. Sudirman No.22, Rembiga
                <br />
                Kec. Selaparang, Kota Mataram
                <br />
                Nusa Tenggara Barat 83124
              </p>
            </div>

            {/* Hours */}
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-3">
                Operating Hours
              </p>
              <div className="space-y-1">
                <p className="text-sm text-foreground/80">
                  Setiap Hari{" "}
                  <span className="font-mono text-xs text-primary">
                    08:00 — 22:00
                  </span>
                </p>
                <div className="mt-2 space-y-1">
                  <p className="font-mono text-[10px] text-muted-foreground">kekopistreet@gmail.com</p>
                  <p className="font-mono text-[10px] text-muted-foreground">0877-6565-5654</p>
                </div>
              </div>
            </div>

            {/* Social & Navigation */}
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-3">
                Navigate
              </p>
              <div className="flex gap-6 mb-4">
                {[
                  { label: "Home", path: "/" },
                  { label: "Menu", path: "/menu" },
                  { label: "Beans", path: "/beans" },
                ].map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="text-sm text-foreground/60 hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-3 mt-5">
                Follow Us
              </p>
              <div className="flex flex-col gap-1">
                <a
                  href="https://instagram.com/kekopi_street"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[11px] text-foreground/60 hover:text-primary transition-colors duration-300"
                >
                  IG &nbsp;@kekopi_street
                </a>
                <a
                  href="https://tiktok.com/@kekopi.street"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[11px] text-foreground/60 hover:text-primary transition-colors duration-300"
                >
                  TT &nbsp;@kekopi.street
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-6 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="font-mono text-[10px] text-muted-foreground">
              © 2026 KE.KOPI STREET. ALL RIGHTS RESERVED.
            </p>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="font-mono text-[10px] text-muted-foreground">
                BREWING NOW
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
