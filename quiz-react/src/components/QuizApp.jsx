import React, { useState } from "react";

// Quiz data
const quizData = [
  {
    question: "Which of the following is a client site language?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "Javascript",
    correct: "d",
  },
  {
    question: "JavaScript is an _____ language?",
    a: "Object-Oriented",
    b: "Object-Based",
    c: "Procedural",
    d: "None of the above",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "None of the above",
    correct: "b",
  },
  {
    question: "Which of these cannot be used for a variable name in Java?",
    a: "identifier and keyword",
    b: "identifier",
    c: "keyword",
    d: "none of the above",
    correct: "c",
  },
  {
    question: "Which of the following methods can be used to display data in some form using JavaScript?",
    a: "document.write()",
    b: "console.log()",
    c: "window.alert()",
    d: "All of the above",
    correct: "d",
  },
];

function QuizApp() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const handleAnswerChange = (e) => {
    setSelectedAnswer(e.target.value);
  };

  const question = quizData[currentQuestionIndex];

  const quizList = Object.keys(question)
    .filter((key) => key !== "question" && key !== "correct")
    .map((option) => (
      <li key={option}>
        <label>
          <input
            type="radio"
            name="quiz"
            value={option}
            checked={selectedAnswer === option}
            onChange={handleAnswerChange}
          />
          {question[option]}
        </label>
      </li>
    ));

  const handleNextQuestion = () => {
    // Check if selected answer is correct
    if (selectedAnswer === question.correct) {
      setScore((prevScore) => prevScore + 1);
    }

    // Move to the next question
    const nextQuestionIndex = currentQuestionIndex + 1;

    // Check if there are more questions
    if (nextQuestionIndex < quizData.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
      setSelectedAnswer(""); // Reset the selected answer
    } else {
      // Set quiz finished state
      setQuizFinished(true);
    }
  };

  return (
    <div className="container">
      <h1>Quiz App</h1>
      <div>
        {!quizFinished ? (
          <>
            <h2>{question.question}</h2>
            <ul>{quizList}</ul>
            <button onClick={handleNextQuestion}>Next Question</button>
          </>
        ) : (
          <div>
            <h2 className="score">Your Final Score: {score}/{quizData.length}</h2>
            <button onClick={() => {
              // Reset the quiz
              setCurrentQuestionIndex(0);
              setScore(0);
              setSelectedAnswer("");
              setQuizFinished(false); // Reset finished state
            }}>Restart Quiz</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default QuizApp;
