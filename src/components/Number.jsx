import React from "react";
import { useSelector } from "react-redux";

function Number(props) {
  const number = useSelector(function (state) {
    return state.num;
  });

  return (
    <p>
      <b>{number}</b>
    </p>
  );
}

export default Number;
