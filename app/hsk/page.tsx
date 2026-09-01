import type { Metadata } from "next";
import Link from "next/link";
import AppDownloadCta from "@/components/AppDownloadCta";
import AdBanner from "@/components/AdBanner";
import AdSlot from "@/components/AdSlot";
import { AD_SLOTS } from "@/lib/adSlots";
import { hskLevels, hsk1Words, hsk1Grammar } from "@/data/hsk";

export const metadata: Metadata = {
  title: "HSK 시험 완전 가이드 — 급수별 단어 수와 난이도",
  description:
    "HSK 1급부터 6급까지 급수별 단어 수, 시험 구성, 합격 기준을 정리했습니다. HSK 1급 필수 단어와 문법도 함께 학습하세요.",
  alternates: { canonical: "/hsk" },
};

const examParts = [
  { part: "듣기 (听力)", body: "짧은 대화와 안내 방송을 듣고 답합니다. 급수가 올라갈수록 지문이 길어지고 한 번만 들려주는 문항이 늘어납니다." },
  { part: "독해 (阅读)", body: "어순 배열, 빈칸 채우기, 지문 이해로 구성됩니다. 4급 이상에서는 시간 관리가 당락을 가릅니다." },
  { part: "쓰기 (书写)", body: "3급부터 등장합니다. 3~4급은 어순 배열과 한자 쓰기, 5~6급은 작문과 요약입니다." },
];

const faqs = [
  {
    q: "HSK 몇 급부터 따는 게 좋을까요?",
    a: "취업이나 학점 인정이 목적이라면 4급이 현실적인 출발선입니다. 1~2급은 성적표로서의 활용도가 낮아, 학습 동기 확인용으로 보는 경우가 많습니다.",
  },
  {
    q: "HSK 3.0(1~9급)은 지금 시험과 어떻게 다른가요?",
    a: "국제 중국어 교육 표준이 3등급 9급 체계로 개편되면서 어휘와 한자 요구량이 늘었습니다. 다만 한국에서 실제로 치르는 시험은 여전히 1~6급 체계가 중심이므로, 학습 목표는 6급까지로 잡으면 됩니다.",
  },
  {
    q: "성적은 얼마나 유효한가요?",
    a: "HSK 성적은 시험일로부터 2년간 유효합니다. 채용이나 입학 지원 시점을 역산해 응시 일정을 잡는 것이 좋습니다.",
  },
  {
    q: "IBT와 PBT 중 무엇이 유리한가요?",
    a: "쓰기 영역에서 한자를 직접 손으로 써야 하는 PBT보다, 병음으로 입력할 수 있는 IBT를 선호하는 응시자가 많습니다. 다만 듣기 집중도는 개인차가 있으니 모의 응시로 확인해보세요.",
  },
];

export default function HskPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="flex gap-8 items-start">
        <div className="flex-1 min-w-0 space-y-10">
          <section>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
              HSK (汉语水平考试) 완전 가이드
            </h1>
            <p className="text-gray-600 leading-relaxed max-w-2xl">
              HSK는 중국어를 모국어로 하지 않는 사람의 중국어 능력을 평가하는 국제 표준 시험입니다.
              1급부터 6급까지 있으며, 국내 기업 채용과 중국 대학 입학에서 가장 널리 쓰입니다.
              급수별 요구 어휘량과 시험 구성을 먼저 파악하고 학습 계획을 세워보세요.
            </p>
          </section>

          {/* 급수 카드 */}
          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-4">급수별 한눈에 보기</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {hskLevels.map((lv) => (
                <Link
                  key={lv.level}
                  href={lv.href}
                  className={`border rounded-2xl p-5 hover:shadow-md transition-shadow ${lv.color}`}
                >
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="text-xl font-bold">{lv.label}</span>
                    <span className="text-sm font-medium">{lv.vocab}</span>
                  </div>
                  <p className="text-sm font-semibold text-gray-800 mb-1">{lv.target}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{lv.description}</p>
                  <p className="text-xs text-gray-500 mt-3">
                    합격선 {lv.passLine} · 시험 시간 {lv.duration}
                  </p>
                </Link>
              ))}
            </div>
          </section>

          <AdBanner slotId={AD_SLOTS.content_mid} variant="banner" />

          {/* 시험 구성 */}
          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-4">시험 영역 구성</h2>
            <div className="space-y-3">
              {examParts.map((p) => (
                <div key={p.part} className="bg-white border border-gray-200 rounded-xl p-5">
                  <p className="font-bold text-red-600 mb-1">{p.part}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{p.body}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-3">
              * 시험 시간과 배점은 주관 기관 공지에 따라 달라질 수 있습니다. 응시 전 공식 안내를 확인하세요.
            </p>
          </section>

          {/* HSK 1급 단어 */}
          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-1">HSK 1급 필수 단어</h2>
            <p className="text-sm text-gray-500 mb-4">
              1급은 총 150단어입니다. 그중 가장 자주 나오는 단어를 골랐습니다.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {hsk1Words.map((word) => (
                <div
                  key={word.word}
                  className="bg-white border border-gray-200 rounded-xl p-4 text-center hover:border-red-300 transition-colors"
                >
                  <p className="text-2xl font-bold text-gray-800 mb-1">{word.word}</p>
                  <p className="text-sm text-red-500 font-medium mb-1">{word.pinyin}</p>
                  <p className="text-sm text-gray-600">{word.meaning}</p>
                </div>
              ))}
            </div>
          </section>

          <AdSlot type="inArticle" />

          {/* HSK 1급 문법 */}
          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-1">HSK 1급 핵심 문법</h2>
            <p className="text-sm text-gray-500 mb-4">
              중국어 어순의 뼈대가 되는 패턴입니다. 예문을 소리 내어 읽어보세요.
            </p>
            <div className="space-y-3">
              {hsk1Grammar.map((g) => (
                <div key={g.pattern} className="bg-white border border-gray-200 rounded-xl p-5">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="text-lg font-bold text-red-600">{g.pattern}</span>
                    <span className="text-sm text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">{g.meaning}</span>
                  </div>
                  <p className="text-base text-gray-800 font-medium">{g.example}</p>
                  <p className="text-sm text-amber-600">{g.examplePinyin}</p>
                  <p className="text-sm text-gray-500">{g.exampleMeaning}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-4">자주 묻는 질문</h2>
            <div className="space-y-3">
              {faqs.map((f) => (
                <div key={f.q} className="bg-white border border-gray-200 rounded-xl p-5">
                  <p className="font-semibold text-gray-800 mb-2">Q. {f.q}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{f.a}</p>
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
