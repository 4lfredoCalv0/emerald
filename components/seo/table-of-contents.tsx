"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { List } from "lucide-react";

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  htmlContent: string;
}

export default function TableOfContents({ htmlContent }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, "text/html");
    const headingElements = doc.querySelectorAll("h2, h3");
    const items: TOCItem[] = [];

    headingElements.forEach((el) => {
      const id = el.id || el.textContent?.toLowerCase().replace(/\s+/g, "-") || "";
      items.push({
        id,
        text: el.textContent || "",
        level: el.tagName === "H2" ? 2 : 3,
      });
    });

    setHeadings(items);
  }, [htmlContent]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-80px 0px -80% 0px" }
    );

    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length < 3) return null;

  return (
    <>
      {/* Desktop: Fixed sidebar */}
      <nav className="hidden xl:block fixed right-8 top-1/2 -translate-y-1/2 w-56 z-40">
        <div className="glass-card p-4">
          <p className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-3">
            Contenido
          </p>
          <ul className="space-y-2">
            {headings.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`block text-sm transition-colors duration-200 ${
                    item.level === 3 ? "pl-4" : ""
                  } ${
                    activeId === item.id
                      ? "text-emerald-400 font-medium"
                      : "text-gray-500 hover:text-gray-300"
                  }`}
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile: Toggle button */}
      <div className="xl:hidden fixed bottom-6 right-6 z-50">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-lg shadow-emerald-500/10"
          aria-label="Toggle table of contents"
        >
          <List className="w-5 h-5" />
        </motion.button>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute bottom-14 right-0 w-64 glass-card p-4"
          >
            <p className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-3">
              Contenido
            </p>
            <ul className="space-y-2 max-h-64 overflow-y-auto">
              {headings.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => setIsOpen(false)}
                    className={`block text-sm transition-colors duration-200 ${
                      item.level === 3 ? "pl-4" : ""
                    } ${
                      activeId === item.id
                        ? "text-emerald-400 font-medium"
                        : "text-gray-500 hover:text-gray-300"
                    }`}
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </>
  );
}
