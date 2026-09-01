import type { Metadata } from "next";
import AppDownloadCta from "@/components/AppDownloadCta";
import AdBanner from "@/components/AdBanner";
import AdSlot from "@/components/AdSlot";
import PhraseSections from "@/components/PhraseSections";
import { AD_SLOTS } from "@/lib/adSlots";
import { travelSections } from "@/data/phrases";

export const metadata: Metadata = {
  title: "여행 중국어 회화 — 상황별 필수 표현",
  description:
    "중국 여행 필수 중국어 회화 모음. 공항, 숙소, 식당, 쇼핑, 긴급상황별 실전 표현을 병음과 함께 확인하고 앱에서 반복 학습해보세요.",
  alternates: { canonical: "/travel" },
};

export default function TravelPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="flex gap-8 items-start">
        <div className="flex-1 min-w-0 space-y-10">
          <section>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
              여행 중국어 회화
            </h1>
            <p className="text-gray-600 leading-relaxed max-w-2xl">
              중국 여행에서 꼭 필요한 회화 표현을 상황별로 모았습니다. 공항, 숙소, 식당, 쇼핑, 긴급상황까지
              실전에서 바로 쓸 수 있는 문장을 병음과 함께 확인해보세요. 문장을 통째로 외우는 것이 가장 빠릅니다.
            </p>
          </section>

          <AdBanner slotId={AD_SLOTS.content_mid} variant="banner" />

          <PhraseSections sections={travelSections} adAfter={[1, 3]} />

          <section className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
            <h2 className="text-lg font-bold text-gray-800 mb-3">중국 여행 회화 실전 팁</h2>
            <ul className="space-y-2 text-sm text-gray-700 leading-relaxed">
              <li className="flex gap-2"><span className="text-amber-500 mt-0.5">✔</span><span>말이 막히면 목적지나 원하는 것을 한자로 적어 보여주세요. 가장 확실합니다.</span></li>
              <li className="flex gap-2"><span className="text-amber-500 mt-0.5">✔</span><span>숫자를 나타내는 손가락 표현이 한국과 다릅니다. 가격은 화면이나 종이로 확인하세요.</span></li>
              <li className="flex gap-2"><span className="text-amber-500 mt-0.5">✔</span><span>결제는 QR이 기본입니다. 出示付款码(결제 코드를 보여주세요)를 알아두면 편합니다.</span></li>
              <li className="flex gap-2"><span className="text-amber-500 mt-0.5">✔</span><span>请(qǐng)을 문장 앞에 붙이면 대부분의 표현이 정중해집니다.</span></li>
            </ul>
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
