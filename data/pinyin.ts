export type PinyinItem = {
  sound: string;
  korean: string;
  example: string;
  pinyin: string;
  meaning: string;
};

export type PinyinGroup = {
  label: string;
  description: string;
  items: PinyinItem[];
};

/** 성모(聲母) 21개 — 음절의 첫소리 자음 */
export const initials: PinyinItem[] = [
  { sound: "b", korean: "ㅃ에 가까운 ㅂ", example: "爸爸", pinyin: "bàba", meaning: "아빠" },
  { sound: "p", korean: "ㅍ (숨 세게)", example: "朋友", pinyin: "péngyou", meaning: "친구" },
  { sound: "m", korean: "ㅁ", example: "妈妈", pinyin: "māma", meaning: "엄마" },
  { sound: "f", korean: "영어 f", example: "飞机", pinyin: "fēijī", meaning: "비행기" },
  { sound: "d", korean: "ㄸ에 가까운 ㄷ", example: "大", pinyin: "dà", meaning: "크다" },
  { sound: "t", korean: "ㅌ (숨 세게)", example: "天", pinyin: "tiān", meaning: "하늘, 날" },
  { sound: "n", korean: "ㄴ", example: "你", pinyin: "nǐ", meaning: "너" },
  { sound: "l", korean: "ㄹ", example: "老师", pinyin: "lǎoshī", meaning: "선생님" },
  { sound: "g", korean: "ㄲ에 가까운 ㄱ", example: "哥哥", pinyin: "gēge", meaning: "형, 오빠" },
  { sound: "k", korean: "ㅋ (숨 세게)", example: "看", pinyin: "kàn", meaning: "보다" },
  { sound: "h", korean: "ㅎ (목 안쪽)", example: "好", pinyin: "hǎo", meaning: "좋다" },
  { sound: "j", korean: "ㅈ (혓바닥 넓게)", example: "家", pinyin: "jiā", meaning: "집" },
  { sound: "q", korean: "ㅊ (숨 세게)", example: "请", pinyin: "qǐng", meaning: "~해 주세요" },
  { sound: "x", korean: "ㅅ~ㅆ 사이", example: "谢谢", pinyin: "xièxie", meaning: "고맙습니다" },
  { sound: "zh", korean: "혀 말아 ㅈ", example: "中国", pinyin: "Zhōngguó", meaning: "중국" },
  { sound: "ch", korean: "혀 말아 ㅊ", example: "吃", pinyin: "chī", meaning: "먹다" },
  { sound: "sh", korean: "혀 말아 ㅅ", example: "书", pinyin: "shū", meaning: "책" },
  { sound: "r", korean: "혀 말아 ㄹ~ㅈ", example: "人", pinyin: "rén", meaning: "사람" },
  { sound: "z", korean: "ㅉ (혀끝 앞니 뒤)", example: "再见", pinyin: "zàijiàn", meaning: "안녕히 가세요" },
  { sound: "c", korean: "ㅊ (혀끝 앞니 뒤)", example: "菜", pinyin: "cài", meaning: "요리, 채소" },
  { sound: "s", korean: "ㅅ (혀끝 앞니 뒤)", example: "四", pinyin: "sì", meaning: "넷" },
];

/** 단운모 + 복운모 + 비운모 — 음절의 뒷소리 */
export const finals: PinyinItem[] = [
  { sound: "a", korean: "아", example: "大", pinyin: "dà", meaning: "크다" },
  { sound: "o", korean: "오", example: "波", pinyin: "bō", meaning: "물결" },
  { sound: "e", korean: "으어", example: "喝", pinyin: "hē", meaning: "마시다" },
  { sound: "i", korean: "이", example: "七", pinyin: "qī", meaning: "일곱" },
  { sound: "u", korean: "우", example: "书", pinyin: "shū", meaning: "책" },
  { sound: "ü", korean: "위 (입술 동그랗게)", example: "女", pinyin: "nǚ", meaning: "여자" },
  { sound: "ai", korean: "아이", example: "爱", pinyin: "ài", meaning: "사랑하다" },
  { sound: "ei", korean: "에이", example: "北京", pinyin: "Běijīng", meaning: "베이징" },
  { sound: "ao", korean: "아오", example: "好", pinyin: "hǎo", meaning: "좋다" },
  { sound: "ou", korean: "오우", example: "狗", pinyin: "gǒu", meaning: "개" },
  { sound: "an", korean: "안", example: "看", pinyin: "kàn", meaning: "보다" },
  { sound: "en", korean: "언", example: "很", pinyin: "hěn", meaning: "매우" },
  { sound: "ang", korean: "앙", example: "忙", pinyin: "máng", meaning: "바쁘다" },
  { sound: "eng", korean: "엉", example: "朋友", pinyin: "péngyou", meaning: "친구" },
  { sound: "ong", korean: "옹", example: "中", pinyin: "zhōng", meaning: "가운데" },
  { sound: "er", korean: "얼", example: "二", pinyin: "èr", meaning: "둘" },
  { sound: "ia", korean: "이아", example: "家", pinyin: "jiā", meaning: "집" },
  { sound: "ie", korean: "이에", example: "谢谢", pinyin: "xièxie", meaning: "고맙습니다" },
  { sound: "iao", korean: "이아오", example: "小", pinyin: "xiǎo", meaning: "작다" },
  { sound: "iu (iou)", korean: "이오우", example: "六", pinyin: "liù", meaning: "여섯" },
  { sound: "ian", korean: "이엔", example: "天", pinyin: "tiān", meaning: "하늘, 날" },
  { sound: "in", korean: "인", example: "今天", pinyin: "jīntiān", meaning: "오늘" },
  { sound: "iang", korean: "이앙", example: "想", pinyin: "xiǎng", meaning: "생각하다" },
  { sound: "ing", korean: "잉", example: "请", pinyin: "qǐng", meaning: "~해 주세요" },
  { sound: "iong", korean: "이옹", example: "熊猫", pinyin: "xióngmāo", meaning: "판다" },
  { sound: "ua", korean: "우아", example: "花", pinyin: "huā", meaning: "꽃" },
  { sound: "uo", korean: "우오", example: "国", pinyin: "guó", meaning: "나라" },
  { sound: "uai", korean: "우아이", example: "快", pinyin: "kuài", meaning: "빠르다" },
  { sound: "ui (uei)", korean: "우에이", example: "对", pinyin: "duì", meaning: "맞다" },
  { sound: "uan", korean: "우안", example: "关", pinyin: "guān", meaning: "닫다" },
  { sound: "un (uen)", korean: "우언", example: "问", pinyin: "wèn", meaning: "묻다" },
  { sound: "uang", korean: "우앙", example: "王", pinyin: "wáng", meaning: "왕" },
  { sound: "ueng", korean: "우엉", example: "翁", pinyin: "wēng", meaning: "노인" },
  { sound: "üe", korean: "위에", example: "月", pinyin: "yuè", meaning: "달, 월" },
  { sound: "üan", korean: "위엔", example: "远", pinyin: "yuǎn", meaning: "멀다" },
  { sound: "ün", korean: "윈", example: "云", pinyin: "yún", meaning: "구름" },
];

export const pinyinGroups: PinyinGroup[] = [
  {
    label: "성모 21개",
    description: "음절의 첫소리입니다. 한국어에 없는 zh·ch·sh·r(권설음)과 j·q·x가 핵심입니다.",
    items: initials,
  },
  {
    label: "운모 36개",
    description: "성모 뒤에 오는 소리입니다. 단운모 6개를 먼저 익히면 나머지는 조합으로 읽힙니다.",
    items: finals,
  },
];

export type ToneItem = {
  tone: string;
  mark: string;
  name: string;
  shape: string;
  description: string;
  example: string;
  pinyin: string;
  meaning: string;
};

/** 성조(聲調) — 같은 ma도 성조에 따라 뜻이 완전히 달라집니다 */
export const tones: ToneItem[] = [
  {
    tone: "1성",
    mark: "ˉ",
    name: "음평 (陰平)",
    shape: "→",
    description: "높은 음을 처음부터 끝까지 평평하게 유지합니다. 노래의 '솔' 음을 길게 뽑는 느낌입니다.",
    example: "妈",
    pinyin: "mā",
    meaning: "엄마",
  },
  {
    tone: "2성",
    mark: "ˊ",
    name: "양평 (陽平)",
    shape: "↗",
    description: "중간 음에서 높은 음으로 끌어올립니다. 한국어로 되물을 때의 '뭐?' 억양과 비슷합니다.",
    example: "麻",
    pinyin: "má",
    meaning: "삼, 마비되다",
  },
  {
    tone: "3성",
    mark: "ˇ",
    name: "상성 (上聲)",
    shape: "↘↗",
    description: "낮게 내렸다가 살짝 올립니다. 실제 회화에서는 대부분 낮게 눌러 끝내는 '반3성'으로 발음합니다.",
    example: "马",
    pinyin: "mǎ",
    meaning: "말(동물)",
  },
  {
    tone: "4성",
    mark: "ˋ",
    name: "거성 (去聲)",
    shape: "↘",
    description: "높은 음에서 뚝 떨어뜨립니다. 짜증 섞인 '아!' 처럼 짧고 단호하게 발음합니다.",
    example: "骂",
    pinyin: "mà",
    meaning: "꾸짖다",
  },
  {
    tone: "경성",
    mark: "·",
    name: "경성 (輕聲)",
    shape: "•",
    description: "성조 없이 짧고 가볍게 흘립니다. 앞 음절의 높이에 따라 자연스럽게 얹힙니다.",
    example: "吗",
    pinyin: "ma",
    meaning: "~입니까? (의문 조사)",
  },
];

export type ToneRule = {
  title: string;
  body: string;
  example: string;
};

export const toneRules: ToneRule[] = [
  {
    title: "3성 + 3성 → 2성 + 3성",
    body: "3성이 연달아 나오면 앞의 3성을 2성으로 바꿔 읽습니다. 표기는 그대로 3성으로 씁니다.",
    example: "你好 nǐ hǎo → 실제 발음 ní hǎo",
  },
  {
    title: "不(bù)의 성조 변화",
    body: "不 뒤에 4성이 오면 不를 2성 bú로 읽습니다. 그 외에는 4성 bù 그대로입니다.",
    example: "不是 bú shì / 不好 bù hǎo",
  },
  {
    title: "一(yī)의 성조 변화",
    body: "一 뒤에 4성이 오면 2성 yí, 1·2·3성이 오면 4성 yì로 읽습니다. 단독이나 서수일 때는 yī입니다.",
    example: "一个 yí ge / 一天 yì tiān / 第一 dì yī",
  },
  {
    title: "반3성",
    body: "3성 뒤에 1·2·4성이 오면 보통 낮게 내려가며 끝납니다. 경성 앞에서는 단어와 문맥에 따라 달라지므로 실제 발음을 함께 익히세요.",
    example: "老师 lǎoshī — lǎo를 낮게 눌러 끝냅니다",
  },
];
