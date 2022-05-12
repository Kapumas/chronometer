import React, { useEffect } from "react";
import Display from "./Display";
import Segment from "./Segment";
import "./style.css";

/**
 * "Every second, update the timer state, and then use the timer state to update the display."
 *
 * The first thing we do is set up a timer state, and a function to update it
 * @returns A clock that updates every second.
 */
function Digital() {
  const [timer, setTimer] = React.useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  // useEffect(() => {
  //   console.log(timer);
  // }, [timer]);
  return (
    <div className="clock">
      <Display className={"hours"} timer={Math.floor(timer / 3600)} />
      <div className="separator"></div>
      <Display className={"minutes"} timer={Math.floor(timer / 60)} />
      <div className="separator"></div>
      <Display className={"seconds"} timer={timer} />
    </div>
  );
}

export default Digital;
