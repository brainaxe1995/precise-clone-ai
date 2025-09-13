import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const BlogPost = () => {
  const { slug } = useParams();

  const blogPosts = {
    "natural-evening-routine": {
      title: "5 Natural Ways to Improve Your Evening Routine",
      date: "January 15, 2025",
      image: "https://afterdarkusa.com/wp-content/uploads/2025/09/Natural-Ways-.png",
      content: `
        <p>Creating a peaceful evening routine can significantly impact your overall wellness and help you transition into a more restful state. Here are five gentle, natural approaches that many find helpful:</p>
        
        <h2>1. Mindful Tea Preparation</h2>
        <p>The ritual of preparing tea can be just as beneficial as drinking it. Take time to focus on each step - heating the water, measuring the herbs, and breathing in the aromatic steam. This mindful approach helps signal to your mind that it's time to slow down.</p>
        
        <h2>2. Digital Sunset</h2>
        <p>Consider establishing a "digital sunset" - a time when you put away electronic devices. The blue light from screens can interfere with your body's natural rhythms, so creating boundaries around technology use can support better evening relaxation.</p>
        
        <h2>3. Gentle Movement</h2>
        <p>Light stretching, yoga, or even a slow walk can help release the day's tension. These gentle movements encourage your body to transition from the active energy of day to the restorative energy of evening.</p>
        
        <h2>4. Aromatherapy & Environment</h2>
        <p>Create a calming environment with soft lighting and soothing scents. Lavender, chamomile, and bergamot are traditionally associated with relaxation and can help create the right atmosphere for winding down.</p>
        
        <h2>5. Gratitude Practice</h2>
        <p>Taking a few moments to reflect on positive aspects of your day can help shift your mindset from any lingering stress to a more peaceful state. This simple practice has been shown to support overall well-being.</p>
        
        <p><em>Remember, everyone's needs are different. These suggestions are for general wellness support and are not intended to diagnose, treat, or cure any conditions. Always consult with healthcare professionals for personalized advice.</em></p>
      `
    },
    "herbal-relaxation-science": {
      title: "The Science Behind Herbal Relaxation",
      date: "January 10, 2025",
      image: "/api/placeholder/800/400",
      content: `
        <p>For centuries, cultures around the world have turned to herbs and botanicals to support relaxation and wellness. Modern research is beginning to understand the science behind these traditional practices.</p>
        
        <h2>Understanding Plant Compounds</h2>
        <p>Many plants contain naturally occurring compounds that may support relaxation. For example, chamomile contains apigenin, a flavonoid that research suggests may have calming properties. Similarly, passionflower has been studied for its traditional use in promoting relaxation.</p>
        
        <h2>The Role of Ritual</h2>
        <p>Beyond the botanicals themselves, the ritual of preparing and drinking herbal tea plays an important role. The warm liquid, aromatic experience, and mindful practice of tea drinking all contribute to a sense of calm and routine.</p>
        
        <h2>Historical Perspectives</h2>
        <p>Traditional systems of wellness have long recognized the value of certain plants for evening routines. This wisdom, passed down through generations, is now being explored through modern scientific methods.</p>
        
        <h2>Individual Responses</h2>
        <p>It's important to note that individual responses to herbs can vary greatly. What works for one person may not work for another, and factors like preparation method, timing, and personal sensitivity all play a role.</p>
        
        <p><em>This information is for educational purposes only and is not intended to diagnose, treat, cure, or prevent any condition. Always consult with qualified healthcare providers before making changes to your wellness routine.</em></p>
      `
    },
    "bedtime-tea-ritual": {
      title: "Creating the Perfect Bedtime Tea Ritual",
      date: "January 5, 2025",
      image: "/api/placeholder/800/400",
      content: `
        <p>Transforming your evening routine with a mindful tea ritual can create a beautiful transition from the busyness of day to the peace of evening. Here's how to create your own meaningful practice:</p>
        
        <h2>Setting the Scene</h2>
        <p>Choose a quiet space where you can focus without distractions. Dim the lights, perhaps light a candle, and create an environment that feels peaceful and separate from the day's activities.</p>
        
        <h2>Selecting Your Blend</h2>
        <p>Choose herbs that appeal to you and align with your wellness goals. Chamomile, lemon balm, and lavender are popular choices for evening routines, each offering their own unique aromatic and sensory experience.</p>
        
        <h2>The Preparation Process</h2>
        <p>Take your time with each step:</p>
        <ul>
          <li>Heat your water mindfully, listening to the sounds as it warms</li>
          <li>Measure your herbs or tea with intention</li>
          <li>Pour the water slowly, watching the steam rise</li>
          <li>Allow the tea to steep while you take deep, calming breaths</li>
        </ul>
        
        <h2>Mindful Drinking</h2>
        <p>When your tea is ready, drink it slowly and mindfully. Notice the warmth, the flavors, and the aromas. Use this time for gentle reflection or simply to be present in the moment.</p>
        
        <h2>Making It Your Own</h2>
        <p>Your ritual should feel authentic to you. Some people like to include journaling, others prefer to sit quietly, and some find soft music enhances their experience. Experiment to find what feels most natural and beneficial.</p>
        
        <p><em>Remember, this ritual is about creating a peaceful transition in your evening. Listen to your body and adjust your routine as needed.</em></p>
      `
    }
  };

  const post = blogPosts[slug as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Post Not Found</h1>
          <Button asChild>
            <Link to="/blog">Return to Blog</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="animate-fade-in">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <Button 
              variant="ghost" 
              className="mb-6 hover:bg-primary/10"
              asChild
            >
              <Link to="/blog">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Link>
            </Button>
            
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
                {post.title}
              </h1>
              <p className="text-muted-foreground text-lg mb-8">{post.date}</p>
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto prose prose-lg prose-primary">
              <div 
                dangerouslySetInnerHTML={{ __html: post.content }}
                className="text-foreground leading-relaxed"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;