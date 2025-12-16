import Option from "./Option";
function Question({ dispatch, question, answer }) {
  // if (!question) {
  //   dispatch({ type: "quizEnd" });
  //   return null;
  // }
  // console.log(question);
  return (
    <div>
      <h4>{question?.question}</h4>
      <Option question={question} dispatch={dispatch} answer={answer}></Option>
    </div>
  );
}

export default Question;
