import { useState } from "react";
import { motion } from "framer-motion";
import MenuCard from "../components/MenuCard";
import { menuItems } from "@/data/menuData";

const LATTE_IMG = "https://media.base44.com/images/public/69f1fbce43c2df16a7eda044/8a1873ad8_generated_e6dc2a68.png";

const categories = ["All", "Espresso", "Signature", "Pour Over", "Cold Brew", "Non-Coffee", "Food"];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <div className="relative py-16 lg:py-24 px-6 lg:px-8 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center gap-3 mb-6"
              >
                <div className="w-8 h-px bg-primary" />
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
                  Crafted Beverages
                </span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="font-heading text-4xl lg:text-6xl font-bold tracking-tight mb-4"
              >
                The Menu
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-base text-foreground/60 max-w-md leading-relaxed"
              >
                Setiap minuman dibuat dengan presisi — suhu, rasio, dan timing yang tepat untuk ekstraksi rasa maksimal.
              </motion.p>
            </div>

            {/* Decorative Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="hidden lg:block"
            >
              <div className="aspect-[4/3] max-w-sm ml-auto overflow-hidden">
                <img
                  src={LATTE_IMG}
                  alt="Precision latte art pour"
                  className="w-full h-full object-cover opacity-70"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="border-b border-border sticky top-16 lg:top-20 z-30 bg-background/95 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto py-4 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`shrink-0 px-4 py-2 font-mono text-[11px] uppercase tracking-widest transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 lg:py-12">
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="font-mono text-sm text-muted-foreground">
              Tidak ada item di kategori ini.
            </p>
          </div>
        ) : (
          <div>
            {filtered.map((item, i) => (
              <MenuCard key={item.id} item={item} index={i} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
