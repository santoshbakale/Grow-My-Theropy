import AnimatedSection from "@/components/AnimatedSection";

interface AloneSectionProps {
  image: string;
}

const AloneSection = ({ image }: AloneSectionProps) => (
  <section className="grid grid-cols-1 md:grid-cols-2 gap-0">
    <AnimatedSection className="relative min-h-[400px] md:min-h-[600px]">
      <img
        src={image}
        alt="Woman sitting in sunlight"
        className="w-full h-full object-cover object-center min-h-[400px] md:min-h-[600px]"
      />
    </AnimatedSection>
    <div className="flex flex-col justify-center px-8 md:px-20 py-16">
      <AnimatedSection>
        <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1] mb-6">
          You don't have to do this all <em className="font-normal italic">alone</em>.
        </h2>
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <p className="text-muted-foreground mb-4 text-[15px] font-light">
          If you are facing any of these, there's hope:
        </p>
        <ul className="space-y-2 text-muted-foreground mb-8 list-disc pl-5 text-[15px] font-light">
          <li>Constant worry, tension, or feeling on edge</li>
          <li>Difficulty sleeping or chronic exhaustion</li>
          <li>Lingering effects of past trauma</li>
          <li>Professional burnout or perfectionism</li>
          <li>Feeling disconnected from yourself</li>
        </ul>
        <p className="text-muted-foreground mb-8 text-[15px] font-light">
          My approach is paced carefully, with an emphasis on safety, stabilization, and helping you feel more regulated in your daily life.
        </p>
      </AnimatedSection>
      <AnimatedSection delay={0.2}>
        <a
          href="#"
          className="group inline-flex items-center gap-2 border border-foreground px-8 py-3 text-xs tracking-[0.2em] uppercase font-medium self-start hover:bg-foreground hover:text-background transition-all duration-300"
        >
          Work with me <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </a>
      </AnimatedSection>
    </div>
  </section>
);

export default AloneSection;
