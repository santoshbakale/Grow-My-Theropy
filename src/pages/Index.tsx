import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-live-your-life.jpg";
import fulfillingImage from "@/assets/fulfilling-meditation.jpg";
import anxietyImage from "@/assets/anxiety-image.jpg";
import traumaImage from "@/assets/trauma-image.jpg";
import burnoutImage from "@/assets/burnout-image.jpg";
import valeriia from "@/assets/valeriia-miller.webp";
import drMayaAbout from "@/assets/dr-maya-about.png";
import HeroSection from "@/components/sections/HeroSection";
import FulfillingSection from "@/components/sections/FulfillingSection";
import SpecialtiesSection from "@/components/sections/SpecialtiesSection";
import AloneSection from "@/components/sections/AloneSection";
import AboutSection from "@/components/sections/AboutSection";
import FaqSection from "@/components/sections/FaqSection";
import BackgroundSection from "@/components/sections/BackgroundSection";
import CtaSection from "@/components/sections/CtaSection";
import OfficeSection from "@/components/sections/OfficeSection";
import BlogSection from "@/components/sections/BlogSection";
import ContactSection from "@/components/sections/ContactSection";

const specialtyImages = {
  anxiety: anxietyImage,
  trauma: traumaImage,
  burnout: burnoutImage,
};

const scrollTo = (id: string) => (e: React.MouseEvent) => {
  e.preventDefault();
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex items-center justify-between px-8 md:px-16 py-6"
      >
        <span className="text-xl md:text-2xl font-bold font-['Cormorant_Garamond',serif]">
          Dr. Maya Reynolds
        </span>
        <div className="flex gap-8 text-sm tracking-[0.2em] uppercase font-medium">
          <Link to="/office" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors duration-300">Office</Link>
          <Link to="/blog" className="hover:text-accent transition-colors duration-300">Blog</Link>
          <Link to="/contact" className="hover:text-accent transition-colors duration-300">Contact</Link>
        </div>
      </motion.nav>

      <HeroSection image={heroImage} />
      <FulfillingSection image={fulfillingImage} />
      <SpecialtiesSection images={specialtyImages} />
      <AloneSection image={valeriia} />
      <AboutSection image={drMayaAbout} />
      <OfficeSection />
      <FaqSection />
      <BlogSection />
      <BackgroundSection />
      <ContactSection />
      <CtaSection />

      {/* Footer */}
      <footer className="py-12 px-8 md:px-16 text-center border-t border-border">
        <p className="text-xs tracking-[0.15em] text-muted-foreground">
          © 2025 Dr. Maya Reynolds, PsyD. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Index;
