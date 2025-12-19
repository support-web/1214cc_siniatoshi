export default function ResultScreen({ result, totalScore, onRetry }) {
  const LINE_URL = "https://line.me/R/ti/p/@xxxxx";

  const handleLineClick = () => {
    window.open(LINE_URL, '_blank');
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'シニアのための投資診断',
        text: `私は【${result.name}】でした！あなたも診断してみませんか？`,
        url: window.location.href,
      });
    }
  };

  const renderRiskLevel = (level) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className={`w-8 h-8 rounded ${
              i <= level ? 'bg-primary' : 'bg-gray-300'
            }`}
          ></div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-bg-light">
      <header className="bg-primary text-white py-6 px-4 text-center">
        <h1 className="text-2xl font-bold">診断結果</h1>
      </header>

      <main className="px-6 py-8 pb-20">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">{result.icon}</div>
              <h2 className="text-2xl font-bold text-primary mb-2">
                あなたは
              </h2>
              <h3 className="text-3xl font-bold text-accent mb-3">
                【{result.name}】です
              </h3>
              <p className="text-base text-gray-600 italic">
                {result.catchCopy}
              </p>
            </div>

            <div className="bg-green-50 rounded-lg p-5 mb-6">
              <p className="text-base text-text-main leading-relaxed">
                {result.description}
              </p>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-bold text-text-main mb-3 flex items-center">
                <span className="mr-2">📊</span>
                リスク許容度
              </h4>
              <div className="flex items-center gap-3">
                {renderRiskLevel(result.riskLevel)}
                <span className="text-base text-gray-600">
                  {result.riskLevel === 1 && '低め'}
                  {result.riskLevel === 2 && 'やや低め'}
                  {result.riskLevel === 3 && '中程度'}
                  {result.riskLevel === 4 && 'やや高め'}
                  {result.riskLevel === 5 && '高め'}
                </span>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-bold text-text-main mb-3 flex items-center">
                <span className="mr-2">💡</span>
                おすすめの投資先
              </h4>
              <ul className="space-y-2">
                {result.recommendations.map((rec, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-2">・</span>
                    <span className="text-base text-text-main">{rec}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-yellow-50 rounded-lg p-5 mb-6">
              <h4 className="text-lg font-bold text-text-main mb-3 flex items-center">
                <span className="mr-2">📝</span>
                アドバイス
              </h4>
              <p className="text-base text-text-main leading-relaxed">
                {result.advice}
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg border-4 border-line-green p-6 mb-6">
            <div className="text-center mb-4">
              <h3 className="text-xl font-bold text-text-main mb-2">
                💬 あなたに合った投資方法の<br />ご相談はこちらから
              </h3>
              <p className="text-base text-gray-600 mb-1">
                {result.lineCta}
              </p>
            </div>

            <button
              onClick={handleLineClick}
              className="w-full bg-line-green hover:bg-green-600 text-white font-bold py-5 px-8 rounded-lg text-button transition-colors duration-200 shadow-md mb-4"
            >
              <span className="inline-block mr-2">🟢</span>
              LINEで無料相談する
            </button>

            <div className="space-y-2 text-base text-gray-600">
              <p className="flex items-start">
                <span className="mr-2">✓</span>
                <span>専門スタッフが丁寧にご対応します</span>
              </p>
              <p className="flex items-start">
                <span className="mr-2">✓</span>
                <span>無理な勧誘は一切ありません</span>
              </p>
              <p className="flex items-start">
                <span className="mr-2">✓</span>
                <span>お気軽にご相談ください</span>
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 mb-6">
            {navigator.share && (
              <button
                onClick={handleShare}
                className="w-full bg-white border-2 border-primary text-primary font-bold py-4 px-8 rounded-lg text-base transition-colors duration-200 hover:bg-green-50"
              >
                結果をシェアする
              </button>
            )}

            <button
              onClick={onRetry}
              className="w-full bg-white border-2 border-gray-400 text-gray-700 font-bold py-4 px-8 rounded-lg text-base transition-colors duration-200 hover:bg-gray-50"
            >
              もう一度診断する
            </button>
          </div>

          <div className="bg-gray-100 rounded-lg p-5 text-note text-gray-600">
            <p className="font-bold mb-2">【ご注意】</p>
            <p className="mb-1">この診断結果は、あくまで参考情報です。</p>
            <p className="mb-1">実際の投資判断はご自身の責任で行ってください。</p>
            <p className="mb-1">投資には元本割れのリスクがあります。</p>
            <p>具体的な投資を行う際は、金融機関や専門家にご相談ください。</p>
          </div>
        </div>
      </main>
    </div>
  );
}
