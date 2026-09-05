import { openGraphSize, routeOpenGraphImage } from "@/components/seo/RouteOpenGraphImage";

export const dynamic = "force-static";
export const alt = "PokeMMO B2/W2 tier evidence and team roles";
export const size = openGraphSize;
export const contentType = "image/png";

export default function Image() {
  return routeOpenGraphImage("ROLE-FIRST FRAMEWORK", "PokeMMO B2/W2 Tier Evidence", "What can be planned now—and what must wait for direct preview observations.");
}
