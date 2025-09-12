import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import teaExpertImage from "@/assets/tea-expert.jpg";

const CraftedByExpertsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson", 
      role: "Tea Sommelier",
      rating: 5,
      text: "The quality and attention to detail in every blend is exceptional. You can taste the expertise in every cup.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b586?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Master Blender", 
      rating: 5,
      text: "Working with Teapoz has been incredible. Their commitment to quality matches our own standards.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Emily Davis",
      role: "Tea Consultant",
      rating: 5, 
      text: "I've recommended Teapoz to all my clients. The sourcing and processing methods are truly world-class.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Crafted by Leading<br />
              Tea Experts
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our team of certified tea masters and sommeliers work directly with tea gardens 
              around the world to source the finest leaves and create exceptional blends that 
              meet our rigorous quality standards.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold">Expert Curation</h4>
                  <p className="text-gray-600 text-sm">Hand-selected by certified tea masters</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold">Quality Testing</h4>
                  <p className="text-gray-600 text-sm">Rigorous quality control at every step</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold">Artisan Blending</h4>
                  <p className="text-gray-600 text-sm">Traditional techniques with modern precision</p>
                </div>
              </div>
            </div>
            
            <Button size="lg" className="bg-accent hover:bg-accent/90">
              Meet Our Experts
            </Button>
          </div>
          
          {/* Right Content - Expert Image & Testimonials */}
          <div className="space-y-6">
            <div className="relative">
              <img 
                src={teaExpertImage} 
                alt="Tea expert examining tea leaves" 
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
            
            {/* Testimonials */}
            <div className="space-y-4">
              {testimonials.slice(0, 2).map((testimonial) => (
                <Card key={testimonial.id} className="border-l-4 border-accent">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-center space-x-1 mb-2">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <p className="text-sm text-gray-600 mb-2">"{testimonial.text}"</p>
                        <div className="text-xs">
                          <span className="font-semibold">{testimonial.name}</span>
                          <span className="text-gray-500"> - {testimonial.role}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CraftedByExpertsSection;