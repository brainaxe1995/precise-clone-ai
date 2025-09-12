import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <footer className="bg-header text-header-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-4">
              <div className="glass-green p-2 rounded-lg">
                <span className="text-xl">🍃</span>
              </div>
              <h3 className="text-2xl font-heading font-bold">RELEX</h3>
            </div>
            <p className="text-sm opacity-90 leading-relaxed mb-4">
              Premium herbal teas designed to support natural relaxation and evening routines. 
              Made with 100% organic ingredients for your wellness journey.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 cursor-pointer hover:text-accent transition-colors" />
              <Twitter className="h-5 w-5 cursor-pointer hover:text-accent transition-colors" />
              <Instagram className="h-5 w-5 cursor-pointer hover:text-accent transition-colors" />
              <Youtube className="h-5 w-5 cursor-pointer hover:text-accent transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-accent transition-colors opacity-90 hover:opacity-100">About Us</a></li>
              <li><a href="#" className="hover:text-accent transition-colors opacity-90 hover:opacity-100">Our Story</a></li>
              <li><a href="#" className="hover:text-accent transition-colors opacity-90 hover:opacity-100">Tea Education</a></li>
              <li><a href="#" className="hover:text-accent transition-colors opacity-90 hover:opacity-100">Sustainability</a></li>
              <li><a href="#" className="hover:text-accent transition-colors opacity-90 hover:opacity-100">Wholesale</a></li>
              <li><a href="#" className="hover:text-accent transition-colors opacity-90 hover:opacity-100">Press</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Customer Service</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-accent transition-colors opacity-90 hover:opacity-100">Contact Us</a></li>
              <li><a href="#" className="hover:text-accent transition-colors opacity-90 hover:opacity-100">FAQ</a></li>
              <li><a href="#" className="hover:text-accent transition-colors opacity-90 hover:opacity-100">Shipping Info</a></li>
              <li><a href="#" className="hover:text-accent transition-colors opacity-90 hover:opacity-100">Returns & Exchanges</a></li>
              <li><a href="#" className="hover:text-accent transition-colors opacity-90 hover:opacity-100">Size Guide</a></li>
              <li><a href="#" className="hover:text-accent transition-colors opacity-90 hover:opacity-100">Track Your Order</a></li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Stay Connected</h4>
            
            {/* Contact Info */}
            <div className="space-y-3 text-sm mb-6">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-accent" />
                <span className="opacity-90">info@relex-tea.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-accent" />
                <span className="opacity-90">1-800-RELEX-TEA</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-accent mt-0.5" />
                <span className="opacity-90">123 Wellness Ave<br />Portland, OR 97201</span>
              </div>
            </div>
            
            {/* Mini Newsletter */}
            <div>
              <h5 className="font-medium mb-3">Newsletter</h5>
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <Input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
                />
                <Button 
                  type="submit" 
                  size="sm" 
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                >
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Additional Footer Links - Removed Categories Section */}
        <div className="border-t border-header-foreground/20 pt-8">
          <div className="text-center mb-8">
            <p className="text-sm opacity-80 mb-4">© 2024 RELEX Tea. All rights reserved.</p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6">
              <div className="flex gap-6">
                <a href="/privacy" className="text-sm hover:text-accent transition-colors opacity-80 hover:opacity-100">
                  Privacy Policy
                </a>
                <a href="/terms" className="text-sm hover:text-accent transition-colors opacity-80 hover:opacity-100">
                  Terms of Service
                </a>
                <a href="/cookies" className="text-sm hover:text-accent transition-colors opacity-80 hover:opacity-100">
                  Cookie Policy
                </a>
                <a href="/accessibility" className="text-sm hover:text-accent transition-colors opacity-80 hover:opacity-100">
                  Accessibility
                </a>
              </div>
              
              <div className="flex items-center gap-3 text-xs opacity-70">
                <span>💳 Secure Payment</span>
                <span>🔒 SSL Protected</span>
                <span>🇺🇸 Made in USA</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Removed as per request */}
    </footer>
  );
};

export default Footer;