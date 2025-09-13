import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "5 Natural Ways to Improve Your Evening Routine",
      excerpt: "Discover gentle, natural methods to help you unwind and prepare for restful nights. Our wellness experts share time-tested techniques for better relaxation.",
      date: "January 15, 2025",
      slug: "natural-evening-routine",
      image: "https://afterdarkusa.com/wp-content/uploads/2025/09/Natural-Ways-.png"
    },
    {
      id: 2,
      title: "The Science Behind Herbal Relaxation",
      excerpt: "Learn about the natural compounds in chamomile, passionflower, and other botanicals that have been used for centuries to support evening wellness.",
      date: "January 10, 2025",
      slug: "herbal-relaxation-science",
      image: "https://afterdarkusa.com/wp-content/uploads/2025/09/Science-Behind.png"
    },
    {
      id: 3,
      title: "Creating the Perfect Bedtime Tea Ritual",
      excerpt: "Transform your evening routine with mindful tea preparation. Discover how a simple ritual can signal to your body that it's time to wind down.",
      date: "January 5, 2025",
      slug: "bedtime-tea-ritual",
      image: "https://afterdarkusa.com/wp-content/uploads/2025/09/Perfect-Bedtime.png"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="animate-fade-in">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              Wellness & Relaxation Blog
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover natural ways to support your evening routine and enhance your wellness journey with expert insights and gentle guidance.
            </p>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Card 
                  key={post.id} 
                  className="hover:shadow-lg transition-shadow duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="p-0">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="text-sm text-muted-foreground mb-2">{post.date}</div>
                    <CardTitle className="text-xl mb-3 text-primary hover:text-secondary transition-colors">
                      <Link to={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </CardTitle>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="hover:bg-primary hover:text-primary-foreground transition-colors"
                      asChild
                    >
                      <Link to={`/blog/${post.slug}`}>
                        Read More
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;