<?php get_header(); ?>

<!-- Hero Section -->
<section class="hero-section">
    <div class="container">
        <!-- Trust badge -->
        <div class="flex justify-center mb-12 animate-fade-in">
            <div class="bg-white shadow-lg border border-primary/10 rounded-full px-6 py-3 flex items-center">
                <span class="text-primary mr-3 text-lg">⭐⭐⭐⭐⭐</span>
                <span class="text-sm font-semibold text-primary">Trusted by 50,000+ Americans</span>
            </div>
        </div>

        <!-- Main Content - Side by Side -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <!-- Mobile: Image First, Desktop: Text First -->
            <div class="order-2 lg:order-1 animate-slide-up">
                <p class="text-primary/80 text-lg font-medium tracking-wider uppercase mb-6 font-heading">
                    Premium American Herbal Tea
                </p>
                
                <h1 class="text-4xl md:text-6xl lg:text-7xl font-heading leading-tight mb-8 text-primary">
                    Premium Evening Wellness with
                    <span class="gradient-text font-bold">
                        RELAX Tea
                    </span>
                </h1>
                
                <p class="text-xl md:text-2xl mb-8 text-primary/70 leading-relaxed">
                    Experience gentle relaxation with our premium herbal tea blend crafted in the USA. 
                    Perfect for your evening relaxation routine and peaceful moments.
                </p>
                
                <div class="flex flex-col sm:flex-row gap-4 mb-8">
                    <a href="<?php echo home_url('/shop'); ?>" class="btn btn-primary btn-lg hover:scale-105 shadow-xl rounded-full">
                        Shop RELAX Tea Now
                    </a>
                    <a href="<?php echo home_url('/about'); ?>" class="btn btn-outline btn-lg rounded-full">
                        Learn More
                    </a>
                </div>

                <!-- Benefits -->
                <div class="grid grid-cols-3 gap-4">
                    <div class="text-center">
                        <div class="text-2xl mb-2">🌿</div>
                        <p class="text-sm font-semibold text-primary">100% Natural</p>
                    </div>
                    <div class="text-center">
                        <div class="text-2xl mb-2">😌</div>
                        <p class="text-sm font-semibold text-primary">Evening Wellness</p>
                    </div>
                    <div class="text-center">
                        <div class="text-2xl mb-2">🚚</div>
                        <p class="text-sm font-semibold text-primary">Free Shipping</p>
                    </div>
                </div>
            </div>

            <!-- Mobile: Image First, Desktop: Image Second -->
            <div class="order-1 lg:order-2 relative animate-scale-in">
                <div class="relative max-w-lg mx-auto">
                    <div class="absolute inset-0 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-3xl blur-3xl"></div>
                    <img
                        src="<?php echo get_template_directory_uri(); ?>/assets/hero-tea-pouring.jpg"
                        alt="RELAX Premium Herbal Tea for Evening Wellness"
                        class="relative w-full h-auto rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-700"
                    />
                    <div class="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-bounce">
                        Always Free Shipping
                    </div>
                    <div class="absolute -bottom-4 -left-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                        Made in USA
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- About Section -->
<section class="about-section">
    <div class="container">
        <div class="max-w-4xl mx-auto text-center">
            <!-- Section Label -->
            <p class="text-accent text-sm font-medium tracking-wider uppercase mb-6 animate-slide-up">
                ABOUT RELAX
            </p>
            
            <!-- Main Heading -->
            <h2 class="text-3xl md:text-5xl font-bold mb-8 leading-tight animate-slide-in-left">
                Natural Evening <br />
                Wellness Support
            </h2>
            
            <!-- Description -->
            <p class="text-lg md:text-xl leading-relaxed mb-10 opacity-90 max-w-3xl mx-auto animate-slide-in-right">
                At RELAX, we believe in the power of nature to support your evening routine. Our carefully crafted herbal blends are designed for those seeking natural ways to unwind and prepare for restful nights. Every cup is made with premium organic ingredients to support your wellness journey.
            </p>
            
            <!-- CTA Button -->
            <a href="<?php echo home_url('/about'); ?>" class="btn btn-outline btn-lg px-8 py-3 text-base font-medium transition-all duration-300 animate-bounce-in border-white text-white hover:bg-white hover:text-gray-900">
                Discover Our Story
            </a>
        </div>
    </div>
</section>

<!-- Product Tabs Section -->
<section class="py-20 bg-background">
    <div class="container">
        <!-- Section Title -->
        <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-heading mb-8 text-center">Premium Evening Wellness Collection</h2>
            
            <!-- Tabs -->
            <div class="flex flex-wrap justify-center gap-2 mb-8">
                <button class="px-6 py-2 rounded-full transition-all duration-300 bg-accent text-accent-foreground">
                    New-In
                </button>
                <button class="px-6 py-2 rounded-full transition-all duration-300 bg-gray-100 text-gray-600 hover:bg-gray-200">
                    Best Seller
                </button>
                <button class="px-6 py-2 rounded-full transition-all duration-300 bg-gray-100 text-gray-600 hover:bg-gray-200">
                    Most Popular
                </button>
            </div>
        </div>

        <!-- Products Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <!-- Product 1 -->
            <div class="product-card">
                <div class="badge product-badge bg-primary text-primary-foreground">
                    Best Seller
                </div>
                
                <div class="product-image">
                    <div class="w-full h-full bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                        <span class="text-6xl">🌿</span>
                    </div>
                </div>
                
                <div class="product-actions">
                    <button class="product-action-btn">❤️</button>
                    <button class="product-action-btn">🔄</button>
                    <button class="product-action-btn">👁️</button>
                </div>
                
                <div class="card-content text-center">
                    <!-- Rating -->
                    <div class="star-rating justify-center mb-2">
                        <span class="star">★</span>
                        <span class="star">★</span>
                        <span class="star">★</span>
                        <span class="star">★</span>
                        <span class="star">★</span>
                        <span class="text-sm text-gray-600 ml-1">(342)</span>
                    </div>
                    
                    <!-- Product Name -->
                    <h3 class="product-title font-semibold text-lg mb-2 hover:text-accent transition-colors cursor-pointer">
                        Relax Chamomile Herbal tea
                    </h3>
                    
                    <!-- Description -->
                    <p class="text-sm text-muted mb-3">
                        Pure chamomile flowers for gentle evening relaxation
                    </p>

                    <!-- Benefits -->
                    <div class="flex flex-wrap gap-1 mb-3 justify-center">
                        <span class="badge badge-secondary text-xs">May support relaxation</span>
                        <span class="badge badge-secondary text-xs">Caffeine-free</span>
                        <span class="badge badge-secondary text-xs">USDA Organic</span>
                    </div>
                    
                    <!-- Price -->
                    <div class="flex items-center justify-center gap-2 mb-4">
                        <span class="text-xl font-bold text-primary">$24.99</span>
                        <span class="text-sm line-through text-muted">$34.99</span>
                    </div>
                    
                    <!-- Buy Now Button -->
                    <button class="btn btn-primary w-full add-to-cart">
                        Buy Now
                    </button>
                </div>
            </div>

            <!-- Product 2 -->
            <div class="product-card">
                <div class="badge product-badge bg-primary text-primary-foreground">
                    Premium
                </div>
                
                <div class="product-image">
                    <div class="w-full h-full bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                        <span class="text-6xl">🌸</span>
                    </div>
                </div>
                
                <div class="product-actions">
                    <button class="product-action-btn">❤️</button>
                    <button class="product-action-btn">🔄</button>
                    <button class="product-action-btn">👁️</button>
                </div>
                
                <div class="card-content text-center">
                    <div class="star-rating justify-center mb-2">
                        <span class="star">★</span>
                        <span class="star">★</span>
                        <span class="star">★</span>
                        <span class="star">★</span>
                        <span class="star">★</span>
                        <span class="text-sm text-gray-600 ml-1">(288)</span>
                    </div>
                    
                    <h3 class="product-title font-semibold text-lg mb-2 hover:text-accent transition-colors cursor-pointer">
                        Relax Lavender Herbal tea
                    </h3>
                    
                    <p class="text-sm text-muted mb-3">
                        Lavender and lemon balm blend for peaceful evenings
                    </p>

                    <div class="flex flex-wrap gap-1 mb-3 justify-center">
                        <span class="badge badge-secondary text-xs">Natural calming herbs</span>
                        <span class="badge badge-secondary text-xs">Evening routine support</span>
                        <span class="badge badge-secondary text-xs">Premium quality</span>
                    </div>
                    
                    <div class="flex items-center justify-center gap-2 mb-4">
                        <span class="text-xl font-bold text-primary">$29.99</span>
                        <span class="text-sm line-through text-muted">$39.99</span>
                    </div>
                    
                    <button class="btn btn-primary w-full add-to-cart">
                        Buy Now
                    </button>
                </div>
            </div>

            <!-- Product 3 -->
            <div class="product-card">
                <div class="product-image">
                    <div class="w-full h-full bg-gradient-to-br from-yellow-100 to-yellow-200 flex items-center justify-center">
                        <span class="text-6xl">🍋</span>
                    </div>
                </div>
                
                <div class="product-actions">
                    <button class="product-action-btn">❤️</button>
                    <button class="product-action-btn">🔄</button>
                    <button class="product-action-btn">👁️</button>
                </div>
                
                <div class="card-content text-center">
                    <div class="star-rating justify-center mb-2">
                        <span class="star">★</span>
                        <span class="star">★</span>
                        <span class="star">★</span>
                        <span class="star">★</span>
                        <span class="star">★</span>
                        <span class="text-sm text-gray-600 ml-1">(189)</span>
                    </div>
                    
                    <h3 class="product-title font-semibold text-lg mb-2 hover:text-accent transition-colors cursor-pointer">
                        Relax Lemon balm Herbal tea
                    </h3>
                    
                    <p class="text-sm text-muted mb-3">
                        Traditional passionflower for tranquil moments
                    </p>

                    <div class="flex flex-wrap gap-1 mb-3 justify-center">
                        <span class="badge badge-secondary text-xs">Caffeine-free</span>
                        <span class="badge badge-secondary text-xs">Traditional herb</span>
                        <span class="badge badge-secondary text-xs">Evening wellness</span>
                    </div>
                    
                    <div class="flex items-center justify-center gap-2 mb-4">
                        <span class="text-xl font-bold text-primary">$26.99</span>
                    </div>
                    
                    <button class="btn btn-primary w-full add-to-cart">
                        Buy Now
                    </button>
                </div>
            </div>

            <!-- Product 4 -->
            <div class="product-card">
                <div class="badge product-badge bg-primary text-primary-foreground">
                    Traditional
                </div>
                
                <div class="product-image">
                    <div class="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                        <span class="text-6xl">🌿</span>
                    </div>
                </div>
                
                <div class="product-actions">
                    <button class="product-action-btn">❤️</button>
                    <button class="product-action-btn">🔄</button>
                    <button class="product-action-btn">👁️</button>
                </div>
                
                <div class="card-content text-center">
                    <div class="star-rating justify-center mb-2">
                        <span class="star">★</span>
                        <span class="star">★</span>
                        <span class="star">★</span>
                        <span class="star">★</span>
                        <span class="star">★</span>
                        <span class="text-sm text-gray-600 ml-1">(156)</span>
                    </div>
                    
                    <h3 class="product-title font-semibold text-lg mb-2 hover:text-accent transition-colors cursor-pointer">
                        Relax Valerian Herbal tea
                    </h3>
                    
                    <p class="text-sm text-muted mb-3">
                        Time-honored valerian root with complementary herbs
                    </p>

                    <div class="flex flex-wrap gap-1 mb-3 justify-center">
                        <span class="badge badge-secondary text-xs">Traditional use</span>
                        <span class="badge badge-secondary text-xs">Evening ritual</span>
                        <span class="badge badge-secondary text-xs">Natural ingredients</span>
                    </div>
                    
                    <div class="flex items-center justify-center gap-2 mb-4">
                        <span class="text-xl font-bold text-primary">$32.99</span>
                        <span class="text-sm line-through text-muted">$42.99</span>
                    </div>
                    
                    <button class="btn btn-primary w-full add-to-cart">
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Exquisite Taste Section -->
<section class="py-16 bg-gradient-to-r from-yellow-50 to-orange-50">
    <div class="container">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <!-- Left Content -->
            <div class="space-y-6">
                <h2 class="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                    Exquisite Taste,<br />
                    Refreshing Blends.
                </h2>
                <p class="text-lg text-gray-600 leading-relaxed">
                    Experience the perfect harmony of premium tea leaves carefully selected 
                    and blended with natural ingredients to create extraordinary flavors 
                    that awaken your senses.
                </p>
                <div class="flex space-x-4">
                    <div class="text-center">
                        <div class="text-3xl font-bold text-accent">100+</div>
                        <div class="text-sm text-gray-600">Tea Varieties</div>
                    </div>
                    <div class="text-center">
                        <div class="text-3xl font-bold text-accent">25+</div>
                        <div class="text-sm text-gray-600">Years Experience</div>
                    </div>
                    <div class="text-center">
                        <div class="text-3xl font-bold text-accent">50k+</div>
                        <div class="text-sm text-gray-600">Happy Customers</div>
                    </div>
                </div>
            </div>
            
            <!-- Right Image -->
            <div class="relative">
                <img 
                    src="<?php echo get_template_directory_uri(); ?>/assets/tea-honey-section.jpg" 
                    alt="Tea and honey blends" 
                    class="w-full h-96 object-cover rounded-lg shadow-lg"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
        </div>
    </div>
</section>

<!-- Find Right Tea Section -->
<section class="py-20 relative" style="background-image: url('<?php echo get_template_directory_uri(); ?>/assets/tea-plantation.jpg'); background-size: cover; background-position: center; background-repeat: no-repeat;">
    <!-- Dark Green Overlay -->
    <div class="absolute inset-0 bg-primary/85"></div>
    
    <div class="container relative z-10">
        <div class="text-center text-white max-w-3xl mx-auto">
            <h2 class="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Experience Natural<br />
                Evening Wellness
            </h2>
            <p class="text-lg md:text-xl mb-8 opacity-90 leading-relaxed">
                Discover our premium herbal tea blends crafted with carefully selected natural ingredients. 
                Join thousands who have made Relax Herbal Tea part of their nightly routine for better rest and relaxation.
            </p>
            
            <a href="<?php echo home_url('/shop'); ?>" class="btn btn-lg bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 text-base font-medium">
                Shop Premium Blends
            </a>
            
            <!-- Additional Info -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                <div class="text-center">
                    <div class="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                        <span class="text-2xl">🌱</span>
                    </div>
                    <h3 class="font-semibold mb-2">100% Organic</h3>
                    <p class="text-sm opacity-80">Certified organic tea leaves sourced from the finest gardens</p>
                </div>
                
                <div class="text-center">
                    <div class="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                        <span class="text-2xl">🏆</span>
                    </div>
                    <h3 class="font-semibold mb-2">Award Winning</h3>
                    <p class="text-sm opacity-80">Recognized internationally for quality and taste</p>
                </div>
                
                <div class="text-center">
                    <div class="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                        <span class="text-2xl">🚚</span>
                    </div>
                    <h3 class="font-semibold mb-2">Free Delivery</h3>
                    <p class="text-sm opacity-80">Free shipping on orders over $50 worldwide</p>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Brand Logos Section -->
<section class="py-16 bg-gray-50">
    <div class="container">
        <div class="text-center mb-12">
            <h3 class="text-2xl font-bold mb-4">Trusted Certifications</h3>
            <p class="text-gray-600">Our commitment to quality, sustainability, and ethical sourcing</p>
        </div>
        
        <div class="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
            <div class="text-center group">
                <div class="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">🌿</div>
                <div class="text-sm font-medium text-gray-800">Organic Certified</div>
                <div class="text-xs text-gray-500">USDA Organic</div>
            </div>
            <div class="text-center group">
                <div class="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">🤝</div>
                <div class="text-sm font-medium text-gray-800">Fair Trade</div>
                <div class="text-xs text-gray-500">Fair Trade Certified</div>
            </div>
            <div class="text-center group">
                <div class="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">🌱</div>
                <div class="text-sm font-medium text-gray-800">Non-GMO</div>
                <div class="text-xs text-gray-500">Non-GMO Project</div>
            </div>
            <div class="text-center group">
                <div class="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">🌳</div>
                <div class="text-sm font-medium text-gray-800">Rainforest Alliance</div>
                <div class="text-xs text-gray-500">Rainforest Certified</div>
            </div>
            <div class="text-center group">
                <div class="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">🌍</div>
                <div class="text-sm font-medium text-gray-800">Carbon Neutral</div>
                <div class="text-xs text-gray-500">Carbon Neutral Certified</div>
            </div>
        </div>
    </div>
</section>

<!-- Crafted by Experts Section -->
<section class="py-20 bg-background">
    <div class="container">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <!-- Left Content -->
            <div>
                <h2 class="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                    Crafted by Leading<br />
                    Tea Experts
                </h2>
                <p class="text-lg text-gray-600 mb-8 leading-relaxed">
                    Our team of certified tea masters and sommeliers work directly with tea gardens 
                    around the world to source the finest leaves and create exceptional blends that 
                    meet our rigorous quality standards.
                </p>
                
                <div class="space-y-6 mb-8">
                    <div class="flex items-center space-x-4">
                        <div class="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold">
                            ✓
                        </div>
                        <div>
                            <h4 class="font-semibold">Expert Curation</h4>
                            <p class="text-gray-600 text-sm">Hand-selected by certified tea masters</p>
                        </div>
                    </div>
                    
                    <div class="flex items-center space-x-4">
                        <div class="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold">
                            ✓
                        </div>
                        <div>
                            <h4 class="font-semibold">Quality Testing</h4>
                            <p class="text-gray-600 text-sm">Rigorous quality control at every step</p>
                        </div>
                    </div>
                    
                    <div class="flex items-center space-x-4">
                        <div class="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold">
                            ✓
                        </div>
                        <div>
                            <h4 class="font-semibold">Artisan Blending</h4>
                            <p class="text-gray-600 text-sm">Traditional techniques with modern precision</p>
                        </div>
                    </div>
                </div>
                
                <a href="<?php echo home_url('/about'); ?>" class="btn btn-lg bg-accent hover:bg-accent/90">
                    Meet Our Experts
                </a>
            </div>
            
            <!-- Right Content - Expert Image & Testimonials -->
            <div class="space-y-6">
                <div class="relative">
                    <img 
                        src="<?php echo get_template_directory_uri(); ?>/assets/tea-expert.jpg" 
                        alt="Tea expert examining tea leaves" 
                        class="w-full h-64 object-cover rounded-lg shadow-lg"
                    />
                </div>
                
                <!-- Testimonials -->
                <div class="space-y-4">
                    <div class="card border-l-4 border-accent">
                        <div class="card-content">
                            <div class="flex items-start space-x-3">
                                <div class="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                                    👤
                                </div>
                                <div class="flex-1">
                                    <div class="flex items-center space-x-1 mb-2">
                                        <span class="star">★</span>
                                        <span class="star">★</span>
                                        <span class="star">★</span>
                                        <span class="star">★</span>
                                        <span class="star">★</span>
                                    </div>
                                    <p class="text-sm text-gray-600 mb-2">"The quality and attention to detail in every blend is exceptional. You can taste the expertise in every cup."</p>
                                    <div class="text-xs">
                                        <span class="font-semibold">Sarah Johnson</span>
                                        <span class="text-gray-500"> - Tea Sommelier</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="card border-l-4 border-accent">
                        <div class="card-content">
                            <div class="flex items-start space-x-3">
                                <div class="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                                    👤
                                </div>
                                <div class="flex-1">
                                    <div class="flex items-center space-x-1 mb-2">
                                        <span class="star">★</span>
                                        <span class="star">★</span>
                                        <span class="star">★</span>
                                        <span class="star">★</span>
                                        <span class="star">★</span>
                                    </div>
                                    <p class="text-sm text-gray-600 mb-2">"Working with RELAX has been incredible. Their commitment to natural sleep support matches our own standards."</p>
                                    <div class="text-xs">
                                        <span class="font-semibold">Michael Chen</span>
                                        <span class="text-gray-500"> - Master Blender</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Master Taster Section -->
<section class="py-20 bg-gradient-to-r from-green-50 to-lime-50">
    <div class="container">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <!-- Left - Product Image -->
            <div class="relative">
                <div class="bg-white rounded-2xl p-8 shadow-xl">
                    <div class="badge mb-4 bg-red-500 text-white">Limited Edition</div>
                    <img 
                        src="<?php echo get_template_directory_uri(); ?>/assets/tea-package-green.jpg" 
                        alt="Master Tea Tester Selection" 
                        class="w-full h-80 object-cover rounded-lg mb-6"
                    />
                    <div class="text-center">
                        <h3 class="text-2xl font-bold mb-2">Master Tea Tester Selections</h3>
                        <p class="text-gray-600 mb-4">Handpicked by our head tea master</p>
                        <div class="text-3xl font-bold text-accent mb-4">$24.99</div>
                        <button class="btn w-full bg-accent hover:bg-accent/90 add-to-cart">
                            Add to Cart
                        </button>
                    </div>
                </div>
                
                <!-- Floating Elements -->
                <div class="absolute -top-4 -right-4 w-20 h-20 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                    Master<br/>Choice
                </div>
            </div>
            
            <!-- Right - Content -->
            <div class="space-y-6">
                <div class="inline-block">
                    <div class="badge border border-accent text-accent bg-transparent">
                        MASTER TEA TESTER
                    </div>
                </div>
                
                <h2 class="text-4xl md:text-5xl font-bold leading-tight">
                    Master Tea Tester<br />
                    Selections
                </h2>
                
                <p class="text-lg text-gray-600 leading-relaxed">
                    Our Master Tea Tester, with over 30 years of experience, personally selects 
                    and curates these exceptional teas. Each selection represents the pinnacle 
                    of quality, flavor, and craftsmanship in the tea world.
                </p>
                
                <!-- Features -->
                <div class="space-y-4">
                    <div class="flex items-center space-x-3">
                        <div class="w-2 h-2 bg-accent rounded-full"></div>
                        <span class="text-gray-700">Hand-selected premium tea leaves</span>
                    </div>
                    <div class="flex items-center space-x-3">
                        <div class="w-2 h-2 bg-accent rounded-full"></div>
                        <span class="text-gray-700">Limited seasonal availability</span>
                    </div>
                    <div class="flex items-center space-x-3">
                        <div class="w-2 h-2 bg-accent rounded-full"></div>
                        <span class="text-gray-700">Certified organic and fair trade</span>
                    </div>
                    <div class="flex items-center space-x-3">
                        <div class="w-2 h-2 bg-accent rounded-full"></div>
                        <span class="text-gray-700">Exclusive tasting notes included</span>
                    </div>
                </div>
                
                <!-- Stats -->
                <div class="grid grid-cols-3 gap-6 pt-6 border-t border-gray-200">
                    <div class="text-center">
                        <div class="text-2xl font-bold text-accent">30+</div>
                        <div class="text-sm text-gray-600">Years Experience</div>
                    </div>
                    <div class="text-center">
                        <div class="text-2xl font-bold text-accent">500+</div>
                        <div class="text-sm text-gray-600">Teas Curated</div>
                    </div>
                    <div class="text-center">
                        <div class="text-2xl font-bold text-accent">98%</div>
                        <div class="text-sm text-gray-600">Customer Satisfaction</div>
                    </div>
                </div>
                
                <a href="<?php echo home_url('/about'); ?>" class="btn btn-lg btn-outline border-accent text-accent hover:bg-accent hover:text-white">
                    Learn More About Our Process
                </a>
            </div>
        </div>
    </div>
</section>

<!-- Customer Reviews Section -->
<section class="py-20 bg-background">
    <div class="container">
        <!-- Section Header -->
        <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">Customer Reviews</h2>
            <div class="flex items-center justify-center space-x-2 mb-4">
                <div class="flex items-center space-x-1">
                    <span class="star">★</span>
                    <span class="star">★</span>
                    <span class="star">★</span>
                    <span class="star">★</span>
                    <span class="star">★</span>
                </div>
                <span class="text-lg font-semibold">4.8</span>
                <span class="text-gray-600">(1,247 reviews)</span>
            </div>
            <p class="text-gray-600">See what our customers are saying about their tea experience</p>
        </div>

        <!-- Reviews Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <!-- Review 1 -->
            <div class="testimonial-card">
                <!-- Rating & Date -->
                <div class="flex items-center justify-between mb-3">
                    <div class="star-rating">
                        <span class="star">★</span>
                        <span class="star">★</span>
                        <span class="star">★</span>
                        <span class="star">★</span>
                        <span class="star">★</span>
                    </div>
                    <span class="text-xs text-gray-500">2 days ago</span>
                </div>
                
                <!-- Title -->
                <h3 class="font-semibold text-sm mb-2">Absolutely amazing quality!</h3>
                
                <!-- Review Text -->
                <p class="text-sm text-gray-600 mb-4">I've been a tea lover for years, but nothing compares to the quality of RELAX. The Chamomile blend is my new favorite - helps me unwind so peacefully.</p>
                
                <!-- Author -->
                <div class="testimonial-author">
                    <div class="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                        👤
                    </div>
                    <div class="flex-1">
                        <div class="flex items-center space-x-2">
                            <span class="text-sm font-medium">Amanda Wilson</span>
                            <span class="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                                Verified
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Review 2 -->
            <div class="testimonial-card">
                <div class="flex items-center justify-between mb-3">
                    <div class="star-rating">
                        <span class="star">★</span>
                        <span class="star">★</span>
                        <span class="star">★</span>
                        <span class="star">★</span>
                        <span class="star">★</span>
                    </div>
                    <span class="text-xs text-gray-500">1 week ago</span>
                </div>
                
                <h3 class="font-semibold text-sm mb-2">Fast shipping, great customer service</h3>
                
                <p class="text-sm text-gray-600 mb-4">Ordered the chamomile blend and it arrived perfectly packaged. The taste is exactly what I was looking for - calming and aromatic. Will definitely order again!</p>
                
                <div class="testimonial-author">
                    <div class="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                        👤
                    </div>
                    <div class="flex-1">
                        <div class="flex items-center space-x-2">
                            <span class="text-sm font-medium">David Chen</span>
                            <span class="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                                Verified
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Review 3 -->
            <div class="testimonial-card">
                <div class="flex items-center justify-between mb-3">
                    <div class="star-rating">
                        <span class="star">★</span>
                        <span class="star">★</span>
                        <span class="star">★</span>
                        <span class="star">★</span>
                        <span class="star">★</span>
                    </div>
                    <span class="text-xs text-gray-500">2 weeks ago</span>
                </div>
                
                <h3 class="font-semibold text-sm mb-2">Best tea I've ever had</h3>
                
                <p class="text-sm text-gray-600 mb-4">The Master Tea Taster selection is incredible. You can really taste the difference in quality. My morning routine has never been better!</p>
                
                <div class="testimonial-author">
                    <div class="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                        👤
                    </div>
                    <div class="flex-1">
                        <div class="flex items-center space-x-2">
                            <span class="text-sm font-medium">Lisa Rodriguez</span>
                            <span class="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                                Verified
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Review 4 -->
            <div class="testimonial-card">
                <div class="flex items-center justify-between mb-3">
                    <div class="star-rating">
                        <span class="star">★</span>
                        <span class="star">★</span>
                        <span class="star">★</span>
                        <span class="star">★</span>
                        <span class="star empty">★</span>
                    </div>
                    <span class="text-xs text-gray-500">3 weeks ago</span>
                </div>
                
                <h3 class="font-semibold text-sm mb-2">Great variety and taste</h3>
                
                <p class="text-sm text-gray-600 mb-4">Love the selection of organic teas. The green tea blend is particularly good. Packaging could be more eco-friendly but overall very satisfied.</p>
                
                <div class="testimonial-author">
                    <div class="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                        👤
                    </div>
                    <div class="flex-1">
                        <div class="flex items-center space-x-2">
                            <span class="text-sm font-medium">James Parker</span>
                            <span class="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                                Verified
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Rating Breakdown -->
        <div class="bg-gray-50 rounded-lg p-8">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <!-- Left - Overall Stats -->
                <div class="text-center">
                    <div class="text-5xl font-bold mb-2">4.8</div>
                    <div class="flex items-center justify-center space-x-1 mb-2">
                        <span class="star">★</span>
                        <span class="star">★</span>
                        <span class="star">★</span>
                        <span class="star">★</span>
                        <span class="star">★</span>
                    </div>
                    <div class="text-gray-600">1,247 total reviews</div>
                </div>
                
                <!-- Right - Rating Distribution -->
                <div class="space-y-2">
                    <div class="flex items-center space-x-3">
                        <span class="text-sm w-8">5 ★</span>
                        <div class="flex-1 bg-gray-200 rounded-full h-2">
                            <div class="bg-yellow-400 h-2 rounded-full" style="width: 78%"></div>
                        </div>
                        <span class="text-sm text-gray-600 w-8">78%</span>
                    </div>
                    <div class="flex items-center space-x-3">
                        <span class="text-sm w-8">4 ★</span>
                        <div class="flex-1 bg-gray-200 rounded-full h-2">
                            <div class="bg-yellow-400 h-2 rounded-full" style="width: 18%"></div>
                        </div>
                        <span class="text-sm text-gray-600 w-8">18%</span>
                    </div>
                    <div class="flex items-center space-x-3">
                        <span class="text-sm w-8">3 ★</span>
                        <div class="flex-1 bg-gray-200 rounded-full h-2">
                            <div class="bg-yellow-400 h-2 rounded-full" style="width: 3%"></div>
                        </div>
                        <span class="text-sm text-gray-600 w-8">3%</span>
                    </div>
                    <div class="flex items-center space-x-3">
                        <span class="text-sm w-8">2 ★</span>
                        <div class="flex-1 bg-gray-200 rounded-full h-2">
                            <div class="bg-yellow-400 h-2 rounded-full" style="width: 1%"></div>
                        </div>
                        <span class="text-sm text-gray-600 w-8">1%</span>
                    </div>
                    <div class="flex items-center space-x-3">
                        <span class="text-sm w-8">1 ★</span>
                        <div class="flex-1 bg-gray-200 rounded-full h-2">
                            <div class="bg-yellow-400 h-2 rounded-full" style="width: 0%"></div>
                        </div>
                        <span class="text-sm text-gray-600 w-8">0%</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Newsletter Section -->
<section class="py-20 bg-background">
    <div class="container">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <!-- Left Column - Content -->
            <div class="space-y-8">
                <div>
                    <h2 class="text-4xl md:text-5xl font-bold mb-6 leading-tight text-primary">
                        Join the RELAX Sleep Club
                    </h2>
                    <p class="text-lg md:text-xl text-primary/70 leading-relaxed">
                        Get exclusive access to new sleep support tea releases, expert brewing tips for better rest, 
                        and special discounts to help you sleep naturally.
                    </p>
                </div>
                
                <!-- Newsletter Form -->
                <form class="newsletter-form" method="post" action="<?php echo admin_url('admin-post.php'); ?>">
                    <input type="hidden" name="action" value="newsletter_signup">
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email address"
                        required
                        class="newsletter-input"
                    />
                    <button type="submit" class="btn btn-primary px-8 whitespace-nowrap">
                        Join Now
                    </button>
                </form>
                
                <!-- Trust Indicators -->
                <div class="flex flex-wrap items-center gap-8 text-primary/80">
                    <div class="text-center">
                        <div class="text-2xl font-bold text-primary">50K+</div>
                        <div class="text-sm">Happy Sleepers</div>
                    </div>
                    <div class="text-center">
                        <div class="text-2xl font-bold text-primary">5★</div>
                        <div class="text-sm">Newsletter Rating</div>
                    </div>
                    <div class="text-center">
                        <div class="text-2xl font-bold text-primary">0</div>
                        <div class="text-sm">Spam Promise</div>
                    </div>
                </div>
            </div>

            <!-- Right Column - Benefits -->
            <div class="space-y-6">
                <div class="bg-secondary/10 p-6 rounded-2xl border border-secondary/20">
                    <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                        <span class="text-2xl">📧</span>
                    </div>
                    <h3 class="font-semibold mb-2 text-primary">Exclusive Sleep Offers</h3>
                    <p class="text-sm text-primary/70">Get first access to sales and member-only discounts on sleep support teas</p>
                </div>
                
                <div class="bg-secondary/10 p-6 rounded-2xl border border-secondary/20">
                    <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                        <span class="text-2xl">🌙</span>
                    </div>
                    <h3 class="font-semibold mb-2 text-primary">New Sleep Blends</h3>
                    <p class="text-sm text-primary/70">Be the first to try our latest sleep support tea discoveries</p>
                </div>
                
                <div class="bg-secondary/10 p-6 rounded-2xl border border-secondary/20">
                    <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                        <span class="text-2xl">📚</span>
                    </div>
                    <h3 class="font-semibold mb-2 text-primary">Sleep Tips</h3>
                    <p class="text-sm text-primary/70">Learn bedtime brewing techniques from our sleep wellness experts</p>
                </div>
                
                <!-- Fine Print -->
                <p class="text-xs text-primary/60 mt-6">
                    We respect your privacy. Unsubscribe at any time. 
                    Read our <a href="<?php echo home_url('/privacy'); ?>" class="underline cursor-pointer">Privacy Policy</a> and
                    <a href="<?php echo home_url('/terms'); ?>" class="underline cursor-pointer"> Terms of Service</a>.
                </p>
            </div>
        </div>
    </div>
</section>

<?php get_footer(); ?>