import { Button } from "@/components/ui/button";
import { ShoppingCart, Menu, X, Search, User } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-card sticky top-0 z-50 border-b border-border animate-fade-in">
      {/* Top Banner */}
      <div className="bg-primary text-primary-foreground text-center py-2 text-sm">
        <p>🌿 Free shipping on orders over $50 | May Support Natural Sleep</p>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-primary/10 p-2 rounded-lg">
              <span className="text-2xl">🍃</span>
            </div>
            <h1 className="text-2xl font-heading font-bold text-primary">RLEX</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-sm font-medium hover:text-primary transition-colors">Home</a>
            <a href="/shop" className="text-sm font-medium hover:text-primary transition-colors">Shop Now</a>
            <a href="/about" className="text-sm font-medium hover:text-primary transition-colors">About</a>
            <a href="/contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</a>
            <a href="/faq" className="text-sm font-medium hover:text-primary transition-colors">FAQ</a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="bg-muted">
              <Search className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="bg-muted">
              <User className="h-4 w-4" />
            </Button>
            <Button variant="default" size="sm" className="bg-primary hover:bg-primary/90">
              <ShoppingCart className="h-4 w-4 mr-2" />
              Cart (0)
            </Button>
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
              <a href="/" className="text-sm font-medium hover:text-primary transition-colors">Home</a>
              <a href="/shop" className="text-sm font-medium hover:text-primary transition-colors">Shop Now</a>
              <a href="/about" className="text-sm font-medium hover:text-primary transition-colors">About</a>
              <a href="/contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</a>
              <a href="/faq" className="text-sm font-medium hover:text-primary transition-colors">FAQ</a>
              <div className="flex flex-col space-y-3 pt-4 border-t border-border">
                <Button variant="ghost" className="justify-start bg-muted">
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
                <Button variant="ghost" className="justify-start bg-muted">
                  <User className="h-4 w-4 mr-2" />
                  Account
                </Button>
                <Button variant="default" className="bg-primary hover:bg-primary/90">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Cart (0)
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;