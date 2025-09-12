    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <!-- Company Info -->
                <div class="footer-section">
                    <h3>RELAX Tea</h3>
                    <p class="text-muted mb-4">
                        Premium herbal teas crafted for evening wellness and natural relaxation. 
                        Experience the finest organic ingredients in every cup.
                    </p>
                    <div class="social-links flex gap-4">
                        <a href="#" class="text-muted hover:text-primary transition-colors" aria-label="Facebook">📘</a>
                        <a href="#" class="text-muted hover:text-primary transition-colors" aria-label="Instagram">📷</a>
                        <a href="#" class="text-muted hover:text-primary transition-colors" aria-label="Twitter">🐦</a>
                        <a href="#" class="text-muted hover:text-primary transition-colors" aria-label="YouTube">📺</a>
                    </div>
                </div>

                <!-- Quick Links -->
                <div class="footer-section">
                    <h3>Quick Links</h3>
                    <ul class="footer-links">
                        <li><a href="<?php echo home_url(); ?>">Home</a></li>
                        <li><a href="<?php echo home_url('/shop'); ?>">Shop All Teas</a></li>
                        <li><a href="<?php echo home_url('/about'); ?>">About Us</a></li>
                        <li><a href="<?php echo home_url('/blog'); ?>">Tea Blog</a></li>
                        <li><a href="<?php echo home_url('/contact'); ?>">Contact</a></li>
                        <li><a href="<?php echo home_url('/faq'); ?>">FAQ</a></li>
                    </ul>
                </div>

                <!-- Customer Service -->
                <div class="footer-section">
                    <h3>Customer Service</h3>
                    <ul class="footer-links">
                        <li><a href="<?php echo home_url('/contact'); ?>">Help & Support</a></li>
                        <li><a href="#">Shipping Info</a></li>
                        <li><a href="#">Returns & Exchanges</a></li>
                        <li><a href="#">Size Guide</a></li>
                        <li><a href="#">Track Your Order</a></li>
                        <li><a href="#">Bulk Orders</a></li>
                    </ul>
                </div>

                <!-- Contact Info -->
                <div class="footer-section">
                    <h3>Contact Info</h3>
                    <div class="space-y-4">
                        <div class="flex items-center gap-2">
                            <span>📧</span>
                            <div>
                                <p class="font-medium">Email</p>
                                <a href="mailto:info@relax.com" class="text-muted hover:text-primary transition-colors">
                                    info@relax.com
                                </a>
                            </div>
                        </div>
                        
                        <div class="flex items-center gap-2">
                            <span>📞</span>
                            <div>
                                <p class="font-medium">Phone</p>
                                <a href="tel:+15551234567" class="text-muted hover:text-primary transition-colors">
                                    +1 (555) 123-4567
                                </a>
                            </div>
                        </div>
                        
                        <div class="flex items-center gap-2">
                            <span>📍</span>
                            <div>
                                <p class="font-medium">Address</p>
                                <p class="text-muted">
                                    123 Wellness Street<br>
                                    New York, NY 10001<br>
                                    United States
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Newsletter Signup -->
            <div class="newsletter-signup bg-primary/5 rounded-xl p-6 mb-8">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                    <div>
                        <h3 class="text-xl font-semibold mb-2">Stay Updated</h3>
                        <p class="text-muted">
                            Subscribe to get special offers, free giveaways, and wellness tips.
                        </p>
                    </div>
                    <form class="newsletter-form" method="post" action="<?php echo admin_url('admin-post.php'); ?>">
                        <input type="hidden" name="action" value="newsletter_signup">
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="Enter your email address" 
                            required 
                            class="newsletter-input"
                        >
                        <button type="submit" class="btn btn-primary">
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

            <!-- Footer Bottom -->
            <div class="footer-bottom">
                <div class="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p>&copy; <?php echo date('Y'); ?> RELAX Tea. All rights reserved.</p>
                    <div class="flex gap-6">
                        <a href="<?php echo home_url('/privacy'); ?>" class="text-muted hover:text-primary transition-colors">Privacy Policy</a>
                        <a href="<?php echo home_url('/terms'); ?>" class="text-muted hover:text-primary transition-colors">Terms of Service</a>
                        <a href="<?php echo home_url('/cookies'); ?>" class="text-muted hover:text-primary transition-colors">Cookie Policy</a>
                        <a href="<?php echo home_url('/accessibility'); ?>" class="text-muted hover:text-primary transition-colors">Accessibility</a>
                    </div>
                </div>
            </div>
        </div>
    </footer>

    <!-- WordPress Footer -->
    <?php wp_footer(); ?>

    <!-- Custom JavaScript -->
    <script>
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Newsletter form submission
        document.addEventListener('DOMContentLoaded', function() {
            const newsletterForm = document.querySelector('.newsletter-form');
            if (newsletterForm) {
                newsletterForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    const email = this.querySelector('input[name="email"]').value;
                    if (email) {
                        alert('Thank you for subscribing! We\'ll be in touch soon.');
                        this.querySelector('input[name="email"]').value = '';
                    }
                });
            }
        });

        // Scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in');
                }
            });
        }, observerOptions);

        // Observe all sections for scroll animations
        document.querySelectorAll('section').forEach(section => {
            observer.observe(section);
        });

        // Product hover effects
        document.querySelectorAll('.product-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-8px)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });
        });

        // FAQ functionality
        document.querySelectorAll('.faq-question').forEach(button => {
            button.addEventListener('click', function() {
                const answer = this.nextElementSibling;
                const isOpen = answer.classList.contains('active');
                
                // Close all other answers
                document.querySelectorAll('.faq-answer').forEach(ans => {
                    ans.classList.remove('active');
                });
                
                // Toggle current answer
                if (!isOpen) {
                    answer.classList.add('active');
                }
            });
        });

        // Contact form validation
        const contactForm = document.querySelector('.contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                const formData = new FormData(this);
                
                // Basic validation
                const name = formData.get('name');
                const email = formData.get('email');
                const message = formData.get('message');
                
                if (!name || !email || !message) {
                    alert('Please fill in all required fields.');
                    return;
                }
                
                if (!email.includes('@')) {
                    alert('Please enter a valid email address.');
                    return;
                }
                
                alert('Thank you for your message! We\'ll get back to you soon.');
                this.reset();
            });
        }

        // Add to cart functionality
        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                const productName = this.closest('.product-card').querySelector('.product-title').textContent;
                alert(`Added "${productName}" to cart!`);
                
                // Update cart count (simple implementation)
                const cartButtons = document.querySelectorAll('[href*="cart"]');
                cartButtons.forEach(btn => {
                    const currentCount = parseInt(btn.textContent.match(/\d+/) || [0])[0];
                    btn.innerHTML = btn.innerHTML.replace(/\d+/, currentCount + 1);
                });
            });
        });

        // Loading animation on page load
        window.addEventListener('load', function() {
            document.body.classList.add('loaded');
        });

        // Back to top functionality
        const backToTop = document.createElement('button');
        backToTop.innerHTML = '↑';
        backToTop.className = 'back-to-top';
        backToTop.style.cssText = `
            position: fixed;
            bottom: 2rem;
            right: 2rem;
            width: 3rem;
            height: 3rem;
            border-radius: 50%;
            background: hsl(var(--primary));
            color: white;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
            opacity: 0;
            transition: all 0.3s ease;
            z-index: 1000;
        `;

        document.body.appendChild(backToTop);

        window.addEventListener('scroll', function() {
            if (window.scrollY > 500) {
                backToTop.style.opacity = '1';
            } else {
                backToTop.style.opacity = '0';
            }
        });

        backToTop.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    </script>

    <!-- Google Analytics (Replace with your GA tracking ID) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'GA_TRACKING_ID');
    </script>

</body>
</html>