function StartScreen({ numOfQuestions, dispatch }) {
  return (
    <div>
      <h2>Welcome to The React Quiz!</h2>
      <h3>{numOfQuestions} questions to test your React knowledge</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's Start
      </button>
    </div>
  );
}

export default StartScreen;
