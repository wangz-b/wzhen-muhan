import type { Metadata } from "next";
import { CalculatorTool } from "@/components/tools/CalculatorTool";
import { faqs, siteConfig } from "@/data/site";
import { AdsterraToolAd, AdsterraToolBottom } from "@/components/ads";
import { BreadcrumbJsonLd, FaqJsonLd, SoftwareApplicationJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro } from "@/components/ui/content";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Calculator`,
  description: `Use the ${siteConfig.gameName} calculator starter to plan codes, farming, boss prep, PvP, and progression decisions.`,
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
        eyebrow="Primary tool"
        title={`${siteConfig.gameName} Calculator`}
        description="Use this starter calculator to plan codes, farming, boss prep, PvP, and progression choices before exact game rates are added."
      />
      <AdsterraToolAd />
      <section className="mt-10">
        <CalculatorTool />
      </section>
      <AdsterraToolBottom />
    </main>
  );
}
