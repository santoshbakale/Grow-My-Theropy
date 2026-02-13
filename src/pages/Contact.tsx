import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ContactSection from "@/components/sections/ContactSection";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex items-center justify-between px-8 md:px-16 py-6"
      >
        <Link to="/" className="text-xl md:text-2xl font-bold font-['Cormorant_Garamond',serif]">
          Dr. Maya Reynolds
        </Link>
        <div className="flex gap-8 text-sm tracking-[0.2em] uppercase font-medium">
          <Link to="/" className="hover:text-accent transition-colors duration-300">Home</Link>
          <Link to="/blog" className="hover:text-accent transition-colors duration-300">Blog</Link>
          <Link to="/contact" className="hover:text-accent transition-colors duration-300">Contact</Link>
        </div>
      </motion.nav>

      <ContactSection />

      {/* Footer */}
      <footer className="py-12 px-8 md:px-16 text-center border-t border-border">
        <p className="text-xs tracking-[0.15em] text-muted-foreground">
          © 2025 Dr. Maya Reynolds, PsyD. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Contact;
