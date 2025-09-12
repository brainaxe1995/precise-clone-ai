import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-heading mb-8 text-primary">
            Cookie Policy
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-heading mb-4 text-foreground">What Are Cookies</h2>
              <p className="mb-4">
                Cookies are small text files that are stored on your computer or mobile device when you visit a website. 
                They help us provide you with a better experience by remembering your preferences and understanding how you use our site.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-heading mb-4 text-foreground">How We Use Cookies</h2>
              <p className="mb-4">We use cookies for several purposes:</p>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li>Essential cookies: Required for the website to function properly</li>
                <li>Analytics cookies: Help us understand how visitors interact with our website</li>
                <li>Marketing cookies: Used to deliver relevant advertisements</li>
                <li>Preference cookies: Remember your settings and preferences</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-heading mb-4 text-foreground">Managing Cookies</h2>
              <p className="mb-4">
                You can control and manage cookies in various ways. Please note that removing or blocking cookies 
                may impact your user experience and parts of our website may no longer be fully accessible.
              </p>
              <p className="mb-4">
                Most web browsers allow you to control cookies through their settings preferences. 
                To find out more about cookies, including how to see what cookies have been set, 
                visit www.aboutcookies.org or www.allaboutcookies.org.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-heading mb-4 text-foreground">Contact Us</h2>
              <p>
                If you have any questions about this Cookie Policy, please contact us at:
                <br />
                Email: support@relex-tea.com
                <br />
                Phone: 1-800-RELEX-TEA
              </p>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CookiePolicy;