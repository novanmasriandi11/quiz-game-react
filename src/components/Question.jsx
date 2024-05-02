import { useState } from "react";
import Answers from "./Answers";
import QuestionTimer from "./QuestionTimer";
import QUESTION from "../questions";

export default function Question({ index, onSelectAnswer, onSkipAnswer }) {
  const [answer, setAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });

  let timer = 10000;

  if (answer.selectedAnswer) {
    timer = 1000;
  }

  if (answer.isCorrect !== null) {
    timer = 2000;
  }

  function handleSelectAnswer(answer) {
    setAnswer({
      selectedAnswer: answer,
      isCorrect: null,
    });

    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: QUESTION[index].answers[0] === answer,
      });

      setTimeout(() => {
        onSelectAnswer(answer);
      }, 2000);
    }, 1000);
  }

  let answeredState = "";

  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answeredState = answer.isCorrect ? "correct" : "incorrect";
  } else if (answer.selectedAnswer) {
    answeredState = "answered";
  }

  return (
    <div id="question">
      <QuestionTimer
        key={timer}
        timeout={timer}
        onTimeout={answer.selectedAnswer === "" ? onSkipAnswer : null}
        mode={answeredState}
      />
      <h2>{QUESTION[index].text}</h2>
      <Answers
        answers={QUESTION[index].answers}
        selectedAnswer={answer.selectedAnswer}
        answeredState={answeredState}
        onSelect={handleSelectAnswer}
      />
    </div>
  );
}
