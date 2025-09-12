<?php get_header(); ?>

<div class="min-h-screen">
    
    <!-- Hero Section -->
    <section class="py-20 bg-gradient-to-br from-secondary/20 to-primary/5 text-center">
        <div class="container">
            <h1 class="text-4xl md:text-6xl font-heading mb-6">
                Tea <span class="text-primary">Blog</span>
            </h1>
            <p class="text-xl text-muted max-w-2xl mx-auto">
                Discover wellness tips, brewing guides, and the latest insights from tea experts.
            </p>
        </div>
    </section>

    <!-- Blog Posts -->
    <section class="py-16">
        <div class="container">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                
                <!-- Blog Post 1 -->
                <article class="blog-card">
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/tea-plantation.jpg" alt="Evening Tea Routine" class="blog-image">
                    <div class="blog-content">
                        <div class="blog-meta">
                            <span>December 15, 2024</span>
                            <span>•</span>
                            <span>5 min read</span>
                        </div>
                        <h2 class="blog-title">Creating Your Perfect Evening Tea Routine</h2>
                        <p class="blog-excerpt">
                            Learn how to build a relaxing evening ritual with herbal teas that support natural wellness and peaceful moments.
                        </p>
                        <a href="#" class="read-more">Read More →</a>
                    </div>
                </article>

                <!-- Blog Post 2 -->
                <article class="blog-card">
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/tea-expert.jpg" alt="Herbal Tea Science" class="blog-image">
                    <div class="blog-content">
                        <div class="blog-meta">
                            <span>December 10, 2024</span>
                            <span>•</span>
                            <span>7 min read</span>
                        </div>
                        <h2 class="blog-title">The Science Behind Herbal Relaxation</h2>
                        <p class="blog-excerpt">
                            Explore the natural compounds in chamomile, lavender, and other herbs that have been traditionally used for relaxation.
                        </p>
                        <a href="#" class="read-more">Read More →</a>
                    </div>
                </article>

                <!-- Blog Post 3 -->
                <article class="blog-card">
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/tea-honey-section.jpg" alt="Bedtime Tea Guide" class="blog-image">
                    <div class="blog-content">
                        <div class="blog-meta">
                            <span>December 5, 2024</span>
                            <span>•</span>
                            <span>4 min read</span>
                        </div>
                        <h2 class="blog-title">Best Bedtime Tea Blends for Natural Wellness</h2>
                        <p class="blog-excerpt">
                            Discover which herbal teas work best for different preferences and how to brew them for maximum enjoyment.
                        </p>
                        <a href="#" class="read-more">Read More →</a>
                    </div>
                </article>
            </div>
        </div>
    </section>

</div>

<?php get_footer(); ?>