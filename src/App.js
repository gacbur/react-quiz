import React, { useState } from 'react';
import './App.css';
import StartQuiz from './StartQuiz'
import Quiz from './Quiz'

const App = () => {

  const questions = [
    {
      questionText: 'Who is the president of the United States?',
      answerOptions: [
        { answerText: 'Barack Obama', isCorrect: false },
        { answerText: 'Donald Trump', isCorrect: true },
        { answerText: 'Whitney Hueston', isCorrect: false },
        { answerText: 'George Bush', isCorrect: false },
      ]
    },
    {
      questionText: 'Who is the president of Poland?',
      answerOptions: [
        { answerText: 'Xiao Ming', isCorrect: false },
        { answerText: 'Czeslaw Milosh', isCorrect: false },
        { answerText: 'Andrzej Duda', isCorrect: true },
        { answerText: 'Piotr Jajko', isCorrect: false },
      ]
    },
    {
      questionText: 'What html stands for?',
      answerOptions: [
        { answerText: 'Hyper Text Markup Lanugage?', isCorrect: true },
        { answerText: 'Cascade Styles', isCorrect: false },
        { answerText: 'Hyper Trace Make Language', isCorrect: false },
        { answerText: 'Hyper Low Markup', isCorrect: false },
      ]
    },
    {
      questionText: 'What CSS stands for?',
      answerOptions: [
        { answerText: 'Cascade Style Sheets', isCorrect: true },
        { answerText: 'Cascade Style Shop', isCorrect: false },
        { answerText: 'HTML', isCorrect: true },
        { answerText: 'Cascade Shop Site', isCorrect: false },
      ]
    },
  ]

  const [startPage, addStartPage] = useState(true)
  const [currentQuiz, addCurrentQuiz] = useState(0)

  const [score, addScore] = useState(0)


  return (
    <div className="App">
      <div className="quiz-cnt">
        {startPage ? <StartQuiz addStartPage={addStartPage} /> : null}
        {startPage ? null :
          <Quiz
            score={score}
            addScore={addScore}
            currentQuiz={currentQuiz}
            addCurrentQuiz={addCurrentQuiz}
            questions={questions} />}
      </div>
    </div >
  );
}

export default App;
