import type { Metadata } from "next";
import { generateWebSiteSchema, generateBreadcrumbSchema } from "@/lib/seo/schema";
import { defaultMetadata } from "@/lib/seo/metadata";
import HomeClient from "./HomeClient";

export const metadata: Metadata = defaultMetadata;

const websiteSchema = generateWebSiteSchema();
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Inicio", url: "https://emerald-co.vercel.app" },
]);

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <HomeClient />
    </>
  );
}
