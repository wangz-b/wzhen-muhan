import type { Metadata } from "next";
import Link from "next/link";
import { gameConfig } from "@/data/game.config";
import { siteConfig } from "@/data/site";
import { AdsterraArticleBottom, AdsterraArticleMid, AdsterraArticleTop } from "@/components/ads";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Trello, Discord & Wiki Status`,
  description: `Official and community links for ${siteConfig.gameName} Trello, Discord, wiki, Roblox updates, codes, and community references.`,
  alternates: { canonical: `${siteConfig.domain}/trello` },
  openGraph: {
    title: `${siteConfig.gameName} Trello, Discord & Wiki Status`,
    description: `Verified Roblox and creator links, likely Discord, and honest Trello/wiki status for ${siteConfig.gameName}.`,
    url: `${siteConfig.domain}/trello`,
    images: ["/trello/opengraph-image"]
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.gameName} Trello, Discord & Wiki Status`,
    description: `Verified Roblox and creator links, likely Discord, and honest Trello/wiki status for ${siteConfig.gameName}.`,
    images: ["/trello/opengraph-image"]
  }
};

const statusRows = [
  {
    label: "Official Roblox page",
    href: gameConfig.dataSources.officialGameUrl,
    status: "Official link",
    note: "Use this for the game title, creator, Roblox availability, badges, and public update text."
  },
  {
    label: "Discord",
    href: gameConfig.dataSources.discord ?? "#",
    status: gameConfig.dataSources.discord && gameConfig.dataSources.discord !== "#" ? "Likely official · recheck invite" : "Not listed",
    note: "The invite resolves to the game name in current guide sources, but was not visible in the crawlable official Roblox description. Revalidate before joining."
  },
  {
    label: "Trello",
    href: gameConfig.dataSources.trello ?? "#",
    status: gameConfig.dataSources.trello && gameConfig.dataSources.trello !== "#" ? "Available" : "No board listed",
    note: "No official board was verified on September 5, 2026. Do not trust a lookalike board merely because it uses the game name."
  },
  {
    label: "Wiki",
    href: "/wiki",
    status: "Unofficial site hub",
    note: "No official wiki was verified. Our source-labelled hub covers letters, packs, currencies, upgrades, Symbols, and known gaps."
  }
];

export default function TrelloStatusPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Trello, Discord & Wiki", href: "/trello" }]} />
      <Breadcrumbs items={[{ label: "Trello, Discord & Wiki", href: "/trello" }]} />
      <PageIntro
        eyebrow="Community status"
        title={`${siteConfig.gameName} Trello, Discord & Wiki Status`}
        description={`Use this page to find ${siteConfig.gameName} Roblox, Discord, Trello, wiki, codes, updates, and tier-list references.`}
      />
      <AdsterraArticleTop />

      <section className="mt-10">
        <SectionHeader
          eyebrow="Official links"
          title="Official and community links"
          copy="This page should be updated whenever Roblox pages, creator channels, Discord, Trello, or wiki links change."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {statusRows.map((item) => {
            const isInternal = item.href.startsWith("/");
            const hasLink = item.href !== "#";
            const content = (
              <>
                <span className="mini-label">{item.status}</span>
                <h2 className="mt-3 text-xl font-bold text-white">{item.label}</h2>
                <p className="mt-2 text-sm leading-6 text-white/65">{item.note}</p>
              </>
            );

            if (!hasLink) {
              return (
                <article key={item.label} className="content-card">
                  {content}
                </article>
              );
            }

            return isInternal ? (
              <Link key={item.label} href={item.href} className="content-card">
                {content}
              </Link>
            ) : (
              <a key={item.label} href={item.href} className="content-card" target="_blank" rel="noreferrer">
                {content}
              </a>
            );
          })}
        </div>
      </section>
      <AdsterraArticleMid />

      <section className="mt-10 grid gap-4 md:grid-cols-3">
        <Link href="/codes" className="content-card">
          <span className="mini-label">Freshness</span>
          <h2 className="mt-3 text-xl font-bold text-white">Codes and rewards</h2>
          <p className="mt-2 text-sm leading-6 text-white/65">Check active and expired rewards against official update surfaces before publishing code claims.</p>
        </Link>
        <Link href="/tier-list" className="content-card">
          <span className="mini-label">Meta</span>
          <h2 className="mt-3 text-xl font-bold text-white">Tier-list context</h2>
          <p className="mt-2 text-sm leading-6 text-white/65">Use Discord, YouTube, update notes, and wiki data as signals, then label ranking confidence clearly.</p>
        </Link>
        <Link href="/sources" className="content-card">
          <span className="mini-label">Editorial</span>
          <h2 className="mt-3 text-xl font-bold text-white">Reference checklist</h2>
          <p className="mt-2 text-sm leading-6 text-white/65">Keep official, community, video, Reddit, and guide-site references easy to compare when updates change.</p>
        </Link>
      </section>
      <AdsterraArticleBottom />
    </main>
  );
}
