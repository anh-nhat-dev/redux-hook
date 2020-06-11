import React from "react";
import { useDispatch } from "react-redux";

function Button(props) {
  const dispatch = useDispatch();

  const onClickButton = (e) => {
    dispatch({ type: "ACTION" });
  };

  return <button onClick={onClickButton}>Click</button>;
}

export default Button;
