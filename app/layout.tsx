import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const BASE_URL = "https://emerald-co.vercel.app";

export const metadata: Metadata = {
  title: "Emerald | Modernización Empresarial con IA",
  description:
    "Transformamos negocios tradicionales en empresas modernas e inteligentes. Presencia digital premium, chatbots IA, automatización y sistemas operativos. Barranquilla, Colombia.",
  keywords:
    "modernización empresarial, transformación digital, inteligencia artificial, sitios web premium, automatización, chatbots, Barranquilla, sistemas inteligentes, presencia digital",
  metadataBase: new URL(BASE_URL),
  openGraph: {
    title: "Emerald | Modernización Empresarial con IA",
    description:
      "Llevamos negocios tradicionales a la era digital con infraestructura inteligente y sistemas modernos.",
    type: "website",
    locale: "es_CO",
    url: BASE_URL,
    siteName: "Emerald",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Emerald — Modernización Empresarial con IA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Emerald | Modernización Empresarial con IA",
    description:
      "Llevamos negocios tradicionales a la era digital con infraestructura inteligente y sistemas modernos.",
    images: ["/og-image.png"],
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
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Manrope:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Emerald",
              url: BASE_URL,
              logo: `${BASE_URL}/logomark.png`,
              description:
                "Transformamos negocios tradicionales en empresas modernas e inteligentes mediante presencia digital premium, chatbots IA, automatización y sistemas operativos.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Barranquilla",
                addressCountry: "CO",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+57-323-9168300",
                contactType: "sales",
                availableLanguage: "Spanish",
              },
              sameAs: [],
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-gray-950 text-gray-100">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
