import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { Breadcrumbs, PageIntro } from "@/components/ui/content";

export const metadata: Metadata = {
  title: `Contact ${siteConfig.name}`,
  description: `Contact and correction guidance for ${siteConfig.name}.`,
  alternates: { canonical: `${siteConfig.domain}/contact` }
};

export default function ContactPage() {
  const host = siteConfig.domain.replace(/^https?:\/\//, "");
  const contactEmail = `contact@${host}`;

  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <Breadcrumbs items={[{ label: "Contact Us", href: "/contact" }]} />
      <PageIntro
        eyebrow="Contact us"
        title="Corrections and source updates"
        description="Use this page for site corrections, source updates, rights concerns, and editorial feedback. Official game support belongs with PokeMMO."
      />
      <section className="mt-10 grid gap-4">
        <article className="content-card">
          <h2 className="text-xl font-bold text-white">Email</h2>
          <p className="mt-2 leading-7 text-white/68">
            Send corrections, privacy questions, rights concerns, or source updates to{" "}
            <a className="text-[var(--accent)] hover:underline" href={`mailto:${contactEmail}`}>{contactEmail}</a>.
          </p>
        </article>

        <article className="content-card">
          <h2 className="text-xl font-bold text-white">Before sending a correction</h2>
          <p className="mt-2 leading-7 text-white/68">
            Include the page URL, the claim that needs correction, the source that supports the change,
            and the date you checked it.
          </p>
        </article>

        <article className="content-card">
          <h2 className="text-xl font-bold text-white">Official support boundary</h2>
          <p className="mt-2 leading-7 text-white/68">
            We cannot recover PokeMMO accounts, handle purchases, moderate players, grant rewards, or speak
            for PokeMMO. Use the official PokeMMO support site for account and client help.
          </p>
        </article>
      </section>
    </main>
  );
}
