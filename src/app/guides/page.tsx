import type { Metadata } from "next";
import Link from "next/link";
import { guideClusters, siteConfig } from "@/data/site";
import { AdsterraArticleBottom, AdsterraArticleMid, AdsterraArticleTop } from "@/components/ads";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Guides`,
  description: `Guides to ${siteConfig.gameName} packs, A-Z board progress, upgrades, Diamonds, duplicates, daily words, and mutations.`,
  alternates: { canonical: `${siteConfig.domain}/guides` }
};

export default function GuidesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Guides", href: "/guides" }]} />
      <Breadcrumbs items={[{ label: "Guides", href: "/guides" }]} />
      <PageIntro
        eyebrow="Guide hub"
        title={`${siteConfig.gameName} Guides`}
        description="Learn the pack-to-board loop, upgrade roles, Diamond safety, daily words, mutations, and which live values must be checked in Roblox."
      />
      <AdsterraArticleTop />

      <section className="mt-10">
        <SectionHeader
          eyebrow="Recommended guides"
          title="Start with pages that match real player questions"
          copy="Start with the beginner loop, use the A–Z tracker for missing letters, and reserve board or daily-word copies before selling duplicates."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {guideClusters.map((guide) => (
            <Link key={guide.title} href={guide.href} className="content-card">
              <span className="mini-label">{guide.eyebrow}</span>
              <h2 className="mt-3 text-xl font-bold text-white">{guide.title}</h2>
              <p className="mt-2 text-sm leading-6 text-white/65">{guide.description}</p>
            </Link>
          ))}
        </div>
      </section>
      <AdsterraArticleMid />
      <AdsterraArticleBottom />
    </main>
  );
}
