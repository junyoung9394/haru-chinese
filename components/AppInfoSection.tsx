import Image from "next/image";
import { playStoreUrl } from "@/lib/site";

const FEATURES = [
  { icon: "📚", title: "HSK 1~9급 단어장", desc: "급수별 단어를 플래시카드로 암기" },
  { icon: "🔁", title: "SRS 간격 반복 복습", desc: "잊을 때쯤 다시 물어보는 복습 알고리즘" },
  { icon: "🎯", title: "매일 8분 학습 루틴", desc: "짧게 매일 하며 연속 학습 기록 유지" },
];

export default function AppInfoSection() {
  return (
    <section className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 text-center">
        더 깊이 공부하고 싶다면 앱을 사용해보세요
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        {FEATURES.map((f) => (
          <div key={f.title} className="bg-red-50 rounded-xl p-4 text-center">
            <p className="text-3xl mb-2">{f.icon}</p>
            <p className="font-semibold text-gray-800 text-sm mb-1">{f.title}</p>
            <p className="text-gray-500 text-xs">{f.desc}</p>
          </div>
        ))}
      </div>
      <div className="text-center">
        <a href={playStoreUrl("app-info")} target="_blank" rel="noopener noreferrer">
          <Image
            src="https://play.google.com/intl/ko/badges/images/generic/ko_badge_web_generic.png"
            alt="Google Play에서 다운로드"
            width={200}
            height={56}
            className="mx-auto hover:opacity-90 transition-opacity"
          />
        </a>
      </div>
    </section>
  );
}
