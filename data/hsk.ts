/**
 * HSK 데이터.
 *
 * HSK 는 지금 두 체계가 공존합니다.
 * - HSK 2.0 : 1~6급. 2026년 현재 실제로 응시하는 시험입니다.
 * - HSK 3.0 : 2021년 제정된 「국제 중국어 교육 중국어 수준 등급 표준」.
 *             三等九级(초등 1~3 / 중등 4~6 / 고등 7~9) 체계이며,
 *             고등은 급수별 시험이 아니라 하나의 시험으로 7·8·9급을 판정합니다.
 *
 * 아래 급수 정보에는 두 체계를 함께 담았습니다.
 */

export type HskLevelId = "1" | "2" | "3" | "4" | "5" | "6" | "7-9";
export type HskStage = "초등" | "중등" | "고등";

export type HskWord = {
  word: string;
  pinyin: string;
  meaning: string;
  level: HskLevelId;
  /** 주제별 묶음. 같은 주제끼리 외우면 훨씬 오래 남습니다. */
  category: string;
};

export type HskGrammar = {
  pattern: string;
  meaning: string;
  example: string;
  examplePinyin: string;
  exampleMeaning: string;
  level: HskLevelId;
};

/* ------------------------------------------------------------------ */
/* 1급                                                                  */
/* ------------------------------------------------------------------ */

export const hsk1Words: HskWord[] = [
  { word: "你好", pinyin: "nǐ hǎo", meaning: "안녕하세요", level: "1", category: "인사" },
  { word: "谢谢", pinyin: "xièxie", meaning: "고맙습니다", level: "1", category: "인사" },
  { word: "不客气", pinyin: "bú kèqi", meaning: "천만에요", level: "1", category: "인사" },
  { word: "对不起", pinyin: "duìbuqǐ", meaning: "죄송합니다", level: "1", category: "인사" },
  { word: "没关系", pinyin: "méi guānxi", meaning: "괜찮습니다", level: "1", category: "인사" },
  { word: "再见", pinyin: "zàijiàn", meaning: "안녕히 가세요", level: "1", category: "인사" },
  { word: "请", pinyin: "qǐng", meaning: "~해 주세요", level: "1", category: "인사" },

  { word: "我", pinyin: "wǒ", meaning: "나, 저", level: "1", category: "대명사" },
  { word: "你", pinyin: "nǐ", meaning: "너, 당신", level: "1", category: "대명사" },
  { word: "他", pinyin: "tā", meaning: "그", level: "1", category: "대명사" },
  { word: "她", pinyin: "tā", meaning: "그녀", level: "1", category: "대명사" },
  { word: "我们", pinyin: "wǒmen", meaning: "우리", level: "1", category: "대명사" },
  { word: "这", pinyin: "zhè", meaning: "이것", level: "1", category: "대명사" },
  { word: "那", pinyin: "nà", meaning: "저것, 그것", level: "1", category: "대명사" },
  { word: "谁", pinyin: "shéi", meaning: "누구", level: "1", category: "대명사" },
  { word: "什么", pinyin: "shénme", meaning: "무엇", level: "1", category: "대명사" },
  { word: "哪儿", pinyin: "nǎr", meaning: "어디", level: "1", category: "대명사" },
  { word: "多少", pinyin: "duōshao", meaning: "얼마, 몇", level: "1", category: "대명사" },

  { word: "一", pinyin: "yī", meaning: "1", level: "1", category: "숫자·시간" },
  { word: "二", pinyin: "èr", meaning: "2", level: "1", category: "숫자·시간" },
  { word: "三", pinyin: "sān", meaning: "3", level: "1", category: "숫자·시간" },
  { word: "十", pinyin: "shí", meaning: "10", level: "1", category: "숫자·시간" },
  { word: "今天", pinyin: "jīntiān", meaning: "오늘", level: "1", category: "숫자·시간" },
  { word: "明天", pinyin: "míngtiān", meaning: "내일", level: "1", category: "숫자·시간" },
  { word: "昨天", pinyin: "zuótiān", meaning: "어제", level: "1", category: "숫자·시간" },
  { word: "现在", pinyin: "xiànzài", meaning: "지금", level: "1", category: "숫자·시간" },
  { word: "点", pinyin: "diǎn", meaning: "시(時)", level: "1", category: "숫자·시간" },
  { word: "星期", pinyin: "xīngqī", meaning: "요일, 주", level: "1", category: "숫자·시간" },
  { word: "年", pinyin: "nián", meaning: "년", level: "1", category: "숫자·시간" },
  { word: "月", pinyin: "yuè", meaning: "월", level: "1", category: "숫자·시간" },
  { word: "号", pinyin: "hào", meaning: "일(日)", level: "1", category: "숫자·시간" },

  { word: "爸爸", pinyin: "bàba", meaning: "아빠", level: "1", category: "사람" },
  { word: "妈妈", pinyin: "māma", meaning: "엄마", level: "1", category: "사람" },
  { word: "老师", pinyin: "lǎoshī", meaning: "선생님", level: "1", category: "사람" },
  { word: "学生", pinyin: "xuésheng", meaning: "학생", level: "1", category: "사람" },
  { word: "朋友", pinyin: "péngyou", meaning: "친구", level: "1", category: "사람" },
  { word: "医生", pinyin: "yīshēng", meaning: "의사", level: "1", category: "사람" },

  { word: "是", pinyin: "shì", meaning: "~이다", level: "1", category: "동사" },
  { word: "有", pinyin: "yǒu", meaning: "있다, 가지다", level: "1", category: "동사" },
  { word: "吃", pinyin: "chī", meaning: "먹다", level: "1", category: "동사" },
  { word: "喝", pinyin: "hē", meaning: "마시다", level: "1", category: "동사" },
  { word: "看", pinyin: "kàn", meaning: "보다", level: "1", category: "동사" },
  { word: "去", pinyin: "qù", meaning: "가다", level: "1", category: "동사" },
  { word: "来", pinyin: "lái", meaning: "오다", level: "1", category: "동사" },
  { word: "学习", pinyin: "xuéxí", meaning: "공부하다", level: "1", category: "동사" },
  { word: "说", pinyin: "shuō", meaning: "말하다", level: "1", category: "동사" },
  { word: "想", pinyin: "xiǎng", meaning: "~하고 싶다, 생각하다", level: "1", category: "동사" },
  { word: "会", pinyin: "huì", meaning: "~할 줄 알다", level: "1", category: "동사" },
  { word: "能", pinyin: "néng", meaning: "~할 수 있다", level: "1", category: "동사" },
  { word: "买", pinyin: "mǎi", meaning: "사다", level: "1", category: "동사" },
  { word: "住", pinyin: "zhù", meaning: "살다, 묵다", level: "1", category: "동사" },

  { word: "好", pinyin: "hǎo", meaning: "좋다", level: "1", category: "형용사·부사" },
  { word: "大", pinyin: "dà", meaning: "크다", level: "1", category: "형용사·부사" },
  { word: "小", pinyin: "xiǎo", meaning: "작다", level: "1", category: "형용사·부사" },
  { word: "多", pinyin: "duō", meaning: "많다", level: "1", category: "형용사·부사" },
  { word: "少", pinyin: "shǎo", meaning: "적다", level: "1", category: "형용사·부사" },
  { word: "很", pinyin: "hěn", meaning: "매우", level: "1", category: "형용사·부사" },
  { word: "不", pinyin: "bù", meaning: "~아니다 (부정)", level: "1", category: "형용사·부사" },
  { word: "都", pinyin: "dōu", meaning: "모두, 다", level: "1", category: "형용사·부사" },
  { word: "太", pinyin: "tài", meaning: "너무", level: "1", category: "형용사·부사" },

  { word: "水", pinyin: "shuǐ", meaning: "물", level: "1", category: "사물·장소" },
  { word: "菜", pinyin: "cài", meaning: "요리, 반찬", level: "1", category: "사물·장소" },
  { word: "米饭", pinyin: "mǐfàn", meaning: "쌀밥", level: "1", category: "사물·장소" },
  { word: "钱", pinyin: "qián", meaning: "돈", level: "1", category: "사물·장소" },
  { word: "书", pinyin: "shū", meaning: "책", level: "1", category: "사물·장소" },
  { word: "电脑", pinyin: "diànnǎo", meaning: "컴퓨터", level: "1", category: "사물·장소" },
  { word: "家", pinyin: "jiā", meaning: "집", level: "1", category: "사물·장소" },
  { word: "医院", pinyin: "yīyuàn", meaning: "병원", level: "1", category: "사물·장소" },
  { word: "商店", pinyin: "shāngdiàn", meaning: "상점", level: "1", category: "사물·장소" },
  { word: "中国", pinyin: "Zhōngguó", meaning: "중국", level: "1", category: "사물·장소" },
  { word: "天气", pinyin: "tiānqì", meaning: "날씨", level: "1", category: "사물·장소" },
];

export const hsk1Grammar: HskGrammar[] = [
  {
    pattern: "주어 + 是 + 목적어",
    meaning: "~는 ~이다",
    example: "我是韩国人。",
    examplePinyin: "Wǒ shì Hánguó rén.",
    exampleMeaning: "저는 한국인입니다.",
    level: "1",
  },
  {
    pattern: "주어 + 很 + 형용사",
    meaning: "~는 ~하다 (형용사 술어문)",
    example: "今天很热。",
    examplePinyin: "Jīntiān hěn rè.",
    exampleMeaning: "오늘은 덥습니다.",
    level: "1",
  },
  {
    pattern: "문장 + 吗？",
    meaning: "~입니까? (의문문)",
    example: "你是学生吗？",
    examplePinyin: "Nǐ shì xuésheng ma?",
    exampleMeaning: "당신은 학생입니까?",
    level: "1",
  },
  {
    pattern: "不 + 동사/형용사",
    meaning: "~하지 않다 (현재·습관 부정)",
    example: "我不吃肉。",
    examplePinyin: "Wǒ bù chī ròu.",
    exampleMeaning: "저는 고기를 먹지 않습니다.",
    level: "1",
  },
  {
    pattern: "没(有) + 동사",
    meaning: "~하지 않았다 (과거 부정)",
    example: "我没去学校。",
    examplePinyin: "Wǒ méi qù xuéxiào.",
    exampleMeaning: "저는 학교에 가지 않았습니다.",
    level: "1",
  },
  {
    pattern: "명사 + 的 + 명사",
    meaning: "~의 (소유·수식)",
    example: "这是我的书。",
    examplePinyin: "Zhè shì wǒ de shū.",
    exampleMeaning: "이것은 제 책입니다.",
    level: "1",
  },
  {
    pattern: "在 + 장소 + 동사",
    meaning: "~에서 ~하다",
    example: "我在家看电视。",
    examplePinyin: "Wǒ zài jiā kàn diànshì.",
    exampleMeaning: "저는 집에서 TV를 봅니다.",
    level: "1",
  },
  {
    pattern: "有 / 没有",
    meaning: "있다 / 없다 (존재·소유)",
    example: "我有两个妹妹。",
    examplePinyin: "Wǒ yǒu liǎng ge mèimei.",
    exampleMeaning: "저는 여동생이 둘 있습니다.",
    level: "1",
  },
  {
    pattern: "수사 + 양사 + 명사",
    meaning: "중국어는 수와 명사 사이에 반드시 양사가 들어갑니다",
    example: "三本书、两个人",
    examplePinyin: "sān běn shū, liǎng ge rén",
    exampleMeaning: "책 세 권, 사람 두 명",
    level: "1",
  },
  {
    pattern: "의문사 의문문",
    meaning: "묻고 싶은 자리에 의문사를 그대로 넣습니다. 어순은 그대로입니다.",
    example: "你去哪儿？",
    examplePinyin: "Nǐ qù nǎr?",
    exampleMeaning: "어디 가세요?",
    level: "1",
  },
];

/* ------------------------------------------------------------------ */
/* 2급                                                                  */
/* ------------------------------------------------------------------ */

export const hsk2Words: HskWord[] = [
  { word: "已经", pinyin: "yǐjīng", meaning: "이미, 벌써", level: "2", category: "시간·빈도" },
  { word: "正在", pinyin: "zhèngzài", meaning: "~하는 중이다", level: "2", category: "시간·빈도" },
  { word: "以后", pinyin: "yǐhòu", meaning: "이후", level: "2", category: "시간·빈도" },
  { word: "以前", pinyin: "yǐqián", meaning: "이전", level: "2", category: "시간·빈도" },
  { word: "常常", pinyin: "chángcháng", meaning: "자주", level: "2", category: "시간·빈도" },
  { word: "一起", pinyin: "yìqǐ", meaning: "함께", level: "2", category: "시간·빈도" },
  { word: "从", pinyin: "cóng", meaning: "~부터", level: "2", category: "시간·빈도" },
  { word: "到", pinyin: "dào", meaning: "~까지, 도착하다", level: "2", category: "시간·빈도" },

  { word: "因为", pinyin: "yīnwèi", meaning: "~때문에", level: "2", category: "접속사" },
  { word: "所以", pinyin: "suǒyǐ", meaning: "그래서", level: "2", category: "접속사" },
  { word: "但是", pinyin: "dànshì", meaning: "그러나", level: "2", category: "접속사" },
  { word: "还是", pinyin: "háishi", meaning: "아니면 (선택 의문)", level: "2", category: "접속사" },
  { word: "或者", pinyin: "huòzhě", meaning: "또는", level: "2", category: "접속사" },

  { word: "旅游", pinyin: "lǚyóu", meaning: "여행하다", level: "2", category: "여행·교통" },
  { word: "机场", pinyin: "jīchǎng", meaning: "공항", level: "2", category: "여행·교통" },
  { word: "火车站", pinyin: "huǒchēzhàn", meaning: "기차역", level: "2", category: "여행·교통" },
  { word: "宾馆", pinyin: "bīnguǎn", meaning: "호텔", level: "2", category: "여행·교통" },
  { word: "房间", pinyin: "fángjiān", meaning: "방", level: "2", category: "여행·교통" },
  { word: "票", pinyin: "piào", meaning: "표, 티켓", level: "2", category: "여행·교통" },
  { word: "路", pinyin: "lù", meaning: "길", level: "2", category: "여행·교통" },
  { word: "公共汽车", pinyin: "gōnggòng qìchē", meaning: "버스", level: "2", category: "여행·교통" },

  { word: "服务员", pinyin: "fúwùyuán", meaning: "종업원", level: "2", category: "쇼핑·식사" },
  { word: "便宜", pinyin: "piányi", meaning: "싸다", level: "2", category: "쇼핑·식사" },
  { word: "贵", pinyin: "guì", meaning: "비싸다", level: "2", category: "쇼핑·식사" },
  { word: "颜色", pinyin: "yánsè", meaning: "색깔", level: "2", category: "쇼핑·식사" },
  { word: "件", pinyin: "jiàn", meaning: "벌, 건 (양사)", level: "2", category: "쇼핑·식사" },
  { word: "鸡蛋", pinyin: "jīdàn", meaning: "계란", level: "2", category: "쇼핑·식사" },
  { word: "羊肉", pinyin: "yángròu", meaning: "양고기", level: "2", category: "쇼핑·식사" },
  { word: "西瓜", pinyin: "xīguā", meaning: "수박", level: "2", category: "쇼핑·식사" },

  { word: "身体", pinyin: "shēntǐ", meaning: "몸, 건강", level: "2", category: "건강·상태" },
  { word: "生病", pinyin: "shēngbìng", meaning: "병이 나다", level: "2", category: "건강·상태" },
  { word: "药", pinyin: "yào", meaning: "약", level: "2", category: "건강·상태" },
  { word: "累", pinyin: "lèi", meaning: "피곤하다", level: "2", category: "건강·상태" },
  { word: "忙", pinyin: "máng", meaning: "바쁘다", level: "2", category: "건강·상태" },
  { word: "高兴", pinyin: "gāoxìng", meaning: "기쁘다", level: "2", category: "건강·상태" },
  { word: "快乐", pinyin: "kuàilè", meaning: "즐겁다", level: "2", category: "건강·상태" },

  { word: "希望", pinyin: "xīwàng", meaning: "희망하다", level: "2", category: "동사" },
  { word: "帮助", pinyin: "bāngzhù", meaning: "돕다", level: "2", category: "동사" },
  { word: "介绍", pinyin: "jièshào", meaning: "소개하다", level: "2", category: "동사" },
  { word: "觉得", pinyin: "juéde", meaning: "~라고 느끼다", level: "2", category: "동사" },
  { word: "知道", pinyin: "zhīdào", meaning: "알다", level: "2", category: "동사" },
  { word: "认识", pinyin: "rènshi", meaning: "알다 (사람·글자)", level: "2", category: "동사" },
  { word: "开始", pinyin: "kāishǐ", meaning: "시작하다", level: "2", category: "동사" },
  { word: "完", pinyin: "wán", meaning: "끝나다", level: "2", category: "동사" },
  { word: "等", pinyin: "děng", meaning: "기다리다", level: "2", category: "동사" },
  { word: "找", pinyin: "zhǎo", meaning: "찾다", level: "2", category: "동사" },
  { word: "上班", pinyin: "shàngbān", meaning: "출근하다", level: "2", category: "동사" },
  { word: "考试", pinyin: "kǎoshì", meaning: "시험 보다", level: "2", category: "동사" },

  { word: "手机", pinyin: "shǒujī", meaning: "휴대폰", level: "2", category: "사물" },
  { word: "问题", pinyin: "wèntí", meaning: "문제, 질문", level: "2", category: "사물" },
  { word: "事情", pinyin: "shìqing", meaning: "일, 사건", level: "2", category: "사물" },
  { word: "时间", pinyin: "shíjiān", meaning: "시간", level: "2", category: "사물" },
];

export const hsk2Grammar: HskGrammar[] = [
  {
    pattern: "동사 + 了",
    meaning: "~했다 (동작의 완료)",
    example: "我吃了早饭。",
    examplePinyin: "Wǒ chī le zǎofàn.",
    exampleMeaning: "저는 아침을 먹었습니다.",
    level: "2",
  },
  {
    pattern: "동사 + 过",
    meaning: "~해 본 적이 있다 (경험)",
    example: "我去过北京。",
    examplePinyin: "Wǒ qùguo Běijīng.",
    exampleMeaning: "저는 베이징에 가본 적이 있습니다.",
    level: "2",
  },
  {
    pattern: "正在 + 동사 + 呢",
    meaning: "~하는 중이다 (진행)",
    example: "他正在打电话呢。",
    examplePinyin: "Tā zhèngzài dǎ diànhuà ne.",
    exampleMeaning: "그는 지금 전화하는 중입니다.",
    level: "2",
  },
  {
    pattern: "A 比 B + 형용사",
    meaning: "A가 B보다 ~하다 (비교문)",
    example: "今天比昨天冷。",
    examplePinyin: "Jīntiān bǐ zuótiān lěng.",
    exampleMeaning: "오늘이 어제보다 춥습니다.",
    level: "2",
  },
  {
    pattern: "因为 A, 所以 B",
    meaning: "A 때문에 B하다",
    example: "因为下雨，所以我没去。",
    examplePinyin: "Yīnwèi xià yǔ, suǒyǐ wǒ méi qù.",
    exampleMeaning: "비가 와서 저는 가지 않았습니다.",
    level: "2",
  },
  {
    pattern: "要 / 想 / 会 + 동사",
    meaning: "~하려 한다 / ~하고 싶다 / ~할 줄 안다",
    example: "我想学汉语。",
    examplePinyin: "Wǒ xiǎng xué Hànyǔ.",
    exampleMeaning: "저는 중국어를 배우고 싶습니다.",
    level: "2",
  },
  {
    pattern: "A 还是 B？",
    meaning: "A입니까 아니면 B입니까? (선택 의문문)",
    example: "你喝茶还是喝咖啡？",
    examplePinyin: "Nǐ hē chá háishi hē kāfēi?",
    exampleMeaning: "차 드실래요 커피 드실래요?",
    level: "2",
  },
  {
    pattern: "从 A 到 B",
    meaning: "A부터 B까지",
    example: "从这儿到学校要十分钟。",
    examplePinyin: "Cóng zhèr dào xuéxiào yào shí fēnzhōng.",
    exampleMeaning: "여기서 학교까지 10분 걸립니다.",
    level: "2",
  },
  {
    pattern: "太 ... 了",
    meaning: "너무 ~하다 (감탄)",
    example: "太好了！",
    examplePinyin: "Tài hǎo le!",
    exampleMeaning: "너무 좋아요!",
    level: "2",
  },
];

/* ------------------------------------------------------------------ */
/* 3급                                                                  */
/* ------------------------------------------------------------------ */

export const hsk3Words: HskWord[] = [
  { word: "认真", pinyin: "rènzhēn", meaning: "성실하다, 진지하다", level: "3", category: "성격·태도" },
  { word: "关心", pinyin: "guānxīn", meaning: "관심을 갖다", level: "3", category: "성격·태도" },
  { word: "习惯", pinyin: "xíguàn", meaning: "습관, 익숙해지다", level: "3", category: "성격·태도" },
  { word: "满意", pinyin: "mǎnyì", meaning: "만족하다", level: "3", category: "성격·태도" },
  { word: "同意", pinyin: "tóngyì", meaning: "동의하다", level: "3", category: "성격·태도" },
  { word: "害怕", pinyin: "hàipà", meaning: "두려워하다", level: "3", category: "성격·태도" },
  { word: "难过", pinyin: "nánguò", meaning: "괴롭다, 슬프다", level: "3", category: "성격·태도" },
  { word: "着急", pinyin: "zháojí", meaning: "조급해하다", level: "3", category: "성격·태도" },

  { word: "练习", pinyin: "liànxí", meaning: "연습하다", level: "3", category: "학습·직장" },
  { word: "选择", pinyin: "xuǎnzé", meaning: "선택하다", level: "3", category: "학습·직장" },
  { word: "决定", pinyin: "juédìng", meaning: "결정하다", level: "3", category: "학습·직장" },
  { word: "解决", pinyin: "jiějué", meaning: "해결하다", level: "3", category: "학습·직장" },
  { word: "经理", pinyin: "jīnglǐ", meaning: "매니저, 팀장", level: "3", category: "학습·직장" },
  { word: "会议", pinyin: "huìyì", meaning: "회의", level: "3", category: "학습·직장" },
  { word: "办公室", pinyin: "bàngōngshì", meaning: "사무실", level: "3", category: "학습·직장" },
  { word: "成绩", pinyin: "chéngjì", meaning: "성적", level: "3", category: "학습·직장" },
  { word: "复习", pinyin: "fùxí", meaning: "복습하다", level: "3", category: "학습·직장" },
  { word: "水平", pinyin: "shuǐpíng", meaning: "수준", level: "3", category: "학습·직장" },

  { word: "健康", pinyin: "jiànkāng", meaning: "건강하다", level: "3", category: "생활" },
  { word: "锻炼", pinyin: "duànliàn", meaning: "단련하다, 운동하다", level: "3", category: "생활" },
  { word: "环境", pinyin: "huánjìng", meaning: "환경", level: "3", category: "생활" },
  { word: "季节", pinyin: "jìjié", meaning: "계절", level: "3", category: "생활" },
  { word: "刮风", pinyin: "guāfēng", meaning: "바람이 불다", level: "3", category: "생활" },
  { word: "空调", pinyin: "kōngtiáo", meaning: "에어컨", level: "3", category: "생활" },
  { word: "邻居", pinyin: "línjū", meaning: "이웃", level: "3", category: "생활" },
  { word: "结婚", pinyin: "jiéhūn", meaning: "결혼하다", level: "3", category: "생활" },

  { word: "地铁", pinyin: "dìtiě", meaning: "지하철", level: "3", category: "이동·수속" },
  { word: "护照", pinyin: "hùzhào", meaning: "여권", level: "3", category: "이동·수속" },
  { word: "银行", pinyin: "yínháng", meaning: "은행", level: "3", category: "이동·수속" },
  { word: "地图", pinyin: "dìtú", meaning: "지도", level: "3", category: "이동·수속" },
  { word: "行李箱", pinyin: "xínglixiāng", meaning: "캐리어", level: "3", category: "이동·수속" },
  { word: "附近", pinyin: "fùjìn", meaning: "근처", level: "3", category: "이동·수속" },
  { word: "地方", pinyin: "dìfang", meaning: "장소, 곳", level: "3", category: "이동·수속" },

  { word: "一般", pinyin: "yìbān", meaning: "일반적이다, 보통", level: "3", category: "부사" },
  { word: "特别", pinyin: "tèbié", meaning: "특별히", level: "3", category: "부사" },
  { word: "终于", pinyin: "zhōngyú", meaning: "마침내", level: "3", category: "부사" },
  { word: "突然", pinyin: "tūrán", meaning: "갑자기", level: "3", category: "부사" },
  { word: "其实", pinyin: "qíshí", meaning: "사실은", level: "3", category: "부사" },
  { word: "又", pinyin: "yòu", meaning: "또 (이미 일어난 반복)", level: "3", category: "부사" },
  { word: "再", pinyin: "zài", meaning: "다시 (앞으로의 반복)", level: "3", category: "부사" },
  { word: "越来越", pinyin: "yuè lái yuè", meaning: "점점 더", level: "3", category: "부사" },
  { word: "几乎", pinyin: "jīhū", meaning: "거의", level: "3", category: "부사" },

  { word: "重要", pinyin: "zhòngyào", meaning: "중요하다", level: "3", category: "형용사" },
  { word: "简单", pinyin: "jiǎndān", meaning: "간단하다", level: "3", category: "형용사" },
  { word: "安静", pinyin: "ānjìng", meaning: "조용하다", level: "3", category: "형용사" },
  { word: "干净", pinyin: "gānjìng", meaning: "깨끗하다", level: "3", category: "형용사" },
  { word: "认为", pinyin: "rènwéi", meaning: "~라고 여기다", level: "3", category: "형용사" },
  { word: "普通话", pinyin: "pǔtōnghuà", meaning: "표준 중국어", level: "3", category: "형용사" },
];

export const hsk3Grammar: HskGrammar[] = [
  {
    pattern: "把 + 목적어 + 동사 + 기타성분",
    meaning: "~을 ~하다 (처치문). 목적어를 동사 앞으로 끌어냅니다.",
    example: "请把门关上。",
    examplePinyin: "Qǐng bǎ mén guān shàng.",
    exampleMeaning: "문을 닫아 주세요.",
    level: "3",
  },
  {
    pattern: "被 + 행위자 + 동사",
    meaning: "~에게 ~당하다 (피동문)",
    example: "我的手机被偷了。",
    examplePinyin: "Wǒ de shǒujī bèi tōu le.",
    exampleMeaning: "제 휴대폰을 도둑맞았습니다.",
    level: "3",
  },
  {
    pattern: "동사 + 得 + 정도보어",
    meaning: "~하는 정도가 ~하다",
    example: "他汉语说得很流利。",
    examplePinyin: "Tā Hànyǔ shuō de hěn liúlì.",
    exampleMeaning: "그는 중국어를 유창하게 합니다.",
    level: "3",
  },
  {
    pattern: "동사 + 完 / 好 / 到 (결과보어)",
    meaning: "동작이 어떤 결과에 이르렀는지를 나타냅니다",
    example: "作业我已经写完了。",
    examplePinyin: "Zuòyè wǒ yǐjīng xiě wán le.",
    exampleMeaning: "숙제는 이미 다 썼습니다.",
    level: "3",
  },
  {
    pattern: "동사 + 来 / 去 (방향보어)",
    meaning: "동작의 방향을 나타냅니다",
    example: "他走进来了。",
    examplePinyin: "Tā zǒu jìnlai le.",
    exampleMeaning: "그가 걸어 들어왔습니다.",
    level: "3",
  },
  {
    pattern: "一边 A 一边 B",
    meaning: "A하면서 B하다",
    example: "他一边听音乐一边跑步。",
    examplePinyin: "Tā yìbiān tīng yīnyuè yìbiān pǎobù.",
    exampleMeaning: "그는 음악을 들으면서 달립니다.",
    level: "3",
  },
  {
    pattern: "虽然 A, 但是 B",
    meaning: "비록 A지만 B하다",
    example: "虽然很累，但是很开心。",
    examplePinyin: "Suīrán hěn lèi, dànshì hěn kāixīn.",
    exampleMeaning: "힘들지만 즐겁습니다.",
    level: "3",
  },
  {
    pattern: "越来越 + 형용사",
    meaning: "점점 더 ~해지다",
    example: "天气越来越冷了。",
    examplePinyin: "Tiānqì yuè lái yuè lěng le.",
    exampleMeaning: "날씨가 점점 추워집니다.",
    level: "3",
  },
  {
    pattern: "又 vs 再",
    meaning: "又는 이미 일어난 반복, 再는 앞으로 일어날 반복입니다",
    example: "他昨天又来了。／明天再来吧。",
    examplePinyin: "Tā zuótiān yòu lái le. / Míngtiān zài lái ba.",
    exampleMeaning: "그는 어제 또 왔습니다. / 내일 다시 오세요.",
    level: "3",
  },
  {
    pattern: "동사 중첩",
    meaning: "동사를 겹치면 '좀 ~해 보다'라는 가벼운 어감이 됩니다",
    example: "你看看这个。",
    examplePinyin: "Nǐ kànkan zhège.",
    exampleMeaning: "이거 한번 보세요.",
    level: "3",
  },
];

/* ------------------------------------------------------------------ */
/* 4급                                                                  */
/* ------------------------------------------------------------------ */

export const hsk4Words: HskWord[] = [
  { word: "机会", pinyin: "jīhuì", meaning: "기회", level: "4", category: "업무·사회" },
  { word: "专业", pinyin: "zhuānyè", meaning: "전공, 전문적이다", level: "4", category: "업무·사회" },
  { word: "经验", pinyin: "jīngyàn", meaning: "경험", level: "4", category: "업무·사회" },
  { word: "能力", pinyin: "nénglì", meaning: "능력", level: "4", category: "업무·사회" },
  { word: "责任", pinyin: "zérèn", meaning: "책임", level: "4", category: "업무·사회" },
  { word: "态度", pinyin: "tàidu", meaning: "태도", level: "4", category: "업무·사회" },
  { word: "计划", pinyin: "jìhuà", meaning: "계획", level: "4", category: "업무·사회" },
  { word: "工资", pinyin: "gōngzī", meaning: "급여", level: "4", category: "업무·사회" },
  { word: "职业", pinyin: "zhíyè", meaning: "직업", level: "4", category: "업무·사회" },
  { word: "竞争", pinyin: "jìngzhēng", meaning: "경쟁하다", level: "4", category: "업무·사회" },

  { word: "信息", pinyin: "xìnxī", meaning: "정보", level: "4", category: "사고·판단" },
  { word: "内容", pinyin: "nèiróng", meaning: "내용", level: "4", category: "사고·판단" },
  { word: "标准", pinyin: "biāozhǔn", meaning: "기준, 표준", level: "4", category: "사고·판단" },
  { word: "结果", pinyin: "jiéguǒ", meaning: "결과", level: "4", category: "사고·판단" },
  { word: "原因", pinyin: "yuányīn", meaning: "원인", level: "4", category: "사고·판단" },
  { word: "影响", pinyin: "yǐngxiǎng", meaning: "영향, 영향을 주다", level: "4", category: "사고·판단" },
  { word: "重点", pinyin: "zhòngdiǎn", meaning: "중점", level: "4", category: "사고·판단" },
  { word: "观点", pinyin: "guāndiǎn", meaning: "관점", level: "4", category: "사고·판단" },
  { word: "证明", pinyin: "zhèngmíng", meaning: "증명하다", level: "4", category: "사고·판단" },
  { word: "怀疑", pinyin: "huáiyí", meaning: "의심하다", level: "4", category: "사고·판단" },

  { word: "获得", pinyin: "huòdé", meaning: "얻다, 획득하다", level: "4", category: "동사" },
  { word: "适合", pinyin: "shìhé", meaning: "적합하다", level: "4", category: "동사" },
  { word: "推迟", pinyin: "tuīchí", meaning: "미루다, 연기하다", level: "4", category: "동사" },
  { word: "增加", pinyin: "zēngjiā", meaning: "증가하다", level: "4", category: "동사" },
  { word: "减少", pinyin: "jiǎnshǎo", meaning: "감소하다", level: "4", category: "동사" },
  { word: "接受", pinyin: "jiēshòu", meaning: "받아들이다", level: "4", category: "동사" },
  { word: "拒绝", pinyin: "jùjué", meaning: "거절하다", level: "4", category: "동사" },
  { word: "改变", pinyin: "gǎibiàn", meaning: "바꾸다", level: "4", category: "동사" },
  { word: "重视", pinyin: "zhòngshì", meaning: "중시하다", level: "4", category: "동사" },
  { word: "坚持", pinyin: "jiānchí", meaning: "꾸준히 하다", level: "4", category: "동사" },
  { word: "提供", pinyin: "tígōng", meaning: "제공하다", level: "4", category: "동사" },
  { word: "举行", pinyin: "jǔxíng", meaning: "개최하다", level: "4", category: "동사" },

  { word: "确实", pinyin: "quèshí", meaning: "확실히", level: "4", category: "부사·접속사" },
  { word: "尤其", pinyin: "yóuqí", meaning: "특히", level: "4", category: "부사·접속사" },
  { word: "按照", pinyin: "ànzhào", meaning: "~에 따라", level: "4", category: "부사·접속사" },
  { word: "既然", pinyin: "jìrán", meaning: "~한 이상", level: "4", category: "부사·접속사" },
  { word: "无论", pinyin: "wúlùn", meaning: "~에 관계없이", level: "4", category: "부사·접속사" },
  { word: "不但", pinyin: "búdàn", meaning: "~뿐만 아니라", level: "4", category: "부사·접속사" },
  { word: "而且", pinyin: "érqiě", meaning: "게다가", level: "4", category: "부사·접속사" },
  { word: "只要", pinyin: "zhǐyào", meaning: "~하기만 하면", level: "4", category: "부사·접속사" },
  { word: "于是", pinyin: "yúshì", meaning: "그리하여", level: "4", category: "부사·접속사" },
  { word: "然而", pinyin: "rán'ér", meaning: "그러나 (문어)", level: "4", category: "부사·접속사" },

  { word: "紧张", pinyin: "jǐnzhāng", meaning: "긴장하다", level: "4", category: "형용사" },
  { word: "轻松", pinyin: "qīngsōng", meaning: "홀가분하다", level: "4", category: "형용사" },
  { word: "复杂", pinyin: "fùzá", meaning: "복잡하다", level: "4", category: "형용사" },
  { word: "详细", pinyin: "xiángxì", meaning: "상세하다", level: "4", category: "형용사" },
  { word: "严格", pinyin: "yángé", meaning: "엄격하다", level: "4", category: "형용사" },
  { word: "积极", pinyin: "jījí", meaning: "적극적이다", level: "4", category: "형용사" },
];

export const hsk4Grammar: HskGrammar[] = [
  {
    pattern: "不但 A, 而且 B",
    meaning: "A뿐만 아니라 B하기까지 하다",
    example: "他不但会说汉语，而且说得很好。",
    examplePinyin: "Tā búdàn huì shuō Hànyǔ, érqiě shuō de hěn hǎo.",
    exampleMeaning: "그는 중국어를 할 줄 알 뿐 아니라 잘하기까지 합니다.",
    level: "4",
  },
  {
    pattern: "只要 A, 就 B",
    meaning: "A하기만 하면 B하다",
    example: "只要努力，就一定能成功。",
    examplePinyin: "Zhǐyào nǔlì, jiù yídìng néng chénggōng.",
    exampleMeaning: "노력하기만 하면 반드시 성공할 수 있습니다.",
    level: "4",
  },
  {
    pattern: "只有 A, 才 B",
    meaning: "A해야만 비로소 B하다 (只要보다 조건이 엄격)",
    example: "只有多练习，才能提高水平。",
    examplePinyin: "Zhǐyǒu duō liànxí, cái néng tígāo shuǐpíng.",
    exampleMeaning: "많이 연습해야만 실력이 늘 수 있습니다.",
    level: "4",
  },
  {
    pattern: "无论 A, 都 B",
    meaning: "A와 상관없이 B하다",
    example: "无论多忙，我都会去。",
    examplePinyin: "Wúlùn duō máng, wǒ dōu huì qù.",
    exampleMeaning: "아무리 바빠도 저는 갈 겁니다.",
    level: "4",
  },
  {
    pattern: "동사 + 得/不 + 보어 (가능보어)",
    meaning: "~할 수 있다 / 없다",
    example: "这么多菜，我吃不完。",
    examplePinyin: "Zhème duō cài, wǒ chī bu wán.",
    exampleMeaning: "이렇게 많은 요리를 저는 다 못 먹습니다.",
    level: "4",
  },
  {
    pattern: "既然 A, 就 B",
    meaning: "A한 이상 B하자",
    example: "既然来了，就好好玩吧。",
    examplePinyin: "Jìrán lái le, jiù hǎohāo wán ba.",
    exampleMeaning: "이왕 왔으니 즐겁게 놀자.",
    level: "4",
  },
  {
    pattern: "是 ... 的",
    meaning: "이미 일어난 일의 시간·장소·방식을 강조합니다",
    example: "我是坐飞机来的。",
    examplePinyin: "Wǒ shì zuò fēijī lái de.",
    exampleMeaning: "저는 비행기를 타고 왔습니다.",
    level: "4",
  },
  {
    pattern: "连 ... 都/也 ...",
    meaning: "~조차도 ~하다",
    example: "他连饭都没吃就走了。",
    examplePinyin: "Tā lián fàn dōu méi chī jiù zǒu le.",
    exampleMeaning: "그는 밥도 안 먹고 가버렸습니다.",
    level: "4",
  },
  {
    pattern: "按照 + 명사",
    meaning: "~에 따라",
    example: "请按照说明书操作。",
    examplePinyin: "Qǐng ànzhào shuōmíngshū cāozuò.",
    exampleMeaning: "설명서에 따라 조작해 주세요.",
    level: "4",
  },
  {
    pattern: "A 不如 B",
    meaning: "A는 B만 못하다",
    example: "坐地铁不如走路快。",
    examplePinyin: "Zuò dìtiě bùrú zǒulù kuài.",
    exampleMeaning: "지하철 타는 게 걷는 것보다 못 빠릅니다.",
    level: "4",
  },
];

/* ------------------------------------------------------------------ */
/* 5급                                                                  */
/* ------------------------------------------------------------------ */

export const hsk5Words: HskWord[] = [
  { word: "趋势", pinyin: "qūshì", meaning: "추세, 흐름", level: "5", category: "경제·경영" },
  { word: "效率", pinyin: "xiàolǜ", meaning: "효율", level: "5", category: "경제·경영" },
  { word: "投资", pinyin: "tóuzī", meaning: "투자하다", level: "5", category: "경제·경영" },
  { word: "利润", pinyin: "lìrùn", meaning: "이윤", level: "5", category: "경제·경영" },
  { word: "规模", pinyin: "guīmó", meaning: "규모", level: "5", category: "경제·경영" },
  { word: "成本", pinyin: "chéngběn", meaning: "원가, 비용", level: "5", category: "경제·경영" },
  { word: "优势", pinyin: "yōushì", meaning: "우위, 강점", level: "5", category: "경제·경영" },
  { word: "合作", pinyin: "hézuò", meaning: "협력하다", level: "5", category: "경제·경영" },

  { word: "制度", pinyin: "zhìdù", meaning: "제도", level: "5", category: "사회·제도" },
  { word: "政策", pinyin: "zhèngcè", meaning: "정책", level: "5", category: "사회·제도" },
  { word: "领域", pinyin: "lǐngyù", meaning: "영역, 분야", level: "5", category: "사회·제도" },
  { word: "现象", pinyin: "xiànxiàng", meaning: "현상", level: "5", category: "사회·제도" },
  { word: "因素", pinyin: "yīnsù", meaning: "요인", level: "5", category: "사회·제도" },
  { word: "观念", pinyin: "guānniàn", meaning: "관념, 인식", level: "5", category: "사회·제도" },
  { word: "结构", pinyin: "jiégòu", meaning: "구조", level: "5", category: "사회·제도" },
  { word: "资源", pinyin: "zīyuán", meaning: "자원", level: "5", category: "사회·제도" },

  { word: "分析", pinyin: "fēnxī", meaning: "분석하다", level: "5", category: "동사" },
  { word: "判断", pinyin: "pànduàn", meaning: "판단하다", level: "5", category: "동사" },
  { word: "承担", pinyin: "chéngdān", meaning: "떠맡다, 부담하다", level: "5", category: "동사" },
  { word: "促进", pinyin: "cùjìn", meaning: "촉진하다", level: "5", category: "동사" },
  { word: "改善", pinyin: "gǎishàn", meaning: "개선하다", level: "5", category: "동사" },
  { word: "实现", pinyin: "shíxiàn", meaning: "실현하다", level: "5", category: "동사" },
  { word: "维持", pinyin: "wéichí", meaning: "유지하다", level: "5", category: "동사" },
  { word: "缺乏", pinyin: "quēfá", meaning: "부족하다", level: "5", category: "동사" },
  { word: "培养", pinyin: "péiyǎng", meaning: "기르다, 양성하다", level: "5", category: "동사" },
  { word: "具备", pinyin: "jùbèi", meaning: "갖추다", level: "5", category: "동사" },
  { word: "采取", pinyin: "cǎiqǔ", meaning: "취하다 (조치를)", level: "5", category: "동사" },
  { word: "掌握", pinyin: "zhǎngwò", meaning: "숙달하다, 장악하다", level: "5", category: "동사" },
  { word: "表达", pinyin: "biǎodá", meaning: "표현하다", level: "5", category: "동사" },
  { word: "评价", pinyin: "píngjià", meaning: "평가하다", level: "5", category: "동사" },

  { word: "显然", pinyin: "xiǎnrán", meaning: "명백히", level: "5", category: "부사·연결" },
  { word: "毕竟", pinyin: "bìjìng", meaning: "결국, 어쨌든", level: "5", category: "부사·연결" },
  { word: "何况", pinyin: "hékuàng", meaning: "하물며", level: "5", category: "부사·연결" },
  { word: "从而", pinyin: "cóng'ér", meaning: "그리하여 (문어)", level: "5", category: "부사·연결" },
  { word: "宁可", pinyin: "nìngkě", meaning: "차라리 ~할지언정", level: "5", category: "부사·연결" },
  { word: "与其", pinyin: "yǔqí", meaning: "~하느니", level: "5", category: "부사·연결" },
  { word: "反而", pinyin: "fǎn'ér", meaning: "오히려", level: "5", category: "부사·연결" },
  { word: "始终", pinyin: "shǐzhōng", meaning: "시종일관", level: "5", category: "부사·연결" },

  { word: "显著", pinyin: "xiǎnzhù", meaning: "현저하다", level: "5", category: "형용사" },
  { word: "迫切", pinyin: "pòqiè", meaning: "절박하다", level: "5", category: "형용사" },
  { word: "深刻", pinyin: "shēnkè", meaning: "깊다, 인상적이다", level: "5", category: "형용사" },
  { word: "稳定", pinyin: "wěndìng", meaning: "안정적이다", level: "5", category: "형용사" },
  { word: "普遍", pinyin: "pǔbiàn", meaning: "보편적이다", level: "5", category: "형용사" },
  { word: "灵活", pinyin: "línghuó", meaning: "유연하다", level: "5", category: "형용사" },
];

export const hsk5Grammar: HskGrammar[] = [
  {
    pattern: "宁可 A, 也不 B",
    meaning: "차라리 A할지언정 B하지 않겠다",
    example: "我宁可走路，也不坐那趟车。",
    examplePinyin: "Wǒ nìngkě zǒulù, yě bù zuò nà tàng chē.",
    exampleMeaning: "차라리 걷지, 그 차는 타지 않겠습니다.",
    level: "5",
  },
  {
    pattern: "与其 A, 不如 B",
    meaning: "A하느니 차라리 B하는 게 낫다",
    example: "与其抱怨，不如行动。",
    examplePinyin: "Yǔqí bàoyuàn, bùrú xíngdòng.",
    exampleMeaning: "불평하느니 행동하는 게 낫습니다.",
    level: "5",
  },
  {
    pattern: "在 ... 上/中/下",
    meaning: "~한 측면에서 / 상황에서",
    example: "在这个问题上，我们意见一致。",
    examplePinyin: "Zài zhège wèntí shàng, wǒmen yìjiàn yízhì.",
    exampleMeaning: "이 문제에 있어서 우리 의견은 일치합니다.",
    level: "5",
  },
  {
    pattern: "并 / 却 + 술어",
    meaning: "결코 ~하지 않다 / 오히려 ~하다 (어감 강조)",
    example: "这件事并不简单。",
    examplePinyin: "Zhè jiàn shì bìng bù jiǎndān.",
    exampleMeaning: "이 일은 결코 간단하지 않습니다.",
    level: "5",
  },
  {
    pattern: "以 A 为 B",
    meaning: "A를 B로 삼다",
    example: "公司以质量为核心。",
    examplePinyin: "Gōngsī yǐ zhìliàng wéi héxīn.",
    exampleMeaning: "회사는 품질을 핵심으로 삼습니다.",
    level: "5",
  },
  {
    pattern: "不是 A, 而是 B",
    meaning: "A가 아니라 B다",
    example: "问题不是能力，而是态度。",
    examplePinyin: "Wèntí bú shì nénglì, ér shì tàidu.",
    exampleMeaning: "문제는 능력이 아니라 태도입니다.",
    level: "5",
  },
  {
    pattern: "既 A 又 B",
    meaning: "A하기도 하고 B하기도 하다",
    example: "这个方法既省时又省钱。",
    examplePinyin: "Zhège fāngfǎ jì shěng shí yòu shěng qián.",
    exampleMeaning: "이 방법은 시간도 절약되고 돈도 절약됩니다.",
    level: "5",
  },
  {
    pattern: "从而 / 因此",
    meaning: "그리하여, 그 결과 (문어체 인과)",
    example: "他改进了流程，从而提高了效率。",
    examplePinyin: "Tā gǎijìn le liúchéng, cóng'ér tígāo le xiàolǜ.",
    exampleMeaning: "그는 절차를 개선했고, 그리하여 효율이 올라갔습니다.",
    level: "5",
  },
];

/* ------------------------------------------------------------------ */
/* 6급                                                                  */
/* ------------------------------------------------------------------ */

export const hsk6Words: HskWord[] = [
  { word: "崛起", pinyin: "juéqǐ", meaning: "부상하다, 우뚝 서다", level: "6", category: "시사·경제" },
  { word: "垄断", pinyin: "lǒngduàn", meaning: "독점하다", level: "6", category: "시사·경제" },
  { word: "枢纽", pinyin: "shūniǔ", meaning: "허브, 중추", level: "6", category: "시사·경제" },
  { word: "潜力", pinyin: "qiánlì", meaning: "잠재력", level: "6", category: "시사·경제" },
  { word: "瓶颈", pinyin: "píngjǐng", meaning: "병목, 한계점", level: "6", category: "시사·경제" },
  { word: "格局", pinyin: "géjú", meaning: "구도, 판세", level: "6", category: "시사·경제" },
  { word: "隐患", pinyin: "yǐnhuàn", meaning: "잠재적 위험", level: "6", category: "시사·경제" },
  { word: "共识", pinyin: "gòngshí", meaning: "공감대, 합의", level: "6", category: "시사·경제" },
  { word: "循环", pinyin: "xúnhuán", meaning: "순환하다", level: "6", category: "시사·경제" },
  { word: "机制", pinyin: "jīzhì", meaning: "메커니즘", level: "6", category: "시사·경제" },

  { word: "衡量", pinyin: "héngliáng", meaning: "가늠하다, 저울질하다", level: "6", category: "동사" },
  { word: "遏制", pinyin: "èzhì", meaning: "억제하다", level: "6", category: "동사" },
  { word: "渗透", pinyin: "shèntòu", meaning: "침투하다", level: "6", category: "동사" },
  { word: "抵御", pinyin: "dǐyù", meaning: "막아내다", level: "6", category: "동사" },
  { word: "弥补", pinyin: "míbǔ", meaning: "메우다, 보완하다", level: "6", category: "동사" },
  { word: "兼顾", pinyin: "jiāngù", meaning: "양쪽을 함께 고려하다", level: "6", category: "동사" },
  { word: "遵循", pinyin: "zūnxún", meaning: "따르다, 준수하다", level: "6", category: "동사" },
  { word: "凸显", pinyin: "tūxiǎn", meaning: "두드러지다", level: "6", category: "동사" },
  { word: "剖析", pinyin: "pōuxī", meaning: "심층 분석하다", level: "6", category: "동사" },
  { word: "着手", pinyin: "zhuóshǒu", meaning: "착수하다", level: "6", category: "동사" },
  { word: "统筹", pinyin: "tǒngchóu", meaning: "총괄 조율하다", level: "6", category: "동사" },
  { word: "落实", pinyin: "luòshí", meaning: "실행에 옮기다", level: "6", category: "동사" },

  { word: "务必", pinyin: "wùbì", meaning: "반드시", level: "6", category: "부사·문어" },
  { word: "鉴于", pinyin: "jiànyú", meaning: "~에 비추어", level: "6", category: "부사·문어" },
  { word: "亦", pinyin: "yì", meaning: "또한 (문어)", level: "6", category: "부사·문어" },
  { word: "皆", pinyin: "jiē", meaning: "모두 (문어)", level: "6", category: "부사·문어" },
  { word: "尚未", pinyin: "shàngwèi", meaning: "아직 ~하지 않았다", level: "6", category: "부사·문어" },
  { word: "屡次", pinyin: "lǚcì", meaning: "여러 차례", level: "6", category: "부사·문어" },

  { word: "一举两得", pinyin: "yì jǔ liǎng dé", meaning: "일거양득", level: "6", category: "성어" },
  { word: "名副其实", pinyin: "míng fù qí shí", meaning: "명실상부하다", level: "6", category: "성어" },
  { word: "迫在眉睫", pinyin: "pò zài méi jié", meaning: "눈앞에 닥치다", level: "6", category: "성어" },
  { word: "层出不穷", pinyin: "céng chū bù qióng", meaning: "끊임없이 나오다", level: "6", category: "성어" },
  { word: "潜移默化", pinyin: "qián yí mò huà", meaning: "은연중에 감화되다", level: "6", category: "성어" },
  { word: "急功近利", pinyin: "jí gōng jìn lì", meaning: "눈앞의 성과만 좇다", level: "6", category: "성어" },
];

export const hsk6Grammar: HskGrammar[] = [
  {
    pattern: "A 之所以 B, 是因为 C",
    meaning: "A가 B한 것은 C 때문이다",
    example: "他之所以成功，是因为从不放弃。",
    examplePinyin: "Tā zhī suǒyǐ chénggōng, shì yīnwèi cóng bù fàngqì.",
    exampleMeaning: "그가 성공한 것은 결코 포기하지 않았기 때문입니다.",
    level: "6",
  },
  {
    pattern: "唯有 A, 才 B",
    meaning: "오직 A해야만 B하다",
    example: "唯有坚持，才能看到成果。",
    examplePinyin: "Wéiyǒu jiānchí, cái néng kàndào chéngguǒ.",
    exampleMeaning: "꾸준히 해야만 성과를 볼 수 있습니다.",
    level: "6",
  },
  {
    pattern: "即便 A, 也 B",
    meaning: "설령 A하더라도 B하다",
    example: "即便失败，也值得一试。",
    examplePinyin: "Jíbiàn shībài, yě zhídé yí shì.",
    exampleMeaning: "설령 실패하더라도 시도해 볼 가치가 있습니다.",
    level: "6",
  },
  {
    pattern: "不至于",
    meaning: "~할 정도까지는 아니다",
    example: "情况还不至于那么糟糕。",
    examplePinyin: "Qíngkuàng hái bú zhìyú nàme zāogāo.",
    exampleMeaning: "상황이 그 정도로 나쁘지는 않습니다.",
    level: "6",
  },
  {
    pattern: "鉴于 A, B",
    meaning: "A에 비추어 B하다 (문어체)",
    example: "鉴于市场变化，公司调整了策略。",
    examplePinyin: "Jiànyú shìchǎng biànhuà, gōngsī tiáozhěng le cèlüè.",
    exampleMeaning: "시장 변화에 비추어 회사는 전략을 조정했습니다.",
    level: "6",
  },
  {
    pattern: "以免 / 以便",
    meaning: "~하지 않도록 / ~하기 위하여",
    example: "请提前确认，以免出错。",
    examplePinyin: "Qǐng tíqián quèrèn, yǐmiǎn chūcuò.",
    exampleMeaning: "실수가 없도록 미리 확인해 주세요.",
    level: "6",
  },
  {
    pattern: "何尝 / 未必",
    meaning: "어찌 ~하겠는가 / 반드시 ~한 것은 아니다",
    example: "这未必是坏事。",
    examplePinyin: "Zhè wèibì shì huàishì.",
    exampleMeaning: "이게 꼭 나쁜 일인 것은 아닙니다.",
    level: "6",
  },
];

/* ------------------------------------------------------------------ */
/* 7~9급 (고등)                                                          */
/* ------------------------------------------------------------------ */

export const hsk79Words: HskWord[] = [
  { word: "范畴", pinyin: "fànchóu", meaning: "범주", level: "7-9", category: "학술" },
  { word: "命题", pinyin: "mìngtí", meaning: "명제", level: "7-9", category: "학술" },
  { word: "悖论", pinyin: "bèilùn", meaning: "역설, 패러독스", level: "7-9", category: "학술" },
  { word: "论证", pinyin: "lùnzhèng", meaning: "논증하다", level: "7-9", category: "학술" },
  { word: "实证", pinyin: "shízhèng", meaning: "실증", level: "7-9", category: "학술" },
  { word: "范式", pinyin: "fànshì", meaning: "패러다임", level: "7-9", category: "학술" },
  { word: "界定", pinyin: "jièdìng", meaning: "정의하다, 경계 짓다", level: "7-9", category: "학술" },
  { word: "甄别", pinyin: "zhēnbié", meaning: "가려내다, 감별하다", level: "7-9", category: "학술" },
  { word: "阐述", pinyin: "chǎnshù", meaning: "상세히 논술하다", level: "7-9", category: "학술" },
  { word: "谬误", pinyin: "miùwù", meaning: "오류", level: "7-9", category: "학술" },

  { word: "举措", pinyin: "jǔcuò", meaning: "조치, 대책", level: "7-9", category: "시사·정책" },
  { word: "磋商", pinyin: "cuōshāng", meaning: "협의하다", level: "7-9", category: "시사·정책" },
  { word: "斡旋", pinyin: "wòxuán", meaning: "중재하다", level: "7-9", category: "시사·정책" },
  { word: "博弈", pinyin: "bóyì", meaning: "게임, 세력 다툼", level: "7-9", category: "시사·정책" },
  { word: "掣肘", pinyin: "chèzhǒu", meaning: "발목을 잡다", level: "7-9", category: "시사·정책" },
  { word: "倒逼", pinyin: "dàobī", meaning: "역으로 압박하다", level: "7-9", category: "시사·정책" },
  { word: "赋能", pinyin: "fùnéng", meaning: "역량을 부여하다", level: "7-9", category: "시사·정책" },
  { word: "红利", pinyin: "hónglì", meaning: "배당, 수혜", level: "7-9", category: "시사·정책" },

  { word: "彰显", pinyin: "zhāngxiǎn", meaning: "뚜렷이 드러내다", level: "7-9", category: "문어 동사" },
  { word: "涵盖", pinyin: "hángài", meaning: "포괄하다", level: "7-9", category: "문어 동사" },
  { word: "契合", pinyin: "qìhé", meaning: "맞아떨어지다", level: "7-9", category: "문어 동사" },
  { word: "秉持", pinyin: "bǐngchí", meaning: "견지하다", level: "7-9", category: "문어 동사" },
  { word: "沿袭", pinyin: "yánxí", meaning: "답습하다", level: "7-9", category: "문어 동사" },
  { word: "迭代", pinyin: "diédài", meaning: "반복해 개선하다", level: "7-9", category: "문어 동사" },
  { word: "演绎", pinyin: "yǎnyì", meaning: "연역하다, 풀어내다", level: "7-9", category: "문어 동사" },
  { word: "蕴含", pinyin: "yùnhán", meaning: "내포하다", level: "7-9", category: "문어 동사" },
  { word: "裨益", pinyin: "bìyì", meaning: "이롭게 하다", level: "7-9", category: "문어 동사" },
  { word: "端倪", pinyin: "duānní", meaning: "실마리, 조짐", level: "7-9", category: "문어 동사" },

  { word: "因地制宜", pinyin: "yīn dì zhì yí", meaning: "실정에 맞게 대응하다", level: "7-9", category: "성어" },
  { word: "循序渐进", pinyin: "xún xù jiàn jìn", meaning: "차근차근 나아가다", level: "7-9", category: "성어" },
  { word: "一针见血", pinyin: "yì zhēn jiàn xiě", meaning: "정곡을 찌르다", level: "7-9", category: "성어" },
  { word: "众所周知", pinyin: "zhòng suǒ zhōu zhī", meaning: "모두가 아는 바와 같이", level: "7-9", category: "성어" },
  { word: "相辅相成", pinyin: "xiāng fǔ xiāng chéng", meaning: "서로 보완하며 이루다", level: "7-9", category: "성어" },
  { word: "事半功倍", pinyin: "shì bàn gōng bèi", meaning: "적은 노력으로 큰 효과", level: "7-9", category: "성어" },
  { word: "未雨绸缪", pinyin: "wèi yǔ chóu móu", meaning: "미리 대비하다", level: "7-9", category: "성어" },
  { word: "举足轻重", pinyin: "jǔ zú qīng zhòng", meaning: "매우 중요한 위치에 있다", level: "7-9", category: "성어" },
];

export const hsk79Grammar: HskGrammar[] = [
  {
    pattern: "与其说 A, 不如说 B",
    meaning: "A라기보다는 B라고 하는 편이 낫다",
    example: "与其说是运气，不如说是准备。",
    examplePinyin: "Yǔqí shuō shì yùnqi, bùrú shuō shì zhǔnbèi.",
    exampleMeaning: "운이라기보다는 준비된 결과라고 해야 합니다.",
    level: "7-9",
  },
  {
    pattern: "无不 / 无一不",
    meaning: "~하지 않는 것이 없다 (강한 긍정)",
    example: "在场的人无不为之动容。",
    examplePinyin: "Zàichǎng de rén wúbù wèi zhī dòngróng.",
    exampleMeaning: "그 자리에 있던 사람 모두가 감동했습니다.",
    level: "7-9",
  },
  {
    pattern: "诚然 A, 但 B",
    meaning: "물론 A인 것은 사실이나 B하다",
    example: "诚然存在风险，但机会更大。",
    examplePinyin: "Chéngrán cúnzài fēngxiǎn, dàn jīhuì gèng dà.",
    exampleMeaning: "위험이 있는 건 사실이지만 기회가 더 큽니다.",
    level: "7-9",
  },
  {
    pattern: "姑且不论 A, 单是 B",
    meaning: "A는 차치하고 B만 해도",
    example: "姑且不论成本，单是时间就不允许。",
    examplePinyin: "Gūqiě bú lùn chéngběn, dān shì shíjiān jiù bù yǔnxǔ.",
    exampleMeaning: "비용은 차치하고 시간만 봐도 불가능합니다.",
    level: "7-9",
  },
  {
    pattern: "凡是 ... 皆/都 ...",
    meaning: "무릇 ~한 것은 모두 ~하다",
    example: "凡是参与者皆可获得证书。",
    examplePinyin: "Fánshì cānyùzhě jiē kě huòdé zhèngshū.",
    exampleMeaning: "참가자는 모두 증서를 받을 수 있습니다.",
    level: "7-9",
  },
  {
    pattern: "之 (문어 소유·목적격)",
    meaning: "的 대신 쓰이는 문어체 조사",
    example: "此乃成功之关键。",
    examplePinyin: "Cǐ nǎi chénggōng zhī guānjiàn.",
    exampleMeaning: "이것이 바로 성공의 열쇠입니다.",
    level: "7-9",
  },
  {
    pattern: "有待 / 亟待",
    meaning: "~할 필요가 있다 / 시급히 ~해야 한다",
    example: "相关制度亟待完善。",
    examplePinyin: "Xiāngguān zhìdù jídài wánshàn.",
    exampleMeaning: "관련 제도의 정비가 시급합니다.",
    level: "7-9",
  },
];

/* ------------------------------------------------------------------ */
/* 급수 메타 정보                                                        */
/* ------------------------------------------------------------------ */

export type HskLevelInfo = {
  id: HskLevelId;
  href: string;
  label: string;
  stage: HskStage;
  /** HSK 3.0 표준의 누적 어휘 */
  vocab30: string;
  /** HSK 3.0 표준의 누적 한자(읽기) */
  hanzi30: string;
  /** HSK 2.0 기준 어휘. 2026년 현재 실제 응시하는 시험의 기준입니다. */
  vocab20: string;
  target: string;
  /** HSK 2.0 시험 기준 */
  passLine: string;
  duration: string;
  description: string;
  /** 이 급수를 준비할 때의 핵심 과제 */
  focus: string;
  color: string;
  words: HskWord[];
  grammar: HskGrammar[];
};

export const hskLevels: HskLevelInfo[] = [
  {
    id: "1",
    href: "/hsk",
    label: "HSK 1급",
    stage: "초등",
    vocab30: "500단어",
    hanzi30: "300자",
    vocab20: "150단어",
    target: "입문 — 인사와 자기소개",
    passLine: "120점 / 200점",
    duration: "약 40분",
    description:
      "모든 문제에 병음이 함께 나오는 유일한 급수입니다. 인사, 숫자, 날짜, 가족처럼 생존에 필요한 표현만 다룹니다.",
    focus: "병음과 성조를 정확히 읽는 것. 여기서 발음 습관이 굳어집니다.",
    color: "bg-red-50 border-red-200 text-red-700",
    words: hsk1Words,
    grammar: hsk1Grammar,
  },
  {
    id: "2",
    href: "/hsk/2",
    label: "HSK 2급",
    stage: "초등",
    vocab30: "1,272단어",
    hanzi30: "600자",
    vocab20: "300단어",
    target: "기초 — 일상 대화",
    passLine: "120점 / 200점",
    duration: "약 55분",
    description:
      "쇼핑, 길 찾기, 식당 주문 같은 일상 상황을 다룹니다. 了·过 같은 기초 시제 표현이 등장합니다.",
    focus: "了와 过의 구분. 한국어에 대응이 없어 처음 막히는 지점입니다.",
    color: "bg-orange-50 border-orange-200 text-orange-700",
    words: hsk2Words,
    grammar: hsk2Grammar,
  },
  {
    id: "3",
    href: "/hsk/3",
    label: "HSK 3급",
    stage: "초등",
    vocab30: "2,245단어",
    hanzi30: "900자",
    vocab20: "600단어",
    target: "초중급 — 중국 생활 가능",
    passLine: "180점 / 300점",
    duration: "약 90분",
    description:
      "쓰기 영역이 처음 등장합니다. 把자문, 被자문, 각종 보어가 본격적으로 나오는 첫 관문입니다.",
    focus: "보어(결과·방향·정도). 중국어 문장이 길어지는 원리가 여기 있습니다.",
    color: "bg-amber-50 border-amber-200 text-amber-700",
    words: hsk3Words,
    grammar: hsk3Grammar,
  },
  {
    id: "4",
    href: "/hsk/4",
    label: "HSK 4급",
    stage: "중등",
    vocab30: "3,245단어",
    hanzi30: "1,200자",
    vocab20: "1,200단어",
    target: "중급 — 취업·교환학생 기준선",
    passLine: "180점 / 300점",
    duration: "약 105분",
    description:
      "국내 기업 채용과 교환학생 지원에서 가장 많이 요구하는 급수입니다. 접속사와 복문이 핵심입니다.",
    focus: "복문 접속사 짝. 不但~而且, 只要~就 같은 쌍을 통째로 외워야 합니다.",
    color: "bg-emerald-50 border-emerald-200 text-emerald-700",
    words: hsk4Words,
    grammar: hsk4Grammar,
  },
  {
    id: "5",
    href: "/hsk/5",
    label: "HSK 5급",
    stage: "중등",
    vocab30: "4,316단어",
    hanzi30: "1,500자",
    vocab20: "2,500단어",
    target: "중상급 — 신문·드라마 이해",
    passLine: "180점 / 300점",
    duration: "약 125분",
    description:
      "중국 대학 학부 입학과 주재원 요건으로 자주 쓰입니다. 독해 지문 길이가 크게 늘어납니다.",
    focus: "시간 관리. 아는 단어인데 시간이 모자라 못 푸는 구간이 시작됩니다.",
    color: "bg-sky-50 border-sky-200 text-sky-700",
    words: hsk5Words,
    grammar: hsk5Grammar,
  },
  {
    id: "6",
    href: "/hsk/6",
    label: "HSK 6급",
    stage: "중등",
    vocab30: "5,456단어",
    hanzi30: "1,800자",
    vocab20: "5,000단어 이상",
    target: "고급 — 원어민 수준 문어체",
    passLine: "180점 / 300점",
    duration: "약 140분",
    description:
      "성어와 문어체 표현이 대량으로 나옵니다. 쓰기는 1,000자 지문을 읽고 400자로 요약하는 형식입니다.",
    focus: "성어와 유의어 변별. 뜻이 비슷한 단어 중 하나만 정답인 문제가 많습니다.",
    color: "bg-violet-50 border-violet-200 text-violet-700",
    words: hsk6Words,
    grammar: hsk6Grammar,
  },
  {
    id: "7-9",
    href: "/hsk/7-9",
    label: "HSK 7~9급",
    stage: "고등",
    vocab30: "11,000단어",
    hanzi30: "3,000자",
    vocab20: "해당 없음 (3.0 신설)",
    target: "최상급 — 학술·전문 영역",
    passLine: "점수에 따라 7·8·9급 판정",
    duration: "약 210분",
    description:
      "HSK 3.0에서 새로 생긴 최상위 단계입니다. 급수별로 시험이 나뉘어 있지 않고, 하나의 시험을 본 뒤 점수에 따라 7급·8급·9급 또는 미달로 판정됩니다. 듣기·읽기·쓰기·말하기·번역을 모두 평가합니다.",
    focus: "출력 능력. 읽고 이해하는 것을 넘어 쓰고 말하고 통역까지 해야 합니다.",
    color: "bg-slate-100 border-slate-300 text-slate-700",
    words: hsk79Words,
    grammar: hsk79Grammar,
  },
];

export const hskStages: { stage: HskStage; label: string; range: string; summary: string }[] = [
  {
    stage: "초등",
    label: "초등 (初等)",
    range: "1~3급",
    summary: "생존 중국어. 인사부터 시작해 일상 상황을 혼자 처리할 수 있는 수준까지입니다.",
  },
  {
    stage: "중등",
    label: "중등 (中等)",
    range: "4~6급",
    summary: "실용 중국어. 취업·유학에서 실제로 요구하는 구간이며 4급이 첫 목표선입니다.",
  },
  {
    stage: "고등",
    label: "고등 (高等)",
    range: "7~9급",
    summary: "전문 중국어. 하나의 시험으로 7·8·9급을 판정하며 통번역 능력까지 평가합니다.",
  },
];

export const allHskWords: HskWord[] = hskLevels.flatMap((lv) => lv.words);
