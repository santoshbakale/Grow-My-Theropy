import AnimatedSection from "@/components/AnimatedSection";

interface AboutSectionProps {
  image: string;
}

const AboutSection = ({ image }: AboutSectionProps) => (
  <section className="grid grid-cols-1 md:grid-cols-2 gap-0">
    <div className="flex flex-col justify-center px-8 md:px-20 py-16 order-2 md:order-1">
      <AnimatedSection>
        <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1] mb-6">
          Hi, I'm Dr. Maya.
        </h2>
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <p className="text-muted-foreground leading-relaxed mb-8 text-[15px] font-light">
          I'm a licensed clinical psychologist based in Santa Monica, California, offering therapy for adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences. I take a warm, collaborative, and grounded approach to therapy.
        </p>
      </AnimatedSection>
      <AnimatedSection delay={0.2}>
        <a
          href="#"
          className="group inline-flex items-center gap-2 border border-foreground px-8 py-3 text-xs tracking-[0.2em] uppercase font-medium self-start hover:bg-foreground hover:text-background transition-all duration-300"
        >
          Let's chat <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </a>
      </AnimatedSection>
    </div>
    <AnimatedSection className="order-1 md:order-2 min-h-[400px] md:min-h-[600px]">
      <img src={image} alt="Dr. Maya Reynolds" className="w-full h-full object-cover object-top min-h-[400px] md:min-h-[600px]" />
    </AnimatedSection>
  </section>
);

export default AboutSection;
