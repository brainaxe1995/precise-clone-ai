<?php get_header(); ?>

<div class="min-h-screen">
    
    <!-- Hero Section -->
    <section class="py-20 bg-gradient-to-br from-secondary/20 to-primary/5">
        <div class="container text-center">
            <h1 class="text-4xl md:text-6xl font-heading mb-6">
                About <span class="text-primary">RELAX</span>
            </h1>
            <p class="text-xl text-muted max-w-3xl mx-auto leading-relaxed">
                We're dedicated to promoting natural wellness through premium herbal teas 
                that may help support your relaxation and evening routines.
            </p>
        </div>
    </section>

    <!-- Our Story -->
    <section class="py-20">
        <div class="container">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 class="text-3xl md:text-4xl font-heading mb-6">Our Story</h2>
                    <p class="text-muted mb-6 leading-relaxed">
                        Founded with a passion for natural wellness, RELAX was created to provide 
                        high-quality herbal teas that support healthy sleep routines without making 
                        unrealistic promises.
                    </p>
                    <p class="text-muted mb-8 leading-relaxed">
                        Our carefully curated blends use only the finest organic ingredients, 
                        sourced responsibly from trusted growers around the world. Each cup 
                        represents our commitment to quality and your wellbeing.
                    </p>
                    <a href="<?php echo home_url('/shop'); ?>" class="btn btn-primary">
                        Shop Our Collection
                    </a>
                </div>
                <div class="card p-8 rounded-2xl bg-secondary/10">
                    <div class="aspect-square bg-gradient-to-br from-secondary/20 to-primary/20 rounded-xl flex items-center justify-center">
                        <span class="text-8xl">🍃</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Values -->
    <section class="py-20 bg-secondary/10">
        <div class="container">
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-4xl font-heading mb-6">Our Values</h2>
                <p class="text-muted max-w-2xl mx-auto">
                    These core principles guide everything we do at RELAX.
                </p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div class="card text-center p-8 hover-lift bg-white">
                    <div class="bg-secondary/20 p-4 rounded-full inline-flex mb-4">
                        <span class="text-3xl text-primary">🌿</span>
                    </div>
                    <h3 class="font-heading text-xl mb-3">Natural Ingredients</h3>
                    <p class="text-sm text-muted">
                        100% organic herbs sourced from sustainable farms
                    </p>
                </div>
                
                <div class="card text-center p-8 hover-lift bg-white">
                    <div class="bg-secondary/20 p-4 rounded-full inline-flex mb-4">
                        <span class="text-3xl text-primary">❤️</span>
                    </div>
                    <h3 class="font-heading text-xl mb-3">Wellness Focus</h3>
                    <p class="text-sm text-muted">
                        Supporting your natural relaxation and sleep routines
                    </p>
                </div>
                
                <div class="card text-center p-8 hover-lift bg-white">
                    <div class="bg-secondary/20 p-4 rounded-full inline-flex mb-4">
                        <span class="text-3xl text-primary">🛡️</span>
                    </div>
                    <h3 class="font-heading text-xl mb-3">Quality Assurance</h3>
                    <p class="text-sm text-muted">
                        Rigorous testing ensures every batch meets our standards
                    </p>
                </div>
                
                <div class="card text-center p-8 hover-lift bg-white">
                    <div class="bg-secondary/20 p-4 rounded-full inline-flex mb-4">
                        <span class="text-3xl text-primary">🏆</span>
                    </div>
                    <h3 class="font-heading text-xl mb-3">Customer Satisfaction</h3>
                    <p class="text-sm text-muted">
                        30-day money-back guarantee on all products
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Team -->
    <section class="py-20">
        <div class="container">
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-4xl font-heading mb-6">Meet Our Team</h2>
                <p class="text-muted max-w-2xl mx-auto">
                    Passionate experts dedicated to bringing you the finest herbal teas.
                </p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="card text-center p-8 hover-lift bg-white">
                    <div class="w-24 h-24 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span class="text-3xl">👤</span>
                    </div>
                    <h3 class="font-heading text-xl mb-2">Sarah Johnson</h3>
                    <p class="text-primary font-medium mb-3">Founder & Tea Expert</p>
                    <p class="text-sm text-muted">20+ years in herbal wellness and sustainable sourcing</p>
                </div>
                
                <div class="card text-center p-8 hover-lift bg-white">
                    <div class="w-24 h-24 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span class="text-3xl">👤</span>
                    </div>
                    <h3 class="font-heading text-xl mb-2">Michael Chen</h3>
                    <p class="text-primary font-medium mb-3">Quality Assurance Manager</p>
                    <p class="text-sm text-muted">Ensures every batch meets our rigorous quality standards</p>
                </div>
                
                <div class="card text-center p-8 hover-lift bg-white">
                    <div class="w-24 h-24 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span class="text-3xl">👤</span>
                    </div>
                    <h3 class="font-heading text-xl mb-2">Emma Rodriguez</h3>
                    <p class="text-primary font-medium mb-3">Customer Experience Lead</p>
                    <p class="text-sm text-muted">Dedicated to making your RELAX journey exceptional</p>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA -->
    <section class="py-20 bg-secondary/10">
        <div class="container text-center">
            <h2 class="text-3xl md:text-4xl font-heading mb-6">
                Ready to Experience RELAX?
            </h2>
            <p class="text-muted mb-8 max-w-2xl mx-auto">
                Join thousands of customers who trust RELAX for their evening relaxation routine.
            </p>
            <a href="<?php echo home_url('/shop'); ?>" class="btn btn-lg btn-primary px-8 py-4">
                Shop Now
            </a>
        </div>
    </section>

</div>

<?php get_footer(); ?>