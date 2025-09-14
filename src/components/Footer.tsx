import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

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
              <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <img src="/src/assets/relax-logo.png" alt="RELAX" className="h-8 w-auto mb-2" />
              </Link>
            </div>
            <p className="text-sm opacity-90 leading-relaxed mb-4">
              Premium herbal teas designed to support natural relaxation and evening routines. 
              Made with 100% organic ingredients for your wellness journey.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com/relaxproduct" target="_blank" rel="noopener noreferrer">
                <Facebook className="h-5 w-5 cursor-pointer hover:text-accent transition-colors" />
              </a>
              <a href="https://twitter.com/relaxproduct" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-5 w-5 cursor-pointer hover:text-accent transition-colors" />
              </a>
              <a href="https://instagram.com/relaxproduct" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-5 w-5 cursor-pointer hover:text-accent transition-colors" />
              </a>
              <a href="https://youtube.com/relaxproduct" target="_blank" rel="noopener noreferrer">
                <Youtube className="h-5 w-5 cursor-pointer hover:text-accent transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" onClick={() => window.scrollTo(0, 0)} className="hover:text-accent transition-colors opacity-90 hover:opacity-100">About Us</Link></li>
              <li><Link to="/shop" onClick={() => window.scrollTo(0, 0)} className="hover:text-accent transition-colors opacity-90 hover:opacity-100">Shop Now</Link></li>
              <li><Link to="/blog" onClick={() => window.scrollTo(0, 0)} className="hover:text-accent transition-colors opacity-90 hover:opacity-100">Wellness Blog</Link></li>
              <li><Link to="/contact" onClick={() => window.scrollTo(0, 0)} className="hover:text-accent transition-colors opacity-90 hover:opacity-100">Contact Us</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Customer Service</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/contact" onClick={() => window.scrollTo(0, 0)} className="hover:text-accent transition-colors opacity-90 hover:opacity-100">Contact Us</Link></li>
              <li><Link to="/faq" onClick={() => window.scrollTo(0, 0)} className="hover:text-accent transition-colors opacity-90 hover:opacity-100">FAQ</Link></li>
              <li><span className="opacity-60">Always Free Shipping</span></li>
              <li><span className="opacity-60">30-Day Wellness Guarantee</span></li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Stay Connected</h4>
            
            {/* Contact Info */}
            <div className="space-y-3 text-sm mb-6">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-accent" />
                <a href="mailto:help@relaxproduct.com" className="opacity-90 hover:text-accent transition-colors">help@relaxproduct.com</a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-accent" />
                <a href="tel:+12892467209" className="opacity-90 hover:text-accent transition-colors">+12892467209</a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-accent" />
                <a href="tel:+31618474790" className="opacity-90 hover:text-accent transition-colors">+31618474790</a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-accent mt-0.5" />
                <span className="opacity-90">Atlantica Marketing Beheer B.V.<br />Kvk-nummer 92016995<br />Tijnmuiden 15<br />1046AK Amsterdam</span>
              </div>
            </div>
            
          </div>
        </div>

        {/* Additional Footer Links - Removed Categories Section */}
        <div className="border-t border-header-foreground/20 pt-8">
          <div className="text-center mb-8">
            <p className="text-sm opacity-80 mb-4">© 2025 RELAX Tea. All rights reserved.</p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6">
              <div className="flex gap-6">
                <Link to="/privacy" onClick={() => window.scrollTo(0, 0)} className="text-sm hover:text-accent transition-colors opacity-80 hover:opacity-100">
                  Privacy Policy
                </Link>
                <Link to="/terms" onClick={() => window.scrollTo(0, 0)} className="text-sm hover:text-accent transition-colors opacity-80 hover:opacity-100">
                  Terms of Service
                </Link>
                <Link to="/cookies" onClick={() => window.scrollTo(0, 0)} className="text-sm hover:text-accent transition-colors opacity-80 hover:opacity-100">
                  Cookie Policy
                </Link>
                <Link to="/accessibility" onClick={() => window.scrollTo(0, 0)} className="text-sm hover:text-accent transition-colors opacity-80 hover:opacity-100">
                  Accessibility
                </Link>
              </div>
              
              <div className="flex items-center gap-3 text-xs opacity-70">
                <span>💳 Secure Payment</span>
                <span>🔒 SSL Protected</span>
                <span>🇪🇺 Quality from Europe</span>
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