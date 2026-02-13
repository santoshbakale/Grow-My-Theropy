import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // placeholder: would send to backend
    alert("Thank you for reaching out! I'll get back to you within 24–48 hours.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-48 px-8 md:px-16 bg-secondary/30">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-32 items-center">
        <div>
          <AnimatedSection>
            <p className="text-xs tracking-[0.25em] uppercase mb-4 text-muted-foreground font-medium">
              Get In Touch
            </p>
            <h2 className="text-6xl md:text-7xl lg:text-[5rem] mb-10 leading-[1.05]">
              Let's start a conversation.
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="text-muted-foreground text-xl md:text-2xl font-light leading-relaxed mb-12 max-w-xl">
              Whether you're ready to book your first session or simply have questions about the process, I'd love to hear from you. I typically respond within 24–48 hours.
            </p>
            <div className="space-y-8 text-lg">
              <div className="flex items-start gap-6">
                <span className="text-accent text-2xl mt-0.5">📍</span>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-muted-foreground font-light text-lg">Santa Monica, California</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <span className="text-accent text-2xl mt-0.5">📧</span>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground font-light text-lg">hello@drmayareynolds.com</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <span className="text-accent text-2xl mt-0.5">🕐</span>
                <div>
                  <p className="font-medium">Hours</p>
                  <p className="text-muted-foreground font-light text-lg">Monday – Friday, 9am – 5pm PT</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
        <AnimatedSection delay={0.2}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-xs tracking-[0.15em] uppercase font-medium mb-2">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full border border-border bg-background px-8 py-5 text-lg font-light focus:outline-none focus:ring-1 focus:ring-accent transition-all"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs md:text-sm tracking-[0.15em] uppercase font-medium mb-3">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full border border-border bg-background px-8 py-5 text-lg font-light focus:outline-none focus:ring-1 focus:ring-accent transition-all"
                placeholder="you@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-xs md:text-sm tracking-[0.15em] uppercase font-medium mb-3">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full border border-border bg-background px-8 py-5 text-lg font-light focus:outline-none focus:ring-1 focus:ring-accent transition-all resize-none"
                placeholder="Tell me a bit about what you're looking for..."
              />
            </div>
            <button
              type="submit"
              className="group inline-flex items-center gap-3 bg-accent text-accent-foreground px-12 py-5 text-base tracking-[0.2em] uppercase font-medium hover:opacity-90 transition-all duration-300"
            >
              Send message <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </button>
          </form>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ContactSection;
