import type { Metadata } from "next";
import AdSlot from "@/components/AdSlot";
import AdBanner from "@/components/AdBanner";
import { AD_SLOTS } from "@/lib/adSlots";
import HanziTabs from "@/components/HanziTabs";
import HanziBanner from "@/components/HanziBanner";
import AppInfoSection from "@/components/AppInfoSection";
import { hanziByLevel, totalHanziCount, simplificationPairs } from "@/data/hanzi";

export const metadata: Metadata = {
  title: "중국어 기초 한자 — 간체자와 번체자",
  description:
    "HSK 급수별 기초 간체자를 병음, 번체자, 한국 한자음, 획수와 함께 정리했습니다. 간체자와 번체자의 차이도 예시로 확인하세요.",
  alternates: { canonical: "/hanzi" },
};

export default function HanziPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="flex gap-8 items-start">
        <div className="flex-1 min-w-0 space-y-10">
          <HanziBanner />

          <section>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
              중국어 기초 한자 (简体汉字)
            </h1>
            <p className="text-gray-600 leading-relaxed max-w-2xl">
              중국 본토에서 쓰는 간체자 기준으로 HSK 급수별 기초 한자 <strong>{totalHanziCount}자</strong>를 정리했습니다.
              각 글자의 병음, 번체자, 한국 한자음, 뜻, 획수를 함께 확인할 수 있습니다.
              한국어 한자 지식이 있다면 중국어 한자는 다른 언어권 학습자보다 훨씬 빨리 익힐 수 있습니다.
            </p>
          </section>

          {/* 간체자 vs 번체자 */}
          <section className="bg-red-50 border border-red-200 rounded-2xl p-6">
            <h2 className="text-lg font-bold text-gray-800 mb-3">간체자와 번체자</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700 leading-relaxed">
              <div className="bg-white rounded-xl p-4 border border-red-100">
                <p className="font-bold text-red-600 mb-1">간체자 (简体字)</p>
                <p>
                  1950년대 중국이 문맹 퇴치를 위해 획수를 줄여 만든 글자입니다.
                  중국 본토와 싱가포르에서 사용합니다. 예: 漢 → <span className="font-semibold">汉</span>
                </p>
              </div>
              <div className="bg-white rounded-xl p-4 border border-amber-100">
                <p className="font-bold text-amber-600 mb-1">번체자 (繁體字)</p>
                <p>
                  전통 형태를 유지한 글자입니다. 대만, 홍콩, 마카오에서 사용하며 한국의 한자와 대부분 같습니다.
                  예: <span className="font-semibold">漢</span>
                </p>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              * HSK는 간체자로 출제됩니다. 한국에서 배운 한자는 번체자에 가까우므로, 차이가 나는 글자만 따로 챙기면 됩니다.
            </p>
          </section>

          <AdSlot />

          {/* 급수별 탭 */}
          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-4">급수별 기초 한자</h2>
            <HanziTabs groups={hanziByLevel} />
          </section>

          <AdSlot type="inArticle" />

          {/* 간체화 사례 */}
          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-1">모양이 크게 달라진 글자들</h2>
            <p className="text-sm text-gray-500 mb-4">
              한국 한자를 알아도 처음에는 알아보기 어려운 대표 사례입니다.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {simplificationPairs.map((pair) => (
                <div key={pair.simplified} className="bg-white border border-gray-200 rounded-xl p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-3xl font-bold text-red-600">{pair.simplified}</span>
                    <span className="text-gray-300 text-xl">←</span>
                    <span className="text-3xl font-bold text-gray-700">{pair.traditional}</span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{pair.note}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 학습 팁 */}
          <section className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
            <h2 className="text-lg font-bold text-gray-800 mb-3">한자 학습 팁</h2>
            <ul className="text-sm text-gray-600 leading-relaxed space-y-2 list-disc list-inside">
              <li>한자 하나를 외울 때 병음·뜻·예시 단어를 세트로 외우세요.</li>
              <li>부수를 알면 처음 보는 글자도 뜻을 추측할 수 있습니다. 讠(말), 氵(물), 忄(마음)부터 익히세요.</li>
              <li>한국 한자음은 뜻을 기억하는 데 도움이 되지만 중국어 발음과 같지는 않습니다. 學(학)은 xué, 發(발)은 fā처럼 병음과 성조를 따로 익히세요.</li>
              <li>획순을 지켜 쓰면 모양이 안정되고 오래 기억됩니다. 앱의 필기 연습으로 확인해보세요.</li>
              <li>이 페이지의 127자는 입문 학습용으로 선별한 한자이며 공식 시험 전체 목록이 아닙니다. 2021년 중국어 수준 등급 표준의 누적 한자는 1급 300자·4급 1,200자·6급 1,800자이며, 새 HSK 시험 대강과 구분해야 합니다.</li>
            </ul>
          </section>

          <AdSlot />

          <AppInfoSection />
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
