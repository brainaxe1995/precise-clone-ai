import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";

const CustomerReviewsSection = () => {
  const reviews = [
    {
      id: 1,
      name: "Amanda Wilson",
      rating: 5,
      date: "2 days ago",
      title: "Absolutely amazing quality!",
      text: "I've been a tea lover for years, but nothing compares to the quality of RELAX. The Chamomile blend is my new favorite - helps me unwind so peacefully.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b586?w=60&h=60&fit=crop&crop=face",
      verified: true
    },
    {
      id: 2,
      name: "David Chen",
      rating: 5,
      date: "1 week ago", 
      title: "Fast shipping, great customer service",
      text: "Ordered the chamomile blend and it arrived perfectly packaged. The taste is exactly what I was looking for - calming and aromatic. Will definitely order again!",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face",
      verified: true
    },
    {
      id: 3,
      name: "Lisa Rodriguez", 
      rating: 5,
      date: "2 weeks ago",
      title: "Best tea I've ever had",
      text: "The Master Tea Taster selection is incredible. You can really taste the difference in quality. My morning routine has never been better!",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face",
      verified: true
    },
    {
      id: 4,
      name: "James Parker",
      rating: 4,
      date: "3 weeks ago",
      title: "Great variety and taste",
      text: "Love the selection of organic teas. The green tea blend is particularly good. Packaging could be more eco-friendly but overall very satisfied.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face",
      verified: true
    }
  ];

  const overallRating = 4.8;
  const totalReviews = 0; // New product brand, no reviews yet

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Customer Reviews</h2>
          <div className="text-center mb-4">
            <p className="text-lg font-semibold text-primary mb-2">New Product Launch</p>
            <p className="text-gray-600">Be among the first to try our premium herbal teas and share your experience!</p>
          </div>
        </div>

        {/* Coming Soon Message */}
        <div className="bg-secondary/10 rounded-2xl p-12 text-center mb-12">
          <div className="text-6xl mb-4">🌟</div>
          <h3 className="text-2xl font-bold mb-4">Your Review Could Be First!</h3>
          <p className="text-lg text-muted-foreground mb-6">
            As a brand new product, we're excited to hear from our early customers. 
            Try our premium European herbal teas and let us know what you think.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/shop" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
                Shop Now & Be First to Review
              </button>
            </Link>
            <a href="mailto:help@relaxproduct.com?subject=Product Review">
              <button className="border border-primary text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary/10 transition-colors">
                Share Your Experience
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviewsSection;