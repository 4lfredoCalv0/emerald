"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  MessageSquare,
  Bot,
  Calendar,
  Users,
  Zap,
  TrendingUp,
  ArrowRight,
  Smartphone,
  BrainCircuit,
  Clock,
  BarChart3,
  MessageCircle,
  Filter,
  Repeat,
  Shield,
  CheckCircle2,
  XCircle,
  Send,
  Target,
  Heart,
  Coffee,
  Dumbbell,
  Building2,
  ShoppingCart,
  Briefcase,
  Sparkles,
  GraduationCap,
  HardHat,
  Plane,
} from "lucide-react";
import SolutionHero from "@/components/solutions/SolutionHero";
import TransformationSection from "@/components/solutions/TransformationSection";
import FeatureShowcase from "@/components/solutions/FeatureShowcase";
import NarrativeSection from "@/components/solutions/NarrativeSection";
import ProcessSteps from "@/components/solutions/ProcessSteps";
import IndustryFit from "@/components/solutions/IndustryFit";
import SolutionCTA from "@/components/solutions/SolutionCTA";
import { CommunicationFlow, WorkflowVisual } from "@/components/visuals";

export default function ChatbotsPage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <SolutionHero
        icon={MessageSquare}
        badge="Chatbots y WhatsApp IA"
        title="Cada mensaje es una"
        titleHighlight="oportunidad de venta"
        description="Sistemas inteligentes que atienden clientes, califican leads y agendan citas al instante por WhatsApp y web. Tu negocio responde siempre — sin esperas, sin pérdidas, sin horarios."
        ctaText="Automatiza tu comunicación"
        secondaryCtaText="Conoce todas las soluciones"
        accentColor="blue"
        pattern="flow"
      />

      {/* Narrative: How the System Works */}
      <NarrativeSection
        accentColor="blue"
        label="El sistema"
        title="Comunicación inteligente que trabaja por ti"
        subtitle="No es un chatbot genérico. Es un sistema de atención diseñado para convertir conversaciones en clientes."
        items={[
          {
            icon: MessageCircle,
            label: "Responde al instante",
            description:
              "Cada mensaje recibe respuesta inmediata, sin importar la hora. Tu cliente siente que tu negocio está siempre disponible — porque lo está.",
          },
          {
            icon: Filter,
            label: "Califica automáticamente",
            description:
              "El sistema identifica qué necesita cada persona, filtra consultas rutinarias y prioriza las oportunidades reales de venta para tu equipo.",
          },
          {
            icon: Repeat,
            label: "Convierte sin intervención",
            description:
              "Desde la primera consulta hasta la cita agendada o la venta concretada. Todo fluye automáticamente, sin que tengas que estar presente.",
          },
        ]}
      />

      {/* Visual: Communication flow showing WhatsApp chat */}
      <section className="relative py-16 sm:py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/[0.02] to-transparent" />
        <div className="max-w-5xl mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-medium text-blue-400 uppercase tracking-widest mb-3">
                En acción
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-4">
                Conversaciones que{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-cyan-300">
                  convierten
                </span>
              </h2>
              <p className="text-sm text-gray-400 leading-relaxed mb-6">
                Cada interacción está diseñada para guiar al cliente hacia el siguiente paso.
                Sin fricción, sin esperas, sin perder oportunidades.
              </p>
              <div className="space-y-3">
                {[
                  "Respuesta inmediata 24/7",
                  "Calificación automática de leads",
                  "Agenda de citas integrada",
                  "Seguimiento inteligente",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    <span className="text-sm text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center">
              <CommunicationFlow accentColor="blue" />
            </div>
          </div>
        </div>
      </section>

      {/* Transformation: Before/After */}
      <TransformationSection
        accentColor="blue"
        title="De comunicación caótica a atención que nunca duerme"
        subtitle="La diferencia entre perder clientes por no responder y convertir cada mensaje en una oportunidad."
        before={[
          "Mensajes sin responder por horas o días",
          "Clientes potenciales que se van a la competencia",
          "Agenda de citas manual con errores constantes",
          "Preguntas repetitivas que consumen tiempo del equipo",
          "Sin seguimiento de leads después del primer contacto",
        ]}
        after={[
          "Respuestas instantáneas 24/7 por WhatsApp y web",
          "Cada lead capturado, calificado y asignado automáticamente",
          "Agenda integrada sin conflictos ni errores humanos",
          "Chatbot resuelve preguntas frecuentes sin intervención",
          "Seguimiento inteligente de cada cliente potencial",
        ]}
      />

      {/* System Flow: How Messages Flow */}
      <FeatureShowcase
        accentColor="blue"
        label="Arquitectura"
        title="Cómo funciona el sistema de comunicación"
        subtitle="Cada componente trabaja en conjunto para crear un flujo de atención inteligente y sin interrupciones."
        features={[
          {
            icon: Smartphone,
            title: "WhatsApp Automatizado",
            description:
              "Chatbot inteligente que responde, califica y agenda sin intervención humana. Tu negocio habla por ti.",
            tag: "WhatsApp",
          },
          {
            icon: Bot,
            title: "Agente IA Web",
            description:
              "Asistente virtual en tu sitio web que guía visitantes y convierte consultas en acciones concretas.",
            tag: "Web",
          },
          {
            icon: Calendar,
            title: "Agenda Inteligente",
            description:
              "Sistema de reservas automático integrado con tu calendario, recordatorios y confirmaciones.",
            tag: "Agenda",
          },
          {
            icon: BrainCircuit,
            title: "Respuestas Contextuales",
            description:
              "IA que entiende el contexto de cada conversación y responde de forma natural y personalizada.",
            tag: "IA",
          },
          {
            icon: Users,
            title: "Calificación de Leads",
            description:
              "Cada consulta se evalúa automáticamente para priorizar las oportunidades más valiosas.",
            tag: "Leads",
          },
          {
            icon: BarChart3,
            title: "Métricas en Tiempo Real",
            description:
              "Dashboard con datos de conversaciones, conversiones y rendimiento del sistema completo.",
            tag: "Analytics",
          },
        ]}
      />

      {/* Process: Implementation */}
      <ProcessSteps
        accentColor="blue"
        label="Implementación"
        title="Cómo implementamos tu sistema de chatbots"
        subtitle="Un proceso claro que garantiza que el sistema se adapte a tu negocio, no al revés."
        steps={[
          {
            number: "01",
            icon: Target,
            title: "Mapeo de conversaciones",
            description:
              "Analizamos las preguntas frecuentes, el flujo de atención actual y los puntos donde pierdes clientes. Diseñamos el sistema basado en datos reales.",
          },
          {
            number: "02",
            icon: BrainCircuit,
            title: "Configuración del agente",
            description:
              "Programamos el chatbot con las respuestas, flujos y reglas de tu negocio. Cada conversación está diseñada para guiar al cliente hacia el siguiente paso.",
          },
          {
            number: "03",
            icon: Zap,
            title: "Integración y pruebas",
            description:
              "Conectamos WhatsApp, tu sitio web y las herramientas que ya usas. Probamos cada escenario antes de lanzar.",
          },
          {
            number: "04",
            icon: TrendingUp,
            title: "Lanzamiento y optimización",
            description:
              "Activamos el sistema y monitoreamos las conversaciones. Ajustamos respuestas y flujos según el comportamiento real de tus clientes.",
          },
        ]}
      />

      {/* Industries */}
      <IndustryFit
        accentColor="blue"
        title="Perfecto para tu tipo de negocio"
        subtitle="Cualquier negocio que recibe consultas puede automatizar su atención y convertir más."
        industries={[
          { name: "Clínicas y consultorios", icon: Heart },
          { name: "Restaurantes y delivery", icon: Coffee },
          { name: "Gimnasios y spas", icon: Dumbbell },
          { name: "Inmobiliarias", icon: Building2 },
          { name: "Tiendas y e-commerce", icon: ShoppingCart },
          { name: "Estudios profesionales", icon: Briefcase },
          { name: "Servicios de belleza", icon: Sparkles },
          { name: "Educación y cursos", icon: GraduationCap },
          { name: "Constructoras", icon: HardHat },
          { name: "Agencias de viajes", icon: Plane },
        ]}
      />

      {/* Final CTA */}
      <SolutionCTA
        accentColor="blue"
        title={
          <>
            ¿Listo para que tu negocio{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-cyan-300">
              responda siempre?
            </span>
          </>
        }
        description="Agenda una consulta estratégica gratuita. Te mostramos cómo funciona el sistema y cómo se adapta a tu negocio."
        ctaText="Agenda tu consulta estratégica"
      />
    </div>
  );
}
