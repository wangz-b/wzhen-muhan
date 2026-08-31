import type { Metadata } from "next";
import { activeCodes, faqs, siteConfig } from "@/data/site";
import { AdsterraArticleBottom, AdsterraArticleMid, AdsterraArticleTop } from "@/components/ads";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Codes`,
  description: `Collected ${siteConfig.gameName} code status, listed rewards when available, redemption steps, and expired-code notes.`,
  alternates: { canonical: `${siteConfig.domain}/codes` },
  openGraph: {
    title: `${siteConfig.gameName} Codes`,
    description: `Collected ${siteConfig.gameName} code status, listed rewards when available, redemption steps, and expired-code notes.`,
    url: `${siteConfig.domain}/codes`,
    images: ["/opengraph-image"]
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.gameName} Codes`,
    description: `Collected ${siteConfig.gameName} code status, listed rewards when available, redemption steps, and expired-code notes.`,
    images: ["/opengraph-image"]
  }
};

export default function CodesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Codes", href: "/codes" }]} />
      <FaqJsonLd items={faqs.codes} />
      <Breadcrumbs items={[{ label: "Codes", href: "/codes" }]} />

      <PageIntro
        eyebrow="Freshness-sensitive"
        title={`${siteConfig.gameName} Codes`}
        description="Use this page for collected code status, expired-code notes, and redemption steps. Try listed rewards first and keep older reports visible when players may still search for them."
      />
      <AdsterraArticleTop />

      <section className="mt-10">
        <SectionHeader
          eyebrow="Active list"
          title="Collected active-code status"
          copy="Do not publish guessed codes. List a code only when Roblox, a creator-owned channel, or an established public tracker lists it."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {activeCodes.map((code) => (
            <article key={code.code} className="content-card">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 className="font-mono text-2xl font-extrabold text-[color:var(--accent)]">{code.code}</h2>
                <span className="status-pill">{code.status}</span>
              </div>
              <p className="mt-3 text-white/70">{code.reward}</p>
              <p className="mt-2 text-sm text-white/45">Added or checked: {code.addedDate}</p>
            </article>
          ))}
        </div>
      </section>
      <AdsterraArticleMid />

      <section className="mt-10 grid gap-4 lg:grid-cols-2">
        <article className="content-card">
          <SectionHeader
            eyebrow="Redeem flow"
            title="How to redeem codes"
            copy="Roblox code flows often move between shop, settings, menu, and event panels, so check the visible in-game menus first."
          />
          <ol className="mt-5 grid gap-3 text-white/70">
            <li>1. Open the game from the official Roblox page.</li>
            <li>2. Finish any tutorial gate that hides menus.</li>
            <li>3. Find the Codes, Rewards, Shop, or Settings panel.</li>
            <li>4. Paste the code exactly, then claim the reward.</li>
          </ol>
        </article>
        <article className="content-card">
          <SectionHeader
            eyebrow="Freshness"
            title="Why codes stop working"
            copy="Codes can expire after updates, events, milestones, or creator announcements. Keep expired codes visible when players still search for them."
          />
        </article>
      </section>
      <AdsterraArticleBottom />
    </main>
  );
}
