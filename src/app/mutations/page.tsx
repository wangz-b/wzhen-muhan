import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { AdsterraArticleBottom, AdsterraArticleMid, AdsterraArticleTop } from "@/components/ads";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

const plannedPage = {
  "route": "/mutations",
  "title": "Collect The Alphabet Mutations: Neon & Rainbow Status",
  "description": "Track what current sources support about Neon and Rainbow mutations, while keeping rates, effects, eligible packs, and Luck interactions clearly unverified.",
  "eyebrow": "Source Watch",
  "primaryKeyword": "collect the alphabet mutations",
  "keywords": [
    "collect the alphabet mutations",
    "neon mutation",
    "rainbow mutation",
    "mutation luck"
  ],
  "parentHub": "/wiki",
  "internalLinks": [
    {
      "href": "/wiki",
      "label": "Wiki",
      "description": "Go back to the main topic hub."
    },
    {
      "href": "/updates",
      "label": "Updates",
      "description": "Related page"
    },
    {
      "href": "/wiki",
      "label": "Wiki",
      "description": "Related page"
    },
    {
      "href": "/sources",
      "label": "Sources",
      "description": "Related page"
    },
    {
      "href": "/codes",
      "label": "Codes",
      "description": "Claim rewards before spending time or currency."
    },
    {
      "href": "/tier-list",
      "label": "Tier List",
      "description": "Compare picks before using rare resources."
    }
  ]
};

export const metadata: Metadata = {
  title: plannedPage.title,
  description: plannedPage.description,
  alternates: { canonical: `${siteConfig.domain}${plannedPage.route}` }
};

export default function PlannedSeoPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[
        { name: "Home", href: "/" },
        { name: plannedPage.parentHub === "/" ? "Home" : plannedPage.parentHub, href: plannedPage.parentHub },
        { name: plannedPage.title, href: plannedPage.route }
      ]} />
      <Breadcrumbs items={[
        { label: plannedPage.parentHub === "/" ? "Home" : plannedPage.parentHub, href: plannedPage.parentHub },
        { label: plannedPage.title, href: plannedPage.route }
      ]} />

      <PageIntro eyebrow={plannedPage.eyebrow} title={plannedPage.title} description={plannedPage.description}>
        <div className="flex flex-wrap gap-2">
          <span className="status-pill">{plannedPage.primaryKeyword}</span>
          <span className="status-pill">Updated guide</span>
        </div>
      </PageIntro>
      <AdsterraArticleTop />

      <section className="mt-10 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
        <article className="content-card">
          <SectionHeader
            eyebrow="Quick answer"
            title="Neon and Rainbow are reported appearances—not verified formulas"
            copy="Current fan research supports the existence of Neon and Rainbow mutation appearances. No selected source provides dependable rates, stat effects, eligible pack tables, or Luck stacking rules."
          />
          <div className="mt-6 grid gap-4 text-sm leading-6 text-white/68">
            <p>
              Check the exact label and visual shown on your letter in Roblox. Treat mutation potions as update-sensitive resources, and do not infer a probability from a short opening video or a lucky session.
            </p>
          </div>
        </article>

        <aside className="content-card">
          <SectionHeader eyebrow="Player checklist" title="Before you act" />
          <ul className="mt-4 grid gap-3 text-sm leading-6 text-white/68">
            <li>Verify the letter itself shows Neon or Rainbow in the current game UI.</li>
            <li>Do not use an unofficial percentage as a guaranteed drop rate.</li>
            <li>Check updates and codes for mutation-related changes or potion rewards.</li>
          </ul>
        </aside>
      </section>
      <AdsterraArticleMid />

      <section className="mt-12">
        <SectionHeader
          eyebrow="Related searches"
          title="Topics this page helps with"
          copy="These phrases usually point to the same player question. Use them to decide whether you need a code, guide, wiki page, or ranking next."
        />
        <div className="mt-6 flex flex-wrap gap-2">
          {plannedPage.keywords.map((keyword) => (
            <span key={keyword} className="status-pill">{keyword}</span>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <SectionHeader
          eyebrow="Related pages"
          title="Where to go next"
          copy="Open the next page that matches what you are trying to do in-game."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {plannedPage.internalLinks.map((item) => (
            <Link key={item.href + item.label} href={item.href} className="content-card">
              <h2 className="text-lg font-bold text-white">{item.label}</h2>
              <p className="mt-2 text-sm leading-6 text-white/65">{item.description}</p>
            </Link>
          ))}
        </div>
      </section>
      <AdsterraArticleBottom />
    </main>
  );
}
