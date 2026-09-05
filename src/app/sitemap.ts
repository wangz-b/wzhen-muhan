import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";
export const dynamic="force-static";
const routes:Array<{path:string;changeFrequency:MetadataRoute.Sitemap[number]["changeFrequency"];priority:number}>=[
 { path: "", changeFrequency: "daily", priority: 1 },
 { path: "/preview", changeFrequency: "daily", priority: .95 },
 { path: "/calculator", changeFrequency: "daily", priority: .92 },
 { path: "/features", changeFrequency: "daily", priority: .92 },
 { path: "/features/side-content", changeFrequency: "weekly", priority: .82 },
 { path: "/download", changeFrequency: "daily", priority: .85 },
 { path: "/updates", changeFrequency: "daily", priority: .85 },
 { path: "/codes", changeFrequency: "weekly", priority: .75 },
 { path: "/tier-list", changeFrequency: "weekly", priority: .82 },
 { path: "/trello", changeFrequency: "weekly", priority: .8 },
 { path: "/guides", changeFrequency: "weekly", priority: .78 },
 { path: "/guides/preview-preparation", changeFrequency: "weekly", priority: .82 },
 { path: "/wiki", changeFrequency: "weekly", priority: .76 },
 { path: "/sources", changeFrequency: "weekly", priority: .65 },
 { path: "/about", changeFrequency: "monthly", priority: .4 },
 { path: "/contact", changeFrequency: "monthly", priority: .35 },
 { path: "/privacy", changeFrequency: "monthly", priority: .3 },
 { path: "/terms", changeFrequency: "monthly", priority: .3 },
 { path: "/disclosure", changeFrequency: "monthly", priority: .35 }
];
export default function sitemap():MetadataRoute.Sitemap{return routes.map((route)=>({url:`${siteConfig.domain}${route.path}`,lastModified:new Date("2026-09-05T00:00:00Z"),changeFrequency:route.changeFrequency,priority:route.priority}))}
