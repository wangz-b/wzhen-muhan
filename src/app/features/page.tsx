import type { Metadata } from "next";
import Link from "next/link";
import { featureRecords } from "@/data/features";
import { siteConfig } from "@/data/site";
import { AdsterraArticleBottom, AdsterraArticleMid, AdsterraArticleTop } from "@/components/ads";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

const labels = { confirmed: "Confirmed", reported: "Reported", "not-confirmed": "Not confirmed" } as const;
const featureFaq = [
  {q:"Which PokeMMO B2/W2 features are confirmed?",a:"The expansion announcement, September 19 preview date and official general client page are confirmed. Preview access details and individual gameplay features need more evidence."},
  {q:"Does an original Black 2 or White 2 feature automatically appear in PokeMMO?",a:"No. Original-game references identify possible topics, but only official PokeMMO information or reproducible preview observation can confirm implementation."},
  {q:"Are roaming legendaries confirmed?",a:"No. Recent community discussion is tracked as a report, not an official confirmation."},
  {q:"How will statuses change during the preview?",a:"A status changes only when a dated official note or reproducible direct observation supports it. The source and check date stay visible."}
];

export const metadata: Metadata = { title:"PokeMMO B2/W2 Features: Confirmed vs Not Confirmed", description:"Compare confirmed, reported and unconfirmed PokeMMO B2/W2 features with dated sources, including content that exists only in the original games.", alternates:{canonical:`${siteConfig.domain}/features`} };

export default function FeaturesPage() {
  const counts = { confirmed: featureRecords.filter((item) => item.state === "confirmed").length, reported: featureRecords.filter((item) => item.state === "reported").length, unknown: featureRecords.filter((item) => item.state === "not-confirmed").length };
  return <main className="mx-auto max-w-7xl px-4 py-10"><BreadcrumbJsonLd items={[{name:"Home",href:"/"},{name:"Feature Tracker",href:"/features"}]} /><FaqJsonLd items={featureFaq} /><Breadcrumbs items={[{label:"Feature Tracker",href:"/features"}]} /><PageIntro eyebrow="Checked September 5, 2026" title="PokeMMO B2/W2 feature tracker" description="See what PokeMMO has announced, what players are discussing and what remains unknown—without treating original-game features as confirmed MMO content." /><AdsterraArticleTop />
    <section className="mt-8 grid gap-4 sm:grid-cols-3"><article className="content-card"><span className="mini-label">Confirmed</span><strong className="mt-3 block text-4xl text-emerald-300">{counts.confirmed}</strong><p className="mt-2 text-sm text-white/55">Facts stated on official PokeMMO pages</p></article><article className="content-card"><span className="mini-label">Reported</span><strong className="mt-3 block text-4xl text-amber-200">{counts.reported}</strong><p className="mt-2 text-sm text-white/55">Community discussion, not official proof</p></article><article className="content-card"><span className="mini-label">Not confirmed</span><strong className="mt-3 block text-4xl text-sky-200">{counts.unknown}</strong><p className="mt-2 text-sm text-white/55">Questions waiting for stronger evidence</p></article></section>
    <section className="mt-10"><SectionHeader eyebrow="Status matrix" title="Every claim keeps its evidence state" copy="Open the source where available. The date tells you when the status was last checked." /><div className="mt-6 grid gap-4 md:grid-cols-2">{featureRecords.map((item) => <article key={item.id} className="content-card"><div className="flex items-start justify-between gap-4"><h2 className="text-xl font-bold text-white">{item.title}</h2><span className={`status-pill status-${item.state}`}>{labels[item.state]}</span></div><p className="mt-3 text-sm leading-6 text-white/65">{item.summary}</p><div className="mt-4 flex flex-wrap gap-3 text-xs text-white/45"><span>{item.sourceLabel}</span><span>Checked {item.checkedDate}</span>{item.sourceUrl ? <a className="text-cyan-300 hover:underline" href={item.sourceUrl} target="_blank" rel="noreferrer">Open source</a> : null}</div></article>)}</div></section>
    <AdsterraArticleMid />
    <section className="mt-10 grid gap-4 lg:grid-cols-2"><article className="content-card"><SectionHeader eyebrow="Important distinction" title="Cartridge feature does not mean PokeMMO feature" copy="Black 2 and White 2 references help name the questions. They do not prove PokeMMO availability, rewards, rates or behavior." /></article><Link href="/features/side-content" className="content-card"><span className="mini-label">Deep dive</span><h2 className="mt-3 text-xl font-bold text-white">PWT, Pokéstar, Join Avenue and challenge areas</h2><p className="mt-3 text-sm text-white/65">Check the dedicated side-content status page for each original-game activity.</p></Link></section>
    <section className="mt-10 content-card"><SectionHeader eyebrow="Questions" title="Feature tracker FAQ" /><div className="mt-5 grid gap-3">{featureFaq.map((item) => <details key={item.q} className="rounded-xl border border-white/10 p-4"><summary className="cursor-pointer font-bold text-white">{item.q}</summary><p className="mt-3 text-sm leading-6 text-white/65">{item.a}</p></details>)}</div></section>
    <nav className="mt-8 flex flex-wrap gap-3"><Link className="button-secondary" href="/calculator">Filter the evidence</Link><Link className="button-secondary" href="/updates">See dated updates</Link><Link className="button-secondary" href="/tier-list">Tier-list evidence</Link><Link className="button-secondary" href="/sources">Review all sources</Link></nav><AdsterraArticleBottom />
  </main>;
}
