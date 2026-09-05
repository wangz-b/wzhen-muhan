import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig, wikiCards, wikiTopicPages } from "@/data/site";
import { AdsterraArticleBottom, AdsterraArticleMid, AdsterraArticleTop } from "@/components/ads";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

const coreSystems = [
  {
    title: "Letters and packs",
    body: "Open letter packs from Common through MYTHIC, then mount the first copy of each A–Z letter on your 26-slot board. Exact pools and odds are not published here because they are not verified."
  },
  {
    title: "Money and upgrades",
    body: "Mounted letters generate Money over time. Money funds more packs and the Money, Luck, and Pack Speed upgrade paths; check the live game for current prices and scaling."
  },
  {
    title: "Diamonds and Symbols",
    body: "Spare letters can be sold for Diamonds, which fund secret Symbol packs. Keep board and daily-word copies reserved before treating a duplicate as spare."
  }
];

const playerRoutes = [
  "Missing an A–Z slot? Mark your owned letters in the tracker before opening or selling anything.",
  "Trying the Word of the Day? Enter the word shown in your server and count repeated letters carefully.",
  "Choosing an upgrade? Compare the role of Money, Luck, and Pack Speed, then confirm live costs in Roblox."
];

const wikiFaqs = [
  {
    q: `What is the ${siteConfig.gameName} wiki for?`,
    a: "It explains the verified A–Z board, packs, currencies, upgrades, daily word, Symbols, and reported mutations without filling data gaps with guesses."
  },
  {
    q: "Are letter pack odds listed?",
    a: "No. The pack range is official, but a complete current pool and probability table has not been verified."
  },
  {
    q: "What are Neon and Rainbow letters?",
    a: "They are mutation appearances reported by current community research. Their rates, effects, eligibility, and Luck interactions remain unverified."
  }
];

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Wiki: Letters, Packs & Systems`,
  description: `${siteConfig.gameName} wiki for A-Z letters, packs, Money, Diamonds, upgrades, Symbols, the daily word, and mutation status.`,
  alternates: { canonical: `${siteConfig.domain}/wiki` }
};

export default function WikiPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Wiki", href: "/wiki" }]} />
      <Breadcrumbs items={[{ label: "Wiki", href: "/wiki" }]} />
      <PageIntro
        eyebrow="Wiki hub"
        title={`${siteConfig.gameName} Wiki`}
        description="A source-labelled guide to letters, packs, currencies, upgrades, Symbols, the daily word, mutations, and the facts that are still unknown."
      />
      <AdsterraArticleTop />

      <section className="mt-10 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <article className="content-card">
          <SectionHeader
            eyebrow="Quick answer"
            title="Collect all 26 letters, then protect the copies you still need"
            copy="Open packs, mount one of every A–Z letter, earn Money, improve your pack loop, and use true spare copies for Diamond-funded Symbol progression."
          />
          <div className="mt-6 grid gap-3 text-sm leading-6 text-white/68">
            <p>
              The verified loop is collection-first: letter packs supply the alphabet, mounted letters generate Money, and upgrades improve Money, Luck, or Pack Speed.
            </p>
            <p>
              The Word of the Day asks for a word shown in your own game. Use the checker for repeated-letter shortages; this site never claims to know the live answer.
            </p>
          </div>
        </article>

        <aside className="content-card">
          <SectionHeader eyebrow="Current facts" title="What is verified—and what is not" />
          <ul className="mt-4 grid gap-3 text-sm leading-6 text-white/68">
            <li>Official: 26 letters, Common-to-MYTHIC packs, mounted-letter income, three upgrades, spare-letter sales, Symbols, and Word of the Day.</li>
            <li>Community-observed: Neon and Rainbow mutation appearances.</li>
            <li>Not verified: individual letter stats, pack odds, prices, mutation rates/effects, and numeric trading values.</li>
          </ul>
        </aside>
      </section>

      <section className="mt-12">
        <SectionHeader
          eyebrow="Core systems"
          title="Start with the topic family that matches the job"
          copy="A useful wiki hub should move players toward a decision, not leave them in a directory."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {coreSystems.map((item) => (
            <article key={item.title} className="content-card">
              <h2 className="text-xl font-bold text-white">{item.title}</h2>
              <p className="mt-3 text-sm leading-6 text-white/66">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-12 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
        <article className="content-card">
          <SectionHeader eyebrow="Player routes" title="Common next moves" />
          <ul className="mt-4 grid gap-3 text-sm leading-6 text-white/68">
            {playerRoutes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <article className="content-card">
          <SectionHeader eyebrow="FAQ" title="Wiki questions" />
          <div className="mt-4 grid gap-4">
            {wikiFaqs.map((item) => (
              <div key={item.q}>
                <h3 className="font-semibold text-white">{item.q}</h3>
                <p className="mt-1 text-sm leading-6 text-white/65">{item.a}</p>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="mt-12">
        <SectionHeader
          eyebrow="Wiki topic pages"
          title="Open the topic that matches your task"
          copy="Each topic page should answer a concrete lookup and then send players to the next guide, tool, tier note, code page, or update check."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {wikiTopicPages.map((card) => (
            <Link key={card.title} href={card.href} className="content-card">
              <span className="mini-label">{card.eyebrow}</span>
              <h2 className="mt-3 text-xl font-bold text-white">{card.title}</h2>
              <p className="mt-2 text-sm leading-6 text-white/65">{card.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="status-pill">{card.primaryKeyword}</span>
                <span className="status-pill">{card.checkedStatus}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <SectionHeader
          eyebrow="Next actions"
          title="Use the fastest page for the decision"
          copy="The cards below connect broad wiki lookups to the player task pages that usually solve the problem faster."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {wikiCards.map((card) => (
            <Link key={card.title} href={card.href} className="content-card">
              <span className="mini-label">{card.eyebrow}</span>
              <h2 className="mt-3 text-xl font-bold text-white">{card.title}</h2>
              <p className="mt-2 text-sm leading-6 text-white/65">{card.description}</p>
            </Link>
          ))}
        </div>
      </section>
      <AdsterraArticleMid />
      <AdsterraArticleBottom />
    </main>
  );
}
