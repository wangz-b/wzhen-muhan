import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { AdsterraArticleBottom, AdsterraArticleMid, AdsterraArticleTop } from "@/components/ads";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

const plannedPage = {
  "route": "/trading",
  "title": "Collect The Alphabet Trading & Value Status",
  "description": "Use safe trading checks and see why numeric Collect The Alphabet values remain unlisted until a transparent, maintained source is available.",
  "eyebrow": "Source Watch",
  "primaryKeyword": "collect the alphabet trading values",
  "keywords": [
    "collect the alphabet trading values",
    "value list",
    "how to trade",
    "value calculator"
  ],
  "parentHub": "/guides",
  "internalLinks": [
    {
      "href": "/guides",
      "label": "Guides",
      "description": "Go back to the main topic hub."
    },
    {
      "href": "/updates",
      "label": "Updates",
      "description": "Related page"
    },
    {
      "href": "/sources",
      "label": "Sources",
      "description": "Related page"
    },
    {
      "href": "/guides",
      "label": "Guides",
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
            title="There is no verified numeric value list here yet"
            copy="Trading may be present in the live game, but a fair evaluator needs a dated item roster, comparison currency, demand, trends, and a maintainer. Those inputs have not been verified."
          />
          <div className="mt-6 grid gap-4 text-sm leading-6 text-white/68">
            <p>
              Confirm both sides in the final Roblox trade window, reject pressure or trust trades, and keep the first copy needed for your A–Z board. Use the duplicate helper to reserve copies; it does not claim a market price.
            </p>
          </div>
        </article>

        <aside className="content-card">
          <SectionHeader eyebrow="Player checklist" title="Before you act" />
          <ul className="mt-4 grid gap-3 text-sm leading-6 text-white/68">
            <li>Re-check every letter and quantity before confirming.</li>
            <li>Do not treat rarity alone as a numeric value.</li>
            <li>Keep board, daily-word, and personal-reserve copies first.</li>
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
