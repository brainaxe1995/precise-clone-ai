import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-tea-pouring.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-secondary/20 to-primary/5 py-20">
      <div className="container mx-auto px-4">
        {/* Trust badge */}
        <div className="flex justify-center mb-12 animate-fade-in">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-white shadow-lg border border-primary/10">
            <span className="text-primary mr-3 text-lg">⭐⭐⭐⭐⭐</span>
            <span className="text-sm font-semibold text-primary">Trusted by 50,000+ Americans</span>
          </div>
        </div>

        {/* Main Content - Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Mobile: Image First, Desktop: Text First */}
          <div className="order-2 lg:order-1 animate-slide-up">
            <p className="text-primary/80 text-lg font-medium tracking-wider uppercase mb-6 font-heading">
              Premium American Herbal Tea
            </p>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading leading-tight mb-8 text-primary">
              Premium Evening Wellness with{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-bold">
                RELAX Tea
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-primary/70 leading-relaxed">
              Experience gentle relaxation with our premium herbal tea blend crafted in the USA. 
              Perfect for your evening relaxation routine and peaceful moments.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg font-bold transition-all duration-500 hover:scale-105 shadow-xl rounded-full"
              >
                Shop RELAX Tea Now
              </Button>
              <Button 
                variant="outline"
                size="lg" 
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg font-bold transition-all duration-500 rounded-full"
              >
                Learn More
              </Button>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl mb-2">🌿</div>
                <p className="text-sm font-semibold text-primary">100% Natural</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">😌</div>
                <p className="text-sm font-semibold text-primary">Evening Wellness</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">🚚</div>
                <p className="text-sm font-semibold text-primary">Free Shipping</p>
              </div>
            </div>
          </div>

          {/* Mobile: Image First, Desktop: Image Second */}
          <div className="order-1 lg:order-2 relative animate-scale-in">
            <div className="relative max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-3xl blur-3xl"></div>
              <img
                src={heroImage}
                alt="RELAX Premium Herbal Tea for Evening Wellness"
                className="relative w-full h-auto rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-bounce">
                Always Free Shipping
              </div>
              <div className="absolute -bottom-4 -left-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                Made in USA
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;