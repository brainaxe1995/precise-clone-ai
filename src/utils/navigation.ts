/**
 * Utility function to scroll to top of page
 */
export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

/**
 * Navigate to a page and scroll to top
 */
export const navigateToPage = (path: string) => {
  window.location.href = path;
  // Scroll to top will happen automatically on page load
};