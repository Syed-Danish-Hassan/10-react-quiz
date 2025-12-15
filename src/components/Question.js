import Option from "./Option";
function Question({ dispatch, question }) {
  console.log(question);
  return (
    <div>
      <h4>{question.question}</h4>
      <Option question={question}></Option>
    </div>
  );
}

export default Question;
