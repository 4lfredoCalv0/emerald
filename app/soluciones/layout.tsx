import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

const BASE_URL = "https://emerald-co.vercel.app";

export const metadata: Metadata = {
  title: "Soluciones | Presencia Digital, Chatbots IA y Automatización | Emerald",
  description: "Presencia Digital Premium, Chatbots y WhatsApp IA, Automatización Inteligente. Tres pilares para modernizar tu negocio con sistemas inteligentes. Barranquilla, Colombia.",
  keywords: "soluciones digitales, presencia digital, chatbots IA, automatización empresarial, modernización digital, Barranquilla",
  alternates: {
    canonical: `${BASE_URL}/soluciones`,
  },
  openGraph: {
    title: "Soluciones | Emerald",
    description: "Presencia Digital Premium, Chatbots IA y Automatización Inteligente para tu negocio.",
    type: "website",
    url: `${BASE_URL}/soluciones`,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Soluciones — Emerald",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Soluciones | Emerald",
    description: "Presencia Digital Premium, Chatbots IA y Automatización Inteligente para tu negocio.",
    images: ["/og-image.png"],
  },
};

export default function SolucionesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="fixed inset-0 bg-grid pointer-events-none z-0" />
      <div className="fixed inset-0 bg-radial-gradient pointer-events-none z-0" />
      <div className="relative z-10">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
