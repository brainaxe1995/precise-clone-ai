import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section className="bg-about text-about-foreground py-20 animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Label */}
          <p className="text-accent text-sm font-medium tracking-wider uppercase mb-6 animate-slide-up">
            ABOUT RELEX
          </p>
          
          {/* Main Heading */}
          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight animate-slide-in-left">
            Natural Evening <br />
            Wellness Support
          </h2>
          
          {/* Description */}
          <p className="text-lg md:text-xl leading-relaxed mb-10 opacity-90 max-w-3xl mx-auto animate-slide-in-right">
            At RELEX, we believe in the power of nature to support your evening routine. Our carefully crafted herbal blends are designed for those seeking natural ways to unwind and prepare for restful nights. Every cup is made with premium organic ingredients to support your wellness journey.
          </p>
          
          {/* CTA Button */}
          <Button 
            variant="outline" 
            size="lg" 
            className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-base font-medium transition-all duration-300 animate-bounce-in"
          >
            Discover Our Story
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;