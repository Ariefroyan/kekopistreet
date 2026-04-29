import { Link, useLocation } from "react-router-dom";
import { Home, Coffee, Package, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const navItems = [
  { icon: Home, label: "Home", path: "/" },
  { icon: Coffee, label: "Menu", path: "/menu" },
  { icon: Package, label: "Beans", path: "/beans" },
];

export default function MobileBottomNav() {
  const location = useLocation();

  return (
    <motion.nav
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-background/95 backdrop-blur-xl border-t border-border"
    >
      <div className="flex items-center justify-around h-16 px-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className="relative flex flex-col items-center justify-center w-16 h-full group"
            >
              <item.icon
                size={20}
                className={`transition-colors duration-300 ${
                  isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
                }`}
              />
              <span
                className={`font-mono text-[8px] uppercase tracking-wider mt-1 transition-colors duration-300 ${
                  isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
                }`}
              >
                {item.label}
              </span>
              {isActive && (
                <motion.div
                  layoutId="mobile-nav-indicator"
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-primary"
                  transition={{ duration: 0.3 }}
                />
              )}
            </Link>
          );
        })}
      </div>
    </motion.nav>
  );
}
