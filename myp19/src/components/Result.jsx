import React from "react";

function Result({ score, total }) {
  return (
    <div className="result-box">
      <h2>Quiz Completed!</h2>
      <p>
        Your Score: {score} / {total}
      </p>
      <p>{score >= 7 ? "Great Job!" : "Keep Practicing!"}</p>
    </div>
  );
}

export default Result;
