import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const CustomerReviewsSection = () => {
  const reviews = [
    {
      id: 1,
      name: "Amanda Wilson",
      rating: 5,
      date: "2 days ago",
      title: "Absolutely amazing quality!",
      text: "I've been a tea lover for years, but nothing compares to the quality of Teapoz. The Earl Grey Supreme is my new favorite - the flavor is rich and complex.",
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
  const totalReviews = 1247;

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Customer Reviews</h2>
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`h-5 w-5 ${
                    i < Math.floor(overallRating) 
                      ? "fill-yellow-400 text-yellow-400" 
                      : "text-gray-300"
                  }`} 
                />
              ))}
            </div>
            <span className="text-lg font-semibold">{overallRating}</span>
            <span className="text-gray-600">({totalReviews.toLocaleString()} reviews)</span>
          </div>
          <p className="text-gray-600">See what our customers are saying about their tea experience</p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {reviews.map((review) => (
            <Card key={review.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                {/* Rating & Date */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500">{review.date}</span>
                </div>
                
                {/* Title */}
                <h3 className="font-semibold text-sm mb-2">{review.title}</h3>
                
                {/* Review Text */}
                <p className="text-sm text-gray-600 mb-4 line-clamp-4">{review.text}</p>
                
                {/* Author */}
                <div className="flex items-center space-x-3">
                  <img 
                    src={review.avatar} 
                    alt={review.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium">{review.name}</span>
                      {review.verified && (
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                          Verified
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Rating Breakdown */}
        <div className="bg-gray-50 rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left - Overall Stats */}
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">{overallRating}</div>
              <div className="flex items-center justify-center space-x-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-5 w-5 ${
                      i < Math.floor(overallRating) 
                        ? "fill-yellow-400 text-yellow-400" 
                        : "text-gray-300"
                    }`} 
                  />
                ))}
              </div>
              <div className="text-gray-600">{totalReviews.toLocaleString()} total reviews</div>
            </div>
            
            {/* Right - Rating Distribution */}
            <div className="space-y-2">
              {[5, 4, 3, 2, 1].map((stars) => {
                const percentage = stars === 5 ? 78 : stars === 4 ? 18 : stars === 3 ? 3 : stars === 2 ? 1 : 0;
                return (
                  <div key={stars} className="flex items-center space-x-3">
                    <span className="text-sm w-8">{stars} ★</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-yellow-400 h-2 rounded-full" 
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-600 w-8">{percentage}%</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviewsSection;