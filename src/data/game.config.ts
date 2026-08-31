import type { GameConfig } from "@/types/site";

export const gameConfig: GameConfig = {
  name: "Brookhaven RP",
  slug: "brookhaven-rp",
  domain: "https://brookhavenaqaa.org",
  theme: {
    primaryColor: "#FACC15",
    accentColor: "#38BDF8",
    surfaceColor: "#111113",
    style: "roblox-seo-hub"
  },
  currency: {
    name: "Coins",
    abbr: "COINS"
  },
  features: {
    hasCalculator: true,
    hasTierList: true,
    hasCodesPage: true,
    hasBrainrotIndex: false,
    hasHandbook: true
  },
  updateCadence: "Weekly checks",
  dataSources: {
    officialGameUrl: "https://www.roblox.com/discover",
    discord: "#",
    trello: "#"
  },
  ads: {
    publisher: "Adsterra",
    usesRuntimeConfig: true
  }
};
