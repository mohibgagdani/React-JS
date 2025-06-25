import React from "react";

function Question({ data, index, selected, handleAnswer }) {
  return (
    <div className="question-box">
      <h2>Question {index + 1}</h2>
      <p>{data.question}</p>
      <ul>
        {data.options.map((option, i) => (
          <li key={i}>
            <button
              className={`option-btn ${selected === i ? "selected" : ""}`}
              onClick={() => handleAnswer(i)}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Question;
