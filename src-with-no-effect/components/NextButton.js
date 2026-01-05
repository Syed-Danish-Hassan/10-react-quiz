function NextButton({ dispatch, answer, numOfQuestions, index }) {
  if (answer === null) {
    return null;
  }
  if (index < numOfQuestions - 1)
    return (
      <div>
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: "nextQuestion" })}
        >
          Next
        </button>
      </div>
    );
  else
    return (
      <div>
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: "quizEnd" })}
        >
          Finish
        </button>
      </div>
    );
}

export default NextButton;
