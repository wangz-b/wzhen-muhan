import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig, wikiCards, wikiTopicPages } from "@/data/site";
import { AdsterraArticleBottom, AdsterraArticleMid, AdsterraArticleTop } from "@/components/ads";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

const coreSystems = [
  {
    title: "Items and rewards",
    body: "Start here when a player needs drops, code rewards, unlocks, units, pets, weapons, or repeat rewards before spending time."
  },
  {
    title: "Maps and systems",
    body: "Use this path for modes, locations, bosses, event mechanics, puzzles, quests, outcomes, and progression rules."
  },
  {
    title: "Builds and entities",
    body: "Use this path for characters, classes, clans, traits, abilities, teams, values, ranking questions, and build choices."
  }
];

const playerRoutes = [
  "Need a reward? Check codes, items, rewards, and farming before grinding.",
  "Need to choose a unit, pet, class, or build? Check entities, tier notes, and the planner before spending rare resources.",
  "Need to understand a system? Check maps, rules, updates, and the calculator before trusting a shortcut."
];

const wikiFaqs = [
  {
    q: `What is the ${siteConfig.gameName} wiki for?`,
    a: "It helps players find the right item, reward, system, build, map, code, update, or tool page for their next in-game decision."
  },
  {
    q: "Should every topic become a separate wiki page?",
    a: "No. A topic should become its own page only when players search it directly and the page can answer the task with useful details."
  },
  {
    q: "Where should I go after this wiki hub?",
    a: "Use the topic pages below, then jump to codes, guides, tier list, updates, or tools based on what you are trying to do."
  }
];

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Wiki`,
  description: `${siteConfig.gameName} wiki hub for items, maps, systems, builds, rewards, and Roblox game entities.`,
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
        description="The Brookhaven RP wiki is a player hub for houses, vehicles, locations, jobs, gamepasses, and roleplay ideas."
      />
      <AdsterraArticleTop />

      <section className="mt-10 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <article className="content-card">
          <SectionHeader
            eyebrow="Quick answer"
            title="Use the wiki to find the exact system, reward, build, or route you need"
            copy="Start with the topic family that matches your current in-game question, then move to a guide, tool, tier page, or update page when the decision needs more detail."
          />
          <div className="mt-6 grid gap-3 text-sm leading-6 text-white/68">
            <p>
              The wiki is the navigation hub for player lookups: rewards, items, maps, systems, entities, build choices, update terms, and code-related unlocks.
            </p>
            <p>
              If a topic affects spending, grinding, ranking, or progression, use the linked practical page before making the choice in-game.
            </p>
          </div>
        </article>

        <aside className="content-card">
          <SectionHeader eyebrow="Current facts" title="What this hub can safely answer" />
          <ul className="mt-4 grid gap-3 text-sm leading-6 text-white/68">
            <li>Which wiki topic family owns a player question.</li>
            <li>Which pages help with rewards, systems, builds, updates, and tools.</li>
            <li>Which claims still need a more specific guide, calculator, tier note, or update page.</li>
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
