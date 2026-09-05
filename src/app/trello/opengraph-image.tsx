import { openGraphSize, routeOpenGraphImage } from "@/components/seo/RouteOpenGraphImage";

export const dynamic = "force-static";
export const alt = "PokeMMO B2/W2 official links status";
export const size = openGraphSize;
export const contentType = "image/png";

export default function Image() {
  return routeOpenGraphImage("OFFICIAL LINK CHECK", "PokeMMO B2/W2 Sources", "Verified PokeMMO destinations without invented Trello, Discord, or wiki claims.");
}
