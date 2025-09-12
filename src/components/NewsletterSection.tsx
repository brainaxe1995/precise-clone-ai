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
    <section className="py-20 bg-gradient-to-br from-accent to-green-600">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Main Content */}
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Join the Tea Club
            </h2>
            <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Get exclusive access to new tea releases, expert brewing tips, special discounts, 
              and become part of our growing community of tea enthusiasts.
            </p>
          </div>
          
          {/* Newsletter Form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/70 focus:bg-white/20"
              />
              <Button 
                type="submit"
                className="bg-white text-accent hover:bg-gray-100 px-8 whitespace-nowrap"
              >
                Join Now
              </Button>
            </div>
          </form>
          
          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📧</span>
              </div>
              <h3 className="font-semibold mb-2">Exclusive Offers</h3>
              <p className="text-sm opacity-80">Get first access to sales and member-only discounts</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🍃</span>
              </div>
              <h3 className="font-semibold mb-2">New Arrivals</h3>
              <p className="text-sm opacity-80">Be the first to try our latest tea discoveries</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="font-semibold mb-2">Expert Tips</h3>
              <p className="text-sm opacity-80">Learn brewing techniques from our tea masters</p>
            </div>
          </div>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-80">
            <div className="text-center">
              <div className="text-2xl font-bold">50K+</div>
              <div className="text-xs">Subscribers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">5★</div>
              <div className="text-xs">Newsletter Rating</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">0</div>
              <div className="text-xs">Spam Promise</div>
            </div>
          </div>
          
          {/* Fine Print */}
          <p className="text-xs opacity-70 mt-6">
            We respect your privacy. Unsubscribe at any time. 
            <br className="hidden sm:inline" />
            Read our <span className="underline cursor-pointer">Privacy Policy</span> and 
            <span className="underline cursor-pointer"> Terms of Service</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;