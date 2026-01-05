import { createContext } from "react";
import { useContext, useReducer } from "react";

const initialState = {
  questions: [],
  //loading, error, ready, active,finished
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  highScore: 0,
  secondsRemaining: null,
  questionPointsObject: { numOfQuestions: 0, totalPoints: 0 },
};
const SECS_PER_QUESTION = 30;

const QuizContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    case "start": {
      console.log("in start");
      return {
        ...state,
        status: "active",
        secondsRemaining: state.questions.length * SECS_PER_QUESTION,
      };
    }
    case "newAnswer":
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points:
          state.points +
          (action.payload === question.correctOption ? question.points : 0),
      };
    case "nextQuestion":
      return { ...state, index: state.index + 1, answer: null };
    case "quizEnd":
      return {
        ...state,
        status: "finished",
        highScore:
          state.points > state.highScore ? state.points : state.highScore,
      };
    case "restartQuiz":
      return { ...initialState, questions: state.questions, status: "ready" };
    case "tick":
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status: state.secondsRemaining === 0 ? "finished" : state.status,
      };
    default:
      throw new Error("Unknown action type");
  }
}

function QuizProvider({ children }) {
  const [
    {
      questions,
      status,
      index,
      answer,
      points,
      highScore,
      secondsRemaining,
      questionPointsObject,
    },
    dispatch,
  ] = useReducer(reducer, initialState);
  questionPointsObject.numOfQuestions = questions.length;
  questionPointsObject.totalPoints = questions.reduce(
    (acc, question) => acc + question.points,
    0
  );
  return (
    <QuizContext.Provider
      value={{
        questions,
        //loading, error, ready, active,finished
        status,
        index,
        answer,
        points,
        highScore,
        secondsRemaining,
        questionPointsObject,
        dispatch,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

function useQuiz() {
  const context = useContext(QuizContext);
  if (context === undefined) {
    throw new Error("usequiz(QuizContext) must be used within a QuizProvider");
  }
  return context;
}

export { QuizProvider, useQuiz };
