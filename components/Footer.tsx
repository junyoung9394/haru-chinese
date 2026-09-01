import Link from "next/link";
import { playStoreUrl } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-16">
      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
          <div>
            <p className="text-lg font-bold text-red-600 mb-2"><span aria-hidden="true">🏮</span> 하루중국어</p>
            <p className="text-sm text-gray-600 leading-relaxed">
              병음과 성조부터 HSK, 중국 문화까지 초보자도 쉽게 배우는 중국어 학습 사이트입니다.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-700 mb-3">학습 메뉴</p>
            <ul className="flex flex-col gap-2 text-sm text-gray-600">
              <li><Link href="/pinyin" className="hover:text-red-600 transition-colors">병음</Link></li>
              <li><Link href="/tones" className="hover:text-red-600 transition-colors">성조</Link></li>
              <li><Link href="/vocabulary" className="hover:text-red-600 transition-colors">기초 단어</Link></li>
              <li><Link href="/hanzi" className="hover:text-red-600 transition-colors">기초 한자</Link></li>
              <li><Link href="/hsk" className="hover:text-red-600 transition-colors">HSK 시험</Link></li>
              <li><Link href="/tsc" className="hover:text-red-600 transition-colors">TSC 말하기 시험</Link></li>
              <li><Link href="/travel" className="hover:text-red-600 transition-colors">여행 중국어</Link></li>
              <li><Link href="/basic" className="hover:text-red-600 transition-colors">기본 소통 중국어</Link></li>
              <li><Link href="/business" className="hover:text-red-600 transition-colors">비즈니스 중국어</Link></li>
              <li><Link href="/culture" className="hover:text-red-600 transition-colors">중국 문화</Link></li>
              <li><Link href="/quiz" className="hover:text-red-600 transition-colors">퀴즈</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-700 mb-3">안내</p>
            <ul className="flex flex-col gap-2 text-sm text-gray-600">
              <li>
                <a
                  href={playStoreUrl("footer")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-600 transition-colors"
                >
                  앱 다운로드
                </a>
              </li>
              <li><Link href="/privacy" className="hover:text-red-600 transition-colors">개인정보처리방침</Link></li>
              <li><Link href="/contact" className="hover:text-red-600 transition-colors">문의하기</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-6 text-center text-xs text-gray-400">
          © 2026 하루중국어. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
