import type { Metadata } from "next";
import AppDownloadCta from "@/components/AppDownloadCta";
import AdBanner from "@/components/AdBanner";
import AdSlot from "@/components/AdSlot";
import { AD_SLOTS } from "@/lib/adSlots";

export const metadata: Metadata = {
  title: "중국어 기초 단어 — 주제별 필수 어휘",
  description:
    "숫자, 가족, 음식, 시간, 장소, 동사, 형용사 등 중국어 기초 단어를 주제별로 정리했습니다. 병음과 뜻을 함께 확인하세요.",
  alternates: { canonical: "/vocabulary" },
};

type Word = { word: string; pinyin: string; meaning: string };
type Group = { icon: string; title: string; note: string; words: Word[] };

const groups: Group[] = [
  {
    icon: "🔢",
    title: "숫자",
    note: "십 단위는 十(shí)을 기준으로 조합합니다. 20은 二十, 25는 二十五입니다.",
    words: [
      { word: "一", pinyin: "yī", meaning: "1" },
      { word: "二", pinyin: "èr", meaning: "2" },
      { word: "三", pinyin: "sān", meaning: "3" },
      { word: "四", pinyin: "sì", meaning: "4" },
      { word: "五", pinyin: "wǔ", meaning: "5" },
      { word: "六", pinyin: "liù", meaning: "6" },
      { word: "七", pinyin: "qī", meaning: "7" },
      { word: "八", pinyin: "bā", meaning: "8" },
      { word: "九", pinyin: "jiǔ", meaning: "9" },
      { word: "十", pinyin: "shí", meaning: "10" },
      { word: "百", pinyin: "bǎi", meaning: "100" },
      { word: "千", pinyin: "qiān", meaning: "1,000" },
    ],
  },
  {
    icon: "👨‍👩‍👧",
    title: "가족",
    note: "형·오빠, 누나·언니를 구분해서 부릅니다. 나이 순서가 호칭에 그대로 드러납니다.",
    words: [
      { word: "爸爸", pinyin: "bàba", meaning: "아빠" },
      { word: "妈妈", pinyin: "māma", meaning: "엄마" },
      { word: "哥哥", pinyin: "gēge", meaning: "형, 오빠" },
      { word: "姐姐", pinyin: "jiějie", meaning: "누나, 언니" },
      { word: "弟弟", pinyin: "dìdi", meaning: "남동생" },
      { word: "妹妹", pinyin: "mèimei", meaning: "여동생" },
      { word: "儿子", pinyin: "érzi", meaning: "아들" },
      { word: "女儿", pinyin: "nǚ'ér", meaning: "딸" },
      { word: "爷爷", pinyin: "yéye", meaning: "할아버지 (친가)" },
      { word: "奶奶", pinyin: "nǎinai", meaning: "할머니 (친가)" },
      { word: "老公", pinyin: "lǎogōng", meaning: "남편 (구어)" },
      { word: "老婆", pinyin: "lǎopo", meaning: "아내 (구어)" },
    ],
  },
  {
    icon: "🍚",
    title: "음식과 음료",
    note: "메뉴판에서 바로 만나는 단어들입니다. 식당 회화와 함께 익히면 효율적입니다.",
    words: [
      { word: "米饭", pinyin: "mǐfàn", meaning: "쌀밥" },
      { word: "面条", pinyin: "miàntiáo", meaning: "국수" },
      { word: "饺子", pinyin: "jiǎozi", meaning: "만두" },
      { word: "包子", pinyin: "bāozi", meaning: "찐빵, 왕만두" },
      { word: "鸡蛋", pinyin: "jīdàn", meaning: "계란" },
      { word: "牛肉", pinyin: "niúròu", meaning: "소고기" },
      { word: "猪肉", pinyin: "zhūròu", meaning: "돼지고기" },
      { word: "青菜", pinyin: "qīngcài", meaning: "푸른 채소" },
      { word: "水果", pinyin: "shuǐguǒ", meaning: "과일" },
      { word: "茶", pinyin: "chá", meaning: "차" },
      { word: "咖啡", pinyin: "kāfēi", meaning: "커피" },
      { word: "啤酒", pinyin: "píjiǔ", meaning: "맥주" },
    ],
  },
  {
    icon: "🕐",
    title: "시간과 날짜",
    note: "요일은 星期 뒤에 숫자를 붙입니다. 일요일만 星期天(또는 星期日)입니다.",
    words: [
      { word: "今天", pinyin: "jīntiān", meaning: "오늘" },
      { word: "明天", pinyin: "míngtiān", meaning: "내일" },
      { word: "昨天", pinyin: "zuótiān", meaning: "어제" },
      { word: "早上", pinyin: "zǎoshang", meaning: "아침" },
      { word: "中午", pinyin: "zhōngwǔ", meaning: "점심때" },
      { word: "晚上", pinyin: "wǎnshang", meaning: "저녁" },
      { word: "星期一", pinyin: "xīngqīyī", meaning: "월요일" },
      { word: "星期天", pinyin: "xīngqītiān", meaning: "일요일" },
      { word: "小时", pinyin: "xiǎoshí", meaning: "시간 (단위)" },
      { word: "分钟", pinyin: "fēnzhōng", meaning: "분 (단위)" },
      { word: "现在", pinyin: "xiànzài", meaning: "지금" },
      { word: "以后", pinyin: "yǐhòu", meaning: "이후" },
    ],
  },
  {
    icon: "📍",
    title: "장소",
    note: "방향을 나타내는 里(안), 上(위), 前(앞)과 조합해서 씁니다.",
    words: [
      { word: "家", pinyin: "jiā", meaning: "집" },
      { word: "学校", pinyin: "xuéxiào", meaning: "학교" },
      { word: "公司", pinyin: "gōngsī", meaning: "회사" },
      { word: "医院", pinyin: "yīyuàn", meaning: "병원" },
      { word: "银行", pinyin: "yínháng", meaning: "은행" },
      { word: "商店", pinyin: "shāngdiàn", meaning: "상점" },
      { word: "饭店", pinyin: "fàndiàn", meaning: "식당, 호텔" },
      { word: "机场", pinyin: "jīchǎng", meaning: "공항" },
      { word: "车站", pinyin: "chēzhàn", meaning: "정류장, 역" },
      { word: "洗手间", pinyin: "xǐshǒujiān", meaning: "화장실" },
      { word: "超市", pinyin: "chāoshì", meaning: "마트" },
      { word: "公园", pinyin: "gōngyuán", meaning: "공원" },
    ],
  },
  {
    icon: "🏃",
    title: "기본 동사",
    note: "중국어는 동사가 변형되지 않습니다. 시제는 了·过 같은 조사로 표현합니다.",
    words: [
      { word: "是", pinyin: "shì", meaning: "~이다" },
      { word: "有", pinyin: "yǒu", meaning: "있다" },
      { word: "去", pinyin: "qù", meaning: "가다" },
      { word: "来", pinyin: "lái", meaning: "오다" },
      { word: "吃", pinyin: "chī", meaning: "먹다" },
      { word: "喝", pinyin: "hē", meaning: "마시다" },
      { word: "看", pinyin: "kàn", meaning: "보다" },
      { word: "听", pinyin: "tīng", meaning: "듣다" },
      { word: "说", pinyin: "shuō", meaning: "말하다" },
      { word: "买", pinyin: "mǎi", meaning: "사다" },
      { word: "做", pinyin: "zuò", meaning: "하다, 만들다" },
      { word: "住", pinyin: "zhù", meaning: "살다" },
    ],
  },
  {
    icon: "✨",
    title: "기본 형용사",
    note: "형용사 앞에는 보통 很을 붙입니다. 很 없이 쓰면 비교의 뉘앙스가 생깁니다.",
    words: [
      { word: "大", pinyin: "dà", meaning: "크다" },
      { word: "小", pinyin: "xiǎo", meaning: "작다" },
      { word: "多", pinyin: "duō", meaning: "많다" },
      { word: "少", pinyin: "shǎo", meaning: "적다" },
      { word: "好", pinyin: "hǎo", meaning: "좋다" },
      { word: "快", pinyin: "kuài", meaning: "빠르다" },
      { word: "慢", pinyin: "màn", meaning: "느리다" },
      { word: "热", pinyin: "rè", meaning: "덥다" },
      { word: "冷", pinyin: "lěng", meaning: "춥다" },
      { word: "贵", pinyin: "guì", meaning: "비싸다" },
      { word: "便宜", pinyin: "piányi", meaning: "싸다" },
      { word: "累", pinyin: "lèi", meaning: "피곤하다" },
    ],
  },
];

export default function VocabularyPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="flex gap-8 items-start">
        <div className="flex-1 min-w-0 space-y-10">
          <section>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
              중국어 기초 단어
            </h1>
            <p className="text-gray-600 leading-relaxed max-w-2xl">
              중국어를 처음 시작할 때 가장 먼저 익혀야 할 단어를 주제별로 모았습니다.
              단어는 낱개로 외우기보다 같은 주제끼리 묶어 외울 때 훨씬 오래 남습니다.
              모든 단어에 병음을 함께 표기했습니다.
            </p>
          </section>

          {groups.map((group, i) => (
            <section key={group.title}>
              <h2 className="text-lg font-bold text-gray-800 mb-1">
                <span aria-hidden="true">{group.icon}</span> {group.title}
              </h2>
              <p className="text-sm text-gray-500 mb-4">{group.note}</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {group.words.map((w) => (
                  <div
                    key={w.word}
                    className="bg-white border border-gray-200 rounded-xl p-4 text-center hover:border-red-300 transition-colors"
                  >
                    <p className="text-xl font-bold text-gray-800 mb-1">{w.word}</p>
                    <p className="text-sm text-red-500 font-medium mb-1">{w.pinyin}</p>
                    <p className="text-sm text-gray-600">{w.meaning}</p>
                  </div>
                ))}
              </div>
              {i === 1 && <AdBanner slotId={AD_SLOTS.content_mid} variant="banner" className="mt-8" />}
              {i === 4 && <AdSlot type="inArticle" className="mt-8" />}
            </section>
          ))}

          <section className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
            <h2 className="text-lg font-bold text-gray-800 mb-3">단어 외우는 순서</h2>
            <ul className="space-y-2 text-sm text-gray-700 leading-relaxed">
              <li className="flex gap-2"><span className="text-amber-500 mt-0.5">1.</span><span>숫자와 시간 표현을 먼저 익히세요. 가격, 날짜, 약속에 모두 쓰입니다.</span></li>
              <li className="flex gap-2"><span className="text-amber-500 mt-0.5">2.</span><span>기본 동사 20개를 확보하면 문장을 만들 수 있게 됩니다.</span></li>
              <li className="flex gap-2"><span className="text-amber-500 mt-0.5">3.</span><span>형용사는 반대말과 짝지어 외우면 두 배로 효율적입니다.</span></li>
              <li className="flex gap-2"><span className="text-amber-500 mt-0.5">4.</span><span>단어 하나를 외울 때 예문 하나를 붙이면 실제로 쓸 수 있게 됩니다.</span></li>
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
