"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const allItems: BreadcrumbItem[] = [
    { label: "Inicio", href: "/" },
    ...items,
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `https://emerald-co.vercel.app${item.href}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <nav aria-label="Breadcrumb" className="absolute top-16 lg:top-24 left-0 right-0 z-10">
        <div className="max-w-7xl mx-auto px-4">
          <ol className="flex items-center gap-1.5 text-sm">
            {allItems.map((item, index) => (
              <li key={index} className="flex items-center gap-1.5">
                {index > 0 && (
                  <ChevronRight className="w-3.5 h-3.5 text-gray-600 shrink-0" />
                )}
                {index === 0 ? (
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 text-gray-500 hover:text-[#34d399] transition-colors"
                  >
                    <Home className="w-3.5 h-3.5" />
                  </Link>
                ) : index === allItems.length - 1 ? (
                  <span className="text-gray-300 font-medium">{item.label}</span>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-500 hover:text-[#34d399] transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  );
}
