export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Applogy",
    description: "Applogy is an AI app studio that develops creative, user-friendly, and App Store-ready AI applications.",
    url: "https://applogy.com",
    logo: "https://applogy.com/logo.png",
    founder: {
      "@type": "Person",
      name: "Önder Gülsevdi",
    },
    sameAs: [
      "https://apps.apple.com/developer/onder-gulsevdi/id1495105773",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      url: "https://applogy.com/contact",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Applogy",
    url: "https://applogy.com",
    description: "Smart AI. Simple Apps. Where Creativity Meets AI.",
    publisher: {
      "@type": "Organization",
      name: "Applogy",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}

