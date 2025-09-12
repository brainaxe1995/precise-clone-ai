/**
 * RELAX Tea WordPress Theme - Main JavaScript File
 * Handles all interactive functionality and animations
 */

(function() {
    'use strict';

    // DOM ready function
    function domReady(fn) {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', fn);
        } else {
            fn();
        }
    }

    // Initialize all functionality when DOM is ready
    domReady(function() {
        initMobileMenu();
        initSmoothScrolling();
        initScrollAnimations();
        initProductInteractions();
        initFAQAccordion();
        initFormHandling();
        initCookiePreferences();
        initBackToTop();
        initAccessibilityFeatures();
        initNewsletterForm();
        initContactForm();
    });

    // Mobile Menu Functionality
    function initMobileMenu() {
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const menuIcon = document.getElementById('menu-icon');
        const mobileLinks = document.querySelectorAll('.mobile-nav .nav-link');

        if (!mobileMenuBtn || !mobileMenu || !menuIcon) return;

        // Toggle mobile menu
        mobileMenuBtn.addEventListener('click', function() {
            const isHidden = mobileMenu.style.display === 'none' || mobileMenu.style.display === '';
            
            if (isHidden) {
                mobileMenu.style.display = 'block';
                mobileMenu.classList.add('animate-slide-up');
                menuIcon.innerHTML = '✕';
                mobileMenuBtn.setAttribute('aria-expanded', 'true');
            } else {
                mobileMenu.style.display = 'none';
                menuIcon.innerHTML = '☰';
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
            }
        });

        // Close mobile menu when clicking on links
        mobileLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                mobileMenu.style.display = 'none';
                menuIcon.innerHTML = '☰';
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!mobileMenuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
                mobileMenu.style.display = 'none';
                menuIcon.innerHTML = '☰';
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
            }
        });

        // Handle escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && mobileMenu.style.display === 'block') {
                mobileMenu.style.display = 'none';
                menuIcon.innerHTML = '☰';
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
                mobileMenuBtn.focus();
            }
        });
    }

    // Smooth Scrolling for Anchor Links
    function initSmoothScrolling() {
        const anchorLinks = document.querySelectorAll('a[href^="#"]');
        
        anchorLinks.forEach(function(link) {
            link.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                const target = document.querySelector(href);
                
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    
                    // Update URL without jumping
                    if (history.pushState) {
                        history.pushState(null, null, href);
                    }
                }
            });
        });
    }

    // Scroll Animations
    function initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in');
                    // Only observe once
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe all sections for scroll animations
        const sections = document.querySelectorAll('section, .card, .product-card');
        sections.forEach(function(section) {
            observer.observe(section);
        });
    }

    // Product Interactions
    function initProductInteractions() {
        const productCards = document.querySelectorAll('.product-card');
        const addToCartButtons = document.querySelectorAll('.add-to-cart');

        // Product card hover effects
        productCards.forEach(function(card) {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-8px)';
                this.style.transition = 'transform 0.3s ease';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });
        });

        // Add to cart functionality
        addToCartButtons.forEach(function(button) {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                
                const productCard = this.closest('.product-card');
                const productTitle = productCard.querySelector('.product-title, h3');
                const productName = productTitle ? productTitle.textContent : 'Product';
                
                // Show success message
                showNotification(`Added "${productName}" to cart!`, 'success');
                
                // Update cart count (simple implementation)
                updateCartCount();
                
                // Add animation to button
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 150);
            });
        });
    }

    // FAQ Accordion Functionality
    function initFAQAccordion() {
        const faqQuestions = document.querySelectorAll('.faq-question');
        
        faqQuestions.forEach(function(button) {
            button.addEventListener('click', function() {
                const answer = this.nextElementSibling;
                const isOpen = answer.classList.contains('active');
                const icon = this.querySelector('span:last-child');
                
                // Close all other answers
                document.querySelectorAll('.faq-answer').forEach(function(ans) {
                    ans.classList.remove('active');
                });
                document.querySelectorAll('.faq-question span:last-child').forEach(function(ic) {
                    ic.textContent = '+';
                });
                
                // Toggle current answer
                if (!isOpen) {
                    answer.classList.add('active');
                    icon.textContent = '−';
                    this.setAttribute('aria-expanded', 'true');
                } else {
                    this.setAttribute('aria-expanded', 'false');
                }
            });
            
            // Initialize ARIA attributes
            button.setAttribute('aria-expanded', 'false');
        });
    }

    // Form Handling
    function initFormHandling() {
        // Generic form validation
        const forms = document.querySelectorAll('form');
        
        forms.forEach(function(form) {
            form.addEventListener('submit', function(e) {
                if (!validateForm(this)) {
                    e.preventDefault();
                }
            });
        });
    }

    // Newsletter Form
    function initNewsletterForm() {
        const newsletterForms = document.querySelectorAll('.newsletter-form');
        
        newsletterForms.forEach(function(form) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const emailInput = this.querySelector('input[name="email"]');
                const email = emailInput.value.trim();
                
                if (!email) {
                    showNotification('Please enter your email address.', 'error');
                    return;
                }
                
                if (!isValidEmail(email)) {
                    showNotification('Please enter a valid email address.', 'error');
                    return;
                }
                
                // Simulate successful subscription
                showNotification('Thank you for subscribing! Welcome to the RELAX family.', 'success');
                emailInput.value = '';
            });
        });
    }

    // Contact Form
    function initContactForm() {
        const contactForm = document.querySelector('.contact-form');
        
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const formData = new FormData(this);
                const name = formData.get('name');
                const email = formData.get('email');
                const message = formData.get('message');
                
                // Basic validation
                if (!name || !email || !message) {
                    showNotification('Please fill in all required fields.', 'error');
                    return;
                }
                
                if (!isValidEmail(email)) {
                    showNotification('Please enter a valid email address.', 'error');
                    return;
                }
                
                // Simulate successful submission
                showNotification('Thank you for your message! We\'ll get back to you soon.', 'success');
                this.reset();
            });
        }
    }

    // Cookie Preferences
    function initCookiePreferences() {
        // Check if cookie consent is needed
        if (!localStorage.getItem('cookieConsent')) {
            showCookieBanner();
        }

        // Handle cookie preference buttons
        const cookieButtons = document.querySelectorAll('[data-cookie-action]');
        cookieButtons.forEach(function(button) {
            button.addEventListener('click', function() {
                const action = this.getAttribute('data-cookie-action');
                handleCookieAction(action);
            });
        });
    }

    // Back to Top Button
    function initBackToTop() {
        const backToTop = document.createElement('button');
        backToTop.innerHTML = '↑';
        backToTop.className = 'back-to-top';
        backToTop.setAttribute('aria-label', 'Back to top');
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
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        `;

        document.body.appendChild(backToTop);

        // Show/hide based on scroll position
        window.addEventListener('scroll', function() {
            if (window.scrollY > 500) {
                backToTop.style.opacity = '1';
                backToTop.style.pointerEvents = 'auto';
            } else {
                backToTop.style.opacity = '0';
                backToTop.style.pointerEvents = 'none';
            }
        });

        // Scroll to top functionality
        backToTop.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Accessibility Features
    function initAccessibilityFeatures() {
        // Skip to main content link
        const skipLink = document.createElement('a');
        skipLink.href = '#main-content';
        skipLink.textContent = 'Skip to main content';
        skipLink.className = 'skip-link';
        skipLink.style.cssText = `
            position: absolute;
            top: -40px;
            left: 6px;
            background: hsl(var(--primary));
            color: white;
            padding: 8px;
            text-decoration: none;
            z-index: 10000;
            border-radius: 4px;
            transition: top 0.3s;
        `;
        
        skipLink.addEventListener('focus', function() {
            this.style.top = '6px';
        });
        
        skipLink.addEventListener('blur', function() {
            this.style.top = '-40px';
        });
        
        document.body.insertBefore(skipLink, document.body.firstChild);

        // Add main content landmark if it doesn't exist
        const main = document.querySelector('main');
        if (main) {
            main.id = 'main-content';
        } else {
            const firstSection = document.querySelector('section');
            if (firstSection) {
                firstSection.id = 'main-content';
            }
        }

        // Keyboard navigation improvements
        const focusableElements = document.querySelectorAll(
            'a, button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );

        focusableElements.forEach(function(element) {
            if (!element.getAttribute('tabindex')) {
                element.setAttribute('tabindex', '0');
            }
        });

        // High contrast mode detection
        if (window.matchMedia && window.matchMedia('(prefers-contrast: high)').matches) {
            document.body.classList.add('high-contrast');
        }

        // Reduced motion detection
        if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            document.body.classList.add('reduce-motion');
        }
    }

    // Utility Functions

    function validateForm(form) {
        const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
        let isValid = true;

        inputs.forEach(function(input) {
            if (!input.value.trim()) {
                isValid = false;
                input.classList.add('error');
                input.setAttribute('aria-invalid', 'true');
            } else {
                input.classList.remove('error');
                input.setAttribute('aria-invalid', 'false');
            }
        });

        return isValid;
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function updateCartCount() {
        const cartButtons = document.querySelectorAll('[href*="cart"], .cart-count');
        cartButtons.forEach(function(btn) {
            const currentCount = parseInt(btn.textContent.match(/\d+/) || [0])[0];
            const newCount = currentCount + 1;
            btn.innerHTML = btn.innerHTML.replace(/\d+/, newCount);
        });
    }

    function showNotification(message, type) {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 16px 24px;
            border-radius: 8px;
            color: white;
            font-weight: 500;
            z-index: 10000;
            max-width: 400px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            transform: translateX(100%);
            transition: transform 0.3s ease;
        `;

        if (type === 'success') {
            notification.style.backgroundColor = '#10B981';
        } else if (type === 'error') {
            notification.style.backgroundColor = '#EF4444';
        } else {
            notification.style.backgroundColor = '#6B7280';
        }

        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        // Auto remove after 4 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 4000);

        // Click to dismiss
        notification.addEventListener('click', function() {
            this.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (this.parentNode) {
                    this.parentNode.removeChild(this);
                }
            }, 300);
        });
    }

    function showCookieBanner() {
        const banner = document.createElement('div');
        banner.className = 'cookie-banner';
        banner.innerHTML = `
            <div class="cookie-content">
                <p>We use cookies to enhance your experience and analyze our traffic. By continuing to use our site, you accept our use of cookies.</p>
                <div class="cookie-actions">
                    <button data-cookie-action="accept" class="btn btn-primary btn-sm">Accept All</button>
                    <button data-cookie-action="decline" class="btn btn-outline btn-sm">Decline</button>
                    <a href="/cookies" class="text-primary hover:underline text-sm">Learn More</a>
                </div>
            </div>
        `;
        banner.style.cssText = `
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            background: hsl(var(--card));
            border-top: 1px solid hsl(var(--border));
            padding: 20px;
            z-index: 10000;
            box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.1);
        `;

        document.body.appendChild(banner);

        // Handle cookie actions
        banner.addEventListener('click', function(e) {
            const action = e.target.getAttribute('data-cookie-action');
            if (action) {
                handleCookieAction(action);
                banner.remove();
            }
        });
    }

    function handleCookieAction(action) {
        if (action === 'accept') {
            localStorage.setItem('cookieConsent', 'accepted');
            // Enable all tracking
            if (typeof gtag !== 'undefined') {
                gtag('consent', 'update', {
                    'analytics_storage': 'granted',
                    'ad_storage': 'granted'
                });
            }
        } else if (action === 'decline') {
            localStorage.setItem('cookieConsent', 'declined');
            // Disable tracking
            if (typeof gtag !== 'undefined') {
                gtag('consent', 'update', {
                    'analytics_storage': 'denied',
                    'ad_storage': 'denied'
                });
            }
        }
    }

    // Performance optimization
    function throttle(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Optimize scroll events
    window.addEventListener('scroll', throttle(function() {
        // Handle scroll-based functionality
        const scrollY = window.scrollY;
        
        // Header background on scroll
        const header = document.querySelector('.header');
        if (header) {
            if (scrollY > 100) {
                header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
                header.style.backdropFilter = 'blur(10px)';
            } else {
                header.style.backgroundColor = '';
                header.style.backdropFilter = '';
            }
        }
    }, 16));

    // Optimize resize events
    window.addEventListener('resize', debounce(function() {
        // Handle responsive adjustments
        const mobileMenu = document.getElementById('mobile-menu');
        if (window.innerWidth > 768 && mobileMenu) {
            mobileMenu.style.display = 'none';
            document.getElementById('menu-icon').innerHTML = '☰';
        }
    }, 250));

    // Loading state management
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
        
        // Remove loading spinners or placeholders
        const loadingElements = document.querySelectorAll('.loading');
        loadingElements.forEach(function(element) {
            element.classList.remove('loading');
        });
    });

    // Error handling
    window.addEventListener('error', function(e) {
        console.error('JavaScript error:', e.error);
        // You could send this to your error tracking service
    });

    // Expose some functions globally for WordPress integration
    window.RelaxTheme = {
        showNotification: showNotification,
        updateCartCount: updateCartCount,
        validateForm: validateForm
    };

})();