import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { Breadcrumbs, PageIntro } from "@/components/ui/content";

export const metadata: Metadata = {
  title: `About ${siteConfig.name}`,
  description: `About ${siteConfig.name}, its author, update process, and correction path.`,
  alternates: { canonical: `${siteConfig.domain}/about` }
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <Breadcrumbs items={[{ label: "About", href: "/about" }]} />
      <PageIntro
        eyebrow="About us"
        title={`About ${siteConfig.name}`}
        description={`${siteConfig.name} is an independent fan resource focused on the PokeMMO B2/W2 preview, evidence-labelled feature tracking, safe setup, and practical preparation.`}
      />

      <section className="mt-10 grid gap-4">
        <article className="content-card">
          <h2 className="text-xl font-bold text-white">Author and editor profile</h2>
          <p className="mt-2 leading-7 text-white/68">
            The site is maintained by an independent PokeMMO guide editor who reviews public game pages,
            creator-owned channels, community reports, and direct player-facing changes before updating
            dates, feature status, guides, or link pages.
          </p>
        </article>

        <article className="content-card">
          <h2 className="text-xl font-bold text-white">How pages are reviewed</h2>
          <p className="mt-2 leading-7 text-white/68">
            Pages should separate official PokeMMO or creator information from community reports. When public
            reports disagree, the page uses the clearest useful answer and keeps older or conflicting notes only
            when they help players avoid mistakes.
          </p>
        </article>

        <article className="content-card">
          <h2 className="text-xl font-bold text-white">Corrections</h2>
          <p className="mt-2 leading-7 text-white/68">
            If a page has an outdated code, missing creator link, or unclear tier note, use the contact page
            with the page URL, the claim, and the reference that supports the correction.
          </p>
        </article>
      </section>
    </main>
  );
}
