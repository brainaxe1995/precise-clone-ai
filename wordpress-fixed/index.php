<?php get_header(); ?>

<!-- Hero Section -->
<section class="hero-section">
    <div class="container">
        <!-- Trust badge -->
        <div class="flex justify-center mb-12 animate-fade-in">
            <div style="background: white; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); border: 1px solid rgba(34, 87, 56, 0.1); border-radius: 9999px; padding: 0.75rem 1.5rem; display: inline-flex; align-items: center;">
                <span style="color: rgb(34, 87, 56); margin-right: 0.75rem; font-size: 1.125rem;">⭐⭐⭐⭐⭐</span>
                <span style="font-size: 0.875rem; font-weight: 600; color: rgb(34, 87, 56);">Trusted by 50,000+ Americans</span>
            </div>
        </div>

        <!-- Main Content - Side by Side -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <!-- Text Content -->
            <div class="order-2 lg:order-1 animate-slide-up">
                <p style="color: rgba(34, 87, 56, 0.8); font-size: 1.125rem; font-weight: 500; letter-spacing: 0.05em; text-transform: uppercase; margin-bottom: 1.5rem; font-family: 'Playfair Display', serif;">
                    Premium American Herbal Tea
                </p>
                
                <h1 style="font-size: clamp(2.25rem, 5vw, 4.5rem); font-family: 'Playfair Display', serif; line-height: 1.1; margin-bottom: 2rem; color: rgb(34, 87, 56);">
                    Premium Evening Wellness with
                    <span class="gradient-text" style="font-weight: 700;">
                        RELAX Tea
                    </span>
                </h1>
                
                <p style="font-size: clamp(1.125rem, 3vw, 1.5rem); margin-bottom: 2rem; color: rgba(34, 87, 56, 0.7); line-height: 1.6;">
                    Experience gentle relaxation with our premium herbal tea blend crafted in the USA. 
                    Perfect for your evening relaxation routine and peaceful moments.
                </p>
                
                <div style="display: flex; flex-direction: column; gap: 1rem; margin-bottom: 2rem;">
                    <a href="<?php echo home_url('/shop'); ?>" class="btn btn-primary btn-lg" style="text-align: center; border-radius: 9999px;">
                        Shop RELAX Tea Now
                    </a>
                    <a href="<?php echo home_url('/about'); ?>" class="btn btn-outline btn-lg" style="text-align: center; border-radius: 9999px;">
                        Learn More
                    </a>
                </div>

                <!-- Benefits -->
                <div class="grid grid-cols-3 gap-4">
                    <div class="text-center">
                        <div style="font-size: 1.5rem; margin-bottom: 0.5rem;">🌿</div>
                        <p style="font-size: 0.875rem; font-weight: 600; color: rgb(34, 87, 56);">100% Natural</p>
                    </div>
                    <div class="text-center">
                        <div style="font-size: 1.5rem; margin-bottom: 0.5rem;">😌</div>
                        <p style="font-size: 0.875rem; font-weight: 600; color: rgb(34, 87, 56);">Evening Wellness</p>
                    </div>
                    <div class="text-center">
                        <div style="font-size: 1.5rem; margin-bottom: 0.5rem;">🚚</div>
                        <p style="font-size: 0.875rem; font-weight: 600; color: rgb(34, 87, 56);">Free Shipping</p>
                    </div>
                </div>
            </div>

            <!-- Image -->
            <div class="order-1 lg:order-2 relative animate-scale-in">
                <div style="position: relative; max-width: 32rem; margin: 0 auto;">
                    <div style="position: absolute; inset: 0; background: linear-gradient(to right, rgba(133, 158, 112, 0.2), rgba(34, 87, 56, 0.2)); border-radius: 1.5rem; filter: blur(48px);"></div>
                    <img
                        src="<?php echo get_template_directory_uri(); ?>/assets/hero-tea-pouring.jpg"
                        alt="RELAX Premium Herbal Tea for Evening Wellness"
                        style="position: relative; width: 100%; height: auto; border-radius: 1.5rem; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); transition: transform 0.7s ease;"
                        onmouseover="this.style.transform='scale(1.05)'"
                        onmouseout="this.style.transform='scale(1)'"
                    />
                    <div style="position: absolute; top: -1rem; right: -1rem; background: rgb(34, 87, 56); color: white; padding: 0.5rem 1rem; border-radius: 9999px; font-size: 0.875rem; font-weight: 700; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); animation: bounce 2s infinite;">
                        Always Free Shipping
                    </div>
                    <div style="position: absolute; bottom: -1rem; left: -1rem; background: rgb(133, 158, 112); color: rgb(34, 87, 56); padding: 0.5rem 1rem; border-radius: 9999px; font-size: 0.875rem; font-weight: 700; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
                        Made in USA
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- About Section -->
<section style="background: rgb(243, 244, 246); color: rgb(34, 87, 56); padding: 5rem 0;">
    <div class="container">
        <div style="max-width: 56rem; margin: 0 auto; text-align: center;">
            <!-- Section Label -->
            <p style="color: rgb(133, 158, 112); font-size: 0.875rem; font-weight: 500; letter-spacing: 0.05em; text-transform: uppercase; margin-bottom: 1.5rem;">
                ABOUT RELAX
            </p>
            
            <!-- Main Heading -->
            <h2 style="font-size: clamp(1.875rem, 5vw, 3rem); font-weight: 700; margin-bottom: 2rem; line-height: 1.1; font-family: 'Playfair Display', serif;">
                Natural Evening <br />
                Wellness Support
            </h2>
            
            <!-- Description -->
            <p style="font-size: clamp(1.125rem, 3vw, 1.25rem); line-height: 1.6; margin-bottom: 2.5rem; opacity: 0.9; max-width: 48rem; margin-left: auto; margin-right: auto;">
                At RELAX, we believe in the power of nature to support your evening routine. Our carefully crafted herbal blends are designed for those seeking natural ways to unwind and prepare for restful nights. Every cup is made with premium organic ingredients to support your wellness journey.
            </p>
            
            <!-- CTA Button -->
            <a href="<?php echo home_url('/about'); ?>" class="btn btn-outline btn-lg" style="border-color: white; color: white; padding: 0.75rem 2rem; font-size: 1rem; font-weight: 500; transition: all 0.3s ease;"
               onmouseover="this.style.backgroundColor='white'; this.style.color='rgb(31, 41, 55)'"
               onmouseout="this.style.backgroundColor='transparent'; this.style.color='white'">
                Discover Our Story
            </a>
        </div>
    </div>
</section>

<!-- Product Section -->
<section class="py-20 bg-background">
    <div class="container">
        <!-- Section Title -->
        <div class="text-center mb-12">
            <h2 style="font-size: clamp(1.875rem, 5vw, 2.25rem); font-family: 'Playfair Display', serif; margin-bottom: 2rem; text-align: center;">Premium Evening Wellness Collection</h2>
            
            <!-- Tabs -->
            <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 0.5rem; margin-bottom: 2rem;">
                <button style="padding: 0.5rem 1.5rem; border-radius: 9999px; transition: all 0.3s ease; background: rgb(133, 158, 112); color: rgb(34, 87, 56); border: none; cursor: pointer;">
                    New-In
                </button>
                <button style="padding: 0.5rem 1.5rem; border-radius: 9999px; transition: all 0.3s ease; background: rgb(243, 244, 246); color: rgb(107, 114, 128); border: none; cursor: pointer;"
                        onmouseover="this.style.backgroundColor='rgb(229, 231, 235)'"
                        onmouseout="this.style.backgroundColor='rgb(243, 244, 246)'">
                    Best Seller
                </button>
                <button style="padding: 0.5rem 1.5rem; border-radius: 9999px; transition: all 0.3s ease; background: rgb(243, 244, 246); color: rgb(107, 114, 128); border: none; cursor: pointer;"
                        onmouseover="this.style.backgroundColor='rgb(229, 231, 235)'"
                        onmouseout="this.style.backgroundColor='rgb(243, 244, 246)'">
                    Most Popular
                </button>
            </div>
        </div>

        <!-- Products Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <!-- Product 1 -->
            <div class="product-card">
                <div class="badge product-badge">
                    Best Seller
                </div>
                
                <div style="aspect-ratio: 1 / 1; background: linear-gradient(to bottom right, rgb(240, 253, 244), rgb(220, 252, 231)); padding: 2rem; display: flex; align-items: center; justify-content: center;">
                    <div style="width: 8rem; height: 8rem; background: rgba(34, 87, 56, 0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                        <span style="font-size: 4rem;">🌿</span>
                    </div>
                </div>
                
                <div class="card-content text-center">
                    <!-- Rating -->
                    <div style="display: flex; align-items: center; justify-content: center; gap: 0.25rem; margin-bottom: 0.5rem;">
                        <span class="star">★</span>
                        <span class="star">★</span>
                        <span class="star">★</span>
                        <span class="star">★</span>
                        <span class="star">★</span>
                        <span style="font-size: 0.875rem; color: rgb(107, 114, 128); margin-left: 0.25rem;">(342)</span>
                    </div>
                    
                    <!-- Product Name -->
                    <h3 style="font-weight: 600; font-size: 1.125rem; margin-bottom: 0.5rem; transition: color 0.3s ease; cursor: pointer;"
                        onmouseover="this.style.color='rgb(133, 158, 112)'"
                        onmouseout="this.style.color='rgb(34, 87, 56)'">
                        Relax Chamomile Herbal tea
                    </h3>
                    
                    <!-- Description -->
                    <p style="font-size: 0.875rem; color: rgb(107, 114, 128); margin-bottom: 0.75rem;">
                        Pure chamomile flowers for gentle evening relaxation
                    </p>

                    <!-- Benefits -->
                    <div style="display: flex; flex-wrap: wrap; gap: 0.25rem; margin-bottom: 0.75rem; justify-content: center;">
                        <span class="badge badge-secondary" style="font-size: 0.75rem;">May support relaxation</span>
                        <span class="badge badge-secondary" style="font-size: 0.75rem;">Caffeine-free</span>
                        <span class="badge badge-secondary" style="font-size: 0.75rem;">USDA Organic</span>
                    </div>
                    
                    <!-- Price -->
                    <div style="display: flex; align-items: center; justify-content: center; gap: 0.5rem; margin-bottom: 1rem;">
                        <span style="font-size: 1.25rem; font-weight: 700; color: rgb(34, 87, 56);">$24.99</span>
                        <span style="font-size: 0.875rem; text-decoration: line-through; color: rgb(107, 114, 128);">$34.99</span>
                    </div>
                    
                    <!-- Buy Now Button -->
                    <button class="btn btn-primary" style="width: 100%; font-weight: 600;"
                            onclick="alert('Added to cart!')">
                        Buy Now
                    </button>
                </div>
            </div>

            <!-- Repeat similar structure for products 2, 3, 4 with different content -->
            <!-- Product 2, 3, 4 would follow the same pattern but with different colors, text, and images -->
            
        </div>
    </div>
</section>

<!-- Simple footer call -->
<?php get_footer(); ?>