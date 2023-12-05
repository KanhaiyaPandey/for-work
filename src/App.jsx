
import { useState } from 'react';
import './App.css'
import data from './data/data';
import Questions from './components/Questions';
import Options from './components/Options';
import Score from './components/Score';

function App() {

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion < data.length ) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };


  return (
    
    <div className="app">
    {currentQuestion < data.length ? (
      <>
        <Questions question={data[currentQuestion].question} />
        <Options
          options={data[currentQuestion].options}
          correctAnswer={data[currentQuestion].correctAnswer}
          handleAnswer={handleAnswer}
        />
      </>
    ) : (
      <Score score={score} totalQuestions={data.length} />
    )}
  </div>
  )
}

export default App
