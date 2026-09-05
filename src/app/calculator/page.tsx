import type { Metadata } from "next";
import { CalculatorTool } from "@/components/tools/CalculatorTool";
import { faqs, siteConfig } from "@/data/site";
import { AdsterraToolAd, AdsterraToolBottom } from "@/components/ads";
import { BreadcrumbJsonLd, FaqJsonLd, SoftwareApplicationJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro } from "@/components/ui/content";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} A–Z Letter Tracker & Daily Word Checker`,
  description: `Track all 26 letters, check the Word of the Day, and calculate conservative spare copies with the free ${siteConfig.gameName} calculator.`,
  alternates: { canonical: `${siteConfig.domain}/calculator` }
};

export default function CalculatorPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Calculator", href: "/calculator" }]} />
      <SoftwareApplicationJsonLd />
      <FaqJsonLd items={faqs.calculator} />
      <Breadcrumbs items={[{ label: "Calculator", href: "/calculator" }]} />
      <PageIntro
        eyebrow="Free browser tools"
        title={`${siteConfig.gameName} A–Z Tracker`}
        description="Mark your A–Z collection, check repeated letters in the daily word, and protect copies you still need before selling duplicates. No Roblox login is required."
      />
      <AdsterraToolAd />
      <section className="mt-10">
        <CalculatorTool />
      </section>
      <section className="content-card mt-10">
        <h2 className="text-2xl font-black text-white">How these tools handle game data</h2>
        <p className="mt-3 max-w-4xl text-sm leading-7 text-white/70">The official game description establishes the 26-letter board, Word of the Day, and spare-letter selling mechanic. Your selections stay in this browser. We do not invent pack odds, letter values, sale returns, or today&apos;s word.</p>
      </section>
      <AdsterraToolBottom />
    </main>
  );
}
