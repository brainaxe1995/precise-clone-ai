import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section className="bg-about text-about-foreground py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Label */}
          <p className="text-accent text-sm font-medium tracking-wider uppercase mb-6">
            ABOUT US
          </p>
          
          {/* Main Heading */}
          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
            Welcome to Our <br />
            Tea Store
          </h2>
          
          {/* Description */}
          <p className="text-lg md:text-xl leading-relaxed mb-10 opacity-90 max-w-3xl mx-auto">
            We are a family run company founded on a passion for tea. Our Chairman made a promise to never sell tea he wouldn't drink at home. Learn how we stay true to those values in everything we do.
          </p>
          
          {/* CTA Button */}
          <Button 
            variant="outline" 
            size="lg" 
            className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-base font-medium transition-all duration-300"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;