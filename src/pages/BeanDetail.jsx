import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { coffeeBeans } from "@/data/beansData";

const roastLevels = {
  Light: 20,
  "Medium-Light": 40,
  Medium: 60,
  "Medium-Dark": 80,
  Dark: 100,
};

export default function BeanDetail() {
  const { beanId } = useParams();
  const [bean, setBean] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const foundBean = coffeeBeans.find(b => b.id === beanId);
    setBean(foundBean);
    setLoading(false);
  }, [beanId]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-muted border-t-primary rounded-full animate-spin" />
      </div>
    );
  }

  if (!bean) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="font-mono text-sm text-muted-foreground">Bean not found.</p>
      </div>
    );
  }

  const roastPercent = roastLevels[bean.roast_level] || 50;

  return (
    <div className="min-h-screen pt-20">
      {/* Back nav */}
      <div className="px-6 lg:px-8 py-4 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <Link
            to="/beans"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            <ArrowLeft size={14} />
            <span className="font-mono text-xs">Back to Beans</span>
          </Link>
        </div>
      </div>

      {/* Split Layout */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-8rem)]">
          {/* Fixed Image Side */}
          <div className="lg:sticky lg:top-20 lg:h-[calc(100vh-5rem)]">
            {bean.image_url ? (
              <img
                src={bean.image_url}
                alt={bean.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-card flex items-center justify-center">
                <span className="font-mono text-xs text-muted-foreground">
                  NO IMAGE
                </span>
              </div>
            )}
          </div>

          {/* Scrollable Data Stack */}
          <div className="px-6 lg:px-12 py-12 lg:py-16">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-8 h-px bg-primary" />
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
                {bean.origin} {bean.region ? `· ${bean.region}` : ""}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-heading text-3xl lg:text-5xl font-bold tracking-tight mb-8"
            >
              {bean.name}
            </motion.h1>

            {/* Data Stack */}
            <div className="space-y-0">
              {/* Price */}
              <DataRow label="Price / 250g">
                <span className="font-heading text-2xl font-bold text-primary">
                  {bean.price?.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                    minimumFractionDigits: 0,
                  })}
                </span>
              </DataRow>

              {bean.altitude && (
                <DataRow label="Altitude">{bean.altitude}</DataRow>
              )}

              {bean.varietal && (
                <DataRow label="Varietal">{bean.varietal}</DataRow>
              )}

              {bean.processing && (
                <DataRow label="Processing">{bean.processing}</DataRow>
              )}

              {bean.roast_level && (
                <DataRow label="Roast Level">
                  <div className="w-full">
                    <div className="flex items-center justify-between mb-2">
                      <span>{bean.roast_level}</span>
                    </div>
                    <div className="w-full h-1 bg-border rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${roastPercent}%` }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="h-full bg-primary rounded-full"
                      />
                    </div>
                    <div className="flex justify-between mt-1">
                      <span className="font-mono text-[8px] text-muted-foreground">
                        LIGHT
                      </span>
                      <span className="font-mono text-[8px] text-muted-foreground">
                        DARK
                      </span>
                    </div>
                  </div>
                </DataRow>
              )}

              {bean.flavor_notes && (
                <DataRow label="Flavor Notes">
                  <div className="flex flex-wrap gap-2">
                    {bean.flavor_notes.split("·").map((note) => (
                      <span
                        key={note.trim()}
                        className="px-3 py-1 border border-border font-mono text-[10px] tracking-wider text-foreground/80"
                      >
                        {note.trim().toUpperCase()}
                      </span>
                    ))}
                  </div>
                </DataRow>
              )}
            </div>

            {/* Description */}
            {bean.description && (
              <div className="mt-12 pt-8 border-t border-border">
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-4">
                  Description
                </p>
                <p className="text-base text-foreground/70 leading-relaxed">
                  {bean.description}
                </p>
              </div>
            )}

            {/* Farmer Narrative */}
            {bean.farmer_narrative && (
              <div className="mt-10 pt-8 border-t border-border">
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-4">
                  Farmer Narrative
                </p>
                <p className="text-base text-foreground/70 leading-relaxed italic">
                  "{bean.farmer_narrative}"
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function DataRow({ label, children }) {
  return (
    <div className="py-5 border-b border-border/50 flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-8">
      <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground w-32 shrink-0 pt-0.5">
        {label}
      </p>
      <div className="flex-1 text-sm text-foreground">{children}</div>
    </div>
  );
}
