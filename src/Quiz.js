import React, { useState } from 'react';

const Quiz = ({ currentQuiz, addCurrentQuiz, questions, score, addScore }) => {

    const [showScore, addShowScore] = useState(false)
    const [showReset, addShowReset] = useState(false)

    const handleNextQuestion = (isCorrect) => {

        if (isCorrect) {
            const result = score + 1
            addScore(result)
        }

        const nextQuestion = currentQuiz + 1
        if (nextQuestion < questions.length) {
            addCurrentQuiz(nextQuestion)
        } else {
            addShowScore(true)
            addShowReset(true)
        }
    }

    const handleResetQuiz = () => {
        addShowScore(false)
        addScore(0)
        addCurrentQuiz(0)
        addShowReset(false)
    }


    return (
        <div className="quiz">
            <div className="questions">
                <h3>{`Question ${currentQuiz + 1 + `/4`}`}</h3>
                <br />
                {showScore ? `Your Score is ${score} out of 4` : questions[currentQuiz].questionText}
            </div>
            <div className="answers">
                {questions[currentQuiz].answerOptions.map(option => (
                    <button disabled={showScore ? true : false} key={option.answerText} onClick={() => handleNextQuestion(option.isCorrect)} className="ans-btn">{option.answerText}</button>
                ))}
                <br />
                {showReset ? <button className="reset-btn" onClick={handleResetQuiz}>Reset</button> : null}
            </div>
        </div>
    );
}

export default Quiz;