export type HskLevel = "HSK1" | "HSK2" | "HSK3" | "HSK4" | "HSK5" | "HSK6";

export type HskWord = {
  word: string;
  pinyin: string;
  meaning: string;
  level: HskLevel;
  category?: string;
};

export type HskGrammar = {
  pattern: string;
  meaning: string;
  example: string;
  examplePinyin: string;
  exampleMeaning: string;
  level: HskLevel;
};

export const hsk1Words: HskWord[] = [
  { word: "我", pinyin: "wǒ", meaning: "나, 저", level: "HSK1" },
  { word: "你", pinyin: "nǐ", meaning: "너, 당신", level: "HSK1" },
  { word: "他", pinyin: "tā", meaning: "그", level: "HSK1" },
  { word: "好", pinyin: "hǎo", meaning: "좋다", level: "HSK1" },
  { word: "谢谢", pinyin: "xièxie", meaning: "고맙습니다", level: "HSK1" },
  { word: "不客气", pinyin: "bú kèqi", meaning: "천만에요", level: "HSK1" },
  { word: "再见", pinyin: "zàijiàn", meaning: "안녕히 가세요", level: "HSK1" },
  { word: "对不起", pinyin: "duìbuqǐ", meaning: "죄송합니다", level: "HSK1" },
  { word: "水", pinyin: "shuǐ", meaning: "물", level: "HSK1" },
  { word: "吃", pinyin: "chī", meaning: "먹다", level: "HSK1" },
  { word: "喝", pinyin: "hē", meaning: "마시다", level: "HSK1" },
  { word: "看", pinyin: "kàn", meaning: "보다", level: "HSK1" },
  { word: "去", pinyin: "qù", meaning: "가다", level: "HSK1" },
  { word: "来", pinyin: "lái", meaning: "오다", level: "HSK1" },
  { word: "学习", pinyin: "xuéxí", meaning: "공부하다", level: "HSK1" },
  { word: "老师", pinyin: "lǎoshī", meaning: "선생님", level: "HSK1" },
  { word: "学生", pinyin: "xuésheng", meaning: "학생", level: "HSK1" },
  { word: "朋友", pinyin: "péngyou", meaning: "친구", level: "HSK1" },
  { word: "家", pinyin: "jiā", meaning: "집", level: "HSK1" },
  { word: "中国", pinyin: "Zhōngguó", meaning: "중국", level: "HSK1" },
  { word: "菜", pinyin: "cài", meaning: "요리, 반찬", level: "HSK1" },
  { word: "米饭", pinyin: "mǐfàn", meaning: "쌀밥", level: "HSK1" },
  { word: "天气", pinyin: "tiānqì", meaning: "날씨", level: "HSK1" },
  { word: "今天", pinyin: "jīntiān", meaning: "오늘", level: "HSK1" },
  { word: "明天", pinyin: "míngtiān", meaning: "내일", level: "HSK1" },
  { word: "多少", pinyin: "duōshao", meaning: "얼마, 몇", level: "HSK1" },
  { word: "钱", pinyin: "qián", meaning: "돈", level: "HSK1" },
  { word: "很", pinyin: "hěn", meaning: "매우", level: "HSK1" },
  { word: "都", pinyin: "dōu", meaning: "모두, 다", level: "HSK1" },
  { word: "会", pinyin: "huì", meaning: "~할 줄 알다", level: "HSK1" },
  { word: "想", pinyin: "xiǎng", meaning: "~하고 싶다, 생각하다", level: "HSK1" },
  { word: "医院", pinyin: "yīyuàn", meaning: "병원", level: "HSK1" },
];

export const hsk2Words: HskWord[] = [
  { word: "已经", pinyin: "yǐjīng", meaning: "이미, 벌써", level: "HSK2" },
  { word: "因为", pinyin: "yīnwèi", meaning: "~때문에", level: "HSK2" },
  { word: "所以", pinyin: "suǒyǐ", meaning: "그래서", level: "HSK2" },
  { word: "但是", pinyin: "dànshì", meaning: "그러나", level: "HSK2" },
  { word: "希望", pinyin: "xīwàng", meaning: "희망하다", level: "HSK2" },
  { word: "帮助", pinyin: "bāngzhù", meaning: "돕다", level: "HSK2" },
  { word: "介绍", pinyin: "jièshào", meaning: "소개하다", level: "HSK2" },
  { word: "旅游", pinyin: "lǚyóu", meaning: "여행하다", level: "HSK2" },
  { word: "机场", pinyin: "jīchǎng", meaning: "공항", level: "HSK2" },
  { word: "火车站", pinyin: "huǒchēzhàn", meaning: "기차역", level: "HSK2" },
  { word: "宾馆", pinyin: "bīnguǎn", meaning: "호텔", level: "HSK2" },
  { word: "房间", pinyin: "fángjiān", meaning: "방", level: "HSK2" },
  { word: "服务员", pinyin: "fúwùyuán", meaning: "종업원", level: "HSK2" },
  { word: "便宜", pinyin: "piányi", meaning: "싸다", level: "HSK2" },
  { word: "贵", pinyin: "guì", meaning: "비싸다", level: "HSK2" },
  { word: "颜色", pinyin: "yánsè", meaning: "색깔", level: "HSK2" },
  { word: "身体", pinyin: "shēntǐ", meaning: "몸, 건강", level: "HSK2" },
  { word: "生病", pinyin: "shēngbìng", meaning: "병이 나다", level: "HSK2" },
  { word: "药", pinyin: "yào", meaning: "약", level: "HSK2" },
  { word: "手机", pinyin: "shǒujī", meaning: "휴대폰", level: "HSK2" },
  { word: "上班", pinyin: "shàngbān", meaning: "출근하다", level: "HSK2" },
  { word: "考试", pinyin: "kǎoshì", meaning: "시험", level: "HSK2" },
  { word: "开始", pinyin: "kāishǐ", meaning: "시작하다", level: "HSK2" },
  { word: "完", pinyin: "wán", meaning: "끝나다", level: "HSK2" },
  { word: "觉得", pinyin: "juéde", meaning: "~라고 느끼다", level: "HSK2" },
  { word: "知道", pinyin: "zhīdào", meaning: "알다", level: "HSK2" },
];

export const hsk3Words: HskWord[] = [
  { word: "认真", pinyin: "rènzhēn", meaning: "성실하다, 진지하다", level: "HSK3" },
  { word: "关心", pinyin: "guānxīn", meaning: "관심을 갖다", level: "HSK3" },
  { word: "习惯", pinyin: "xíguàn", meaning: "습관, 익숙해지다", level: "HSK3" },
  { word: "练习", pinyin: "liànxí", meaning: "연습하다", level: "HSK3" },
  { word: "选择", pinyin: "xuǎnzé", meaning: "선택하다", level: "HSK3" },
  { word: "决定", pinyin: "juédìng", meaning: "결정하다", level: "HSK3" },
  { word: "解决", pinyin: "jiějué", meaning: "해결하다", level: "HSK3" },
  { word: "同意", pinyin: "tóngyì", meaning: "동의하다", level: "HSK3" },
  { word: "满意", pinyin: "mǎnyì", meaning: "만족하다", level: "HSK3" },
  { word: "环境", pinyin: "huánjìng", meaning: "환경", level: "HSK3" },
  { word: "健康", pinyin: "jiànkāng", meaning: "건강하다", level: "HSK3" },
  { word: "锻炼", pinyin: "duànliàn", meaning: "단련하다, 운동하다", level: "HSK3" },
  { word: "经理", pinyin: "jīnglǐ", meaning: "매니저, 팀장", level: "HSK3" },
  { word: "会议", pinyin: "huìyì", meaning: "회의", level: "HSK3" },
  { word: "办公室", pinyin: "bàngōngshì", meaning: "사무실", level: "HSK3" },
  { word: "地铁", pinyin: "dìtiě", meaning: "지하철", level: "HSK3" },
  { word: "护照", pinyin: "hùzhào", meaning: "여권", level: "HSK3" },
  { word: "银行", pinyin: "yínháng", meaning: "은행", level: "HSK3" },
  { word: "季节", pinyin: "jìjié", meaning: "계절", level: "HSK3" },
  { word: "刮风", pinyin: "guāfēng", meaning: "바람이 불다", level: "HSK3" },
  { word: "一般", pinyin: "yìbān", meaning: "일반적이다, 보통", level: "HSK3" },
  { word: "特别", pinyin: "tèbié", meaning: "특별히", level: "HSK3" },
  { word: "终于", pinyin: "zhōngyú", meaning: "마침내", level: "HSK3" },
  { word: "突然", pinyin: "tūrán", meaning: "갑자기", level: "HSK3" },
  { word: "重要", pinyin: "zhòngyào", meaning: "중요하다", level: "HSK3" },
  { word: "简单", pinyin: "jiǎndān", meaning: "간단하다", level: "HSK3" },
];

export const hsk4Words: HskWord[] = [
  { word: "机会", pinyin: "jīhuì", meaning: "기회", level: "HSK4" },
  { word: "比较", pinyin: "bǐjiào", meaning: "비교적, 비교하다", level: "HSK4" },
  { word: "专业", pinyin: "zhuānyè", meaning: "전공, 전문적이다", level: "HSK4" },
  { word: "经验", pinyin: "jīngyàn", meaning: "경험", level: "HSK4" },
  { word: "能力", pinyin: "nénglì", meaning: "능력", level: "HSK4" },
  { word: "责任", pinyin: "zérèn", meaning: "책임", level: "HSK4" },
  { word: "态度", pinyin: "tàidu", meaning: "태도", level: "HSK4" },
  { word: "信息", pinyin: "xìnxī", meaning: "정보", level: "HSK4" },
  { word: "计划", pinyin: "jìhuà", meaning: "계획", level: "HSK4" },
  { word: "内容", pinyin: "nèiróng", meaning: "내용", level: "HSK4" },
  { word: "标准", pinyin: "biāozhǔn", meaning: "기준, 표준", level: "HSK4" },
  { word: "结果", pinyin: "jiéguǒ", meaning: "결과", level: "HSK4" },
  { word: "原因", pinyin: "yuányīn", meaning: "원인", level: "HSK4" },
  { word: "影响", pinyin: "yǐngxiǎng", meaning: "영향, 영향을 주다", level: "HSK4" },
  { word: "获得", pinyin: "huòdé", meaning: "얻다, 획득하다", level: "HSK4" },
  { word: "适合", pinyin: "shìhé", meaning: "적합하다", level: "HSK4" },
  { word: "推迟", pinyin: "tuīchí", meaning: "미루다, 연기하다", level: "HSK4" },
  { word: "增加", pinyin: "zēngjiā", meaning: "증가하다", level: "HSK4" },
  { word: "减少", pinyin: "jiǎnshǎo", meaning: "감소하다", level: "HSK4" },
  { word: "接受", pinyin: "jiēshòu", meaning: "받아들이다", level: "HSK4" },
  { word: "拒绝", pinyin: "jùjué", meaning: "거절하다", level: "HSK4" },
  { word: "确实", pinyin: "quèshí", meaning: "확실히", level: "HSK4" },
  { word: "尤其", pinyin: "yóuqí", meaning: "특히", level: "HSK4" },
  { word: "按照", pinyin: "ànzhào", meaning: "~에 따라", level: "HSK4" },
  { word: "既然", pinyin: "jìrán", meaning: "~한 이상", level: "HSK4" },
];

export const hsk5Words: HskWord[] = [
  { word: "趋势", pinyin: "qūshì", meaning: "추세, 흐름", level: "HSK5" },
  { word: "效率", pinyin: "xiàolǜ", meaning: "효율", level: "HSK5" },
  { word: "竞争", pinyin: "jìngzhēng", meaning: "경쟁하다", level: "HSK5" },
  { word: "合作", pinyin: "hézuò", meaning: "협력하다", level: "HSK5" },
  { word: "投资", pinyin: "tóuzī", meaning: "투자하다", level: "HSK5" },
  { word: "利润", pinyin: "lìrùn", meaning: "이윤", level: "HSK5" },
  { word: "规模", pinyin: "guīmó", meaning: "규모", level: "HSK5" },
  { word: "制度", pinyin: "zhìdù", meaning: "제도", level: "HSK5" },
  { word: "政策", pinyin: "zhèngcè", meaning: "정책", level: "HSK5" },
  { word: "分析", pinyin: "fēnxī", meaning: "분석하다", level: "HSK5" },
  { word: "判断", pinyin: "pànduàn", meaning: "판단하다", level: "HSK5" },
  { word: "承担", pinyin: "chéngdān", meaning: "떠맡다, 부담하다", level: "HSK5" },
  { word: "促进", pinyin: "cùjìn", meaning: "촉진하다", level: "HSK5" },
  { word: "改善", pinyin: "gǎishàn", meaning: "개선하다", level: "HSK5" },
  { word: "实现", pinyin: "shíxiàn", meaning: "실현하다", level: "HSK5" },
  { word: "维持", pinyin: "wéichí", meaning: "유지하다", level: "HSK5" },
  { word: "缺乏", pinyin: "quēfá", meaning: "부족하다", level: "HSK5" },
  { word: "显然", pinyin: "xiǎnrán", meaning: "명백히", level: "HSK5" },
  { word: "毕竟", pinyin: "bìjìng", meaning: "결국, 어쨌든", level: "HSK5" },
  { word: "何况", pinyin: "hékuàng", meaning: "하물며", level: "HSK5" },
];

export const hsk6Words: HskWord[] = [
  { word: "崛起", pinyin: "juéqǐ", meaning: "굴기하다, 부상하다", level: "HSK6" },
  { word: "垄断", pinyin: "lǒngduàn", meaning: "독점하다", level: "HSK6" },
  { word: "剖析", pinyin: "pōuxī", meaning: "심층 분석하다", level: "HSK6" },
  { word: "衡量", pinyin: "héngliáng", meaning: "가늠하다, 저울질하다", level: "HSK6" },
  { word: "遏制", pinyin: "èzhì", meaning: "억제하다", level: "HSK6" },
  { word: "渗透", pinyin: "shèntòu", meaning: "침투하다", level: "HSK6" },
  { word: "枢纽", pinyin: "shūniǔ", meaning: "허브, 중추", level: "HSK6" },
  { word: "潜力", pinyin: "qiánlì", meaning: "잠재력", level: "HSK6" },
  { word: "瓶颈", pinyin: "píngjǐng", meaning: "병목, 한계점", level: "HSK6" },
  { word: "格局", pinyin: "géjú", meaning: "구도, 판세", level: "HSK6" },
  { word: "隐患", pinyin: "yǐnhuàn", meaning: "잠재적 위험", level: "HSK6" },
  { word: "共识", pinyin: "gòngshí", meaning: "공감대, 합의", level: "HSK6" },
  { word: "抵御", pinyin: "dǐyù", meaning: "방어하다, 막아내다", level: "HSK6" },
  { word: "弥补", pinyin: "míbǔ", meaning: "메우다, 보완하다", level: "HSK6" },
  { word: "兼顾", pinyin: "jiāngù", meaning: "양쪽을 함께 고려하다", level: "HSK6" },
  { word: "遵循", pinyin: "zūnxún", meaning: "따르다, 준수하다", level: "HSK6" },
  { word: "凸显", pinyin: "tūxiǎn", meaning: "두드러지다", level: "HSK6" },
  { word: "循环", pinyin: "xúnhuán", meaning: "순환하다", level: "HSK6" },
  { word: "务必", pinyin: "wùbì", meaning: "반드시", level: "HSK6" },
  { word: "鉴于", pinyin: "jiànyú", meaning: "~에 비추어", level: "HSK6" },
];

export const hsk1Grammar: HskGrammar[] = [
  {
    pattern: "주어 + 是 + 목적어",
    meaning: "~는 ~이다",
    example: "我是韩国人。",
    examplePinyin: "Wǒ shì Hánguó rén.",
    exampleMeaning: "저는 한국인입니다.",
    level: "HSK1",
  },
  {
    pattern: "주어 + 很 + 형용사",
    meaning: "~는 ~하다 (형용사 술어문)",
    example: "今天很热。",
    examplePinyin: "Jīntiān hěn rè.",
    exampleMeaning: "오늘은 덥습니다.",
    level: "HSK1",
  },
  {
    pattern: "문장 + 吗？",
    meaning: "~입니까? (의문문)",
    example: "你是学生吗？",
    examplePinyin: "Nǐ shì xuésheng ma?",
    exampleMeaning: "당신은 학생입니까?",
    level: "HSK1",
  },
  {
    pattern: "不 + 동사/형용사",
    meaning: "~하지 않다 (현재·습관 부정)",
    example: "我不吃肉。",
    examplePinyin: "Wǒ bù chī ròu.",
    exampleMeaning: "저는 고기를 먹지 않습니다.",
    level: "HSK1",
  },
  {
    pattern: "没(有) + 동사",
    meaning: "~하지 않았다 (과거 부정)",
    example: "我没去过中国。",
    examplePinyin: "Wǒ méi qùguo Zhōngguó.",
    exampleMeaning: "저는 중국에 가본 적이 없습니다.",
    level: "HSK1",
  },
  {
    pattern: "명사 + 的 + 명사",
    meaning: "~의 (소유·수식)",
    example: "这是我的书。",
    examplePinyin: "Zhè shì wǒ de shū.",
    exampleMeaning: "이것은 제 책입니다.",
    level: "HSK1",
  },
  {
    pattern: "在 + 장소 + 동사",
    meaning: "~에서 ~하다",
    example: "我在家看电视。",
    examplePinyin: "Wǒ zài jiā kàn diànshì.",
    exampleMeaning: "저는 집에서 TV를 봅니다.",
    level: "HSK1",
  },
  {
    pattern: "有 / 没有",
    meaning: "있다 / 없다 (존재·소유)",
    example: "我有两个妹妹。",
    examplePinyin: "Wǒ yǒu liǎng ge mèimei.",
    exampleMeaning: "저는 여동생이 둘 있습니다.",
    level: "HSK1",
  },
];

export const hsk2Grammar: HskGrammar[] = [
  {
    pattern: "동사 + 了",
    meaning: "~했다 (동작의 완료)",
    example: "我吃了早饭。",
    examplePinyin: "Wǒ chī le zǎofàn.",
    exampleMeaning: "저는 아침을 먹었습니다.",
    level: "HSK2",
  },
  {
    pattern: "正在 + 동사 + 呢",
    meaning: "~하는 중이다 (진행)",
    example: "他正在打电话呢。",
    examplePinyin: "Tā zhèngzài dǎ diànhuà ne.",
    exampleMeaning: "그는 지금 전화하는 중입니다.",
    level: "HSK2",
  },
  {
    pattern: "A 比 B + 형용사",
    meaning: "A가 B보다 ~하다 (비교문)",
    example: "今天比昨天冷。",
    examplePinyin: "Jīntiān bǐ zuótiān lěng.",
    exampleMeaning: "오늘이 어제보다 춥습니다.",
    level: "HSK2",
  },
  {
    pattern: "因为 A, 所以 B",
    meaning: "A 때문에 B하다",
    example: "因为下雨，所以我没去。",
    examplePinyin: "Yīnwèi xià yǔ, suǒyǐ wǒ méi qù.",
    exampleMeaning: "비가 와서 저는 가지 않았습니다.",
    level: "HSK2",
  },
  {
    pattern: "동사 + 过",
    meaning: "~해 본 적이 있다 (경험)",
    example: "我去过北京。",
    examplePinyin: "Wǒ qùguo Běijīng.",
    exampleMeaning: "저는 베이징에 가본 적이 있습니다.",
    level: "HSK2",
  },
  {
    pattern: "要 / 想 / 会 + 동사",
    meaning: "~하려 한다 / ~하고 싶다 / ~할 줄 안다",
    example: "我想学汉语。",
    examplePinyin: "Wǒ xiǎng xué Hànyǔ.",
    exampleMeaning: "저는 중국어를 배우고 싶습니다.",
    level: "HSK2",
  },
];

export const hsk3Grammar: HskGrammar[] = [
  {
    pattern: "把 + 목적어 + 동사 + 기타성분",
    meaning: "~을 ~하다 (처치문)",
    example: "请把门关上。",
    examplePinyin: "Qǐng bǎ mén guān shàng.",
    exampleMeaning: "문을 닫아 주세요.",
    level: "HSK3",
  },
  {
    pattern: "被 + 행위자 + 동사",
    meaning: "~에게 ~당하다 (피동문)",
    example: "我的手机被偷了。",
    examplePinyin: "Wǒ de shǒujī bèi tōu le.",
    exampleMeaning: "제 휴대폰을 도둑맞았습니다.",
    level: "HSK3",
  },
  {
    pattern: "동사 + 得 + 정도보어",
    meaning: "~하는 정도가 ~하다",
    example: "他汉语说得很流利。",
    examplePinyin: "Tā Hànyǔ shuō de hěn liúlì.",
    exampleMeaning: "그는 중국어를 유창하게 합니다.",
    level: "HSK3",
  },
  {
    pattern: "一边 A 一边 B",
    meaning: "A하면서 B하다",
    example: "他一边听音乐一边跑步。",
    examplePinyin: "Tā yìbiān tīng yīnyuè yìbiān pǎobù.",
    exampleMeaning: "그는 음악을 들으면서 달립니다.",
    level: "HSK3",
  },
  {
    pattern: "虽然 A, 但是 B",
    meaning: "비록 A지만 B하다",
    example: "虽然很累，但是很开心。",
    examplePinyin: "Suīrán hěn lèi, dànshì hěn kāixīn.",
    exampleMeaning: "힘들지만 즐겁습니다.",
    level: "HSK3",
  },
  {
    pattern: "동사 + 完 / 好 / 到 (결과보어)",
    meaning: "동작의 결과를 나타냄",
    example: "作业我已经写完了。",
    examplePinyin: "Zuòyè wǒ yǐjīng xiě wán le.",
    exampleMeaning: "숙제는 이미 다 썼습니다.",
    level: "HSK3",
  },
];

export const hsk4Grammar: HskGrammar[] = [
  {
    pattern: "不但 A, 而且 B",
    meaning: "A뿐만 아니라 B하기까지 하다",
    example: "他不但会说汉语，而且说得很好。",
    examplePinyin: "Tā búdàn huì shuō Hànyǔ, érqiě shuō de hěn hǎo.",
    exampleMeaning: "그는 중국어를 할 줄 알 뿐 아니라 잘하기까지 합니다.",
    level: "HSK4",
  },
  {
    pattern: "只要 A, 就 B",
    meaning: "A하기만 하면 B하다",
    example: "只要努力，就一定能成功。",
    examplePinyin: "Zhǐyào nǔlì, jiù yídìng néng chénggōng.",
    exampleMeaning: "노력하기만 하면 반드시 성공할 수 있습니다.",
    level: "HSK4",
  },
  {
    pattern: "无论 A, 都 B",
    meaning: "A와 상관없이 B하다",
    example: "无论多忙，我都会去。",
    examplePinyin: "Wúlùn duō máng, wǒ dōu huì qù.",
    exampleMeaning: "아무리 바빠도 저는 갈 겁니다.",
    level: "HSK4",
  },
  {
    pattern: "동사 + 得/不 + 방향·가능보어",
    meaning: "~할 수 있다 / 없다 (가능보어)",
    example: "这么多菜，我吃不完。",
    examplePinyin: "Zhème duō cài, wǒ chī bu wán.",
    exampleMeaning: "이렇게 많은 요리를 저는 다 못 먹습니다.",
    level: "HSK4",
  },
  {
    pattern: "既然 A, 就 B",
    meaning: "A한 이상 B하자",
    example: "既然来了，就好好玩吧。",
    examplePinyin: "Jìrán lái le, jiù hǎohāo wán ba.",
    exampleMeaning: "이왕 왔으니 즐겁게 놀자.",
    level: "HSK4",
  },
  {
    pattern: "是 ... 的",
    meaning: "이미 일어난 일의 시간·장소·방식을 강조",
    example: "我是坐飞机来的。",
    examplePinyin: "Wǒ shì zuò fēijī lái de.",
    exampleMeaning: "저는 비행기를 타고 왔습니다.",
    level: "HSK4",
  },
];

export const hsk5Grammar: HskGrammar[] = [
  {
    pattern: "宁可 A, 也不 B",
    meaning: "차라리 A할지언정 B하지 않겠다",
    example: "我宁可走路，也不坐那趟车。",
    examplePinyin: "Wǒ nìngkě zǒulù, yě bù zuò nà tàng chē.",
    exampleMeaning: "차라리 걷지, 그 차는 타지 않겠습니다.",
    level: "HSK5",
  },
  {
    pattern: "与其 A, 不如 B",
    meaning: "A하느니 차라리 B하는 게 낫다",
    example: "与其抱怨，不如行动。",
    examplePinyin: "Yǔqí bàoyuàn, bùrú xíngdòng.",
    exampleMeaning: "불평하느니 행동하는 게 낫습니다.",
    level: "HSK5",
  },
  {
    pattern: "在 ... 上/中/下",
    meaning: "~한 측면에서 / 상황에서",
    example: "在这个问题上，我们意见一致。",
    examplePinyin: "Zài zhège wèntí shàng, wǒmen yìjiàn yízhì.",
    exampleMeaning: "이 문제에 있어서 우리 의견은 일치합니다.",
    level: "HSK5",
  },
  {
    pattern: "并 / 却 + 술어",
    meaning: "결코 ~하지 않다 / 오히려 ~하다 (어감 강조)",
    example: "这件事并不简单。",
    examplePinyin: "Zhè jiàn shì bìng bù jiǎndān.",
    exampleMeaning: "이 일은 결코 간단하지 않습니다.",
    level: "HSK5",
  },
  {
    pattern: "以 A 为 B",
    meaning: "A를 B로 삼다",
    example: "公司以质量为核心。",
    examplePinyin: "Gōngsī yǐ zhìliàng wéi héxīn.",
    exampleMeaning: "회사는 품질을 핵심으로 삼습니다.",
    level: "HSK5",
  },
];

export const hsk6Grammar: HskGrammar[] = [
  {
    pattern: "鉴于 A, B",
    meaning: "A에 비추어 B하다 (문어체)",
    example: "鉴于市场变化，公司调整了策略。",
    examplePinyin: "Jiànyú shìchǎng biànhuà, gōngsī tiáozhěng le cèlüè.",
    exampleMeaning: "시장 변화에 비추어 회사는 전략을 조정했습니다.",
    level: "HSK6",
  },
  {
    pattern: "不至于",
    meaning: "~할 정도까지는 아니다",
    example: "情况还不至于那么糟糕。",
    examplePinyin: "Qíngkuàng hái búzhìyú nàme zāogāo.",
    exampleMeaning: "상황이 그 정도로 나쁘지는 않습니다.",
    level: "HSK6",
  },
  {
    pattern: "唯有 A, 才 B",
    meaning: "오직 A해야만 B하다",
    example: "唯有坚持，才能看到成果。",
    examplePinyin: "Wéiyǒu jiānchí, cái néng kàndào chéngguǒ.",
    exampleMeaning: "꾸준히 해야만 성과를 볼 수 있습니다.",
    level: "HSK6",
  },
  {
    pattern: "A 之所以 B, 是因为 C",
    meaning: "A가 B한 것은 C 때문이다",
    example: "他之所以成功，是因为从不放弃。",
    examplePinyin: "Tā zhī suǒyǐ chénggōng, shì yīnwèi cóng bù fàngqì.",
    exampleMeaning: "그가 성공한 것은 결코 포기하지 않았기 때문입니다.",
    level: "HSK6",
  },
  {
    pattern: "即便 A, 也 B",
    meaning: "설령 A하더라도 B하다",
    example: "即便失败，也值得一试。",
    examplePinyin: "Jíbiàn shībài, yě zhídé yí shì.",
    exampleMeaning: "설령 실패하더라도 시도해 볼 가치가 있습니다.",
    level: "HSK6",
  },
];

export type HskLevelInfo = {
  level: HskLevel;
  href: string;
  label: string;
  vocab: string;
  target: string;
  passLine: string;
  duration: string;
  description: string;
  color: string;
  words: HskWord[];
  grammar: HskGrammar[];
};

export const hskLevels: HskLevelInfo[] = [
  {
    level: "HSK1",
    href: "/hsk",
    label: "HSK 1급",
    vocab: "150단어",
    target: "입문 — 인사와 자기소개",
    passLine: "120점 / 200점",
    duration: "약 40분",
    description:
      "병음을 함께 제공하는 유일한 급수입니다. 인사, 숫자, 날짜, 가족처럼 생존 표현 위주로 출제됩니다.",
    color: "bg-red-50 border-red-200 text-red-700",
    words: hsk1Words,
    grammar: hsk1Grammar,
  },
  {
    level: "HSK2",
    href: "/hsk/2",
    label: "HSK 2급",
    vocab: "300단어",
    target: "기초 — 일상 대화",
    passLine: "120점 / 200점",
    duration: "약 55분",
    description:
      "쇼핑, 길 찾기, 식당 주문 같은 일상 상황을 다룹니다. 了·过 같은 기초 시제 표현이 등장합니다.",
    color: "bg-orange-50 border-orange-200 text-orange-700",
    words: hsk2Words,
    grammar: hsk2Grammar,
  },
  {
    level: "HSK3",
    href: "/hsk/3",
    label: "HSK 3급",
    vocab: "600단어",
    target: "초중급 — 중국 생활 가능",
    passLine: "180점 / 300점",
    duration: "약 90분",
    description:
      "쓰기 영역이 처음 등장합니다. 把자문, 被자문, 보어가 본격적으로 나오는 첫 관문입니다.",
    color: "bg-amber-50 border-amber-200 text-amber-700",
    words: hsk3Words,
    grammar: hsk3Grammar,
  },
  {
    level: "HSK4",
    href: "/hsk/4",
    label: "HSK 4급",
    vocab: "1,200단어",
    target: "중급 — 취업·교환학생 기준선",
    passLine: "180점 / 300점",
    duration: "약 105분",
    description:
      "국내 기업 채용과 교환학생 지원에서 가장 많이 요구하는 급수입니다. 접속사와 복문이 핵심입니다.",
    color: "bg-emerald-50 border-emerald-200 text-emerald-700",
    words: hsk4Words,
    grammar: hsk4Grammar,
  },
  {
    level: "HSK5",
    href: "/hsk/5",
    label: "HSK 5급",
    vocab: "2,500단어",
    target: "중상급 — 신문·드라마 이해",
    passLine: "180점 / 300점",
    duration: "약 125분",
    description:
      "중국 대학 학부 입학과 주재원 요건으로 자주 쓰입니다. 독해 지문 길이가 크게 늘어납니다.",
    color: "bg-sky-50 border-sky-200 text-sky-700",
    words: hsk5Words,
    grammar: hsk5Grammar,
  },
  {
    level: "HSK6",
    href: "/hsk/6",
    label: "HSK 6급",
    vocab: "5,000단어 이상",
    target: "고급 — 원어민 수준 문어체",
    passLine: "180점 / 300점",
    duration: "약 140분",
    description:
      "성어와 문어체 표현이 대량으로 나옵니다. 쓰기는 1,000자 지문을 읽고 400자로 요약하는 형식입니다.",
    color: "bg-violet-50 border-violet-200 text-violet-700",
    words: hsk6Words,
    grammar: hsk6Grammar,
  },
];

export const allHskWords: HskWord[] = [
  ...hsk1Words,
  ...hsk2Words,
  ...hsk3Words,
  ...hsk4Words,
  ...hsk5Words,
  ...hsk6Words,
];
