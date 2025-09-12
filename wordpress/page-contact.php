<?php get_header(); ?>

<div class="min-h-screen">
    
    <!-- Hero Section -->
    <section class="py-20 bg-gradient-to-br from-secondary/20 to-primary/5 text-center">
        <div class="container">
            <h1 class="text-4xl md:text-6xl font-heading mb-6">
                Contact <span class="text-primary">RELAX</span>
            </h1>
            <p class="text-xl text-muted max-w-2xl mx-auto">
                Have questions about our herbal teas? We're here to help you find the perfect blend for your needs.
            </p>
        </div>
    </section>

    <!-- Contact Form & Info -->
    <section class="py-20">
        <div class="container">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <!-- Contact Form -->
                <div>
                    <h2 class="text-3xl font-heading mb-8">Send us a Message</h2>
                    <form class="contact-form" method="post" action="<?php echo admin_url('admin-post.php'); ?>">
                        <input type="hidden" name="action" value="contact_form">
                        <div class="form-row">
                            <input
                                name="name"
                                type="text"
                                placeholder="Your Name"
                                required
                                class="form-input"
                            />
                            <input
                                name="email"
                                type="email"
                                placeholder="Your Email"
                                required
                                class="form-input"
                            />
                        </div>
                        <input
                            name="subject"
                            type="text"
                            placeholder="Subject"
                            required
                            class="form-input"
                        />
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            required
                            rows="6"
                            class="form-textarea"
                        ></textarea>
                        <button type="submit" class="btn btn-lg btn-primary w-full">
                            Send Message
                        </button>
                    </form>
                </div>

                <!-- Contact Info -->
                <div class="space-y-8">
                    <h2 class="text-3xl font-heading mb-8">Get in Touch</h2>
                    
                    <div class="space-y-6">
                        <div class="card">
                            <div class="card-content">
                                <div class="flex items-center gap-3 mb-4">
                                    <div class="bg-secondary/20 p-2 rounded-lg">
                                        <span class="text-primary text-xl">📧</span>
                                    </div>
                                    <h3 class="text-lg font-semibold">Email</h3>
                                </div>
                                <p class="text-muted">info@relax.com</p>
                                <p class="text-sm text-muted mt-1">
                                    We typically respond within 24 hours
                                </p>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-content">
                                <div class="flex items-center gap-3 mb-4">
                                    <div class="bg-secondary/20 p-2 rounded-lg">
                                        <span class="text-primary text-xl">📞</span>
                                    </div>
                                    <h3 class="text-lg font-semibold">Phone</h3>
                                </div>
                                <p class="text-muted">+1 (555) 123-4567</p>
                                <p class="text-sm text-muted mt-1">
                                    Monday - Friday, 9 AM - 6 PM EST
                                </p>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-content">
                                <div class="flex items-center gap-3 mb-4">
                                    <div class="bg-secondary/20 p-2 rounded-lg">
                                        <span class="text-primary text-xl">📍</span>
                                    </div>
                                    <h3 class="text-lg font-semibold">Address</h3>
                                </div>
                                <p class="text-muted">
                                    123 Wellness Street<br />
                                    New York, NY 10001<br />
                                    United States
                                </p>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-content">
                                <div class="flex items-center gap-3 mb-4">
                                    <div class="bg-secondary/20 p-2 rounded-lg">
                                        <span class="text-primary text-xl">🕒</span>
                                    </div>
                                    <h3 class="text-lg font-semibold">Business Hours</h3>
                                </div>
                                <div class="space-y-1 text-muted">
                                    <p>Monday - Friday: 9 AM - 6 PM EST</p>
                                    <p>Saturday: 10 AM - 4 PM EST</p>
                                    <p>Sunday: Closed</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- FAQ Preview -->
    <section class="py-20 bg-secondary/10">
        <div class="container text-center">
            <h2 class="text-3xl font-heading mb-6">Frequently Asked Questions</h2>
            <p class="text-muted mb-8 max-w-2xl mx-auto">
                Find quick answers to common questions about RELAX herbal teas.
            </p>
            <a href="<?php echo home_url('/faq'); ?>" class="btn btn-outline">
                View All FAQs
            </a>
        </div>
    </section>

</div>

<?php get_footer(); ?>