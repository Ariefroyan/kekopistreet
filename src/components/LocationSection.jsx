import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function LocationSection() {
  const contactInfo = [
    {
      icon: MapPin,
      label: "Address",
      value: "Jl. Selaparang No.60, Mayura, Cakranegara",
      subvalue: "Kota Mataram, NTB 83239",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "0877-6565-5654",
      link: "tel:087765655654",
    },
    {
      icon: Mail,
      label: "Email",
      value: "kekopistreet@gmail.com",
      link: "mailto:kekopistreet@gmail.com",
    },
    {
      icon: Clock,
      label: "Hours",
      value: "Setiap Hari",
      subvalue: "08:00 — 22:00 WITA",
    },
  ];

  return (
    <section className="py-24 lg:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
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
              Visit Us
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-3xl lg:text-5xl font-bold tracking-tight"
          >
            Location & Contact
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            {contactInfo.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4"
              >
                <div className="w-12 h-12 flex items-center justify-center border border-border shrink-0">
                  <item.icon size={20} className="text-primary" />
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                    {item.label}
                  </p>
                  {item.link ? (
                    <a
                      href={item.link}
                      className="text-base text-foreground hover:text-primary transition-colors duration-300"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-base text-foreground">{item.value}</p>
                  )}
                  {item.subvalue && (
                    <p className="text-sm text-muted-foreground mt-1">
                      {item.subvalue}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="pt-8 border-t border-border"
            >
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-4">
                Follow Us
              </p>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com/kekopi_street"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-border hover:border-primary hover:text-primary transition-all duration-300 font-mono text-xs"
                >
                  INSTAGRAM
                </a>
                <a
                  href="https://tiktok.com/@kekopi.street"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-border hover:border-primary hover:text-primary transition-all duration-300 font-mono text-xs"
                >
                  TIKTOK
                </a>
              </div>
            </motion.div>
          </div>

          {/* Google Maps Embed */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[400px] lg:h-full min-h-[400px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.2847654321!2d116.11234!3d-8.58234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMzQnNTYuNCJTIDExNsKwMDYnNDQuNCJF!5e0!3m2!1sen!2sid!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="border border-border"
            />
            {/* Technical Overlay */}
            <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm border border-border px-4 py-2">
              <p className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
                Coordinates
              </p>
              <p className="font-mono text-xs text-primary">
                -8.5823° S, 116.1123° E
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
