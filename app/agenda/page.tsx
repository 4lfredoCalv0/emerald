import type { Metadata } from "next";
import AgendaPage from "./AgendaPage";

const BASE_URL = "https://emerald-co.vercel.app";

export const metadata: Metadata = {
  title: "Agenda tu Consulta Estratégica Gratuita | Emerald",
  description: "30 minutos para analizar tu operación y diseñar la estrategia de modernización que tu negocio necesita. Sin compromiso. Respuesta en menos de 2 horas.",
  keywords: "consulta gratuita, diagnóstico empresarial, modernización digital, estrategia IA, Barranquilla",
  alternates: {
    canonical: `${BASE_URL}/agenda`,
  },
  openGraph: {
    title: "Agenda tu Consulta Gratuita | Emerald",
    description: "30 minutos para analizar tu operación y diseñar tu estrategia de modernización.",
    type: "website",
    url: `${BASE_URL}/agenda`,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Agenda tu Consulta — Emerald",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agenda tu Consulta Gratuita | Emerald",
    description: "30 minutos para analizar tu operación y diseñar tu estrategia de modernización.",
    images: ["/opengraph-image"],
  },
};

export default function Page() {
  return <AgendaPage />;
}
