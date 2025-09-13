import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Eye, RotateCcw, Star } from "lucide-react";

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState("new-in");

  const tabs = [
    { id: "new-in", label: "New-In" },
    { id: "best-seller", label: "Best Seller" },
    { id: "most-popular", label: "Most Popular" },
  ];

  const products = [
    {
      id: 1,
      name: "Relax Chamomile Herbal tea",
      description: "Pure chamomile flowers for gentle evening relaxation",
      price: 24.99,
      originalPrice: 34.99,
      rating: 4.8,
      reviews: 342,
      image: "https://afterdarkusa.com/wp-content/uploads/2025/09/Chamomile.png",
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
      image: "https://afterdarkusa.com/wp-content/uploads/2025/09/Lavender.png",
      badge: "Premium",
      benefits: ["Natural calming herbs", "Evening routine support", "Premium quality"]
    },
    {
      id: 3,
      name: "Relax Lemon balm Herbal tea",
      description: "Traditional passionflower for tranquil moments",
      price: 26.99,
      rating: 4.7,
      reviews: 189,
      image: "https://afterdarkusa.com/wp-content/uploads/2025/09/Lemon.png",
      benefits: ["Caffeine-free", "Traditional herb", "Evening wellness"]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading mb-8 text-center">Premium Evening Wellness Collection</h2>
          
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-accent text-accent-foreground"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="group overflow-hidden border-card-border hover:shadow-lg transition-all duration-300">
              <div className="relative overflow-hidden">
                {/* Badge */}
                {product.badge && (
                  <Badge className="absolute top-3 left-3 z-10 bg-primary text-primary-foreground">
                    {product.badge}
                  </Badge>
                )}
                
                {/* Product Image */}
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                {/* Hover Actions */}
                <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="sm" variant="outline" className="w-10 h-10 p-0 bg-white">
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="w-10 h-10 p-0 bg-white">
                    <RotateCcw className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="w-10 h-10 p-0 bg-white">
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <CardContent className="p-4 text-center">
                {/* Rating */}
                <div className="flex items-center justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating) 
                          ? "fill-primary text-primary" 
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="text-sm text-gray-600 ml-1">
                    ({product.reviews})
                  </span>
                </div>
                
                {/* Product Name */}
                <h3 className="font-semibold text-lg mb-2 hover:text-accent transition-colors cursor-pointer">
                  {product.name}
                </h3>
                
                {/* Description */}
                <p className="text-sm text-muted-foreground mb-3">
                  {product.description}
                </p>

                {/* Benefits */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {product.benefits.map((benefit, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {benefit}
                    </Badge>
                  ))}
                </div>
                
                {/* Price */}
                <div className="flex items-center justify-center gap-2 mb-4">
                  <span className="text-xl font-bold text-primary">
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm line-through text-muted-foreground">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>
                
                {/* Buy Now Button */}
                <Button 
                  className="w-full bg-primary hover:bg-primary/90 font-semibold"
                  size="sm"
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