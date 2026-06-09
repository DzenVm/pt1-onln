import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Imagem Open Graph gerada localmente (sem CDN nem fontes externas).
export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "70px",
          background:
            "radial-gradient(900px 500px at 80% -10%, rgba(201,164,76,0.28), transparent 60%), #07060b",
          color: "#eae8e4",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <div
            style={{
              width: "72px",
              height: "72px",
              borderRadius: "50%",
              background: "linear-gradient(135deg,#e0c878,#c9a44c)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "6px solid #123a2c",
            }}
          >
            <div
              style={{
                width: "26px",
                height: "26px",
                background: "#123a2c",
                transform: "rotate(45deg)",
              }}
            />
          </div>
          <div
            style={{
              fontSize: "30px",
              letterSpacing: "8px",
              textTransform: "uppercase",
              color: "#2d9f78",
              fontWeight: 700,
            }}
          >
            {site.name}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: "76px",
              fontWeight: 800,
              lineHeight: 1.05,
              color: "#e0c878",
            }}
          >
            Casinos online em Portugal
          </div>
          <div
            style={{
              marginTop: "24px",
              fontSize: "34px",
              color: "#9895a6",
              maxWidth: "900px",
            }}
          >
            Guia independente: licenças SRIJ, bónus e jogo responsável.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            fontSize: "28px",
            color: "#c9a44c",
            fontWeight: 700,
          }}
        >
          <span>18+</span>
          <span style={{ color: "#5d5a6a" }}>|</span>
          <span>Jogue com responsabilidade</span>
          <span style={{ color: "#5d5a6a" }}>|</span>
          <span>{site.domain}</span>
        </div>
      </div>
    ),
    size
  );
}
