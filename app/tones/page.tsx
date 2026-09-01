import type { Metadata } from "next";
import Link from "next/link";
import AppDownloadCta from "@/components/AppDownloadCta";
import AdBanner from "@/components/AdBanner";
import AdSlot from "@/components/AdSlot";
import { AD_SLOTS } from "@/lib/adSlots";
import { tones, toneRules } from "@/data/pinyin";

export const metadata: Metadata = {
  title: "중국어 성조(声调) 배우기",
  description:
    "중국어 4성과 경성을 예시와 함께 정리했습니다. 3성 변조, 不·一의 성조 변화 같은 실전 규칙까지 한 번에 익혀보세요.",
  alternates: { canonical: "/tones" },
};

const minimalPairs = [
  { pinyin: "mā / má / mǎ / mà", chars: "妈 / 麻 / 马 / 骂", meaning: "엄마 / 삼 / 말 / 꾸짖다" },
  { pinyin: "mǎi / mài", chars: "买 / 卖", meaning: "사다 / 팔다" },
  { pinyin: "shuǐjiǎo / shuìjiào", chars: "水饺 / 睡觉", meaning: "물만두 / 잠자다" },
  { pinyin: "wèn / wén", chars: "问 / 闻", meaning: "묻다 / 듣다·냄새 맡다" },
  { pinyin: "tāng / táng", chars: "汤 / 糖", meaning: "국 / 설탕" },
  { pinyin: "jiǎ / jià", chars: "假 / 价", meaning: "가짜 / 가격" },
];

const toneColor: Record<string, string> = {
  "1성": "bg-red-50 border-red-200 text-red-600",
  "2성": "bg-orange-50 border-orange-200 text-orange-600",
  "3성": "bg-amber-50 border-amber-200 text-amber-700",
  "4성": "bg-emerald-50 border-emerald-200 text-emerald-700",
  경성: "bg-gray-50 border-gray-200 text-gray-500",
};

export default function TonesPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="flex gap-8 items-start">
        <div className="flex-1 min-w-0 space-y-10">
          <section>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
              성조 (声调) 배우기
            </h1>
            <p className="text-gray-600 leading-relaxed max-w-2xl">
              중국어는 소리의 높낮이가 뜻을 바꾸는 언어입니다. 같은 <strong>ma</strong>라도 성조에 따라
              &lsquo;엄마&rsquo;가 되기도 하고 &lsquo;말&rsquo;이나 &lsquo;꾸짖다&rsquo;가 되기도 합니다.
              표준 중국어에는 4개의 성조와 성조가 없는 경성이 있습니다.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-4">4성과 경성</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {tones.map((t) => (
                <div
                  key={t.tone}
                  className={`border rounded-2xl p-5 ${toneColor[t.tone] ?? "bg-white border-gray-200"}`}
                >
                  <div className="flex items-baseline justify-between mb-3">
                    <span className="text-sm font-bold">{t.tone}</span>
                    <span className="text-2xl">{t.shape}</span>
                  </div>
                  <p className="text-3xl font-bold text-gray-800 mb-1">{t.pinyin}</p>
                  <p className="text-xl font-bold text-gray-700 mb-1">{t.example}</p>
                  <p className="text-sm text-gray-500 mb-3">{t.meaning}</p>
                  <p className="text-xs text-gray-600 leading-relaxed border-t border-white/60 pt-3">
                    {t.name} · {t.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <AdBanner slotId={AD_SLOTS.content_mid} variant="banner" />

          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-1">성조가 뜻을 가르는 예</h2>
            <p className="text-sm text-gray-500 mb-4">
              성조를 틀리면 전혀 다른 말이 됩니다. 아래 짝을 소리 내어 비교해보세요.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {minimalPairs.map((p) => (
                <div key={p.pinyin} className="bg-white border border-gray-200 rounded-xl p-4">
                  <p className="text-lg font-bold text-red-600 mb-1">{p.pinyin}</p>
                  <p className="text-xl font-bold text-gray-800 mb-1">{p.chars}</p>
                  <p className="text-sm text-gray-600">{p.meaning}</p>
                </div>
              ))}
            </div>
          </section>

          <AdSlot type="inArticle" />

          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-1">꼭 알아야 할 성조 변화 규칙</h2>
            <p className="text-sm text-gray-500 mb-4">
              표기와 실제 발음이 다른 경우가 있습니다. 이 네 가지만 알아도 회화가 훨씬 자연스러워집니다.
            </p>
            <div className="space-y-3">
              {toneRules.map((rule) => (
                <div key={rule.title} className="bg-white border border-gray-200 rounded-xl p-5">
                  <p className="text-base font-bold text-red-600 mb-2">{rule.title}</p>
                  <p className="text-sm text-gray-600 leading-relaxed mb-2">{rule.body}</p>
                  <p className="text-sm text-gray-800 bg-gray-50 rounded-lg px-3 py-2 font-medium">
                    {rule.example}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
            <h2 className="text-lg font-bold text-gray-800 mb-3">성조 연습 팁</h2>
            <ul className="space-y-2 text-sm text-gray-700 leading-relaxed">
              <li className="flex gap-2"><span className="text-amber-500 mt-0.5">✔</span><span>손으로 성조 모양을 그리며 발음하면 몸이 먼저 기억합니다.</span></li>
              <li className="flex gap-2"><span className="text-amber-500 mt-0.5">✔</span><span>단어를 외울 때 반드시 성조까지 세트로 외우세요. 나중에 고치기가 훨씬 어렵습니다.</span></li>
              <li className="flex gap-2"><span className="text-amber-500 mt-0.5">✔</span><span>2음절 단어로 연습하세요. 성조 조합 16가지를 익히면 대부분의 단어가 해결됩니다.</span></li>
              <li className="flex gap-2"><span className="text-amber-500 mt-0.5">✔</span><span>녹음해서 원어민 발음과 비교하는 것이 가장 빠른 교정법입니다.</span></li>
            </ul>
            <p className="text-sm text-gray-600 mt-4">
              병음 자체가 아직 낯설다면{" "}
              <Link href="/pinyin" className="text-red-600 font-medium hover:underline">
                병음 페이지
              </Link>
              부터 보고 오세요.
            </p>
          </section>

          <AppDownloadCta />

          <AdBanner slotId={AD_SLOTS.content_bottom} variant="banner" />
        </div>

        <aside className="hidden md:block w-64 flex-shrink-0">
          <div className="sticky" style={{ top: "80px" }}>
            <AdBanner slotId={AD_SLOTS.sidebar} variant="sidebar" />
          </div>
        </aside>
      </div>
    </div>
  );
}
