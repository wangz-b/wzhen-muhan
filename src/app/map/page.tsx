import type { Metadata } from "next";
import Link from "next/link";
import { AdsterraArticleBottom, AdsterraArticleMid, AdsterraArticleTop } from "@/components/ads";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Brookhaven RP Map and Locations",
  description: "Find Brookhaven RP map locations for homes, jobs, emergency scenes, schools, shops, travel, and group roleplay.",
  alternates: { canonical: `${siteConfig.domain}/map` }
};

const places = [
  ["Town center", "Use the central streets as an easy meeting point for families, friends, shopping stories, and vehicle scenes."],
  ["School and daycare", "Good settings for student, teacher, parent, sports, and after-school roleplay."],
  ["Hospital, police and fire station", "Build emergency stories with clear jobs, a caller, responders, and a safe ending."],
  ["Homes and apartments", "Choose a house from the house guide, assign family or roommate roles, and start with one everyday problem."],
  ["Airport and roads", "Use vehicles and travel locations for taxi, pilot, road-trip, delivery, and rescue stories."],
  ["Shops and workplaces", "Pick a public job location when every player needs an obvious role and a reason to interact."]
];

export default function MapPage() {
  return <main className="mx-auto max-w-7xl px-4 py-10">
    <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Map", href: "/map" }]} />
    <Breadcrumbs items={[{ label: "Map", href: "/map" }]} />
    <PageIntro eyebrow="Brookhaven map" title="Brookhaven RP Map and Roleplay Locations" description="Choose a recognizable place, give every player a role, and use the location to make the first scene easy to start." />
    <AdsterraArticleTop />
    <section className="mt-10"><SectionHeader eyebrow="Location guide" title="Pick a place that gives everyone something to do" /><div className="mt-6 grid gap-4 md:grid-cols-2">{places.map(([title, body]) => <article className="content-card" key={title}><h2 className="text-xl font-bold text-white">{title}</h2><p className="mt-3 text-white/68">{body}</p></article>)}</div></section>
    <AdsterraArticleMid />
    <section className="mt-10 content-card"><h2 className="text-2xl font-bold text-white">Plan the next scene</h2><p className="mt-3 text-white/68">Open Story Lab for a cast and plot, or compare houses and vehicles before choosing your setting.</p><div className="mt-5 flex flex-wrap gap-3"><Link className="button-primary" href="/tools/roleplay-generator">Open Story Lab</Link><Link className="button-secondary" href="/wiki/houses">House guide</Link><Link className="button-secondary" href="/wiki/vehicles">Vehicle guide</Link></div></section>
    <AdsterraArticleBottom />
  </main>;
}
