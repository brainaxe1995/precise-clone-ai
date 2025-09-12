<?php get_header(); ?>

<div class="min-h-screen">
    
    <!-- Hero Section -->
    <section class="py-20 bg-gradient-to-br from-secondary/20 to-primary/5 text-center">
        <div class="container">
            <h1 class="text-4xl md:text-6xl font-heading mb-6">
                Privacy <span class="text-primary">Policy</span>
            </h1>
            <p class="text-xl text-muted max-w-2xl mx-auto">
                Your privacy is important to us. Learn how we collect, use, and protect your information.
            </p>
            <p class="text-sm text-muted mt-4">Last updated: December 15, 2024</p>
        </div>
    </section>

    <!-- Privacy Policy Content -->
    <section class="py-16">
        <div class="container max-w-4xl mx-auto">
            <div class="prose prose-lg max-w-none">
                
                <div class="bg-secondary/10 p-6 rounded-lg mb-8">
                    <h2 class="text-2xl font-heading mb-4">Quick Summary</h2>
                    <p class="text-muted mb-0">
                        We collect minimal information needed to provide our service, never sell your data, 
                        and use industry-standard security measures to protect your privacy.
                    </p>
                </div>

                <div class="space-y-8">
                    <div>
                        <h2 class="text-2xl font-heading mb-4">1. Information We Collect</h2>
                        <div class="space-y-4 text-muted">
                            <div>
                                <h3 class="text-lg font-semibold text-foreground mb-2">Personal Information</h3>
                                <p>When you visit our website or make a purchase, we may collect:</p>
                                <ul class="list-disc list-inside ml-4 space-y-1">
                                    <li>Name, email address, and phone number</li>
                                    <li>Billing and shipping addresses</li>
                                    <li>Payment information (processed securely by our payment providers)</li>
                                    <li>Order history and preferences</li>
                                </ul>
                            </div>
                            <div>
                                <h3 class="text-lg font-semibold text-foreground mb-2">Automatically Collected Information</h3>
                                <p>We automatically collect certain information about your device and usage:</p>
                                <ul class="list-disc list-inside ml-4 space-y-1">
                                    <li>IP address and browser type</li>
                                    <li>Device information and operating system</li>
                                    <li>Pages visited and time spent on our site</li>
                                    <li>Referring website information</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 class="text-2xl font-heading mb-4">2. How We Use Your Information</h2>
                        <div class="text-muted space-y-2">
                            <p>We use the information we collect to:</p>
                            <ul class="list-disc list-inside ml-4 space-y-1">
                                <li>Process and fulfill your orders</li>
                                <li>Provide customer service and support</li>
                                <li>Send you updates about your orders</li>
                                <li>Improve our website and services</li>
                                <li>Send marketing communications (with your consent)</li>
                                <li>Comply with legal obligations</li>
                                <li>Prevent fraud and maintain security</li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <h2 class="text-2xl font-heading mb-4">3. Information Sharing</h2>
                        <div class="text-muted space-y-4">
                            <p class="font-medium text-foreground">We do not sell, trade, or rent your personal information to third parties.</p>
                            <p>We may share your information only in these limited circumstances:</p>
                            <ul class="list-disc list-inside ml-4 space-y-1">
                                <li><strong>Service Providers:</strong> With trusted partners who help us operate our business (payment processing, shipping, email services)</li>
                                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                                <li><strong>Consent:</strong> With your explicit consent for specific purposes</li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <h2 class="text-2xl font-heading mb-4">4. Data Security</h2>
                        <div class="text-muted space-y-4">
                            <p>We implement appropriate security measures to protect your personal information:</p>
                            <ul class="list-disc list-inside ml-4 space-y-1">
                                <li>SSL encryption for data transmission</li>
                                <li>Secure servers and databases</li>
                                <li>Regular security audits and updates</li>
                                <li>Limited access to personal information</li>
                                <li>Employee training on privacy and security</li>
                            </ul>
                            <p class="mt-4">
                                While we strive to protect your information, no method of transmission over the internet 
                                or electronic storage is 100% secure.
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 class="text-2xl font-heading mb-4">5. Cookies and Tracking</h2>
                        <div class="text-muted space-y-4">
                            <p>We use cookies and similar technologies to:</p>
                            <ul class="list-disc list-inside ml-4 space-y-1">
                                <li>Remember your preferences and settings</li>
                                <li>Analyze website traffic and usage patterns</li>
                                <li>Provide personalized content and recommendations</li>
                                <li>Enable social media features</li>
                                <li>Measure advertising effectiveness</li>
                            </ul>
                            <p>
                                You can control cookies through your browser settings. However, disabling cookies 
                                may affect website functionality.
                            </p>
                            <p>
                                <a href="<?php echo home_url('/cookies'); ?>" class="text-primary hover:underline">
                                    Learn more about our cookie policy →
                                </a>
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 class="text-2xl font-heading mb-4">6. Your Rights and Choices</h2>
                        <div class="text-muted space-y-4">
                            <p>You have the following rights regarding your personal information:</p>
                            <ul class="list-disc list-inside ml-4 space-y-1">
                                <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                                <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                                <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                                <li><strong>Objection:</strong> Object to certain processing of your information</li>
                            </ul>
                            <p>
                                To exercise these rights, please contact us at 
                                <a href="mailto:privacy@relax.com" class="text-primary hover:underline">privacy@relax.com</a>
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 class="text-2xl font-heading mb-4">7. Children's Privacy</h2>
                        <div class="text-muted">
                            <p>
                                Our website is not intended for children under 13 years of age. We do not knowingly 
                                collect personal information from children under 13. If we learn that we have collected 
                                personal information from a child under 13, we will delete that information promptly.
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 class="text-2xl font-heading mb-4">8. International Data Transfers</h2>
                        <div class="text-muted">
                            <p>
                                Your information may be transferred to and processed in countries other than your own. 
                                We ensure appropriate safeguards are in place to protect your information in accordance 
                                with this privacy policy and applicable laws.
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 class="text-2xl font-heading mb-4">9. Changes to This Policy</h2>
                        <div class="text-muted">
                            <p>
                                We may update this privacy policy from time to time. We will notify you of any material 
                                changes by posting the new policy on this page and updating the "Last updated" date. 
                                We encourage you to review this policy periodically.
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 class="text-2xl font-heading mb-4">10. Contact Us</h2>
                        <div class="text-muted space-y-4">
                            <p>If you have any questions about this privacy policy or our data practices, please contact us:</p>
                            <div class="bg-secondary/10 p-4 rounded-lg">
                                <p><strong>Email:</strong> <a href="mailto:privacy@relax.com" class="text-primary hover:underline">privacy@relax.com</a></p>
                                <p><strong>Phone:</strong> <a href="tel:+15551234567" class="text-primary hover:underline">+1 (555) 123-4567</a></p>
                                <p><strong>Mail:</strong><br>
                                RELAX Tea Privacy Team<br>
                                123 Wellness Street<br>
                                New York, NY 10001<br>
                                United States</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</div>

<?php get_footer(); ?>