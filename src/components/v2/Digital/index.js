import React, { useEffect } from "react";
import Display from "./Display";
import "./style.css";

/**
 * "Every second, update the timer state, and then use the timer state to update the display."
 *
 * The first thing we do is set up a timer state, and a function to update it
 * @returns A clock that updates every second.
 */
function Digital() {
  const timer = React.useRef(0);
  const hours = React.useRef(0);
  const minutes = React.useRef(0);
  const seconds = React.useRef(0);
  useEffect(() => {
    const interval = setInterval(() => {
      timer.current++;
      hours.current.setTimer(Math.floor(timer.current / 3600));
      minutes.current.setTimer(Math.floor(timer.current / 60));
      seconds.current.setTimer(timer.current);
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
      <Display ref={hours} className={"hours"} />
      <div className="separator"></div>
      <Display ref={minutes} className={"minutes"} />
      <div className="separator"></div>
      <Display ref={seconds} className={"seconds"} />
    </div>
  );
}

export default Digital;
