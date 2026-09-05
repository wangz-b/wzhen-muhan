import type { Metadata } from "next";
import Link from "next/link";
import { guideTopicPages, siteConfig } from "@/data/site";
import { AdsterraArticleBottom, AdsterraArticleMid, AdsterraArticleTop } from "@/components/ads";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";
import type { TopicSection } from "@/types/site";

const topic = guideTopicPages.find((item) => item.href === "/guides/beginner")!;

function SectionCard({ section, asStep }: { section: TopicSection; asStep?: boolean }) {
  const Tag = asStep ? "li" : "article";

  return (
    <Tag className="content-card">
      <h2 className="text-xl font-bold text-white">{section.title}</h2>
      <p className="mt-3 text-sm leading-6 text-white/68">{section.body}</p>
      {section.bullets?.length ? (
        <ul className="mt-4 grid gap-2 text-sm leading-6 text-white/62">
          {section.bullets.map((item) => (
            <li key={item} className="border-l border-white/15 pl-3">{item}</li>
          ))}
        </ul>
      ) : null}
    </Tag>
  );
}

export const metadata: Metadata = {
  title: topic.title,
  description: topic.description,
  alternates: { canonical: `${siteConfig.domain}${topic.href}` }
};

export default function GuideTopicPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Guides", href: "/guides" }, { name: topic.title, href: topic.href }]} />
      <Breadcrumbs items={[{ label: "Guides", href: "/guides" }, { label: topic.title, href: topic.href }]} />
      <PageIntro eyebrow={topic.eyebrow} title={topic.title} description={topic.description}>
        <div className="flex flex-wrap gap-2">
          <span className="status-pill">{topic.checkedStatus}</span>
          <span className="status-pill">{topic.primaryKeyword}</span>
          {topic.secondaryKeywords.slice(0, 2).map((keyword) => (
            <span key={keyword} className="status-pill">{keyword}</span>
          ))}
        </div>
      </PageIntro>
      <AdsterraArticleTop />

      <section className="mt-10">
        <SectionHeader
          eyebrow="Walkthrough"
          title="Read this before you act"
          copy="Start with the player task, then use the steps and stuck-state checks below when the route is not working."
        />
        <div className="mt-6 space-y-5 rounded-lg border border-white/10 bg-white/[0.03] p-5 md:p-6">
          {topic.sections.map((section) => (
            <article key={section.title} className="border-b border-white/10 pb-5 last:border-b-0 last:pb-0">
              <h2 className="text-2xl font-bold text-white">{section.title}</h2>
              <p className="mt-3 max-w-4xl text-base leading-7 text-white/70">{section.body}</p>
              {section.bullets?.length ? (
                <ul className="mt-4 grid gap-2 text-sm leading-6 text-white/62">
                  {section.bullets.map((item) => (
                    <li key={item} className="border-l border-white/15 pl-3">{item}</li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section className="mt-12 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
        <article className="content-card">
          <SectionHeader eyebrow="Quick answer" title="What to do first" copy={topic.quickAnswer ?? topic.description} />
        </article>
        <aside className="content-card">
          <SectionHeader eyebrow="Best next move" title="Use the right page" />
          <p className="mt-4 text-sm leading-6 text-white/68">
            If you are deciding a match, use the calculator. If you are preparing for a long session, check codes first. If a reward or reset looks expensive, read the matching guide before spending.
          </p>
        </aside>
      </section>
      <AdsterraArticleMid />

      {topic.actionSteps?.length ? (
        <section className="mt-12">
          <SectionHeader eyebrow="Step-by-step" title="Follow this route" copy="Use the checklist in order when you want a direct path instead of general tips." />
          <ol className="mt-6 grid gap-4 lg:grid-cols-2">
            {topic.actionSteps.map((section) => (
              <SectionCard key={section.title} section={section} asStep />
            ))}
          </ol>
        </section>
      ) : null}

      {topic.stuckHelp?.length ? (
        <section className="mt-12">
          <SectionHeader eyebrow="If you're stuck" title="Fix the common roadblocks" copy="Use these checks when the guide route is not working in your current session." />
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {topic.stuckHelp.map((section) => (
              <SectionCard key={section.title} section={section} />
            ))}
          </div>
        </section>
      ) : null}

      {topic.commonMistakes?.length ? (
        <section className="mt-12">
          <SectionHeader eyebrow="Avoid this" title="Common mistakes" copy="Most wasted progress comes from rushing codes, upgrades, or match decisions before checking the immediate payoff." />
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {topic.commonMistakes.map((section) => (
              <SectionCard key={section.title} section={section} />
            ))}
          </div>
        </section>
      ) : null}

      {topic.faqs?.length ? (
        <section className="mt-12">
          <SectionHeader eyebrow="FAQ" title="Quick answers" />
          <div className="mt-6 grid gap-3">
            {topic.faqs.map((faq) => (
              <details key={faq.q} className="rounded-lg border border-white/10 bg-white/[0.035] p-4">
                <summary className="cursor-pointer font-bold text-white">{faq.q}</summary>
                <p className="mt-3 text-sm leading-6 text-white/65">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>
      ) : null}

      <section className="mt-12">
        <SectionHeader
          eyebrow="Next checks"
          title="Use these pages before acting"
          copy="Open the next page that matches what you are trying to do in-game."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {topic.relatedLinks.map((item) => (
            <Link key={item.href + item.label} href={item.href} className="content-card">
              <h3 className="text-lg font-bold text-white">{item.label}</h3>
              <p className="mt-2 text-sm leading-6 text-white/65">{item.description}</p>
            </Link>
          ))}
        </div>
      </section>
      <AdsterraArticleBottom />
    </main>
  );
}
