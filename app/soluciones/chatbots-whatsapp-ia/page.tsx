import type { Metadata } from "next";
import ChatbotsPage from "./ChatbotsPage";

const BASE_URL = "https://emerald-co.vercel.app";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿El chatbot puede atender en español?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Nuestros chatbots están configurados para atender en español con respuestas naturales y contextuales. También pueden manejar múltiples idiomas si tu negocio lo requiere.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo personalizar las respuestas del chatbot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutamente. Diseñamos cada flujo de conversación basado en las preguntas reales de tus clientes. Tú defines el tono, las respuestas y las reglas de escalamiento a un agente humano.",
      },
    },
    {
      "@type": "Question",
      name: "¿Funciona con WhatsApp Business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Integramos con la API oficial de WhatsApp Business para automatización completa: respuestas, calificación de leads, agenda de citas y seguimiento.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué pasa si el chatbot no puede responder una pregunta?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El sistema está diseñado para escalar automáticamente a un agente humano cuando detecta una consulta que requiere intervención personal. Nunca pierdes una oportunidad de venta.",
      },
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Chatbots y WhatsApp IA",
  description: "Sistemas inteligentes que atienden clientes, califican leads y agendan citas al instante por WhatsApp y web. Atención 24/7 sin intervención humana.",
  provider: {
    "@type": "LocalBusiness",
    name: "Emerald",
    url: BASE_URL,
  },
  areaServed: {
    "@type": "Country",
    name: "Colombia",
  },
  serviceType: "Automatización de Comunicación con IA",
  url: `${BASE_URL}/soluciones/chatbots-whatsapp-ia`,
};

export const metadata: Metadata = {
  title: "Chatbots y WhatsApp IA | Atención 24/7 | Emerald",
  description: "Chatbots inteligentes que atienden clientes, califican leads y agendan citas por WhatsApp y web 24/7. Automatiza tu comunicación y no pierdas ninguna venta.",
  keywords: "chatbot WhatsApp, WhatsApp IA, atención al cliente automatizada, chatbot ventas, leads automatizados, agenda automática",
  alternates: {
    canonical: `${BASE_URL}/soluciones/chatbots-whatsapp-ia`,
  },
  openGraph: {
    title: "Chatbots y WhatsApp IA | Emerald",
    description: "Chatbots inteligentes que atienden clientes, califican leads y agendan citas 24/7.",
    type: "website",
    url: `${BASE_URL}/soluciones/chatbots-whatsapp-ia`,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Chatbots y WhatsApp IA — Emerald",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chatbots y WhatsApp IA | Emerald",
    description: "Chatbots inteligentes que atienden clientes, califican leads y agendan citas 24/7.",
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
      <ChatbotsPage />
    </>
  );
}
