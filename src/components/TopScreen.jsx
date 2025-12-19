export default function TopScreen({ onStart }) {
  return (
    <div className="min-h-screen bg-bg-light flex flex-col">
      <header className="bg-primary text-white py-6 px-4 text-center">
        <h1 className="text-2xl font-bold">シニアのための投資診断</h1>
        <p className="text-base mt-2">〜あなたに合った資産運用を見つけよう〜</p>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-6 py-8">
        <div className="max-w-2xl w-full">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
            <h2 className="text-2xl font-bold text-primary mb-6 text-center">
              簡単3分で診断
            </h2>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <span className="text-2xl mr-3">✅</span>
                <div>
                  <p className="text-lg font-semibold text-text-main">
                    わかりやすい質問
                  </p>
                  <p className="text-base text-gray-600">
                    8つの質問に答えるだけで、あなたに合った投資スタイルが分かります
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="text-2xl mr-3">✅</span>
                <div>
                  <p className="text-lg font-semibold text-text-main">
                    無料で診断
                  </p>
                  <p className="text-base text-gray-600">
                    登録不要・完全無料でご利用いただけます
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="text-2xl mr-3">✅</span>
                <div>
                  <p className="text-lg font-semibold text-text-main">
                    専門家に相談
                  </p>
                  <p className="text-base text-gray-600">
                    診断後、専門スタッフに無料で相談できます
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={onStart}
              className="w-full bg-primary hover:bg-green-700 text-white font-bold py-5 px-8 rounded-lg text-button transition-colors duration-200 shadow-md"
            >
              診断を始める
            </button>
          </div>

          <div className="text-center text-note text-gray-600">
            <p>※この診断は投資の参考情報を提供するものです</p>
            <p>※実際の投資判断はご自身の責任で行ってください</p>
          </div>
        </div>
      </main>
    </div>
  );
}
