import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { Breadcrumbs, PageIntro } from "@/components/ui/content";

export const metadata: Metadata = {
  title: `${siteConfig.name} Fan-made Disclosure`,
  description: `Unofficial fan-made disclosure for ${siteConfig.name}.`,
  alternates: { canonical: `${siteConfig.domain}/disclosure` }
};

export default function DisclosurePage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <Breadcrumbs items={[{ label: "Disclosure", href: "/disclosure" }]} />
      <PageIntro
        eyebrow="Fan-made disclosure"
        title="Unofficial PokeMMO fan resource"
        description={`${siteConfig.name} and patrouski.shop are independent fan resources. They are not affiliated with or endorsed by PokeMMO, Nintendo, The Pokémon Company, Pokémon, or Patrouski.`}
      />
      <section className="mt-10 content-card">
        <h2 className="text-2xl font-bold text-white">Official sources remain authoritative</h2>
        <p className="mt-3 leading-7 text-white/68">
          If this site, a community tracker, and the official PokeMMO game page disagree, treat the official PokeMMO page and live in-game behavior as more authoritative.
        </p>
      </section>

      <section className="mt-4 grid gap-4">
        <article className="content-card">
          <h2 className="text-xl font-bold text-white">Advertising and sponsored links</h2>
          <p className="mt-2 leading-7 text-white/68">
            This site may show advertising or sponsored links when monetization is enabled and configured.
            Advertising does not influence feature status, source precedence, or correction decisions.
          </p>
        </article>

        <article className="content-card">
          <h2 className="text-xl font-bold text-white">Corrections</h2>
          <p className="mt-2 leading-7 text-white/68">
            Use the contact page to report outdated dates, missing official links, unclear feature status,
            attribution issues, or rights concerns.
          </p>
        </article>
      </section>
    </main>
  );
}
