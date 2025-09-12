const BrowseByCategorySection = () => {
  const categories = [
    {
      id: 1,
      name: "Green Tea",
      image: "https://demo2.wpopal.com/teapoz/wp-content/uploads/2023/05/category-1.jpg",
      count: "12 Products"
    },
    {
      id: 2,
      name: "Black Tea", 
      image: "https://demo2.wpopal.com/teapoz/wp-content/uploads/2023/05/category-2.jpg",
      count: "8 Products"
    },
    {
      id: 3,
      name: "Herbal Tea",
      image: "https://demo2.wpopal.com/teapoz/wp-content/uploads/2023/05/category-3.jpg", 
      count: "15 Products"
    },
    {
      id: 4,
      name: "Oolong Tea",
      image: "https://demo2.wpopal.com/teapoz/wp-content/uploads/2023/05/category-4.jpg",
      count: "6 Products"
    },
    {
      id: 5,
      name: "White Tea",
      image: "https://demo2.wpopal.com/teapoz/wp-content/uploads/2023/05/category-5.jpg",
      count: "4 Products"
    },
    {
      id: 6,
      name: "Organic Teas",
      image: "https://demo2.wpopal.com/teapoz/wp-content/uploads/2023/05/category-6.jpg",
      count: "18 Products"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Browse by Category</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated collection of premium teas organized by type and flavor profile
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div 
              key={category.id}
              className="group relative overflow-hidden rounded-lg cursor-pointer hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-bold mb-1">{category.name}</h3>
                <p className="text-white/80 text-sm">{category.count}</p>
              </div>
              
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrowseByCategorySection;