import { motion } from "framer-motion";

export default function LoadingAnimation() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="text-center">
        {/* Coffee Cup Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="relative w-20 h-20 mx-auto">
            {/* Cup */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="w-16 h-16 border-4 border-primary rounded-b-2xl mx-auto"
            />
            {/* Steam */}
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 flex gap-1">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [-10, -20, -10],
                    opacity: [0.3, 0.7, 0.3],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    delay: i * 0.3,
                    ease: "easeInOut",
                  }}
                  className="w-1 h-4 bg-primary/50 rounded-full"
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="font-heading text-2xl font-bold mb-2">KE.KOPI STREET</h2>
          <p className="font-mono text-xs text-muted-foreground tracking-widest">
            BREWING YOUR EXPERIENCE...
          </p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="mt-8 h-0.5 bg-primary max-w-xs mx-auto"
        />
      </div>
    </div>
  );
}
