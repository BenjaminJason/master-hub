/* ═══════════ 数据 ═══════════ */
const COUNTRIES=[
  {id:"uk",name:"英国",flag:"🇬🇧",tag:"授课硕士 1 年，效率最高",
   feats:[
     ["⏱️","学制最短：授课型硕士（MSc/MA）多为 1 年，时间与机会成本最低"],
     ["📚","以授课型为主，少量研究型（MRes/MPhil）；多数专业不需要 GRE"],
     ["🏫","看重本科院校背景（认 211/985 名单）+ 均分，双非需更高均分"],
     ["🔄","滚动录取（rolling），先到先得，名额满即关——越早申越好"],
     ["🛂","毕业后 Graduate Route 签证可留 2 年找工作"],
   ],
   fit:"适合：想用最短时间拿名校硕士学历、预算/时间有限、目标清晰的同学。"},
  {id:"us",name:"美国",flag:"🇺🇸",tag:"1.5–2 年，授课/科研都强",
   feats:[
     ["⏱️","学制 1.5–2 年，授课与研究型都有，课程灵活、转专业空间大"],
     ["📑","材料最全：GPA + TOEFL + 部分专业 GRE/GMAT + 文书 + 推荐信"],
     ["📅","固定截止日期（多在 12–1 月），需提前一年半规划"],
     ["💰","学费最高，但研究型有 TA/RA、奖学金机会相对多"],
     ["🛂","STEM 专业 OPT 可留 3 年（36 个月），留美就业机会最好"],
   ],
   fit:"适合：目标顶尖、想深耕学术或留美就业、预算较充足的同学。"},
  {id:"au",name:"澳大利亚",flag:"🇦🇺",tag:"门槛友好，就业移民导向",
   feats:[
     ["⏱️","学制 1–2 年，授课型为主，每年 2 月 / 7 月两次开学，灵活"],
     ["🏫","申请门槛相对友好，部分专业接受双非高均分；八校联盟集中了几乎全部 top100"],
     ["🔄","滚动录取，常见 con-offer（先发条件录取，后补语言/均分）"],
     ["🛂","485 毕业生工签可留 2–4 年，就业 / 移民导向最强"],
     ["☀️","生活环境与气候宜人，华人社区成熟"],
   ],
   fit:"适合：想海外就业 / 移民、希望申请确定性高、看重生活质量的同学。"},
  {id:"ca",name:"加拿大",flag:"🇨🇦",tag:"1–2 年，移民友好，性价比高",
   feats:[
     ["⏱️","学制 1–2 年，部分含 co-op 带薪实习"],
     ["💰","公立为主，学费比英美低，性价比高"],
     ["🏫","申请看重均分 + 语言（雅思 / 托福），名校也看院校背景"],
     ["🛂","毕业工签 PGWP 最长 3 年，移民（EE）路径清晰"],
     ["🛡️","安全宜居、华人社区成熟，北美就业市场"],
   ],
   fit:"适合：想移民 / 北美就业、看重性价比与安全的同学。"},
  {id:"sg",name:"新加坡",flag:"🇸🇬",tag:"1–1.5 年，亚洲枢纽，中英双语",
   feats:[
     ["⏱️","学制短，1–1.5 年，离家近、时差小"],
     ["🌏","中英双语环境，亚洲金融与科技枢纽"],
     ["🏆","NUS / NTU 亚洲顶尖，申请门槛高、看重背景 + 均分"],
     ["💼","就业机会好，留坡有就业准证（EP/SP）路径"],
   ],
   fit:"适合：想留亚洲发展、离家近、看重就业的同学。"},
  {id:"hk",name:"中国香港",flag:"🇭🇰",tag:"1 年，离家近，中西交融",
   feats:[
     ["⏱️","授课型为主，多 1 年，离内地近、文化相近"],
     ["🌏","港校国际化、全英文授课，QS 排名亮眼"],
     ["🔄","滚动录取，看重院校背景 + 均分 + 语言"],
     ["🛂","毕业 IANG 签证可留港 12 个月找工作"],
   ],
   fit:"适合：想离家近、低成本读名校硕士、考虑留港 / 回内地的同学。"},
  {id:"ch",name:"瑞士",flag:"🇨🇭",tag:"理工顶尖，公立学费极低",
   feats:[
     ["🏆","ETH / EPFL 理工世界顶尖，与 MIT 齐名"],
     ["💰","公立学费极低（约每年千余瑞郎），但生活成本高"],
     ["🔬","研究氛围浓，重数理背景，德 / 法 / 英语区"],
     ["💼","就业薪资高，但留瑞工签有门槛"],
   ],
   fit:"适合：理工科尖子、想低学费读顶尖项目的同学。"},
  {id:"nl",name:"荷兰",flag:"🇳🇱",tag:"英文授课多，学费适中",
   feats:[
     ["🗣️","大量英文授课硕士，1–2 年"],
     ["💰","学费适中（欧盟外约 1.5–2 万欧 / 年）"],
     ["🏫","申请看重均分 + 课程匹配"],
     ["🛂","毕业 orientation year（求职年）可留 1 年找工作"],
   ],
   fit:"适合：想低成本读英文项目、留欧就业的同学。"},
  {id:"jp",name:"日本",flag:"🇯🇵",tag:"费用低，亚洲名校",
   feats:[
     ["💰","国公立学费低，奖学金机会多"],
     ["🗣️","分英文项目（G30/SGU）与日文项目"],
     ["🔬","研究型多需联系教授（类似套磁、拿内诺）"],
     ["📄","看重研究计划书 +（日文项目）日语 N1"],
   ],
   fit:"适合：对日本文化 / 语言有兴趣、想低成本读研的同学。"},
  {id:"kr",name:"韩国",flag:"🇰🇷",tag:"费用适中，理工与文化",
   feats:[
     ["💰","学费适中，名校奖学金机会较多"],
     ["🗣️","英文 / 韩文项目并存"],
     ["🏫","理工与文化产业强，看重均分 +（部分）语言"],
     ["💼","就业有韩企机会，深耕需韩语"],
   ],
   fit:"适合：对韩国 / 东亚发展有兴趣的同学。"},
  {id:"de",name:"德国",flag:"🇩🇪",tag:"公立免学费，工程强",
   feats:[
     ["💰","公立大学多数免学费（仅注册费）"],
     ["🏆","工程 / 理工世界领先，英文授课项目增多"],
     ["📄","申请需 APS 审核 + 均分 + 课程匹配，1.5–2 年"],
     ["🛂","毕业 18 个月找工作居留，留欧路径好"],
   ],
   fit:"适合：工程理工、预算有限、想留欧就业的同学。"},
  {id:"nz",name:"新西兰",flag:"🇳🇿",tag:"毕业开放工签，移民友好，费用适中",
   feats:[
     ["🛂","毕业开放工签（Post-study work）最长 3 年，移民路径友好"],
     ["💰","学费与生活成本低于英美澳，性价比高"],
     ["🏫","8 所公立大学质量稳定，奥克兰大学进 QS 前100"],
     ["🌿","环境与安全极佳，节奏轻松、气候宜人"],
     ["🗣️","英语国家，雅思为主，1–2 年学制"],
   ],
   fit:"适合：想低成本读英语硕士、看重毕业工签与移民、喜欢自然环境的同学。"},
  {id:"my",name:"马来西亚",flag:"🇲🇾",tag:"费用极低，英文授课，双联课程",
   feats:[
     ["💰","费用极低——学费 + 生活费常为英美澳的几分之一"],
     ["🗣️","英文授课普及，马来亚大学进 QS 前100"],
     ["🎓","双联 / 分校课程多（Monash、Nottingham、Reading 马来分校），低成本拿英澳学位"],
     ["🛂","学生签证流程相对简单，东南亚枢纽、离家近"],
     ["⏱️","学制 1–2 年，开学灵活"],
   ],
   fit:"适合：预算有限、想低成本读英文硕士或英澳分校学位、考虑东南亚发展的同学。"},
  {id:"fr",name:"法国",flag:"🇫🇷",tag:"公立学费低，文理工兼备",
   feats:[
     ["💰","公立大学学费低（注册费制）；商科 / 工程的 Grande École 另有体系"],
     ["🗣️","英文授课项目增多，法语项目需法语基础"],
     ["🏫","PSL、巴黎综合理工等世界一流；申请看重背景 + 动机"],
     ["🛂","毕业可申 APS 找工作居留（约 1 年，可转工签）"],
   ],
   fit:"适合：想低成本读欧陆名校、对法国文化 / 欧洲发展有兴趣的同学。"},
  {id:"se",name:"瑞典",flag:"🇸🇪",tag:"创新强国，英文授课多",
   feats:[
     ["🗣️","英文授课硕士极多，1–2 年"],
     ["💡","创新与工程强（KTH、隆德），北欧高福利环境"],
     ["💰","欧盟外有学费，但 SI 等奖学金机会较多"],
     ["🛂","毕业可申找工作居留，英语普及、就业友好"],
   ],
   fit:"适合：理工 / 创新方向、想体验北欧、英语环境的同学。"},
  {id:"be",name:"比利时",flag:"🇧🇪",tag:"性价比高，欧盟枢纽",
   feats:[
     ["💰","公立学费适中、性价比高"],
     ["🏫","鲁汶大学世界顶尖，工程 / 生物 / 人文强"],
     ["🗣️","英文授课项目多，1–2 年"],
     ["🛂","欧盟核心（布鲁塞尔），毕业可申求职居留"],
   ],
   fit:"适合：想低成本读欧洲名校、靠近欧盟机构的同学。"},
  {id:"dk",name:"丹麦",flag:"🇩🇰",tag:"高福利，英文授课",
   feats:[
     ["🗣️","英文授课硕士多，2 年制为主"],
     ["💡","设计、工程、生命科学强，幸福指数高"],
     ["💰","欧盟外有学费，少量奖学金"],
     ["🛂","毕业可申找工作居留，社会福利好"],
   ],
   fit:"适合：想体验北欧高福利、英语环境、设计 / 理工方向的同学。"},
  {id:"cn",name:"中国大陆",flag:"🇨🇳",tag:"费用低，英文项目增多（面向国际生）",
   feats:[
     ["🎓","清北复交浙等世界一流，英文授课硕士增多"],
     ["💰","学费低、中国政府奖学金（CSC）名额多"],
     ["🌏","主要面向国际生 / 港澳台侨，或作为留学选择的对照参考"],
     ["🏙️","就业直接对接国内市场，实习机会丰富"],
   ],
   fit:"适合：国际生 / 港澳台侨申请，或作为留学选择的对照参考。"},
];

/* ── 概览扩展数据 ── */
const OV_COST={
  uk:"学费约 £15,000–30,000/年；伦敦生活费约 £1,300–1,800/月，其他城市 £800–1,100/月",
  us:"学费约 $30,000–60,000/年；大城市生活费约 $2,000–3,500/月",
  au:"学费约 AUD 35,000–55,000/年；悉尼/墨尔本生活费约 AUD 2,000–2,800/月",
  ca:"学费约 CAD 20,000–40,000/年；多伦多/温哥华生活费约 CAD 1,800–2,500/月",
  sg:"学费约 SGD 30,000–55,000/年（多为自费）；生活费约 SGD 1,500–2,500/月",
  hk:"学费约 HKD 120,000–200,000/年；生活费约 HKD 8,000–12,000/月",
  ch:"公立学费极低约 CHF 1,500–3,000/年；苏黎世/日内瓦生活费约 CHF 1,800–2,800/月",
  nl:"学费约 €14,000–22,000/年（欧盟外）；生活费约 €1,000–1,400/月",
  jp:"国公立学费约 ¥535,800/年（约合人民币 2.5 万）；生活费约 ¥8–12 万日元/月",
  kr:"学费约 ₩400–800 万/年（约合人民币 2–4 万）；首尔生活费约 ₩100–150 万/月",
  de:"公立学费几乎免费（每学期注册费约 €150–350）；生活费约 €800–1,200/月",
  nz:"学费约 NZD 25,000–40,000/年；生活费约 NZD 1,500–2,200/月",
  my:"学费约 RM 15,000–35,000/年（约合人民币 2–5 万）；生活费约 RM 2,000–3,500/月",
  fr:"公立学费极低（注册费约 €243–601/年）；巴黎生活费约 €1,100–1,600/月，外省 €800–1,100/月",
  se:"学费约 €8,000–18,000/年（欧盟外）；生活费约 €900–1,200/月",
  be:"公立学费约 €700–4,000/年；生活费约 €800–1,200/月",
  dk:"学费约 €8,000–16,000/年（欧盟外）；生活费约 €1,200–1,600/月（北欧物价偏高）",
  cn:"国际生学费约 ¥20,000–50,000/年；CSC 政府奖学金可覆盖学费+住宿+生活费",
};
const OV_POPULAR={
  uk:["CS/AI","数据科学","金融科技","商科管理","建筑规划","公共政策"],
  us:["CS/AI","金融工程","数据科学","商业分析","电气工程","生物医学工程"],
  au:["IT/计算机","商科管理","工程","会计","教育","环境科学"],
  ca:["计算机科学","数据科学","工程","商科","公共政策","金融"],
  sg:["计算机/AI","金融科技","数据分析","工程","供应链","商学"],
  hk:["金融","商科","数据科学","计算机","法律","传媒"],
  ch:["计算机","电气工程","数据科学","建筑","生命科学","材料"],
  nl:["数据科学","商科","可持续发展","AI","工程","社会科学"],
  jp:["工程","计算机","材料","工商管理","国际关系","环境科学"],
  kr:["计算机","商科","材料","文化产业","工程","生物"],
  de:["机械工程","计算机","电气","汽车工程","材料","经济"],
  nz:["商科","IT","工程","环境科学","教育","旅游管理"],
  my:["商科","IT","工程","双联课程","电子","生物医学"],
  fr:["工程","数据科学","商科","社会科学","艺术设计","航空航天"],
  se:["工程","计算机","可持续发展","商科","生命科学"],
  be:["工程","生物","人文","计算机","欧盟政策"],
  dk:["工程","设计","生命科学","商科","航运管理"],
  cn:["工程","计算机","工商管理","医学","经济","理学"],
};
const OV_RESOURCES={
  uk:[
    {type:"xhs",label:"小红书",kw:"英国硕士申请 选校攻略"},
    {type:"bili",label:"B站",kw:"英国留学 硕士申请经验"},
  ],
  us:[
    {type:"xhs",label:"小红书",kw:"美国硕士申请 选校经验"},
    {type:"bili",label:"B站",kw:"美国留学 硕士申请攻略"},
  ],
  au:[
    {type:"xhs",label:"小红书",kw:"澳洲硕士申请 八大选校"},
    {type:"bili",label:"B站",kw:"澳洲留学 硕士申请经验"},
  ],
  ca:[
    {type:"xhs",label:"小红书",kw:"加拿大硕士申请 移民攻略"},
    {type:"bili",label:"B站",kw:"加拿大留学 硕士申请"},
  ],
  sg:[
    {type:"xhs",label:"小红书",kw:"新加坡 NUS NTU 硕士申请"},
    {type:"bili",label:"B站",kw:"新加坡留学 NUS申请经验"},
  ],
  hk:[
    {type:"xhs",label:"小红书",kw:"香港硕士申请 港校选校"},
    {type:"bili",label:"B站",kw:"香港留学 硕士申请攻略"},
  ],
  ch:[
    {type:"xhs",label:"小红书",kw:"瑞士ETH EPFL 留学申请"},
    {type:"bili",label:"B站",kw:"ETH苏黎世联邦理工 申请经验"},
  ],
  nl:[
    {type:"xhs",label:"小红书",kw:"荷兰留学 硕士申请攻略"},
    {type:"bili",label:"B站",kw:"荷兰留学申请经验"},
  ],
  jp:[
    {type:"xhs",label:"小红书",kw:"日本留学 东大硕士申请"},
    {type:"bili",label:"B站",kw:"日本留学 硕士申请经验"},
  ],
  kr:[
    {type:"xhs",label:"小红书",kw:"韩国留学 首尔大学 GKS奖学金"},
    {type:"bili",label:"B站",kw:"韩国留学 GKS奖学金申请"},
  ],
  de:[
    {type:"xhs",label:"小红书",kw:"德国留学 APS审核 申请攻略"},
    {type:"bili",label:"B站",kw:"德国留学 申请经验 APS"},
  ],
  nz:[
    {type:"xhs",label:"小红书",kw:"新西兰留学 奥克兰大学申请"},
    {type:"bili",label:"B站",kw:"新西兰留学移民经验"},
  ],
  my:[
    {type:"xhs",label:"小红书",kw:"马来西亚留学 双联课程申请"},
    {type:"bili",label:"B站",kw:"马来西亚留学经验"},
  ],
  fr:[
    {type:"xhs",label:"小红书",kw:"法国留学 Campus France 申请"},
    {type:"bili",label:"B站",kw:"法国留学 硕士申请攻略"},
  ],
  se:[
    {type:"xhs",label:"小红书",kw:"瑞典留学 KTH SI奖学金申请"},
    {type:"bili",label:"B站",kw:"瑞典留学 SI奖学金申请经验"},
  ],
  be:[
    {type:"xhs",label:"小红书",kw:"比利时留学 鲁汶大学申请"},
    {type:"bili",label:"B站",kw:"比利时留学经验"},
  ],
  dk:[
    {type:"xhs",label:"小红书",kw:"丹麦留学 哥本哈根大学申请"},
    {type:"bili",label:"B站",kw:"丹麦留学经验"},
  ],
  cn:[
    {type:"xhs",label:"小红书",kw:"中国大学 国际生申请 CSC奖学金"},
    {type:"bili",label:"B站",kw:"中国大学国际生申请经验"},
  ],
};

/* 排名取近年代表值（QS/THE/软科ARWU/U.S.News），均分=四者平均，仅供参考 */
const SCHOOLS=[
  // 英国
  {c:"uk",name:"牛津大学",en:"University of Oxford",city:"牛津",qs:4,the:1,arwu:5,us:5,types:["授课","研究"],strong:["人文","商科","工程","医学","社科"],intro:"英语世界最古老的大学，学院制，几乎所有学科世界顶尖。授课型硕士竞争激烈，对本科背景和均分要求很高。",req:"985/211 均分 88+ / 双非更高；雅思总分 7.0–7.5；多数专业需文书 + 推荐信。",url:"https://www.ox.ac.uk/"},
  {c:"uk",name:"剑桥大学",en:"University of Cambridge",city:"剑桥",qs:6,the:5,arwu:4,us:8,types:["授课","研究"],strong:["理工","数学","商科","医学"],intro:"理工与数学传统极强，学院制。硕士项目偏精英、规模小，部分专业研究导向明显。",req:"顶尖本科背景，均分 85–90+；雅思 7.0–7.5；理工科可能看重科研。",url:"https://www.cam.ac.uk/"},
  {c:"uk",name:"帝国理工学院",en:"Imperial College London",city:"伦敦",qs:2,the:9,arwu:23,us:11,types:["授课","研究"],strong:["工程","计算机","商科","医学"],intro:"纯理工医商院校，工程与计算机全英顶尖，地处伦敦，与产业联系紧密。",req:"理工背景，均分 85+；雅思 6.5–7.0；部分专业看数理课程成绩。",url:"https://www.imperial.ac.uk/"},
  {c:"uk",name:"伦敦大学学院",en:"University College London",city:"伦敦",qs:8,the:22,arwu:17,us:19,types:["授课","研究"],strong:["建筑","教育","医学","计算机","社科"],intro:"综合性巨型名校，专业极广，授课型硕士数量多、招生量大，是热门申请校。",req:"认院校 list，985/211 均分 80–85+，双非 85–90+；雅思 6.5–7.5。",url:"https://www.ucl.ac.uk/"},
  {c:"uk",name:"爱丁堡大学",en:"University of Edinburgh",city:"爱丁堡",qs:35,the:30,arwu:33,us:32,types:["授课","研究"],strong:["人工智能","商科","人文","医学"],intro:"苏格兰名校，AI 与信息学传统强，授课硕士项目丰富，中国学生热门。",req:"认 list，均分 80–88；雅思 6.5–7.0；商学院单独 list 更严。",url:"https://www.ed.ac.uk/"},
  {c:"uk",name:"伦敦国王学院",en:"King's College London",city:"伦敦",qs:13,the:38,arwu:47,us:33,types:["授课","研究"],strong:["医学","法律","社科","人文"],intro:"伦敦核心位置，医学、法律、人文社科强。授课硕士项目多。",req:"认 list，均分 80–85；雅思 6.5–7.0。",url:"https://www.kcl.ac.uk/"},
  {c:"uk",name:"曼彻斯特大学",en:"University of Manchester",city:"曼彻斯特",qs:40,the:53,arwu:53,us:55,types:["授课","研究"],strong:["商科","工程","材料","社科"],intro:"红砖名校代表，规模大、专业全，商学院（AMBS）声誉高，中国学生极多。",req:"认 list（分三档），均分 80–85；雅思 6.5。",url:"https://www.manchester.ac.uk/"},
  {c:"uk",name:"布里斯托大学",en:"University of Bristol",city:"布里斯托",qs:57,the:81,arwu:78,us:79,types:["授课","研究"],strong:["工程","计算机","社科"],intro:"工程与计算机强，城市宜居，授课硕士热门，性价比较高。",req:"认 list，均分 78–85；雅思 6.5。",url:"https://www.bristol.ac.uk/"},
  // 美国
  {c:"us",name:"麻省理工学院",en:"MIT",city:"剑桥(MA)",qs:1,the:2,arwu:4,us:2,types:["授课","研究"],strong:["工程","计算机","商科","理学"],intro:"全球工程与计算机标杆。硕士多为研究导向或专业型（如 MEng/MBA/金融），竞争极激烈。",req:"顶尖 GPA（3.8+）、强科研/实习、GRE（部分）、TOEFL 100+。",url:"https://www.mit.edu/"},
  {c:"us",name:"斯坦福大学",en:"Stanford University",city:"斯坦福",qs:2,the:2,arwu:3,us:3,types:["授课","研究"],strong:["计算机","工程","商科"],intro:"硅谷核心，创业与工程氛围浓。硕士项目精且贵，就业资源顶级。",req:"GPA 3.8+、GRE、TOEFL 100+、强文书与推荐。",url:"https://www.stanford.edu/"},
  {c:"us",name:"哈佛大学",en:"Harvard University",city:"剑桥(MA)",qs:5,the:3,arwu:1,us:1,types:["授课","研究"],strong:["商科","公共政策","法律","医学","教育"],intro:"综合声誉全球第一，商学院、肯尼迪学院、教育学院等专业硕士极强。",req:"顶尖 GPA、GRE/GMAT、TOEFL 100+、出色文书与背景。",url:"https://www.harvard.edu/"},
  {c:"us",name:"加州理工学院",en:"Caltech",city:"帕萨迪纳",qs:7,the:7,arwu:7,us:9,types:["研究"],strong:["理学","工程","计算机"],intro:"极小而精的理工院校，研究导向强，硕士机会少、门槛高。",req:"顶尖数理背景、科研经历、GRE、TOEFL。",url:"https://www.caltech.edu/"},
  {c:"us",name:"哥伦比亚大学",en:"Columbia University",city:"纽约",qs:43,the:17,arwu:12,us:7,types:["授课","研究"],strong:["金融","工程","新闻","社科"],intro:"地处纽约，金融与工程（SEAS）授课硕士招生量大，是中国学生热门。",req:"GPA 3.5+、GRE、TOEFL 100+；部分项目对背景较友好。",url:"https://www.columbia.edu/"},
  {c:"us",name:"加州大学伯克利",en:"UC Berkeley",city:"伯克利",qs:20,the:8,arwu:5,us:4,types:["授课","研究"],strong:["计算机","工程","商科","数据科学"],intro:"公立顶尖，计算机与工程世界一流，湾区就业资源极佳。",req:"GPA 3.6+、GRE（部分）、TOEFL 90+、强背景。",url:"https://www.berkeley.edu/"},
  {c:"us",name:"康奈尔大学",en:"Cornell University",city:"伊萨卡/纽约",qs:16,the:20,arwu:14,us:20,types:["授课","研究"],strong:["工程","计算机","酒店管理","农业"],intro:"藤校中工程与应用学科强，Cornell Tech（纽约）有大量专业硕士。",req:"GPA 3.5+、GRE、TOEFL 100+。",url:"https://www.cornell.edu/"},
  {c:"us",name:"密歇根大学安娜堡",en:"University of Michigan",city:"安娜堡",qs:51,the:23,arwu:26,us:18,types:["授课","研究"],strong:["工程","计算机","商科","公共政策"],intro:"公立巨头，工程与商科强，授课硕士项目丰富，性价比相对好。",req:"GPA 3.4+、GRE（部分）、TOEFL 90+。",url:"https://umich.edu/"},
  {c:"us",name:"纽约大学",en:"New York University",city:"纽约",qs:58,the:30,arwu:27,us:30,types:["授课","研究"],strong:["金融","商科","数据科学","传媒"],intro:"地处曼哈顿，金融与商科资源极佳，专业硕士招生量大、对背景较包容。",req:"GPA 3.3+、GRE/GMAT、TOEFL 100+。",url:"https://www.nyu.edu/"},
  // 澳大利亚
  {c:"au",name:"墨尔本大学",en:"University of Melbourne",city:"墨尔本",qs:22,the:39,arwu:32,us:27,types:["授课","研究"],strong:["商科","工程","教育","医学"],intro:"澳洲综合第一，研究实力强，授课硕士项目成熟，毕业生就业认可度高。",req:"认院校 list，985/211 均分 75–80、双非 80–85；雅思 6.5。",url:"https://www.unimelb.edu.au/"},
  {c:"au",name:"悉尼大学",en:"University of Sydney",city:"悉尼",qs:28,the:60,arwu:60,us:28,types:["授课","研究"],strong:["商科","工程","建筑","传媒"],intro:"历史最悠久的澳洲名校，商科与工程热门，城市资源与就业机会丰富。",req:"认 list 分档，均分 75–83；雅思 6.5–7.0（部分专业）。",url:"https://www.sydney.edu.au/"},
  {c:"au",name:"新南威尔士大学",en:"UNSW Sydney",city:"悉尼",qs:19,the:83,arwu:64,us:41,types:["授课","研究"],strong:["工程","计算机","商科","金融"],intro:"工程与商科见长，三学期制、节奏快，与产业联系紧密，就业导向强。",req:"认 list，均分 72–82；雅思 6.5。",url:"https://www.unsw.edu.au/"},
  {c:"au",name:"莫纳什大学",en:"Monash University",city:"墨尔本",qs:31,the:58,arwu:73,us:42,types:["授课","研究"],strong:["商科","工程","药学","IT"],intro:"规模大、专业全，校区多，授课硕士项目丰富，申请相对友好。",req:"认 list，均分 70–80；雅思 6.5。",url:"https://www.monash.edu/"},
  {c:"au",name:"昆士兰大学",en:"University of Queensland",city:"布里斯班",qs:40,the:70,arwu:54,us:36,types:["授课","研究"],strong:["商科","工程","环境","生物"],intro:"八校之一，布里斯班气候宜人、生活成本较低，研究与教学并重。",req:"认 list，均分 72–80；雅思 6.5。",url:"https://www.uq.edu.au/"},
  {c:"au",name:"澳大利亚国立大学",en:"ANU",city:"堪培拉",qs:29,the:73,arwu:95,us:70,types:["授课","研究"],strong:["社科","政治","计算机","理学"],intro:"首都堪培拉，研究型氛围浓，社科与政治学科尤强，国际化程度高。",req:"认 list，均分 75–80；雅思 6.5。",url:"https://www.anu.edu.au/"},
  // 美国（补充）
  {c:"us",name:"普林斯顿大学",en:"Princeton University",city:"普林斯顿",qs:27,the:6,arwu:6,us:16,types:["授课","研究"],strong:["数学","物理","计算机","经济","公共政策"],intro:"藤校，理论学科（数学/物理/经济）极强，研究生院精英化、规模小，资助相对好。",req:"顶尖 GPA、GRE、TOEFL 100+；研究型重科研。",url:"https://www.princeton.edu/"},
  {c:"us",name:"耶鲁大学",en:"Yale University",city:"纽黑文",qs:16,the:9,arwu:11,us:12,types:["授课","研究"],strong:["法律","商科","人文","艺术","医学"],intro:"藤校，法学院、管理学院、艺术学院声誉顶尖，人文社科氛围浓。",req:"顶尖 GPA、GRE/GMAT、TOEFL 100+。",url:"https://www.yale.edu/"},
  {c:"us",name:"芝加哥大学",en:"University of Chicago",city:"芝加哥",qs:24,the:14,arwu:10,us:22,types:["授课","研究"],strong:["经济","商科","社科","数学","公共政策"],intro:"学术严谨著称，经济学（芝加哥学派）全球重镇，商学院（Booth）顶尖。",req:"GPA 3.6+、GRE/GMAT、TOEFL 100+。",url:"https://www.uchicago.edu/"},
  {c:"us",name:"宾夕法尼亚大学",en:"University of Pennsylvania",city:"费城",qs:15,the:16,arwu:16,us:15,types:["授课","研究"],strong:["商科","金融","计算机","医学","法律"],intro:"藤校，沃顿商学院全球顶尖，工程与医学也强，地处费城。",req:"GPA 3.5+、GRE/GMAT、TOEFL 100+。",url:"https://www.upenn.edu/"},
  {c:"us",name:"约翰霍普金斯大学",en:"Johns Hopkins University",city:"巴尔的摩",qs:20,the:15,arwu:22,us:10,types:["授课","研究"],strong:["医学","公共卫生","生物","工程","国际关系"],intro:"医学与公共卫生全球顶尖，生物医学工程开创者，研究经费全美前列。",req:"GPA 3.5+、GRE（部分）、TOEFL 100+。",url:"https://www.jhu.edu/"},
  {c:"us",name:"加州大学洛杉矶",en:"UCLA",city:"洛杉矶",qs:49,the:18,arwu:13,us:13,types:["授课","研究"],strong:["商科","工程","传媒","医学","计算机"],intro:"公立顶尖，专业极全，地处洛杉矶，传媒与商科资源丰富。",req:"GPA 3.5+、GRE（部分）、TOEFL 90+。",url:"https://www.ucla.edu/"},
  {c:"us",name:"杜克大学",en:"Duke University",city:"达勒姆",qs:70,the:32,arwu:32,us:23,types:["授课","研究"],strong:["商科","工程","医学","公共政策"],intro:"南方顶尖私立，商、医、工俱强，研究型与专业硕士均有，校园优美。",req:"GPA 3.5+、GRE/GMAT、TOEFL 100+。",url:"https://www.duke.edu/"},
  {c:"us",name:"卡内基梅隆大学",en:"Carnegie Mellon University",city:"匹兹堡",qs:55,the:24,arwu:95,us:25,types:["授课","研究"],strong:["计算机","人工智能","工程","商科","艺术"],intro:"计算机科学与 AI 全球第一梯队，工程、艺术（戏剧/设计）也强，硕士就业极佳。",req:"GPA 3.5+、GRE、TOEFL 100+；CS 竞争极激烈。",url:"https://www.cmu.edu/"},
  {c:"us",name:"佐治亚理工学院",en:"Georgia Tech",city:"亚特兰大",qs:142,the:38,arwu:76,us:33,types:["授课","研究"],strong:["工程","计算机","航空航天","商科"],intro:"公立理工强校，工程与计算机全美前列，性价比高，产业联系紧密。",req:"GPA 3.3+、GRE（部分）、TOEFL 90+。",url:"https://www.gatech.edu/"},
  {c:"us",name:"伊利诺伊大学香槟",en:"UIUC",city:"香槟",qs:74,the:48,arwu:40,us:46,types:["授课","研究"],strong:["计算机","工程","会计","材料"],intro:"工程与计算机老牌强校，会计全美顶尖，公立、性价比高，中国学生多。",req:"GPA 3.3+、GRE（部分）、TOEFL 90+。",url:"https://illinois.edu/"},
  {c:"us",name:"德州大学奥斯汀",en:"UT Austin",city:"奥斯汀",qs:72,the:50,arwu:41,us:38,types:["授课","研究"],strong:["计算机","工程","商科","传媒"],intro:"公立旗舰，工程与商科强，奥斯汀科技产业活跃，无州个税。",req:"GPA 3.3+、GRE（部分）、TOEFL 90+。",url:"https://www.utexas.edu/"},
  {c:"us",name:"加州大学圣地亚哥",en:"UCSD",city:"圣地亚哥",qs:81,the:32,arwu:21,us:21,types:["授课","研究"],strong:["生物医学","计算机","工程","海洋科学"],intro:"理工与生物医学强，海滨名校，周边生物科技产业密集，气候宜人。",req:"GPA 3.4+、GRE（部分）、TOEFL 90+。",url:"https://www.ucsd.edu/"},
  {c:"us",name:"华盛顿大学",en:"University of Washington",city:"西雅图",qs:92,the:26,arwu:19,us:6,types:["授课","研究"],strong:["计算机","医学","工程","海洋"],intro:"西雅图公立强校，计算机与医学顶尖，毗邻微软/亚马逊，实习资源极佳。",req:"GPA 3.3+、GRE（部分）、TOEFL 92+。",url:"https://www.washington.edu/"},
  // 英国（补充，临界）
  {c:"uk",name:"格拉斯哥大学",en:"University of Glasgow",city:"格拉斯哥",qs:80,the:87,arwu:125,us:110,types:["授课","研究"],strong:["商科","工程","医学","人文"],intro:"苏格兰四所古老大学之一，专业全、国际生友好，授课硕士热门。",req:"认 list，均分 78–83；雅思 6.5。",url:"https://www.gla.ac.uk/"},
  // 澳大利亚（补充，临界）
  {c:"au",name:"西澳大学",en:"University of Western Australia",city:"珀斯",qs:77,the:131,arwu:99,us:85,types:["授课","研究"],strong:["矿业工程","地球科学","医学","商科"],intro:"八校联盟成员，珀斯，矿业/地球科学/海洋研究强，生活成本较低。",req:"认 list，均分 70–78；雅思 6.5。",url:"https://www.uwa.edu.au/"},
  // 加拿大
  {c:"ca",name:"多伦多大学",en:"University of Toronto",city:"多伦多",qs:32,the:21,arwu:24,us:18,types:["授课","研究"],strong:["计算机","商科","医学","工程","人文"],intro:"加拿大综合实力第一，AI（深度学习发源地之一）、医学、商科顶尖，硕士项目多。",req:"看院校背景，均分 85+；雅思 7.0 / 托福 100；部分需 GRE/GMAT。",url:"https://www.utoronto.ca/"},
  {c:"ca",name:"英属哥伦比亚大学",en:"University of British Columbia",city:"温哥华",qs:45,the:41,arwu:44,us:35,types:["授课","研究"],strong:["商科","工程","林业","计算机"],intro:"温哥华名校，环境优美，商科与工程强，国际化程度高。",req:"均分 84+；雅思 6.5–7.0。",url:"https://www.ubc.ca/"},
  {c:"ca",name:"麦吉尔大学",en:"McGill University",city:"蒙特利尔",qs:30,the:45,arwu:80,us:55,types:["授课","研究"],strong:["医学","法律","商科","工程"],intro:"有「加拿大哈佛」之称，医学与法律强，蒙特利尔英法双语城市。",req:"均分 85+；雅思 6.5–7.0。",url:"https://www.mcgill.ca/"},
  // 新加坡
  {c:"sg",name:"新加坡国立大学",en:"NUS",city:"新加坡",qs:10,the:17,arwu:80,us:26,types:["授课","研究"],strong:["工程","计算机","商科","公共政策"],intro:"亚洲顶尖综合性大学，工程与计算机世界一流，中英双语环境、就业资源极佳。",req:"顶尖院校背景，均分 85+；雅思 6.5 / 托福 100；部分需 GRE。",url:"https://www.nus.edu.sg/"},
  {c:"sg",name:"南洋理工大学",en:"NTU",city:"新加坡",qs:12,the:32,arwu:125,us:30,types:["授课","研究"],strong:["工程","商科","传媒","教育"],intro:"工程与商科强，校园现代优美，与产业联系紧密，硕士就业导向明显。",req:"均分 83+；雅思 6.5；部分需 GRE/GMAT。",url:"https://www.ntu.edu.sg/"},
  // 中国香港
  {c:"hk",name:"香港大学",en:"University of Hong Kong",city:"香港",qs:11,the:35,arwu:125,us:80,types:["授课","研究"],strong:["商科","法律","医学","建筑","社科"],intro:"香港最古老的大学，国际化程度高，全英文授课，商科与法律强，离内地近。",req:"看院校背景，均分 80–85+；雅思 6.5–7.0。",url:"https://www.hku.hk/"},
  // 瑞士
  {c:"ch",name:"苏黎世联邦理工",en:"ETH Zurich",city:"苏黎世",qs:8,the:11,arwu:20,us:25,types:["授课","研究"],strong:["工程","计算机","理学","建筑"],intro:"欧陆理工之巅，与 MIT 齐名，公立学费极低，但申请门槛极高、看重数理背景。",req:"强数理背景，均分 85+；雅思 7.0 / 托福 100；部分需 GRE。",url:"https://ethz.ch/"},
  {c:"ch",name:"洛桑联邦理工",en:"EPFL",city:"洛桑",qs:22,the:33,arwu:125,us:150,types:["授课","研究"],strong:["工程","计算机","生命科学"],intro:"瑞士法语区理工名校，工程与计算机强，研究氛围浓，学费低。",req:"强理工背景，均分 83+；雅思 7.0。",url:"https://www.epfl.ch/"},
  // 荷兰
  {c:"nl",name:"阿姆斯特丹大学",en:"University of Amsterdam",city:"阿姆斯特丹",qs:60,the:61,arwu:125,us:50,types:["授课","研究"],strong:["社科","传媒","商科","人文"],intro:"荷兰综合名校，社科与传媒强，大量英文授课硕士，城市国际化。",req:"均分 80+；雅思 6.5。",url:"https://www.uva.nl/"},
  {c:"nl",name:"代尔夫特理工大学",en:"TU Delft",city:"代尔夫特",qs:48,the:48,arwu:151,us:150,types:["授课","研究"],strong:["工程","建筑","航空航天","计算机"],intro:"荷兰理工顶尖，工程与建筑世界一流，英文授课多。",req:"强工科背景，均分 80+；雅思 6.5–7.0。",url:"https://www.tudelft.nl/"},
  // 日本
  {c:"jp",name:"东京大学",en:"University of Tokyo",city:"东京",qs:39,the:29,arwu:27,us:73,types:["授课","研究"],strong:["工程","理学","医学","社科"],intro:"日本学术重镇，研究实力顶尖，研究型多需联系教授；有英文项目（G30/PEAK）。",req:"研究计划书 +（日文项目）日语 N1；英文项目托福 / 雅思。",url:"https://www.u-tokyo.ac.jp/"},
  {c:"jp",name:"京都大学",en:"Kyoto University",city:"京都",qs:64,the:55,arwu:40,us:150,types:["授课","研究"],strong:["理学","工程","人文","医学"],intro:"以自由学风和基础研究著称，诺奖辈出，研究型为主，需联系导师。",req:"研究计划书 + 语言；多数研究型需教授内诺。",url:"https://www.kyoto-u.ac.jp/"},
  // 韩国
  {c:"kr",name:"首尔国立大学",en:"Seoul National University",city:"首尔",qs:38,the:62,arwu:125,us:120,types:["授课","研究"],strong:["工程","理学","商科","人文"],intro:"韩国第一学府，理工与人文俱强，英文 / 韩文项目并存，奖学金机会较多。",req:"均分 85+；英文项目托福 / 雅思，韩文项目 TOPIK。",url:"https://www.snu.ac.kr/"},
  // 德国
  {c:"de",name:"慕尼黑工业大学",en:"TU Munich",city:"慕尼黑",qs:25,the:30,arwu:54,us:70,types:["授课","研究"],strong:["工程","计算机","自然科学","管理"],intro:"德国理工最强，工程与计算机世界领先，公立免学费，英文授课项目增多。",req:"APS 审核 + 课程匹配，均分 80+；雅思 6.5 / 托福 88。",url:"https://www.tum.de/"},
  {c:"de",name:"慕尼黑大学",en:"LMU Munich",city:"慕尼黑",qs:61,the:38,arwu:51,us:40,types:["授课","研究"],strong:["人文","医学","自然科学","社科"],intro:"德国综合性顶尖大学，人文与自然科学强，公立免学费。",req:"APS 审核 + 课程匹配，均分 80+；语言按项目。",url:"https://www.lmu.de/"},
  // 英国（QS 中段名校）
  {c:"uk",name:"伦敦政治经济学院",en:"LSE",city:"伦敦",qs:62,the:46,arwu:201,us:230,tier:"qs",types:["授课","研究"],strong:["经济","金融","政治","社科","法律"],intro:"全球社会科学殿堂，经济/金融/政治顶尖。因四大排名机制（软科/USNews 偏重理工科研）拉低均分，但实际声誉与就业极强。",req:"认 list，均分 85+；雅思 7.0；商科 / 经济竞争激烈。",url:"https://www.lse.ac.uk/"},
  {c:"uk",name:"华威大学",en:"University of Warwick",city:"考文垂",qs:68,the:104,arwu:175,us:150,tier:"qs",types:["授课","研究"],strong:["商科","经济","数学","工程","传媒"],intro:"商学院（WBS）与数学、经济强，校园制、就业口碑好，中国学生热门。",req:"认 list，均分 80–85；雅思 6.5–7.0。",url:"https://warwick.ac.uk/"},
  {c:"uk",name:"杜伦大学",en:"Durham University",city:"杜伦",qs:85,the:150,arwu:201,us:180,tier:"qs",types:["授课","研究"],strong:["商科","人文","法律","地理"],intro:"古老的学院制大学，人文社科与商科强，学术氛围浓，牛剑落榜生热门去向。",req:"认 list，均分 80–85；雅思 6.5。",url:"https://www.durham.ac.uk/"},
  // 澳大利亚 QS/THE 强校
  {c:"au",name:"阿德莱德大学",en:"University of Adelaide",city:"阿德莱德",qs:79,the:120,arwu:120,us:110,tier:"qs",types:["授课","研究"],strong:["葡萄酒","工程","医学","农业"],intro:"八校联盟成员，阿德莱德生活成本低、偏远地区移民加分，葡萄酒与农业特色强。",req:"认 list，均分 70–78；雅思 6.5。",url:"https://www.adelaide.edu.au/"},
  {c:"au",name:"悉尼科技大学",en:"UTS",city:"悉尼",qs:87,the:130,arwu:201,us:170,tier:"qs",types:["授课"],strong:["IT","设计","商科","传媒"],intro:"年轻而崛起的实用型大学，IT/设计/传媒强，地处悉尼市中心、就业导向明显。",req:"均分 70–78；雅思 6.5。",url:"https://www.uts.edu.au/"},
  // 新西兰
  {c:"nz",name:"奥克兰大学",en:"University of Auckland",city:"奥克兰",qs:67,the:150,arwu:201,us:150,tier:"qs",types:["授课","研究"],strong:["商科","工程","生物","教育"],intro:"新西兰排名最高、综合实力最强的大学，QS 进前100，商科与工程强；新西兰留学的最大卖点是毕业工签、移民与费用。",req:"均分 75–80+；雅思 6.5。",url:"https://www.auckland.ac.nz/"},
  // 马来西亚
  {c:"my",name:"马来亚大学",en:"University of Malaya",city:"吉隆坡",qs:56,the:251,arwu:301,us:200,tier:"qs",types:["授课","研究"],strong:["工程","商科","医学","社科"],intro:"马来西亚历史最悠久、排名最高的大学，QS 进前100，英文授课；马来西亚留学主打费用极低与高性价比。",req:"均分 75+；雅思 6.0–6.5。",url:"https://www.um.edu.my/"},
  // 加拿大（补充）
  {c:"ca",name:"阿尔伯塔大学",en:"University of Alberta",city:"埃德蒙顿",qs:96,the:125,arwu:125,us:110,tier:"qs",types:["授课","研究"],strong:["工程","能源","计算机","农业"],intro:"加拿大研究型强校，能源 / 工程 / AI（强化学习重镇）强，QS 前100，生活成本较低。",req:"均分 82+；雅思 6.5。",url:"https://www.ualberta.ca/"},
  // 香港（补充）
  {c:"hk",name:"香港中文大学",en:"CUHK",city:"香港",qs:18,the:44,arwu:150,us:140,types:["授课","研究"],strong:["商科","医学","传媒","社科"],intro:"书院制综合名校，商科、医学、传媒强，中英双语环境，授课硕士项目丰富。",req:"看院校背景，均分 80–85；雅思 6.5。",url:"https://www.cuhk.edu.hk/"},
  {c:"hk",name:"香港科技大学",en:"HKUST",city:"香港",qs:33,the:66,arwu:250,us:160,tier:"qs",types:["授课","研究"],strong:["商科","工程","计算机","金融"],intro:"年轻而顶尖的研究型大学，商科（金融 / 商业分析）与工程强，QS 进前100，就业导向明显。",req:"均分 80–85；雅思 6.5；商科竞争激烈。",url:"https://hkust.edu.hk/"},
  {c:"hk",name:"香港城市大学",en:"City University of Hong Kong",city:"香港",qs:52,the:85,arwu:250,us:150,tier:"qs",types:["授课","研究"],strong:["商科","工程","数据科学","媒体"],intro:"应用导向强，商科与数据科学热门，QS 前100，授课硕士对背景较友好。",req:"均分 78–83；雅思 6.5。",url:"https://www.cityu.edu.hk/"},
  {c:"hk",name:"香港理工大学",en:"PolyU",city:"香港",qs:50,the:87,arwu:250,us:170,tier:"qs",types:["授课","研究"],strong:["设计","酒店管理","工程","商科"],intro:"应用型强校，设计、酒店管理（全球顶尖）、工程见长，QS 前100，就业实用导向。",req:"均分 78–83；雅思 6.5。",url:"https://www.polyu.edu.hk/"},
  // 法国
  {c:"fr",name:"巴黎文理研究大学",en:"PSL University",city:"巴黎",qs:34,the:40,arwu:39,us:40,types:["授课","研究"],strong:["理学","人文","工程","商科"],intro:"由巴黎高师、巴黎九大等顶尖院校组成的联合体，理学与人文强，研究导向。",req:"强背景 + 动机信；英文项目托福 / 雅思，部分需法语。",url:"https://psl.eu/en"},
  {c:"fr",name:"索邦大学",en:"Sorbonne University",city:"巴黎",qs:73,the:90,arwu:41,us:50,types:["授课","研究"],strong:["人文","理学","医学"],intro:"巴黎综合性名校，人文与理学传统深厚，部分英文授课。",req:"动机信 + 背景；语言按项目。",url:"https://www.sorbonne-universite.fr/en"},
  {c:"fr",name:"巴黎综合理工学院",en:"Institut Polytechnique de Paris",city:"巴黎",qs:43,the:95,arwu:201,us:180,tier:"qs",types:["授课","研究"],strong:["工程","计算机","数据科学","商科"],intro:"由巴黎综合理工等组成的工程强校联盟，QS 前50，理工与数据科学强。",req:"强数理背景；英文项目托福 / 雅思。",url:"https://www.ip-paris.fr/en"},
  // 瑞典
  {c:"se",name:"皇家理工学院",en:"KTH Royal Institute of Technology",city:"斯德哥尔摩",qs:82,the:155,arwu:201,us:190,tier:"qs",types:["授课","研究"],strong:["工程","计算机","建筑","能源"],intro:"瑞典顶尖理工，工程与计算机强，英文授课硕士多，北欧创新氛围。",req:"强工科背景，均分 80+；雅思 6.5。",url:"https://www.kth.se/en"},
  {c:"se",name:"隆德大学",en:"Lund University",city:"隆德",qs:71,the:106,arwu:150,us:120,tier:"qs",types:["授课","研究"],strong:["工程","商科","设计","社科"],intro:"瑞典综合性名校，专业全、英文项目多，国际化程度高。",req:"均分 80+；雅思 6.5。",url:"https://www.lunduniversity.lu.se/"},
  // 比利时
  {c:"be",name:"鲁汶大学",en:"KU Leuven",city:"鲁汶",qs:59,the:45,arwu:90,us:70,types:["授课","研究"],strong:["工程","生物","人文","计算机"],intro:"比利时最古老、研究实力最强的大学，工程与生物顶尖，英文授课项目多、性价比高。",req:"均分 80+；雅思 6.5–7.0；部分专业看课程匹配。",url:"https://www.kuleuven.be/english/"},
  // 丹麦
  {c:"dk",name:"哥本哈根大学",en:"University of Copenhagen",city:"哥本哈根",qs:90,the:107,arwu:30,us:40,types:["授课","研究"],strong:["生命科学","医学","社科","人文"],intro:"北欧顶尖综合性大学，生命科学与医学强，英文授课硕士多，幸福指数高。",req:"均分 80+；雅思 6.5–7.0。",url:"https://www.ku.dk/english/"},
  // 中国大陆（面向国际生 / 港澳台侨 / 对照参考）
  {c:"cn",name:"清华大学",en:"Tsinghua University",city:"北京",qs:14,the:12,arwu:22,us:23,types:["授课","研究"],strong:["工程","计算机","建筑","商科"],intro:"中国工程与理工标杆，英文授课硕士（如苏世民书院、国际项目）增多，奖学金多。",req:"面向国际生 / 港澳台侨；英文项目托福 / 雅思，部分需中文。",url:"https://www.tsinghua.edu.cn/en/"},
  {c:"cn",name:"北京大学",en:"Peking University",city:"北京",qs:13,the:13,arwu:24,us:39,types:["授课","研究"],strong:["人文","社科","经济","医学"],intro:"中国综合性顶尖学府，文理与经管强，国际项目（如燕京学堂）丰富。",req:"面向国际生 / 港澳台侨；语言按项目。",url:"https://english.pku.edu.cn/"},
  {c:"cn",name:"复旦大学",en:"Fudan University",city:"上海",qs:26,the:36,arwu:70,us:100,types:["授课","研究"],strong:["经济","新闻","医学","管理"],intro:"上海顶尖综合性大学，经济、新闻、医学强，国际化项目多。",req:"面向国际生 / 港澳台侨；语言按项目。",url:"https://www.fudan.edu.cn/en/"},
  {c:"cn",name:"上海交通大学",en:"Shanghai Jiao Tong University",city:"上海",qs:36,the:43,arwu:60,us:90,types:["授课","研究"],strong:["工程","计算机","商科","医学"],intro:"工程与医学强，英文授课与中外合作项目（如密西根学院）丰富。",req:"面向国际生 / 港澳台侨；语言按项目。",url:"https://en.sjtu.edu.cn/"},
  {c:"cn",name:"浙江大学",en:"Zhejiang University",city:"杭州",qs:47,the:55,arwu:40,us:80,types:["授课","研究"],strong:["工程","计算机","农业","商科"],intro:"规模大、学科全的综合性强校，工程与计算机突出，国际项目增多。",req:"面向国际生 / 港澳台侨；语言按项目。",url:"https://www.zju.edu.cn/english/"},
  {c:"us",name:"西北大学",en:"Northwestern University",city:"埃文斯顿",qs:45,types:["授课","研究"],strong:["商科","传媒","工程"],intro:"私立名校，凯洛格商学院与传媒（梅迪尔）顶尖。",req:"GPA 3.5+、TOEFL 100+、部分需 GRE/GMAT。",url:"https://www.northwestern.edu/"},
  {c:"us",name:"布朗大学",en:"Brown University",city:"普罗维登斯",qs:66,types:["授课","研究"],strong:["人文","工程","医学"],intro:"藤校，开放式课程著称，人文与跨学科强。",req:"GPA 3.5+、TOEFL 100+。",url:"https://www.brown.edu/"},
  {c:"us",name:"波士顿大学",en:"Boston University",city:"波士顿",qs:94,types:["授课","研究"],strong:["商科","传媒","工程","医学"],intro:"地处波士顿，专业全、授课硕士招生量大、对背景较友好。",req:"GPA 3.3+、TOEFL 100+。",url:"https://www.bu.edu/"},
  {c:"us",name:"普渡大学",en:"Purdue University",city:"西拉法叶",qs:100,types:["授课","研究"],strong:["工程","计算机","航空航天"],intro:"公立理工强校，工程与航空航天著名，性价比高。",req:"GPA 3.2+、TOEFL 88+。",url:"https://www.purdue.edu/"},
  {c:"us",name:"威斯康星大学麦迪逊",en:"University of Wisconsin-Madison",city:"麦迪逊",qs:131,types:["授课","研究"],strong:["工程","计算机","商科","农业"],intro:"公立研究型强校，学科全、研究经费充足。",req:"GPA 3.2+、TOEFL 92+。",url:"https://www.wisc.edu/"},
  {c:"us",name:"加州大学戴维斯",en:"UC Davis",city:"戴维斯",qs:137,types:["授课","研究"],strong:["农业","兽医","工程","生物"],intro:"加州大学系统，农业与生命科学世界顶尖。",req:"GPA 3.2+、TOEFL 90+。",url:"https://www.ucdavis.edu/"},
  {c:"us",name:"莱斯大学",en:"Rice University",city:"休斯顿",qs:122,types:["授课","研究"],strong:["工程","自然科学","商科"],intro:"南方小而精的私立名校，工程与自然科学强，师生比高。",req:"GPA 3.5+、TOEFL 100+。",url:"https://www.rice.edu/"},
  {c:"uk",name:"伯明翰大学",en:"University of Birmingham",city:"伯明翰",qs:68,types:["授课","研究"],strong:["商科","工程","医学"],intro:"红砖名校，专业全、商科与工程强，中国学生热门。",req:"认 list，均分 80–85；雅思 6.5。",url:"https://www.birmingham.ac.uk/"},
  {c:"uk",name:"利兹大学",en:"University of Leeds",city:"利兹",qs:77,types:["授课","研究"],strong:["商科","传媒","工程"],intro:"红砖名校，传媒与商科热门，城市生活便利。",req:"认 list，均分 78–83；雅思 6.5。",url:"https://www.leeds.ac.uk/"},
  {c:"uk",name:"南安普顿大学",en:"University of Southampton",city:"南安普顿",qs:111,types:["授课","研究"],strong:["工程","计算机","海洋"],intro:"工程与计算机强（电子与计算机著名），罗素集团成员。",req:"认 list，均分 78–83；雅思 6.5。",url:"https://www.southampton.ac.uk/"},
  {c:"uk",name:"谢菲尔德大学",en:"University of Sheffield",city:"谢菲尔德",qs:82,types:["授课","研究"],strong:["工程","建筑","材料"],intro:"红砖名校，工程与建筑强，性价比高、城市宜居。",req:"认 list，均分 78–83；雅思 6.5。",url:"https://www.sheffield.ac.uk/"},
  {c:"uk",name:"诺丁汉大学",en:"University of Nottingham",city:"诺丁汉",qs:97,types:["授课","研究"],strong:["商科","工程","药学"],intro:"罗素集团，校园优美，商科与药学强，有中国宁波分校。",req:"认 list，均分 78–83；雅思 6.5。",url:"https://www.nottingham.ac.uk/"},
  {c:"uk",name:"伦敦玛丽女王大学",en:"Queen Mary University of London",city:"伦敦",qs:103,types:["授课","研究"],strong:["医学","法律","工程"],intro:"罗素集团，地处伦敦，医学与法律强，授课硕士对背景较友好。",req:"认 list，均分 78–82；雅思 6.5。",url:"https://www.qmul.ac.uk/"},
  {c:"uk",name:"圣安德鲁斯大学",en:"University of St Andrews",city:"圣安德鲁斯",qs:115,types:["授课","研究"],strong:["人文","国际关系","理学"],intro:"苏格兰最古老大学，人文与国际关系顶尖，精英小校。",req:"认 list，均分 80–85；雅思 7.0。",url:"https://www.st-andrews.ac.uk/"},
  {c:"kr",name:"延世大学",en:"Yonsei University",city:"首尔",qs:42,types:["授课","研究"],strong:["商科","医学","人文"],intro:"韩国顶尖私立名校（SKY 之一），商科与医学强，英文项目多。",req:"均分 83+；英文项目托福/雅思，韩文项目 TOPIK。",url:"https://www.yonsei.ac.kr/"},
  {c:"kr",name:"高丽大学",en:"Korea University",city:"首尔",qs:52,types:["授课","研究"],strong:["商科","法律","人文"],intro:"韩国顶尖私立（SKY 之一），商科与法律强，校友网络广。",req:"均分 82+；语言按项目。",url:"https://www.korea.ac.kr/"},
  {c:"kr",name:"浦项科技大学",en:"POSTECH",city:"浦项",qs:106,types:["授课","研究"],strong:["理工","材料","计算机"],intro:"韩国小而精的理工研究强校，师生比极高，研究导向。",req:"强理工背景；语言按项目。",url:"https://www.postech.ac.kr/"},
  {c:"de",name:"海德堡大学",en:"Heidelberg University",city:"海德堡",qs:86,types:["授课","研究"],strong:["医学","人文","自然科学"],intro:"德国最古老的大学，医学与人文顶尖，公立免学费。",req:"APS 审核 + 课程匹配，均分 80+；语言按项目。",url:"https://www.uni-heidelberg.de/en"},
  {c:"de",name:"柏林自由大学",en:"Freie Universität Berlin",city:"柏林",qs:98,types:["授课","研究"],strong:["人文","社科","自然科学"],intro:"柏林顶尖综合性大学，人文社科强，公立免学费。",req:"APS 审核 + 课程匹配；语言按项目。",url:"https://www.fu-berlin.de/en/"},
  {c:"de",name:"卡尔斯鲁厄理工",en:"Karlsruhe Institute of Technology",city:"卡尔斯鲁厄",qs:110,types:["授课","研究"],strong:["工程","计算机","自然科学"],intro:"德国理工强校（常与 MIT 类比），工程与计算机顶尖，公立免学费。",req:"APS 审核，强理工背景；语言按项目。",url:"https://www.kit.edu/english/"},
  {c:"de",name:"亚琛工业大学",en:"RWTH Aachen University",city:"亚琛",qs:104,types:["授课","研究"],strong:["机械","电气","工程"],intro:"德国工程顶尖（机械与电气著名），与产业联系紧密，公立免学费。",req:"APS 审核，强工科背景；语言按项目。",url:"https://www.rwth-aachen.de/"},
  {c:"jp",name:"东京工业大学",en:"Institute of Science Tokyo",city:"东京",qs:97,types:["授课","研究"],strong:["工程","理学","计算机"],intro:"日本理工顶尖（2024 与东京医科齿科合并为「科学东京」），工程与理学强。",req:"研究计划书；英文/日文项目。",url:"https://www.isct.ac.jp/en"},
  {c:"jp",name:"大阪大学",en:"Osaka University",city:"大阪",qs:95,types:["授课","研究"],strong:["工程","医学","理学"],intro:"日本顶尖国立大学，工程与医学强，研究实力深厚。",req:"研究计划书 + 语言；研究型需联系教授。",url:"https://www.osaka-u.ac.jp/en"},
  {c:"jp",name:"东北大学",en:"Tohoku University",city:"仙台",qs:102,types:["授课","研究"],strong:["材料","工程","理学"],intro:"日本顶尖国立，材料科学世界领先，研究导向。",req:"研究计划书 + 语言；研究型需内诺。",url:"https://www.tohoku.ac.jp/en/"},
  {c:"fr",name:"巴黎-萨克雷大学",en:"Université Paris-Saclay",city:"萨克雷",qs:76,types:["授课","研究"],strong:["理学","数学","工程"],intro:"法国理学与数学顶尖的研究型大学群，公立学费低。",req:"动机信 + 背景；英文项目语言。",url:"https://www.universite-paris-saclay.fr/en"},
  {c:"se",name:"乌普萨拉大学",en:"Uppsala University",city:"乌普萨拉",qs:87,types:["授课","研究"],strong:["人文","理学","医学"],intro:"北欧最古老的大学之一，综合实力强，英文项目多。",req:"均分 80+；雅思 6.5。",url:"https://www.uu.se/en"},
  {c:"nl",name:"乌得勒支大学",en:"Utrecht University",city:"乌得勒支",qs:113,types:["授课","研究"],strong:["社科","理学","人文"],intro:"荷兰综合研究型名校，社科与理学强，英文授课多。",req:"均分 80+；雅思 6.5。",url:"https://www.uu.nl/en"},
  {c:"nl",name:"莱顿大学",en:"Leiden University",city:"莱顿",qs:119,types:["授课","研究"],strong:["法律","人文","社科"],intro:"荷兰最古老的大学，法律与人文顶尖，国际法重镇。",req:"均分 80+；雅思 6.5。",url:"https://www.universiteitleiden.nl/en"},
  {c:"ch",name:"苏黎世大学",en:"University of Zurich",city:"苏黎世",qs:98,types:["授课","研究"],strong:["医学","经济","人文"],intro:"瑞士最大的综合性大学，医学与经济强，与 ETH 同城。",req:"强背景；语言按项目。",url:"https://www.uzh.ch/en.html"},
  {c:"dk",name:"丹麦技术大学",en:"Technical University of Denmark",city:"灵比",qs:105,types:["授课","研究"],strong:["工程","能源","生物工程"],intro:"北欧顶尖理工，工程与可再生能源强，英文授课多。",req:"强工科背景，均分 80+；雅思 6.5。",url:"https://www.dtu.dk/english"},
  {c:"cn",name:"南京大学",en:"Nanjing University",city:"南京",qs:90,types:["授课","研究"],strong:["理学","人文","计算机"],intro:"中国顶尖综合性大学，理学与人文深厚，国际项目增多。",req:"面向国际生/港澳台侨；语言按项目。",url:"https://www.nju.edu.cn/en/"},
  {c:"cn",name:"中国科学技术大学",en:"University of Science and Technology of China",city:"合肥",qs:134,types:["授课","研究"],strong:["理学","物理","计算机"],intro:"中国理工顶尖（量子科技重镇），小而精、研究导向。",req:"面向国际生/港澳台侨；语言按项目。",url:"https://en.ustc.edu.cn/"},
  {c:"ca",name:"滑铁卢大学",en:"University of Waterloo",city:"滑铁卢",qs:113,types:["授课","研究"],strong:["计算机","工程","数学"],intro:"加拿大计算机与工程顶尖，co-op 带薪实习全球闻名，就业极强。",req:"均分 83+；雅思 7.0。",url:"https://uwaterloo.ca/"},
  {c:"au",name:"皇家墨尔本理工",en:"RMIT University",city:"墨尔本",qs:119,types:["授课","研究"],strong:["设计","工程","商科"],intro:"应用型强校，设计与工程实用导向，地处墨尔本市中心。",req:"认 list，均分 70–78；雅思 6.5。",url:"https://www.rmit.edu.au/"},
  {c:"my",name:"马来西亚国民大学",en:"Universiti Kebangsaan Malaysia",city:"吉隆坡",qs:130,types:["授课","研究"],strong:["工程","社科","医学"],intro:"马来西亚研究型大学，费用极低，英文项目多，性价比高。",req:"均分 73+；雅思 6.0–6.5。",url:"https://www.ukm.my/"},
];
SCHOOLS.forEach(s=>{s.avg=(s.the&&s.arwu&&s.us)?Math.round((s.qs+s.the+s.arwu+s.us)/4):null;s.sel=s.qs;});

/* ══════════════════════════════════════════════════════
   专项项目库 — 选校匹配核心数据
   f: cs=CS/AI/数据  bus=商科/金融  eng=工程  sci=理学  soc=人文社科  art=建筑/设计
   g: 各背景「匹配」均分基准（±4 之内为匹配，>+4 保底，<-4 冲刺）
   il: 最低雅思等效分（低于则不显示）
   ══════════════════════════════════════════════════════ */
const PROGRAMS=[
  /* ── 英国 ── */
  {s:"牛津大学",c:"uk",f:"cs",p:"Computer Science MSc",qs:4,il:7.0,g:{"985":88,"211":91,"双非":95,"海本":86},note:"录取名额极少，需强科研背景与出色推荐信，双非几乎无先例",xkw:"牛津大学 CS硕士 申请 录取 经验"},
  {s:"剑桥大学",c:"uk",f:"cs",p:"Advanced Computer Science MPhil",qs:6,il:7.0,g:{"985":88,"211":91,"双非":95,"海本":87},note:"偏研究型，多需扎实科研背景，授课型名额极少",xkw:"剑桥大学 计算机 硕士 申请 经验"},
  {s:"帝国理工学院",c:"uk",f:"cs",p:"Computing / AI / ML MSc",qs:2,il:6.5,g:{"985":84,"211":87,"双非":91,"海本":82},note:"工程项目经历重要，双非需 90+ 且有实质作品集",xkw:"帝国理工 Computing MSc 申请 双非 录取 经验"},
  {s:"帝国理工学院",c:"uk",f:"bus",p:"Finance / Risk Management / Business Analytics MSc",qs:2,il:6.5,g:{"985":83,"211":86,"双非":90,"海本":81},note:"金融量化背景优先，CS+金融复合背景极受欢迎",xkw:"帝国理工 Finance MSc 录取 申请 经验"},
  {s:"伦敦政治经济学院",c:"uk",f:"bus",p:"Finance / Financial Mathematics / Quantitative Finance MSc",qs:62,il:7.0,g:{"985":84,"211":87,"双非":91,"海本":82},note:"社科强校实际声誉远超QS排名，量化/经济背景为重，均分 85+ 起步",xkw:"LSE 金融 数量金融 MSc 申请 录取 经验"},
  {s:"伦敦政治经济学院",c:"uk",f:"soc",p:"Economics / Statistics / Data Science MSc",qs:62,il:7.0,g:{"985":83,"211":86,"双非":90,"海本":81},note:"经济类顶尖，需数理功底，Economics 竞争尤为激烈",xkw:"LSE 经济 统计 数据科学 MSc 申请 经验"},
  {s:"伦敦大学学院",c:"uk",f:"cs",p:"Computer Science / Data Science / ML MSc",qs:9,il:6.5,g:{"985":82,"211":85,"双非":88,"海本":80},note:"认 list，双非需 88+，PS 需高度个性化，rolling 早递优势明显",xkw:"UCL CS 数据科学 ML硕士 申请 双非 经验"},
  {s:"伦敦大学学院",c:"uk",f:"bus",p:"Finance / Management / Business Analytics MSc",qs:9,il:6.5,g:{"985":80,"211":83,"双非":87,"海本":78},note:"招生量较大，商科 list 审核严格，双非 87+ 可冲",xkw:"UCL 商科 金融 管理 硕士 申请 经验"},
  {s:"伦敦大学学院",c:"uk",f:"art",p:"Architecture / Urban Planning MArch/MSc",qs:9,il:7.0,g:{"985":78,"211":81,"双非":84,"海本":76},note:"建筑与城市规划全球顶级，需作品集（Portfolio）",xkw:"UCL 建筑 城市规划 硕士 申请 作品集 经验"},
  {s:"爱丁堡大学",c:"uk",f:"cs",p:"AI / Informatics / Data Science MSc",qs:35,il:6.5,g:{"985":78,"211":81,"双非":84,"海本":76},note:"AI 老牌强校，中国学生多，10月开放后尽早递交",xkw:"爱丁堡大学 AI 计算机 Informatics 硕士 申请 经验"},
  {s:"爱丁堡大学",c:"uk",f:"bus",p:"Finance / Business Analytics / Management MSc",qs:35,il:7.0,g:{"985":77,"211":80,"双非":83,"海本":75},note:"商学院 list 略严于理工项目，双非 83+ 可申",xkw:"爱丁堡大学 商科 金融 商业分析 硕士 申请"},
  {s:"华威大学",c:"uk",f:"bus",p:"Finance / Business / WMS MSc (WBS)",qs:68,il:6.5,g:{"985":79,"211":82,"双非":85,"海本":77},note:"WBS 商学院口碑极好，双非 85+ 有竞争力，认 list 较严",xkw:"华威大学 WBS 商科 金融 硕士 申请 经验"},
  {s:"华威大学",c:"uk",f:"cs",p:"Computer Science / Data Analytics MSc",qs:68,il:6.5,g:{"985":76,"211":79,"双非":83,"海本":74},note:"数学系 CS 背景强，性价比高",xkw:"华威大学 CS 计算机 数据分析 硕士 申请"},
  {s:"伦敦国王学院",c:"uk",f:"cs",p:"CS / AI / Data Science MSc",qs:40,il:7.0,g:{"985":77,"211":80,"双非":83,"海本":75},note:"伦敦地段好，招生量大于帝国/UCL，双非 83+ 可冲",xkw:"KCL King's CS AI 数据科学 硕士 申请 录取"},
  {s:"曼彻斯特大学",c:"uk",f:"cs",p:"CS / Data Science / AI MSc",qs:40,il:6.5,g:{"985":75,"211":78,"双非":82,"海本":73},note:"三档 list，双非 82+ 稳申第二档，早递有明显优势",xkw:"曼彻斯特大学 CS 数据科学 AI 硕士 申请 经验"},
  {s:"曼彻斯特大学",c:"uk",f:"bus",p:"Finance / Business Analytics MSc (AMBS)",qs:40,il:6.5,g:{"985":76,"211":79,"双非":83,"海本":74},note:"AMBS 商学院认 list，双非 85+ 更稳，是热门申请校",xkw:"曼彻斯特大学 AMBS 金融 商业分析 硕士 申请"},
  {s:"布里斯托大学",c:"uk",f:"cs",p:"CS / Data Science / Robotics MSc",qs:57,il:6.5,g:{"985":74,"211":77,"双非":81,"海本":72},note:"工科强校性价比好，罗素集团成员，双非 80+ 可申",xkw:"布里斯托大学 CS 数据科学 硕士 申请 经验"},
  {s:"格拉斯哥大学",c:"uk",f:"cs",p:"CS / Data Science / Software Engineering MSc",qs:80,il:6.5,g:{"985":72,"211":75,"双非":79,"海本":70},note:"苏格兰名校，list 较宽，双非 79+ 可申，生活成本低",xkw:"格拉斯哥大学 CS 硕士 申请 经验"},
  {s:"谢菲尔德大学",c:"uk",f:"cs",p:"CS / Data Analytics / AI MSc",qs:82,il:6.5,g:{"985":71,"211":74,"双非":78,"海本":69},note:"红砖名校，申请友好，双非 78+ 可申",xkw:"谢菲尔德大学 CS AI 硕士 申请 经验"},
  {s:"南安普顿大学",c:"uk",f:"cs",p:"AI / CS / Data Science MSc",qs:111,il:6.5,g:{"985":72,"211":75,"双非":78,"海本":70},note:"ECS 学院电子与计算机传统强，罗素集团，申请友好",xkw:"南安普顿大学 AI CS 硕士 申请 经验"},
  {s:"诺丁汉大学",c:"uk",f:"cs",p:"CS / Data Science MSc",qs:97,il:6.5,g:{"985":71,"211":74,"双非":78,"海本":69},note:"有宁波分校，对双非相对友好，性价比高",xkw:"诺丁汉大学 CS 数据科学 硕士 申请 双非"},
  {s:"伯明翰大学",c:"uk",f:"cs",p:"CS / Data Science / AI MSc",qs:68,il:6.5,g:{"985":72,"211":75,"双非":79,"海本":70},note:"红砖名校申请友好，双非 79+ 可申",xkw:"伯明翰大学 CS AI 数据科学 硕士 申请"},
  {s:"利兹大学",c:"uk",f:"cs",p:"CS / Data Science / AI MSc",qs:77,il:6.5,g:{"985":71,"211":74,"双非":78,"海本":69},note:"传媒与商科知名，CS 性价比好",xkw:"利兹大学 CS 数据科学 硕士 申请 经验"},
  /* ── 美国 ── */
  {s:"卡内基梅隆大学",c:"us",f:"cs",p:"MSCS / MSML / MCDS / MSAI",qs:55,il:7.5,g:{"985":90,"211":93,"双非":97,"海本":88},note:"CS全球顶尖，竞争极激烈，需强项目/科研/实习，均分只是门槛",xkw:"CMU 计算机 硕士 申请 录取 经验 MSCS"},
  {s:"哥伦比亚大学",c:"us",f:"cs",p:"CS / Data Science / Applied Math MS (SEAS)",qs:43,il:7.0,g:{"985":83,"211":86,"双非":89,"海本":81},note:"纽约就业资源顶级，招生量较大，双非 89+ 有机会",xkw:"哥伦比亚大学 SEAS CS 数据科学 硕士 申请 经验"},
  {s:"哥伦比亚大学",c:"us",f:"bus",p:"Financial Engineering / Financial Economics MS",qs:43,il:7.0,g:{"985":84,"211":87,"双非":90,"海本":82},note:"量化金融强，需数理背景，IEOR 系闻名，华尔街直通",xkw:"哥伦比亚大学 金融工程 MFE 硕士 申请 经验"},
  {s:"纽约大学",c:"us",f:"cs",p:"CS / Data Science / Courant MS",qs:58,il:7.0,g:{"985":80,"211":83,"双非":86,"海本":78},note:"纽约位置好，Courant 数学系和 Tandon 工学院，对背景包容度高",xkw:"NYU 纽约大学 CS 数据科学 硕士 申请 经验"},
  {s:"纽约大学",c:"us",f:"bus",p:"Finance / Quantitative Finance / MBA (Stern)",qs:58,il:7.0,g:{"985":80,"211":83,"双非":86,"海本":78},note:"Stern 商学院声誉好，金融就业资源极丰富",xkw:"NYU Stern 金融 量化金融 硕士 申请 经验"},
  {s:"佐治亚理工学院",c:"us",f:"cs",p:"MSCS / MSECE / Analytics MS",qs:142,il:7.0,g:{"985":79,"211":82,"双非":85,"海本":77},note:"公立理工强校，性价比极高，CS 和 ECE 全美前列",xkw:"Georgia Tech 佐治亚理工 CS MSCS 硕士 申请 经验"},
  {s:"伊利诺伊大学香槟",c:"us",f:"cs",p:"CS / ECE / Statistics MS",qs:74,il:7.0,g:{"985":80,"211":83,"双非":86,"海本":78},note:"CS 老牌强校，需有实质项目经历，公立性价比高",xkw:"UIUC 伊利诺伊 CS ECE 硕士 申请 经验"},
  {s:"德州大学奥斯汀",c:"us",f:"cs",p:"CS / ECE / Data Science MS",qs:72,il:7.0,g:{"985":78,"211":81,"双非":84,"海本":76},note:"公立旗舰，奥斯汀科技产业活跃，无州个税，性价比好",xkw:"UT Austin 德克萨斯 CS ECE 硕士 申请 经验"},
  {s:"加州大学圣地亚哥",c:"us",f:"cs",p:"CS / Data Science / AI MS",qs:81,il:7.0,g:{"985":78,"211":81,"双非":84,"海本":76},note:"生物医学与CS并强，气候宜人，生物+CS方向就业极好",xkw:"UCSD 圣地亚哥 CS 数据科学 硕士 申请 经验"},
  {s:"华盛顿大学",c:"us",f:"cs",p:"CS / DS / ML MS",qs:92,il:7.0,g:{"985":79,"211":82,"双非":85,"海本":77},note:"西雅图微软/亚马逊旁，实习资源顶级，竞争激烈",xkw:"UW 华盛顿大学 CS 数据科学 硕士 申请 经验"},
  {s:"波士顿大学",c:"us",f:"cs",p:"CS / Data Science / AI MS",qs:94,il:6.5,g:{"985":74,"211":77,"双非":80,"海本":72},note:"招生量大，对背景包容度高，波士顿名校集群就业好",xkw:"波士顿大学 BU CS 数据科学 硕士 申请 经验"},
  {s:"普渡大学",c:"us",f:"eng",p:"Engineering MS (ECE / ME / IE 等)",qs:100,il:6.0,g:{"985":73,"211":76,"双非":80,"海本":71},note:"公立理工强校，工程申请相对友好，性价比高",xkw:"普渡大学 工程 ECE 硕士 申请 经验"},
  /* ── 澳大利亚 ── */
  {s:"墨尔本大学",c:"au",f:"cs",p:"CS / IT / Data Science MC",qs:22,il:6.5,g:{"985":77,"211":80,"双非":83,"海本":75},note:"澳洲第一，认 list，双非 83+ 可申主流项目，rolling 早递",xkw:"墨尔本大学 CS IT 数据科学 硕士 申请 经验 均分"},
  {s:"墨尔本大学",c:"au",f:"bus",p:"Commerce / Finance / Accounting MC",qs:22,il:6.5,g:{"985":76,"211":79,"双非":83,"海本":74},note:"商科 list 严格，双非 83+ 可申，毕业认可度高",xkw:"墨尔本大学 商科 金融 会计 硕士 申请"},
  {s:"新南威尔士大学",c:"au",f:"cs",p:"CS / IT / Data Science MC",qs:19,il:6.5,g:{"985":74,"211":77,"双非":81,"海本":72},note:"工程强，三学期节奏快，双非 80+ 申请，悉尼就业好",xkw:"UNSW 新南威尔士 CS IT 硕士 申请 经验"},
  {s:"悉尼大学",c:"au",f:"cs",p:"CS / Data Science / IT MC",qs:28,il:6.5,g:{"985":75,"211":78,"双非":82,"海本":73},note:"认 list 分档，双非 82+ 可申，历史最悠久澳洲名校",xkw:"悉尼大学 CS 数据科学 硕士 申请 经验"},
  {s:"悉尼大学",c:"au",f:"bus",p:"Commerce / Finance / Business Analytics MC",qs:28,il:6.5,g:{"985":74,"211":77,"双非":81,"海本":72},note:"商科热门，城市资源丰富，双非 80+ 可尝试",xkw:"悉尼大学 商科 金融 商业分析 硕士 申请"},
  {s:"澳大利亚国立大学",c:"au",f:"cs",p:"CS / Applied Data Analytics MC",qs:29,il:6.5,g:{"985":76,"211":79,"双非":83,"海本":74},note:"研究氛围浓，社科政治强，堪培拉生活成本低",xkw:"ANU 澳大利亚国立 CS 数据分析 硕士 申请"},
  {s:"莫纳什大学",c:"au",f:"cs",p:"IT / Data Science / Networks MC",qs:31,il:6.5,g:{"985":72,"211":75,"双非":79,"海本":70},note:"申请友好，双非 78+ 可申，多校区选择灵活",xkw:"莫纳什大学 IT 数据科学 硕士 申请 经验"},
  {s:"昆士兰大学",c:"au",f:"cs",p:"CS / IT / Data Science MC",qs:40,il:6.5,g:{"985":72,"211":75,"双非":79,"海本":70},note:"布里斯班气候宜人，生活成本低，双非 78+ 可申",xkw:"昆士兰大学 UQ CS IT 硕士 申请 经验"},
  /* ── 加拿大 ── */
  {s:"多伦多大学",c:"ca",f:"cs",p:"CS / Applied Computing / AI MS",qs:32,il:7.0,g:{"985":85,"211":88,"双非":91,"海本":83},note:"加拿大第一，竞争极激烈，需强项目背景，双非 91+ 才有机会",xkw:"多伦多大学 UofT CS 计算机 硕士 申请 经验 录取"},
  {s:"多伦多大学",c:"ca",f:"bus",p:"Finance / MFin / MBA (Rotman)",qs:32,il:7.0,g:{"985":83,"211":86,"双非":89,"海本":81},note:"Rotman 声誉顶级，MFin 量化金融强，需 GMAT/GMAC",xkw:"多伦多大学 Rotman 金融 MBA MFin 申请 经验"},
  {s:"英属哥伦比亚大学",c:"ca",f:"cs",p:"CS / Data Science MS",qs:45,il:7.0,g:{"985":81,"211":84,"双非":87,"海本":79},note:"温哥华，CS 竞争激烈，双非 87+ 有机会，移民友好",xkw:"UBC 英属哥伦比亚 CS 计算机 硕士 申请 经验"},
  {s:"麦吉尔大学",c:"ca",f:"cs",p:"CS / Software Engineering MS",qs:30,il:6.5,g:{"985":80,"211":83,"双非":86,"海本":78},note:"蒙特利尔，CS 强，生活成本低于温哥华，英法双语城市",xkw:"麦吉尔大学 McGill CS 计算机 硕士 申请 经验"},
  {s:"滑铁卢大学",c:"ca",f:"cs",p:"CS / Electrical & Computer Engineering MASc/MEng",qs:113,il:7.0,g:{"985":82,"211":85,"双非":88,"海本":80},note:"Co-op 带薪实习全球闻名，CS 和工程顶尖，就业极强",xkw:"滑铁卢大学 Waterloo CS 工程 硕士 申请 Co-op 经验"},
  /* ── 新加坡 ── */
  {s:"新加坡国立大学",c:"sg",f:"cs",p:"CS / IS / AI / Software Engineering MSc",qs:10,il:6.5,g:{"985":84,"211":87,"双非":90,"海本":82},note:"亚洲顶尖，竞争极激烈，双非需 90+ 且强项目背景",xkw:"NUS 新加坡国立 CS AI 硕士 申请 经验 双非录取"},
  {s:"新加坡国立大学",c:"sg",f:"bus",p:"Business Analytics / Finance / MBA MSc",qs:10,il:6.5,g:{"985":83,"211":86,"双非":89,"海本":81},note:"商业分析热门，就业极好，商科竞争不亚于 CS",xkw:"NUS 新加坡国立 商业分析 金融 MBA 申请 经验"},
  {s:"南洋理工大学",c:"sg",f:"cs",p:"CS / AI / Data Science MSc",qs:12,il:6.5,g:{"985":82,"211":85,"双非":88,"海本":80},note:"工程强，招生量稍多于 NUS，整体竞争激烈",xkw:"NTU 南洋理工 CS AI 数据科学 硕士 申请 经验"},
  /* ── 香港 ── */
  {s:"香港大学",c:"hk",f:"cs",p:"CS / Data Science MSc",qs:11,il:6.5,g:{"985":81,"211":84,"双非":87,"海本":79},note:"rolling 录取，越早越好，双非 87+ 可冲，10月开放即递",xkw:"港大 HKU CS 数据科学 硕士 申请 经验 录取"},
  {s:"香港大学",c:"hk",f:"bus",p:"Finance / Business Administration / Economics MSc",qs:11,il:6.5,g:{"985":80,"211":83,"双非":86,"海本":78},note:"港大商科认可度高，list 审核严格，双非 86+ 可申",xkw:"港大 HKU 商科 金融 经济 硕士 申请 经验"},
  {s:"香港科技大学",c:"hk",f:"cs",p:"CS / Big Data Technology MSc",qs:33,il:6.5,g:{"985":81,"211":84,"双非":87,"海本":79},note:"年轻顶尖，工程强，CS 和商业分析热门，rolling 早递",xkw:"港科大 HKUST CS 大数据 硕士 申请 经验"},
  {s:"香港科技大学",c:"hk",f:"bus",p:"Business Analytics / Finance / Accounting MSc",qs:33,il:6.5,g:{"985":80,"211":83,"双非":86,"海本":78},note:"商业分析闻名，就业导向明显，双非 85+ 可冲",xkw:"港科大 HKUST 商业分析 金融 会计 硕士 申请"},
  {s:"香港中文大学",c:"hk",f:"bus",p:"Finance / Accounting / Business MSc",qs:18,il:6.5,g:{"985":79,"211":82,"双非":85,"海本":77},note:"商科强，中英双语，认可度高，对背景相对友好",xkw:"中大 CUHK 商科 金融 会计 硕士 申请 经验"},
  {s:"香港城市大学",c:"hk",f:"cs",p:"CS / Data Science / AI MSc",qs:52,il:6.5,g:{"985":77,"211":80,"双非":83,"海本":75},note:"对背景相对友好，数据科学热门，rolling 申请",xkw:"香港城市大学 CityU CS 数据科学 AI 硕士 申请"},
  {s:"香港理工大学",c:"hk",f:"cs",p:"Computing / Data Science / IT MSc",qs:50,il:6.0,g:{"985":76,"211":79,"双非":83,"海本":74},note:"应用导向，IT 和设计强，对双非相对宽松，性价比好",xkw:"香港理工大学 PolyU 计算机 IT 硕士 申请 经验"},
  /* ── 瑞士 ── */
  {s:"苏黎世联邦理工",c:"ch",f:"cs",p:"CS / Data Science / Computational Science MSc",qs:8,il:7.0,g:{"985":87,"211":90,"双非":94,"海本":85},note:"欧陆理工顶峰，门槛极高，需极强数理背景，录取率低",xkw:"ETH 苏黎世联邦理工 CS 数据科学 硕士 申请 经验"},
  {s:"苏黎世联邦理工",c:"ch",f:"eng",p:"Electrical Engineering / Robotics / Mechanical MSc",qs:8,il:7.0,g:{"985":86,"211":89,"双非":93,"海本":84},note:"工程世界顶尖，数理要求极高，成绩需换算瑞士体系",xkw:"ETH 苏黎世 工程 Robotics 硕士 申请 录取"},
  {s:"洛桑联邦理工",c:"ch",f:"cs",p:"CS / Data Science / Communication Systems MSc",qs:22,il:7.0,g:{"985":84,"211":87,"双非":91,"海本":82},note:"法语区顶尖，CS 强，门槛仅次于 ETH，动机信是核心",xkw:"EPFL 洛桑 CS 数据科学 硕士 申请 经验"},
  /* ── 德国 ── */
  {s:"慕尼黑工业大学",c:"de",f:"cs",p:"Informatics / Data Engineering & Analytics MSc",qs:25,il:6.5,g:{"985":80,"211":83,"双非":87,"海本":78},note:"需 APS 认证+课程匹配，公立免学费，竞争激烈",xkw:"TUM 慕尼黑工业 计算机 Informatics 硕士 申请 APS 经验"},
  {s:"慕尼黑工业大学",c:"de",f:"eng",p:"Electrical / Mechanical / Aerospace Engineering MSc",qs:25,il:6.5,g:{"985":79,"211":82,"双非":86,"海本":77},note:"工程顶尖，课程描述(Course Description)是申请核心材料",xkw:"TUM 慕尼黑工业 工程 硕士 申请 APS 经验"},
  {s:"卡尔斯鲁厄理工",c:"de",f:"cs",p:"Computer Science / AI / Information Engineering MSc",qs:110,il:6.5,g:{"985":77,"211":80,"双非":83,"海本":75},note:"德国理工强校，英文项目增多，APS 必须，免学费",xkw:"KIT 卡尔斯鲁厄 CS AI 硕士 申请 经验"},
  {s:"亚琛工业大学",c:"de",f:"eng",p:"Mechanical / Electrical / Computer Engineering MSc",qs:104,il:6.5,g:{"985":77,"211":80,"双非":83,"海本":75},note:"德国机械和电气著名，免学费，需 APS 和课程匹配",xkw:"RWTH Aachen 亚琛 工程 硕士 申请 APS 经验"},
  /* ── 日本 ── */
  {s:"东京大学",c:"jp",f:"cs",p:"CS / Information Science MSc（英文 G30/UTokyo Global）",qs:39,il:6.5,g:{"985":82,"211":85,"双非":88,"海本":80},note:"英文名额有限，研究型需内诺，竞争激烈，研究计划书是核心",xkw:"东京大学 UTokyo CS 硕士 英文项目 申请 内诺 经验"},
  {s:"京都大学",c:"jp",f:"sci",p:"理学/工学研究科（英文项目）",qs:64,il:6.5,g:{"985":80,"211":83,"双非":86,"海本":78},note:"自由学风，基础研究强，研究型需联系导师拿内诺",xkw:"京都大学 理学 工学 研究生 申请 内诺 经验"},
  /* ── 韩国 ── */
  {s:"首尔国立大学",c:"kr",f:"cs",p:"CS / AI / Data Science MS（英文）",qs:38,il:6.5,g:{"985":82,"211":85,"双非":87,"海本":80},note:"韩国第一，GKS 奖学金机会多，英文项目名额有限",xkw:"首尔国立大学 SNU CS AI 硕士 申请 GKS奖学金 经验"},
  {s:"延世大学",c:"kr",f:"bus",p:"Business / Finance / Management MS（英文）",qs:42,il:6.5,g:{"985":80,"211":83,"双非":85,"海本":78},note:"SKY 之一，商科强，英文环境国际化，GKS 奖学金可申",xkw:"延世大学 Yonsei 商科 金融 硕士 申请 经验"},
  /* ── 荷兰 ── */
  {s:"代尔夫特理工大学",c:"nl",f:"eng",p:"Engineering / Architecture / Aerospace MSc",qs:48,il:7.0,g:{"985":78,"211":81,"双非":84,"海本":76},note:"荷兰工程顶尖，建筑世界知名，英文授课多，numerus fixus 专业早截止",xkw:"代尔夫特 TU Delft 工程 建筑 硕士 申请 经验"},
  {s:"阿姆斯特丹大学",c:"nl",f:"soc",p:"Social Science / Media / AI / Business MSc",qs:60,il:6.5,g:{"985":77,"211":80,"双非":83,"海本":75},note:"社科传媒强，英文项目多，住宿紧张需尽早申 housing",xkw:"阿姆斯特丹大学 UvA 社科 传媒 AI 硕士 申请"},
  /* ── 瑞典 ── */
  {s:"皇家理工学院",c:"se",f:"cs",p:"CS / Data Science / Systems Engineering MSc",qs:82,il:6.5,g:{"985":78,"211":81,"双非":84,"海本":76},note:"瑞典理工顶尖，英文硕士多，1月中旬截止，务必早递",xkw:"KTH 皇家理工 CS 数据科学 硕士 申请 经验 瑞典"},
  {s:"隆德大学",c:"se",f:"eng",p:"Engineering / Computer Science / Data Science MSc",qs:71,il:6.5,g:{"985":77,"211":80,"双非":83,"海本":75},note:"综合性名校，英文项目多，1月截止，SI奖学金可争取",xkw:"隆德大学 Lund CS 工程 硕士 申请 经验 SI奖学金"},
  /* ── 比利时 ── */
  {s:"鲁汶大学",c:"be",f:"cs",p:"CS / AI / Engineering MSc",qs:59,il:6.5,g:{"985":78,"211":81,"双非":84,"海本":76},note:"比利时顶尖，公立学费极低，英文项目质量高，被低估的选择",xkw:"KU Leuven 鲁汶大学 CS AI 工程 硕士 申请 经验"},
  /* ── 丹麦 ── */
  {s:"哥本哈根大学",c:"dk",f:"sci",p:"Data Science / Life Science / Social Science MSc",qs:90,il:6.5,g:{"985":77,"211":80,"双非":83,"海本":75},note:"北欧综合顶尖，英文项目多，生命科学和社科强",xkw:"哥本哈根大学 KU 数据科学 生命科学 硕士 申请"},
  /* ── 法国 ── */
  {s:"巴黎综合理工学院",c:"fr",f:"cs",p:"Engineering / Data Science / AI / CS MSc",qs:43,il:7.0,g:{"985":82,"211":85,"双非":88,"海本":80},note:"法国工程顶尖，Campus France 必须，英文项目有限",xkw:"巴黎综合理工 IP Paris 工程 CS 硕士 申请 经验"},
  {s:"巴黎文理研究大学",c:"fr",f:"sci",p:"Science / Math / Computer Science MSc",qs:34,il:6.5,g:{"985":81,"211":84,"双非":87,"海本":79},note:"PSL 理学顶尖，研究导向，动机信是核心，免学费",xkw:"PSL 巴黎文理 理学 数学 计算机 硕士 申请 经验"},
  /* ── 马来西亚 ── */
  {s:"马来亚大学",c:"my",f:"cs",p:"CS / IT / Data Science MSc",qs:56,il:6.0,g:{"985":72,"211":75,"双非":78,"海本":70},note:"马来西亚最高排名，性价比极高，生活成本低，华人社区成熟",xkw:"马来亚大学 UM CS IT 硕士 申请 经验 性价比"},
  /* ── 新西兰 ── */
  {s:"奥克兰大学",c:"nz",f:"cs",p:"CS / IT / Data Science PGDip / ME",qs:67,il:6.5,g:{"985":73,"211":76,"双非":80,"海本":71},note:"新西兰最高排名，毕业工签3年，移民友好，性价比高",xkw:"奥克兰大学 CS IT 数据科学 硕士 申请 经验 新西兰"},
];

const SC_MONO={"麻省理工学院":"MIT","哈佛大学":"H","牛津大学":"Ox","斯坦福大学":"S","剑桥大学":"Cam","帝国理工学院":"IC","加州理工学院":"CT","哥伦比亚大学":"Col","加州大学伯克利":"UCB","伦敦大学学院":"UCL","康奈尔大学":"Cor","密歇根大学安娜堡":"UM","纽约大学":"NYU","爱丁堡大学":"Ed","伦敦国王学院":"KCL","曼彻斯特大学":"Man","布里斯托大学":"Bri","墨尔本大学":"Melb","悉尼大学":"USyd","新南威尔士大学":"UNSW","莫纳什大学":"Mon","昆士兰大学":"UQ","澳大利亚国立大学":"ANU","普林斯顿大学":"Pr","耶鲁大学":"Y","芝加哥大学":"UChi","宾夕法尼亚大学":"UPenn","约翰霍普金斯大学":"JHU","加州大学洛杉矶":"UCLA","杜克大学":"Duke","卡内基梅隆大学":"CMU","佐治亚理工学院":"GT","伊利诺伊大学香槟":"UIUC","德州大学奥斯汀":"UT","加州大学圣地亚哥":"UCSD","华盛顿大学":"UW","格拉斯哥大学":"Gla","西澳大学":"UWA","多伦多大学":"UofT","英属哥伦比亚大学":"UBC","麦吉尔大学":"McG","新加坡国立大学":"NUS","南洋理工大学":"NTU","香港大学":"HKU","苏黎世联邦理工":"ETH","洛桑联邦理工":"EPFL","阿姆斯特丹大学":"UvA","代尔夫特理工大学":"Delft","东京大学":"UTok","京都大学":"Kyoto","首尔国立大学":"SNU","慕尼黑工业大学":"TUM","慕尼黑大学":"LMU","伦敦政治经济学院":"LSE","华威大学":"War","杜伦大学":"Dur","阿德莱德大学":"Adl","悉尼科技大学":"UTS","奥克兰大学":"UoA","马来亚大学":"UM","阿尔伯塔大学":"UAlb","香港中文大学":"CUHK","香港科技大学":"HKUST","香港城市大学":"CityU","香港理工大学":"PolyU","巴黎文理研究大学":"PSL","索邦大学":"Sorb","巴黎综合理工学院":"IPP","皇家理工学院":"KTH","隆德大学":"Lund","鲁汶大学":"KUL","哥本哈根大学":"UCph","清华大学":"THU","北京大学":"PKU","复旦大学":"Fudan","上海交通大学":"SJTU","浙江大学":"ZJU","西北大学":"NW","布朗大学":"Brown","波士顿大学":"BU","普渡大学":"Pur","威斯康星大学麦迪逊":"UWisc","加州大学戴维斯":"UCD","莱斯大学":"Rice","伯明翰大学":"Bham","利兹大学":"Leeds","南安普顿大学":"Soton","谢菲尔德大学":"Shef","诺丁汉大学":"Nott","伦敦玛丽女王大学":"QMUL","圣安德鲁斯大学":"StA","延世大学":"Yon","高丽大学":"KoU","浦项科技大学":"POS","海德堡大学":"Heid","柏林自由大学":"FU","卡尔斯鲁厄理工":"KIT","亚琛工业大学":"RWTH","东京工业大学":"ScTok","大阪大学":"Osaka","东北大学":"Tohoku","巴黎-萨克雷大学":"Sac","乌普萨拉大学":"Upp","乌得勒支大学":"UU","莱顿大学":"Lei","苏黎世大学":"UZH","丹麦技术大学":"DTU","南京大学":"NJU","中国科学技术大学":"USTC","滑铁卢大学":"UWat","皇家墨尔本理工":"RMIT","马来西亚国民大学":"UKM"};
const SC_ONE={"麻省理工学院":"全球工程与计算机的标杆","哈佛大学":"综合声誉全球第一","牛津大学":"文理皆顶尖的古典名校","斯坦福大学":"硅谷心脏，创业与工程","剑桥大学":"理工与数学的传统强校","帝国理工学院":"纯理工医商，地处伦敦","加州理工学院":"极小而精的理工殿堂","哥伦比亚大学":"纽约名校，金融与工程","加州大学伯克利":"公立第一，计算机一流","伦敦大学学院":"专业极广的伦敦巨校","康奈尔大学":"藤校里的工程应用强者","密歇根大学安娜堡":"公立巨头，性价比之选","纽约大学":"曼哈顿中心，商科传媒强","爱丁堡大学":"苏格兰名校，AI 见长","伦敦国王学院":"伦敦核心，医法人文强","曼彻斯特大学":"红砖代表，商科声誉高","布里斯托大学":"工程计算机强，城市宜居","墨尔本大学":"澳洲综合实力第一","悉尼大学":"历史最悠久的澳洲名校","新南威尔士大学":"工程商科，就业导向强","莫纳什大学":"专业最全，申请友好","昆士兰大学":"八校之一，生活宜人","澳大利亚国立大学":"首都研究型，社科政治强","普林斯顿大学":"藤校学术殿堂，理论极强","耶鲁大学":"藤校，法商人文强","芝加哥大学":"学术严谨，经济学重镇","宾夕法尼亚大学":"沃顿商学院全球顶尖","约翰霍普金斯大学":"医学与公共卫生顶尖","加州大学洛杉矶":"公立顶尖，专业全","杜克大学":"南方藤校，商医工强","卡内基梅隆大学":"计算机与 AI 第一梯队","佐治亚理工学院":"公立理工，工程计算机强","伊利诺伊大学香槟":"工程计算机老牌强校","德州大学奥斯汀":"公立旗舰，科技产业活跃","加州大学圣地亚哥":"理工生物强，海滨名校","华盛顿大学":"西雅图公立，计算机医学强","格拉斯哥大学":"苏格兰古老名校，性价比高","西澳大学":"八校之一，资源工程强","多伦多大学":"加拿大第一，综合顶尖","英属哥伦比亚大学":"西海岸名校，环境优美","麦吉尔大学":"加拿大哈佛，医法强","新加坡国立大学":"亚洲顶尖，综合强","南洋理工大学":"工程商科强，校园美","香港大学":"香港最古老，国际化高","苏黎世联邦理工":"欧陆理工之巅","洛桑联邦理工":"瑞士理工，工程强","阿姆斯特丹大学":"荷兰名校，社科传媒强","代尔夫特理工大学":"荷兰理工，工程顶尖","东京大学":"日本学术重镇","京都大学":"自由学风，基础研究强","首尔国立大学":"韩国第一学府","慕尼黑工业大学":"德国工程最强","慕尼黑大学":"慕尼黑综合名校","伦敦政治经济学院":"社科殿堂，经济金融顶尖","华威大学":"商科数学强，就业口碑好","杜伦大学":"古老学院制，人文商科强","阿德莱德大学":"八校之一，成本低移民友好","悉尼科技大学":"年轻实用，IT 设计强","奥克兰大学":"新西兰第一，工签移民友好","马来亚大学":"马来西亚第一，费用极低","阿尔伯塔大学":"能源工程强，AI 重镇","香港中文大学":"书院制名校，商医传媒强","香港科技大学":"年轻顶尖，商科工程强","香港城市大学":"应用导向，商科数据热","香港理工大学":"设计与酒店管理顶尖","巴黎文理研究大学":"巴黎顶尖联合体，理学人文强","索邦大学":"巴黎名校，人文理学深厚","巴黎综合理工学院":"法国工程顶尖，QS 前50","皇家理工学院":"瑞典理工，工程计算机强","隆德大学":"瑞典综合名校，专业全","鲁汶大学":"比利时最强，工程生物顶尖","哥本哈根大学":"北欧顶尖，生命科学强","清华大学":"中国工程理工标杆","北京大学":"中国文理综合顶尖","复旦大学":"上海名校，经济新闻强","上海交通大学":"工程医学强，国际化高","浙江大学":"学科齐全，工程突出","西北大学":"凯洛格商学院与传媒强","布朗大学":"藤校，开放课程与人文强","波士顿大学":"波士顿大校，专业全招生多","普渡大学":"公立理工，工程航天强","威斯康星大学麦迪逊":"公立研究强校，学科齐全","加州大学戴维斯":"农业生命科学顶尖","莱斯大学":"小而精，工程理学强","伯明翰大学":"红砖名校，专业全","利兹大学":"红砖名校，传媒商科热","南安普顿大学":"工程计算机强","谢菲尔德大学":"红砖名校，工程建筑强","诺丁汉大学":"罗素集团，商科药学强","伦敦玛丽女王大学":"伦敦罗素，医法强","圣安德鲁斯大学":"苏格兰古老，人文国关强","延世大学":"韩国SKY，商科医学强","高丽大学":"韩国SKY，商科法律强","浦项科技大学":"韩国理工，小而精研究强","海德堡大学":"德国最古老，医学人文强","柏林自由大学":"柏林名校，人文社科强","卡尔斯鲁厄理工":"德国理工，工程计算机强","亚琛工业大学":"德国工程顶尖，机械电气强","东京工业大学":"日本理工顶尖","大阪大学":"关西名校，工程医学强","东北大学":"材料科学世界领先","巴黎-萨克雷大学":"法国理学数学顶尖","乌普萨拉大学":"北欧古老综合名校","乌得勒支大学":"荷兰研究名校，社科理学强","莱顿大学":"荷兰最古老，法律人文强","苏黎世大学":"瑞士综合名校，医学经济强","丹麦技术大学":"北欧理工，工程能源强","南京大学":"理学人文深厚的名校","中国科学技术大学":"理工顶尖，量子科技强","滑铁卢大学":"计算机工程强，co-op 闻名","皇家墨尔本理工":"应用型，设计工程实用","马来西亚国民大学":"马来研究型，费用极低"};
const SC_MOTTO={"麻省理工学院":"Mens et Manus｜手脑并用","哈佛大学":"Veritas｜真理","牛津大学":"Dominus Illuminatio Mea｜主乃我的明灯","斯坦福大学":"Die Luft der Freiheit weht｜自由之风永远吹拂","剑桥大学":"Hinc lucem et pocula sacra｜启蒙之所，智慧之泉","帝国理工学院":"Scientia imperii decus et tutamen｜科学乃国之荣耀与守护","加州理工学院":"The truth shall make you free｜真理使人自由","哥伦比亚大学":"In lumine Tuo videbimus lumen｜在你的光中得见光明","加州大学伯克利":"Fiat Lux｜要有光","伦敦大学学院":"Cuncti adsint meritaeque expectent praemia palmae｜唯德才者得其荣","康奈尔大学":"Any person, any study｜任何人，任何学问","密歇根大学安娜堡":"Artes, Scientia, Veritas｜艺术、科学、真理","纽约大学":"Perstare et praestare｜坚持不懈，追求卓越","伦敦国王学院":"Sancte et Sapienter｜神圣而智慧","曼彻斯特大学":"Cognitio, sapientia, humanitas｜知识、智慧、人文","布里斯托大学":"Vim promovet insitam｜激发内在的力量","墨尔本大学":"Postera crescam laude｜我将因后人赞誉而成长","悉尼大学":"Sidere mens eadem mutato｜繁星纵变，智慧永恒","新南威尔士大学":"Scientia manu et mente｜理论与实践并重","莫纳什大学":"Ancora imparo｜我仍在学习","昆士兰大学":"Scientia ac labore｜以知识与努力","澳大利亚国立大学":"Naturam primum cognoscere rerum｜先究万物之本","普林斯顿大学":"Dei sub numine viget｜在神的庇佑下繁荣","耶鲁大学":"Lux et Veritas｜光明与真理","芝加哥大学":"Crescat scientia, vita excolatur｜知识增长，生命丰盈","宾夕法尼亚大学":"Leges sine moribus vanae｜法无德则虚","约翰霍普金斯大学":"Veritas vos liberabit｜真理使你自由","加州大学洛杉矶":"Fiat Lux｜要有光","杜克大学":"Eruditio et Religio｜博学与信仰","卡内基梅隆大学":"My heart is in the work｜全心投入工作","佐治亚理工学院":"Progress and Service｜进步与服务","伊利诺伊大学香槟":"Learning and Labor｜学习与劳动","德州大学奥斯汀":"Disciplina Praesidium Civitatis｜教育乃社会之守护","加州大学圣地亚哥":"Fiat Lux｜要有光","华盛顿大学":"Lux Sit｜愿有光","格拉斯哥大学":"Via, Veritas, Vita｜道路、真理、生命","西澳大学":"Seek Wisdom｜追求智慧","多伦多大学":"Velut arbor ævo｜随岁月成长如大树","英属哥伦比亚大学":"Tuum est｜事在于你","麦吉尔大学":"Grandescunt Aucta Labore｜因勤勉而壮大","香港大学":"Sapientia et Virtus｜明德格物","首尔国立大学":"Veritas lux mea｜真理是我的光","伦敦政治经济学院":"Rerum cognoscere causas｜探究万物之因","阿德莱德大学":"Sub Cruce Lumen｜南十字星下之光","奥克兰大学":"Ingenio et labore｜以才智与勤奋","马来亚大学":"Ilmu Punca Kemajuan｜知识乃进步之源","阿尔伯塔大学":"Quaecumque vera｜凡真实之事","香港中文大学":"博文约礼｜博学于文，约之以礼","香港理工大学":"開物成務 勵學利民｜启迪智慧，惠泽社群","皇家理工学院":"Vetenskap och Konst｜科学与艺术","鲁汶大学":"Sedes Sapientiae｜智慧之座","清华大学":"自强不息，厚德载物","复旦大学":"博学而笃志，切问而近思","上海交通大学":"饮水思源，爱国荣校","浙江大学":"求是创新","西北大学":"Quaecumque sunt vera｜凡真实之事","布朗大学":"In Deo Speramus｜我们信靠上帝","威斯康星大学麦迪逊":"Numen Lumen｜神明，光明","加州大学戴维斯":"Fiat Lux｜要有光","伯明翰大学":"Per Ardua Ad Alta｜历尽艰辛，登至高峰","利兹大学":"Et augebitur scientia｜知识必增长","圣安德鲁斯大学":"Aien Aristeuein｜永远追求卓越","海德堡大学":"Semper Apertus｜永远开放","柏林自由大学":"Veritas Iustitia Libertas｜真理 正义 自由","东北大学":"Research First｜研究第一","乌得勒支大学":"Sol Iustitiae Illustra Nos｜公义之日照耀我们","莱顿大学":"Praesidium Libertatis｜自由的堡垒","南京大学":"诚朴雄伟，励学敦行","中国科学技术大学":"红专并进，理实交融","滑铁卢大学":"Concordia cum veritate｜与真理和谐","皇家墨尔本理工":"Perita manus mens exculta｜熟练之手，教化之心"};
function scColor(name){const p=["#6366f1","#8b5cf6","#0ea5e9","#10b981","#f59e0b","#ef4444","#ec4899","#14b8a6","#d946ef","#f97316"];let h=0;for(const ch of name)h=(h*31+ch.charCodeAt(0))&0xfffffff;return p[h%p.length];}

const FLAG={};const CNAME={};COUNTRIES.forEach(c=>{FLAG[c.id]=c.flag;CNAME[c.id]=c.name;});

/* 时间轴（授课型硕士，按国家） */
const TIMELINES={
  uk:[
    {p:"提前 1 年：定位 + 备考",w:"申请前 12 个月",items:["确定专业方向与目标院校档位（冲刺/匹配/保底）","核对目标专业对本科院校 list 与均分的要求","备考雅思（多数 6.5–7.0），尽早出分"],tips:["双非学生务必先核官方 List，很多专业明确排除特定院校，别等到 offer 阶段才发现","雅思部分院校要求 UKVI 考试版本（非普通学术版），报名前先确认目标校要求","均分换算标准各校不同（如 UCL 通常 85+ 算 First Class），提前换算再定梯队"],res:{type:"xhs",kw:"英国硕士申请 院校list 双非 选校攻略"}},
    {p:"开放申请：尽早递交",w:"当年 9–11 月",items:["英国多为 rolling 滚动录取，开放即可递，越早越好","准备 PS（个人陈述）+ CV + 2 封推荐信 + 成绩单","部分热门专业有第一轮截止，别拖到年底"],tips:["PS 不能通用，每校都应调整 why this programme，3–4 版是常态","推荐信找真正了解你学术能力的人，千篇一律的挂名信教授看得出来"],res:{type:"bili",kw:"英国留学 PS个人陈述 写法 申请技巧"}},
    {p:"拿 offer + 满足 con",w:"当年 11 月–次年 4 月",items:["con-offer 常见：补语言 / 补均分 / 毕业证","对比多个 offer，缴占位费（deposit）保留名额","不够语言可申请语言班（Pre-sessional）"],tips:["Pre-sessional 语言班名额有限早报早得，6 周班 / 10 周班选适合自己的","多个 offer 都付了 deposit 的需确认退款条款，有些学校定金不退"],res:{type:"xhs",kw:"英国硕士 条件offer 满足 pre-sessional 语言班"}},
    {p:"签证 + 行前",w:"次年 5–8 月",items:["拿 uncon-offer + CAS，办 Student visa（资金证明、肺结核体检）","订住宿、机票，准备 Graduate Route 留英规划"],tips:["资金证明需存款记录 28 天以上（学费 + 生活费），提前规划避免临时凑钱","肺结核体检须在指定机构做（结果 6 个月有效），出签前务必预约"],res:{type:"bili",kw:"英国学生签证 CAS 申请步骤 资金证明"}},
    {p:"入学",w:"次年 9 月",items:["9 月开学，1 年制注意一开学就要规划求职 / 升博"],tips:["一年制硕士 12 月就到找暑期实习投递黄金期，开学即要准备 CV 和 Cover Letter","Graduate Route 工签 2 年无需担保，但转正式 Skilled Worker 签证需找到符合 SOC 的雇主"],res:{type:"xhs",kw:"英国留学 毕业找工作 Graduate Route 经验"}},
  ],
  us:[
    {p:"提前 1.5 年：规划 + 标化",w:"申请前 18 个月",items:["确定专业与选校，研究各校固定截止日期","备考 TOEFL（100+）与（部分专业）GRE/GMAT","积累科研 / 实习，强化背景"],tips:["GRE 并非所有项目必须，但高分确实加分，官网写 'optional' 建议仍提交","科研 / 实习经历要在 SOP 里说得具体，临时抱佛脚写不实，提前 1.5 年开始积累"],res:{type:"xhs",kw:"美国硕士申请 背景提升 GRE 科研经历"}},
    {p:"文书 + 网申",w:"申请前一年 9–12 月",items:["写定制化 SOP / PS，准备 3 封推荐信","逐校网申，注意各校 deadline 不同（多在 12–1 月）","寄送成绩单、标化送分"],tips:["SOP 各校字数限制不同（500–1000 词），按字数精炼，不要交超长版","成绩单部分校要 WES 认证，处理周期 2–6 周，提前办不然来不及送分","推荐信网申时直接发邀请邮件给推荐人，提前 1 个月提醒并给出截止时间"],res:{type:"bili",kw:"美国硕士 SOP 个人陈述 写法教程"}},
    {p:"放榜 + 决定",w:"当年 2–4 月",items:["陆续收到结果，对比 offer 与奖学金","4 月底前确认入读并缴 deposit"],tips:["4 月 15 日是北美研究生录取约定俗成的最终确认日，可等到这天再决定","拿到 offer 后可邮件问系里是否有 TA/RA 机会，装穷就问"],res:{type:"xhs",kw:"美国硕士 offer 比较 奖学金 如何选择"}},
    {p:"I-20 + 签证",w:"当年 5–7 月",items:["收到 I-20，缴 SEVIS 费，DS-160 + 面签","准备资金证明，预约体检"],tips:["F-1 签证面签要清楚说明学习计划和 'tie to home country'（表明会回国），面签官很关注","SEVIS 费约 $350，须先缴纳再填 DS-160，保存好 receipt number"],res:{type:"bili",kw:"美国F1签证 面试攻略 DS-160 SEVIS"}},
    {p:"入学",w:"当年 8 月",items:["8 月底开学，STEM 专业尽早规划 OPT"],tips:["STEM OPT 最长 3 年，申请材料要提前 90 天递交，流程不短","SSN 入学后去 Social Security Office 办，是在美工作的必要证件"],res:{type:"xhs",kw:"美国留学 毕业 OPT 找工作 H1B"}},
  ],
  au:[
    {p:"提前 9–12 月：定位",w:"申请前 9–12 个月",items:["确定专业与开学季（2 月 / 7 月），核对院校 list","备考雅思（多数 6.5）"],tips:["7 月入学可比 2 月入学早半年毕业找工作，值得优先考虑","均分换算通常 75 分 ≈ GPA 3.0，澳洲 top 校（ANU/USYD 等）多要求 75–80+"],res:{type:"xhs",kw:"澳大利亚硕士申请 选校攻略 均分要求"}},
    {p:"递交申请（rolling）",w:"随时，越早越好",items:["澳洲滚动录取，材料齐即可递","常见 con-offer，可先占位再补条件","准备成绩单、在读证明 / 毕业证、CV"],tips:["热门专业（如 UQ 商科 / UNSW CS）名额满即停止录取，越早递越保险","GTE（真实留学意愿声明）是签证阶段核心文件，早做准备，提前写好「为何选澳洲」"],res:{type:"bili",kw:"澳洲留学 硕士申请 滚动录取 经验分享"}},
    {p:"换 uncon + CoE",w:"开学前 3–6 月",items:["补齐语言 / 均分，换无条件 offer","缴费换 CoE（电子录取确认）"],tips:["OSHC 必须全程覆盖，费用约 AUD 600–900/年，须购买官方认可机构的保险","拿到 CoE 后才能申请签证，拿到签证后再买机票，顺序不要搞反"],res:{type:"xhs",kw:"澳洲学生签证 CoE OSHC 办理流程"}},
    {p:"签证 + OSHC",w:"开学前 1–3 月",items:["办 Student visa（500）：GTE 声明、资金、体检","购买 OSHC 海外学生健康保险"],tips:["资金证明建议满足每年 AUD 21,041 的官方要求，存款流水需 3 个月以上记录","GTE 材料要展示学习计划完整性和回国意图，移民倾向明显会影响签证审批"],res:{type:"bili",kw:"澳洲学生签证500 GTE 资金证明 申请教程"}},
    {p:"入学",w:"2 月 / 7 月",items:["开学，规划 485 毕业工签与就业 / 移民路径"],tips:["毕业后 485 工签 2–4 年（视学校所在地），地区加分利于 PR，选校时考虑地区政策","澳洲 PR 路径：485 + 工作经验 → 189/190/491，尽量选职业紧缺清单（MLTSSL）专业"],res:{type:"xhs",kw:"澳洲留学 毕业签证485 移民PR 规划"}},
  ],
  ca:[
    {p:"提前 1 年：定位 + 备考",w:"申请前 12 个月",items:["确定专业与选校，研究各校截止（多在 12 月–次年 3 月）","备考雅思 / 托福；部分理工需 GRE"],tips:["加拿大移民友好，留学选专业最好对应 NOC TEER 0/1 类职业，早规划移民路径","Co-op 实习项目名额有限且竞争激烈，申请时需单独写动机，要突出实践意愿"],res:{type:"xhs",kw:"加拿大硕士申请 选校 移民规划 Co-op"}},
    {p:"文书 + 网申",w:"当年 9–12 月",items:["准备 CV、PS、推荐信、成绩单","逐校网申，注意 co-op 项目的单独要求"],tips:["SOP 要突出「为什么这所大学 / 这个城市」，可提移民意向但要显得学术动机为主","推荐信 2–3 封，有导师推荐最好，提前 4 周提醒教授，给他们足够时间"],res:{type:"bili",kw:"加拿大留学 硕士申请 SOP文书 经验"}},
    {p:"放榜 + 缴位",w:"次年 1–4 月",items:["陆续放榜，对比 offer 与减免","确认入读并缴 deposit"],tips:["多伦多 / UBC CS 和商科竞争极大，来 offer 晚不等于被拒，耐心等到截止日","缴 deposit 前务必确认退款政策，有些学校缴完不退"],res:{type:"xhs",kw:"加拿大硕士 offer 比较 选择 UBC UofT"}},
    {p:"学签 + 入学",w:"次年 5–8 月",items:["办 Study Permit（可走 SDS 加速），9 月入学"],tips:["SDS（学生直签）要求雅思 6.0 全 6.0 + 指定保险 + 存款证明，约 20 个工作日出签","配偶可同步申 Open Work Permit，提前一并准备材料节省时间"],res:{type:"bili",kw:"加拿大学签 Study Permit SDS 申请教程"}},
  ],
  sg:[
    {p:"提前 9–12 月：定位",w:"申请前 9–12 个月",items:["确定 NUS/NTU 等目标专业，备考雅思 / 托福（部分需 GRE）"],tips:["NUS/NTU 热门项目录取极激烈，双非均分需 85+ 甚至更高，做好保底方案","SMU 商科和 SUTD 工程类相对好申，综合录取率高于 NUS/NTU 热门项目"],res:{type:"xhs",kw:"新加坡硕士申请 NUS NTU 攻略 双非经验"}},
    {p:"网申",w:"当年 10 月–次年 2 月",items:["在校系统申请，热门专业分轮、越早越好","准备 CV、PS、推荐信"],tips:["CV 须用英美学术格式（reverse chronological），PS 重点写 research fit 或明确职业目标","推荐信务必让推荐人用学校邮箱发出，私人邮箱偶尔会被系统退回"],res:{type:"bili",kw:"新加坡留学 NUS NTU 申请流程 经验"}},
    {p:"面试 / 放榜",w:"次年 2–5 月",items:["部分专业有面试，陆续放榜"],tips:["部分项目（如 NUS CS）放榜前会要求补充材料或笔试，留意邮件不要错过","奖学金机会有限，多数项目为自费，提前规划 30–55K SGD 年费用"],res:{type:"xhs",kw:"新加坡留学 学费 生活费 奖学金 申请经验"}},
    {p:"学生准证 + 入学",w:"次年 6–8 月",items:["学校协助办 Student's Pass，8 月入学"],tips:["学校代提交到 ICA eService 后约 1–2 个月出 IPA（准入许可），按邮件完成剩余步骤","到达新加坡后需去 ICA 做 STP In-Principle Approval 换正式准证，别忘预约"],res:{type:"bili",kw:"新加坡学生准证 STP ICA 申请流程"}},
  ],
  hk:[
    {p:"提前 9–12 月：定位",w:"申请前 9–12 个月",items:["确定专业，备考雅思 / 托福","核对院校背景与均分要求"],tips:["港校均分门槛通常 80+，港科 / 港城商科热门项目实际录取在 85+ 更有竞争力","雅思 6.5 是多数港校起线，部分院系 6.0 即可，具体看专业官网要求"],res:{type:"xhs",kw:"香港硕士申请 内地学生 选校攻略 均分"}},
    {p:"开放申请（rolling）",w:"当年 9 月–次年 4 月",items:["港校滚动录取，越早越好，热门专业分轮截止","准备 CV、PS、推荐信"],tips:["10 月即开放，部分热门项目年底前名额告急，圣诞前递交比春节后稳得多","PS 通常 500–800 词，重点写 why this programme 和未来发展方向，不要泛泛"],res:{type:"bili",kw:"香港硕士 申请流程 亲身经验 rolling滚动录取"}},
    {p:"面试 + offer",w:"次年 1–5 月",items:["部分专业有面试，拿 offer 缴留位费"],tips:["面试以英语为主，港大 / 港科部分项目有小组讨论，提前准备 behavioral 问题","留位费约 HKD 5,000–10,000，多 offer 同时交要注意各校退款政策不同"],res:{type:"xhs",kw:"香港硕士 面试 offer比较 留位费 注意事项"}},
    {p:"签证 + 入学",w:"次年 6–8 月",items:["经学校办学生签证，9 月入学；毕业可申 IANG"],tips:["学生签证由学校代为申请，4–6 周处理，需提供财力证明和录取通知书","毕业后 IANG（非本地毕业生留港安排）工签 1 年无需雇主担保，把握窗口期"],res:{type:"bili",kw:"香港学生签证 IANG工签 申请攻略"}},
  ],
  ch:[
    {p:"提前 1 年：定位 + 标化",w:"申请前 12 个月",items:["ETH/EPFL 门槛高，强化数理背景","备考雅思 / 托福，部分需 GRE"],tips:["ETH/EPFL 部分项目录取率仅 10% 以下，需要有扎实的数理 / 编程项目展示","成绩单须换算为瑞士评分体系（ETH 要求相当于 5.5/6 分制），可咨询 APS 或直接问系里"],res:{type:"xhs",kw:"瑞士ETH EPFL 硕士申请 攻略 难度"}},
    {p:"网申（固定截止）",w:"当年 11 月–次年 4 月",items:["ETH 多在 12 月 15 日、EPFL 多在 4 月 15 日截止，按校核对","准备成绩单、动机信、推荐信"],tips:["动机信（Motivational Letter）是核心，要具体写研究方向匹配和学术细节，泛泛而谈直接淘汰","部分专业需 Portfolio 或数学证明，尽早访问目标院系官网确认所有材料要求"],res:{type:"bili",kw:"瑞士留学 ETH EPFL 动机信 申请材料"}},
    {p:"放榜",w:"次年 3–6 月",items:["陆续放榜，确认入读"],tips:["ETH 批量放榜通常 4 月出结果，等待期不要放弃候补（WL）名单，有时会转正","确认后立刻抢苏黎世/洛桑住宿，两个城市住宿都极其紧张"],res:{type:"xhs",kw:"瑞士留学 苏黎世 住宿 生活费用 租房"}},
    {p:"居留 + 入学",w:"次年 6–9 月",items:["办学生居留许可，9 月入学"],tips:["居留许可（Aufenthaltsbewilligung）持签证入境后在本地办，到 Cantonal Migration Office 登记","瑞士物价极高（月均 CHF 2,000–2,800），出发前务必充分测算资金是否足够"],res:{type:"bili",kw:"瑞士留学 签证 居留许可 生活费 经验"}},
  ],
  nl:[
    {p:"提前 1 年：定位",w:"申请前 12 个月",items:["确定英文授课专业，注意 numerus fixus（限额专业）更早截止","备考雅思 / 托福"],tips:["Numerus Fixus 限额专业截止最早可到 1 月 15 日，漏掉无法补申，务必提前确认","荷兰英文硕士性价比高（学费约 €14–22K），质量不输英美，值得作为重要备选"],res:{type:"xhs",kw:"荷兰硕士申请 选校 攻略 性价比"}},
    {p:"网申（Studielink + 学校）",w:"当年 10 月–次年 4 月",items:["多数 1–5 月截止，部分滚动；越早越稳","准备 CV、动机信、推荐信"],tips:["动机信须有「为何选荷兰 / 这所大学」的具体说明，不能千篇一律套模板","推荐信通常 1–2 封，学术推荐为主，提前联系老师留出足够时间"],res:{type:"bili",kw:"荷兰留学 申请流程 动机信 经验分享"}},
    {p:"放榜 + 缴费",w:"次年 3–6 月",items:["拿 offer，缴学费确认"],tips:["确认入读后按学校邮件逐步完成注册流程，荷兰大学行政流程较繁琐别急","住宿是荷兰留学最大难题，拿到 offer 即刻加入学校 housing 等候名单"],res:{type:"xhs",kw:"荷兰留学 住宿 找房 租房 注意事项"}},
    {p:"居留 + 入学",w:"次年 6–8 月",items:["学校代办 IND 居留，9 月入学；毕业可用求职年"],tips:["IND（移民局）居留申请由学校代办（MVV 签证），约 2–4 周处理","毕业后可申「Zoekjaar Hoogopgeleide」（高学历找工签）一年自由找工，不限雇主"],res:{type:"bili",kw:"荷兰学生签证 IND 居留 毕业找工作签证"}},
  ],
  jp:[
    {p:"提前 1 年：定位",w:"申请前 12 个月",items:["确定英文项目（G30/SGU）或日文项目","研究型需尽早联系教授、争取内诺"],tips:["研究型硕士须提前约 1 年联系导师争取「内诺」，无内诺基本申不上，日本教授回复慢需耐心等","英文项目（G30/SGU）流程透明但理工热门专业（如 UTokyo 工学院）均分门槛极高"],res:{type:"xhs",kw:"日本硕士申请 英文项目 内诺 联系教授"}},
    {p:"联系教授 / 网申",w:"当年 9 月–次年 2 月",items:["研究计划书定稿，联系导师","英文项目网申，按校截止"],tips:["研究计划书（Research Proposal）须与联系教授研究方向高度匹配，通常 A4 2–5 页","成绩单需公证翻译（法定译本），翻译机构处理需时较长，提前至少 1 个月安排"],res:{type:"bili",kw:"日本大学院 研究计划书 写法 申请"}},
    {p:"考核 / 放榜",w:"次年 1–4 月",items:["部分需笔试 / 面试，拿到合格通知"],tips:["笔试 / 面试通常在日本本地进行，G30 部分项目可在线面试，提前确认形式","合格通知后还需办在留资格认定证明书（COE），发到国内再去使馆贴签，整体约 2 个月"],res:{type:"xhs",kw:"日本留学 在留资格认定 COE 签证流程"}},
    {p:"在留 + 入学",w:"次年 4–9 月",items:["学校办在留资格认定，使馆贴签；4 月或 9/10 月入学"],tips:["COE + 签证流程合计约 2 个月，4 月入学须在 1–2 月就启动，别拖","JASSO 奖学金（月 ¥48,000）和文科省 Monbukagakusho 奖学金是主要来源，提前了解申请窗口"],res:{type:"bili",kw:"日本留学 奖学金 JASSO 文科省 申请"}},
  ],
  kr:[
    {p:"提前 6–9 月：定位",w:"申请前 6–9 个月",items:["选 Spring（3 月）或 Fall（9 月）入学","英文项目备托福 / 雅思，韩文项目考 TOPIK"],tips:["韩国政府奖学金（GKS）申请截止通常 3–5 月，和学校申请同步规划，不互相影响","SKY（首尔/延世/高丽）英文项目热门，双非学生竞争压力大，务必做好梯队规划"],res:{type:"xhs",kw:"韩国硕士申请 SKY GKS奖学金 攻略"}},
    {p:"网申",w:"入学前约 4–6 个月",items:["按校截止递交，准备研究计划 / 文书、推荐信"],tips:["研究计划书要具体，提到具体的 paper 或研究问题，泛泛谈「对某方向感兴趣」不够有力","部分项目要求推荐信导师通过校内系统上传，提前给推荐人充裕时间"],res:{type:"bili",kw:"韩国留学 硕士申请 研究计划书 经验"}},
    {p:"放榜 + 奖学金",w:"入学前 2–4 个月",items:["拿 offer，申请 GKS / 校内奖学金"],tips:["GKS 奖学金覆盖学费 + 生活费，竞争但值得，拿到录取后还可申学校层面奖学金","首尔大学品牌强，延世 / 高丽校内英语环境更国际化，根据自身需求权衡"],res:{type:"xhs",kw:"韩国留学 GKS奖学金 申请经验 结果"}},
    {p:"D-2 签证 + 入学",w:"入学前 1–2 个月",items:["办 D-2 留学签证，3 月 / 9 月入学"],tips:["D-2 签证材料含录取信、财力证明、在读证明等，韩国驻华使馆约 1–2 周出签","抵达韩国后须办「外国人登录证（외국인등록증）」，是在韩开银行 / 居留的必要证件"],res:{type:"bili",kw:"韩国留学签证 D2 外国人登录证 流程"}},
  ],
  de:[
    {p:"提前 1–1.5 年：APS",w:"申请前 12–18 个月",items:["先办 APS 审核（学历认证，耗时数月，越早越好）","备考雅思 / 托福，理清课程匹配要求"],tips:["APS（德国留学申请人审核）是中国学生申请德国大学的前提，约耗 2–4 个月，别拖","课程描述（Course Descriptions）要与目标专业课程体系对比，体现「课程覆盖率」"],res:{type:"xhs",kw:"德国留学 APS认证 准备 材料 攻略"}},
    {p:"网申（uni-assist / 学校）",w:"当年 11 月–次年 7 月",items:["冬季学期（10 月入学）多在 3–7 月截止","准备成绩单、动机信、推荐信、课程描述"],tips:["动机信（Motivationschreiben）通常 1–1.5 页，三点：学术背景 + 为什么这校 + 职业目标","uni-assist 需额外付审核费（首校 €75 + 次校各 €30），约 8 周处理，早递早批"],res:{type:"bili",kw:"德国硕士 动机信 uni-assist 申请流程 经验"}},
    {p:"放榜",w:"次年 6–9 月",items:["陆续放榜，确认入读"],tips:["TUM 等校仅发电子录取（TUMonline 账号查看），没有纸质 offer，注意查邮件","确认后联系 Studentenwerk 申请宿舍，外租竞争激烈（尤其慕尼黑/柏林）"],res:{type:"xhs",kw:"德国留学 慕尼黑 柏林 住宿 租房 注意事项"}},
    {p:"签证 + 入学",w:"次年 7–9 月",items:["办学生签证（冻结账户），10 月入学"],tips:["冻结账户（Sperrkonto）需约 €11,208，须提前 2–4 周在 Deutsche Bank 等开立","签证面签无需德语，但要清楚说明学习计划和「毕业后是否回国」的意图"],res:{type:"bili",kw:"德国学生签证 冻结账户 Sperrkonto 申请步骤"}},
  ],
  nz:[
    {p:"提前 9–12 月：定位",w:"申请前 9–12 个月",items:["确定专业，备考雅思","核对奥克兰大学等的均分要求"],tips:["新西兰 QS 上排名有优势的主要是奥克兰大学，其余院校侧重实用技能，定位要清晰","雅思 6.5（单科 6.0）是多数专业起线，部分课程 6.0 全 6.0 也可，官网看清楚"],res:{type:"xhs",kw:"新西兰留学 奥克兰大学 申请攻略 均分"}},
    {p:"递交申请（rolling）",w:"随时，越早越好",items:["滚动录取，材料齐即可递","准备成绩单、CV、PS、推荐信"],tips:["热门专业仍会在 offer 数量增多后提高门槛，早递优势明显","所有材料需英文公证翻译，成绩单和学历证书提前找翻译机构处理"],res:{type:"bili",kw:"新西兰留学 硕士申请 流程 经验分享"}},
    {p:"拿 offer + 缴费",w:"开学前 3–6 月",items:["补条件、缴留位费"],tips:["Con-offer 满足条件后要主动通知学校换 uncon，等学校主动来找你可能浪费时间","留位费约 NZD 1,000–2,000，确认不去要及时通知，否则可能无法退款"],res:{type:"xhs",kw:"新西兰硕士 offer 留位费 条件offer 注意"}},
    {p:"签证 + 入学",w:"开学前 1–3 月",items:["办学生签证（体检、资金证明），多 2 月 / 7 月开学"],tips:["资金证明建议覆盖学费 + 生活费（NZD 15,000–20,000 以上），存款流水充足为佳","毕业后可申 Post-study Open Work Visa（毕业工签）3 年不限雇主，方便找工作或申 PR"],res:{type:"bili",kw:"新西兰学生签证 毕业工签 申请 经验"}},
  ],
  my:[
    {p:"提前 6–9 月：定位",w:"申请前 6–9 个月",items:["确定大学 / 分校与专业，备考雅思（部分 6.0 可）"],tips:["马来西亚顶尖公立（UM/UPM）+ 英国分校（诺丁汉/莫纳什/南安普顿）各有侧重，定位清楚再选","性价比高、距离近、华人社区成熟是核心优势，非顶校录取门槛也相对低"],res:{type:"xhs",kw:"马来西亚留学 硕士申请 选校 性价比"}},
    {p:"递交申请（rolling）",w:"随时，越早越好",items:["滚动录取，准备成绩单、护照、CV / PS"],tips:["英国分校（诺丁汉/莫纳什等）材料和英国母校类似，雅思要求相对宽松（6.0 起）","滚动录取快，材料齐全的话最快 2–4 周即可出录取通知书"],res:{type:"bili",kw:"马来西亚留学 申请流程 英国分校 经验"}},
    {p:"录取 + EMGS",w:"开学前 2–4 月",items:["拿录取，学校经 EMGS 办学生准证"],tips:["EMGS 准证申请约 4–6 周，学校代递，配合提供体检报告（指定机构）","部分学校要求先缴学费才启动准证申请，确认入读前问清楚退款条款"],res:{type:"xhs",kw:"马来西亚学生准证 EMGS 申请流程 注意"}},
    {p:"签证 + 入学",w:"开学前 1–2 月",items:["体检、贴签；开学灵活（多次入学）"],tips:["入境后须到 Immigration Dept. 进行 Endorsement（盖章确认准证），错过时间窗口有罚款","马来西亚华人社区成熟、中文普及，生活适应成本低，餐饮物价仅约中国一线城市 50–70%"],res:{type:"bili",kw:"马来西亚留学 生活费用 华人社区 经验"}},
  ],
  fr:[
    {p:"提前 1 年：定位",w:"申请前 12 个月",items:["确定大学 / Grande École 与英文或法语项目","备考雅思 / 托福；法语项目备 DELF/DALF"],tips:["Grande École（HEC/ESSEC/ESCP 等）是全球顶尖，但学费极高（€15,000–40,000/年），公立大学几乎免费","Campus France 审核是签证前提，须提前 3–4 个月启动，节假日排队时间更长"],res:{type:"xhs",kw:"法国硕士申请 公立大学 Grande École 攻略"}},
    {p:"网申（Campus France）",w:"当年 10 月–次年 3 月",items:["经 Campus France 程序申请，准备动机信、CV、推荐信"],tips:["法语项目的动机信（Lettre de motivation）须法语写且语法规范，建议找法语母语者校对","Campus France 面试考核「为什么法国 / 这个学校」，逻辑清晰 + 流利英法表达即可"],res:{type:"bili",kw:"法国留学 Campus France 面试 动机信 流程"}},
    {p:"面试 + 放榜",w:"次年 2–5 月",items:["部分有面试，拿录取"],tips:["HEC/ESCP 等商学院有 Pre-master 或直接入读两类通道，达标直申，否则考 GMAT/GRE","公立大学录取偏慢，耐心等待，通常 4–6 月陆续发结果"],res:{type:"xhs",kw:"法国硕士 offer 录取 HEC ESSEC 大学 经验"}},
    {p:"签证 + 入学",w:"次年 6–9 月",items:["办 VLS-TS 学生签证，9 月入学"],tips:["VLS-TS 长居签证在法国驻华使馆申请，材料含住宿证明、财力证明、录取信，约 2–4 周","入境法国后 3 个月内须在 OFII（法国移民局）登记换正式居留证，千万别忘！"],res:{type:"bili",kw:"法国留学签证 VLS-TS OFII 居留证 流程"}},
  ],
  se:[
    {p:"提前 1 年：定位",w:"申请前 12 个月",items:["选英文授课项目，备考雅思 / 托福"],tips:["隆德大学 / 查尔默斯等英文项目水平高，学费约 €8–18K（欧盟外），性价比较好","雅思要求通常 6.5 全 6.0 或托福 90+，低于要求直接被筛，尽早备考出分"],res:{type:"xhs",kw:"瑞典留学 隆德大学 申请攻略 英文项目"}},
    {p:"网申（统一系统）",w:"当年 10 月–次年 1 月",items:["瑞典多经 universityadmissions.se，1 月中旬截止","准备动机信、CV、推荐信、成绩单"],tips:["universityadmissions.se 统一平台最多申 4 个项目，排好优先级再填，不能乱序","动机信（Letter of Intent）通常限 3,000 字符以内，突出学术背景 + 职业规划即可"],res:{type:"bili",kw:"瑞典留学 universityadmissions 申请平台 教程"}},
    {p:"放榜 + 奖学金",w:"次年 3–5 月",items:["拿 offer，申请 SI 等奖学金"],tips:["SI 奖学金（瑞典政府）仅 3–4 月窗口申请，和录取同期，注意资格要求（重回国发展意向）","中国申请者需证明学术成就、社区贡献和回国发展意愿，SI 强调长期发展潜力"],res:{type:"xhs",kw:"瑞典SI奖学金 申请 中国学生 经验 结果"}},
    {p:"居留 + 入学",w:"次年 6–8 月",items:["办学生居留，8 月底入学"],tips:["居留许可从使馆申请，等待约 1–3 个月，务必早递，错过入学很麻烦","瑞典北部冬季日照不足 5 小时，心理准备要充分，南部隆德 / 哥德堡冬季相对温和"],res:{type:"bili",kw:"瑞典留学 居留许可 生活经验 冬季"}},
  ],
  be:[
    {p:"提前 1 年：定位",w:"申请前 12 个月",items:["选英文授课项目，备考雅思 / 托福"],tips:["KU Leuven / 根特 / 列日研究实力强，公立学费低（€700–4,000/年），是被低估的留学地","法语区项目（UCLouvain 等）需法语证明，确认语言要求再选方向"],res:{type:"xhs",kw:"比利时留学 KU Leuven 申请攻略 性价比"}},
    {p:"网申",w:"当年 11 月–次年 4 月",items:["按校截止递交，准备动机信、CV、推荐信、课程匹配材料"],tips:["各校申请平台不统一，每校单独注册网申（KU Leuven 用自家 Application Portal），别搞混","动机信要体现「为何选比利时 / 这所学校」和学术 / 科研兴趣，泛泛的职业目标不够有力"],res:{type:"bili",kw:"比利时留学 KU Leuven 申请流程 经验"}},
    {p:"放榜",w:"次年 3–6 月",items:["拿 offer，确认入读"],tips:["确认入读后需回复学校并缴注册费（registration fee），时间窗口短，注意邮件通知","KU Leuven 学生宿舍竞争大，Leuven 市区房价相对实惠，拿到 offer 就开始找房"],res:{type:"xhs",kw:"比利时留学 住宿 找房 KU Leuven 生活费"}},
    {p:"签证 + 入学",w:"次年 6–9 月",items:["办学生签证，9 月入学"],tips:["D 类长期签证在中国驻比利时使馆或中国境内比利时使馆申请，材料含财力证明 + 录取信","抵达后 8 天内须向市政厅（Gemeente/Commune）登记，拿 A 卡（外国人电子证件）"],res:{type:"bili",kw:"比利时留学签证 申请 A卡 登记流程"}},
  ],
  dk:[
    {p:"提前 1 年：定位",w:"申请前 12 个月",items:["选英文授课项目，备考雅思 / 托福"],tips:["哥本哈根大学 / DTU 研究水平强，欧盟外学费约 €8–16K，是北欧中相对实惠的选择","雅思通常要求 6.5，部分项目 7.0，TOEFL 100+；低于要求的直接被筛，早备考"],res:{type:"xhs",kw:"丹麦留学 哥本哈根大学 DTU 申请攻略"}},
    {p:"网申",w:"当年 11 月–次年 3 月",items:["多在 1–3 月截止，准备动机信、CV、推荐信"],tips:["各校独立网申（无统一平台），动机信质量是关键，体现对研究方向的真实理解","推荐信 2 封，学术优先，告知推荐人丹麦校侧重学术能力和科研潜力"],res:{type:"bili",kw:"丹麦留学 申请流程 动机信 经验"}},
    {p:"放榜",w:"次年 4–6 月",items:["拿 offer，缴费确认"],tips:["丹麦院校整体录取率中等，但热门项目竞争激烈（哥大 IT / 环境科学等），勿轻估","缴费确认后留意学校行政邮件，入学注册流程步骤较多，按邮件指引逐步完成"],res:{type:"xhs",kw:"丹麦硕士 offer 录取 入学准备 注意事项"}},
    {p:"居留 + 入学",w:"次年 6–8 月",items:["办学生居留，9 月入学"],tips:["北欧学生居留在使馆申请，提前预约（有时候约数周），确认所需材料清单","哥本哈根物价偏高（月 DKK 1,200–1,600），租房竞争激烈，提前关注学校学生宿舍候补"],res:{type:"bili",kw:"丹麦学生签证 居留 哥本哈根租房 生活"}},
  ],
  cn:[
    {p:"提前 6–12 月：定位",w:"申请前 6–12 个月",items:["国际生选英文 / 中文项目，备语言（雅思 / 托福或 HSK）"],tips:["CSC（中国政府奖学金）名额有限，了解清楚申请窗口，校级奖学金灵活度更高，两者可叠加","顶尖高校（THU/PKU/复旦等）对国际生有单独流程，须访问各校国际处官网，不同于国内流程"],res:{type:"xhs",kw:"中国大陆读研 国际生申请 CSC奖学金 攻略"}},
    {p:"网申",w:"按校截止",items:["递交材料，申请 CSC / 校级奖学金"],tips:["CSC 和校奖均有推荐信和个人陈述要求，英文版须规范，可请导师帮修改措辞","双非本科申请 THU/PKU 较难，复旦 / 浙大 / 中大 / 华中科大等可作为匹配保底选择"],res:{type:"bili",kw:"中国顶尖高校 国际学生 研究生申请 流程经验"}},
    {p:"录取 + 签证",w:"开学前 2–4 月",items:["拿录取与 JW202，办 X 签证"],tips:["JW202（校签）是办 X 签证的关键文件，拿到录取后提醒学校及时邮寄，不要等太久","CSC 奖学金通知通常 5–7 月，录取信在此之前到，先保住录取，再等奖学金结果"],res:{type:"xhs",kw:"CSC奖学金 JW202 X签证 申请 注意事项"}},
    {p:"入学",w:"9 月（部分春季）",items:["报到入学"],tips:["X1 签证（学习 180 天以上）到达后 30 天内须去公安局办居留许可，否则签证到期即违法","住宿优先申请学校国际生宿舍（通常由国际处统一安排），大城市外部租房竞争激烈"],res:{type:"bili",kw:"中国留学 X签证 居留许可 入学手续 经验"}},
  ],
};

/* 签证（按国家） */
const VISAS2={
  uk:{title:"🇬🇧 英国 Student Visa（积分制）",fee:"签证费 £490 + IHS 医疗附加费 £776/年（按学制预付）",time:"通常 3 周内，旺季稍长",
    materials:["有效护照（覆盖全学习期）","CAS 确认录取号（学校发放）","资金证明：学费+生活费（伦敦 £1,334/月，其他 £1,023/月，须连续存满28天）","TB 肺结核体检报告（中国大陆申请者必须，指定医院）","ATAS 学术技术审批（理工敏感专业，需6–8周，提前查！）","护照照片（英国签证规格）","如携配偶/子女须额外材料"],
    tips:["IHS 医疗附加费按年一次性预付，到英后直接享NHS公费医疗，无需另购保险","资金证明须连续存满28天，银行截图日期不能早于申请前31天","ATAS审批涉及物理/材料/CS等敏感方向，务必提前在 ats.ac.uk 查课程是否需要","UKVI 雅思与普通雅思不同，确认学校接受哪种版本"],
    post:"🎓 Graduate Route：持学位证申请，可留2年（研究型3年）找工作，无需雇主担保",
    links:[{n:"官方签证申请",u:"https://www.gov.uk/student-visa"},{n:"IHS费用计算",u:"https://www.gov.uk/healthcare-immigration-application"},{n:"ATAS查询",u:"https://www.gov.uk/guidance/academic-technology-approval-scheme"},{n:"TB指定医院（中国）",u:"https://www.gov.uk/tb-test-visa/china"}]},
  us:{title:"🇺🇸 美国 F-1 学生签证",fee:"SEVIS 费 $350 + 签证申请费 $185（共约 $535）",time:"面签预约等待1–8周（视使馆繁忙度），当天出结果",
    materials:["有效护照","I-20 表格（录取后学校发放）","SEVIS 缴费收据（I-901 Form）","DS-160 在线签证申请表","资金证明（银行存款/父母担保/奖学金信）","录取通知书","在读/毕业证明 + 成绩单","面签准备：说清「为什么这个项目、资金来源、毕业后打算」"],
    tips:["被拒常见原因：经济担保不充分 / 意图不明确 / 未说明毕业后回国计划","科技敏感专业可能触发221(g)行政审查，耗时数月，提前预留时间","STEM专业毕业后OPT延至36个月，是留美最重要的过渡窗口，务必提前研究"],
    post:"🎓 OPT 12个月（STEM延至36个月），毕业后60天内提交STEM延期，之后需 H-1B 工签抽签（中签率约25%）",
    links:[{n:"F-1签证官方",u:"https://travel.state.gov/content/travel/en/us-visas/study/student-visa.html"},{n:"SEVIS缴费I-901",u:"https://www.fmjfee.com"},{n:"DS-160在线填写",u:"https://ceac.state.gov/genniv"},{n:"驻华使馆面签预约",u:"https://ustraveldocs.com/cn"}]},
  au:{title:"🇦🇺 澳大利亚 学生签证（Subclass 500）",fee:"签证申请费约 AUD 1,600（2024）",time:"线上申请，通常2–8周",
    materials:["有效护照","CoE（录取确认书，学校发放）","GTE 真实临时入境声明（解释为何来澳及毕业后安排）","资金证明（学费+约 AUD 21,041/年生活费）","英语能力证明（雅思/TOEFL）","OSHC 海外学生健康保险（强制）","体检报告（部分国籍/课程需要）","无犯罪记录（部分情况）"],
    tips:["GTE（真实临时入境）是核心，要说明选澳洲的原因及毕业后离澳/回国理由，写得越具体越好","OSHC保险需在CoE开始前生效，学校通常推荐购买","学习期间每两周工作不超过48小时（政策有调整，以官方为准）","可携带配偶/子女，家庭成员需单独申请相应签证"],
    post:"🎓 485 毕业生工作签证（Subclass 485），可留2–4年（偏远地区最长5年），是技术移民积分的重要时期",
    links:[{n:"澳签证官网",u:"https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500"},{n:"GTE写法指南",u:"https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500/genuine-temporary-entrant"},{n:"485工作签证",u:"https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/temporary-graduate-485"}]},
  ca:{title:"🇨🇦 加拿大 学习许可（Study Permit）",fee:"学习许可费 CAD 150 + 生物识别费 CAD 85（共约 CAD 235）",time:"线上申请4–16周；SDS快速通道约2–8周",
    materials:["有效护照","录取通知书（DLI认证院校）","资金证明（学费 + CAD 10,000/年生活费，合计约CAD 20,000+）","生物识别信息（指纹+照片）","SDS通道（可选）：雅思5.5+各项 + GIC存款CAD 10,000（可大幅加速）","体检报告（部分国籍/课程）","照片（加拿大移民规格）"],
    tips:["SDS（学签快速通道）大幅缩短审批时间，有雅思成绩和足够资金的学生推荐选用","PGWP毕业工签长度=学习许可长度，选更长课程可获更长工签","配偶可申开放式工作许可，子女可就读公立学校","每周校外工作时间政策有调整，申请前查最新规定"],
    post:"🎓 PGWP（毕业后工作许可），最长3年，完成学业后90天内申请；衔接 Express Entry 移民路径",
    links:[{n:"学习许可官网",u:"https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit.html"},{n:"SDS快速通道",u:"https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/student-direct-stream.html"},{n:"PGWP工作许可",u:"https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work/after-graduation.html"}]},
  sg:{title:"🇸🇬 新加坡 学生准证（Student's Pass）",fee:"准证费 SGD 30 + 通关凭证费 SGD 60",time:"通过SOLAR系统申请，通常2–8周",
    materials:["有效护照（最少6个月有效期）","录取通知书（由学校发起SOLAR申请）","护照照片","资金证明（银行存款/资产证明）","学历/成绩单","体检报告（部分院校要求）","缴纳签证费"],
    tips:["学生准证通常由学校通过SOLAR系统发起申请，学生提交材料配合即可，流程省心","续签和转换身份需在现有准证到期前办理，不可逾期","部分院校入境后要求进行健康检查"],
    post:"🎓 就业准证（EP）月薪需达约 SGD 5,000+ ；S Pass 约 SGD 3,150+；两者均需雇主担保",
    links:[{n:"ICA官方学生准证",u:"https://www.ica.gov.sg/pass-visa/long-term-passes/student-s-pass"},{n:"SOLAR申请系统",u:"https://www.ica.gov.sg/solar"},{n:"EP就业准证",u:"https://www.mom.gov.sg/passes-and-permits/employment-pass"}]},
  hk:{title:"🇭🇰 香港 学生签证 + IANG",fee:"学生签注费约 HKD 230",time:"入境处处理通常4–8周",
    materials:["有效旅行证件（护照或港澳通行证+回港纸）","录取通知书","资金证明（本人/家庭担保）","学历/成绩证明","住宿安排证明","两张证件照","部分情况须无犯罪证明"],
    tips:["内地学生持港澳通行证（回乡证）赴港读书，签注类型为「学生」","IANG申请需在毕业后12个月内提交，无条件留港12个月，无工资要求","IANG续签需有工作或合理理由，通常须在港就业"],
    post:"🎓 IANG（非本地毕业生留港就业安排）：毕业后无条件留港12个月找工作，续签门槛低",
    links:[{n:"香港入境处学生签证",u:"https://www.immd.gov.hk/eng/services/visas/study.html"},{n:"IANG申请指南",u:"https://www.immd.gov.hk/eng/services/visas/IANG.html"}]},
  de:{title:"🇩🇪 德国 学生签证 + APS学历认证",fee:"APS认证费约 CNY 3,000–5,000 + 签证费 €75",time:"APS认证约1–4个月（关键步骤！）；签证约4–8周",
    materials:["⚠️ APS学历认证证书（中国学生赴德必须，提前最少3个月办！）","有效护照","录取通知书（Zulassungsbescheid）","德国阻断账户（Sperrkonto）约 €11,208/年（2024参考）","健康保险证明（公共医保 Krankenkasse）","学历证明/成绩单（官方公证翻译）","语言证明（德语B1+或英语达标）","住宿证明（部分使馆要求）"],
    tips:["APS认证是中国学生赴德的独特前置要求，耗时1–4个月，必须最先开始！去 aps.org.cn 查最新流程","德国阻断账户每月只能取出固定金额，需提前开户并存入全年金额","大城市（柏林/慕尼黑）租房极紧，录取后立刻开始找房，通过学校住宿或Facebook/WG-Gesucht","到德后须在户籍局（Einwohnermeldeamt）登记，再去大学注册，再换正式居留证"],
    post:"🎓 18个月找工作居留（Aufenthaltserlaubnis zur Arbeitssuche），衔接欧盟蓝卡（Blaue Karte EU）永居",
    links:[{n:"APS学历认证",u:"https://www.aps.org.cn"},{n:"德国签证申请",u:"https://china.diplo.de/cn-zh/service/visa-einreise/national-visum"},{n:"德国移民局BAMF",u:"https://www.bamf.de"},{n:"阻断账户开户说明",u:"https://www.studyingerma.ny"}]},
  ch:{title:"🇨🇭 瑞士 学生居留许可",fee:"约 CHF 65（各州略有差异）",time:"签证约2–4周；到瑞后90天内向州移民局换居留证",
    materials:["有效护照（覆盖全学习期）","录取通知书","资金证明（约CHF 21,000/年生活费+学费）","住宿证明（宿舍确认/租房合同）","医疗保险证明（Krankenkasse，强制）","护照照片","D类入境签证（赴瑞前向瑞士使馆申请）"],
    tips:["非申根国籍须先申请D类签证，入境后向当地移民局（Migrationsamt）登记并换居留证","瑞士有26个州，各州移民局办理细节不同，按就读城市/州查询","医疗保险（Krankenkasse）每月约CHF 300–500，入学后立即购买","苏黎世/日内瓦物价全球最高，预算要充足"],
    post:"🎓 毕业后可申6个月求职居留，找到工作后转工作签证（需雇主担保）；留瑞薪资全球顶尖",
    links:[{n:"瑞士移民局（SEM）",u:"https://www.sem.admin.ch"},{n:"Krankenkasse比较",u:"https://www.comparis.ch/krankenkassen/praemienvergleich"}]},
  nl:{title:"🇳🇱 荷兰 学生居留许可（IND）",fee:"约 €210（由学校代申，费用可能不同）",time:"通常6–12周，建议提前4个月申请",
    materials:["有效护照（覆盖全学习期）","录取通知书","资金证明（约 €900–1,100/月+学费）","照片（荷兰移民规格）","医疗保险证明","住宿证明（宿舍/租房）","部分情况须无犯罪证明（GVO）"],
    tips:["荷兰高校通常代申居留（MVV+VVR），学生提供材料后学校统一办理，省心","非申根国籍须先在本国申请MVV入境许可，到荷兰后换正式居留证","租房极度紧张（尤其阿姆斯特丹/代尔夫特），拿到录取后立刻找房！","OV-chipkaart公共交通卡，持居留证可购学生优惠版"],
    post:"🎓 求职年（Zoekjaar / Orientation Year）留荷1年找工作，无需雇主担保；找到工作后转工作许可",
    links:[{n:"IND荷兰移民局",u:"https://ind.nl/en/study-in-the-netherlands"},{n:"荷兰求职年说明",u:"https://ind.nl/en/orientation-year-highly-educated-persons"},{n:"Nuffic留学官方",u:"https://www.studyinholland.nl/planning-your-stay/visas-and-permits"}]},
  jp:{title:"🇯🇵 日本 留学签证（在留资格「留学」）",fee:"在留资格认定证明书免费；签证贴纸费约 ¥3,000",time:"学校申请COE需1–3个月；使馆贴签约5个工作日",
    materials:["有效护照","录取通知书（入学许可证）","在留资格认定证明书 COE（学校代申，需1–3个月）","资金证明（本人/家庭担保，约 ¥2,000,000+）","学历证明/成绩单","护照照片（日本签证规格）","研究生院：须有教授内诺+研究计划书"],
    tips:["学校须提前3个月向入管局申请COE，整体周期约3–4个月，务必早准备","研究生（大学院生）申请前几乎必须先联系导师获内诺，有导师才有意义申请","签证通常1年或与课程等长，在日续签（更新在留资格）相对简单"],
    post:"🎓 毕业后可转「特定活动（就活）」签证，给6个月时间找工作；找到工作后转「就劳」在留资格",
    links:[{n:"日本驻华使馆签证",u:"https://www.cn.emb-japan.go.jp/itpr_zh/visa_student.html"},{n:"出入国在留管理庁",u:"https://www.moj.go.jp/isa"},{n:"COE申请指南",u:"https://www.moj.go.jp/isa/applications/procedures/nyuukokukanri10_00007.html"}]},
  kr:{title:"🇰🇷 韩国 D-2 留学签证",fee:"签证费约 KRW 60,000（单次）",time:"领事馆通常5–10个工作日",
    materials:["有效护照","标准入学许可书（입학허가서）","银行存款证明（约 KRW 9,000,000+）","学历/成绩单（中文+公证或韩文翻译）","护照照片","无犯罪证明（部分情况）","语言成绩（TOPIK/韩语，不同项目要求不同）"],
    tips:["中国大陆学历一般需进行学历认证，要求各校略有不同，提前询问招生处","GKS政府奖学金获得者有专门通道，流程略有不同","在韩可工作一定小时数（D-2），以官方最新规定为准"],
    post:"🎓 D-10 求职签证，给6个月在韩找工作；找到工作后转 E-7 就业签证（需雇主担保）",
    links:[{n:"韩国签证官网",u:"https://www.visa.go.kr"},{n:"驻华韩国使馆签证",u:"https://overseas.mofa.go.kr/cn-zh/index.do"},{n:"韩国出入国外国人政策本部",u:"https://www.immigration.go.kr"}]},
  fr:{title:"🇫🇷 法国 长期学生签证（VLS-TS）",fee:"签证费约 €99（Campus France服务费 CNY 400另计）",time:"Campus France预登记约2周；签证约2–4周",
    materials:["有效护照","Campus France 登记确认（DAP号，所有学生必须，提前3–4个月开始！）","录取通知书","资金证明（约 €615/月，法国最低保障标准）","住宿证明（宿舍确认/担保书）","学历证明（法文或认证翻译）","护照照片（法国签证规格）","健康保险证明（到法后加入Sécu）"],
    tips:["Campus France程序繁琐，中国学生须先在Campus France中国平台注册获得DAP号，才能申签证","VLS-TS签证入境3个月内须在 ANEF 平台网上验证居留，否则视为逾期","可申请CROUS宿舍（需提前在messervices平台申请），或CAF住房补贴（需法国社保号）","学生可加入Sécu（学生社会保险），每月保费低，覆盖70%医疗费"],
    post:"🎓 APS毕业居留约1年在法找工作；转工作签需雇主担保；长期留法需法语B2+",
    links:[{n:"Campus France中国",u:"https://www.campusfrance.org/zh-hans"},{n:"法国签证申请",u:"https://france-visas.gouv.fr"},{n:"ANEF居留验证平台",u:"https://administration-etrangers-en-france.interieur.gouv.fr"},{n:"CROUS学生宿舍",u:"https://www.messervices.etudiant.gouv.fr"}]},
  se:{title:"🇸🇪 瑞典 学生居留许可",fee:"申请费约 SEK 1,500",time:"线上申请，通常2–4个月（务必提前！）",
    materials:["有效护照（覆盖全学习期）","录取通知书","资金证明（约 SEK 8,514/月）","医疗/旅行保险证明（入境前有效）","护照照片","缴纳申请费"],
    tips:["居留许可审批时间长（2–4个月），务必提前申请，晚了影响入学","瑞典入学申请截止很早（1月中旬），签证和入学申请要同步规划","瑞典医疗费用低，居留证到手后即可享受部分公共医疗","等待居留许可期间，某些情况下可凭临时证明入境"],
    post:"🎓 学业结束后可申求职居留留瑞找工作；找到工作转工作许可；长期居住后申永居",
    links:[{n:"瑞典移民局（Migrationsverket）",u:"https://www.migrationsverket.se/English/Private-individuals/Studying-in-Sweden.html"},{n:"StudyInSweden签证指南",u:"https://studyinsweden.se/plan-your-studies/entry-requirements-visas-and-permits/"}]},
  be:{title:"🇧🇪 比利时 学生签证（D类）& 居留登记",fee:"签证费约 €350（D类长期签证）",time:"使馆约4–8周；到比后再办居留卡",
    materials:["有效护照","录取通知书（比利时认证院校）","资金证明（约 €900–1,200/月）","住宿证明","健康保险证明","学历证明（公证翻译）","护照照片","无犯罪证明"],
    tips:["抵达比利时后须在3个工作日内到当地市政厅（Gemeentehuis）登记，申请A类外国人居留卡","比利时分荷语区（弗拉芒）和法语区；鲁汶荷语为主，布鲁塞尔双语，按就读地查要求","布鲁塞尔欧盟机构（欧委会/欧洲议会）有带薪实习机会，是独特优势"],
    post:"🎓 毕业后可申求职居留留比找工作；找到工作申请「单一许可」（Single Permit）",
    links:[{n:"比利时外国人局（DVZ/OE）",u:"https://dofi.ibz.be/en"},{n:"驻华比利时使馆",u:"https://china.diplomatie.belgium.be"},{n:"鲁汶大学签证指南",u:"https://www.kuleuven.be/english/research/phd/visa-and-residence-permit"}]},
  dk:{title:"🇩🇰 丹麦 学生居留许可",fee:"申请费约 DKK 1,995（线上申请）",time:"通常2–3个月，建议提前4个月",
    materials:["有效护照（覆盖全学习期）","录取通知书","资金证明（约 DKK 6,000/月）","住宿证明","医疗/旅行保险（获居留证前）","护照照片"],
    tips:["哥本哈根租房紧张，通过DTU/哥大宿舍系统提前申请，等待名单可能要半年","到丹麦后须在市政厅（Borgerservice）登记，申请CPR号（用于银行/医疗/手机等）","申根区其他国家持有效居留证者可能可直接入境，但仍需向丹麦当局登记"],
    post:"🎓 毕业后可申6个月求职居留；找到工作申请工作许可；特定STEM专业有快速通道",
    links:[{n:"丹麦移民局（SIRI）",u:"https://www.nyidanmark.dk/en-GB/Applying/Education/Higher-education"},{n:"DTU签证指南",u:"https://www.dtu.dk/english/About/campuses-and-facilities/visa-and-arrival"}]},
  nz:{title:"🇳🇿 新西兰 学生签证",fee:"签证费约 NZD 375（线上）",time:"线上申请，通常1–4周，相对较快",
    materials:["有效护照","录取通知书","资金证明（学费 + NZD 15,000/年生活费参考）","英语能力证明（雅思/TOEFL）","体检/X光报告（部分国籍需要）","无犯罪证明","护照照片"],
    tips:["流程相对简洁，全程线上，材料准备充分审批较快","在读期间每周可工作20小时（假期全职），相对开放","配偶/子女可伴随，配偶在特定条件下可工作"],
    post:"🎓 毕业后开放工签（Post-Study Open Work Visa），最长3年，无需雇主担保；之后可申技术移民",
    links:[{n:"新西兰移民局INZ",u:"https://www.immigration.govt.nz/new-zealand-visas/apply-for-a-visa/about-visa/fee-paying-student-visa"},{n:"毕业后工签",u:"https://www.immigration.govt.nz/new-zealand-visas/apply-for-a-visa/about-visa/post-study-open-work-visa"}]},
  my:{title:"🇲🇾 马来西亚 学生准证（Student Pass）",fee:"准证及处理费共约 MYR 500–1,000",time:"EMGS系统审批通常4–10周",
    materials:["有效护照（最少12个月有效期）","录取通知书","体检报告（EMGS认可医院）","学历证明/成绩单（公证）","护照照片","资金证明","无犯罪证明（部分情况）"],
    tips:["学生准证通过EMGS系统申请，通常由学校协助，学生按清单提供材料即可","体检须在EMGS认可的医院进行，中国境内有指定机构名单，在EMGS官网查","Monash/Nottingham等分校和本地院校流程基本相同"],
    post:"🎓 可申临时工作许可留马工作，或凭学位申请就业准证；也可回国或赴他国发展",
    links:[{n:"EMGS留学马来西亚",u:"https://educationmalaysia.gov.my"},{n:"马来西亚移民局",u:"https://www.imi.gov.my"}]},
  cn:{title:"🇨🇳 中国 学习类居留（X签证）",fee:"签证费约 CNY 200–300（外国护照申请者）",time:"使馆通常3–5个工作日处理",
    materials:["有效护照","JW201/JW202表（教育部出具，学校提供）","录取通知书","体检表（入境后在指定医院做）","护照照片（中国签证规格）","资金证明（父母担保/奖学金证明）"],
    tips:["X1签证（6个月以上）入境后30天内须换「学习」类居留许可，到所在省市公安局出入境处办理","体检须在入境后30天内在指定卫生检疫机构完成，学校会提供指引","汉语授课项目通常要求HSK成绩，英文项目多数不需要"],
    post:"🎓 学习结束后可转换其他类居留（就业/探亲等），在所在省市公安局出入境管理处办理",
    links:[{n:"来华留学服务平台",u:"https://studyinchina.csc.edu.cn"},{n:"中国签证申请服务中心",u:"https://www.visaforchina.cn"},{n:"CSC国家留学基金委",u:"https://www.csc.edu.cn"}]},
};

/* 签证详情扩展数据：时间轴 / 到达后清单 / 面试Q&A */
const VISA_EXTRA={
  uk:{
    timeline:[
      {step:"确认录取 & 等待 CAS",when:"录取后 2–6 周",note:"学校在学生接受 Offer 后发放 CAS（确认录取号），CAS 是签证申请的核心材料"},
      {step:"⚠️ ATAS 学术技术审批",when:"尽早——需 6–8 周",note:"理工/材料/CS 敏感专业必须先查 ats.ac.uk，如需 ATAS 须最先提交，审批慢会耽误整体进度"},
      {step:"TB 肺结核体检",when:"签证申请前（结果6个月内有效）",note:"前往英国移民局指定医院（北京/上海/广州等地均有），当天采样，3–5 工作日出结果"},
      {step:"准备资金证明",when:"CAS 收到后确认",note:"账户余额须满足：伦敦 £1,334/月×学制月数 + 学费（其他地区 £1,023/月），连续存满 28 天"},
      {step:"网上提交签证申请",when:"距预计入境至少 3 个月",note:"在 UKVI 官网填写，上传 CAS、护照、资金证明、TB 报告等，同时缴纳签证费 £490 + IHS 医疗附加费"},
      {step:"预约 VAC 生物识别",when:"网申提交后",note:"前往签证申请中心（北京/上海/广州/成都）提交指纹和照片，当天即完成"},
      {step:"等待决定 & 入境",when:"通常 3 周内出结果",note:"护照邮寄返回附贴签；持 BRP（生物识别居留证）取件码入境后领取 BRP"},
    ],
    arrival:[
      {lbl:"领取 BRP 卡",note:"入境后 10 天内到指定邮局/取件点领取，BRP 是在英身份证明"},
      {lbl:"向学校国际处报到",note:"激活学籍，确认 ATAS 状态（理工方向），领取学生证"},
      {lbl:"注册 GP（全科医生）",note:"搜索 nhs.uk 找附近 GP 并注册，IHS 已覆盖 NHS 就医费用"},
      {lbl:"开英国银行账户",note:"推荐 Monzo/Starling（线上开，快）或 HSBC/Barclays（需预约）；需 BRP + 入学证明"},
      {lbl:"申请 NUS 学生折扣卡",note:"大量商家/交通折扣，TOTUM 卡即前 NUS Extra"},
      {lbl:"了解 Graduate Route 时间",note:"毕业申请前不能离境超过 180 天，提前规划回国假期"},
    ],
  },
  us:{
    timeline:[
      {step:"收到 Offer + 确认接受",when:"3–4 月",note:"告知学校接受 Offer，请国际学生办公室（DSO）准备 I-20"},
      {step:"收到 I-20 & 核查信息",when:"接受后 2–4 周",note:"检查姓名、护照号、项目、开始日期是否有误；在 I-20 学生签名栏签名"},
      {step:"缴纳 SEVIS 费 I-901",when:"面签前",note:"登录 fmjfee.com 缴 $350，保存收据（PDF 打印备用）"},
      {step:"填写 DS-160 非移民签证表",when:"面签前",note:"登录 ceac.state.gov，填写完整后打印带条形码的确认页"},
      {step:"预约面签（越早越好！）",when:"旺季 3–5 月排队长",note:"在 ustraveldocs.com 预约；北京/上海/广州/成都/沈阳均设使馆/总领馆"},
      {step:"参加签证面试",when:"按预约日期",note:"携带全套材料，面试 5–10 分钟，当场获知初步结果；STEM 方向可能触发 221(g) 行政审查"},
      {step:"护照返还（贴签）",when:"面试后 3–5 工作日（正常）",note:"行政审查（221g）可能延长至数周至数月；建议比开学日提前 3–4 个月面签"},
      {step:"入境美国",when:"I-20 开始日期前 30 天内",note:"口岸出示有效签证 + I-20 + 护照；入境后 10 天内向学校 DSO 报到激活 SEVIS"},
    ],
    qa:[
      {q:"你去美国做什么？",a:"我已被 [学校名] 录取攻读 [专业] 硕士/博士学位，研究方向是 [简述]，预计 [年限] 年完成。"},
      {q:"你的资金来源？",a:"我已获得全额奖学金/家庭资助/本人储蓄（展示银行存款证明），足以覆盖学费和生活费。"},
      {q:"毕业后你有什么计划？",a:"完成学业后计划回国从事[领域]工作/学术研究。（表现非移民意图）"},
      {q:"你为什么选这所学校/这个项目？",a:"该校 [专业] 全美排名靠前，[导师] 教授的研究方向与我高度匹配，课程设置也契合我的职业目标。"},
      {q:"你的专业是什么？会涉及敏感技术吗？",a:"我研究的是 [具体方向]，属于基础学术研究，项目资金来自 NSF/NIH 等学术机构，不涉及军事应用。（提前了解 ATAS 豁免范围）"},
    ],
    arrival:[
      {lbl:"向学校 DSO 报到（必须！）",note:"入境 10 天内到国际学生办公室报到，激活 SEVIS 记录，否则签证状态失效"},
      {lbl:"确认 I-94 入境记录",note:"cbp.gov/i94 查询，状态应为 D/S（Duration of Status），若有误立即联系 DSO"},
      {lbl:"开银行账户",note:"Chase/Bank of America/Discover 凭护照 + I-20 可开户；推荐 Discover（无境外手续费）"},
      {lbl:"申请 SSN（有 RA/TA 才可）",note:"有工作 Offer 的去本地 Social Security Administration 办；无工作可暂不申请"},
      {lbl:"购买健康保险",note:"学校通常强制购买校保（已从学费扣除），确认是否需手动激活"},
      {lbl:"了解 OPT 申请时间",note:"毕业前 90 天可开始申请 OPT；STEM 延期需额外提前规划，找 DSO 确认时间线"},
    ],
  },
  au:{
    timeline:[
      {step:"收到 CoE（录取确认书）",when:"录取后学校发放",note:"CoE 包含课程、学费、开始日期等信息，是签证申请的核心文件"},
      {step:"购买 OSHC 保险",when:"签证申请前（必须）",note:"选择 Medibank/BUPA/AHM 等；须覆盖整个 CoE 期间，费用约 AUD 600–700/年"},
      {step:"准备 GTE 声明（核心！）",when:"签证申请前",note:"解释：为什么选澳洲/这个课程/毕业后打算；越具体越好，是签证官判断真实性的依据"},
      {step:"完成体检",when:"签证申请前（部分国籍必须）",note:"中国大陆学生通常需要胸部 X 光 + 体检，预约 Bupa/Medibank 指定机构"},
      {step:"在 ImmiAccount 提交申请",when:"材料齐全后",note:"网上申请 Subclass 500，上传所有文件，缴纳 AUD 1,600 签证费"},
      {step:"等待结果",when:"通常 2–8 周",note:"部分申请需配合额外 health assessment；已购 OSHC 和 GTE 充分的情况下通过率很高"},
      {step:"入境澳洲",when:"CoE 开始日期前（看签证条件）",note:"电子签证，入境时移民官扫护照核查；配偶/子女需分别申请相应签证"},
    ],
    arrival:[
      {lbl:"向院校国际办公室报到",note:"激活 CoE，领取学生证和入学材料包"},
      {lbl:"申请 TFN（税号）",note:"ato.gov.au 网上申请，若有校内外工作必须有 TFN，2–3 周内邮寄到达"},
      {lbl:"开银行账户",note:"Commonwealth/ANZ/NAB/Westpac 凭护照当天开户；CBA 注册全程中文服务"},
      {lbl:"注册 Medicare（有资格者）",note:"与特定国家（如英国/新西兰）有互惠协议；中国学生一般不在互惠范围，靠 OSHC 保险"},
      {lbl:"了解工时限制",note:"学期间每两周最多 48 小时，假期不限；严格遵守，违规可影响续签"},
      {lbl:"注意 GTE 一致性",note:"入境后的实际行为（退课/转专业等）须与签证 GTE 声明一致，变动前咨询学校"},
    ],
  },
  ca:{
    timeline:[
      {step:"确认 DLI 认证院校",when:"申请前",note:"在 canada.ca 确认学校在 DLI（指定学习院校）名单，否则无法申请学习许可"},
      {step:"评估 SDS vs 普通通道",when:"收到录取后",note:"SDS（学签快速通道）需：雅思各项 ≥5.5 + GIC 存款 + 指定体检；可大幅缩短审批时间"},
      {step:"开设 GIC 账户（SDS 必须）",when:"尽早",note:"向 Scotiabank/CIBC/BMO 等开设 Guaranteed Investment Certificate，存入 CAD 10,000"},
      {step:"缴纳生物识别费",when:"申请前",note:"CAD 85，在 IRCC 网站预约采集中心（上海/北京/广州均有），指纹 + 照片"},
      {step:"网申学习许可",when:"材料齐全后",note:"IRCC 官网提交，SDS 通道约 2–8 周，普通通道 4–16 周"},
      {step:"收到批准信（LOI）& eTA",when:"审批通过后",note:"非加拿大公民还需 eTA（电子旅行授权），CAD 7，同步申请"},
      {step:"入境加拿大",when:"开学前",note:"口岸领取正式纸质学习许可（Study Permit）；GIC 取款后第一个月可开始提取"},
    ],
    arrival:[
      {lbl:"激活 GIC & 开本地账户",note:"到 Scotiabank/CIBC 开户并激活 GIC，每月可提取固定金额作生活费"},
      {lbl:"申请 SIN 社会保险号",note:"Service Canada 办公室凭学习许可申请，找工作必须有 SIN"},
      {lbl:"申请 OHIP/医疗保险",note:"安大略省 OHIP 等待期 3 个月，期间须自购私人保险；不同省等待期不同"},
      {lbl:"向国际学生办公室报到",note:"激活学籍，了解 PGWP 规划——毕业后工签长度 = 学习许可长度"},
      {lbl:"了解工作权利",note:"持学习许可校外工作每周时间，以 IRCC 最新政策为准（政策有调整）"},
      {lbl:"提前研究 PGWP 路径",note:"PGWP 申请须在毕业后 90 天内提交；PGWP → Express Entry → 永居，整个路径提前规划"},
    ],
  },
  sg:{
    timeline:[
      {step:"收到录取通知",when:"录取后",note:"通知学校国际学生办公室，由学校通过 SOLAR 系统代为发起申请"},
      {step:"提交材料给学校",when:"按学校清单（通常 2–3 周）",note:"护照、学历证明、资金证明、照片等，学校统一提交给 ICA（内政部）"},
      {step:"等待 ICA 审批",when:"2–8 周",note:"ICA 审批学生准证申请，进度可在 SOLAR 系统查询"},
      {step:"收到 IPA 批准信",when:"审批通过",note:"IPA（In-Principal Approval）是入境依据，有效期 60 天，凭此入境新加坡"},
      {step:"入境新加坡",when:"IPA 有效期内",note:"入境时携带 IPA + 护照，在机场 ICA 柜台处理"},
      {step:"换取正式 Student's Pass",when:"入境后",note:"预约 ICA 完成生物识别（指纹/照片）领取正式准证卡"},
    ],
    arrival:[
      {lbl:"完成准证换领",note:"入境后预约 ICA Enrolment，完成生物识别后领取实体 Student's Pass 卡"},
      {lbl:"开银行账户",note:"POSB/DBS/OCBC 凭准证 + 护照开户，DBS 推荐中国学生（有中文服务）"},
      {lbl:"申请 SingPass",note:"新加坡数字身份，用于几乎所有政府/银行服务，尽早注册"},
      {lbl:"购买手机卡",note:"Singtel/StarHub/M1/GOMO，持护照到店或线上实名购买"},
      {lbl:"了解就业准证门槛",note:"EP（月薪 SGD 5,000+）/ S Pass（月薪 SGD 3,150+），提前了解毕业后就业签证路径"},
    ],
  },
  hk:{
    timeline:[
      {step:"收到录取通知",when:"3–6月",note:"港校确认录取，由学校协助学生准备签注申请材料"},
      {step:"提交学生签注申请",when:"录取后",note:"内地学生持港澳通行证（回乡证），向入境事务处申请「学生」类别签注；大部分院校代协助"},
      {step:"等待审批",when:"4–8 周",note:"入境处审批，可在学校国际处查询进度"},
      {step:"获批 & 入境香港",when:"审批通过",note:"凭签注 + 回乡证 + 录取通知入境；新入学者须在开学日前抵港"},
      {step:"更新签注（在学期间）",when:"每年或按需",note:"签注到期前由学校协助续签，在学期间可持有多次续签"},
    ],
    arrival:[
      {lbl:"向学校国际处报到",note:"领取学生证、宿舍钥匙、各类入学材料"},
      {lbl:"开香港银行账户",note:"汇丰/恒生/中银香港，凭学生证 + 回乡证 + 录取信，当天可开户"},
      {lbl:"申请八达通",note:"港铁/巴士/便利店通用，地铁站购买；学生版有折扣（部分学校统一办理）"},
      {lbl:"了解 IANG 毕业后签注",note:"毕业后 IANG 无条件留港 12 个月，须在毕业后 6 个月内申请，提前计划"},
      {lbl:"注意回乡证有效期",note:"在港期间留意回乡证/护照有效期，及时在国内办理续签（在港无法办理）"},
    ],
  },
  de:{
    timeline:[
      {step:"⚠️ APS 学历认证（最先做！）",when:"申请学校前",note:"中国大陆学生赴德必须，前往 APS 中心（北京/上海/广州）认证学历，耗时 1–4 个月，aps.org.cn"},
      {step:"申请德国高校并获录取",when:"APS 拿到后",note:"凭 APS 证书申请，获 Zulassungsbescheid（录取通知书）"},
      {step:"开设阻断账户 Sperrkonto",when:"录取后",note:"Deutsche Bank/Fintiba/Expatrio 等开户，存入约 €11,208（2024年标准），账户锁定，每月仅可取出固定额"},
      {step:"预约签证面试",when:"材料准备齐全后",note:"德国驻华使馆（北京/上海/广州/成都/沈阳）预约，旺季需 4–8 周才能约到"},
      {step:"参加签证面试",when:"按预约日期",note:"携带 APS 证书、录取信、阻断账户证明、学历、健康保险等；面试约 15–20 分钟"},
      {step:"等待签证 & 入境",when:"4–8 周",note:"入境德国，持国家签证（D类）入境；签证有效期通常与学习许可一致"},
      {step:"户籍登记 & 换居留证",when:"入境后 2 周内",note:"先到 Einwohnermeldeamt 做 Anmeldung（住址登记），再向 Ausländerbehörde 申请居留许可"},
    ],
    arrival:[
      {lbl:"Anmeldung 住址登记（必须！）",note:"入境 2 周内到 Einwohnermeldeamt 登记，获 Anmeldebestätigung，后续开银行/申请税号都需要"},
      {lbl:"在大学完成 Immatrikulation",note:"向大学注册处提交录取通知 + 学费收据，获学生证"},
      {lbl:"开银行账户",note:"Deutsche Bank/Commerzbank/N26（推荐纯线上，快）凭 Anmeldung + 护照开户"},
      {lbl:"申请公共医疗保险",note:"TK/AOK/Barmer 等学生医保，加入后才能正式在大学注册；约 €110–130/月"},
      {lbl:"激活阻断账户提款",note:"入境后联系 Sperrkonto 开户银行开通月度取款权限"},
      {lbl:"申请 IBAN 并告知大学",note:"德国本地账户 IBAN 用于奖学金/奖助金转账"},
    ],
  },
  ch:{
    timeline:[
      {step:"收到录取通知",when:"各校时间不同",note:"ETH 通常 3 月，EPFL 3–4 月；确认录取并缴纳（如有）押金"},
      {step:"向瑞士驻华使馆申请 D 类签证",when:"入境前 2–3 个月",note:"长期签证（Nationales Visum），是入境后换居留证的前提"},
      {step:"准备材料",when:"签证申请前",note:"资金证明（约 CHF 21,000/年）、住宿证明（宿舍确认/租房合同）、医疗保险（Krankenkasse）"},
      {step:"等待签证",when:"2–4 周",note:"部分国籍需面试；使馆审批后邮寄护照"},
      {step:"入境瑞士",when:"D类签证有效期内",note:"凭 D 类签证入申根区入境，在瑞士期间无需另申请申根签"},
      {step:"向州移民局登记换居留证",when:"入境后 90 天内（尽快）",note:"到所在州 Migrationsamt 或 Gemeindeverwaltung 登记，换取 B 类居留许可"},
    ],
    arrival:[
      {lbl:"向 Migrationsamt 登记",note:"携带护照、D类签证、录取信、住宿证明、医保证明，换取居留许可申请收据"},
      {lbl:"购买 Krankenkasse 医疗保险",note:"法定强制，入学前生效；comparis.ch 比较价格，约 CHF 300–500/月"},
      {lbl:"开瑞士银行账户",note:"UBS/ZKB（苏黎世）/BCV（洛桑）凭居留证申请；部分银行需预约"},
      {lbl:"向大学注册",note:"携带居留证收据 + 录取信完成 Immatrikulation，领取学生证（SBB/交通优惠）"},
      {lbl:"申请 SBB GA 或 Halbtax",note:"瑞士火车卡（半价卡 CHF 120+/年），公共交通发达，大量使用"},
    ],
  },
  nl:{
    timeline:[
      {step:"收到录取通知",when:"录取后",note:"通知学校国际处（International Office），启动 IND 居留申请流程"},
      {step:"学校代申 MVV（入境许可）",when:"开学前 4–6 个月",note:"非申根国籍须先由 IND 批准 MVV（Machtiging tot Voorlopig Verblijf），学校统一提交"},
      {step:"提交材料给学校",when:"按学校清单",note:"护照、资金证明（约 €900–1,100/月）、住宿证明等，学校汇总后提交 IND"},
      {step:"等待 IND 审批",when:"6–12 周",note:"IND 批准后，大使馆联系你领取 MVV 贴签"},
      {step:"持 MVV 入境荷兰",when:"MVV 有效期 6 个月",note:"MVV 是入境荷兰的通行证，入境后须换正式居留证"},
      {step:"在 IND 换取居留证（VVR）",when:"入境后预约",note:"到指定 IND 门诊完成生物识别，换取正式居留卡（VVR）"},
    ],
    arrival:[
      {lbl:"完成 IND 生物识别 & 换居留证",note:"预约 IND 门诊，约 2–4 周后可领居留卡"},
      {lbl:"向市政厅（Gemeente）登记",note:"DigiID 账户需先有 BSN 公民号；到市政厅登记后获 BSN，用于税务/银行/医保"},
      {lbl:"购买医疗保险（Zorgverzekering）",note:"荷兰法律强制，约 €130–160/月；留学生首次购买后可申请 Zorgtoeslag 补贴"},
      {lbl:"开银行账户",note:"ABN AMRO/Bunq/Revolut（线上快）凭 BSN + 居留证开户"},
      {lbl:"了解 Zoekjaar 求职年规划",note:"毕业后1年无条件留荷找工作，无薪资门槛，是重要的留欧窗口"},
    ],
  },
  jp:{
    timeline:[
      {step:"⚠️ 联系导师获内诺",when:"申请前 6–12 个月",note:"日本研究生院申请几乎必须有教授「内诺」（接收意向），没有内诺申请意义不大；提前发邮件"},
      {step:"通过入学考试/审查",when:"各校时间不同",note:"一般入试（笔试面试）或 AO/书类選考；部分学校专为留学生设秋季入学"},
      {step:"学校申请 COE（在留资格认定证明书）",when:"入学 3–4 个月前",note:"学校向出入国在留管理庁（入管局）代申，审批需 1–3 个月，务必提前开始"},
      {step:"收到 COE",when:"申请后 1–3 个月",note:"学校以挂号信寄送 COE 纸质版；收到后才能向使馆申请签证"},
      {step:"持 COE 向大使馆申请留学签证",when:"入境前",note:"递交 COE + 护照等材料，通常 5 个工作日出结果，费用约 ¥200"},
      {step:"入境日本 & 换在留卡",when:"COE 有效期内（3个月）",note:"入境时入管局发放在留卡（Residence Card），务必妥善保管"},
    ],
    arrival:[
      {lbl:"到市役所/区役所登记住民票",note:"入境后 14 天内登记住所，获住民票（类似户籍证明），后续一切手续都需要它"},
      {lbl:"开日本银行账户",note:"JP Bank（ゆうちょ銀行，邮局）门槛最低，凭在留卡 + 住民票即可开；三菱/住友需等 3 个月"},
      {lbl:"申请学生证",note:"在学校完成入学手续后领取；持学生证可享交通、博物馆、软件等大量优惠"},
      {lbl:"办理国民健康保险",note:"在留卡上显示「国民健康保険」，到市役所加入，学生年保费约 ¥10,000–30,000"},
      {lbl:"了解就活（就職活動）时间线",note:"日本就活从大三/研一即开始，与国内完全不同；及早了解 Rikunabi/Mynavi 等平台"},
    ],
  },
  kr:{
    timeline:[
      {step:"收到录取通知（入学许可书）",when:"各校时间不同",note:"确认收到「입학허가서」（标准入学许可书），是签证核心文件"},
      {step:"准备学历认证",when:"申请签证前",note:"中国大陆学历通常需公证翻译（部分学校要求认证），提前1–2个月处理"},
      {step:"准备银行存款证明",when:"申请签证前",note:"约 KRW 9,000,000 以上（约 ¥49,000）的本人或担保人存款证明"},
      {step:"向韩国驻华领事馆申请 D-2 签证",when:"开学前 1–2 个月",note:"提交护照、录取书、存款证明、学历材料；通常 5–10 个工作日"},
      {step:"入境韩国",when:"开学前",note:"持 D-2 签证入境，入境后可在 HiKorea 查询外国人登录情况"},
      {step:"申请外国人登录证",when:"入境后 90 天内",note:"到管辖区出入国外国人厅办理，需护照 + 外国人登录费约 KRW 30,000"},
    ],
    arrival:[
      {lbl:"办理外国人登录证",note:"入境后 90 天内到出入国外国人厅（출입국외국인청）申请，是韩国境内最重要的身份证明"},
      {lbl:"开韩国银行账户",note:"KB 国民银行/新韩/友利等，凭外国人登录证 + 护照开户；校内分行最方便"},
      {lbl:"申请校园网账号与宿舍门禁",note:"向学生处报到后开通，校园网资源（韩文数据库/电子期刊）非常丰富"},
      {lbl:"购买 T-money 交通卡",note:"地铁/公交/便利店通用，校内或便利店购买，学生版有折扣"},
      {lbl:"了解 D-10 求职签证",note:"毕业后须在 D-2 到期前申请 D-10（求职签证）留韩找工作，最长 6 个月"},
    ],
  },
  fr:{
    timeline:[
      {step:"⚠️ 注册 Campus France（最先做！）",when:"开学前 4–6 个月",note:"在 campusfrance.org/zh-hans 创建账号，提交材料，预约 Campus France 中国面谈，获 DAP 号；没有 DAP 无法申签证"},
      {step:"Campus France 面谈",when:"注册后预约",note:"视频或到场面谈，说明选法国/选项目的原因，通常较轻松"},
      {step:"获得法国院校录取",when:"按学校时间线",note:"Parcoursup（本科）或直接院校申请；收到录取后才能进行下一步"},
      {step:"申请 VLS-TS 签证",when:"出发前 2–3 个月",note:"在 france-visas.gouv.fr 申请，凭 Campus France DAP + 录取 + 资金证明等；使馆约 2–4 周"},
      {step:"入境法国",when:"VLS-TS 有效期内（90天内入境）",note:"VLS-TS 是「长期签证，可用作居留」，入境后替代居留证使用前 6 个月"},
      {step:"⚠️ 入境后 3 个月内在 ANEF 平台验证",when:"必须！入境后尽快",note:"anef.fr 在线验证 VLS-TS，否则视为无合法居留；系统偶有故障，提前操作"},
    ],
    arrival:[
      {lbl:"ANEF 平台验证 VLS-TS（必须！）",note:"入境后 3 个月内完成，在 administration-etrangers-en-france.interieur.gouv.fr 操作，步骤繁琐但必须完成"},
      {lbl:"申请 CAF 住房补贴",note:"在 caf.fr 申请 APL（住房个人补助），每月可补 €50–200，需法国社会保险号（NIR）"},
      {lbl:"加入 Sécu 学生医保",note:"在 ameli.fr 注册，获得 NIR（社保号），用于医疗报销和 CAF 申请"},
      {lbl:"开法国银行账户",note:"BNP Paribas/Société Générale/Hello Bank（线上快），凭护照 + 居留证明开户"},
      {lbl:"申请 CROUS 餐补",note:"在 messervices.etudiant.gouv.fr 申请，学生餐厅约 €3.3/餐，须有 NIR"},
    ],
  },
  se:{
    timeline:[
      {step:"通过 Antagning.se 申请录取",when:"开学前 8–12 个月（1月中截止）",note:"瑞典大学申请截止非常早（通常1月15日），签证和申请须同步规划"},
      {step:"收到录取 & 缴纳学费",when:"4–5 月",note:"非欧盟/EEA 学生需缴学费（通常每年 SEK 80,000–140,000）"},
      {step:"网申居留许可",when:"录取后尽快，至少提前 4 个月",note:"migrationsverket.se 提交申请 + 缴纳 SEK 1,500；审批 2–4 个月，越早越好"},
      {step:"提交材料",when:"网申时",note:"护照、录取证明、资金证明（每月 SEK 8,514）、医疗保险证明"},
      {step:"等待审批 & 取证",when:"2–4 个月",note:"审批通过后向瑞典驻华使馆预约取证；旺季取证预约可能需 2–4 周"},
      {step:"入境瑞典",when:"居留证有效期内",note:"持居留卡入境；入境后向 Skatteverket 登记获得 personnummer"},
    ],
    arrival:[
      {lbl:"向 Skatteverket 登记获 Personnummer",note:"瑞典个人号，用于医疗/银行/税务/电话一切场合，持居留证向地方税务局申请"},
      {lbl:"开银行账户",note:"Swedbank/SEB/Nordea 需预约；推荐 Revolut/Wise 作过渡，有 Personnummer 后开正式账户"},
      {lbl:"申请学生公寓",note:"瑞典租房供不应求，录取后立刻在 SSSB（斯德哥尔摩）/ SGS（哥德堡）等学生住房机构排队"},
      {lbl:"了解 Friskvård 健康福利",note:"瑞典雇主/学生工会（studentkår）通常提供健身补贴，入学后加入工会可享多种福利"},
    ],
  },
  be:{
    timeline:[
      {step:"收到比利时院校录取",when:"各校时间不同（KU Leuven 通常 4–6 月）",note:"确认录取并缴纳押金"},
      {step:"向比利时驻华使馆申请 D 类签证",when:"开学前 3–4 个月",note:"长期签证（Visum D），缴纳约 €350 签证费，准备资金证明/住宿/学历等"},
      {step:"等待签证",when:"4–8 周",note:"使馆审批，护照邮寄返回"},
      {step:"入境比利时",when:"D 类签证有效期内",note:"入境后须在规定期限内完成市政登记"},
      {step:"⚠️ 3个工作日内向市政厅登记",when:"入境后立即",note:"到 Gemeente（荷语区）或 Commune（法语区）登记居住，开始申请外国人卡（A卡）"},
      {step:"换取外国人居留卡（A卡）",when:"登记后 2–6 周",note:"外国人卡在市政厅领取或邮寄，是比利时境内的合法居留证明"},
    ],
    arrival:[
      {lbl:"市政厅登记（入境3工作日内！）",note:"带护照 + D 类签证 + 住宿证明，Gemeente 登记后会有警察来住所核实，务必配合"},
      {lbl:"开比利时银行账户",note:"KBC/BNP Paribas Fortis/ING，凭护照+住址证明开户；部分需等 A 卡到手"},
      {lbl:"申请 eID（电子身份卡）",note:"A 卡到手后可申请，用于政府网站、税务等数字服务"},
      {lbl:"注册学生健康保险",note:"比利时公共医保 RIZIV/INAMI，通过学生互助社（Mutualité）注册，约 €100/年"},
      {lbl:"了解布鲁塞尔 EU 实习机会",note:"欧委会/欧洲议会每年提供大量带薪实习（蓝皮书实习 Blue Book），在读/毕业生均可申请"},
    ],
  },
  dk:{
    timeline:[
      {step:"收到丹麦院校录取",when:"各校时间不同",note:"DTU/哥本哈根大学/奥胡斯大学等英语授课项目"},
      {step:"网申居留许可",when:"开学前 4–5 个月",note:"在 newtodenmark.dk 提交申请 + 缴 DKK 1,995；材料：护照、录取、资金证明（约 DKK 6,000/月）"},
      {step:"等待 SIRI 审批",when:"2–3 个月",note:"SIRI（丹麦国际招募与一体化局）负责审批；部分复杂案件可能更长"},
      {step:"获批 & 取签",when:"审批通过",note:"前往丹麦驻华使馆领取居留许可贴签，或直接邮寄到户"},
      {step:"入境丹麦",when:"居留许可有效期内",note:"入境后须尽快完成市政登记"},
      {step:"市政厅登记获 CPR 号",when:"入境后尽快",note:"到 Borgerservice 办公室登记，获取 CPR（个人注册号），丹麦一切生活都依赖它"},
    ],
    arrival:[
      {lbl:"登记 CPR 号（最优先！）",note:"到 Borgerservice 登记住址，获 CPR 号；没有 CPR 无法开银行/看医生/购手机合约"},
      {lbl:"开丹麦银行账户",note:"Danske Bank/Nordea/Lunar（线上），凭 CPR + 护照；Lunar 对无 CPR 也相对友好"},
      {lbl:"注册公共医疗",note:"有 CPR 后自动加入 regionens 公共医疗体系，选 GP 注册，就医基本免费"},
      {lbl:"申请学生公寓",note:"哥本哈根租房极紧张，通过 DTU/KU 宿舍系统提前申请，等待名单可达数月，务必早"},
      {lbl:"了解 STEM 快速通道",note:"部分 STEM 专业毕业后可申快速工作许可（Fast-track Scheme），雇主参与该体系可加速就业签"},
    ],
  },
  nz:{
    timeline:[
      {step:"收到新西兰院校录取",when:"各校时间不同",note:"奥克兰/惠灵顿/坎特伯雷大学等"},
      {step:"网申学生签证",when:"开学前 1–3 个月",note:"在 visa.immigration.govt.nz 提交，流程相对简洁，全程在线"},
      {step:"提交材料",when:"网申时",note:"护照、录取信、资金证明（学费 + NZD 15,000/年生活费参考）、体检/无犯罪（部分国籍）"},
      {step:"等待结果",when:"1–4 周",note:"电子签证（eVisa）发到邮箱，入境时无需贴签"},
      {step:"入境新西兰",when:"签证有效期内",note:"口岸出示护照+签证邮件，入境时海关会检查资金和住宿安排"},
    ],
    arrival:[
      {lbl:"向学校国际处报到",note:"领取学生证，了解课程安排和校园设施"},
      {lbl:"申请 IRD 号（税号）",note:"ird.govt.nz 在线申请，找工作必须，约 1–2 周邮寄到达"},
      {lbl:"开新西兰银行账户",note:"ANZ/BNZ/Kiwibank 凭护照开户，部分银行支持到达前在线预开"},
      {lbl:"了解工作权利",note:"学期间每周可工作 20 小时，假期全职；配偶可持伴侣签证全职工作"},
      {lbl:"提前了解毕业工签 PSW",note:"Post-Study Work Visa 最长 3 年，毕业后尽快申请，是技术移民积分重要窗口"},
    ],
  },
  my:{
    timeline:[
      {step:"收到马来西亚院校录取",when:"各校时间不同",note:"确认院校在 EMGS 认可名单（educationmalaysia.gov.my/approved-institutions）"},
      {step:"学校提交 EMGS 申请",when:"录取后",note:"学校通过 EMGS 系统代申，学生按清单提供护照、学历、资金证明等"},
      {step:"⚠️ 完成 EMGS 指定体检",when:"申请提交前或后",note:"须在 EMGS 认可医院完成体检（血液/肺结核/HIV 检测等），中国境内有指定机构名单，查 EMGS 官网"},
      {step:"等待 EMGS 审批",when:"4–10 周",note:"EMGS 审批通过后发 eVAL（电子批准信）"},
      {step:"持 eVAL 入境马来西亚",when:"eVAL 有效期内",note:"入境时出示 eVAL + 护照，口岸拿到临时居留身份"},
      {step:"在移民局完成准证手续",when:"入境后",note:"到马来西亚移民局（Jabatan Imigresen）完成生物识别，领正式 Student Pass"},
    ],
    arrival:[
      {lbl:"完成 Student Pass 正式手续",note:"到当地移民局（Imigresen）完成生物识别，领取学生准证印章或卡"},
      {lbl:"开马来西亚银行账户",note:"Maybank/CIMB/香港上海汇丰，凭护照 + 准证 + 录取信开户，相对便捷"},
      {lbl:"购买本地 SIM 卡",note:"Digi/Celcom/Maxis/U Mobile，护照实名购买，费用极低"},
      {lbl:"了解生活成本优势",note:"吉隆坡生活成本远低于新加坡/香港，月均 RM 1,500–2,500 可舒适生活"},
      {lbl:"关注毕业后路径",note:"马来西亚就业准证（EP）相对易获，也可作为跳板申请其他国家（新加坡、澳洲）就业"},
    ],
  },
  cn:{
    timeline:[
      {step:"收到录取通知书 & JW202",when:"录取后",note:"JW202 是普通高等院校国际学生录取证明，政府奖学金生收 JW201，两者均由学校申请"},
      {step:"向驻本国中国使馆申请 X1 签证",when:"入境前",note:"凭录取通知书 + JW202 申请，通常 3–5 工作日；X1 针对 6 个月以上学习"},
      {step:"入境中国",when:"签证有效期内",note:"口岸入境，海关申报（现金超 $5,000 须申报）"},
      {step:"⚠️ 30天内换居留许可",when:"入境后立即办理",note:"到所在省市公安局出入境管理处，申请「学习」类居留许可；需体检报告"},
      {step:"指定医院体检",when:"入境后 30 天内",note:"学校指定卫生检疫机构（不同城市不同），体检项目含血液、胸片、心电图等"},
    ],
    arrival:[
      {lbl:"换学习类居留许可（30天内）",note:"公安局出入境处，携带护照+签证+录取信+JW202+体检报告+照片；缴纳 ¥800–1,000 费用"},
      {lbl:"向学校报到领学生证",note:"国际学生办公室（留学生办公室）办理入学手续，领取校园卡/学生证"},
      {lbl:"开中国银行账户",note:"中国银行/工商银行/建设银行，凭护照 + 居留许可开户；支持微信/支付宝绑定"},
      {lbl:"注册微信 & 支付宝",note:"境内生活必备，微信需手机号+实名认证，支付宝可绑定银行卡"},
      {lbl:"了解奖学金要求",note:"政府奖学金（CSC）有出勤率/成绩要求，违反可能取消奖学金，提前了解条款"},
    ],
  },
};

/* 文书模板 */
const DOCS=[
  {id:"cv",label:"📄 简历 CV",render:()=>`
    <h3>硕士申请 CV 结构（1 页为宜）</h3>
    <ol>
      <li><b>个人信息</b>：姓名、邮箱（专业格式）、LinkedIn / GitHub（如相关）；不需要照片（英美澳）</li>
      <li><b>教育背景</b>：学校、专业、起止时间、GPA / 均分、核心课程 3–5 门、排名（如靠前）</li>
      <li><b>科研 / 项目经历</b>：项目名 + 你的角色 + 方法 + 量化成果，动词开头</li>
      <li><b>实习 / 工作经历</b>：公司、岗位、时长、职责与成果（与目标专业相关的优先展示）</li>
      <li><b>技能与证书</b>：语言成绩、编程 / 软件技能、专业证书（CFA/FRM 等）</li>
      <li><b>荣誉 / 课外</b>：奖学金、竞赛（含排名）、相关社团（精选）</li>
    </ol>
    <div class="ai-tips-grid">
      <div class="ai-tip-card">
        <h4>⚡ 强动词库（英文 CV 必备）</h4>
        <ul>
          <li><b>研究型</b>：Investigated · Analyzed · Designed · Developed · Implemented · Evaluated · Validated</li>
          <li><b>工程 / 技术</b>：Built · Engineered · Optimized · Automated · Deployed · Refactored · Integrated</li>
          <li><b>商科 / 数据</b>：Forecasted · Modeled · Identified · Streamlined · Reduced · Increased · Generated</li>
          <li><b>领导 / 协作</b>：Led · Coordinated · Collaborated · Presented · Mentored · Facilitated</li>
        </ul>
      </div>
      <div class="ai-tip-card">
        <h4>📊 如何量化结果（没数字也能写）</h4>
        <ul>
          <li>有数字直接用：准确率 88% → 93% · 节省每周 6h</li>
          <li>有排名用排名：项目组 12 人中排名第 2</li>
          <li>有规模用规模：分析 50 万条用户数据</li>
          <li>实在没数字：「使团队流程标准化，首次引入代码审查」也行</li>
          <li>❌ 避免：「负责了…」「参与了…」「做了一些…」</li>
        </ul>
      </div>
      <div class="ai-tip-card">
        <h4>🖼️ 格式注意点</h4>
        <ul>
          <li>字体：Times New Roman / Calibri / Georgia，11–12pt</li>
          <li>格式：PDF 投递（文件名用英文：Name_CV.pdf）</li>
          <li>英美澳：无需照片、年龄、婚姻状况</li>
          <li>德国/日本：可附照片（专业证件照）</li>
          <li>每段经历不超过 3–4 行 bullet；整体 1 页</li>
        </ul>
      </div>
      <div class="ai-tip-card">
        <h4>🚩 最常见硬伤</h4>
        <ul>
          <li>「参与」「协助」等弱动词 → 换强动词+你的具体贡献</li>
          <li>只写「负责 XX 模块」没有成果 → 加量化结果</li>
          <li>用中文 CV 直译 → 重写，英文 CV 习惯不同</li>
          <li>超过一页 → 精简，删掉与专业无关内容</li>
          <li>时间轴混乱 → 统一用「Month Year – Month Year」</li>
        </ul>
      </div>
    </div>
    <pre>模板结构（一段实习/项目）：
[动词] [做了什么] [用什么方法/工具] [结果/影响]

示例：
✅ Developed a CNN-based image classification model using PyTorch, achieving 93.2% accuracy on the test set (↑8% from baseline)
✅ Analyzed customer churn data (500K records) with SQL and Python; identified 3 key risk factors, reducing churn rate by 12%
❌ Responsible for data analysis work and helped the team complete the project</pre>`},
  {id:"ps",label:"✍️ 个人陈述 PS / SOP",render:()=>`
    <h3>PS / SOP 结构（区别于「自我感动式」自传）</h3>
    <ol>
      <li><b>动机引入（1 段）</b>：用一个真实具体经历切入——不是「我从小就」，而是「我在做 X 的时候发现 Y 问题」</li>
      <li><b>能力证据（2–3 段）</b>：用课程 / 项目 / 实习证明你「已经具备」学这个专业的基础（每段一个主题）</li>
      <li><b>项目契合（1–2 段）</b>：为什么是这所学校——提具体课程名 / 教授 / 研究中心 / 行业资源</li>
      <li><b>职业规划（1 段）</b>：读完想做什么，说得越具体越有说服力（行业 + 岗位方向）</li>
    </ol>
    <div class="ai-tips-grid">
      <div class="ai-tip-card">
        <h4>✅ 好开头 vs ❌ 烂开头</h4>
        <ul>
          <li>✅「In my third year, I encountered a dataset with 40% missing values and no established protocol. Rather than applying standard imputation...」</li>
          <li>✅「The 2019 supply chain disruption at [Company] exposed a gap I had not considered: predictive models trained on stable data often fail under volatility.」</li>
          <li>❌「Since childhood, I have always been fascinated by numbers and the power of data.」</li>
          <li>❌「In today's rapidly evolving world, data science plays an increasingly important role...」</li>
        </ul>
      </div>
      <div class="ai-tip-card">
        <h4>🇬🇧 UK PS vs 🇺🇸 US SOP 区别</h4>
        <ul>
          <li><b>英国 PS</b>：更偏学术动机，写为什么对这个学科感兴趣，语气更正式；UCAS 有 4000 字符限制（本科）；研究生各校自由格式</li>
          <li><b>美国 SOP</b>：更看重「fit」——你的经历如何契合项目；要提具体教授姓名 + 为什么想和 ta 合作</li>
          <li><b>澳洲</b>：通常叫「Statement of Purpose」，结构接近美式，重职业规划</li>
          <li><b>长度</b>：英国 600–800 词；美国 750–1000 词；按题目要求为准</li>
        </ul>
      </div>
      <div class="ai-tip-card">
        <h4>📝 「能力证据」段怎么写</h4>
        <ul>
          <li>每段一个核心主题（科研 / 实习 / 课程项目）</li>
          <li>结构：背景 → 你做了什么（细节！）→ 你学到了什么 / 遇到什么挑战 → 和申请方向的关联</li>
          <li>忌：只写「我做了 XX 项目」，要写你具体做了什么、为什么有价值</li>
          <li>量化结果尽量带上（和 CV 保持一致但扩展细节）</li>
        </ul>
      </div>
      <div class="ai-tip-card">
        <h4>🎯 「项目契合」段（每校必须定制）</h4>
        <ul>
          <li>提 2–3 门具体课程名（去官网查真实课程名）</li>
          <li>提 1 位教授姓名 + 他的研究方向（与你的兴趣关联）</li>
          <li>提学校独有资源：实验室 / 研究中心 / 实习合作企业 / 地理优势</li>
          <li>❌ 不要：「XXX 学校享誉全球，师资力量雄厚，是我梦想的学校」</li>
        </ul>
      </div>
    </div>
    <pre>红线清单（招生官直接看穿）：
❌ 没有具体细节，全是「我很努力/有热情/有潜力」
❌ 每所学校发同一份，「项目契合」段是复制粘贴
❌ 和 CV 完全重复——PS 要展开 CV 压缩的细节，不是重复
❌ 超过字数限制
❌ 有明显语法错误（一定找母语者或 AI 检查后再交）

核心原则：招生官想看「证据」，不是「感情」。
每一个优点主张（我擅长 X）都要有对应的具体事例支撑。</pre>`},
  {id:"rl",label:"📨 推荐信 RL",render:()=>`
    <h3>推荐信怎么找、怎么准备</h3>
    <ul>
      <li><b>选谁</b>：和你有<span class="hl">实质接触</span>的老师 / 实习主管 &gt; 头衔大但不了解你的人</li>
      <li><b>几封</b>：通常 2–3 封；学术推荐为主，相关实习推荐为辅</li>
      <li><b>怎么配比</b>：授课型偏学术 + 实践各一；研究型偏科研导师</li>
      <li><b>你要做的</b>：给推荐人一份「素材包」——你的 CV、成绩、和 ta 的合作经历、申请方向，帮 ta 写出具体细节</li>
      <li><b>避免</b>：千篇一律的模板信；推荐信内容要和你的 PS 互相印证、各有侧重</li>
    </ul>
    <pre>素材包模板：
- 我申请的专业 / 学校：
- 我们的合作 / 你了解我的方面：
- 希望重点体现的 2–3 个特质（附具体事例）：
- 截止日期 + 提交方式：</pre>`},
  {id:"major",label:"🎓 分专业要点",render:()=>`
    <h3>不同专业，CV / PS 的侧重完全不同</h3>
    <p style="font-size:13px;color:var(--muted);margin-bottom:14px">同一份模板套所有专业是大忌。下面按专业大类给「该突出什么」。</p>
    <div style="display:flex;flex-direction:column;gap:16px">
      <div>
        <h3 style="font-size:14px">💻 计算机 / 工程</h3>
        <ul>
          <li><b>CV</b>：项目经历放最前，写清<span class="hl">技术栈 + 你的角色 + 量化结果</span>（如「优化模型推理速度 40%」）；附 GitHub；竞赛 / 开源加分。</li>
          <li><b>PS</b>：从一个具体技术问题或项目切入，证明你<span class="hl">动手做过</span>；点名想学的课程 / 方向（如分布式系统、CV/NLP），别空谈热爱。</li>
        </ul>
      </div>
      <div>
        <h3 style="font-size:14px">📊 商科 / 金融</h3>
        <ul>
          <li><b>CV</b>：实习经历为核心，<span class="hl">量化业绩</span>（金额、增长率、排名）；CFA/FRM 等证书、建模 / Excel/Python 技能。</li>
          <li><b>PS</b>：<span class="hl">职业目标要清晰具体</span>（进哪个行业 / 岗位），说明该项目如何帮你达成；用领导力 / 团队案例佐证。商科最看「为什么是你 + 为什么是这个项目」。</li>
        </ul>
      </div>
      <div>
        <h3 style="font-size:14px">📚 社科 / 传媒 / 教育</h3>
        <ul>
          <li><b>CV</b>：研究 / 实习 / 田野 / 作品集并重；写清方法（定量 / 定性）与产出（报告、报道、作品）。</li>
          <li><b>PS</b>：明确<span class="hl">研究兴趣与问题意识</span>，能提到理论框架 / 关注的学者更佳；说明该项目的资源（课程、中心、导师）为何契合。</li>
        </ul>
      </div>
      <div>
        <h3 style="font-size:14px">🔬 研究型硕士 / 读博预备</h3>
        <ul>
          <li><b>CV</b>：<span class="hl">科研经历是核心</span>——课题、你的贡献、方法、成果（论文 / 预印本 / 会议）；实验 / 编程 / 统计技能。</li>
          <li><b>PS / 研究计划</b>：讲清<span class="hl">具体研究问题 + 初步思路</span>；<span class="hl">提前联系目标导师</span>（套磁），PS 里点名想加入的实验室与方向。</li>
        </ul>
      </div>
    </div>
    <p style="font-size:12px;color:var(--red);margin-top:14px">⚠️ 共同红线：每所学校的「为什么选这个项目」段都要单独定制，提具体课程 / 导师 / 资源。</p>`},
  {id:"ai",label:"✨ AI 润色助手",render:()=>`
    <h3>AI 润色助手</h3>
    <p style="font-size:13px;color:var(--muted);margin-bottom:16px">填入你的要素，生成可直接粘贴到 Claude / DeepSeek / ChatGPT 的专业提示词，让 AI 帮你生成初稿或润色文书。</p>
    <div class="ai-sub-tabs">
      <div class="ai-sub-tab on" data-t="ps" onclick="switchAiType('ps')">✍️ PS / SOP</div>
      <div class="ai-sub-tab" data-t="cv" onclick="switchAiType('cv')">📄 CV 一段</div>
      <div class="ai-sub-tab" data-t="rl" onclick="switchAiType('rl')">📨 推荐信素材包</div>
    </div>
    <div id="ai-form-area">${getAiForm('ps')}</div>
    <div id="ai-out-wrap" style="display:none">
      <div class="ai-out">
        <button id="ai-cp-btn" class="ai-cp-btn" onclick="copyAiPrompt()">📋 复制提示词</button>
        <pre id="ai-prompt-text"></pre>
      </div>
      <p class="ai-hint">复制提示词后，粘贴到 <a href="https://claude.ai" target="_blank" rel="noopener">Claude</a>、<a href="https://chat.deepseek.com" target="_blank" rel="noopener">DeepSeek</a> 或 ChatGPT，即可获得专业润色文书。</p>
    </div>`},
];

/* ═══ 申请清单 v2 ═══ */
/* c:"all"=所有国家; c:["uk","us"]=仅指定国家; r:1=必须; tip=提示; link=链接key */
const CK_LINKS={aps:"https://www.aps.org.cn",ucas:"https://www.ucas.com/postgraduate",uniassist:"https://www.uni-assist.de",wes:"https://www.wes.org",ets:"https://www.ets.org",ielts:"https://www.ielts.org",toefl:"https://www.ets.org/toefl"};
const CK_COUNTRIES=[{id:"all",flag:"🌍",n:"全部"},{id:"uk",flag:"🇬🇧",n:"英国"},{id:"us",flag:"🇺🇸",n:"美国"},{id:"au",flag:"🇦🇺",n:"澳洲"},{id:"ca",flag:"🇨🇦",n:"加拿大"},{id:"sg",flag:"🇸🇬",n:"新加坡"},{id:"hk",flag:"🇭🇰",n:"香港"},{id:"de",flag:"🇩🇪",n:"德国"},{id:"ch",flag:"🇨🇭",n:"瑞士"},{id:"jp",flag:"🇯🇵",n:"日本"},{id:"kr",flag:"🇰🇷",n:"韩国"}];
const CHECK2_PHASES=[
  {id:"p1",icon:"🎯",title:"信息收集 & 规划",when:"提前 12–18 个月",col:"#6366f1",items:[
    {id:"a01",t:"确定留学国家方向 & 大致费用预算",c:"all",r:1},
    {id:"a02",t:"研究各国学制（英国1年/美加澳2年）& 毕业工签政策",c:"all",r:1,tip:"UK Graduate Route 2年；US STEM OPT 3年；AU 485签证2-4年；CA PGWP最长3年"},
    {id:"a03",t:"确定目标专业大方向（CS/商科/工程/理学/人文…）",c:"all",r:1},
    {id:"a04",t:"制定语言考试计划（IELTS/TOEFL/PTE/Duolingo）",c:"all",r:1,tip:"多数英美院校最低雅思6.5–7.0；顶尖项目7.0–7.5；建议留出重考余量",link:"ielts"},
    {id:"a05",t:"了解 GRE/GMAT 要求（美国/加拿大部分院校必须）",c:["us","ca","sg","au"],tip:"GRE: USD 220；GMAT: USD 275；各院校要求不一，提前查清楚",link:"ets"},
    {id:"a06",t:"申请 APS 审核（德国必须，约 6–8 周，越早越好）",c:["de"],r:1,tip:"不办 APS 无法申请德国公立大学；提前6个月申请，勿拖",link:"aps"},
    {id:"a07",t:"提前套磁联系导师获取内诺（日本/韩国/瑞士研究型必须）",c:["jp","kr","de","ch"],r:1,tip:"提前6–12个月发套磁邮件；获内诺信后再提交正式申请"},
    {id:"a08",t:"了解 UCAS Postgraduate 系统",c:["uk"],tip:"部分英国专业经 UCAS PG 申请；多数可直申学校官网；提前看清楚",link:"ucas"},
    {id:"a09",t:"了解 uni-assist 系统（部分德国大学必须通过此平台）",c:["de"],tip:"uni-assist 流程慢，早提交；部分院校接受直申，逐一查清楚",link:"uniassist"},
  ]},
  {id:"p2",icon:"📚",title:"备考 & 语言成绩",when:"提前 12–18 个月",col:"#f59e0b",items:[
    {id:"b01",t:"语言考试报名（热门城市考位紧，提前 2–3 个月预约）",c:"all",r:1,tip:"IELTS 约提前1–3个月预约；TOEFL 提前2–4周；雅思和托福成绩有效期2年"},
    {id:"b02",t:"语言成绩出分达标（达到目标院校最低要求）",c:"all",r:1,tip:"首次备考约3–6个月；一次不够留时间重考；用本工具「选校匹配」查各项目要求"},
    {id:"b03",t:"GRE 出分（有效期5年，建议 155+V / 160+Q）",c:["us","ca"],tip:"部分项目不再强制要求，但高分有竞争优势；US申请核心材料之一"},
    {id:"b04",t:"GMAT 出分（商科建议 700+，有效期5年）",c:["us","ca","uk","sg"],tip:"部分商学院接受GRE代替GMAT；查各校最新政策"},
    {id:"b05",t:"TOPIK 韩语备考（赴韩推荐4级以上）",c:["kr"],tip:"英文项目入学不强制，但4级以上对日常生活和就业帮助极大"},
    {id:"b06",t:"JLPT 日语备考（N2/N1 对在日就业至关重要）",c:["jp"],tip:"英文授课项目入学可以不要求日语，但N2以上大幅提升就业机会"},
    {id:"b07",t:"德语备考 B1–B2（英文项目不强制，但显著提升就业竞争力）",c:["de","ch","be"],tip:"工程/技术岗位B2以上竞争力翻倍；到了德国当地再学也可以"},
  ]},
  {id:"p3",icon:"📄",title:"材料准备",when:"提前 9–12 个月",col:"#0ea5e9",items:[
    {id:"c01",t:"成绩单：中英文版本，教务处盖章",c:"all",r:1,tip:"申请时先上传非官方版，录取后寄送密封官方版；部分院校要求邮寄原件"},
    {id:"c02",t:"在读证明 / 毕业证 + 学位证（中英文）",c:"all",r:1,tip:"已毕业准备毕业证+学位证；在读开在读证明；英文版须学校出具或公证"},
    {id:"c03",t:"成绩单翻译 & 公证（德国/日本/法国通常要求）",c:["de","jp","fr","kr"],tip:"德国需DAAD认可翻译公司；国内公证处出具双语公证约¥300/份"},
    {id:"c04",t:"WES 学历认证报告（加拿大部分院校要求）",c:["ca"],tip:"WES流程4–8周；提前查清每所学校是否要求；官网USD245",link:"wes"},
    {id:"c05",t:"CV 定稿（英文，1页，动词开头+量化结果）",c:"all",r:1,tip:"参考本工具「文书模板」→ CV 页的指南；以PDF格式投递"},
    {id:"c06",t:"PS/SOP 通稿定稿，后期每校定制「项目契合」段",c:"all",r:1,tip:"通稿先写好；针对每校写具体课程/教授/资源那1–2段"},
    {id:"c07",t:"确定推荐人（2–3 封），发邀请 & 提供素材包",c:"all",r:1,tip:"提前2–3个月联系；给推荐人发CV+合作经历+申请方向素材包"},
    {id:"c08",t:"确认护照有效期（须覆盖留学全程+至少6个月）",c:"all",r:1},
    {id:"c09",t:"语言成绩官方送分至各院校",c:"all",r:1,tip:"IELTS TRF可免费寄5所，超出收费；TOEFL每所USD20；提前操作"},
    {id:"c10",t:"作品集 / Portfolio（建筑、设计、艺术类必须）",c:"all",tip:"通常10–20件作品；查各校具体格式、大小、内容要求"},
    {id:"c11",t:"研究计划 / Research Proposal（研究型或部分项目要求）",c:"all",tip:"1000–3000词；提出明确研究问题和初步方法思路"},
    {id:"c12",t:"证件照备足（护照版/签证版，电子+打印各多份）",c:"all",tip:"不同签证要求不同尺寸，建议多备几套"},
  ]},
  {id:"p4",icon:"🖥️",title:"网申 & 提交",when:"提前 6–9 个月",col:"#10b981",items:[
    {id:"d01",t:"整理各校申请截止日期（记入「我的申请」追踪）",c:"all",r:1,tip:"Rolling录取越早越好；截止前至少1周完成；部分奖学金截止日更早"},
    {id:"d02",t:"各校网申系统注册账号（用专业邮箱，统一英文名）",c:"all",r:1,tip:"用密码管理器记录各校账号密码；部分院校要求上传照片"},
    {id:"d03",t:"填写网申表格 & 上传全部材料（格式按要求）",c:"all",r:1,tip:"文件名用英文；PDF/Word按要求；提交前逐项检查无遗漏"},
    {id:"d04",t:"缴纳申请费（信用卡/银行转账，保存收据截图）",c:"all",r:1,tip:"美国USD 60–125/所；英国多数免费；澳洲AUD 50–150；香港HKD 300–600"},
    {id:"d05",t:"确认推荐信邮件已发出 & 推荐人已提交",c:"all",r:1,tip:"截止前2周礼貌提醒；部分院校支持截止后短期内补交"},
    {id:"d06",t:"提交申请，截图保存确认邮件 & Application ID",c:"all",r:1},
    {id:"d07",t:"英国：确认 IELTS 成绩已直发至院校（机构码）",c:["uk"],tip:"British Council IELTS可免费直发；UK学签需要UKVI专用成绩"},
    {id:"d08",t:"美国：ETS 官方送分（TOEFL/GRE 各院校分开操作）",c:["us"],tip:"TOEFL每所USD20；GRE每所USD27；在ETS官网选目标院校送分",link:"ets"},
    {id:"d09",t:"德国：uni-assist 材料上传 & 缴费",c:["de"],tip:"uni-assist EUR40/所；上传成绩单、学历证明等；流程慢，早动手",link:"uniassist"},
    {id:"d10",t:"澳洲：确认条件录取（Con Offer）的入学条件清单",c:["au"],tip:"Con Offer可先占位；后期提交语言成绩/毕业证满足条件转无条件"},
    {id:"d11",t:"定期登录各校 Portal 查看申请状态（每周一次）",c:"all",r:1,tip:"发现材料缺失立刻补交；状态更新及时记入「我的申请」备注"},
  ]},
  {id:"p5",icon:"📬",title:"录取跟进",when:"提交后 4–16 周",col:"#8b5cf6",items:[
    {id:"e01",t:"定期查看 Portal & 邮件（每2–3天一次）",c:"all"},
    {id:"e02",t:"条件录取（Conditional Offer）：逐条确认并完成剩余条件",c:"all",tip:"常见条件：语言成绩达标/最终成绩单/毕业证；在截止日前完成"},
    {id:"e03",t:"收到无条件录取（UO）：综合对比所有 Offer",c:"all",tip:"对比：学校实力/项目内容/奖学金/总费用/城市/就业资源/校友网络"},
    {id:"e04",t:"缴 Deposit 占位（接受 Offer 后在截止日前缴）",c:"all",r:1,tip:"Deposit通常不可退；确定后再缴；金额£500到HKD5000不等"},
    {id:"e05",t:"申请院校奖学金 & 政府奖学金（注意各自截止日期）",c:"all",tip:"Chevening通常与申请同步；CSC公派提前6–12个月；院系奖收到Offer后申"},
    {id:"e06",t:"韩国 GKS 奖学金申请（与入学申请同步，截止早）",c:["kr"],tip:"GKS全额奖学金，需提前一年开始准备；竞争激烈但含金量高"},
    {id:"e07",t:"日本 MEXT 文部省奖学金申请（约4–5月截止）",c:["jp"],tip:"MEXT全额（学费+生活费），校内/使馆两条渠道；竞争激烈"},
    {id:"e08",t:"礼貌告知未接受 Offer 的院校，释放名额",c:"all",tip:"维护口碑；部分院校可申请Waitlist；被拒可礼貌询问原因"},
    {id:"e09",t:"拒信处理：查看是否可申请 Waitlist 或 Defer",c:"all",tip:"部分院校接受推迟入学（Defer）；有 Waitlist 可继续跟进"},
  ]},
  {id:"p6",icon:"✈️",title:"签证 & 行前",when:"入学前 3–6 个月",col:"#ec4899",items:[
    {id:"f01",t:"查看本工具「签证」页了解所在国详细签证要求",c:"all",r:1},
    {id:"f02",t:"UK 学生签证（Student Route）：CAS号 + 存款证明28天",c:["uk"],r:1,tip:"CAS由学校发出（入学前3–4个月）；需证明学费+28天生活费；IHS医疗附加费"},
    {id:"f03",t:"美国 F-1 签证：I-20 + SEVIS费USD350 + DS-160 + 大使馆面签",c:["us"],r:1,tip:"面签预约可能等2–8周；准备充分的英文答题；携带I-20和录取信"},
    {id:"f04",t:"澳洲 500 学生签证：CoE + OSHC 保险（网申约4–6周）",c:["au"],r:1,tip:"CoE是学校颁发的入学确认信；OSHC是在澳就医保险，澳洲必须"},
    {id:"f05",t:"加拿大学习许可（Study Permit）：录取信 + 存款证明",c:["ca"],r:1,tip:"部分学生须体检；SDS快速通道需指定银行证明；审批4–8周"},
    {id:"f06",t:"德国 D类国家签证：APS + 录取信 + 封锁账户（€11,208/年）",c:["de"],r:1,tip:"须在德国银行开设封锁账户；大使馆面签预约可能等数周"},
    {id:"f07",t:"新加坡学生准证（IPA/SOLAR）：由学校协助申请",c:["sg"],r:1,tip:"通过学校SOLAR系统；IPA批准后入境，30天内完成Student Pass手续"},
    {id:"f08",t:"香港学生签证：学校协助提交，内地生可用回乡证先入境",c:["hk"],tip:"各港校通常协助申请；内地生可先持回乡证入境后补签"},
    {id:"f09",t:"日本留学签证：等学校申请 COE（1–3个月），再去使馆申请",c:["jp"],r:1,tip:"COE由学校代办；拿到COE后去中国大使馆申请签证约2–3周"},
    {id:"f10",t:"订机票（旺季8–9月提前2–3个月预订）",c:"all",r:1,tip:"提前1–2周到达，留出适应时间；旺季机票¥4000–8000，早订早省"},
    {id:"f11",t:"订住宿（学校宿舍申请 / 外租提前2–3个月联系）",c:"all",r:1,tip:"宿舍名额有限，拿Offer后立刻申请；外租通过学长学姐群提前找"},
    {id:"f12",t:"购买留学生医疗保险",c:"all",r:1,tip:"澳洲OSHC必须买；英国IHS附在签证费；其他国家强烈推荐买补充保险"},
    {id:"f13",t:"换汇 & 办境外银行卡（招行全币卡 / Wise）",c:"all",tip:"每年额度USD5万；到当地也可开户；Wise 手续费低适合日常消费"},
    {id:"f14",t:"行李规划（重要证件复印、药品、日用品）",c:"all",tip:"证件放随身行李；多备一套复印件；电子产品确认目的地电压"},
    {id:"f15",t:"入学网上注册 & 选课（部分院校有截止日期）",c:"all",tip:"提前查清选课时间；热门课程可能很快额满；确认入学材料清单"},
  ]}
];

/* ═══ 费用计算器数据 ═══ */
const FEE_CATS=[
  {id:"exam",label:"考试费",icon:"📝"},
  {id:"doc",label:"材料认证费",icon:"📋"},
  {id:"app",label:"网申申请费",icon:"🖥️"},
  {id:"dep",label:"录取押金",icon:"💳"},
  {id:"visa",label:"签证费",icon:"🛂"},
  {id:"travel",label:"行前费用",icon:"✈️"},
];
/* cur=货币; amt=单价; perUnit=true时有数量; unit=默认数量; on=默认勾选 */
const FEE_ITEMS=[
  {id:"fi_ielts",cat:"exam",lbl:"IELTS 雅思考试",note:"约 ¥2,060，各考点略有差异",cur:"CNY",amt:2060,on:true},
  {id:"fi_toefl",cat:"exam",lbl:"TOEFL 托福考试",note:"USD 220 ≈ ¥1,580",cur:"USD",amt:220,on:false},
  {id:"fi_gre",cat:"exam",lbl:"GRE 考试",note:"USD 220 ≈ ¥1,580（美国为主）",cur:"USD",amt:220,on:false},
  {id:"fi_gmat",cat:"exam",lbl:"GMAT 考试",note:"USD 275 ≈ ¥1,980（商科）",cur:"USD",amt:275,on:false},
  {id:"fi_pte",cat:"exam",lbl:"PTE Academic",note:"约 ¥1,300，澳洲认可度高",cur:"CNY",amt:1300,on:false},
  {id:"fi_trans",cat:"doc",lbl:"成绩单翻译 & 公证",note:"约 ¥300/份",cur:"CNY",amt:300,perUnit:true,unit:2,on:false},
  {id:"fi_wes",cat:"doc",lbl:"WES 学历认证（加拿大）",note:"USD 245 + 邮寄 ≈ ¥2,100",cur:"USD",amt:245,on:false},
  {id:"fi_aps",cat:"doc",lbl:"APS 审核（德国必须）",note:"EUR 200 ≈ ¥1,560",cur:"EUR",amt:200,on:false},
  {id:"fi_notary",cat:"doc",lbl:"其他公证 & 认证费",note:"约 ¥200–500",cur:"CNY",amt:300,on:false},
  {id:"fi_app_us",cat:"app",lbl:"美国申请费",note:"USD 60–125/所",cur:"USD",amt:100,perUnit:true,unit:3,on:false},
  {id:"fi_app_uk",cat:"app",lbl:"英国申请费",note:"£0–70/所（多数免费）",cur:"GBP",amt:35,perUnit:true,unit:4,on:false},
  {id:"fi_app_au",cat:"app",lbl:"澳洲申请费",note:"AUD 50–150/所",cur:"AUD",amt:100,perUnit:true,unit:3,on:false},
  {id:"fi_app_ca",cat:"app",lbl:"加拿大申请费",note:"CAD 100–200/所",cur:"CAD",amt:150,perUnit:true,unit:3,on:false},
  {id:"fi_app_sg",cat:"app",lbl:"新加坡申请费",note:"SGD 50–150/所",cur:"SGD",amt:100,perUnit:true,unit:2,on:false},
  {id:"fi_app_hk",cat:"app",lbl:"香港申请费",note:"HKD 300–600/所",cur:"HKD",amt:400,perUnit:true,unit:3,on:false},
  {id:"fi_app_de",cat:"app",lbl:"德国 uni-assist 费",note:"EUR 40/所",cur:"EUR",amt:40,perUnit:true,unit:3,on:false},
  {id:"fi_app_jp",cat:"app",lbl:"日本申请费",note:"约 ¥30,000–35,000/所（JPY）",cur:"JPY",amt:32000,perUnit:true,unit:2,on:false},
  {id:"fi_dep",cat:"dep",lbl:"Offer 录取押金（最终1所）",note:"£500–HKD5,000不等，只缴一次",cur:"GBP",amt:1000,on:false},
  {id:"fi_vis_uk",cat:"visa",lbl:"英国学生签证（Student Route）",note:"GBP 363，另加 IHS 医疗费约 GBP 776/年",cur:"GBP",amt:363,on:false},
  {id:"fi_vis_us",cat:"visa",lbl:"美国 F-1 签证（SEVIS + 面签）",note:"USD 350 + USD 185 ≈ ¥3,850",cur:"USD",amt:535,on:false},
  {id:"fi_vis_au",cat:"visa",lbl:"澳洲学生签证（500 类）",note:"AUD 710 ≈ ¥3,270",cur:"AUD",amt:710,on:false},
  {id:"fi_vis_ca",cat:"visa",lbl:"加拿大学习许可",note:"CAD 150 ≈ ¥800",cur:"CAD",amt:150,on:false},
  {id:"fi_vis_de",cat:"visa",lbl:"德国国家签证（D类）",note:"EUR 75 ≈ ¥585",cur:"EUR",amt:75,on:false},
  {id:"fi_vis_sg",cat:"visa",lbl:"新加坡学生准证",note:"SGD 30 ≈ ¥163",cur:"SGD",amt:30,on:false},
  {id:"fi_vis_hk",cat:"visa",lbl:"香港学生签证",note:"HKD 230 ≈ ¥212",cur:"HKD",amt:230,on:false},
  {id:"fi_vis_jp",cat:"visa",lbl:"日本留学签证（COE）",note:"持 COE 在使馆免费颁发签证",cur:"CNY",amt:0,on:false},
  {id:"fi_flight",cat:"travel",lbl:"国际机票（单程）",note:"约 ¥4,000–8,000，旺季更贵，早订",cur:"CNY",amt:5000,on:true},
  {id:"fi_oshc",cat:"travel",lbl:"澳洲 OSHC 保险（澳洲必须）",note:"AUD 600–700/年",cur:"AUD",amt:650,on:false},
  {id:"fi_ins",cat:"travel",lbl:"其他留学医疗 & 意外险",note:"约 ¥1,500–3,000/年",cur:"CNY",amt:2000,on:true},
  {id:"fi_setup",cat:"travel",lbl:"行前置办生活用品",note:"约 ¥2,000–5,000，因人而异",cur:"CNY",amt:3000,on:false},
  {id:"fi_rent_dep",cat:"travel",lbl:"海外房租押金（1–2个月）",note:"因国家城市差异大，手动填写金额",cur:"CNY",amt:0,on:false},
];
const FEE_RATES={CNY:1,USD:7.2,GBP:9.1,EUR:7.8,AUD:4.6,CAD:5.3,SGD:5.4,HKD:0.92,JPY:0.047};

/* 奖学金 */
const FUND_CATS=[
  {id:"all",n:"全部"},
  {id:"gov",n:"🏛 政府级"},
  {id:"sch",n:"🏫 院校级"},
  {id:"reg",n:"🌐 省州/地区"},
  {id:"niche",n:"💡 冷门特色"},
];
const FUNDS2={
  uk:{
    src:[{n:"Chevening 官网",u:"https://www.chevening.org"},{n:"British Council 奖学金",u:"https://www.britishcouncil.org.cn/study-uk/scholarships"},{n:"Find A Masters",u:"https://www.findamasters.com/funding"},{n:"Scholarship Portal",u:"https://www.scholarshipportal.com"}],
    items:[
      {cat:"gov",n:"志奋领奖学金 Chevening",amt:"🟢 全额（学费+生活费+机票）",eli:"通常需2年工作经验，有领导力潜质",dl:"每年11月初",tip:"竞争极激烈；需2封推荐信；申请周期约1年；重在领导力而非纯学业",u:"https://www.chevening.org"},
      {cat:"gov",n:"Great Scholarships（英国文化协会）",amt:"🟡 £10,000+",eli:"面向中国等特定国家，无工作经验要求",dl:"1–3月各批次",tip:"British Council与30+高校合作，竞争相对低，适合应届生",u:"https://www.britishcouncil.org.cn/study-uk/scholarships"},
      {cat:"gov",n:"CSC 国家公派赴英",amt:"🟢 全额（学费+生活费）",eli:"国内高校推荐，科研背景优先",dl:"每年3–4月（通过所在高校申请）",tip:"名额少但全覆盖；需联系目标学校和高校国际处",u:"https://www.csc.edu.cn"},
      {cat:"sch",n:"牛津 Clarendon Fund",amt:"🟢 全额（学费+生活费）",eli:"各专业顶尖申请者",dl:"随1月申请自动评审",tip:"无需单独申请；每年~150名；学业成绩极为突出是前提",u:"https://www.ox.ac.uk/clarendon"},
      {cat:"sch",n:"剑桥 Gates Cambridge 奖学金",amt:"🟢 全额（非英国籍）",eli:"各领域卓越申请者，重视社会影响力",dl:"10–12月与申请同步提交",tip:"需额外填写Gates材料；全球约90名额；领导力+使命感并重",u:"https://www.gatescambridge.org"},
      {cat:"sch",n:"UCL 全球成就奖学金",amt:"🟡 £3,000–15,000",eli:"被UCL录取的优秀国际生",dl:"随申请自动评审",tip:"无需单独申请，按专业分名额，成绩达标自动考虑"},
      {cat:"sch",n:"爱丁堡 Edinburgh Global Research Scholarships",amt:"🟡 部分或全额减免",eli:"优秀国际研究生",dl:"4月前提交",tip:"多系列可叠加；Edinburgh Global和学院奖学金分开申请",u:"https://www.ed.ac.uk/student-funding"},
      {cat:"sch",n:"帝国理工 ICL Merit Awards",amt:"🟡 £5,000–10,000",eli:"授课型硕士优秀录取者",dl:"随录取评定",tip:"帝国理工授课型硕士有少量merit减免；主动询问招生处是否有院系级奖学金"},
      {cat:"sch",n:"Think Big（布里斯托/谢菲尔德等）",amt:"🟡 £5,000–35,000",eli:"优秀国际生",dl:"3–5月各批次",tip:"多所英国院校联合推出，门槛相对低，性价比高，值得尝试"},
      {cat:"reg",n:"苏格兰 Saltire Scholarships",amt:"🟡 £8,000",eli:"中/加/印/日/巴/美国籍赴苏格兰读研",dl:"通常3月",tip:"专针对苏格兰四所大学；中国学生可申；冷门但额度明确",u:"https://www.scotland.org/study/saltire-scholarships"},
      {cat:"niche",n:"院系专项 Department Bursaries",amt:"🟡 £500–5,000不等",eli:"各系自定条件，常被忽略",tip:"每个院系都可能有自己的专项资助，不在主页展示；直接联系目标院系询问，很多人因此错过"},
      {cat:"niche",n:"Charles Wallace Trust（南亚学生）",amt:"⚪ 小额差旅/项目资助",eli:"印度/孟加拉/巴基斯坦/缅甸籍学生",tip:"非常小众，需主动联系；赴英差旅/短期交流资助为主",u:"https://charleswallacetrust.org"},
    ]
  },
  us:{
    src:[{n:"EducationUSA中国",u:"https://educationusa.state.gov"},{n:"Fastweb奖学金数据库",u:"https://www.fastweb.com"},{n:"Rotary Global Grant",u:"https://www.rotary.org/zh-hans/our-programs/scholarships"},{n:"各校研究生院",u:"https://www.petersons.com"}],
    items:[
      {cat:"gov",n:"富布莱特奖学金 Fulbright",amt:"🟢 全额（学费+生活费+机票）",eli:"各领域优秀申请者，强调文化交流使命",dl:"每年9月底（通过美国驻华使馆）",tip:"名额少、竞争极激烈；面向已完成本科的学生；通过使馆，非直接向大学申请",u:"https://www.fulbright.org.cn"},
      {cat:"gov",n:"CSC 国家公派赴美",amt:"🟢 全额公派",eli:"国内高校推荐，科研背景强",dl:"每年3–4月",tip:"主要针对研究型项目（非授课型）；联系目标学校+国内高校国际处"},
      {cat:"sch",n:"院系 TA/RA（研究型）",amt:"🟢 学费全免+月津贴 $1,500–3,000",eli:"研究型硕士，需导师支持",dl:"随项目申请（12–2月）",tip:"授课型几乎无TA/RA；研究型需在申请时说明研究方向并接触导师"},
      {cat:"sch",n:"Merit Fellowship（各校）",amt:"🟡 $5,000–50,000/年",eli:"学业顶尖，各校自定",dl:"通常与申请同步（12–1月）",tip:"如哥大Presidential Fellowship、CMU School Fellowship；有的需单独申请，有的自动评审"},
      {cat:"sch",n:"STEM专项院系奖学金",amt:"🟡 学费减免部分",eli:"工程/CS/数学专业优秀申请者",tip:"STEM专业院系往往有更多奖学金名额；非STEM商科类授课硕士奖学金资源极少"},
      {cat:"state",n:"州立大学「州内学费」优惠",amt:"🟡 节省$10,000–30,000/年",eli:"被顶尖州立大学录取（UT Austin/SUNY等）",tip:"部分州立大学对顶尖国际生给予州内学费待遇，可大幅降低费用；主动询问招生处"},
      {cat:"niche",n:"专业协会奖学金（ACM/ASEE/APA等）",amt:"🟡 $1,000–10,000",eli:"特定专业学生",dl:"各协会各不同",tip:"计算机协会(ACM)、工程师协会(ASEE)、心理学会等均有研究生奖学金；竞争少，申请率低"},
      {cat:"niche",n:"Rotary Foundation Global Grant",amt:"🟡 约$30,000",eli:"有社区服务背景，专业符合Rotary优先领域",dl:"每年3月",tip:"通过所在城市扶轮社申请；人文/医疗/环境/和平领域最有优势；非常小众竞争少",u:"https://www.rotary.org/zh-hans/our-programs/scholarships"},
      {cat:"niche",n:"企业/基金会定向奖学金",amt:"🟡 $5,000–25,000",eli:"特定专业+行业意向",tip:"Google/Microsoft/Meta等科技公司有面向女性/少数群体的研究生奖学金；工程/CS方向可关注"},
    ]
  },
  au:{
    src:[{n:"Study in Australia",u:"https://www.studyinaustralia.gov.au/english/australian-scholarships"},{n:"Study Melbourne（维州）",u:"https://www.studymelbourne.vic.gov.au"},{n:"Study Queensland",u:"https://www.studyqueensland.qld.gov.au"},{n:"各G8大学奖学金页",u:"https://www.studyinaustralia.gov.au"}],
    items:[
      {cat:"gov",n:"Australia Awards",amt:"🟢 全额（学费+生活费+机票）",eli:"主要面向发展中国家；中国大陆名额极少",dl:"4月底前",tip:"偏向有工作经验、有社会影响力的申请者；中国大陆申请成功率极低，重点看院校奖学金",u:"https://www.dfat.gov.au/people-to-people/australia-awards"},
      {cat:"gov",n:"CSC 国家公派赴澳",amt:"🟢 全额公派",eli:"国内高校推荐，研究型为主",dl:"每年3–4月",tip:"与悉尼/ANU/墨大等有合作；研究型项目机会更多"},
      {cat:"sch",n:"悉尼大学 Vice-Chancellor's International Scholarships",amt:"🟡 学费减免50%",eli:"GPA/均分突出的国际生",dl:"11月–3月多批次（越早越有利）",tip:"每年约250个名额；分多批次开放，早申请有显著优势",u:"https://www.sydney.edu.au/scholarships"},
      {cat:"sch",n:"ANU 副校长国际奖学金",amt:"🟡 学费25–50%减免",eli:"GPA 85+（中国大陆申请）",dl:"10月–3月多批次",tip:"ANU奖学金体系相对完善；分多轮开放，名额有限",u:"https://www.anu.edu.au/study/scholarships"},
      {cat:"sch",n:"昆士兰大学 UQ International Scholarships",amt:"🟡 学费25%减免",eli:"学业优秀",dl:"2月/4月等多批次",tip:"每个专业院系也有额外奖学金；建议直接联系目标学院询问"},
      {cat:"sch",n:"蒙纳士 Monash / 墨大 UniMelb Merit",amt:"🟡 学费减免10–30%",eli:"GPA高，或特定专业",dl:"随申请评审",tip:"各G8大学均有类似奖学金；务必查阅目标学校Scholarships页面"},
      {cat:"reg",n:"维多利亚州 Study Melbourne Scholarships",amt:"🟡 AUD 5,000–10,000",eli:"赴维州高校就读的优秀国际生",dl:"各批次不同",tip:"维州政府通过多个渠道支持国际生；关注Study Melbourne官网每年公告",u:"https://www.studymelbourne.vic.gov.au"},
      {cat:"reg",n:"昆士兰州 Study Queensland 奖学金",amt:"🟡 AUD 5,000–10,000",eli:"赴昆州大学就读",dl:"滚动申请",tip:"昆州积极吸引国际生，可与大学奖学金叠加申请；工程/矿业专业有优势",u:"https://www.studyqueensland.qld.gov.au"},
      {cat:"reg",n:"西澳州 Study Perth 奖学金",amt:"🟡 小额资助",eli:"赴西澳高校就读",tip:"西澳因地理位置较偏，政府额外激励；矿业/工程/农业相关专业更有机会"},
      {cat:"niche",n:"资源/矿业企业奖学金（BHP/Rio Tinto）",amt:"🟡 AUD 5,000–20,000",eli:"地质/工程/环境相关专业",tip:"必和必拓、力拓等矿企每年提供研究生奖学金；工程类学生可关注企业官网"},
      {cat:"niche",n:"Rotary Foundation 赴澳补助",amt:"🟡 约AUD 30,000",eli:"符合Rotary优先领域（医疗/环境/和平）",dl:"每年3月",tip:"通过本国扶轮社申请；小众竞争少；人文医疗环境领域更有机会"},
    ]
  },
  ca:{
    src:[{n:"EduCanada 官方奖学金",u:"https://www.educanada.ca/scholarships-bourses"},{n:"安大略省OGS",u:"https://osap.gov.on.ca"},{n:"魁省FRQNT/FRQSC",u:"https://frq.gouv.qc.ca"},{n:"各大学研究生院",u:"https://www.educanada.ca"}],
    items:[
      {cat:"gov",n:"加拿大 Emerging Leaders 奖学金",amt:"🟢 全额（部分项目）",eli:"有领导力潜质的国际学生，部分项目含中国",dl:"各年不同",tip:"包含多个子项目；需在EduCanada官网查询当年中国是否在适用名单内",u:"https://www.educanada.ca"},
      {cat:"gov",n:"CSC 国家公派赴加",amt:"🟢 全额公派",eli:"国内高校推荐",dl:"每年3–4月",tip:"与麦吉尔/多大/UBC等多所顶校有合作；研究型项目机会更多"},
      {cat:"sch",n:"多伦多大学 SGS 奖学金",amt:"🟡 CAD 5,000–20,000",eli:"被UofT录取的优秀国际生",dl:"随申请自动评审（12–1月提交申请）",tip:"各院系也有单独奖学金；工程/商科/艺术各有不同"},
      {cat:"sch",n:"UBC 国际领袖奖学金",amt:"🟡 CAD 10,000–40,000",eli:"学业+领导力突出",dl:"1–3月",tip:"UBC有专门国际生奖学金体系；部分需主动申请，部分自动评审",u:"https://www.grad.ubc.ca/scholarships-awards-funding"},
      {cat:"sch",n:"麦吉尔 McGill 院系研究奖助金",amt:"🟡 CAD 8,000–25,000",eli:"研究型项目学生",dl:"随申请提交",tip:"法语背景可获额外加分；魁省补贴让研究型奖助金相对慷慨"},
      {cat:"sch",n:"滑铁卢 co-op 工作收入（替代奖学金）",amt:"🟢 CAD 5,000–8,000/轮（工作期间）",eli:"CS/工程/数学方向，co-op项目",tip:"co-op让学生边学边赚，4个月工作期间收入可覆盖大量学费；比单纯奖学金更实际"},
      {cat:"reg",n:"安大略省研究生奖学金 OGS",amt:"🟡 CAD 15,000/年",eli:"安省高校研究生（含国际生）",dl:"通过高校申请，约2–3月",tip:"国际生也可申请OGS，知者甚少；通过就读高校申请，名额有限但竞争少于想象",u:"https://osap.gov.on.ca"},
      {cat:"reg",n:"魁北克省 FRQNT/FRQSC 研究基金",amt:"🟡 CAD 20,000–35,000/年",eli:"研究型项目，导师需有省内课题",dl:"10–11月",tip:"魁省大量资助入读魁省高校的研究生；法语能力有优势；通过导师申请"},
      {cat:"reg",n:"不列颠哥伦比亚省研究生奖学金",amt:"🟡 CAD 15,000",eli:"赴BC省高校的优秀研究生",dl:"各年不同",tip:"BC省政府支持研究型学生；关注UBC、维多利亚大学等官网公告"},
      {cat:"niche",n:"资源/矿业企业奖学金（Suncor/Barrick等）",amt:"🟡 CAD 5,000–20,000",eli:"地质/工程/环境相关专业",tip:"加拿大大型资源企业有面向研究生的专项奖学金；工程类学生可主动查询企业官网"},
      {cat:"niche",n:"加中职业协会社区奖学金",amt:"⚪ 小额",eli:"在加就读的中国学生",tip:"各省华人专业协会（工程师/会计师等）有面向中国留学生的小额奖助；信息在华人社区论坛，需主动打听"},
    ]
  },
  sg:{
    src:[{n:"SINGA奖学金",u:"https://www.singa.a-star.edu.sg"},{n:"NUS奖学金",u:"https://nusgs.nus.edu.sg/scholarships"},{n:"NTU奖学金",u:"https://www.ntu.edu.sg/graduate-college"},{n:"A*STAR奖学金",u:"https://www.a-star.edu.sg/Scholarships"}],
    items:[
      {cat:"gov",n:"SINGA 研究生奖学金",amt:"🟢 全额（学费+月SGD 2,000–2,500）",eli:"理工科研究型硕士/博士，需有科研背景",dl:"各轮开放",tip:"联合A*STAR/NUS/NTU/SUTD；强研究导向；竞争激烈但是新加坡最重要的国际研究生奖学金",u:"https://www.singa.a-star.edu.sg"},
      {cat:"gov",n:"A*STAR 研究生奖学金 AGS",amt:"🟢 全额（理工科研究型）",eli:"理工科研究型，需关联A*STAR实验室",dl:"滚动申请",tip:"需要有A*STAR合作导师；适合有强科研意愿的理工科学生",u:"https://www.a-star.edu.sg/Scholarships/for-graduate-studies"},
      {cat:"sch",n:"NUS Research Scholarship",amt:"🟢 学费全免+月津贴SGD 2,000–2,500",eli:"研究型硕士/博士",dl:"随申请评审",tip:"NUS研究型项目几乎标配奖学金；授课型硕士几乎没有"},
      {cat:"sch",n:"NTU Research Scholarship",amt:"🟢 学费全免+月津贴SGD 2,000+",eli:"研究型项目",dl:"随申请",tip:"与NUS类似；授课型自费为主，顶尖学生可获少量merit减免"},
      {cat:"sch",n:"SMU Merit Scholarship（授课型）",amt:"🟡 部分学费减免",eli:"GMAT/GPA优秀的商科申请者",dl:"随申请",tip:"SMU商学院对顶尖申请者有少量merit减免，数量有限"},
      {cat:"niche",n:"MAS/金融行业定向奖学金",amt:"🟡 SGD 5,000–20,000+实习",eli:"金融/科技相关专业，有在新就业意向",tip:"星展银行、华侨银行、MAS相关机构有定向奖学金，毕业后需在新工作一定年限"},
      {cat:"niche",n:"新加坡华族文化基金会奖学金",amt:"⚪ 小额",eli:"与华族文化/艺术研究相关专业",tip:"非常小众；适合文化/人文/中华研究方向学生；需主动联系基金会"},
    ]
  },
  hk:{
    src:[{n:"香港研资局 HKPFS",u:"https://www.ugc.edu.hk/eng/rgc/funding_opport/hkpfs"},{n:"StudyInHongKong",u:"https://www.studyinhongkong.edu.hk/en/scholarships"},{n:"HKU奖学金",u:"https://www.hku.hk/admissions/postgraduate"},{n:"HKUST奖学金",u:"https://pg.ust.hk"}],
    items:[
      {cat:"gov",n:"香港博士生奖学金 HKPFS（博士为主）",amt:"🟢 全额+月HKD 27,600",eli:"主要面向博士；研究型MPhil可作升博跳板",dl:"每年12月初",tip:"全球顶级博士奖学金之一；授课型硕士不适用；MPhil学生可考虑先申入学，再争取HKPFS升博",u:"https://www.ugc.edu.hk/eng/rgc/funding_opport/hkpfs"},
      {cat:"gov",n:"内地生赴港专项奖励",amt:"🟡 部分减免",eli:"优秀内地生赴港读研",dl:"通过高校申请",tip:"各港校通过不同机制吸引内地优秀生；需直接问具体院校招生处，信息不统一"},
      {cat:"sch",n:"HKU 硕士入学奖学金",amt:"🟡 HKD 50,000–150,000",eli:"内地均分90+等顶尖学生",dl:"随申请评审",tip:"HKU对顶尖内地生有专项；各院系另有额外奖学金",u:"https://www.hku.hk/admissions/postgraduate"},
      {cat:"sch",n:"HKUST 研究生奖学金",amt:"🟡 HKD 30,000–100,000",eli:"理工科优秀申请者",dl:"随申请",tip:"理工科研究型项目奖学金更丰厚；授课型竞争激烈，少量merit减免"},
      {cat:"sch",n:"CUHK 研究生奖学金",amt:"🟡 部分减免",eli:"各专业优秀申请者",dl:"随申请评审",tip:"CUHK商学院有单独merit scholarship；金融/会计方向可关注"},
      {cat:"sch",n:"CityU 卓越学生奖学金",amt:"🟡 HKD 20,000–50,000",eli:"优秀国际/内地生",dl:"3月前提交",tip:"CityU对内地生有专项奖学金池；设计/传媒/工程方向均有"},
      {cat:"niche",n:"院系科研津贴（RA机会）",amt:"🟡 HKD 5,000–30,000",eli:"参与院系科研项目",tip:"香港各大学院系经常向研究生开放小型RA机会；需主动联系导师，多数信息不公开"},
    ]
  },
  de:{
    src:[{n:"DAAD官网中文版",u:"https://www.daad.de/zh/finding-the-right-scholarship"},{n:"Deutschlandstipendium",u:"https://www.deutschlandstipendium.de"},{n:"Stipendienlotse搜索器",u:"https://www.stipendienlotse.de"},{n:"洪堡基金会",u:"https://www.humboldt-foundation.de"}],
    items:[
      {cat:"gov",n:"DAAD 奖学金（多子项目）",amt:"🟢 全额（生活费+学费+保险+机票）",eli:"学业优秀，有社会参与，德语或英语达标",dl:"各子项目截止不同（10–11月为主）",tip:"DAAD有数十个细分项目；中国学生应在官网选「赴德研究生研究奖学金」；必须在DAAD官网查询最适合自己的子项目",u:"https://www.daad.de/zh/finding-the-right-scholarship"},
      {cat:"gov",n:"Deutschlandstipendium 德国国家奖学金",amt:"🟡 €300/月（校企联邦各出€150）",eli:"学业成绩优秀+社会参与",dl:"通过各高校申请，时间不一",tip:"由企业与联邦政府共同资助；每所大学名额不同；需德语沟通；鲜为中国学生知晓，竞争相对少",u:"https://www.deutschlandstipendium.de"},
      {cat:"gov",n:"六大政治基金会奖学金",amt:"🟢 全额（学费+生活费）",eli:"学业优秀，有明确政治/社会价值观",dl:"各基金会时间不同",tip:"艾德诺/艾伯特/罗莎卢森堡/海因里希伯尔/弗里德里希瑙曼/汉斯赛德尔；每个有不同政治倾向，申请时需表达契合的价值观"},
      {cat:"sch",n:"慕尼黑工大 TUM 国际生奖学金",amt:"🟡 €600–1,200/月",eli:"优秀国际生（德语或英语达标）",dl:"3–6月各项目不同",tip:"TUM有Germany Excellence Initiative支持的奖学金；学费本身几乎免费，奖学金主要覆盖生活费"},
      {cat:"sch",n:"柏林工大 TU Berlin 国际资助",amt:"🟡 €300–800/月",eli:"相关项目申请者",dl:"各项目不同",tip:"柏林工大与DAAD合作，有针对国际生的专项资助项目"},
      {cat:"reg",n:"巴伐利亚州奖助学金",amt:"🟡 部分生活补助",eli:"赴慕尼黑/纽伦堡等巴伐利亚高校就读",dl:"10月前提交",tip:"信息主要为德语；赴慕大/TUM/FAU等校就读可关注；需在Stipendienlotse搜索",u:"https://www.stipendienlotse.de"},
      {cat:"reg",n:"NRW 北威州州级奖助",amt:"⚪ 小额月资助",eli:"赴科隆/波恩/杜塞等北威州高校",tip:"北威州多所高校结合州政府有专项国际生资助"},
      {cat:"niche",n:"博世/西门子/SAP 企业定向奖学金",amt:"🟡 €500–1,500/月+实习机会",eli:"工程/CS/商科相关专业，有就业意向",tip:"博世基金会、西门子基金会、SAP都有研究生定向奖学金；与就业捆绑，毕业后可直接入职",u:"https://www.bosch-stiftung.de"},
      {cat:"niche",n:"洪堡研究奖学金（博后/博士）",amt:"🟢 全额+研究补助",eli:"已获博士学位或即将完成博士",dl:"全年可申",tip:"硕士阶段不适用；适合有意赴德做学术的博士生/博后；未来可争取",u:"https://www.humboldt-foundation.de"},
    ]
  },
  jp:{
    src:[{n:"MEXT文科省奖学金",u:"https://www.cn.emb-japan.go.jp/itpr_zh/scholarship.html"},{n:"JASSO留学支援",u:"https://www.jasso.or.jp/en/study_j/scholarships"},{n:"JEES民间奖学金",u:"https://www.jees.or.jp"},{n:"日本学术振兴会",u:"https://www.jsps.go.jp"}],
    items:[
      {cat:"gov",n:"MEXT 文部省奖学金（研究生）",amt:"🟢 全额（学费+月约¥145,000+机票）",eli:"学业优秀，提前联系导师获内诺",dl:"每年5月（使馆推荐）/ 9月（大学推荐）",tip:"两条路径：①使馆推荐（国内报名约5月）；②大学直接推荐（需先获导师内诺，更难）；研究型项目为主",u:"https://www.cn.emb-japan.go.jp/itpr_zh/scholarship.html"},
      {cat:"gov",n:"JASSO 给付奖学金",amt:"🟡 ¥48,000/月",eli:"经济困难+学业优秀，入学后申请",dl:"入学后申请",tip:"相对宽松，但需在日本入学后申请；适合经济条件有限的学生",u:"https://www.jasso.or.jp/en/study_j/scholarships"},
      {cat:"reg",n:"都道府县地方政府奖学金",amt:"🟡 ¥30,000–80,000/月",eli:"赴特定都道府县高校就读",dl:"各县不同（3–5月多见）",tip:"东京都、大阪府、神奈川县、爱知县等均有独立奖学金；信息分散需各自查询都道府县教育委员会官网"},
      {cat:"sch",n:"东京大学 Todai Fellows / 院系奖学金",amt:"🟡 ¥50,000–100,000/月",eli:"各校自定，学业为主",dl:"入学前/后均有",tip:"早稻田「Waseda Global Fellowship」、庆应各有专项；很多不在官网显眼位置，需主动查询",u:"https://www.u-tokyo.ac.jp/en/admissions/graduate/scholarships.html"},
      {cat:"sch",n:"早稻田大学多层次奖学金",amt:"🟡 入学奖学金/研究助学金等",eli:"优秀国际生",dl:"与申请同步或入学后",tip:"早稻田有多个国际生奖学金项目；理工研究生院研究助学金对理工科学生友好",u:"https://www.waseda.jp/inst/scholarship/en"},
      {cat:"niche",n:"JEES管理民间财团奖学金（数十种）",amt:"🟡 ¥50,000–180,000/月",eli:"各财团自定，学业+特定领域",dl:"入学后在日本申请",tip:"JEES管理数十个私人财团奖学金（东洋英和、若草等）；需在日就读后申请；信息在JEES官网，很多人不知道",u:"https://www.jees.or.jp"},
      {cat:"niche",n:"富士通/索尼/NTT 企业定向奖学金",amt:"🟡 ¥50,000–100,000/月+实习",eli:"理工科，有在日就业意向",tip:"日本大型科技企业有面向外国研究生的定向奖学金；需主动联系企业或通过导师介绍"},
    ]
  },
  kr:{
    src:[{n:"GKS韩国政府奖学金",u:"https://www.studyinkorea.go.kr/en/sub/gks/allnew_invite.do"},{n:"NIIED国立国际教育院",u:"https://www.niied.go.kr"},{n:"KAIST奖学金",u:"https://www.kaist.ac.kr"},{n:"서울장학재단 首尔奖学金",u:"https://www.ssuf.or.kr"}],
    items:[
      {cat:"gov",n:"GKS 韩国政府奖学金（研究生）",amt:"🟢 全额（学费+月KRW 900,000+机票+韩语课）",eli:"学业优秀，年龄≤40岁，无韩语要求（加分）",dl:"每年3月（大使馆）/ 9月（大学推荐）",tip:"两条路径：①大使馆推荐（竞争激烈）；②大学推荐（需先联系学校）；有1年韩语预科",u:"https://www.studyinkorea.go.kr"},
      {cat:"sch",n:"首尔大学 SNU 研究生奖学金",amt:"🟡 学费减免50–100%+生活费（研究型）",eli:"研究型优秀申请者",dl:"随申请（11–12月）",tip:"理工科研究型奖学金资源更充足；授课型竞争激烈，减免有限",u:"https://en.snu.ac.kr"},
      {cat:"sch",n:"延世大学 Yonsei 国际生奖学金",amt:"🟡 学费30–70%减免",eli:"GPA优秀，各专业",dl:"随申请评审",tip:"TOPIK达标有加分；GSIS商学院奖学金相对丰厚",u:"https://www.yonsei.ac.kr/en_sc"},
      {cat:"sch",n:"KAIST 研究奖学金",amt:"🟢 学费全免+月KRW 800,000+",eli:"理工科研究型（KAIST几乎全奖）",dl:"12月–2月",tip:"KAIST主要英语授课，研究型几乎标配全奖+生活费；理工科顶尖选择",u:"https://www.kaist.ac.kr"},
      {cat:"sch",n:"高丽/延世/成均馆等 SKY 奖学金",amt:"🟡 学费30–70%减免",eli:"学业优秀，TOPIK加分",dl:"随申请",tip:"SKY三所大学均有专项；高丽大学理工科和商科国际生有专项"},
      {cat:"reg",n:"首尔市 Seoul Scholarship",amt:"🟡 KRW 3,000,000–5,000,000/年",eli:"赴首尔高校就读的外国留学生",dl:"入学后通过高校申请",tip:"首尔市政府对外国留学生有专项资助；需在首尔居住并就读"},
      {cat:"reg",n:"釜山/大田/光州等地方政府奖学金",amt:"⚪ 小额",eli:"赴非首都地区高校就读",tip:"地方政府为吸引国际生到非首都地区提供额外激励；釜山大学/KAIST（大田）等可关注"},
      {cat:"niche",n:"KIAT/三星/LG 产业技术企业奖学金",amt:"🟡 KRW 500,000–1,000,000/月+实习",eli:"工程/制造/IT专业，有在韩就业意向",tip:"三星/LG/现代等大企业有类似定向奖学金；需通过高校招生处或直接联系企业"},
    ]
  },
  ch:{
    src:[{n:"ESKAS瑞士政府奖学金",u:"https://www.sbfi.admin.ch/sbfi/en/home/education/scholarships-and-grants/swiss-government-excellence-scholarships.html"},{n:"ETH Zurich奖学金",u:"https://ethz.ch/students/en/studies/financial/scholarships/excellence-scholarship.html"},{n:"EPFL Excellence Fellowship",u:"https://www.epfl.ch/education/master/master-excellence-fellowships"},{n:"SNSF瑞士国家科学基金",u:"https://www.snf.ch"}],
    items:[
      {cat:"gov",n:"瑞士政府优秀奖学金 ESKAS",amt:"🟢 全额（月CHF 1,500–1,920+学费）",eli:"各专业优秀申请者，通过中国教育部推荐",dl:"中国截止通常11月",tip:"瑞士联邦政府资助；中国名额约5–10人/年；通过中国教育部国际合作司推荐，非常小众",u:"https://www.sbfi.admin.ch"},
      {cat:"gov",n:"CSC 国家公派赴瑞",amt:"🟢 全额公派",eli:"国内高校推荐，科研背景为主",dl:"每年3–4月",tip:"与ETH/EPFL/苏黎世大学有合作；研究型项目机会更多"},
      {cat:"sch",n:"ETH Zurich Excellence Scholarship & Opportunity",amt:"🟢 全额（学费+月CHF 1,000）",eli:"学业前5–10%的硕士申请者",dl:"12月中旬（单独提交奖学金申请）",tip:"竞争极激烈，全球每年约100–120人；数理背景极强是前提",u:"https://ethz.ch/students/en/studies/financial/scholarships/excellence-scholarship.html"},
      {cat:"sch",n:"EPFL Excellence Fellowships",amt:"🟡 学费减免+月补贴",eli:"优秀硕士申请者",dl:"与申请同步（12月）",tip:"EPFL有多档奖学金，最高可全免；在申请时选择是否同步申请奖学金",u:"https://www.epfl.ch/education/master/master-excellence-fellowships"},
      {cat:"sch",n:"苏黎世大学 UZH 国际生奖学金",amt:"🟡 CHF 6,000–15,000（一次性）",eli:"各专业优秀国际生",dl:"随申请评审",tip:"金额有限，但瑞士公立学费极低（约CHF 730/学期），本身成本优势更大"},
      {cat:"niche",n:"SNSF 课题资助（研究型，通过导师）",amt:"🟢 全额（绑定导师科研课题）",eli:"研究型，需绑定导师科研项目",tip:"SNSF资助导师课题，导师可雇佣研究生；理工科最重要财源，需提前联系导师"},
      {cat:"niche",n:"罗氏/诺华/瑞银等企业定向奖学金",amt:"🟡 CHF 2,000–5,000/月+实习",eli:"化学/生命科学/金融专业，有就业意向",tip:"罗氏、诺华、瑞银有面向ETH/EPFL/苏黎世大学优秀学生的定向奖学金；需主动联系公司HR"},
    ]
  },
  nl:{
    src:[{n:"Holland Scholarship官网",u:"https://www.hollandscholarship.nl"},{n:"Orange Tulip中国学生专项",u:"https://www.orangetulipscholarship.nl"},{n:"Erasmus Mundus",u:"https://eacea.ec.europa.eu/scholarships/erasmus-mundus_en"},{n:"Nuffic官方留学",u:"https://www.studyinholland.nl/scholarships"}],
    items:[
      {cat:"gov",n:"Holland Scholarship",amt:"🟡 €5,000（一次性）",eli:"欧盟外国际生，学业优秀",dl:"通常2月（通过目标院校）",tip:"竞争相对较低；需通过目标院校申请，不同学校截止不同",u:"https://www.hollandscholarship.nl"},
      {cat:"gov",n:"Orange Tulip Scholarship（橙色郁金香）",amt:"🟡 €3,000–学费全免（多档）",eli:"中国/印度/印尼等特定国家优秀学生",dl:"12月–2月（各校不同）",tip:"专门面向中国学生的荷兰奖学金，多所高校参与；中国学生申请率不高，竞争相对少",u:"https://www.orangetulipscholarship.nl"},
      {cat:"sch",n:"代尔夫特理工 TU Delft Excellence Scholarship",amt:"🟡 €12,500–25,000",eli:"优秀非欧盟国际生",dl:"2月",tip:"TU Delft在工程/设计/建筑方向世界顶级；工程背景强烈推荐尝试",u:"https://www.tudelft.nl/en/education/financial-matters/scholarships-and-loans"},
      {cat:"sch",n:"鹿特丹商学院 RSM Erasmus 奖学金",amt:"🟡 €6,000–30,000",eli:"GMAT高分国际生",dl:"1–4月各批次",tip:"RSM是欧洲顶尖商学院，奖学金与GMAT/GRE分数强相关；高分申请者值得争取"},
      {cat:"sch",n:"阿姆斯特丹大学 UvA 奖学金",amt:"🟡 €5,000–25,000",eli:"各专业优秀国际生",dl:"各专业截止不同",tip:"UvA有多个院系奖学金；社会科学/人文/法律方向均有"},
      {cat:"niche",n:"Erasmus Mundus 联合硕士",amt:"🟢 全额（学费+月€1,000–1,400）",eli:"各专业优秀申请者，跨国联合项目",dl:"11月–1月",tip:"EU资助的跨国联合硕士（2–3所欧洲大学联合授课），荷兰高校参与多个项目；竞争激烈但全额资助，非常值得一试",u:"https://eacea.ec.europa.eu/scholarships/erasmus-mundus_en"},
      {cat:"niche",n:"ASML/飞利浦/恩智浦 企业定向奖学金",amt:"🟡 €5,000–15,000+实习",eli:"工程/材料/半导体相关专业",tip:"荷兰科技龙头有面向研究生的定向奖学金；需主动联系企业HR或通过导师推荐"},
    ]
  },
  fr:{
    src:[{n:"Eiffel奖学金官网",u:"https://www.campusfrance.org/en/eiffel-scholarship-program-of-excellence"},{n:"Campus France奖学金",u:"https://www.campusfrance.org/zh-hans/page/all-scholarships"},{n:"法驻华使馆留学",u:"https://cn.ambafrance.org/来法留学-奖学金"},{n:"CSC-法国合作项目",u:"https://www.csc.edu.cn"}],
    items:[
      {cat:"gov",n:"埃菲尔优秀奖学金 Eiffel",amt:"🟢 全额（月€1,181–1,400+机票+医保）",eli:"35岁以下，顶尖学生，B2+法语或英语",dl:"每年1月中旬（需法国高校提名）",tip:"竞争极激烈（全球约10,000申请500名额）；不能自行申请，需由法国高校提名；法语B2+有利",u:"https://www.campusfrance.org/en/eiffel-scholarship-program-of-excellence"},
      {cat:"gov",n:"CSC 国家公派赴法",amt:"🟢 全额公派",eli:"国内高校推荐",dl:"每年3–4月",tip:"与巴黎萨克雷/综合理工/HEC等有CSC合作；需通过高校申请"},
      {cat:"gov",n:"法国驻华使馆专项资助",amt:"🟡 部分生活资助",eli:"优秀中国留法学生",dl:"各项目不同（3–5月）",tip:"使馆提供多种形式资助，额度不大；配合法国高校奖学金叠加效果更好"},
      {cat:"sch",n:"巴黎综合理工 X 企业联合全奖",amt:"🟢 全额（部分项目）",eli:"工程/数学/物理顶尖学生",dl:"各项目不同",tip:"X的国际生Masters项目竞争极激烈，有企业赞助的全额奖学金名额"},
      {cat:"sch",n:"HEC Paris 奖学金",amt:"🟡 €5,000–30,000",eli:"GMAT高分商科申请者",dl:"与申请轮次同步",tip:"HEC作为欧洲顶级商学院，对顶尖申请者有大额奖学金；GMAT 720+竞争力更强"},
      {cat:"reg",n:"大区政府奖学金（法兰西岛/PACA等）",amt:"🟡 €3,000–8,000",eli:"赴相应大区高校就读的国际生",dl:"各大区不同",tip:"法国大区政府提供专项国际生奖学金；大巴黎区、普罗旺斯区均有；需通过高校申请"},
      {cat:"reg",n:"Ampère 卓越奖学金（里昂地区）",amt:"🟡 €10,000",eli:"赴里昂大学/里昂工学院等里昂地区就读",dl:"2月",tip:"里昂大区专项奖学金，知名度低；竞争明显少于Eiffel"},
      {cat:"niche",n:"Erasmus Mundus（多法国院校参与）",amt:"🟢 全额（学费+月€1,000–1,400）",eli:"各专业优秀申请者",dl:"11月–1月",tip:"多个Erasmus Mundus项目有法国高校参与；全额资助且学历含金量高，强烈推荐"},
      {cat:"niche",n:"法国商学院企业赞助定向奖学金",amt:"🟡 €3,000–15,000",eli:"商科/管理，特定行业意向",tip:"ESSEC/ESCP/EM Lyon等与企业合作的定向奖学金；需在申请时说明行业意向，信息散落在各校网站"},
    ]
  },
  se:{
    src:[{n:"瑞典学院 SI 奖学金",u:"https://si.se/en/apply/scholarships/swedish-institute-scholarships-for-global-professionals"},{n:"StudyInSweden 官方",u:"https://studyinsweden.se/scholarships"},{n:"KI奖学金",u:"https://ki.se/en/education/fees-and-scholarships"},{n:"隆德大学奖学金",u:"https://www.lunduniversity.lu.se/scholarships"}],
    items:[
      {cat:"gov",n:"瑞典学院奖学金 SI（SISGP）",amt:"🟢 全额（学费+月SEK 11,000+机票+保险）",eli:"有工作/领导力经验，35岁以下，目标明确",dl:"每年2月初",tip:"竞争极激烈（全球约350名额）；重考社会贡献和领导力；中国学生申请竞争大，文书要突出",u:"https://si.se/en/apply/scholarships"},
      {cat:"sch",n:"卡罗林斯卡 KI 全球奖学金",amt:"🟡 学费全免",eli:"医学/公卫/生命科学顶尖申请者",dl:"2月初",tip:"KI全球医学院排名极高；学费免除奖学金竞争激烈，科研背景是关键",u:"https://ki.se/en/education/fees-and-scholarships"},
      {cat:"sch",n:"隆德大学 Lund Global Scholarships",amt:"🟡 学费减免50–100%",eli:"优秀非欧盟国际生",dl:"2月初",tip:"隆德是瑞典最国际化大学；约100个名额；各专业均有覆盖",u:"https://www.lunduniversity.lu.se/scholarships"},
      {cat:"sch",n:"乌普萨拉 Uppsala Global Scholarships",amt:"🟡 学费减免50–100%",eli:"优秀非欧盟国际生",dl:"2月初",tip:"瑞典最古老大学；与隆德同步申请效率高"},
      {cat:"niche",n:"爱立信研究奖学金",amt:"🟡 SEK 50,000–150,000+实习",eli:"CS/电信/网络工程相关专业",tip:"爱立信与KTH/查尔姆斯/隆德合作，有面向研究生的定向奖学金；信息在大学工程学院网站",u:"https://www.ericsson.com/en/careers"},
      {cat:"niche",n:"Rotary Foundation 赴瑞补助",amt:"🟡 约SEK 250,000",eli:"符合Rotary优先领域",dl:"每年3月",tip:"通过本国扶轮社申请；小众竞争少；中国各城市扶轮社均可推荐"},
    ]
  },
  be:{
    src:[{n:"VLIR-UOS奖学金",u:"https://www.vliruos.be/en/scholarships"},{n:"鲁汶大学奖学金",u:"https://www.kuleuven.be/scholarships"},{n:"Erasmus Mundus",u:"https://eacea.ec.europa.eu/scholarships/erasmus-mundus_en"},{n:"欧盟机构实习(蓝皮书)",u:"https://epso.europa.eu/en/jobs/traineeships"}],
    items:[
      {cat:"gov",n:"VLIR-UOS 发展合作奖学金",amt:"🟢 全额（学费+生活费+机票）",eli:"来自特定发展中国家（部分子项目含中国）",dl:"各项目不同（11月–2月）",tip:"专为发展中国家学生设计；需核查当年中国是否在适用名单内",u:"https://www.vliruos.be/en/scholarships"},
      {cat:"gov",n:"ARES 比利时法语区政府奖学金",amt:"🟢 全额（法语区）",eli:"特定发展中国家，法语B2",dl:"2月",tip:"比利时法语区政府资助；中国学生可尝试，需法语B2"},
      {cat:"sch",n:"鲁汶大学 KU Leuven 奖学金",amt:"🟡 €3,000–25,000/年",eli:"各专业优秀申请者",dl:"12月–3月",tip:"鲁汶有多个院系奖学金；工程/生命科学/商科都有；研究型更多机会",u:"https://www.kuleuven.be/scholarships"},
      {cat:"sch",n:"根特大学 UGent 国际生奖学金",amt:"🟡 €3,000–8,000",eli:"优秀国际生",dl:"3月",tip:"根特有部分专业专项奖学金；生命科学/工程方向相对好申请"},
      {cat:"niche",n:"Erasmus Mundus 联合硕士（含比利时高校）",amt:"🟢 全额（学费+月€1,000–1,400）",eli:"各专业优秀申请者",dl:"11月–1月",tip:"多个项目有鲁汶/根特/VUB参与；全额资助且学历含金量高"},
      {cat:"niche",n:"欧盟机构蓝皮书实习（布鲁塞尔独特机会）",amt:"🟡 实习补贴€1,300–1,500/月",eli:"在比就读，政治/法律/经济/传媒专业",tip:"欧委会/欧洲议会/NATO均有带薪实习；虽非奖学金，但收入可抵学费，布鲁塞尔独有优势",u:"https://epso.europa.eu/en/jobs/traineeships"},
    ]
  },
  dk:{
    src:[{n:"StudyInDenmark奖学金",u:"https://www.studyindenmark.dk/study-in-denmark/scholarships"},{n:"DTU奖学金",u:"https://www.dtu.dk/english/Education/msc/Scholarship"},{n:"诺和诺德基金会",u:"https://www.novonordiskfonden.dk"},{n:"Erasmus Mundus",u:"https://eacea.ec.europa.eu/scholarships/erasmus-mundus_en"}],
    items:[
      {cat:"gov",n:"CSC 国家公派赴丹",amt:"🟢 全额公派",eli:"国内高校推荐",dl:"每年3–4月",tip:"与哥本哈根大学/DTU有CSC合作协议；研究型机会更多"},
      {cat:"sch",n:"哥本哈根大学 UCPH 国际生奖学金",amt:"🟡 学费减免",eli:"优秀非欧盟国际生",dl:"3月底",tip:"各院系奖学金名额有限；医学/生命科学/社科方向相对较多",u:"https://www.ku.dk/english/research/phd/scholarships"},
      {cat:"sch",n:"技术大学 DTU 研究奖助金",amt:"🟡 部分减免或助研金",eli:"理工科研究型申请者",dl:"随申请评审",tip:"DTU工程/可持续能源/生命科技世界顶级；研究型项目可通过导师获资助",u:"https://www.dtu.dk/english/Education/msc/Scholarship"},
      {cat:"sch",n:"丹麦商学院 CBS 奖学金",amt:"🟡 部分学费减免",eli:"商科优秀非欧盟国际生",dl:"4月",tip:"CBS是北欧最大商学院；有少量针对非EU国际生的merit scholarship"},
      {cat:"niche",n:"诺和诺德基金 生命科学研究奖学金",amt:"🟡 DKK 30,000–100,000",eli:"生命科学/医药研究生",tip:"丹麦最大企业之一；有专项研究生支持项目；生命科学方向强烈关注",u:"https://www.novonordiskfonden.dk"},
      {cat:"niche",n:"Erasmus Mundus（含丹麦高校）",amt:"🟢 全额（学费+月€1,000+）",eli:"参与有DTU/哥大的联合项目",dl:"11月–1月",tip:"多个Erasmus Mundus项目有DTU/哥本哈根大学参与；全额资助，值得重点关注"},
    ]
  },
  nz:{
    src:[{n:"Education New Zealand奖学金",u:"https://www.studywithnewzealand.govt.nz/en/study/scholarships"},{n:"奥克兰大学奖学金",u:"https://www.auckland.ac.nz/en/study/scholarships-and-awards.html"},{n:"维多利亚大学奖学金",u:"https://www.wgtn.ac.nz/scholarships"},{n:"各大学研究生院",u:"https://www.universitiesnz.ac.nz"}],
    items:[
      {cat:"gov",n:"新西兰政府奖学金（New Zealand Scholarships）",amt:"🟢 全额（主要面向发展中国家）",eli:"中国大陆申请者名额极少",dl:"每年4月",tip:"主要面向太平洋岛国和部分亚非国家；中国申请者成功率极低，重点看院校奖学金"},
      {cat:"gov",n:"CSC 国家公派赴新",amt:"🟢 全额公派",eli:"国内高校推荐",dl:"每年3–4月",tip:"与奥克兰大学/坎特伯雷大学有合作；研究型项目机会更多"},
      {cat:"sch",n:"奥克兰大学 UoA 国际生奖学金",amt:"🟡 NZD 5,000–10,000",eli:"优秀国际生",dl:"入学前3个月申请",tip:"有多个面向国际生的奖学金；部分院系有额外专项",u:"https://www.auckland.ac.nz/en/study/scholarships-and-awards.html"},
      {cat:"sch",n:"维多利亚大学 VUW 奖学金",amt:"🟡 NZD 5,000–15,000",eli:"优秀国际生",dl:"各入学时间前申请",tip:"惠灵顿VUW，法律/公共政策/创意艺术方向强；首都机会更多"},
      {cat:"niche",n:"农业/食品企业奖学金（恒天然/Silver Fern）",amt:"🟡 NZD 5,000–20,000",eli:"农业/食品科学/环境专业",tip:"新西兰农食品企业有研究生奖学金；农业院系主动联系企业"},
      {cat:"niche",n:"Rotary Foundation 赴新补助",amt:"🟡 约NZD 30,000",eli:"符合Rotary优先领域",dl:"每年3月",tip:"通过本国扶轮社申请；新西兰各城市均有扶轮社；小众竞争少"},
    ]
  },
  my:{
    src:[{n:"马来西亚教育部奖学金",u:"https://biasiswa.mohe.gov.my"},{n:"马来亚大学奖学金",u:"https://um.edu.my"},{n:"Monash马来西亚分校",u:"https://www.monash.edu.my/study/scholarships"},{n:"马来西亚中华总商会",u:"https://www.acccim.org.my"}],
    items:[
      {cat:"gov",n:"马来西亚政府国际生奖学金 MIS",amt:"🟡 学费减免+月资助",eli:"优秀国际生，各专业",dl:"3–5月",tip:"马来西亚政府积极吸引国际生；通过马来西亚教育部（MOHE）网站申请",u:"https://biasiswa.mohe.gov.my"},
      {cat:"sch",n:"Monash马来西亚分校奖学金",amt:"🟡 学费减免20–50%",eli:"学业优秀",dl:"各入学批次",tip:"学费远低于澳洲本部，奖学金让费用再降；学位由澳洲Monash颁发",u:"https://www.monash.edu.my/study/scholarships"},
      {cat:"sch",n:"诺丁汉马来西亚分校奖学金",amt:"🟡 学费减免",eli:"优秀国际生",dl:"各入学批次",tip:"英国诺丁汉大学马来西亚分校；学费低且有奖学金，双联学位认可度较高"},
      {cat:"niche",n:"马来西亚华人总商会/各华人社团奖学金",amt:"🟡 MYR 5,000–20,000",eli:"华裔学生（不限国籍）",dl:"各年不同（通常5–8月）",tip:"马来西亚华人社团有多个专项奖学金，对华裔留学生友好；信息在华人社区论坛或社团官网",u:"https://www.acccim.org.my"},
      {cat:"niche",n:"棕榈油/资源企业定向奖学金（IOI/FELDA）",amt:"🟡 MYR 10,000–30,000",eli:"农业/工程/商科，有在马就业意向",tip:"马来西亚大型棕榈油和资源企业有面向研究生的定向奖学金；农业/环境方向可主动联系"},
    ]
  },
  cn:{
    src:[{n:"CSC国家留学基金委",u:"https://www.csc.edu.cn"},{n:"北京大学燕京学堂",u:"https://yenching.pku.edu.cn"},{n:"清华大学国际生奖学金",u:"https://www.tsinghua.edu.cn"},{n:"中国国际中文教育基金会",u:"https://www.cief.org.cn"}],
    items:[
      {cat:"gov",n:"中国政府奖学金 CSC（面向外国生）",amt:"🟢 全额（学费+住宿+月CNY 3,000–3,500）",eli:"外国国籍学生，各专业",dl:"各高校不同（通常3–4月）",tip:"中国最重要的国际学生奖学金；通过中国驻外使馆或各高校申请；名额多，是外国学生来华最主要资助",u:"https://www.csc.edu.cn"},
      {cat:"gov",n:"省市地方政府国际生奖学金",amt:"🟡 学费减免或月补贴",eli:"赴对应省市高校就读的外国学生",tip:"上海/北京/广东等省市均有专项，额度和名额各异；多数需通过目标高校申请"},
      {cat:"sch",n:"清华大学全额国际生奖学金",amt:"🟢 全额（学费+住宿+月补贴）",eli:"全球顶尖学生，GPA 90+",dl:"随研究生申请（1–3月）",tip:"清华有专门全额国际生奖学金；苏世民学者项目竞争极激烈",u:"https://www.tsinghua.edu.cn"},
      {cat:"sch",n:"北京大学燕京学堂全额奖学金",amt:"🟢 全额（学费+住宿）",eli:"优秀国际生，中国学研究方向",dl:"1月",tip:"燕京学堂一年制中国学硕士，全额奖学金；竞争激烈但性价比极高",u:"https://yenching.pku.edu.cn"},
      {cat:"sch",n:"复旦/上交大国际生奖学金",amt:"🟡 学费全免或部分减免",eli:"各专业优秀外国学生",dl:"3–4月",tip:"复旦和上交大均有专项国际生奖学金，名额比清北稍多；上交密西根学院有独特双学位项目"},
      {cat:"niche",n:"孔子学院奖学金（CIEF）",amt:"🟡 学费减免或月补贴",eli:"与汉语/中文相关专业，或有孔子学院推荐",dl:"各孔子学院不同",tip:"通过各国孔子学院申请；面向对中文/中国文化有浓厚兴趣的国际生",u:"https://www.cief.org.cn"},
      {cat:"niche",n:"华为/阿里/腾讯等中资企业定向奖学金",amt:"🟡 CNY 10,000–30,000/年",eli:"在国内顶校就读的外国留学生，相关专业",tip:"中国科技企业有面向外国留学生的定向奖学金，多与就业意向绑定；信息通过高校招生处获取"},
    ]
  },
};

/* 学生说 */
const VOICES={
  uk:["「一年制真的很快，9月入学就得开始找工作/准备升博，别浪费暑假。」","「rolling录取是真的——我同档位朋友早申两个月就拿了offer，我晚了名额都满了。」","「PS一定要每校改，套模板的招生官一眼看穿。」","「Graduate Route 2年工签是英国最大优势，毕业直接留，不需要雇主担保。」","「伦敦贵但机会多；曼彻斯特、爱丁堡生活成本低一半，看你就业目标在哪。」","「语言不够别硬撑，Pre-sessional语言班比开学跟不上课强多了。」"],
  us:["「美国项目贵但资源真的多，career fair和校友网络对找实习帮助很大。」","「STEM的OPT是核心优势，选项目时一定确认STEM认证。」","「GRE不是都要，但有的项目仍卡，早查清楚别白考。」","「H-1B抽签是真实天花板，STEM OPT 3年是缓冲，没抽到要有Plan B。」","「很多城市没车生活半径极窄，买车费用要提前预算进去。」","「校内career fair比网申重要太多，一定早去、多去、多follow up。」"],
  au:["「con-offer很友好，可以先占位再慢慢补语言。」","「485工签让我有时间在本地积累工作经验，移民路径清晰。」","「双非同学申澳洲机会大，con-offer机制宽，语言够就先占位别犹豫。」","「悉尼/墨尔本租金不便宜，拿offer后立刻找房，来了才找真的很难。」","「澳洲找工作靠network，学校career event要多参加，光网申效率低。」","「八校之间差距没排名看起来那么大，选城市/专业比纠结排名更实际。」"],
  ca:["「co-op项目很值，毕业就有本地工作经验，找工作和移民都顺。」","「PGWP+Express Entry路径清晰，但找工作还是要自己主动networking。」","「加拿大移民最大的坑是CRS分数每年在涨，早毕业早拿经验分比较稳。」","「冬天是真的冷，温哥华好一些，多伦多/蒙特利尔要扛住。」","「租房很紧张，尤其多伦多/温哥华，来之前通过学校论坛或微信群提前找。」","「滑铁卢co-op几乎是北美CS就业直通车，但竞争也极激烈。」"],
  sg:["「节奏快、压力大，一年制几乎一开学就要找实习。」","「想留坡得达到薪资门槛才能拿EP，热门专业更稳。」","「NUS/NTU申请门槛高，背景很重要，985均分85+以下基本没机会。」","「新加坡生活贵，房租是最大开销，不少人选学校宿舍控成本。」","「亚洲金融和科技枢纽，跨国企业多，金融/科技就业机会好但外籍竞争激烈。」","「中英双语、离家近、时差小，家里有事回来方便。」"],
  hk:["「一年真的很快，9月入学就得开始投简历，别等毕业。」","「全英文授课没问题，但本地职场粤语会更吃得开。」","「住得小、租金贵是常态，心理上提前接受。」","「IANG 12个月找工作居留很好用，回内地也方便，很多人做跨境的工作。」","「港校内地生很多，融入没问题，但英语能力要跟上。」","「商科/金融申请竞争极激烈，报录比很高，一定多备几所。」"],
  ch:["「学费便宜到感动，但苏黎世/日内瓦的物价会让你清醒。」","「ETH课业是真的硬核，数理基础不扎实会很吃力。」","「留瑞工作机会好但门槛高，需要雇主愿意担保。」","「德语在苏黎世日常生活中很有用，哪怕只学到B1也会方便很多。」","「ETH/EPFL不是靠申请技巧能进的，数理成绩是硬门槛。」","「瑞士工资全欧最高，如果能留下来，投入产出比无敌。」"],
  nl:["「英文项目体验很好，老师同学国际化，课堂讨论多。」","「numerus fixus限额专业一定要早申，晚了没名额。」","「租房极紧张，拿到offer立刻开始找房，别拖。」","「荷兰人英语极好，日常生活和学习完全英语没问题。」","「求职年1年找工作居留，但实际就业荷兰语有优势，建议学。」","「阿姆斯特丹/鹿特丹国际化，自行车是最主流的交通工具，生活品质高。」"],
  jp:["「研究型一定先套教授拿内诺，否则很难录。」","「英文项目方便入学，但想融入和就业，学日语回报很大。」","「国公立学费低+奖学金，性价比在发达国家里很突出。」","「MEXT奖学金竞争激烈，但拿到基本全程零负担，值得提前认真准备。」","「日本就业需要日语，IT/制造业/外企有英文岗，但总量有限。」","「治安极好、公共交通准点、饮食好，生活本身很舒适。」"],
  kr:["「GKS奖学金很给力，拿到基本零负担。」","「语言是天花板：英文项目能读，但深耕和就业需要韩语。」","「SKY（首延高）是韩国认可度最高的学府，其他学校就业认可度差距明显。」","「GKS申请周期长，一般提前一年开始，语言成绩和推荐信要早做。」","「首尔生活便利、娱乐丰富，租金偏高要算好预算。」","「如果对K-culture感兴趣首尔真的好玩，但学业要顾好别分心。」"],
  de:["「免学费真香，但德语水平直接决定你的生活和就业上限。」","「APS审核一定趁早办，耗时几个月，卡着会误申请季。」","「uni-assist流程慢、材料细，耐心+提前准备很关键。」","「德国人对效率要求高，邮件要正式，截止前一定提前，别踩文化雷区。」","「毕业18个月找工作居留很实在，汽车/工程/IT有需求，德语好机会翻倍。」","「生活成本在西欧属于低的，加上免学费，总费用压力比英美轻很多。」"],
  nz:["「毕业开放工签3年+移民路径，是来新西兰最实在的理由。」","「费用比英美澳低不少，环境和安全没得说。」","「奥克兰华人多，生活配套成熟，语言障碍不大。」","「工作机会集中在奥克兰，其他城市机会少但移民加分多，各有取舍。」","「节奏慢、自然好，适合喜欢户外和轻松生活的人。」","「不适合追排名，但如果目标是移民或轻松环境读书，性价比真的高。」"],
  my:["「费用是真的低，性价比无敌，适合预算有限的同学。」","「读Monash/Nottingham马来分校，能用更低成本拿英澳学位。」","「双联课程要确认学位颁发方和认可度，不同课程含金量差别大。」","「华人多、饮食合口，对中国学生来说生活适应最快。」","「毕业后留东南亚发展是个选择，吉隆坡有不少跨国企业区域总部。」","「排名别期待太高，主打实惠、英文环境与东南亚视野。」"],
  fr:["「公立学费低，但Grande École是另一套体系、可能更贵。」","「英文项目够用，但会法语在生活和实习上帮助很大。」","「Campus France程序繁琐，要提前3–4个月准备，别拖到deadline才急。」","「法国人对法语的坚持是真实的，街头/日常基本不说英语，几句法语很有必要。」","「巴黎机会多但租房贵，外省性价比更高。」","「APS签证1年找工作，但实际留法就业竞争大，语言是最大瓶颈。」"],
  se:["「英文项目体验好、师生平等，北欧生活很舒服。」","「SI奖学金很香，但竞争激烈、要早准备。」","「瑞典人英语极好，学习和日常完全英语没问题。」","「就业有机会，科技公司多用英语，但正式工作往往还是需要瑞典语。」","「申请截止早（1月中旬），很多人忽视，一定提前准备。」","「冬天日照短+物价高是要适应的点，但生活质量和福利很高。」"],
  be:["「鲁汶性价比超高，学术声誉也硬。」","「布鲁塞尔靠近欧盟机构，实习/就业有独特机会。」","「英文项目多，但学点荷兰语/法语生活更方便。」","「比利时交通四通八达，在欧洲旅行很方便，周末可去法国/荷兰/德国。」","「比利时是多语言国家，国际化城市英语也够用。」","「鲁汶学术氛围浓，研究和课程质量有保障，是欧洲低调的好选择。」"],
  dk:["「北欧高福利+英文授课，生活质量很高。」","「学费+物价不便宜，要算好预算或争取奖学金。」","「设计/工程/生命科学方向资源很强。」","「丹麦人英语普及率极高，日常生活完全没有语言障碍。」","「工作和生活平衡是文化，不会被逼着无休止加班——北欧真实。」","「马士基/诺和诺德等全球企业在此，特定专业就业机会不错。」"],
  cn:["「主要适合国际生/港澳台侨，CSC奖学金名额多。」","「英文项目越来越多，但会中文在实习和生活上优势明显。」","「就业直接对接国内市场，实习机会丰富。」","「清北的国际项目（如苏世民书院）申请竞争激烈，但资源和体验一流。」","「中外合作项目（如SJTU密西根学院）是低成本获国际认可学位的路径之一。」","「对外国学生来说在中国生活很特别，能真正了解最大的新兴经济体。」"],
};

/* 各院校生活实况 */
/* ── 热门项目具体要求（Feature 8） ── */
const PROG_DETAILS={
  "伦敦政治经济学院":[
    {prog:"MSc Financial Mathematics",gpa:"85+",ielts:"7.5",note:"需概率论/随机过程基础，数学背景要求极高",dl:"10月(早申)→3月",sop:true,rec:2},
    {prog:"MSc Data Science",gpa:"85+",ielts:"7.0",note:"竞争激烈，需编程+统计双背景，Python必须",dl:"11月",sop:true,rec:2},
    {prog:"MSc Statistics",gpa:"80+",ielts:"7.0",note:"LSE统计系旗舰，量化/精算方向可选",dl:"11月",sop:true,rec:2},
  ],
  "帝国理工学院":[
    {prog:"MSc Computing",gpa:"85+",ielts:"6.5",note:"CS背景强制要求，全英竞争最激烈CS项目之一",dl:"滚动（12月前最佳）",sop:true,rec:2},
    {prog:"MSc Business Analytics",gpa:"82+",ielts:"7.0",note:"偏实践，Python+SQL+统计三件套必备",dl:"滚动",sop:true,rec:2},
    {prog:"MSc Applied Mathematics",gpa:"85+",ielts:"6.5",note:"数学系旗舰，可选金融/物理方向",dl:"4月30日",sop:false,rec:2},
  ],
  "伦敦大学学院":[
    {prog:"MSc Computer Science",gpa:"85+",ielts:"6.5",note:"CS本科背景必须，Distinction级申请更稳",dl:"滚动（3月前）",sop:true,rec:2},
    {prog:"MSc Financial Technology",gpa:"80+",ielts:"6.5",note:"金融+CS复合背景有优势，伦敦FinTech最佳入口",dl:"滚动（2月前）",sop:true,rec:2},
    {prog:"MSc Quantitative Finance",gpa:"82+",ielts:"7.0",note:"CFA/FRM经历加分，需扎实数学+金融双基础",dl:"3月",sop:true,rec:2},
  ],
  "牛津大学":[
    {prog:"MSc Financial Economics",gpa:"88+",ielts:"7.5",note:"Saïd旗舰项目，均分要求全英最严之一",dl:"1月",sop:true,rec:3},
    {prog:"MSc Computer Science",gpa:"85+",ielts:"7.0",note:"含AI/系统/安全方向，需扎实CS理论背景",dl:"1月",sop:true,rec:2},
    {prog:"MSc Statistics",gpa:"85+",ielts:"7.0",note:"数学/统计本科优先，推荐信分量重",dl:"2月",sop:true,rec:2},
  ],
  "剑桥大学":[
    {prog:"MPhil Data Intensive Science",gpa:"87+",ielts:"7.5",note:"数据+科学交叉顶尖项目，录取率极低",dl:"12月",sop:true,rec:3},
    {prog:"MASt Mathematics",gpa:"90+",ielts:"7.0",note:"仅数学顶尖生申，含金量极高，直通博士通道",dl:"1月",sop:false,rec:2},
    {prog:"MPhil Engineering",gpa:"87+",ielts:"7.5",note:"研究型硕士，需联系导师，建议提前套磁",dl:"12月",sop:true,rec:3},
  ],
  "麻省理工学院":[
    {prog:"MS Operations Research",gpa:"88+",ielts:"托福100+",note:"对外开放，数学/工程背景，OR/优化方向",dl:"12月15日",sop:true,rec:3},
    {prog:"MS Computational Science & Engineering",gpa:"88+",ielts:"托福100+",note:"数值方法+科学计算，跨学科背景佳",dl:"12月15日",sop:true,rec:3},
  ],
  "哥伦比亚大学":[
    {prog:"MS Financial Engineering",gpa:"85+",ielts:"托福100+",note:"顶级金工，GRE 325+，数学/编程双强必须",dl:"2月1日",sop:true,rec:3},
    {prog:"MS Computer Science",gpa:"85+",ielts:"托福100+",note:"热门项目，需数据结构/算法/系统三类课",dl:"2月15日",sop:true,rec:3},
    {prog:"MA Applied Analytics",gpa:"80+",ielts:"7.0",note:"数据分析实践，接受非CS背景转行申请",dl:"3月",sop:true,rec:2},
  ],
  "卡内基梅隆大学":[
    {prog:"MSML (Machine Learning)",gpa:"90+",ielts:"托福100+",note:"全球AI/ML含金量最高硕士之一，顶级竞争",dl:"12月1日",sop:true,rec:3},
    {prog:"MCDS (Computational Data Science)",gpa:"88+",ielts:"托福100+",note:"数据科学实践项目，硅谷/纽约就业直通",dl:"12月15日",sop:true,rec:3},
    {prog:"MSCF (Computational Finance)",gpa:"88+",ielts:"托福100+",note:"量化金融全美顶尖，GRE数学满分才稳",dl:"11月1日",sop:true,rec:3},
  ],
  "新加坡国立大学":[
    {prog:"MSc Computer Science",gpa:"80+",ielts:"6.5",note:"含AI/ML/安全方向，亚太CS含金量最高",dl:"2月1日",sop:true,rec:2},
    {prog:"MSc Financial Technology",gpa:"78+",ielts:"6.5",note:"金融+CS复合，东南亚FinTech就业最直接",dl:"3月",sop:true,rec:2},
    {prog:"MSc Statistics",gpa:"78+",ielts:"6.5",note:"数据/精算方向可选，EP工签申请有优势",dl:"3月",sop:true,rec:2},
  ],
  "苏黎世联邦理工":[
    {prog:"MSc Computer Science",gpa:"85+",ielts:"7.0",note:"全球CS前三，需强算法/系统背景，无德语要求",dl:"12月15日",sop:false,rec:2},
    {prog:"MSc Data Science",gpa:"85+",ielts:"7.0",note:"统计+CS双料，欧陆顶尖，竞争极激烈",dl:"12月15日",sop:false,rec:2},
    {prog:"MSc Statistics",gpa:"85+",ielts:"7.0",note:"数学/统计本科，可选精算方向，含金量高",dl:"12月15日",sop:false,rec:2},
  ],
  "代尔夫特理工大学":[
    {prog:"MSc Computer Science",gpa:"80+",ielts:"6.5",note:"欧陆CS顶尖，学费低（约2500欧/年）",dl:"1月15日",sop:false,rec:2},
    {prog:"MSc Data Science & Technology",gpa:"80+",ielts:"6.5",note:"毕业可在荷兰找工作申OW签证（1年）",dl:"1月15日",sop:false,rec:2},
    {prog:"MSc Aerospace Engineering",gpa:"82+",ielts:"6.5",note:"全球航空工程顶尖，需力学/流体背景",dl:"1月15日",sop:false,rec:2},
  ],
  "香港大学":[
    {prog:"MSc(CompSc)",gpa:"75+",ielts:"6.5",note:"含Data Science方向，IANG工签后留港就业佳",dl:"3月31日",sop:false,rec:2},
    {prog:"MSc Finance",gpa:"78+",ielts:"6.5",note:"香港金融圈认可度高，含量化/资管方向",dl:"3月",sop:true,rec:2},
    {prog:"MSc in Global Management",gpa:"75+",ielts:"7.0",note:"国际管理，回国管培生/外企认可度好",dl:"4月",sop:true,rec:2},
  ],
  "香港科技大学":[
    {prog:"MSc Big Data Technology",gpa:"75+",ielts:"6.5",note:"数据科学全港最热，工业界认可度高",dl:"3月",sop:false,rec:2},
    {prog:"MSc Financial Mathematics",gpa:"78+",ielts:"6.5",note:"量化金融，毕业生进投行/对冲基金比例高",dl:"3月",sop:true,rec:2},
    {prog:"MSc Information Technology",gpa:"75+",ielts:"6.5",note:"含Cloud/AI/网络安全方向，偏实践",dl:"4月",sop:false,rec:2},
  ],
  "多伦多大学":[
    {prog:"MEng Electrical & Computer Engineering",gpa:"80+",ielts:"7.0",note:"授课型工程，课业强度大，实习机会多",dl:"1月",sop:true,rec:2},
    {prog:"MScAC (Applied Computing)",gpa:"80+",ielts:"7.0",note:"CS实践型，含金融/医疗/游戏等方向",dl:"1月",sop:true,rec:2},
    {prog:"MSc Statistics",gpa:"82+",ielts:"7.0",note:"加拿大统计顶尖，数据科学方向就业强",dl:"12月",sop:true,rec:3},
  ],
  "墨尔本大学":[
    {prog:"Master of Computer Science",gpa:"75+",ielts:"6.5",note:"澳洲CS含金量最高，含AI/数据/系统方向",dl:"滚动",sop:false,rec:2},
    {prog:"Master of Data Science",gpa:"75+",ielts:"6.5",note:"跨背景可申，统计/商科转CS首选",dl:"滚动",sop:false,rec:2},
    {prog:"Master of Finance",gpa:"75+",ielts:"6.5",note:"CFA考点整合好，就业联系紧密",dl:"滚动",sop:false,rec:2},
  ],
  "爱丁堡大学":[
    {prog:"MSc Artificial Intelligence",gpa:"82+",ielts:"6.5",note:"AI老牌强项，Informatics学院全球顶尖，早申更稳",dl:"3月31日",sop:true,rec:2},
    {prog:"MSc Data Science",gpa:"80+",ielts:"6.5",note:"商科/理工转CS热门路径，Python+统计背景佳",dl:"3月",sop:true,rec:2},
    {prog:"MSc Finance & Investment",gpa:"78+",ielts:"7.0",note:"商学院认list，均分要求清晰，爱丁堡金融圈认可度高",dl:"4月",sop:true,rec:2},
  ],
  "曼彻斯特大学":[
    {prog:"MSc Advanced Computer Science",gpa:"80+",ielts:"6.5",note:"中国学生最多的CS项目，rolling录取早申优势显著",dl:"滚动（2月前）",sop:true,rec:2},
    {prog:"MSc Data Science",gpa:"78+",ielts:"6.5",note:"商科+CS复合，三档list对双非友好",dl:"滚动（2月前）",sop:false,rec:2},
    {prog:"MSc Finance (AMBS)",gpa:"79+",ielts:"6.5",note:"AMBS商学院声誉好，双非85+可申第二档",dl:"滚动（3月前）",sop:true,rec:2},
  ],
  "华威大学":[
    {prog:"MSc Finance (WBS)",gpa:"82+",ielts:"7.0",note:"WBS商学院精英感强，毕业生进四大/投行比例高",dl:"3月15日",sop:true,rec:2},
    {prog:"MSc Business Analytics",gpa:"80+",ielts:"6.5",note:"数学系背景强，分析偏理论，GPA要求高于商科同类",dl:"3月",sop:true,rec:2},
    {prog:"MSc Computer Science",gpa:"78+",ielts:"6.5",note:"性价比好，数学系CS背景强，双非78+可冲",dl:"3月31日",sop:false,rec:2},
  ],
  "伦敦国王学院":[
    {prog:"MSc Computer Science",gpa:"80+",ielts:"7.0",note:"伦敦地段好，CS招生量大于帝国/UCL，双非80+有机会",dl:"3月31日",sop:true,rec:2},
    {prog:"MSc Financial Mathematics",gpa:"80+",ielts:"7.0",note:"数学系旗舰，量化方向就业有竞争力",dl:"3月",sop:true,rec:2},
    {prog:"MSc Data Science",gpa:"78+",ielts:"7.0",note:"医学院+CS跨学科，生物/健康数据方向有特色",dl:"4月",sop:false,rec:2},
  ],
  "纽约大学":[
    {prog:"MS Computer Science (Courant/Tandon)",gpa:"82+",ielts:"7.0",note:"纽约科技圈直达，Courant数学系强，招生量大",dl:"2月1日",sop:true,rec:3},
    {prog:"MS Financial Engineering (Tandon)",gpa:"83+",ielts:"7.0",note:"顶级MFE之一，华尔街认可度极高，GRE 325+",dl:"1月15日",sop:true,rec:3},
    {prog:"MS Data Science",gpa:"80+",ielts:"7.0",note:"跨背景友好，数理统计+Python基础即可申",dl:"2月15日",sop:true,rec:2},
  ],
  "佐治亚理工学院":[
    {prog:"MS Computer Science (MSCS)",gpa:"82+",ielts:"7.0",note:"公立CS顶尖，性价比全美最高之一，OMS CS网课也顶级",dl:"1月15日",sop:true,rec:3},
    {prog:"MS Analytics",gpa:"80+",ielts:"7.0",note:"跨学科数据分析，商科转型首选，就业导向明显",dl:"1月15日",sop:true,rec:2},
    {prog:"MS ECE (Electrical & Computer Eng)",gpa:"80+",ielts:"7.0",note:"工程老牌强项，含嵌入式/芯片/信号处理方向",dl:"1月15日",sop:true,rec:3},
  ],
  "悉尼大学":[
    {prog:"Master of Computer Science",gpa:"75+",ielts:"6.5",note:"澳洲历史最悠久，CS含金量稳定，滚动录取早申",dl:"滚动",sop:false,rec:2},
    {prog:"Master of Data Science",gpa:"74+",ielts:"6.5",note:"跨背景可申，偏应用，Python+统计背景即可",dl:"滚动",sop:false,rec:2},
    {prog:"Master of Commerce (Finance)",gpa:"74+",ielts:"6.5",note:"商科list分档，双非80+可申，悉尼金融圈认可",dl:"滚动",sop:false,rec:2},
  ],
  "新南威尔士大学":[
    {prog:"Master of Information Technology",gpa:"72+",ielts:"6.5",note:"三学期制节奏快，悉尼科技就业直通，双非75+可申",dl:"滚动",sop:false,rec:2},
    {prog:"Master of Data Science & Decisions",gpa:"72+",ielts:"6.5",note:"统计+决策科学交叉，跨背景友好",dl:"滚动",sop:false,rec:2},
    {prog:"Master of Financial Mathematics",gpa:"74+",ielts:"6.5",note:"量化金融澳洲最强之一，数学/精算背景佳",dl:"滚动",sop:false,rec:2},
  ],
  "南洋理工大学":[
    {prog:"MSc Artificial Intelligence",gpa:"78+",ielts:"6.5",note:"坡县AI就业直通，年轻项目快速崛起",dl:"3月",sop:true,rec:2},
    {prog:"MSc Financial Engineering",gpa:"78+",ielts:"6.5",note:"NTU商学院量化金融，东南亚金融圈认可",dl:"2月",sop:true,rec:2},
    {prog:"MSc Computer Control & Automation",gpa:"78+",ielts:"6.5",note:"工程+CS复合，含机器人/控制/嵌入式方向",dl:"3月",sop:false,rec:2},
  ],
  "香港中文大学":[
    {prog:"MSc in Computer Science",gpa:"75+",ielts:"6.5",note:"书院制，港校CS含金量高，IANG工签留港就业",dl:"2月28日",sop:false,rec:2},
    {prog:"MSc in Finance",gpa:"78+",ielts:"6.5",note:"商科名校，香港金融圈认可，CFA备考资源好",dl:"3月",sop:true,rec:2},
    {prog:"MSc in Business Analytics",gpa:"75+",ielts:"6.5",note:"跨背景友好，数据+商科复合就业广",dl:"3月",sop:false,rec:2},
  ],
  "英属哥伦比亚大学":[
    {prog:"MSc Computer Science",gpa:"82+",ielts:"7.0",note:"温哥华科技生态直通，竞争激烈，双非需强背景",dl:"12月1日",sop:true,rec:3},
    {prog:"MEng Software Systems",gpa:"80+",ielts:"7.0",note:"授课型工程，就业导向，加拿大PGWP工签友好",dl:"1月15日",sop:true,rec:2},
    {prog:"MSc Statistics",gpa:"80+",ielts:"7.0",note:"数据科学方向，统计/数学本科优先",dl:"12月15日",sop:true,rec:2},
  ],
  "布里斯托大学":[
    {prog:"MSc Computer Science",gpa:"80+",ielts:"6.5",note:"罗素集团CS，Bristol Tech Cluster就业圈好，双非80+可申",dl:"滚动（4月前）",sop:false,rec:2},
    {prog:"MSc Engineering Mathematics",gpa:"78+",ielts:"6.5",note:"数学+工程交叉，偏理论，数学背景强势",dl:"滚动",sop:false,rec:2},
    {prog:"MSc Finance & Investment",gpa:"78+",ielts:"7.0",note:"商学院，双非78+可申，Bristol金融圈小而精",dl:"4月",sop:true,rec:2},
  ],
  "格拉斯哥大学":[
    {prog:"MSc Computing Science",gpa:"75+",ielts:"6.5",note:"苏格兰名校，招生相对宽松，双非75+可申",dl:"6月（滚动）",sop:false,rec:2},
    {prog:"MSc Data Science",gpa:"72+",ielts:"6.5",note:"跨背景友好，统计基础即可，偏应用",dl:"6月（滚动）",sop:false,rec:2},
    {prog:"MSc Finance",gpa:"74+",ielts:"6.5",note:"AACSB商学院，双非可申",dl:"4月",sop:true,rec:2},
  ],
  "杜伦大学":[
    {prog:"MSc Business Analytics",gpa:"78+",ielts:"6.5",note:"杜伦商学院精英感强，双非78+可申",dl:"3月",sop:true,rec:2},
    {prog:"MSc Finance",gpa:"78+",ielts:"7.0",note:"Durham Business School，认可度高",dl:"3月",sop:true,rec:2},
    {prog:"MSc Mathematical Sciences",gpa:"80+",ielts:"6.5",note:"纯数学方向，学术浓厚",dl:"4月",sop:false,rec:2},
  ],
  "伯明翰大学":[
    {prog:"MSc Computer Science",gpa:"78+",ielts:"6.5",note:"红砖名校，双非78+可申，伯明翰就业圈尚可",dl:"6月（滚动）",sop:false,rec:2},
    {prog:"MSc Business Analytics",gpa:"77+",ielts:"6.5",note:"AACSB商学院，就业导向，双非可申",dl:"4月",sop:true,rec:2},
    {prog:"MSc Finance",gpa:"76+",ielts:"6.5",note:"双非友好，Birmingham Business School",dl:"4月",sop:true,rec:2},
  ],
  "利兹大学":[
    {prog:"MSc Data Science & Analytics",gpa:"75+",ielts:"6.5",note:"跨背景可申，偏应用，Leeds就业资源尚可",dl:"4月（滚动）",sop:false,rec:2},
    {prog:"MSc Business Analytics",gpa:"74+",ielts:"6.5",note:"就业导向，双非74+可申",dl:"4月",sop:true,rec:2},
    {prog:"MSc Finance & Investment",gpa:"74+",ielts:"6.5",note:"AACSB商学院，双非友好",dl:"4月",sop:true,rec:2},
  ],
  "南安普顿大学":[
    {prog:"MSc Artificial Intelligence",gpa:"78+",ielts:"6.5",note:"ECS学院电子/CS传统强，AI项目成熟",dl:"5月（滚动）",sop:false,rec:2},
    {prog:"MSc Data Science",gpa:"76+",ielts:"6.5",note:"含ML/统计方向，双非76+可申",dl:"5月（滚动）",sop:false,rec:2},
    {prog:"MSc Finance",gpa:"75+",ielts:"6.5",note:"双非75+可申，性价比高",dl:"4月",sop:true,rec:2},
  ],
  "谢菲尔德大学":[
    {prog:"MSc Advanced Computer Science",gpa:"75+",ielts:"6.5",note:"红砖性价比，工程背景有优势",dl:"6月（滚动）",sop:false,rec:2},
    {prog:"MSc Data Analytics",gpa:"73+",ielts:"6.5",note:"跨背景友好，偏实践",dl:"6月（滚动）",sop:false,rec:2},
    {prog:"MSc Finance",gpa:"74+",ielts:"6.5",note:"AACSB，双非友好",dl:"4月",sop:true,rec:2},
  ],
  "诺丁汉大学":[
    {prog:"MSc Computer Science",gpa:"75+",ielts:"6.5",note:"双非友好，含AI方向，有宁波分校经历加分",dl:"滚动",sop:false,rec:2},
    {prog:"MSc Data Science",gpa:"73+",ielts:"6.5",note:"跨背景可申，双非75+可冲",dl:"滚动",sop:false,rec:2},
    {prog:"MSc Finance & Investment",gpa:"74+",ielts:"6.5",note:"Nottingham商学院，双非74+可申",dl:"4月",sop:true,rec:2},
  ],
  "伦敦玛丽女王大学":[
    {prog:"MSc Computer Science",gpa:"74+",ielts:"6.5",note:"东伦敦，招生相对宽松，双非74+可申",dl:"6月（滚动）",sop:false,rec:2},
    {prog:"MSc Data Analytics & Management",gpa:"72+",ielts:"6.5",note:"跨背景友好，偏实践，就业在伦敦圈",dl:"6月（滚动）",sop:false,rec:2},
  ],
  "圣安德鲁斯大学":[
    {prog:"MSc Data Science",gpa:"80+",ielts:"7.0",note:"苏格兰精英小校，学术氛围浓厚，海边小城宁静",dl:"4月",sop:true,rec:2},
    {prog:"MSc Finance",gpa:"80+",ielts:"7.0",note:"苏格兰历史名校商科，双非80+可申",dl:"4月",sop:true,rec:2},
  ],
  "斯坦福大学":[
    {prog:"MS Computer Science",gpa:"88+",ielts:"托福100+",note:"硅谷顶级，录取率<5%，需顶尖科研/竞赛/实习背景",dl:"12月5日",sop:true,rec:3},
    {prog:"MS Statistics",gpa:"88+",ielts:"托福100+",note:"统计/数据顶尖，偏理论研究，录取极难",dl:"12月5日",sop:true,rec:3},
  ],
  "哈佛大学":[
    {prog:"SM in Data Science (SEAS)",gpa:"87+",ielts:"托福100+",note:"跨学科数据科学，录取率极低，需顶尖背景",dl:"12月1日",sop:true,rec:3},
    {prog:"SM in Computational Science & Engineering",gpa:"87+",ielts:"托福100+",note:"科学计算方向，研究型，师资顶尖",dl:"12月1日",sop:true,rec:3},
  ],
  "加州理工学院":[
    {prog:"MS Aeronautics / Engineering",gpa:"89+",ielts:"托福100+",note:"研究型为主，名额极少，几乎无对外授课型硕士，需内诺导师",dl:"12月15日",sop:true,rec:3},
  ],
  "加州大学伯克利":[
    {prog:"MEng (Master of Engineering)",gpa:"83+",ielts:"托福90+",note:"授课型，含CS/EECS/数据/AI方向，招生量较大",dl:"1月10日",sop:true,rec:3},
    {prog:"MS EECS（研究型，竞争极高）",gpa:"86+",ielts:"托福90+",note:"研究型，需联系导师，录取名额极少，双非几乎无录",dl:"12月10日",sop:true,rec:3},
  ],
  "康奈尔大学":[
    {prog:"MEng Computer Science",gpa:"82+",ielts:"托福100+",note:"Cornell Tech纽约校区就业极佳，含AI/HCI/Systems方向",dl:"1月15日",sop:true,rec:2},
    {prog:"MS Operations Research (ORIE)",gpa:"83+",ielts:"托福100+",note:"量化/运营方向，金融工程出口好",dl:"1月15日",sop:true,rec:3},
    {prog:"MEng Electrical & Computer Engineering",gpa:"82+",ielts:"托福100+",note:"伊萨卡主校区，工程授课型",dl:"1月15日",sop:true,rec:2},
  ],
  "密歇根大学安娜堡":[
    {prog:"MS Computer Science (EECS)",gpa:"82+",ielts:"托福100+",note:"公立巨头CS，竞争激烈，双非需82+强背景",dl:"12月15日",sop:true,rec:3},
    {prog:"MS Data Science (MADS)",gpa:"81+",ielts:"托福100+",note:"跨学科项目，偏应用，背景包容度稍好",dl:"12月15日",sop:true,rec:2},
    {prog:"MS Financial Engineering",gpa:"83+",ielts:"托福100+",note:"量化金融，数学+编程要求高",dl:"1月15日",sop:true,rec:3},
  ],
  "普林斯顿大学":[
    {prog:"MSE Computer Science",gpa:"87+",ielts:"托福100+",note:"藤校工程硕士，名额极少，研究型导向，需强科研背景",dl:"12月15日",sop:true,rec:3},
    {prog:"MSE Electrical & Computer Engineering",gpa:"87+",ielts:"托福100+",note:"工程方向，录取竞争极高",dl:"12月15日",sop:true,rec:3},
  ],
  "耶鲁大学":[
    {prog:"MS Statistics & Data Science",gpa:"86+",ielts:"托福100+",note:"录取率极低，学术研究导向，需科研经历",dl:"12月15日",sop:true,rec:3},
    {prog:"MS Computer Science",gpa:"86+",ielts:"托福100+",note:"藤校CS，名额少，双非几乎无录",dl:"12月15日",sop:true,rec:3},
  ],
  "芝加哥大学":[
    {prog:"MS Computer Science (MPCS)",gpa:"84+",ielts:"托福102+",note:"Chicago学派严谨，CS转型项目成熟，就业好",dl:"1月15日",sop:true,rec:3},
    {prog:"MS Analytics (MScA)",gpa:"83+",ielts:"托福102+",note:"数据分析实践，跨背景可申，业界导向",dl:"1月15日",sop:true,rec:2},
  ],
  "宾夕法尼亚大学":[
    {prog:"MSE (SEAS Engineering)",gpa:"83+",ielts:"托福100+",note:"藤校，含CS/数据/AI/生物工程方向",dl:"1月1日",sop:true,rec:3},
    {prog:"MSc Finance (Wharton)",gpa:"85+",ielts:"托福100+",note:"顶级金融，GMAT/GRE必备，华尔街直通",dl:"1月15日",sop:true,rec:3},
  ],
  "约翰霍普金斯大学":[
    {prog:"MS Computer Science",gpa:"82+",ielts:"托福100+",note:"生物信息/CS/AI强，双非需82+",dl:"1月15日",sop:true,rec:3},
    {prog:"MS Applied Mathematics & Statistics",gpa:"83+",ielts:"托福100+",note:"数学+统计交叉，生物医学方向有特色",dl:"1月15日",sop:true,rec:2},
  ],
  "加州大学洛杉矶":[
    {prog:"MS Computer Science",gpa:"83+",ielts:"托福90+",note:"公立顶尖，洛杉矶就业资源极佳，竞争激烈",dl:"12月15日",sop:true,rec:3},
    {prog:"MS Data Science Engineering",gpa:"82+",ielts:"托福90+",note:"跨院系合作项目，数据工程方向",dl:"12月15日",sop:true,rec:2},
  ],
  "杜克大学":[
    {prog:"MS Computer Science",gpa:"82+",ielts:"托福100+",note:"南方私立名校，CS申请相对友好",dl:"12月15日",sop:true,rec:2},
    {prog:"Master of Quantitative Management (MQM)",gpa:"82+",ielts:"托福100+",note:"商业分析/量化管理，就业导向，Fuqua认可",dl:"1月15日",sop:true,rec:2},
    {prog:"MS Electrical & Computer Engineering",gpa:"80+",ielts:"托福100+",note:"工程传统强，双非80+可冲",dl:"12月15日",sop:true,rec:2},
  ],
  "伊利诺伊大学香槟":[
    {prog:"MCS (Master of Computer Science)",gpa:"82+",ielts:"托福96+",note:"公立CS老牌强校，双非80+可申，Tech公司认可度高",dl:"12月15日",sop:true,rec:3},
    {prog:"MS Statistics",gpa:"82+",ielts:"托福96+",note:"数据科学方向，分析师就业强",dl:"12月15日",sop:false,rec:2},
  ],
  "德州大学奥斯汀":[
    {prog:"MS Computer Science",gpa:"80+",ielts:"托福79+",note:"公立旗舰，奥斯汀科技产业（Dell/Apple）活跃",dl:"12月1日",sop:true,rec:3},
    {prog:"MS Statistics & Data Science",gpa:"79+",ielts:"托福79+",note:"跨学科，统计+CS复合，性价比高",dl:"12月15日",sop:true,rec:2},
  ],
  "加州大学圣地亚哥":[
    {prog:"MS Computer Science (CSE)",gpa:"81+",ielts:"托福88+",note:"生物信息/CS/AI方向强，圣地亚哥气候绝佳",dl:"12月15日",sop:true,rec:3},
    {prog:"MS Data Science (Halıcıoğlu)",gpa:"80+",ielts:"托福88+",note:"跨学科数据科学项目，偏应用",dl:"1月10日",sop:true,rec:2},
  ],
  "华盛顿大学":[
    {prog:"MS Computer Science & Engineering",gpa:"81+",ielts:"托福92+",note:"西雅图微软/亚马逊旁，实习资源顶级，竞争激烈",dl:"12月15日",sop:true,rec:3},
    {prog:"MS Data Science (MSDS)",gpa:"80+",ielts:"托福92+",note:"跨学科项目，商科+CS转型好",dl:"1月5日",sop:true,rec:2},
  ],
  "西北大学":[
    {prog:"MS Artificial Intelligence",gpa:"84+",ielts:"托福100+",note:"私立名校，AI新兴项目，芝加哥科技圈资源",dl:"12月15日",sop:true,rec:3},
    {prog:"MS Computer Science",gpa:"84+",ielts:"托福100+",note:"Evanston校区，CS强，就业好",dl:"12月15日",sop:true,rec:3},
  ],
  "布朗大学":[
    {prog:"ScM Computer Science",gpa:"83+",ielts:"托福100+",note:"藤校小而精，录取规模小，需科研背景",dl:"12月15日",sop:true,rec:3},
    {prog:"ScM Data Science",gpa:"82+",ielts:"托福100+",note:"跨学科数据项目，偏应用与研究结合",dl:"12月15日",sop:true,rec:2},
  ],
  "波士顿大学":[
    {prog:"MS Computer Science",gpa:"78+",ielts:"6.5",note:"招生量大，对背景包容，波士顿名校集群资源丰富",dl:"2月1日",sop:true,rec:2},
    {prog:"MS Data Science",gpa:"76+",ielts:"6.5",note:"跨背景友好，偏应用，双非76+可申",dl:"2月1日",sop:false,rec:2},
    {prog:"MS Mathematical Finance",gpa:"78+",ielts:"6.5",note:"量化金融，双非76+可申",dl:"2月",sop:true,rec:2},
  ],
  "普渡大学":[
    {prog:"MS Computer Science",gpa:"78+",ielts:"托福88+",note:"公立理工强，CS竞争相对低，性价比高",dl:"12月15日",sop:true,rec:3},
    {prog:"MS ECE (Electrical & Computer Engineering)",gpa:"76+",ielts:"托福88+",note:"工程老牌，嵌入式/芯片/信号方向",dl:"12月15日",sop:true,rec:2},
  ],
  "威斯康星大学麦迪逊":[
    {prog:"MS Computer Sciences",gpa:"78+",ielts:"托福92+",note:"公立研究型，偏学术导向，双非需强科研",dl:"12月15日",sop:true,rec:3},
    {prog:"MS Statistics",gpa:"78+",ielts:"托福92+",note:"统计系传统强，生物统计方向有特色",dl:"12月15日",sop:false,rec:2},
  ],
  "加州大学戴维斯":[
    {prog:"MS Computer Science",gpa:"78+",ielts:"托福80+",note:"农业/生命科学+CS结合，性价比好，双非78+可申",dl:"1月15日",sop:true,rec:3},
    {prog:"MS Statistics",gpa:"76+",ielts:"托福80+",note:"生物统计方向强，跨背景可申",dl:"12月15日",sop:false,rec:2},
  ],
  "莱斯大学":[
    {prog:"MS Computer Science",gpa:"82+",ielts:"托福90+",note:"小而精私立，休斯顿航天/能源圈资源，班级小",dl:"1月15日",sop:true,rec:3},
    {prog:"MS Statistics",gpa:"81+",ielts:"托福90+",note:"小班制，师生比高，偏学术",dl:"1月15日",sop:false,rec:2},
  ],
  "莫纳什大学":[
    {prog:"Master of Information Technology",gpa:"72+",ielts:"6.5",note:"多校区选择灵活，双非72+可申，IT就业导向强",dl:"滚动",sop:false,rec:2},
    {prog:"Master of Business Analytics",gpa:"71+",ielts:"6.5",note:"跨背景友好，偏实践，墨尔本就业圈",dl:"滚动",sop:false,rec:2},
    {prog:"Master of Finance",gpa:"71+",ielts:"6.5",note:"AACSB商学院，双非71+可申",dl:"滚动",sop:false,rec:2},
  ],
  "昆士兰大学":[
    {prog:"Master of Information Technology",gpa:"72+",ielts:"6.5",note:"布里斯班气候宜人，生活成本低于悉尼/墨尔本",dl:"滚动",sop:false,rec:2},
    {prog:"Master of Data Science",gpa:"72+",ielts:"6.5",note:"跨背景友好，与行业合作紧密",dl:"滚动",sop:false,rec:2},
    {prog:"Master of Business Analytics",gpa:"71+",ielts:"6.5",note:"双非71+可申，偏实践",dl:"滚动",sop:false,rec:2},
  ],
  "澳大利亚国立大学":[
    {prog:"Master of Computing",gpa:"76+",ielts:"6.5",note:"研究氛围浓，堪培拉政府/研究院资源好",dl:"滚动",sop:false,rec:2},
    {prog:"Master of Applied Data Analytics",gpa:"74+",ielts:"6.5",note:"政策数据分析方向有特色，偏应用",dl:"滚动",sop:false,rec:2},
    {prog:"Master of Finance",gpa:"75+",ielts:"6.5",note:"ANU商学院，双非75+可申",dl:"滚动",sop:false,rec:2},
  ],
  "西澳大学":[
    {prog:"Master of Computer Science",gpa:"70+",ielts:"6.5",note:"珀斯，矿业/能源产业资源，生活成本低，移民加分",dl:"滚动",sop:false,rec:2},
    {prog:"Master of Data Science",gpa:"70+",ielts:"6.5",note:"双非70+可申，适合预算有限、考虑移民学生",dl:"滚动",sop:false,rec:2},
  ],
  "阿德莱德大学":[
    {prog:"Master of Computing & Innovation",gpa:"70+",ielts:"6.5",note:"偏远地区移民加分，葡萄酒/农业特色，生活成本低",dl:"滚动",sop:false,rec:2},
    {prog:"Master of Data Science",gpa:"70+",ielts:"6.5",note:"双非70+可申，性价比高",dl:"滚动",sop:false,rec:2},
  ],
  "悉尼科技大学":[
    {prog:"Master of Information Technology",gpa:"70+",ielts:"6.5",note:"悉尼市中心，应用型强校，就业导向明显",dl:"滚动",sop:false,rec:2},
    {prog:"Master of Data Science & Innovation",gpa:"70+",ielts:"6.5",note:"跨学科创新项目，偏实践",dl:"滚动",sop:false,rec:2},
  ],
  "皇家墨尔本理工":[
    {prog:"Master of Information Technology",gpa:"70+",ielts:"6.5",note:"应用型，双非70+可申，墨尔本市中心地段好",dl:"滚动",sop:false,rec:2},
    {prog:"Master of Data Science",gpa:"70+",ielts:"6.5",note:"实用导向，行业对接，跨背景友好",dl:"滚动",sop:false,rec:2},
  ],
  "麦吉尔大学":[
    {prog:"MSc Computer Science",gpa:"82+",ielts:"7.0",note:"蒙特利尔，双语环境，CS竞争激烈，科研为主",dl:"1月15日",sop:true,rec:3},
    {prog:"MEng (授课型工程)",gpa:"80+",ielts:"6.5",note:"含AI/CS/ECE方向，就业导向，PGWP工签",dl:"2月1日",sop:true,rec:2},
    {prog:"MSc Finance / MFin",gpa:"80+",ielts:"7.0",note:"Desautels商学院，蒙特利尔金融圈认可",dl:"2月1日",sop:true,rec:2},
  ],
  "阿尔伯塔大学":[
    {prog:"MSc Computing Science",gpa:"80+",ielts:"6.5",note:"AI/强化学习重镇（Hinton母校），双非80+可申",dl:"12月1日",sop:true,rec:2},
    {prog:"MEng (授课型工程)",gpa:"78+",ielts:"6.5",note:"工程授课型，能源/油气产业资源丰富，PGWP",dl:"1月1日",sop:true,rec:2},
  ],
  "滑铁卢大学":[
    {prog:"MASc Computer Engineering / ECE",gpa:"82+",ielts:"7.0",note:"Co-op带薪实习全球闻名，研究型需教授内诺",dl:"1月15日",sop:true,rec:3},
    {prog:"MEng (授课型工程)",gpa:"80+",ielts:"7.0",note:"就业导向，也有Co-op选项，加拿大理工顶尖",dl:"2月1日",sop:true,rec:2},
    {prog:"MMath Data Science",gpa:"82+",ielts:"7.0",note:"数学系旗舰项目，数据+CS复合",dl:"1月15日",sop:true,rec:2},
  ],
  "香港城市大学":[
    {prog:"MSc Computer Science",gpa:"75+",ielts:"6.5",note:"应用导向，双非75+可申，IANG工签留港就业",dl:"3月31日",sop:false,rec:2},
    {prog:"MSc Data Science",gpa:"74+",ielts:"6.5",note:"跨背景友好，数据科学方向成熟",dl:"3月31日",sop:false,rec:2},
    {prog:"MSc Financial Engineering",gpa:"75+",ielts:"6.5",note:"量化金融，香港金融圈认可",dl:"3月",sop:true,rec:2},
  ],
  "香港理工大学":[
    {prog:"MSc Information Technology",gpa:"75+",ielts:"6.5",note:"应用型，IT就业导向，IANG工签",dl:"4月",sop:false,rec:2},
    {prog:"MSc Financial Technology",gpa:"74+",ielts:"6.5",note:"FinTech方向，香港金融科技圈",dl:"4月",sop:false,rec:2},
    {prog:"MSc Design（设计学院）",gpa:"73+",ielts:"6.5",note:"设计全球顶尖，作品集必须提交",dl:"3月",sop:true,rec:2},
  ],
  "洛桑联邦理工":[
    {prog:"MSc Computer Science",gpa:"85+",ielts:"7.0",note:"欧陆CS顶尖，与ETH齐名，需强算法/系统背景",dl:"12月15日",sop:false,rec:2},
    {prog:"MSc Data Science",gpa:"85+",ielts:"7.0",note:"数据科学欧陆顶尖，竞争极激烈",dl:"12月15日",sop:false,rec:2},
    {prog:"MSc Computational Science & Engineering",gpa:"85+",ielts:"7.0",note:"科学计算交叉，物理/数学背景佳",dl:"12月15日",sop:false,rec:2},
  ],
  "苏黎世大学":[
    {prog:"MSc Computational Linguistics",gpa:"80+",ielts:"7.0",note:"NLP方向欧陆顶尖，部分课程与ETH联合授课",dl:"4月30日",sop:false,rec:2},
    {prog:"MSc Banking and Finance",gpa:"80+",ielts:"7.0",note:"瑞士金融业圣地，进UBS/瑞信路径清晰",dl:"3月31日",sop:false,rec:2},
    {prog:"MSc Computational Science (与ETH联合)",gpa:"82+",ielts:"7.0",note:"学费极低，强理论，ETH/UZH联合授课",dl:"2月28日",sop:false,rec:2},
  ],
  "阿姆斯特丹大学":[
    {prog:"MSc Artificial Intelligence",gpa:"78+",ielts:"6.5",note:"欧洲顶尖AI项目，无学历歧视，双非可申",dl:"4月1日",sop:true,rec:2},
    {prog:"MSc Information Studies (Data Science)",gpa:"76+",ielts:"6.5",note:"社科+数据交叉，阿姆城市优势",dl:"4月1日",sop:true,rec:2},
    {prog:"MSc Business Administration",gpa:"76+",ielts:"6.5",note:"商学院，双非友好，欧盟就业",dl:"5月1日",sop:true,rec:2},
  ],
  "乌得勒支大学":[
    {prog:"MSc Data Science",gpa:"77+",ielts:"6.5",note:"荷兰综合名校，欧盟学费，双非友好",dl:"4月1日",sop:true,rec:2},
    {prog:"MSc Computing Science",gpa:"77+",ielts:"6.5",note:"偏理论，适合喜欢学术氛围的学生",dl:"4月1日",sop:false,rec:2},
  ],
  "莱顿大学":[
    {prog:"MSc Computer Science (LIACS)",gpa:"77+",ielts:"7.0",note:"法律/人文历史强，CS较小，学术氛围好",dl:"4月1日",sop:false,rec:2},
    {prog:"MSc Data Science",gpa:"76+",ielts:"7.0",note:"与阿姆斯特丹大学联合，数据科学方向",dl:"4月1日",sop:false,rec:2},
  ],
  "东京大学":[
    {prog:"GSII (全球文理+信息英文硕士)",gpa:"82+",ielts:"托福90+",note:"AI/数据/社科交叉英文项目，名额少，需推荐信强",dl:"11月",sop:true,rec:2},
    {prog:"MERIT Program (工学英文项目)",gpa:"82+",ielts:"托福90+",note:"全英文授课，工程/CS方向，需提前联系教授",dl:"11月",sop:true,rec:2},
  ],
  "京都大学":[
    {prog:"MSc Informatics (英文项目)",gpa:"80+",ielts:"托福90+",note:"日本理论计算机/AI传统强，英文项目有限，需提前联系教授",dl:"10月",sop:true,rec:2},
    {prog:"MSc Engineering",gpa:"80+",ielts:"托福90+",note:"研究型为主，导师制，需内诺",dl:"10月",sop:true,rec:2},
  ],
  "东京工业大学":[
    {prog:"MSc Computing (ACE/ACLS英文项目)",gpa:"78+",ielts:"6.5",note:"英文授课项目，东京就业好，工学顶尖",dl:"12月",sop:true,rec:2},
    {prog:"MSc CS / AI (GEMs项目)",gpa:"78+",ielts:"6.5",note:"全英文授课，IT/AI方向，学费低",dl:"12月",sop:true,rec:2},
  ],
  "大阪大学":[
    {prog:"MSc Engineering Science (E-cube英文项目)",gpa:"76+",ielts:"托福79+",note:"英文授课工程交叉项目，关西就业圈",dl:"11月",sop:true,rec:2},
    {prog:"MSc Computer Science (英文方向)",gpa:"76+",ielts:"托福79+",note:"日本国公立顶尖，需提前联系导师",dl:"10月",sop:true,rec:2},
  ],
  "东北大学":[
    {prog:"MSc Engineering (AIM材料英文项目)",gpa:"76+",ielts:"托福79+",note:"材料科学全球顶尖，英文授课项目，仙台生活成本极低",dl:"11月",sop:true,rec:2},
    {prog:"MSc Information Sciences (英文方向)",gpa:"75+",ielts:"托福79+",note:"研究型为主，需联系教授，信息/CS方向",dl:"10月",sop:true,rec:2},
  ],
  "首尔国立大学":[
    {prog:"MS Computer Science & Engineering (英文项目)",gpa:"82+",ielts:"托福88+",note:"韩国第一，英文CS项目，名额有限，需强背景",dl:"5月",sop:true,rec:2},
    {prog:"MS Business Administration (GSB)",gpa:"80+",ielts:"托福88+",note:"商学院旗舰，韩国金融/大企业认可",dl:"5月",sop:true,rec:2},
  ],
  "延世大学":[
    {prog:"MS Computer Science (Yonsei UIC)",gpa:"80+",ielts:"托福88+",note:"SKY私立，英文CS项目，国际化程度较高",dl:"4月",sop:true,rec:2},
    {prog:"MS Financial Engineering",gpa:"79+",ielts:"托福85+",note:"量化金融，韩国金融市场直通",dl:"4月",sop:true,rec:2},
  ],
  "高丽大学":[
    {prog:"MS Computer Science (英文方向)",gpa:"79+",ielts:"托福85+",note:"SKY之一，英文CS项目，校友网络广",dl:"5月",sop:true,rec:2},
    {prog:"MS Business Administration",gpa:"78+",ielts:"托福85+",note:"商科SKY，国际化程度高，商学院认可",dl:"4月",sop:true,rec:2},
  ],
  "浦项科技大学":[
    {prog:"MS Computer Science & Engineering",gpa:"82+",ielts:"托福88+",note:"小而精，研究导向极强，POSCO产业资源",dl:"4月",sop:true,rec:3},
    {prog:"MS Artificial Intelligence",gpa:"82+",ielts:"托福88+",note:"AI方向，与三星/POSCO产业合作",dl:"4月",sop:true,rec:3},
  ],
  "慕尼黑工业大学":[
    {prog:"MSc Informatics (英文)",gpa:"80+",ielts:"7.0",note:"德国CS顶尖，公立免学费，APS审核必须提前，申请竞争激烈",dl:"5月31日",sop:false,rec:2},
    {prog:"MSc Data Engineering & Analytics",gpa:"80+",ielts:"7.0",note:"数据工程实践，就业导向，与宝马/西门子合作",dl:"5月31日",sop:false,rec:2},
    {prog:"MSc Finance & Information Management",gpa:"79+",ielts:"7.0",note:"金融+信息管理交叉，TUM School of Management",dl:"5月",sop:false,rec:2},
  ],
  "慕尼黑大学":[
    {prog:"MSc Computer Science (英文)",gpa:"79+",ielts:"7.0",note:"LMU综合名校，公立免学费，慕尼黑就业圈好",dl:"5月31日",sop:false,rec:2},
    {prog:"MSc Data Science (与TUM联合)",gpa:"79+",ielts:"7.0",note:"欧陆顶尖数据项目，联合两所顶校资源",dl:"5月31日",sop:false,rec:2},
  ],
  "海德堡大学":[
    {prog:"MSc Data & Computer Science",gpa:"78+",ielts:"7.0",note:"德国最古老大学，公立免学费，偏学术",dl:"5月15日",sop:false,rec:2},
    {prog:"MSc Mathematics in Data & Computational Sciences",gpa:"79+",ielts:"7.0",note:"纯数学+计算，数学背景强势者适合",dl:"5月15日",sop:false,rec:2},
  ],
  "卡尔斯鲁厄理工":[
    {prog:"MSc Computer Science (英文)",gpa:"80+",ielts:"7.0",note:"KIT德国理工顶尖，公立免学费，招生名额有限",dl:"5月15日",sop:false,rec:2},
    {prog:"MSc Electrical Engineering & Information Technology",gpa:"79+",ielts:"6.5",note:"工程顶尖，芯片/嵌入式/通信方向，与西门子/博世合作",dl:"5月15日",sop:false,rec:2},
  ],
  "亚琛工业大学":[
    {prog:"MSc Media Informatics / Data Science",gpa:"79+",ielts:"6.5",note:"RWTH机械/电气著名，CS较新，公立免学费",dl:"5月31日",sop:false,rec:2},
    {prog:"MSc Electrical Engineering",gpa:"79+",ielts:"6.5",note:"与西门子/宝马产业联系极紧密，工程强",dl:"5月31日",sop:false,rec:2},
  ],
  "柏林自由大学":[
    {prog:"MSc Computer Science",gpa:"77+",ielts:"6.5",note:"柏林名校，公立免学费，人文社科氛围也浓",dl:"5月15日",sop:false,rec:2},
    {prog:"MSc Mathematics",gpa:"78+",ielts:"6.5",note:"纯数学方向，学术氛围好，柏林生活成本低",dl:"5月15日",sop:false,rec:2},
  ],
  "奥克兰大学":[
    {prog:"Master of Information Technology",gpa:"72+",ielts:"6.5",note:"新西兰第一，PSW毕业工签友好，移民加分路径",dl:"滚动",sop:false,rec:2},
    {prog:"Master of Data Science",gpa:"71+",ielts:"6.5",note:"跨背景可申，奥克兰生活成本低于悉尼",dl:"滚动",sop:false,rec:2},
    {prog:"Master of Finance",gpa:"71+",ielts:"6.5",note:"双非70+可申，移民加分，新西兰就业小而精",dl:"滚动",sop:false,rec:2},
  ],
  "马来亚大学":[
    {prog:"MSc Computer Science",gpa:"72+",ielts:"6.0",note:"马来西亚第一，年学费约1.5万人民币，性价比极高",dl:"4月30日",sop:false,rec:2},
    {prog:"MSc Data Science",gpa:"71+",ielts:"6.0",note:"吉隆坡华人友好，费用极低，生活便利",dl:"4月30日",sop:false,rec:2},
  ],
  "马来西亚国民大学":[
    {prog:"MSc Computer Science",gpa:"69+",ielts:"6.0",note:"申请友好，费用极低，双非68+可申",dl:"5月31日",sop:false,rec:2},
    {prog:"MSc Data Science",gpa:"68+",ielts:"6.0",note:"性价比最高选项之一，入门门槛低",dl:"5月31日",sop:false,rec:2},
  ],
  "巴黎文理研究大学":[
    {prog:"MSc AI & Visual Computing (CentraleSupélec/PSL)",gpa:"83+",ielts:"7.0",note:"顶级学术联合体，需强研究背景，法国精英教育体系",dl:"3月31日",sop:true,rec:2},
    {prog:"MSc Mathematics in Machine Learning (ENS)",gpa:"85+",ielts:"7.0",note:"法国数学精英，极高门槛，偏理论研究",dl:"3月",sop:true,rec:2},
  ],
  "索邦大学":[
    {prog:"MSc Computer Science (STL方向)",gpa:"79+",ielts:"6.5",note:"法语为主，少量英文课，巴黎地段好，学费极低",dl:"4月30日",sop:true,rec:2},
    {prog:"MSc Mathematics",gpa:"80+",ielts:"6.5",note:"纯数学传统深厚，法语项目为主，须有法语基础",dl:"4月30日",sop:false,rec:2},
  ],
  "巴黎综合理工学院":[
    {prog:"MSc Mathematics & AI (IP Paris)",gpa:"83+",ielts:"7.0",note:"法国工程精英联盟，偏理论，大类录取竞争激烈",dl:"3月15日",sop:true,rec:2},
    {prog:"MSc Cybersecurity",gpa:"82+",ielts:"7.0",note:"网络安全，法国国防/科技行业资源",dl:"3月15日",sop:true,rec:2},
  ],
  "巴黎-萨克雷大学":[
    {prog:"MSc Mathematics (M2方向)",gpa:"83+",ielts:"7.0",note:"法国理学顶尖，纯数/应数方向，学术浓厚",dl:"3月31日",sop:true,rec:2},
    {prog:"MSc Computer Science / AI",gpa:"82+",ielts:"7.0",note:"研究导向，含Orsay/CentraleSupélec资源",dl:"3月31日",sop:true,rec:2},
  ],
  "皇家理工学院":[
    {prog:"MSc Machine Learning",gpa:"79+",ielts:"6.5",note:"瑞典理工顶尖，AI/ML欧陆强项，与Spotify/Ericsson合作",dl:"1月15日",sop:false,rec:2},
    {prog:"MSc Computer Science",gpa:"78+",ielts:"6.5",note:"北欧创新氛围，斯德哥尔摩科技圈资源好",dl:"1月15日",sop:false,rec:2},
    {prog:"MSc Data Science",gpa:"78+",ielts:"6.5",note:"跨学科，北欧科技圈入口，非EU需学费约13万/年",dl:"1月15日",sop:false,rec:2},
  ],
  "隆德大学":[
    {prog:"MSc Computer Science",gpa:"77+",ielts:"6.5",note:"瑞典综合名校，英文项目多，生活成本低于斯德哥尔摩",dl:"1月15日",sop:false,rec:2},
    {prog:"MSc Data Science",gpa:"76+",ielts:"6.5",note:"跨背景可申，北欧生活质量高",dl:"1月15日",sop:false,rec:2},
    {prog:"MSc Finance (LUSEM)",gpa:"77+",ielts:"7.0",note:"北欧金融，LUSEM商学院认可",dl:"1月15日",sop:true,rec:2},
  ],
  "鲁汶大学":[
    {prog:"MSc Artificial Intelligence",gpa:"80+",ielts:"7.0",note:"比利时顶尖，欧洲AI项目强，欧盟机构实习机会多",dl:"3月1日",sop:true,rec:2},
    {prog:"MSc Computer Science",gpa:"79+",ielts:"7.0",note:"工程+CS，欧盟地理中心，英法双语环境",dl:"3月1日",sop:false,rec:2},
    {prog:"MSc Statistics & Data Science",gpa:"79+",ielts:"7.0",note:"统计/数据，偏学术，学费低",dl:"3月1日",sop:false,rec:2},
  ],
  "哥本哈根大学":[
    {prog:"MSc Computer Science",gpa:"78+",ielts:"6.5",note:"北欧顶尖，幸福感高，英文项目多，生活成本较高",dl:"3月15日",sop:false,rec:2},
    {prog:"MSc Data Science",gpa:"77+",ielts:"6.5",note:"跨背景可申，北欧生活质量高",dl:"3月15日",sop:false,rec:2},
    {prog:"MSc Finance",gpa:"77+",ielts:"7.0",note:"北欧金融，哥本哈根金融圈",dl:"3月15日",sop:true,rec:2},
  ],
  "丹麦技术大学":[
    {prog:"MSc Computer Science & Engineering",gpa:"78+",ielts:"6.5",note:"北欧顶尖理工，可再生能源/工程强，企业合作项目丰富",dl:"3月15日",sop:false,rec:2},
    {prog:"MSc Data Science & Technology",gpa:"77+",ielts:"6.5",note:"产业联系紧密，技术应用导向",dl:"3月15日",sop:false,rec:2},
  ],
  "乌普萨拉大学":[
    {prog:"MSc Computer Science",gpa:"77+",ielts:"6.5",note:"北欧最古老大学，英文项目多，学术氛围浓厚",dl:"1月15日",sop:false,rec:2},
    {prog:"MSc Data Science",gpa:"76+",ielts:"6.5",note:"跨背景可申，北欧生活，乌普萨拉小城宁静",dl:"1月15日",sop:false,rec:2},
  ],
};

const SCHOOL_VOICES={
  "牛津大学":{life:"Tutorial制一对一导师强度高，须提前预习；牛津小城宁静，伦敦2h可达补足娱乐与实习资源。",rate:4.6,xhs:"牛津大学 留学生活",bili:"牛津大学 硕士 经验"},
  "剑桥大学":{life:"学院制归属感极强，同院同学关系紧密；剑桥城小但氛围纯粹，骑行是主要出行方式。",rate:4.6,xhs:"剑桥大学 留学日记",bili:"剑桥大学 留学 真实感受"},
  "帝国理工学院":{life:"理工氛围极浓、项目作业节奏快，南肯辛顿位于伦敦精华地带，实习触手可及。",rate:4.3,xhs:"帝国理工 留学 日常",bili:"帝国理工 硕士 留学经历"},
  "伦敦大学学院":{life:"布鲁姆斯伯里地段极佳，学科多元；伦敦华人社区成熟，各类实习招聘资源丰富。",rate:4.2,xhs:"UCL 留学生活 伦敦",bili:"伦敦大学学院 留学 体验"},
  "爱丁堡大学":{life:"古城氛围浓厚、生活成本低于伦敦；华人社区活跃，Fringe艺术节体验独特。",rate:4.3,xhs:"爱丁堡大学 留学日常",bili:"爱丁堡大学 留学 经验分享"},
  "伦敦国王学院":{life:"泰晤士河畔多校区，医学/法学/人文氛围浓；伦敦资源多，学费和租金压力需提前计划。",rate:4.1,xhs:"KCL 伦敦国王学院 留学",bili:"伦敦国王学院 硕士 留学"},
  "曼彻斯特大学":{life:"英国第二大学生城，华人多、租金低于伦敦一半；北部科技和金融走廊就业机会好。",rate:4.0,xhs:"曼彻斯特大学 留学生活",bili:"曼彻斯特大学 留学 经验"},
  "布里斯托大学":{life:"科技创业氛围新兴，城市年轻活力；生活成本低、户外运动好，半小时可到海滩。",rate:3.9,xhs:"布里斯托大学 留学",bili:"布里斯托 留学 日常"},
  "格拉斯哥大学":{life:"苏格兰第一大城市，艺术氛围浓厚；租金全英最低之一，生活节奏轻松。",rate:3.9,xhs:"格拉斯哥大学 留学",bili:"格拉斯哥大学 留学生活"},
  "伦敦政治经济学院":{life:"商科/社科圣殿，课业量极大；校园小而精，伦敦CBD核心区实习触手可及。",rate:4.4,xhs:"LSE 伦敦政经 留学",bili:"伦敦政经 LSE 硕士 经验"},
  "华威大学":{life:"Coventry校园园区感强，金融数学/商科优势明显；离伦敦1h但娱乐资源有限。",rate:4.0,xhs:"华威大学 留学日常",bili:"华威大学 硕士 留学经验"},
  "杜伦大学":{life:"学院制精英氛围，北英格兰风景优美；节奏慢、适合喜欢安静生活的学生。",rate:4.1,xhs:"杜伦大学 留学生活",bili:"杜伦大学 留学 经验分享"},
  "伯明翰大学":{life:"英国第二大城市，多元文化华人多；中部工业走廊就业延伸方便。",rate:3.8,xhs:"伯明翰大学 留学",bili:"伯明翰大学 留学 日常"},
  "利兹大学":{life:"北部学生城，夜生活丰富；学业压力中等，租金比伦敦便宜一半以上。",rate:3.9,xhs:"利兹大学 留学生活",bili:"利兹大学 留学 体验"},
  "南安普顿大学":{life:"工程/IT/电子强项，校园整洁；南部港口城市，离伦敦1h，科研资源扎实。",rate:3.8,xhs:"南安普顿大学 留学",bili:"南安普顿大学 硕士 留学"},
  "谢菲尔德大学":{life:"性价比高的北部城市，学生友好；工程/材料出名，就业偏工业方向，租金低。",rate:3.9,xhs:"谢菲尔德大学 留学",bili:"谢菲尔德大学 留学 经验"},
  "诺丁汉大学":{life:"中部城市，校园开阔；制药/工程/商科实力均衡，生活成本适中。",rate:3.8,xhs:"诺丁汉大学 留学",bili:"诺丁汉大学 留学 日常"},
  "伦敦玛丽女王大学":{life:"东伦敦多元文化，学费相对低；法律/医学/工程性价比较高，地铁直达市中心。",rate:3.7,xhs:"玛丽女王大学 伦敦 留学",bili:"伦敦玛丽女王大学 留学"},
  "圣安德鲁斯大学":{life:"苏格兰海边小城，校园景色绝美；节奏慢，适合沉浸学习，离爱丁堡1h。",rate:4.1,xhs:"圣安德鲁斯大学 留学",bili:"圣安德鲁斯 留学 体验"},
  "麻省理工学院":{life:"全球顶尖理工氛围，活动密集；波士顿创业/科研生态一流，压力与回报同等顶级。",rate:4.8,xhs:"MIT 麻省理工 留学",bili:"麻省理工学院 留学 经历"},
  "斯坦福大学":{life:"硅谷创业文化全浸润，气候绝佳；校园极大需骑车，创业圈和风投校友触手可及。",rate:4.8,xhs:"斯坦福大学 留学日常",bili:"斯坦福大学 留学 生活"},
  "哈佛大学":{life:"顶级校友网络和资源，压力真实存在；波士顿多元国际，节奏快。",rate:4.7,xhs:"哈佛大学 留学 体验",bili:"哈佛大学 留学生活 经验"},
  "加州理工学院":{life:"顶尖科研氛围，研究生人数极少；帕萨迪纳小城安静，30分钟进洛杉矶。",rate:4.5,xhs:"加州理工 留学",bili:"加州理工学院 留学 经验"},
  "哥伦比亚大学":{life:"纽约城市体验一流，实习机会顶级；校园空间小但曼哈顿资源无穷。",rate:4.4,xhs:"哥伦比亚大学 留学 纽约",bili:"哥伦比亚大学 留学 日常"},
  "加州大学伯克利":{life:"旧金山湾区绝佳位置，公立高性价比；校园多元开放，科技圈与学术圈双重资源。",rate:4.3,xhs:"UC伯克利 留学生活",bili:"加州大学伯克利 留学 经验"},
  "康奈尔大学":{life:"伊萨卡小城封闭，冬天很冷；工程/农科/酒管等专业特色极鲜明，跨专业生态独特。",rate:4.2,xhs:"康奈尔大学 留学",bili:"康奈尔大学 留学 经历"},
  "密歇根大学安娜堡":{life:"大学城氛围浓厚，学生生活丰富；工程/商科/医学实力全面，Wolverines体育文化强。",rate:4.2,xhs:"密歇根大学 留学",bili:"密歇根大学安娜堡 留学"},
  "纽约大学":{life:"嵌入纽约城市中心，无传统校园感；地理优势换来的实习和人脉机会无可比拟。",rate:4.1,xhs:"纽约大学 NYU 留学",bili:"纽约大学 留学 真实体验"},
  "普林斯顿大学":{life:"小城宁静，精英氛围浓厚；本科为主、硕博名额少但含金量极高，离纽约1h。",rate:4.5,xhs:"普林斯顿大学 留学",bili:"普林斯顿大学 留学 经验"},
  "耶鲁大学":{life:"纽黑文城市资源有限，但耶鲁校园本身极美；法学/医学/人文全球顶尖。",rate:4.5,xhs:"耶鲁大学 留学生活",bili:"耶鲁大学 留学 日常"},
  "芝加哥大学":{life:"芝加哥城市体验好，冬天极冷；经济/商科/人文极顶尖，学术文化严肃认真。",rate:4.4,xhs:"芝加哥大学 留学",bili:"芝加哥大学 留学 经验分享"},
  "宾夕法尼亚大学":{life:"费城金融区地段好，沃顿商学院资源强；城市活力适中，Ivy氛围与实用主义并存。",rate:4.3,xhs:"宾夕法尼亚大学 沃顿 留学",bili:"宾大 留学 生活"},
  "约翰霍普金斯大学":{life:"巴尔的摩安全感一般，但医学/公卫/国际关系一流；科研资源顶级，论文产出超强。",rate:4.1,xhs:"约翰霍普金斯 留学",bili:"约翰霍普金斯大学 留学 体验"},
  "加州大学洛杉矶":{life:"洛杉矶阳光海滩文化，娱乐业人脉独特；公立高性价比，华人社区极成熟。",rate:4.2,xhs:"UCLA 洛杉矶 留学",bili:"加州大学洛杉矶 留学 日常"},
  "杜克大学":{life:"达勒姆小城，校园极美宏大；医学/商科/政策资源一流，学术与体育氛围并重。",rate:4.3,xhs:"杜克大学 留学",bili:"杜克大学 留学 经验"},
  "卡内基梅隆大学":{life:"匹兹堡城市复兴，CS/AI绝对全球顶尖；高强度但就业回报极高，招聘会选择多。",rate:4.4,xhs:"CMU 卡内基梅隆 留学",bili:"卡内基梅隆大学 留学 经历"},
  "佐治亚理工学院":{life:"亚特兰大多元文化，工程/CS性价比高；校招非常强，Coca-Cola/AT&T/Delta等就业近。",rate:4.2,xhs:"佐治亚理工 留学",bili:"佐治亚理工学院 留学 经验"},
  "伊利诺伊大学香槟":{life:"大学城安静、华人多；CS/工程全球顶尖，生活成本低，STEM OPT衔接好。",rate:4.1,xhs:"伊利诺伊大学 UIUC 留学",bili:"伊利诺伊大学香槟 留学"},
  "德州大学奥斯汀":{life:"奥斯汀科技圈崛起，Tesla/Dell/Apple总部近；南部气候好，Live Music之都文化丰富。",rate:4.0,xhs:"UT Austin 德州大学 留学",bili:"德州大学奥斯汀 留学 生活"},
  "加州大学圣地亚哥":{life:"圣地亚哥天气绝佳，海滩15分钟；神经科学/计算机/工程强，生活节奏比湾区轻松。",rate:4.1,xhs:"UCSD 圣地亚哥 留学",bili:"加州大学圣地亚哥 留学"},
  "华盛顿大学":{life:"西雅图科技走廊，微软/亚马逊校招活跃；公立高性价比，雨天多需适应气候。",rate:4.1,xhs:"华盛顿大学 西雅图 留学",bili:"华盛顿大学 留学 经验"},
  "西北大学":{life:"埃文斯顿安静小城，离芝加哥30min；新闻/商科/法学名校，Kellogg商学院资源顶尖。",rate:4.2,xhs:"西北大学 留学",bili:"西北大学 Northwestern 留学"},
  "布朗大学":{life:"普罗维登斯城，Open Curriculum自由学制独特；精英但不死板，跨学科氛围浓。",rate:4.2,xhs:"布朗大学 留学",bili:"布朗大学 留学 生活"},
  "波士顿大学":{life:"波士顿大学城生态丰富，资源选择多；性价比比周边哈佛MIT好，城市实习机会强。",rate:4.0,xhs:"波士顿大学 BU 留学",bili:"波士顿大学 留学 经验"},
  "普渡大学":{life:"西拉法叶大学城，工程/农科/航空顶尖；华人多，生活成本极低，STEM就业回报高。",rate:3.9,xhs:"普渡大学 留学",bili:"普渡大学 留学 日常"},
  "威斯康星大学麦迪逊":{life:"麦迪逊湖城美丽，公立实力强；研究型氛围浓，博士多，学术项目资源丰富。",rate:3.9,xhs:"威斯康星大学麦迪逊 留学",bili:"威斯康星大学 留学"},
  "加州大学戴维斯":{life:"戴维斯小城安静，骑行文化独特；农学/生命科学/法学特色，气候温和适合生活。",rate:3.8,xhs:"UC Davis 戴维斯 留学",bili:"加州大学戴维斯 留学"},
  "莱斯大学":{life:"休斯顿航天/医疗中心地段，小而精；能源行业人脉强，宿舍餐饮全美最好之一。",rate:4.1,xhs:"莱斯大学 留学",bili:"莱斯大学 Rice 留学 经验"},
  "墨尔本大学":{life:"澳洲综合实力最强，Parkville学区生活完善；就业和研究均衡，华人社区成熟。",rate:4.4,xhs:"墨尔本大学 留学 日常",bili:"墨尔本大学 留学 经验"},
  "悉尼大学":{life:"悉尼港湾旁，校园最美；商科/法学/建筑声誉顶尖，市中心地段实习便利。",rate:4.3,xhs:"悉尼大学 留学生活",bili:"悉尼大学 留学 真实体验"},
  "新南威尔士大学":{life:"肯辛顿校区近悉尼CBD，工程/商科强；澳洲华人最多的学校，生活适应最快。",rate:4.2,xhs:"新南威尔士大学 UNSW 留学",bili:"新南威尔士大学 留学 经历"},
  "莫纳什大学":{life:"墨尔本科技/医药实力强；克莱顿校区偏郊区但学术氛围足，多校区选择灵活。",rate:4.0,xhs:"莫纳什大学 留学",bili:"莫纳什大学 Monash 留学"},
  "昆士兰大学":{life:"布里斯班气候绝佳，河边校园超美；医学/农科/工程特色，生活节奏比悉尼轻松。",rate:4.1,xhs:"昆士兰大学 留学 生活",bili:"昆士兰大学 UQ 留学"},
  "澳大利亚国立大学":{life:"首都堪培拉政治色彩浓，校园封闭宁静；政策/外交/科研一流，研究环境顶尖。",rate:4.0,xhs:"澳大利亚国立大学 ANU 留学",bili:"澳国立大学 留学 经验"},
  "西澳大学":{life:"珀斯西岸独立城市，海边生活无敌；矿业/工程就业强，城市悠闲气候完美。",rate:3.9,xhs:"西澳大学 珀斯 留学",bili:"西澳大学 UWA 留学"},
  "阿德莱德大学":{life:"阿德莱德慢节奏小城，租金低；偏远PR移民加分，葡萄酒文化和美食体验好。",rate:3.8,xhs:"阿德莱德大学 留学",bili:"阿德莱德大学 留学 日常"},
  "悉尼科技大学":{life:"悉尼CBD内，实践型课程紧贴就业；工业界合作项目多，职业发展导向明确。",rate:3.8,xhs:"悉尼科技大学 UTS 留学",bili:"悉尼科技大学 留学 经验"},
  "皇家墨尔本理工":{life:"墨尔本城市中心，设计/创意/IT实践性强；就业向本地企业对接，城市生活便利。",rate:3.7,xhs:"RMIT 皇家墨尔本理工 留学",bili:"皇家墨尔本理工 留学"},
  "多伦多大学":{life:"多伦多城市文化多元，机会多；校园分散在市区，华人社区成熟，体验真正城市大学。",rate:4.3,xhs:"多伦多大学 留学 生活",bili:"多伦多大学 UofT 留学 经验"},
  "英属哥伦比亚大学":{life:"温哥华山海之间，UBC校园最美；气候温和、华人多，就业选择相对有限需主动开拓。",rate:4.2,xhs:"UBC 英属哥伦比亚大学 留学",bili:"英属哥伦比亚大学 留学 日常"},
  "麦吉尔大学":{life:"蒙特利尔双语城市，欧洲氛围加拿大最浓；文化艺术夜生活丰富，冬天极冷要做好准备。",rate:4.1,xhs:"麦吉尔大学 留学 蒙特利尔",bili:"麦吉尔大学 McGill 留学"},
  "阿尔伯塔大学":{life:"埃德蒙顿能源城，冬天最冷之一；油气/工程就业强，PR路径顺畅是核心吸引力。",rate:3.8,xhs:"阿尔伯塔大学 留学",bili:"阿尔伯塔大学 留学 生活"},
  "滑铁卢大学":{life:"co-op项目是北美CS就业直通车；滑铁卢小城娱乐有限但毕业生薪资和就业率全加拿大顶尖。",rate:4.3,xhs:"滑铁卢大学 留学",bili:"滑铁卢大学 Waterloo 留学 co-op"},
  "新加坡国立大学":{life:"全亚洲最强学术竞争，一开学就要找实习；肯特岗校园环境好，EP门槛高但就业回报可观。",rate:4.4,xhs:"NUS 新加坡国立大学 留学",bili:"新加坡国立大学 留学 真实体验"},
  "南洋理工大学":{life:"裕廊学区，校园开阔但位置偏；工程/商科实力好，华人多生活适应快。",rate:4.2,xhs:"NTU 南洋理工大学 留学",bili:"南洋理工大学 留学 经验"},
  "香港大学":{life:"港岛薄扶林，校园景色好但地形陡；金融/法律/医学顶尖，节奏快压力大。",rate:4.3,xhs:"香港大学 HKU 留学",bili:"香港大学 留学 日常"},
  "香港中文大学":{life:"沙田马鞍山山脚，大学站直达；研究型氛围浓，风景好，生活节奏相对舒适。",rate:4.2,xhs:"香港中文大学 留学",bili:"香港中文大学 CUHK 留学 经验"},
  "香港科技大学":{life:"清水湾半山校园，科研氛围极浓；IT/商科/工程一流，离市区远但宿舍条件好。",rate:4.3,xhs:"香港科技大学 HKUST 留学",bili:"香港科技大学 留学 生活"},
  "香港城市大学":{life:"九龙中心位置便利；商科/法律/数据科学实践强，IANG工签后找工作有优势。",rate:4.0,xhs:"香港城市大学 留学",bili:"香港城市大学 CityU 留学"},
  "香港理工大学":{life:"红磡站直达，交通最便利；设计/酒旅/工程实践导向强，内地跨境机会多。",rate:3.9,xhs:"香港理工大学 PolyU 留学",bili:"香港理工大学 留学 经验"},
  "苏黎世联邦理工":{life:"苏黎世城市高效美丽，课业极硬核；全球顶尖理工，留下来薪资顶尖，但压力也顶级。",rate:4.7,xhs:"ETH 苏黎世联邦理工 留学",bili:"苏黎世联邦理工 ETH 留学 经历"},
  "洛桑联邦理工":{life:"日内瓦湖边校园，景色无敌；法语区氛围，工程/材料/数字科学一流，生活节奏好。",rate:4.5,xhs:"EPFL 洛桑联邦理工 留学",bili:"洛桑联邦理工 EPFL 留学"},
  "苏黎世大学":{life:"与ETH相邻共享资源，医学/法学/人文实力强；苏黎世生活费高但质量一流。",rate:4.3,xhs:"苏黎世大学 留学 瑞士",bili:"苏黎世大学 留学 经验"},
  "阿姆斯特丹大学":{life:"运河城中心，自行车文化，国际化氛围浓；住房极紧张是最大挑战，提早找房。",rate:4.1,xhs:"阿姆斯特丹大学 留学",bili:"阿姆斯特丹大学 留学 日常"},
  "代尔夫特理工大学":{life:"代尔夫特小城，工程师文化精粹，世界顶尖理工；建筑/机械/CS实力顶级，生活简单纯粹。",rate:4.3,xhs:"代尔夫特理工 TU Delft 留学",bili:"代尔夫特理工大学 留学"},
  "乌得勒支大学":{life:"荷兰第四大城市，生活节奏轻松；医学/生命科学/人文综合强，城市性价比好。",rate:4.0,xhs:"乌得勒支大学 留学",bili:"乌得勒支大学 Utrecht 留学"},
  "莱顿大学":{life:"法学/人文/历史名校，莱顿小城慢节奏；欧洲最古老大学之一，学术氛围极纯粹。",rate:4.1,xhs:"莱顿大学 留学 荷兰",bili:"莱顿大学 Leiden 留学"},
  "东京大学":{life:"东京城市资源无敌，本乡/驹场校区位置好；竞争激烈但奖学金机会多，体验日本顶尖文化。",rate:4.5,xhs:"东京大学 留学 日本",bili:"东京大学 留学 真实体验"},
  "京都大学":{life:"古都氛围绝美，研究型最纯粹；MEXT奖学金路线好，节奏慢但学术深度无与伦比。",rate:4.4,xhs:"京都大学 留学 日本",bili:"京都大学 留学 生活"},
  "东京工业大学":{life:"东京工科顶尖，大冈山/田町校区便利；理工研究导向强，日英双轨项目都有。",rate:4.2,xhs:"东京工业大学 留学",bili:"东工大 留学 经验"},
  "大阪大学":{life:"大阪美食之都，豊中/吹田校区安静；理工+医学实力均衡，生活成本低于东京。",rate:4.1,xhs:"大阪大学 留学 日本",bili:"大阪大学 留学 日常"},
  "东北大学":{life:"仙台小城，日本东北最顶尖研究型；安静学术氛围，生活成本极低，科研环境纯粹。",rate:4.0,xhs:"东北大学 仙台 留学 日本",bili:"东北大学 留学 经验"},
  "首尔国立大学":{life:"首尔冠岳校区，韩国最顶尖，就业第一名校；需要韩语才能深耕，SKY光环在韩国无敌。",rate:4.4,xhs:"首尔国立大学 留学 韩国",bili:"首尔国立大学 SNU 留学"},
  "延世大学":{life:"新村站位置好，国际化程度高；商科/医学/传播顶尖，国际项目英文授课多。",rate:4.3,xhs:"延世大学 留学 首尔",bili:"延世大学 Yonsei 留学 经验"},
  "高丽大学":{life:"传统+现代并存，安암校区热闹；法学/商科/IT强，韩国学生社交文化很活跃。",rate:4.2,xhs:"高丽大学 留学 韩国",bili:"高丽大学 Korea University 留学"},
  "浦项科技大学":{life:"浦项工业城市，MIT式小而精；理工科研顶尖，生活极简但学术一流，奖学金慷慨。",rate:4.1,xhs:"浦项科技大学 POSTECH 留学",bili:"浦项科技大学 留学"},
  "慕尼黑工业大学":{life:"慕尼黑城市生活一流（啤酒节/BMW博物馆近）；工程/CS/商科顶尖，英文项目多。",rate:4.3,xhs:"慕尼黑工业大学 TUM 留学",bili:"慕尼黑工业大学 TUM 留学 经验"},
  "慕尼黑大学":{life:"与TUM比邻，医学/法学/文理综合；德语项目为主，融入感强，慕尼黑城市体验一流。",rate:4.1,xhs:"慕尼黑大学 LMU 留学",bili:"慕尼黑大学 LMU 留学 生活"},
  "海德堡大学":{life:"小城浪漫，欧洲最古老之一；医学/人文/基础科学，学术氛围纯粹，生活成本低。",rate:4.2,xhs:"海德堡大学 留学 德国",bili:"海德堡大学 Heidelberg 留学"},
  "柏林自由大学":{life:"柏林文化之都，创意氛围独特全欧最强；政治学/人文/社科国际化好，夜生活无敌。",rate:3.9,xhs:"柏林自由大学 留学",bili:"柏林自由大学 留学 德国"},
  "卡尔斯鲁厄理工":{life:"南部小城，KIT工程极强；汽车/机械/CS，德国工业走廊核心位置，就业路径清晰。",rate:4.0,xhs:"KIT 卡尔斯鲁厄理工 留学",bili:"卡尔斯鲁厄理工 KIT 留学"},
  "亚琛工业大学":{life:"德比边境小城，RWTH欧洲顶尖理工；工程/制造/机械，直连宝马/戴姆勒/西门子招聘。",rate:4.1,xhs:"亚琛工业大学 RWTH 留学",bili:"亚琛工业大学 留学 德国"},
  "奥克兰大学":{life:"新西兰第一大学城，太平洋多元文化；商科/工程/法学为主，华人多适应快，节奏轻松。",rate:3.9,xhs:"奥克兰大学 新西兰 留学",bili:"奥克兰大学 留学 经验"},
  "马来亚大学":{life:"吉隆坡南部，东南亚综合最强；华语环境，跨国企业实习机会近，整体性价比高。",rate:3.7,xhs:"马来亚大学 留学 吉隆坡",bili:"马来亚大学 UM 留学 经验"},
  "马来西亚国民大学":{life:"班吉校区安静，政府背景研究型；马来文化融合体验，性价比超高适合预算有限。",rate:3.5,xhs:"马来西亚国民大学 留学",bili:"马来西亚国民大学 UKM 留学"},
  "巴黎文理研究大学":{life:"巴黎多点校区，精英聚集地；高师/矿业/ENS等联合体，学术圈人脉顶级。",rate:4.4,xhs:"巴黎PSL 文理研究大学 留学",bili:"PSL大学 巴黎 留学 经验"},
  "索邦大学":{life:"巴黎心脏拉丁区，人文/文学/科学传统深厚；法语深度体验，街区咖啡馆氛围绝佳。",rate:4.2,xhs:"索邦大学 留学 巴黎",bili:"索邦大学 Sorbonne 留学"},
  "巴黎综合理工学院":{life:"帕雷索校区，法国工程师精英文化极强；X文化严苛但就业一流，政商精英人脉独特。",rate:4.5,xhs:"巴黎综合理工 留学 法国",bili:"巴黎综合理工 Polytechnique 留学"},
  "巴黎-萨克雷大学":{life:"巴黎南郊科学新城，科研密度极高；数学/物理/工程全球顶尖科研资源，氛围偏学术。",rate:4.2,xhs:"巴黎萨克雷大学 留学",bili:"巴黎萨克雷大学 留学 经验"},
  "皇家理工学院":{life:"斯德哥尔摩科技圈核心，KTH工程顶尖；Spotify/Klarna校招活跃，北欧工作生活平衡真实。",rate:4.2,xhs:"KTH 皇家理工 瑞典 留学",bili:"KTH 留学 斯德哥尔摩 经验"},
  "隆德大学":{life:"南部小城隆德，瑞典最古老大学；商科/法学/工程，生活节奏舒适，性价比高于斯德哥尔摩。",rate:4.1,xhs:"隆德大学 瑞典 留学",bili:"隆德大学 Lund 留学 经验"},
  "乌普萨拉大学":{life:"北欧最古老大学，乌普萨拉小城宁静；医学/科学/人文历史积淀深，学生社团文化丰富。",rate:4.0,xhs:"乌普萨拉大学 留学 瑞典",bili:"乌普萨拉大学 Uppsala 留学"},
  "鲁汶大学":{life:"鲁汶小城典型欧陆大学城氛围，最古老天主教大学；荷/英双语，生活节奏好性价比高。",rate:4.2,xhs:"鲁汶大学 比利时 留学",bili:"鲁汶大学 KU Leuven 留学 经验"},
  "哥本哈根大学":{life:"北欧最大城市大学，丹麦国宝级；医学/生命科学/人文，城市资源一流，幸福感真实存在。",rate:4.2,xhs:"哥本哈根大学 留学 丹麦",bili:"哥本哈根大学 留学 经验"},
  "丹麦技术大学":{life:"林比小城，DTU工程理工极强；风能/生命/IT走廊，诺和诺德等大企业校招活跃。",rate:4.1,xhs:"DTU 丹麦技术大学 留学",bili:"丹麦技术大学 DTU 留学"},
  "清华大学":{life:"海淀学区学术氛围极强，理工科顶尖；苏世民书院国际项目一流，体验中国最顶尖大学。",rate:4.5,xhs:"清华大学 国际生 留学",bili:"清华大学 留学生 生活 体验"},
  "北京大学":{life:"燕园传统人文底蕴深厚，北京城市资源无限；本科重、研究生节奏更自由，氛围百年名校。",rate:4.4,xhs:"北京大学 国际生 留学",bili:"北京大学 留学生 生活"},
  "复旦大学":{life:"上海城市资源优越，光华校区历史感深厚；文理综合，国际实习机会多，对接全球金融科技圈。",rate:4.3,xhs:"复旦大学 国际生 留学",bili:"复旦大学 留学生 日常"},
  "上海交通大学":{life:"闵行工科园区开阔，徐汇医学院城市感强；工程/医学/金融与企业联系紧密，实习资源好。",rate:4.3,xhs:"上海交通大学 国际生 留学",bili:"上海交通大学 留学生 体验"},
  "浙江大学":{life:"杭州互联网生态一流，阿里/字节/网易招聘近；紫金港校区现代开阔，创业氛围浓厚。",rate:4.2,xhs:"浙江大学 国际生 留学",bili:"浙江大学 留学生 生活"},
  "南京大学":{life:"南京人文古城氛围浓，鼓楼+仙林双校区；天文/地学/化学研究顶尖，城市历史体验独特。",rate:4.1,xhs:"南京大学 国际生 留学",bili:"南京大学 留学生 日常"},
  "中国科学技术大学":{life:"合肥科学岛，量子/物理/AI前沿研究；强烈研究型文化，学术纯粹，学费和生活成本极低。",rate:4.2,xhs:"中科大 国际生 留学 合肥",bili:"中国科学技术大学 留学生"},
};

/* 各行业学生评价 */
const INDUSTRY_REVIEWS={
  uk:[
    {sec:"💰 金融/咨询",rate:5,note:"伦敦金融城全球TOP3，投行/四大实习名额多，LSE/IC/牛剑背景最吃香"},
    {sec:"💻 科技/AI",rate:4,note:"DeepMind/ARM/Wayve在英，Graduate Route工签友好，工资不及硅谷"},
    {sec:"🏥 制药/生命科学",rate:4,note:"阿斯利康/GSK总部在英，制药就业好；NHS正式岗对国际生有限制"},
    {sec:"🎨 创意/传媒",rate:3,note:"伦敦是欧洲创意中心，BBC/广告公司机会有，但工资偏低"},
    {sec:"🏛️ 政策/NGO",rate:3,note:"英国智库/国际机构有机会，政府职位大多需PR或英国公民身份"},
  ],
  us:[
    {sec:"💻 科技/AI",rate:5,note:"湾区+西雅图FAANG密度无敌，STEM OPT 3年是关键，CMU/斯坦福/MIT最直接"},
    {sec:"💰 金融/投行",rate:5,note:"纽约华尔街+三大咨询，全球最高薪资，沃顿/哥大/芝大商科背景竞争激烈"},
    {sec:"🔬 学术/科研",rate:5,note:"全球科研资金+论文引用第一，科研就业生态无出其右，适合走学术路线"},
    {sec:"🏥 生物/医疗",rate:4,note:"波士顿/圣地亚哥生物科技走廊，生命科学就业机会强，博士后需求大"},
    {sec:"🏭 制造/能源",rate:3,note:"德州能源行业有机会，H-1B不确定性使制造业外籍就业有压力"},
  ],
  au:[
    {sec:"🏥 医疗/护理",rate:5,note:"医护PR最快，技术移民需求量大，薪资稳定，是移民最顺畅的职业路径"},
    {sec:"💻 科技/IT",rate:4,note:"悉尼/墨尔本科技创业活跃，485工签让找工作有充裕时间，移民友好"},
    {sec:"⛏️ 矿业/工程",rate:4,note:"西澳矿业收入一流，偏远补贴+PR加分，愿意去的话回报非常高"},
    {sec:"📊 金融/会计",rate:3,note:"澳洲四大有机会，CPA/CA认证路径清晰，工资低于美国同职位"},
    {sec:"🌿 农食品/环境",rate:3,note:"阿德莱德/昆士兰农食品机会，但对口需要特定专业背景"},
  ],
  ca:[
    {sec:"💻 科技",rate:5,note:"多伦多/滑铁卢走廊+温哥华北境，Amazon/微软/Google分部活跃，PGWP好用"},
    {sec:"💰 金融",rate:4,note:"多伦多金融城，五大银行总部，PE/VC机会稳健，工资低于纽约但生活质量好"},
    {sec:"⛽ 能源/资源",rate:4,note:"卡尔加里油气收入极高，移民PR路径顺畅，冬天极冷是代价"},
    {sec:"🏥 医疗",rate:3,note:"医疗系统封闭，国际学历认证复杂，改行成本高，做研究路线更现实"},
    {sec:"🤖 AI/数据",rate:4,note:"多伦多是全球AI研究中心，向量所/MaRS创业生态，AI岗位需求旺盛"},
  ],
  sg:[
    {sec:"💰 金融/投行",rate:5,note:"亚洲金融枢纽，高盛/摩根亚洲总部，EP薪资门槛高但薪酬也相应高"},
    {sec:"💻 科技",rate:4,note:"Google/Meta/微软亚太总部，英文岗多，是进东南亚科技圈的最佳跳板"},
    {sec:"🌍 国际贸易",rate:4,note:"贸易/物流/供应链枢纽，覆盖东南亚，中英双语优势大"},
    {sec:"🏥 制药/生科",rate:3,note:"辉瑞/阿斯利康亚洲有分部，规模小于欧美，研究职位有限"},
    {sec:"🏛️ 咨询",rate:3,note:"麦肯锡/BCG/贝恩新加坡办公室，区域战略咨询有机会，竞争激烈"},
  ],
  hk:[
    {sec:"💰 金融/资本市场",rate:5,note:"中国资本市场门户，PE/VC/投行机会独特，中英粤三语优势极大"},
    {sec:"🌏 跨境/贸易",rate:4,note:"香港传统贸易优势，跨境内地市场是独特机遇，IANG工签后找工作顺畅"},
    {sec:"💻 金融科技",rate:4,note:"Fintech新兴发展，科技+金融融合机会好，监管相对宽松"},
    {sec:"⚖️ 法律",rate:4,note:"普通法体系+中文双轨，国际所和本地所均有机会，独特法律市场"},
    {sec:"🏥 医疗/制药",rate:3,note:"本地执照要求高，国际生直接医疗从业较难，科研路径更现实"},
  ],
  ch:[
    {sec:"💊 制药/生物",rate:5,note:"诺华/罗氏总部在巴塞尔，全球制药最高薪，留下来长期回报无敌"},
    {sec:"🏦 金融/私银",rate:4,note:"瑞银/嘉盛/私人银行传统，日内瓦独特，但岗位总量有限"},
    {sec:"⚙️ 工程/精密制造",rate:4,note:"ABB/迅达总部，工业精度要求极高，理工背景可观的薪资"},
    {sec:"🔐 国际组织",rate:4,note:"WTO/WHO/红十字日内瓦，国际机构实习就业独一无二机会"},
    {sec:"🍫 食品/消费",rate:3,note:"雀巢总部，钟表珠宝行业；需德语/法语作为就业语言门槛"},
  ],
  nl:[
    {sec:"💻 科技/半导体",rate:5,note:"ASML总部代尔夫特，光刻机全球垄断，高端工程岗位需求旺盛且待遇一流"},
    {sec:"🛢️ 能源/石化",rate:4,note:"壳牌总部海牙，能源转型工程机会强，英文工作岗位多"},
    {sec:"🌱 农食品科技",rate:4,note:"荷兰农业科技全球领先，瓦赫宁根体系，但就业较专业需对口背景"},
    {sec:"🚢 物流/航运",rate:3,note:"鹿特丹港全欧最大，物流/贸易/供应链机会好"},
    {sec:"💰 金融",rate:3,note:"阿姆斯特丹金融中心，ING/ABN AMRO，30%税收优惠吸引外资"},
  ],
  jp:[
    {sec:"🔬 学术/科研",rate:5,note:"诺贝尔奖密度高，基础科学极强，MEXT全奖支持，科研环境最纯粹"},
    {sec:"🤖 科技/机器人",rate:4,note:"索尼/丰田/软银+制造业，英文岗在外企，日语流利则机会倍增"},
    {sec:"🏭 精密制造/工程",rate:4,note:"日本精密制造技术顶尖，职场文化适应成本高但薪资稳定"},
    {sec:"💰 金融",rate:3,note:"东京是亚洲金融副中心，外资银行英文岗有限，规模小于香港/新加坡"},
    {sec:"🎮 文化/游戏",rate:3,note:"任天堂/卡普空等IP，游戏/动画机会独特，日语是绝对门槛"},
  ],
  kr:[
    {sec:"📱 科技/半导体",rate:5,note:"三星/SK海力士/LG，半导体/显示器顶尖，高薪但韩语是必要条件"},
    {sec:"🔬 生命科学",rate:4,note:"韩国生物制药崛起，三星生物/赛乐根，研究型背景机会很好"},
    {sec:"🏭 汽车/重工",rate:4,note:"现代/起亚/HD现代，制造业强，工程背景对口好"},
    {sec:"🎬 文化/内容",rate:3,note:"K-content全球化，从业需要韩语和本地人脉，外籍直接入行难"},
    {sec:"💰 金融",rate:3,note:"四大企业集团金融板块，外籍较难直接进入，研究类岗位相对开放"},
  ],
  de:[
    {sec:"⚙️ 汽车/工程",rate:5,note:"宝马/奔驰/大众/博世，全球工程就业最佳，德语程度直接决定上限"},
    {sec:"🔬 化工/制药",rate:4,note:"拜耳/巴斯夫/默克，化工和制药欧洲最强，德语要好"},
    {sec:"💻 软件/IT",rate:4,note:"SAP/西门子数字化/Deutsche Telekom，IT英文岗位在增加"},
    {sec:"🌱 可再生能源",rate:4,note:"德国能源转型（Energiewende），风能/太阳能工程机会持续好"},
    {sec:"💰 咨询/金融",rate:3,note:"法兰克福欧央行+德银，三大咨询有办公室，总量小于英美"},
  ],
  nz:[
    {sec:"🏥 医疗/护理",rate:4,note:"绿色快速通道医护，PR最快，薪资稳定，Green List职业优先处理"},
    {sec:"⚙️ 工程/建筑",rate:4,note:"基础设施建设需求旺盛，结构/土木工程PR通道顺畅"},
    {sec:"🌿 农业/食品",rate:4,note:"农业科技和食品安全，但非都市机会多，需要接受外省生活"},
    {sec:"💻 IT/数字",rate:3,note:"奥克兰IT圈新兴，机会有限但增长快，移民PR路径配合有吸引力"},
    {sec:"🏨 旅游/酒旅",rate:3,note:"新西兰旅游业恢复中，但薪资偏低，更多作为移民过渡选择"},
  ],
  my:[
    {sec:"💼 跨国企业区域部",rate:4,note:"壳牌/汇丰等跨国公司马来西亚总部，英文岗多，区域覆盖东南亚"},
    {sec:"💻 科技/IT",rate:3,note:"吉隆坡科技创业兴起，TalentCorp吸引海外马来人才计划，薪资低于新加坡"},
    {sec:"🏗️ 工程/制造",rate:3,note:"马来西亚制造业基地，工程背景对口，薪资差距大需结合长期规划"},
    {sec:"🌴 旅游/酒旅",rate:3,note:"旅游业规模大，大多数岗位薪资有限，适合体验型而非高薪型"},
    {sec:"🌱 农业/棕榈油",rate:2,note:"马来西亚农业大国，但学历背景直接对口较难，更多是研究类岗位"},
  ],
  fr:[
    {sec:"💄 奢侈品/时尚",rate:5,note:"LVMH/开云/香奈儿总部，全球奢品第一圣地，需法语+商科/设计背景"},
    {sec:"✈️ 航空/工程",rate:4,note:"空客总部图卢兹，欧洲最大航空雇主，工程背景+法语竞争力强"},
    {sec:"🔬 学术/科研",rate:4,note:"CNRS法国国家科研中心，巴黎萨克雷聚集大量科研，经费充足"},
    {sec:"💰 咨询/金融",rate:3,note:"巴黎金融城，BCG/麦肯锡Paris有机会，规模小于伦敦"},
    {sec:"🍷 食品/农业",rate:3,note:"法国美食文化输出行业，但行业相对封闭，语言和文化门槛高"},
  ],
  se:[
    {sec:"💻 科技/互联网",rate:5,note:"Spotify/Klarna/爱立信/Ericsson+诺基亚，北欧科技生态最强，英文岗多"},
    {sec:"🎮 游戏",rate:4,note:"Mojang/DICE/King，北欧游戏产业全球知名，英文工作环境好"},
    {sec:"⚡ 可再生能源",rate:4,note:"北欧绿能全球领先，风能/水电工程机会，适合环境工程背景"},
    {sec:"🏥 医疗/生物",rate:4,note:"阿斯利康(Gothenburg)/Elekta，生命科学英文岗多，瑞典语加分"},
    {sec:"💰 金融",rate:3,note:"SEB/北欧联合银行，北欧本地金融稳定，英文岗有但规模有限"},
  ],
  be:[
    {sec:"🏛️ 欧盟机构",rate:5,note:"布鲁塞尔EU行政中心，欧洲议会/委员会/NATO，政策类独一无二机会"},
    {sec:"💊 制药/生物",rate:4,note:"杨森(J&J BE)/UCB/Solvay，比利时制药密度欧洲最高之一"},
    {sec:"🌐 国际组织/NGO",rate:4,note:"各类国际机构聚集，适合政策/外交/多语言背景，实习渠道多"},
    {sec:"💻 科技",rate:3,note:"比利时IT市场中等，欧盟数字政策实施带来技术咨询岗位"},
    {sec:"💰 咨询/金融",rate:3,note:"麦肯锡/德勤布鲁塞尔，欧盟相关政策咨询项目是特色"},
  ],
  dk:[
    {sec:"💊 制药/医疗",rate:5,note:"诺和诺德GLP-1全球爆发，哥本哈根生命科学最火，薪资顶尖"},
    {sec:"🌊 航运/物流",rate:4,note:"马士基全球最大集装箱，供应链+数字化物流机会好"},
    {sec:"⚡ 风能/绿能",rate:4,note:"维斯塔斯风机全球领先，可再生能源工程需求大，绿色职业前景好"},
    {sec:"💻 科技/游戏",rate:3,note:"哥本哈根IT和游戏圈新兴，英文岗在增加，生态规模小于瑞典"},
    {sec:"🍺 食品/消费",rate:3,note:"嘉士伯/Arla食品，稳定就业但规模有限"},
  ],
  cn:[
    {sec:"💻 互联网/AI",rate:5,note:"BAT+字节/华为/阿里，全球AI竞争新主场，校招薪资极具竞争力"},
    {sec:"🔬 学术/科研",rate:5,note:"清北科研经费充足，论文产出全球第一，博士+博后机会极多"},
    {sec:"💰 金融/投行",rate:4,note:"上海/北京投行+VC/PE，清北复交背景优势大，国际经历加分"},
    {sec:"🏭 新能源/制造",rate:4,note:"宁德时代/比亚迪等新能源，工程师需求旺盛，技术+国际视野有优势"},
    {sec:"🌏 外贸/国际业务",rate:3,note:"国际视野+汉语是独特优势，跨文化商务需求稳定，一带一路相关机会"},
  ],
};

/* 各院校就业 & 城市实况 */
const CAREER_SCHOOL={
  "牛津大学":{prog:"经济/法学/CS/公共政策",cos:["麦肯锡","高盛","DeepMind","摩根大通"],intern:"Career Service提供专属一对一辅导+校友内推通道，面试准备资源全英最强，牛津校友在金融/咨询圈极活跃",city:4.5,cityNote:"学术小城，图书馆24h开放，伦敦2h可达，生活节奏慢，安全宁静",local:"Graduate Route 2年无需雇主担保，牛津品牌在伦敦金融/咨询/科技圈极具说服力，内推渠道成熟",back:"国央企/选调生最高认可，上海北京落户无障碍，建议金融/CS/政策方向回国",xhs:"牛津大学 就业 实习 经验",bili:"牛津大学 硕士 就业 薪资"},
  "剑桥大学":{prog:"数学/工程/CS/经济",cos:["ARM","微软研究院","麦肯锡","巴克莱资本"],intern:"Careers Service有校园宣讲和校友导师计划，工程和数学背景最容易拿到顶级实习",city:4.5,cityNote:"剑桥城小但图书馆和学院资源极丰富，骑行20分钟可达任何地点，安全宁静",local:"工程/CS/金融方向Graduate Route衔接伦敦或剑桥科技圈，ARM等科技公司就在附近",back:"QS 2名全球认可，选调生/国央企竞争力最强，理工方向科研院所直接点名",xhs:"剑桥大学 留学 就业 实习",bili:"剑桥大学 硕士 就业 薪资"},
  "帝国理工学院":{prog:"工程/CS/商科/材料",cos:["谷歌","高盛","JP摩根","波士顿咨询"],intern:"南肯辛顿地段优越，Imperial Plus平台集合大量实习资源，工程/CS就业最直接",city:4.3,cityNote:"伦敦精华区，地铁直达金融城，娱乐丰富，但租金偏高",local:"Engineering和Computing方向Graduate Route就业最直接，金融科技/咨询内推传统强",back:"理工背景被国央企科研院所高度认可，QS前10完全覆盖所有落户政策",xhs:"帝国理工 就业 实习 伦敦",bili:"帝国理工 硕士 就业 内推"},
  "伦敦大学学院":{prog:"建筑/工程/计算机/经济",cos:["德勤","安永","Arup","富国银行"],intern:"伦敦大学联盟实习资源丰富，Career Hub每周有企业宣讲，金融/建筑路径成熟",city:4.2,cityNote:"布鲁姆斯伯里学区，咖啡馆和书店密集，大英博物馆门口，实习资源极近",local:"建筑/工程/金融/咨询均有不错路径，伦敦就业网络广，Graduate Route 2年",back:"QS 9名认可度高，建筑/工程背景被大型设计院和国企看重，上海北京落户均可",xhs:"UCL 伦敦大学学院 就业 实习",bili:"UCL 留学 就业 经验"},
  "爱丁堡大学":{prog:"金融/计算机/工程/医学",cos:["苏格兰皇家银行","艾克森美孚","安永","Skyscanner"],intern:"爱丁堡金融中心有不少实习机会，CS方向可在爱丁堡或延伸至伦敦",city:4.3,cityNote:"古城氛围浓厚，租金低于伦敦，文化活动丰富，Fringe艺术节独特",local:"Graduate Route 2年，可留苏格兰就业或去伦敦找更多机会，Skyscanner等科技公司在此",back:"QS 27名认可度好，落户上海深圳均可，金融/CS方向国央企认可",xhs:"爱丁堡大学 就业 实习",bili:"爱丁堡大学 留学 就业"},
  "伦敦国王学院":{prog:"法学/医学/战争研究/商科",cos:["四大律所","GSK","德勤","汇丰"],intern:"伦敦法律/医疗/金融圈实习资源丰富，KCL校友网络在法律和金融行业有口碑",city:4.1,cityNote:"泰晤士河边多校区，医学院/法学院靠近伦敦CBD，生活便利",local:"法学/医学需要英国执照再就业，商科/咨询Graduate Route最直接顺畅",back:"法学/医学国内认可需重新认证，商科金融背景回国更顺畅，QS覆盖落户线",xhs:"KCL 伦敦国王学院 就业 实习",bili:"伦敦国王学院 留学 就业"},
  "曼彻斯特大学":{prog:"商科/工程/计算机/生物技术",cos:["华为英国","毕马威","阿斯利康","博世"],intern:"曼彻斯特工业城有大量工程/生科实习，华为英国研究院在曼市设有招聘",city:4.0,cityNote:"英国第二大学生城，华人超市多，租金低于伦敦一半，夜生活文化活跃",local:"北部科技走廊就业机会好，也可去伦敦，Graduate Route 2年灵活择业",back:"QS 34名认可度好，华为等国企有曼大校招，工程背景国央企认可",xhs:"曼彻斯特大学 就业 实习",bili:"曼彻斯特大学 留学 就业"},
  "布里斯托大学":{prog:"工程/计算机/经济/航空",cos:["空客","劳斯莱斯","四大会计","ARM"],intern:"西南航空/工程走廊实习机会多，Airbus有布里斯托实习招聘计划",city:3.9,cityNote:"年轻活力城市，海边近，租金低，科技创业氛围新兴，半小时可到海滩",local:"航空/工程/CS方向Graduate Route接伦敦或当地就业均可",back:"QS 55名，工程航空方向国央企认可，选调生有一定认可度",xhs:"布里斯托大学 就业 实习",bili:"布里斯托 留学 就业"},
  "格拉斯哥大学":{prog:"工程/计算机/医学/社科",cos:["苏格兰企业局","GSK","宝洁","摩根大通"],intern:"苏格兰金融/工程/医疗机会，学校Career Zone资源完善，苏格兰独立人才留用政策",city:3.9,cityNote:"苏格兰最大城市，艺术氛围浓，租金全英最低之一，生活节奏轻松",local:"Graduate Route 2年，苏格兰有额外人才留用计划 Fresh Talent",back:"QS 77名，医学/工程背景国央企有一定认可，落户一线城市可覆盖",xhs:"格拉斯哥大学 就业 留学",bili:"格拉斯哥大学 留学 经验"},
  "伦敦政治经济学院":{prog:"金融/经济/法学/社会政策",cos:["高盛","麦肯锡","摩根士丹利","波士顿咨询"],intern:"伦敦CBD核心区，校友网络遍布全球金融和政策顶尖机构，内推通道成熟是最大优势",city:4.4,cityNote:"Holborn伦敦核心区，金融城步行可达，实习和社交机会全伦敦最好",local:"金融/咨询Graduate Route 2年，LSE金融背景被全球顶级机构认可，内推活跃",back:"QS 45名，经济/金融/政策方向国央企和外资金融均认可，上海北京落户均OK",xhs:"LSE 伦敦政经 就业 实习",bili:"伦敦政经 LSE 硕士 就业"},
  "华威大学":{prog:"金融数学/MBA/工程/CS",cos:["摩根大通","德意志银行","毕马威","汇丰"],intern:"Warwick Finance Society内推传统强，金融和咨询校园宣讲频繁",city:4.0,cityNote:"Coventry校园园区感强，学术氛围足，离伦敦1h，周末可去伦敦社交实习",local:"Graduate Route 2年，金融数学/MBA方向竞争力强",back:"QS 67名，金融数学/商科方向国内银行和咨询认可",xhs:"华威大学 就业 实习 Warwick",bili:"华威大学 硕士 就业"},
  "杜伦大学":{prog:"经济金融/物理/法学/商科",cos:["麦肯锡","汇丰","Santander","DHL"],intern:"Durham Business School校友网络活跃，Career Connect平台资源完善",city:4.1,cityNote:"北英格兰，学院制古城景色，生活节奏慢，租金低，适合沉浸学习",local:"Graduate Route 2年，可去伦敦或留当地，商科/金融路径明确",back:"QS 96名，商科/金融方向国央企有认可，落户一线城市可覆盖",xhs:"杜伦大学 就业 留学",bili:"杜伦大学 留学 就业"},
  "伯明翰大学":{prog:"商科/工程/医学/CS",cos:["宝洁","毕马威","捷豹路虎","博世"],intern:"中部工业走廊实习机会多，汽车工业有大量工程实习，商科宣讲活跃",city:3.8,cityNote:"英国第二大城市，多元文化，基础设施好，离伦敦1.5h",local:"Graduate Route 2年，汽车/制造工程或去伦敦咨询/金融均可",back:"QS 115名，工程/制造方向国央企认可，商科方向也可",xhs:"伯明翰大学 就业 实习",bili:"伯明翰大学 留学 就业"},
  "利兹大学":{prog:"商科/传媒/工程/医学",cos:["德勤","NHS","Asda","Channel 4"],intern:"利兹就业博览会规模大，媒体/时尚/零售有大量实习机会",city:3.9,cityNote:"北部学生城，夜生活丰富，租金低，多元文化，生活成本全英最低之一",local:"Graduate Route 2年，传媒/时尚/零售/商科路径明确",back:"QS 118名，商科/媒体方向回国发展，传统制造业背景认可",xhs:"利兹大学 就业 实习",bili:"利兹大学 留学 就业"},
  "南安普顿大学":{prog:"电子工程/CS/航海/金融",cos:["IBM","BAE系统","汇丰","ABB"],intern:"南部港口城市，航海/工程/IT实习机会多，BAE国防工程实习独特",city:3.8,cityNote:"南部港口城市，离伦敦1h，海边气候好，校园整洁安全",local:"Graduate Route 2年，工程/IT/金融方向均可在伦敦或当地就业",back:"QS 100名，工程/IT方向国央企认可，落户一线城市覆盖",xhs:"南安普顿大学 就业 留学",bili:"南安普顿大学 留学 就业"},
  "谢菲尔德大学":{prog:"工程/材料/医学/CS",cos:["波音","西门子","Sheffield Forgemasters","毕马威"],intern:"钢铁/工程/材料实习机会多，Sheffield科技公司也在增加",city:3.9,cityNote:"北部学生城，工业资源丰富，租金低，生活性价比高",local:"工程/材料方向Graduate Route就业或去伦敦均可",back:"QS 111名，工程/材料背景国央企认可，重工业方向有需求",xhs:"谢菲尔德大学 就业 实习",bili:"谢菲尔德大学 留学 就业"},
  "诺丁汉大学":{prog:"制药/工程/商科/CS",cos:["阿斯利康","博士伦","Capital One","Rolls Royce"],intern:"诺丁汉制药/工程走廊实习机会好，阿斯利康有诺丁汉实习招聘计划",city:3.8,cityNote:"中部城市，校园开阔，租金适中，Robin Hood故乡文化趣味好",local:"Graduate Route 2年，制药/工程/商科路径均好",back:"QS 112名，制药/工程方向国央企认可",xhs:"诺丁汉大学 就业 实习",bili:"诺丁汉大学 留学 就业"},
  "伦敦玛丽女王大学":{prog:"法律/医学/工程/媒体",cos:["Allen & Overy律所","NHS","媒体集团","Rolls Royce"],intern:"东伦敦多元化实习机会，法律/医学/工程均有成熟路径",city:3.7,cityNote:"东伦敦多元文化，地铁直达中心，租金低于西伦敦一半",local:"Graduate Route 2年，法律/医学需要英国资质，工程/商科更顺畅",back:"QS约150名，法律/工程背景回国认可，建议结合国内学历认证",xhs:"玛丽女王大学 就业 留学",bili:"伦敦玛丽女王大学 留学 就业"},
  "圣安德鲁斯大学":{prog:"国际关系/物理/CS/商科",cos:["麦肯锡","苏格兰政府","科技公司","金融机构"],intern:"苏格兰特有机会，国际关系背景适合国际组织/外交方向实习",city:4.1,cityNote:"苏格兰海边小城，校园景色绝美，节奏慢，适合沉浸学习，爱丁堡1h",local:"Graduate Route 2年，小校但校友网络精英色彩强，可去爱丁堡或伦敦",back:"QS约100名，国际关系/物理方向回国发展好，外交口认可",xhs:"圣安德鲁斯大学 就业 留学",bili:"圣安德鲁斯 留学 就业"},
  "麻省理工学院":{prog:"CS/AI/工程/金融工程",cos:["谷歌","亚马逊","高盛","Palantir"],intern:"MIT职业博览会全球顶尖，校友网络覆盖所有顶级机构，STEM实习内推极活跃",city:4.8,cityNote:"波士顿学术之都，生活费适中，创业和科研生态一流，Charles River边骑行很爽",local:"STEM OPT 3年+H-1B，MIT背景被所有顶级雇主主动争抢，科技/金融两路均强",back:"国央企最高认可，科研院所/选调生直接点名，上海北京落户无障碍，QS 1名",xhs:"MIT 麻省理工 就业 实习",bili:"麻省理工学院 留学 就业 薪资"},
  "斯坦福大学":{prog:"CS/AI/MBA/工程",cos:["谷歌","Meta","苹果","OpenAI"],intern:"硅谷就在校门口，实习几乎不用离开校园生态，VC和创业圈极活跃，内推最轻松",city:4.8,cityNote:"帕洛阿尔托气候完美，硅谷核心，创业文化一流，但生活费极高",local:"STEM OPT 3年，硅谷就业直接对接，薪资总包全球最高之一，H-1B竞争力强",back:"QS 5名，国央企/科研院所最高认可，选调生首选目标学校，AI背景尤其抢手",xhs:"斯坦福大学 就业 实习 硅谷",bili:"斯坦福大学 留学 就业 薪资"},
  "哈佛大学":{prog:"法学/商科/公共政策/医学",cos:["麦肯锡","高盛","波士顿咨询","KKR"],intern:"HBS/HLS校友网络全球最强，每周有顶级机构校园宣讲和内推，PE/VC内推传统极强",city:4.7,cityNote:"波士顿剑桥区，学术生态一流，生活费比湾区低，文化多元丰富",local:"STEM OPT/OPT，哈佛品牌全球通行，金融/咨询/政策就业一流",back:"QS 4名，国央企/选调生最高认可，政策研究/金融方向回国选择最多",xhs:"哈佛大学 就业 实习",bili:"哈佛大学 留学 就业 生活"},
  "加州理工学院":{prog:"物理/数学/CS/航空航天",cos:["NASA JPL","波音","谷歌","SpaceX"],intern:"航空航天/NASA JPL研究实习全美独一无二，硅谷企业校招活跃",city:4.5,cityNote:"帕萨迪纳小城安静，距洛杉矶30min，研究环境纯粹，规模小精英感强",local:"STEM OPT 3年，航空/工程/科技就业极有竞争力，NASA路径独特",back:"QS 4名并列，航空/工程背景国央企科研院所顶级认可，航天院所直接点名",xhs:"加州理工 就业 实习 航空航天",bili:"加州理工学院 留学 就业"},
  "哥伦比亚大学":{prog:"金融工程/CS/新闻/国际关系",cos:["高盛","贝莱德","摩根士丹利","谷歌"],intern:"曼哈顿中心，华尔街步行可到，金融实习机会全美最便利，校园宣讲天天有",city:4.4,cityNote:"纽约曼哈顿上西区，城市体验顶尖，机会极多，生活费全美最高",local:"STEM OPT 3年，金融工程和CS方向最强，纽约就业直接对接，H-1B抽签压力",back:"QS 33名，金融/CS方向国央企和外资金融均认可，落户政策全覆盖",xhs:"哥伦比亚大学 就业 实习 纽约",bili:"哥伦比亚大学 留学 就业 金融"},
  "加州大学伯克利":{prog:"CS/金融/工程/MBA",cos:["谷歌","苹果","Nvidia","摩根大通"],intern:"硅谷第一公立学府，Bay Area实习机会极丰富，Haas商学院校招强",city:4.3,cityNote:"旧金山湾区，多元开放，公立性价比高，但湾区生活费偏高，通勤需要适应",local:"STEM OPT 3年，Bay Area就业生态极强，公立高性价比的顶尖选择",back:"QS 30名，CS/工程方向国内高度认可，落户政策全覆盖",xhs:"UC伯克利 就业 实习 硅谷",bili:"加州大学伯克利 留学 就业"},
  "康奈尔大学":{prog:"CS/工程/酒店管理/生物",cos:["谷歌","微软","Facebook","花旗"],intern:"纽约Tech Walk办公室便于NYC实习，酒旅/农科/工程各有专属招聘通道",city:4.2,cityNote:"伊萨卡偏远寒冷但校园极美，纽约校区商科就业更方便，大学城学术氛围浓",local:"STEM OPT 3年，CS/工程最直接，Hotel School酒旅管理业界最强",back:"QS 21名，CS/工程/生物方向国央企认可，一线城市落户均可",xhs:"康奈尔大学 就业 实习",bili:"康奈尔大学 留学 就业"},
  "密歇根大学安娜堡":{prog:"工程/商科/信息/公共政策",cos:["福特","宝洁","麦肯锡","谷歌"],intern:"底特律汽车/工程圈独特实习机会，Ross商学院校招极强，工程博览会规模大",city:4.2,cityNote:"大学城氛围浓厚，学生生活丰富，Michigan体育文化极强",local:"STEM OPT 3年，工程/商科双路径均强，汽车行业实习独特",back:"QS 30名，工程/商科方向国央企认可，汽车行业背景有独特优势",xhs:"密歇根大学 就业 实习",bili:"密歇根大学安娜堡 留学 就业"},
  "纽约大学":{prog:"金融/媒体/CS/法学",cos:["高盛","彭博","Condé Nast","摩根士丹利"],intern:"嵌入纽约城市，实习机会全美最丰富之一，Stern金融校招极强，媒体独特",city:4.1,cityNote:"曼哈顿下城，无传统校园，直接体验纽约最真实的城市生活",local:"STEM OPT 3年，金融/媒体/传播方向NYC就业最强",back:"QS 42名，金融方向国内认可，媒体/传播背景回国也有市场",xhs:"NYU 纽约大学 就业 实习",bili:"纽约大学 留学 就业"},
  "普林斯顿大学":{prog:"公共政策/经济/CS/工程",cos:["高盛","德勤","谷歌","摩根大通"],intern:"Princeton Career Center精英校友网络，公共政策方向就业独特，金融宣讲频繁",city:4.5,cityNote:"普林斯顿小城安静宜人，离纽约1h，校园极美纯粹精英",local:"STEM OPT 3年，政策/经济/CS均有顶级就业路径",back:"QS 24名，所有国央企/选调生最高认可，落户任何城市无障碍",xhs:"普林斯顿大学 就业 实习",bili:"普林斯顿大学 留学 就业"},
  "耶鲁大学":{prog:"法学/医学/金融/戏剧",cos:["Sullivan律所","摩根士丹利","政策机构","各大医院"],intern:"耶鲁法律人脉在华尔街和DC政策圈极强，医学院资源顶尖",city:4.5,cityNote:"纽黑文城市资源有限，但耶鲁校园古典美丽，氛围精英纯粹",local:"STEM OPT，法学需通过Bar Exam，金融/政策路径最顺畅",back:"QS 28名，法学/医学/金融均高度认可，选调生强烈偏好",xhs:"耶鲁大学 就业 实习",bili:"耶鲁大学 留学 就业"},
  "芝加哥大学":{prog:"经济/金融/MBA/统计",cos:["高盛","麦肯锡","DE Shaw","贝莱德"],intern:"Booth/经济学院校友在对冲基金和PE极活跃，量化金融内推极强",city:4.4,cityNote:"芝加哥城市体验丰富，密歇根湖边文化丰富，但冬天极冷需要适应",local:"STEM OPT 3年，量化金融/经济学/咨询方向极强就业路径",back:"QS 25名，经济/金融方向国央企和私募均认可，Nobel经济学校友背书",xhs:"芝加哥大学 就业 实习",bili:"芝加哥大学 留学 就业 金融"},
  "宾夕法尼亚大学":{prog:"金融/商科/社科/工程",cos:["摩根大通","高盛","贝莱德","亚马逊"],intern:"Wharton校友网络遍布全球金融机构，投行/PE内推全美最强之一，宣讲天天有",city:4.3,cityNote:"费城金融区地段好，比纽约生活费低但实习机会同样多",local:"STEM OPT 3年，Wharton金融是美国最认可品牌，PE/VC内推极强",back:"QS 12名，金融/商科方向所有国央企和外资金融均认可",xhs:"宾夕法尼亚大学 Wharton 就业 实习",bili:"宾大 留学 就业 金融"},
  "约翰霍普金斯大学":{prog:"公共卫生/国际关系/生物医学/工程",cos:["NIH","SAIS智库","波士顿咨询","各大医院"],intern:"医学/公卫/国际关系研究机构实习极独特，NIH合作项目多，国际政策圈活跃",city:4.1,cityNote:"巴尔的摩城市安全感较差，但Hopkins科研圈极强，校内生活丰富",local:"医学/公卫需要美国执照，国际关系/咨询最灵活，STEM OPT可用",back:"QS 31名，公卫/生物医学科研院所高度认可，国际关系方向外交口认可",xhs:"约翰霍普金斯 就业 实习",bili:"约翰霍普金斯大学 留学 就业"},
  "加州大学洛杉矶":{prog:"电影/CS/商科/工程",cos:["迪士尼","谷歌","苹果","德勤"],intern:"好莱坞媒体实习独特，CS/工程湾区/LA路径明确，公立性价比高",city:4.2,cityNote:"洛杉矶阳光文化，娱乐业一流，海滩15min，华人社区极成熟",local:"STEM OPT 3年，CS/工程湾区或LA均可，媒体/创意方向LA独特",back:"QS 44名，CS/工程方向国央企认可，媒体背景回国也有市场",xhs:"UCLA 洛杉矶 就业 实习",bili:"加州大学洛杉矶 留学 就业"},
  "杜克大学":{prog:"医学/MBA/政策/工程",cos:["麦肯锡","波士顿咨询","强生","GSK"],intern:"Fuqua MBA校友网络很强，医学院NIH合作，南部生科产业实习机会好",city:4.3,cityNote:"达勒姆小城，校园极美宏大，研究三角科技圈，生活质量高",local:"STEM OPT 3年，MBA/医学/政策均有顶级就业路径",back:"QS 47名，医学/商科/政策方向国内高度认可，选调生有认可",xhs:"杜克大学 就业 实习",bili:"杜克大学 留学 就业"},
  "卡内基梅隆大学":{prog:"CS/AI/机器人/信息系统",cos:["谷歌","亚马逊","Meta","英特尔"],intern:"CMU CS/AI招聘博览会全球CS最顶级，硅谷企业争抢CMU学生，内推极活跃",city:4.4,cityNote:"匹兹堡城市复兴中，生活费较低，科技圈活跃，博物馆文化丰富",local:"STEM OPT 3年，CMU=CS/AI顶级品牌，硅谷就业直接，H-1B竞争力强",back:"QS 65名，CS/AI方向国央企科研院所顶级认可，华为腾讯字节均有CMU校招",xhs:"CMU 卡内基梅隆 就业 实习 AI",bili:"卡内基梅隆大学 留学 就业 CS"},
  "佐治亚理工学院":{prog:"CS/工程/商科/工业工程",cos:["谷歌","AT&T","德勤","波音"],intern:"亚特兰大科技圈崛起，Georgia Tech校招极强，Delta/可口可乐等独特机会",city:4.2,cityNote:"亚特兰大文化多元，科技公司快速增长，生活费比湾区低很多",local:"STEM OPT 3年，GT CS=全美性价比最高的顶级CS，校招极强",back:"QS 137名，CS/工程方向国央企认可，性价比最高的美国顶尖理工",xhs:"佐治亚理工 就业 实习 CS",bili:"佐治亚理工学院 留学 就业"},
  "伊利诺伊大学香槟":{prog:"CS/电子工程/会计/MBA",cos:["微软","谷歌","亚马逊","英特尔"],intern:"UIUC CS校招全美最强之一，微软/谷歌直接来校招，内推渠道成熟",city:4.1,cityNote:"香槟大学城，华人极多，生活成本极低，安静但学术氛围浓",local:"STEM OPT 3年，UIUC CS就业率全美前三，薪资回报极高",back:"QS 93名，CS/工程方向国央企认可，华为/阿里等有UIUC校招",xhs:"UIUC 伊利诺伊 就业 实习",bili:"伊利诺伊大学香槟 留学 就业"},
  "德州大学奥斯汀":{prog:"CS/商科/工程/法学",cos:["特斯拉","苹果","戴尔","Dell"],intern:"奥斯汀科技圈崛起，Tesla/Dell总部校招活跃，McCombs商学院强",city:4.0,cityNote:"奥斯汀科技之都崛起，Live Music之都，气候好，生活费低于两岸",local:"STEM OPT 3年，德州科技走廊就业机会快速增长，无州税是优势",back:"QS 145名，CS/工程方向认可，德州能源背景也有回国市场",xhs:"UT Austin 德州大学 就业 实习",bili:"德州大学奥斯汀 留学 就业"},
  "加州大学圣地亚哥":{prog:"神经科学/CS/工程/生物科技",cos:["高通","苹果","谷歌","各生科公司"],intern:"高通本部在圣地亚哥，生物科技/芯片实习机会独特，硅谷可延伸",city:4.1,cityNote:"圣地亚哥天气完美，海滩15min，校区在拉霍亚海崖，生活质量高",local:"STEM OPT 3年，芯片/生物科技/CS均有顶尖路径",back:"QS 65名，CS/生物科技方向国内高度认可，芯片背景国内特别珍视",xhs:"UCSD 圣地亚哥 就业 实习",bili:"加州大学圣地亚哥 留学 就业"},
  "华盛顿大学":{prog:"CS/信息/公共卫生/工程",cos:["微软","亚马逊","谷歌","波音"],intern:"西雅图科技走廊，微软/亚马逊总部校招活跃，公立高性价比的最佳选择",city:4.1,cityNote:"西雅图雨天多但科技生态极强，气候凉爽，文化多元",local:"STEM OPT 3年，西雅州就业微软/亚马逊路径最直接",back:"QS 67名，CS/工程方向国央企认可，公立高性价比",xhs:"华盛顿大学 西雅图 就业 实习",bili:"华盛顿大学 留学 就业"},
  "西北大学":{prog:"新闻/商科/法学/工程",cos:["Tribune传媒","麦肯锡","高盛","宝洁"],intern:"Kellogg MBA校招极强，Medill新闻学院媒体实习一流",city:4.2,cityNote:"埃文斯顿安静，离芝加哥30min，密歇根湖边，生活质量好",local:"STEM OPT 3年，商科/媒体/法学就业路径明确",back:"QS 35名，商科/新闻方向国内认可，Kellogg MBA回国含金量高",xhs:"西北大学 Northwestern 就业 实习",bili:"西北大学 留学 就业"},
  "布朗大学":{prog:"生物医学/CS/经济/视觉艺术",cos:["谷歌","摩根士丹利","麦肯锡","NIH"],intern:"Open Curriculum跨学科背景让实习选择多，Providence虽小但波士顿1h",city:4.2,cityNote:"普罗维登斯艺术城市，生活节奏轻松，校园精英但氛围不死板",local:"STEM OPT 3年，生物/CS/金融均有路径，跨学科背景是特色优势",back:"QS 73名，生物/CS/经济方向国央企认可，跨学科背景回国有一定优势",xhs:"布朗大学 就业 实习",bili:"布朗大学 留学 就业"},
  "波士顿大学":{prog:"商科/CS/传播/生物医学",cos:["State Street","Fidelity","谷歌","Biogen"],intern:"波士顿大学城生态，金融/生科/媒体实习资源极丰富",city:4.0,cityNote:"波士顿查尔斯河边，学生城氛围，生活费适中",local:"STEM OPT 3年，商科/CS/生科均有好路径，波士顿就业生态强",back:"QS 102名，商科/CS方向国内认可，性价比较高的美国选择",xhs:"波士顿大学 BU 就业 实习",bili:"波士顿大学 留学 就业"},
  "普渡大学":{prog:"工程/CS/农业/航空",cos:["波音","卡特彼勒","英特尔","联合技术"],intern:"工程/航空实习极丰富，波音等每年大规模校招普渡，STEM就业率顶尖",city:3.9,cityNote:"西拉法叶大学城安静，华人多，生活费极低，工程气氛浓",local:"STEM OPT 3年，工程/航空STEM就业回报高，薪资比生活成本高很多",back:"QS 109名，工程/航空方向国央企认可，航天背景国内有需求",xhs:"普渡大学 就业 实习 工程",bili:"普渡大学 留学 就业"},
  "威斯康星大学麦迪逊":{prog:"商科/工程/生物化学/新闻",cos:["斯泰特街投资","强生","Epic System","3M"],intern:"麦迪逊有医疗IT/生科实习机会，Epic System总部在此，生科实验室资源强",city:3.9,cityNote:"麦迪逊湖城，州府城市，生活质量高，文化丰富，冬天寒冷",local:"STEM OPT 3年，生科/IT/商科均有路径",back:"QS 155名，商科/生科方向国内有认可",xhs:"威斯康星大学麦迪逊 就业 实习",bili:"威斯康星大学 留学 就业"},
  "加州大学戴维斯":{prog:"农学/生命科学/法学/工程",cos:["加州政府","Sutter医院","苹果","英特尔"],intern:"农业/食品科学/生命科学独特实习机会，UC系统资源共享",city:3.8,cityNote:"戴维斯小城，骑行文化，气候温和，学生社区生活好",local:"STEM OPT 3年，农学/生科/法学均有路径，法学院竞争力强",back:"QS 163名，农学/生科方向国内有一定认可",xhs:"UC Davis 戴维斯 就业 实习",bili:"加州大学戴维斯 留学 就业"},
  "莱斯大学":{prog:"工程/CS/商科/建筑",cos:["壳牌","NASA JSC","荷兰银行","埃克森美孚"],intern:"休斯顿能源行业实习独特，NASA JSC航天实习全美稀缺",city:4.1,cityNote:"休斯顿能源医疗中心，校园宿舍全美最好之一，气候热但城市发展快",local:"STEM OPT 3年，能源/航天/CS路径明确，小校精英气质强",back:"QS 154名，工程/能源方向国央企认可，NASA背景航天院所珍视",xhs:"莱斯大学 Rice 就业 实习",bili:"莱斯大学 留学 就业"},
  "墨尔本大学":{prog:"商科/工程/法学/生物医学",cos:["德勤","麦肯锡","ANZ银行","必和必拓"],intern:"墨尔本金融/咨询/医疗圈实习机会一流，Parkville学区资源全澳最好",city:4.4,cityNote:"Parkville学区，咖啡文化一流，生活质量高，华人社区极成熟",local:"485工签2年+，就业和移民路径最清晰，澳洲综合实力最强",back:"QS 13名，国央企/选调生均认可，商科/工程/医学背景回国均好",xhs:"墨尔本大学 就业 实习 澳洲",bili:"墨尔本大学 留学 就业 经验"},
  "悉尼大学":{prog:"法学/建筑/商科/医学",cos:["麦格理银行","汇丰","BHP","普华永道"],intern:"悉尼CBD实习便利，法学/商科/建筑校招强，悉尼大学校友网络成熟",city:4.3,cityNote:"悉尼港湾旁，生活质量一流，文化多元，华人社区极成熟",local:"485工签2年+，法律需本地执照，商科/建筑/咨询最顺畅",back:"QS 19名，商科/法律/建筑方向国内高度认可，落户政策全覆盖",xhs:"悉尼大学 就业 实习 澳洲",bili:"悉尼大学 留学 就业 经验"},
  "新南威尔士大学":{prog:"工程/商科/CS/法学",cos:["必和必拓","Rio Tinto","麦格理","谷歌"],intern:"Sydney科技圈UNSW最积极，工程/商科校招极强，华人校友网络最成熟",city:4.2,cityNote:"肯辛顿近悉尼CBD，华人最多的澳洲学校，生活适应最快",local:"485工签2年+，工程/CS/金融三路径均强",back:"QS 45名，工程/商科国内高度认可，华为等国内科技企业有UNSW校招",xhs:"UNSW 新南威尔士 就业 实习",bili:"新南威尔士大学 留学 就业"},
  "莫纳什大学":{prog:"工程/商科/制药/信息技术",cos:["必和必拓","宝洁","麦格理","IBM"],intern:"墨尔本工业圈实习机会，制药/工程/IT三方向均有路径",city:4.0,cityNote:"克莱顿校区偏郊区，学术氛围足但娱乐有限，墨尔本市区30min可达",local:"485工签2年+，制药/工程/IT就业在澳洲竞争力强",back:"QS 57名，工程/制药/商科方向国内有一定认可",xhs:"莫纳什大学 Monash 就业 实习",bili:"莫纳什大学 留学 就业"},
  "昆士兰大学":{prog:"医学/农科/工程/商科",cos:["Anglo American","QGC","宝洁","布里斯班市"],intern:"布里斯班矿业/能源/医疗圈实习机会独特，偏远区加分明显",city:4.1,cityNote:"布里斯班气候绝佳，河边校园美丽，节奏比悉尼墨尔本轻松",local:"485工签2年，偏远区加分+PR路径，医学/农科/工程均可",back:"QS 61名，医学/工程方向国内有认可，农科背景农业院校认可",xhs:"昆士兰大学 UQ 就业 实习",bili:"昆士兰大学 留学 就业"},
  "澳大利亚国立大学":{prog:"政策/外交/科学/法学",cos:["澳大利亚政府","智库","ANU合作企业","波士顿咨询"],intern:"堪培拉政府政策圈实习机会独特，澳洲政府机构资源最好",city:4.0,cityNote:"首都堪培拉，城市较小但安全整洁，自然环境好，节奏安静",local:"485工签2年，政策/外交/科学研究路径清晰",back:"QS 30名，政策/外交方向国内认可，科研院所高度认可",xhs:"澳国立 ANU 就业 实习",bili:"澳大利亚国立大学 留学 就业"},
  "西澳大学":{prog:"矿业/工程/商科/海洋科学",cos:["必和必拓","力拓","Woodside","ABB"],intern:"珀斯矿业/能源圈实习机会极独特，西澳工程就业收入全澳最高",city:3.9,cityNote:"珀斯西岸独立城市，海边生活无敌，节奏轻松，矿业文化浓",local:"485工签2年，偏远区加分，矿业工程薪资全澳最高",back:"QS 72名，工程/矿业背景国内能源央企认可",xhs:"西澳大学 UWA 就业 实习",bili:"西澳大学 留学 就业"},
  "阿德莱德大学":{prog:"工程/医学/农科/商科",cos:["BHP","Santos","地方企业","葡萄酒企业"],intern:"南澳能源/农食品/医疗实习机会，偏远区就业移民加分显著",city:3.8,cityNote:"阿德莱德慢节奏，租金全澳最低，葡萄酒文化和美食体验好",local:"485工签2年，南澳偏远加分PR最快，医工商三方向均可",back:"QS 82名，工程/农科方向国内有认可",xhs:"阿德莱德大学 就业 实习",bili:"阿德莱德大学 留学 就业"},
  "悉尼科技大学":{prog:"IT/商科/工程/传媒",cos:["Atlassian","Canva","NAB银行","宝洁"],intern:"UTS与悉尼科技圈深度合作，Atlassian/Canva等本土独角兽校招活跃",city:3.8,cityNote:"悉尼CBD内，无传统大学校园感，城市资源极便利",local:"485工签2年，IT/商科/设计实践型就业路径直接",back:"QS 133名，IT/商科实践背景回国有市场，但认可度低于八大",xhs:"悉尼科技大学 UTS 就业 实习",bili:"悉尼科技大学 留学 就业"},
  "皇家墨尔本理工":{prog:"设计/建筑/IT/商科",cos:["德勤","NAB","设计公司","本土IT公司"],intern:"墨尔本城市设计/创意/IT实习机会，RMIT与行业合作紧密",city:3.7,cityNote:"墨尔本城市中心，交通便利，创意文化浓厚，学生生活多样",local:"485工签2年，设计/IT/商科方向就业本地有路径",back:"QS 218名，国内认可度一般，适合特定专业方向",xhs:"RMIT 皇家墨尔本理工 就业",bili:"皇家墨尔本理工 留学 就业"},
  "多伦多大学":{prog:"CS/商科/工程/金融",cos:["麦肯锡","RBC皇家银行","谷歌","BCE电信"],intern:"多伦多金融城+科技走廊实习机会一流，Rotman商学院校招极强，Vector AI研究所联系",city:4.3,cityNote:"多伦多多元文化，城市资源丰富，华人社区成熟，冬天寒冷",local:"PGWP最长3年，Express Entry移民路径清晰，就业机会全加最多",back:"QS 25名，国央企/选调生最高认可，落户任何城市无障碍",xhs:"多伦多大学 UofT 就业 实习",bili:"多伦多大学 留学 就业 经验"},
  "英属哥伦比亚大学":{prog:"CS/工程/商科/林业",cos:["亚马逊","谷歌","Lululemon","RBC"],intern:"温哥华科技圈（Amazon/Apple在此），Sauder商学院校招强",city:4.2,cityNote:"温哥华山海之间，气候最温和，华人最多，但就业竞争也激烈",local:"PGWP最长3年，温哥华科技圈或去多伦多，BC省提名移民路径也清晰",back:"QS 45名，CS/工程/商科方向国内高度认可",xhs:"UBC 英属哥伦比亚 就业 实习",bili:"英属哥伦比亚大学 留学 就业"},
  "麦吉尔大学":{prog:"医学/法学/商科/工程",cos:["蒙特利尔交易所","Bell电信","Pratt Whitney","国家科研院"],intern:"蒙特利尔双语城市，法语背景者机会更多，全球AI研究圈蒙特利尔独特地位",city:4.1,cityNote:"蒙特利尔欧洲气质，夏天活跃，冬天极冷，文化艺术生活丰富",local:"PGWP最长3年，法英双语是优势，加拿大AI研究圈蒙特利尔独特地位",back:"QS 29名，医学/工程/商科方向国内高度认可",xhs:"麦吉尔大学 McGill 就业 实习",bili:"麦吉尔大学 留学 就业"},
  "阿尔伯塔大学":{prog:"能源/工程/商科/医学",cos:["壳牌加拿大","Suncor能源","TransCanada","Alberta政府"],intern:"卡尔加里/埃德蒙顿能源圈实习机会极独特，薪资最高",city:3.8,cityNote:"埃德蒙顿能源城，冬天极寒，能源行业收入丰厚，生活成本相对低",local:"PGWP最长3年，能源行业薪资一流，PR路径顺畅",back:"QS 110名，工程/能源方向国内有认可，能源央企偏好",xhs:"阿尔伯塔大学 就业 实习 加拿大",bili:"阿尔伯塔大学 留学 就业"},
  "滑铁卢大学":{prog:"CS/工程/数学/软件工程",cos:["谷歌","微软","亚马逊","Shopify"],intern:"co-op是全加最强制度化实习项目，6次实习让学生毕业即就业，内推渠道成熟",city:4.3,cityNote:"滑铁卢小城娱乐有限，但co-op让学生分散在北美各地实习体验",local:"PGWP最长3年，CS/软件就业率全加第一，薪资顶尖，Shopify总部在此",back:"QS 154名，CS/工程背景国内科技公司认可，华为等有滑铁卢校招",xhs:"滑铁卢大学 Waterloo 就业 co-op",bili:"滑铁卢大学 留学 就业 CS"},
  "新加坡国立大学":{prog:"CS/商科/工程/法学",cos:["谷歌","淡马锡","星展银行","英特尔"],intern:"NUS Talent Connect实习资源极丰富，亚太跨国企业总部实习独特",city:4.4,cityNote:"肯特岗校园环境好，城市高效便利，安全整洁，中英双语无障碍",local:"EP薪资门槛约SGD 5,000，NUS背景在新加坡就业竞争力强，亚太跳板价值大",back:"QS 8名，所有国央企/选调生最高认可，东南亚金融背景也有回国需求",xhs:"NUS 新加坡国立 就业 实习",bili:"新加坡国立大学 留学 就业"},
  "南洋理工大学":{prog:"工程/商科/CS/传播",cos:["星展银行","GIC","ABB","博世"],intern:"NTU与工业界合作紧密，工程/商科校招活跃",city:4.2,cityNote:"裕廊学区，校园开阔绿化好，但离市区远，交通需要适应",local:"EP薪资门槛，NTU工程/商科在本地就业竞争力强",back:"QS 15名，工程/商科方向国内高度认可，一线城市落户无障碍",xhs:"NTU 南洋理工 就业 实习",bili:"南洋理工大学 留学 就业"},
  "香港大学":{prog:"金融/法律/医学/商科",cos:["高盛亚洲","汇丰","麦肯锡","各大律所"],intern:"香港金融城实习机会一流，IANG工签后再找工作很方便，大湾区资源独特",city:4.3,cityNote:"港岛薄扶林，校园景色好但地形陡，香港节奏快资源丰富",local:"IANG 12月无需雇主担保，金融/法律/医学在香港就业竞争力极强",back:"QS 17名，国内高度认可，北京上海落户无障碍，金融方向回国尤佳",xhs:"香港大学 HKU 就业 实习",bili:"香港大学 留学 就业 金融"},
  "香港中文大学":{prog:"商科/理工/人文/医学",cos:["摩根大通","花旗","德勤","本地企业"],intern:"沙田校区安静，去香港市区便利，商科和医学实习路径明确",city:4.2,cityNote:"沙田马鞍山，山脚大学站，风景好，研究氛围浓，生活节奏较港大慢",local:"IANG 12月，商科/理工/医学在香港就业路径清晰",back:"QS 36名，商科/工程方向国内认可，一线城市落户均可",xhs:"香港中文大学 CUHK 就业 实习",bili:"香港中文大学 留学 就业"},
  "香港科技大学":{prog:"CS/商科/工程/环境",cos:["腾讯","谷歌","汇丰","高盛亚洲"],intern:"科技/商科校招极强，HKUST有独特的大湾区企业联系，深圳创业圈资源近",city:4.3,cityNote:"清水湾半山，宿舍条件好，科研氛围极浓，但离市区远需适应",local:"IANG 12月，CS/工程/商科在港就业竞争力强，大湾区机会多",back:"QS 47名，CS/工程方向国内高度认可，深圳大湾区独特机会",xhs:"HKUST 香港科技大学 就业 实习",bili:"香港科技大学 留学 就业"},
  "香港城市大学":{prog:"商科/法律/CS/设计",cos:["汇丰","中银香港","本地科技公司","各咨询"],intern:"九龙中心位置便利，商科/设计/CS实习就在周边",city:4.0,cityNote:"九龙旺角附近，交通极便利，城市生活便利，居住空间小",local:"IANG 12月，商科/设计/CS实习就业路径直接",back:"QS 70名，商科/设计方向国内认可，城市大学背景在大湾区有一定认可",xhs:"香港城市大学 CityU 就业 实习",bili:"香港城市大学 留学 就业"},
  "香港理工大学":{prog:"设计/酒旅/工程/时装",cos:["MTR地铁","各设计院","酒店集团","工程公司"],intern:"红磡站便利，设计/酒旅/工程实习机会多，与行业合作紧密",city:3.9,cityNote:"红磡站直达，交通最便利，城市设施成熟，居住空间小",local:"IANG 12月，设计/酒旅/工程实践导向就业直接",back:"QS 57名，设计/工程方向国内有认可，酒旅方向回国也有市场",xhs:"香港理工大学 PolyU 就业 实习",bili:"香港理工大学 留学 就业"},
  "苏黎世联邦理工":{prog:"理工/CS/建筑/自然科学",cos:["谷歌","ABB","罗氏","麦肯锡"],intern:"苏黎世高科技圈，ETH与工业界合作极紧密，内推渠道成熟，科研实习顶尖",city:4.7,cityNote:"苏黎世城市高效精美，物价全球最高但薪资也最高，生活质量顶尖",local:"找到工作转工签，ETH背景被所有顶级雇主认可，薪资CHF 100k+，留瑞极值",back:"QS 7名，所有方向国内最高认可，但留瑞薪资对比优势极大，建议优先留",xhs:"ETH 苏黎世联邦理工 就业 瑞士",bili:"苏黎世联邦理工 ETH 就业 薪资"},
  "洛桑联邦理工":{prog:"工程/CS/生命科学/建筑",cos:["罗氏","诺华","ABB","EPFL创业公司"],intern:"日内瓦/洛桑科技圈实习机会，生命科学/工程内推活跃，国际组织实习独特",city:4.5,cityNote:"日内瓦湖边，法语区小城，生活节奏比苏黎世轻松，景色无敌",local:"找到工作转工签，EPFL工程/生命科学就业在瑞士/欧洲极有竞争力",back:"QS 28名，工程/生命科学方向国内高度认可，但留瑞薪资优势更大",xhs:"EPFL 洛桑联邦理工 就业 瑞士",bili:"洛桑联邦理工 EPFL 就业 留学"},
  "苏黎世大学":{prog:"医学/法学/经济/自然科学",cos:["UBS","再保险集团","罗氏","联合诊所"],intern:"苏黎世金融/医疗圈实习机会，与ETH相邻共享部分资源",city:4.3,cityNote:"与ETH相邻，共享城市资源，医学/法学/经济学学术氛围浓",local:"找到工作转工签，医学需要瑞士执照，金融/经济路径更顺畅",back:"QS 100名，医学/经济方向国内有认可",xhs:"苏黎世大学 留学 就业 瑞士",bili:"苏黎世大学 就业 留学"},
  "阿姆斯特丹大学":{prog:"商科/法学/传播/社科",cos:["ING银行","Booking.com","Heineken","咨询公司"],intern:"阿姆斯特丹跨国企业总部密集，英语实习机会多，30%税收优惠政策吸引企业",city:4.1,cityNote:"运河城中心，自行车文化，国际化极强，但住房极紧张",local:"求职年1年，Booking/ING/Heineken等英文岗多，Zoekjaar后转工作许可",back:"QS 53名，商科/法学/传播方向国内有认可",xhs:"阿姆斯特丹大学 就业 荷兰",bili:"阿姆斯特丹大学 留学 就业"},
  "代尔夫特理工大学":{prog:"工程/建筑/CS/航空航天",cos:["ASML","壳牌","空客","Siemens"],intern:"ASML旁边，半导体工程实习全球最独特，TU Delft在工程界声誉顶尖",city:4.3,cityNote:"代尔夫特小城，工程师文化纯粹，离海牙/鹿特丹15min",local:"求职年1年，ASML/半导体工程就业薪资极高，30%税收优惠",back:"QS 47名，工程/建筑方向国内高度认可，ASML背景国内芯片产业珍视",xhs:"TU Delft 代尔夫特理工 就业 ASML",bili:"代尔夫特理工大学 留学 就业 工程"},
  "乌得勒支大学":{prog:"生命科学/医学/人文/法学",cos:["荷兰政府","UMC医学中心","拜耳","飞利浦"],intern:"生命科学/医学研究实习机会，荷兰政府政策类实习",city:4.0,cityNote:"荷兰第四大城市，生活节奏轻松，城市性价比好，离阿姆斯特丹30min",local:"求职年1年，生命科学/医学研究路径，医疗需要荷兰执照",back:"QS 82名，生命科学/医学研究方向国内科研院所认可",xhs:"乌得勒支大学 Utrecht 就业 荷兰",bili:"乌得勒支大学 留学 就业"},
  "莱顿大学":{prog:"法学/人文/国际关系/政治科学",cos:["国际法庭","欧盟机构","荷兰政府","各律所"],intern:"海牙国际法院在旁，国际法/外交实习机会全球独一无二",city:4.1,cityNote:"莱顿小城，欧洲最古老大学氛围，离海牙15min，国际机构便利",local:"求职年1年，国际法/外交/政策路径在欧洲有独特机会",back:"QS 107名，法学/国际关系方向国内外交口和法律界认可",xhs:"莱顿大学 Leiden 就业 荷兰",bili:"莱顿大学 留学 就业 法学"},
  "东京大学":{prog:"工学/理学/法学/经济学",cos:["丰田","索尼","麦肯锡日本","政府机构"],intern:"东大=日本最高就业名片，政府/大企业校招最活跃，日语N2+机会倍增",city:4.5,cityNote:"本乡/驹场校区，东京城市资源无敌，交通便利，美食文化一流",local:"毕业转求职签，东大=日本企业直接优先，需要日语N1/N2",back:"QS 22名，国内最高认可，科研院所直接点名，回国发展也极好",xhs:"东京大学 就业 实习 日本",bili:"东京大学 留学 就业 日本"},
  "京都大学":{prog:"理学/工学/医学/人文",cos:["京瓷","岛津制作所","政府科研院","各大学"],intern:"关西工业圈实习机会，京都企业独特文化，学术科研实习全球一流",city:4.4,cityNote:"古都氛围绝美，寺庙和文化遍布，研究型学术社区，生活成本低于东京",local:"毕业转求职签，研究型背景在日本学界和大企业有路径，日语是门槛",back:"QS 31名，科研院所高度认可，人文/理学背景国内高校也有认可",xhs:"京都大学 就业 实习 日本",bili:"京都大学 留学 就业"},
  "东京工业大学":{prog:"工学/CS/理学/生命科学",cos:["丰田","日立","Sony","NTT"],intern:"东京工科圈实习机会，电机/CS/生命科学三方向均有路径",city:4.2,cityNote:"大冈山/田町校区，东京城市便利，工程氛围浓厚",local:"毕业转求职签，工科背景日本大企业校招活跃，日语程度决定机会多少",back:"QS 55名，工程/CS方向国内高度认可，理工科研院所认可",xhs:"东京工业大学 就业 实习",bili:"东工大 留学 就业 日本"},
  "大阪大学":{prog:"工学/医学/理学/外国语",cos:["松下","夏普","住友","大阪大学医院"],intern:"关西工业/医疗圈实习机会，大阪企业节奏比东京稍慢更人性化",city:4.1,cityNote:"大阪美食之都，豊中/吹田校区安静，生活成本低于东京",local:"毕业转求职签，关西工业/医疗圈工作，日语N2是基础门槛",back:"QS 52名，工学/医学方向国内认可，医科研究院所有需求",xhs:"大阪大学 就业 实习 日本",bili:"大阪大学 留学 就业"},
  "东北大学":{prog:"工学/理学/医学/农学",cos:["东北电力","IHI","政府科研院","仙台企业"],intern:"仙台东北地区工业/科研实习，日本基础科研全球一流",city:4.0,cityNote:"仙台小城，东北最好的城市，生活成本极低，学术氛围纯粹",local:"毕业转求职签，科研/工业路径，仙台就业或去东京均可",back:"QS 77名，科研/工学方向国内有认可，基础科研背景高校认可",xhs:"东北大学 仙台 就业 日本",bili:"东北大学 留学 就业 日本"},
  "首尔国立大学":{prog:"CS/工学/商科/法学",cos:["三星","LG","现代汽车","韩国政府"],intern:"韩国最顶尖就业名片，三星/现代/LG校招最活跃，需要韩语N2+",city:4.4,cityNote:"冠岳校区，首尔城市资源丰富，娱乐便利，需要韩语才能深度融入",local:"D-10到E-7转签，SNU=韩国最高就业认可，韩语N2+必须",back:"QS 31名，国内CS/工程方向认可，但语言要求使实际留韩工作较难",xhs:"首尔国立大学 SNU 就业 实习",bili:"首尔国立大学 留学 就业 韩国"},
  "延世大学":{prog:"商科/CS/传播/医学",cos:["三星","现代","SK","国际企业"],intern:"新村校区便利，国际化程度高，英文实习项目多于其他韩国大学",city:4.3,cityNote:"新村站位置便利，国际化最高的韩国大学，英文项目多",local:"D-10到E-7，Yonsei国际化背景让英文求职路径更多",back:"QS 72名，商科/医学方向国内有认可",xhs:"延世大学 Yonsei 就业 实习",bili:"延世大学 留学 就业 韩国"},
  "高丽大学":{prog:"法学/商科/CS/工学",cos:["Samsung","Hyundai","各律所","SK能源"],intern:"安암校区，传统SKY名校就业，法学/商科校招活跃",city:4.2,cityNote:"安암校区热闹，传统韩国大学校园氛围，韩国学生文化活跃",local:"D-10到E-7，法学/商科在韩国认可，但需韩语N2+",back:"QS 67名，法学/商科方向国内有一定认可",xhs:"高丽大学 就业 实习 首尔",bili:"高丽大学 留学 就业 韩国"},
  "浦项科技大学":{prog:"理工/CS/材料/工学",cos:["POSCO钢铁","三星","SK海力士","LG化学"],intern:"POSCO集团直属，材料/工程实习全韩独特，浦项工业城实习机会多",city:4.1,cityNote:"浦项工业城市，生活单调但学术极纯粹，小而精的MIT式环境",local:"D-10到E-7，工程/材料背景，POSCO等大集团就业路径直接",back:"QS 149名，工程/材料背景国内钢铁/材料央企有认可",xhs:"浦项科技大学 POSTECH 就业",bili:"浦项科技大学 留学 就业 韩国"},
  "慕尼黑工业大学":{prog:"工程/CS/商科/生命科学",cos:["宝马","西门子","MAN","英飞凌"],intern:"慕尼黑工业圈实习机会极丰富，TUM与工业界合作德国最强，宣讲频繁",city:4.3,cityNote:"慕尼黑生活质量一流，啤酒节/宝马博物馆/Alps近，国际化好",local:"18月找工作居留，TUM工程/CS背景被全德工业界认可，德语助力明显",back:"QS 37名，工程/CS方向国内高度认可，德国工程背景被大型央企珍视",xhs:"TUM 慕尼黑工大 就业 实习 德国",bili:"慕尼黑工业大学 TUM 留学 就业"},
  "慕尼黑大学":{prog:"医学/自然科学/法学/经济",cos:["西门子","拜耳","各律所","慕尼黑附属医院"],intern:"慕尼黑医疗/法律/商业圈实习机会，德语是就业关键",city:4.1,cityNote:"与TUM比邻，慕尼黑城市体验共享，德语区生活融入感更强",local:"18月找工作居留，医学需要德国执照，法学/经济最灵活",back:"QS 63名，医学/经济方向国内认可",xhs:"慕尼黑大学 LMU 就业 德国",bili:"慕尼黑大学 LMU 留学 就业"},
  "海德堡大学":{prog:"医学/自然科学/法学/人文",cos:["Daimler","SAP","各生科公司","大学附属医院"],intern:"曼海姆/法兰克福近，SAP等IT公司实习，生科/医学研究实习一流",city:4.2,cityNote:"小城浪漫，欧洲最古老之一，距法兰克福/曼海姆1h，生活成本低",local:"18月找工作居留，科研/医学背景，德语决定就业深度",back:"QS 87名，医学/科研方向国内有认可",xhs:"海德堡大学 就业 德国",bili:"海德堡大学 留学 就业"},
  "柏林自由大学":{prog:"政治学/人文/历史/社科",cos:["德国联邦机构","各NGO","媒体公司","欧盟机构"],intern:"柏林是德国政治文化中心，政策/媒体/NGO实习机会独特",city:3.9,cityNote:"柏林创意之都，文化艺术夜生活全球顶尖，生活成本低于西德",local:"18月找工作居留，政策/媒体/NGO方向，德语是关键",back:"QS 98名，政治学/人文方向国内认可度一般，回国需结合专业",xhs:"柏林自由大学 就业 德国",bili:"柏林自由大学 留学 就业"},
  "卡尔斯鲁厄理工":{prog:"CS/工程/电子/数学",cos:["宝马","Daimler","SAP","博世"],intern:"南德工业走廊核心位置，汽车/电子/CS实习资源极丰富",city:4.0,cityNote:"卡尔斯鲁厄小城，工程文化纯粹，离斯图加特/曼海姆近，生活简单",local:"18月找工作居留，CS/工程/电子背景全德工业界认可",back:"QS 119名，CS/工程方向国内认可，德国工科背景央企珍视",xhs:"KIT 卡尔斯鲁厄 就业 德国",bili:"卡尔斯鲁厄理工 KIT 留学 就业"},
  "亚琛工业大学":{prog:"工程/CS/机械/航空",cos:["宝马","蒂森克虏伯","西门子","福特德国"],intern:"RWTH与德国工业界合作全欧最强，每年大型工程实习博览会，内推极活跃",city:4.1,cityNote:"德比边境小城，工业氛围纯粹，学生国际化好，离科隆/杜塞尔多夫1h",local:"18月找工作居留，机械/工程/CS被全德汽车工业认可，直接校招",back:"QS 106名，工程/机械方向国内高度认可，德国顶尖工科背景被大型央企认可",xhs:"RWTH 亚琛工业大学 就业 德国",bili:"亚琛工业大学 RWTH 留学 就业"},
  "奥克兰大学":{prog:"商科/工程/法学/医学",cos:["德勤","汇丰新西兰","宝马新西兰","Auckland Council"],intern:"奥克兰商科/IT/政府实习机会，新西兰最大就业市场在此",city:3.9,cityNote:"新西兰第一大学城，太平洋多元文化，华人多适应快，节奏轻松",local:"PSW工签最长3年，技术移民Green List路径清晰，IT/医疗PR最快",back:"QS 65名，工程/商科方向国内有认可，但新西兰更适合以移民为目标",xhs:"奥克兰大学 新西兰 就业 实习",bili:"奥克兰大学 留学 就业"},
  "马来亚大学":{prog:"工程/商科/CS/医学",cos:["壳牌马来西亚","汇丰","Maybank","跨国企业区域部"],intern:"吉隆坡跨国企业区域部实习机会，东南亚最好的本地就业网络",city:3.7,cityNote:"吉隆坡南部，华语环境，跨国企业近，整体费用极低",local:"可申就业签，以留东南亚跨国企业为主要路径",back:"QS 65名，工程/商科方向国内有一定认可，但整体认可度低于英美澳",xhs:"马来亚大学 就业 吉隆坡",bili:"马来亚大学 UM 留学 就业"},
  "马来西亚国民大学":{prog:"工程/自然科学/商科/医学",cos:["政府部门","国家石油","马来西亚银行","中国建筑马来"],intern:"马来西亚政府/石油业实习机会，华人背景有优势",city:3.5,cityNote:"班吉校区安静，政府背景浓，马来文化融合，生活费用极低",local:"留马来西亚就业门槛低，但薪资有限，适合性价比优先",back:"QS 200名以外，国内认可度有限，适合特定目的选择",xhs:"马来西亚国民大学 UKM 就业",bili:"马来西亚国民大学 留学 就业"},
  "巴黎文理研究大学":{prog:"数学/物理/CS/人文",cos:["麦肯锡","谷歌","LVMH","法国科研院"],intern:"精英学院人脉极强，PSL联盟实习资源覆盖所有顶级机构",city:4.4,cityNote:"巴黎多点校区，拉丁区/奥赛等精华地带，文化体验无与伦比",local:"APS 1年求职，PSL品牌+法语就业在法国/欧洲竞争力极强",back:"QS 24名，国内高度认可，数学/物理/CS方向科研院所顶级认可",xhs:"PSL 巴黎文理大学 就业 法国",bili:"巴黎文理研究大学 PSL 留学 就业"},
  "索邦大学":{prog:"人文/历史/文学/自然科学",cos:["法国国家科研院","各大学院","文化机构","法国媒体"],intern:"巴黎文化/学术/媒体圈实习机会，法语背景在欧洲文化行业独特",city:4.2,cityNote:"巴黎心脏拉丁区，人文氛围极浓，传统学术生活，文化体验一流",local:"APS 1年，人文/文化/学术路径，法语B2+是关键",back:"QS 83名，人文/历史方向国内高校认可，选择回国需有明确专业方向",xhs:"索邦大学 Sorbonne 就业 法国",bili:"索邦大学 留学 就业"},
  "巴黎综合理工学院":{prog:"工程/CS/数学/经济学",cos:["空客","ENGIE","麦肯锡","法国国防部"],intern:"X校友网络是法国最顶尖精英人脉，政商两界均活跃，宣讲机会极多",city:4.5,cityNote:"帕雷索校区，精英校园氛围极强，巴黎30min可达",local:"APS 1年，X背景在法国/欧洲工程/咨询就业最顶级",back:"QS 65名，工程/数学/CS方向国内高度认可，X背景科研院所直接点名",xhs:"巴黎综合理工 就业 法国 实习",bili:"巴黎综合理工 Polytechnique 留学 就业"},
  "巴黎-萨克雷大学":{prog:"数学/物理/工程/CS",cos:["诺基亚贝尔实验室","科研院","赛峰集团","法电力集团"],intern:"巴黎南郊科研聚集地，实验室实习机会极独特",city:4.2,cityNote:"巴黎南郊科学新城，离市区30min，科研密度超高，生活较单调",local:"APS 1年，科研/工程路径明确，法语决定就业深度",back:"QS 61名，数学/物理/工程方向科研院所高度认可",xhs:"巴黎萨克雷大学 就业 法国",bili:"巴黎萨克雷大学 留学 就业"},
  "皇家理工学院":{prog:"CS/工程/建筑/工业工程",cos:["爱立信","ABB","Spotify","SSAB"],intern:"斯德哥尔摩科技圈，KTH与工业界合作极紧密，Spotify/爱立信校招活跃",city:4.2,cityNote:"斯德哥尔摩城市资源一流，KTH校区在城市核心，北欧工作生活平衡",local:"找工作居留申请，KTH工程/CS在北欧就业竞争力极强",back:"QS 65名，CS/工程方向国内认可，北欧绿能/电信背景也有回国市场",xhs:"KTH 皇家理工 就业 瑞典",bili:"KTH 留学 就业 斯德哥尔摩"},
  "隆德大学":{prog:"商科/法学/医学/工程",cos:["IKEA","SKF","Alfa Laval","区域企业"],intern:"南瑞典工业走廊，IKEA/汽车行业实习机会，Malmö/哥本哈根1h可到",city:4.1,cityNote:"隆德小城，北欧最古老大学，生活节奏轻松，比斯德哥尔摩生活费低",local:"找工作居留，商科/工程/法学路径，瑞典语对就业有帮助",back:"QS 84名，商科/工程/医学方向国内有认可",xhs:"隆德大学 Lund 就业 瑞典",bili:"隆德大学 留学 就业 瑞典"},
  "乌普萨拉大学":{prog:"医学/自然科学/IT/人文",cos:["阿斯利康(附近)","Recs Group","政府机构","大学研究院"],intern:"斯德哥尔摩近（1h），医学/科研/IT三方向实习机会",city:4.0,cityNote:"乌普萨拉小城安静，北欧最古老大学城氛围，离斯德哥尔摩1h",local:"找工作居留，医学/科研方向路径，北欧工作生活平衡真实",back:"QS 98名，医学/科学方向国内科研院所有认可",xhs:"乌普萨拉大学 Uppsala 就业 瑞典",bili:"乌普萨拉大学 留学 就业"},
  "鲁汶大学":{prog:"工学/商科/生物医学/法学",cos:["杨森制药","UCB","AB InBev","欧盟机构"],intern:"布鲁塞尔欧盟机构实习独一无二，鲁汶制药圈实习机会，比利时工业圈资源",city:4.2,cityNote:"鲁汶小城，典型欧陆大学城，法语/荷兰语双语，比利时中心地带",local:"单一许可求职，欧盟机构/制药/工程路径，布鲁塞尔政策职位独特",back:"QS 42名，工程/商科/生物医学方向国内认可",xhs:"鲁汶大学 KU Leuven 就业 比利时",bili:"鲁汶大学 留学 就业"},
  "哥本哈根大学":{prog:"医学/生命科学/法学/社科",cos:["诺和诺德","LEO制药","Lundbeck","各律所"],intern:"哥本哈根生命科学圈爆发式增长（诺和诺德效应），医学/制药实习极热",city:4.2,cityNote:"北欧最大学术城市，城市资源一流，幸福感真实存在，冬天日照少",local:"找工作居留，生命科学/医学方向就业最旺盛，诺和诺德等直接校招",back:"QS 101名，医学/生命科学方向国内科研院所认可",xhs:"哥本哈根大学 就业 丹麦",bili:"哥本哈根大学 留学 就业"},
  "丹麦技术大学":{prog:"工学/生命科学/CS/数学",cos:["诺和诺德","维斯塔斯","Grundfos","丹麦政府"],intern:"北欧绿能/生命科学/工程三重机会，维斯塔斯/诺和诺德实习活跃",city:4.1,cityNote:"林比小城，DTU校区安静整洁，离哥本哈根30min，性价比生活",local:"找工作居留，工程/生命科学/CS在北欧就业竞争力强",back:"QS 132名，工程/绿能方向国内认可，风能背景清洁能源央企感兴趣",xhs:"DTU 丹麦技术大学 就业",bili:"丹麦技术大学 DTU 留学 就业"},
  "清华大学":{prog:"工学/CS/商科/公共政策",cos:["华为","字节跳动","百度","国务院各部委"],intern:"海淀科技圈实习机会无敌，苏世民书院国际项目独特，校招全国最强",city:4.5,cityNote:"海淀学区，北京科技+政治核心，校园内学术资源无限，生活设施完善",local:"北京本地直接就业，互联网/国央企/政策三路径均为最优选择",back:"QS 20名，选调/国央企/落户全部最顶级，相当于在国内就读",xhs:"清华大学 国际生 就业 实习",bili:"清华大学 留学生 就业 体验"},
  "北京大学":{prog:"人文/经济/CS/法学",cos:["华为","腾讯","中金公司","政府机构"],intern:"北京政策圈和金融圈实习机会，人文/经济/法学校友网络极强",city:4.4,cityNote:"燕园，北京历史文化核心，校园百年底蕴，北京城市资源无限",local:"北京直接就业，人文/政策/金融三路径最顶尖",back:"QS 17名，所有方向最高认可，北京政策圈特别偏好北大背景",xhs:"北京大学 国际生 就业 实习",bili:"北京大学 留学生 就业 生活"},
  "复旦大学":{prog:"经济/法学/CS/人文",cos:["浦发银行","麦肯锡上海","华为","各外资机构"],intern:"上海陆家嘴金融圈和科技圈实习机会，复旦校友网络在上海最强",city:4.3,cityNote:"杨浦+江湾校区，上海历史学术氛围，城市资源极丰富，国际化好",local:"上海直接就业，金融/法律/科技三路径，复旦品牌在上海=最高认可",back:"QS 42名，上海落户最顺畅，经济/法学/CS校招覆盖全行业",xhs:"复旦大学 国际生 就业 实习",bili:"复旦大学 留学生 就业 上海"},
  "上海交通大学":{prog:"工学/医学/金融/CS",cos:["华为","字节","中芯国际","上汽集团"],intern:"闵行工科圈和徐汇医学院实习资源极强，工程/医学/CS三方向联系紧密",city:4.3,cityNote:"闵行校区开阔，医学院在徐汇，上海工业/医疗双中心",local:"上海直接就业，工程/医学/CS校招全国最强之一",back:"QS 47名，上海落户顺畅，工程/医学方向国央企最高认可",xhs:"上海交通大学 国际生 就业 实习",bili:"上海交通大学 留学生 就业"},
  "浙江大学":{prog:"工学/CS/医学/商科",cos:["阿里巴巴","网易","海康威视","绿城集团"],intern:"杭州互联网生态实习机会无敌，阿里/字节在杭实习渠道最直接",city:4.2,cityNote:"紫金港校区现代开阔，杭州互联网之都，生活质量好，房价较低",local:"杭州直接就业，互联网/工程/医学三路径，校招全国一流",back:"QS 47名，杭州落户顺畅，CS/工程方向国央企高度认可",xhs:"浙江大学 国际生 就业 实习",bili:"浙江大学 留学生 就业"},
  "南京大学":{prog:"天文/地学/化学/文学",cos:["中国天文台","地质调查局","各化工央企","南京政府"],intern:"南京科研院所实习机会，天文/地学/化学三方向科研资源最强",city:4.1,cityNote:"鼓楼+仙林双校区，南京人文古城氛围，六朝古都历史体验独特",local:"南京直接就业，科研/政策/制造方向，南京央企和省属机构多",back:"QS 63名，科研院所方向认可，化学/地学背景特定央企偏好",xhs:"南京大学 国际生 就业 实习",bili:"南京大学 留学生 就业"},
  "中国科学技术大学":{prog:"量子/物理/AI/化学",cos:["科大讯飞","中科院各所","量子计算公司","国防科研"],intern:"科学岛和合肥量子圈实习机会极独特，中科院直属联系",city:4.2,cityNote:"合肥科学岛，科研密度全国最高之一，生活简单但学术极纯粹",local:"合肥+北京科研院所就业，国防科研/量子计算/AI三方向最顶尖",back:"QS 63名，科研院所最高认可，量子/AI/国防背景国内最珍视",xhs:"中科大 国际生 就业 合肥",bili:"中国科学技术大学 留学生 就业"},
};

/* 落户政策（按城市×QS排名区间） */
const CITY_TALENT_POLICY=[
  {city:"上海",flag:"🏙️",tiers:[
    {qs:"QS前50",badge:"qs-top50",benefit:"应届可直接申办积分落户绿色通道，无需等待积分排队"},
    {qs:"QS 51–200",badge:"qs-top200",benefit:"人才引进居住证，缩短积分等待年限，可申海聚英才计划"},
  ],note:"需教育部留服中心学历认证 + 上海工作单位缴社保6个月"},
  {city:"北京",flag:"🏛️",tiers:[
    {qs:"QS前100",badge:"qs-top100",benefit:"海聚工程可申请，北京积分制落户加分，单位解决户口优先"},
    {qs:"QS 101–300",badge:"qs-top200",benefit:"积分制落户，学历积分最高档，等待周期较长"},
  ],note:"北京落户最严格，主要依靠工作单位（央企/高校/体制内）申报"},
  {city:"深圳",flag:"🌆",tiers:[
    {qs:"QS前200",badge:"qs-top200",benefit:"高层次人才E类认定，安居费15万/年最多3年，落户绿色通道"},
    {qs:"QS 201–500",badge:"qs-top500",benefit:"D类或孔雀计划其他类别，有一次性补贴"},
  ],note:"深圳落户门槛相对低，QS前200大幅提速，应届生友好"},
  {city:"广州",flag:"🌸",tiers:[
    {qs:"QS前200",badge:"qs-top200",benefit:"高层次人才认定 + 补贴，落户广州较顺畅"},
    {qs:"QS 201–500",badge:"qs-top500",benefit:"人才绿卡，享受居住证待遇，后续可转落户"},
  ],note:"广州对海归相对友好，手续比北京简单"},
  {city:"杭州",flag:"🌿",tiers:[
    {qs:"QS前200",badge:"qs-top200",benefit:"高层次人才，安家费补贴，落户顺畅"},
    {qs:"QS 201–500",badge:"qs-top500",benefit:"蓉漂人才计划，享受补贴和落户便利"},
  ],note:"杭州积极吸引互联网/AI人才，落户政策较宽松"},
  {city:"成都",flag:"🐼",tiers:[
    {qs:"QS前500",badge:"qs-top500",benefit:"蓉漂计划，安家费+租房补贴，落户快"},
    {qs:"其他知名高校",badge:"qs-top500",benefit:"学历落户，大专及以上可办理"},
  ],note:"成都落户最宽松，海归普遍受欢迎"},
  {city:"南京",flag:"🏮",tiers:[
    {qs:"QS前500",badge:"qs-top500",benefit:"宁聚计划，补贴+落户，海归一次性奖励"},
    {qs:"QS前200",badge:"qs-top200",benefit:"高层次人才直接落户，可申安居补贴"},
  ],note:"南京对海归友好，苏南地区落户政策宽"},
  {city:"武汉/西安/其他",flag:"🌍",tiers:[
    {qs:"QS前500",badge:"qs-top500",benefit:"黄鹤英才/丝路人才等计划，补贴+落户"},
    {qs:"任意高校",badge:"qs-top500",benefit:"多数中西部城市欢迎本科及以上海归落户"},
  ],note:"中西部城市落户条件最宽松，部分城市可现场办理"},
];

/* 回国发展路径 */
const RETURN_TRACKS=[
  {title:"🏛️ 中央国家机关定向选调",qs:["qs-top50","qs-top100"],note:"多数部委明确要求QS前百高校，北清人大优先；外交部/商务部/发改委等重点部门"},
  {title:"🏢 央企校园招聘（总部岗）",qs:["qs-top100","qs-top200"],note:"四大行总行/中石油/中航/国家电网等央企总部岗通常要求QS前200，管培生项目更严"},
  {title:"🏦 国有商业银行（总分行）",qs:["qs-top100","qs-top200"],note:"总行管培生倾向QS前100，分行/省行招聘通常放宽至QS前300"},
  {title:"🔬 科研院所/高校",qs:["qs-top100"],note:"中科院/工程院附属研究所及985高校招聘，看重海外高校学术声誉，QS前100优先"},
  {title:"🏙️ 省市选调生",qs:["qs-top200","qs-top500"],note:"各省选调条件不同，发达省份（粤浙沪）要求QS前200，中西部省份通常QS前500"},
  {title:"💼 外资企业/四大咨询",qs:["qs-top200"],note:"麦肯锡/BCG/高盛中国等外资不看QS排名，主要看学校名气和个人能力"},
  {title:"💻 互联网/科技大厂",qs:["qs-top200","qs-top500"],note:"华为/字节/阿里/腾讯等对海归学历包容度高，看重技能和项目经验"},
  {title:"🌏 地方国企/政府机构",qs:["qs-top500"],note:"各地政府引才项目大多接受QS前500学校，核心看是否在教育部认可高校名单"},
];

/* 奖学金预设（快速加入追踪） */
const SCHOL_PRESETS=[
  {name:"Chevening英国政府奖学金",country:"uk",flag:"🇬🇧",amt:"全额（学费+生活费+机票）",dl:"11-01",note:"英国外交部，需2年工作经验，每年9月开放申请"},
  {name:"CSC国家公派研究生",country:"cn",flag:"🇨🇳",amt:"全额（学费+生活费+保险）",dl:"03-15",note:"国家留学基金委，提前1年申请，通过高校推荐"},
  {name:"澳大利亚奖学金 (Australia Awards)",country:"au",flag:"🇦🇺",amt:"全额（学费+生活+签证）",dl:"04-30",note:"澳洲外交贸易部，针对发展中国家"},
  {name:"DAAD德国学术交流项目",country:"de",flag:"🇩🇪",amt:"月均€934生活费+学费减免",dl:"10-15",note:"德意志学术交流中心，语言培训+奖学金一体"},
  {name:"瑞典SI奖学金",country:"se",flag:"🇸🇪",amt:"全额（学费+生活费）",dl:"02-01",note:"瑞典国际协会，竞争激烈，申请成功率约5%"},
  {name:"日本MEXT文部省奖学金",country:"jp",flag:"🇯🇵",amt:"全额（学费+月¥14.7万生活费）",dl:"05-31",note:"日本文部科学省，分为大使馆推荐和大学推荐两类"},
  {name:"韩国GKS政府奖学金",country:"kr",flag:"🇰🇷",amt:"全额（学费+月₩900,000）",dl:"03-31",note:"韩国国家教育奖学金，含语言培训，竞争较激烈"},
  {name:"荷兰橙色郁金香奖学金",country:"nl",flag:"🇳🇱",amt:"€5,000–25,000不等",dl:"02-01",note:"各荷兰院校联合，需向院校直接申请"},
  {name:"香港博士研究生奖学金",country:"hk",flag:"🇭🇰",amt:"HKD 26,900/月+学费全免",dl:"12-01",note:"香港研究资助局，主要针对博士，少量硕士"},
  {name:"新加坡SMU奖学金",country:"sg",flag:"🇸🇬",amt:"学费全免+SGD 6,000生活费",dl:"03-15",note:"新加坡管理大学，竞争激烈，需要优异背景"},
  {name:"法国政府优秀奖学金",country:"fr",flag:"🇫🇷",amt:"€700/月生活费+学费减免",dl:"03-01",note:"法国高校管理局（Campus France），通过法国使馆申请"},
  {name:"比利时鲁汶大学优秀奖",country:"be",flag:"🇧🇪",amt:"€8,000/年",dl:"02-15",note:"KU Leuven面向优秀国际学生，需高GPA"},
  {name:"丹麦政府奖学金",country:"dk",flag:"🇩🇰",amt:"学费全免（部分国家）",dl:"03-01",note:"针对非EU/EEA国家学生，通过申请高校获得"},
  {name:"英联邦奖学金",country:"uk",flag:"🇬🇧",amt:"全额（学费+生活+机票）",dl:"12-31",note:"英联邦奖学金委员会，面向英联邦成员国"},
  {name:"NUS/NTU总统奖学金",country:"sg",flag:"🇸🇬",amt:"学费全免+生活补贴",dl:"02-28",note:"新加坡国大/南大顶级奖项，需向学校直接申请，竞争极激烈"},
  {name:"ETH苏黎世卓越奖学金",country:"ch",flag:"🇨🇭",amt:"CHF 12,000/年",dl:"12-15",note:"ETH Excellence Scholarship，仅限硕士，需推荐信+申请材料"},
  {name:"加拿大Vanier奖学金",country:"ca",flag:"🇨🇦",amt:"CAD 50,000/年（3年）",dl:"11-01",note:"加拿大三大奖之一，主要针对博士，硕博连读可用"},
  {name:"澳大利亚RTP研究培训计划",country:"au",flag:"🇦🇺",amt:"学费全免+生活津贴AUD 32,192/年",dl:"10-31",note:"Research Training Program，主要针对研究型硕士/博士"},
  {name:"UCL全球影响力奖学金",country:"uk",flag:"🇬🇧",amt:"学费全额",dl:"04-15",note:"伦敦大学学院面向全球顶尖学生，竞争激烈需早申请"},
  {name:"剑桥信托奖学金",country:"uk",flag:"🇬🇧",amt:"£20,000/年",dl:"10-05",note:"Cambridge Trust，需单独申请，配合各学院奖学金"},
];

/* 就业 & 生活 */
const CAREERS={
  uk:["毕业工签：Graduate Route 2 年，无需雇主担保即可留英找工作","就业：伦敦金融/咨询/科技机会多；非伦敦城市生活成本更低","薪资：初级岗位约 £25,000–35,000/年，税后到手约 70%","医疗：IHS 附加费已随签证缴，享受 NHS 公费医疗，无需另购保险","生活：公共交通发达，华人超市与社区成熟；冬季日照短需适应","租金：伦敦 £900–1,500/月，曼彻斯特/利兹/爱丁堡 £550–900/月"],
  us:["毕业工签：OPT 12 个月，STEM 延至 36 个月；之后需 H-1B 抽签（中签率约 25%）","就业：科技/金融/咨询机会全球最强，湾区/纽约/西雅图为核心","薪资：CS/金融起薪 $80,000–120,000/年，技术岗含股票总包更高","H-1B：每年 4 月抽签，STEM OPT 期间可参与 3 次，未中签需有 Plan B","生活：需开车的城市多，医疗保险贵；华人社区在大城市成熟","租金：湾区/纽约 $2,500–4,000/月，其他城市 $1,200–2,000/月"],
  au:["毕业工签：485 签证 2–4 年，偏远地区读书可留更长","就业：矿业/金融/IT/医护需求大；偏远地区有移民技能加分","薪资：初级岗位约 AUD 55,000–70,000/年，IT/工程/医护偏高","移民：技术移民（189/190）路径清晰，工作经验+职业评估是关键","生活：气候宜人、节奏轻松、安全度高，华人社区成熟","租金：悉尼/墨尔本合租人均 AUD 200–350/周，其他城市更低"],
  ca:["毕业工签：PGWP 最长 3 年，衔接 Express Entry 移民路径清晰","就业：科技（多伦多/温哥华/滑铁卢走廊）、金融、资源能源","薪资：初级岗位约 CAD 50,000–70,000/年，科技走廊更高","移民：Express Entry CRS 分数制，工作经验+语言是关键，越早越有利","生活：安全宜居、华人社区成熟；冬季寒冷","租金：多伦多/温哥华偏贵，其他城市性价比更好"],
  sg:["毕业工签：可申 EP / S Pass，EP 需达薪资门槛（约 SGD 5,000/月）","就业：亚洲金融与科技枢纽，机会多但外籍人士竞争激烈","薪资：EP 门槛岗位约 SGD 5,000/月，金融/科技高端岗位更高","住宿：HDB 合租约 SGD 800–1,200/月，私人公寓更贵","生活：中英双语、治安极好、城市高效，但生活成本在亚洲中较高","特点：离家近、时差小，适合想在亚洲发展又不想离家太远的同学"],
  hk:["毕业工签：IANG 无条件留港 12 个月，续签门槛低","就业：金融、贸易、专业服务强；离内地近，跨境机会多","薪资：初级岗约 HKD 15,000–22,000/月，金融/科技高端岗位更高","内地联系：香港金融城与内地市场双轨，有意回内地发展选择多","生活：节奏快、国际化、华人文化接近，居住空间小","租金：全港租金极高（普通单人房 HKD 5,000–9,000/月），是最大开销"],
  ch:["毕业工签：可申 6 个月找工作居留，需雇主担保转正式工签","就业：薪资全球最高之一，制药/金融/科技/工程机会好","薪资：工程/制药/金融初级约 CHF 80,000–110,000/年，税后约 75–80%","医保：必须购买强制医疗保险（Krankenkasse），每月约 CHF 300–500","生活：安全、风景好、多语言；苏黎世/日内瓦物价全球最贵","特点：学费极低+高薪，如果能留瑞，长期投入产出比无敌"],
  nl:["毕业工签：求职年（zoekjaar）1 年，找到工作可转工作居留","就业：科技/物流/农食品/金融，英语岗位多，荷兰语加分明显","薪资：初级岗约 €30,000–45,000/年；30% 税收优惠政策可减税","住宿：大城市租房极紧，拿到offer立刻开始找房","生活：国际化、英语沟通无障碍、自行车文化","特点：菲利普斯/壳牌/ASML等总部所在地，科技就业机会好"],
  jp:["毕业工签：可转「特定活动（求职）」签证在日找工作","就业：IT/制造业/外企需求大；日语流利则机会大幅增加","薪资：外资/IT 岗位约 ¥400–700万/年；日企起步偏低但晋升稳定","生活：治安极好、公共交通准点、饮食好，生活本身很舒适","花费：国公立学费低+生活成本中等，整体性价比在发达国家里突出","文化：日本职场层级分明，适应文化需要一定时间"],
  kr:["毕业工签：D-10 求职签，找到工作转 E-7 工作签","就业：三星/LG/现代等大企业、IT 行业、文化产业；深耕需韩语","薪资：初级岗约 ₩2,800–4,000万/年；大企业待遇更好","文化：职场层级分明，加班文化存在，近年在改善，外企更灵活","生活：城市便利、娱乐丰富、网络发达","租金：首尔租金偏高，要算好预算"],
  de:["毕业工签：18 个月找工作居留，衔接欧盟蓝卡","就业：工程/汽车/IT/制造业需求大，德语助力明显","薪资：工程/IT 初级约 €45,000–60,000/年（免学费+高薪性价比极高）","欧盟蓝卡：拿到工作后申请，21 个月可申永居（IT 快速通道更短）","生活：性价比高、社会福利好、城市宜居","花费：公立免学费+生活成本合理，是发达国家中整体最省的路线"],
  nz:["毕业工签：开放工签最长 3 年，技术移民路径友好","就业：IT/工程/农业/旅游需求；机会集中在奥克兰，外省移民加分","薪资：初级岗约 NZD 55,000–70,000/年，生活成本比澳洲低","移民：技术移民积分制，工作经验+技能需求列表是关键","生活：环境安全、节奏轻松、气候宜人，华人社区成熟","特点：适合想轻松完成学业又有移民路径的同学，不适合追排名"],
  my:["毕业去向：可申就业/创业相关签证，留东南亚或回国均可","就业：分校学位认可度高；吉隆坡有大量跨国企业区域总部","薪资：本地薪资远低于西方国家，但对接东南亚市场有优势","特点：壳牌/汇丰等跨国公司区域总部在吉隆坡，英文岗位多","生活：费用极低、英文普及、华人多、饮食合口味","花费：全球最省之一，适合预算有限又想拿国际学历的同学"],
  fr:["毕业工签：APS 找工作居留约 1 年，可转工签；欧盟内流动方便","就业：奢侈品（LVMH/开云）/工程（空客/雷诺）/商科；巴黎机会集中","薪资：初级岗约 €28,000–40,000/年，巴黎高于外省","语言：法语是就业关键门槛，B2 以上才能真正打开就业市场","生活：文化底蕴深、欧盟内流动方便；巴黎租金高，外省性价比更好","花费：公立学费低，整体性价比好，但巴黎生活成本不低"],
  se:["毕业工签：可申找工作居留；找到工作转工作许可","就业：爱立信/Spotify/IKEA 等科技/消费企业，多英文岗；官方岗位需瑞典语","薪资：初级岗约 SEK 30,000–42,000/月（税后约 €2,000–2,800）","文化：北欧工作生活平衡著称，带薪假期多、弹性大","生活：高福利、英语普及、环境好；冬季日照短","特点：SI 奖学金可覆盖学费+生活费，争取到就是零成本留学"],
  be:["毕业工签：可申求职居留，找到工作转单一许可","就业：欧盟机构（NATO/EC）实习/就业机会独特；工程/生物/咨询","薪资：初级岗约 €30,000–45,000/年；欧盟机构薪酬另有体系","欧盟机会：布鲁塞尔是欧盟行政中心，政策/咨询/NGO 领域就业独特","生活：性价比高、欧洲中心、多语言、交通便利（法/荷/德可通勤）","花费：学费适中，整体实惠"],
  dk:["毕业工签：可申找工作居留；找到工作转工作许可","就业：马士基（航运）/诺和诺德（制药）/Vestas（风能）等全球企业","薪资：初级岗约 DKK 35,000–45,000/月（税率高，净得约 55%）","文化：幸福指数高，工作生活平衡，不加班是常态，福利体系完善","生活：英语普及率极高、安全、整洁","花费：学费+物价较高，需预算或争取奖学金"],
  cn:["毕业去向：直接对接国内就业市场，实习机会丰富","就业：科技/金融/制造业需求大；清北复交等校友网络在国内极强","国际生优势：多语言背景，适合国际贸易/外交/跨文化岗位","薪资：视专业和城市差异大；头部互联网/金融薪资具竞争力","奖学金：CSC 覆盖学费+住宿+生活费，加上国内低成本，是最省的「留学」路线","花费：学费低+生活成本可控，整体是各选项中最低的"],
};

/* 国家概览深化数据 */
const OV_SCORES={
  uk:{lang:3,visa:3,employ:4,migr:4,value:3},
  us:{lang:3,visa:2,employ:5,migr:2,value:2},
  au:{lang:3,visa:4,employ:4,migr:5,value:3},
  ca:{lang:3,visa:4,employ:4,migr:5,value:3},
  sg:{lang:4,visa:3,employ:4,migr:3,value:3},
  hk:{lang:4,visa:4,employ:4,migr:3,value:3},
  de:{lang:2,visa:3,employ:4,migr:5,value:5},
  ch:{lang:2,visa:3,employ:4,migr:3,value:4},
  nl:{lang:4,visa:3,employ:4,migr:4,value:4},
  jp:{lang:2,visa:3,employ:3,migr:3,value:4},
  kr:{lang:2,visa:3,employ:3,migr:3,value:4},
  fr:{lang:2,visa:3,employ:3,migr:4,value:5},
  se:{lang:4,visa:3,employ:3,migr:4,value:4},
  be:{lang:3,visa:3,employ:3,migr:4,value:5},
  dk:{lang:4,visa:3,employ:3,migr:4,value:3},
  nz:{lang:3,visa:4,employ:3,migr:4,value:3},
  my:{lang:4,visa:4,employ:3,migr:2,value:5},
  cn:{lang:3,visa:5,employ:4,migr:5,value:5},
};
const OV_STATS={
  uk:{schools:"24所",qsTop100:"12所",tuition:"£15k–30k/年",visa:"3周",workVisa:"2年"},
  us:{schools:"20所",qsTop100:"15所",tuition:"$30k–60k/年",visa:"3–4月",workVisa:"12–36月"},
  au:{schools:"10所",qsTop100:"8所",tuition:"AUD35k–55k/年",visa:"2–8周",workVisa:"2–4年"},
  ca:{schools:"8所",qsTop100:"5所",tuition:"CAD20k–40k/年",visa:"2–16周",workVisa:"≤3年"},
  sg:{schools:"4所",qsTop100:"3所",tuition:"SGD30k–55k/年",visa:"2–8周",workVisa:"按合同"},
  hk:{schools:"6所",qsTop100:"5所",tuition:"HKD12w–20w/年",visa:"4–8周",workVisa:"12月+"},
  de:{schools:"9所",qsTop100:"3所",tuition:"免费（注册费€350）",visa:"4–8周",workVisa:"18月"},
  ch:{schools:"3所",qsTop100:"3所",tuition:"CHF1.5k–3k/年",visa:"2–4周",workVisa:"6月"},
  nl:{schools:"4所",qsTop100:"4所",tuition:"€14k–22k/年",visa:"6–12周",workVisa:"1年"},
  jp:{schools:"6所",qsTop100:"3所",tuition:"¥54w/年",visa:"1–3月",workVisa:"6月"},
  kr:{schools:"4所",qsTop100:"3所",tuition:"₩400w–800w/年",visa:"5–10天",workVisa:"6月"},
  fr:{schools:"4所",qsTop100:"3所",tuition:"免费（注册费€600）",visa:"2–4周",workVisa:"≈1年"},
  se:{schools:"3所",qsTop100:"2所",tuition:"€8k–18k/年",visa:"2–4月",workVisa:"求职期"},
  be:{schools:"3所",qsTop100:"2所",tuition:"€700–4k/年",visa:"4–8周",workVisa:"求职期"},
  dk:{schools:"2所",qsTop100:"2所",tuition:"€8k–16k/年",visa:"2–3月",workVisa:"求职期"},
  nz:{schools:"3所",qsTop100:"3所",tuition:"NZD25k–40k/年",visa:"1–4周",workVisa:"≤3年"},
  my:{schools:"4所",qsTop100:"1所",tuition:"RM15k–35k/年",visa:"4–10周",workVisa:"按合同"},
  cn:{schools:"3所",qsTop100:"2所",tuition:"¥2w–5w/年",visa:"3–5天",workVisa:"视情况"},
};
const OV_PROSCONS={
  uk:{pros:["Graduate Route工签2年无需雇主担保","滚动录取越早越好，9月可开投","英语教学，无语言转换成本","QS世界前50有12所"],cons:["伦敦生活成本极高","1年制课程强度大节奏快","IHS医疗附加费随签证预付","双非学生须先核院校list"]},
  us:{pros:["STEM OPT最长3年工作权","顶尖科技/金融就业市场","含股票总包薪资全球最高","科研/学术氛围最强"],cons:["H-1B每年只有25%中签率","学费+生活费总成本最高","F-1签证可能有行政审查","移民路径绿卡排期极长"]},
  au:{pros:["485工签2–4年移民友好","技术移民189/190路径清晰","两个开学季灵活选择","气候好节奏轻松"],cons:["偏远地区才有签证/PR加分","悉尼/墨尔本生活成本高","部分专业就业竞争激烈","距离国内远，时差大"]},
  ca:{pros:["PGWP衔接Express Entry移民","科技走廊就业机会强","配偶可申Open Work Permit","多元文化华人社区成熟"],cons:["冬季寒冷，大城市房价高","医保省份等待期3个月","部分院校竞争激烈难录","SDS条件对分数要求严格"]},
  sg:{pros:["离家近时差小，华人多","亚洲金融科技枢纽","中英双语环境","城市安全效率极高"],cons:["EP薪资门槛逐年提高","PR审批竞争激烈","生活成本高，空间狭小","毕业工签需自找雇主"]},
  hk:{pros:["IANG工签12月无需担保","离内地近，跨境机会多","金融/贸易岗位丰富","滚动录取，港校滚动开放"],cons:["居住成本全港最贵","节奏快压力大","空间极小居住体验差","政治环境近年有变化"]},
  de:{pros:["公立几乎免费，性价比顶尖","欧盟蓝卡21月可申永居","北欧式工作生活平衡","中国承认学历含金量高"],cons:["APS学历认证耗时1–4月","德语是就业市场关键门槛","阻断账户需预存约€11,208","冬季寒冷，部分城市生活单调"]},
  ch:{pros:["薪资全球最高之一","制药/金融/工程顶尖机会","学费极低+生活质量高","诺华/罗氏/ABB等大公司总部"],cons:["找工作后才能转工作居留","Krankenkasse医保每月约CHF400","苏黎世/日内瓦物价全球最贵","德法意三语区，语言复杂"]},
  nl:{pros:["30%税收优惠吸引外籍人才","Zoekjaar1年自由找工作","英语岗位多无需荷兰语","ASML等高科技公司总部"],cons:["阿姆斯特丹住房极度紧张","医保Zorgverzekering强制","荷兰语升职很有用","冬季阴雨绵绵日照少"]},
  jp:{pros:["国公立学费约¥54万/年超低","治安极好城市高效","文化独特生活体验丰富","IT/制造业研究实力强"],cons:["必须先联系导师获内诺","日语是职场核心门槛","COE申请到入境需4–6月","传统职场文化适应成本高"]},
  kr:{pros:["学费低+生活成本适中","三星/现代/SK等大企业总部","K-culture产业全球影响力","首尔现代化程度高"],cons:["韩语是就业关键门槛","职场层级文化加班文化","D-10到E-7转签有条件","离中国近但文化适应需时间"]},
  fr:{pros:["公立几乎免费（注册费约€600）","APS工签+欧盟内流动方便","奢侈品/航空/工程就业独特","CAF住房补贴可申请"],cons:["Campus France面谈须提前4–6月","入境后必须在ANEF验证VLS-TS","法语B2+才能真正融入就业","巴黎生活成本高，行政流程繁琐"]},
  se:{pros:["SI奖学金可覆盖全部费用","北欧工作生活平衡典范","强制6周年假+弹性工时","Spotify/Klarna等科技公司"],cons:["Antagning.se申请截止极早（1月）","居留审批需2–4月，须早申","冬季日照极短影响心情","斯德哥尔摩住房等待时间长"]},
  be:{pros:["布鲁塞尔是欧盟行政中心","学费适中性价比好","可通勤至巴黎/荷兰/德国","蓝皮书实习EU机构独特机会"],cons:["入境3工作日须登记市政厅","单一许可审批时间4–8周","布鲁塞尔英/法/荷三语复杂","政局分裂感强，行政效率偏低"]},
  dk:{pros:["诺和诺德/Vestas/马士基总部","CPR一号通吃所有服务","幸福感全球顶尖，不加班","Fast-track快速工作许可"],cons:["学费较高（欧盟外）","税率约50%，净得约55%","申请截止早，须提前5–6月","哥本哈根租房极度紧张"]},
  nz:{pros:["PSW工签最长3年无需担保","Green List绿色职业直申PR","环境安全节奏轻松","奥克兰华人社区成熟"],cons:["就业机会集中在奥克兰","薪资水平低于澳洲","移民政策变动频繁","离中国远，飞行时间长"]},
  my:{pros:["全程费用最省，性价比极高","英语教学+华人多文化亲切","跨国公司区域总部集中","东南亚市场跳板价值高"],cons:["学历认可度低于英美澳","留马PR路径不清晰","本地薪资低于西方国家","部分院校教学质量参差"]},
  cn:{pros:["CSC奖学金全覆盖+零成本","签证最容易+离家最近","国内就业市场直接对接","清北复交校友网络极强"],cons:["毕业后主要只能在国内就业","国际经历含金量相对较低","汉语授课项目HSK要求高","文化体验与出国留学有差距"]},
};

/* 就业深化数据 */
const CAREER_RICH={
  uk:{visa:"Graduate Route",visaDur:"2年（研究型3年）",visaBadge:"green",visaNote:"无需雇主担保，毕业即申请",sal:"£25,000–45,000",salUnit:"/年",salNote:"伦敦金融/科技/咨询可达 £50,000+",industries:["💹 金融/银行","💻 科技/AI","📊 管理咨询","🏥 NHS医疗","⚖️ 法律","🏗️ 建筑/工程"],migr:"Skilled Worker签证 → 5年永居 → 英国国籍",migrRating:"green",rent:"伦敦 £1,000–1,600/月，曼城/利兹 £550–900/月",healthcare:"IHS已覆盖NHS，无需另购医疗险",wlb:3,wlbNote:"伦敦竞争激烈，非伦敦城市节奏更好",tip:"Graduate Route含金量极高——无需雇主担保，毕业即可工作2年找工作/转Skilled Worker，是英国留学后最大红利"},
  us:{visa:"F-1 OPT",visaDur:"12月 / STEM 36月",visaBadge:"yellow",visaNote:"之后需 H-1B 抽签，中签率约25%",sal:"$80,000–130,000",salUnit:"/年",salNote:"湾区/纽约科技含股票总包 $150,000+",industries:["🖥️ 科技/AI/云计算","💰 金融/投行","📊 咨询（MBB）","🔬 生物医疗","🏭 半导体/芯片","📡 航空航天"],migr:"H-1B（每年抽签25%）→ EB-2/3绿卡（排期长）",migrRating:"yellow",rent:"湾区/纽约 $2,500–4,000/月，其他城市 $1,200–2,000/月",healthcare:"需购买医疗保险（学校强制校保），年费约$2,000–4,000",wlb:2,wlbNote:"科技大厂996文化，咨询更甚，但薪资顶尖",tip:"STEM OPT三年是留美工作的核心窗口，争取H-1B三次机会；不中签要有Plan B（加拿大/英国）"},
  au:{visa:"485毕业生工作签证",visaDur:"2–4年（偏远地区更长）",visaBadge:"green",visaNote:"在校城市决定工签长度",sal:"AUD 60,000–85,000",salUnit:"/年",salNote:"IT/工程/护理/矿业偏高",industries:["⛏️ 矿业/资源","💻 IT/数据","🏗️ 工程/建筑","🏥 医疗/护理","🌾 农食品","💼 商业/咨询"],migr:"485 → 技术移民189/190 → PR → 公民",migrRating:"green",rent:"悉尼/墨尔本合租人均 AUD 250–400/周，昆士兰/阿德更低",healthcare:"OSHC覆盖在校期，找工作后加入Medicare（有资格者）",wlb:4,wlbNote:"整体工作生活平衡好，强制带薪假期，节奏远慢于东亚",tip:"485工签期间赶快完成职业评估（Skills Assessment），这是189/190技术移民的前置条件，越早做越有利"},
  ca:{visa:"PGWP毕业工作许可",visaDur:"最长3年",visaBadge:"green",visaNote:"学习时长决定PGWP长度",sal:"CAD 60,000–85,000",salUnit:"/年",salNote:"多伦多/温哥华科技走廊更高",industries:["💻 科技/AI（多伦多/滑铁卢）","💰 金融/银行","⛽ 能源/资源","🏥 医疗","🏗️ 工程","🚗 制造业"],migr:"PGWP → Express Entry CRS打分 → PR → 公民",migrRating:"green",rent:"多伦多/温哥华 CAD 2,000–3,500/月，其他省城 CAD 1,200–2,000/月",healthcare:"各省医疗保险（如OHIP），等待期3个月须购私保",wlb:4,wlbNote:"整体工作生活平衡，法定假期充足，北部城市节奏更慢",tip:"PGWP期间尽快积累工作经验，Express Entry CRS分数越高越快拿PR；配偶同步申Open WP是加拿大独特优势"},
  sg:{visa:"就业准证EP/S Pass",visaDur:"1–2年（雇主续签）",visaBadge:"yellow",visaNote:"月薪门槛 EP≥SGD5,000，S Pass≥SGD3,150",sal:"SGD 4,500–7,000",salUnit:"/月",salNote:"金融/科技高级职位 SGD 8,000+",industries:["💹 金融/资产管理","💻 科技/创业","🚢 贸易/航运","🏥 生物医药","📊 咨询","🏦 银行/会计"],migr:"EP持有者 → PR（竞争激烈，约3–5年）→ 公民（10年+）",migrRating:"yellow",rent:"HDB合租 SGD 800–1,400/月，私人公寓 SGD 2,000+/月",healthcare:"职场强制公积金CPF覆盖，自付比例低",wlb:3,wlbNote:"金融/咨询节奏快，科技创业生态活跃，整体比东亚好",tip:"EP门槛逐年提高，需针对性提升薪资竞争力；新加坡PR审批严格，有规划的话最好选择前景好的行业"},
  hk:{visa:"IANG非本地毕业生",visaDur:"12个月（无条件）",visaBadge:"yellow",visaNote:"续签需就业证明，无强制薪资门槛",sal:"HKD 18,000–30,000",salUnit:"/月",salNote:"金融/科技高端职位 HKD 40,000+",industries:["💹 金融/投行","🏦 银行/保险","📊 会计/咨询","💻 科技","🚢 贸易/物流","⚖️ 法律"],migr:"IANG续签 → 受养人签注 → 永久居民（7年）",migrRating:"yellow",rent:"全港极高，单人房 HKD 6,000–12,000/月，合租可降低",healthcare:"公立医院就诊价格极低，等待时间长；私立则贵",wlb:2,wlbNote:"节奏快、加班多，是亚洲最高压城市之一，但离内地近",tip:"IANG窗口12个月一定要充分利用；香港内地联动机会独特，有回内地或跨境发展意向的话香港是最佳跳板"},
  de:{visa:"18个月找工作居留",visaDur:"18个月",visaBadge:"green",visaNote:"期间可自由求职，无薪资要求",sal:"€45,000–65,000",salUnit:"/年",salNote:"汽车/工程/IT/制药更高",industries:["🚗 汽车/制造","💻 IT/软件","⚗️ 制药/化工","🏗️ 工程","🔬 研究机构","💰 咨询/金融"],migr:"工作签证 → 欧盟蓝卡 → 21–33个月永居 → 德国国籍",migrRating:"green",rent:"柏林 €800–1,400/月，慕尼黑 €1,200–1,800/月，其他城市更低",healthcare:"公立医保（Krankenkasse）约€130/月，覆盖全面",wlb:5,wlbNote:"法定35天假期、不鼓励加班、下班后不联系是文化默契",tip:"欧盟蓝卡（Blaue Karte EU）是最快路径：持高薪合同直接申，IT/STEM 33个月可申永居，性价比极高"},
  ch:{visa:"6个月求职居留",visaDur:"6个月",visaBadge:"yellow",visaNote:"须找到工作才能转工作居留",sal:"CHF 80,000–120,000",salUnit:"/年",salNote:"制药/金融/工程可达 CHF 130,000+",industries:["💊 制药/生命科学","💰 金融/私银","⌚ 精密制造","💻 科技","🏦 跨国公司总部","🔬 研究机构"],migr:"工作居留 → 5年 B 许可 → 10年 C 许可（永居）",migrRating:"yellow",rent:"苏黎世/日内瓦 CHF 1,800–3,000/月，其他城市 CHF 1,200–1,800/月",healthcare:"强制 Krankenkasse，约 CHF 300–500/月，不可省",wlb:4,wlbNote:"整体好于英美，下午6点后基本不联系，高薪+平衡是最大卖点",tip:"瑞士薪资全球顶尖，税后到手仍可观；大公司（诺华/罗氏/瑞银/ABB）总部集中，人脉积累价值极高"},
  nl:{visa:"定向年（Zoekjaar）",visaDur:"1年",visaBadge:"green",visaNote:"无需雇主担保，全自由求职",sal:"€30,000–50,000",salUnit:"/年",salNote:"科技/金融/ASML等高端岗 €60,000+，另享30%税收优惠",industries:["💻 科技/半导体（ASML）","🚢 物流/港口","🌾 农食品","💰 金融/保险","🏢 跨国公司欧洲总部","💊 生命科学"],migr:"工作居留 → 5年永居 → 荷兰国籍（欧盟）",migrRating:"green",rent:"阿姆斯特丹 €1,400–2,200/月，代尔夫特/埃因霍温 €900–1,400/月",healthcare:"Zorgverzekering 约€140–160/月，大量报销",wlb:5,wlbNote:"荷兰是全球工作生活平衡最好的国家之一，兼职文化盛行",tip:"30%税收优惠（30% Ruling）对高薪外籍人才税率大幅降低，实际到手高于表面工资"},
  jp:{visa:"特定活动（就活）签证",visaDur:"6个月",visaBadge:"yellow",visaNote:"找到工作才能转就劳在留资格",sal:"¥350–600万",salUnit:"/年",salNote:"外资/IT/咨询可达 ¥700–1,000万",industries:["💻 IT/互联网","🏭 制造/汽车","🏦 金融/证券","🏢 外资企业","🔬 研究机构","🎮 游戏/动漫"],migr:"就劳在留 → 定住者 → 永住者（10年，有捷径可缩短）",migrRating:"yellow",rent:"东京合租 ¥50,000–100,000/月，大阪/福冈更低",healthcare:"国民健康保险，学生年保费¥10,000–30,000",wlb:2,wlbNote:"传统日企压力大，外资/IT公司越来越好；近年在改善",tip:"日本就活时间线与国内完全不同——大三/研一暑假即开始，务必了解 Rikunabi/Mynavi 平台和 OB/OG 访谈文化"},
  kr:{visa:"D-10求职签证",visaDur:"6个月",visaBadge:"yellow",visaNote:"找到工作转 E-7 工作签",sal:"₩3,000–5,000万",salUnit:"/年",salNote:"三星/现代/SK等大企业更高",industries:["🏭 制造/半导体（三星/SK）","🚗 汽车（现代）","💻 IT/平台","🎬 文化/媒体","🏦 金融","🏢 外资企业"],migr:"E-7 → F-2居住签 → F-5永住签（5年）",migrRating:"yellow",rent:"首尔 ₩50–100万/月，有传统全租（Jeonse）模式",healthcare:"国民健康保险，雇主承担50%",wlb:2,wlbNote:"大企业加班文化，MZ世代正在推动变革，外企更人性化",tip:"韩语是职场核心门槛，TOPIK 4级以上大幅扩展机会；K-culture产业（游戏/媒体/内容）对外籍人才相对开放"},
  fr:{visa:"APS求职居留",visaDur:"约1年",visaBadge:"green",visaNote:"欧盟内流动方便",sal:"€28,000–45,000",salUnit:"/年",salNote:"巴黎金融/奢侈品/咨询更高，外省更低",industries:["👜 奢侈品/时尚（LVMH/开云）","✈️ 航空/工程（空客/赛峰）","💰 金融/银行","🏢 管理咨询","🔬 研究/高校","🌐 科技初创"],migr:"工作居留 → 5年永居 → 法国国籍（欧盟）",migrRating:"green",rent:"巴黎 €1,200–1,800/月，里昂/马赛/图卢兹 €700–1,100/月",healthcare:"Sécu社会保险覆盖70%，余下可购Mutuelle",wlb:4,wlbNote:"法定35小时工作制，5周带薪假，午餐文化受法律保护",tip:"法语B2以上是真正打开就业市场的门槛；巴黎是欧洲初创和金融重镇，英语岗位也在增多"},
  se:{visa:"求职居留许可",visaDur:"求职期6–12个月",visaBadge:"green",visaNote:"找到工作转工作许可",sal:"SEK 35,000–50,000",salUnit:"/月",salNote:"IT/工程/制药税后到手约 SEK 25,000–35,000",industries:["📡 电信（爱立信）","🎵 科技（Spotify/Klarna）","🏭 制造（IKEA/沃尔沃）","💊 制药","🔬 研究机构","🌱 绿色能源"],migr:"工作居留 → 4年永居 → 瑞典国籍（欧盟）",migrRating:"green",rent:"斯德哥尔摩 SEK 9,000–15,000/月，其他城市 SEK 5,000–9,000/月",healthcare:"公共医疗几乎免费，就医费用上限约 SEK 1,300/年",wlb:5,wlbNote:"北欧典范：强制6周年假、弹性工时、父母假、绝不加班",tip:"SI奖学金覆盖学费+生活费，如能申到等于零成本读北欧高校；Spotify/Klarna等独角兽在斯德哥尔摩提供大量英语岗位"},
  be:{visa:"求职居留",visaDur:"求职期1年",visaBadge:"green",visaNote:"单一许可（Single Permit）后可工作",sal:"€30,000–50,000",salUnit:"/年",salNote:"欧盟机构薪资另成体系（税收优惠后实际更高）",industries:["🏛️ 欧盟机构（NATO/EC/EP）","💊 制药/生命科学","🏗️ 工程","💰 金融/咨询","🍫 食品/消费品","🌐 NGO/国际组织"],migr:"工作居留 → 5年永居 → 比利时国籍（欧盟）",migrRating:"green",rent:"布鲁塞尔 €900–1,500/月，根特/鲁汶 €700–1,100/月",healthcare:"互助保险（Mutualité）约€100/年，报销比例高",wlb:4,wlbNote:"欧洲中部，多语言环境，工作强度低于英美",tip:"布鲁塞尔的欧盟机构蓝皮书实习（Blue Book Traineeship）5个月、月薪约€1,400，是进入欧盟体系最权威的入口"},
  dk:{visa:"求职居留许可",visaDur:"求职期6–12个月",visaBadge:"green",visaNote:"Fast-track Scheme加速就业路径",sal:"DKK 38,000–55,000",salUnit:"/月",salNote:"税率约50%，但净得仍可观；含福利则更高",industries:["🚢 航运（马士基）","💊 制药（诺和诺德）","🌊 风能（Vestas/Ørsted）","🍺 消费品","💻 科技","🔬 生命科学"],migr:"工作居留 → 4年永居 → 丹麦国籍（欧盟）",migrRating:"green",rent:"哥本哈根 DKK 8,000–14,000/月，奥胡斯 DKK 6,000–9,000/月",healthcare:"公立医疗免费，CPR注册后即生效",wlb:5,wlbNote:"世界最幸福国家，工作强度极低，家庭时间优先文化",tip:"诺和诺德（GLP-1减肥药）是全球最赚钱公司之一，生命科学方向在丹麦机会极佳；Fast-track Scheme让大企业雇主可绕开常规流程快速引进人才"},
  nz:{visa:"毕业后开放工签PSW",visaDur:"最长3年",visaBadge:"green",visaNote:"无需雇主担保，全开放工作",sal:"NZD 55,000–75,000",salUnit:"/年",salNote:"IT/工程/医疗偏高",industries:["💻 IT/数字化","🏗️ 工程/建筑","🏥 医疗护理","🌾 农业/食品","🏔️ 旅游","⚡ 清洁能源"],migr:"PSW → Skilled Migrant类别 → PR → 公民",migrRating:"green",rent:"奥克兰 NZD 1,800–2,800/月，惠灵顿/基督城更低",healthcare:"ACC意外险全民覆盖；普通医疗需购私保",wlb:4,wlbNote:"节奏慢、环境好、户外生活优先；比澳洲城市更宁静",tip:"新西兰紧缺职业清单（Green List）在IT/工程/医疗方向可直接申PR（无需等一般技术移民打分），是最快的西方国家PR路径之一"},
  my:{visa:"就业准证/相关签证",visaDur:"按雇主合同",visaBadge:"yellow",visaNote:"留马或作为东南亚跳板",sal:"MYR 4,000–8,000",salUnit:"/月",salNote:"跨国公司区域总部岗位可达 MYR 10,000+",industries:["🏢 跨国公司区域总部","💰 金融/保险","💻 科技/IT","🌴 旅游/酒店","🏭 制造/半导体","🛢️ 能源（壳牌）"],migr:"就业准证续签为主；马来西亚PR门槛较高",migrRating:"yellow",rent:"吉隆坡KLCC区 MYR 2,000–4,000/月，普通区 MYR 800–1,500/月",healthcare:"私立医院费用远低于西方，质量高；雇主通常提供私人医保",wlb:3,wlbNote:"整体轻松，英语普及，华人社区庞大，文化亲近感强",tip:"马来西亚是东南亚最省钱的国际学历跳板，壳牌/汇丰/渣打等跨国公司区域总部提供良好英文工作环境，可积累经验再申新加坡/澳洲/加拿大"},
  cn:{visa:"学习后转其他居留",visaDur:"视雇主申请",visaBadge:"green",visaNote:"直接进入国内就业市场",sal:"¥8,000–25,000",salUnit:"/月",salNote:"头部互联网/金融/咨询北京/上海可达 ¥30,000+",industries:["💻 科技/互联网（BAT/字节）","💰 金融/银行","🏢 外资/咨询","🔬 科研/高校","🏭 制造","🌐 国际组织/外交"],migr:"直接国内就业，无移民压力",migrRating:"green",rent:"北京/上海 ¥5,000–12,000/月，其他省会城市 ¥2,000–5,000/月",healthcare:"国内医保缴纳后费用极低",wlb:2,wlbNote:"互联网/金融内卷严重，外资/高校/政府机关节奏更好",tip:"CSC政府奖学金覆盖学费+生活费，来华读研成本极低；清北复交中科院背景在国内就业市场含金量高，理工/AI方向尤为明显"},
};

/* 申请截止日倒计时 */
const KEY_DEADLINES={
  uk:{label:"英国院校开放申请（下轮）",month:9,day:1,note:"英国 rolling 录取，9月开放即可递，越早越好"},
  us:{label:"美国主要申请截止日",month:12,day:15,note:"多数美国项目 12月–1月截止，提前备好文书"},
  au:{label:"澳洲2月入学申请截止",month:11,day:1,note:"2月开学一般11月截止，7月入学4月截止"},
  ca:{label:"加拿大大多数项目截止",month:1,day:15,note:"加拿大多数项目1月截止，SDS学签建议同步申请"},
  sg:{label:"新加坡院校申请截止",month:2,day:28,note:"NUS/NTU 通常2–3月截止，热门项目须早申第一轮"},
  hk:{label:"香港主要院校截止",month:12,day:1,note:"港校 rolling，12月前交最安全，热门项目名额有限"},
  de:{label:"德国 APS 预约窗口",month:10,day:1,note:"德国赴德须先办 APS 学历认证，耗时1–4个月，尽早预约"},
  ch:{label:"瑞士ETH/EPFL申请截止",month:12,day:15,note:"ETH/EPFL通常12月截止；其他院校视专业"},
  nl:{label:"荷兰院校申请截止（Studielink）",month:4,day:1,note:"多数荷兰院校通过 Studielink，4月1日国家截止日"},
  jp:{label:"日本大学院入试",month:8,day:1,note:"日本研究生院入学考试多在8–9月（10月入学）或2–3月（4月入学）"},
  kr:{label:"韩国院校秋学期申请截止",month:5,day:31,note:"韩国9月入学通常5月截止；2月入学10月截止"},
  fr:{label:"Campus France预登记截止",month:3,day:31,note:"Campus France中国平台截止约3–4月，注意须提前注册"},
  se:{label:"瑞典 Antagning.se 截止",month:1,day:15,note:"瑞典国家申请截止通常1月15日，是所有欧洲项目中最早的"},
  be:{label:"比利时KU Leuven申请截止",month:3,day:1,note:"KU Leuven/根特3月截止，布鲁塞尔自由大学视项目"},
  dk:{label:"丹麦院校申请截止",month:3,day:15,note:"DTU/哥大多在3月中旬截止，部分项目2月"},
  nz:{label:"新西兰8月学期申请截止",month:6,day:1,note:"新西兰院校2月/7月开学，6月可申下轮或查滚动录取"},
  my:{label:"马来西亚申请截止",month:4,day:30,note:"各院校不同，EMGS体检须提前2–3个月预约"},
  cn:{label:"来华留学申请截止（CSC）",month:3,day:31,note:"CSC政府奖学金3月31日截止；各院校自费申请时间不同"},
};

/* ── 热门院校精准截止日（月/日，daysTo 自动算下次） ── */
const SCHOOL_DEADLINES={
  // ── 英国 ──
  "牛津大学":      [{prog:"Financial Economics MSc",month:1,day:16,note:"Saïd主轮"},{prog:"Computer Science MSc",month:1,day:20}],
  "剑桥大学":      [{prog:"MPhil Engineering/Data",month:12,day:5,note:"第一轮"}],
  "帝国理工学院":  [{prog:"Computing MSc（建议截止）",month:12,day:31,note:"滚动，12月前最稳"}],
  "伦敦大学学院":  [{prog:"CS/Data Science（建议截止）",month:3,day:31,note:"滚动，3月前递"},{prog:"Architecture MArch",month:3,day:15}],
  "伦敦政治经济学院":[{prog:"多数项目",month:11,day:30,note:"第一轮"},{prog:"部分项目延期",month:1,day:31}],
  "爱丁堡大学":    [{prog:"AI/CS/Data",month:3,day:31}],
  "曼彻斯特大学":  [{prog:"CS/Data（建议截止）",month:2,day:28,note:"rolling，早申优势大"}],
  "华威大学":      [{prog:"WBS Finance/Business",month:3,day:15},{prog:"CS",month:3,day:31}],
  "伦敦国王学院":  [{prog:"多数项目",month:3,day:31}],
  "布里斯托大学":  [{prog:"CS/工程（建议截止）",month:4,day:30,note:"滚动"}],
  // ── 美国 ──
  "麻省理工学院":  [{prog:"多数硕士项目",month:12,day:15}],
  "斯坦福大学":    [{prog:"多数项目",month:12,day:5}],
  "哈佛大学":      [{prog:"多数硕士项目",month:1,day:2}],
  "卡内基梅隆大学":[{prog:"MSML",month:12,day:1},{prog:"MCDS/MSCS",month:12,day:15},{prog:"MSCF",month:11,day:1}],
  "哥伦比亚大学":  [{prog:"Financial Engineering",month:2,day:1},{prog:"CS/Applied Math",month:2,day:15}],
  "纽约大学":      [{prog:"Financial Engineering",month:1,day:15},{prog:"CS/Data Science",month:2,day:1}],
  "佐治亚理工学院":[{prog:"CS/Analytics/ECE",month:1,day:15}],
  "伊利诺伊大学香槟":[{prog:"CS/ECE",month:12,day:15}],
  "加州大学伯克利":[{prog:"MEng 多数方向",month:1,day:10}],
  "康奈尔大学":    [{prog:"多数工程项目",month:1,day:15}],
  // ── 澳大利亚 ──
  "墨尔本大学":    [{prog:"CS/Finance（建议截止）",month:11,day:30,note:"滚动，2月入学提前"}],
  "悉尼大学":      [{prog:"CS/Data Science（建议截止）",month:12,day:31,note:"滚动"}],
  "新南威尔士大学":[{prog:"IT/Data（建议截止）",month:1,day:31,note:"滚动，2月入学"}],
  // ── 加拿大 ──
  "多伦多大学":    [{prog:"MScAC/MEng",month:1,day:31}],
  "英属哥伦比亚大学":[{prog:"CS",month:12,day:1},{prog:"MEng/统计",month:1,day:15}],
  "麦吉尔大学":    [{prog:"CS/软件工程",month:1,day:15}],
  // ── 新加坡 ──
  "新加坡国立大学":[{prog:"CS/金融（第一轮）",month:2,day:1}],
  "南洋理工大学":  [{prog:"CS/AI/工程",month:3,day:1}],
  // ── 香港 ──
  "香港大学":      [{prog:"多数项目",month:3,day:31}],
  "香港中文大学":  [{prog:"CS/Finance",month:2,day:28}],
  "香港科技大学":  [{prog:"多数项目",month:3,day:15}],
  "香港城市大学":  [{prog:"多数项目",month:3,day:31}],
};

/* ── 中国学生录取难度 & 双非友好度（Feature 5 对比升级） ── */
const SCHOOL_DIFF={
  "牛津大学":{diff:"极难",shuangfei:"部分可",note:"多数项目要求985/211，部分如PGCE开放"},
  "剑桥大学":{diff:"极难",shuangfei:"部分可",note:"顶级项目要求均分90+，双非录取极少"},
  "帝国理工学院":{diff:"难",shuangfei:"是",note:"看项目，CS/EEE较严，商科更灵活"},
  "伦敦大学学院":{diff:"难",shuangfei:"是",note:"各专业标准不同，双非需均分85+"},
  "爱丁堡大学":{diff:"中",shuangfei:"是",note:"双非录取较多，AI/CS热门项目竞争加剧"},
  "伦敦国王学院":{diff:"中",shuangfei:"是",note:"双非友好，需均分80+，医学较严"},
  "曼彻斯特大学":{diff:"中",shuangfei:"是",note:"双非友好度高，商科/传媒录取多"},
  "伦敦政治经济学院":{diff:"极难",shuangfei:"部分可",note:"金融数学/统计顶级项目基本要求985"},
  "华威大学":{diff:"中",shuangfei:"是",note:"双非录取案例多，商科/数学较灵活"},
  "麻省理工学院":{diff:"极难",shuangfei:"否",note:"对外开放硕士名额极少，需顶级背景"},
  "斯坦福大学":{diff:"极难",shuangfei:"否",note:"中国学生录取率极低，需科研/工作背景"},
  "哈佛大学":{diff:"极难",shuangfei:"否",note:"多数项目录取率5%以下"},
  "哥伦比亚大学":{diff:"难",shuangfei:"是",note:"工程/金工接受强双非，需GRE 325+"},
  "卡内基梅隆大学":{diff:"极难",shuangfei:"部分可",note:"MSML基本985，MCDS稍开放"},
  "新加坡国立大学":{diff:"难",shuangfei:"是",note:"双非需均分80+，整体看背景综合实力"},
  "南洋理工大学":{diff:"中",shuangfei:"是",note:"双非录取案例多，均分78+可冲"},
  "香港大学":{diff:"中",shuangfei:"是",note:"双非友好，需均分75+，IANG工签加分"},
  "香港中文大学":{diff:"中",shuangfei:"是",note:"双非录取多，书院制更关注综合素质"},
  "香港科技大学":{diff:"中",shuangfei:"是",note:"工程/商科双非均可，均分75+"},
  "苏黎世联邦理工":{diff:"极难",shuangfei:"部分可",note:"CS要求极高，本科背景比院校标签更重要"},
  "代尔夫特理工大学":{diff:"中",shuangfei:"是",note:"欧洲学校更看成绩单，双非无明显歧视"},
  "墨尔本大学":{diff:"中",shuangfei:"是",note:"滚动录取，双非均分75+录取多"},
  "悉尼大学":{diff:"中",shuangfei:"是",note:"热门商科竞争加剧，早申更稳"},
  "多伦多大学":{diff:"难",shuangfei:"是",note:"MScAC/MEng竞争激烈，双非需均分82+"},
  "英属哥伦比亚大学":{diff:"中",shuangfei:"是",note:"双非录取案例多，均分80+"},
  "慕尼黑工业大学":{diff:"中",shuangfei:"是",note:"德国看成绩单不看院校名气，双非均可"},
  // ── 英国补充 ──
  "布里斯托大学":{diff:"中",shuangfei:"是",note:"罗素集团，工程/CS热门，双非78+可申"},
  "格拉斯哥大学":{diff:"中",shuangfei:"是",note:"苏格兰古校，list较宽，双非78+可申"},
  "杜伦大学":{diff:"中",shuangfei:"是",note:"学院制名校，人文商科强，双非78+可申"},
  "伯明翰大学":{diff:"中",shuangfei:"是",note:"红砖名校，专业全，双非78+可申"},
  "利兹大学":{diff:"中",shuangfei:"是",note:"传媒商科热门，双非78+可申"},
  "南安普顿大学":{diff:"中",shuangfei:"是",note:"工程/计算机传统强，双非78+可申"},
  "谢菲尔德大学":{diff:"中",shuangfei:"是",note:"红砖名校，申请友好，双非78+可申"},
  "诺丁汉大学":{diff:"中",shuangfei:"是",note:"有宁波分校，对双非友好度高"},
  "伦敦玛丽女王大学":{diff:"易",shuangfei:"是",note:"罗素集团，对背景较包容，双非75+可申"},
  "圣安德鲁斯大学":{diff:"中",shuangfei:"是",note:"精英小校，人文强，均分80+为佳"},
  // ── 美国补充 ──
  "加州理工学院":{diff:"极难",shuangfei:"否",note:"硕士招生极少，几乎全为研究型，顶尖背景"},
  "加州大学伯克利":{diff:"难",shuangfei:"是",note:"公立顶尖，竞争激烈，双非需85+"},
  "康奈尔大学":{diff:"难",shuangfei:"是",note:"藤校，工程双非需84+，Cornell Tech稍开放"},
  "密歇根大学安娜堡":{diff:"难",shuangfei:"是",note:"公立巨头，双非需82+，工程方向可申"},
  "纽约大学":{diff:"中",shuangfei:"是",note:"招生量大，对背景包容，双非80+可申"},
  "普林斯顿大学":{diff:"极难",shuangfei:"否",note:"研究型为主，规模极小，需顶尖背景"},
  "耶鲁大学":{diff:"极难",shuangfei:"否",note:"多数专业录取率极低，需出色背景"},
  "芝加哥大学":{diff:"难",shuangfei:"是",note:"经济/商科竞争激烈，部分项目接受强双非"},
  "宾夕法尼亚大学":{diff:"难",shuangfei:"是",note:"藤校，沃顿极难，工程(SEAS)稍开放"},
  "约翰霍普金斯大学":{diff:"难",shuangfei:"是",note:"医学/公卫竞争激烈，工程项目双非需82+"},
  "加州大学洛杉矶":{diff:"难",shuangfei:"是",note:"公立顶尖，工程/商科双非需82+"},
  "杜克大学":{diff:"难",shuangfei:"是",note:"部分专业接受强双非，均分82+为佳"},
  "佐治亚理工学院":{diff:"中",shuangfei:"是",note:"公立理工强校，性价比高，双非80+可申"},
  "伊利诺伊大学香槟":{diff:"中",shuangfei:"是",note:"公立强校，双非80+可申CS/工程"},
  "德州大学奥斯汀":{diff:"中",shuangfei:"是",note:"公立旗舰，双非78+可申部分项目"},
  "加州大学圣地亚哥":{diff:"中",shuangfei:"是",note:"公立强校，生物+CS方向，双非80+可申"},
  "华盛顿大学":{diff:"中",shuangfei:"是",note:"西雅图公立强校，双非78+可申部分项目"},
  "西北大学":{diff:"难",shuangfei:"是",note:"私立名校，商科极难，工程相对开放"},
  "布朗大学":{diff:"难",shuangfei:"是",note:"藤校，规模小，录取竞争激烈"},
  "波士顿大学":{diff:"中",shuangfei:"是",note:"招生量大，对背景友好，双非75+可申"},
  "普渡大学":{diff:"中",shuangfei:"是",note:"公立理工，工程申请友好，双非75+可申"},
  "威斯康星大学麦迪逊":{diff:"中",shuangfei:"是",note:"公立研究型，学科全，双非75+可申"},
  "加州大学戴维斯":{diff:"中",shuangfei:"是",note:"农业/生命科学强，双非75+可申"},
  "莱斯大学":{diff:"难",shuangfei:"是",note:"小而精私立，录取规模小，均分83+为佳"},
  // ── 澳大利亚补充 ──
  "新南威尔士大学":{diff:"中",shuangfei:"是",note:"三学期制，工程强，双非75+可申"},
  "莫纳什大学":{diff:"易",shuangfei:"是",note:"申请友好，双非72+可申，多校区"},
  "昆士兰大学":{diff:"易",shuangfei:"是",note:"布里斯班，双非72+可申，生活成本低"},
  "澳大利亚国立大学":{diff:"中",shuangfei:"是",note:"研究氛围浓，社科政治强，双非78+可申"},
  "西澳大学":{diff:"易",shuangfei:"是",note:"八校联盟，双非70+可申，矿业特色"},
  "阿德莱德大学":{diff:"易",shuangfei:"是",note:"八校联盟，双非70+可申，移民加分"},
  "悉尼科技大学":{diff:"易",shuangfei:"是",note:"应用型，双非70+可申，设计/IT强"},
  "皇家墨尔本理工":{diff:"易",shuangfei:"是",note:"应用型，双非70+可申，墨尔本市中心"},
  // ── 加拿大补充 ──
  "麦吉尔大学":{diff:"中",shuangfei:"是",note:"蒙特利尔，双非需80+，竞争较激烈"},
  "阿尔伯塔大学":{diff:"中",shuangfei:"是",note:"AI/工程/能源强，双非80+可申"},
  "滑铁卢大学":{diff:"中",shuangfei:"是",note:"Co-op知名，CS/工程强，双非80+可申"},
  // ── 香港补充 ──
  "香港城市大学":{diff:"中",shuangfei:"是",note:"应用导向，对背景较友好，双非75+可申"},
  "香港理工大学":{diff:"中",shuangfei:"是",note:"设计/酒店管理顶尖，双非75+可申"},
  // ── 瑞士补充 ──
  "洛桑联邦理工":{diff:"极难",shuangfei:"部分可",note:"数理背景要求极高，双非需顶尖成绩"},
  "苏黎世大学":{diff:"难",shuangfei:"是",note:"与ETH同城，医学/经济强，部分项目较开放"},
  // ── 荷兰补充 ──
  "阿姆斯特丹大学":{diff:"中",shuangfei:"是",note:"社科/传媒强，欧洲学校看成绩不看院校"},
  "乌得勒支大学":{diff:"中",shuangfei:"是",note:"荷兰综合名校，对国际生较友好"},
  "莱顿大学":{diff:"中",shuangfei:"是",note:"法律/人文强，欧洲学校双非无明显歧视"},
  // ── 日本补充 ──
  "东京大学":{diff:"难",shuangfei:"是",note:"日本第一，研究型需联系教授，英文项目有名额"},
  "京都大学":{diff:"难",shuangfei:"是",note:"研究型为主，需教授内诺，门槛高"},
  "东京工业大学":{diff:"中",shuangfei:"是",note:"日本理工顶尖，英文项目相对开放"},
  "大阪大学":{diff:"中",shuangfei:"是",note:"日本顶尖国立，工程/医学，英文项目"},
  "东北大学":{diff:"中",shuangfei:"是",note:"材料科学强，研究型需联系教授"},
  // ── 韩国补充 ──
  "首尔国立大学":{diff:"中",shuangfei:"是",note:"英文项目名额有限，韩文项目需TOPIK"},
  "延世大学":{diff:"中",shuangfei:"是",note:"SKY之一，商科英文项目多，均分83+"},
  "高丽大学":{diff:"中",shuangfei:"是",note:"SKY之一，英文项目友好"},
  "浦项科技大学":{diff:"难",shuangfei:"是",note:"小而精，研究导向，需强理工背景"},
  // ── 德国补充 ──
  "慕尼黑大学":{diff:"中",shuangfei:"是",note:"德国综合顶尖，APS+成绩，双非无明显歧视"},
  "海德堡大学":{diff:"中",shuangfei:"是",note:"德国最古老大学，医学/人文强，APS+成绩"},
  "柏林自由大学":{diff:"中",shuangfei:"是",note:"人文社科强，APS+成绩，双非均可"},
  "卡尔斯鲁厄理工":{diff:"中",shuangfei:"是",note:"德国理工顶尖，APS+强理工背景"},
  "亚琛工业大学":{diff:"中",shuangfei:"是",note:"机械/电气著名，APS+工科背景"},
  // ── 法国补充 ──
  "巴黎文理研究大学":{diff:"难",shuangfei:"是",note:"精英学术联合体，需强研究背景"},
  "索邦大学":{diff:"中",shuangfei:"是",note:"综合名校，法语项目为主，部分英文"},
  "巴黎综合理工学院":{diff:"难",shuangfei:"是",note:"法国工程精英院校联盟，竞争激烈"},
  "巴黎-萨克雷大学":{diff:"难",shuangfei:"是",note:"理学/数学顶尖，研究导向"},
  // ── 瑞典补充 ──
  "皇家理工学院":{diff:"中",shuangfei:"是",note:"瑞典理工顶尖，欧洲学校看成绩，双非75+可申"},
  "隆德大学":{diff:"中",shuangfei:"是",note:"瑞典综合名校，英文项目多，双非75+可申"},
  "乌普萨拉大学":{diff:"中",shuangfei:"是",note:"北欧最古老大学，英文项目多，双非75+可申"},
  // ── 比利时补充 ──
  "鲁汶大学":{diff:"中",shuangfei:"是",note:"比利时顶尖，欧洲学校看成绩，双非80+可申"},
  // ── 丹麦补充 ──
  "哥本哈根大学":{diff:"中",shuangfei:"是",note:"北欧顶尖，英文项目多，双非78+可申"},
  "丹麦技术大学":{diff:"中",shuangfei:"是",note:"北欧理工，工科背景，双非75+可申"},
  // ── 新西兰 ──
  "奥克兰大学":{diff:"易",shuangfei:"是",note:"新西兰第一，移民友好，双非70+可申"},
  // ── 马来西亚 ──
  "马来亚大学":{diff:"易",shuangfei:"是",note:"马来西亚第一，费用低，双非70+可申"},
  "马来西亚国民大学":{diff:"易",shuangfei:"是",note:"费用极低，申请友好，双非68+可申"},
  // ── 中国大陆（面向国际生参考） ──
  "清华大学":{diff:"难",shuangfei:"否",note:"面向国际生/港澳台侨，需顶尖背景"},
  "北京大学":{diff:"难",shuangfei:"否",note:"面向国际生/港澳台侨，需顶尖背景"},
  "复旦大学":{diff:"中",shuangfei:"否",note:"国际项目多，面向外国留学生"},
  "上海交通大学":{diff:"中",shuangfei:"否",note:"中外合作项目多，面向外国留学生"},
  "浙江大学":{diff:"中",shuangfei:"否",note:"国际项目增多，面向外国留学生"},
  "南京大学":{diff:"中",shuangfei:"否",note:"理学/人文强，面向外国留学生"},
  "中国科学技术大学":{diff:"难",shuangfei:"否",note:"理工顶尖，国际项目少，面向外国留学生"},
};


const BLOGGERS={
  uk:[
    {type:"xhs",label:"英国生活Vlog博主",kw:"英国留学 日常生活 vlog 博主推荐"},
    {type:"xhs",label:"英国申请干货",kw:"英国硕士申请 经验帖 干货"},
    {type:"bili",label:"B站英国留学频道",kw:"英国留学 生活记录 硕士"},
    {type:"bili",label:"伦敦日常",kw:"伦敦留学生 日常 vlog"},
  ],
  us:[
    {type:"xhs",label:"美国留学博主",kw:"美国留学 硕士 生活 博主推荐"},
    {type:"xhs",label:"OPT/H1B经验",kw:"美国OPT H1B 留学生 工作经验"},
    {type:"bili",label:"B站美国留学",kw:"美国留学生 日常 vlog 真实体验"},
    {type:"bili",label:"硅谷/纽约打工人",kw:"硅谷 华人 工作生活 vlog"},
  ],
  au:[
    {type:"xhs",label:"澳洲留学生活",kw:"澳洲留学 生活日常 博主推荐"},
    {type:"xhs",label:"485工签移民经验",kw:"澳洲485工签 技术移民 经验"},
    {type:"bili",label:"B站澳洲留学",kw:"澳大利亚留学生 日常 vlog"},
    {type:"bili",label:"悉尼墨尔本日记",kw:"悉尼 墨尔本 留学生活 记录"},
  ],
  ca:[
    {type:"xhs",label:"加拿大留学博主",kw:"加拿大留学 生活 博主推荐 硕士"},
    {type:"xhs",label:"PGWP移民经验",kw:"加拿大PGWP Express Entry 经验"},
    {type:"bili",label:"B站加拿大留学",kw:"加拿大留学生 日常 vlog 生活"},
    {type:"bili",label:"多伦多温哥华日记",kw:"多伦多 温哥华 华人 留学 vlog"},
  ],
  sg:[
    {type:"xhs",label:"新加坡留学生活",kw:"新加坡留学 生活 NUS NTU 博主"},
    {type:"xhs",label:"EP工作经验",kw:"新加坡EP工作 华人 生活经验"},
    {type:"bili",label:"B站新加坡",kw:"新加坡留学生 日常 vlog 真实"},
    {type:"bili",label:"坡县打工记",kw:"新加坡 打工人 生活 华人 vlog"},
  ],
  hk:[
    {type:"xhs",label:"香港留学博主",kw:"香港留学 生活 港校 博主推荐"},
    {type:"xhs",label:"IANG工签经验",kw:"香港IANG 留港工作 经验分享"},
    {type:"bili",label:"B站香港留学",kw:"香港留学生 日常 vlog 生活"},
    {type:"bili",label:"香港工作生活",kw:"香港 内地人 工作生活 vlog"},
  ],
  ch:[
    {type:"xhs",label:"瑞士留学博主",kw:"瑞士留学 ETH EPFL 生活 博主"},
    {type:"xhs",label:"苏黎世日内瓦生活",kw:"苏黎世 日内瓦 留学生活 经验"},
    {type:"bili",label:"B站瑞士留学",kw:"瑞士留学生 日常 vlog ETH"},
    {type:"bili",label:"瑞士打工高薪",kw:"瑞士 工作生活 高薪 华人 vlog"},
  ],
  nl:[
    {type:"xhs",label:"荷兰留学博主",kw:"荷兰留学 生活 博主推荐 阿姆斯特丹"},
    {type:"xhs",label:"荷兰申请经验",kw:"荷兰硕士 申请经验 生活成本"},
    {type:"bili",label:"B站荷兰留学",kw:"荷兰留学生 日常 vlog 生活"},
    {type:"bili",label:"荷兰骑行生活",kw:"荷兰 骑行 生活 华人 vlog"},
  ],
  jp:[
    {type:"xhs",label:"日本留学博主",kw:"日本留学 生活 东大 京大 博主推荐"},
    {type:"xhs",label:"MEXT奖学金经验",kw:"日本MEXT奖学金 申请经验 攻略"},
    {type:"bili",label:"B站日本留学",kw:"日本留学生 日常 vlog 生活"},
    {type:"bili",label:"东京生活日记",kw:"东京 留学生活 华人 vlog 日常"},
  ],
  kr:[
    {type:"xhs",label:"韩国留学博主",kw:"韩国留学 首尔 生活 博主推荐"},
    {type:"xhs",label:"GKS奖学金经验",kw:"韩国GKS奖学金 留学申请 经验"},
    {type:"bili",label:"B站韩国留学",kw:"韩国留学生 日常 vlog 首尔生活"},
    {type:"bili",label:"首尔生活打卡",kw:"首尔 留学 华人 生活 vlog"},
  ],
  de:[
    {type:"xhs",label:"德国留学博主",kw:"德国留学 生活 慕尼黑 柏林 博主推荐"},
    {type:"xhs",label:"APS签证经验",kw:"德国APS学历认证 留学申请 经验"},
    {type:"bili",label:"B站德国留学",kw:"德国留学生 日常 vlog 生活"},
    {type:"bili",label:"德国打工工程师",kw:"德国 工程师 华人 工作生活 vlog"},
  ],
  nz:[
    {type:"xhs",label:"新西兰留学博主",kw:"新西兰留学 生活 奥克兰 博主推荐"},
    {type:"xhs",label:"PSW移民经验",kw:"新西兰工签 技术移民 经验分享"},
    {type:"bili",label:"B站新西兰留学",kw:"新西兰留学生 日常 vlog 生活"},
    {type:"bili",label:"新西兰移民生活",kw:"新西兰 华人移民 生活 vlog"},
  ],
  my:[
    {type:"xhs",label:"马来西亚留学博主",kw:"马来西亚留学 吉隆坡 生活 博主"},
    {type:"xhs",label:"马来留学性价比",kw:"马来西亚留学 性价比 Monash 经验"},
    {type:"bili",label:"B站马来西亚留学",kw:"马来西亚留学生 日常 vlog"},
    {type:"bili",label:"KL吉隆坡生活",kw:"吉隆坡 华人 留学生活 vlog"},
  ],
  fr:[
    {type:"xhs",label:"法国留学博主",kw:"法国留学 巴黎 生活 博主推荐"},
    {type:"xhs",label:"Campus France经验",kw:"法国Campus France 申请流程 经验"},
    {type:"bili",label:"B站法国留学",kw:"法国留学生 日常 巴黎 vlog"},
    {type:"bili",label:"巴黎生活日记",kw:"巴黎 华人 留学生活 vlog 日常"},
  ],
  se:[
    {type:"xhs",label:"瑞典留学博主",kw:"瑞典留学 斯德哥尔摩 生活 博主推荐"},
    {type:"xhs",label:"SI奖学金经验",kw:"瑞典SI奖学金 申请经验 攻略"},
    {type:"bili",label:"B站瑞典留学",kw:"瑞典留学生 日常 vlog 北欧生活"},
    {type:"bili",label:"北欧生活记录",kw:"北欧 华人 生活 工作 vlog"},
  ],
  be:[
    {type:"xhs",label:"比利时留学博主",kw:"比利时留学 布鲁塞尔 鲁汶 生活 博主"},
    {type:"xhs",label:"欧盟机构实习",kw:"布鲁塞尔 欧盟 实习 经验"},
    {type:"bili",label:"B站比利时留学",kw:"比利时留学生 日常 vlog 欧洲"},
    {type:"bili",label:"比利时/欧洲生活",kw:"比利时 欧洲 华人 生活 vlog"},
  ],
  dk:[
    {type:"xhs",label:"丹麦留学博主",kw:"丹麦留学 哥本哈根 生活 博主推荐"},
    {type:"xhs",label:"北欧幸福感体验",kw:"丹麦 北欧 留学生活 幸福感 经验"},
    {type:"bili",label:"B站丹麦留学",kw:"丹麦留学生 日常 vlog 北欧"},
    {type:"bili",label:"哥本哈根生活",kw:"哥本哈根 华人 生活 vlog 丹麦"},
  ],
  cn:[
    {type:"xhs",label:"清北复交国际生",kw:"清华北大 国际生 留学生 生活 博主"},
    {type:"xhs",label:"中国留学体验",kw:"来华留学 国际生 生活经验 攻略"},
    {type:"bili",label:"B站中国留学",kw:"来华留学 国际留学生 日常 vlog"},
    {type:"bili",label:"北京上海生活",kw:"北京 上海 外国留学生 生活 vlog"},
  ],
};
