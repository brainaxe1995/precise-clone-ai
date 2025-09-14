import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import teaExpertImage from "@/assets/tea-expert.jpg";
import testimonialSarah from "@/assets/testimonial-sarah.jpg";
import teamEmma from "@/assets/team-emma.jpg";
import teamPieter from "@/assets/team-pieter.jpg";
import teamLars from "@/assets/team-lars.jpg";

const CraftedByExpertsSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Emma van der Berg",
      role: "Head Tea Master",
      email: "team@relaxproduct.com",
      image: teamEmma,
      bio: "With over 15 years of experience in European tea crafting"
    },
    {
      id: 2,
      name: "Pieter Jansen", 
      role: "Quality Director",
      email: "team@relaxproduct.com",
      image: teamPieter,
      bio: "Ensuring every blend meets our premium standards"
    },
    {
      id: 3,
      name: "Lars de Vries",
      role: "Tea Sommelier",
      email: "team@relaxproduct.com", 
      image: teamLars,
      bio: "Expert in herbal tea blending and flavor profiles"
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson", 
      role: "Tea Sommelier",
      rating: 5,
      text: "The quality and attention to detail in every blend is exceptional. You can taste the expertise in every cup.",
      avatar: testimonialSarah
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Master Blender", 
      rating: 5,
      text: "Working with RELAX has been incredible. Their commitment to natural sleep support matches our own standards.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Emily Davis",
      role: "Tea Consultant",
      rating: 5, 
      text: "I've recommended RELAX to all my clients. The sourcing and herbal processing methods are truly world-class.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-24 bg-background animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="animate-slide-in-left">
            <h2 className="text-5xl md:text-6xl font-heading font-bold mb-8 leading-tight gradient-text">
              Crafted by Leading<br />
              Tea Experts
            </h2>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Our team of expert tea masters and sommeliers work directly with tea gardens 
              around the world to source the finest leaves and create exceptional blends that 
              meet our rigorous quality standards.
            </p>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-center space-x-6 animate-slide-up">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold text-xl mb-2">Expert Curation</h4>
                  <p className="text-muted-foreground text-lg">Hand-selected by expert tea masters</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-6 animate-slide-up">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold text-xl mb-2">Quality Testing</h4>
                  <p className="text-muted-foreground text-lg">Rigorous quality control at every step</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-6 animate-slide-up">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold text-xl mb-2">Artisan Blending</h4>
                  <p className="text-muted-foreground text-lg">Traditional techniques with modern precision</p>
                </div>
              </div>
            </div>
            
            <Link to="/about" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white font-semibold text-lg px-8 py-4 rounded-full shadow-lg hover-lift"
              >
                Meet Our Experts
              </Button>
            </Link>
          </div>
          
          {/* Right Content - Team Members & Testimonials */}
          <div className="space-y-8 animate-slide-in-right">
            {/* Team Members */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {teamMembers.map((member) => (
                <Card key={member.id} className="text-center hover-lift">
                  <CardContent className="p-6">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-20 h-20 rounded-full mx-auto mb-4 object-cover shadow-lg"
                    />
                    <h4 className="font-semibold text-lg mb-1">{member.name}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{member.role}</p>
                    <p className="text-xs text-muted-foreground mb-3">{member.bio}</p>
                    <a 
                      href={`mailto:${member.email}`}
                      className="text-primary text-sm hover:underline"
                    >
                      Contact {member.name.split(' ')[0]}
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Expert Image */}
            <div className="relative hover-lift mb-6">
              <img 
                src="https://afterdarkusa.com/wp-content/uploads/2025/09/expert.png"
                alt="Tea expert examining tea leaves" 
                className="w-full h-80 object-cover rounded-2xl shadow-2xl"
              />
            </div>
            
            {/* Testimonials */}
            <div className="space-y-6">
              {testimonials.slice(0, 2).map((testimonial, index) => (
                <Card key={testimonial.id} className="border-l-4 border-primary shadow-lg hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover shadow-lg"
                      />
                      <div className="flex-1">
                        <div className="flex items-center space-x-1 mb-3">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <p className="text-base text-muted-foreground mb-3 leading-relaxed">"{testimonial.text}"</p>
                        <div className="text-sm">
                          <span className="font-semibold text-lg">{testimonial.name}</span>
                          <span className="text-muted-foreground"> - {testimonial.role}</span>
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