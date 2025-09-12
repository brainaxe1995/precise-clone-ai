<?php
// RELAX Tea WordPress Theme Functions - Fixed Version

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

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

    // Add image sizes
    add_image_size('product-thumb', 300, 300, true);
    add_image_size('blog-thumb', 400, 250, true);
    add_image_size('hero-image', 800, 600, true);
}
add_action('after_setup_theme', 'relax_theme_setup');

// Enqueue styles and scripts
function relax_scripts() {
    // Remove default WordPress styles that might interfere
    wp_dequeue_style('wp-block-library');
    wp_dequeue_style('wp-block-library-theme');
    wp_dequeue_style('global-styles');
    
    // Enqueue main stylesheet with high priority
    wp_enqueue_style('relax-style', get_stylesheet_uri(), array(), '1.1.0');
    
    // Enqueue Google Fonts
    wp_enqueue_style('relax-fonts', 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap', array(), null);
    
    // Enqueue JavaScript
    wp_enqueue_script('relax-script', get_template_directory_uri() . '/js/main.js', array(), '1.1.0', true);
    
    // Localize script for AJAX
    wp_localize_script('relax-script', 'relax_ajax', array(
        'ajax_url' => admin_url('admin-ajax.php'),
        'nonce' => wp_create_nonce('relax_nonce')
    ));
}
add_action('wp_enqueue_scripts', 'relax_scripts', 20);

// Remove WordPress admin bar margin
function relax_remove_admin_bar_margin() {
    remove_action('wp_head', '_admin_bar_bump_cb');
}
add_action('get_header', 'relax_remove_admin_bar_margin');

// Clean up WordPress head
function relax_cleanup_wp_head() {
    remove_action('wp_head', 'rsd_link');
    remove_action('wp_head', 'wlwmanifest_link');
    remove_action('wp_head', 'wp_shortlink_wp_head');
    remove_action('wp_head', 'wp_generator');
    remove_action('wp_head', 'feed_links_extra', 3);
    remove_action('wp_head', 'feed_links', 2);
    remove_action('wp_head', 'index_rel_link');
    remove_action('wp_head', 'parent_post_rel_link', 10, 0);
    remove_action('wp_head', 'start_post_rel_link', 10, 0);
    remove_action('wp_head', 'adjacent_posts_rel_link', 10, 0);
}
add_action('init', 'relax_cleanup_wp_head');

// Handle contact form submission
function handle_contact_form() {
    // Verify nonce
    if (!wp_verify_nonce($_POST['relax_nonce'], 'relax_nonce')) {
        wp_die('Security check failed');
    }
    
    if (isset($_POST['action']) && $_POST['action'] == 'contact_form') {
        $name = sanitize_text_field($_POST['name']);
        $email = sanitize_email($_POST['email']);
        $subject = sanitize_text_field($_POST['subject']);
        $message = sanitize_textarea_field($_POST['message']);
        
        // Basic validation
        if (empty($name) || empty($email) || empty($subject) || empty($message)) {
            wp_redirect(add_query_arg('contact_error', 'missing_fields', wp_get_referer()));
            exit;
        }
        
        if (!is_email($email)) {
            wp_redirect(add_query_arg('contact_error', 'invalid_email', wp_get_referer()));
            exit;
        }
        
        // Send email
        $to = get_option('admin_email');
        $email_subject = 'Contact Form: ' . $subject;
        $email_message = "Name: $name\nEmail: $email\n\nMessage:\n$message";
        $headers = array('Content-Type: text/html; charset=UTF-8', 'From: ' . $name . ' <' . $email . '>');
        
        $mail_sent = wp_mail($to, $email_subject, nl2br($email_message), $headers);
        
        if ($mail_sent) {
            wp_redirect(add_query_arg('contact_sent', '1', wp_get_referer()));
        } else {
            wp_redirect(add_query_arg('contact_error', 'send_failed', wp_get_referer()));
        }
        exit;
    }
}
add_action('admin_post_contact_form', 'handle_contact_form');
add_action('admin_post_nopriv_contact_form', 'handle_contact_form');

// Handle newsletter signup
function handle_newsletter_signup() {
    // Verify nonce
    if (!wp_verify_nonce($_POST['relax_nonce'], 'relax_nonce')) {
        wp_die('Security check failed');
    }
    
    if (isset($_POST['action']) && $_POST['action'] == 'newsletter_signup') {
        $email = sanitize_email($_POST['email']);
        
        if (empty($email) || !is_email($email)) {
            wp_redirect(add_query_arg('newsletter_error', 'invalid_email', wp_get_referer()));
            exit;
        }
        
        // Here you would typically save to database or send to email service
        // For now, we'll just redirect with success message
        
        wp_redirect(add_query_arg('newsletter_sent', '1', wp_get_referer()));
        exit;
    }
}
add_action('admin_post_newsletter_signup', 'handle_newsletter_signup');
add_action('admin_post_nopriv_newsletter_signup', 'handle_newsletter_signup');

// Add AJAX handlers for newsletter signup
function ajax_newsletter_signup() {
    check_ajax_referer('relax_nonce', 'nonce');
    
    $email = sanitize_email($_POST['email']);
    
    if (empty($email) || !is_email($email)) {
        wp_send_json_error('Invalid email address');
    }
    
    // Save email to database or send to email service
    // For now, just return success
    
    wp_send_json_success('Thank you for subscribing!');
}
add_action('wp_ajax_newsletter_signup', 'ajax_newsletter_signup');
add_action('wp_ajax_nopriv_newsletter_signup', 'ajax_newsletter_signup');

// Customize excerpt
function relax_excerpt_length($length) {
    return 20;
}
add_filter('excerpt_length', 'relax_excerpt_length');

function relax_excerpt_more($more) {
    return '...';
}
add_filter('excerpt_more', 'relax_excerpt_more');

// Add SEO meta tags
function relax_add_meta_tags() {
    if (is_single() || is_page()) {
        global $post;
        
        // Open Graph tags
        echo '<meta property="og:type" content="' . (is_single() ? 'article' : 'website') . '" />' . "\n";
        echo '<meta property="og:title" content="' . get_the_title() . '" />' . "\n";
        echo '<meta property="og:url" content="' . get_permalink() . '" />' . "\n";
        echo '<meta property="og:site_name" content="' . get_bloginfo('name') . '" />' . "\n";
        
        if (has_post_thumbnail($post->ID)) {
            $image = wp_get_attachment_image_src(get_post_thumbnail_id($post->ID), 'large');
            echo '<meta property="og:image" content="' . $image[0] . '" />' . "\n";
        }
        
        $description = get_the_excerpt() ? get_the_excerpt() : get_bloginfo('description');
        echo '<meta property="og:description" content="' . esc_attr($description) . '" />' . "\n";
        echo '<meta name="description" content="' . esc_attr($description) . '" />' . "\n";
        
        // Twitter Card tags
        echo '<meta name="twitter:card" content="summary_large_image" />' . "\n";
        echo '<meta name="twitter:title" content="' . get_the_title() . '" />' . "\n";
        echo '<meta name="twitter:description" content="' . esc_attr($description) . '" />' . "\n";
    }
}
add_action('wp_head', 'relax_add_meta_tags');

// Add structured data
function relax_add_structured_data() {
    if (is_front_page()) {
        $schema = array(
            '@context' => 'https://schema.org',
            '@type' => 'Organization',
            'name' => get_bloginfo('name'),
            'description' => get_bloginfo('description'),
            'url' => home_url(),
            'logo' => get_template_directory_uri() . '/assets/logo.png',
            'contactPoint' => array(
                '@type' => 'ContactPoint',
                'telephone' => '+1-555-123-4567',
                'contactType' => 'customer service'
            ),
            'sameAs' => array(
                'https://www.facebook.com/relaxtea',
                'https://www.instagram.com/relaxtea',
                'https://www.twitter.com/relaxtea'
            )
        );
        
        echo '<script type="application/ld+json">' . json_encode($schema) . '</script>' . "\n";
    }
}
add_action('wp_head', 'relax_add_structured_data');

// Disable XML-RPC
add_filter('xmlrpc_enabled', '__return_false');

// Remove REST API links
remove_action('wp_head', 'rest_output_link_wp_head');
remove_action('wp_head', 'wp_oembed_add_discovery_links');

// Add custom body classes
function relax_body_classes($classes) {
    $classes[] = 'relax-theme';
    
    if (is_front_page()) {
        $classes[] = 'home-page';
    }
    
    return $classes;
}
add_filter('body_class', 'relax_body_classes');

// Add theme customizer options
function relax_customize_register($wp_customize) {
    // Add contact info section
    $wp_customize->add_section('relax_contact', array(
        'title' => __('Contact Information', 'relax'),
        'priority' => 30,
    ));
    
    // Phone number
    $wp_customize->add_setting('relax_phone', array(
        'default' => '+1 (555) 123-4567',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    
    $wp_customize->add_control('relax_phone', array(
        'label' => __('Phone Number', 'relax'),
        'section' => 'relax_contact',
        'type' => 'text',
    ));
    
    // Email address
    $wp_customize->add_setting('relax_email', array(
        'default' => 'info@relax.com',
        'sanitize_callback' => 'sanitize_email',
    ));
    
    $wp_customize->add_control('relax_email', array(
        'label' => __('Email Address', 'relax'),
        'section' => 'relax_contact',
        'type' => 'email',
    ));
    
    // Address
    $wp_customize->add_setting('relax_address', array(
        'default' => "123 Wellness Street\nNew York, NY 10001\nUnited States",
        'sanitize_callback' => 'sanitize_textarea_field',
    ));
    
    $wp_customize->add_control('relax_address', array(
        'label' => __('Address', 'relax'),
        'section' => 'relax_contact',
        'type' => 'textarea',
    ));
}
add_action('customize_register', 'relax_customize_register');

// Security improvements
function relax_security_headers() {
    if (!is_admin()) {
        header('X-Content-Type-Options: nosniff');
        header('X-Frame-Options: SAMEORIGIN');
        header('X-XSS-Protection: 1; mode=block');
        header('Referrer-Policy: strict-origin-when-cross-origin');
    }
}
add_action('send_headers', 'relax_security_headers');

// Optimize queries
function relax_optimize_queries($query) {
    if (!is_admin() && $query->is_main_query()) {
        if (is_home()) {
            $query->set('posts_per_page', 6);
        }
    }
}
add_action('pre_get_posts', 'relax_optimize_queries');

// Add custom post types if needed
function relax_custom_post_types() {
    // Products post type
    register_post_type('products', array(
        'labels' => array(
            'name' => __('Products', 'relax'),
            'singular_name' => __('Product', 'relax'),
        ),
        'public' => true,
        'has_archive' => true,
        'menu_icon' => 'dashicons-products',
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt'),
        'show_in_rest' => true,
    ));
    
    // Testimonials post type
    register_post_type('testimonials', array(
        'labels' => array(
            'name' => __('Testimonials', 'relax'),
            'singular_name' => __('Testimonial', 'relax'),
        ),
        'public' => false,
        'publicly_queryable' => false,
        'show_ui' => true,
        'menu_icon' => 'dashicons-testimonial',
        'supports' => array('title', 'editor', 'thumbnail'),
        'show_in_rest' => true,
    ));
}
add_action('init', 'relax_custom_post_types');

// Add admin notices for form submissions
function relax_admin_notices() {
    if (isset($_GET['contact_sent'])) {
        echo '<div class="notice notice-success is-dismissible"><p>Thank you! Your message has been sent successfully.</p></div>';
    }
    
    if (isset($_GET['contact_error'])) {
        $error = $_GET['contact_error'];
        $message = 'An error occurred. Please try again.';
        
        switch ($error) {
            case 'missing_fields':
                $message = 'Please fill in all required fields.';
                break;
            case 'invalid_email':
                $message = 'Please enter a valid email address.';
                break;
            case 'send_failed':
                $message = 'Failed to send message. Please try again later.';
                break;
        }
        
        echo '<div class="notice notice-error is-dismissible"><p>' . esc_html($message) . '</p></div>';
    }
    
    if (isset($_GET['newsletter_sent'])) {
        echo '<div class="notice notice-success is-dismissible"><p>Thank you for subscribing to our newsletter!</p></div>';
    }
}
add_action('wp_head', 'relax_admin_notices');

// Custom logo function
function relax_custom_logo() {
    if (has_custom_logo()) {
        the_custom_logo();
    } else {
        echo '<div class="logo">';
        echo '<div class="logo-icon"><span>🍃</span></div>';
        echo '<h1 class="logo-text">RELAX</h1>';
        echo '</div>';
    }
}

// Get theme options
function relax_get_option($option, $default = '') {
    return get_theme_mod('relax_' . $option, $default);
}

// WordPress 6.0+ compatibility
function relax_theme_support() {
    add_theme_support('wp-block-styles');
    add_theme_support('responsive-embeds');
    add_theme_support('editor-styles');
    add_editor_style('style.css');
}
add_action('after_setup_theme', 'relax_theme_support');

// Performance optimizations
function relax_optimize_performance() {
    // Remove query strings from static resources
    if (!is_admin()) {
        add_filter('script_loader_src', 'relax_remove_script_version', 15, 1);
        add_filter('style_loader_src', 'relax_remove_script_version', 15, 1);
    }
}
add_action('init', 'relax_optimize_performance');

function relax_remove_script_version($src) {
    $parts = explode('?ver', $src);
    return $parts[0];
}

?>