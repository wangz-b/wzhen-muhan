import { ImageResponse } from "next/og";

export const openGraphSize = { width: 1200, height: 630 };

export function routeOpenGraphImage(eyebrow: string, title: string, description: string) {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-end", background: "linear-gradient(135deg, #06131d 0%, #0b2633 55%, #071017 100%)", color: "white", padding: 72 }}>
      <div style={{ fontSize: 30, color: "#67e8f9", fontWeight: 800 }}>{eyebrow}</div>
      <div style={{ marginTop: 22, fontSize: 72, lineHeight: 1.04, fontWeight: 900 }}>{title}</div>
      <div style={{ marginTop: 26, maxWidth: 980, fontSize: 29, lineHeight: 1.35, color: "rgba(255,255,255,0.74)" }}>{description}</div>
      <div style={{ marginTop: 30, fontSize: 22, color: "rgba(255,255,255,0.5)" }}>BW2 Signal · independent fan resource</div>
    </div>,
    openGraphSize
  );
}
