import HeroSection from "../components/HeroSection";
import FeaturedBeans from "../components/FeaturedBeans";
import AboutSection from "../components/AboutSection";
import GallerySection from "../components/GallerySection";
import TestimonialsSection from "../components/TestimonialsSection";
import LocationSection from "../components/LocationSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturedBeans />
      <AboutSection />
      <GallerySection />
      <TestimonialsSection />
      <LocationSection />
    </div>
  );
}
