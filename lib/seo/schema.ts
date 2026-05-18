const BASE_URL = "https://emerald-co.vercel.app";

export interface OrganizationSchema {
  "@context": "https://schema.org";
  "@type": "Organization";
  "@id": string;
  name: string;
  url: string;
  logo: string;
  description: string;
  address: {
    "@type": "PostalAddress";
    addressLocality: string;
    addressRegion: string;
    addressCountry: string;
  };
  contactPoint: {
    "@type": "ContactPoint";
    telephone: string;
    contactType: string;
    availableLanguage: string;
  };
  sameAs: string[];
}

export interface LocalBusinessSchema {
  "@context": "https://schema.org";
  "@type": "LocalBusiness";
  "@id": string;
  name: string;
  description: string;
  url: string;
  logo: string;
  image: string;
  telephone: string;
  email: string;
  address: {
    "@type": "PostalAddress";
    addressLocality: string;
    addressRegion: string;
    addressCountry: string;
  };
  geo: {
    "@type": "GeoCoordinates";
    latitude: string;
    longitude: string;
  };
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification";
    dayOfWeek: string[];
    opens: string;
    closes: string;
  };
  priceRange: string;
  areaServed: {
    "@type": "Country";
    name: string;
  };
  hasOfferCatalog: {
    "@type": "OfferCatalog";
    name: string;
    itemListElement: {
      "@type": "Offer";
      itemOffered: {
        "@type": "Service";
        name: string;
        description: string;
        url: string;
      };
    }[];
  };
}

export interface WebSiteSchema {
  "@context": "https://schema.org";
  "@type": "WebSite";
  name: string;
  url: string;
  description: string;
  publisher: {
    "@id": string;
  };
  potentialAction: {
    "@type": "SearchAction";
    target: string;
    "query-input": string;
  };
}

export interface ServiceSchema {
  "@context": "https://schema.org";
  "@type": "Service";
  name: string;
  description: string;
  provider: {
    "@type": "LocalBusiness";
    name: string;
    url: string;
    "@id": string;
  };
  areaServed: {
    "@type": "Country";
    name: string;
  };
  serviceType: string;
  url: string;
}

export interface FAQSchema {
  "@context": "https://schema.org";
  "@type": "FAQPage";
  mainEntity: {
    "@type": "Question";
    name: string;
    acceptedAnswer: {
      "@type": "Answer";
      text: string;
    };
  }[];
}

export interface ArticleSchema {
  "@context": "https://schema.org";
  "@type": "Article";
  headline: string;
  description: string;
  datePublished: string;
  dateModified: string;
  image: string;
  keywords: string[];
  author: {
    "@type": "Organization";
    name: string;
    url: string;
    "@id": string;
  };
  publisher: {
    "@type": "Organization";
    name: string;
    url: string;
    logo: {
      "@type": "ImageObject";
      url: string;
    };
  };
  mainEntityOfPage: {
    "@type": "WebPage";
    "@id": string;
  };
}

export interface BreadcrumbListSchema {
  "@context": "https://schema.org";
  "@type": "BreadcrumbList";
  itemListElement: {
    "@type": "ListItem";
    position: number;
    name: string;
    item: string;
  }[];
}

export interface ReviewSchema {
  "@context": "https://schema.org";
  "@type": "Review";
  reviewRating: {
    "@type": "AggregateRating";
    ratingValue: string;
    bestRating: string;
    ratingCount: number;
  };
  author: {
    "@type": "Organization";
    name: string;
  };
  reviewBody: string;
}

export function generateOrganizationSchema(): OrganizationSchema {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${BASE_URL}/#organization`,
    name: "Emerald",
    url: BASE_URL,
    logo: `${BASE_URL}/LogoEmeraldNBG.png`,
    description:
      "Transformamos negocios tradicionales en empresas modernas e inteligentes mediante presencia digital premium, chatbots IA, automatización y sistemas operativos.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Barranquilla",
      addressRegion: "Atlántico",
      addressCountry: "CO",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+57-323-9168300",
      contactType: "sales",
      availableLanguage: "Spanish",
    },
    sameAs: [
      "https://www.linkedin.com/company/emerald-co",
      "https://www.instagram.com/ia.emerald/",
      "https://twitter.com/emerald_co",
    ],
  };
}

export function generateLocalBusinessSchema(): LocalBusinessSchema {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${BASE_URL}/#localbusiness`,
    name: "Emerald",
    description:
      "Agencia de modernización empresarial con IA. Presencia digital premium, chatbots WhatsApp IA y automatización inteligente para negocios en Barranquilla y Latinoamérica.",
    url: BASE_URL,
    logo: `${BASE_URL}/LogoEmeraldNBG.png`,
    image: `${BASE_URL}/og-image.png`,
    telephone: "+57-323-9168300",
    email: "contactoemerald@proton.me",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Barranquilla",
      addressRegion: "Atlántico",
      addressCountry: "CO",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "10.9639",
      longitude: "-74.7964",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    priceRange: "$$",
    areaServed: {
      "@type": "Country",
      name: "Colombia",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios de Modernización Digital",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Presencia Digital Premium",
            description: "Sitios web premium, landing pages y branding digital.",
            url: `${BASE_URL}/soluciones/presencia-digital-premium`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Chatbots y WhatsApp IA",
            description: "Chatbots inteligentes para atención 24/7 y automatización de ventas.",
            url: `${BASE_URL}/soluciones/chatbots-whatsapp-ia`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Automatización Inteligente",
            description: "Automatización de workflows, CRM e integraciones.",
            url: `${BASE_URL}/soluciones/automatizacion-inteligente`,
          },
        },
      ],
    },
  };
}

export function generateWebSiteSchema(): WebSiteSchema {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Emerald",
    url: BASE_URL,
    description: "Modernización empresarial con IA. Presencia digital premium, chatbots y automatización.",
    publisher: {
      "@id": `${BASE_URL}/#organization`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: `${BASE_URL}/blog?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function generateServiceSchema(options: {
  name: string;
  description: string;
  serviceType: string;
  url: string;
}): ServiceSchema {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: options.name,
    description: options.description,
    provider: {
      "@type": "LocalBusiness",
      name: "Emerald",
      url: BASE_URL,
      "@id": `${BASE_URL}/#localbusiness`,
    },
    areaServed: {
      "@type": "Country",
      name: "Colombia",
    },
    serviceType: options.serviceType,
    url: options.url,
  };
}

export function generateFAQSchema(questions: { question: string; answer: string }[]): FAQSchema {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    })),
  };
}

export function generateArticleSchema(options: {
  title: string;
  description: string;
  datePublished: string;
  dateModified: string;
  image?: string;
  keywords: string[];
  slug: string;
}): ArticleSchema {
  const postUrl = `${BASE_URL}/blog/${options.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: options.title,
    description: options.description,
    datePublished: options.datePublished,
    dateModified: options.dateModified,
    image: options.image || `${BASE_URL}/og-image.png`,
    keywords: options.keywords,
    author: {
      "@type": "Organization",
      name: "Emerald",
      url: BASE_URL,
      "@id": `${BASE_URL}/#organization`,
    },
    publisher: {
      "@type": "Organization",
      name: "Emerald",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/LogoEmeraldNBG.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
    },
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]): BreadcrumbListSchema {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function toScriptTag(schema: Record<string, unknown>): string {
  return `<script type="application/ld+json">${JSON.stringify(schema)}</script>`;
}
