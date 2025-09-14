import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Heart, Shield, Award } from "lucide-react";
import { Link } from "react-router-dom";
import teamEmma from "@/assets/team-emma.jpg";
import teamPieter from "@/assets/team-pieter.jpg";
import teamSophie from "@/assets/team-sophie.jpg";
import ourStoryImage from "@/assets/our-story-image.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 gradient-green-yellow">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-heading mb-6">
            About <span className="text-primary">RELAX</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're dedicated to promoting natural wellness through premium herbal teas 
            that may help support your relaxation and evening routines.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Founded with a passion for natural wellness, RELAX was created to provide 
                high-quality herbal teas that support healthy sleep routines without making 
                unrealistic promises.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Our carefully curated blends use only the finest organic ingredients, 
                sourced responsibly from trusted growers around the world. Each cup 
                represents our commitment to quality and your wellbeing.
              </p>
              <Link to="/shop" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <Button className="bg-primary hover:bg-primary/90">
                  Shop Our Collection
                </Button>
              </Link>
            </div>
            <div className="glass-card p-8 rounded-2xl">
              <img 
                src={ourStoryImage} 
                alt="Our story of crafting premium herbal teas" 
                className="w-full rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 glass-yellow">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading mb-6">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These core principles guide everything we do at RELAX.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="glass-card text-center p-8 hover-scale">
              <CardContent className="p-0">
                <div className="glass-green p-4 rounded-full inline-flex mb-4">
                  <Leaf className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-heading text-xl mb-3">Natural Ingredients</h3>
                <p className="text-sm text-muted-foreground">
                  100% organic herbs sourced from sustainable farms
                </p>
              </CardContent>
            </Card>
            
            <Card className="glass-card text-center p-8 hover-scale">
              <CardContent className="p-0">
                <div className="glass-green p-4 rounded-full inline-flex mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-heading text-xl mb-3">Wellness Focus</h3>
                <p className="text-sm text-muted-foreground">
                  Supporting your natural relaxation and sleep routines
                </p>
              </CardContent>
            </Card>
            
            <Card className="glass-card text-center p-8 hover-scale">
              <CardContent className="p-0">
                <div className="glass-green p-4 rounded-full inline-flex mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-heading text-xl mb-3">Quality Assurance</h3>
                <p className="text-sm text-muted-foreground">
                  Rigorous testing ensures every batch meets our standards
                </p>
              </CardContent>
            </Card>
            
            <Card className="glass-card text-center p-8 hover-scale">
              <CardContent className="p-0">
                <div className="glass-green p-4 rounded-full inline-flex mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-heading text-xl mb-3">Customer Satisfaction</h3>
                <p className="text-sm text-muted-foreground">
                  30-day money-back guarantee on all products
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading mb-6">Meet Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Passionate experts dedicated to bringing you the finest herbal teas.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Emma van der Berg",
                role: "Founder & Tea Expert",
                description: "20+ years in herbal wellness and sustainable sourcing",
                email: "team@relaxproduct.com",
                image: teamEmma
              },
              {
                name: "Pieter Janssen",
                role: "Quality Assurance Manager", 
                description: "Ensures every batch meets our rigorous quality standards",
                email: "team@relaxproduct.com",
                image: teamPieter
              },
              {
                name: "Sophie Vermeer",
                role: "Customer Experience Lead",
                description: "Dedicated to making your RELAX journey exceptional", 
                email: "team@relaxproduct.com",
                image: teamSophie
              }
            ].map((member, index) => (
              <Card key={index} className="glass-card text-center p-8 hover-scale">
                <CardContent className="p-0">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={`${member.name} - ${member.role}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-heading text-xl mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-4">{member.description}</p>
                  <a 
                    href={`mailto:${member.email}`} 
                    className="text-primary hover:text-primary/80 text-sm font-medium"
                  >
                    Contact: {member.email}
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 glass-green">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading mb-6">
            Ready to Experience RELAX?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of customers who trust RELAX for their evening relaxation routine.
          </p>
              <Link to="/shop" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 px-8 py-4"
                >
                  Shop Now
                </Button>
              </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;