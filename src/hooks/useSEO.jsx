import { useEffect } from "react";

const useSEO = ({ title, description, keywords, image, url, type }) => {
  useEffect(() => {
    document.title = title ? `${title} | Skynetrix` : "Skynetrix";

    const updateMetaTag = (name, content) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.name = name;
        document.head.appendChild(tag);
      }
      tag.content = content;
    };

    updateMetaTag("description", description);
    updateMetaTag("keywords", keywords);
    updateMetaTag("og:title", title);
    updateMetaTag("og:description", description);
    updateMetaTag("og:image", image);
    updateMetaTag("og:url", url || window.location.href);
    updateMetaTag("og:type", type || "website");
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", title);
    updateMetaTag("twitter:description", description);
    updateMetaTag("twitter:image", image);

    // JSON-LD Schema for Google Rich Results
    const jsonLdScript = document.createElement("script");
    jsonLdScript.type = "application/ld+json";
    jsonLdScript.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Skynetrix",
      "url": url || window.location.href,
      "description": description,
      "image": image || "/default-og-image.jpg",
      "sameAs": [
        "https://www.facebook.com/YourPage",
        "https://www.linkedin.com/in/YourProfile",
        "https://twitter.com/YourHandle"
      ]
    });

    document.head.appendChild(jsonLdScript);

    return () => document.head.removeChild(jsonLdScript); // Cleanup when component unmounts
  }, [title, description, keywords, image, url, type]);
};

export default useSEO;
