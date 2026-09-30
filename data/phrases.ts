export type Phrase = {
  chinese: string;
  pinyin: string;
  meaning: string;
};

export type PhraseSection = {
  id: string;
  icon: string;
  title: string;
  description: string;
  phrases: Phrase[];
};

/** 여행 중국어 — 공항, 숙소, 식당, 쇼핑, 긴급상황 */
export const travelSections: PhraseSection[] = [
  {
    id: "airport",
    icon: "✈",
    title: "공항 / 교통",
    description: "입국 심사부터 시내 이동까지 가장 먼저 쓰게 되는 표현입니다.",
    phrases: [
      { chinese: "请出示护照。", pinyin: "Qǐng chūshì hùzhào.", meaning: "여권을 보여 주세요." },
      { chinese: "我来旅游。", pinyin: "Wǒ lái lǚyóu.", meaning: "관광하러 왔습니다." },
      { chinese: "我要托运行李。", pinyin: "Wǒ yào tuōyùn xíngli.", meaning: "짐을 부치고 싶습니다." },
      { chinese: "登机口在哪儿？", pinyin: "Dēngjīkǒu zài nǎr?", meaning: "탑승 게이트가 어디예요?" },
      { chinese: "地铁站怎么走？", pinyin: "Dìtiě zhàn zěnme zǒu?", meaning: "지하철역은 어떻게 가나요?" },
      { chinese: "我要去这个地址。", pinyin: "Wǒ yào qù zhège dìzhǐ.", meaning: "이 주소로 가 주세요." },
      { chinese: "打表，谢谢。", pinyin: "Dǎ biǎo, xièxie.", meaning: "미터기 켜 주세요." },
      { chinese: "在这儿停就行。", pinyin: "Zài zhèr tíng jiù xíng.", meaning: "여기서 세워 주세요." },
    ],
  },
  {
    id: "hotel",
    icon: "🏨",
    title: "숙소",
    description: "체크인, 객실 요청, 체크아웃까지 호텔에서 필요한 문장입니다.",
    phrases: [
      { chinese: "我要办入住。", pinyin: "Wǒ yào bàn rùzhù.", meaning: "체크인하려고 합니다." },
      { chinese: "我预订了一个房间。", pinyin: "Wǒ yùdìng le yí ge fángjiān.", meaning: "방을 예약했습니다." },
      { chinese: "无线网密码是多少？", pinyin: "Wúxiànwǎng mìmǎ shì duōshao?", meaning: "와이파이 비밀번호가 뭐예요?" },
      { chinese: "可以再给我一条毛巾吗？", pinyin: "Kěyǐ zài gěi wǒ yì tiáo máojīn ma?", meaning: "수건 하나 더 주실 수 있나요?" },
      { chinese: "空调怎么开？", pinyin: "Kōngtiáo zěnme kāi?", meaning: "에어컨은 어떻게 켜나요?" },
      { chinese: "几点退房？", pinyin: "Jǐ diǎn tuìfáng?", meaning: "체크아웃은 몇 시예요?" },
      { chinese: "可以寄存行李吗？", pinyin: "Kěyǐ jìcún xíngli ma?", meaning: "짐을 맡길 수 있나요?" },
      { chinese: "附近有便利店吗？", pinyin: "Fùjìn yǒu biànlìdiàn ma?", meaning: "근처에 편의점이 있나요?" },
    ],
  },
  {
    id: "restaurant",
    icon: "🥢",
    title: "식당",
    description: "주문부터 계산까지, 식당에서 실제로 오가는 대화입니다.",
    phrases: [
      { chinese: "两位。", pinyin: "Liǎng wèi.", meaning: "두 명입니다." },
      { chinese: "请给我菜单。", pinyin: "Qǐng gěi wǒ càidān.", meaning: "메뉴판 주세요." },
      { chinese: "有什么推荐的？", pinyin: "Yǒu shénme tuījiàn de?", meaning: "추천 메뉴가 뭐예요?" },
      { chinese: "我要这个。", pinyin: "Wǒ yào zhège.", meaning: "이걸로 주세요." },
      { chinese: "不要辣，不要香菜。", pinyin: "Bú yào là, bú yào xiāngcài.", meaning: "맵지 않게, 고수 빼 주세요." },
      { chinese: "请给我一杯冰水。", pinyin: "Qǐng gěi wǒ yì bēi bīngshuǐ.", meaning: "찬물 한 잔 주세요." },
      { chinese: "打包，谢谢。", pinyin: "Dǎbāo, xièxie.", meaning: "포장해 주세요." },
      { chinese: "服务员，买单！", pinyin: "Fúwùyuán, mǎidān!", meaning: "저기요, 계산해 주세요!" },
    ],
  },
  {
    id: "shopping",
    icon: "🛍",
    title: "쇼핑",
    description: "가격 묻기, 흥정, 결제까지 쇼핑에 필요한 표현입니다.",
    phrases: [
      { chinese: "这个多少钱？", pinyin: "Zhège duōshao qián?", meaning: "이거 얼마예요?" },
      { chinese: "太贵了，便宜一点吧。", pinyin: "Tài guì le, piányi yìdiǎn ba.", meaning: "너무 비싸요, 좀 깎아 주세요." },
      { chinese: "可以试穿吗？", pinyin: "Kěyǐ shìchuān ma?", meaning: "입어봐도 되나요?" },
      { chinese: "有大一号的吗？", pinyin: "Yǒu dà yí hào de ma?", meaning: "한 사이즈 큰 거 있나요?" },
      { chinese: "有别的颜色吗？", pinyin: "Yǒu bié de yánsè ma?", meaning: "다른 색깔 있나요?" },
      { chinese: "可以刷卡吗？", pinyin: "Kěyǐ shuākǎ ma?", meaning: "카드 결제 되나요?" },
      { chinese: "我扫你还是你扫我？", pinyin: "Wǒ sǎo nǐ háishi nǐ sǎo wǒ?", meaning: "제가 스캔할까요, 스캔해 주실래요?" },
      { chinese: "可以退换吗？", pinyin: "Kěyǐ tuìhuàn ma?", meaning: "환불이나 교환 되나요?" },
    ],
  },
  {
    id: "emergency",
    icon: "🆘",
    title: "긴급 상황",
    description: "몸이 아프거나 문제가 생겼을 때 바로 꺼내 쓸 문장입니다.",
    phrases: [
      { chinese: "救命！", pinyin: "Jiùmìng!", meaning: "살려 주세요!" },
      { chinese: "请帮帮我。", pinyin: "Qǐng bāngbang wǒ.", meaning: "도와주세요." },
      { chinese: "我身体不舒服。", pinyin: "Wǒ shēntǐ bù shūfu.", meaning: "몸이 좋지 않습니다." },
      { chinese: "请叫救护车。", pinyin: "Qǐng jiào jiùhùchē.", meaning: "구급차를 불러 주세요." },
      { chinese: "医院在哪儿？", pinyin: "Yīyuàn zài nǎr?", meaning: "병원이 어디예요?" },
      { chinese: "我的钱包丢了。", pinyin: "Wǒ de qiánbāo diū le.", meaning: "지갑을 잃어버렸습니다." },
      { chinese: "请报警。", pinyin: "Qǐng bàojǐng.", meaning: "경찰을 불러 주세요." },
      { chinese: "我不会说中文。", pinyin: "Wǒ bú huì shuō Zhōngwén.", meaning: "중국어를 할 줄 모릅니다." },
    ],
  },
];

/** 기본 소통 중국어 — 인사, 자기소개, 질문, 감정, 시간·숫자 */
export const basicSections: PhraseSection[] = [
  {
    id: "greeting",
    icon: "👋",
    title: "인사와 작별",
    description: "만나고 헤어질 때 쓰는 가장 기본적인 표현입니다.",
    phrases: [
      { chinese: "你好！", pinyin: "Nǐ hǎo!", meaning: "안녕하세요!" },
      { chinese: "您好！", pinyin: "Nín hǎo!", meaning: "안녕하세요! (존칭)" },
      { chinese: "早上好。", pinyin: "Zǎoshang hǎo.", meaning: "좋은 아침입니다." },
      { chinese: "好久不见。", pinyin: "Hǎojiǔ bú jiàn.", meaning: "오랜만이에요." },
      { chinese: "最近怎么样？", pinyin: "Zuìjìn zěnmeyàng?", meaning: "요즘 어떻게 지내세요?" },
      { chinese: "再见。", pinyin: "Zàijiàn.", meaning: "안녕히 가세요." },
      { chinese: "明天见。", pinyin: "Míngtiān jiàn.", meaning: "내일 봐요." },
      { chinese: "路上小心。", pinyin: "Lùshang xiǎoxīn.", meaning: "조심히 가세요." },
    ],
  },
  {
    id: "introduce",
    icon: "🙋",
    title: "자기소개",
    description: "이름, 국적, 직업을 말하고 상대에게 묻는 표현입니다.",
    phrases: [
      { chinese: "我叫金珉洙。", pinyin: "Wǒ jiào Jīn Mínzhū.", meaning: "제 이름은 김민수입니다." },
      { chinese: "你叫什么名字？", pinyin: "Nǐ jiào shénme míngzi?", meaning: "이름이 뭐예요?" },
      { chinese: "我是韩国人。", pinyin: "Wǒ shì Hánguó rén.", meaning: "저는 한국인입니다." },
      { chinese: "你是哪国人？", pinyin: "Nǐ shì nǎ guó rén?", meaning: "어느 나라 사람이세요?" },
      { chinese: "我是学生。", pinyin: "Wǒ shì xuésheng.", meaning: "저는 학생입니다." },
      { chinese: "我在学汉语。", pinyin: "Wǒ zài xué Hànyǔ.", meaning: "저는 중국어를 배우고 있습니다." },
      { chinese: "认识你很高兴。", pinyin: "Rènshi nǐ hěn gāoxìng.", meaning: "만나서 반갑습니다." },
      { chinese: "请多关照。", pinyin: "Qǐng duō guānzhào.", meaning: "잘 부탁드립니다." },
    ],
  },
  {
    id: "question",
    icon: "❓",
    title: "묻고 답하기",
    description: "무엇·어디·언제·왜를 묻는 의문사 문장입니다.",
    phrases: [
      { chinese: "这是什么？", pinyin: "Zhè shì shénme?", meaning: "이게 뭐예요?" },
      { chinese: "洗手间在哪儿？", pinyin: "Xǐshǒujiān zài nǎr?", meaning: "화장실이 어디예요?" },
      { chinese: "现在几点？", pinyin: "Xiànzài jǐ diǎn?", meaning: "지금 몇 시예요?" },
      { chinese: "为什么？", pinyin: "Wèishénme?", meaning: "왜요?" },
      { chinese: "怎么办？", pinyin: "Zěnme bàn?", meaning: "어떻게 하죠?" },
      { chinese: "可以吗？", pinyin: "Kěyǐ ma?", meaning: "괜찮을까요? / 되나요?" },
      { chinese: "什么意思？", pinyin: "Shénme yìsi?", meaning: "무슨 뜻이에요?" },
      { chinese: "请再说一遍。", pinyin: "Qǐng zài shuō yí biàn.", meaning: "다시 한 번 말씀해 주세요." },
    ],
  },
  {
    id: "feeling",
    icon: "😊",
    title: "감정과 반응",
    description: "동의, 사양, 감사, 사과 같은 반응 표현입니다.",
    phrases: [
      { chinese: "太好了！", pinyin: "Tài hǎo le!", meaning: "정말 잘됐네요!" },
      { chinese: "没问题。", pinyin: "Méi wèntí.", meaning: "문제없어요." },
      { chinese: "我同意。", pinyin: "Wǒ tóngyì.", meaning: "동의합니다." },
      { chinese: "不用了，谢谢。", pinyin: "Bú yòng le, xièxie.", meaning: "괜찮습니다, 감사합니다." },
      { chinese: "对不起，我错了。", pinyin: "Duìbuqǐ, wǒ cuò le.", meaning: "죄송합니다, 제가 잘못했습니다." },
      { chinese: "没关系。", pinyin: "Méi guānxi.", meaning: "괜찮아요." },
      { chinese: "真可惜。", pinyin: "Zhēn kěxī.", meaning: "정말 아쉽네요." },
      { chinese: "加油！", pinyin: "Jiāyóu!", meaning: "힘내세요!" },
    ],
  },
  {
    id: "number",
    icon: "🔢",
    title: "숫자와 시간",
    description: "가격, 날짜, 시간을 말할 때 쓰는 기초 표현입니다.",
    phrases: [
      { chinese: "一、二、三、四、五", pinyin: "yī, èr, sān, sì, wǔ", meaning: "1, 2, 3, 4, 5" },
      { chinese: "六、七、八、九、十", pinyin: "liù, qī, bā, jiǔ, shí", meaning: "6, 7, 8, 9, 10" },
      { chinese: "一百块", pinyin: "yìbǎi kuài", meaning: "100위안" },
      { chinese: "今天几号？", pinyin: "Jīntiān jǐ hào?", meaning: "오늘 며칠이에요?" },
      { chinese: "星期一", pinyin: "xīngqīyī", meaning: "월요일" },
      { chinese: "上午九点", pinyin: "shàngwǔ jiǔ diǎn", meaning: "오전 9시" },
      { chinese: "半个小时", pinyin: "bàn ge xiǎoshí", meaning: "30분" },
      { chinese: "明年", pinyin: "míngnián", meaning: "내년" },
    ],
  },
];

/** 비즈니스 중국어 — 미팅, 메일, 전화, 협상, 회식 */
export const businessSections: PhraseSection[] = [
  {
    id: "meeting",
    icon: "🤝",
    title: "첫 미팅과 소개",
    description: "명함 교환과 자기소개로 시작하는 비즈니스 첫 자리입니다.",
    phrases: [
      { chinese: "这是我的名片。", pinyin: "Zhè shì wǒ de míngpiàn.", meaning: "제 명함입니다." },
      { chinese: "我是韩国○○公司的金部长。", pinyin: "Wǒ shì Hánguó ○○ gōngsī de Jīn bùzhǎng.", meaning: "저는 한국 ○○사의 김 부장입니다." },
      { chinese: "久仰久仰。", pinyin: "Jiǔyǎng jiǔyǎng.", meaning: "말씀 많이 들었습니다." },
      { chinese: "感谢您抽出时间。", pinyin: "Gǎnxiè nín chōuchū shíjiān.", meaning: "시간 내주셔서 감사합니다." },
      { chinese: "我来介绍一下。", pinyin: "Wǒ lái jièshào yíxià.", meaning: "제가 소개해 드리겠습니다." },
      { chinese: "希望以后多多合作。", pinyin: "Xīwàng yǐhòu duōduō hézuò.", meaning: "앞으로 많은 협력 기대하겠습니다." },
    ],
  },
  {
    id: "presentation",
    icon: "📊",
    title: "회의와 발표",
    description: "안건을 제시하고 의견을 주고받을 때 쓰는 표현입니다.",
    phrases: [
      { chinese: "今天的主题是……", pinyin: "Jīntiān de zhǔtí shì……", meaning: "오늘의 주제는 …입니다." },
      { chinese: "我想补充一点。", pinyin: "Wǒ xiǎng bǔchōng yìdiǎn.", meaning: "한 가지 덧붙이고 싶습니다." },
      { chinese: "关于这个问题，我的看法是……", pinyin: "Guānyú zhège wèntí, wǒ de kànfǎ shì……", meaning: "이 문제에 대한 제 견해는 …입니다." },
      { chinese: "我们再讨论一下。", pinyin: "Wǒmen zài tǎolùn yíxià.", meaning: "조금 더 논의해 봅시다." },
      { chinese: "请问还有什么问题吗？", pinyin: "Qǐngwèn hái yǒu shénme wèntí ma?", meaning: "더 질문 있으신가요?" },
      { chinese: "我们下次再定。", pinyin: "Wǒmen xiàcì zài dìng.", meaning: "다음에 다시 정하시죠." },
    ],
  },
  {
    id: "phone",
    icon: "📞",
    title: "전화와 메시지",
    description: "전화 응대와 위챗 업무 메시지에서 쓰는 표현입니다.",
    phrases: [
      { chinese: "喂，您好。", pinyin: "Wéi, nín hǎo.", meaning: "여보세요, 안녕하세요." },
      { chinese: "请问您是哪位？", pinyin: "Qǐngwèn nín shì nǎ wèi?", meaning: "실례지만 누구시죠?" },
      { chinese: "他现在不在，需要留言吗？", pinyin: "Tā xiànzài bú zài, xūyào liúyán ma?", meaning: "지금 자리에 안 계신데 메모 남기시겠어요?" },
      { chinese: "我稍后回复您。", pinyin: "Wǒ shāo hòu huífù nín.", meaning: "잠시 후 답변드리겠습니다." },
      { chinese: "文件已经发到您的邮箱了。", pinyin: "Wénjiàn yǐjīng fā dào nín de yóuxiāng le.", meaning: "파일은 메일로 보내드렸습니다." },
      { chinese: "麻烦您确认一下。", pinyin: "Máfan nín quèrèn yíxià.", meaning: "확인 부탁드립니다." },
    ],
  },
  {
    id: "negotiation",
    icon: "📝",
    title: "협상과 계약",
    description: "가격과 조건을 조율하는 자리에서 쓰는 표현입니다.",
    phrases: [
      { chinese: "价格方面还有商量的余地吗？", pinyin: "Jiàgé fāngmiàn hái yǒu shāngliang de yúdì ma?", meaning: "가격은 조정의 여지가 있을까요?" },
      { chinese: "交货期是什么时候？", pinyin: "Jiāohuòqī shì shénme shíhou?", meaning: "납기는 언제인가요?" },
      { chinese: "我们需要再研究一下。", pinyin: "Wǒmen xūyào zài yánjiū yíxià.", meaning: "내부적으로 검토가 더 필요합니다." },
      { chinese: "这个条件我们可以接受。", pinyin: "Zhège tiáojiàn wǒmen kěyǐ jiēshòu.", meaning: "그 조건은 수용 가능합니다." },
      { chinese: "合同什么时候签？", pinyin: "Hétong shénme shíhou qiān?", meaning: "계약은 언제 체결하나요?" },
      { chinese: "希望双方共赢。", pinyin: "Xīwàng shuāngfāng gòngyíng.", meaning: "양측 모두에게 이익이 되기를 바랍니다." },
    ],
  },
  {
    id: "dinner",
    icon: "🍶",
    title: "회식과 접대",
    description: "중국 비즈니스에서 관계를 만드는 자리, 술자리 표현입니다.",
    phrases: [
      { chinese: "我敬您一杯。", pinyin: "Wǒ jìng nín yì bēi.", meaning: "한 잔 올리겠습니다." },
      { chinese: "干杯！", pinyin: "Gānbēi!", meaning: "건배! (잔을 비웁니다)" },
      { chinese: "随意就好。", pinyin: "Suíyì jiù hǎo.", meaning: "편하신 만큼만 드세요." },
      { chinese: "我不太能喝酒。", pinyin: "Wǒ bú tài néng hē jiǔ.", meaning: "술을 잘 못 마십니다." },
      { chinese: "我以茶代酒。", pinyin: "Wǒ yǐ chá dài jiǔ.", meaning: "술 대신 차로 대신하겠습니다." },
      { chinese: "今天我请客。", pinyin: "Jīntiān wǒ qǐngkè.", meaning: "오늘은 제가 대접하겠습니다." },
    ],
  },
];
