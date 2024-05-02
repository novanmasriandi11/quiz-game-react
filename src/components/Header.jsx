import QuizLogo from "../assets/quiz-logo.png";

export default function Header() {
  return (
    <header>
      <img
        src={QuizLogo}
        alt="Quiz Logo"
        style={{ width: "107px", height: "auto" }}
      />
      {/* <h1>Quiz Game</h1> */}
    </header>
  );
}
