import AnimatedSection from "@/components/AnimatedSection";

const backgrounds = [
  { title: "Education", desc: "Doctor of Psychology (PsyD) in Clinical Psychology. Trained in cognitive-behavioral therapy, EMDR, mindfulness-based practices, and body-oriented techniques." },
  { title: "Licensure", desc: "Licensed Clinical Psychologist in the state of California. Providing both in-person therapy from Santa Monica and secure telehealth sessions statewide." },
  { title: "Certifications", desc: "Certified in EMDR therapy, mindfulness-based stress reduction, and trauma-focused cognitive behavioral therapy for adults." },
];

const BackgroundSection = () => (
  <section className="py-24 px-8 md:px-16 max-w-5xl mx-auto">
    <AnimatedSection>
      <p className="text-xs tracking-[0.25em] uppercase text-center mb-14 text-muted-foreground font-medium">
        My Professional Background
      </p>
    </AnimatedSection>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
      {backgrounds.map((bg, i) => (
        <AnimatedSection key={bg.title} delay={i * 0.12}>
          <h4 className="text-2xl mb-4 font-['Cormorant_Garamond',serif]">{bg.title}</h4>
          <p className="text-muted-foreground text-sm leading-relaxed font-light">{bg.desc}</p>
        </AnimatedSection>
      ))}
    </div>
  </section>
);

export default BackgroundSection;
