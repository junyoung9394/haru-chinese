import Link from "next/link";

const links = [
  { href: "/pinyin", label: "병음" },
  { href: "/tones", label: "성조" },
  { href: "/vocabulary", label: "기초 단어" },
  { href: "/hanzi", label: "기초 한자" },
  { href: "/travel", label: "여행 중국어" },
  { href: "/basic", label: "기본 소통" },
  { href: "/business", label: "비즈니스 중국어" },
  { href: "/hsk", label: "HSK 시험" },
  { href: "/hsk/7-9", label: "HSK 7~9급" },
  { href: "/tsc", label: "TSC 시험" },
  { href: "/culture", label: "중국 문화" },
  { href: "/quiz", label: "퀴즈" },
  { href: "/app-download", label: "앱 다운로드" },
];

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-20 text-center space-y-6">
      <p className="text-6xl font-bold text-red-600">404</p>
      <h1 className="text-2xl font-bold text-gray-800">페이지를 찾을 수 없습니다</h1>
      <p className="text-gray-500 leading-relaxed">
        요청하신 페이지가 존재하지 않거나 이동되었습니다.<br />
        아래 링크에서 원하시는 콘텐츠를 찾아보세요.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4">
        {links.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="bg-white border border-gray-200 rounded-xl py-3 px-4 text-sm font-medium text-gray-700 hover:border-red-300 hover:text-red-600 transition-colors"
          >
            {item.label}
          </Link>
        ))}
      </div>
      <Link
        href="/"
        className="inline-block mt-4 bg-red-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition-colors"
      >
        홈으로 돌아가기
      </Link>
    </div>
  );
}
