import type { Metadata } from "next";
import Link from "next/link";
import PinyinGrid from "@/components/PinyinGrid";
import AppDownloadCta from "@/components/AppDownloadCta";
import AdBanner from "@/components/AdBanner";
import { AD_SLOTS } from "@/lib/adSlots";
import { initials, finals } from "@/data/pinyin";

export const metadata: Metadata = {
  title: "병음(拼音) 표 완전 정리",
  description:
    "중국어 병음의 성모 21개와 운모 36개를 한국어 근사 발음, 예시 단어와 함께 정리했습니다. 한국인이 자주 틀리는 발음 구분법도 함께 확인하세요.",
  alternates: { canonical: "/pinyin" },
};

const confusions = [
  {
    pair: "zh · ch · sh · r",
    korean: "권설음",
    body: "혀끝을 입천장 쪽으로 말아 올린 채로 소리 냅니다. 한국어에는 없는 소리라 가장 많이 틀립니다. 영어 'r' 발음할 때의 혀 위치를 만든 뒤 ㅈ·ㅊ·ㅅ을 얹는다고 생각하면 쉽습니다.",
  },
  {
    pair: "z · c · s",
    korean: "설치음",
    body: "혀끝을 윗니 뒤에 붙여 소리 냅니다. zh·ch·sh와 짝을 이루는 소리로, 혀를 말지 않는 것이 차이입니다. 四(sì)와 是(shì)를 번갈아 발음하며 감각을 잡아보세요.",
  },
  {
    pair: "j · q · x",
    korean: "설면음",
    body: "혓바닥 앞부분을 넓게 펴서 소리 냅니다. 뒤에는 i나 ü 계열 운모만 옵니다. ji·qi·xi와 zhi·chi·shi를 비교하면 차이가 뚜렷합니다.",
  },
  {
    pair: "n · ng",
    korean: "받침 구분",
    body: "an은 '안', ang는 '앙'입니다. 한국어의 ㄴ 받침과 ㅇ 받침 차이와 같습니다. 山(shān)과 上(shàng)처럼 뜻이 갈리므로 반드시 구분해야 합니다.",
  },
  {
    pair: "b · p / d · t / g · k",
    korean: "유기음과 무기음",
    body: "중국어에는 한국어 같은 된소리·거센소리 대립이 아니라 '숨을 세게 뱉느냐'의 차이가 있습니다. p·t·k는 손바닥을 입 앞에 댔을 때 바람이 확 느껴져야 합니다.",
  },
];

const spellingRules = [
  "성모 없이 i로 시작하면 y로 씁니다. i → yi, ia → ya, ie → ye",
  "성모 없이 u로 시작하면 w로 씁니다. u → wu, ua → wa, uo → wo",
  "ü는 j·q·x·y 뒤에서 점 두 개를 떼고 u로 씁니다. ju, qu, xu, yu",
  "iou·uei·uen은 성모가 붙으면 iu·ui·un으로 줄여 씁니다. liù, duì, wèn",
  "성조 부호는 a > o = e > i = u = ü 순서로 얹습니다. 단 iu는 뒤의 u에 찍습니다.",
];

export default function PinyinPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="flex gap-8 items-start">
        <div className="flex-1 min-w-0 space-y-10">
          <section>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
              병음 (拼音) 완전 정리
            </h1>
            <p className="text-gray-600 leading-relaxed max-w-2xl">
              병음은 한자의 발음을 로마자로 적은 표기법입니다. 중국어 한 음절은 <strong>성모(자음) + 운모(모음) + 성조</strong>로
              이루어집니다. 성모 21개와 운모 36개만 익히면 처음 보는 한자도 병음만 있으면 읽을 수 있습니다.
            </p>
          </section>

          <section className="bg-red-50 border border-red-200 rounded-2xl p-6">
            <h2 className="text-lg font-bold text-gray-800 mb-3">음절의 구조</h2>
            <div className="bg-white rounded-xl p-5 text-center border border-red-100 mb-3">
              <p className="text-3xl font-bold text-gray-800 mb-2">hǎo</p>
              <div className="flex justify-center gap-6 text-sm">
                <div>
                  <p className="text-red-600 font-bold text-lg">h</p>
                  <p className="text-gray-500 text-xs">성모</p>
                </div>
                <div>
                  <p className="text-amber-600 font-bold text-lg">ao</p>
                  <p className="text-gray-500 text-xs">운모</p>
                </div>
                <div>
                  <p className="text-emerald-600 font-bold text-lg">ˇ (3성)</p>
                  <p className="text-gray-500 text-xs">성조</p>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              성모 없이 운모만으로 이루어진 음절도 있습니다(ài 爱, èr 二). 성조는 별도 페이지에서 자세히 다룹니다 —{" "}
              <Link href="/tones" className="text-red-600 font-medium hover:underline">
                성조 배우러 가기 →
              </Link>
            </p>
          </section>

          <AdBanner slotId={AD_SLOTS.content_mid} variant="banner" />

          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-1">성모 21개</h2>
            <p className="text-sm text-gray-500 mb-4">
              음절의 첫소리입니다. 한국어 근사 발음은 어디까지나 참고용이며, 실제 소리는 앱의 발음 듣기로 확인하는 것이 정확합니다.
            </p>
            <PinyinGrid items={initials} />
          </section>

          <AdBanner slotId={AD_SLOTS.home_top} variant="banner" />

          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-1">운모 36개</h2>
            <p className="text-sm text-gray-500 mb-4">
              성모 뒤에 오는 소리입니다. 단운모 a·o·e·i·u·ü 여섯 개를 먼저 익히면 나머지는 조합으로 읽힙니다.
            </p>
            <PinyinGrid items={finals} />
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-4">한국인이 자주 틀리는 발음</h2>
            <div className="space-y-3">
              {confusions.map((c) => (
                <div key={c.pair} className="bg-white border border-gray-200 rounded-xl p-5">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="text-lg font-bold text-red-600">{c.pair}</span>
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">{c.korean}</span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{c.body}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
            <h2 className="text-lg font-bold text-gray-800 mb-3">병음 표기 규칙</h2>
            <ul className="space-y-2 text-sm text-gray-700 leading-relaxed">
              {spellingRules.map((rule) => (
                <li key={rule} className="flex gap-2">
                  <span className="text-amber-500 mt-0.5">✔</span>
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="bg-white border border-gray-200 rounded-2xl p-6">
            <h2 className="text-lg font-bold text-gray-800 mb-4">병음 학습 팁</h2>
            <ul className="space-y-3 text-gray-600 text-sm leading-relaxed">
              <li>✅ 단운모 a·o·e·i·u·ü 여섯 개를 가장 먼저 완벽하게 익히세요.</li>
              <li>✅ zh/z, ch/c, sh/s를 짝지어 번갈아 발음하며 혀 위치를 몸에 익히세요.</li>
              <li>✅ 병음만 외우지 말고 항상 성조와 세트로 외우세요.</li>
              <li>✅ 예시 단어를 함께 익히면 소리를 훨씬 오래 기억할 수 있습니다.</li>
              <li>✅ 앱의 발음 듣기와 발음 평가로 교정하면 속도가 빨라집니다.</li>
            </ul>
          </section>

          <AppDownloadCta />

          <AdBanner slotId={AD_SLOTS.content_bottom} variant="banner" />
        </div>

        <aside className="hidden md:block w-64 flex-shrink-0">
          <div className="sticky" style={{ top: "80px" }}>
            <AdBanner slotId={AD_SLOTS.sidebar} variant="sidebar" />
          </div>
        </aside>
      </div>
    </div>
  );
}
