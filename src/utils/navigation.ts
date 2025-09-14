import { NavigateFunction } from 'react-router-dom';

/**
 * Utility function to scroll to top of page
 */
export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

/**
 * Navigate to external URL
 */
export const navigateToExternalUrl = (url: string) => {
  window.location.href = url;
};

/**
 * Navigate to a page and scroll to top using React Router
 */
export const navigateToPage = (navigate: NavigateFunction, path: string) => {
  navigate(path);
  window.scrollTo({ top: 0, behavior: 'smooth' });
};