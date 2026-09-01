import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import AppDownloadCta from "@/components/AppDownloadCta";
import AdBanner from "@/components/AdBanner";
import AdSlot from "@/components/AdSlot";
import { AD_SLOTS } from "@/lib/adSlots";
import { hskLevels } from "@/data/hsk";
import { BASE_URL } from "@/lib/site";

type Props = { params: Promise<{ level: string }> };

/** /hsk 가 1급을 담당하므로 하위 라우트는 2~6급만 만듭니다 */
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
    title: `${info.label} 단어와 문법 — ${info.vocab}`,
    description: `${info.label}은 ${info.vocab} 수준입니다. ${info.description} 필수 단어와 핵심 문법 패턴을 예문과 함께 정리했습니다.`,
    alternates: { canonical: `${BASE_URL}${info.href}` },
  };
}

export default async function HskLevelPage({ params }: Props) {
  const { level } = await params;
  const info = findLevel(level);
  if (!info) notFound();

  const index = hskLevels.findIndex((lv) => lv.level === info.level);
  const prev = hskLevels[index - 1];
  const next = hskLevels[index + 1];

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="flex gap-8 items-start">
        <div className="flex-1 min-w-0 space-y-10">
          <Link href="/hsk" className="text-sm text-red-600 hover:underline">
            ← HSK 전체 급수 보기
          </Link>

          <section>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
              {info.label} 단어와 문법
            </h1>
            <p className="text-gray-600 leading-relaxed max-w-2xl">{info.description}</p>
            <div className={`mt-5 border rounded-2xl p-5 grid grid-cols-2 sm:grid-cols-4 gap-4 ${info.color}`}>
              <div>
                <p className="text-xs text-gray-500 mb-1">요구 어휘</p>
                <p className="font-bold">{info.vocab}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">수준</p>
                <p className="font-bold text-sm">{info.target}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">합격선</p>
                <p className="font-bold text-sm">{info.passLine}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">시험 시간</p>
                <p className="font-bold text-sm">{info.duration}</p>
              </div>
            </div>
          </section>

          <AdBanner slotId={AD_SLOTS.content_mid} variant="banner" />

          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-1">{info.label} 필수 단어</h2>
            <p className="text-sm text-gray-500 mb-4">
              이 급수에서 특히 자주 출제되는 단어를 골랐습니다. 전체 단어장은 앱에서 확인할 수 있습니다.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {info.words.map((word) => (
                <div
                  key={word.word}
                  className="bg-white border border-gray-200 rounded-xl p-4 text-center hover:border-red-300 transition-colors"
                >
                  <p className="text-xl font-bold text-gray-800 mb-1">{word.word}</p>
                  <p className="text-sm text-red-500 font-medium mb-1">{word.pinyin}</p>
                  <p className="text-sm text-gray-600">{word.meaning}</p>
                </div>
              ))}
            </div>
          </section>

          <AdSlot type="inArticle" />

          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-1">{info.label} 핵심 문법</h2>
            <p className="text-sm text-gray-500 mb-4">예문을 통째로 외우면 시험과 회화에 바로 쓸 수 있습니다.</p>
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
                  {prev.label} · {prev.vocab}
                </p>
              </Link>
            ) : (
              <div />
            )}
            {next ? (
              <Link href={next.href} className="group text-right">
                <p className="text-xs text-gray-400 mb-1">다음 급수 →</p>
                <p className="text-sm font-medium text-gray-700 group-hover:text-red-600 transition-colors">
                  {next.label} · {next.vocab}
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
