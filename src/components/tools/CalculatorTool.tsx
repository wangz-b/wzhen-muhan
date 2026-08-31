"use client";

import { useMemo, useState } from "react";
import { SectionHeader } from "@/components/ui/content";

const stages = [
  { value: 1, label: "Early game" },
  { value: 2, label: "Mid game" },
  { value: 3, label: "Late game" }
] as const;

const goals = ["codes-first", "farm", "boss", "pvp"] as const;

export function CalculatorTool() {
  const [stage, setStage] = useState(1);
  const [goal, setGoal] = useState<(typeof goals)[number]>("codes-first");
  const [hasBoost, setHasBoost] = useState(false);

  const result = useMemo(() => {
    if (goal === "codes-first") {
      return "Claim listed codes first, then spend rewards only after you know which upgrade path stays useful.";
    }
    if (goal === "farm" && stage < 3) {
      return "Prioritize repeatable farming value over rare late-game choices until your account has stable income or damage.";
    }
    if (goal === "boss") {
      return hasBoost ? "Use your boost window on boss attempts after checking requirements." : "Save major attempts until you have a boost, party, or stronger setup.";
    }
    if (goal === "pvp") {
      return "Compare mobility, burst, and cooldown control before copying a pure farming build.";
    }
    return "Choose the upgrade that improves your next 30 minutes of play, not the rarest-looking option.";
  }, [goal, hasBoost, stage]);

  return (
    <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="content-card">
        <SectionHeader eyebrow="Inputs" title="Plan your next move" />
        <div className="mt-6 grid gap-5">
          <label className="grid gap-2">
            <span className="text-sm font-bold text-white">Progress stage</span>
            <select value={stage} onChange={(event) => setStage(Number(event.target.value))} className="rounded-lg border border-white/10 bg-[#111113] px-3 py-3 text-white">
              {stages.map((item) => (
                <option key={item.value} value={item.value}>{item.label}</option>
              ))}
            </select>
          </label>
          <label className="grid gap-2">
            <span className="text-sm font-bold text-white">Current goal</span>
            <select value={goal} onChange={(event) => setGoal(event.target.value as (typeof goals)[number])} className="rounded-lg border border-white/10 bg-[#111113] px-3 py-3 text-white">
              <option value="codes-first">Claim codes and start safely</option>
              <option value="farm">Farm faster</option>
              <option value="boss">Prepare for boss or raid</option>
              <option value="pvp">Improve PvP setup</option>
            </select>
          </label>
          <button
            type="button"
            className={hasBoost ? "button-primary" : "button-secondary"}
            onClick={() => setHasBoost((value) => !value)}
          >
            {hasBoost ? "Boost active" : "No boost active"}
          </button>
        </div>
      </div>

      <div className="content-card">
        <SectionHeader eyebrow="Output" title="Recommendation" />
        <p className="mt-6 text-2xl font-extrabold leading-9 text-white">{result}</p>
        <p className="mt-5 text-sm leading-6 text-white/60">
          Use exact game rates when they are available. Until then, treat this as a conservative planning helper.
        </p>
      </div>
    </div>
  );
}
