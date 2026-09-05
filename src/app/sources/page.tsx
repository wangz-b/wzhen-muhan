import type { Metadata } from "next";
import Link from "next/link";
import { officialLinks, siteConfig } from "@/data/site";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Official and Community Links`,
  description: `Official and community links for ${siteConfig.gameName} codes, guides, wiki pages, and tier-list updates.`,
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
        description="Use this page to find Roblox pages, creator channels, Discord, Trello, wiki references, guides, and community context."
      />

      <section className="mt-10">
        <SectionHeader
          eyebrow="Primary references"
          title="Where players should look first"
          copy="Start with official Roblox and creator-owned links, then use dated community references when official details are unavailable."
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
    </main>
  );
}
