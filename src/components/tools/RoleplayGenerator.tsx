"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const jobs = ["Service", "Family", "Shop", "Arts", "Outside"] as const;
const locations = ["St Luke's Hospital", "Brookhaven High School", "Haven Plaza", "Bank", "Prison", "Adoption Center"] as const;
const tones = ["Cozy", "Funny", "Dramatic", "Mystery", "Busy shift"] as const;

const seeds = [
  { job: "Service", location: "St Luke's Hospital", title: "Night Shift Rescue", roles: ["doctor", "nurse", "receptionist", "ambulance driver"], beats: ["Open the night shift and assign the front desk.", "Send the ambulance to a made-up emergency.", "Bring the patient back and decide what happens next."] },
  { job: "Family", location: "Brookhaven High School", title: "The Very Late School Run", roles: ["parent", "student", "teacher", "helpful neighbor"], beats: ["Start at home with everyone running late.", "Reach school and invent a missing-homework problem.", "Finish with a family plan after class."] },
  { job: "Shop", location: "Haven Plaza", title: "Grand Opening at Haven Plaza", roles: ["owner", "cashier", "customer", "local reporter"], beats: ["Choose what the new shop sells.", "Handle an unexpectedly busy opening.", "End with a news interview or customer surprise."] },
  { job: "Service", location: "Prison", title: "Prison Lockdown Drill", roles: ["warden", "guard", "inmate", "bus driver"], beats: ["Bring the group in on the prisoner bus.", "Run a fictional lockdown drill.", "Decide whether the final alarm is a drill or a misunderstanding."] },
  { job: "Outside", location: "Adoption Center", title: "Pet Adoption Day", roles: ["adoption worker", "pet owner", "vet", "postal worker"], beats: ["Choose a cat or dog to welcome.", "Take it for a checkup at the Pet Hospital.", "Finish with an errand at the nearby Post Office."] },
  { job: "Arts", location: "Brookhaven High School", title: "Bobcats School Show", roles: ["director", "performer", "teacher", "reporter"], beats: ["Plan a short school performance.", "Add a funny backstage problem.", "Let the reporter interview the cast at the end."] }
] as const;

export function RoleplayGenerator() {
  const [players, setPlayers] = useState(2);
  const [job, setJob] = useState<(typeof jobs)[number]>("Family");
  const [location, setLocation] = useState<(typeof locations)[number]>("Brookhaven High School");
  const [tone, setTone] = useState<(typeof tones)[number]>("Funny");
  const [variation, setVariation] = useState(0);

  const result = useMemo(() => {
    const matches = seeds.filter((seed) => seed.job === job || seed.location === location);
    const seed = matches[variation % Math.max(matches.length, 1)] || seeds[variation % seeds.length];
    const assigned = Array.from({ length: players }, (_, index) => seed.roles[index % seed.roles.length]);
    return { ...seed, assigned };
  }, [players, job, location, variation]);

  return (
    <div className="grid gap-6 lg:grid-cols-[.85fr_1.15fr]">
      <section className="content-card" aria-labelledby="story-inputs">
        <h2 id="story-inputs" className="text-2xl font-extrabold text-white">Choose your story</h2>
        <div className="mt-6 grid gap-5">
          <label className="grid gap-2"><span className="font-bold text-white">Players</span><input className="rounded-lg border border-white/15 bg-[#111113] px-3 py-3 text-white" type="number" min="1" max="8" value={players} onChange={(e) => setPlayers(Math.min(8, Math.max(1, Number(e.target.value))))} /></label>
          <label className="grid gap-2"><span className="font-bold text-white">Role group</span><select className="rounded-lg border border-white/15 bg-[#111113] px-3 py-3 text-white" value={job} onChange={(e) => setJob(e.target.value as typeof job)}>{jobs.map((item) => <option key={item}>{item}</option>)}</select></label>
          <label className="grid gap-2"><span className="font-bold text-white">Location</span><select className="rounded-lg border border-white/15 bg-[#111113] px-3 py-3 text-white" value={location} onChange={(e) => setLocation(e.target.value as typeof location)}>{locations.map((item) => <option key={item}>{item}</option>)}</select></label>
          <label className="grid gap-2"><span className="font-bold text-white">Tone</span><select className="rounded-lg border border-white/15 bg-[#111113] px-3 py-3 text-white" value={tone} onChange={(e) => setTone(e.target.value as typeof tone)}>{tones.map((item) => <option key={item}>{item}</option>)}</select></label>
          <button type="button" className="button-primary" onClick={() => setVariation((value) => value + 1)}>Create another story</button>
        </div>
      </section>
      <section className="content-card" aria-live="polite">
        <span className="mini-label">{tone} · {players} player{players === 1 ? "" : "s"}</span>
        <h2 className="mt-3 text-3xl font-extrabold text-white">{result.title}</h2>
        <p className="mt-3 text-white/70">Set the story at {location}. These are creative prompts based on publicly described Brookhaven jobs and locations, not official lore.</p>
        <h3 className="mt-6 text-lg font-bold text-white">Roles</h3>
        <ol className="mt-3 grid gap-2 sm:grid-cols-2">{result.assigned.map((role, index) => <li key={`${role}-${index}`} className="rounded-lg bg-white/5 px-3 py-2 text-white">Player {index + 1}: <strong className="capitalize">{role}</strong></li>)}</ol>
        <h3 className="mt-6 text-lg font-bold text-white">Story beats</h3>
        <ol className="mt-3 grid gap-3">{result.beats.map((beat, index) => <li key={beat} className="flex gap-3 text-white/78"><strong>{index + 1}.</strong><span>{beat}</span></li>)}</ol>
        <div className="mt-7 flex flex-wrap gap-3"><Link className="button-secondary" href="/guides/jobs">Explore jobs</Link><Link className="button-secondary" href="/map">Find locations</Link><Link className="button-secondary" href="/guides/private-server">Host checklist</Link></div>
        <p className="mt-6 text-sm text-white/55">Official basis checked August 31, 2026: Brookhaven jobs and locations guides.</p>
      </section>
    </div>
  );
}
