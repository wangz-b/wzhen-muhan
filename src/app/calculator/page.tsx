import type { Metadata } from "next";
import Link from "next/link";
import { CalculatorTool } from "@/components/tools/CalculatorTool";
import { faqs, siteConfig } from "@/data/site";
import { AdsterraToolAd, AdsterraToolBottom } from "@/components/ads";
import { BreadcrumbJsonLd, FaqJsonLd, SoftwareApplicationJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro } from "@/components/ui/content";

export const metadata: Metadata = { title: "PokeMMO B2/W2 Preview Countdown & Status Tracker", description: "Check the live PokeMMO B2/W2 preview countdown and filter feature claims by confirmed, reported or not-confirmed evidence status.", alternates: { canonical: `${siteConfig.domain}/calculator` } };

export default function CalculatorPage() {
  return <main className="mx-auto max-w-7xl px-4 py-10"><BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Tracker", href: "/calculator" }]} /><SoftwareApplicationJsonLd /><FaqJsonLd items={faqs.calculator} /><Breadcrumbs items={[{ label: "Tracker", href: "/calculator" }]} /><PageIntro eyebrow="Live preview desk" title="PokeMMO B2/W2 countdown and evidence tracker" description="Count down to the official September 19 preview date, then filter every tracked claim by what is confirmed, reported or still unknown." /><AdsterraToolAd /><section className="mt-10"><CalculatorTool /></section><nav className="mt-8 flex flex-wrap gap-3 text-sm" aria-label="Tracker next steps"><Link className="button-secondary" href="/preview">Read the preview guide</Link><Link className="button-secondary" href="/features">Open the full feature tracker</Link><Link className="button-secondary" href="/sources">Review sources</Link></nav><AdsterraToolBottom /></main>;
}
