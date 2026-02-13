import AnimatedSection from "@/components/AnimatedSection";

const CtaSection = () => (
  <section className="py-24 px-8 md:px-16 text-center max-w-2xl mx-auto">
    <AnimatedSection>
      <h3 className="text-3xl md:text-4xl mb-4 font-['Cormorant_Garamond',serif]">
        Get started today.
      </h3>
    </AnimatedSection>
    <AnimatedSection delay={0.1}>
      <p className="text-muted-foreground leading-relaxed mb-8 text-[15px] font-light">
        If you're looking for a therapist who combines practical tools with depth-oriented work—and who understands the realities of living and working in a fast-paced environment—I may be a good fit. Contact me to schedule your first session.
      </p>
    </AnimatedSection>
    <AnimatedSection delay={0.2}>
      <a
        href="#"
        className="group inline-flex items-center gap-2 border border-foreground px-8 py-3 text-xs tracking-[0.2em] uppercase font-medium hover:bg-foreground hover:text-background transition-all duration-300"
      >
        Get in touch <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
      </a>
    </AnimatedSection>
  </section>
);

export default CtaSection;
