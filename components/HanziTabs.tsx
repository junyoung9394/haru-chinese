"use client";

import { useState } from "react";
import type { HanziGroup, HanziEntry } from "@/data/hanzi";
import { playStoreUrl } from "@/lib/site";

interface Props {
  groups: HanziGroup[];
}

type QuizState =
  | { phase: "idle" }
  | { phase: "question"; questions: QuizQuestion[]; index: number; selected: number | null; score: number }
  | { phase: "result"; score: number; total: number; groupLabel: string };

interface QuizQuestion {
  hanzi: HanziEntry;
  choices: string[];
  answer: number;
}

function buildQuiz(list: HanziEntry[]): QuizQuestion[] {
  const pool = [...list].sort(() => Math.random() - 0.5).slice(0, 3);
  return pool.map((hanzi) => {
    const distractors = list
      .filter((h) => h.char !== hanzi.char && h.meaning !== hanzi.meaning)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
      .map((h) => h.meaning);
    const choices = [...distractors, hanzi.meaning].sort(() => Math.random() - 0.5);
    return { hanzi, choices, answer: choices.indexOf(hanzi.meaning) };
  });
}

export default function HanziTabs({ groups }: Props) {
  const [activeGroup, setActiveGroup] = useState(0);
  const [quiz, setQuiz] = useState<QuizState>({ phase: "idle" });

  const current = groups[activeGroup];

  function startQuiz() {
    setQuiz({
      phase: "question",
      questions: buildQuiz(current.list),
      index: 0,
      selected: null,
      score: 0,
    });
  }

  function selectAnswer(choiceIdx: number) {
    if (quiz.phase !== "question" || quiz.selected !== null) return;
    setQuiz({ ...quiz, selected: choiceIdx });
  }

  function nextQuestion() {
    if (quiz.phase !== "question" || quiz.selected === null) return;
    const correct = quiz.selected === quiz.questions[quiz.index].answer;
    const newScore = quiz.score + (correct ? 1 : 0);
    if (quiz.index + 1 >= quiz.questions.length) {
      setQuiz({ phase: "result", score: newScore, total: quiz.questions.length, groupLabel: current.label });
    } else {
      setQuiz({ ...quiz, index: quiz.index + 1, selected: null, score: newScore });
    }
  }

  function shareResult() {
    if (quiz.phase !== "result") return;
    const text = `나는 ${quiz.groupLabel} ${quiz.score}/${quiz.total} 맞췄다! #하루중국어`;
    if (navigator.share) {
      navigator.share({ text }).catch(() => {});
    } else {
      navigator.clipboard.writeText(text).then(() => alert("클립보드에 복사됐어요!"));
    }
  }

  function handleTabChange(i: number) {
    setActiveGroup(i);
    setQuiz({ phase: "idle" });
  }

  return (
    <div>
      {/* 급수 탭 */}
      <div className="flex flex-wrap gap-2 mb-6">
        {groups.map((g, i) => (
          <button
            key={g.level}
            onClick={() => handleTabChange(i)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeGroup === i
                ? "bg-red-600 text-white"
                : "bg-white border border-gray-200 text-gray-700 hover:border-red-300 hover:text-red-600"
            }`}
          >
            {g.label}
            <span className={`ml-1.5 text-xs ${activeGroup === i ? "text-red-200" : "text-gray-400"}`}>
              {g.list.length}자
            </span>
          </button>
        ))}
      </div>

      <p className="text-sm text-gray-500 mb-4">{current.summary}</p>

      {/* 현재 급수 한자 그리드 */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2">
        {current.list.map((hanzi) => (
          <div
            key={hanzi.char}
            className="bg-white border border-gray-200 rounded-xl p-3 text-center hover:border-red-300 transition-colors"
          >
            <p className="text-2xl font-bold text-gray-800 mb-1.5">{hanzi.char}</p>
            <p className="text-[10px] text-red-600 leading-tight mb-0.5 truncate" title={hanzi.pinyin}>
              {hanzi.pinyin}
            </p>
            <p className="text-[10px] text-blue-600 leading-tight mb-0.5">
              번체: {hanzi.traditional}
            </p>
            <p className="text-[10px] text-gray-500 leading-tight truncate" title={hanzi.meaning}>
              {hanzi.meaning}
            </p>
            <p className="text-[10px] text-gray-300 leading-tight">{hanzi.strokes}획</p>
          </div>
        ))}
      </div>

      <p className="text-xs text-gray-400 mt-4 text-right">{current.label} 총 {current.list.length}자</p>

      {/* 퀴즈 맛보기 */}
      <div className="mt-6">
        {quiz.phase === "idle" && (
          <div className="text-center">
            <button
              onClick={startQuiz}
              className="bg-red-50 border border-red-300 text-red-700 font-semibold px-6 py-3 rounded-full hover:bg-red-100 transition-colors text-sm"
            >
              🎮 {current.label} 퀴즈 맛보기 (3문제)
            </button>
          </div>
        )}

        {quiz.phase === "question" && (() => {
          const q = quiz.questions[quiz.index];
          return (
            <div className="bg-white border border-red-200 rounded-2xl p-5 sm:p-6">
              <p className="text-xs text-gray-400 mb-3 text-center">
                {quiz.index + 1} / {quiz.questions.length}
              </p>
              <p className="text-5xl font-bold text-gray-800 text-center mb-2">{q.hanzi.char}</p>
              <p className="text-sm text-red-500 text-center mb-4">{q.hanzi.pinyin}</p>
              <p className="text-sm text-gray-500 text-center mb-4">이 한자의 뜻은?</p>
              <div className="grid grid-cols-2 gap-2">
                {q.choices.map((choice: string, i) => {
                  let cls =
                    "border rounded-xl py-3 px-4 text-sm font-medium transition-colors text-center ";
                  if (quiz.selected === null) {
                    cls += "border-gray-200 text-gray-700 hover:border-red-400 hover:bg-red-50 cursor-pointer";
                  } else if (i === q.answer) {
                    cls += "border-green-400 bg-green-50 text-green-700";
                  } else if (i === quiz.selected) {
                    cls += "border-red-400 bg-red-50 text-red-700";
                  } else {
                    cls += "border-gray-200 text-gray-400";
                  }
                  return (
                    <button key={i} className={cls} onClick={() => selectAnswer(i)}>
                      {choice}
                    </button>
                  );
                })}
              </div>
              {quiz.selected !== null && (
                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-600 mb-3">
                    {quiz.selected === q.answer ? "✅ 정답!" : `❌ 오답! 정답: ${q.hanzi.meaning}`}
                  </p>
                  <button
                    onClick={nextQuestion}
                    className="bg-red-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-red-700 transition-colors"
                  >
                    {quiz.index + 1 < quiz.questions.length ? "다음 문제 →" : "결과 보기"}
                  </button>
                </div>
              )}
            </div>
          );
        })()}

        {quiz.phase === "result" && (
          <div className="bg-white border border-red-200 rounded-2xl p-6 sm:p-8 text-center">
            <p className="text-4xl mb-3">🎉</p>
            <p className="text-xl font-bold text-gray-800 mb-1">
              {quiz.score}/{quiz.total} 정답!
            </p>
            <p className="text-gray-500 text-sm mb-6">
              전체 {quiz.groupLabel} 퀴즈는 앱에서!
            </p>
            <a
              href={playStoreUrl("hanzi-tabs")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-red-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition-colors mb-3 w-full sm:w-auto"
            >
              📱 앱에서 전체 퀴즈 풀기 (무료)
            </a>
            <div className="flex justify-center gap-3 mt-3">
              <button
                onClick={shareResult}
                className="border border-gray-300 text-gray-600 text-sm px-4 py-2 rounded-full hover:border-gray-400 transition-colors"
              >
                공유하기 🔗
              </button>
              <button
                onClick={() => setQuiz({ phase: "idle" })}
                className="border border-red-300 text-red-600 text-sm px-4 py-2 rounded-full hover:border-red-500 transition-colors"
              >
                다시 풀기
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
