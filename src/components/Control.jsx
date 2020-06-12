import React from "react";
import { useDispatch, useSelector } from "react-redux";

let interval;

function Control(props) {
  const distpatch = useDispatch();
  console.log("interval", interval);
  const { run, second } = useSelector((state) => ({
    run: state.run,
    second: state.second,
  }));

  const onClickStart = () => {
    if (run) return;

    if (second <= 0) {
      return distpatch({ type: "RESET" });
    }

    distpatch({
      type: "START",
    });
    if (!interval) {
      interval = setInterval(() => {
        distpatch({ type: "DECREASE_SECOND" });
      }, 1000);
    }
  };

  const onClickStop = () => {
    if (!run) return;
    clearInterval(interval);
    interval = null;
    distpatch({ type: "STOP" });
  };

  React.useEffect(() => {
    if (second === 0) {
      onClickStop();
    }
  }, [second]);

  return (
    <div className="buttons">
      <input
        onClick={onClickStart}
        type="button"
        id="start"
        disabled={run}
        defaultValue={second <= 0 ? "Reset" : "Start"}
      />
      <input
        onClick={onClickStop}
        disabled={!run}
        type="button"
        id="stop"
        defaultValue="Stop"
      />
    </div>
  );
}

export default Control;
