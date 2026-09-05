import type { EditorialSignal, FaqItem, HeroMetric, LinkCard, SiteConfig, TierPreviewItem } from "@/types/site";

export const siteConfig: SiteConfig = {
  name: "BW2 Signal",
  domain: "https://patrouski.shop",
  gameName: "PokeMMO BW2",
  description: "An independent PokeMMO B2/W2 preview countdown, feature tracker, safe setup guide and source-checked status hub.",
  valueProposition: "Track the September 19 preview, separate confirmed facts from reports, and prepare without guessing.",
  shortDisclosure: "BW2 Signal is an independent fan resource. It is not affiliated with or endorsed by PokeMMO, Nintendo, The Pokémon Company, Pokémon, or Patrouski.",
  lastUpdated: "2026-09-05",
  freshnessLabel: "preview status checked against official PokeMMO pages",
  keywords: ["PokeMMO BW2", "PokeMMO B2/W2 preview", "PokeMMO BW2 release date", "PokeMMO BW2 features", "PokeMMO BW2 download", "PokeMMO BW2 tier list", "PokeMMO BW2 Trello"],
  navGroups: [
    {label:"Preview",href:"/preview",items:[{label:"Preview guide",href:"/preview",description:"Date, access status and open questions."},{label:"Countdown",href:"/calculator",description:"Live date countdown and evidence filters."},{label:"Safe setup",href:"/download",description:"Official client and requirement status."}]},
    {label:"Feature Tracker",href:"/features",items:[{label:"All features",href:"/features",description:"Confirmed, reported and unknown claims."},{label:"Side content",href:"/features/side-content",description:"PWT, Pokéstar, Join Avenue and challenge areas."},{label:"Updates",href:"/updates",description:"Dated announcement and status changes."}]},
    {label:"Tracker",href:"/calculator",items:[{label:"Countdown and filters",href:"/calculator",description:"The primary interactive tool."},{label:"Evidence index",href:"/wiki",description:"Browse tracked topic status."},{label:"Sources",href:"/sources",description:"Check source precedence and dates."}]},
    {label:"Tier List",href:"/tier-list",items:[{label:"Tier evidence",href:"/tier-list",description:"Role criteria without fabricated ranks."},{label:"Guides",href:"/guides",description:"Source-ready preparation help."},{label:"Feature evidence",href:"/features",description:"Check implementation before planning."}]},
    { label: "Guides", href: "/guides", items:[{label:"Guide hub",href:"/guides",description:"Available and held guide status."},{label:"Preview preparation",href:"/guides/preview-preparation",description:"Six safe steps before September 19."},{label:"Official links",href:"/trello",description:"Forum, support, Trello and wiki status."}]},
    {label:"More",href:"/trello",items:[{label:"Official links",href:"/trello",description:"Trello, Discord and wiki status."},{label:"Codes status",href:"/codes",description:"No fabricated code list."},{label:"Wiki index",href:"/wiki",description:"Evidence-aware topics."},{label:"Updates",href:"/updates",description:"Dated changes."},{label:"Sources",href:"/sources",description:"Full source ledger."},{label:"About",href:"/about",description:"Ownership and corrections."},{label:"Contact",href:"/contact",description:"Corrections, rights and privacy questions."},{label:"Privacy",href:"/privacy",description:"Analytics, advertising and privacy controls."},{label:"Terms",href:"/terms",description:"Informational-use terms."},{label:"Disclosure",href:"/disclosure",description:"Independent fan-site and advertising disclosure."}]}
  ]
};

export const heroActions=[{href:"/preview",label:"Preview guide"},{href:"/calculator",label:"Open live tracker"},{href:"/features",label:"Check features"},{href:"/trello",label:"Official links"}] as const;
export const heroMetrics:HeroMetric[]=[
  {label:"Preview date",value:"Sep 19",note:"Official date; exact start time pending"},
  {label:"Final release",value:"Not announced",note:"Preview is not the launch date"},
  {label:"Feature states",value:"3 levels",note:"Confirmed, reported, not confirmed"},
  {label:"Last official check",value:"Sep 5",note:"Every volatile answer keeps a date"}
];
export const toolCards:LinkCard[]=[
  {title:"Preview countdown",href:"/calculator",eyebrow:"Interactive",description:"See time remaining to the announced date and the safe current phase."},
  {title:"Feature evidence explorer",href:"/calculator",eyebrow:"Filter",description:"Search feature claims and filter by confirmed, reported or unknown."},
  {title:"Full feature tracker",href:"/features",eyebrow:"Status",description:"Read every source-labelled record and its checked date."}
];
export const guideClusters:LinkCard[]=[
  {title:"Preview preparation",href:"/guides/preview-preparation",eyebrow:"Available",description:"Six safe preparation steps, common mistakes and testing notes."},
  {title:"Safe download help",href:"/download",eyebrow:"Available",description:"Official client links and the current ROM-requirement answer."},
  {title:"Story and cap guides",href:"/guides",eyebrow:"Waiting for preview",description:"See why exact story, Gym and level-cap routes are held."}
];
export const wikiCards:LinkCard[]=[
  {title:"Release and access",href:"/preview",eyebrow:"Evidence index",description:"Announcement, date, access and progress-persistence status."},
  {title:"Side-content status",href:"/features/side-content",eyebrow:"Evidence index",description:"PWT, Pokéstar, Join Avenue and challenge-area answers."},
  {title:"Held exact data",href:"/wiki",eyebrow:"Data gaps",description:"Locations, caps and routes that still need direct preview evidence."}
];
export const updateCards:LinkCard[]=[
  {title:"B2/W2 announced",href:"/updates",eyebrow:"August 19, 2026",description:"Official PokeMMO announcement added to the release timeline."},
  {title:"Preview weekend scheduled",href:"/preview",eyebrow:"September 19, 2026",description:"Official event date; exact hours and access details remain open."},
  {title:"What to watch next",href:"/features",eyebrow:"Before preview",description:"Access details, persistence, side content, encounters and caps."}
];
export const officialLinks:LinkCard[]=[
  {title:"PokeMMO homepage",href:"https://pokemmo.com/en/",eyebrow:"Official",description:"Announcement and preview milestone."},
  {title:"PokeMMO forum",href:"https://forums.pokemmo.com/",eyebrow:"Official",description:"Announcements and community discussions."},
  {title:"PokeMMO support",href:"https://support.pokemmo.com/",eyebrow:"Official",description:"Client, account and support guidance."}
];
export const editorialSignals:EditorialSignal[]=[
  {title:"Official facts lead",body:"Official PokeMMO pages outrank community reports for dates, access and implementation."},
  {title:"Cartridge facts stay separate",body:"A feature in Black 2 or White 2 is not automatically a feature in PokeMMO."},
  {title:"Unknown stays visible",body:"We publish useful not-confirmed answers instead of filling gaps with guesses."}
];
export const videoGuides:LinkCard[]=[
  {title:"PokeMMO Unova Storyline Guide",href:"https://www.youtube.com/watch?v=FQnWFZ_UYdY",eyebrow:"Patrouski · context",source:"Creator reference",description:"Shows existing demand for Unova route help; not proof of B2/W2 implementation."},
  {title:"Top 10 Things New Players Should Do Day 1",href:"https://www.youtube.com/watch?v=w5cSfku6Rdo",eyebrow:"Patrouski · format",source:"Creator reference",description:"Supports checklist-style preparation; B2/W2 facts are checked separately."},
  {title:"New Player Money Making Methods",href:"https://www.youtube.com/watch?v=mwzMQNpeLEc",eyebrow:"Patrouski · context",source:"Creator reference",description:"Shows economy interest; no B2/W2-specific returns are inferred."}
];
export const tierPreview:TierPreviewItem[]=[];
export const faqs:Record<"home"|"codes"|"tierList"|"calculator",FaqItem[]>={
  home:[{q:"When is the PokeMMO B2/W2 preview?",a:"The official homepage lists September 19, 2026. Exact start and end times are not confirmed here."},{q:"Is this the final release date?",a:"No. September 19 is the preview date; no final release date has been announced in the sources checked."},{q:"Is this an official PokeMMO or Patrouski site?",a:"No. It is an independent fan resource with no endorsement or affiliation."},{q:"Why are many features marked not confirmed?",a:"Original-game availability and community discussion do not prove PokeMMO implementation."}],
  codes:[{q:"Are there PokeMMO B2/W2 codes?",a:"No relevant promo-code system was found in the official sources checked."},{q:"Where should I watch for announcements?",a:"Use the official homepage, forum and support-linked channels."},{q:"Why might a shared code fail?",a:"It may be invented, unrelated or from another game."},{q:"Will codes be added later?",a:"Only if a public, relevant redemption system and source exist."}],
  tierList:[{q:"Are exact tiers available?",a:"No. PokeMMO-specific preview data is not available yet."},{q:"Why not use cartridge tiers?",a:"PokeMMO availability, balance and progression may differ."},{q:"What will rankings measure?",a:"Availability, cost, coverage, consistency and replacement risk."},{q:"When will ranks publish?",a:"After direct preview evidence can be corroborated."}],
  calculator:[{q:"Is the September 19 date official?",a:"Yes; the exact start time is not confirmed."},{q:"Does zero on the countdown mean the preview is live?",a:"No. The page tells you to verify official status."},{q:"Where do feature statuses come from?",a:"Static, dated official or clearly labelled community sources."},{q:"Does the tracker fetch third-party data?",a:"No. It works from reviewed static records."}]
};
