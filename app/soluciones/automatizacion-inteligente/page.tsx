import type { Metadata } from "next";
import AutomatizacionPage from "./AutomatizacionPage";

const BASE_URL = "https://emerald-co.vercel.app";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Qué herramientas pueden integrarse con la automatización?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Conectamos con más de 50 herramientas: facturación electrónica, inventarios, CRM, pasarelas de pago, redes sociales, email marketing, Google Sheets, y muchas más. Si tu herramienta tiene API, la conectamos.",
      },
    },
    {
      "@type": "Question",
      name: "¿Necesito conocimientos técnicos para usar el sistema?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Diseñamos dashboards intuitivos y capacitamos a tu equipo. El sistema funciona automáticamente en segundo plano — tú solo ves los resultados.",
      },
    },
    {
      "@type": "Question",
      name: "¿Mis datos están seguros con la automatización?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Implementamos cifrado de datos, respaldos automáticos y cumplimos con estándares de privacidad. Tus datos nunca se comparten con terceros.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto tiempo toma implementar la automatización?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depende de la complejidad. Una automatización básica puede estar lista en 1-2 semanas. Sistemas completos con múltiples integraciones toman 3-6 semanas.",
      },
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Automatización Inteligente",
  description: "Conectamos tus herramientas y automatizamos procesos: facturación, inventarios, CRM, marketing y seguimiento de clientes. Tu operación en piloto automático.",
  provider: {
    "@type": "LocalBusiness",
    name: "Emerald",
    url: BASE_URL,
  },
  areaServed: {
    "@type": "Country",
    name: "Colombia",
  },
  serviceType: "Automatización de Procesos Empresariales",
  url: `${BASE_URL}/soluciones/automatizacion-inteligente`,
};

export const metadata: Metadata = {
  title: "Automatización Inteligente | Workflows y CRM | Emerald",
  description: "Automatiza facturación, inventarios, CRM y marketing. Conecta tus herramientas y elimina tareas repetitivas. Tu operación funcionando en piloto automático.",
  keywords: "automatización empresarial, workflows automáticos, CRM inteligente, integración de herramientas, dashboards tiempo real, automatización procesos",
  alternates: {
    canonical: `${BASE_URL}/soluciones/automatizacion-inteligente`,
  },
  openGraph: {
    title: "Automatización Inteligente | Emerald",
    description: "Automatiza facturación, inventarios, CRM y marketing. Tu operación en piloto automático.",
    type: "website",
    url: `${BASE_URL}/soluciones/automatizacion-inteligente`,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Automatización Inteligente — Emerald",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Automatización Inteligente | Emerald",
    description: "Automatiza facturación, inventarios, CRM y marketing. Tu operación en piloto automático.",
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
      <AutomatizacionPage />
    </>
  );
}
