import { useReducer, useState } from "react";

const initialState = { count: 0, step: 1 };
function reducer(state, action) {
  console.log(state, action);

  // if (action.type === "increment") return { ...state, count: state.count + 1 };
  // if (action.type === "decrement") return { ...state, count: state.count - 1 };
  // if (action.type === "setCount") return { ...state, count: action.payload };
  // if (action.type === "setStep") return { ...state, step: action.payload };
  // return state;<

  switch (action.type) {
    case "decrement":
      return { ...state, count: state.count - state.step };
    case "increment":
      return { ...state, count: state.count + state.step };
    case "setCount":
      return { ...state, count: action.payload };
    case "setStep":
      return { ...state, step: action.payload };
    case "reset":
      return initialState;
    default:
      throw new Error("Unknown Action");
  }
}

function DateCounter() {
  //const [count, setCount] = useState(0);
  //const [step, setStep] = useState(1);

  const [state, dispatch] = useReducer(reducer, initialState);
  const { count, step } = state;
  // This mutates the date object.
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  const dec = function () {
    dispatch({ type: "decrement" });
    // setCount((count) => count - 1);
    // setCount((count) => count - step);
  };

  const inc = function () {
    dispatch({ type: "increment" });
    // setCount((count) => count + 1);
    //setCount((count) => count + step);
  };

  const defineCount = function (e) {
    dispatch({ type: "setCount", payload: Number(e.target.value) });
    //setCount(Number(e.target.value));
  };

  const defineStep = function (e) {
    dispatch({ type: "setStep", payload: Number(e.target.value) });

    // setStep(Number(e.target.value));
  };

  const reset = function () {
    // dispatch({ type: "setCount", payload: 0 });
    // dispatch({ type: "setStep", payload: 1 });
    dispatch({ type: "reset" });
    //setCount(0);
    //setStep(1);
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
