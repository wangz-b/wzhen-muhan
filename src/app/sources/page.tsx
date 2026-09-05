import type { Metadata } from "next";
import Link from "next/link";
import { officialLinks, siteConfig } from "@/data/site";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Official and Community Links`,
  description: `Official PokeMMO links, source precedence, and creator-context rules used by ${siteConfig.name}.`,
  alternates: { canonical: `${siteConfig.domain}/sources` }
};

export default function SourcesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Official and Community Links", href: "/sources" }]} />
      <Breadcrumbs items={[{ label: "Official and Community Links", href: "/sources" }]} />
      <PageIntro
        eyebrow="References"
        title={`${siteConfig.gameName} Official and Community Links`}
        description="Use this ledger to verify dates and claims. Official PokeMMO pages lead; creator and community material is labelled as context, never as proof of implementation."
      />

      <section className="mt-10">
        <SectionHeader
          eyebrow="Primary references"
          title="Where players should look first"
          copy="Start with official PokeMMO and creator-owned links, then use dated community references when official details are unavailable."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {officialLinks.map((link) => {
            const content = (
              <>
                <span className="mini-label">{link.eyebrow}</span>
                <h2 className="mt-3 text-xl font-bold text-white">{link.title}</h2>
                <p className="mt-2 text-sm leading-6 text-white/65">{link.description}</p>
              </>
            );

            return link.href.startsWith("/") ? (
              <Link key={link.href} href={link.href} className="content-card">
                {content}
              </Link>
            ) : (
              <a key={link.href} href={link.href} className="content-card" target="_blank" rel="noreferrer">
                {content}
              </a>
            );
          })}
        </div>
      </section>

      <section className="mt-12 grid gap-4 md:grid-cols-3">
        <article className="content-card"><span className="mini-label">Priority 1</span><h2 className="mt-3 text-xl font-bold text-white">Official PokeMMO pages</h2><p className="mt-2 text-sm leading-6 text-white/65">Use the homepage, forum, support site, and official client page for dates, access, and software instructions.</p></article>
        <article className="content-card"><span className="mini-label">Priority 2</span><h2 className="mt-3 text-xl font-bold text-white">Direct preview evidence</h2><p className="mt-2 text-sm leading-6 text-white/65">Repeatable observations can support mechanics and feature status once the preview is accessible.</p></article>
        <article className="content-card"><span className="mini-label">Context only</span><h2 className="mt-3 text-xl font-bold text-white">Creator and community reports</h2><p className="mt-2 text-sm leading-6 text-white/65">Useful for finding questions and tests, but not enough by themselves to mark a feature confirmed.</p></article>
      </section>

      <section className="mt-4 content-card">
        <h2 className="text-xl font-bold text-white">What is deliberately not linked</h2>
        <p className="mt-3 leading-7 text-white/68">No unofficial ROM downloads are linked. No dedicated official B2/W2 Trello or wiki was found during the September 5 check, so this site does not invent one or label a community board as official.</p>
      </section>
    </main>
  );
}
