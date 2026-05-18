import type { Metadata } from "next";

const BASE_URL = "https://emerald-co.vercel.app";

export interface PageMeta {
  title: string;
  description: string;
  keywords?: string;
  path?: string;
  type?: "website" | "article";
  publishedTime?: string;
  image?: string;
  imageAlt?: string;
}

export function generatePageMetadata(meta: PageMeta): Metadata {
  const url = meta.path ? `${BASE_URL}${meta.path}` : BASE_URL;
  const imageUrl = meta.image || "/og-image.png";
  const imageAlt = meta.imageAlt || meta.title;

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: meta.type || "website",
      url,
      siteName: "Emerald",
      locale: "es_CO",
      ...(meta.publishedTime ? { publishedTime: meta.publishedTime } : {}),
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: [imageUrl],
    },
  };
}

export const defaultMetadata: Metadata = {
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

export const blogMetadata: Metadata = {
  title: "Blog | Modernización Digital e IA — Emerald",
  description:
    "Artículos sobre automatización, inteligencia artificial, chatbots WhatsApp y transformación digital para negocios en Barranquilla y Latinoamérica.",
  keywords:
    "blog modernización digital, IA para negocios, automatización empresarial, chatbots WhatsApp, transformación digital Colombia",
  metadataBase: new URL(BASE_URL),
  alternates: {
    canonical: `${BASE_URL}/blog`,
  },
  openGraph: {
    title: "Blog | Modernización Digital e IA — Emerald",
    description:
      "Artículos sobre automatización, IA y transformación digital para negocios que quieren evolucionar.",
    type: "website",
    url: `${BASE_URL}/blog`,
    siteName: "Emerald",
    locale: "es_CO",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Blog Emerald — Modernización Digital e IA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Modernización Digital e IA — Emerald",
    description:
      "Artículos sobre automatización, IA y transformación digital para negocios que quieren evolucionar.",
    images: ["/og-image.png"],
  },
};
