import React from "react";
import { useSelector } from "react-redux";

function Clock(props) {
  const second = useSelector((state) => state.second);

  return (
    <>
      <p id="result">{second}</p>
      <p id="sec">sec</p>
    </>
  );
}

export default Clock;
