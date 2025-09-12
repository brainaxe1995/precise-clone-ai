import { Button } from "@/components/ui/button";
import { ShoppingCart, Menu, X, Search, User } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="glass-white sticky top-0 z-50 border-b border-white/20">
      {/* Top Banner */}
      <div className="bg-primary text-primary-foreground text-center py-2 text-sm">
        <p>🌿 Free shipping on orders over $50 | Natural Sleep Support</p>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="glass-green p-2 rounded-lg">
              <span className="text-2xl">🍃</span>
            </div>
            <h1 className="text-2xl font-heading font-bold text-primary">RLEX</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-sm font-medium hover:text-primary transition-colors">Home</a>
            <a href="#shop" className="text-sm font-medium hover:text-primary transition-colors">Shop Now</a>
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">About</a>
            <a href="#blog" className="text-sm font-medium hover:text-primary transition-colors">Blog</a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="glass-green">
              <Search className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="glass-green">
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
          <div className="md:hidden glass-white border-t border-white/20">
            <nav className="flex flex-col space-y-4 py-6">
              <a href="/" className="text-sm font-medium hover:text-primary transition-colors">Home</a>
              <a href="#shop" className="text-sm font-medium hover:text-primary transition-colors">Shop Now</a>
              <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">About</a>
              <a href="#blog" className="text-sm font-medium hover:text-primary transition-colors">Blog</a>
              <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</a>
              <div className="flex flex-col space-y-3 pt-4 border-t border-white/20">
                <Button variant="ghost" className="justify-start glass-green">
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
                <Button variant="ghost" className="justify-start glass-green">
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