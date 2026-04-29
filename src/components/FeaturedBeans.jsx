import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const BEAN_IMG = "https://media.base44.com/images/public/69f1fbce43c2df16a7eda044/9fe26971e_generated_25c00926.png";
const DROPLET_IMG = "https://media.base44.com/images/public/69f1fbce43c2df16a7eda044/bfb4509c1_generated_ff84f157.png";
const ORIGINS_IMG = "https://media.base44.com/images/public/69f1fbce43c2df16a7eda044/a12170b5c_generated_0806e24a.png";

const beans = [
  {
    name: "KeKopi Klepon Latte",
    notes: "Pandan · Gula Merah · Creamy",
    badge: "Rp 18.000",
    label: "SIGNATURE",
    img: BEAN_IMG,
  },
  {
    name: "KeKopi dari Dokter",
    notes: "Herbal · Bold · Unik",
    badge: "Rp 20.000",
    label: "SIGNATURE",
    img: DROPLET_IMG,
  },
  {
    name: "KeKopi Palm Sugar Latte",
    notes: "Gula Aren · Sweet · Smooth",
    badge: "Rp 16.000",
    label: "POPULER",
    img: ORIGINS_IMG,
  },
];

export default function FeaturedBeans() {
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="w-8 h-px bg-primary" />
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
                Menu Unggulan
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading text-3xl lg:text-5xl font-bold tracking-tight"
            >
              Minuman Favorit
            </motion.h2>
          </div>
          <Link
            to="/menu"
            className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <span className="font-mono text-xs">Lihat Semua</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Bean Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {beans.map((bean, i) => (
            <motion.div
              key={bean.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-background group cursor-pointer"
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={bean.img}
                  alt={bean.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                
                {/* Technical Overlay */}
                <div className="absolute top-4 right-4 flex flex-col items-end gap-2">
                  <span className="font-mono text-[9px] px-2 py-1 bg-primary text-primary-foreground tracking-wider font-bold">
                    {bean.badge}
                  </span>
                  <span className="font-mono text-[9px] px-2 py-1 bg-background/80 backdrop-blur-sm text-muted-foreground tracking-wider">
                    {bean.label}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="font-heading text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                  {bean.name}
                </h3>
                <p className="font-mono text-[11px] text-muted-foreground tracking-wide">
                  {bean.notes}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-8 sm:hidden text-center">
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 text-sm text-primary"
          >
            <span className="font-mono text-xs">Lihat Semua Menu</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
