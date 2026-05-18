import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Emerald — Modernización Empresarial con IA";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#030712",
          backgroundImage:
            "radial-gradient(circle at 25% 25%, rgba(16, 185, 129, 0.15) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(16, 185, 129, 0.08) 0%, transparent 50%)",
          fontFamily: "Inter, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "linear-gradient(90deg, transparent, #10b981, transparent)",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "48px",
          }}
        >
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "12px",
              background: "linear-gradient(135deg, #10b981, #059669)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "24px",
              fontWeight: "bold",
              color: "white",
            }}
          >
            E
          </div>
          <span style={{ fontSize: "28px", fontWeight: "600", color: "#e5e7eb" }}>Emerald</span>
        </div>

        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "8px 20px",
            borderRadius: "9999px",
            backgroundColor: "rgba(16, 185, 129, 0.1)",
            border: "1px solid rgba(16, 185, 129, 0.2)",
            color: "#6ee7b7",
            fontSize: "20px",
            fontWeight: "500",
            marginBottom: "32px",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
          }}
        >
          Modernización Empresarial
        </div>

        <div
          style={{
            fontSize: "56px",
            fontWeight: "700",
            color: "white",
            lineHeight: "1.1",
            marginBottom: "24px",
            maxWidth: "900px",
          }}
        >
          De la operación manual a la excelencia digital
        </div>

        <div
          style={{
            fontSize: "28px",
            color: "#9ca3af",
            lineHeight: "1.5",
            maxWidth: "800px",
          }}
        >
          Automatiza ventas, atención al cliente y operaciones con sistemas inteligentes.
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            right: "0",
            height: "4px",
            background: "linear-gradient(90deg, transparent, #10b981, transparent)",
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
