import type { Metadata } from "next";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "문의하기",
  description: "하루중국어 사이트와 HSK 완전정복 앱 관련 문의 안내 페이지입니다.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10 space-y-8">
      <section>
        <h1 className="text-2xl font-bold text-gray-800 mb-3">문의하기</h1>
        <p className="text-gray-600 leading-relaxed">
          하루중국어 사이트 또는 앱(HSK 완전정복)에 대한 문의사항이 있으시면 아래 이메일로 연락해 주세요.
        </p>
      </section>

      <section className="bg-white border border-gray-200 rounded-2xl p-6 space-y-4">
        <div>
          <p className="text-sm font-semibold text-gray-700 mb-1">이메일 문의</p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-red-600 hover:underline text-base font-medium"
          >
            {CONTACT_EMAIL}
          </a>
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-700 mb-1">문의 가능 항목</p>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• 사이트 콘텐츠 오류 신고 (병음·성조 표기 포함)</li>
            <li>• 앱 기능 관련 문의</li>
            <li>• 광고 또는 제휴 문의</li>
            <li>• 개인정보 관련 문의</li>
            <li>• 기타 의견 및 제안</li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-700 mb-1">응답 기간</p>
          <p className="text-sm text-gray-600">
            문의를 확인한 후 순차적으로 답변드립니다. 빠른 시일 내에 연락드리겠습니다.
          </p>
        </div>
      </section>

      <section className="bg-red-50 border border-red-200 rounded-2xl p-5">
        <p className="text-sm font-semibold text-gray-700 mb-2">앱 관련 문의</p>
        <p className="text-sm text-gray-600 leading-relaxed">
          앱 사용 중 오류나 불편함이 있으시면 Google Play 스토어 리뷰 또는 위 이메일로 문의해 주시면 개선에 반영하겠습니다.
        </p>
      </section>
    </div>
  );
}
