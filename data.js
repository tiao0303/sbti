// SBTI Questions - 31 questions mapped to 15 dimensions
const questions = [
  // S1 自信心 (3 questions)
  { q: "当众发表演讲时，你通常的感受是？", options: ["自信满满，掌控全场", "有点紧张但能完成", "极度恐惧，想逃跑"], dimension: "S1" },
  { q: "面对一个困难的新任务，你会？", options: ["相信自己一定能搞定", "先试试看，不行再说", "觉得自己肯定做不好"], dimension: "S1" },
  { q: "别人夸奖你时，你的反应是？", options: ["欣然接受，觉得说得对", "谦虚一下", "觉得对方在说客套话"], dimension: "S1" },
  
  // S2 自我意识 (3 questions)
  { q: "你能清楚地说出自己的优缺点吗？", options: ["当然，了如指掌", "大概知道一些", "不太确定自己是什么样的人"], dimension: "S2" },
  { q: "你在人群中更容易被称为什么？", options: ["有主见的", "随和的", "不太了解自己"], dimension: "S2" },
  { q: "你对自己的情绪变化有察觉吗？", options: ["很清楚，能及时调整", "事后能反应过来", "经常事后才发现自己情绪不对"], dimension: "S2" },
  
  // S3 自律能力 (3 questions)
  { q: "制定了计划后，你的执行情况通常是？", options: ["说到做到，坚决执行", "看心情，有时候会拖延", "计划赶不上变化"], dimension: "S3" },
  { q: "面对诱惑（比如美食、游戏），你的自控力如何？", options: ["轻松抵制，目标明确", "努力抵制但偶尔失败", "完全控制不住"], dimension: "S3" },
  { q: "你能在没人监督的情况下完成工作吗？", options: ["完全可以自律", "可能会摸鱼一下", "没有监督就完全不想动"], dimension: "S3" },
  
  // E1 依恋安全感 (3 questions)
  { q: "在一段亲密关系中，你通常的感受是？", options: ["安全、信任、踏实", "时而怀疑、时而确信", "经常担心对方会离开"], dimension: "E1" },
  { q: "当伴侣没有及时回复消息时，你会？", options: ["继续做自己的事", "有点在意但能理解", "疯狂发消息确认"], dimension: "E1" },
  { q: "你对未来的感情生活感到？", options: ["充满期待", "有点不确定", "不敢期待，怕失望"], dimension: "E1" },
  
  // E2 情绪波动 (3 questions)
  { q: "你的情绪变化频率大概是？", options: ["比较稳定，起伏不大", "偶尔波动", "经常大起大落"], dimension: "E2" },
  { q: "看一部感人的电影，你会？", options: ["淡定观看，略有触动", "跟着剧情哭笑", "哭得稀里哗啦停不下来"], dimension: "E2" },
  { q: "别人说你情绪化时，你的反应是？", options: ["不认同，我挺理性的", "有时候确实如此", "完全同意，我自己也受不了"], dimension: "E2" },
  
  // E3 情绪管理 (3 questions)
  { q: "当你非常愤怒时，通常会？", options: ["冷静分析，理性表达", "先冷静一会儿再说", "当场爆发或生闷气很久"], dimension: "E3" },
  { q: "遇到挫折时，你通常能快速调整吗？", options: ["是的，能迅速恢复", "需要一些时间", "会陷入低落很久"], dimension: "E3" },
  { q: "周围人对你情绪管理能力的评价是？", options: ["稳重可靠", "还行吧", "需要改进"], dimension: "E3" },
  
  // A1 共情力 (3 questions)
  { q: "看到陌生人摔倒，你会？", options: ["立刻上前帮忙", "犹豫一下然后去帮", "假装没看见"], dimension: "A1" },
  { q: "朋友向你倾诉烦恼时，你通常会？", options: ["认真倾听并安慰", "给一些建议", "不知道该说什么"], dimension: "A1" },
  { q: "你能很容易地感受到别人的情绪吗？", options: ["完全可以，很敏感", "有时候能感受到", "比较迟钝"], dimension: "A1" },
  
  // A2 信任倾向 (3 questions)
  { q: "面对一个新认识的人，你的初始态度是？", options: ["先相信再说", "保持中立观察", "先怀疑再慢慢信任"], dimension: "A2" },
  { q: "你更容易相信？", options: ["人性本善", "看情况", "人性本恶"], dimension: "A2" },
  { q: "朋友向你借大额钱款，你会？", options: ["二话不说借", "犹豫一下还是借", "坚决不借"], dimension: "A2" },
  
  // A3 合作意愿 (3 questions)
  { q: "团队项目中，你更喜欢？", options: ["主导整个项目", "分工合作各司其职", "自己单独做"], dimension: "A3" },
  { q: "当意见不合时，你会？", options: ["倾听他人并寻求共识", "坚持自己的观点", "不想参与争论"], dimension: "A3" },
  { q: "集体活动中，你的状态通常是？", options: ["积极参与者", "配合完成分配的任务", "能不来就不来"], dimension: "A3" },
  
  // AC1 执行力 (3 questions)
  { q: "有了一个好点子，你通常会？", options: ["立刻付诸行动", "先规划再行动", "想想就算了"], dimension: "AC1" },
  { q: "做事情的时候，你更倾向于？", options: ["先做完再说", "边想边做", "想清楚再开始"], dimension: "AC1" },
  { q: "面对截止日期，你的状态是？", options: ["提前完成，绰绰有余", "刚好按时", "总是踩点或拖延"], dimension: "AC1" },
  
  // AC2 策略思维 (3 questions)
  { q: "解决问题时，你习惯？", options: ["快速找到突破口", "多方面权衡后决定", "凭感觉走一步看一步"], dimension: "AC2" },
  { q: "你做事之前会制定详细计划吗？", options: ["一定会，谋定后动", "大概规划一下", "随机应变"], dimension: "AC2" },
  { q: "在复杂情况下，你能快速理清头绪吗？", options: ["完全可以，逻辑清晰", "需要时间分析", "经常脑子一片空白"], dimension: "AC2" },
  
  // AC3 抗压力 (3 questions)
  { q: "当压力很大时，你会？", options: ["迎难而上，化压力为动力", "先休息一下再处理", "想逃避或崩溃"], dimension: "AC3" },
  { q: "遭遇失败后，你通常会？", options: ["总结教训，继续前行", "需要一段时间恢复", "一蹶不振很久"], dimension: "AC3" },
  { q: "面对突发状况，你的反应是？", options: ["冷静应对，迅速调整", "有点慌但能处理", "完全慌了不知所措"], dimension: "AC3" },
  
  // SO1 社交意愿 (3 questions)
  { q: "周末你更愿意？", options: ["参加社交活动认识新朋友", "和几个熟悉的朋友聚聚", "一个人待着或在家"], dimension: "SO1" },
  { q: "在派对上，你通常是？", options: ["自来熟，和谁都能聊", "找熟人待着", "角落里刷手机"], dimension: "SO1" },
  { q: "你会主动联系很久没联系的朋友吗？", options: ["经常主动联系", "偶尔会想起", "一般不会主动"], dimension: "SO1" },
  
  // SO2 独立性 (3 questions)
  { q: "做重大决定时，你通常会？", options: ["自己拿主意", "听听意见再决定", "依赖别人帮我决定"], dimension: "SO2" },
  { q: "一个人独自旅行对你来说？", options: ["很享受，很自在", "可以接受", "有点害怕不敢"], dimension: "SO2" },
  { q: "当所有人都和你意见不同时，你会？", options: ["坚持自己认为对的", "犹豫但还是坚持", "放弃自己的想法"], dimension: "SO2" },
  
  // SO3 表达欲 (3 questions)
  { q: "在社交媒体上，你通常？", options: ["经常分享生活和观点", "偶尔分享", "基本不分享只看"], dimension: "SO3" },
  { q: "开会讨论时，你会主动发言吗？", options: ["经常主动发言", "被点名才说", "尽量不说话"], dimension: "SO3" },
  { q: "当你有不同的想法时，你会？", options: ["直接说出来", "看情况决定", "憋在心里不说"], dimension: "SO3" }
];

// Personality Types - 27 types
const personalityTypes = {
  "CTRL": {
    name: "拿捏者",
    tagline: "怎么样，被我拿捏了吧？",
    desc: "恭喜您，您测出了全中国最为罕见的人格！CTRL人格是行走的人形自走任务管理器，普通人眼中的「规则」，在您这里只是出厂的基础参数设置。您不仅能拿捏自己，还能拿捏周围的一切——堪称人形精密仪器。",
    color: "#6366f1"
  },
  "ATM-er": {
    name: "送钱者",
    tagline: "你以为我很有钱吗？",
    desc: "恭喜您，您竟然测出了这个世界上最稀有的人格！您或将成为金融界的未解之谜——ATM-er不一定真的「送钱」，但可能永远在「支付」。支付时间、支付精力、支付耐心、支付一个本该安宁的夜晚。",
    color: "#f59e0b"
  },
  "Dior-s": {
    name: "屌丝",
    tagline: "等着我逆袭。",
    desc: "恭喜！您是犬儒主义先贤第欧根尼失散多年的精神传人。Dior-s人格是对当代消费主义陷阱和成功学PUA最彻底的人。你们表面上看似「摆烂」，实则是一种高级的生存策略。",
    color: "#64748b"
  },
  "BOSS": {
    name: "领导者",
    tagline: "方向盘给我，我来开。",
    desc: "BOSS是一个手里永远拿着方向盘的人。哪怕油箱已经亮了红灯，哪怕导航在胡说八道，你都会说：「我来开。」然后真的把车开到了目的地。该人格拥有独立的物理法则——永恒向上定律。",
    color: "#ef4444"
  },
  "THAN-K": {
    name: "感恩者",
    tagline: "我感谢苍天！我感谢大地！",
    desc: "恭喜您，您测出了全中国最为罕见的人格！THAN-K型人格是一种神奇的生物，他们能在任何情况下找到感恩的理由——失业了？感谢有机会重新出发！失恋了？感谢遇到更好的人！",
    color: "#10b981"
  },
  "OH-NO": {
    name: "哦不人",
    tagline: "哦不！我怎么会是这个人格？！",
    desc: "「哦不！」并非恐惧的尖叫，而是一种顶级的智慧！当普通人看到一个杯子放在桌沿，哦不人看到的是一场由「水渍-短路-火灾-世界末日」构成的灾难史诗。",
    color: "#8b5cf6"
  },
  "GOGO": {
    name: "行者",
    tagline: "gogogo~出发咯",
    desc: "GOGO人格的大脑构造与常人有根本性不同。GOGO活在一个极致的「所见即所得」世界里，人生信条简单粗暴：只要我现在出发，路就在脚下。",
    color: "#06b6d4"
  },
  "SEXY": {
    name: "尤物",
    tagline: "您就是天生的尤物！",
    desc: "当您走进一个房间，照明系统会自动将您识别为天生的尤物。当您微笑时，水蒸气都凝结成了人眼中的爱心。SEXY型人格不一定长相惊艳，但一定有一种让人移不开眼的魅力。",
    color: "#ec4899"
  },
  "LOVE-R": {
    name: "多情者",
    tagline: "爱意太满，现实显得有点贫瘠。",
    desc: "LOVE-R人格是远古神话时代幸存至今的珍稀物种。您的情感处理器不是二进制的，而是彩虹制的。一片落叶，在LOVE-R眼里是「这片落叶在风中起舞，像极了我的暗恋」。",
    color: "#f472b6"
  },
  "MUM": {
    name: "妈妈",
    tagline: "或许...我可以叫你妈妈吗....?",
    desc: "恭喜您，您测出了全中国最稀有的妈妈人格！妈妈人格的底色是温柔，擅长感知情绪，具有超强共情力，知道什么时候该停下来，什么时候该抱抱。",
    color: "#fb923c"
  },
  "FAKE": {
    name: "伪人",
    tagline: "已经，没有人类了。",
    desc: "在社交场合，伪人是八面玲珑的存在，因为伪人切换「人格面具」比切换手机输入法还快。上一秒还是「铁哥们」模式，下一秒领导来了，瞬间切换成「沉稳可靠好员工」模式。",
    color: "#a855f7"
  },
  "OJBK": {
    name: "无所谓人",
    tagline: "我说随便，是真的随便。",
    desc: "OJBK已经不是一种人格，而是一种统治哲学！当一个凡人面临「中午吃米饭还是面条」的世纪抉择时，OJBK人格会用一种批阅奏章般的气度说：「随便。」而这个随便，是真的随便。",
    color: "#94a3b8"
  },
  "MALO": {
    name: "吗喽",
    tagline: "人生是个副本，而我只是一只吗喽。",
    desc: "朋友，你不是「童心未泯」，你压根就没进化！你的灵魂还停留在那个挂在树上荡秋千、看见香蕉就两眼放光的快乐时代！",
    color: "#84cc16"
  },
  "JOKE-R": {
    name: "小丑",
    tagline: "原来我们都是小丑。",
    desc: "恭喜您，您竟然测出了这个世界上最稀有的人格！请注意，JOKE-R人格不是一个「人」，他是一个小丑。你打开一层，是个笑话；再打开一层，是个段子；直到最后，你发现最里面……是空的。",
    color: "#facc15"
  },
  "WOC": {
    name: "握草人",
    tagline: "woc，我怎么是这个人格？",
    desc: "WOC!人拥有两种完全独立的操作系统：一个叫「表面系统」，负责发出「woc！」「牛啊！」等拟声词；另一个叫「后台系统」，负责冷静地分析：「嗯，果然不出我所料。」",
    color: "#eab308"
  },
  "THIN-K": {
    name: "思考者",
    tagline: "已深度思考100s。",
    desc: "THIN-K人格的大脑构造与常人有根本性不同。您的大脑时长处于思考状态，您十分会审判信息，注重论点、论据、逻辑推理。",
    color: "#3b82f6"
  },
  "SHIT": {
    name: "愤世者",
    tagline: "这个世界简直是shift。",
    desc: "恭喜您SHIT人格是宇宙中已知的唯一一种稀有人格。SHIT的行为模式是一场惊天动地的悖论戏剧。嘴上：「这个项目简直是屎！」手上：（默默打开电脑继续干）。",
    color: "#78716c"
  },
  "ZZZZ": {
    name: "装死者",
    tagline: "我没死，我只是在睡觉。",
    desc: "恭喜您，您测出了全中国最稀有的装死人格！群里99+条消息您可以视而不见，但当有人发出「@全体成员 还有半小时就截止了」的最后通牒时，您缓缓地敲出一个「收到」。",
    color: "#6b7280"
  },
  "POOR": {
    name: "贫困者",
    tagline: "我穷，但我很专。",
    desc: "恭喜您，您测出了【POOR - 贫困者】。这个「贫困」不是钱包余额的判决书，更像一种欲望断舍离后的资源再分配。别人把精力撒成漫天二维码，你把精力压成一束激光。",
    color: "#a16207"
  },
  "MONK": {
    name: "僧人",
    tagline: "没有那种世俗的欲望。",
    desc: "当别人在KTV里参悟爱与恨的纠缠，MONK人格选择在家中参悟一份大道。MONK已然看破红尘，不希望闲人来扰其清修。",
    color: "#fbbf24"
  },
  "IMSB": {
    name: "傻者",
    tagline: "认真的么？我真的是sb么？",
    desc: "恭喜您！您根本不在人类范畴内！您测出了百万年一遇的【IMSB】人格。IMSB人格的大脑里住着两个不死不休的究极战士：一个叫「我tm冲了！」，另一个叫「我是个sb！」。",
    color: "#dc2626"
  },
  "SOLO": {
    name: "孤儿",
    tagline: "我哭了，我怎么会是孤儿？",
    desc: "恭喜您，您测出了全中国最稀有的【SOLO - 孤儿】人格！别急着哭，国王的加冕仪式，通常都是一个人。孤儿建起了一座名为「莫挨老子」的万里长城。",
    color: "#0ea5e9"
  },
  "FU-K": {
    name: "草者",
    tagline: "wtf?！这是什么人格？",
    desc: "恭喜您！您测出了百万年一遇的【FUCK】人格！人类的文明城市里，出现了一株无法被任何除草剂杀死的、具有超级生命力的人形野草——那就是【草者】人格！",
    color: "#22c55e"
  },
  "DEAD": {
    name: "死者",
    tagline: "我，还活着吗？",
    desc: "恭喜您，您测出了全中国最为罕见的人格，该人格其实也可以叫：Don't Expect Any Drives (别指望起来了)。死者看世界的眼神，就像一位顶级玩家通关了游戏。",
    color: "#1e293b"
  },
  "IMFW": {
    name: "废物",
    tagline: "我真的...是废物吗？",
    desc: "恭喜您，您测出的不是一个人格，您是一种极其珍稀的【废物】！废物们的自尊通常有些脆弱，但废物的内心深处，也燃烧着一颗不甘平庸的心。",
    color: "#57534e"
  },
  "HHHH": {
    name: "傻乐者",
    tagline: "哈哈哈哈哈哈。",
    desc: "恭喜您！由于您的思维回路过于清奇，标准人格库已全面崩溃！第一人格匹配率不足80％，系统只能为您强制匹配这个人格——【HHHH-傻乐者】。哈哈哈哈哈哈哈哈哈哈哈哈！",
    color: "#f875aa"
  },
  "DRUNK": {
    name: "酒鬼",
    tagline: "烈酒烧喉，不得不醉。",
    desc: "您为什么走路摇摇晃晃？您为什么总是情绪高涨？您为什么看东西是重影的？因为您体内流淌的不是血液，是美味的五粮液！是国窖1573！悲伤！快乐！愤怒！",
    color: "#c084fc"
  }
};

// Dimension display names
const dimensionNames = {
  "S1": "自信心",
  "S2": "自我意识",
  "S3": "自律能力",
  "E1": "依恋安全感",
  "E2": "情绪波动",
  "E3": "情绪管理",
  "A1": "共情力",
  "A2": "信任倾向",
  "A3": "合作意愿",
  "AC1": "执行力",
  "AC2": "策略思维",
  "AC3": "抗压力",
  "SO1": "社交意愿",
  "SO2": "独立性",
  "SO3": "表达欲"
};

// Dimension model names
const dimensionModels = {
  "S1": "S", "S2": "S", "S3": "S",
  "E1": "E", "E2": "E", "E3": "E",
  "A1": "A", "A2": "A", "A3": "A",
  "AC1": "AC", "AC2": "AC", "AC3": "AC",
  "SO1": "SO", "SO2": "SO", "SO3": "SO"
};

// Scoring weights for each dimension (0-2 scale)
function calculateScores(answers) {
  const scores = {};
  const dimensions = ["S1", "S2", "S3", "E1", "E2", "E3", "A1", "A2", "A3", "AC1", "AC2", "AC3", "SO1", "SO2", "SO3"];
  
  dimensions.forEach(dim => {
    scores[dim] = 0;
  });
  
  answers.forEach((answer, index) => {
    const dim = questions[index].dimension;
    scores[dim] += answer;
  });
  
  return scores;
}

// Calculate model scores (average of 3 dimensions each)
function calculateModelScores(dimensionScores) {
  return {
    "S": (dimensionScores["S1"] + dimensionScores["S2"] + dimensionScores["S3"]) / 3,
    "E": (dimensionScores["E1"] + dimensionScores["E2"] + dimensionScores["E3"]) / 3,
    "A": (dimensionScores["A1"] + dimensionScores["A2"] + dimensionScores["A3"]) / 3,
    "AC": (dimensionScores["AC1"] + dimensionScores["AC2"] + dimensionScores["AC3"]) / 3,
    "SO": (dimensionScores["SO1"] + dimensionScores["SO2"] + dimensionScores["SO3"]) / 3
  };
}

// Match personality type based on scores
function matchPersonality(dimensionScores, modelScores) {
  const types = Object.keys(personalityTypes);
  
  // Calculate distance to each personality type
  let bestMatch = "CTRL";
  let minDistance = Infinity;
  
  // Get high/low indicators for each model
  const indicators = {};
  Object.keys(modelScores).forEach(model => {
    indicators[model] = modelScores[model] >= 1 ? "H" : "L";
  });
  
  // Special case matching based on indicators
  const indicatorStr = indicators.S + indicators.E + indicators.A + indicators.AC + indicators.SO;
  
  // Custom matching logic based on dimension combinations
  const totalScore = Object.values(dimensionScores).reduce((a, b) => a + b, 0);
  const avgScore = totalScore / 15;
  
  // High S (self-awareness) combinations
  if (modelScores.S >= 1.5 && modelScores.AC >= 1.5) {
    if (modelScores.SO >= 1.5) return "CTRL";
    if (modelScores.E < 0.8) return "BOSS";
  }
  
  // Low everything - giving up type
  if (avgScore < 0.7) {
    if (modelScores.E < 0.5) return "DEAD";
    if (modelScores.SO >= 1) return "DRUNK";
    return "IMFW";
  }
  
  // High A (affinity) - social types
  if (modelScores.A >= 1.5) {
    if (modelScores.SO >= 1.5) return "MUM";
    if (modelScores.E >= 1.5) return "LOVE-R";
    return "THAN-K";
  }
  
  // Low A - anti-social types  
  if (modelScores.A < 0.7) {
    if (modelScores.S >= 1.2) return "THIN-K";
    if (modelScores.SO < 0.7) return "MONK";
    return "MALO";
  }
  
  // High AC (action) - driven types
  if (modelScores.AC >= 1.5) {
    if (modelScores.S >= 1.2) return "CTRL";
    return "GOGO";
  }
  
  // Low AC - laid back types
  if (modelScores.AC < 0.7) {
    if (modelScores.SO < 0.7) return "OJBK";
    return "ZZZZ";
  }
  
  // High SO - outgoing types
  if (modelScores.SO >= 1.3) {
    if (modelScores.E >= 1.3) return "SEXY";
    if (modelScores.E < 0.7) return "FAKE";
    return "WOC";
  }
  
  // Low SO - introverted types
  if (modelScores.SO < 0.7) {
    if (modelScores.S >= 1) return "SOLO";
    return "IMSB";
  }
  
  // Medium everything - flexible matching
  if (modelScores.E >= 1.2 && modelScores.E < 1.8) return "JOKE-R";
  if (modelScores.S < 0.8) return "POOR";
  if (modelScores.AC >= 1) return "ATM-er";
  if (modelScores.SO >= 1) return "OH-NO";
  
  // Fallback to random but consistent
  return types[Math.floor(totalScore) % types.length];
}

// Get level (high/medium/low) for display
function getLevel(score) {
  if (score >= 1.5) return { label: "高", percent: Math.min(100, (score / 2) * 100), color: "#22c55e" };
  if (score >= 0.8) return { label: "中", percent: Math.min(100, (score / 2) * 100), color: "#f59e0b" };
  return { label: "低", percent: Math.min(100, (score / 2) * 100), color: "#ef4444" };
}
