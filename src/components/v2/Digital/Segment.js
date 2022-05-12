import React, { useRef } from "react";

/* An array of arrays. Each array represents a number. The numbers in the array represent the segments
that are on. */
const numbers = [
  [0, 1, 2, 3, 4, 5],
  [1, 2],
  [0, 1, 3, 4, 6],
  [0, 1, 2, 3, 6],
  [1, 2, 5, 6],
  [0, 2, 3, 5, 6],
  [0, 2, 3, 4, 5, 6],
  [0, 1, 2],
  [0, 1, 2, 3, 4, 5, 6],
  [0, 1, 2, 3, 5, 6],
];


/**
 * It takes a className prop and a ref prop, and returns a div with 7 divs inside of it, each of which
 * has a ref set to a refs array
 * @param ref - This is a reference to the DOM element.
 * @returns A React component that renders a div with 7 divs inside of it.
 */
function Segment({ className }, ref) {
  const references = React.useRef([]).current;
  const setNumber = React.useCallback((number) => {
    for (let index = 0; index < 7; index++) {
      !!numbers[number] && numbers[number].indexOf(index) !== -1
        ? references[index].classList.add("on")
        : references[index].classList.remove("on");
    }
  }, []);
  React.useImperativeHandle(ref, () => ({ setNumber }));
  return (
    <div className={`digit ${className}`}>
      {Array.apply(null, { length: 7 }).map((_, index) => {
        return (
          <div
            ref={(ref) => {
              references[index] = ref;
            }}
            key={"segment-" + index}
            className={`segment`}
          />
        );
      })}
    </div>
  );
}

export default React.forwardRef(Segment);
