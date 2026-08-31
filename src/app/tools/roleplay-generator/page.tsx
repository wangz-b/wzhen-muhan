import type { Metadata } from "next";
import { RoleplayGenerator } from "@/components/tools/RoleplayGenerator";
import { AdsterraArticleMid, AdsterraToolAd, AdsterraToolBottom } from "@/components/ads";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro } from "@/components/ui/content";
import { siteConfig } from "@/data/site";

const faqs = [
  { q: "How does the Brookhaven Story Lab choose an idea?", a: "It combines your player count, role group, location and tone with a small set of roleplay patterns grounded in public Brookhaven guides." },
  { q: "Are these stories official Brookhaven lore?", a: "No. Brookhaven's own guides describe the locations and job groups, but the story beats are creative prompts for players." },
  { q: "Can I make Brookhaven ideas for two players?", a: "Yes. Choose two players and the result assigns two roles that can start the scenario together." },
  { q: "Does the tool store my choices?", a: "No account is needed, and the generator runs in your browser without asking for a Roblox username or password." }
];

export const metadata: Metadata = {
  title: "Brookhaven Roleplay Ideas Generator",
  description: "Choose your group size, role, location and tone to create a Brookhaven roleplay setup with roles and story beats.",
  alternates: { canonical: `${siteConfig.domain}/tools/roleplay-generator` }
};

export default function RoleplayGeneratorPage() {
  return <main className="mx-auto max-w-7xl px-4 py-10">
    <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Story Lab", href: "/tools/roleplay-generator" }]} />
    <FaqJsonLd items={faqs} />
    <Breadcrumbs items={[{ label: "Story Lab", href: "/tools/roleplay-generator" }]} />
    <PageIntro eyebrow="Brookhaven Story Lab" title="Brookhaven Roleplay Story Generator" description="Build a source-grounded setup for one to eight players. Pick a role, location and tone, then use the prompts to make the story your own." />
    <AdsterraToolAd />
    <section className="mt-10"><RoleplayGenerator /></section>
    <AdsterraArticleMid />
    <section className="mt-12 content-card"><h2 className="text-2xl font-extrabold text-white">Questions about the generator</h2><div className="mt-5 grid gap-5">{faqs.map((item) => <article key={item.q}><h3 className="font-bold text-white">{item.q}</h3><p className="mt-2 text-white/68">{item.a}</p></article>)}</div></section>
    <AdsterraToolBottom />
  </main>;
}
