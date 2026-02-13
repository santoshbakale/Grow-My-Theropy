import AnimatedSection from "@/components/AnimatedSection";
import office1 from "@/assets/office-1.jpg";
import office2 from "@/assets/office-2.jpg";

const OfficeSection = () => (
  <section id="office" className="py-24 px-8 md:px-16">
    <AnimatedSection>
      <p className="text-xs tracking-[0.25em] uppercase text-center mb-4 text-muted-foreground font-medium">
        Our Office
      </p>
      <h2 className="text-4xl md:text-5xl text-center mb-6">
        A space designed for healing.
      </h2>
      <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16 text-[15px] font-light leading-relaxed">
        My practice is located in the heart of Santa Monica, California—a warm, sunlit space designed to help you feel safe, grounded, and at ease from the moment you walk in. Whether you join in person or via secure telehealth, your comfort and privacy are always the priority.
      </p>
    </AnimatedSection>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
      <AnimatedSection delay={0.1} className="overflow-hidden rounded-lg">
        <img
          src={office1}
          alt="Therapy office seating area with natural light"
          className="w-full h-[400px] object-cover object-center hover:scale-105 transition-transform duration-700"
        />
      </AnimatedSection>
      <AnimatedSection delay={0.2} className="overflow-hidden rounded-lg">
        <img
          src={office2}
          alt="Cozy counseling room with bookshelf and plants"
          className="w-full h-[400px] object-cover object-center hover:scale-105 transition-transform duration-700"
        />
      </AnimatedSection>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
      <AnimatedSection delay={0.15}>
        <div className="mb-3 text-accent text-2xl">📍</div>
        <h4 className="text-xl mb-2 font-['Cormorant_Garamond',serif]">Santa Monica, CA</h4>
        <p className="text-muted-foreground text-sm font-light">
          Conveniently located in Santa Monica with easy parking and access.
        </p>
      </AnimatedSection>
      <AnimatedSection delay={0.25}>
        <div className="mb-3 text-accent text-2xl">🏠</div>
        <h4 className="text-xl mb-2 font-['Cormorant_Garamond',serif]">In-Person & Telehealth</h4>
        <p className="text-muted-foreground text-sm font-light">
          Flexible session options—meet in-office or via secure video throughout California.
        </p>
      </AnimatedSection>
      <AnimatedSection delay={0.35}>
        <div className="mb-3 text-accent text-2xl">🔒</div>
        <h4 className="text-xl mb-2 font-['Cormorant_Garamond',serif]">Safe & Private</h4>
        <p className="text-muted-foreground text-sm font-light">
          A confidential, comfortable environment where you can be fully yourself.
        </p>
      </AnimatedSection>
    </div>
  </section>
);

export default OfficeSection;
