"use client";

import { useState, useCallback } from "react";
import AdBanner from "@/components/AdBanner";
import { AD_SLOTS } from "@/lib/adSlots";
import { initials, finals } from "@/data/pinyin";
import { hsk1Words, hsk3Words } from "@/data/hsk";

type Category = "pinyin" | "tone" | "hsk1" | "hsk3";
type Phase = "start" | "quiz" | "mid_ad" | "result" | "done_today";

type QuizItem = { display: string; answer: string; hint?: string };
type Question = { question: string; correct: string; choices: string[]; hint?: string };

/** 병음: 소리를 보고 한국어 근사 발음을 고르기 */
const pinyinItems: QuizItem[] = [...initials, ...finals].map((p) => ({
  display: p.sound,
  answer: p.korean,
  hint: `${p.example} ${p.pinyin} — ${p.meaning}`,
}));

/** 성조: 병음 표기를 보고 몇 성인지 고르기 */
const toneItems: QuizItem[] = [
  { display: "mā", answer: "1성", hint: "妈 — 엄마" },
  { display: "má", answer: "2성", hint: "麻 — 삼, 마비되다" },
  { display: "mǎ", answer: "3성", hint: "马 — 말" },
  { display: "mà", answer: "4성", hint: "骂 — 꾸짖다" },
  { display: "hē", answer: "1성", hint: "喝 — 마시다" },
  { display: "hé", answer: "2성", hint: "河 — 강" },
  { display: "hěn", answer: "3성", hint: "很 — 매우" },
  { display: "hè", answer: "4성", hint: "贺 — 축하하다" },
  { display: "shū", answer: "1성", hint: "书 — 책" },
  { display: "shú", answer: "2성", hint: "熟 — 익다" },
  { display: "shǔ", answer: "3성", hint: "数 — 세다" },
  { display: "shù", answer: "4성", hint: "树 — 나무" },
  { display: "tāng", answer: "1성", hint: "汤 — 국" },
  { display: "táng", answer: "2성", hint: "糖 — 설탕" },
  { display: "tǎng", answer: "3성", hint: "躺 — 눕다" },
  { display: "tàng", answer: "4성", hint: "烫 — 뜨겁다" },
  { display: "jiā", answer: "1성", hint: "家 — 집" },
  { display: "jiá", answer: "2성", hint: "夹 — 끼우다" },
  { display: "jiǎ", answer: "3성", hint: "假 — 가짜" },
  { display: "jià", answer: "4성", hint: "价 — 가격" },
];

const hsk1Items: QuizItem[] = hsk1Words.map((w) => ({
  display: w.meaning,
  answer: w.word,
  hint: w.pinyin,
}));

const hsk3Items: QuizItem[] = hsk3Words.map((w) => ({
  display: w.meaning,
  answer: w.word,
  hint: w.pinyin,
}));

const quizData: Record<Category, QuizItem[]> = {
  pinyin: pinyinItems,
  tone: toneItems,
  hsk1: hsk1Items,
  hsk3: hsk3Items,
};

const categoryLabels: Record<Category, string> = {
  pinyin: "병음",
  tone: "성조",
  hsk1: "HSK 1급 단어",
  hsk3: "HSK 3급 단어",
};

const categoryPrompts: Record<Category, string> = {
  pinyin: "병음 표기를 보고 가장 가까운 한국어 발음을 골라보세요.",
  tone: "병음의 성조 부호를 보고 몇 성인지 골라보세요.",
  hsk1: "한국어 뜻을 보고 올바른 중국어 단어를 골라보세요.",
  hsk3: "한국어 뜻을 보고 올바른 중국어 단어를 골라보세요.",
};

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function getToday(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function storageKey(cat: Category) {
  return `haru_cn_quiz_${getToday()}_${cat}`;
}

function generateQuestions(data: QuizItem[]): Question[] {
  const selected = shuffle(data).slice(0, 10);
  const allAnswers = Array.from(new Set(data.map((d) => d.answer)));
  return selected.map((item) => {
    const wrongs = shuffle(allAnswers.filter((a) => a !== item.answer)).slice(0, 3);
    return {
      question: item.display,
      correct: item.answer,
      choices: shuffle([item.answer, ...wrongs]),
      hint: item.hint,
    };
  });
}

export default function QuizClient() {
  const [category, setCategory] = useState<Category>("pinyin");
  const [phase, setPhase] = useState<Phase>("start");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [savedScore, setSavedScore] = useState(0);

  const handleTabClick = useCallback((cat: Category) => {
    setCategory(cat);
    setPhase("start");
    setSelectedAnswer(null);
    setShowExplanation(false);
  }, []);

  const startQuiz = useCallback((cat: Category) => {
    let saved: string | null = null;
    try {
      saved = typeof window !== "undefined" ? localStorage.getItem(storageKey(cat)) : null;
    } catch {}
    if (saved) {
      const data = JSON.parse(saved);
      setSavedScore(data.score);
      setPhase("done_today");
      return;
    }
    setQuestions(generateQuestions(quizData[cat]));
    setCurrentIdx(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setPhase("quiz");
  }, []);

  const retry = useCallback(
    (cat: Category) => {
      try {
        if (typeof window !== "undefined") localStorage.removeItem(storageKey(cat));
      } catch {}
      startQuiz(cat);
    },
    [startQuiz]
  );

  const handleAnswer = useCallback(
    (answer: string) => {
      if (selectedAnswer !== null) return;
      const isCorrect = answer === questions[currentIdx]?.correct;
      const newScore = score + (isCorrect ? 1 : 0);
      setSelectedAnswer(answer);
      setScore(newScore);
      setShowExplanation(true);

      if (currentIdx === 9) {
        try {
          localStorage.setItem(
            storageKey(category),
            JSON.stringify({ category, score: newScore, completed: true })
          );
        } catch {}
      }
    },
    [selectedAnswer, questions, currentIdx, score, category]
  );

  const handleNext = useCallback(() => {
    setShowExplanation(false);
    setSelectedAnswer(null);

    if (currentIdx === 4) {
      setPhase("mid_ad");
      setTimeout(() => {
        setPhase("quiz");
        setCurrentIdx(5);
      }, 2500);
    } else if (currentIdx === 9) {
      setPhase("result");
    } else {
      setCurrentIdx((i) => i + 1);
    }
  }, [currentIdx]);

  const currentQuestion = questions[currentIdx];
  const isCorrect = selectedAnswer !== null && selectedAnswer === currentQuestion?.correct;
  const nextCategory: Category =
    category === "pinyin" ? "tone" : category === "tone" ? "hsk1" : category === "hsk1" ? "hsk3" : "pinyin";

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      {/* 카테고리 탭 */}
      <div className="flex gap-2 mb-8 flex-wrap">
        {(["pinyin", "tone", "hsk1", "hsk3"] as Category[]).map((cat) => (
          <button
            key={cat}
            onClick={() => handleTabClick(cat)}
            className={`flex-1 py-2 px-3 rounded-xl font-semibold text-sm transition-colors whitespace-nowrap ${
              category === cat
                ? "bg-red-600 text-white"
                : "bg-white border border-gray-200 text-gray-600 hover:border-red-300"
            }`}
          >
            {categoryLabels[cat]}
          </button>
        ))}
      </div>

      {/* 시작 화면 */}
      {phase === "start" && (
        <div className="text-center">
          <div className="bg-white border border-gray-200 rounded-2xl p-8 space-y-4">
            <p className="text-4xl" aria-hidden="true">🧩</p>
            <h2 className="text-xl font-bold text-gray-800">{categoryLabels[category]} 퀴즈</h2>
            <p className="text-gray-600 text-sm">
              {categoryPrompts[category]}
              <br />랜덤 10문제 · 4지선다
            </p>
            <button
              onClick={() => startQuiz(category)}
              className="bg-red-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition-colors"
            >
              퀴즈 시작하기
            </button>
          </div>
        </div>
      )}

      {/* 퀴즈 화면 */}
      {phase === "quiz" && currentQuestion && (
        <div className="space-y-5">
          <div className="flex items-center justify-between text-sm font-medium">
            <span className="text-gray-500">{currentIdx + 1} / 10</span>
            <span className="text-red-600">점수: {score}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-red-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentIdx + 1) / 10) * 100}%` }}
            />
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center">
            <p className="text-4xl sm:text-5xl font-bold text-gray-800 break-keep">
              {currentQuestion.question}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {currentQuestion.choices.map((choice) => {
              let cls = "bg-white border-2 border-gray-200 text-gray-700 hover:border-red-300";
              if (selectedAnswer !== null) {
                if (choice === currentQuestion.correct) {
                  cls = "bg-green-500 border-2 border-green-500 text-white";
                } else if (choice === selectedAnswer) {
                  cls = "bg-red-500 border-2 border-red-500 text-white";
                } else {
                  cls = "bg-white border-2 border-gray-200 text-gray-300";
                }
              }
              return (
                <button
                  key={choice}
                  onClick={() => handleAnswer(choice)}
                  disabled={selectedAnswer !== null}
                  className={`py-4 px-4 rounded-xl font-semibold text-base sm:text-lg transition-colors ${cls}`}
                >
                  {choice}
                </button>
              );
            })}
          </div>

          {showExplanation && (
            <div
              className={`rounded-2xl p-5 border-2 space-y-3 ${
                isCorrect ? "bg-green-50 border-green-300" : "bg-red-50 border-red-300"
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="text-2xl">{isCorrect ? "🎉" : "😅"}</span>
                <span className={`font-bold text-lg ${isCorrect ? "text-green-700" : "text-red-700"}`}>
                  {isCorrect ? "정답!" : "오답!"}
                </span>
              </div>
              <div className="bg-white rounded-xl p-4 space-y-1">
                <p className="text-sm text-gray-500">정답</p>
                <p className="text-2xl font-bold text-gray-800">{currentQuestion.correct}</p>
                {currentQuestion.hint && (
                  <p className="text-red-600 font-medium text-sm">{currentQuestion.hint}</p>
                )}
                {!isCorrect && (
                  <p className="text-sm text-gray-600 mt-1">
                    선택한 답: <span className="font-medium text-red-600">{selectedAnswer}</span>
                  </p>
                )}
              </div>
              <button
                onClick={handleNext}
                className="w-full bg-red-600 text-white py-3 rounded-xl font-semibold hover:bg-red-700 transition-colors"
              >
                {currentIdx === 9 ? "결과 보기" : "다음 문제 →"}
              </button>
            </div>
          )}
        </div>
      )}

      {/* 중간 광고 */}
      {phase === "mid_ad" && (
        <div className="text-center space-y-4">
          <p className="text-gray-500 text-sm">5문제 완료! 잠시 후 계속됩니다...</p>
          <div className="bg-white border border-gray-200 rounded-2xl p-4">
            <p className="text-sm text-gray-500 mb-2">
              현재 점수: <span className="font-bold text-red-600">{score} / 5</span>
            </p>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-red-500 h-2 rounded-full" style={{ width: "50%" }} />
            </div>
          </div>
          <AdBanner slotId={AD_SLOTS.quiz_between} variant="quiz" />
        </div>
      )}

      {/* 결과 화면 */}
      {phase === "result" && (
        <div className="space-y-6">
          <AdBanner slotId={AD_SLOTS.quiz_between} variant="quiz" />
          <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center space-y-4">
            <p className="text-4xl">
              {score >= 9 ? "🏆" : score >= 7 ? "🎉" : score >= 5 ? "👍" : "📚"}
            </p>
            <h2 className="text-2xl font-bold text-gray-800">{score} / 10</h2>
            <p className="text-gray-600">
              {score >= 9
                ? "완벽해요! 정말 잘하셨어요!"
                : score >= 7
                ? "잘하셨어요!"
                : score >= 5
                ? "조금 더 연습해봐요!"
                : "다시 한 번 도전해보세요!"}
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button
                onClick={() => retry(category)}
                className="bg-red-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition-colors"
              >
                다시 풀기
              </button>
              <button
                onClick={() => handleTabClick(nextCategory)}
                className="border border-red-600 text-red-600 px-8 py-3 rounded-full font-semibold hover:bg-red-50 transition-colors"
              >
                {categoryLabels[nextCategory]} 도전하기
              </button>
            </div>
          </div>
          <AdBanner slotId={AD_SLOTS.content_bottom} variant="banner" />
        </div>
      )}

      {/* 오늘 이미 완료 */}
      {phase === "done_today" && (
        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center space-y-4">
            <p className="text-4xl">✅</p>
            <h2 className="text-xl font-bold text-gray-800">오늘의 퀴즈 완료!</h2>
            <p className="text-3xl font-bold text-red-600">{savedScore} / 10</p>
            <p className="text-gray-500 text-sm">내일 또 도전하세요 🏮</p>
            <button
              onClick={() => retry(category)}
              className="border border-red-600 text-red-600 px-6 py-3 rounded-full font-semibold hover:bg-red-50 transition-colors text-sm"
            >
              다시 풀기
            </button>
          </div>
          <AdBanner slotId={AD_SLOTS.content_bottom} variant="banner" />
        </div>
      )}
    </div>
  );
}
