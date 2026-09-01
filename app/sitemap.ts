import { MetadataRoute } from "next";
import { cultureItems } from "@/data/culture";
import { hskLevels } from "@/data/hsk";
import { BASE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "", priority: 1, changeFrequency: "weekly" },
    { path: "/pinyin", priority: 0.9, changeFrequency: "monthly" },
    { path: "/tones", priority: 0.9, changeFrequency: "monthly" },
    { path: "/hsk", priority: 0.9, changeFrequency: "monthly" },
    { path: "/tsc", priority: 0.7, changeFrequency: "monthly" },
    { path: "/vocabulary", priority: 0.8, changeFrequency: "monthly" },
    { path: "/hanzi", priority: 0.8, changeFrequency: "monthly" },
    { path: "/travel", priority: 0.8, changeFrequency: "monthly" },
    { path: "/basic", priority: 0.8, changeFrequency: "monthly" },
    { path: "/business", priority: 0.7, changeFrequency: "monthly" },
    { path: "/culture", priority: 0.7, changeFrequency: "weekly" },
    { path: "/quiz", priority: 0.7, changeFrequency: "monthly" },
    { path: "/app-download", priority: 0.6, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.4, changeFrequency: "yearly" },
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
  ];

  // /hsk 는 위 목록에 이미 있으므로 하위 급수만 추가합니다
  const levelPages = hskLevels
    .filter((lv) => lv.href !== "/hsk")
    .map((lv) => ({
      url: `${BASE_URL}${lv.href}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }));

  const culturePages = cultureItems.map((item) => ({
    url: `${BASE_URL}/culture/${item.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...staticPages.map((p) => ({
      url: `${BASE_URL}${p.path}`,
      lastModified: now,
      changeFrequency: p.changeFrequency,
      priority: p.priority,
    })),
    ...levelPages,
    ...culturePages,
  ];
}
