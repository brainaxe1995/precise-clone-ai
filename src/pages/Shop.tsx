import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Filter, SlidersHorizontal } from "lucide-react";

const Shop = () => {
  const products = [
    {
      id: 1,
      name: "RLEX Evening Calm",
      description: "Chamomile and lavender blend to support your evening routine",
      price: 24.99,
      originalPrice: 34.99,
      rating: 4.8,
      reviews: 127,
      image: "/api/placeholder/300/300",
      badge: "Best Seller",
      benefits: ["May support relaxation", "Caffeine-free", "Organic"]
    },
    {
      id: 2,
      name: "RLEX Sleep Support",
      description: "Gentle herbal blend with valerian root and passionflower",
      price: 29.99,
      originalPrice: 39.99,
      rating: 4.9,
      reviews: 203,
      image: "/api/placeholder/300/300",
      badge: "Premium",
      benefits: ["Natural ingredients", "Sleep routine support", "Organic"]
    },
    {
      id: 3,
      name: "RLEX Nighttime Blend",
      description: "Soothing combination of lemon balm and mint",
      price: 19.99,
      rating: 4.7,
      reviews: 89,
      image: "/api/placeholder/300/300",
      benefits: ["Caffeine-free", "Calming herbs", "Premium quality"]
    },
    {
      id: 4,
      name: "RLEX Starter Pack",
      description: "Try all our blends with this convenient starter collection",
      price: 49.99,
      originalPrice: 69.99,
      rating: 4.9,
      reviews: 156,
      image: "/api/placeholder/300/300",
      badge: "Value Pack",
      benefits: ["3 tea varieties", "Perfect for beginners", "Free shipping"]
    }
  ];

  return (
    <div className="min-h-screen gradient-green-yellow">
      <Header />
      
      {/* Page Header */}
      <section className="py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-heading mb-6">
            Shop <span className="text-primary">RLEX Tea</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our collection of premium herbal teas designed to support your relaxation and evening routine.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              Showing {products.length} products
            </p>
            <div className="flex gap-3">
              <Button variant="outline" className="glass-white">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              <Button variant="outline" className="glass-white">
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                Sort by
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="glass-card hover-scale overflow-hidden">
                {product.badge && (
                  <Badge className="absolute top-4 left-4 z-10 bg-primary text-primary-foreground">
                    {product.badge}
                  </Badge>
                )}
                
                <div className="aspect-square bg-gradient-green-yellow p-8 flex items-center justify-center">
                  <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-4xl">🍃</span>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating)
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      ({product.reviews})
                    </span>
                  </div>
                  
                  <h3 className="font-heading text-lg font-semibold mb-2">
                    {product.name}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-4">
                    {product.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {product.benefits.map((benefit, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {benefit}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-primary">
                      ${product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm line-through text-muted-foreground">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                </CardContent>
                
                <CardFooter className="p-6 pt-0">
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 glass-green">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl mb-2">🌿</div>
              <h3 className="font-semibold mb-1">100% Natural</h3>
              <p className="text-sm text-muted-foreground">Organic ingredients only</p>
            </div>
            <div>
              <div className="text-3xl mb-2">🚚</div>
              <h3 className="font-semibold mb-1">Free Shipping</h3>
              <p className="text-sm text-muted-foreground">On orders over $50</p>
            </div>
            <div>
              <div className="text-3xl mb-2">💰</div>
              <h3 className="font-semibold mb-1">30-Day Guarantee</h3>
              <p className="text-sm text-muted-foreground">Money back promise</p>
            </div>
            <div>
              <div className="text-3xl mb-2">⭐</div>
              <h3 className="font-semibold mb-1">5-Star Rated</h3>
              <p className="text-sm text-muted-foreground">Loved by customers</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Shop;