import { Button } from "@/components/ui/button";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-card sticky top-0 z-50 border-b border-border animate-fade-in">
      {/* Top Banner */}
      <div className="bg-primary text-primary-foreground text-center py-2 text-sm">
        <p>🌿 Always free shipping | Premium Evening Wellness</p>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <img src="/src/assets/relax-logo.png" alt="RELAX" className="h-8 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" onClick={() => window.scrollTo(0, 0)} className="text-sm font-medium hover:text-primary transition-colors">Home</Link>
            <Link to="/shop" onClick={() => window.scrollTo(0, 0)} className="text-sm font-medium hover:text-primary transition-colors">Shop Now</Link>
            <Link to="/blog" onClick={() => window.scrollTo(0, 0)} className="text-sm font-medium hover:text-primary transition-colors">Blog</Link>
            <Link to="/about" onClick={() => window.scrollTo(0, 0)} className="text-sm font-medium hover:text-primary transition-colors">About</Link>
            <Link to="/contact" onClick={() => window.scrollTo(0, 0)} className="text-sm font-medium hover:text-primary transition-colors">Contact</Link>
            <Link to="/faq" onClick={() => window.scrollTo(0, 0)} className="text-sm font-medium hover:text-primary transition-colors">FAQ</Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/shop" onClick={() => window.scrollTo(0, 0)}>
              <Button variant="default" size="sm" className="bg-green-800 hover:bg-green-700 text-white font-bold">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Shop Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-card border-t border-border animate-slide-up">
            <nav className="flex flex-col space-y-4 py-6">
              <Link to="/" onClick={() => { window.scrollTo(0, 0); setIsMenuOpen(false); }} className="text-sm font-medium hover:text-primary transition-colors">Home</Link>
              <Link to="/shop" onClick={() => { window.scrollTo(0, 0); setIsMenuOpen(false); }} className="text-sm font-medium hover:text-primary transition-colors">Shop Now</Link>
              <Link to="/blog" onClick={() => { window.scrollTo(0, 0); setIsMenuOpen(false); }} className="text-sm font-medium hover:text-primary transition-colors">Blog</Link>
              <Link to="/about" onClick={() => { window.scrollTo(0, 0); setIsMenuOpen(false); }} className="text-sm font-medium hover:text-primary transition-colors">About</Link>
              <Link to="/contact" onClick={() => { window.scrollTo(0, 0); setIsMenuOpen(false); }} className="text-sm font-medium hover:text-primary transition-colors">Contact</Link>
              <Link to="/faq" onClick={() => { window.scrollTo(0, 0); setIsMenuOpen(false); }} className="text-sm font-medium hover:text-primary transition-colors">FAQ</Link>
              <div className="flex flex-col space-y-3 pt-4 border-t border-border">
                <Link to="/shop" onClick={() => { window.scrollTo(0, 0); setIsMenuOpen(false); }}>
                  <Button variant="default" className="bg-green-800 hover:bg-green-700 text-white font-bold w-full">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Shop Now
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;