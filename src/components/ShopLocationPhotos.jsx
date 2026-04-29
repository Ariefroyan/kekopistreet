import { motion } from "framer-motion";

// Coffee shop images - Real photos from local folder
const shopImages = [
  {
    id: 1,
    url: `${import.meta.env.BASE_URL}images/shop-photo-1.jpg`,
    instagramUrl: "https://www.instagram.com/p/DTPxgPFD_Nj/",
    alt: "KE.KOPI STREET - Coffee Shop"
  },
  {
    id: 2,
    url: `${import.meta.env.BASE_URL}images/shop-photo-2.jpg`,
    instagramUrl: "https://www.instagram.com/p/DTW-H3JgNTH/",
    alt: "KE.KOPI STREET - Counter"
  },
  {
    id: 3,
    url: `${import.meta.env.BASE_URL}images/shop-photo-3.jpg`,
    instagramUrl: "https://www.instagram.com/p/DO8pezbDx23/",
    alt: "KE.KOPI STREET - Espresso Machine"
  },
];

export default function ShopLocationPhotos() {
  return (
    <section className="py-16 lg:py-24 px-6 lg:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-8 h-px bg-primary" />
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
              Temukan Kami
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-3xl lg:text-5xl font-bold tracking-tight mb-4"
          >
            Lokasi Coffee Shop
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base text-foreground/60 max-w-2xl"
          >
            Jl. Jend. Sudirman No.22, Rembiga, Kec. Selaparang, Kota Mataram, NTB 83124
          </motion.p>
        </div>

        {/* Photo Grid - No captions, just images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {shopImages.map((image, i) => (
            <motion.a
              key={image.id}
              href={image.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group relative overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect fill="%23f0f0f0" width="800" height="600"/%3E%3Ctext fill="%23999" x="50%25" y="50%25" text-anchor="middle" dy=".3em" font-size="20"%3EKE.KOPI STREET%3C/text%3E%3C/svg%3E';
                  }}
                />
              </div>

              {/* Hover Overlay with Instagram Icon */}
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Direction Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 p-6 border border-border bg-card"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 flex items-center justify-center border border-primary shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div>
              <h3 className="font-heading text-lg font-semibold mb-2">
                Cara Menuju Lokasi
              </h3>
              <p className="text-sm text-foreground/70 leading-relaxed mb-3">
                Dari pusat kota Mataram, ambil arah ke Jl. Jend. Sudirman. 
                Coffee shop kami berada di sebelah kanan jalan, nomor 22, area Rembiga.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary/10 text-primary font-mono text-xs">
                  Dekat Selaparang
                </span>
                <span className="px-3 py-1 bg-primary/10 text-primary font-mono text-xs">
                  Parkir Tersedia
                </span>
                <span className="px-3 py-1 bg-primary/10 text-primary font-mono text-xs">
                  Akses Mudah
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
