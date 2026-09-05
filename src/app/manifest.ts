import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "BW2 Signal — PokeMMO B2/W2 Preview Tracker",
    short_name: "BW2 Signal",
    description: "Independent PokeMMO B2/W2 preview countdown, feature tracker, and safe preparation hub.",
    start_url: "/",
    display: "standalone",
    background_color: "#0d1108",
    theme_color: "#11160a",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png"
      },
      {
        src: "/app-icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any"
      }
    ]
  };
}
