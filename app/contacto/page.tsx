import type { Metadata } from "next";
import ContactoPage from "./ContactoPage";

const BASE_URL = "https://emerald-co.vercel.app";

export const metadata: Metadata = {
  title: "Contacto | Emerald — Modernización Empresarial con IA",
  description: "Contáctanos por email, WhatsApp o agenda una consulta estratégica. Estamos en Barranquilla, Colombia. Respuesta en menos de 2 horas.",
  keywords: "contacto Emerald, WhatsApp Emerald, consulta empresarial, Barranquilla Colombia, modernización digital",
  alternates: {
    canonical: `${BASE_URL}/contacto`,
  },
  openGraph: {
    title: "Contacto | Emerald",
    description: "Contáctanos por email, WhatsApp o agenda una consulta estratégica gratuita.",
    type: "website",
    url: `${BASE_URL}/contacto`,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contacto — Emerald",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contacto | Emerald",
    description: "Contáctanos por email, WhatsApp o agenda una consulta estratégica gratuita.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return <ContactoPage />;
}
