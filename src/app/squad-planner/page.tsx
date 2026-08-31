import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { AdsterraToolAd, AdsterraToolBottom } from "@/components/ads";
import { BreadcrumbJsonLd, SoftwareApplicationJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Squad Planner`,
  description: `Plan ${siteConfig.gameName} teams, pets, units, classes, builds, and synergy checks before spending rare resources.`,
  alternates: { canonical: `${siteConfig.domain}/squad-planner` }
};

export default function SquadPlannerPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Squad Planner", href: "/squad-planner" }]} />
      <SoftwareApplicationJsonLd />
      <Breadcrumbs items={[{ label: "Squad Planner", href: "/squad-planner" }]} />
      <PageIntro
        eyebrow="Team planning"
        title={`${siteConfig.gameName} Squad Planner`}
        description="Plan your team, pets, units, traits, and build combos."
      />
      <AdsterraToolAd />
      <section className="mt-10 grid gap-4 md:grid-cols-3">
        <article className="content-card">
          <h2 className="text-xl font-bold text-white">Core slot</h2>
          <p className="mt-3 text-sm leading-6 text-white/66">Pick your loadout and see how it performs across rounds. </p>
        </article>
        <article className="content-card">
          <h2 className="text-xl font-bold text-white">Support slot</h2>
          <p className="mt-3 text-sm leading-6 text-white/66">Compare each roleplay decision, the job every player owns, and the risk that could create the next scene.</p>
        </article>
        <article className="content-card">
          <h2 className="text-xl font-bold text-white">Check before using</h2>
          <p className="mt-3 text-sm leading-6 text-white/66">Use recommendations as planning help, then double-check current game behavior, tier lists, wiki notes, or creator guides before spending rare resources.</p>
        </article>
      </section>
      <section className="mt-12">
        <SectionHeader eyebrow="Related pages" title="Plan with better game context" />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Link href="/tier-list" className="content-card">Tier List</Link>
          <Link href="/wiki/builds-and-entities" className="content-card">Builds and Entities</Link>
          <Link href="/guides/progression" className="content-card">Progression Guide</Link>
        </div>
      </section>
      <AdsterraToolBottom />
    </main>
  );
}
