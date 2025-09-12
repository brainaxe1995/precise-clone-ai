import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-primary">
                Join the RELAX Sleep Club
              </h2>
              <p className="text-lg md:text-xl text-primary/70 leading-relaxed">
                Get exclusive access to new sleep support tea releases, expert brewing tips for better rest, 
                and special discounts to help you sleep naturally.
              </p>
            </div>
            
            {/* Newsletter Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 border-primary/20 focus:border-primary"
                />
                <Button 
                  type="submit"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 whitespace-nowrap"
                >
                  Join Now
                </Button>
              </div>
            </form>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-8 text-primary/80">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50K+</div>
                <div className="text-sm">Happy Sleepers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">5★</div>
                <div className="text-sm">Newsletter Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">0</div>
                <div className="text-sm">Spam Promise</div>
              </div>
            </div>
          </div>

          {/* Right Column - Benefits */}
          <div className="space-y-6">
            <div className="bg-secondary/10 p-6 rounded-2xl border border-secondary/20">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">📧</span>
              </div>
              <h3 className="font-semibold mb-2 text-primary">Exclusive Sleep Offers</h3>
              <p className="text-sm text-primary/70">Get first access to sales and member-only discounts on sleep support teas</p>
            </div>
            
            <div className="bg-secondary/10 p-6 rounded-2xl border border-secondary/20">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🌙</span>
              </div>
              <h3 className="font-semibold mb-2 text-primary">New Sleep Blends</h3>
              <p className="text-sm text-primary/70">Be the first to try our latest sleep support tea discoveries</p>
            </div>
            
            <div className="bg-secondary/10 p-6 rounded-2xl border border-secondary/20">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="font-semibold mb-2 text-primary">Sleep Tips</h3>
              <p className="text-sm text-primary/70">Learn bedtime brewing techniques from our sleep wellness experts</p>
            </div>
            
            {/* Fine Print */}
            <p className="text-xs text-primary/60 mt-6">
              We respect your privacy. Unsubscribe at any time. 
              Read our <span className="underline cursor-pointer">Privacy Policy</span> and 
              <span className="underline cursor-pointer"> Terms of Service</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;