import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-tea-pouring.jpg";

const HeroSection = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center md:text-left">
          {/* Trust badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full mb-8 bg-white/10 backdrop-blur-md border border-white/20 animate-fade-in">
            <span className="text-accent mr-3 text-lg">⭐⭐⭐⭐⭐</span>
            <span className="text-sm font-medium text-white">Trusted by 50,000+ Americans</span>
          </div>
          
          {/* Accent Text */}
          <p className="text-secondary text-base font-medium tracking-wider uppercase mb-6 font-body animate-slide-up">
            Premium American Herbal Tea
          </p>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-8xl font-heading leading-tight mb-8 text-white animate-scale-in">
            Natural Sleep <br />
            Support with <br />
            <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">RELEX Tea</span>
          </h1>
          
          {/* Description */}
          <p className="text-xl md:text-2xl mb-12 text-white/90 font-body leading-relaxed max-w-3xl animate-fade-in">
            Experience gentle relaxation with our premium herbal tea blend crafted in the USA. 
            May help support your natural sleep routine and promote a calm, peaceful mind.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 mb-16 justify-center md:justify-start animate-slide-up">
            <Button 
              size="lg" 
              className="bg-accent text-accent-foreground hover:bg-accent/90 px-12 py-6 text-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Shop RELEX Tea Now
            </Button>
            <Button 
              variant="outline"
              size="lg" 
              className="bg-white/10 backdrop-blur-md text-white border-white/30 hover:bg-white/20 px-12 py-6 text-xl font-semibold transition-all duration-300"
            >
              Learn More
            </Button>
          </div>
          
          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-fade-in">
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl text-center border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="text-5xl mb-4">🌿</div>
              <h3 className="font-semibold text-white mb-3 text-lg">100% Natural</h3>
              <p className="text-white/80">Premium organic ingredients sourced in the USA</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl text-center border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="text-5xl mb-4">😌</div>
              <h3 className="font-semibold text-white mb-3 text-lg">Supports Relaxation</h3>
              <p className="text-white/80">May help calm your mind for better rest</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl text-center border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="text-5xl mb-4">🚚</div>
              <h3 className="font-semibold text-white mb-3 text-lg">Always Free Shipping</h3>
              <p className="text-white/80">Fast delivery across the USA</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating elements animation */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-accent/30 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-secondary/30 rounded-full animate-bounce"></div>
      <div className="absolute bottom-32 left-20 w-3 h-3 bg-accent/40 rounded-full animate-ping"></div>
    </section>
  );
};

export default HeroSection;