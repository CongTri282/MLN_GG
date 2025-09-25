import React, { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterImage?: string;
  canonical?: string;
  type?: 'website' | 'article' | 'profile';
  structuredData?: object;
}

const SEO: React.FC<SEOProps> = ({
  title = "Quy Luật Mâu Thuẫn - Nền Tảng Của Sự Thay Đổi Và Phát Triển",
  description = "Tìm hiểu quy luật mâu thuẫn trong triết học biện chứng duy vật. Khám phá sự tương tác giữa các yếu tố đối lập trong tự nhiên, xã hội và tư duy con người thông qua trò chơi tương tác.",
  keywords = "quy luật mâu thuẫn, triết học biện chứng, duy vật biện chứng, mâu thuẫn xã hội, triết học Hegel, phát triển xã hội, tư duy biện chứng, môi trường và kinh tế",
  ogImage = "/og-image.jpg",
  ogUrl = "https://mln-game.com",
  twitterImage = "/twitter-image.jpg",
  canonical = "https://mln-game.com",
  type = "website",
  structuredData
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Helper function to update or create meta tags
    const updateMetaTag = (name: string, content: string, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;

      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Update basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);

    // Update Open Graph meta tags
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:url', ogUrl, true);
    updateMetaTag('og:image', ogImage, true);

    // Update Twitter Card meta tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', twitterImage);

    // Update canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonical);

    // Add structured data
    if (structuredData) {
      let script = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement;
      if (!script) {
        script = document.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(structuredData);
    }
  }, [title, description, keywords, ogImage, ogUrl, twitterImage, canonical, type, structuredData]);

  return null;
};

export default SEO;