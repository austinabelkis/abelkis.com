import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://abelkis.com";
  return ["", "/work", "/about", "/cv", "/contact"].map((p) => ({
    url: `${base}${p}`,
    changeFrequency: "monthly",
    priority: p === "" ? 1 : p === "/work" ? 0.9 : 0.6,
  }));
}
