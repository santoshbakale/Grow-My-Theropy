import AnimatedSection from "@/components/AnimatedSection";

const posts = [
  {
    title: "Understanding Anxiety: When Worry Takes Over",
    excerpt: "Anxiety isn't just feeling nervous before a presentation. For many, it's a constant companion that shapes every decision and interaction. Here's what you should know.",
    date: "January 15, 2025",
    category: "Anxiety",
  },
  {
    title: "What Is EMDR Therapy and How Can It Help?",
    excerpt: "Eye Movement Desensitization and Reprocessing (EMDR) is one of the most effective treatments for trauma. Learn how this evidence-based approach works.",
    date: "December 8, 2024",
    category: "Trauma",
  },
  {
    title: "Recognizing Burnout Before It's Too Late",
    excerpt: "Burnout doesn't happen overnight. It's a gradual process that can affect your health, relationships, and sense of self. Here are the signs to watch for.",
    date: "November 20, 2024",
    category: "Burnout",
  },
];

const BlogSection = () => (
  <section id="blog" className="py-24 px-8 md:px-16 bg-secondary/40">
    <AnimatedSection>
      <p className="text-xs tracking-[0.25em] uppercase text-center mb-4 text-muted-foreground font-medium">
        From the Blog
      </p>
      <h2 className="text-4xl md:text-5xl text-center mb-14">
        Insights & Resources
      </h2>
    </AnimatedSection>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
      {posts.map((post, i) => (
        <AnimatedSection key={post.title} delay={i * 0.12}>
          <article className="bg-background p-8 h-full flex flex-col border border-border hover:shadow-md transition-shadow duration-300">
            <span className="text-xs tracking-[0.2em] uppercase text-accent font-medium mb-4">
              {post.category}
            </span>
            <h3 className="text-xl md:text-2xl mb-3 font-['Cormorant_Garamond',serif] leading-snug">
              {post.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed font-light mb-6 flex-1">
              {post.excerpt}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">{post.date}</span>
              <a href="#" className="text-xs tracking-[0.15em] uppercase font-medium hover:text-accent transition-colors duration-300">
                Read more →
              </a>
            </div>
          </article>
        </AnimatedSection>
      ))}
    </div>
  </section>
);

export default BlogSection;
