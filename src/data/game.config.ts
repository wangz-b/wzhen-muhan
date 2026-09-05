import type { GameConfig } from "@/types/site";

export const gameConfig: GameConfig = {
  name: "PokeMMO BW2",
  slug: "pokemmo-bw2",
  domain: "https://patrouski.shop",
  theme: {
    primaryColor: "#22D3EE",
    accentColor: "#38BDF8",
    surfaceColor: "#08111F",
    style: "expedition-signal-desk"
  },
  currency: {
    name: "Pokéyen",
    abbr: "¥"
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
    officialGameUrl: "https://pokemmo.com/en/",
    discord: "https://support.pokemmo.com/"
  },
  ads: {
    publisher: "Adsterra",
    usesRuntimeConfig: true
  }
};
