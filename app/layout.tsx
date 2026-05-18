import type { Metadata } from "next";
import { AnalyticsWrapper } from "@/components/AnalyticsWrapper";
import { generateOrganizationSchema, generateLocalBusinessSchema } from "@/lib/seo/schema";
import { defaultMetadata } from "@/lib/seo/metadata";
import "./globals.css";

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgSchema = generateOrganizationSchema();
  const localBizSchema = generateLocalBusinessSchema();

  return (
    <html lang="es" className="dark">
      <head>
        <link rel="icon" type="image/png" href="/LogoEmeraldNBG.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Manrope:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBizSchema) }}
        />
      </head>
      <body className="min-h-screen bg-gray-950 text-gray-100">
        {children}
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
