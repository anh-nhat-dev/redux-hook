import { createStore } from "redux";

const defaultState = {
  second: 10,
  run: false,
};

const reducers = (state = defaultState, action) => {
  switch (action.type) {
    case "INCREASE_SECOND":
      return { ...state, second: state.second + 1 };
    case "START":
      return { ...state, second: state.second - 1, run: true };
    case "STOP":
      return { ...state, run: false };
    case "RESET":
      return defaultState;
    case "DECREASE_SECOND":
      return { ...state, second: state.second - 1 };
    default:
      return state;
  }
};

const store = createStore(reducers);

export default store;
