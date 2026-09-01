import type { Metadata } from "next";
import AppDownloadCta from "@/components/AppDownloadCta";
import AdBanner from "@/components/AdBanner";
import AdSlot from "@/components/AdSlot";
import PhraseSections from "@/components/PhraseSections";
import { AD_SLOTS } from "@/lib/adSlots";
import { businessSections } from "@/data/phrases";

export const metadata: Metadata = {
  title: "비즈니스 중국어 — 미팅, 협상, 접대 표현",
  description:
    "중국 거래처와의 첫 미팅부터 회의, 전화, 협상, 회식까지. 실무에서 바로 쓰는 비즈니스 중국어 표현과 매너를 정리했습니다.",
  alternates: { canonical: "/business" },
};

const etiquette = [
  {
    title: "명함(名片) 예절",
    body: "명함은 반드시 두 손으로 건네고 받습니다. 받은 명함은 바로 넣지 말고 테이블 위에 상대 자리 순서대로 놓아두면 이름과 직함을 기억하기에도 좋습니다. 중국어 면이 상대를 향하도록 건네세요.",
  },
  {
    title: "직함으로 부르기",
    body: "이름만 부르는 것은 실례입니다. 성씨 + 직함(王总, 李经理)으로 부르는 것이 기본입니다. 직함을 모를 때는 王先生(왕 선생님), 李女士(리 여사)로 부르면 무난합니다.",
  },
  {
    title: "관시(关系)의 의미",
    body: "중국 비즈니스에서 신뢰 관계는 계약서보다 앞서는 경우가 많습니다. 식사와 술자리는 친목이 아니라 업무의 연장입니다. 조급하게 결론을 요구하기보다 관계를 쌓는 시간을 일정에 넣어두세요.",
  },
  {
    title: "체면(面子) 배려",
    body: "여러 사람 앞에서 상대의 실수를 지적하거나 직접적으로 거절하면 체면을 손상시킵니다. 부정적인 의견은 我们再研究一下(좀 더 검토해 보겠습니다)처럼 완곡하게 전하는 것이 관례입니다.",
  },
];

export default function BusinessPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="flex gap-8 items-start">
        <div className="flex-1 min-w-0 space-y-10">
          <section>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
              비즈니스 중국어
            </h1>
            <p className="text-gray-600 leading-relaxed max-w-2xl">
              중국 거래처와 일할 때 필요한 표현을 상황별로 정리했습니다. 첫 미팅, 회의, 전화와 메시지,
              협상, 회식까지 실무에서 실제로 오가는 문장과 함께 알아두면 좋은 비즈니스 매너를 담았습니다.
            </p>
          </section>

          <AdBanner slotId={AD_SLOTS.content_mid} variant="banner" />

          <PhraseSections sections={businessSections} adAfter={[1, 3]} />

          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-4">알아두면 좋은 비즈니스 매너</h2>
            <div className="space-y-3">
              {etiquette.map((e) => (
                <div key={e.title} className="bg-white border border-gray-200 rounded-xl p-5">
                  <p className="font-bold text-red-600 mb-2">{e.title}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{e.body}</p>
                </div>
              ))}
            </div>
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
