"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X } from "lucide-react";
import { useChat } from "@/components/chat-context";

export function ChatLauncher() {
  const { abierto, toggleAbierto } = useChat();

  return (
    <motion.button
      onClick={toggleAbierto}
      className="fixed bottom-8 left-8 z-40 w-12 h-12 flex items-center justify-center text-black"
      style={{
        background: "#00FF66",
        clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))",
      }}
      whileHover={{ scale: 1.1, boxShadow: "0 0 30px rgba(16,185,129,0.5)" }}
      whileTap={{ scale: 0.95 }}
      aria-label={abierto ? "Cerrar chat" : "Abrir chat"}
    >
      <AnimatePresence mode="wait" initial={false}>
        {abierto ? (
          <motion.span
            key="close"
            initial={{ opacity: 0, rotate: -90, scale: 0.7 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.7 }}
            transition={{ duration: 0.15 }}
          >
            <X className="w-5 h-5" />
          </motion.span>
        ) : (
          <motion.span
            key="open"
            initial={{ opacity: 0, rotate: 90, scale: 0.7 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: -90, scale: 0.7 }}
            transition={{ duration: 0.15 }}
          >
            <MessageSquare className="w-5 h-5" />
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
