import { useEffect } from 'react';

// Default tracking configuration
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
  }
};

const TrackingScripts = () => {
  useEffect(() => {
    // Load tracking config
    const loadAndInitializeTracking = async () => {
      let trackingConfig = defaultTrackingConfig;
      
      try {
        const response = await fetch('/config/tracking.json');
        if (response.ok) {
          trackingConfig = await response.json();
        }
      } catch (error) {
        console.warn('Could not load tracking config, using defaults');
      }
    // Meta Pixel
    if (trackingConfig.meta.enabled && trackingConfig.meta.pixelId !== 'YOUR_META_PIXEL_ID_HERE') {
      const script = document.createElement('script');
      script.innerHTML = `
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '${trackingConfig.meta.pixelId}');
        fbq('track', 'PageView');
      `;
      document.head.appendChild(script);

      // Add noscript fallback
      const noscript = document.createElement('noscript');
      noscript.innerHTML = `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=${trackingConfig.meta.pixelId}&ev=PageView&noscript=1" />`;
      document.head.appendChild(noscript);
    }

    // Google Analytics
    if (trackingConfig.google.enabled && trackingConfig.google.analyticsId !== 'GA-XXXXXXXXXX') {
      const gaScript = document.createElement('script');
      gaScript.async = true;
      gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${trackingConfig.google.analyticsId}`;
      document.head.appendChild(gaScript);

      const gaInlineScript = document.createElement('script');
      gaInlineScript.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${trackingConfig.google.analyticsId}');
        ${trackingConfig.google.adsConversionId !== 'AW-XXXXXXXXXX' ? `gtag('config', '${trackingConfig.google.adsConversionId}');` : ''}
      `;
      document.head.appendChild(gaInlineScript);
    }

    // Google Tag Manager
    if (trackingConfig.google.enabled && trackingConfig.google.tagManagerId !== 'GTM-XXXXXXX') {
      // GTM Head script
      const gtmScript = document.createElement('script');
      gtmScript.innerHTML = `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${trackingConfig.google.tagManagerId}');
      `;
      document.head.appendChild(gtmScript);

      // GTM Body noscript
      const gtmNoscript = document.createElement('noscript');
      gtmNoscript.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=${trackingConfig.google.tagManagerId}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
      document.body.appendChild(gtmNoscript);
    }

    // TikTok Pixel
    if (trackingConfig.tikTok.enabled && trackingConfig.tikTok.pixelId !== 'YOUR_TIKTOK_PIXEL_ID_HERE') {
      const ttScript = document.createElement('script');
      ttScript.innerHTML = `
        !function (w, d, t) {
          w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};var o=document.createElement("script");o.type="text/javascript",o.async=!0,o.src=i+"?sdkid="+e+"&lib="+t;var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(o,a)};
          ttq.load('${trackingConfig.tikTok.pixelId}');
          ttq.page();
        }(window, document, 'ttq');
      `;
      document.head.appendChild(ttScript);
    }
    };

    loadAndInitializeTracking();
  }, []);

  return null;
};

export default TrackingScripts;