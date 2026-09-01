import type { HskStudyPlan } from "@/data/hskStudy";

/**
 * 급수별 학습 전략을 보여줍니다.
 * 기간 → 순서 → 막히는 지점 → 교재 순서로, 실제 학습 흐름을 그대로 따릅니다.
 */
export default function StudyPlan({
  plan,
  levelLabel,
}: {
  plan: HskStudyPlan;
  levelLabel: string;
}) {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-lg font-bold text-gray-800 mb-1">{levelLabel} 학습 전략</h2>
        <p className="text-sm text-gray-500">
          단어표만으로는 답이 안 나오는 것들 — 얼마나 걸리는지, 무엇부터 해야 하는지, 어디서 막히는지 정리했습니다.
        </p>
      </div>

      {/* 기간과 학습량 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-red-50 border border-red-200 rounded-2xl p-5">
          <p className="text-xs text-gray-500 mb-1">현실적인 소요 기간</p>
          <p className="text-lg font-bold text-red-700">{plan.duration}</p>
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
          <p className="text-xs text-gray-500 mb-1">이를 전제로 한 하루 학습량</p>
          <p className="text-lg font-bold text-amber-700">{plan.dailyLoad}</p>
        </div>
      </div>

      {/* 학습 순서 */}
      <div>
        <h3 className="text-base font-bold text-gray-800 mb-3">무엇부터 해야 하나</h3>
        <ol className="space-y-3">
          {plan.steps.map((step, i) => (
            <li key={step.title} className="bg-white border border-gray-200 rounded-xl p-5 flex gap-4">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-red-600 text-white text-sm font-bold flex items-center justify-center">
                {i + 1}
              </span>
              <div className="min-w-0">
                <p className="font-semibold text-gray-800 mb-1">{step.title}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      {/* 막히는 지점 */}
      <div>
        <h3 className="text-base font-bold text-gray-800 mb-3">여기서 많이 막힙니다</h3>
        <div className="space-y-3">
          {plan.pitfalls.map((p) => (
            <div key={p.problem} className="bg-white border border-gray-200 rounded-xl p-5">
              <p className="font-semibold text-gray-800 mb-2">
                <span className="text-red-500 mr-1.5" aria-hidden="true">✕</span>
                {p.problem}
              </p>
              <p className="text-sm text-gray-600 leading-relaxed pl-6">
                <span className="text-emerald-600 font-medium mr-1.5" aria-hidden="true">→</span>
                {p.solution}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 교재 */}
      <div className="bg-white border border-gray-200 rounded-2xl p-5">
        <h3 className="text-base font-bold text-gray-800 mb-2">교재와 자료 고르는 기준</h3>
        <p className="text-sm text-gray-600 leading-relaxed">{plan.materials}</p>
      </div>
    </section>
  );
}
