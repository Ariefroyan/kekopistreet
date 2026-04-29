import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowDown } from "lucide-react";

const HERO_IMG = "https://media.base44.com/images/public/69f1fbce43c2df16a7eda044/e76612687_generated_234e9ad6.png";

export default function HeroSection() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMG}
          alt="Espresso extraction from bottomless portafilter"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-24 lg:pb-32 px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Technical Annotation */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="w-8 h-px bg-primary" />
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
            Jl. Selaparang No.60 · Cakranegara · Mataram
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-[0.95] mb-6"
        >
          KE.KOPI
          <br />
          <span className="text-primary">STREET</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="font-mono text-sm sm:text-base lg:text-lg text-foreground/70 uppercase tracking-wider mb-6"
        >
          Kopi Kami Digiling, Bukan Digunting
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-base lg:text-lg text-foreground/60 max-w-md leading-relaxed mb-10"
        >
          Kopi lokal berkualitas, harga merakyat mulai Rp 3.000. Hadir di jantung Kota Mataram untuk menemani hari-harimu.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
        >
          <Link
            to="/menu"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-heading text-sm font-semibold tracking-wide hover:bg-primary/90 transition-all duration-300 shadow-lg"
          >
            LIHAT MENU
          </Link>
          <Link
            to="/beans"
            className="inline-flex items-center gap-3 px-8 py-4 border border-border text-foreground/80 font-heading text-sm font-semibold tracking-wide hover:border-primary hover:text-primary transition-all duration-300"
          >
            EXPLORE BEANS
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <ArrowDown size={16} className="text-muted-foreground" />
      </motion.div>

      {/* Side Technical Data */}
      <div className="absolute right-6 lg:right-8 top-1/2 -translate-y-1/2 z-10 hidden lg:flex flex-col items-end gap-8">
        {["Mataram, NTB", "0877-6565-5654", "Buka Setiap Hari"].map((text, i) => (
          <motion.span
            key={text}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 + i * 0.15 }}
            className="font-mono text-[10px] tracking-widest text-muted-foreground/50 [writing-mode:vertical-lr]"
          >
            {text}
          </motion.span>
        ))}
      </div>
    </section>
  );
}
