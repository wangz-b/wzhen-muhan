import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { Breadcrumbs, PageIntro } from "@/components/ui/content";

export const metadata: Metadata = {
  title: `${siteConfig.name} Terms of Service`,
  description: `Terms of Service for using ${siteConfig.name}.`,
  alternates: { canonical: `${siteConfig.domain}/terms` }
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <Breadcrumbs items={[{ label: "Terms", href: "/terms" }]} />
      <PageIntro
        eyebrow="Terms of Service"
        title="Terms of Service"
        description={`These terms explain how to use ${siteConfig.name}, an unofficial fan-made Roblox information site for ${siteConfig.gameName}.`}
      />

      <section className="mt-10 grid gap-4">
        <article className="content-card">
          <h2 className="text-xl font-bold text-white">Unofficial fan site</h2>
          <p className="mt-2 leading-7 text-white/68">
            This site is not operated by Roblox, the game creators, or any official support team. Roblox,
            creator-owned channels, and in-game notices remain the official places for account, purchase,
            moderation, and support decisions.
          </p>
        </article>

        <article className="content-card">
          <h2 className="text-xl font-bold text-white">Informational use</h2>
          <p className="mt-2 leading-7 text-white/68">
            Codes, rankings, calculators, and guide notes are provided for player planning. They may change
            when the game updates, when a code expires, or when better public information becomes available.
          </p>
        </article>

        <article className="content-card">
          <h2 className="text-xl font-bold text-white">Acceptable use</h2>
          <p className="mt-2 leading-7 text-white/68">
            Do not use this site to submit Roblox passwords, payment details, account recovery data, spam,
            malicious links, scraping abuse, or content that violates Roblox or third-party service rules.
          </p>
        </article>

        <article className="content-card">
          <h2 className="text-xl font-bold text-white">Third-party services and advertising</h2>
          <p className="mt-2 leading-7 text-white/68">
            The site may link to or embed third-party services such as Roblox, Discord, Trello, YouTube,
            Google Analytics, and advertising partners including Adsterra. Those services operate under
            their own terms and privacy policies.
          </p>
        </article>

        <article className="content-card">
          <h2 className="text-xl font-bold text-white">No warranty</h2>
          <p className="mt-2 leading-7 text-white/68">
            The site is provided as-is. We work to keep update notes useful, but we cannot guarantee that
            every reward, ranking, formula, or external link is current at all times.
          </p>
        </article>
      </section>
    </main>
  );
}
