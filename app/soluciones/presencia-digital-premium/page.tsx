import type { Metadata } from "next";
import PresenciaDigitalPage from "./PresenciaDigitalPage";

const BASE_URL = "https://emerald-co.vercel.app";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuánto cuesta un sitio web premium con Emerald?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cada proyecto es único. Diseñamos soluciones modulares que se adaptan al tamaño y presupuesto de tu negocio. Agenda una consulta gratuita para recibir una cotización personalizada.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto tiempo toma crear mi presencia digital?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Un sitio web premium típico se entrega en 2-4 semanas, dependiendo de la complejidad. Landing pages pueden estar listas en menos de una semana.",
      },
    },
    {
      "@type": "Question",
      name: "¿Incluyen SEO en el diseño del sitio web?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Cada sitio incluye optimización SEO técnica: velocidad de carga, estructura semántica, meta tags, schema markup y SEO local para que clientes de tu zona te encuentren en Google.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo actualizar el contenido de mi sitio web después?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Construimos sitios con sistemas de gestión de contenido que te permiten actualizar textos, imágenes y productos sin necesidad de conocimientos técnicos.",
      },
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Presencia Digital Premium",
  description: "Creamos sistemas digitales que transforman la forma en que tu negocio se presenta al mundo. Sitios web premium, landing pages de alto impacto, branding digital y SEO local.",
  provider: {
    "@type": "LocalBusiness",
    name: "Emerald",
    url: BASE_URL,
  },
  areaServed: {
    "@type": "Country",
    name: "Colombia",
  },
  serviceType: "Diseño y Desarrollo Web",
  url: `${BASE_URL}/soluciones/presencia-digital-premium`,
};

export const metadata: Metadata = {
  title: "Presencia Digital Premium | Sitios Web y Branding | Emerald",
  description: "Creamos sitios web premium, landing pages de alto impacto y branding digital que genera confianza. Presencia 24/7 que convierte visitantes en clientes. Barranquilla, Colombia.",
  keywords: "sitio web premium, landing pages, branding digital, diseño web, presencia digital, SEO local, Barranquilla",
  alternates: {
    canonical: `${BASE_URL}/soluciones/presencia-digital-premium`,
  },
  openGraph: {
    title: "Presencia Digital Premium | Emerald",
    description: "Sitios web premium, landing pages y branding digital que convierten visitantes en clientes.",
    type: "website",
    url: `${BASE_URL}/soluciones/presencia-digital-premium`,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Presencia Digital Premium — Emerald",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Presencia Digital Premium | Emerald",
    description: "Sitios web premium, landing pages y branding digital que convierten visitantes en clientes.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <PresenciaDigitalPage />
    </>
  );
}
