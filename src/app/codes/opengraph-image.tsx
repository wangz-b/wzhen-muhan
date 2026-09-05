import { openGraphSize, routeOpenGraphImage } from "@/components/seo/RouteOpenGraphImage";

export const dynamic = "force-static";
export const alt = "PokeMMO B2/W2 codes status";
export const size = openGraphSize;
export const contentType = "image/png";

export default function Image() {
  return routeOpenGraphImage("SOURCE-CHECKED STATUS", "PokeMMO B2/W2 Codes", "No invented code list—only the current evidence and safe official paths.");
}
