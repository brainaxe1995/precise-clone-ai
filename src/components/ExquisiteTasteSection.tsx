import teaHoneyImage from "@/assets/tea-honey-section.jpg";

const ExquisiteTasteSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-yellow-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
              Exquisite Taste,<br />
              Refreshing Blends.
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Experience the perfect harmony of premium tea leaves carefully selected 
              and blended with natural ingredients to create extraordinary flavors 
              that awaken your senses.
            </p>
            <div className="flex space-x-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">🌱</div>
                <div className="text-sm text-gray-600 font-semibold">New Brand</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">🇺🇸</div>
                <div className="text-sm text-gray-600 font-semibold">Made in USA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">🌿</div>
                <div className="text-sm text-gray-600 font-semibold">Premium Quality</div>
              </div>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="relative">
            <img 
              src={teaHoneyImage} 
              alt="Tea and honey blends" 
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExquisiteTasteSection;