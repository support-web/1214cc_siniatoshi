export default function QuestionScreen({ question, currentNumber, totalQuestions, onAnswer }) {
  return (
    <div className="min-h-screen bg-bg-light flex flex-col">
      <header className="bg-primary text-white py-4 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="flex justify-between items-center mb-2">
            <span className="text-base">質問 {currentNumber} / {totalQuestions}</span>
            <span className="text-base">{question.category}</span>
          </div>
          <div className="w-full bg-white bg-opacity-30 rounded-full h-2">
            <div
              className="bg-white h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentNumber / totalQuestions) * 100}%` }}
            ></div>
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col px-6 py-8">
        <div className="max-w-2xl w-full mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <h2 className="text-question font-bold text-text-main mb-8 leading-relaxed">
              {question.question}
            </h2>

            <div className="space-y-4">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => onAnswer(option.score)}
                  className="w-full bg-white border-2 border-gray-300 hover:border-primary hover:bg-green-50 text-text-main font-medium py-5 px-6 rounded-lg text-base text-left transition-all duration-200 shadow-sm hover:shadow-md"
                >
                  <span className="inline-block w-8 h-8 bg-primary text-white rounded-full text-center leading-8 mr-3 flex-shrink-0">
                    {String.fromCharCode(65 + index)}
                  </span>
                  {option.text}
                </button>
              ))}
            </div>
          </div>

          <div className="text-center text-note text-gray-600">
            <p>あなたの状況に最も近いものを選んでください</p>
          </div>
        </div>
      </main>
    </div>
  );
}
