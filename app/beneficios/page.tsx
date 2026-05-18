import type { Metadata } from "next";
import BeneficiosPage from "./BeneficiosPage";

const BASE_URL = "https://emerald-co.vercel.app";

export const metadata: Metadata = {
  title: "Beneficios | Modernización Empresarial con IA | Emerald",
  description: "Más leads, menos tareas repetitivas, operaciones optimizadas. Descubre cómo Emerald transforma negocios tradicionales en empresas modernas e inteligentes.",
  keywords: "beneficios automatización, modernización empresarial, transformación digital, IA para negocios, eficiencia operativa",
  alternates: {
    canonical: `${BASE_URL}/beneficios`,
  },
  openGraph: {
    title: "Beneficios | Emerald",
    description: "Más leads, menos tareas repetitivas, operaciones optimizadas con IA.",
    type: "website",
    url: `${BASE_URL}/beneficios`,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Beneficios — Emerald",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Beneficios | Emerald",
    description: "Más leads, menos tareas repetitivas, operaciones optimizadas con IA.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return <BeneficiosPage />;
}
