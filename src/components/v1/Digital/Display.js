import React from "react";
import Segment from "./Segment";

/**
 * It takes a number and returns a div with 7 divs inside of it
 * @returns A div with a class of digit and a class of className.
 */
export default function Display({ className, timer }) {
  console.log("RENDERRR V1");

  return (
    <>
      <Segment className={className} number={Math.floor((timer % 60) / 10)} />
      <Segment className={className} number={timer % 10} />
    </>
  );
}
