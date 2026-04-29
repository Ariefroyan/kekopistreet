import { motion } from "framer-motion";
import { Plus } from "lucide-react";

export default function MenuCard({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="group relative border-b border-border/50 py-6 flex items-center justify-between gap-4 hover:bg-card/50 px-4 -mx-4 transition-colors duration-300"
    >
      {/* Precision Rule Line */}
      <div className="absolute left-0 top-0 w-px h-0 bg-primary group-hover:h-full transition-all duration-500" />

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-3 mb-1">
          <h3 className="font-heading text-base lg:text-lg font-semibold truncate group-hover:text-primary transition-colors duration-300">
            {item.name}
          </h3>
          {item.temperature && (
            <span className="font-mono text-[9px] px-2 py-0.5 border border-border text-muted-foreground tracking-wider shrink-0">
              {item.temperature}
            </span>
          )}
        </div>
        {item.description && (
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-1">
            {item.description}
          </p>
        )}
        {item.flavor_notes && (
          <p className="font-mono text-[10px] text-primary/70 mt-1 tracking-wide">
            {item.flavor_notes}
          </p>
        )}
      </div>

      <div className="flex items-center gap-4 shrink-0">
        <span className="font-mono text-sm text-foreground">
          {item.price?.toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
          })}
        </span>
        <button className="w-8 h-8 flex items-center justify-center border border-border text-muted-foreground hover:border-primary hover:text-primary transition-all duration-300 opacity-0 group-hover:opacity-100">
          <Plus size={14} />
        </button>
      </div>
    </motion.div>
  );
}
