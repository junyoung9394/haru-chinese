import type { Metadata } from "next";
import AppDownloadCta from "@/components/AppDownloadCta";
import AdBanner from "@/components/AdBanner";
import AdSlot from "@/components/AdSlot";
import { AD_SLOTS } from "@/lib/adSlots";
import { cultureItems } from "@/data/culture";
import CultureGrid from "@/components/CultureGrid";

export const metadata: Metadata = {
  title: "중국 문화 배우기",
  description:
    "중국 인사, 식당, 모바일 결제, 고속철, 춘절, 차 문화 등 중국 문화를 중국어 표현과 함께 배워보세요.",
  alternates: { canonical: "/culture" },
};

export default function CulturePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="flex gap-8 items-start">
        <div className="flex-1 min-w-0 space-y-10">
          <section>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
              중국 문화 배우기
            </h1>
            <p className="text-gray-600 leading-relaxed max-w-2xl">
              언어와 문화는 함께 배울 때 더 잘 이해됩니다. 중국 여행, 생활, 비즈니스에서 알아두면 유용한
              중국 문화와 그 상황에서 실제로 쓰이는 중국어 표현을 함께 소개합니다.
            </p>
          </section>

          <CultureGrid items={cultureItems} />

          <AdBanner slotId={AD_SLOTS.content_mid} variant="banner" />

          <section className="bg-white border border-gray-200 rounded-2xl p-6">
            <h2 className="text-lg font-bold text-gray-800 mb-3">중국어와 문화를 함께 배우는 이유</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              단어와 문법을 외우는 것도 중요하지만, 그 표현이 어떤 상황에서 쓰이는지 알면 훨씬 자연스럽게
              활용할 수 있습니다. 밥을 먹었냐는 인사가 안부 인사라는 것, 계산은 QR로 한다는 것,
              숫자 4를 피한다는 것 — 이런 맥락을 알아야 문장이 살아 있는 말이 됩니다.
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
