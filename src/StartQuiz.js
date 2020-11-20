import React from 'react';

const StartQuiz = ({ addStartPage }) => {

    const handleStartQuiz = () => {
        addStartPage(false)
    }

    return (
        <div className="startquiz">
            <h3>Start the quiz</h3>
            <button onClick={handleStartQuiz}>Start</button>
        </div>
    );
}

export default StartQuiz;