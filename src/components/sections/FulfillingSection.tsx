import AnimatedSection from "@/components/AnimatedSection";

interface FulfillingSectionProps {
  image: string;
}

const FulfillingSection = ({ image }: FulfillingSectionProps) => (
  <section className="grid grid-cols-1 md:grid-cols-2 gap-0">
    <div className="order-2 md:order-1 flex flex-col justify-center px-8 md:px-20 py-16">
      <AnimatedSection>
        <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1] mb-6">
          Live a fulfilling life.
        </h2>
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <p className="text-muted-foreground leading-relaxed mb-4 text-[15px] font-light">
          Many of the people I work with are high-achieving, thoughtful, and self-aware—but internally feel exhausted, stuck in overthinking, or emotionally on edge.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-8 text-[15px] font-light">
          Therapy can become a space to slow down, reconnect, and develop more sustainable ways of living and working.
        </p>
      </AnimatedSection>
      <AnimatedSection delay={0.2}>
        <a
          href="#"
          className="group inline-flex items-center gap-2 border border-foreground px-8 py-3 text-xs tracking-[0.2em] uppercase font-medium self-start hover:bg-foreground hover:text-background transition-all duration-300"
        >
          Get in touch <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </a>
      </AnimatedSection>
    </div>
    <AnimatedSection className="order-1 md:order-2 min-h-[400px] md:min-h-[600px]">
      <img
        src={image}
        alt="Meditation and mindfulness"
        className="w-full h-full object-cover object-center min-h-[400px] md:min-h-[600px]"
      />
    </AnimatedSection>
  </section>
);

export default FulfillingSection;
