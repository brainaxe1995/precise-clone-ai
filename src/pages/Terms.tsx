import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-heading mb-8">Terms of Service</h1>
          <p className="text-sm text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-heading mb-4">Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using the RLEX website and purchasing our products, you accept and agree 
                to be bound by the terms and provision of this agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading mb-4">Product Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                RLEX herbal teas are dietary supplements intended to support relaxation and may help 
                with sleep routines. Our products are not intended to diagnose, treat, cure, or 
                prevent any disease.
              </p>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <p className="text-sm text-amber-800">
                  <strong>Important:</strong> Results may vary. Consult your healthcare provider before 
                  use if you are pregnant, nursing, have medical conditions, or take medications.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-heading mb-4">Orders and Payment</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>All orders are subject to acceptance and availability</li>
                <li>Prices are subject to change without notice</li>
                <li>Payment must be received before shipment</li>
                <li>We accept major credit cards and PayPal</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-heading mb-4">Shipping and Delivery</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We ship within the United States. Delivery times may vary based on location and shipping method selected.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Standard shipping: 5-7 business days</li>
                <li>Express shipping: 2-3 business days</li>
                <li>Free shipping on orders over $50</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-heading mb-4">Return Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We offer a 30-day money-back guarantee. If you're not satisfied with your purchase, 
                contact us within 30 days of delivery for a full refund.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading mb-4">Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                RLEX shall not be liable for any direct, indirect, incidental, special, or consequential 
                damages resulting from the use or inability to use our products or website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading mb-4">Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                Questions about these Terms of Service should be sent to us at:
                <br />
                Email: legal@rlex.com
                <br />
                Phone: +1 (555) 123-4567
              </p>
            </section>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Terms;