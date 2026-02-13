import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

interface HeroSectionProps {
  image: string;
}

const HeroSection = ({ image }: HeroSectionProps) => (
  <section className="grid grid-cols-1 md:grid-cols-2 min-h-[90vh] items-center">
    <div className="relative h-full min-h-[500px] md:min-h-[700px]">
      <div className="absolute inset-0 flex items-end justify-center pb-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="w-[85%] max-w-[500px] h-[90%] rounded-t-full overflow-hidden"
        >
          <img
            src={image}
            alt="Dr. Maya Reynolds"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>
      </div>
    </div>
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
      className="flex flex-col items-center md:items-start justify-center px-8 md:px-16 py-16"
    >
      <h1 className="text-6xl md:text-8xl lg:text-[6.5rem] leading-[1.05] mb-8 tracking-[-0.01em]">
        Live your life<br />in full bloom
      </h1>
      <p className="text-lg md:text-xl lg:text-2xl mb-10 text-muted-foreground tracking-wide font-light">
        Therapy for Adults in Santa Monica, CA.
      </p>
      <a
        href="#"
        className="group inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3 text-xs tracking-[0.2em] uppercase font-medium hover:opacity-90 transition-all duration-300"
      >
        Connect with me <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
      </a>
    </motion.div>
  </section>
);

export default HeroSection;
