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
      name: "Chamomile Botanical Blend Sachets",
      price: "$4.00 – $28.00",
      rating: 4.6,
      discount: "30% OFF",
      images: [
        "https://demo2.wpopal.com/teapoz/wp-content/uploads/2023/05/product_30_1-600x600.jpg",
        "https://demo2.wpopal.com/teapoz/wp-content/uploads/2023/05/product_30_2-600x600.jpg"
      ]
    },
    {
      id: 2,
      name: "Organic Dandelion & Peach Naturally",
      price: "$3.00 – $21.00",
      rating: 4.6,
      discount: "30% OFF",
      images: [
        "https://demo2.wpopal.com/teapoz/wp-content/uploads/2023/05/product_29_1-600x600.jpg",
        "https://demo2.wpopal.com/teapoz/wp-content/uploads/2023/05/product_29_2-600x600.jpg"
      ]
    },
    {
      id: 3,
      name: "Earl Grey Supreme Loose Tea",
      price: "$5.00 – $35.00",
      rating: 4.8,
      discount: "25% OFF",
      images: [
        "https://demo2.wpopal.com/teapoz/wp-content/uploads/2023/05/product_28_1-600x600.jpg",
        "https://demo2.wpopal.com/teapoz/wp-content/uploads/2023/05/product_28_2-600x600.jpg"
      ]
    },
    {
      id: 4,
      name: "Premium Green Tea Collection",
      price: "$6.00 – $42.00",
      rating: 4.9,
      discount: "20% OFF",
      images: [
        "https://demo2.wpopal.com/teapoz/wp-content/uploads/2023/05/product_27_1-600x600.jpg",
        "https://demo2.wpopal.com/teapoz/wp-content/uploads/2023/05/product_27_2-600x600.jpg"
      ]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Shop Our Teas</h2>
          
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
                {/* Discount Badge */}
                {product.discount && (
                  <Badge className="absolute top-3 left-3 z-10 bg-red-500 text-white">
                    {product.discount}
                  </Badge>
                )}
                
                {/* Product Image */}
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.images[0]}
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
                          ? "fill-yellow-400 text-yellow-400" 
                          : "text-gray-300"
                      }`} 
                    />
                  ))}
                  <span className="text-sm text-gray-600 ml-1">
                    Rated {product.rating} out of 5
                  </span>
                </div>
                
                {/* Product Name */}
                <h3 className="font-semibold text-lg mb-2 hover:text-accent transition-colors cursor-pointer">
                  {product.name}
                </h3>
                
                {/* Price */}
                <p className="text-accent font-bold text-lg mb-4">
                  {product.price}
                </p>
                
                {/* Add to Cart Button */}
                <Button 
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                  size="sm"
                >
                  Select Options
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