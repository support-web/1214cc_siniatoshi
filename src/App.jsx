import { useState } from 'react';
import TopScreen from './components/TopScreen';
import QuestionScreen from './components/QuestionScreen';
import LoadingScreen from './components/LoadingScreen';
import ResultScreen from './components/ResultScreen';
import { questions } from './data/questions';
import { investmentTypes, calculateInvestmentType } from './data/results';

function App() {
  const [screen, setScreen] = useState('top');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [totalScore, setTotalScore] = useState(0);
  const [resultType, setResultType] = useState(null);

  const handleStart = () => {
    setScreen('question');
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setTotalScore(0);
  };

  const handleAnswer = (score) => {
    const newAnswers = [...answers, score];
    const newTotalScore = totalScore + score;

    setAnswers(newAnswers);
    setTotalScore(newTotalScore);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setScreen('loading');

      setTimeout(() => {
        const type = calculateInvestmentType(newTotalScore);
        setResultType(type);
        setScreen('result');
      }, 2500);
    }
  };

  const handleRetry = () => {
    setScreen('top');
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setTotalScore(0);
    setResultType(null);
  };

  return (
    <div className="App">
      {screen === 'top' && <TopScreen onStart={handleStart} />}

      {screen === 'question' && (
        <QuestionScreen
          question={questions[currentQuestionIndex]}
          currentNumber={currentQuestionIndex + 1}
          totalQuestions={questions.length}
          onAnswer={handleAnswer}
        />
      )}

      {screen === 'loading' && <LoadingScreen />}

      {screen === 'result' && resultType && (
        <ResultScreen
          result={investmentTypes[resultType]}
          totalScore={totalScore}
          onRetry={handleRetry}
        />
      )}
    </div>
  );
}

export default App;
