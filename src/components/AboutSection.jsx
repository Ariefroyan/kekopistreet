import { motion } from "framer-motion";

const STEAM_IMG = "https://media.base44.com/images/public/69f1fbce43c2df16a7eda044/5d5506b1f_generated_7b76a98a.png";

const stats = [
  { value: "14+", label: "Menu Pilihan" },
  { value: "3rb", label: "Harga Mulai" },
  { value: "100%", label: "Kopi Digiling" },
  { value: "NTB", label: "Asli Lokal" },
];

export default function AboutSection() {
  return (
    <section className="relative py-24 lg:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={STEAM_IMG}
                alt="Steam rising from freshly brewed coffee"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Technical Annotation */}
            <div className="absolute -bottom-4 -right-4 lg:-right-8 bg-card border border-border px-5 py-4">
              <p className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground mb-1">
                Mataram, NTB
              </p>
              <p className="font-heading text-lg font-bold text-primary">
                Rembiga
              </p>
            </div>
          </motion.div>

          {/* Content Side */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-8 h-px bg-primary" />
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
                Tentang Kami
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading text-3xl lg:text-4xl font-bold tracking-tight mb-8 leading-tight"
            >
              Kopi Lokal,
              <br />
              Harga <span className="text-primary">Merakyat</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-base text-foreground/60 leading-relaxed mb-6"
            >
              Kami percaya kopi yang baik bukan soal mahal atau murah — tapi soal kejujuran rasa. Setiap cangkir dibuat dari biji kopi yang benar-benar digiling segar, bukan digunting dari sachet.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-base text-foreground/60 leading-relaxed mb-12"
            >
              Berlokasi di Jl. Jend. Sudirman No.22, Selaparang — KE.KOPI STREET adalah ruang ngobrol, tempat kerja, dan sudut favorit warga Mataram. Hubungi kami di 0877-6565-5654.
            </motion.p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-border">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="bg-background p-4 text-center"
                >
                  <p className="font-heading text-2xl font-bold text-primary mb-1">
                    {stat.value}
                  </p>
                  <p className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
