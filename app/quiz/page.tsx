import type { Metadata } from "next";
import QuizClient from "@/components/QuizClient";

export const metadata: Metadata = {
  title: "중국어 퀴즈 — 병음·성조·HSK 단어",
  description:
    "병음, 성조, HSK 1급과 3급 단어를 퀴즈로 복습해보세요. 매일 새로운 랜덤 10문제로 중국어 실력을 키워보세요.",
  alternates: { canonical: "/quiz" },
};

export default function QuizPage() {
  return <QuizClient />;
}
