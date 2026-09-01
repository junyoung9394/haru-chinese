import { playStoreUrl } from "@/lib/site";

export default function AppDownloadCta() {
  return (
    <section className="bg-red-50 border border-red-200 rounded-2xl p-6 sm:p-8 text-center">
      <p className="text-2xl mb-3">📱</p>
      <h2 className="text-xl font-bold text-gray-800 mb-2">앱에서 반복 학습하기</h2>
      <p className="text-gray-600 text-sm mb-1">
        오늘 배운 중국어를 앱에서 퀴즈로 복습해보세요.
      </p>
      <p className="text-gray-600 text-sm mb-5">
        HSK 완전정복 앱에서 HSK 1~9급 단어와 문법을 발음과 함께 반복 학습할 수 있습니다.
      </p>
      <a
        href={playStoreUrl("cta")}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-red-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition-colors"
      >
        Google Play에서 앱 설치하기
      </a>
    </section>
  );
}
