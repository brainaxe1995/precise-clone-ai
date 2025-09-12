<?php
// RELAX Tea WordPress Theme Functions

// Theme Setup
function relax_theme_setup() {
    // Add theme support for various features
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', array('search-form', 'comment-form', 'comment-list', 'gallery', 'caption'));
    add_theme_support('custom-logo');
    
    // Register navigation menus
    register_nav_menus(array(
        'header' => __('Header Menu', 'relax'),
        'footer' => __('Footer Menu', 'relax'),
    ));
}
add_action('after_setup_theme', 'relax_theme_setup');

// Enqueue styles and scripts
function relax_scripts() {
    // Enqueue main stylesheet
    wp_enqueue_style('relax-style', get_stylesheet_uri(), array(), '1.0.0');
    
    // Enqueue Google Fonts
    wp_enqueue_style('relax-fonts', 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap', array(), null);
    
    // Enqueue JavaScript
    wp_enqueue_script('relax-script', get_template_directory_uri() . '/js/main.js', array(), '1.0.0', true);
}
add_action('wp_enqueue_scripts', 'relax_scripts');

// Handle contact form submission
function handle_contact_form() {
    if (isset($_POST['action']) && $_POST['action'] == 'contact_form') {
        $name = sanitize_text_field($_POST['name']);
        $email = sanitize_email($_POST['email']);
        $subject = sanitize_text_field($_POST['subject']);
        $message = sanitize_textarea_field($_POST['message']);
        
        // Send email (you can customize this)
        $to = get_option('admin_email');
        $email_subject = 'Contact Form: ' . $subject;
        $email_message = "Name: $name\nEmail: $email\n\nMessage:\n$message";
        
        wp_mail($to, $email_subject, $email_message);
        
        // Redirect back with success message
        wp_redirect(home_url('/contact') . '?sent=1');
        exit;
    }
}
add_action('admin_post_contact_form', 'handle_contact_form');
add_action('admin_post_nopriv_contact_form', 'handle_contact_form');

// Handle newsletter signup
function handle_newsletter_signup() {
    if (isset($_POST['action']) && $_POST['action'] == 'newsletter_signup') {
        $email = sanitize_email($_POST['email']);
        
        // Here you would typically save to database or send to email service
        // For now, just redirect with success
        wp_redirect(wp_get_referer() . '?newsletter=1');
        exit;
    }
}
add_action('admin_post_newsletter_signup', 'handle_newsletter_signup');
add_action('admin_post_nopriv_newsletter_signup', 'handle_newsletter_signup');

// Add custom image sizes
function relax_image_sizes() {
    add_image_size('product-thumb', 300, 300, true);
    add_image_size('blog-thumb', 400, 250, true);
    add_image_size('hero-image', 800, 600, true);
}
add_action('after_setup_theme', 'relax_image_sizes');

// Customize excerpt length
function relax_excerpt_length($length) {
    return 20;
}
add_filter('excerpt_length', 'relax_excerpt_length');

// Custom excerpt more
function relax_excerpt_more($more) {
    return '...';
}
add_filter('excerpt_more', 'relax_excerpt_more');

// Add SEO meta tags
function relax_add_meta_tags() {
    if (is_single() || is_page()) {
        global $post;
        if (has_post_thumbnail($post->ID)) {
            $image = wp_get_attachment_image_src(get_post_thumbnail_id($post->ID), 'large');
            echo '<meta property="og:image" content="' . $image[0] . '" />' . "\n";
        }
        echo '<meta property="og:title" content="' . get_the_title() . '" />' . "\n";
        echo '<meta property="og:description" content="' . get_the_excerpt() . '" />' . "\n";
        echo '<meta property="og:url" content="' . get_permalink() . '" />' . "\n";
    }
}
add_action('wp_head', 'relax_add_meta_tags');

// Remove WordPress version from head
remove_action('wp_head', 'wp_generator');

// Disable XML-RPC
add_filter('xmlrpc_enabled', '__return_false');

// Remove unnecessary scripts and styles
function relax_cleanup_wp_head() {
    remove_action('wp_head', 'rsd_link');
    remove_action('wp_head', 'wlwmanifest_link');
    remove_action('wp_head', 'wp_shortlink_wp_head');
}
add_action('init', 'relax_cleanup_wp_head');

?>