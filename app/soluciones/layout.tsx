import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Soluciones | Emerald",
  description: "Presencia Digital Premium, Chatbots y WhatsApp IA, Automatización Inteligente. Modernizamos tu negocio con sistemas inteligentes.",
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
