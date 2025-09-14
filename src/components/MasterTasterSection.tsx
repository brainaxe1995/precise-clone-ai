import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import teaPackageImage from "@/assets/tea-package-green.jpg";
import { Link } from "react-router-dom";

const MasterTasterSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-green-50 to-lime-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Product Image */}
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <Badge className="mb-4 bg-red-500 text-white">Limited Edition</Badge>
              <img 
                src="https://afterdarkusa.com/wp-content/uploads/2025/09/teaPackges.png"
                alt="Master Tea Tester Selection" 
                className="w-full h-80 object-cover rounded-lg mb-6"
              />
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">Master Tea Tester Selections</h3>
                <p className="text-gray-600 mb-4">Handpicked by our head tea master</p>
                <div className="text-3xl font-bold text-accent mb-4">$24.99</div>
                <Button 
                  className="w-full bg-green-800 hover:bg-green-700 text-white font-bold py-3 shadow-lg transition-all duration-300 hover:scale-105"
                  onClick={() => {
                    window.location.href = 'https://pay.relaxproduct.com/relax-tea/';
                  }}
                >
                  Buy Now
                </Button>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
              Master<br/>Choice
            </div>
          </div>
          
          {/* Right - Content */}
          <div className="space-y-6">
            <div className="inline-block">
              <Badge variant="outline" className="text-accent border-accent">
                MASTER TEA TESTER
              </Badge>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Master Tea Tester<br />
              Selections
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Our Master Tea Tester, with over 30 years of experience, personally selects 
              and curates these exceptional teas. Each selection represents the pinnacle 
              of quality, flavor, and craftsmanship in the tea world.
            </p>
            
            {/* Features */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-gray-700">Hand-selected premium tea leaves</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-gray-700">Limited seasonal availability</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-gray-700">Premium quality and ethically sourced</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-gray-700">Exclusive tasting notes included</span>
              </div>
            </div>
            
            {/* New Brand Features */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">🌱</div>
                <div className="text-sm text-gray-600 font-semibold">Fresh Selection</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">🇪🇺</div>
                <div className="text-sm text-gray-600 font-semibold">Europe Crafted</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">⭐</div>
                <div className="text-sm text-gray-600 font-semibold">Premium Quality</div>
              </div>
            </div>
            
            <Link to="/about" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-accent text-accent hover:bg-accent hover:text-white"
              >
                Learn More About Our Process
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MasterTasterSection;