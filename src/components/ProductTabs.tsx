import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Eye, RotateCcw, Star } from "lucide-react";
import productChamomile from "@/assets/product-chamomile.png";
import productLavender from "@/assets/product-lavender.png";
import productLemon from "@/assets/product-lemon.png";

const ProductTabs = () => {
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
    },
    {
      id: 4,
      name: "Master Tea Tester Selections",
      description: "Handpicked by our head tea master for the ultimate experience",
      price: 39.99,
      originalPrice: 49.99,
      rating: 5.0,
      reviews: 156,
      image: "https://afterdarkusa.com/wp-content/uploads/2025/09/teaPackges.png",
      badge: "Limited Edition",
      benefits: ["Expert curated", "Premium selection", "Limited availability"]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-heading font-bold mb-8 gradient-text">Premium Evening Wellness Collection</h2>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <Card key={product.id} className="group overflow-hidden border-2 border-card-border hover:border-primary hover:shadow-2xl transition-all duration-500 hover-lift animate-scale-in">
              <div className="relative overflow-hidden">
                {/* Badge */}
                {product.badge && (
                  <Badge className="absolute top-4 left-4 z-10 bg-primary text-primary-foreground text-sm px-3 py-1 font-semibold shadow-lg">
                    {product.badge}
                  </Badge>
                )}
                
                {/* Product Image */}
                <div className="aspect-square overflow-hidden bg-white p-8">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                {/* Hover Actions */}
                <div className="absolute top-4 right-4 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="sm" variant="outline" className="w-12 h-12 p-0 bg-white/90 backdrop-blur-sm hover-lift">
                    <Heart className="h-5 w-5" />
                  </Button>
                  <Button size="sm" variant="outline" className="w-12 h-12 p-0 bg-white/90 backdrop-blur-sm hover-lift">
                    <RotateCcw className="h-5 w-5" />
                  </Button>
                  <Button size="sm" variant="outline" className="w-12 h-12 p-0 bg-white/90 backdrop-blur-sm hover-lift">
                    <Eye className="h-5 w-5" />
                  </Button>
                </div>
              </div>
              
              <CardContent className="p-8 text-center">
                {/* Rating */}
                <div className="flex items-center justify-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating) 
                          ? "fill-yellow-400 text-yellow-400" 
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="text-base text-muted-foreground ml-2">
                    ({product.reviews})
                  </span>
                </div>
                
                {/* Product Name */}
                <h3 className="font-heading font-semibold text-2xl mb-4 hover:text-primary transition-colors cursor-pointer">
                  {product.name}
                </h3>
                
                {/* Description */}
                <p className="text-base text-muted-foreground mb-6 leading-relaxed">
                  {product.description}
                </p>

                {/* Benefits */}
                <div className="flex flex-wrap gap-2 mb-6 justify-center">
                  {product.benefits.map((benefit, index) => (
                    <Badge key={index} variant="secondary" className="text-sm px-3 py-1">
                      {benefit}
                    </Badge>
                  ))}
                </div>
                
                {/* Price */}
                <div className="flex items-center justify-center gap-3 mb-6">
                  <span className="text-3xl font-bold text-primary">
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-lg line-through text-muted-foreground">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>
                
                  <Button 
                    className="w-full bg-green-800 hover:bg-green-700 text-white font-bold text-lg py-4 rounded-full shadow-xl hover:scale-105 transition-all duration-300"
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
                      
                      // Navigate to checkout URL
                      const getCheckoutUrl = (productName: string) => {
                        if (productName.includes('Chamomile')) return 'https://pay.relaxproduct.com/relax-tea/?pack=Chamomile';
                        if (productName.includes('Lavender')) return 'https://pay.relaxproduct.com/relax-tea/?pack=lavender';
                        if (productName.includes('Lemon')) return 'https://pay.relaxproduct.com/relax-tea/?pack=Lemon';
                        if (productName.includes('Master Tea Tester')) return 'https://pay.relaxproduct.com/relax-tea/';
                        return 'https://pay.relaxproduct.com/relax-tea/';
                      };
                      
                      window.location.href = getCheckoutUrl(product.name);
                    }}
                  >
                    Buy Now
                  </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductTabs;