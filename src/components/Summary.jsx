import QuizComplete from "../assets/quiz-complete.png";
import QUESTION from "../questions";

export default function Summary({ userAnswers }) {
  const skipAnswers = userAnswers.filter((answer) => answer === null);
  const correctAnswers = userAnswers.filter(
    (answer, index) => answer === QUESTION[index].answers[0]
  );

  const skipAnswersShare = Math.round(
    (skipAnswers.length / userAnswers.length) * 100
  );

  const correctAnswersShare = Math.round(
    (correctAnswers.length / userAnswers.length) * 100
  );

  const incorrectAnswersShare = 100 - skipAnswersShare - correctAnswersShare;

  return (
    <div id="summary">
      <img src={QuizComplete} alt="Quiz Complete Image" />
      <h2>Quiz Complete</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skipAnswersShare}%</span>
          <span className="text">Skipped</span>
        </p>
        <p>
          <span className="number">{correctAnswersShare}%</span>
          <span className="text">Answer Correct</span>
        </p>
        <p>
          <span className="number">{incorrectAnswersShare}%</span>
          <span className="text">Answer Incorrect</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, index) => {
          let cssClass = "user-answer";

          if (answer === null) {
            cssClass += " skipped";
          } else if (answer === QUESTION[index].answers[0]) {
            cssClass += " correct";
          } else {
            cssClass += " incorrect";
          }

          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTION[index].text}</p>
              <p className={cssClass}>{answer ?? "Skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
