import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Contact form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 gradient-green-yellow text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-heading mb-6">
            Contact <span className="text-primary">RELAX</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions about our herbal teas? We're here to help you find the perfect blend for your needs.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-heading mb-8">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="glass-white"
                  />
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="glass-white"
                  />
                </div>
                <Input
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="glass-white"
                />
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="glass-white"
                />
                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <h2 className="text-3xl font-heading mb-8">Get in Touch</h2>
              
              <div className="space-y-6">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="glass-green p-2 rounded-lg">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      Email
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">help@relaxproduct.com</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      We typically respond within 24 hours
                    </p>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="glass-green p-2 rounded-lg">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      Phone
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">+12892467209</p>
                    <p className="text-muted-foreground">+31618474790</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Monday - Friday, 9 AM - 6 PM EST
                    </p>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="glass-green p-2 rounded-lg">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      Address
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Atlantica Marketing Beheer B.V.<br />
                      Kvk-nummer 92016995<br />
                      Tijnmuiden 15<br />
                      1046AK Amsterdam
                    </p>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="glass-green p-2 rounded-lg">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      Business Hours
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-1 text-muted-foreground">
                      <p>Monday - Friday: 9 AM - 6 PM EST</p>
                      <p>Saturday: 10 AM - 4 PM EST</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-20 glass-yellow">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading mb-6">Frequently Asked Questions</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Find quick answers to common questions about RELAX herbal teas.
          </p>
          <Link to="/faq" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <Button variant="outline" className="glass-white">
              View All FAQs
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;