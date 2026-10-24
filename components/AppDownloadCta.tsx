import StoreButton from "@/components/StoreButton";
import { APP_NAME, playStoreUrl } from "@/lib/site";

const HIGHLIGHTS = ["HSK 1~9급 단어", "SRS 복습", "발음 듣기·평가"];

export default function AppDownloadCta() {
  return (
    <section className="promo p-6 sm:p-9" data-glyph="汉" aria-labelledby="app-cta-title">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-7">
        <div className="max-w-xl">
          <div className="flex items-center gap-3 mb-5">
            <span
              aria-hidden="true"
              lang="zh-Hans"
              className="grid place-items-center w-12 h-12 rounded-[14px] bg-white text-red-600 text-xl font-extrabold shadow-[0_8px_20px_-8px_rgba(0,0,0,0.4)]"
            >
              中
            </span>
            <span className="text-sm font-semibold text-white/80">{APP_NAME}</span>
          </div>
          <h2 id="app-cta-title" className="text-2xl sm:text-[28px] font-extrabold leading-snug text-white mb-3">
            앱에서 반복 학습하기
          </h2>
          <p className="text-white/85 text-[15px] leading-relaxed">
            오늘 배운 중국어를 앱에서 퀴즈로 복습해보세요.
            <br className="hidden sm:block" />{" "}
            HSK 완전정복 앱에서 HSK 1~9급 단어와 문법을 발음과 함께 반복 학습할 수 있습니다.
          </p>
          <ul className="flex flex-wrap gap-2 mt-5" aria-label="앱 주요 기능">
            {HIGHLIGHTS.map((h) => (
              <li key={h} className="promo-chip">{h}</li>
            ))}
          </ul>
        </div>
        <StoreButton href={playStoreUrl("cta")} variant="light" className="self-start md:self-end" />
      </div>
    </section>
  );
}
