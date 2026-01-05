import { useQuiz } from "../contexts/QuizContext";

function Progress() {
  const { index, questionPointsObject, points, answer } = useQuiz();
  return (
    <header className="progress">
      <progress
        value={index + Number(answer !== null)}
        max={questionPointsObject.numOfQuestions}
      />

      <p>
        Question <strong>{index + Number(answer !== null)}</strong> /{" "}
        <strong>{questionPointsObject.numOfQuestions}</strong>
      </p>
      <p>
        <strong>{points}</strong> /{" "}
        <strong>{questionPointsObject.totalPoints}</strong> points
      </p>
    </header>
  );
}

export default Progress;
