import { useRef } from "react";

export default function Answers({
  answers,
  selectedAnswer,
  answeredState,
  onSelect,
}) {
  const shuffleAnswers = useRef();

  if (!shuffleAnswers.current) {
    shuffleAnswers.current = [...answers];
    shuffleAnswers.current.sort(() => Math.random() - 0.5);
  }

  return (
    <ul id="answers">
      {shuffleAnswers.current.map((answer, index) => {
        const isSelected = selectedAnswer === answer;
        let cssClass = "";

        if (answeredState === "answered" && isSelected) {
          cssClass = "selected";
        }

        if (
          (answeredState === "correct" || answeredState === "incorrect") &&
          isSelected
        ) {
          cssClass = answeredState;
        }

        return (
          <li key={index} className="answer">
            <button
              onClick={() => onSelect(answer)}
              className={cssClass}
              disabled={answeredState !== ""}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
