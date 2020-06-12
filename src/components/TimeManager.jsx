import React from "react";
import { useDispatch, useSelector } from "react-redux";

function TimeManager(props) {
  const distpatch = useDispatch();

  const { second, run } = useSelector((state) => ({
    second: state.second,
    run: state.run,
  }));

  const onClickIncrease = () => {
    if (run) return;
    if (second + 1 > 100) return alert("Maximum: 100");
    distpatch({ type: "INCREASE_SECOND" });
  };
  const onClickDecrease = () => {
    if (run) return;
    if (second - 1 < 10) return alert("Minimum: 10");
    distpatch({ type: "DECREASE_SECOND" });
  };

  return (
    <div id="pm">
      <input
        onClick={onClickIncrease}
        type="button"
        id="plus"
        defaultValue=""
      />
      <input
        onClick={onClickDecrease}
        type="button"
        id="minus"
        defaultValue=""
      />
    </div>
  );
}

export default TimeManager;
