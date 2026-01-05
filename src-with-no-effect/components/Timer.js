import { useEffect } from "react";

function Timer({ dispatch, secondsRemaining }) {
  const mins = Math.floor(secondsRemaining / 60);
  const secs = secondsRemaining % 60;
  const formattedSecs = secs < 10 ? `0${secs}` : secs;
  const formattedMins = mins < 10 ? `0${mins}` : mins;
  useEffect(() => {
    const timerId = setInterval(() => {
      //console.log("Timer tick");
      dispatch({ type: "tick" });
    }, 1000);
    return () => clearInterval(timerId);
  }, [dispatch]);
  return (
    <>
      <div className="timer">
        ⏱️ {formattedMins}:{formattedSecs}
      </div>
    </>
  );
}

export default Timer;
