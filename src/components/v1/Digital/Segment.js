import React from "react";

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
 * It takes a number and returns a div with 7 divs inside of it
 * @returns A div with a class of digit and a class of className.
 */
export default function Segment({ className, number = 0 }) {
  return (
    <div className={`digit ${className}`}>
      {Array.apply(null, { length: 7 }).map((_, index) => {
        const isOn =
          !!numbers[number] && numbers[number].indexOf(index) !== -1
            ? "on"
            : "";
        return (
          <div key={"segment-" + index} className={`segment ${isOn}`}></div>
        );
      })}
    </div>
  );
}
