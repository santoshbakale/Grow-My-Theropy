import AnimatedSection from "@/components/AnimatedSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { value: "insurance", question: "Do you take insurance?", answer: "I am an out-of-network provider. I can provide a superbill for you to submit to your insurance company for potential reimbursement." },
  { value: "rates", question: "What are your rates?", answer: "Please contact me directly for current session rates. I offer both in-person sessions in Santa Monica and secure telehealth sessions for clients in California." },
  { value: "openings", question: "Do you have any openings?", answer: "I typically have a few openings each month. Please reach out to discuss availability and whether we might be a good fit to work together." },
  { value: "approach", question: "What is your therapeutic approach?", answer: "I integrate evidence-based methods including CBT, EMDR, mindfulness-based practices, and body-oriented techniques tailored to each client's needs." },
];

const FaqSection = () => (
  <section className="py-24 px-8 md:px-16 max-w-3xl mx-auto">
    <AnimatedSection>
      <h2 className="text-4xl md:text-5xl text-center mb-14">FAQs</h2>
    </AnimatedSection>
    <AnimatedSection delay={0.15}>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq) => (
          <AccordionItem key={faq.value} value={faq.value} className="border-b border-border">
            <AccordionTrigger className="text-lg font-['Cormorant_Garamond',serif] py-6 hover:no-underline hover:opacity-70 transition-opacity">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-6 text-[15px] font-light">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </AnimatedSection>
  </section>
);

export default FaqSection;
