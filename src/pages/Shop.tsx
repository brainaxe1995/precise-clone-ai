import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Filter, SlidersHorizontal } from "lucide-react";
import productChamomile from "@/assets/product-chamomile.png";
import productLavender from "@/assets/product-lavender.png";
import productLemon from "@/assets/product-lemon.png";

const Shop = () => {
  const products = [
    {
      id: 1,
      name: "Relax Chamomile Herbal tea",
      description: "Pure chamomile flowers for gentle evening relaxation",
      price: 24.99,
      originalPrice: 34.99,
      rating: 4.8,
      reviews: 342,
      image: productChamomile,
      badge: "Best Seller",
      benefits: ["May support relaxation", "Caffeine-free", "USDA Organic"]
    },
    {
      id: 2,
      name: "Relax Lavender Herbal tea",
      description: "Lavender and lemon balm blend for peaceful evenings",
      price: 29.99,
      originalPrice: 39.99,
      rating: 4.9,
      reviews: 288,
      image: productLavender,
      badge: "Premium",
      benefits: ["Natural calming herbs", "Evening routine support", "Premium quality"]
    },
    {
      id: 3,
      name: "Relax Lemon Herbal tea",
      description: "Fresh lemon blend for tranquil moments",
      price: 26.99,
      rating: 4.7,
      reviews: 189,
      image: productLemon,
      benefits: ["Caffeine-free", "Citrus flavor", "Evening wellness"]
    }
  ];

  return (
    <div className="min-h-screen gradient-green-yellow">
      <Header />
      
      {/* Page Header */}
      <section className="py-20 text-center animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="animate-slide-up">
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-8 animate-fade-in">
              Natural Evening Wellness with <span className="gradient-text">RELAX Tea</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up">
              Discover our collection of premium herbal teas crafted in the USA to support your relaxation and evening routine.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-10 border-b animate-slide-up">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-base text-muted-foreground">
              Showing {products.length} products
            </p>
            <div className="flex gap-4">
              <Button variant="outline" className="glass-white font-semibold hover-lift">
                <Filter className="h-5 w-5 mr-2" />
                Filter
              </Button>
              <Button variant="outline" className="glass-white font-semibold hover-lift">
                <SlidersHorizontal className="h-5 w-5 mr-2" />
                Sort by
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-center mb-12 animate-fade-in">Our Premium Collection</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {products.map((product) => (
              <Card key={product.id} className="glass-card hover-scale overflow-hidden border-2 border-card-border hover:border-primary hover:shadow-2xl transition-all duration-500">
                {product.badge && (
                  <Badge className="absolute top-4 left-4 z-10 bg-primary text-primary-foreground text-sm px-3 py-1 font-semibold shadow-lg">
                    {product.badge}
                  </Badge>
                )}
                
                <div className="aspect-square bg-white p-6 flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <CardContent className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < Math.floor(product.rating)
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-base text-muted-foreground">
                      ({product.reviews})
                    </span>
                  </div>
                  
                  <h3 className="font-heading text-2xl font-semibold mb-4">
                    {product.name}
                  </h3>
                  
                  <p className="text-base text-muted-foreground mb-6 leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {product.benefits.map((benefit, index) => (
                      <Badge key={index} variant="secondary" className="text-sm px-3 py-1">
                        {benefit}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-3xl font-bold text-primary">
                      ${product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-lg line-through text-muted-foreground">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                </CardContent>
                
                <CardFooter className="p-6 pt-0">
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90 text-white font-semibold text-lg py-3 rounded-full shadow-lg hover-lift"
                    onClick={() => {
                      // Add tracking for buy now clicks
                      if (typeof window !== 'undefined') {
                        import('@/lib/tracking').then(({ trackInitiateCheckout }) => {
                          trackInitiateCheckout(product.price, 'USD', [{
                            item_id: product.id,
                            item_name: product.name,
                            price: product.price,
                            quantity: 1
                          }]);
                        });
                      }
                    }}
                  >
                    Buy Now
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 glass-green animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center">
            <div className="hover-lift">
              <div className="text-5xl mb-4">🌿</div>
              <h3 className="font-semibold text-xl mb-2">100% Natural</h3>
              <p className="text-base text-muted-foreground">Organic ingredients only</p>
            </div>
            <div className="hover-lift">
              <div className="text-5xl mb-4">🚚</div>
              <h3 className="font-semibold text-xl mb-2">Always Free Shipping</h3>
              <p className="text-base text-muted-foreground">Fast delivery across the USA</p>
            </div>
            <div className="hover-lift">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="font-semibold text-xl mb-2">30-Day Guarantee</h3>
              <p className="text-base text-muted-foreground">Money back promise</p>
            </div>
            <div className="hover-lift">
              <div className="text-5xl mb-4">⭐</div>
              <h3 className="font-semibold text-xl mb-2">5-Star Rated</h3>
              <p className="text-base text-muted-foreground">Loved by customers</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Shop;