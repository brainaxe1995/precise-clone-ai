import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-tea-pouring.jpg";

const HeroSection = () => {
  return (
    <section 
      className="relative min-h-[90vh] flex items-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 gradient-overlay"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          {/* Trust badge */}
          <div className="glass-white inline-flex items-center px-4 py-2 rounded-full mb-6">
            <span className="text-yellow-400 mr-2">⭐⭐⭐⭐⭐</span>
            <span className="text-sm font-medium text-white">Trusted by 50,000+ customers</span>
          </div>
          
          {/* Accent Text */}
          <p className="text-hero-accent text-sm font-medium tracking-wider uppercase mb-4 font-body">
            Natural Herbal Tea
          </p>
          
          {/* Main Heading */}
          <h1 className="text-4xl md:text-7xl font-heading leading-tight mb-6 text-white">
            Natural Sleep <br />
            Support with <br />
            <span className="text-accent">RLEX Tea</span>
          </h1>
          
          {/* Description */}
          <p className="text-lg md:text-xl mb-8 text-white/90 font-body leading-relaxed max-w-2xl">
            Experience gentle relaxation with our premium herbal tea blend. 
            May help support your natural sleep routine and promote a calm mind.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button 
              size="lg" 
              className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 text-lg font-medium transition-all duration-300 hover-scale"
            >
              Try RLEX Tea Now
            </Button>
            <Button 
              variant="outline"
              size="lg" 
              className="glass-white text-white border-white/30 hover:bg-white/10 px-8 py-4 text-lg font-medium"
            >
              Learn More
            </Button>
          </div>
          
          {/* Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
            <div className="glass-white p-4 rounded-xl text-center">
              <div className="text-3xl mb-2">🌿</div>
              <h3 className="font-semibold text-white mb-1">100% Natural</h3>
              <p className="text-sm text-white/80">Organic herbal ingredients</p>
            </div>
            <div className="glass-white p-4 rounded-xl text-center">
              <div className="text-3xl mb-2">😌</div>
              <h3 className="font-semibold text-white mb-1">Supports Relaxation</h3>
              <p className="text-sm text-white/80">May help calm your mind</p>
            </div>
            <div className="glass-white p-4 rounded-xl text-center">
              <div className="text-3xl mb-2">🚚</div>
              <h3 className="font-semibold text-white mb-1">Free Shipping</h3>
              <p className="text-sm text-white/80">On orders over $50</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;