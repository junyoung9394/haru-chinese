import Link from "next/link";
import AppDownloadCta from "@/components/AppDownloadCta";
import AdSlot from "@/components/AdSlot";
import AdBanner from "@/components/AdBanner";
import StoreButton from "@/components/StoreButton";
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
    iconColor: "bg-red-50 text-red-600",
  },
  {
    href: "/tones",
    icon: "ˉˊˇˋ",
    title: "성조",
    description: "같은 소리도 성조가 다르면 뜻이 달라집니다. 4성과 경성을 정리했습니다.",
    iconColor: "bg-orange-50 text-orange-600",
  },
  {
    href: "/hsk",
    icon: "HSK",
    title: "HSK 1급 기초",
    description: "1급부터 9급까지 급수 체계와 1급 단어·문법으로 기초를 다져보세요.",
    iconColor: "bg-amber-50 text-amber-600",
  },
  {
    href: "/culture",
    icon: "🏮",
    title: "중국 문화",
    description: "인사, 식당, 모바일 결제, 춘절 등 중국 문화를 알아보세요.",
    iconColor: "bg-emerald-50 text-emerald-600",
  },
  {
    href: "/quiz",
    icon: "🧩",
    title: "퀴즈",
    description: "병음, 성조, HSK 단어를 퀴즈로 복습해보세요.",
    iconColor: "bg-sky-50 text-sky-600",
  },
];

const initialPreview = initials.slice(0, 10);
const wordPreview = hsk1Words.slice(0, 8);
const grammarPreview = hsk1Grammar.slice(0, 3);

function SectionHead({ title, desc, href, more = "전체 보기" }: { title: string; desc?: string; href?: string; more?: string }) {
  return (
    <div className="flex items-end justify-between gap-4 mb-5">
      <div>
        <h2 className="text-xl sm:text-[22px] font-extrabold text-gray-900">{title}</h2>
        {desc && <p className="text-sm text-gray-500 mt-1.5">{desc}</p>}
      </div>
      {href && (
        <Link href={href} className="more-link shrink-0">
          {more}
          <svg aria-hidden="true" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>
        </Link>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-5 pb-10 space-y-16">
      {/* 히어로 섹션 */}
      <section className="hero-glow text-center pt-14 pb-6 sm:pt-20 sm:pb-10">
        <span className="eyebrow mb-6">병음 · 성조 · HSK · 중국 문화</span>
        <h1 className="text-[32px] sm:text-5xl font-extrabold text-gray-900 leading-[1.25] sm:leading-[1.2] mb-5">
          🏮 병음부터 HSK까지<br />
          <span className="text-red-600">하루 10분 중국어</span>
        </h1>
        <p className="text-gray-600 text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-8">
          초보자도 쉽게 배우는 중국어 학습 사이트입니다. 웹에서 개념을 익히고, 앱에서 퀴즈와 반복 학습으로 완성하세요.
        </p>
        <div className="flex flex-col sm:flex-row gap-2.5 justify-center max-w-sm sm:max-w-none mx-auto">
          <Link href="/pinyin" className="btn btn-primary px-7">
            병음부터 시작하기
          </Link>
          <a href={playStoreUrl("hero")} target="_blank" rel="noopener noreferrer" className="btn btn-secondary px-7">
            앱 다운로드
          </a>
        </div>
      </section>

      <AdBanner slotId={AD_SLOTS.home_top} variant="banner" />

      {/* 학습 카테고리 */}
      <section>
        <SectionHead title="학습 카테고리" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {categories.map((cat) => (
            <Link key={cat.href} href={cat.href} className="card card-link group flex items-start gap-4 p-5">
              <span className={`grid place-items-center shrink-0 w-12 h-12 rounded-[14px] font-extrabold ${cat.icon === "HSK" ? "text-sm" : cat.icon.length > 2 ? "text-2xl leading-none pt-2.5 tracking-wide" : "text-xl"} ${cat.iconColor}`} lang="zh-Hans">
                {cat.icon}
              </span>
              <span className="min-w-0">
                <span className="flex items-center gap-1 font-bold text-gray-900 mb-1">
                  {cat.title}
                  <svg aria-hidden="true" className="w-3.5 h-3.5 text-gray-400 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>
                </span>
                <span className="block text-sm text-gray-500 leading-relaxed">{cat.description}</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <AdBanner slotId={AD_SLOTS.content_mid} variant="banner" />

      {/* 성조 미리보기 */}
      <section>
        <SectionHead title="성조 한눈에 보기" desc="같은 ma도 성조에 따라 뜻이 완전히 달라집니다" href="/tones" />
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          {tones.map((t) => (
            <div key={t.tone} className="card p-4 pt-5 text-center">
              <p className="text-3xl font-bold text-red-600 mb-1">{t.pinyin}</p>
              <p className="text-xs font-medium text-gray-400 mb-3">{t.tone} {t.shape}</p>
              <div className="border-t border-gray-100 pt-3">
                <p className="text-xl font-bold text-gray-900" lang="zh-Hans">{t.example}</p>
                <p className="text-xs text-gray-500 mt-0.5">{t.meaning}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 병음 미리보기 */}
      <section>
        <SectionHead title="병음 미리보기" desc="성모 b~k — 한국어 근사 발음과 예시 단어를 함께 확인하세요" href="/pinyin" />
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          {initialPreview.map((item) => (
            <div key={item.sound} className="card p-4 pt-5 text-center">
              <p className="text-4xl font-bold text-gray-900 mb-1.5">{item.sound}</p>
              <p className="text-xs font-semibold text-red-600 mb-3">{item.korean}</p>
              <div className="border-t border-gray-100 pt-3">
                <p className="text-sm text-gray-700 font-medium" lang="zh-Hans">{item.example}</p>
                <p className="text-xs text-amber-600">{item.pinyin}</p>
                <p className="text-xs text-gray-400 mt-0.5">{item.meaning}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <AdBanner slotId={AD_SLOTS.content_bottom} variant="banner" />

      {/* HSK 1급 단어 미리보기 */}
      <section>
        <SectionHead title="HSK 1급 단어" desc="중국어 능력 시험 1급 수준의 기초 단어입니다" href="/hsk" />
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {wordPreview.map((word) => (
            <div key={word.word} className="card p-5 text-center">
              <p className="text-2xl font-bold text-gray-900 mb-1" lang="zh-Hans">{word.word}</p>
              <p className="text-sm text-red-600 font-medium mb-1.5">{word.pinyin}</p>
              <p className="text-sm text-gray-500">{word.meaning}</p>
            </div>
          ))}
        </div>
      </section>

      <AdSlot type="inArticle" />

      {/* HSK 1급 문법 포인트 */}
      <section>
        <SectionHead title="HSK 1급 문법 포인트" desc="예문과 함께 핵심 문법 패턴을 익혀보세요" href="/hsk" more="더 보기" />
        <div className="card divide-y divide-gray-100 overflow-hidden">
          {grammarPreview.map((item) => (
            <div key={item.pattern} className="p-5 sm:px-6">
              <div className="flex flex-wrap items-center gap-2.5 mb-2">
                <span className="text-lg font-bold text-red-600" lang="zh-Hans">{item.pattern}</span>
                <span className="chip">{item.meaning}</span>
              </div>
              <p className="text-[15px] text-gray-700 mb-1">
                예문: <span className="font-medium" lang="zh-Hans">{item.example}</span>
              </p>
              <p className="text-sm text-amber-600 mb-1">{item.examplePinyin}</p>
              <p className="text-sm text-gray-400">{item.exampleMeaning}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 오늘의 중국어 표현 */}
      <section>
        <SectionHead title="꼭 알아야 할 중국어 표현" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {dailyExpressions.map((item) => (
            <div key={item.expression} className="card p-5">
              <p className="text-xl font-bold text-gray-900 mb-1" lang="zh-Hans">{item.expression}</p>
              <p className="text-xs text-gray-400 mb-3">{item.pinyin}</p>
              <p className="inline-flex text-sm font-semibold text-red-600 bg-red-50 rounded-lg px-2.5 py-1">{item.meaning}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 앱 연동 소개 */}
      <section className="card p-6 sm:p-9">
        <h2 className="text-xl sm:text-[22px] font-extrabold text-gray-900 mb-6">웹 + 앱으로 효과적인 중국어 학습</h2>
        <ol className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-7">
          {[
            { icon: "📖", title: "웹에서 개념 학습", desc: "병음, 성조, HSK 단어와 문법, 중국 문화를 확인합니다." },
            { icon: "📱", title: "앱에서 반복 학습", desc: "HSK 1~9급 단어를 발음, 퀴즈, SRS 복습으로 익힙니다." },
            { icon: "🏆", title: "매일 10분으로 습관화", desc: "짧게 매일 하며 연속 학습 기록을 쌓아갑니다." },
          ].map((step, i) => (
            <li key={step.title} className="rounded-2xl bg-gray-100 p-5">
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl" aria-hidden="true">{step.icon}</span>
                <span className="text-xs font-bold text-gray-400 tabular">STEP {i + 1}</span>
              </div>
              <p className="font-bold text-gray-900 mb-1">{step.title}</p>
              <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
            </li>
          ))}
        </ol>
        <div className="flex justify-center">
          <StoreButton href={playStoreUrl("bottom-cta")} />
        </div>
      </section>

      {/* 중국 문화 추천 글 */}
      <section>
        <SectionHead title="중국 문화 살펴보기" href="/culture" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {cultureItems.slice(0, 3).map((item) => (
            <div key={item.slug} className="card p-5 flex flex-col">
              <span className="chip chip-acc self-start">{item.category}</span>
              <p className="font-bold text-gray-900 mt-3 mb-2 leading-snug">{item.title}</p>
              <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
              {item.expression && (
                <p className="mt-auto pt-4 text-sm">
                  <span className="font-bold text-red-600" lang="zh-Hans">{item.expression}</span>
                  <span className="text-gray-500"> — {item.expressionMeaning}</span>
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
