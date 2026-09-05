import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig, updateCards } from "@/data/site";
import { AdsterraArticleBottom, AdsterraArticleMid, AdsterraArticleTop } from "@/components/ads";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Updates and Preview Timeline`,
  description: `Track the official ${siteConfig.gameName} announcement, September 19 preview date, and unresolved launch questions.`,
  alternates: { canonical: `${siteConfig.domain}/updates` }
};

export default function UpdatesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Updates", href: "/updates" }]} />
      <Breadcrumbs items={[{ label: "Updates", href: "/updates" }]} />
      <PageIntro
        eyebrow="Updates"
        title={`${siteConfig.gameName} Update Timeline`}
        description="A dated record of what PokeMMO has announced, what the September preview means, and which details still need official confirmation."
      />
      <AdsterraArticleTop />

      <section className="mt-10">
        <SectionHeader
          eyebrow="What changed"
          title="Two official milestones, several open questions"
          copy="The preview announcement establishes a date, but it does not establish final launch timing, exact event hours, progress persistence, or a complete feature list."
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
          <h2 className="text-xl font-bold text-white">August 19, 2026</h2>
          <p className="mt-3 text-sm leading-6 text-white/66">PokeMMO announced B2/W2 and named a Preview Weekend for September 19. This is the first official milestone tracked here.</p>
        </article>
        <article className="content-card">
          <h2 className="text-xl font-bold text-white">September 19, 2026</h2>
          <p className="mt-3 text-sm leading-6 text-white/66">The announced preview date. It is not presented here as the final B2/W2 release date, and an exact start time is still unconfirmed.</p>
        </article>
        <article className="content-card">
          <h2 className="text-xl font-bold text-white">Next verification pass</h2>
          <p className="mt-3 text-sm leading-6 text-white/66">Watch official PokeMMO channels for event hours, access steps, required files, persistence rules, final release timing, and implemented side content.</p>
        </article>
      </section>
      <AdsterraArticleBottom />
    </main>
  );
}
