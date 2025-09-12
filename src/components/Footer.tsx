import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-header text-header-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">teapoz</h3>
            <p className="text-sm opacity-80 mb-4">
              We are a family run company founded on a passion for tea. Quality is our promise.
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
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Shop</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-accent transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Shipping Info</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Size Guide</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-sm">
              <p>📧 info@teapoz.com</p>
              <p>📞 +1 (555) 123-4567</p>
              <p>📍 123 Tea Street, City, State 12345</p>
            </div>
          </div>
        </div>

        <div className="border-t border-header-foreground/20 mt-8 pt-8 text-center text-sm opacity-80">
          <p>&copy; 2024 Teapoz. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;