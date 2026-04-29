import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin } from "lucide-react";

export default function ContactCTA() {
  const handleWhatsApp = () => {
    const phone = "6287765655654"; // Format internasional tanpa +
    const message = encodeURIComponent("Halo KE.KOPI STREET, saya ingin bertanya tentang menu dan lokasi.");
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  const handleCall = () => {
    window.location.href = "tel:087765655654";
  };

  const handleMaps = () => {
    const lat = -8.562826629915108;
    const lng = 116.1118916177771;
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`, '_blank');
  };

  return (
    <section className="py-16 lg:py-20 bg-primary/5 border-y border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4">
            Siap Menikmati Kopi Kami?
          </h2>
          <p className="text-base text-foreground/60 max-w-2xl mx-auto">
            Hubungi kami sekarang untuk reservasi atau informasi lebih lanjut
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {/* WhatsApp */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            onClick={handleWhatsApp}
            className="group flex flex-col items-center gap-4 p-6 bg-background border border-border hover:border-primary hover:bg-primary/5 transition-all duration-300"
          >
            <div className="w-16 h-16 flex items-center justify-center bg-green-500/10 group-hover:bg-green-500/20 transition-colors duration-300">
              <MessageCircle size={32} className="text-green-600" />
            </div>
            <div className="text-center">
              <p className="font-heading font-semibold mb-1">WhatsApp</p>
              <p className="font-mono text-xs text-muted-foreground">Chat Langsung</p>
            </div>
          </motion.button>

          {/* Phone */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            onClick={handleCall}
            className="group flex flex-col items-center gap-4 p-6 bg-background border border-border hover:border-primary hover:bg-primary/5 transition-all duration-300"
          >
            <div className="w-16 h-16 flex items-center justify-center bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
              <Phone size={32} className="text-primary" />
            </div>
            <div className="text-center">
              <p className="font-heading font-semibold mb-1">Telepon</p>
              <p className="font-mono text-xs text-muted-foreground">0877-6565-5654</p>
            </div>
          </motion.button>

          {/* Maps */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            onClick={handleMaps}
            className="group flex flex-col items-center gap-4 p-6 bg-background border border-border hover:border-primary hover:bg-primary/5 transition-all duration-300"
          >
            <div className="w-16 h-16 flex items-center justify-center bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors duration-300">
              <MapPin size={32} className="text-blue-600" />
            </div>
            <div className="text-center">
              <p className="font-heading font-semibold mb-1">Petunjuk Arah</p>
              <p className="font-mono text-xs text-muted-foreground">Buka Google Maps</p>
            </div>
          </motion.button>
        </div>
      </div>
    </section>
  );
}
