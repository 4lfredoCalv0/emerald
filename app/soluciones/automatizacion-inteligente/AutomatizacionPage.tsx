"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Cog,
  Workflow,
  Database,
  BarChart3,
  Zap,
  Shield,
  ArrowRight,
  GitBranch,
  Clock,
  TrendingUp,
  Layers,
  Settings,
  Link2,
  Activity,
  CheckCircle2,
  XCircle,
  Target,
  Heart,
  Coffee,
  Dumbbell,
  Building2,
  ShoppingCart,
  Briefcase,
  HardHat,
  Sparkles,
  GraduationCap,
  Truck,
} from "lucide-react";
import SolutionHero from "@/components/solutions/SolutionHero";
import TransformationSection from "@/components/solutions/TransformationSection";
import FeatureShowcase from "@/components/solutions/FeatureShowcase";
import NarrativeSection from "@/components/solutions/NarrativeSection";
import ProcessSteps from "@/components/solutions/ProcessSteps";
import IndustryFit from "@/components/solutions/IndustryFit";
import SolutionCTA from "@/components/solutions/SolutionCTA";
import Breadcrumbs from "@/components/Breadcrumbs";
import WorkflowVisual from "@/components/visuals/WorkflowVisual";
import DataFlow from "@/components/visuals/DataFlow";

export default function AutomatizacionPage() {
  return (
    <div className="relative">
      <Breadcrumbs
        items={[
          { label: "Soluciones", href: "/soluciones" },
          { label: "Automatización Inteligente", href: "/soluciones/automatizacion-inteligente" },
        ]}
      />
      {/* Hero Section */}
      <SolutionHero
        icon={Cog}
        badge="Automatización Inteligente"
        title="Tu operación funcionando"
        titleHighlight="en piloto automático"
        description="Conectamos tus herramientas y automatizamos procesos: facturación, inventarios, CRM, marketing, seguimiento de clientes. Tu equipo se enfoca en lo importante, el sistema se encarga del resto."
        ctaText="Automatiza tu operación"
        secondaryCtaText="Conoce todas las soluciones"
        accentColor="purple"
        pattern="flow"
      />

      {/* Narrative: The Infrastructure */}
      <NarrativeSection
        accentColor="purple"
        label="Infraestructura"
        title="Sistemas que operan sin intervención"
        subtitle="No se trata de agregar más herramientas. Se trata de conectar las que ya tienes y automatizar lo que funciona mal."
        items={[
          {
            icon: Workflow,
            label: "Procesos que fluyen solos",
            description:
              "Desde la captura de un lead hasta el seguimiento post-venta. Cada paso se ejecuta automáticamente, sin que nadie tenga que recordar hacerlo.",
          },
          {
            icon: Link2,
            label: "Herramientas conectadas",
            description:
              "Tu facturación habla con tu inventario. Tu CRM se sincroniza con tu WhatsApp. Todo funciona como un solo sistema, no como piezas sueltas.",
          },
          {
            icon: Activity,
            label: "Visibilidad total",
            description:
              "Dashboards en tiempo real con las métricas que importan. Sabes exactamente cómo está tu negocio en cualquier momento, sin esperar reportes.",
          },
        ]}
      />

      {/* Visual: Workflow pipeline */}
      <section className="relative py-16 sm:py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/[0.02] to-transparent" />
        <div className="max-w-5xl mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center order-2 lg:order-1">
              <WorkflowVisual accentColor="purple" />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-xs font-medium text-purple-400 uppercase tracking-widest mb-3">
                Automatización
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-4">
                Tu operación en{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-pink-300">
                  piloto automático
                </span>
              </h2>
              <p className="text-sm text-gray-400 leading-relaxed mb-6">
                Cada proceso fluye automáticamente desde el inicio hasta el resultado.
                Sin intervención manual, sin errores, sin cuellos de botella.
              </p>
              <div className="space-y-3">
                {[
                  "Workflows que se ejecutan solos",
                  "Datos sincronizados entre herramientas",
                  "Alertas y recordatorios automáticos",
                  "Reportes en tiempo real",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    <span className="text-sm text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual: Data flow */}
      <section className="relative py-16 sm:py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/[0.02] to-transparent" />
        <div className="max-w-5xl mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-medium text-purple-400 uppercase tracking-widest mb-3">
                Infraestructura
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-4">
                Datos que fluyen{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-pink-300">
                  sin fricción
                </span>
              </h2>
              <p className="text-sm text-gray-400 leading-relaxed mb-6">
                Tu información viaja entre herramientas de forma automática.
                Sin copiar y pegar, sin errores de transcripción, sin datos perdidos.
              </p>
              <div className="space-y-3">
                {[
                  "Integración con +50 herramientas",
                  "Sincronización en tiempo real",
                  "Respaldo automático de datos",
                  "Seguridad y privacidad garantizada",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    <span className="text-sm text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center">
              <DataFlow accentColor="purple" />
            </div>
          </div>
        </div>
      </section>

      {/* Transformation: Before/After */}
      <TransformationSection
        accentColor="purple"
        title="De caos operativo a sistemas que funcionan solos"
        subtitle="La diferencia entre un negocio que depende de personas y uno que opera con inteligencia."
        before={[
          "Tareas repetitivas que consumen horas cada día",
          "Datos dispersos en múltiples herramientas sin conexión",
          "Errores manuales en facturación, inventarios y seguimientos",
          "Sin visibilidad real del rendimiento del negocio",
          "Procesos que colapsan si una persona no está",
        ]}
        after={[
          "Workflows automatizados que operan sin intervención humana",
          "Todos los datos centralizados en un solo ecosistema",
          "Facturación e inventarios sin errores ni duplicaciones",
          "Dashboards en tiempo real con métricas clave del negocio",
          "Procesos que funcionan independientemente del equipo",
        ]}
      />

      {/* Capabilities */}
      <FeatureShowcase
        accentColor="purple"
        label="Capacidades"
        title="Todo lo que incluye tu sistema de automatización"
        subtitle="Cada módulo se integra con los demás para crear una operación inteligente y sin fricciones."
        features={[
          {
            icon: Workflow,
            title: "Automatización de Workflows",
            description:
              "Procesos que se ejecutan automáticamente: desde la captura del lead hasta el seguimiento post-venta.",
            tag: "Core",
          },
          {
            icon: Database,
            title: "CRM Inteligente",
            description:
              "Gestión de clientes con scoring de leads, recordatorios automáticos y seguimiento personalizado.",
            tag: "Clientes",
          },
          {
            icon: GitBranch,
            title: "Integraciones",
            description:
              "Conexión con facturación, inventarios, redes sociales, pasarelas de pago y más herramientas.",
            tag: "Conexiones",
          },
          {
            icon: BarChart3,
            title: "Dashboards en Tiempo Real",
            description:
              "Métricas clave de tu negocio al instante: ventas, clientes, rendimiento y más.",
            tag: "Analytics",
          },
          {
            icon: Clock,
            title: "Recordatorios Automáticos",
            description:
              "Sistema que nunca olvida: citas, pagos, seguimientos y tareas programadas.",
            tag: "Automatización",
          },
          {
            icon: Shield,
            title: "Seguridad y Respaldo",
            description:
              "Datos protegidos, copias de seguridad automáticas y cumplimiento de privacidad.",
            tag: "Seguridad",
          },
        ]}
      />

      {/* Process: Implementation */}
      <ProcessSteps
        accentColor="purple"
        label="Implementación"
        title="Cómo implementamos tu sistema de automatización"
        subtitle="Un proceso estructurado que garantiza que la automatización se adapte a tu operación, no al revés."
        steps={[
          {
            number: "01",
            icon: Settings,
            title: "Diagnóstico operativo",
            description:
              "Mapeamos tus procesos actuales, identificamos cuellos de botella, tareas repetitivas y oportunidades de automatización. Entendemos tu operación antes de tocar nada.",
          },
          {
            number: "02",
            icon: Layers,
            title: "Diseño del ecosistema",
            description:
              "Diseñamos la arquitectura de automatización: qué herramientas conectar, qué procesos automatizar primero y cómo medir el impacto.",
          },
          {
            number: "03",
            icon: Zap,
            title: "Construcción e integración",
            description:
              "Conectamos tus herramientas, configuramos los workflows y probamos cada proceso antes de activarlo. Sin interrumpir tu operación actual.",
          },
          {
            number: "04",
            icon: TrendingUp,
            title: "Activación y optimización",
            description:
              "Activamos el sistema y monitoreamos su rendimiento. Ajustamos flujos, optimizamos procesos y escalamos lo que funciona.",
          },
        ]}
      />

      {/* Industries */}
      <IndustryFit
        accentColor="purple"
        title="Diseñado para tu tipo de negocio"
        subtitle="Cualquier negocio con procesos repetitivos puede automatizar su operación y liberar tiempo para lo que importa."
        industries={[
          { name: "Clínicas y consultorios", icon: Heart },
          { name: "Restaurantes", icon: Coffee },
          { name: "Gimnasios y spas", icon: Dumbbell },
          { name: "Inmobiliarias", icon: Building2 },
          { name: "Tiendas y e-commerce", icon: ShoppingCart },
          { name: "Estudios profesionales", icon: Briefcase },
          { name: "Constructoras", icon: HardHat },
          { name: "Servicios de belleza", icon: Sparkles },
          { name: "Educación y cursos", icon: GraduationCap },
          { name: "Distribuidoras", icon: Truck },
        ]}
      />

      {/* Final CTA */}
      <SolutionCTA
        accentColor="purple"
        title={
          <>
            ¿Listo para automatizar tu{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-pink-300">
              operación?
            </span>
          </>
        }
        description="Agenda una consulta estratégica gratuita. Analizamos tus procesos actuales y diseñamos el sistema de automatización que tu negocio necesita."
        ctaText="Agenda tu consulta estratégica"
      />
    </div>
  );
}
