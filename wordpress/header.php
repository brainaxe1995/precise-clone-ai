<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title><?php wp_title('|', true, 'right'); ?><?php bloginfo('name'); ?></title>
    <meta name="description" content="<?php bloginfo('description'); ?>">
    
    <!-- Preconnect for Performance -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="<?php echo get_template_directory_uri(); ?>/favicon.ico">
    
    <!-- WordPress Head -->
    <?php wp_head(); ?>
    
    <!-- Custom Styles -->
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/style.css">
    
    <!-- SEO Meta Tags -->
    <meta name="keywords" content="herbal tea, evening wellness, relaxation tea, organic tea, chamomile tea, sleep support">
    <meta name="author" content="RELAX Tea">
    <meta property="og:title" content="<?php wp_title('|', true, 'right'); ?><?php bloginfo('name'); ?>">
    <meta property="og:description" content="<?php bloginfo('description'); ?>">
    <meta property="og:type" content="website">
    <meta property="og:url" content="<?php echo home_url(); ?>">
    <meta property="og:image" content="<?php echo get_template_directory_uri(); ?>/assets/hero-tea-pouring.jpg">
    <meta name="twitter:card" content="summary_large_image">
    
    <!-- Schema.org JSON-LD -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "RELAX Tea",
        "description": "Premium herbal teas for evening wellness and natural relaxation",
        "url": "<?php echo home_url(); ?>",
        "logo": "<?php echo get_template_directory_uri(); ?>/assets/logo.png",
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-555-123-4567",
            "contactType": "customer service"
        },
        "sameAs": [
            "https://facebook.com/relaxtea",
            "https://instagram.com/relaxtea",
            "https://twitter.com/relaxtea"
        ]
    }
    </script>
</head>

<body <?php body_class('animate-fade-in'); ?>>
    
<header class="header">
    <!-- Top Banner -->
    <div class="header-banner">
        <p>🌿 Always free shipping | Premium Evening Wellness</p>
    </div>
    
    <div class="container">
        <div class="header-container">
            <!-- Logo -->
            <div class="logo">
                <div class="logo-icon">
                    <span>🍃</span>
                </div>
                <h1 class="logo-text">RELAX</h1>
            </div>

            <!-- Desktop Navigation -->
            <nav class="nav">
                <a href="<?php echo home_url(); ?>" class="nav-link">Home</a>
                <a href="<?php echo home_url('/shop'); ?>" class="nav-link">Shop Now</a>
                <a href="<?php echo home_url('/blog'); ?>" class="nav-link">Blog</a>
                <a href="<?php echo home_url('/about'); ?>" class="nav-link">About</a>
                <a href="<?php echo home_url('/contact'); ?>" class="nav-link">Contact</a>
                <a href="<?php echo home_url('/faq'); ?>" class="nav-link">FAQ</a>
            </nav>

            <!-- Desktop Actions -->
            <div class="nav-actions">
                <a href="<?php echo home_url('/shop'); ?>" class="btn btn-primary btn-sm">
                    🛒 Cart (0)
                </a>
            </div>

            <!-- Mobile Menu Button -->
            <button class="mobile-menu-btn" onclick="toggleMobileMenu()">
                <span id="menu-icon">☰</span>
            </button>
        </div>

        <!-- Mobile Navigation -->
        <div id="mobile-menu" class="mobile-menu" style="display: none;">
            <nav class="mobile-nav">
                <a href="<?php echo home_url(); ?>" class="nav-link">Home</a>
                <a href="<?php echo home_url('/shop'); ?>" class="nav-link">Shop Now</a>
                <a href="<?php echo home_url('/blog'); ?>" class="nav-link">Blog</a>
                <a href="<?php echo home_url('/about'); ?>" class="nav-link">About</a>
                <a href="<?php echo home_url('/contact'); ?>" class="nav-link">Contact</a>
                <a href="<?php echo home_url('/faq'); ?>" class="nav-link">FAQ</a>
                <div class="mobile-nav-actions">
                    <a href="<?php echo home_url('/shop'); ?>" class="btn btn-primary">
                        🛒 Cart (0)
                    </a>
                </div>
            </nav>
        </div>
    </div>
</header>

<script>
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const icon = document.getElementById('menu-icon');
    
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block';
        menu.classList.add('animate-slide-up');
        icon.innerHTML = '✕';
    } else {
        menu.style.display = 'none';
        icon.innerHTML = '☰';
    }
}

// Close mobile menu when clicking on links
document.addEventListener('DOMContentLoaded', function() {
    const mobileLinks = document.querySelectorAll('.mobile-nav .nav-link');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            document.getElementById('mobile-menu').style.display = 'none';
            document.getElementById('menu-icon').innerHTML = '☰';
        });
    });
});
</script>