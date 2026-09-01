import type { Metadata } from "next";
import Link from "next/link";
import AppDownloadCta from "@/components/AppDownloadCta";
import AdBanner from "@/components/AdBanner";
import AdSlot from "@/components/AdSlot";
import { AD_SLOTS } from "@/lib/adSlots";
import { hskLevels, hskStages, hsk1Words, hsk1Grammar } from "@/data/hsk";
import WordList from "@/components/WordList";

export const metadata: Metadata = {
  title: "HSK 1급~9급 완전 가이드 — 급수별 단어 수와 난이도",
  description:
    "HSK 2.0(1~6급)과 HSK 3.0(1~9급, 三等九级)의 차이, 급수별 어휘·한자 요구량, 시험 구성, 7~9급 시험 방식을 정리했습니다. HSK 1급 필수 단어와 문법도 함께 학습하세요.",
  alternates: { canonical: "/hsk" },
};

const examParts = [
  {
    part: "듣기 (听力)",
    body: "짧은 대화와 안내 방송을 듣고 답합니다. 급수가 올라갈수록 지문이 길어지고, 한 번만 들려주는 문항이 늘어납니다.",
  },
  {
    part: "독해 (阅读)",
    body: "어순 배열, 빈칸 채우기, 지문 이해로 구성됩니다. 5급 이상에서는 아는 단어인데도 시간이 모자라 못 푸는 경우가 많아 시간 관리가 당락을 가릅니다.",
  },
  {
    part: "쓰기 (书写)",
    body: "3급부터 등장합니다. 3~4급은 어순 배열과 한자 쓰기, 5~6급은 작문과 요약입니다.",
  },
  {
    part: "말하기 · 번역",
    body: "7~9급에서만 평가합니다. 1~6급에서는 말하기가 HSKK라는 별도 시험으로 분리되어 있습니다.",
  },
];

const faqs = [
  {
    q: "지금 신청하면 HSK 2.0인가요, 3.0인가요?",
    a: "2026년 9월 현재 1~6급 정규 시험은 대체로 기존 2.0 기준으로 시행되고 있고, 3.0 정식 전환은 별도 공지 예정입니다. 다만 시행 기관 공지가 수시로 바뀌므로 접수 전에 응시일 기준 공지를 반드시 직접 확인하세요.",
  },
  {
    q: "HSK 몇 급부터 따는 게 좋을까요?",
    a: "취업이나 학점 인정이 목적이라면 4급이 현실적인 출발선입니다. 1~2급은 성적표로서의 활용도가 낮아, 학습 동기를 확인하는 용도로 보는 경우가 많습니다.",
  },
  {
    q: "7급, 8급, 9급을 따로 신청하나요?",
    a: "아닙니다. 7~9급은 하나의 시험입니다. 응시 후 점수에 따라 7급, 8급, 9급 또는 미달로 판정됩니다. 목표 급수를 미리 정해 신청하는 방식이 아닙니다.",
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

const stageColor: Record<string, string> = {
  초등: "bg-red-100 text-red-700",
  중등: "bg-emerald-100 text-emerald-700",
  고등: "bg-slate-200 text-slate-700",
};

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
              국내 기업 채용과 중국 대학 입학에서 가장 널리 쓰입니다.
              급수별 요구 어휘량과 시험 구성을 먼저 파악하고 학습 계획을 세워보세요.
            </p>
          </section>

          {/* 2.0 vs 3.0 */}
          <section className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
            <h2 className="text-lg font-bold text-gray-800 mb-2">
              먼저 알아야 할 것 — HSK는 지금 두 체계가 공존합니다
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              HSK를 처음 알아볼 때 가장 헷갈리는 지점입니다. 검색하면 &ldquo;1~6급&rdquo;이라는 설명과
              &ldquo;1~9급&rdquo;이라는 설명이 동시에 나오는데, 둘 다 맞습니다. 서로 다른 기준을 말하는 것입니다.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-5 border border-amber-100">
                <p className="font-bold text-amber-700 mb-1">HSK 2.0 — 1~6급</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  오랫동안 시행되어 온 기존 체계입니다. 시중 교재와 기출문제 대부분이 이 기준이고,
                  <strong> 2026년 현재 실제로 응시하는 1~6급 시험도 대체로 이 기준</strong>입니다.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-slate-200">
                <p className="font-bold text-slate-700 mb-1">HSK 3.0 — 1~9급 (三等九级)</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  2021년 제정된 새 국가 표준입니다. 3등급 9단계로 나뉘고 <strong>7~9급 고등 단계가 신설</strong>되었습니다.
                  요구 어휘량이 전반적으로 크게 늘었습니다.
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mt-4">
              전환 일정은 시행 기관 공지에 따라 바뀝니다. <strong>접수 전에 응시일 기준 공지를 직접 확인하세요.</strong>{" "}
              학습 자체는 어느 쪽이든 크게 달라지지 않습니다. 단어와 문법을 쌓는 순서는 같고, 3.0은 같은 급수에서 요구하는 양이 더 많을 뿐입니다.
            </p>
          </section>

          {/* 3단계 구조 */}
          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-4">3등급 9단계 구조</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {hskStages.map((s) => (
                <div key={s.stage} className="bg-white border border-gray-200 rounded-2xl p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${stageColor[s.stage]}`}>
                      {s.label}
                    </span>
                    <span className="text-sm font-bold text-gray-700">{s.range}</span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{s.summary}</p>
                </div>
              ))}
            </div>
          </section>

          <AdBanner slotId={AD_SLOTS.content_mid} variant="banner" />

          {/* 급수 카드 */}
          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-1">급수별 한눈에 보기</h2>
            <p className="text-sm text-gray-500 mb-4">
              어휘·한자는 HSK 3.0 표준 누적 기준이고, 괄호 안은 기존 2.0 기준입니다. 급수를 누르면 단어와 문법으로 들어갑니다.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {hskLevels.map((lv) => (
                <Link
                  key={lv.id}
                  href={lv.href}
                  className={`border rounded-2xl p-5 hover:shadow-md transition-shadow ${lv.color}`}
                >
                  <div className="flex items-baseline justify-between mb-2 gap-2">
                    <span className="text-xl font-bold">{lv.label}</span>
                    <span className="text-sm font-medium text-right">
                      {lv.vocab30}
                      <span className="block text-xs opacity-70">2.0: {lv.vocab20}</span>
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-gray-800 mb-1">{lv.target}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{lv.description}</p>
                  <p className="text-xs text-gray-500 mt-3">
                    한자 {lv.hanzi30} · {lv.passLine} · {lv.duration}
                  </p>
                </Link>
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-3">
              * 합격선과 시험 시간은 HSK 2.0 기준입니다. 시행 기관 공지에 따라 달라질 수 있습니다.
            </p>
          </section>

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
          </section>

          {/* 급수별 핵심 과제 */}
          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-1">급수별로 진짜 넘어야 하는 벽</h2>
            <p className="text-sm text-gray-500 mb-4">
              단어 수만 보면 감이 안 옵니다. 각 급수에서 실제로 발목을 잡는 것은 따로 있습니다.
            </p>
            <div className="space-y-2">
              {hskLevels.map((lv) => (
                <div
                  key={lv.id}
                  className="bg-white border border-gray-200 rounded-xl px-5 py-4 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4"
                >
                  <span className="text-sm font-bold text-red-600 sm:w-24 shrink-0">{lv.label}</span>
                  <span className="text-sm text-gray-600 leading-relaxed">{lv.focus}</span>
                </div>
              ))}
            </div>
          </section>

          <AdSlot type="inArticle" />

          {/* HSK 1급 단어 */}
          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-1">HSK 1급 필수 단어</h2>
            <p className="text-sm text-gray-500 mb-4">
              주제별로 묶었습니다. 낱개로 외우는 것보다 같은 주제끼리 묶어 외울 때 훨씬 오래 남습니다.
            </p>
            <WordList words={hsk1Words} />
          </section>

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
