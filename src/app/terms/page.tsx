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
        description={`These terms explain how to use ${siteConfig.name}, an unofficial fan-made PokeMMO information site for ${siteConfig.gameName}.`}
      />

      <section className="mt-10 grid gap-4">
        <article className="content-card">
          <h2 className="text-xl font-bold text-white">Unofficial fan site</h2>
          <p className="mt-2 leading-7 text-white/68">
            This site is not operated by PokeMMO, the game creators, or any official support team. PokeMMO,
            creator-owned channels, and in-game notices remain the official places for account, purchase,
            moderation, and support decisions.
          </p>
        </article>

        <article className="content-card">
          <h2 className="text-xl font-bold text-white">Informational use</h2>
          <p className="mt-2 leading-7 text-white/68">
            Countdown results, feature statuses, and guide notes are provided for player planning. They may
            change when PokeMMO publishes new information or better public evidence becomes available.
          </p>
        </article>

        <article className="content-card">
          <h2 className="text-xl font-bold text-white">Acceptable use</h2>
          <p className="mt-2 leading-7 text-white/68">
            Do not use this site to submit PokeMMO passwords, payment details, account recovery data, spam,
            malicious links, scraping abuse, or content that violates PokeMMO or third-party service rules.
          </p>
        </article>

        <article className="content-card">
          <h2 className="text-xl font-bold text-white">Third-party services and advertising</h2>
          <p className="mt-2 leading-7 text-white/68">
            The site may link to or embed third-party services such as PokeMMO, YouTube,
            Google Analytics, and advertising partners including Adsterra. Those services operate under
            their own terms and privacy policies.
          </p>
        </article>

        <article className="content-card">
          <h2 className="text-xl font-bold text-white">No warranty</h2>
          <p className="mt-2 leading-7 text-white/68">
            The site is provided as-is. We work to keep update notes useful, but we cannot guarantee that
            every date, feature status, guide detail, or external link is current at all times.
          </p>
        </article>
      </section>
    </main>
  );
}
