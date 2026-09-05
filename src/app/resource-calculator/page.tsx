import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { AdsterraToolAd, AdsterraToolBottom } from "@/components/ads";
import { BreadcrumbJsonLd, SoftwareApplicationJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Resource Calculator`,
  description: `Plan ${siteConfig.gameName} currency, upgrade costs, reward routes, farming sessions, and repeat-run decisions.`,
  alternates: { canonical: `${siteConfig.domain}/resource-calculator` }
};

export default function ResourceCalculatorPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Resource Calculator", href: "/resource-calculator" }]} />
      <SoftwareApplicationJsonLd />
      <Breadcrumbs items={[{ label: "Resource Calculator", href: "/resource-calculator" }]} />
      <PageIntro
        eyebrow="Resource planning"
        title={`${siteConfig.gameName} Resource Calculator`}
        description="Use this page for upgrade costs, reward planning, farming estimates, and repeat-run decisions."
      />
      <AdsterraToolAd />
      <section className="mt-10 grid gap-4 md:grid-cols-3">
        <article className="content-card">
          <h2 className="text-xl font-bold text-white">Selected inputs</h2>
          <p className="mt-3 text-sm leading-6 text-white/66">Check live Money and Diamond labels, visible rewards, pack information, upgrade costs, and event bonuses before treating calculations as exact.</p>
        </article>
        <article className="content-card">
          <h2 className="text-xl font-bold text-white">Farming estimate</h2>
          <p className="mt-3 text-sm leading-6 text-white/66">Use this space for repeat-run math, time estimates, code rewards, and comparisons between farming choices.</p>
        </article>
        <article className="content-card">
          <h2 className="text-xl font-bold text-white">Next action</h2>
          <p className="mt-3 text-sm leading-6 text-white/66">Send players to farming, codes, wiki rewards, and updates when numbers may change after patches or events.</p>
        </article>
      </section>
      <section className="mt-12">
        <SectionHeader eyebrow="Related pages" title="Check these before spending" />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Link href="/guides/farming" className="content-card">Farming Guide</Link>
          <Link href="/wiki/items-and-rewards" className="content-card">Items and Rewards</Link>
          <Link href="/codes" className="content-card">Active Codes</Link>
        </div>
      </section>
      <AdsterraToolBottom />
    </main>
  );
}
