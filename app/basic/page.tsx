import type { Metadata } from "next";
import AppDownloadCta from "@/components/AppDownloadCta";
import AdBanner from "@/components/AdBanner";
import AdSlot from "@/components/AdSlot";
import PhraseSections from "@/components/PhraseSections";
import { AD_SLOTS } from "@/lib/adSlots";
import { basicSections } from "@/data/phrases";

export const metadata: Metadata = {
  title: "기본 소통 중국어 — 인사부터 자기소개까지",
  description:
    "중국어 인사, 자기소개, 질문, 감정 표현, 숫자와 시간까지. 처음 중국어를 시작할 때 필요한 기본 회화를 병음과 함께 정리했습니다.",
  alternates: { canonical: "/basic" },
};

export default function BasicPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="flex gap-8 items-start">
        <div className="flex-1 min-w-0 space-y-10">
          <section>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
              기본 소통 중국어
            </h1>
            <p className="text-gray-600 leading-relaxed max-w-2xl">
              중국어를 처음 시작할 때 가장 먼저 쓰게 되는 표현입니다. 인사와 자기소개, 질문하기,
              감정 표현, 숫자와 시간까지 대화를 이어가는 데 필요한 최소한의 문장을 모았습니다.
            </p>
          </section>

          <AdBanner slotId={AD_SLOTS.content_mid} variant="banner" />

          <PhraseSections sections={basicSections} adAfter={[1, 3]} />

          <section className="bg-white border border-gray-200 rounded-2xl p-6">
            <h2 className="text-lg font-bold text-gray-800 mb-3">중국어 어순의 기본</h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              중국어는 한국어와 어순이 다릅니다. <strong>주어 + 동사 + 목적어</strong> 순서로 영어와 비슷하며,
              시간과 장소는 동사 앞에 옵니다.
            </p>
            <div className="bg-red-50 rounded-xl p-4 border border-red-100 space-y-2">
              <p className="text-base font-bold text-gray-800">我 明天 在家 看书。</p>
              <p className="text-sm text-red-600">Wǒ míngtiān zài jiā kàn shū.</p>
              <p className="text-sm text-gray-600">나는 / 내일 / 집에서 / 책을 본다</p>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              * 시간 → 장소 → 동사 순서를 기억하면 대부분의 기본 문장을 만들 수 있습니다.
            </p>
          </section>

          <AppDownloadCta />

          <AdBanner slotId={AD_SLOTS.content_bottom} variant="banner" />
          <AdSlot type="relaxed" />
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
