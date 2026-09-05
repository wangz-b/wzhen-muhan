import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";

export const dynamic = "force-static";

const routes: Array<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}> = [
  { path: "", changeFrequency: "daily", priority: 1 },
  { path: "/codes", changeFrequency: "daily", priority: 0.95 },
  { path: "/tier-list", changeFrequency: "weekly", priority: 0.9 },
  { path: "/trello", changeFrequency: "weekly", priority: 0.72 },
  { path: "/calculator", changeFrequency: "weekly", priority: 0.85 },
  { path: "/squad-planner", changeFrequency: "weekly", priority: 0.9 },
  { path: "/resource-calculator", changeFrequency: "weekly", priority: 0.9 },
  { path: "/guides", changeFrequency: "weekly", priority: 0.8 },
  { path: "/guides/beginner", changeFrequency: "weekly", priority: 0.78 },
  { path: "/guides/progression", changeFrequency: "weekly", priority: 0.78 },
  { path: "/guides/farming", changeFrequency: "weekly", priority: 0.78 },
  { path: "/wiki", changeFrequency: "weekly", priority: 0.8 },
  { path: "/wiki/items-and-rewards", changeFrequency: "weekly", priority: 0.78 },
  { path: "/wiki/maps-and-systems", changeFrequency: "weekly", priority: 0.76 },
  { path: "/wiki/builds-and-entities", changeFrequency: "weekly", priority: 0.76 },
  { path: "/updates", changeFrequency: "daily", priority: 0.75 },
  { path: "/sources", changeFrequency: "monthly", priority: 0.5 },
  { path: "/about", changeFrequency: "monthly", priority: 0.4 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.3 },
  { path: "/privacy", changeFrequency: "monthly", priority: 0.3 },
  { path: "/terms", changeFrequency: "monthly", priority: 0.3 },
  { path: "/disclosure", changeFrequency: "monthly", priority: 0.3 },
  { path: "/mutations", changeFrequency: "daily", priority: 0.70 },
  { path: "/trading", changeFrequency: "daily", priority: 0.70 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const seen = new Set<string>();
  return routes
    .map((route) => ({
      url: `${siteConfig.domain}${route.path}`,
      lastModified: new Date(),
      changeFrequency: route.changeFrequency,
      priority: route.priority
    }))
    .filter((entry) => {
      if (seen.has(entry.url)) return false;
      seen.add(entry.url);
      return true;
    });
}
