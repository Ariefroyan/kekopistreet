import { motion } from "framer-motion";
import { useState } from "react";

// Dummy gallery images - nanti bisa diganti dengan data dari Base44
const galleryImages = [
  {
    id: 1,
    url: "https://media.base44.com/images/public/69f1fbce43c2df16a7eda044/e76612687_generated_234e9ad6.png",
    alt: "Espresso extraction",
    span: "row-span-2",
  },
  {
    id: 2,
    url: "https://media.base44.com/images/public/69f1fbce43c2df16a7eda044/8a1873ad8_generated_e6dc2a68.png",
    alt: "Latte art",
    span: "row-span-1",
  },
  {
    id: 3,
    url: "https://media.base44.com/images/public/69f1fbce43c2df16a7eda044/5d5506b1f_generated_7b76a98a.png",
    alt: "Coffee steam",
    span: "row-span-1",
  },
  {
    id: 4,
    url: "https://media.base44.com/images/public/69f1fbce43c2df16a7eda044/9fe26971e_generated_25c00926.png",
    alt: "Coffee beans",
    span: "row-span-2",
  },
  {
    id: 5,
    url: "https://media.base44.com/images/public/69f1fbce43c2df16a7eda044/bfb4509c1_generated_ff84f157.png",
    alt: "Pour over",
    span: "row-span-1",
  },
  {
    id: 6,
    url: "https://media.base44.com/images/public/69f1fbce43c2df16a7eda044/a12170b5c_generated_0806e24a.png",
    alt: "Coffee origins",
    span: "row-span-1",
  },
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="py-24 lg:py-32 px-6 lg:px-8 border-t border-border">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-8 h-px bg-primary" />
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
              Visual Journey
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-3xl lg:text-5xl font-bold tracking-tight"
          >
            Gallery
          </motion.h2>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] gap-4">
          {galleryImages.map((image, i) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative overflow-hidden cursor-pointer group ${image.span}`}
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-12 h-12 border border-primary/50 flex items-center justify-center">
                  <span className="font-mono text-xs text-primary">VIEW</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex items-center justify-center p-6"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="relative max-w-5xl w-full"
          >
            <img
              src={selectedImage.url}
              alt={selectedImage.alt}
              className="w-full h-auto max-h-[80vh] object-contain"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-background/80 backdrop-blur-sm border border-border hover:border-primary transition-colors duration-300"
            >
              <span className="font-mono text-xs text-foreground">✕</span>
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
