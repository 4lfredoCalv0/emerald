import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sobre Emerald | Modernización Empresarial con IA",
  description:
    "Emerald nace en Barranquilla con una misión clara: ayudar a negocios tradicionales a modernizarse a través de sistemas inteligentes, automatización e infraestructura digital premium.",
};

export default function SobreEmeraldLayout({
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
        <Footer />
      </div>
    </div>
  );
}
