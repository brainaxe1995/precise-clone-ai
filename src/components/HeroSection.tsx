import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-tea-pouring.jpg";

const HeroSection = () => {
  return (
    <section 
      className="relative min-h-[80vh] bg-hero text-hero-foreground flex items-center"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-hero/60"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          {/* Accent Text */}
          <p className="text-hero-accent text-sm font-medium tracking-wider uppercase mb-4">
            ORGANIC GREEN TEA
          </p>
          
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Start Your <br />
            Relaxing Life <br />
            Today
          </h1>
          
          {/* Description */}
          <p className="text-lg md:text-xl mb-8 opacity-90">
            The wonderful taste of life.
          </p>
          
          {/* CTA Button */}
          <Button 
            size="lg" 
            className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 text-base font-medium transition-all duration-300"
          >
            Shop Our Teas
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;