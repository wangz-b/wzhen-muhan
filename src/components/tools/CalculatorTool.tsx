"use client";

import { useEffect, useMemo, useState } from "react";

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const STORAGE_KEY = "collectletters:tracker:v1";
const count = (value: string) => Number.isInteger(Number(value)) ? Math.min(99, Math.max(0, Number(value))) : 0;

export function CalculatorTool() {
  const [owned, setOwned] = useState<string[]>([]);
  const [word, setWord] = useState("");
  const [copies, setCopies] = useState<Record<string, number>>({});
  const [letter, setLetter] = useState("A");
  const [ownedCopies, setOwnedCopies] = useState("1");
  const [board, setBoard] = useState(true);
  const [daily, setDaily] = useState("0");
  const [personal, setPersonal] = useState("0");

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
      // Hydration is the one intentional state sync: the persisted checklist exists only in the browser.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      if (Array.isArray(saved)) setOwned([...new Set(saved.filter((x): x is string => typeof x === "string" && /^[A-Z]$/.test(x)))].sort());
    } catch { localStorage.removeItem(STORAGE_KEY); }
  }, []);
  useEffect(() => { localStorage.setItem(STORAGE_KEY, JSON.stringify(owned)); }, [owned]);

  const missing = ALPHABET.filter((x) => !owned.includes(x));
  const normalized = (word.toUpperCase().match(/[A-Z]/g) || []).join("");
  const needed = useMemo(() => [...normalized].reduce<Record<string, number>>((all, x) => ({ ...all, [x]: (all[x] || 0) + 1 }), {}), [normalized]);
  const short = Object.entries(needed).map(([x, n]) => ({ x, n, have: copies[x] ?? (owned.includes(x) ? 1 : 0) })).filter((x) => x.have < x.n);
  const reserved = (board ? 1 : 0) + count(daily) + count(personal);
  const spare = Math.max(0, count(ownedCopies) - reserved);
  const toggle = (x: string) => setOwned((old) => old.includes(x) ? old.filter((item) => item !== x) : [...old, x].sort());

  return <div className="grid gap-8">
    <section className="content-card" aria-labelledby="tracker-title">
      <p className="mini-label">Official 26-letter goal · saved in your browser</p>
      <div className="mt-2 flex flex-wrap items-end justify-between gap-4">
        <div><h2 id="tracker-title" className="text-2xl font-black">A–Z collection tracker</h2><p className="mt-2 text-sm leading-6 text-white/65">Tap every letter you own. No pack, rarity, value, or income rate is assumed.</p></div>
        <div className="rounded-lg border border-cyan-300/25 bg-cyan-300/10 px-4 py-3 text-right" aria-live="polite"><strong className="block text-2xl text-cyan-200">{owned.length}/26</strong><span className="text-sm text-white/70">{Math.round(owned.length / 26 * 100)}% complete</span></div>
      </div>
      <div className="mt-6 grid grid-cols-5 gap-2 sm:grid-cols-7 md:grid-cols-13">{ALPHABET.map((x) => { const selected = owned.includes(x); return <button key={x} type="button" aria-pressed={selected} onClick={() => toggle(x)} className={`min-h-12 rounded-lg border font-black ${selected ? "border-cyan-200 bg-cyan-300 text-slate-950" : "border-white/15 bg-white/5 text-white"}`}>{x}<span className="sr-only"> {selected ? "owned" : "missing"}</span></button>; })}</div>
      <div className="mt-5 flex flex-wrap gap-3"><button type="button" className="button-secondary button-small" onClick={() => setOwned([...ALPHABET])}>Select all</button><button type="button" className="button-secondary button-small" onClick={() => { if (window.confirm("Clear every saved letter?")) setOwned([]); }}>Reset tracker</button></div>
      <p className="mt-5 text-sm leading-6 text-white/70" aria-live="polite"><strong className="text-white">Missing:</strong> {missing.length ? missing.join(", ") : "None — your A–Z board is complete."}</p>
    </section>

    <section className="content-card" aria-labelledby="word-title">
      <p className="mini-label">User-entered word · calculated locally</p><h2 id="word-title" className="mt-2 text-2xl font-black">Daily Word letter checker</h2>
      <p className="mt-2 text-sm leading-6 text-white/65">Copy the Word of the Day shown in your game. We do not guess today&apos;s answer or its reset time.</p>
      <label className="mt-5 grid gap-2"><span className="text-sm font-bold">Word shown in your server</span><input value={word} onChange={(e) => setWord(e.target.value)} placeholder="Example: LETTER" className="min-h-12 rounded-lg border border-white/15 bg-[#111827] px-4 text-lg font-bold uppercase" /></label>
      {normalized ? <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{Object.entries(needed).map(([x, n]) => { const have = copies[x] ?? (owned.includes(x) ? 1 : 0); return <label key={x} className="flex items-center justify-between gap-4 rounded-lg border border-white/10 bg-white/5 p-3"><span className="font-bold">{x} · need {n}</span><input aria-label={`Copies of ${x} owned`} type="number" min="0" max="99" value={have} onChange={(e) => setCopies((old) => ({ ...old, [x]: count(e.target.value) }))} className="h-11 w-20 rounded-lg border border-white/15 bg-[#111827] px-3" /></label>; })}</div> : <p className="mt-5 rounded-lg border border-white/10 bg-white/5 p-4 text-sm text-white/65">Enter at least one A–Z letter. Spaces, punctuation, and numbers are ignored.</p>}
      {normalized && <div className={`mt-5 rounded-lg border p-4 ${short.length ? "border-amber-300/30 bg-amber-300/10" : "border-emerald-300/30 bg-emerald-300/10"}`} aria-live="polite"><strong>{short.length ? "Not ready yet" : "Ready to spell"}</strong><p className="mt-1 text-sm text-white/70">{short.length ? `Still needed: ${short.map((x) => `${x.x} ×${x.n - x.have}`).join(", ")}.` : `Your counts cover every letter in ${normalized}.`}</p></div>}
    </section>

    <section className="content-card" aria-labelledby="duplicate-title">
      <p className="mini-label">Conservative helper rule · no price estimate</p><h2 id="duplicate-title" className="mt-2 text-2xl font-black">Duplicate keep-or-sell helper</h2>
      <p className="mt-2 text-sm leading-6 text-white/65">Reserve copies for your board, the daily word, and your own plans before treating anything as spare. Confirm in Roblox before selling.</p>
      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        <label className="grid gap-2"><span className="text-sm font-bold">Letter</span><select value={letter} onChange={(e) => setLetter(e.target.value)} className="min-h-12 rounded-lg border border-white/15 bg-[#111827] px-3">{ALPHABET.map((x) => <option key={x}>{x}</option>)}</select></label>
        <CountInput label="Copies owned" value={ownedCopies} setValue={setOwnedCopies} />
        <label className="grid gap-2"><span className="text-sm font-bold">Board reserve</span><button type="button" aria-pressed={board} onClick={() => setBoard((x) => !x)} className="button-secondary">{board ? "1 reserved" : "0 reserved"}</button></label>
        <CountInput label="Daily-word reserve" value={daily} setValue={setDaily} /><CountInput label="Personal reserve" value={personal} setValue={setPersonal} />
      </div>
      <div className="mt-5 rounded-lg border border-cyan-300/25 bg-cyan-300/10 p-5" aria-live="polite"><strong className="text-2xl text-cyan-100">{spare ? `${spare} ${letter} ${spare === 1 ? "copy" : "copies"} may be spare` : "Keep for now"}</strong><p className="mt-2 text-sm text-white/70">Owned {count(ownedCopies)} − reserved {reserved} = {spare} conservative spare.</p></div>
    </section>
  </div>;
}

function CountInput({ label, value, setValue }: { label: string; value: string; setValue: (value: string) => void }) {
  return <label className="grid gap-2"><span className="text-sm font-bold">{label}</span><input type="number" inputMode="numeric" min="0" max="99" value={value} onChange={(e) => setValue(e.target.value)} className="min-h-12 rounded-lg border border-white/15 bg-[#111827] px-3" /></label>;
}
