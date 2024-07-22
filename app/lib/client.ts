import { createClient } from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: `${process.env.NEXT_PUBLIC_PROJECT_ID}`,
  dataset: `${process.env.NEXT_PUBLIC_DATASET}`,
  apiVersion: "2024-07-20",
  // Set to `true` for production environments
  useCdn: false,
  token: `${process.env.NEXT_PUBLIC_API_TOKEN}`,
});

const builder = ImageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}
