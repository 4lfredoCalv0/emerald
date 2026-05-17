import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Emerald | Modernización Empresarial con IA",
  description:
    "Transformamos negocios tradicionales en empresas modernas e inteligentes. Presencia digital premium, chatbots IA, automatización y sistemas operativos. Barranquilla, Colombia.",
  keywords:
    "modernización empresarial, transformación digital, inteligencia artificial, sitios web premium, automatización, chatbots, Barranquilla, sistemas inteligentes, presencia digital",
  openGraph: {
    title: "Emerald | Modernización Empresarial con IA",
    description:
      "Llevamos negocios tradicionales a la era digital con infraestructura inteligente y sistemas modernos.",
    type: "website",
    locale: "es_CO",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Manrope:wght@400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-gray-950 text-gray-100">
        {children}
      </body>
    </html>
  );
}
