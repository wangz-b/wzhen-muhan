"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { featureRecords, type EvidenceState } from "@/data/features";
import { previewMilestone } from "@/data/release-milestones";

type Countdown = { days: number; hours: number; minutes: number } | null;
const stateOrder: EvidenceState[] = ["confirmed", "reported", "not-confirmed"];
const stateLabels: Record<EvidenceState, string> = { confirmed: "Confirmed", reported: "Reported", "not-confirmed": "Not confirmed" };

function calculateCountdown(now: Date): Countdown {
  const target = new Date(previewMilestone.startsAt);
  if (Number.isNaN(target.getTime()) || now.getUTCFullYear() < 2025 || now.getUTCFullYear() > 2030) return null;
  const difference = target.getTime() - now.getTime();
  if (difference <= 0) return { days: 0, hours: 0, minutes: 0 };
  return { days: Math.floor(difference / 86_400_000), hours: Math.floor((difference % 86_400_000) / 3_600_000), minutes: Math.floor((difference % 3_600_000) / 60_000) };
}

export function CalculatorTool() {
  const [countdown, setCountdown] = useState<Countdown>(null);
  const [clockReady, setClockReady] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedState, setSelectedState] = useState<EvidenceState | "all">("all");

  useEffect(() => {
    const update = () => { setCountdown(calculateCountdown(new Date())); setClockReady(true); };
    update();
    const timer = window.setInterval(update, 60_000);
    return () => window.clearInterval(timer);
  }, []);

  const results = useMemo(() => {
    const normalized = query.toLowerCase().replace(/[^a-z0-9/ ]/g, " ").replace(/\s+/g, " ").trim();
    return featureRecords.filter((item) => selectedState === "all" || item.state === selectedState).filter((item) => !normalized || [item.title, ...item.aliases].join(" ").toLowerCase().includes(normalized)).sort((a, b) => stateOrder.indexOf(a.state) - stateOrder.indexOf(b.state) || a.order - b.order);
  }, [query, selectedState]);

  const dateReached = clockReady && countdown?.days === 0 && countdown.hours === 0 && countdown.minutes === 0;
  return (
    <div className="grid gap-8">
      <section className="content-card" aria-labelledby="countdown-title">
        <div className="flex flex-wrap items-start justify-between gap-4"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">Official date</p><h2 id="countdown-title" className="mt-2 text-2xl font-extrabold text-white">September 19 preview countdown</h2></div><span className="rounded-full border border-amber-300/30 bg-amber-300/10 px-3 py-1 text-xs font-bold text-amber-200">Start time not confirmed</span></div>
        <div className="mt-6 grid grid-cols-3 gap-3" aria-live="polite">
          {(["days", "hours", "minutes"] as const).map((unit) => <div key={unit} className="rounded-2xl border border-cyan-300/15 bg-cyan-300/5 p-4 text-center"><strong className="block min-h-10 text-3xl text-white">{clockReady && countdown ? countdown[unit] : "—"}</strong><span className="text-xs font-bold uppercase tracking-wider text-white/55">{unit}</span></div>)}
        </div>
        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-4"><p className="font-bold text-white">{dateReached ? "Preview date reached — verify official status" : "Before preview"}</p><p className="mt-2 text-sm leading-6 text-white/65">The date is official, but no exact UTC start time or end time is published in our current source set. This clock uses midnight UTC only as a provisional date boundary and never claims the preview is live.</p><div className="mt-4 flex flex-wrap gap-3 text-sm"><a className="text-cyan-300 hover:underline" href={previewMilestone.sourceUrl} rel="noreferrer" target="_blank">Official announcement</a><span className="text-white/50">Last checked {previewMilestone.checkedDate}</span><Link className="text-cyan-300 hover:underline" href="/preview">Preview guide</Link></div></div>
      </section>

      <section className="content-card" aria-labelledby="evidence-title">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">Evidence explorer</p><h2 id="evidence-title" className="mt-2 text-2xl font-extrabold text-white">What do we actually know?</h2><p className="mt-3 max-w-3xl text-sm leading-6 text-white/65">Search the current tracker. Original Black 2 / White 2 features are not treated as PokeMMO features unless the MMO evidence supports them.</p>
        <label className="mt-6 grid gap-2"><span className="text-sm font-bold text-white">Search tracked features</span><input value={query} onChange={(event) => setQuery(event.target.value)} className="min-h-11 rounded-xl border border-white/15 bg-[#08111f] px-4 text-white outline-none focus:border-cyan-300" placeholder="Try preview, PWT, client, or legendaries" type="search" /></label>
        <div className="mt-4 flex flex-wrap gap-2" aria-label="Filter by evidence state"><button type="button" aria-pressed={selectedState === "all"} onClick={() => setSelectedState("all")} className={selectedState === "all" ? "button-primary" : "button-secondary"}>All ({featureRecords.length})</button>{stateOrder.map((state) => { const count = featureRecords.filter((item) => item.state === state).length; return <button key={state} type="button" aria-pressed={selectedState === state} onClick={() => setSelectedState(state)} className={selectedState === state ? "button-primary" : "button-secondary"}>{stateLabels[state]} ({count})</button>; })}</div>
        <p className="mt-5 text-sm text-white/55" aria-live="polite">{results.length} tracked {results.length === 1 ? "item" : "items"}</p>
        <div className="mt-3 grid gap-4 md:grid-cols-2">{results.map((item) => <article key={item.id} className="rounded-2xl border border-white/10 bg-white/[0.035] p-5"><div className="flex items-center justify-between gap-3"><h3 className="font-extrabold text-white">{item.title}</h3><span className={`status-pill status-${item.state}`}>{stateLabels[item.state]}</span></div><p className="mt-3 text-sm leading-6 text-white/65">{item.summary}</p><div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs text-white/50"><span>{item.sourceLabel}</span><span>Checked {item.checkedDate}</span>{item.sourceUrl ? <a className="text-cyan-300 hover:underline" href={item.sourceUrl} rel="noreferrer" target="_blank">Open source</a> : null}</div></article>)}</div>
        {results.length === 0 ? <div className="mt-4 rounded-xl border border-dashed border-white/15 p-6 text-sm text-white/65">No matching tracked feature. Check the <Link className="text-cyan-300 hover:underline" href="/sources">source ledger</Link> or <Link className="text-cyan-300 hover:underline" href="/contact">send a correction</Link>.</div> : null}
      </section>
    </div>
  );
}
