import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function BeanCard({ bean, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <Link
        to={`/bean/${bean.id}`}
        className="group block bg-card border border-border hover:border-primary/30 transition-all duration-500"
      >
        {/* Image */}
        {bean.image_url && (
          <div className="relative aspect-square overflow-hidden">
            <img
              src={bean.image_url}
              alt={bean.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
            
            {/* Arrow */}
            <div className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300">
              <ArrowUpRight size={14} className="text-primary" />
            </div>

            {/* Tech overlays */}
            <div className="absolute bottom-4 left-4 flex gap-2">
              {bean.altitude && (
                <span className="font-mono text-[9px] px-2 py-1 bg-background/80 backdrop-blur-sm text-primary tracking-wider">
                  ALT. {bean.altitude}
                </span>
              )}
              {bean.processing && (
                <span className="font-mono text-[9px] px-2 py-1 bg-background/80 backdrop-blur-sm text-muted-foreground tracking-wider">
                  {bean.processing.toUpperCase()}
                </span>
              )}
            </div>
          </div>
        )}

        {/* Info */}
        <div className="p-5">
          <div className="flex items-start justify-between gap-3 mb-2">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground mb-1">
                {bean.origin} {bean.region ? `· ${bean.region}` : ""}
              </p>
              <h3 className="font-heading text-lg font-semibold group-hover:text-primary transition-colors duration-300">
                {bean.name}
              </h3>
            </div>
            <span className="font-mono text-sm text-primary shrink-0">
              {bean.price?.toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
                minimumFractionDigits: 0,
              })}
            </span>
          </div>

          {bean.flavor_notes && (
            <p className="font-mono text-[10px] text-muted-foreground tracking-wide">
              {bean.flavor_notes}
            </p>
          )}

          {bean.roast_level && (
            <div className="mt-4 flex items-center gap-2">
              <div className="flex-1 h-px bg-border" />
              <span className="font-mono text-[9px] text-muted-foreground tracking-wider">
                {bean.roast_level.toUpperCase()} ROAST
              </span>
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  );
}
