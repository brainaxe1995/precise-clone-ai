import { Button } from "@/components/ui/button";
import teaPlantationImage from "@/assets/tea-plantation.jpg";

const FindRightTeaSection = () => {
  return (
    <section 
      className="py-20 relative"
      style={{
        backgroundImage: `url(${teaPlantationImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark Green Overlay */}
      <div className="absolute inset-0 bg-header/85"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center text-white max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Experience Natural<br />
            Evening Wellness
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90 leading-relaxed">
            Discover our premium herbal tea blends crafted with carefully selected natural ingredients. 
            Join thousands who have made Relax Herbal Tea part of their nightly routine for better rest and relaxation.
          </p>
          
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 text-base font-medium"
          >
            Shop Premium Blends
          </Button>
          
          {/* Additional Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="font-semibold mb-2">100% Organic</h3>
              <p className="text-sm opacity-80">Certified organic tea leaves sourced from the finest gardens</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="font-semibold mb-2">Award Winning</h3>
              <p className="text-sm opacity-80">Recognized internationally for quality and taste</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚚</span>
              </div>
              <h3 className="font-semibold mb-2">Free Delivery</h3>
              <p className="text-sm opacity-80">Free shipping on orders over $50 worldwide</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindRightTeaSection;