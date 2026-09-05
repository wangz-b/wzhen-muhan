import type { Metadata } from "next";
import Link from "next/link";
import { guideClusters, siteConfig } from "@/data/site";
import { AdsterraArticleBottom, AdsterraArticleMid, AdsterraArticleTop } from "@/components/ads";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Guides`,
  description: `Source-checked ${siteConfig.gameName} preview preparation and safe client setup guides.`,
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
        description="Start with guidance that is useful before the preview. Exact story routes, level caps, encounters, and rewards stay unpublished until direct evidence exists."
      />
      <AdsterraArticleTop />

      <section className="mt-10">
        <SectionHeader
          eyebrow="Recommended guides"
          title="Prepare without treating guesses as facts"
          copy="These pages separate safe preparation from details that can only be verified when the preview is accessible."
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

      <section className="mt-12 content-card">
        <span className="mini-label">Held until evidence exists</span>
        <h2 className="mt-3 text-2xl font-bold text-white">Story routes and progression tables are not ready</h2>
        <p className="mt-3 leading-7 text-white/68">
          We are not publishing copied Black 2/White 2 walkthroughs as PokeMMO instructions. Gym order,
          level caps, encounter tables, rewards, and economy advice will need direct preview observations
          plus a second source or repeatable test before they become guides here.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link className="button-secondary" href="/preview">Check preview status</Link>
          <Link className="button-secondary" href="/wiki">See open evidence gaps</Link>
        </div>
      </section>
      <AdsterraArticleBottom />
    </main>
  );
}
