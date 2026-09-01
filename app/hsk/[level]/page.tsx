import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import AppDownloadCta from "@/components/AppDownloadCta";
import AdBanner from "@/components/AdBanner";
import AdSlot from "@/components/AdSlot";
import WordList from "@/components/WordList";
import StudyPlan from "@/components/StudyPlan";
import { AD_SLOTS } from "@/lib/adSlots";
import { hskLevels } from "@/data/hsk";
import { hskStudyPlans } from "@/data/hskStudy";
import { BASE_URL } from "@/lib/site";

type Props = { params: Promise<{ level: string }> };

/** /hsk 가 1급을 담당하므로 하위 라우트는 2급부터 7~9급까지입니다 */
const subLevels = hskLevels.filter((lv) => lv.href !== "/hsk");

export function generateStaticParams() {
  return subLevels.map((lv) => ({ level: lv.href.replace("/hsk/", "") }));
}

function findLevel(level: string) {
  return subLevels.find((lv) => lv.href === `/hsk/${level}`);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { level } = await params;
  const info = findLevel(level);
  if (!info) return {};
  return {
    title: `${info.label} 단어와 문법 — ${info.vocab30}`,
    description: `${info.label}은 HSK 3.0 기준 ${info.vocab30}, 한자 ${info.hanzi30} 수준입니다. 학습 기간 ${hskStudyPlans[info.id].duration}, 무엇부터 해야 하는지, 어디서 막히는지와 함께 주제별 필수 단어와 핵심 문법을 정리했습니다.`,
    alternates: { canonical: `${BASE_URL}${info.href}` },
  };
}

export default async function HskLevelPage({ params }: Props) {
  const { level } = await params;
  const info = findLevel(level);
  if (!info) notFound();

  const index = hskLevels.findIndex((lv) => lv.id === info.id);
  const prev = hskLevels[index - 1];
  const next = hskLevels[index + 1];
  const isAdvanced = info.id === "7-9";

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="flex gap-8 items-start">
        <div className="flex-1 min-w-0 space-y-10">
          <Link href="/hsk" className="text-sm text-red-600 hover:underline">
            ← HSK 전체 급수 보기
          </Link>

          <section>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full font-medium">
                {info.stage} 단계
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
              {info.label} 단어와 문법
            </h1>
            <p className="text-gray-600 leading-relaxed max-w-2xl">{info.description}</p>

            <div className={`mt-5 border rounded-2xl p-5 grid grid-cols-2 sm:grid-cols-4 gap-4 ${info.color}`}>
              <div>
                <p className="text-xs text-gray-500 mb-1">누적 어휘 (3.0)</p>
                <p className="font-bold">{info.vocab30}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">누적 한자 (3.0)</p>
                <p className="font-bold">{info.hanzi30}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">기존 2.0 기준</p>
                <p className="font-bold text-sm">{info.vocab20}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">시험 시간</p>
                <p className="font-bold text-sm">{info.duration}</p>
              </div>
            </div>

            <div className="mt-4 bg-white border border-gray-200 rounded-2xl p-5">
              <p className="text-sm font-semibold text-gray-700 mb-1">이 급수에서 진짜 넘어야 하는 벽</p>
              <p className="text-sm text-gray-600 leading-relaxed">{info.focus}</p>
            </div>
          </section>

          {isAdvanced && (
            <section className="bg-slate-100 border border-slate-300 rounded-2xl p-6">
              <h2 className="text-lg font-bold text-gray-800 mb-3">7~9급은 시험 방식이 다릅니다</h2>
              <ul className="space-y-2 text-sm text-gray-700 leading-relaxed">
                <li className="flex gap-2">
                  <span className="text-slate-500 mt-0.5">•</span>
                  <span>
                    <strong>급수를 골라 신청하지 않습니다.</strong> 하나의 시험을 보고, 점수에 따라 7급·8급·9급 또는 미달로 판정됩니다.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-slate-500 mt-0.5">•</span>
                  <span>
                    듣기·읽기·쓰기에 더해 <strong>말하기와 번역까지</strong> 평가합니다. 1~6급과 달리 말하기가 별도 시험(HSKK)으로 분리되어 있지 않습니다.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-slate-500 mt-0.5">•</span>
                  <span>
                    HSK 3.0에서 신설된 단계라 기존 2.0에는 대응하는 급수가 없습니다.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-slate-500 mt-0.5">•</span>
                  <span>
                    시행 일정과 세부 구성은 기관 공지에 따라 달라질 수 있으니 접수 전 확인하세요.
                  </span>
                </li>
              </ul>
            </section>
          )}

          <AdBanner slotId={AD_SLOTS.content_mid} variant="banner" />

          <StudyPlan plan={hskStudyPlans[info.id]} levelLabel={info.label} />

          <AdSlot type="inArticle" />

          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-1">{info.label} 필수 단어</h2>
            <p className="text-sm text-gray-500 mb-4">
              주제별로 묶었습니다. 전체 단어장은 앱에서 확인할 수 있습니다.
            </p>
            <WordList words={info.words} />
          </section>

          <AdSlot type="inArticle" />

          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-1">{info.label} 핵심 문법</h2>
            <p className="text-sm text-gray-500 mb-4">
              예문을 통째로 외우면 시험과 회화에 바로 쓸 수 있습니다.
            </p>
            <div className="space-y-3">
              {info.grammar.map((g) => (
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

          <AppDownloadCta />

          {/* 이전/다음 급수 */}
          <nav className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
            {prev ? (
              <Link href={prev.href} className="group text-left">
                <p className="text-xs text-gray-400 mb-1">← 이전 급수</p>
                <p className="text-sm font-medium text-gray-700 group-hover:text-red-600 transition-colors">
                  {prev.label} · {prev.vocab30}
                </p>
              </Link>
            ) : (
              <div />
            )}
            {next ? (
              <Link href={next.href} className="group text-right">
                <p className="text-xs text-gray-400 mb-1">다음 급수 →</p>
                <p className="text-sm font-medium text-gray-700 group-hover:text-red-600 transition-colors">
                  {next.label} · {next.vocab30}
                </p>
              </Link>
            ) : (
              <div />
            )}
          </nav>

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
