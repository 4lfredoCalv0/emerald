import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Términos y Condiciones | Emerald",
  description:
    "Términos y condiciones de uso de los servicios de modernización empresarial de Emerald.",
};

const sections = [
  {
    title: "1. Aceptación de los Términos",
    content:
      "Al acceder y utilizar los servicios de Emerald (en adelante, \"la Empresa\", \"nosotros\" o \"nuestro\"), usted acepta estar sujeto a los presentes Términos y Condiciones. Si no está de acuerdo con alguna parte de estos términos, no podrá acceder a nuestros servicios. Emerald se reserva el derecho de modificar estos términos en cualquier momento, notificando los cambios a través de nuestros canales oficiales.",
  },
  {
    title: "2. Definiciones",
    items: [
      ["Servicios", "Conjunto de soluciones de modernización empresarial ofrecidas por Emerald, incluyendo desarrollo de presencia digital premium, implementación de chatbots y sistemas de automatización inteligente."],
      ["Cliente", "Persona natural o jurídica que contrata los servicios de Emerald para la modernización de su negocio."],
      ["Plataforma", "Infraestructura tecnológica, sistemas, dashboards y herramientas proporcionadas por Emerald como parte de sus servicios."],
      ["Contenido", "Todo material, diseño, código, documentación y activos digitales creados por Emerald para el Cliente."],
    ],
    content: "",
  },
  {
    title: "3. Servicios",
    content:
      "Emerald ofrece servicios de modernización empresarial que incluyen, de forma enunciativa mas no limitativa: diseño y desarrollo de sitios web premium, implementación de chatbots con inteligencia artificial para WhatsApp y web, automatización de procesos operativos, integración de herramientas de negocio, consultoría estratégica y servicios de transformación digital. El alcance específico de cada servicio será detallado en la propuesta o contrato firmado entre Emerald y el Cliente.",
  },
  {
    title: "4. Obligaciones del Cliente",
    items: [
      ["Información", "Proporcionar información veraz, completa y actualizada necesaria para la ejecución de los servicios."],
      ["Acceso", "Facilitar el acceso necesario a sistemas, plataformas y herramientas existentes que requieran integración."],
      ["Aprobaciones", "Revisar y aprobar los entregables en los plazos acordados para evitar retrasos en el cronograma."],
      ["Uso adecuado", "Utilizar los sistemas y plataformas proporcionados por Emerald de acuerdo con su propósito diseñado."],
    ],
    content: "",
  },
  {
    title: "5. Propiedad Intelectual",
    content:
      "Una vez completado el pago total de los servicios contratados, Emerald transfiere al Cliente los derechos de propiedad intelectual sobre los activos digitales creados específicamente para su negocio, incluyendo diseño web, código personalizado y contenido gráfico. Emerald conserva el derecho de utilizar el trabajo realizado como parte de su portafolio profesional, salvo acuerdo de confidencialidad explícito. Las librerías, frameworks y herramientas de terceros utilizadas en el desarrollo mantienen sus licencias originales.",
  },
  {
    title: "6. Pagos y Facturación",
    content:
      "Los precios de los servicios se establecen en la propuesta comercial firmada por ambas partes. Los pagos se realizarán según el cronograma acordado: generalmente un anticipo del 50% al inicio del proyecto y el saldo restante contra entrega de los servicios. El Cliente recibirá factura electrónica válida por cada pago realizado. Pagos atrasados podrán generar la suspensión temporal de los servicios hasta que se regularice la situación.",
  },
  {
    title: "7. Confidencialidad",
    content:
      "Emerald se compromete a mantener la confidencialidad de toda la información del Cliente a la que tenga acceso durante la prestación de los servicios. Esta información incluye, pero no se limita a: datos financieros, estrategias de negocio, información de clientes, procesos operativos y cualquier dato que el Cliente designe como confidencial. Esta obligación de confidencialidad se mantiene vigente incluso después de finalizada la relación comercial.",
  },
  {
    title: "8. Limitación de Responsabilidad",
    content:
      "Emerald no será responsable por daños indirectos, incidentales o consecuentes derivados del uso o la imposibilidad de uso de los servicios prestados. Nuestra responsabilidad máxima se limita al monto total pagado por el Cliente por el servicio específico que originó la reclamación. Emerald no garantiza que los servicios sean ininterrumpidos o libres de errores, pero nos comprometemos a realizar los mejores esfuerzos para resolver cualquier incidencia en el menor tiempo posible.",
  },
  {
    title: "9. Cancelación y Terminación",
    content:
      "Cualquiera de las partes puede terminar el acuerdo con un aviso previo de 15 días calendario. En caso de cancelación por parte del Cliente, los pagos realizados por trabajo ya ejecutado no serán reembolsables. Los servicios que hayan sido entregados y aceptados permanecen en funcionamiento según lo acordado. Emerald se reserva el derecho de terminar el servicio de forma inmediata si el Cliente incumple sus obligaciones de pago o uso indebido de las plataformas.",
  },
  {
    title: "10. Soporte y Mantenimiento",
    content:
      "Emerald proporciona soporte técnico durante el horario laboral establecido (lunes a viernes, 8:00 a.m. a 6:00 p.m., hora de Colombia) a través de los canales de comunicación acordados. Los planes de mantenimiento y soporte continuo después de la entrega del proyecto se acuerdan por separado e incluyen actualizaciones de seguridad, corrección de errores y soporte técnico prioritario.",
  },
  {
    title: "11. Ley Aplicable",
    content:
      "Estos Términos y Condiciones se rigen por las leyes de la República de Colombia. Cualquier disputa relacionada con estos términos será sometida a la jurisdicción de los tribunales de Barranquilla, Colombia, renunciando las partes a cualquier otro fuero que pudiera corresponderles.",
  },
  {
    title: "12. Contacto",
    content:
      "Para cualquier consulta sobre estos Términos y Condiciones, puede contactarnos a través de los siguientes canales:",
    contact: true,
  },
];

export default function TerminosCondicionesPage() {
  return (
    <div className="relative pt-32 pb-24 sm:pb-32 px-4">
      <div className="max-w-3xl mx-auto relative">
        <div className="text-center mb-16">
          <p className="text-xs font-medium text-emerald-400 uppercase tracking-widest mb-4">
            Legal
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Términos y{" "}
            <span className="gradient-text">Condiciones</span>
          </h1>
        </div>

        <div className="space-y-10">
          {sections.map((section, i) => (
            <div
              key={i}
              className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06]"
            >
              <h2 className="text-base sm:text-lg font-semibold text-white mb-4">
                {section.title}
              </h2>

              {section.content && (
                <p className="text-sm text-gray-400 leading-relaxed">
                  {section.content}
                </p>
              )}

              {section.items && section.items.length > 0 && (
                <div className="space-y-4 mt-2">
                  {section.items.map((item, j) => (
                    <div key={j}>
                      <h3 className="text-sm font-medium text-emerald-300 mb-1">
                        {item[0]}
                      </h3>
                      <p className="text-sm text-gray-400 leading-relaxed">
                        {item[1]}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {section.contact && (
                <div className="mt-4 p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/10">
                  <p className="text-sm text-gray-300">
                    <strong className="text-emerald-300">Email:</strong>{" "}
                    contactoemerald@proton.me
                  </p>
                  <p className="text-sm text-gray-300 mt-1">
                    <strong className="text-emerald-300">Dirección:</strong>{" "}
                    Barranquilla, Colombia
                  </p>
                  <p className="text-sm text-gray-300 mt-1">
                    <strong className="text-emerald-300">Horario:</strong>{" "}
                    Lun — Vie, 8:00 a.m. — 6:00 p.m.
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-xs text-gray-600">
            Al utilizar nuestros servicios, usted acepta estos Términos y Condiciones.
          </p>
        </div>
      </div>
    </div>
  );
}
