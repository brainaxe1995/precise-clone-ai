// Tracking utilities for Meta Pixel, Google GTM, and TikTok

// Default tracking configuration - can be overridden by loading external config
const defaultTrackingConfig = {
  meta: {
    pixelId: "YOUR_META_PIXEL_ID_HERE",
    accessToken: "YOUR_META_ACCESS_TOKEN_HERE",
    enabled: true
  },
  google: {
    analyticsId: "GA-XXXXXXXXXX",
    tagManagerId: "GTM-XXXXXXX",
    adsConversionId: "AW-XXXXXXXXXX",
    enabled: true
  },
  tikTok: {
    pixelId: "YOUR_TIKTOK_PIXEL_ID_HERE",
    enabled: true
  },
  events: {
    pageView: true,
    purchase: true,
    viewContent: true,
    initiateCheckout: true,
    contact: true,
    newsletter: true
  }
};

let trackingConfig = defaultTrackingConfig;

// Load tracking config from JSON if available
const loadTrackingConfig = async () => {
  try {
    const response = await fetch('/config/tracking.json');
    if (response.ok) {
      trackingConfig = await response.json();
    }
  } catch (error) {
    console.warn('Could not load tracking config, using defaults');
  }
};

// Initialize config loading
if (typeof window !== 'undefined') {
  loadTrackingConfig();
}

// Declare global tracking functions
declare global {
  interface Window {
    fbq: any;
    gtag: any;
    ttq: any;
    dataLayer: any[];
  }
}

// Meta Pixel Events
export const trackMetaEvent = (eventName: string, parameters?: any) => {
  if (!trackingConfig.meta.enabled || typeof window === 'undefined') return;
  
  try {
    if (window.fbq) {
      window.fbq('track', eventName, parameters);
    }
  } catch (error) {
    console.warn('Meta Pixel tracking error:', error);
  }
};

// Google Analytics Events
export const trackGoogleEvent = (eventName: string, parameters?: any) => {
  if (!trackingConfig.google.enabled || typeof window === 'undefined') return;
  
  try {
    if (window.gtag) {
      window.gtag('event', eventName, parameters);
    }
    // Also push to dataLayer for GTM
    if (window.dataLayer) {
      window.dataLayer.push({
        event: eventName,
        ...parameters
      });
    }
  } catch (error) {
    console.warn('Google tracking error:', error);
  }
};

// TikTok Pixel Events
export const trackTikTokEvent = (eventName: string, parameters?: any) => {
  if (!trackingConfig.tikTok.enabled || typeof window === 'undefined') return;
  
  try {
    if (window.ttq) {
      window.ttq.track(eventName, parameters);
    }
  } catch (error) {
    console.warn('TikTok Pixel tracking error:', error);
  }
};

// Combined tracking function
export const trackEvent = (eventName: string, parameters?: any) => {
  trackMetaEvent(eventName, parameters);
  trackGoogleEvent(eventName, parameters);
  trackTikTokEvent(eventName, parameters);
};

// Specific event trackers
export const trackPurchase = (value: number, currency: string = 'USD', items?: any[]) => {
  const eventData = {
    value,
    currency,
    content_type: 'product',
    contents: items || []
  };
  
  trackEvent('Purchase', eventData);
};

export const trackViewContent = (contentName: string, contentType: string = 'product', value?: number) => {
  const eventData = {
    content_name: contentName,
    content_type: contentType,
    value
  };
  
  trackEvent('ViewContent', eventData);
};

export const trackInitiateCheckout = (value: number, currency: string = 'USD', items?: any[]) => {
  const eventData = {
    value,
    currency,
    content_type: 'product',
    contents: items || []
  };
  
  trackEvent('InitiateCheckout', eventData);
};

export const trackPageView = (pageName?: string) => {
  const eventData = pageName ? { page_title: pageName } : {};
  trackEvent('PageView', eventData);
};