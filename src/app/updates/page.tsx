import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig, updateCards } from "@/data/site";
import { AdsterraArticleBottom, AdsterraArticleMid, AdsterraArticleTop } from "@/components/ads";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Updates (September 2026)`,
  description: `Track ${siteConfig.gameName} codes, trading and mutation update themes with checked dates and clear confidence labels.`,
  alternates: { canonical: `${siteConfig.domain}/updates` }
};

export default function UpdatesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Updates", href: "/updates" }]} />
      <Breadcrumbs items={[{ label: "Updates", href: "/updates" }]} />
      <PageIntro
        eyebrow="Updates"
        title={`${siteConfig.gameName} Latest Updates`}
        description="Current Roblox presentation highlights trading and mutations. Use this watch page to re-check codes, mutation claims, and progression advice after changes. Checked September 5, 2026."
      />
      <AdsterraArticleTop />

      <section className="mt-10">
        <SectionHeader
          eyebrow="What changed"
          title="Check the pages most likely to move"
          copy="Codes, rankings, wiki entries, and farming advice can change after updates. Keep the newest practical answer visible and mention older reports only when they help players avoid mistakes."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {updateCards.map((item) => (
            <Link key={item.href + item.title} href={item.href} className="content-card">
              <span className="mini-label">{item.eyebrow}</span>
              <h2 className="mt-3 text-xl font-bold text-white">{item.title}</h2>
              <p className="mt-2 text-sm leading-6 text-white/65">{item.description}</p>
            </Link>
          ))}
        </div>
      </section>
      <AdsterraArticleMid />

      <section className="mt-12 grid gap-4 md:grid-cols-3">
        <article className="content-card">
          <h2 className="text-xl font-bold text-white">Codes</h2>
          <p className="mt-3 text-sm leading-6 text-white/66">Check whether a new update added, expired, or changed rewards before publishing a code as active.</p>
        </article>
        <article className="content-card">
          <h2 className="text-xl font-bold text-white">Meta and rankings</h2>
          <p className="mt-3 text-sm leading-6 text-white/66">Refresh progression priorities when packs, Luck, Pack Speed, letter income, mutations, or trading behavior changes.</p>
        </article>
        <article className="content-card">
          <h2 className="text-xl font-bold text-white">Official and community links</h2>
          <p className="mt-3 text-sm leading-6 text-white/66">Separate official Roblox or creator-owned information from community reports, video tests, and older wiki pages.</p>
        </article>
      </section>
      <AdsterraArticleBottom />
    </main>
  );
}
