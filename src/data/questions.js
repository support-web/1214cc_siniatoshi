export const questions = [
  {
    id: 1,
    category: '基本情報',
    question: '現在のご年齢を教えてください',
    options: [
      { text: '50代', score: 4 },
      { text: '60代前半', score: 3 },
      { text: '60代後半', score: 2 },
      { text: '70代以上', score: 1 },
    ]
  },
  {
    id: 2,
    category: '基本情報',
    question: 'これまでの投資経験はありますか?',
    options: [
      { text: '全くない', score: 1 },
      { text: '少しだけある(定期預金・国債など)', score: 2 },
      { text: 'ある程度ある(投資信託など)', score: 3 },
      { text: '豊富にある(株式・FXなど)', score: 4 },
    ]
  },
  {
    id: 3,
    category: '資産状況',
    question: '投資に回せる余裕資金はどのくらいですか?',
    options: [
      { text: '100万円未満', score: 1 },
      { text: '100万円〜500万円', score: 2 },
      { text: '500万円〜1000万円', score: 3 },
      { text: '1000万円以上', score: 4 },
    ]
  },
  {
    id: 4,
    category: '期間',
    question: 'どのくらいの期間で運用をお考えですか?',
    options: [
      { text: '1年以内', score: 1 },
      { text: '1年〜3年', score: 2 },
      { text: '3年〜10年', score: 3 },
      { text: '10年以上', score: 4 },
    ]
  },
  {
    id: 5,
    category: 'リスク許容度',
    question: '投資した資金が一時的に減ることについてどう思いますか?',
    options: [
      { text: '絶対に減らしたくない', score: 1 },
      { text: 'できれば減らしたくない', score: 2 },
      { text: '多少の減少は仕方ない', score: 3 },
      { text: '大きく増える可能性があれば減少も許容できる', score: 4 },
    ]
  },
  {
    id: 6,
    category: 'リスク許容度',
    question: '投資した100万円が80万円になったら、どうしますか?',
    options: [
      { text: 'すぐに全額売却する', score: 1 },
      { text: '様子を見て、もう少し下がったら売却する', score: 2 },
      { text: 'そのまま保有し続ける', score: 3 },
      { text: 'さらに買い増しを検討する', score: 4 },
    ]
  },
  {
    id: 7,
    category: '目的',
    question: '投資の主な目的は何ですか?',
    options: [
      { text: '資産を減らさないこと', score: 1 },
      { text: '物価上昇に負けない程度に増やす', score: 2 },
      { text: '生活にゆとりを持てる程度に増やす', score: 3 },
      { text: '積極的に資産を増やす', score: 4 },
    ]
  },
  {
    id: 8,
    category: '性格',
    question: 'ご自身の性格に近いものはどれですか?',
    options: [
      { text: '慎重で、じっくり考えてから行動する', score: 1 },
      { text: '安全を優先しつつ、少しは冒険もしたい', score: 2 },
      { text: 'バランスを大切にする', score: 3 },
      { text: '新しいことに積極的にチャレンジしたい', score: 4 },
    ]
  },
];
