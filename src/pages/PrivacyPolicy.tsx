import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-heading mb-8">Privacy Policy</h1>
          <p className="text-sm text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-heading mb-4">Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We collect information you provide directly to us, such as when you create an account, 
                make a purchase, sign up for our newsletter, or contact us.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Contact information (name, email address, phone number, shipping address)</li>
                <li>Payment information (processed securely through our payment providers)</li>
                <li>Account credentials (username, password)</li>
                <li>Communication preferences</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-heading mb-4">How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Process and fulfill your orders</li>
                <li>Send you important updates about your orders</li>
                <li>Respond to your customer service requests</li>
                <li>Send marketing communications (with your consent)</li>
                <li>Improve our products and services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-heading mb-4">Information Sharing</h2>
              <p className="text-muted-foreground leading-relaxed">
                We do not sell, trade, or otherwise transfer your personal information to third parties 
                except as described in this privacy policy. We may share your information with trusted 
                service providers who assist us in operating our website and conducting our business.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading mb-4">Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate security measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading mb-4">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at:
                <br />
                Email: help@relaxproduct.com
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

export default PrivacyPolicy;