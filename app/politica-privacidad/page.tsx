import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Política de Privacidad | Emerald",
  description:
    "Política de privacidad de Emerald. Conoce cómo recopilamos, usamos y protegemos tu información personal.",
};

const sections = [
  {
    title: "1. Responsable del Tratamiento",
    content:
      "Emerald (en adelante, \"la Empresa\", \"nosotros\" o \"nuestro\"), con domicilio en Barranquilla, Colombia, es el responsable del tratamiento de los datos personales recopilados a través de nuestros servicios, sitio web y canales de comunicación. El tratamiento de datos se realiza en cumplimiento de la Ley 1581 de 2012 y sus decretos reglamentarios.",
  },
  {
    title: "2. Datos que Recopilamos",
    content:
      "Podemos recopilar la siguiente información personal cuando usted interactúa con nuestros servicios:",
    items: [
      ["Información de contacto", "Nombre completo, correo electrónico, número de teléfono y empresa a la que pertenece."],
      ["Datos de navegación", "Dirección IP, tipo de navegador, páginas visitadas, tiempo de permanencia y patrones de navegación en nuestro sitio web."],
      ["Información de comunicación", "Historial de conversaciones, consultas realizadas a través de nuestros formularios, chatbots y canales de atención."],
      ["Datos contractuales", "Información necesaria para la facturación, ejecución de servicios y cumplimiento de obligaciones legales."],
    ],
  },
  {
    title: "3. Finalidad del Tratamiento",
    content:
      "Sus datos personales serán tratados con las siguientes finalidades:",
    items: [
      ["Prestación de servicios", "Ejecutar los servicios contratados, incluyendo desarrollo, implementación, soporte y mantenimiento de sistemas."],
      ["Comunicación", "Responder a sus consultas, enviar información sobre nuestros servicios y mantener comunicación durante la relación comercial."],
      ["Mejora continua", "Analizar el uso de nuestros servicios para mejorar la experiencia, optimizar procesos y desarrollar nuevas soluciones."],
      ["Cumplimiento legal", "Cumplir con obligaciones fiscales, contables y regulatorias aplicables en Colombia."],
    ],
  },
  {
    title: "4. Base Legal del Tratamiento",
    content:
      "El tratamiento de sus datos personales se fundamenta en: (i) su consentimiento expreso al aceptar esta política; (ii) la ejecución de un contrato de servicios; (iii) el cumplimiento de obligaciones legales aplicables; y (iv) nuestro interés legítimo en mejorar nuestros servicios, siempre que sus derechos e intereses como titular no prevalezcan sobre dicho interés.",
  },
  {
    title: "5. Almacenamiento y Seguridad",
    content:
      "Implementamos medidas de seguridad técnicas, administrativas y físicas para proteger sus datos personales contra acceso no autorizado, pérdida, alteración o divulgación. Estas medidas incluyen cifrado de datos, controles de acceso, firewalls y protocolos de seguridad informática. Sus datos se almacenan en servidores seguros, y el tiempo de conservación corresponde al necesario para cumplir con las finalidades descritas y las obligaciones legales aplicables.",
  },
  {
    title: "6. Derechos del Titular",
    content:
      "De acuerdo con la legislación colombiana, usted tiene los siguientes derechos sobre sus datos personales:",
    items: [
      ["Acceso", "Conocer qué datos personales tenemos y cómo los estamos tratando."],
      ["Actualización", "Solicitar la actualización o corrección de datos inexactos o incompletos."],
      ["Supresión", "Solicitar la eliminación de sus datos cuando no sean necesarios para las finalidades descritas."],
      ["Revocación", "Revocar su consentimiento para el tratamiento de datos en cualquier momento."],
      ["Oposición", "Oponerse al tratamiento de sus datos para fines específicos."],
    ],
  },
  {
    title: "7. Uso de Cookies",
    content:
      "Nuestro sitio web utiliza cookies y tecnologías similares para mejorar su experiencia de navegación, analizar el tráfico y personalizar contenido. Las cookies que utilizamos pueden ser: (i) cookies esenciales, necesarias para el funcionamiento del sitio; (ii) cookies analíticas, para entender cómo se utiliza el sitio; y (iii) cookies funcionales, para recordar sus preferencias. Usted puede configurar su navegador para rechazar todas las cookies, aunque esto podría afectar la funcionalidad del sitio.",
  },
  {
    title: "8. Transferencia de Datos",
    content:
      "Emerald no vende, alquila ni comparte datos personales con terceros no relacionados, excepto en los siguientes casos: (i) cuando sea necesario para la prestación de los servicios contratados (por ejemplo, proveedores de hosting, herramientas de análisis); (ii) cuando exista una obligación legal o requerimiento de autoridad competente; y (iii) cuando el titular haya otorgado su consentimiento explícito. En todos los casos, exigimos a los terceros el cumplimiento de estándares de protección de datos equivalentes a los nuestros.",
  },
  {
    title: "9. Cambios a esta Política",
    content:
      "Emerald se reserva el derecho de actualizar esta Política de Privacidad en cualquier momento. Los cambios serán publicados en esta página con la fecha de actualización correspondiente. Recomendamos revisar periódicamente esta política para estar informado sobre cómo protegemos su información. El uso continuado de nuestros servicios después de cualquier cambio constituye la aceptación de la política actualizada.",
  },
  {
    title: "10. Ejercicio de Derechos",
    content:
      "Para ejercer sus derechos de acceso, actualización, supresión, revocación u oposición, puede contactarnos a través de los siguientes canales. Responderemos a su solicitud en un plazo máximo de 15 días hábiles, de acuerdo con lo establecido por la ley colombiana.",
    contact: true,
  },
];

export default function PoliticaPrivacidadPage() {
  return (
    <div className="relative pt-32 pb-24 sm:pb-32 px-4">
      <div className="max-w-3xl mx-auto relative">
        <div className="text-center mb-16">
          <p className="text-xs font-medium text-emerald-400 uppercase tracking-widest mb-4">
            Legal
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Política de{" "}
            <span className="gradient-text">Privacidad</span>
          </h1>
        </div>

        <div className="mb-12 p-4 sm:p-6 rounded-xl bg-emerald-500/5 border border-emerald-500/10">
          <p className="text-sm text-gray-300 leading-relaxed">
            En Emerald, valoramos tu privacidad y estamos comprometidos con la protección de
            tus datos personales. Esta política describe cómo recopilamos, usamos y protegemos
            tu información cuando utilizas nuestros servicios.
          </p>
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
                <div className="space-y-4 mt-3">
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
                    <strong className="text-emerald-300">Tiempo de respuesta:</strong>{" "}
                    Máximo 15 días hábiles
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-xs text-gray-600">
            Al utilizar nuestros servicios, usted acepta esta Política de Privacidad.
          </p>
        </div>
      </div>
    </div>
  );
}
