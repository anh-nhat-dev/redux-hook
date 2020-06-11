import { createStore } from "redux";

const defaultState = {
  num: 0,
};

const reducers = (state = defaultState, action) => {
  switch (action.type) {
    case "ACTION":
      return { num: Math.ceil(Math.random() * 10) };
    default:
      return state;
  }
};

const store = createStore(reducers);

export default store;
