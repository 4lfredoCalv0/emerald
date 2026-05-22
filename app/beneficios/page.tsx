import { permanentRedirect } from "next/navigation";

// La sección de beneficios ahora vive en el homepage (/#beneficios).
// Esta ruta redirige de forma permanente (308) para evitar contenido duplicado.
export default function Page() {
  permanentRedirect("/#beneficios");
}
