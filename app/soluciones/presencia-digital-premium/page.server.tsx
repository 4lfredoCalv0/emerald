import type { Metadata } from "next";
import PresenciaDigitalPage from "./PresenciaDigitalPage";

const BASE_URL = "https://emerald-co.vercel.app";

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
  return <PresenciaDigitalPage />;
}
