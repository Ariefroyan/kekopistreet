import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import FooterSection from "./FooterSection";
import MobileBottomNav from "./MobileBottomNav";

export default function Layout() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pb-16 md:pb-0">
        <Outlet />
      </main>
      <FooterSection />
      <MobileBottomNav />
    </div>
  );
}
