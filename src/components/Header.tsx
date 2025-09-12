import { Search, User, Heart, ShoppingCart, Menu, ChevronDown } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Top Banner */}
      <div className="bg-accent text-accent-foreground text-sm py-2 px-4 text-center">
        <div className="container mx-auto">
          Standard Flat Rate Shipping $7.95 - Free Shipping on orders of $50 or more!{" "}
          <span className="underline cursor-pointer">See Detail</span>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-header text-header-foreground sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </button>

            {/* Left Navigation - Desktop */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="hover:text-accent transition-colors flex items-center">
                HOME <ChevronDown className="ml-1 h-4 w-4" />
              </a>
              <a href="#" className="hover:text-accent transition-colors flex items-center">
                SHOP <ChevronDown className="ml-1 h-4 w-4" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                SALE
              </a>
              <a href="#" className="hover:text-accent transition-colors flex items-center">
                BLOG <ChevronDown className="ml-1 h-4 w-4" />
              </a>
              <a href="#" className="hover:text-accent transition-colors flex items-center">
                PAGES <ChevronDown className="ml-1 h-4 w-4" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                CONTACT
              </a>
            </nav>

            {/* Logo */}
            <div className="absolute left-1/2 transform -translate-x-1/2 md:static md:transform-none">
              <h1 className="text-2xl font-bold tracking-wider">teapoz</h1>
            </div>

            {/* Right Side Icons */}
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-2 text-sm">
                <span>ENG</span>
                <ChevronDown className="h-4 w-4" />
                <span className="ml-4">$ USD</span>
                <ChevronDown className="h-4 w-4" />
              </div>
              
              <div className="flex items-center space-x-3">
                <Search className="h-5 w-5 cursor-pointer hover:text-accent transition-colors" />
                <User className="h-5 w-5 cursor-pointer hover:text-accent transition-colors" />
                <span className="hidden md:inline text-sm">Login / Register</span>
                <Heart className="h-5 w-5 cursor-pointer hover:text-accent transition-colors" />
                <div className="relative">
                  <ShoppingCart className="h-5 w-5 cursor-pointer hover:text-accent transition-colors" />
                  <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    0
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-header-foreground/20 py-4">
              <nav className="flex flex-col space-y-4">
                <a href="#" className="hover:text-accent transition-colors">HOME</a>
                <a href="#" className="hover:text-accent transition-colors">SHOP</a>
                <a href="#" className="hover:text-accent transition-colors">SALE</a>
                <a href="#" className="hover:text-accent transition-colors">BLOG</a>
                <a href="#" className="hover:text-accent transition-colors">PAGES</a>
                <a href="#" className="hover:text-accent transition-colors">CONTACT</a>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;