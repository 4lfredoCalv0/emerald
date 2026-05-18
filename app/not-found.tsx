import Link from "next/link";
import { ArrowLeft, Home, MessageSquare } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      <div className="fixed inset-0 bg-grid pointer-events-none z-0" />
      <div className="fixed inset-0 bg-radial-gradient pointer-events-none z-0" />

      <div className="relative z-10 text-center max-w-lg">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 mb-8">
          <span className="text-4xl font-bold text-emerald-400">404</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Página no encontrada
        </h1>
        <p className="text-lg text-gray-400 mb-10 leading-relaxed">
          La página que buscas no existe o fue movida. Explora nuestras soluciones o vuelve al inicio.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full hover:from-emerald-400 hover:to-emerald-500 transition-all shadow-lg shadow-emerald-500/25"
          >
            <Home className="w-4 h-4" />
            Ir al inicio
          </Link>
          <Link
            href="/soluciones"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-gray-300 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:text-white transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Ver soluciones
          </Link>
          <a
            href="https://wa.me/573239168300"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-gray-300 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:text-white transition-all"
          >
            <MessageSquare className="w-4 h-4" />
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
