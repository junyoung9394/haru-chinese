import type { Metadata } from "next";
import Link from "next/link";
import AppDownloadCta from "@/components/AppDownloadCta";
import AdBanner from "@/components/AdBanner";
import AdSlot from "@/components/AdSlot";
import { AD_SLOTS } from "@/lib/adSlots";

export const metadata: Metadata = {
  title: "TSC 중국어 말하기 시험 가이드",
  description:
    "TSC는 국내 기업 채용에서 널리 쓰이는 중국어 말하기 시험입니다. 7개 파트 구성과 등급 체계, 파트별 공략법을 정리했습니다.",
  alternates: { canonical: "/tsc" },
};

const parts = [
  { no: "1부", title: "자기소개", body: "이름, 생일, 가족, 직업 네 문항이 매회 거의 같은 형태로 나옵니다. 미리 만들어 외워두면 확실한 점수입니다." },
  { no: "2부", title: "그림 보고 답하기", body: "간단한 그림을 보고 사물이나 동작을 한 문장으로 말합니다. 어순을 정확히 지키는 것이 핵심입니다." },
  { no: "3부", title: "빠르게 대답하기", body: "일상 질문에 짧게 답합니다. 완벽한 문장보다 침묵 없이 즉시 반응하는 것이 중요합니다." },
  { no: "4부", title: "짧은 대화", body: "주어진 상황에서 두세 문장으로 대답합니다. 이유를 덧붙이는 습관을 들이면 분량이 자연스럽게 채워집니다." },
  { no: "5부", title: "의견 제시", body: "사회적 주제에 대해 생각을 말합니다. 결론 → 이유 두 개 → 마무리 구조를 템플릿으로 준비하세요." },
  { no: "6부", title: "상황 대응", body: "약속 변경, 사과, 부탁 같은 상황극입니다. 상황별 정형 표현을 외워두는 것이 가장 효율적입니다." },
  { no: "7부", title: "스토리 구성", body: "네 컷 그림을 보고 이야기를 만듭니다. 접속사와 시간 표현으로 흐름을 이어주면 점수가 올라갑니다." },
];

const levels = [
  { grade: "1~2급", label: "입문", desc: "단어 나열 수준. 문장을 완성하기 어렵습니다." },
  { grade: "3급", label: "초급", desc: "익숙한 주제에 대해 짧은 문장으로 답할 수 있습니다." },
  { grade: "4급", label: "중급", desc: "일상 대화가 가능한 수준. 채용 우대 요건으로 자주 등장합니다." },
  { grade: "5급", label: "중상급", desc: "의견을 논리적으로 전개할 수 있습니다. 중국어 직무 지원 기준선." },
  { grade: "6~7급", label: "고급", desc: "복잡한 주제도 유창하게 다룹니다. 업무 수행에 필요한 수준은 직무와 기관별 요건에 따라 다릅니다." },
];

const tips = [
  "답변 길이보다 '멈추지 않는 것'이 중요합니다. 짧아도 끊김 없이 말하세요.",
  "성조가 흔들리면 감점 요인이 됩니다. 자주 쓰는 표현일수록 성조를 정확히 굳혀두세요.",
  "파트 1과 6은 준비하면 거의 그대로 나옵니다. 여기서 점수를 확보하세요.",
  "답변 첫 문장은 질문을 그대로 활용해 시작하면 생각할 시간을 벌 수 있습니다.",
  "휴대폰으로 녹음해 스스로 들어보면 발음과 속도 문제를 바로 찾을 수 있습니다.",
];

export default function TscPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="flex gap-8 items-start">
        <div className="flex-1 min-w-0 space-y-10">
          <section>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
              TSC 중국어 말하기 시험 가이드
            </h1>
            <p className="text-gray-600 leading-relaxed max-w-2xl">
              TSC(Test of Spoken Chinese)는 컴퓨터로 응시하는 중국어 말하기 시험입니다.
              읽고 쓰는 능력을 보는 HSK와 달리 &lsquo;실제로 말할 수 있는가&rsquo;를 평가하기 때문에,
              국내 기업 채용에서 HSK와 함께 요구되는 경우가 많습니다.
            </p>
          </section>

          <section className="bg-red-50 border border-red-200 rounded-2xl p-6">
            <h2 className="text-lg font-bold text-gray-800 mb-3">HSK와 무엇이 다른가</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="bg-white rounded-xl p-4 border border-red-100">
                <p className="font-bold text-red-600 mb-1">HSK</p>
                <p className="text-gray-600 leading-relaxed">
                  기존 HSK 1~6급은 듣기·독해와 3급 이상의 쓰기를 평가하며 어휘뿐 아니라 영역별 이해와 표현 능력이 필요합니다.
                </p>
              </div>
              <div className="bg-white rounded-xl p-4 border border-amber-100">
                <p className="font-bold text-amber-600 mb-1">TSC</p>
                <p className="text-gray-600 leading-relaxed">
                  말하기만 평가합니다. 마이크에 대고 답변을 녹음하며, 1급부터 10급까지의 등급으로 결과가 나옵니다.
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              어휘와 문법 기초는 결국 같습니다. HSK 학습으로 재료를 쌓고 TSC로 출력 연습을 하는 조합이 효율적입니다 —{" "}
              <Link href="/hsk" className="text-red-600 font-medium hover:underline">
                HSK 가이드 보기 →
              </Link>
            </p>
          </section>

          <AdBanner slotId={AD_SLOTS.content_mid} variant="banner" />

          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-4">7개 파트 구성</h2>
            <div className="space-y-3">
              {parts.map((p) => (
                <div key={p.no} className="bg-white border border-gray-200 rounded-xl p-5">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="text-sm font-bold text-white bg-red-600 px-2.5 py-0.5 rounded-full">{p.no}</span>
                    <span className="font-bold text-gray-800">{p.title}</span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{p.body}</p>
                </div>
              ))}
            </div>
          </section>

          <AdSlot type="inArticle" />

          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-4">주요 등급 안내 (1~7급 발췌)</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {levels.map((lv) => (
                <div key={lv.grade} className="bg-white border border-gray-200 rounded-xl p-4">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-lg font-bold text-red-600">{lv.grade}</span>
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">{lv.label}</span>
                  </div>
                  <p className="text-sm text-gray-600">{lv.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-3">
              * 등급 기준과 시험 구성은 주관사 정책에 따라 변경될 수 있습니다. 응시 전 공식 안내를 확인하세요.
            </p>
          </section>

          <section className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
            <h2 className="text-lg font-bold text-gray-800 mb-3">TSC 공략 팁</h2>
            <ul className="space-y-2 text-sm text-gray-700 leading-relaxed">
              {tips.map((tip) => (
                <li key={tip} className="flex gap-2">
                  <span className="text-amber-500 mt-0.5">✔</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
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
