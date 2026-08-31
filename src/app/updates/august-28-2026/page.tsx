import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { AdsterraArticleBottom, AdsterraArticleMid, AdsterraArticleTop } from "@/components/ads";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

const plannedPage = {
  "route": "/updates/august-28-2026",
  "title": "Brookhaven RP August 28 2026",
  "description": "Find the current Brookhaven RP details for brookhaven library house, including what to do next and related pages.",
  "eyebrow": "Update Detail",
  "primaryKeyword": "brookhaven library house",
  "keywords": [
    "brookhaven library house",
    "brookhaven lavender luxury house",
    "lavender props brookhaven"
  ],
  "parentHub": "/updates",
  "internalLinks": [
    {
      "href": "/updates",
      "label": "Updates",
      "description": "Go back to the main topic hub."
    },
    {
      "href": "/updates",
      "label": "Updates",
      "description": "Related page"
    },
    {
      "href": "/wiki/houses",
      "label": "Houses",
      "description": "Related page"
    },
    {
      "href": "/wiki/vehicles",
      "label": "Vehicles",
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
            title="What to do first"
            copy="Use this page as the quick path for the topic. Start with the practical step below, then follow the related pages when you need codes, rankings, or deeper guides."
          />
          <div className="mt-6 grid gap-4 text-sm leading-6 text-white/68">
            <p>
              For <strong className="text-white">{plannedPage.primaryKeyword}</strong>, start by checking the in-game menu, reward screen, event area, or related system that matches this topic. If the page is about an item, unit, map, code, or update, compare it with the linked guide pages before spending rare resources.
            </p>
          </div>
        </article>

        <aside className="content-card">
          <SectionHeader eyebrow="Player checklist" title="Before you act" />
          <ul className="mt-4 grid gap-3 text-sm leading-6 text-white/68">
            <li>Check whether the topic is tied to a limited event, code reward, boss, map, unit, or upgrade path.</li>
            <li>Use codes and beginner guides first when the topic affects early progression.</li>
            <li>Use tier and calculator pages before spending rare currency or materials.</li>
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
