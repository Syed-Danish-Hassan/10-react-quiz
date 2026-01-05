import { useQuiz } from "../contexts/QuizContext";
import Option from "./Option";
function Question() {
  const { questions, index } = useQuiz();
  // if (!question) {
  //   dispatch({ type: "quizEnd" });
  //   return null;
  // }
  // console.log(question);
  const question = questions[index];
  return (
    <div>
      <h4>{question?.question}</h4>
      <Option
      // question={question} dispatch={dispatch} answer={answer}
      ></Option>
    </div>
  );
}

export default Question;
