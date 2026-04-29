import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

// Dummy testimonials - nanti bisa diganti dengan data dari Base44
const testimonials = [
  {
    id: 1,
    name: "Rina Wijaya",
    role: "Mahasiswa",
    rating: 5,
    text: "Kopi lokal terbaik di Mataram! Harganya ramah di kantong tapi rasanya premium. Tempatnya juga cozy banget buat ngerjain tugas.",
    avatar: "https://ui-avatars.com/api/?name=Rina+Wijaya&background=C8A27C&color=fff",
  },
  {
    id: 2,
    name: "Budi Santoso",
    role: "Freelancer",
    rating: 5,
    text: "Suka banget sama konsepnya — kopi digiling bukan digunting! Bener-bener kerasa bedanya. Jadi langganan saya sekarang.",
    avatar: "https://ui-avatars.com/api/?name=Budi+Santoso&background=3E2723&color=fff",
  },
  {
    id: 3,
    name: "Siti Nurhaliza",
    role: "Pegawai Swasta",
    rating: 4,
    text: "Tempatnya strategis, kopinya enak, harganya terjangkau. Klepon Latte-nya unik banget, wajib coba!",
    avatar: "https://ui-avatars.com/api/?name=Siti+Nurhaliza&background=D7CCC8&color=333",
  },
  {
    id: 4,
    name: "Ahmad Fauzi",
    role: "Pengusaha",
    rating: 5,
    text: "Pelayanannya ramah, kopinya konsisten. Sering meeting di sini karena suasananya mendukung.",
    avatar: "https://ui-avatars.com/api/?name=Ahmad+Fauzi&background=C8A27C&color=fff",
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-24 lg:py-32 px-6 lg:px-8 bg-card/30">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="w-8 h-px bg-primary" />
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
              Customer Stories
            </span>
            <div className="w-8 h-px bg-primary" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-3xl lg:text-5xl font-bold tracking-tight"
          >
            Kata Mereka
          </motion.h2>
        </div>

        {/* Testimonial Card */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="bg-card border border-border p-8 lg:p-12">
            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className={`${
                    i < current.rating
                      ? "fill-primary text-primary"
                      : "text-muted-foreground"
                  }`}
                />
              ))}
            </div>

            {/* Quote */}
            <p className="text-lg lg:text-xl text-foreground/80 leading-relaxed mb-8 italic">
              "{current.text}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-4">
              <img
                src={current.avatar}
                alt={current.name}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="font-heading font-semibold text-foreground">
                  {current.name}
                </p>
                <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  {current.role}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 flex items-center justify-center border border-border hover:border-primary hover:text-primary transition-all duration-300"
            >
              <ChevronLeft size={16} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === currentIndex
                      ? "bg-primary w-8"
                      : "bg-border hover:bg-muted-foreground"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 flex items-center justify-center border border-border hover:border-primary hover:text-primary transition-all duration-300"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
