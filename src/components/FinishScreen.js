function FinishScreen({ points, totalPoints, highScore, dispatch }) {
  const percentage = Math.round((points / totalPoints) * 100);
  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong> out of{" "}
        <strong>{totalPoints}</strong> ({percentage}%)
      </p>
      <p className="highscore">
        {" "}
        ( Highscore: <strong>{highScore}</strong> points )
      </p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restartQuiz" })}
      >
        Restart Quiz
      </button>
    </>
  );
}

export default FinishScreen;
