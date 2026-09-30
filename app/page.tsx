import Link from "next/link";
import AppDownloadCta from "@/components/AppDownloadCta";
import AdSlot from "@/components/AdSlot";
import AdBanner from "@/components/AdBanner";
import { AD_SLOTS } from "@/lib/adSlots";
import { playStoreUrl } from "@/lib/site";
import { cultureItems } from "@/data/culture";
import { initials, tones } from "@/data/pinyin";
import { hsk1Words, hsk1Grammar } from "@/data/hsk";

const dailyExpressions = [
  { expression: "你好", pinyin: "Nǐ hǎo", meaning: "안녕하세요" },
  { expression: "谢谢", pinyin: "Xièxie", meaning: "감사합니다" },
  { expression: "对不起", pinyin: "Duìbuqǐ", meaning: "죄송합니다" },
  { expression: "多少钱？", pinyin: "Duōshao qián?", meaning: "얼마예요?" },
  { expression: "我不会说中文", pinyin: "Wǒ bú huì shuō Zhōngwén", meaning: "중국어를 못합니다" },
  { expression: "再见", pinyin: "Zàijiàn", meaning: "안녕히 가세요" },
];

const categories = [
  {
    href: "/pinyin",
    icon: "拼",
    title: "병음",
    description: "중국어 발음의 설계도. 성모 21개와 운모 36개를 카드로 익혀보세요.",
    color: "bg-red-50 border-red-200",
    iconColor: "text-red-600",
  },
  {
    href: "/tones",
    icon: "ˉˊˇˋ",
    title: "성조",
    description: "같은 소리도 성조가 다르면 뜻이 달라집니다. 4성과 경성을 정리했습니다.",
    color: "bg-orange-50 border-orange-200",
    iconColor: "text-orange-600",
  },
  {
    href: "/hsk",
    icon: "HSK",
    title: "HSK 1급 기초",
    description: "1급부터 9급까지 급수 체계와 1급 단어·문법으로 기초를 다져보세요.",
    color: "bg-amber-50 border-amber-200",
    iconColor: "text-amber-700",
  },
  {
    href: "/culture",
    icon: "🏮",
    title: "중국 문화",
    description: "인사, 식당, 모바일 결제, 춘절 등 중국 문화를 알아보세요.",
    color: "bg-emerald-50 border-emerald-200",
    iconColor: "text-emerald-700",
  },
  {
    href: "/quiz",
    icon: "🧩",
    title: "퀴즈",
    description: "병음, 성조, HSK 단어를 퀴즈로 복습해보세요.",
    color: "bg-sky-50 border-sky-200",
    iconColor: "text-sky-700",
  },
];

const initialPreview = initials.slice(0, 10);
const wordPreview = hsk1Words.slice(0, 8);
const grammarPreview = hsk1Grammar.slice(0, 3);

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-14">
      {/* 히어로 섹션 */}
      <section className="text-center py-10 space-y-5">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 leading-tight">
          🏮 병음부터 HSK까지<br />
          <span className="text-red-600">하루 10분 중국어</span>
        </h1>
        <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          초보자도 쉽게 배우는 중국어 학습 사이트입니다. 웹에서 개념을 익히고, 앱에서 퀴즈와 반복 학습으로 완성하세요.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/pinyin"
            className="bg-red-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition-colors"
          >
            병음부터 시작하기
          </Link>
          <a
            href={playStoreUrl("hero")}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-red-600 text-red-600 px-6 py-3 rounded-full font-semibold hover:bg-red-50 transition-colors"
          >
            앱 다운로드
          </a>
        </div>
      </section>

      <AdBanner slotId={AD_SLOTS.home_top} variant="banner" />

      {/* 학습 카테고리 */}
      <section>
        <h2 className="text-xl font-bold text-gray-800 mb-5">학습 카테고리</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.href}
              href={cat.href}
              className={`border rounded-2xl p-5 hover:shadow-md transition-shadow ${cat.color}`}
            >
              <p className={`text-3xl font-bold mb-2 ${cat.iconColor}`}>{cat.icon}</p>
              <p className="font-semibold text-gray-800 mb-1">{cat.title}</p>
              <p className="text-sm text-gray-600">{cat.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <AdBanner slotId={AD_SLOTS.content_mid} variant="banner" />

      {/* 성조 미리보기 */}
      <section>
        <div className="flex items-center justify-between mb-5">
          <div>
            <h2 className="text-xl font-bold text-gray-800">성조 한눈에 보기</h2>
            <p className="text-sm text-gray-500 mt-1">같은 ma도 성조에 따라 뜻이 완전히 달라집니다</p>
          </div>
          <Link href="/tones" className="text-red-600 text-sm font-medium hover:underline">
            전체 보기 →
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          {tones.map((t) => (
            <div
              key={t.tone}
              className="bg-white border border-gray-200 rounded-2xl p-4 text-center hover:border-red-300 hover:shadow-sm transition-all"
            >
              <p className="text-2xl font-bold text-red-600 mb-1">{t.pinyin}</p>
              <p className="text-xs text-gray-400 mb-2">{t.tone} {t.shape}</p>
              <p className="text-xl font-bold text-gray-800">{t.example}</p>
              <p className="text-xs text-gray-500">{t.meaning}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 병음 미리보기 */}
      <section>
        <div className="flex items-center justify-between mb-5">
          <div>
            <h2 className="text-xl font-bold text-gray-800">병음 미리보기</h2>
            <p className="text-sm text-gray-500 mt-1">성모 b~k — 한국어 근사 발음과 예시 단어를 함께 확인하세요</p>
          </div>
          <Link href="/pinyin" className="text-red-600 text-sm font-medium hover:underline">
            전체 보기 →
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          {initialPreview.map((item) => (
            <div
              key={item.sound}
              className="bg-white border border-gray-200 rounded-2xl p-4 text-center hover:border-red-300 hover:shadow-sm transition-all"
            >
              <p className="text-3xl font-bold text-red-600 mb-1">{item.sound}</p>
              <p className="text-xs font-medium text-gray-500 mb-2">{item.korean}</p>
              <p className="text-sm text-gray-700 font-medium">{item.example}</p>
              <p className="text-xs text-amber-600">{item.pinyin}</p>
              <p className="text-xs text-gray-400">{item.meaning}</p>
            </div>
          ))}
        </div>
      </section>

      <AdBanner slotId={AD_SLOTS.content_bottom} variant="banner" />

      {/* HSK 1급 단어 미리보기 */}
      <section>
        <div className="flex items-center justify-between mb-5">
          <div>
            <h2 className="text-xl font-bold text-gray-800">HSK 1급 단어</h2>
            <p className="text-sm text-gray-500 mt-1">중국어 능력 시험 1급 수준의 기초 단어입니다</p>
          </div>
          <Link href="/hsk" className="text-red-600 text-sm font-medium hover:underline">
            전체 보기 →
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {wordPreview.map((word) => (
            <div
              key={word.word}
              className="bg-white border border-gray-200 rounded-xl p-4 text-center hover:border-amber-300 hover:shadow-sm transition-all"
            >
              <p className="text-2xl font-bold text-gray-800 mb-1">{word.word}</p>
              <p className="text-sm text-red-500 font-medium mb-1">{word.pinyin}</p>
              <p className="text-sm text-gray-600">{word.meaning}</p>
            </div>
          ))}
        </div>
      </section>

      <AdSlot type="inArticle" />

      {/* HSK 1급 문법 포인트 */}
      <section>
        <div className="flex items-center justify-between mb-5">
          <div>
            <h2 className="text-xl font-bold text-gray-800">HSK 1급 문법 포인트</h2>
            <p className="text-sm text-gray-500 mt-1">예문과 함께 핵심 문법 패턴을 익혀보세요</p>
          </div>
          <Link href="/hsk" className="text-red-600 text-sm font-medium hover:underline">
            더 보기 →
          </Link>
        </div>
        <div className="space-y-3">
          {grammarPreview.map((item) => (
            <div key={item.pattern} className="bg-white border border-gray-200 rounded-xl p-5">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <span className="text-lg font-bold text-red-600">{item.pattern}</span>
                <span className="text-sm text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">{item.meaning}</span>
              </div>
              <p className="text-sm text-gray-700 mb-1">
                예문: <span className="font-medium">{item.example}</span>
              </p>
              <p className="text-sm text-amber-600 mb-1">{item.examplePinyin}</p>
              <p className="text-sm text-gray-400">{item.exampleMeaning}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 오늘의 중국어 표현 */}
      <section>
        <h2 className="text-xl font-bold text-gray-800 mb-5">꼭 알아야 할 중국어 표현</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {dailyExpressions.map((item) => (
            <div key={item.expression} className="bg-white border border-gray-200 rounded-2xl p-5 text-center hover:shadow-sm transition-shadow">
              <p className="text-xl font-bold text-red-600 mb-1">{item.expression}</p>
              <p className="text-xs text-gray-400 mb-2">{item.pinyin}</p>
              <p className="text-gray-700 font-medium text-sm">{item.meaning}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 앱 연동 소개 */}
      <section className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">웹 + 앱으로 효과적인 중국어 학습</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="text-center p-4">
            <p className="text-2xl mb-2">📖</p>
            <p className="font-semibold text-gray-800 mb-1">웹에서 개념 학습</p>
            <p className="text-sm text-gray-600">병음, 성조, HSK 단어와 문법, 중국 문화를 확인합니다.</p>
          </div>
          <div className="text-center p-4">
            <p className="text-2xl mb-2">📱</p>
            <p className="font-semibold text-gray-800 mb-1">앱에서 반복 학습</p>
            <p className="text-sm text-gray-600">HSK 1~9급 단어를 발음, 퀴즈, SRS 복습으로 익힙니다.</p>
          </div>
          <div className="text-center p-4">
            <p className="text-2xl mb-2">🏆</p>
            <p className="font-semibold text-gray-800 mb-1">매일 10분으로 습관화</p>
            <p className="text-sm text-gray-600">짧게 매일 하며 연속 학습 기록을 쌓아갑니다.</p>
          </div>
        </div>
        <div className="text-center">
          <a
            href={playStoreUrl("bottom-cta")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition-colors"
          >
            Google Play에서 앱 설치하기
          </a>
        </div>
      </section>

      {/* 중국 문화 추천 글 */}
      <section>
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-xl font-bold text-gray-800">중국 문화 살펴보기</h2>
          <Link href="/culture" className="text-red-600 text-sm font-medium hover:underline">
            전체 보기 →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {cultureItems.slice(0, 3).map((item) => (
            <div key={item.slug} className="bg-white border border-gray-200 rounded-2xl p-5 hover:shadow-sm transition-shadow">
              <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full font-medium">
                {item.category}
              </span>
              <p className="font-semibold text-gray-800 mt-3 mb-2">{item.title}</p>
              <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              {item.expression && (
                <p className="mt-3 text-red-600 font-bold text-sm">
                  {item.expression} — {item.expressionMeaning}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      <AppDownloadCta />

      <AdSlot type="relaxed" />
    </div>
  );
}
