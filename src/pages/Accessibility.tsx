import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Accessibility = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-heading mb-8 text-primary">
            Accessibility Statement
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-heading mb-4 text-foreground">Our Commitment</h2>
              <p className="mb-4">
                RELAX Tea is committed to ensuring digital accessibility for people with disabilities. 
                We are continually improving the user experience for everyone and applying the relevant accessibility standards.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-heading mb-4 text-foreground">Conformance Status</h2>
              <p className="mb-4">
                We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 level AA. 
                These guidelines explain how to make web content more accessible for people with disabilities, 
                and user friendly for everyone.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-heading mb-4 text-foreground">Accessibility Features</h2>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li>Alternative text for images</li>
                <li>Keyboard navigation support</li>
                <li>High contrast color schemes</li>
                <li>Descriptive link text</li>
                <li>Structured content with proper headings</li>
                <li>Form labels and instructions</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-heading mb-4 text-foreground">Feedback</h2>
              <p className="mb-4">
                We welcome your feedback on the accessibility of our website. 
                Please let us know if you encounter accessibility barriers:
              </p>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li>Email: accessibility@relax-tea.com</li>
                <li>Phone: 1-800-RELAX-TEA</li>
                <li>Mail: RELAX Tea Accessibility Team, 123 Tea Street, Portland, OR 97201</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-heading mb-4 text-foreground">Assessment Approach</h2>
              <p className="mb-4">
                RELAX Tea assessed the accessibility of our website by:
              </p>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li>Self-evaluation using accessibility testing tools</li>
                <li>User testing with assistive technologies</li>
                <li>Regular accessibility audits</li>
                <li>Ongoing staff training on accessibility best practices</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Accessibility;