import StoreButton from "@/components/StoreButton";
import { playStoreUrl } from "@/lib/site";

const FEATURES = [
  { icon: "📚", title: "HSK 1~9급 단어장", desc: "급수별 단어를 플래시카드로 암기" },
  { icon: "🔁", title: "SRS 간격 반복 복습", desc: "잊을 때쯤 다시 물어보는 복습 알고리즘" },
  { icon: "🎯", title: "매일 10분 학습 루틴", desc: "짧게 매일 하며 연속 학습 기록 유지" },
];

export default function AppInfoSection() {
  return (
    <section className="card p-6 sm:p-9">
      <div className="text-center mb-7">
        <span className="eyebrow mb-3">하루중국어 앱</span>
        <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900">
          더 깊이 공부하고 싶다면 앱을 사용해보세요
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
        {FEATURES.map((f) => (
          <div key={f.title} className="rounded-2xl bg-gray-100 p-5 text-center">
            <p className="text-3xl mb-3" aria-hidden="true">{f.icon}</p>
            <p className="font-bold text-gray-900 text-sm mb-1">{f.title}</p>
            <p className="text-gray-500 text-xs leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <StoreButton href={playStoreUrl("app-info")} />
      </div>
    </section>
  );
}
