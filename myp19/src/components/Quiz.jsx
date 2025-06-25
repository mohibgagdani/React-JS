import React, { useState } from "react";
import Question from "./Question";
import Result from "./Result";

const questions = [
  {
    question: "What is JSX?",
    options: [
      "A JavaScript syntax extension",
      "A data structure",
      "A JSON format",
      "A server-side language",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which hook is used to manage state in functional components?",
    options: ["useContext", "useEffect", "useReducer", "useState"],
    correctAnswer: 3,
  },
  {
    question: "What does Virtual DOM do?",
    options: [
      "Directly updates the browser DOM",
      "Improves performance by re-rendering everything",
      "Minimizes DOM manipulation",
      "Connects React with databases",
    ],
    correctAnswer: 2,
  },
  {
    question: "Which method is used to pass data to child components?",
    options: ["State", "Props", "setState", "render"],
    correctAnswer: 1,
  },
  {
    question: "What is the default port for React development server?",
    options: ["3000", "8080", "5000", "4000"],
    correctAnswer: 0,
  },
  {
    question: "What is useEffect used for?",
    options: [
      "To declare variables",
      "To fetch data and side effects",
      "To update state",
      "To change styling",
    ],
    correctAnswer: 1,
  },
  {
    question: "Which company developed React?",
    options: ["Google", "Facebook", "Twitter", "Microsoft"],
    correctAnswer: 1,
  },
  {
    question: "React uses _____ to update the UI efficiently.",
    options: ["Real DOM", "Shadow DOM", "Virtual DOM", "None"],
    correctAnswer: 2,
  },
  {
    question: "Which keyword creates a React component?",
    options: ["function", "define", "render", "component"],
    correctAnswer: 0,
  },
  {
    question: "Which of the following is not a React hook?",
    options: ["useMemo", "useFetch", "useRef", "useLayoutEffect"],
    correctAnswer: 1,
  },
];

function Quiz() {
  const [currentQ, setCurrentQ] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState(Array(questions.length).fill(null));
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (answerIndex) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[currentQ] = answerIndex;
    setSelectedAnswers(updatedAnswers);
  };

  const nextQuestion = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      setShowScore(true);
    }
  };

  const prevQuestion = () => {
    if (currentQ > 0) {
      setCurrentQ(currentQ - 1);
    }
  };

  const score = selectedAnswers.reduce((total, answer, index) => {
    return answer === questions[index].correctAnswer ? total + 1 : total;
  }, 0);

  return (
    <div className="quiz-box">
      {showScore ? (
        <Result score={score} total={questions.length} />
      ) : (
        <>
          <Question
            data={questions[currentQ]}
            index={currentQ}
            selected={selectedAnswers[currentQ]}
            handleAnswer={handleAnswer}
          />
          <div className="nav-buttons">
            <button onClick={prevQuestion} disabled={currentQ === 0}>
              Previous
            </button>
            <button onClick={nextQuestion}>
              {currentQ === questions.length - 1 ? "Finish" : "Next"}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Quiz;
