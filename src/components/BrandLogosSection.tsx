const BrandLogosSection = () => {
  const brands = [
    {
      id: 1,
      name: "Organic Certified",
      logo: "🌿",
      description: "USDA Organic"
    },
    {
      id: 2,
      name: "Fair Trade",
      logo: "🤝",
      description: "Fair Trade Certified"
    },
    {
      id: 3,
      name: "Non-GMO",
      logo: "🌱",
      description: "Non-GMO Project"
    },
    {
      id: 4,
      name: "Rainforest Alliance",
      logo: "🌳",
      description: "Rainforest Certified"
    },
    {
      id: 5,
      name: "Carbon Neutral",
      logo: "🌍",
      description: "Carbon Neutral Certified"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold mb-4">Trusted Certifications</h3>
          <p className="text-gray-600">Our commitment to quality, sustainability, and ethical sourcing</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
          {brands.map((brand) => (
            <div key={brand.id} className="text-center group">
              <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                {brand.logo}
              </div>
              <div className="text-sm font-medium text-gray-800">{brand.name}</div>
              <div className="text-xs text-gray-500">{brand.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandLogosSection;