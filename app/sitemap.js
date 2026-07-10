import { areaSlugs, baseUrl, serviceSlugs } from "./site-content";

export default function sitemap() {
  const now = new Date();

  return [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...serviceSlugs.map((slug) => ({
      url: `${baseUrl}/${slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.82,
    })),
    ...areaSlugs.map((area) => ({
      url: `${baseUrl}/service-areas/${area}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.72,
    })),
  ];
}
