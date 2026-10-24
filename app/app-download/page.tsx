import type { Metadata } from "next";
import { playStoreUrl } from "@/lib/site";
import StoreButton from "@/components/StoreButton";

export const metadata: Metadata = {
  title: "HSK 완전정복 앱 다운로드",
  description:
    "HSK 1급부터 9급까지 중국어 단어와 회화를 SRS 복습, 퀴즈, 발음 평가, 필기 연습으로 학습할 수 있는 앱을 설치해보세요.",
  alternates: { canonical: "/app-download" },
};

const appFeatures = [
  { icon: "📚", title: "HSK 1~9급 단어장", desc: "급수별로 정리된 단어를 체계적으로 학습합니다." },
  { icon: "🔁", title: "SRS 간격 반복 복습", desc: "잊을 때쯤 다시 물어보는 복습 알고리즘을 씁니다." },
  { icon: "拼", title: "병음 · 성조 학습", desc: "중국어 발음의 기본을 카드와 함께 익힙니다." },
  { icon: "✍️", title: "필기 연습", desc: "간체자를 직접 써보며 모양과 획순을 익힙니다." },
  { icon: "🧩", title: "단어 & 문법 퀴즈", desc: "객관식 퀴즈로 배운 내용을 즉시 복습합니다." },
  { icon: "❌", title: "오답 관리", desc: "틀린 문제만 모아 집중적으로 재학습합니다." },
  { icon: "🔊", title: "발음 듣기", desc: "원어민 수준의 음성으로 정확한 발음을 익힙니다." },
  { icon: "🎤", title: "발음 평가", desc: "직접 말한 발음을 확인하며 교정합니다." },
  { icon: "🏆", title: "하루 10분 학습 루틴", desc: "짧게 매일 하며 연속 학습 기록을 쌓아갑니다." },
];

const roles = [
  {
    label: "웹사이트 (하루중국어)",
    items: [
      "병음 / 성조 개념 학습",
      "HSK 급수 체계와 1급 단어·문법 확인",
      "여행 · 비즈니스 회화 표현 확인",
      "중국 문화 콘텐츠 읽기",
    ],
    color: "bg-red-50 border-red-100",
  },
  {
    label: "앱 (HSK 완전정복)",
    items: [
      "HSK 1~9급 단어 반복 학습",
      "SRS 복습과 퀴즈로 장기 기억화",
      "발음 듣기와 발음 평가로 교정",
      "하루 10분 루틴으로 학습 습관 형성",
    ],
    color: "bg-white border-gray-200",
  },
];

export default function AppDownloadPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-5 py-10 sm:py-14 space-y-14">
      <section className="hero-glow text-center pt-4">
        <div className="app-icon mx-auto mb-6" aria-hidden="true" lang="zh-Hans">中</div>
        <span className="eyebrow mb-4">Android 앱 · 무료</span>
        <h1 className="text-[28px] sm:text-4xl font-extrabold text-gray-900 mb-4">
          HSK 완전정복
        </h1>
        <p className="text-gray-600 sm:text-lg max-w-xl mx-auto leading-relaxed mb-8">
          한국인을 위한 중국어 학습 앱입니다. HSK 1급부터 9급까지의 단어와 기초 회화를
          SRS 복습, 퀴즈, 발음 평가, 필기 연습으로 익힐 수 있습니다.
        </p>
        <StoreButton href={playStoreUrl("download-page")} />
      </section>

      <section>
        <h2 className="text-xl sm:text-[22px] font-extrabold text-gray-900 mb-5">앱 주요 기능</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {appFeatures.map((feature) => (
            <div key={feature.title} className="card p-5 flex items-start gap-4">
              <span className="grid place-items-center shrink-0 w-11 h-11 rounded-[13px] bg-gray-100 text-xl font-bold text-gray-800" aria-hidden="true" lang="zh-Hans">
                {feature.icon}
              </span>
              <span>
                <span className="block font-bold text-gray-900 mb-1">{feature.title}</span>
                <span className="block text-sm text-gray-500 leading-relaxed">{feature.desc}</span>
              </span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl sm:text-[22px] font-extrabold text-gray-900 mb-5">웹사이트와 앱의 역할</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {roles.map((role) => (
            <div key={role.label} className={`border rounded-2xl p-6 ${role.color}`}>
              <p className="font-bold text-gray-900 mb-4">{role.label}</p>
              <ul className="space-y-2.5">
                {role.items.map((item) => (
                  <li key={item} className="text-sm text-gray-700 flex items-start gap-2.5">
                    <svg aria-hidden="true" className="w-4 h-4 mt-0.5 shrink-0 text-red-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.6} strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="promo p-8 sm:p-10 text-center" data-glyph="汉">
        <p className="text-2xl font-extrabold text-white mb-2">지금 바로 시작해보세요</p>
        <p className="text-white/85 text-[15px] mb-7">
          발음 듣기, 오답 관리, SRS 복습으로 매일 중국어 습관을 만들어보세요.
        </p>
        <StoreButton href={playStoreUrl("download-page-bottom")} variant="light" />
      </section>
    </div>
  );
}
