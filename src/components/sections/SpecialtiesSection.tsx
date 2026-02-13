import AnimatedSection from "@/components/AnimatedSection";

interface SpecialtiesSectionProps {
  images: {
    anxiety: string;
    trauma: string;
    burnout: string;
  };
}

const specialties = [
  { title: "Anxiety & Panic", imageKey: "anxiety" as const, alt: "Person experiencing anxiety", desc: "Constant worry, tension in your body, or a sense that you're always bracing for something to go wrong. I help clients find calm and clarity." },
  { title: "Trauma & PTSD", imageKey: "trauma" as const, alt: "Understanding PTSD illustration", desc: "Whether from a single incident or complex, long-standing patterns, I help clients process trauma safely using EMDR and body-oriented techniques." },
  { title: "Burnout", imageKey: "burnout" as const, alt: "Person experiencing burnout at work", desc: "Many professionals feel disconnected after years of pushing through stress. Together, we'll develop more sustainable ways of living and working." },
];

const SpecialtiesSection = ({ images }: SpecialtiesSectionProps) => (
  <section className="py-24 px-8 md:px-16">
    <AnimatedSection>
      <p className="text-xs tracking-[0.25em] uppercase text-center mb-14 text-muted-foreground font-medium">
        My Specialties
      </p>
    </AnimatedSection>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
      {specialties.map((s, i) => (
        <AnimatedSection key={s.title} delay={i * 0.15} className="flex flex-col items-center text-center">
          <div className="w-full aspect-[3/4] rounded-t-full overflow-hidden mb-6 bg-secondary">
            <img
              src={images[s.imageKey]}
              alt={s.alt}
              className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
              loading="lazy"
            />
          </div>
          <h3 className="text-2xl md:text-[1.75rem] mb-3">{s.title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed px-4 font-light">
            {s.desc}
          </p>
        </AnimatedSection>
      ))}
    </div>
  </section>
);

export default SpecialtiesSection;
