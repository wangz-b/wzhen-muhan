import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { Breadcrumbs, PageIntro } from "@/components/ui/content";

export const metadata: Metadata = {
  title: `${siteConfig.name} Privacy Policy`,
  description: `Privacy Policy for ${siteConfig.name}, including analytics, advertising, and third-party cookie disclosures.`,
  alternates: { canonical: `${siteConfig.domain}/privacy` }
};

export default function PrivacyPage() {
  const host = siteConfig.domain.replace(/^https?:\/\//, "");
  const privacyEmail = `privacy@${host}`;

  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <Breadcrumbs items={[{ label: "Privacy Policy", href: "/privacy" }]} />
      <PageIntro
        eyebrow="Privacy Policy"
        title="Privacy Policy"
        description="This policy explains what this fan site may collect, how analytics and advertising partners may use third-party cookies or similar technology, and how players can limit that activity."
      />
      <section className="mt-10 grid gap-4">
        <article className="content-card">
          <h2 className="text-xl font-bold text-white">Information we do not ask for</h2>
          <p className="mt-2 leading-7 text-white/68">
            Do not enter Roblox passwords, payment details, account recovery information, private messages,
            or moderation requests on this site. Official Roblox account and purchase support belongs on
            Roblox or creator-owned support channels.
          </p>
        </article>

        <article className="content-card">
          <h2 className="text-xl font-bold text-white">Analytics and site logs</h2>
          <p className="mt-2 leading-7 text-white/68">
            When configured, this site may use Google Analytics or similar measurement tools to understand
            page views, referral sources, device/browser type, and general usage patterns. These tools may
            set first-party or third-party cookies, pixels, local storage, or similar identifiers.
          </p>
        </article>

        <article className="content-card">
          <h2 className="text-xl font-bold text-white">Advertising and third-party cookies</h2>
          <p className="mt-2 leading-7 text-white/68">
            Advertising partners, including Adsterra when enabled, may use third-party cookies, scripts,
            pixels, smart links, or similar technology to deliver ads, measure ad performance, limit repeat
            impressions, detect invalid traffic, and personalize ads where allowed by law.
          </p>
        </article>

        <article className="content-card">
          <h2 className="text-xl font-bold text-white">Your controls</h2>
          <p className="mt-2 leading-7 text-white/68">
            You can block or delete cookies in your browser, use browser privacy settings, opt out through
            available advertising industry tools, or use Google Analytics opt-out controls where supported.
            Some site or ad features may work differently after cookies are limited.
          </p>
        </article>

        <article className="content-card">
          <h2 className="text-xl font-bold text-white">Children and Roblox players</h2>
          <p className="mt-2 leading-7 text-white/68">
            This site is an informational fan resource and is not meant to collect personal information
            from children. Players should not send personal contact details, account details, or private
            information through this site.
          </p>
        </article>
        <article className="content-card">
          <h2 className="text-xl font-bold text-white">Third-party links and retention</h2>
          <p className="mt-2 leading-7 text-white/68">
            Links to Roblox, Discord, Trello, YouTube, analytics providers, and ad networks are separate
            services with their own policies. Server logs and analytics records are kept only as long as
            useful for security, operations, measurement, or legal compliance.
          </p>
        </article>

        <article className="content-card">
          <h2 className="text-xl font-bold text-white">Privacy contact</h2>
          <p className="mt-2 leading-7 text-white/68">
            For privacy questions, contact <a className="text-[var(--accent)] hover:underline" href={`mailto:${privacyEmail}`}>{privacyEmail}</a>.
          </p>
        </article>
      </section>
    </main>
  );
}
