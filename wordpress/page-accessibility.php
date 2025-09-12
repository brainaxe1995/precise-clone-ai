<?php get_header(); ?>

<div class="min-h-screen">
    
    <!-- Hero Section -->
    <section class="py-20 bg-gradient-to-br from-secondary/20 to-primary/5 text-center">
        <div class="container">
            <h1 class="text-4xl md:text-6xl font-heading mb-6">
                <span class="text-primary">Accessibility</span> Statement
            </h1>
            <p class="text-xl text-muted max-w-2xl mx-auto">
                RELAX Tea is committed to ensuring digital accessibility for people with disabilities.
            </p>
            <p class="text-sm text-muted mt-4">Last updated: December 15, 2024</p>
        </div>
    </section>

    <!-- Accessibility Content -->
    <section class="py-16">
        <div class="container max-w-4xl mx-auto">
            <div class="prose prose-lg max-w-none">
                
                <div class="bg-secondary/10 p-6 rounded-lg mb-8">
                    <h2 class="text-2xl font-heading mb-4">Our Commitment</h2>
                    <p class="text-muted mb-0">
                        We believe everyone should have access to our website and products. We're continuously 
                        working to improve the accessibility and usability of our website for all users.
                    </p>
                </div>

                <div class="space-y-8">
                    <div>
                        <h2 class="text-2xl font-heading mb-4">1. Accessibility Standards</h2>
                        <div class="text-muted space-y-4">
                            <p>
                                RELAX Tea strives to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 
                                at Level AA. These guidelines help make web content more accessible to people with 
                                disabilities, including:
                            </p>
                            <ul class="list-disc list-inside ml-4 space-y-1">
                                <li>Visual impairments (blindness, low vision, color blindness)</li>
                                <li>Hearing impairments (deafness, hard of hearing)</li>
                                <li>Motor impairments (limited mobility, dexterity issues)</li>
                                <li>Cognitive impairments (learning disabilities, memory issues)</li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <h2 class="text-2xl font-heading mb-4">2. Accessibility Features</h2>
                        <div class="space-y-6">
                            
                            <!-- Keyboard Navigation -->
                            <div class="border border-secondary/20 rounded-lg p-6">
                                <div class="flex items-center gap-3 mb-3">
                                    <span class="text-2xl">⌨️</span>
                                    <h3 class="text-xl font-semibold text-foreground">Keyboard Navigation</h3>
                                </div>
                                <ul class="list-disc list-inside ml-4 space-y-1 text-muted">
                                    <li>All interactive elements are keyboard accessible</li>
                                    <li>Logical tab order throughout the website</li>
                                    <li>Visible focus indicators for all interactive elements</li>
                                    <li>Skip navigation links for main content areas</li>
                                </ul>
                            </div>

                            <!-- Screen Reader Support -->
                            <div class="border border-secondary/20 rounded-lg p-6">
                                <div class="flex items-center gap-3 mb-3">
                                    <span class="text-2xl">🔊</span>
                                    <h3 class="text-xl font-semibold text-foreground">Screen Reader Support</h3>
                                </div>
                                <ul class="list-disc list-inside ml-4 space-y-1 text-muted">
                                    <li>Semantic HTML structure and proper heading hierarchy</li>
                                    <li>Descriptive alt text for all images</li>
                                    <li>ARIA labels and descriptions where appropriate</li>
                                    <li>Form labels and error messages clearly associated</li>
                                </ul>
                            </div>

                            <!-- Visual Design -->
                            <div class="border border-secondary/20 rounded-lg p-6">
                                <div class="flex items-center gap-3 mb-3">
                                    <span class="text-2xl">👁️</span>
                                    <h3 class="text-xl font-semibold text-foreground">Visual Design</h3>
                                </div>
                                <ul class="list-disc list-inside ml-4 space-y-1 text-muted">
                                    <li>High contrast color combinations (minimum 4.5:1 ratio)</li>
                                    <li>Readable fonts and adequate text size</li>
                                    <li>Information not conveyed by color alone</li>
                                    <li>Responsive design for various screen sizes</li>
                                </ul>
                            </div>

                            <!-- Content Structure -->
                            <div class="border border-secondary/20 rounded-lg p-6">
                                <div class="flex items-center gap-3 mb-3">
                                    <span class="text-2xl">📄</span>
                                    <h3 class="text-xl font-semibold text-foreground">Content Structure</h3>
                                </div>
                                <ul class="list-disc list-inside ml-4 space-y-1 text-muted">
                                    <li>Clear and consistent navigation structure</li>
                                    <li>Descriptive page titles and headings</li>
                                    <li>Plain language and clear instructions</li>
                                    <li>Consistent layout and design patterns</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 class="text-2xl font-heading mb-4">3. Assistive Technology Compatibility</h2>
                        <div class="text-muted space-y-4">
                            <p>Our website has been tested with the following assistive technologies:</p>
                            
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div class="bg-secondary/5 p-4 rounded-lg">
                                    <h4 class="font-semibold text-foreground mb-2">Screen Readers</h4>
                                    <ul class="text-sm space-y-1">
                                        <li>• NVDA (Windows)</li>
                                        <li>• JAWS (Windows)</li>
                                        <li>• VoiceOver (macOS/iOS)</li>
                                        <li>• TalkBack (Android)</li>
                                    </ul>
                                </div>
                                
                                <div class="bg-secondary/5 p-4 rounded-lg">
                                    <h4 class="font-semibold text-foreground mb-2">Browsers</h4>
                                    <ul class="text-sm space-y-1">
                                        <li>• Chrome (latest versions)</li>
                                        <li>• Firefox (latest versions)</li>
                                        <li>• Safari (latest versions)</li>
                                        <li>• Edge (latest versions)</li>
                                    </ul>
                                </div>
                                
                                <div class="bg-secondary/5 p-4 rounded-lg">
                                    <h4 class="font-semibold text-foreground mb-2">Input Methods</h4>
                                    <ul class="text-sm space-y-1">
                                        <li>• Keyboard navigation</li>
                                        <li>• Voice control software</li>
                                        <li>• Switch controls</li>
                                        <li>• Touch screen interfaces</li>
                                    </ul>
                                </div>
                                
                                <div class="bg-secondary/5 p-4 rounded-lg">
                                    <h4 class="font-semibold text-foreground mb-2">Magnification</h4>
                                    <ul class="text-sm space-y-1">
                                        <li>• Browser zoom (up to 200%)</li>
                                        <li>• ZoomText (Windows)</li>
                                        <li>• Magnifier (Windows)</li>
                                        <li>• Zoom (macOS)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 class="text-2xl font-heading mb-4">4. Known Issues and Limitations</h2>
                        <div class="text-muted space-y-4">
                            <p>
                                We are continuously working to improve accessibility. Currently identified areas 
                                for improvement include:
                            </p>
                            
                            <div class="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                                <h4 class="font-semibold text-foreground mb-2">⚠️ Current Limitations</h4>
                                <ul class="list-disc list-inside space-y-1">
                                    <li>Some third-party embedded content may not be fully accessible</li>
                                    <li>Complex interactive elements are being enhanced for better screen reader support</li>
                                    <li>PDF documents are being converted to more accessible formats</li>
                                    <li>Video content is being updated with closed captions</li>
                                </ul>
                            </div>

                            <p>
                                We are actively working to address these issues and will provide updates as 
                                improvements are implemented.
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 class="text-2xl font-heading mb-4">5. Accessibility Resources</h2>
                        <div class="text-muted space-y-4">
                            <p>Here are some helpful resources for users who may need accessibility assistance:</p>
                            
                            <div class="space-y-4">
                                <div class="bg-secondary/10 p-4 rounded-lg">
                                    <h4 class="font-semibold text-foreground mb-2">Browser Accessibility Features</h4>
                                    <ul class="list-disc list-inside space-y-1">
                                        <li><strong>Zoom:</strong> Ctrl/Cmd + Plus/Minus keys to increase text size</li>
                                        <li><strong>High Contrast:</strong> Available in browser settings or system preferences</li>
                                        <li><strong>Text-to-Speech:</strong> Built into most modern browsers</li>
                                        <li><strong>Keyboard Navigation:</strong> Use Tab, Arrow keys, and Enter to navigate</li>
                                    </ul>
                                </div>
                                
                                <div class="bg-secondary/10 p-4 rounded-lg">
                                    <h4 class="font-semibold text-foreground mb-2">System Accessibility Tools</h4>
                                    <ul class="list-disc list-inside space-y-1">
                                        <li><strong>Windows:</strong> Narrator, Magnifier, On-Screen Keyboard</li>
                                        <li><strong>macOS:</strong> VoiceOver, Zoom, Voice Control</li>
                                        <li><strong>iOS:</strong> VoiceOver, Zoom, AssistiveTouch</li>
                                        <li><strong>Android:</strong> TalkBack, Select to Speak, Live Caption</li>
                                    </ul>
                                </div>
                                
                                <div class="bg-secondary/10 p-4 rounded-lg">
                                    <h4 class="font-semibold text-foreground mb-2">External Resources</h4>
                                    <ul class="list-disc list-inside space-y-1">
                                        <li><a href="https://www.w3.org/WAI/" class="text-primary hover:underline" target="_blank">Web Accessibility Initiative (WAI)</a></li>
                                        <li><a href="https://webaim.org/" class="text-primary hover:underline" target="_blank">WebAIM - Web Accessibility Resources</a></li>
                                        <li><a href="https://www.ada.gov/" class="text-primary hover:underline" target="_blank">Americans with Disabilities Act</a></li>
                                        <li><a href="https://www.ssa.gov/accessibility/" class="text-primary hover:underline" target="_blank">Social Security Administration Accessibility</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 class="text-2xl font-heading mb-4">6. Alternative Access Methods</h2>
                        <div class="text-muted space-y-4">
                            <p>
                                If you encounter accessibility barriers on our website, we offer alternative 
                                ways to access our information and services:
                            </p>
                            
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div class="bg-secondary/10 p-4 rounded-lg">
                                    <h4 class="font-semibold text-foreground mb-2">📞 Phone Support</h4>
                                    <p class="mb-2">Call us for assistance with:</p>
                                    <ul class="text-sm space-y-1">
                                        <li>• Product information</li>
                                        <li>• Order placement</li>
                                        <li>• Account management</li>
                                        <li>• Technical support</li>
                                    </ul>
                                    <p class="mt-2 font-medium">
                                        <a href="tel:+15551234567" class="text-primary hover:underline">+1 (555) 123-4567</a>
                                    </p>
                                </div>
                                
                                <div class="bg-secondary/10 p-4 rounded-lg">
                                    <h4 class="font-semibold text-foreground mb-2">📧 Email Support</h4>
                                    <p class="mb-2">Email us for:</p>
                                    <ul class="text-sm space-y-1">
                                        <li>• Detailed product descriptions</li>
                                        <li>• Accessibility assistance</li>
                                        <li>• Custom orders</li>
                                        <li>• General inquiries</li>
                                    </ul>
                                    <p class="mt-2 font-medium">
                                        <a href="mailto:accessibility@relax.com" class="text-primary hover:underline">accessibility@relax.com</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 class="text-2xl font-heading mb-4">7. Feedback and Suggestions</h2>
                        <div class="text-muted space-y-4">
                            <p>
                                We welcome your feedback on the accessibility of our website. Your input helps us 
                                identify areas for improvement and better serve all our customers.
                            </p>
                            
                            <div class="bg-secondary/10 p-4 rounded-lg">
                                <h4 class="font-semibold text-foreground mb-2">How to Provide Feedback</h4>
                                <ul class="list-disc list-inside space-y-1">
                                    <li><strong>Email:</strong> <a href="mailto:accessibility@relax.com" class="text-primary hover:underline">accessibility@relax.com</a></li>
                                    <li><strong>Phone:</strong> <a href="tel:+15551234567" class="text-primary hover:underline">+1 (555) 123-4567</a></li>
                                    <li><strong>Mail:</strong> RELAX Tea Accessibility Team, 123 Wellness Street, New York, NY 10001</li>
                                    <li><strong>Contact Form:</strong> <a href="<?php echo home_url('/contact'); ?>" class="text-primary hover:underline">Use our contact form</a></li>
                                </ul>
                            </div>

                            <p>
                                When reporting accessibility issues, please include:
                            </p>
                            <ul class="list-disc list-inside ml-4 space-y-1">
                                <li>The specific page or feature you were trying to use</li>
                                <li>The assistive technology you were using (if any)</li>
                                <li>Your browser and operating system</li>
                                <li>A description of the problem you encountered</li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <h2 class="text-2xl font-heading mb-4">8. Ongoing Improvements</h2>
                        <div class="text-muted space-y-4">
                            <p>
                                Accessibility is an ongoing commitment. We regularly review and update our website 
                                to ensure it meets the latest accessibility standards and best practices.
                            </p>
                            
                            <div class="space-y-3">
                                <div class="flex items-start gap-3">
                                    <span class="text-primary text-lg">✓</span>
                                    <div>
                                        <h4 class="font-semibold text-foreground">Regular Audits</h4>
                                        <p>We conduct quarterly accessibility audits with external experts</p>
                                    </div>
                                </div>
                                
                                <div class="flex items-start gap-3">
                                    <span class="text-primary text-lg">✓</span>
                                    <div>
                                        <h4 class="font-semibold text-foreground">Staff Training</h4>
                                        <p>Our team receives ongoing training on accessibility best practices</p>
                                    </div>
                                </div>
                                
                                <div class="flex items-start gap-3">
                                    <span class="text-primary text-lg">✓</span>
                                    <div>
                                        <h4 class="font-semibold text-foreground">Technology Updates</h4>
                                        <p>We stay current with assistive technology and web standards</p>
                                    </div>
                                </div>
                                
                                <div class="flex items-start gap-3">
                                    <span class="text-primary text-lg">✓</span>
                                    <div>
                                        <h4 class="font-semibold text-foreground">User Testing</h4>
                                        <p>We involve users with disabilities in our testing process</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 class="text-2xl font-heading mb-4">9. Legal and Compliance</h2>
                        <div class="text-muted space-y-4">
                            <p>
                                RELAX Tea is committed to complying with applicable accessibility laws and regulations, including:
                            </p>
                            
                            <ul class="list-disc list-inside ml-4 space-y-1">
                                <li>Americans with Disabilities Act (ADA)</li>
                                <li>Section 508 of the Rehabilitation Act</li>
                                <li>Web Content Accessibility Guidelines (WCAG) 2.1</li>
                                <li>State and local accessibility requirements</li>
                            </ul>
                            
                            <p>
                                If you believe our website does not comply with accessibility requirements, 
                                please contact us so we can address your concerns promptly.
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 class="text-2xl font-heading mb-4">10. Contact Information</h2>
                        <div class="text-muted space-y-4">
                            <p>
                                For all accessibility-related questions, concerns, or suggestions, please reach out to our 
                                dedicated accessibility team:
                            </p>
                            <div class="bg-secondary/10 p-4 rounded-lg">
                                <p><strong>Accessibility Coordinator:</strong> Sarah Johnson</p>
                                <p><strong>Email:</strong> <a href="mailto:accessibility@relax.com" class="text-primary hover:underline">accessibility@relax.com</a></p>
                                <p><strong>Phone:</strong> <a href="tel:+15551234567" class="text-primary hover:underline">+1 (555) 123-4567</a></p>
                                <p><strong>TTY:</strong> +1 (555) 123-4568</p>
                                <p><strong>Business Hours:</strong> Monday-Friday, 9 AM - 6 PM EST</p>
                                <p><strong>Mail:</strong><br>
                                RELAX Tea Accessibility Team<br>
                                123 Wellness Street<br>
                                New York, NY 10001<br>
                                United States</p>
                            </div>
                            <p>
                                We aim to respond to all accessibility inquiries within 2 business days.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</div>

<?php get_footer(); ?>