"use client";

import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";

// Segundos de espera antes de abrir el chat automáticamente
const AUTO_OPEN_DELAY_MS = 4000;
const SESSION_KEY = "emerald_chat_opened";

interface ChatContextType {
  abierto: boolean;
  setAbierto: (open: boolean) => void;
  toggleAbierto: () => void;
}

const ChatContext = createContext<ChatContextType>({
  abierto: false,
  setAbierto: () => {},
  toggleAbierto: () => {},
});

export function ChatProvider({ children }: { children: ReactNode }) {
  const [abierto, setAbierto] = useState(false);
  const toggleAbierto = () => setAbierto((prev) => !prev);

  // Auto-abrir el chat la primera vez que el visitante entra en la sesión
  useEffect(() => {
    const yaSeAbrio = sessionStorage.getItem(SESSION_KEY);
    if (yaSeAbrio) return;

    const timer = setTimeout(() => {
      setAbierto(true);
      sessionStorage.setItem(SESSION_KEY, "1");
    }, AUTO_OPEN_DELAY_MS);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ChatContext.Provider value={{ abierto, setAbierto, toggleAbierto }}>
      {children}
    </ChatContext.Provider>
  );
}

export function useChat() {
  return useContext(ChatContext);
}
