import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#030712",
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(16, 185, 129, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(5, 150, 105, 0.1) 0%, transparent 50%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 80,
            height: 80,
            borderRadius: 20,
            backgroundColor: "#10b981",
            marginBottom: 32,
          }}
        >
          <span style={{ fontSize: 48, fontWeight: 800, color: "#030712" }}>E</span>
        </div>
        <div
          style={{
            fontSize: 56,
            fontWeight: 800,
            color: "#f9fafb",
            letterSpacing: "-0.02em",
            marginBottom: 16,
          }}
        >
          Emerald
        </div>
        <div
          style={{
            fontSize: 28,
            fontWeight: 500,
            color: "#10b981",
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            marginBottom: 32,
          }}
        >
          Modernización Empresarial con IA
        </div>
        <div
          style={{
            fontSize: 22,
            fontWeight: 400,
            color: "#9ca3af",
            textAlign: "center",
            maxWidth: 700,
            lineHeight: 1.5,
          }}
        >
          Transformamos negocios tradicionales en empresas modernas e inteligentes
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
