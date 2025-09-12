<?php get_header(); ?>

<div class="status-page">
    <div class="container">
        <div class="status-content">
            <div class="status-code">404</div>
            <h1 class="status-title">Page Not Found</h1>
            <p class="status-description">
                Sorry, the page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="<?php echo home_url(); ?>" class="btn btn-primary">
                    Go Home
                </a>
                <a href="<?php echo home_url('/shop'); ?>" class="btn btn-outline">
                    Shop Tea
                </a>
            </div>
        </div>
    </div>
</div>

<?php get_footer(); ?>