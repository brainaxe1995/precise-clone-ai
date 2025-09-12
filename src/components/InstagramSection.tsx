import { Instagram } from "lucide-react";

const InstagramSection = () => {
  const instagramPosts = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop",
      likes: 245,
      caption: "Morning ritual with our Earl Grey Supreme ☕️"
    },
    {
      id: 2, 
      image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=300&h=300&fit=crop",
      likes: 189,
      caption: "Fresh chamomile flowers ready for blending 🌼"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=300&h=300&fit=crop", 
      likes: 312,
      caption: "Behind the scenes at our tea plantation 🌱"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1597318181834-4d999de7ab42?w=300&h=300&fit=crop",
      likes: 156,
      caption: "Perfect afternoon tea setup ☀️"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1563822249548-9a72b6353cd1?w=300&h=300&fit=crop",
      likes: 278,
      caption: "Our master blender at work 👨‍🎨"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=300&h=300&fit=crop",
      likes: 203,
      caption: "Cozy tea time vibes 🏠"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Instagram className="h-8 w-8 text-pink-500" />
            <h2 className="text-3xl md:text-4xl font-bold">Follow Us</h2>
          </div>
          <p className="text-gray-600 mb-4">
            Join our community of tea lovers and share your tea moments with 
            <span className="text-accent font-semibold"> #TeapozMoments</span>
          </p>
          <a 
            href="#" 
            className="inline-flex items-center space-x-2 text-accent hover:text-accent/80 font-semibold transition-colors"
          >
            <Instagram className="h-5 w-5" />
            <span>@teapoz_official</span>
          </a>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {instagramPosts.map((post) => (
            <div 
              key={post.id}
              className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer"
            >
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-white">
                  <Instagram className="h-8 w-8 mx-auto mb-2" />
                  <div className="flex items-center space-x-1 text-sm">
                    <span>❤️</span>
                    <span>{post.likes}</span>
                  </div>
                </div>
              </div>
              
              {/* Post Badge */}
              <div className="absolute top-2 right-2 w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Instagram className="h-4 w-4 text-white" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-gray-600 mb-4">Share your tea moments and get featured!</p>
          <a 
            href="#" 
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300"
          >
            <Instagram className="h-5 w-5" />
            <span>Follow @teapoz_official</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;