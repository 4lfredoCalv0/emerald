"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";
import {
  Globe,
  Monitor,
  Palette,
  Zap,
  TrendingUp,
  Users,
  ArrowRight,
  LayoutGrid,
  Search,
  Eye,
  Layers,
  PenTool,
  Target,
  CheckCircle2,
  XCircle,
  Heart,
  Coffee,
  Dumbbell,
  Building2,
  Store,
  Briefcase,
  HardHat,
  Sparkles,
  GraduationCap,
  ShoppingCart,
} from "lucide-react";
import SolutionHero from "@/components/solutions/SolutionHero";
import TransformationSection from "@/components/solutions/TransformationSection";
import FeatureShowcase from "@/components/solutions/FeatureShowcase";
import NarrativeSection from "@/components/solutions/NarrativeSection";
import ProcessSteps from "@/components/solutions/ProcessSteps";
import IndustryFit from "@/components/solutions/IndustryFit";
import SolutionCTA from "@/components/solutions/SolutionCTA";
import Breadcrumbs from "@/components/Breadcrumbs";
import HeroVisual from "@/components/visuals/HeroVisual";
import FAQSection from "@/components/seo/faq-section";
const ComparisonMockup = dynamic(() => import("@/components/visuals/ComparisonMockup"), {
  loading: () => <div className="h-80 bg-gray-900/50 animate-pulse rounded-xl" />,
});

export default function PresenciaDigitalPage() {
  return (
    <div className="relative">
      <Breadcrumbs
        items={[
          { label: "Soluciones", href: "/soluciones" },
          { label: "Presencia Digital Premium", href: "/soluciones/presencia-digital-premium" },
        ]}
      />
      {/* Hero Section */}
      <SolutionHero
        icon={Globe}
        badge="Presencia Digital Premium"
        title="Tu negocio merece una"
        titleHighlight="identidad digital premium"
        description="Creamos sistemas digitales que transforman la forma en que tu negocio se presenta al mundo. Diseño intencional, tecnología moderna y una experiencia que genera confianza desde el primer contacto."
        ctaText="Moderniza tu presencia digital"
        secondaryCtaText="Conoce todas las soluciones"
        accentColor="emerald"
        pattern="mesh"
      />

      {/* Narrative: The Three Pillars */}
      <NarrativeSection
        accentColor="emerald"
        label="El sistema"
        title="Más que un sitio web. Un ecosistema digital."
        subtitle="Cada componente está diseñado para trabajar en conjunto y crear una presencia que convierte visitantes en clientes."
        items={[
          {
            icon: Eye,
            label: "Presencia que impacta",
            description:
              "Tu sitio web es la primera impresión. Lo diseñamos para que comunique profesionalismo, confianza y la calidad de tu negocio antes de que el cliente diga una palabra.",
          },
          {
            icon: Target,
            label: "Estructura que convierte",
            description:
              "Cada página, cada sección, cada botón tiene un propósito. No decoramos — construimos sistemas diseñados para guiar al visitante hacia la acción.",
          },
          {
            icon: Layers,
            label: "Infraestructura que escala",
            description:
              "Tu presencia digital crece contigo. Desde landing pages específicas hasta plataformas completas, todo está construido para evolucionar con tu negocio.",
          },
        ]}
      />

      {/* Visual: Browser mockup showing premium website */}
      <section className="relative py-16 sm:py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/[0.02] to-transparent" />
        <div className="max-w-5xl mx-auto relative">
          <div className="text-center mb-10">
            <p className="text-xs font-medium text-purple-400 uppercase tracking-widest mb-3">
              Comparación
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              La diferencia es{" "}
              <span className="gradient-text">abismal</span>
            </h2>
          </div>
          <ComparisonMockup accentColor="purple" />
        </div>
      </section>

      {/* Transformation: Before/After */}
      <TransformationSection
        accentColor="emerald"
        title="De presencia invisible a identidad digital que genera confianza"
        subtitle="La diferencia entre un negocio que pasa desapercibido y uno que se recuerda."
        before={[
          "Sitio web desactualizado o inexistente",
          "Diseño que no transmite profesionalismo",
          "Invisible en búsquedas locales de Google",
          "Clientes no encuentran cómo contactarte",
          "Imagen inconsistente entre redes y web",
        ]}
        after={[
          "Sitio web premium que proyecta autoridad en tu sector",
          "Diseño moderno que genera confianza inmediata",
          "Posicionamiento SEO para captar clientes de tu zona",
          "Sistema de contacto integrado y siempre disponible",
          "Identidad digital coherente en todos los canales",
        ]}
      />

      {/* Capabilities */}
      <FeatureShowcase
        accentColor="emerald"
        label="Capacidades"
        title="Todo lo que incluye tu presencia digital"
        subtitle="Cada componente está diseñado para funcionar como parte de un sistema completo."
        features={[
          {
            icon: Monitor,
            title: "Sitio Web Premium",
            description:
              "Diseño moderno, responsive y optimizado para convertir visitantes en clientes reales.",
            tag: "Core",
          },
          {
            icon: LayoutGrid,
            title: "Landing Pages",
            description:
              "Páginas enfocadas en conversión para campañas, productos o servicios específicos.",
            tag: "Conversión",
          },
          {
            icon: Palette,
            title: "Branding Digital",
            description:
              "Identidad visual coherente: logo, colores, tipografía y guía de estilo completa.",
            tag: "Identidad",
          },
          {
            icon: Zap,
            title: "Rendimiento Optimizado",
            description:
              "Velocidad de carga ultrarrápida y optimización técnica para la mejor experiencia posible.",
            tag: "Performance",
          },
          {
            icon: Search,
            title: "SEO Local",
            description:
              "Posicionamiento en Google para que clientes de tu zona te encuentren primero.",
            tag: "Visibilidad",
          },
          {
            icon: Users,
            title: "Captura de Leads",
            description:
              "Formularios inteligentes y sistemas integrados para captar clientes potenciales automáticamente.",
            tag: "Growth",
          },
        ]}
      />

      {/* Process: How We Build */}
      <ProcessSteps
        accentColor="emerald"
        label="Proceso"
        title="Cómo construimos tu presencia digital"
        subtitle="Un proceso estructurado que garantiza resultados, no improvisación."
        steps={[
          {
            number: "01",
            icon: PenTool,
            title: "Análisis y estrategia",
            description:
              "Estudiamos tu negocio, tu mercado y tu competencia. Definimos la estrategia digital que mejor se adapta a tus objetivos.",
          },
          {
            number: "02",
            icon: Palette,
            title: "Diseño de identidad",
            description:
              "Creamos la identidad visual completa: logo, paleta de colores, tipografía y todos los elementos que definen tu marca digital.",
          },
          {
            number: "03",
            icon: Monitor,
            title: "Desarrollo del sistema",
            description:
              "Construimos tu sitio web con tecnología moderna, optimizado para velocidad, conversión y posicionamiento en buscadores.",
          },
          {
            number: "04",
            icon: TrendingUp,
            title: "Lanzamiento y optimización",
            description:
              "Publicamos, monitoreamos y optimizamos continuamente para asegurar que tu presencia digital genere resultados reales.",
          },
        ]}
      />

      {/* Industries */}
      <IndustryFit
        accentColor="emerald"
        title="Diseñado para tu tipo de negocio"
        subtitle="Cada industria tiene necesidades distintas. Adaptamos el sistema a las tuyas."
        industries={[
          { name: "Clínicas y consultorios", icon: Heart },
          { name: "Restaurantes", icon: Coffee },
          { name: "Gimnasios y spas", icon: Dumbbell },
          { name: "Inmobiliarias", icon: Building2 },
          { name: "Tiendas locales", icon: Store },
          { name: "Estudios profesionales", icon: Briefcase },
          { name: "Constructoras", icon: HardHat },
          { name: "Servicios de belleza", icon: Sparkles },
          { name: "Educación y cursos", icon: GraduationCap },
          { name: "Comercio electrónico", icon: ShoppingCart },
        ]}
      />

      {/* FAQ */}
      <FAQSection
        accentColor="emerald"
        items={[
          {
            question: "¿Cuánto cuesta un sitio web premium con Emerald?",
            answer: "Cada proyecto es único. Diseñamos soluciones modulares que se adaptan al tamaño y presupuesto de tu negocio. Agenda una consulta gratuita para recibir una cotización personalizada.",
          },
          {
            question: "¿Cuánto tiempo toma crear mi presencia digital?",
            answer: "Un sitio web premium típico se entrega en 2-4 semanas, dependiendo de la complejidad. Landing pages pueden estar listas en menos de una semana.",
          },
          {
            question: "¿Incluyen SEO en el diseño del sitio web?",
            answer: "Sí. Cada sitio incluye optimización SEO técnica: velocidad de carga, estructura semántica, meta tags, schema markup y SEO local para que clientes de tu zona te encuentren en Google.",
          },
          {
            question: "¿Puedo actualizar el contenido de mi sitio web después?",
            answer: "Sí. Construimos sitios con sistemas de gestión de contenido que te permiten actualizar textos, imágenes y productos sin necesidad de conocimientos técnicos.",
          },
        ]}
      />

      {/* Final CTA */}
      <SolutionCTA
        accentColor="emerald"
        title={
          <>
            ¿Listo para modernizar tu{" "}
            <span className="gradient-text">presencia digital?</span>
          </>
        }
        description="Agenda una consulta estratégica gratuita. Analizamos tu situación actual y diseñamos la identidad digital que tu negocio necesita."
        ctaText="Agenda tu consulta estratégica"
      />
    </div>
  );
}
