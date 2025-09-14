import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";

const FAQ = () => {
  const faqs = [
    {
      question: "What is RELAX herbal tea?",
      answer: "RELAX is a premium herbal tea blend designed to support relaxation and may help with your evening routine. Our teas contain natural ingredients like chamomile, lavender, and other calming herbs."
    },
    {
      question: "Is RELAX tea safe?",
      answer: "Yes, RELAX teas are made with 100% natural, premium quality ingredients. However, as with any dietary supplement, we recommend consulting your healthcare provider before use, especially if you are pregnant, nursing, or have medical conditions."
    },
    {
      question: "How does RELAX tea work?",
      answer: "RELAX tea contains natural herbs that have been traditionally used to support relaxation. The ingredients may help promote a sense of calm and support your natural sleep routine, though individual results may vary."
    },
    {
      question: "When should I drink RELAX tea?",
      answer: "We recommend drinking RELAX tea 30-60 minutes before your desired bedtime as part of your evening relaxation routine. This allows time for the natural ingredients to take effect."
    },
    {
      question: "Are there any side effects?",
      answer: "RELAX tea is generally well-tolerated. Some people may experience mild drowsiness, which is the intended effect. If you experience any adverse reactions, discontinue use and consult your healthcare provider."
    },
    {
      question: "Can I drink RELAX tea every night?",
      answer: "Yes, RELAX tea is designed for regular use as part of a healthy evening routine. However, we recommend following the suggested serving instructions on the package."
    },
    {
      question: "Is RELAX tea habit-forming?",
      answer: "No, RELAX tea is made with natural herbs and is not habit-forming. It supports your body's natural relaxation processes without creating dependency."
    },
    {
      question: "How long does shipping take?",
      answer: "We offer standard shipping (5-7 business days) and express shipping (2-3 business days). Always free shipping on all orders in Europe."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day money-back guarantee. If you're not satisfied with your purchase, contact us within 30 days of delivery for a full refund."
    },
    {
      question: "Can I take RELAX tea with medications?",
      answer: "If you are taking any medications or have health conditions, please consult your healthcare provider before using RELAX tea or any herbal supplements."
    },
    {
      question: "Is RELAX tea organic?",
      answer: "Yes, all RELAX tea ingredients are premium quality and sourced from sustainable farms that meet our quality standards."
    },
    {
      question: "How much caffeine is in RELAX tea?",
      answer: "RELAX herbal teas are naturally caffeine-free, making them perfect for evening consumption without interfering with your sleep."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 gradient-green-yellow text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-heading mb-6">
            Frequently Asked <span className="text-primary">Questions</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about RELAX herbal teas and our commitment to natural wellness.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card border border-white/20 rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-heading text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-16 glass-yellow">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center">
            <h2 className="text-2xl font-heading mb-6">Important Notice</h2>
            <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6 border border-white/30">
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong>Disclaimer:</strong> These statements have not been evaluated by the Food and Drug Administration. 
                RELAX products are not intended to diagnose, treat, cure, or prevent any disease. 
                Individual results may vary. Consult your healthcare provider before use if you are pregnant, 
                nursing, have medical conditions, or take medications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading mb-6">Still Have Questions?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our customer support team is here to help. Reach out to us and we'll get back to you within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-medium transition-colors">
                Contact Support
              </button>
            </Link>
            <a href="mailto:help@relaxproduct.com">
              <button className="glass-white border border-white/30 hover:bg-white/10 px-6 py-3 rounded-lg font-medium transition-colors">
                Email Us
              </button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;