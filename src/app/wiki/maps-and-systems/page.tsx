import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig, wikiTopicPages } from "@/data/site";
import { AdsterraArticleBottom, AdsterraArticleMid, AdsterraArticleTop } from "@/components/ads";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

const topic = wikiTopicPages.find((item) => item.href === "/wiki/maps-and-systems")!;

export const metadata: Metadata = {
  title: topic.title,
  description: topic.description,
  alternates: { canonical: `${siteConfig.domain}${topic.href}` }
};

export default function WikiTopicPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Wiki", href: "/wiki" }, { name: topic.title, href: topic.href }]} />
      <Breadcrumbs items={[{ label: "Wiki", href: "/wiki" }, { label: topic.title, href: topic.href }]} />
      <PageIntro eyebrow={topic.eyebrow} title={topic.title} description={topic.description}>
        <div className="flex flex-wrap gap-2">
          <span className="status-pill">{topic.checkedStatus}</span>
          <span className="status-pill">{topic.primaryKeyword}</span>
        </div>
      </PageIntro>
      <p className="mt-5 max-w-3xl text-white/70">Choose a Brookhaven location, decide the opening situation, and give the scene a clear outcome so every player knows when to continue or end the story.</p>
      <AdsterraArticleTop />

      <section className="mt-10">
        <SectionHeader
          eyebrow="Walkthrough"
          title="What to check in-game"
          copy="Use these notes while you play, then follow the related pages for codes, rankings, tools, or route-specific help."
        />
        <div className="mt-6 space-y-5 rounded-lg border border-white/10 bg-white/[0.03] p-5 md:p-6">
        {topic.sections.map((section) => (
          <article key={section.title} className="border-b border-white/10 pb-5 last:border-b-0 last:pb-0">
            <h2 className="text-2xl font-bold text-white">{section.title}</h2>
            <p className="mt-3 max-w-4xl text-base leading-7 text-white/70">{section.body}</p>
          </article>
        ))}
        </div>
      </section>
      <AdsterraArticleMid />

      <section className="mt-12">
        <SectionHeader
          eyebrow="Related help"
          title="Connect the topic to player decisions"
          copy="Wiki pages should point players toward the practical pages that explain what to claim, compare, build, or check next."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {topic.relatedLinks.map((item) => (
            <Link key={item.href + item.label} href={item.href} className="content-card">
              <h3 className="text-lg font-bold text-white">{item.label}</h3>
              <p className="mt-2 text-sm leading-6 text-white/65">{item.description}</p>
            </Link>
          ))}
        </div>
      </section>
      <AdsterraArticleBottom />
    </main>
  );
}
