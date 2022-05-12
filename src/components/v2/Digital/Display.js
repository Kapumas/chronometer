import React from "react";
import Segment from "./Segment";

/**
 * It takes a number and returns a div with 7 divs inside of it
 * @returns A div with a class of digit and a class of className.
 */
function Display({ className, timer }, ref) {
  console.log("RENDERRR V2");

  const segment1 = React.useRef();
  const segment2 = React.useRef();
  const setTimer = React.useCallback((timer) => {
    segment1.current.setNumber(Math.floor((timer % 60) / 10));
    segment2.current.setNumber(timer % 10);
  }, []);
  React.useImperativeHandle(ref, () => ({ setTimer }));
  return (
    <>
      <Segment ref={segment1} className={className} />
      <Segment ref={segment2} className={className} />
    </>
  );
}

export default React.forwardRef(Display);
