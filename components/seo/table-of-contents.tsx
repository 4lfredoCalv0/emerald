"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { List } from "lucide-react";

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  htmlContent: string;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(new RegExp("[\\u0300-\\u036f]", "g"), "")
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

export default function TableOfContents({ htmlContent }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);

  // Extract headings from the REAL rendered article DOM and assign matching ids
  useEffect(() => {
    const container = document.querySelector(".article-content");
    if (!container) return;

    const headingElements = container.querySelectorAll("h2, h3");
    const items: TOCItem[] = [];
    const used = new Set<string>();

    headingElements.forEach((el) => {
      let id = el.id || slugify(el.textContent || "");
      // Ensure uniqueness if two headings slugify to the same value
      let unique = id;
      let n = 2;
      while (used.has(unique)) {
        unique = `${id}-${n++}`;
      }
      id = unique;
      used.add(id);
      el.id = id; // assign to the actual DOM heading so anchors resolve

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

  const handleClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveId(id);
    }
    setIsOpen(false);
  };

  if (headings.length < 3) return null;

  return (
    <>
      {/* Desktop: Fixed sidebar */}
      <nav className="hidden xl:block fixed right-8 top-1/2 -translate-y-1/2 w-56 z-40">
        <div
          className="p-4"
          style={{
            background: "rgba(10,10,10,0.8)",
            border: "1px solid rgba(255,255,255,0.06)",
            backdropFilter: "blur(20px)",
            clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))",
          }}
        >
          <p className="text-[10px] font-bold text-[#3b82f6] uppercase tracking-[0.2em] mb-3">
            Contenido
          </p>
          <ul className="space-y-2">
            {headings.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => handleClick(e, item.id)}
                  className={`block text-sm transition-colors duration-200 cursor-pointer ${
                    item.level === 3 ? "pl-4" : ""
                  } ${
                    activeId === item.id
                      ? "text-[#60a5fa] font-medium"
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
          className="w-12 h-12 flex items-center justify-center text-[#3b82f6]"
          style={{
            background: "rgba(59,130,246,0.1)",
            border: "1px solid rgba(59,130,246,0.2)",
            clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))",
          }}
          aria-label="Toggle table of contents"
        >
          <List className="w-5 h-5" />
        </motion.button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              className="absolute bottom-14 right-0 w-64 p-4"
              style={{
                background: "rgba(10,10,10,0.95)",
                border: "1px solid rgba(255,255,255,0.06)",
                backdropFilter: "blur(20px)",
                clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))",
              }}
            >
              <p className="text-[10px] font-bold text-[#3b82f6] uppercase tracking-[0.2em] mb-3">
                Contenido
              </p>
              <ul className="space-y-2 max-h-64 overflow-y-auto">
                {headings.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => handleClick(e, item.id)}
                      className={`block text-sm transition-colors duration-200 cursor-pointer ${
                        item.level === 3 ? "pl-4" : ""
                      } ${
                        activeId === item.id
                          ? "text-[#60a5fa] font-medium"
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
        </AnimatePresence>
      </div>
    </>
  );
}
