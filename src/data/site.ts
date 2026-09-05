import type { EditorialSignal, FaqItem, GameCode, HeroMetric, LinkCard, SiteConfig, TierPreviewItem, TopicPage } from "@/types/site";
import { gameConfig } from "@/data/game.config";

function compactBrandName(name: string): string {
  const words = name.match(/[A-Za-z0-9]+/g) || [];
  if (!words.length) {
    return name;
  }
  return words.map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join("");
}

const siteBrandName = compactBrandName(gameConfig.name);

export const siteConfig: SiteConfig = {
  name: siteBrandName,
  domain: gameConfig.domain,
  gameName: gameConfig.name,
  description: `${gameConfig.name} wiki with collected code status, tier list rankings, Trello and Discord links, calculators, guides, and practical Roblox progression help.`,
  valueProposition: `Check collected ${gameConfig.name} code status, compare the best picks, and use practical tools before you spend time grinding in Roblox.`,
  shortDisclosure: `${siteBrandName} is an unofficial fan-made resource. Roblox and the game creators remain the official place for support and updates.`,
  lastUpdated: "2026-06-10",
  freshnessLabel: "latest code, guide, and tier-list notes",
  keywords: [
    `${gameConfig.name}`,
    `${gameConfig.name} codes`,
    `${gameConfig.name} tier list`,
    `${gameConfig.name} trello`,
    `${gameConfig.name} discord`,
    `${gameConfig.name} wiki`,
    `${gameConfig.name} official wiki`,
    `${gameConfig.name} guide`,
    `${gameConfig.name} calculator`,
    `${gameConfig.name} beginner guide`,
    `${gameConfig.name} best build`,
    `${gameConfig.name} updates`,
    "Roblox codes",
    "Roblox tier list"
  ],
  navGroups: [
    {
      label: "Codes",
      href: "/codes",
      items: [
        { label: "Codes Status", href: "/codes", description: "Collected active, expired, and reported reward status." },
        { label: "Codes Not Working", href: "/guides", description: "Troubleshooting route until a dedicated page is generated." },
        { label: "Update Watch", href: "/updates", description: "Check whether a code belongs to a fresh update or event." },
        { label: "Sources", href: "/sources", description: "Official, creator-owned, and public tracker context." },
        { label: "Official Links", href: "/sources", description: "Roblox and creator-owned update paths." }
      ]
    },
    {
      label: "Updates",
      href: "/updates",
      items: [
        { label: "Update Tracker", href: "/updates", description: "Events, patches, milestones, and reward changes." },
        { label: "Trello/Discord Links", href: "/trello", description: "Official and community places to check." },
        { label: "Active Codes", href: "/codes", description: "Rewards that often change after updates." }
      ]
    },
    {
      label: "Tier List",
      href: "/tier-list",
      items: [
        { label: "Rankings", href: "/tier-list", description: "Best current picks and why they matter." },
        { label: "Build Planner", href: "/calculator", description: "Decision helper for builds or progression." },
        { label: "Wiki Entities", href: "/wiki", description: "Entity pages that support ranking decisions." }
      ]
    },
    {
      label: "Guides",
      href: "/guides",
      items: [
        { label: "Guide Hub", href: "/guides", description: "Beginner, farming, boss, and progression paths." },
        { label: "Beginner Guide", href: "/guides/beginner", description: "First-session help and early mistakes to avoid." },
        { label: "Progression Guide", href: "/guides/progression", description: "Upgrade priorities and mid-game planning." },
        { label: "Farming Guide", href: "/guides/farming", description: "Repeatable reward, currency, and grind decisions." },
        { label: "Calculator", href: "/calculator", description: "Use tools before spending rewards." },
        { label: "Community Status", href: "/trello", description: "Check board, Discord, and wiki status before trusting guide claims." },
        { label: "Official Links", href: "/trello", description: "Check Roblox, Discord, Trello, and wiki links." }
      ]
    },
    {
      label: "Wiki",
      href: "/wiki",
      items: [
        { label: "Wiki Hub", href: "/wiki", description: "Entity pages for items, units, maps, clans, or systems." },
        { label: "Items and Rewards", href: "/wiki/items-and-rewards", description: "Drops, rewards, items, units, and unlock tables." },
        { label: "Maps and Systems", href: "/wiki/maps-and-systems", description: "Locations, bosses, mechanics, quests, and events." },
        { label: "Letters and Systems", href: "/wiki/builds-and-entities", description: "Letter, pack, Symbol, upgrade, and mutation roles." },
        { label: "Mutation Status", href: "/mutations", description: "Neon and Rainbow observations with unknown rates kept clear." }
      ]
    },
    {
      label: "Tools",
      href: "/calculator",
      items: [
        { label: "Calculator", href: "/calculator", description: "Planner or simulator for the game's strongest repeat decision." },
        { label: "Daily Word Checker", href: "/calculator", description: "Count repeated letters in the word shown in your server." },
        { label: "Duplicate Helper", href: "/calculator", description: "Reserve board and daily-word copies before selling spares." },
        { label: "Tier List", href: "/tier-list", description: "Use rankings with source labels before spending resources." }
      ]
    },
    {
      label: "Info",
      href: "/trello",
      items: [
        { label: "Trello/Discord/Wiki", href: "/trello", description: "Official board, Discord, and wiki links." },
        { label: "Source Checklist", href: "/sources", description: "Which claims are official, reported, or still uncertain." },
        { label: "Link Checklist", href: "/sources", description: "Official, community, and older references." },
        { label: "About Us", href: "/about", description: "Author profile, editorial process, and source standards." },
        { label: "Disclosure", href: "/disclosure", description: "Fan-made status, advertising boundaries, and source precedence." },
        { label: "Contact Us", href: "/contact", description: "Corrections, privacy questions, and editorial contact path." },
        { label: "Privacy Policy", href: "/privacy", description: "Privacy, analytics, ads, and third-party cookie disclosure." },
        { label: "Terms of Service", href: "/terms", description: "Use rules, unofficial status, and third-party service terms." }
      ]
    }
  ]
};

export const heroActions = [
  { href: "/codes", label: "Get codes" },
  { href: "/tier-list", label: "View tier list" },
  { href: "/trello", label: "Official links" },
  { href: "/calculator", label: "Use calculator" }
] as const;

export const heroMetrics: HeroMetric[] = [
  { label: "Code status", value: "Collected", note: "Shows public active-code status without guessed rewards" },
  { label: "Route depth", value: "16+", note: "Core pages plus guide, wiki, update, and tool branches" },
  { label: "Guide depth", value: "Growing", note: "Codes, guides, wiki, updates, and tools" },
  { label: "Link checks", value: "Clear", note: "Official and community links split" }
];

export const activeCodes: GameCode[] = [
  {
    code: "NO ACTIVE CODES COLLECTED",
    reward: `${gameConfig.name} has no collected active code in the starter data. Replace this row only when Roblox, a creator-owned channel, or an established public code tracker lists a code.`,
    status: "No active codes collected",
    addedDate: "Starter check"
  }
];

export const tierPreview: TierPreviewItem[] = [
  {
    name: "Best early-game pick",
    tier: "S",
    role: "Starter path",
    reason: "Start with the safest beginner recommendation before spending rare resources.",
    confidence: "Early tip",
    bestFor: ["beginner", "low investment"],
    sourceNote: "Best when backed by Roblox, creator, wiki, video, or community references.",
    teamNote: "Good starter picks should work without rare team pieces."
  },
  {
    name: "Best farming pick",
    tier: "A",
    role: "Progression",
    reason: "Compare the most repeatable grind, income, or mission option before spending rare resources.",
    confidence: "Early tip",
    bestFor: ["farming", "repeat runs"],
    sourceNote: "Best when current creator, wiki, or community references agree.",
    teamNote: "Pair farming picks with support or speed options when the game has team slots."
  },
  {
    name: "Best endgame pick",
    tier: "A",
    role: "Late game",
    reason: "Use high-skill or high-investment choices only after the game details are clearer.",
    confidence: "Early tip",
    bestFor: ["late game", "bossing"],
    sourceNote: "Best when late-game clears, updates, or boss runs support it.",
    teamNote: "Endgame picks need synergy notes before being ranked as final."
  }
];

export const toolCards: LinkCard[] = [
  {
    title: `${gameConfig.name} Calculator`,
    href: "/calculator",
    eyebrow: "Primary tool",
    description: "A practical decision helper that can later become a full formula-based calculator."
  },
  {
    title: `${gameConfig.name} Squad Planner`,
    href: "/squad-planner",
    eyebrow: "Team planning",
    description: "Plan your team, pets, units, classes, traits, and build combos."
  },
  {
    title: `${gameConfig.name} Resource Calculator`,
    href: "/resource-calculator",
    eyebrow: "Resource planning",
    description: "Estimate upgrade costs, currency farming, rewards, and repeat-run outcomes."
  },
  {
    title: `${gameConfig.name} Tier List`,
    href: "/tier-list",
    eyebrow: "Rankings",
    description: "Ranks the current best picks with notes for beginners, farming, and late-game use."
  },
  {
    title: `${gameConfig.name} Codes`,
    href: "/codes",
    eyebrow: "Codes",
    description: "Tracks collected active-code status, expired-code conflicts, and redemption instructions."
  },
  {
    title: `${gameConfig.name} Trello & Discord`,
    href: "/trello",
    eyebrow: "Community status",
    description: "Collects official Trello, Discord, wiki, and Roblox links for update-sensitive info."
  }
];

export const guideClusters: LinkCard[] = [
  {
    title: "Beginner guide",
    href: "/guides/beginner",
    eyebrow: "Guide",
    description: "First-session path, mistakes to avoid, and what to unlock first."
  },
  {
    title: "Progression guide",
    href: "/guides/progression",
    eyebrow: "Guide",
    description: "Mid-game priorities, resource planning, and farming paths."
  },
  {
    title: "Farming guide",
    href: "/guides/farming",
    eyebrow: "Guide",
    description: "Repeatable reward paths, currency planning, and grind decisions."
  }
];

export const wikiCards: LinkCard[] = [
  {
    title: "Items and rewards",
    href: "/wiki/items-and-rewards",
    eyebrow: "Wiki",
    description: "Track A–Z letters, packs, Symbols, codes, and daily rewards."
  },
  {
    title: "Maps and systems",
    href: "/wiki/maps-and-systems",
    eyebrow: "Wiki",
    description: "Browse the board, pack loop, upgrades, daily word, and mutation mechanics."
  },
  {
    title: "Builds and entities",
    href: "/wiki/builds-and-entities",
    eyebrow: "Wiki",
    description: "Compare letter, pack, Symbol, currency, and upgrade roles."
  }
];

export const guideTopicPages: TopicPage[] = [
  {
    title: `${gameConfig.name} Beginner Guide`,
    href: "/guides/beginner",
    eyebrow: "Beginner path",
    description: "A first-session route through letter packs, the 26-slot A–Z board, passive Money, upgrades, duplicate sales, Diamonds, Symbols, codes, and the daily word.",
    primaryKeyword: `${gameConfig.name} beginner guide`,
    secondaryKeywords: [`${gameConfig.name} guide`, `${gameConfig.name} how to play`, `${gameConfig.name} tips`],
    checkedStatus: "Current guide",
    parentHub: "/guides",
    sections: [
      {
        title: "First-session goal",
        body: "Learn the main loop before optimizing. Identify what the player earns, what makes the next run stronger, and which choices can waste limited resources."
      },
      {
        title: "Starter rewards",
        body: "Check collected code status and obvious free rewards before grinding. Starter boosts can change the first upgrade or farming choice."
      },
      {
        title: "Spend slowly",
        body: "Delay rare currency, rerolls, grade upgrades, or reset choices until the game shows what the purchase changes."
      }
    ],
    quickAnswer: "Open letter packs, mount the first copy of each A–Z letter, reinvest Money into visible upgrades, and reserve board or daily-word copies before selling true duplicates for Diamonds.",
    actionSteps: [
      {
        title: "1. Open packs and track A–Z",
        body: "Open the available letter pack and mount each first A–Z copy on your 26-slot board. Use the tracker so missing letters stay obvious."
      },
      {
        title: "2. Claim current codes",
        body: "Check official-description codes before a long session, and keep community-only reports visibly separate."
      },
      {
        title: "3. Reinvest Money carefully",
        body: "Compare the live Money, Luck, and Pack Speed upgrade screens. This guide does not invent their missing costs or curves."
      },
      {
        title: "4. Protect useful duplicates",
        body: "Reserve one for the board plus copies needed for the Word of the Day before selling true spares for Diamonds and later Symbol packs."
      }
    ],
    stuckHelp: [
      {
        title: "Not sure what to do next",
        body: "Return to the main loop: earn rewards, improve the next run, then repeat."
      },
      {
        title: "Code does not work",
        body: "Check spelling, try a fresh server once, then continue playing if it still fails."
      },
      {
        title: "Upgrade choice is unclear",
        body: "Save rare resources until the effect is visible in game."
      }
    ],
    commonMistakes: [
      {
        title: "Skipping codes",
        body: "New players often grind before checking free rewards."
      },
      {
        title: "Spending rare currency early",
        body: "Early mistakes are expensive when the game has rerolls, grades, resets, or limited tokens."
      },
      {
        title: "Following unrelated-game advice",
        body: "Similar Roblox game names do not guarantee the same values, items, or progression rules."
      }
    ],
    faqs: [
      {
        q: `What should beginners do first in ${gameConfig.name}?`,
        a: "Learn the core loop, claim available rewards, then spend only on upgrades with clear payoff."
      },
      {
        q: "Should I use codes before playing?",
        a: "Yes. Codes can change the first upgrade or farming choice."
      },
      {
        q: "When should I use rare resources?",
        a: "After the in-game screen clearly shows what the resource changes."
      },
      {
        q: "What page should I read next?",
        a: "Use progression for upgrades, farming for repeat rewards, and tier list for build or entity comparisons."
      }
    ],
    relatedLinks: [
      { label: "Codes Status", href: "/codes", description: "Check collected rewards before following the guide." },
      { label: "Tier List", href: "/tier-list", description: "Compare early picks before spending resources." },
      { label: "Wiki Topics", href: "/wiki", description: "Check items, systems, and entities mentioned in the guide." }
    ]
  },
  {
    title: `${gameConfig.name} Progression Guide`,
    href: "/guides/progression",
    eyebrow: "Progression path",
    description: "A progression route for upgrade order, farming priorities, reset timing, and when to move from beginner choices to stronger options.",
    primaryKeyword: `${gameConfig.name} progression guide`,
    secondaryKeywords: [`${gameConfig.name} best progression`, `${gameConfig.name} upgrade guide`, `${gameConfig.name} mid game guide`],
    checkedStatus: "Current guide",
    parentHub: "/guides",
    sections: [
      {
        title: "Early progression",
        body: "Stabilize the basic loop first. Progress faster by improving the next run, not by chasing every rare-looking option."
      },
      {
        title: "Mid-game progression",
        body: "Shift from starter rewards to repeatable income, better entities, stronger upgrades, and route choices that compound over time."
      },
      {
        title: "Reset timing",
        body: "Treat rebirths, prestige, rank-ups, or resets as tradeoffs. Reset only when the permanent gain beats what the player loses."
      }
    ],
    quickAnswer: "Progress by improving the next run first, building repeatable income second, and saving resets or rare-resource spending until the payoff is visible.",
    actionSteps: [
      {
        title: "1. Finish the starter loop",
        body: "Understand how the game pays out and which early choices waste time."
      },
      {
        title: "2. Use free rewards",
        body: "Claim codes and obvious event rewards before committing to a grind route."
      },
      {
        title: "3. Upgrade repeat value",
        body: "Prioritize upgrades that increase reward quality, income, speed, or consistency."
      },
      {
        title: "4. Check reset tradeoffs",
        body: "Read what resets and what bonus remains before any rebirth or prestige action."
      }
    ],
    stuckHelp: [
      {
        title: "Progress feels slow",
        body: "Focus on one loop: farm rewards, upgrade the next run, then repeat."
      },
      {
        title: "Too many upgrade choices",
        body: "Pick the one with immediate payoff and save rare resources for later."
      },
      {
        title: "Reset screen is unclear",
        body: "Delay the reset until the game clearly explains what stays and what disappears."
      }
    ],
    commonMistakes: [
      {
        title: "Resetting too early",
        body: "A reset without a strong permanent bonus can slow the next session."
      },
      {
        title: "Chasing exact values too soon",
        body: "Values and rankings change quickly; use them only after the main loop is stable."
      },
      {
        title: "Ignoring farming",
        body: "Progression usually depends on repeatable rewards, not one lucky result."
      }
    ],
    faqs: [
      {
        q: `What is the best progression order in ${gameConfig.name}?`,
        a: "Learn the loop, claim rewards, improve repeat value, then handle resets or late-game upgrades."
      },
      {
        q: "What should I upgrade first?",
        a: "Upgrade whatever improves the next few runs most clearly."
      },
      {
        q: "When should I reset or rebirth?",
        a: "Only when the permanent bonus is worth the progress that resets."
      },
      {
        q: "Why can progression advice change?",
        a: "Updates, events, and code rewards can change the best route."
      }
    ],
    relatedLinks: [
      { label: "Calculator", href: "/calculator", description: "Use a tool before committing resources." },
      { label: "Resource Calculator", href: "/resource-calculator", description: "Plan farming and upgrade costs." },
      { label: "Updates", href: "/updates", description: "Check whether new patches changed the advice." }
    ]
  },
  {
    title: `${gameConfig.name} Farming Guide`,
    href: "/guides/farming",
    eyebrow: "Farming path",
    description: "A farming route for repeat rewards, currency planning, code timing, and avoiding grind loops that waste time.",
    primaryKeyword: `${gameConfig.name} farming guide`,
    secondaryKeywords: [`${gameConfig.name} best farm`, `${gameConfig.name} how to get currency`, `${gameConfig.name} rewards`],
    checkedStatus: "Current guide",
    parentHub: "/guides",
    sections: [
      {
        title: "Repeatable loop",
        body: "Farm the activity that produces reliable progress, then reinvest in the option that improves the next cycle."
      },
      {
        title: "Reward timing",
        body: "Check collected codes, events, and update rewards before a long grind. A free boost can change the best farming route."
      },
      {
        title: "Efficiency rule",
        body: "A farm is good only when it reliably improves currency, materials, entities, or upgrade progress."
      }
    ],
    quickAnswer: "Farm by checking codes first, repeating the most reliable reward loop, and reinvesting only in upgrades that make the next cycle better.",
    actionSteps: [
      {
        title: "1. Check codes first",
        body: "Use listed free rewards before starting a long farming session."
      },
      {
        title: "2. Pick one farm target",
        body: "Decide whether the session is for currency, items, entities, upgrades, or reset progress."
      },
      {
        title: "3. Repeat the best loop",
        body: "Stay with the route that produces visible progress instead of switching every few minutes."
      },
      {
        title: "4. Reinvest carefully",
        body: "Spend rewards on upgrades that improve the next cycle."
      }
    ],
    stuckHelp: [
      {
        title: "Farm is slow",
        body: "Narrow the goal and stop switching between unrelated activities."
      },
      {
        title: "Reward feels random",
        body: "Use repeatable goals first and treat lucky rewards as a bonus."
      },
      {
        title: "Upgrade path is unclear",
        body: "Use the resource calculator or progression page before spending limited currency."
      }
    ],
    commonMistakes: [
      {
        title: "Grinding before checking codes",
        body: "Codes and event rewards can shorten the first farming session."
      },
      {
        title: "Farming without a target",
        body: "A session should have one clear target, such as currency, upgrade progress, or event rewards."
      },
      {
        title: "Trusting unsupported exact rates",
        body: "Do not build a route around drop-rate numbers unless the game clearly shows them."
      }
    ],
    faqs: [
      {
        q: `How do I farm faster in ${gameConfig.name}?`,
        a: "Use codes first, pick one repeat target, and reinvest only in upgrades that improve the next cycle."
      },
      {
        q: "Should I farm currency or items first?",
        a: "Farm whatever unlocks the next meaningful upgrade for your current stage."
      },
      {
        q: "When should I stop a farm loop?",
        a: "Stop when the loop no longer improves rewards, speed, upgrade progress, or reset progress."
      },
      {
        q: "Do farming routes change after updates?",
        a: "Yes. Events, codes, and balance changes can shift the best repeat loop."
      }
    ],
    relatedLinks: [
      { label: "Resource Calculator", href: "/resource-calculator", description: "Estimate repeat-run value once formulas are known." },
      { label: "Items and Rewards", href: "/wiki/items-and-rewards", description: "Check drops and reward tables." },
      { label: "Links", href: "/sources", description: "Check official and community references." }
    ]
  }
];

export const wikiTopicPages: TopicPage[] = [
  {
    title: `${gameConfig.name} Items and Rewards`,
    href: "/wiki/items-and-rewards",
    eyebrow: "Items and rewards",
    description: "Item, reward, drop, unit, pet, weapon, code, and unlock reference.",
    primaryKeyword: `${gameConfig.name} items`,
    secondaryKeywords: [`${gameConfig.name} rewards`, `${gameConfig.name} drops`, `${gameConfig.name} units`],
    checkedStatus: "Current guide",
    parentHub: "/wiki",
    sections: [
      {
        title: "Entity list",
        body: "Cover the highest-value item, unit, reward, or pet families players should check first."
      },
      {
        title: "How players get them",
        body: "Show the main method first, then call out rumors, expired events, or conflicting community reports only when players need the warning."
      },
      {
        title: "Where to go next",
        body: "Links guides, tier list, farming, status pages, and update pages for each entity family."
      }
    ],
    relatedLinks: [
      { label: "Farming Guide", href: "/guides/farming", description: "Learn where rewards can be farmed." },
      { label: "Tier List", href: "/tier-list", description: "Compare items or entities by use case." },
      { label: "Codes", href: "/codes", description: "Check whether rewards are currently listed as active codes." }
    ]
  },
  {
    title: `${gameConfig.name} Maps and Systems`,
    href: "/wiki/maps-and-systems",
    eyebrow: "Maps and systems",
    description: "Map, mode, boss, quest, event, mechanic, puzzle, and progression reference.",
    primaryKeyword: `${gameConfig.name} wiki`,
    secondaryKeywords: [`${gameConfig.name} maps`, `${gameConfig.name} bosses`, `${gameConfig.name} systems`],
    checkedStatus: "Current guide",
    parentHub: "/wiki",
    sections: [
      {
        title: "System overview",
        body: "Cover the mechanics players must understand before following guides or spending resources."
      },
      {
        title: "Map and mode notes",
        body: "List the locations, bosses, quest types, or event paths players should check first."
      },
      {
        title: "Route links",
        body: "Connect each system to beginner, progression, farming, updates, and calculator pages so the site has a clear internal graph."
      }
    ],
    relatedLinks: [
      { label: "Progression Guide", href: "/guides/progression", description: "Use systems to plan the next unlock." },
      { label: "Updates", href: "/updates", description: "Check recent changes to systems or maps." },
      { label: "Trello/Discord Links", href: "/trello", description: "Check official and community links." }
    ]
  },
  {
    title: `${gameConfig.name} Builds and Entities`,
    href: "/wiki/builds-and-entities",
    eyebrow: "Builds and entities",
    description: "Character, team, class, trait, build, ability, clan, and entity reference.",
    primaryKeyword: `${gameConfig.name} best build`,
    secondaryKeywords: [`${gameConfig.name} best team`, `${gameConfig.name} characters`, `${gameConfig.name} traits`],
    checkedStatus: "Current guide",
    parentHub: "/wiki",
    sections: [
      {
        title: "Entity families",
        body: "Cover character, unit, pet, class, trait, build, or ability families that may deserve deeper guides later."
      },
      {
        title: "Build logic",
        body: "Explain what makes a build strong in plain player terms, and call out uncertainty only when game details may have changed."
      },
      {
        title: "Team and synergy paths",
        body: "Send players to squad planner, tier list, and guide pages when entity choices depend on synergy or game mode."
      }
    ],
    relatedLinks: [
      { label: "Squad Planner", href: "/squad-planner", description: "Plan teams, pets, units, or build combinations." },
      { label: "Tier List", href: "/tier-list", description: "Compare current ranking notes." },
      { label: "Calculator", href: "/calculator", description: "Use tools when formulas or inputs are available." }
    ]
  }
];

export const updateCards: LinkCard[] = [
  {
    title: "Patch and event watch",
    href: "/updates",
    eyebrow: "Updates",
    description: "Track active patches, limited events, milestone rewards, and pages that may need updates."
  },
  {
    title: "Code refresh checks",
    href: "/codes",
    eyebrow: "Codes",
    description: "Codes often change after updates, events, likes milestones, or creator announcements."
  },
  {
    title: "Official and community links",
    href: "/trello",
    eyebrow: "Sources",
    description: "Check whether Trello, Discord, wiki, or creator-owned channels have useful update info."
  }
];

export const officialLinks: LinkCard[] = [
  {
    title: "Official Roblox game page",
    href: gameConfig.dataSources.officialGameUrl,
    eyebrow: "Official",
    description: "Use this page for the game title, creator, live Roblox availability, badges, and public update text."
  },
  {
    title: "Trello, Discord, and board status",
    href: gameConfig.dataSources.trello && gameConfig.dataSources.trello !== "#" ? gameConfig.dataSources.trello : (gameConfig.dataSources.discord && gameConfig.dataSources.discord !== "#" ? gameConfig.dataSources.discord : "/trello"),
    eyebrow: "Community",
    description: "Use this page or creator links to separate official boards from community references."
  },
  {
    title: "Link checklist",
    href: "/sources",
    eyebrow: "Editorial",
    description: "Keep official, community, video, Reddit, and guide-site references easy to compare."
  }
];

export const editorialSignals: EditorialSignal[] = [
  {
    title: "Freshness first",
    body: "Codes, updates, and tier lists should show clear dates, rewards, and player-facing notes when public reports disagree."
  },
  {
    title: "Entity coverage",
    body: "Split major game systems into their own wiki pages when players need a direct answer instead of burying everything on the homepage."
  },
  {
    title: "Fan-site clarity",
    body: "This fan site clearly points players back to official Roblox and creator-owned support paths."
  }
];

export const videoGuides: LinkCard[] = [
  {
    title: "Gameplay overview",
    href: "#",
    eyebrow: "Video",
    description: "Use a current YouTube creator guide that explains the game loop and shows real gameplay."
  },
  {
    title: "Beginner path",
    href: "#",
    eyebrow: "Video",
    description: "Use a recent YouTube walkthrough for the first session or first major unlock."
  },
  {
    title: "Meta showcase",
    href: "#",
    eyebrow: "Video",
    description: "Use a YouTube video that supports rankings, builds, update context, or advanced strategy."
  }
];

export const faqs: Record<"home" | "codes" | "tierList" | "calculator", FaqItem[]> = {
  home: [
    {
      q: `What is ${siteBrandName}?`,
      a: `${siteBrandName} is a fan-made Roblox resource for ${gameConfig.name} codes, tier lists, calculators, guides, and progression help.`
    },
    {
      q: `Is this the official ${gameConfig.name} website?`,
      a: "No. This is an unofficial fan site. Use the official Roblox page and creator-owned channels for official support, purchases, moderation, and account issues."
    },
    {
      q: `How often should ${gameConfig.name} codes be updated?`,
      a: "Code status should be updated whenever the game updates, reaches milestones, or public sources report new rewards. Keep the checked date visible."
    },
    {
      q: `What pages should be expanded first?`,
      a: "Start with codes, tier list, Trello/Discord links, calculator, beginner guide, wiki hub, and high-value entity pages."
    }
  ],
  codes: [
    {
      q: `Where do ${gameConfig.name} codes come from?`,
      a: "Use official Roblox descriptions, creator groups, creator-owned posts, public Discord or Trello announcements, and established code trackers when available."
    },
    {
      q: "Why do some codes change quickly?",
      a: "Roblox codes often expire after updates, events, or milestones. Try the newest codes first and keep expired-code notes visible."
    }
  ],
  tierList: [
    {
      q: "How should the tier list be updated?",
      a: "Update rankings with clear use cases, checked dates, and separate beginner, farming, and endgame recommendations when needed."
    }
  ],
  calculator: [
    {
      q: "Is the calculator exact?",
      a: "The calculator is a starter decision helper. Add formulas, tables, and game-specific inputs when exact rates are available."
    }
  ]
};
