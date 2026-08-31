export type NavItem = {
  label: string;
  href: string;
  description: string;
};

export type NavGroup = {
  label: string;
  href: string;
  items: NavItem[];
};

export type HeroMetric = {
  label: string;
  value: string;
  note: string;
};

export type LinkCard = {
  title: string;
  href: string;
  eyebrow: string;
  description: string;
  source?: string;
};

export type TopicSection = {
  title: string;
  body: string;
  bullets?: string[];
};

export type TopicPage = LinkCard & {
  primaryKeyword: string;
  secondaryKeywords: string[];
  checkedStatus: "Current guide" | "Early tip" | "Update watch";
  parentHub: string;
  sections: TopicSection[];
  quickAnswer?: string;
  actionSteps?: TopicSection[];
  stuckHelp?: TopicSection[];
  commonMistakes?: TopicSection[];
  faqs?: {
    q: string;
    a: string;
  }[];
  relatedLinks: NavItem[];
};

export type TierPreviewItem = {
  name: string;
  tier: "S" | "A" | "B" | "C";
  role: string;
  reason: string;
  confidence?: "Current pick" | "Early tip" | "Update watch";
  bestFor?: string[];
  sourceNote?: string;
  teamNote?: string;
};

export type GameCode = {
  code: string;
  reward: string;
  status: "Listed" | "Reported" | "No active codes collected" | "Expired" | "Needs public source";
  addedDate: string;
};

export type FaqItem = {
  q: string;
  a: string;
};

export type EditorialSignal = {
  title: string;
  body: string;
};

export type SiteConfig = {
  name: string;
  domain: string;
  gameName: string;
  description: string;
  valueProposition: string;
  shortDisclosure: string;
  lastUpdated: string;
  freshnessLabel: string;
  keywords: string[];
  navGroups: NavGroup[];
};

export type GameConfig = {
  name: string;
  slug: string;
  domain: string;
  theme: {
    primaryColor: string;
    accentColor: string;
    surfaceColor: string;
    style: string;
  };
  currency: {
    name: string;
    abbr: string;
  };
  features: {
    hasCalculator: boolean;
    hasTierList: boolean;
    hasCodesPage: boolean;
    hasBrainrotIndex: boolean;
    hasHandbook: boolean;
  };
  updateCadence: string;
  dataSources: {
    officialGameUrl: string;
    discord?: string;
    trello?: string;
  };
  ads: {
    publisher: string;
    usesRuntimeConfig: boolean;
  };
};
