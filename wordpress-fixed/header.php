<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title><?php wp_title('|', true, 'right'); ?><?php bloginfo('name'); ?></title>
    <meta name="description" content="<?php bloginfo('description'); ?>">
    
    <?php wp_head(); ?>
    
    <!-- Custom inline styles to ensure everything loads -->
    <style>
        /* Ensure our styles override any theme conflicts */
        body {
            font-family: 'Inter', sans-serif !important;
            margin: 0 !important;
            padding: 0 !important;
        }
        
        .site, .site-content, .content-area, .site-main {
            margin: 0 !important;
            padding: 0 !important;
            width: 100% !important;
        }
        
        /* Hide WordPress admin bar space */
        html {
            margin-top: 0 !important;
        }
        
        body.admin-bar {
            margin-top: 0 !important;
        }
        
        /* Remove any WordPress theme wrappers */
        .wrap, .container, .site-container {
            max-width: none !important;
            padding: 0 !important;
            margin: 0 !important;
        }
    </style>
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
            <button class="mobile-menu-btn" onclick="toggleMobileMenu()" aria-label="Toggle mobile menu">
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