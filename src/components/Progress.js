function Progress({ index, numOfQuestions, points, totalPoints, answer }) {
  return (
    <header className="progress">
      <progress value={index + Number(answer !== null)} max={numOfQuestions} />

      <p>
        Question <strong>{index + Number(answer !== null)}</strong> /{" "}
        <strong>{numOfQuestions}</strong>
      </p>
      <p>
        <strong>{points}</strong> / <strong>{totalPoints}</strong> points
      </p>
    </header>
  );
}

export default Progress;
