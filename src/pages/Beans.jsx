import { useState } from "react";
import { motion } from "framer-motion";
import BeanCard from "../components/BeanCard";
import { coffeeBeans } from "@/data/beansData";

export default function Beans() {
  const [beans] = useState(coffeeBeans);

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <div className="py-16 lg:py-24 px-6 lg:px-8 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-8 h-px bg-primary" />
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
              Single Origin · Direct Trade
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl lg:text-6xl font-bold tracking-tight mb-4"
          >
            Origin Chronicle
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base text-foreground/60 max-w-lg leading-relaxed"
          >
            Every bean carries a story — of altitude, terroir, and the hands
            that cultivated it. Explore our curated selection.
          </motion.p>
        </div>
      </div>

      {/* Beans Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
        {beans.length === 0 ? (
          <div className="text-center py-20">
            <p className="font-mono text-sm text-muted-foreground">
              No beans available yet. Check back soon.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {beans.map((bean, i) => (
              <div key={bean.id} className="bg-background">
                <BeanCard bean={bean} index={i} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
